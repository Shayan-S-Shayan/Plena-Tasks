const { expect } = require("chai");
const { ethers } = require("hardhat");

const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const WETH9 = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const USDT = "0xdac17f958d2ee523a2206206994597c13d831ec7";
describe("SwapExamples", () => {
  let swapExamples;
  let accounts;
  let weth;
  let dai;
  let usdc;
  let usdt;

  before(async () => {
    accounts = await ethers.getSigners(1);

    const SwapExamples = await ethers.getContractFactory("SwapExamples");
    swapExamples = await SwapExamples.deploy();
    await swapExamples.deployed();

    weth = await ethers.getContractAt("IWETH", WETH9);
    usdt = await ethers.getContractAt("IERC20", usdt);
    usdc = await ethers.getContractAt("IERC20", USDC);
    usdt = await ethers.getContractAt("IERC20", USDT);
  });

  it("swapExactInputSingle", async () => {
    const amountIn = 10n ** 18n;

    // Deposit WETH
    await usdc.deposit({ value: amountIn });
    await usdc.approve(swapExamples.address, amountIn);

    // Swap
    await swapExamples.swapExactInputSingle(amountIn);

    console.log("usdt balance", await usdt.balanceOf(accounts[0].address));
  });

  it("swapExactOutputSingle", async () => {
    const usdcAmountInMax = 10n ** 18n;
    const usdtAmountOut = 100n * 10n ** 18n;

    // Deposit usdc
    await usdc.deposit({ value: usdcAmountInMax });
    await usdc.approve(swapExamples.address, usdcAmountInMax);

    // Swap
    await swapExamples.swapExactOutputSingle(usdtAmountOut, usdcAmountInMax);

    console.log("usdt balance", await usdt.balanceOf(accounts[0].address));
  });

  it("swapExactInputMultihop", async () => {
    const amountIn = 10n ** 18n;

    // Deposit WETH
    await usdc.deposit({ value: amountIn });
    await usdc.approve(swapExamples.address, amountIn);

    // Swap
    await swapExamples.swapExactInputMultihop(amountIn);

    console.log("usdt balance", await usdt.balanceOf(accounts[0].address));
  });

  it("swapExactOutputMultihop", async () => {
    const usdcAmountInMax = 10n ** 18n;
    const usdtAmountOut = 100n * 10n ** 18n;

    // Deposit WETH
    await usdc.deposit({ value: usdcAmountInMax });
    await usdc.approve(swapExamples.address, usdcAmountInMax);

    // Swap
    await swapExamples.swapExactOutputMultihop(usdtAmountOut, usdcAmountInMax);

    console.log("usdt balance", await usdt.balanceOf(accounts[0].address));
  });
});
