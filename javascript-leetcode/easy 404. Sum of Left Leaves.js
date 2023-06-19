var sumOfLeftLeaves = function(root) {

    let sum = 0

    function traverse (node,isLeft) {
        if(node===null) return
        if(isLeft&&!node.left&&!node.right) sum = sum + node.val
        traverse(node.left,true)
        traverse(node.right,false)
    }

    traverse(root,false)

    return sum
};



/********************************************************************************
*
Given the root of a binary tree, return the sum of all left leaves.

A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 24
Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
Example 2:

Input: root = [1]
Output: 0
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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if(root.left===null && root.right===null) return 0

    let sum = 0

    // queue record node and level and isLeft , using push , shift
    let queue = []

    function BFS (node,level) {
        if(node===null) return
        node.left && queue.push([node.left,level,true])
        node.right && queue.push([node.right,level,false])
        BFS(node.left,level+1)
        BFS(node.right,level+1)
    }
    BFS(root,1)

    let countLevel = 1

    while(queue.length>0){
        const [node,level,isLeft] = queue.shift()
        console.log(node.val,level)
        if( level === countLevel) {
            if(node.left===null&&node.right===null&&isLeft) sum = sum + node.val
            countLevel ++
        }
    }

    return sum
};