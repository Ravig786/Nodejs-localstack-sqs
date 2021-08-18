const QUEUE_URL = "http://localhost:4566/000000000000/test-queue";

const msgParams = (msg) => {
  return {
    DelaySeconds: 10,
    MessageAttributes: {
      Title: {
        DataType: "String",
        StringValue: "The Whistler",
      },
      Author: {
        DataType: "String",
        StringValue: "John Grisham",
      },
      WeeksOn: {
        DataType: "Number",
        StringValue: "6",
      },
    },
    MessageBody: msg,

    QueueUrl: QUEUE_URL,
  };
};
const receiveParam = {
  AttributeNames: ["SentTimestamp"],
  MaxNumberOfMessages: 10,
  MessageAttributeNames: ["All"],
  QueueUrl: QUEUE_URL,
  VisibilityTimeout: 20,
  WaitTimeSeconds: 0,
};

module.exports = {
  QUEUE_URL,
  msgParams,
  receiveParam,
};
