class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/*
 * [21] 合并两个有序链表
 * 解法1:递归 时间复杂度O(N+M) 空间复杂度O(N+M)
 */


function mergeTwoLists1(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1) {
        return l2;
    } else if (!l2) {
        return l1;
    } else if (l1.val <= l2.val) {
        l1.next = mergeTwoLists1(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists1(l1, l2.next);
        return l2;
    }
};


/*
 * [21] 合并两个有序链表
 * [最优]解法2:暴力 时间复杂度O(N+M) 空间复杂度O(1)
 */
function mergeTwoLists2(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode(-1);
    let cur = dummy;
    while(l1 && l2) {
        if (l1.val <= l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    cur.next = l1 ? l1 : (l2 ? l2 : null);
    return dummy.next;
}

