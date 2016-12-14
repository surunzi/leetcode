module.exports = function (nums)
{
    var numPos = 0,
        len = nums.length,
        zeroPos = 0;

    while (true)
    {
        while (nums[numPos] === 0 && numPos < len) numPos++;
        while (nums[zeroPos] !== 0 && zeroPos < len) zeroPos++;
        if (numPos === len || zeroPos === len) break;
        if (numPos > zeroPos)
        {
            swap(nums, numPos, zeroPos);
        } else
        {
            numPos++;
        }
    }
};

function swap(arr, a, b)
{
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}