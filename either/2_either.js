const Either = require("./either");
const fs = require("fs");
const path = require("path");

const { Right, Left, tryCatch } = Either;
const configPath = path.resolve(__dirname, '../', 'mock', 'config.json');

/* function getPort() {
  try {
    const str = fs.readFileSync(configPath);
    const config = JSON.parse(str);
    return config.port;
  } catch (e) {
    return 3000;
  }
} */

function getPort() {
  return tryCatch(() => fs.readFileSync(configPath)) // retorna Right() || Left()
    .chain(data => tryCatch(() => JSON.parse(data))) // con map retorna Right(Right()) || Right(Left()); si se retorna otro either, usa chain
    .fold(e => 3000, x => x.port);
}

const result = getPort();

console.log(result);
