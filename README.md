# EVM Address Toolkit

Tiny zero-dependency EVM address helpers for Node.js. No keys, no signing, no network calls. Pure string checks only.

## Functions

- `isAddress(value)` — true for a `0x` address with 40 hex characters.
- `shortenAddress(value, chars)` — `0x1234...abcd` form, 4 chars each side by default.
- `sameAddress(a, b)` — case-insensitive address comparison.
- `isZeroAddress(value)` — true for the zero address.
- `ZERO_ADDRESS` — the zero address constant.

## Usage

```js
import { isAddress, shortenAddress, sameAddress } from "./index.mjs";

isAddress("0x112de0d91a911a56313024b5543be78cb859ab72"); // true
shortenAddress("0x112de0d91a911a56313024b5543be78cb859ab72"); // "0x112d...ab72"
sameAddress("0xABC...", "0xabc..."); // true
```

## Test

```sh
node --test test.mjs
```
