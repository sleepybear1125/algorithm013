/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    let temp:{ [n: number] : number } = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        const diffIdx = temp[diff];
        if(diffIdx !== undefined) {
            return [diffIdx, i];
        }
        temp[nums[i]] = i;
    }
    return [-1, -1];
};
// @lc code=end

