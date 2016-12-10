var chai = require('chai'),
    singleNumber = require('./singleNumber');

var expect = chai.expect;

describe('single number', function ()
{
    it('single number', function ()
    {
        expect(singleNumber([1, 2, 2, 1, 5])).to.equal(5);
        expect(singleNumber([-1, -1, 0, 2, 2])).to.equal(0);
    });
});