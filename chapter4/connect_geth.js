var Web3=require("Web3");
var web3=new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
console.log(web3.eth.accounts);