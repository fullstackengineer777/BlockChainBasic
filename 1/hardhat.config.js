require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.3",
  paths: {
    artifacts: "./frontend/src/artifacts",
  },
  networks:{
    hardhat: {
      chaindId: 1337, 
    }
  }
};
