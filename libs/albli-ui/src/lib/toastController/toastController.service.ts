export class ToastController {
  private static _lazy: ToastController;

  static get instance(): ToastController {
    if (!ToastController._lazy) {
      ToastController._lazy = new ToastController();
    }

    return ToastController._lazy;
  }
}

export const ToastControllerInstance = ToastController.instance;
