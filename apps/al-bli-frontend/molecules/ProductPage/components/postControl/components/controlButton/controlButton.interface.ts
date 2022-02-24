import { ReactElement } from "react";

export interface ControlButtonProps {
    icon: ReactElement;
    className?: string;
    name?: string;
    onClick?: () => void;
}
