export const Currencies = [
  { value: "USD", label: "$ Dollar", locale: "en-us" },
  { value: "EUR", label: "€ Euro", locale: "de-DE" },
  { value: "JPY", label: "¥ Yen", locale: "ja-Jp" },
  { value: "GBP", label: "£ Pound", locale: "en-GB" },
  { value: "INR", label: "₹ Rupee", locale: "en-in" },
];

export type Currency = (typeof Currencies)[0];
