// Tiny zero-dependency EVM address helpers. Pure string checks, no keys, no network.
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export function isAddress(value) {
  return typeof value === "string" && /^0x[0-9a-fA-F]{40}$/.test(value);
}

export function shortenAddress(value, chars = 4) {
  if (!isAddress(value)) throw new Error("not an EVM address: " + value);
  return value.slice(0, 2 + chars) + "..." + value.slice(-chars);
}

export function sameAddress(a, b) {
  return isAddress(a) && isAddress(b) && a.toLowerCase() === b.toLowerCase();
}

export function isZeroAddress(value) {
  return sameAddress(value, ZERO_ADDRESS);
}
