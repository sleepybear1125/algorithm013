/*
 * [42] 接雨水
 * 解法1: 单调递减栈 时间复杂度O(n) 空间复杂度O(n)
 */

function trap(height: number[]): number {
    let area = 0;
    let stack:number[] = [];
    for (let i = 0; i < height.length; i++) {
        while (stack.length > 0 && height[stack[stack.length - 1]] < height[i]) {
            let cur = stack.pop();
            if (!cur || stack.length <= 0) break;
            let l = stack[stack.length - 1];
            let r = i;
            let h = Math.min(height[r], height[l]) - height[cur];
            area += (r - l - 1) * h;
        }
        stack.push(i);
    }
    return area;
};

