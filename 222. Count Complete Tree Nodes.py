# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from idlelib.tree import TreeNode
from typing import Optional


class Solution:
    def get_left_height(self, root) -> int:
        height = 0
        while root:
            height = height + 1
            root = root.left
        return height

    def get_right_height(self, root) -> int:
        height = 0
        while root:
            height = height + 1
            root = root.right
        return height

    def countNodes(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        left_height = self.get_left_height(root)
        right_height = self.get_right_height(root)

        if left_height == right_height:
            return pow(2, left_height) - 1

        return 1 + self.countNodes(root.left) + self.countNodes(root.right)
