// create a box type
 module.exports = function Box(x) {
  return {
    map(fn) {
      return Box(fn(x));
    },
    fold(fn) {
      return fn(x);
    },
    inspect() {
      return `Box(${x})`;
    }
  };
}