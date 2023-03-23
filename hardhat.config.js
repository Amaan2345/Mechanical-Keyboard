require("@nomicfoundation/hardhat-toolbox");
require("dotenv");
/** @type import('hardhat/config').HardhatUserConfig */
const NODE_API_URL="https://goerli.infura.io/v3/12781e03041042ad9d6f041b88a8604a";
const RINKEBY_PRIVATE_KEY="bace70f4f29f75367f6166cdaace829c66dfbb8bfc305d7860c51efc802a5669";
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: NODE_API_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
};
