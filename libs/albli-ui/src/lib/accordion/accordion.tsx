import classNames from 'classnames';
import { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import styles from './Accordion.module.scss';
import { AccordionProps } from './accordion.interface';

export const Accordion: FC<AccordionProps> = ({
  open,
  transition = false,
  offsetTop = 0,
  childWrapperClassName,
  rootWrapperClassName,
  children
}) => {
  // used to update the refs to get properties on initial render
  const [refs, attachRef] = useState([]);
  // root wrapper styles
  const [wrapperStyles, setWrapperStyles] = useState<CSSProperties>({ height: 0 });
  // child wrapper styles
  const [childStyles, setChildStyles] = useState<CSSProperties>({ visibility: 'hidden', zIndex: -1 });

  const rootWrapperRef = useRef<HTMLDivElement>(null);
  const childWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // force get refs, its going to run max only one time
    if (!rootWrapperRef.current || !childWrapperRef.current) {
      attachRef([]);
      return;
    }

    // when browser is ready open/close the accordion
    requestAnimationFrame(() => {
      if (!childWrapperRef.current) return;

      if (open) {
        setWrapperStyles({ height: `${childWrapperRef.current.offsetHeight + offsetTop}px` });
        setChildStyles({ visibility: 'visible', zIndex: 'auto' });
      } else {
        setWrapperStyles({ height: 0 });
        setChildStyles({ visibility: 'hidden', zIndex: -1 });
      }
    })
  }, [refs, open, offsetTop]);

  return (
    <div
      ref={rootWrapperRef}
      style={wrapperStyles}
      className={classNames(
        styles.root_wrapper,
        rootWrapperClassName,
        (!transition) && styles.no_transition
      )}
    >
      <div
        ref={childWrapperRef}
        style={childStyles}
        className={classNames(
          styles.child_wrapper,
          childWrapperClassName
        )} >
        {children}
      </div>
    </div>
  );
};
