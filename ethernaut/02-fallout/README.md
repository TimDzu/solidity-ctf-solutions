# Ethernaut — 02 Fallout

## Goal

Become the owner of the contract.

## Vulnerability

The contract uses `Fal1out()` instead of a real constructor.

Because of that, `Fal1out()` is just a normal public function and anyone can call it to become the owner.

## Attack steps

1. Call `Fal1out()`
2. Verify that your address became the owner
3. Optionally call `collectAllocations()` if the contract has balance

## Solution

### Browser console

```js
await contract.Fal1out();
await contract.owner();
```
## Why it works

`Fal1out()` is not treated as a constructor, so it stays callable after deployment and sets `owner = msg.sender`.

