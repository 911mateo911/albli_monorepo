import { PreferredContactType, FormSteps } from "../publishPage.interface";

export const preferredContactsInputs: PreferredContactType[] = ['Telefon/Celular', 'Whatsapp', 'Email'];
export const formStepElements: FormSteps[] = ['Fill Form', 'Verify and publish', 'Share'];

export const emailValidatorRGX = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
export const mobileNumberRGX = /^(?:[+\d].*\d|\d)$/;
export const fullNameRGX = /^[a-z '-]+$/i;
export const passwordRGX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/;
