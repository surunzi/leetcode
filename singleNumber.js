module.exports = function (nums)
{
    var ret = nums[0];

    for (var i = 1, len = nums.length; i < len; i++) ret ^= nums[i];

    return ret;
};