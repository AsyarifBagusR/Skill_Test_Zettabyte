const number = [2, 4, 18, 20, 35, 84];
const answer = [];

const nextPrime = (num = 1) => {
  while (!isPrime(++num)) {}
  return num;
};

const myPrimeArray = number.filter(num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
});
console.log(myPrimeArray);

// Not Finished
