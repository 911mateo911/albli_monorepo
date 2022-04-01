import { ReactElement } from "react";

export interface ConfirmationDialogProps {
  declineButton?: boolean;
  title: string;
  content?: string;
  acceptButton?: ReactElement;
  icon?: ReactElement;
  onAccept: () => void;
  onDecline?: () => void;
}
