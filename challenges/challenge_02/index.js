function manufacture(gifts, materials) {
  const letters = materials.split('');
  return gifts.filter(gift => {
    const giftSplitted = gift.split('')
    return giftSplitted.every(letter => letters.includes(letter))
  })
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

console.log(manufacture(gifts, materials)) // ["tren", "oso"]

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

console.log(manufacture(gifts2, materials2)) // ["puzzle"]

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

console.log(manufacture(gifts3, materials3)) // []