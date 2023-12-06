function cyberReindeer(road, time) {
  const SLEIGH = 'S';
  const ROAD = '.';
  const OPEN = '*';
  const CLOSE = '|';

  const advanceOnePosition = (currentRoad, roadWithoutSleigh) => {
    const currentRoadSplitted = currentRoad.split('');
    const sleighPosition = currentRoad.indexOf(SLEIGH);
    currentRoadSplitted[sleighPosition] = roadWithoutSleigh.at(sleighPosition);
    currentRoadSplitted[sleighPosition + 1] = SLEIGH
    return currentRoadSplitted.join('')
  }

  const nextActionByRoadElement = {
    [ROAD]: (currentRoad, roadWithoutSleigh) => advanceOnePosition(currentRoad, roadWithoutSleigh),
    [OPEN]: (currentRoad, roadWithoutSleigh) => advanceOnePosition(currentRoad, roadWithoutSleigh),
    [CLOSE]: (currentRoad) => currentRoad,
  };

  const executeNextAction = (currentRoad, roadWithoutSleigh) => {
    const nextElementPosition = currentRoad.indexOf(SLEIGH) + 1;
    const nextElement = currentRoad.at(nextElementPosition);
    return nextElementPosition === -1
        ? currentRoad
        : nextActionByRoadElement[nextElement](currentRoad, roadWithoutSleigh);
  };

  const openBarriers = (currentRoad) => {
    return currentRoad.replaceAll(CLOSE, OPEN);
  };

  let roadWithoutSleigh = road.replaceAll(SLEIGH, ROAD)
  if (road.length === 0 || time === 0) return [];

  let roadTimeline = [];

  let currentRoad = road;
  for (let i = 0; i < time; i++) {
    if (i !== 0) currentRoad = executeNextAction(currentRoad, roadWithoutSleigh);
    roadTimeline.push(currentRoad);
    if (i === 4) {
      currentRoad = openBarriers(currentRoad);
      roadWithoutSleigh = openBarriers(roadWithoutSleigh)
    }
  }
  return roadTimeline;
}

let road = 'S..|...|..';
const time = 10; // unidades de tiempo
const result = cyberReindeer(road, time);
/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/
console.table(result);