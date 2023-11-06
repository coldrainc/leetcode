function isBalanced(root) {
    if (root === null) {
        return true;
    } else {
        return Math.abs(height(root.left) - height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
    }
}

function height(root) {
    if (!root) return 0;

    return Math.max(height(root.left), height(root.right)) + 1;
}