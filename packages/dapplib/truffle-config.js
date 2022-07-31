require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name rifle peace puppy install infant equal gentle'; 
let testAccounts = [
"0xc4884f8a63e94a677fe2cdd98f2449e154f7ab6b3b5157f35bb2aa281f1c76da",
"0xf6c883991b347258bdb787cbd8f40fd63171865e0b24ef6eafef3b3c5136e5b3",
"0x8e86c4c7b50d809f58546bfdf687b389eb4ac3c51d4cd999b0b9e98dea38366b",
"0xf1cb0c0cdd072a6017597177d6c8f3ee7076c94dec32b6033c4ca4481b60f373",
"0xef41d73c6f6b64f0a54368fa615d8afbce179bda3aff83a5a72bfbe458cf4855",
"0x71c6d47be7bf4bc854c7d8a3010620e96748b62ba522a34d851c602fa46b887f",
"0xda4cbd2b9d423354facd986745985beba80b7e130133f0b2b949eb64ceb950e3",
"0xe1810c366ab5454edb0cca73b81bae2b235e7874b97dc5c803b08a157a3479e2",
"0x8d7a3bbbf4dc0a59d1c4010345b73ef4ce4fd8575e8136d9ad5da21f99d46ee6",
"0x5c6f1a3f29d0d77f271dcc6e201514fe8a130aa629432bb67c951bc7928600c8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

