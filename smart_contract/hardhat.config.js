//  https://eth-goerli.g.alchemy.com/v2/vu7zk8YP5z9VOZf89ufWHWP1GX5aKTO7



//https://polygon-mumbai.g.alchemy.com/v2/Zd7-RHBc5RwWsOMgtjFWlCsYsgI5NNZv

require('@nomiclabs/hardhat-waffle');

module.exports = {
 
  solidity: "0.8.0",
  networks: {
    polygon: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/Zd7-RHBc5RwWsOMgtjFWlCsYsgI5NNZv",
      accounts: [`ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`]
    }
  }
}