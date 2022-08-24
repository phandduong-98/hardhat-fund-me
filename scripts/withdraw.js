const { getNamedAccounts, ethers } = require("hardhat");

const main = async () => {
    const { deployer } = await getNamedAccounts();
    const fundMe = await ethers.getContract("FundMe", deployer);
    console.log("withdraw from contract . . . ");
    const txRes = await fundMe.withdraw();
    await txRes.wait(1);
    console.log("Withdrawed ------------");
};

main()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
