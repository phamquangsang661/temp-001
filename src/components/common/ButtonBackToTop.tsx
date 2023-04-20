import { useEffect, useState } from "react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleScroll);
    return () => {
      window.removeEventListener("scroll", toggleScroll);
    };
  }, []);

  return (
    <button
      type="button"
      data-mdb-ripple="true"
      onClick={scrollToTop}
      data-mdb-ripple-color="light"
      className={`${
        isVisible ? "opacity-100 block" : "opacity-0 hidden"
      } fixed p-3 z-[100] bg-red-600 text-white text-xs leading-tight uppercase hover:bg-red-700 hover:shadow-lg  rounded-full focus:bg-red-700 focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-500 ease-in-out md:bottom-[70px] right-[55px] bottom-[100px] md:right-[175px]`}
      id="btn-back-to-top"
    >
      <svg
        focusable="false"
        data-prefix="fas"
        className="w-[32px] h-[32px]"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          className={`fill-error-light`}
          d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
        ></path>
      </svg>
    </button>
  );
}
