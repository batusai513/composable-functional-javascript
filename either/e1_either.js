const Either = require("./either");
const fs = require("fs");
const path = require("path");

const { Right, Left, tryCatch, fromNullable } = Either;

function openSite() {
  if (currentUser) {
    return renderPage(currentUser);
  } else {
    return showLogin();
  }
}

function openSite() {
  return fromNullable(currentUser).fold(showLogin, renderPage);
}

function getPrefs(user) {
  if (user.premium) {
    return loadPrefs(user.preferences);
  } else {
    return defaultPrefs;
  }
}

function getPrefs(user) {
  return user.premium
    ? Right(user)
    : Left("Not Premium")
        .map(user => users.preferences)
        .fold(() => defaultPrefs, prefs => loadPrefs(prefs));
}

function streetName(user) {
  const address = user.address;
  if (address) {
    const street = address.street;
    if (street) {
      return street.name;
    }
  }
  return "No Street";
}

function streetName(user) {
  return fromNullable(user.address)
    .chain(address => fromNullable(address.street))
    .map(street => street.name)
    .fold(() => "No Street", name => name);
}

function concatUniq(x, ys) {
  const found = ys.filter(y => y == x)[0];
  return found ? ys : ys.concat(x);
}

function concatUniq(x, ys) {
  return fromNullable(ys.filter(y => y == x)[0]).fold(
    () => ys.concat(x),
    y => ys
  );
}

function wrapExamples(example) {
  if (example.previewPath) {
    try {
      example.preview = fs.readFileSync(example.previewPath);
    } catch (e) {}
  }
  return example;
}

function readFile(x) {
  return tryCatch(() => fs.readFileSync(x));
}

function wrapExamples(example) {
  return fromNullable(example.previewPath)
    .chain(x => readFile(x))
    .fold(() => example, ex => Object.assign({}, { preview: p }, ex));
}
