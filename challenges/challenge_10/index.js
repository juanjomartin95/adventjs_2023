function createChristmasTree(ornaments, height) {
  const tree = [];
  let trunk = '';
  let lastOrnament = -1;
  for (let i = 0; i < height; i++) {
    let rama = '';
    const initialSpaces = height - i - 1;
    const treeDecoration = i + 1;
    for (let j = 0; j < initialSpaces; j++) {
      rama = rama.concat(' ');
      if (i === 0) {
        trunk = trunk.concat(' ')
      }
    }
    for (let k = 0; k < treeDecoration; k++) {
      const ornamentPosition = lastOrnament + 1;
      lastOrnament = ornamentPosition
      rama = rama.concat(ornaments[ornamentPosition % ornaments.length]);
      if (k !== treeDecoration - 1) {
        rama = rama.concat(' ');
      }
    }
    tree.push(rama + '\n');
  }
  trunk = trunk.concat('|\n');
  return tree.join('').concat(trunk);
}

console.log(createChristmasTree('123', 4));
//   1
//  2 3
// 1 2 3
//1 2 3 1
//   |