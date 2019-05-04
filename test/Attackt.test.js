const PrivateBank = artifacts.require("PrivateBank");
const Attack = artifacts.require("Attack");


contract("Attack", (accounts) => {
  let target, attack;

  before (async() => {
    target = await PrivateBank.deployed();
    attack = await Attack.deployed();


    await Promise.all(accounts.map(from => web3.eth.sendTransaction({
      from, to: target.address, value: 1e18
    })));
  });

  it("attack target!", async () => {
    const attackBalance1 = await web3.eth.getBalance(attack.address);
    const targetBalance1 = await web3.eth.getBalance(target.address);

    await attack.attack({value: 1e18, gas: 5000000});

    console.log(await attack.target());

    const attackBalance2 = await web3.eth.getBalance(attack.address);
    const targetBalance2 = await web3.eth.getBalance(target.address);

    console.log(`
    attackBalance1: ${attackBalance1}
    targetBalance1: ${targetBalance1}


    attackBalance2: ${attackBalance2}
    targetBalance2: ${targetBalance2}
`)
  });
});