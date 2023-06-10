/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(root===null) return true

    let leftDepth = findDepth(root.left,0)
    let rightDepth = findDepth(root.right,0)
    let diff = Math.abs(leftDepth-rightDepth) 

    if(diff>1) return false

    return isBalanced(root.left)&&isBalanced(root.right)
};

function findDepth (root,level) {
    if(root===null) return level
    let leftDepth = findDepth(root.left,level+1)
    let rightDepth = findDepth(root.right,level+1)
    return Math.max(leftDepth,rightDepth)        
}


/********************************************************************************
*
Given a binary tree, determine if it is 
height-balanced
.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: true
Example 2:


Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
Example 3:

Input: root = []
Output: true
*
*********************************************************************************/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const heights = new Map();

const getHeight = (node) => {
    if (!node) return 0;
    if (heights.has(node)) return heights.get(node);
    const left = getHeight(node.left);
    const right = getHeight(node.right);

    const height = Math.max(left, right) + 1;

    // cache heights for O(N) time complexity
    heights.set(node, height);
    
    return height;
}


var isBalanced = function(root) {
    if (!root) return true;

    if(Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) return false
    
    // dfs tree to check heights at every node
    return isBalanced(root.left) && isBalanced(root.right);
};