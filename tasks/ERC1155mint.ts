import { task } from "hardhat/config";

const contractAddress = "0x7BF48fA5717951B6b1C970D1Ce671Beb98E40c46";

task("mint1155", "mint your ERC-1155 token")
  .addParam("to", "The address that will receive the token")
  .addParam("id", "Select token id")
  .addParam("amount", "The amount you want to mint")
  .setAction(async function (taskArgs, hre) {
    const token = await hre.ethers.getContractAt("KadyrovERC1155", contractAddress);
    await token.mint(taskArgs.to, taskArgs.id, taskArgs.amount);
});