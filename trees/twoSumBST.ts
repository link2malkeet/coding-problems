// Given the roots of two binary search trees, root1 and root2, return true if and only if there is a node in the first tree and a node in the second tree whose values sum up to a given integer target.

(() => {
  class TreeNode {
    val: number;
    left: TreeNode;
    right: TreeNode;
    constructor(value: number) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
  }

  class BST {
    root: TreeNode;
    constructor() {
      this.root = null;
    }
    insert(val: number) {
      const treeNode = new TreeNode(val);
      if (this.root === null) {
        this.root = treeNode;
      } else {
        let current = this.root;
        while (true) {
          if (val < current.val) {
            if (current.left === null) {
              current.left = treeNode;
              break;
            }
            current = current.left;
          } else {
            if (current.right === null) {
              current.right = treeNode;
              break;
            }
            current = current.right;
          }
        }
      }
    }

    inorderTraversal(node: TreeNode | null): void {
      if (node !== null) {
        this.inorderTraversal(node.left);
        console.log(node.val);
        this.inorderTraversal(node.right);
      }
    }
  }

  function twoSumBSTs(
    root1: TreeNode | null,
    root2: TreeNode | null,
    target: number
  ): boolean {
    const set = new Set();
    const dfs = (node: TreeNode) => {
      if (node !== null) {
        const diff = target - node.val;
        set.add(diff);
        dfs(node.left);
        dfs(node.right);
      }
    };
    dfs(root1);

    const hasTargetValue = (node: TreeNode) => {
      if (node === null) {
        return false;
      }
      if (set.has(node.val)) {
        return true;
      }
      return hasTargetValue(node.left) || hasTargetValue(node.right);
    };
    return hasTargetValue(root2);
  }

  const bst1 = new BST();
  bst1.insert(2);
  bst1.insert(1);
  bst1.insert(4);
  const bst2 = new BST();
  bst2.insert(1);
  bst2.insert(0);
  bst2.insert(3);

  bst1.inorderTraversal(bst1.root);
  console.log("****");
  bst2.inorderTraversal(bst2.root);
  console.log("****");
  console.log(twoSumBSTs(bst1.root, bst2.root, 5));
})();
