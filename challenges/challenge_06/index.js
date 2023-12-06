function maxDistance(movements) {
  let acum = 0;
  const characters = {
    up: (movements.match(/>/g) || []).length,
    down: (movements.match(/</g) || []).length,
    unknown: (movements.match(/\*/g) || []).length,
  }
  acum = acum + characters.up
  acum = acum - characters.down

  if (characters.up === characters.down) {
    acum = acum + characters.unknown
  } else {
    characters.up > characters.down
        ? acum = acum + characters.unknown
        : acum = acum - characters.unknown
  }

  return Math.abs(acum)
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5

console.log();