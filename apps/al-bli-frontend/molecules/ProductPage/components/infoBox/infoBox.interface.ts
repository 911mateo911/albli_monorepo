import { ReactNode } from "react";

export interface InfoType {
  type: string;
  value: string;
}

export interface InfoBoxProps {
  icon: ReactNode;
  info: InfoType[];
  color?: string;
}
