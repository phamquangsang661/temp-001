import { useState } from "react";

export interface UsePopup {
  init?: boolean;
}
export function usePopup({ init = false }: UsePopup = { init: false }) {
  const [isOpen, setIsOpen] = useState(init);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  return { isOpen, open, close };
}
