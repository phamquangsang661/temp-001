import { useLayoutEffect } from "react";
import { usePopup } from "./usePopup";

export function useFixedPopup() {
  const { isOpen, open, close } = usePopup();
  const showDialog = () => {
    open();
    const scrollY =
      document.documentElement.style.getPropertyValue("--scroll-y");
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}`;
  };
  const closeDialog = () => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    (window as any).scrollTo({
      top: parseInt(scrollY || "0") * -1,
      behavior: "instant",
    });
    close();
  };
  useLayoutEffect(() => {
    window.addEventListener("scroll", () => {
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${window.scrollY}px`
      );
    });
  }, []);
  return { isOpen, open: showDialog, close: closeDialog };
}
