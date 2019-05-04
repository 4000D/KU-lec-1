const PrivateBank = artifacts.require("PrivateBank");
const Attack = artifacts.require("Attack");

module.exports = function(deployer) {
  deployer.deploy(PrivateBank)
    .then(target => deployer.deploy(Attack, target.address));
};
