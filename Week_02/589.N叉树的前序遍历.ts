class TreeNode {
    constructor (public val:number, public children:TreeNode[]) {
        this.val = val;
        this.children = children;
    }
};

//迭代方法:时间复杂度O(N) 空间复杂度O(N)
function preorder(root:TreeNode) {
    if (!root) {
        return [];
    }
    let result:number[] = [];
    let queue:TreeNode[] = [root];
    while(queue.length > 0) {
        const node = queue.shift();
        if (!node) {
            continue;
        }
        result.push(node.val);
        if (node.children) {
            queue.unshift(...node.children);
        }
    }
    return result;
}

//递归方法:时间复杂度O(N) 空间复杂度O(N)
function preorder2(root:TreeNode) {
    let result:number[] = [];
    let order = (node:TreeNode) => {
        if (!node) {
            return ;
        }
        result.push(node.val);
        node.children.forEach(v => {
            order(v);
        });
    }
    order(root);
    return result;
}