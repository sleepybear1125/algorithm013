//最优解法(贪心算法): 时间复杂度O(N) 空间复杂度O(1)
function maxProfit(prices: number[]): number {
    let total = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        let diff = prices[i + 1] - prices[i];
        if (diff > 0) {
            total += diff;
        }
    }
    return total;
};