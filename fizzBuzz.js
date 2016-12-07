module.exports = function fizzBuzz(n)
{
    if (n <= cache.length) return cache.slice(0, n);

    for (var i = cache.length; i < n; i++)
    {
        var fizz = false,
            buzz = false;

        if (i % 3 === 2) fizz = true;
        if (i % 5 === 4) buzz = true;
        if (fizz && buzz)
        {
            cache.push('FizzBuzz');
        } else if (fizz)
        {
            cache.push('Fizz');
        } else if (buzz)
        {
            cache.push('Buzz');
        } else
        {
            cache.push('' + (i + 1));
        }
    }

    return cache.slice(0, n);
};

var cache = [];