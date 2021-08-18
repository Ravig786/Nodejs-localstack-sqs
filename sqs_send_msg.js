const { sendMessage } = require("./sqs_create/create");
sendMessage("Hello World - Message 1");
// const Chance = require("chance");
// const chance = new Chance();
// const intervalTime = 4000;

// const produceMessage = async () => {
//   const value = chance.animal();
//   console.log(value);

//   try {
//     sendMessage(value);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const run = async () => {
//   setInterval(produceMessage, intervalTime);
// };

// run().catch(console.error);
