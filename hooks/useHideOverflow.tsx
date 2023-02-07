import { useEffect } from "react";

export default function useHideOverflow(modalIsOpen: boolean) {
  useEffect(() => {
    if (modalIsOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
    // clean up function that will run when the component unmounts
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [modalIsOpen]);
}
