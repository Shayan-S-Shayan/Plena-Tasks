require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.7.6",
        settings: {
          evmVersion: "istanbul",
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/bqQaFf5NKUnWpDFCr3QcM_VNgcBgMsN4",
      },
    },
  },
  // mocha: {
  //   timeout: 100000000,
  // },
};
