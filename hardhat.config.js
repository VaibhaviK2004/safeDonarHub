require("@nomiclabs/hardhat-waffle");
require('dotenv').config({ path: './.env.local' });

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

const ganachePrivateKey = process.env.GANACHE_PRIVATE_KEY; // Using the Ganache private key

//module.exports = {
 // solidity: "0.8.19",
 // defaultNetwork: "ganache",
  //networks: {
    //hardhat: {},
    //ganache: {
    //  url: "http://127.0.0.1:7545", // URL for Ganache
     // accounts: [0x6a747c3C8c5167b3951B359647F1cA4bc068Cc74]
    //},
    // other networks...
  //}
//};
module.exports = {
  networks: {
    ganache: {
      url: "http://localhost:8545", // Replace with the actual URL of your Ganache instance
      accounts: [
        "0x6a747c3C8c5167b3951B359647F1cA4bc068Cc74"
        // ... other accounts
      ],
    },
  },
  // ... other configurations
};