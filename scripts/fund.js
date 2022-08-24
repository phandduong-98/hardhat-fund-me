const { getNamedAccounts, ethers } = require("hardhat");

const main = async () => {
    const { deployer } = await getNamedAccounts();
    const fundMe = await ethers.getContract("FundMe", deployer);
    console.log("Funding contract . . . ");
    const txRes = await fundMe.fund({
        value: ethers.utils.parseEther("1"),
    });
    await txRes.wait(1);
    console.log("Funded ------------");
};

main()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
