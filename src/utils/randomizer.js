export default function getRandomNumber(rangeStart, rangeEnd) {
  let min = Math.ceil(rangeStart);
  let max = Math.floor(rangeEnd);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
