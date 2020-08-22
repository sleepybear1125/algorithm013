function findContentChildren(g: number[], s: number[]): number {
    g = g.sort((l, r)=>{return l - r});
    s = s.sort((l, r)=>{return l - r});
    let child = 0;
    let cookie = 0;
    while(child < g.length && cookie < s.length) {
        if (g[child] <= s[cookie]) {
            child++;
        }
        cookie++;
    }
    return child;
};