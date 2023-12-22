function adjustLights(lights) {
  let counter = 0;
  let counterReverse = 0;
  if (lights.length === counter) {
    return counter
  }

  const par = lights[0]
  const impar = par === '🟢' ? '🔴' : '🟢';
  const parReverse = lights.reverse()[0]
  const imparReverse = parReverse === '🟢' ? '🔴' : '🟢';

  lights.forEach((luz, index) => {
    if (
        (index % 2 === 0 && par !== luz)
        || (index % 2 !== 0 && impar !== luz)
    ) {
      counter = counter + 1;
    }
  })

  lights.reverse().forEach((luz, index) => {
    if (
        (index % 2 === 0 && parReverse !== luz)
        || (index % 2 !== 0 && imparReverse !== luz)
    ) {
      counterReverse = counterReverse + 1;
    }
  })

  return counter < counterReverse ? counter : counterReverse;
}

console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']), 1);
// -> 1 (cambias la cuarta luz a 🔴)

console.log(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢']), 1);
// -> 1 (cambia la primera luz a verde)

console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']), 2);
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']), 0);
// -> 0 (ya están alternadas)

console.log(adjustLights(['🔴', '🔴', '🔴']), 1);
// -> 1 (cambias la segunda luz a 🟢)