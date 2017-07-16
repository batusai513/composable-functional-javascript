const Either = require("./either");
const { Right, Left, fromNullable } = Either;

// findColor :: String => Either(String)
const findColor = name => {
  return fromNullable(
    {
      red: "#ff4444",
      blue: "#3b5596",
      yellow: "#fff68f"
    }[name]
  );
};

const result = findColor("red")
  .map(s => s.slice(1))
  .fold(e => "Error", x => x.toUpperCase());

console.log(result);
