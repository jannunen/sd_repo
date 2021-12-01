const Migrations = artifacts.require("SantaDoge");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
