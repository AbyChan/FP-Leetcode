/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for(var i = 0, max = nums.length; i < max; i++) {
        if(nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            --i;
            --max;
        }
    }
};
