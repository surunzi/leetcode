var expect = require('chai').expect,
    addStrings = require('./addStrings');

describe('add strings', function ()
{
    it('add big number in string format', function ()
    {
        expect(addStrings('0', '0')).to.equal('0');
        expect(addStrings('10', '156')).to.equal('166');
        expect(addStrings('1234567890', '112')).to.equal('1234568002');
        expect(addStrings('1', '9')).to.equal('10');
    });
});