const Box = require('./box');

/* function nextCharForNumberString(str) {
  const trimmed = str.trim();
  const number = parseInt(trimmed);
  const nextNumber = number + 1;
  return String.fromCharCode(nextNumber);
} */

function nextCharForNumberString(str) {
  return String.fromCharCode(parseInt(str.trim()) + 1);
}

// wrap in a box using array
function nextCharForNumberString(str) {
  return [str]
    .map(s => s.trim())
    .map(s => parseInt(s))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i));
}

// wrap using box definition
// map no tiene mucho que ver con iteracion, sino mas con composicion dentro de un contexto
function nextCharForNumberString(str) {
  return Box(str)
    .map(s => s.trim())
    .map(s => parseInt(s))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i))
    .fold(i => i)
}

const result = nextCharForNumberString(" 64 ");

console.log(result);
