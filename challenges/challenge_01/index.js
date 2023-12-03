function findFirstRepeated(gifts) {
  if (gifts.length === 0) {
    return -1;
  }

  let numbersRepeated = [];
  let numbersAlreadySearched = [];
  for (let i = 0; i < gifts.length; i++) {
    if (numbersRepeated.length > 1) break;
    const numberToFind = gifts[i];
    if (!numbersAlreadySearched.includes(numberToFind)) {
      numbersAlreadySearched.push(numberToFind);

      for (let j = i + 1; j < gifts.length; j++) {
        if (numberToFind === gifts[j]) {
          numbersRepeated.push({number: numberToFind, position: j})
        }
      }
    }
  }
  if (numbersRepeated.length === 0) return -1
  return numbersRepeated.sort((a, b) => {
    if (a.position > b.position) {
      return 1;
    }
    if (a.position < b.position) {
      return -1;
    }
    return 0
  })[0].number
}

const giftIds = [2, 1, 3, 5, 3, 2];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId); // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4];
const firstRepeatedId2 = findFirstRepeated(giftIds2);
console.log(firstRepeatedId2); // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1];
const firstRepeatedId3 = findFirstRepeated(giftIds3);
console.log(firstRepeatedId3); // 5