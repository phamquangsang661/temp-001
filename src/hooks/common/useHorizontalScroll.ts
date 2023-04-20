import { useEffect, useRef } from "react";
export interface useHorizontalScroll {
  offset?: number;
  isOffsetItem?: boolean;
  paddingItemOffset?: number;
  areaCheckOffset?: number;
  autoCenterItem?: boolean;
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
  }: useHorizontalScroll = {
    offset: 0,
    isOffsetItem: false,
    paddingItemOffset: 0,
    areaCheckOffset: 20,
    autoCenterItem: false,
  }
) {
  const elRef = useRef<T>(null);
  const prRef = useRef<Q>(null);

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

          if (
            Math.abs(offsetParent - document.documentElement.scrollTop) <=
            areaCheckOffset
          ) {
            window.scrollTo({
              top: offsetParent,
              behavior: "smooth",
            });
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
          let pos =  e.deltaY>0?Math.floor(value / widthPerItem):Math.ceil(value / widthPerItem);
          value = pos * widthPerItem;
 
        }

        if (
          Math.abs(offsetParent - document.documentElement.scrollTop) <
            areaCheckOffset &&
          backToPos
        ) {
          el.scrollTo({
            left: value,
            behavior: "smooth",
          });
        }
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return { elRef, prRef };
}
