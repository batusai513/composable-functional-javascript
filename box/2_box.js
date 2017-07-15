const Box = require("./box");

function moneyToFloat(str) {
  return parseFloat(str.replace(/\$/g, ""));
}

function percentToFloat(str) {
  const replaced = str.replace(/\%/g, "");
  const number = parseFloat(replaced);
  return number * 0.01;
}

function applyDiscount(price, discount) {
  const cost = moneyToFloat(price);
  const savings = percentToFloat(discount);
  return cost - cost * savings;
}

function moneyToFloat(str) {
  return Box(str).map(s => s.replace(/\$/g, "")).map(s => parseFloat(s));
}

function percentToFloat(str) {
  return Box(str)
    .map(s => s.replace(/\%/g, ""))
    .map(r => parseFloat(r))
    .map(f => f * 0.01);
}

function applyDiscount(price, discount) {
  return moneyToFloat(price)
    .fold(cost =>
      percentToFloat(discount)
        .fold(savings => cost - cost * savings)
    );
}

const result = applyDiscount("$5", "20%");

console.log(result);
