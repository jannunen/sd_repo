
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SantaDoge tests", function () {
  it("Test that it does not allow other addess than owner address to be used for airdrop", async function () {
    const [owner, other] = await ethers.getSigners();
    const Contract = await ethers.getContractFactory("SantaDoge");
    const contract = await Contract.deploy();
    await contract.deployed();

     await expect(
         await contract.multiTransfer(other,[owner],1000);
        ).to.be.revertedWith("Airdrop source must be owner");
  });
});
