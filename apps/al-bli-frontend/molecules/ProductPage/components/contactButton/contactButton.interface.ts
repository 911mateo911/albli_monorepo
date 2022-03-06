import { ReactNode } from "react";

export interface ContactButtonProps {
  mainIcon: ReactNode;
  contact: string;
  secondaryIcons?: ReactNode[];
}
