class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        // this is a variation of sliding window

        for(let i = 0; i < prices.length; i++){
            let profit = 0;
            for(let j = (i + 1); j < prices.length; j++){
                profit = prices[j] - prices[i];
                if(maxProfit < profit){
                maxProfit = profit;
            }
            }
            
        }
        return maxProfit;
    }
}
