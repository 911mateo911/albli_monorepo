import { FC, useEffect } from 'react';
import classNames from 'classnames';
import { SlideDrawerProps, SlideDrawerSlideFrom } from './slideDrawer.interface';
import styles from './slideDrawer.module.scss';
import { useClickOutside } from '@hooks';

const getCorrespondingClassesForSlideFromProp = (slideFrom: SlideDrawerSlideFrom, drawerOpened: boolean) => {
    const classes = {
        left: {
            closed: styles['drawer-wrapper_left'],
            opened: styles['drawer-wrapper_left_open']
        },
        right: {
            closed: styles['drawer-wrapper_right'],
            opened: styles['drawer-wrapper_right_open']
        },
        top: {
            closed: styles['drawer-wrapper_top'],
            opened: styles['drawer-wrapper_top_open']
        },
        bottom: {
            closed: styles['drawer-wrapper_bottom'],
            opened: styles['drawer-wrapper_bottom_open']
        }
    }

    const { closed, opened } = classes[slideFrom];

    return drawerOpened ? opened : closed;
}

export const SlideDrawer: FC<SlideDrawerProps> = ({
    wrapperClassName,
    slideFrom,
    open,
    onClose,
    children
}) => {
    const wrapperRef = useClickOutside<HTMLDivElement>(onClose);

    useEffect(() => {
        if (!document) return;

        if (!open) document.body.classList.remove('body-scroll-lock');
        else document.body.classList.add('body-scroll-lock');
    }, [open])

    return (
        <div
            ref={wrapperRef}
            className={classNames(
                wrapperClassName,
                styles['drawer-wrapper_closed'],
                getCorrespondingClassesForSlideFromProp(slideFrom, open),
                {
                    [styles['drawer-wrapper']]: open
                }
            )} >
            {children}
        </div>
    )
}
