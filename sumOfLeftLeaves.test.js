var expect = require('chai').expect,
    sumOfLeftLeaves = require('./sumOfLeftLeaves');

describe('sum of left leaves', function ()
{
    it('sum of left leaves', function ()
    {
        expect(sumOfLeftLeaves({
            val: 3,
            left: {
                val: 9,
                left: null,
                right: null
            },
            right: {
                val: 20,
                left: {
                    val: 15,
                    left: null,
                    right: null
                },
                right: {
                    val: 7,
                    left: null,
                    right: null
                }
            }
        })).to.equal(24);

        expect(sumOfLeftLeaves(null)).to.equal(0);
    });
});