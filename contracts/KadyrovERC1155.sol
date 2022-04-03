// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract KadyrovERC1155 is ERC1155, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    uint256 public constant MONKE1 = 0;

    constructor(string memory url) ERC1155(url) {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(MINTER_ROLE, msg.sender);
        mint(msg.sender, MONKE1, 100);
    }

    function setURI(string memory newuri) public onlyRole(MINTER_ROLE) {
        _setURI(newuri);
    }

    function mint(address to, uint256 id, uint256 amount) public onlyRole(MINTER_ROLE) {
        _mint(to, id, amount, "");
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC1155, AccessControl) returns (bool){
        return super.supportsInterface(interfaceId);
    }
}