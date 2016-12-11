module.exports = function (a, b)
{
    var carry, ret;

    do
    {
        // Use >>> to coerces its arguments to unsigned integers(two's complement representation).
        carry = (a & b) << 1 >>> 0;
        ret = (a ^ b) >>> 0;
        a = carry;
        b = ret;
    } while (carry > 0);

    return ret << 0;
};