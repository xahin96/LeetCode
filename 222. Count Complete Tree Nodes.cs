/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public int CountNodes(TreeNode root) {
        if(root == null)
        {
            return 0;
        }
        int leftHeight = getLeftHeight(root);
        int rightHeight = getRightHeight(root);

        if(leftHeight == rightHeight)
        {
            return (int)Math.Pow(2, leftHeight) - 1;
        }
        return 1 + CountNodes(root.left) + CountNodes(root.right);
    }

    public int getLeftHeight(TreeNode root)
    {
        int height = 0;
        while(root != null)
        {
            height++;
            root = root.left;
        }
        return height;
    }

    public int getRightHeight(TreeNode root)
    {
        int height = 0;
        while(root != null)
        {
            height++;
            root = root.right;
        }
        return height;
    }
}