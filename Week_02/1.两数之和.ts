//时间复杂度O(N) 空间复杂度O(N)
function twoSum(nums: number[], target: number): number[] {
    let dict:Map<number, number> = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const v = target - nums[i];
        if (dict.has(v)) {
            const j = dict.get(v) || 0;
            return [j, i];
        } else {
            dict.set(nums[i], i);
        }
    }
    return [-1, -1];
};