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

  });
});