const AWS = require("aws-sdk");
require("dotenv").config();
AWS.config.update({ region: "us-east-1" });

const config = {
  endpoint: new AWS.Endpoint("http://localhost:4566"),
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: "us-east-1",
};

const QUEUE_NAME = "test-queue";

const SQS = new AWS.SQS(config);

const listParams = {};

const createParams = {
  QueueName: QUEUE_NAME,
  Attributes: {
    DelaySeconds: "10",
    MessageRetentionPeriod: "86400",
  },
};

module.exports = {
  SQS,
  QUEUE_NAME,
  listParams,
  createParams,
};
