import { useEffect } from "react";

export default function useHideOverflow(modalIsOpen: boolean) {
  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalIsOpen]);
}
