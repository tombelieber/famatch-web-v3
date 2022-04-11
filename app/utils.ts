// generate  array of integer from n to m
export function rangeFrom(n: number, m: number): number[] {
  return Array.from(Array(m - n + 1).keys()).map((i) => i + n);
}
