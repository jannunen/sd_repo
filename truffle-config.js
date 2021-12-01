require("dotenv").config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
//var PrivateKeyProvider = require("truffle-privatekey-provider");

module.exports = {
  debug : true,
  networks: {
    testnet: {
      provider: () => new HDWalletProvider({
        privateKeys: [process.env.PRIVATE_KEY],
        providerOrUrl :  "https://rpc.testnet.fantom.network"
      }),
      network_id : 0xfa2,
      from : process.env.FROM_ADDRESS,
      skipDryRun: true

    },
    mainnet: {
      provider: () => new HDWalletProvider({
        privateKeys: [process.env.PRIVATE_KEY],
        providerOrUrl : "https://rpc.ftm.tools"
      }),
      gas: 6721975,
     gasPrice : 620000000000,
      network_id : 0xfa,
      port : 8545,
      from : process.env.FROM_ADDRESS,
      skipDryRun: true
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.7.6",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
         enabled: true,
          runs:200 
        },
      //  evmVersion: "byzantium"
      }
    }
  },
  plugins: [
    //'truffle-plugin-verify',
    "truffle-contract-size"
  ],
  api_keys: {
    //etherscan: process.env.ETHERSCAN_API_KEY,
    ftmscan: process.env.ETHERSCAN_API_KEY,
  }
};
