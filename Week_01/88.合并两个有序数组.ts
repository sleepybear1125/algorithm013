/**
 * 88. 合并两个有序数组
 * 解法1: js api
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    for (let i = 0; i < nums2.length; i++) {
        nums1[m + i] = nums2[i];
    }
    nums1.sort((l, r)=>{
        return l - r;
    })
};