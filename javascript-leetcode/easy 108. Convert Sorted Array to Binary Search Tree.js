/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

    const numsToBST = (nums,left,right)=>{        
        if(left > right) return null

        // 分治法
        // 將一個 array 不斷分成左右兩邊 ，並產生一個 root
        let mid = Math.floor((right+left)/2)
        const root = new TreeNode(nums[mid])
        root.left = numsToBST(nums,left,mid-1)
        root.right = numsToBST(nums,mid+1,right)
        return root
    }

    
    return numsToBST(nums,0,nums.length-1)
};


/********************************************************************************
*
Given an integer array nums where the elements are sorted in ascending order, convert it to a 
height-balanced
 binary search tree.

 

Example 1:


Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:


Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
*
*********************************************************************************/