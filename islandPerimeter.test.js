var chai = require('chai'),
    islandPerimeter = require('./islandPerimeter');

var expect = chai.expect;

describe('island perimeter', function ()
{
    it('island perimeter', function ()
    {
        expect(islandPerimeter([
            [0,1,0,0],
            [1,1,1,0],
            [0,1,0,0],
            [1,1,0,0]
        ])).to.equal(16);

        expect(islandPerimeter([
            [0, 0, 0],
            [0, 1, 0],
            [0, 1, 0]
        ])).to.equal(6);

        expect(islandPerimeter([
            [0, 1],
            [0, 0]
        ])).to.equal(4);
    });
});