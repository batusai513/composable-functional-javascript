function Right(x) {
  return {
    map(fn) {
      return Right(fn(x));
    },
    fold(fn, gn) {
      return gn(x);
    },
    inspect() {
      return `Right(${x})`;
    }
  };
}

function Left(x) {
  return {
    map(fn) {
      return Left(x);
    },
    fold(fn, gn) {
      return fn(x);
    },
    inspect() {
      return `Left(${x})`;
    }
  };
}
module.exports = {
  Right,
  Left
};

const result = Right("a").map(c => c.toUpperCase()).fold( e => 'error', x => x);

console.log(result);
