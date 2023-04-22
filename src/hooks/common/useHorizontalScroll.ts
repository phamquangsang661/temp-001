import { useEffect, useRef, useState } from "react";
export interface useHorizontalScroll {
  offset?: number;
  isOffsetItem?: boolean;
  paddingItemOffset?: number;
  areaCheckOffset?: number;
  autoCenterItem?: boolean;
  autoFocusScroll?: boolean;
  isSmooth?: boolean;
}
export function useHorizontalScroll<
  T extends HTMLElement,
  Q extends HTMLElement = T
>(
  {
    offset = 0,
    isOffsetItem = false,
    paddingItemOffset = 0,
    areaCheckOffset = 20,
    autoCenterItem = false,
    autoFocusScroll = false,
    isSmooth = false,
  }: useHorizontalScroll = {
    offset: 0,
    isOffsetItem: false,
    paddingItemOffset: 0,
    areaCheckOffset: 20,
    autoCenterItem: false,
    autoFocusScroll: false,
    isSmooth: false,
  }
) {
  const elRef = useRef<T>(null);
  const prRef = useRef<Q>(null);
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    const handle = (e: any) => {
      const el = elRef.current as T;
      const pr = prRef.current as Q;
      let offsetParent = pr != null ? pr.offsetTop : el.offsetTop;
      if (
        Math.abs(offsetParent - document.documentElement.scrollTop) <
        areaCheckOffset
      ) {
        if (!isFocused) {
          el.focus();
          window.scrollTo({
            top: offsetParent,
            behavior: "smooth",
          });
          e.preventDefault();
          setIsFocused(true);
          return;
        }
        let backToPos = false;
        if (
          (Math.abs(el.scrollLeft - (el.scrollWidth - el.offsetWidth)) <= 5 &&
            e.deltaY > 0) ||
          (el.scrollLeft <= 0 && e.deltaY < 0)
        ) {
        } else {
          e.preventDefault();
          // Is in range but not hit the top
          if (!el.matches(":hover")) {
            let isInContainer =
              offsetParent - document.documentElement.scrollTop != 0;
            let isHitTopContainer =
              offsetParent - document.documentElement.scrollTop == 0;
            if (isInContainer) {
              window.scrollTo({
                top: offsetParent,
                behavior: "smooth",
              });
              return;
            }
            if (isHitTopContainer) {
              backToPos = true;
            }
          }
        }
        if (
          Math.abs(offsetParent - document.documentElement.scrollTop) <
            areaCheckOffset &&
          backToPos
        ) {
          if (!el.matches(":hover")) {
            let offsetItem = 0;
            if (isOffsetItem) {
              const child = el.children;
              if (child.length > 0) {
                let width = paddingItemOffset + child[0].clientWidth;
                offsetItem = e.deltaY > 0 ? width : -width;
              }
            }
            let value =
              el.scrollLeft +
              e.deltaY +
              (e.deltaY > 0 ? offset : -offset) +
              offsetItem;
            if (autoCenterItem) {
              let itemsCount = el.children.length;
              let widthPerItem = el.scrollWidth / itemsCount;
              let pos =
                e.deltaY > 0
                  ? Math.floor(value / widthPerItem)
                  : Math.ceil(value / widthPerItem);
              value = pos * widthPerItem;
            }
 
            el.scrollTo({
              left: value,
              behavior: isSmooth ? "smooth" : undefined,
            });
          }
        }
      } else {
        setIsFocused(false);
      }
    };
    const body = document.body;
    if (autoFocusScroll) {
      body.addEventListener("mousewheel", handle, { passive: false });
    }

    return () => {
      if (autoFocusScroll) {
        body.removeEventListener("mousewheel", handle);
      }
    };
  }, [isFocused]);
  useEffect(() => {
    const el = elRef.current as T;
    const pr = prRef.current as Q;
    if (el) {
      const onWheel = (e: any) => {
        if (e.deltaY == 0) return;
        let offsetItem = 0;
        let offsetParent = pr != null ? pr.offsetTop : el.offsetTop;
        if (isOffsetItem) {
          const child = el.children;
          if (child.length > 0) {
            let width = paddingItemOffset + child[0].clientWidth;
            offsetItem = e.deltaY > 0 ? width : -width;
          }
        }
        let backToPos = false;

        if (
          (Math.abs(el.scrollLeft - (el.scrollWidth - el.offsetWidth)) <= 5 &&
            e.deltaY > 0) ||
          (el.scrollLeft <= 0 && e.deltaY < 0)
        ) {
          // Not stop, scroll pass
        } else {
          // Stop body scroll
          const body = document.body;
          if (body.style.position != "fixed") e.preventDefault();

          let isInContainer =
            offsetParent - document.documentElement.scrollTop != 0;
          let isHitTopContainer =
            offsetParent - document.documentElement.scrollTop == 0;
          // Is in range but not hit the top
          if (isInContainer) {
            window.scrollTo({
              top: offsetParent,
              behavior: "smooth",
            });
            return;
          }
          if (isHitTopContainer) {
            backToPos = true;
          }
        }

        let value =
          el.scrollLeft +
          e.deltaY +
          (e.deltaY > 0 ? offset : -offset) +
          offsetItem;
        if (autoCenterItem) {
          let itemsCount = el.children.length;
          let widthPerItem = el.scrollWidth / itemsCount;
          let pos =
            e.deltaY > 0
              ? Math.floor(value / widthPerItem)
              : Math.ceil(value / widthPerItem);
          value = pos * widthPerItem;
        }

        if (
          Math.abs(offsetParent - document.documentElement.scrollTop) <
            areaCheckOffset &&
          backToPos
        ) {
          el.scrollTo({
            left: value,
            behavior: isSmooth ? "smooth" : undefined,
          });
        }
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return { elRef, prRef };
}
