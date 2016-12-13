var expect = require('chai').expect,
    invertTree = require('./invertTree');

describe('invert tree', function ()
{
    it('invert binary tree', function ()
    {
        expect(invertTree({
            val: 4,
            left: {
                val: 2,
                left: {
                    val: 1,
                    left: null,
                    right: null
                },
                right: {
                    val: 3,
                    left: null,
                    right: null
                }
            },
            right: {
                val: 7,
                left: {
                    val: 6,
                    left: null,
                    right: null
                },
                right: {
                    val: 9,
                    left: null,
                    right: null
                }
            }
        })).to.eql({
            val: 4,
            left: {
                val: 7,
                left: {
                    val: 9,
                    left: null,
                    right: null
                },
                right: {
                    val: 6,
                    left: null,
                    right: null
                }
            },
            right: {
                val: 2,
                left: {
                    val: 3,
                    left: null,
                    right: null
                },
                right: {
                    val: 1,
                    left: null,
                    right: null
                }
            }
        });

        expect(invertTree(null)).to.eql(null);
    });
});