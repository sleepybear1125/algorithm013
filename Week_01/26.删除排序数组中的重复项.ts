/*
 * [26] 删除排序数组中的重复项
 * 双指针解法:时间复杂度O(n),空间复杂度O(1)
 */

function removeDuplicates(nums: number[]): number {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] != nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};
