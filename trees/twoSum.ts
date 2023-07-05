// Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.

(() => {
  class TreeNode {
    val: number;
    left: TreeNode;
    right: TreeNode;
    constructor(value: number) {
      this.val = value || 0;
      this.left = null;
      this.right = null;
    }
  }

  class BST {
    root;
    constructor() {
      this.root = null;
    }

    insert(value: number) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        let current = this.root;
        while (true) {
          if (value < current.val) {
            if (current.left === null) {
              current.left = newNode;
              break;
            }
            current = current.left;
          } else {
            if (current.right === null) {
              current.right = newNode;
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
    preorderTraversal(node: TreeNode | null): void {
      if (node !== null) {
        console.log(node.val);
        this.preorderTraversal(node.left);
        this.preorderTraversal(node.right);
      }
    }
    postorderTraversal(node: TreeNode | null): void {
      if (node !== null) {
        this.postorderTraversal(node.left);
        this.postorderTraversal(node.right);
        console.log(node.val);
      }
    }
    findTarget(root: TreeNode | null, k: number): boolean {
      const set = new Set<number>();
      return this.findSum(root, k, set);
    }

    findSum(node: TreeNode | null, k: number, set: Set<number>): boolean {
      if (node === null) {
        return false;
      }

      const complement = k - node.val;
      if (set.has(complement)) {
        return true;
      }

      set.add(node.val);

      return (
        this.findSum(node.left, k, set) || this.findSum(node.right, k, set)
      );
    }
  }

  const bst = new BST();
  bst.insert(5);
  bst.insert(3);
  bst.insert(6);
  bst.insert(2);
  bst.insert(4);
  bst.insert(7);
  bst.inorderTraversal(bst.root);
  console.log("****");
  bst.preorderTraversal(bst.root);
  console.log("****");
  bst.postorderTraversal(bst.root);
  console.log("****");
  console.log(bst.findTarget(bst.root, 8));
})();
