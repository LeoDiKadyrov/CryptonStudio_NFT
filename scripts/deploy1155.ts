import { ethers } from "hardhat";


async function main() { 
  const baseTokenUri = "https://ipfs.io/ipfs/QmZVa9gd28bGZE8QiJ53QortpKhMCVwamKApU9U99EMsZf"
  const contract = await ethers.getContractFactory("KadyrovERC1155");
  const KadyrovERC1155 = await contract.deploy(baseTokenUri);

  await KadyrovERC1155.deployed();

  console.log("KadyrovERC1155 deployed to:", KadyrovERC1155.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});