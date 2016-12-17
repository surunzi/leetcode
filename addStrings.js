module.exports = function (num1, num2)
{
    var len1 = num1.length,
        len2 = num2.length,
        max = len1,
        carry = 0,
        ret = '';

    if (len2 > max) max = len2;

    for (var i = 0; i < max; i++)
    {
        var n1 = +num1[len1 - i - 1] || 0,
            n2 = +num2[len2 - i - 1] || 0,
            sum = n1 + n2 + carry;

        carry = 0;

        if (sum > 9)
        {
            carry = 1;
            sum -= 10;
        }

        ret = sum + ret;
    }

    if (carry) ret = 1 + ret;

    return ret;
};