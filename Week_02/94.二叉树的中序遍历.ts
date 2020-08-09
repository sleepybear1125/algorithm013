class BTreeNode {
    val: number
    left: BTreeNode | null
    right: BTreeNode | null
    constructor(val?: number, left?: BTreeNode | null, right?: BTreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

//迭代解法:时间复杂度O(N) 空间复杂度O(N)
function inorderTraversal(root: BTreeNode | null): number[] {
    if (!root) {
        return [];
    }
    let result:number[] = [];
    let stack:BTreeNode[] = [];
    while(root || stack.length > 0) {
        while(root) {
            stack.push(root);
            root = root.left;
        }
        const node = stack.pop();
        if (!node) {
            continue;
        }
        result.push(node.val);
        root = node.right;
    }
    return result;
}

//递归解法:时间复杂度O(N) 空间复杂度O(N)
function inorderTraversal2(root: BTreeNode | null): number[] {
    let result:number[] = [];
    traversal(root, result);
    return result;
}

function traversal(root: BTreeNode | null, result:number[]) {
    if (!root) {
        return ;
    }
    root.left && traversal(root.left, result);
    result.push(root.val);
    root.right && traversal(root.right, result);
}