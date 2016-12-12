var expect = require('chai').expect,
    findTheDifference = require('./findTheDifference');

describe('find the difference', function ()
{
    it('find the difference', function ()
    {
        expect(findTheDifference('ab', 'acb')).to.equal('c');
        expect(findTheDifference('test', 'setta')).to.equal('a');
    });
});