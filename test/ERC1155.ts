import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { KadyrovERC1155, KadyrovERC1155__factory } from "../typechain";

const uri : string = "ipfs:\bafybeiffxgqovidf3fmjmlyaiemzhgd2cva6iysgs5ipj4ndtwxgvuyr3y";

describe("1155", function () {
    let contract: KadyrovERC1155;
    let signers: SignerWithAddress[];

    beforeEach(async function () {
        signers = await ethers.getSigners();
        contract = await new KadyrovERC1155__factory(signers[0]).deploy(uri);
    });

    describe("URI", () =>{
        it("Getter returns correct uri", async () => {
            expect(await contract.uri(0)).to.equal(uri);
        });

        it("setURI changes uri", async () => {
            await contract.setURI("https://google.com");
            const URIAfter = await contract.uri(0);
            expect(`https://google.com`).to.eq(URIAfter);
        });
    });

    describe("mint", () => {
        it("Should change the balance", async () => {
            const account : SignerWithAddress = signers[1];
            const tokenId : number = 0;
            const mintAmount : number = 100;
            await contract.mint(account.address, tokenId, mintAmount);
            expect(await contract.balanceOf(account.address, tokenId)).to.equal(mintAmount);
        });
    });

});
