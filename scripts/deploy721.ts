import { ethers } from "hardhat";

async function main() {
  const contract = await ethers.getContractFactory("KadyrovERC721");
  const KadyrovERC721 = await contract.deploy();

  await KadyrovERC721.deployed();

  console.log("KadyrovERC721 deployed to:", KadyrovERC721.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
