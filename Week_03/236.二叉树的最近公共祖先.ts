function lowestCommonAncestor(root:BTreeNode, p:BTreeNode, q:BTreeNode) {
    const dfs = (root:BTreeNode | null, p:BTreeNode, q:BTreeNode):BTreeNode | null =>{
        if (!root || root.val == p.val || root.val == q.val) {
            return root;
        }
        let left = dfs(root.left, p ,q);
        let right = dfs(root.right, p ,q);
        if (left && right) { return root; }
        if (left && !right) { return left; }
        if (!left && right) { return right; }
        return null;
    }
    return dfs(root, p, q);
}