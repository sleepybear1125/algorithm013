function permute(nums: number[]): number[][] {
    let result:number[][] = [];
    _generate(nums, [], result, new Set());
    return result;
};

function _generate(nums: number[], path:number[], result:Array<number[]>, used:Set<number>) {
    if (path.length >= nums.length) {
        result.push(path.slice());
        return ;
    }
    nums.forEach((v)=>{
        if (used.has(v)) { 
            return; 
        }
        path.push(v);
        used.add(v);
        _generate(nums, path, result, used);
        path.pop();
        used.delete(v);
    })
}