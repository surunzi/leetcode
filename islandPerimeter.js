module.exports = function (grid)
{
    var h = grid.length,
        ret = [],
        found = false,
        w = grid[0].length,
        x, y;

    function check(x, y)
    {
        if (x < 0 || x >= w) return 1;
        if (y < 0 || y >= h) return 1;

        var val = grid[y][x];

        if (val === 2) return 0;
        if (val === 0) return 1;

        grid[y][x] = 2;
        ret.push(check(x - 1, y) + check(x + 1, y) + check(x, y - 1) + check(x, y + 1));

        return 0;
    }

    for (y = 0; y < h; y++)
    {
        for (x = 0; x < w; x++)
        {
            if (grid[y][x] === 1)
            {
                check(x, y);
                found = true;
                break;
            }
        }
        if (found) break;
    }

    return ret.reduce(function (a, b) { return a + b });
};