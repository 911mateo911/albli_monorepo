export type ToastType = 'success' | 'info' | 'warning' | 'error';

export interface ToastProps {
  type: ToastType;
  message: string;
  icon?: JSX.Element;
}
