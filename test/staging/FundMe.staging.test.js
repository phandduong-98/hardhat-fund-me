const { inputToConfig } = require("@ethereum-waffle/compiler");
const { assert } = require("chai");
const { getNamedAccounts, deployments, ethers, network } = require("hardhat");
const { developmentChains } = require("../../helper-hardhat-config");

developmentChains.includes(network.name)
    ? describe.skip
    : describe("FundMe", async () => {
          let fundMe, deployer;
          const sendValue = ethers.utils.parseEther("0.001");
          beforeEach(async () => {
              deployer = (await getNamedAccounts()).deployer;
              fundMe = await ethers.getContract("FundMe", deployer);
          });

          it("allows people to fund and withdraw", async () => {
              await fundMe.fund({ value: sendValue });
              await fundMe.withdraw();
              const endingBalance = fundMe.provider.getBalance(fundMe.address);
              assert.equal(endingBalance.toString(), 0);
          });
      });
