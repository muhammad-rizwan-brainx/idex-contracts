require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');
require('hardhat-contract-sizer');

module.exports = {

  etherscan: {
    apiKey: "VTJJ86VD6ZKVE3WQBMRE1CGP7HUM4Z8KRC", 

  },
  mocha: {
    timeout: 20000,
  },
  networks: {
    hardhat: {},
    bsc: {
      accounts: ["1dc24441dc85b57c55b0033c3a0d2d0bf9357c8cdf8688856d900444e4384121"],
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
    },
  },
  paths: {
    sources: "./contracts",
    artifacts: "./artifacts",
    cache: "./cache",
    tests: "./test",
  },
  solidity: {
    'compilers': [
      {'version': '0.8.0',
      settings: {
        optimizer: {
          runs: 200,
          enabled: true
        }
      }},

      {        'version': '0.8.1',
        settings: {
          optimizer: {
            runs: 0,
            enabled: true
          }
        }
      },
    ],
  },
  watcher: {
    ci: {
      tasks: [
        "clean",
        {"command": "compile",
          "params": {"quiet": true}},
        {
          "command": 'test',
          "params": {"noCompile": true,
            "testFiles": ["testfile.ts"]},
        },
      ],
    },
    compilation: {
      tasks: ["compile"],
      files: ["./contracts"],
      verbose: true,
    },
  },
};