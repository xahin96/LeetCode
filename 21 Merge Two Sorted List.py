# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
my_list = []


class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        merged_ptr = dummy

        while list1 and list2:
            if list1.val < list2.val:
                merged_ptr.next = ListNode(list1.val)
                list1 = list1.next
            else:
                merged_ptr.next = ListNode(list2.val)
                list2 = list2.next
            merged_ptr = merged_ptr.next

        while list1:
            merged_ptr.next = ListNode(list1.val)
            list1 = list1.next
            merged_ptr = merged_ptr.next

        while list2:
            merged_ptr.next = ListNode(list2.val)
            list2 = list2.next
            merged_ptr = merged_ptr.next

        return dummy.next