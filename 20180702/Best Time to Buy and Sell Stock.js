/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var max = 0;
  var diff = 0;
  var min = Infinity;
  for (var i = 0; i < prices.length; i++) {
    var price = prices[i];
    if (min > price) {
      min = price;
    }
    diff = price - min;
    if (max < diff) {
      max = diff;
    }
  }
  return max;
}

const prices = [7, 1, 5, 3, 6, 4];
const prices2 = [1, 2, 4];
const prices3 = [7, 6, 4, 3, 1];

console.log(maxProfit(prices3));
