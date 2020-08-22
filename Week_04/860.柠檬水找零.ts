//时间复杂度O(N),空间复杂度O(1)
function lemonadeChange(bills: number[]): boolean {
    let five = 0;
    let ten = 0;
    for(let i = 0; i < bills.length; i++) {
        if (bills[i] == 5) {
            five++;
        } else if (bills[i] == 10 && five > 0) {
            five--;
            ten++;
        } else if (bills[i] == 20 && ten > 0 && five > 0) {
            ten--;
            five--;
        } else if (bills[i] == 20 && ten <= 0 && five >= 3) {
            five -= 3;
        } else {
            return false;
        }
    }
    return true;
};