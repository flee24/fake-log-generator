const faker = require("faker");
const cli = require("cli");

cli.enable("status", "help");

const options = cli.parse({
  file: ["f", "Output file", "file", "main.log"],
  num: ["n", "Number of log lines", "int", 10000],
});
