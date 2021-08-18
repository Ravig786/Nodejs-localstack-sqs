const { getMessage } = require("./sqs_create/create");
getMessage();

// while (true) {
//   getMessage();
// }

// const run = async () => {
//   try {
//     while (true) {
//       getMessage();
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// run().catch(console.error);
