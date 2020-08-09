//时间复杂度O(N) 空间复杂度O(N)
function nthUglyNumber(n: number): number {
    let dp = [1];
    let [a, b, c] = [0, 0, 0];
    for (let i = 1; i < n; i++) {
        const [n2, n3, n5] = [dp[a] * 2, dp[b] * 3, dp[c] * 5];
        dp[i] = Math.min(n2, n3, n5);
        dp[i] == n2 && a++;
        dp[i] == n3 && b++;
        dp[i] == n5 && c++;
    }
    return dp[n - 1];
};