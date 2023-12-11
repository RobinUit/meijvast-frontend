import Price from "app/models/Price";

interface PriceProps {
    price: Price;
}

export default function CurrencyFormat({price}: PriceProps) {
  const { amount, currency, note } = price;

  // Convert amount to full number from cents
  const amountInFullNumber = +amount / 100;

  return (
    <>
      {amountInFullNumber.toLocaleString("nl-NL", {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
      })}
      {",- "}
      {note}
    </>
  );
}
