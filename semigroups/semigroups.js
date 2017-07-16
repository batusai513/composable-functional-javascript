module.exports = {
  Sum,
  All
};

// un semigrupo es un tipo con un metodo concat que es asociativo. combinar

/*
  "a".concat("b").concat("c") // abc
  // asociatividad
  "a".concat("b").concat("c") == "a".concat("b".concat("c"))
*/

function Sum(x) {
  return {
    x: x,
    concat(o /*Sum*/) {
      return Sum(x + o.x);
    },
    inspect() {
      return `Sum(${x})`;
    }
  };
}

function All(x) {
  return {
    x: x,
    concat(o /*All*/) {
      return All(x && o.x); //Conjunction
    },
    inspect() {
      return `All(${x})`;
    }
  }
}

function First(x) {
  return {
    x: x,
    concat(o /*First*/) {
      return First(x);
    },
    inspect() {
      return `First(${x})`;
    }
  }
}

const result = Sum(1).concat(Sum(2));

console.log(result);