import { ethers } from "hardhat";

async function main() {
  const contract = await ethers.getContractFactory("Monke1");
  const Monke1 = await contract.deploy();

  await Monke1.deployed();

  console.log("Monke1 deployed to:", Monke1.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
