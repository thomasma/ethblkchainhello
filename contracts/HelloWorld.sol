//SPDX-License-Identifier: Unlicense
// Specifies the version of Solidity, using semantic versioning.
// Learn more: https://solidity.readthedocs.io/en/v0.5.10/layout-of-source-files.html#pragma
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract HelloWorld {
    string public message;

    constructor(string memory initMessage) {
        console.log("The time is now - ", initMessage);
        message = initMessage;
    }

    function update(string memory newMessage) public {
        message = newMessage;
    }
}