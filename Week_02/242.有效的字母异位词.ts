//时间复杂度O(N) 空间复杂度O(N) N为字符串的字符最大长度
function isAnagram(s: string, t: string): boolean {
    const charSArr = [...s];
    const charTArr = [...t];
    if (charSArr.length != charTArr.length) {
        return false;
    }
    let dict:Map<string, number> = new Map<string, number>();
    let l =  charSArr.length;
    for (let i = 0; i < l; i++) {
        const plusK = charSArr[i];
        const minusK = charTArr[i];
        if (plusK == minusK) {
            continue;
        }
        const plusV = dict.get(plusK) || 0;
        dict.set(plusK, plusV + 1);
        const minusV = dict.get(minusK) || 0;
        dict.set(minusK, minusV - 1);
    }
    const flag = [...dict.values()].some((v) => {
        return (v != 0);
    })
    return !flag;
};