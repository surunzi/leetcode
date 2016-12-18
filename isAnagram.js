module.exports = function (s, t)
{
    var len = s.length,
        sArr = [],
        tArr = [];

    if (len !== t.length) return false;

    for (var i = 0; i < 26; i++)
    {
        sArr[i] = 0;
        tArr[i] = 0;
    }

    for (i = 0; i < len; i++)
    {
        sArr[s[i].charCodeAt(0) - 97]++;
        tArr[t[i].charCodeAt(0) - 97]++;
    }

    for (i = 0; i < 26; i++)
    {
        if (sArr[i] !== tArr[i]) return false;
    }

    return true;
};