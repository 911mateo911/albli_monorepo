import { CurrencyType } from "@al-bli/al-bli-data-types";

export interface DiscountProps {
  newPrice: number;
  endDate: Date;
  currency: CurrencyType;
}
