
// require("dotenv").config();

// const API_URL = process.env.REACT_APP_ALCHEMY_KEY;
// const PUBLIC_KEY = process.env.REACT_APP_ETH_PUBLIC_KEY;
// const PRIVATE_KEY = process.env.REACT_APP_ETH_PRIVATE_KEY;

// const contractAbi = require("../data/contracts/CozyHome.json"); 
// const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;


// async function updateMessage(newMessage) {
//     const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); // get latest nonce
//     const gasEstimate = await helloWorldContract.methods.update(newMessage).estimateGas(); // estimate gas

//     // Create the transaction
//     const tx = {
//       'from': PUBLIC_KEY,
//       'to': contractAddress,
//       'nonce': nonce,
//       'gas': gasEstimate, 
//       'maxFeePerGas': 1000000108,
//       'data': helloWorldContract.methods.update(newMessage).encodeABI()
//     };
// }


// async function main() {
//     const message = await helloWorldContract.methods.message().call();
//     console.log("The message is: " + message);
//   }

// main();