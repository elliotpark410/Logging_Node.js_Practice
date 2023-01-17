const fruits: string[] = [
  'apple',
  'banana',
  'grapefruit',
  'mango',
  'orange',
  'melon',
  'pear',
];

const basket: string[] = [];

function addToBasket(item: string) {
  if (basket.length < 5) {
    // log the action
    console.info(`Putting "${item}" in the basket!`);
    basket.push(item);
  } else {
    // log an error if the basket is full
    console.error(`Trying to put "${item}" in the full basket!`);
  }
}

for (const fruit of fruits) {
  addToBasket(fruit);
}

// log the current basket state
console.log('Current basket state:', basket);

