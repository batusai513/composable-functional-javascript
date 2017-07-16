module.exports = {
  Right,
  Left,
  fromNullable,
  tryCatch
};

function Right(x) {
  return {
    map(fn) {
      return Right(fn(x));
    },
    chain(fn){
      return fn(x);
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
    chain(fn){
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

function fromNullable(x) {
  return x != null ? Right(x) : Left(null);
}

// tryCatch :: Fn => Either(any)
function tryCatch(fn) {
  try {
    return Right(fn());
  } catch (e) {
    return Left(e);
  }
}

/* const result = Right("a").map(c => c.toUpperCase()).fold( e => 'error', x => x);

console.log(result); */
