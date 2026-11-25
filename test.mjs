import test from "node:test";
import assert from "node:assert/strict";
import { isAddress, shortenAddress, sameAddress, isZeroAddress, ZERO_ADDRESS } from "./index.mjs";

test("isAddress accepts a 40-hex 0x address", () => {
  assert.equal(isAddress("0x112de0d91a911a56313024b5543be78cb859ab72"), true);
  assert.equal(isAddress("0x112d"), false);
  assert.equal(isAddress("112de0d91a911a56313024b5543be78cb859ab72"), false);
  assert.equal(isAddress(123), false);
});

test("shortenAddress keeps head and tail", () => {
  assert.equal(shortenAddress("0x112de0d91a911a56313024b5543be78cb859ab72"), "0x112d...ab72");
  assert.throws(() => shortenAddress("nope"), /not an EVM address/);
});

test("sameAddress ignores case", () => {
  assert.equal(sameAddress("0x112de0d91a911a56313024b5543be78cb859ab72", "0X112DE0D91A911A56313024B5543BE78CB859AB72".replace("0X", "0x")), true);
  assert.equal(sameAddress("0x112de0d91a911a56313024b5543be78cb859ab72", ZERO_ADDRESS), false);
});

test("isZeroAddress detects the zero address", () => {
  assert.equal(isZeroAddress(ZERO_ADDRESS), true);
  assert.equal(isZeroAddress("0x112de0d91a911a56313024b5543be78cb859ab72"), false);
});
