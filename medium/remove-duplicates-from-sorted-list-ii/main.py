# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def deleteDuplicates(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if head == None or head.next == None:
            return head
        fake = ListNode(0)
        fake.next = head
        phead, tmp = fake, fake.next
        while phead.next:
            while tmp.next and tmp.next.val == phead.next.val:
                tmp = tmp.next
            if tmp == phead.next:
                phead = phead.next
                tmp = phead.next
            else:
                phead.next = tmp.next
        return fake.next
