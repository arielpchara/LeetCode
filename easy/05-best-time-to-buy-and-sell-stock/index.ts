/**
 * @param prices - Stock price for each day.
 * @returns Maximum profit from a single buy and sell.
 */

function maxProfit(prices: number[]): number | null {
  let minPrice;
  let maxProfit = 0;
  for(let price of prices) {
    if(!minPrice || price < minPrice) {
      minPrice = price
    }
    if(price - minPrice > maxProfit) {
      maxProfit = price - minPrice
    }
  }
  return maxProfit
}

export { maxProfit };
