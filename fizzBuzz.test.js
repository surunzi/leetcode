var chai = require('chai'),
    fizzBuzz = require('./fizzBuzz');

var expect = chai.expect;

describe('fizz buzz', function ()
{
    it('output the string representation of numbers from 1 to n', function ()
    {
        expect(fizzBuzz(1)).to.eql(['1']);
        expect(fizzBuzz(3)).to.eql(['1', '2', 'Fizz']);
        expect(fizzBuzz(15)).to.eql([
            '1',
            '2',
            'Fizz',
            '4',
            'Buzz',
            'Fizz',
            '7',
            '8',
            'Fizz',
            'Buzz',
            '11',
            'Fizz',
            '13',
            '14',
            'FizzBuzz'
        ]);
    });
});