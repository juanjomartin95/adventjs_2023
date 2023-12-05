function decode(message) {
  let newMessage = message;
  const regex = /\(([^)]+)\)/g;
  const coincidences = message.match(regex).map(coincidence => ({original: coincidence, good: coincidence.replaceAll(/[()]/g, '').split('').reverse().join('')}));
  coincidences.forEach(coincidence => newMessage = newMessage.replaceAll(coincidence.original, coincidence.good))
  return newMessage;
}

const a = decode('hola (odnum)');
console.log(a); // hola mundo

const b = decode('(olleh) (dlrow)!');
console.log(b); // hello world!

const c = decode('sa(u(cla)atn)s');
console.log(c); // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus