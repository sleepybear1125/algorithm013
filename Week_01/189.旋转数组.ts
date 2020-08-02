/*
 * [189] 旋转数组
 * 解法1: 暴力求解 时间复杂度O(n*k) 空间复杂度O(1)
 */
function rotate1(nums: number[], k: number): void {    
    const l = nums.length;
    for (let i = 0; i < k; i++) {
        let endV = nums[l - 1];
        for (let j = l - 2; j >= 0; j--) {
            nums[j + 1] = nums[j];
        }
        nums[0] = endV;
    }
};

/*
 * [189] 旋转数组
 * 解法2: js api
 */
function rotate2(nums: number[], k: number): void {    
    for(var i = 0; i < k; i++) {
        let v = nums.pop();
        v && nums.unshift();
    }
}

/*
 * [189] 旋转数组
 * 解法3: 反转法 时间复杂度O(n) 空间复杂度O(1)
 */
function rotate3(nums: number[], k: number): void {    
    if (nums.length <= 1) {
        return;
    }
    k = k % nums.length;
    nums.reverse();
    reverse(nums, 0, k);
    reverse(nums, k, nums.length - k);
}

function reverse(nums:number[], begin:number, l:number) {
    const mid = Math.floor(l / 2);
    for (let i = 0; i < mid; i++) {
        let originIdx = begin + i;
        let targetIdx = l + begin - i - 1;
        [nums[originIdx], nums[targetIdx]] = [nums[targetIdx], nums[originIdx]];
    }
}


/*
 * [189] 旋转数组
 * 解法4: 时间复杂度O(n) 空间复杂度O(1)
 */
function rotate4(nums: number[], k: number): void {    
    const l = nums.length;
    if (l <= 1) {
        return;
    }
    let count = 0;
    let curIdx = 0;
    let targetVal : number = nums[curIdx];
    delete nums[0];
    while(count < l) {
        let targetIdx = (curIdx + k) % l;
        [nums[targetIdx], targetVal] = [targetVal, nums[targetIdx]];
        if (isNaN(targetVal)) {
            curIdx = targetIdx + 1;
            targetVal = nums[curIdx];
            count != l - 1 && delete nums[curIdx];
        } else {
            curIdx = targetIdx;
        }
        count++;
    }
}

