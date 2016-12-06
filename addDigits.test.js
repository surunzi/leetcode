var chai = require('chai'),
    addDigits = require('./addDigits');

var expect = chai.expect;

describe('add digits', function ()
{
    it('add digits', function ()
    {
        var testCase = [
            [38, 2],
            [0, 0],
            [154, 1],
            [5432, 5]
        ];

        testCase.forEach(function (val)
        {
            expect(addDigits(val[0])).to.equal(val[1]);
        });
    });
});