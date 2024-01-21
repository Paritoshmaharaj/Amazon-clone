import React from "react";

interface Props {
  amount: number;
}

const FormattedPrice = ({ amount }: Props) => {
  // Convert amount from USD to INR and round to the nearest integer
  const convertedAmount = Math.round(amount * 75);

  // Format the converted amount as currency
  const formattedAmount = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(convertedAmount);

  return <span>{formattedAmount}</span>;
};

export default FormattedPrice;
