// Expected Result : 4200
// Direction :
// Find and returns the largest value

const items = [
  {
    name: 'spoon',
    details: {
      value: 4120,
    },
  },
  {
    name: 'fork',
    details: {
      value: 4200,
    },
  },
  {
    name: 'plate',
    details: {
      value: 2032,
    },
  },
];

function result(items) {
  let values = items.map(item => item.details.value);
  let max = Math.max(...values);
  return max;
}

console.log(result(items));
