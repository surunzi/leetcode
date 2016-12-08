var chai = require('chai'),
    reverseString = require('./reverseString');

var expect = chai.expect;

describe('reverse string', function ()
{
    it('reverse string', function ()
    {
        expect(reverseString('abc')).to.equal('cba');
        expect(reverseString('d')).to.equal('d');
    });
});
