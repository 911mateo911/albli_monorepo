import { ReactElement } from "react";

export interface ConfirmationDialogProps {
  declineButton?: boolean;
  acceptButton?: ReactElement;
  onAccept: () => void;
  onDecline: () => void;
}
