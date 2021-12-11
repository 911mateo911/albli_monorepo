import { ReactElement } from 'react';

export interface NavbarProps {
    logo?: ReactElement
    title: string
    onMenuToggle?: () => void
    onSearchToggle?: () => void
}
