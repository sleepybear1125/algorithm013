function combine(n: number, k: number): number[][] {
    let result:number[][] = [];
    generate(n, k, 1, [], result);
    return result;
};

function generate(n:number, k: number, start:number, ans: number[], result:number[][]) {
    if (ans.length >= k) {
        result.push(ans.slice());
        return ;
    }
    for(let i = start; i <= n; i++) {
        ans.push(i);
        generate(n, k, i + 1, ans, result);
        ans.pop();
    }
}