class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        if len(strs) == 0:
            return ''
        if len(strs) == 1:
            return strs[0]
        result = ''
        lengths = [len(i) for i in strs]
        for i in xrange(min(lengths)):
            prefixChar = strs[0][i]
            for j in xrange(1, len(strs)):
                if strs[j][i] != prefixChar:
                    return result
                result = result + prefixChar
        return result 
