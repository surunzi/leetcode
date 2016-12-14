var expect = require('chai').expect,
    moveZeroes = require('./moveZeroes');

describe('move zeroes', function ()
{
    it('move all 0\'s to the end', function ()
    {
        var arr1 = [0, 1, 0, 3, 12];
        moveZeroes(arr1);
        expect(arr1).to.eql([1, 3, 12, 0, 0]);

        var arr2 = [0, 1, 0, 4, 0, 15, 0];
        moveZeroes(arr2);
        expect(arr2).to.eql([1, 4, 15, 0, 0, 0, 0]);

        var arr3 = [1];
        moveZeroes(arr3);
        expect(arr3).to.eql([1]);

        var arr4 = [1, 0];
        moveZeroes(arr4);
        expect(arr4).to.eql([1, 0]);

        var arr5 = [1, 2, 4, 0, 8];
        moveZeroes(arr5);
        expect(arr5).to.eql([1, 2, 4, 8, 0]);
    });
});