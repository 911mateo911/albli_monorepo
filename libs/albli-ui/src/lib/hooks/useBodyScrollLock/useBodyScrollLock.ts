import { useEffect } from "react";

export const useBodyScrollLock = (shouldBlock: boolean, onBlockCallback?: () => void): void => {
  useEffect(() => {
    if (!document) return;

    if (!shouldBlock) document.body.classList.remove('body-scroll-lock');
    else {
      document.body.classList.add('body-scroll-lock');
      onBlockCallback && onBlockCallback();
    }
  }, [onBlockCallback, shouldBlock]);
}
