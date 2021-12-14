export type SlideDrawerSlideFrom = 'left' | 'right' | 'top' | 'bottom'

export interface SlideDrawerProps {
    slideFrom: SlideDrawerSlideFrom;
    wrapperClassName?: string;
    open: boolean;
    onClose: () => void;
}
