const faker = require("faker");
const cli = require("cli");
const fs = require("fs");
const fastcsv = require("fast-csv");

cli.enable("status", "help");

const options = cli.parse({
  file: ["f", "Output file", "file", "main.log"],
  num: ["n", "Number of log lines", "int", 10000],
});

faker.seed(100);

const data = [];
for (i = 0; i < options.num; i++) {
  data.push({
    date: faker.date.past(),
    uuid: faker.random.uuid(),
    ip: faker.internet.ip(),
    useragent: faker.internet.userAgent(),
    url: faker.internet.url(),
    username: faker.internet.userName(),
  });
}

const outputStream = fs.createWriteStream(options.file);

fastcsv.write(data, { headers: true }).pipe(outputStream);
