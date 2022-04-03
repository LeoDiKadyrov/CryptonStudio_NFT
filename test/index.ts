import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { KadyrovERC721, KadyrovERC721__factory } from "../typechain";

const uri = "ipfs://QmZVa9gd28bGZE8QiJ53QortpKhMCVwamKApU9U99EMsZf";
const id = 1;

describe("721", function () {
  let contract: KadyrovERC721;
  let signers: SignerWithAddress[];

  beforeEach(async function () {
    signers = await ethers.getSigners();
    contract = await new KadyrovERC721__factory(signers[0]).deploy();
  });

  describe("Constants", () => {
      it("name", async () => {
        const tokenName = await contract.name();
        expect(tokenName).to.eq("Monke1");
      });
      
      it("symbol", async () => {
        const tokenSymbol = await contract.symbol();
        expect(tokenSymbol).to.eq("MNK1");
      });
  });

  describe("TokenURI", () => {
    it("Getter returns tokenURI", async () => {
      await contract.safeMint(signers[1].address, id, uri);
      const returneduri = await contract.tokenURI(id);
      expect(uri).to.eq(returneduri);
    });
  });

  describe("Mint", function () {
    it("Should mint token for address", async function () {
        await contract.safeMint(signers[1].address, id, uri);
        const returnedURI = await contract.tokenURI(id);
        expect(uri).to.eq(returnedURI);
    });
  });

});
