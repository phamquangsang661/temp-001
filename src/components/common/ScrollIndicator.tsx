import { ReactNode, useEffect, useState } from "react";

export interface ScrollIndicator {
  className?: string;
}
export function ScrollIndicator({ className }: ScrollIndicator) {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    //
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:fixed z-[999] top-[100px] left-[18px] w-[10px] h-[160px] rounded-full ${className} bg-[#C1121F4D] bg-opacity-30 overflow-hidden`}
    >
        <div className={`process w-full rounded-full bg-primary-main`} style={{ height: `${scrollTop}%` }}></div>
    </div>
  );
}
