export default interface Price {
  type: string;
  amount: string;
  currency: Intl.NumberFormatOptions["currency"];
  note: string;
}