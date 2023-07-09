"use client";

import { useEffect, useState } from "react";

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

interface CurrencyProps {
  value: string | number;
}

const CurrencySkeleton: React.FC = () => {
  return <div className="h-6 w-16 bg-gray-200 animate-pulse rounded-md" />;
};

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <CurrencySkeleton />;
  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;
