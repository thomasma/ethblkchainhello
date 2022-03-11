const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HelloWorld", function () {
  it("Should return the new message once it's changed", async function () {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const hello = await HelloWorld.deploy("Hello, world!");
    await hello.deployed();

    expect(await hello.message()).to.equal("Hello, world!");

    const setMessageTx = await hello.update("Hello, again!");

    // wait until the transaction is mined
    await setMessageTx.wait();

    expect(await hello.message()).to.equal("Hello, again!");
  });
});
