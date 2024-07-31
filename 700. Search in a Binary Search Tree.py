# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from idlelib.tree import TreeNode
from typing import Optional


class Solution:
    def searchBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        curr = root
        while curr != None:
            if curr.val == val:
                return curr
            elif curr.val > val:
                curr = curr.left
            elif curr.val < val:
                curr = curr.right
        return None
