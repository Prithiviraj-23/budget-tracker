import { Currencies } from "./currencies";

export function DatetoUTCDate(date: Date) {
  return new Date(
    Date.UTC(
      date.getFullYear(), // Year
      date.getMonth(), // Month (0-indexed)
      date.getDate(), // Day of the month
      date.getHours(), // Hours
      date.getMinutes(), // Minutes
      date.getSeconds(), // Seconds
      date.getMilliseconds() // Milliseconds
    )
  );
}

export function GetFormatterForCurrency(currency: string) {
  const locale = Currencies.find((c) => c.value === currency)?.locale;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  });
}
