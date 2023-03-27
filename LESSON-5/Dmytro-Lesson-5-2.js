function optimizer(data) {
  const result = {};
  for (const [key, value] of Object.entries(data)) {
    result[key.toLowerCase()] = parseFloat(value).toFixed(2);
  }
  return result;
};

function optimizer2(data) {
  const result = Object.entries(data).reduce((acc, [key, value]) => {
    acc[key.toLowerCase()] = parseFloat(value).toFixed(2);
    return acc;
  }, {});
  
  return result;
};

const priceData = {
  Apples: '23.4',
  BANANAS: '48',
  oRAngGEs: '48.7584',
};

let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData)

updatedPriceData = optimizer2(priceData);
console.log(updatedPriceData)