import { RefObject, useEffect, useRef } from 'react';

export const useClickOutside = <T extends HTMLElement>(handler: (event: Event) => void): RefObject<T> => {
  const ref: RefObject<T> = useRef<T>(null);

  useEffect(() => {
    const listener = (event: Event) => {
      const target = event.target as HTMLElement;

      if (!ref.current || ref.current.contains(target)) return;

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler]);

  return ref;
};
