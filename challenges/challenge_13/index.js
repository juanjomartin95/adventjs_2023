function calculateTime(deliveries) {
  const secondsLimit = 7*3600;
  let secondAccumulator = 0;
  deliveries.forEach((delivery) => {
    const [h, m, s] = delivery.split(':');
    secondAccumulator = ((parseInt(h) * 3600) + (parseInt(m) * 60) + parseInt(s) + secondAccumulator)
  })
  const positiveResultInSeconds = Math.abs(secondAccumulator - secondsLimit)

  const sumResult = {
    s: (positiveResultInSeconds % 60).toString().padStart(2, '0'),
    m: ((parseInt(positiveResultInSeconds / 60)) % 60).toString().padStart(2, '0'),
    h: parseInt(positiveResultInSeconds / 3600).toString().padStart(2, '0')
  }

  return `${secondAccumulator - secondsLimit < 0 ? '-' : ''}${sumResult['h']}:${sumResult['m']}:${sumResult['s']}`;
}

console.log(calculateTime([
  '00:10:00',
  '01:00:00',
  '03:30:00'
]));// '-02:20:00'

console.log(calculateTime([
  '02:00:00',
  '05:00:00',
  '00:30:00'
]));// '00:30:00'

console.log(calculateTime([
  '00:45:00',
  '00:45:00',
  '00:00:30',
  '00:00:30',
]));// '-05:29:00'