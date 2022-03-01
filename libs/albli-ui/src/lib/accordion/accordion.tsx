import classNames from 'classnames';
import { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import styles from './Accordion.module.scss';
import { AccordionProps } from './accordion.interface';

export const Accordion: FC<AccordionProps> = ({
  open,
  transition = false,
  children
}) => {
  const [refs, attachRef] = useState([]);
  const [wrapperStyles, setWrapperStyles] = useState<CSSProperties>({ height: 0 });
  const [childStyles, setChildStyles] = useState<CSSProperties>({ visibility: 'hidden', zIndex: -1 })
  const rootWrapperRef = useRef<HTMLDivElement>(null);
  const childWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootWrapperRef.current || !childWrapperRef.current) {
      attachRef([]);
      return;
    }

    if (open) {
      setWrapperStyles({ height: `${childWrapperRef.current.offsetHeight}px` });
      setChildStyles({ visibility: 'visible', zIndex: 'auto' })
    } else {
      setWrapperStyles({ height: 0 });
      setChildStyles({ visibility: 'hidden', zIndex: -1 });
    }
  }, [refs, open]);

  return (
    <div
      ref={rootWrapperRef}
      style={wrapperStyles}
      className={classNames(styles.root_wrapper, (!transition) && styles.no_transition)} >
      <div
        ref={childWrapperRef}
        style={childStyles}
        className={styles.child_wrapper} >
        {children}
      </div>
    </div>
  );
};
