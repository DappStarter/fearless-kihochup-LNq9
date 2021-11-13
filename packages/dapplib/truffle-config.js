require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remember honey half kitchen sure turn'; 
let testAccounts = [
"0x7144a658fb736de32ce4a20ccd03d207e91255c1ce4db3186892dbc0a9bfecab",
"0x0f7c57f89443f8e0ae72242e118e2fa80cbf0c66373cc6c0d0cee28fc3fe4111",
"0x521fa5f2bedba671777bdc97c35ef487a57bac2c236bc861a9e81373e2118d3b",
"0x4a5463e4a70708624c1bcdaaa9b5e10e7bac803e128234c34c0166da534d3fa1",
"0x8dc1c73a8b593a8bcbc71c217edbccf1abeccbc3d1616dbde77cab01a5c03cbd",
"0xfa5677f7a0adc63294c3dedce620a03ecc35f21bbd6419e0ad9e7c22d73fc061",
"0x58fdd259df897273c2dcad69ccf1fa3be3a2fbec8a4745b88e8e75ad9c512c94",
"0x1391df6c9ebe1389cc656e69e2fca03e7dd92ff73159e13cabbfc44949a2f552",
"0xf17475653147227204427dc05321de1a928ac088ae8550b8b88c3320f2191456",
"0x7ea8acb53f40be56b5637af09d2ea50dc939abba16e8b2fbeafd225ab28e2c97"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


