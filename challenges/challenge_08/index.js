function organizeGifts(gifts) {
  return (gifts.match(/(\d+)([a-zA-Z])/g) || []).map((match) => {
    const numero = parseInt(match.match(/\d+/)[0], 10);
    const letra = match.match(/[a-zA-Z]/)[0];

    let palets = '';
    for (let i = 0; i < parseInt(numero / 50); i++) {
      palets = palets.concat(`[${letra}]`);
    }

    let cajas = '';
    for (let i = 0; i < parseInt((numero % 50) / 10); i++) {
      cajas = cajas.concat(`{${letra}}`);
    }

    const calculoResto = parseInt((numero % 50) % 10);
    let resto = '';
    if (calculoResto > 0) {
      resto = '(';
      for (let i = 0; i < parseInt((numero % 50) % 10); i++) {
        resto = resto.concat(letra);
      }
      resto = resto.concat(')');
    }

    return `${palets}${cajas}${resto}`;
  }).join('');
}

const result1 = organizeGifts(`76a11b`);
console.log(result1);
// '[a]{a}{a}(aaaaaa){b}(b)'
