require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.3",
  paths: {
    artifacts: "./frontend/src/artifacts"
  },
  networks: {
    hardhat:{
      chainId: 1337,
    },
    // goerli: {
    //   url: process.env.GOERLI_URL,
    //   accounts: [process.env.ACCOUNT_PRIVATE_KEY]
    // }
  }
};
