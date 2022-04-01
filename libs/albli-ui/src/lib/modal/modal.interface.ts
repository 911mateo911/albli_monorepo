import { MutableRefObject } from "react";

export interface ModalProps {
  open: boolean;
  wrapperClassName?: string;
  backDropClassName?: string;
  componentRef?: MutableRefObject<HTMLDivElement | null>;
  onBackDropClick?: () => void;
}
