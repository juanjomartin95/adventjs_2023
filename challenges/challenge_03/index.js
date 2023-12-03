function findNaughtyStep(original, modified) {
  if (original === modified) {
    return ''
  }

  const originalSplitted = original.split('')
  const modifiedSplitted = modified.split('')

  let firstSplitted = []
  let secondSplitted = []

  if (original.length > modified.length) {
    firstSplitted = originalSplitted
    secondSplitted = modifiedSplitted
  } else {
    firstSplitted = modifiedSplitted
    secondSplitted = originalSplitted
  }

  return firstSplitted.find((char, index) => secondSplitted[index] !== char)
}

const original = 'abcd';
const modified = 'abcde';
console.log(findNaughtyStep(original, modified)) // 'e'

const original1 = 'stepfor';
const modified1 = 'stepor';
console.log(findNaughtyStep(original1, modified1)) // 'f'

const original2 = 'abcde';
const modified2 = 'abcde';
console.log(findNaughtyStep(original2, modified2)) // ''