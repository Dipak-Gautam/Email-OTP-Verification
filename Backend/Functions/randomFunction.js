function getRandomNumber(digits) {
  if (digits < 1) return 0;

  const min = Math.pow(10, digits - 1);
  const max = Math.pow(10, digits) - 1;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default getRandomNumber;
