// generate  array of integer from n to m
export function rangeFrom(n: number, m: number): number[] {
  return Array.from(Array(m - n + 1).keys()).map((i) => i + n);
}

export const formatCurrency = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "HKD",
});
