class Solution(object):
    def addDigits(self, num):
        """
        :type num: int
        :rtype: int
        """
        if num < 10:
            return num
        res = 0
        while num != 0:
            res += num % 10
            num = num / 10
        return self.addDigits(res)
