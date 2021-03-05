const assert = require('chai').assert;
const fs = require('fs');
const calc = require('./calculation');
const data = JSON.parse(fs.readFileSync('test-data.json'));

// Revenue tests
describe('Revenue', function(){
    it("empty input - no accounts classified as revenue", function(){
        assert.equal(calc.calc_rev([]), 0)
    });
    it("varied accounts - some classified as revenue mixed with others", function(){
        assert.equal(calc.calc_rev(data.data), 15)
    });
});

// Expenses tests
describe('Expenses', function(){
    it("empty input - no accounts classified as expenses", function(){
        assert.equal(calc.calc_exp([]), 0)
    });
    it("varied accounts - some classified as expenses mixed with others", function(){
        assert.equal(calc.calc_exp(data.data), 20)
    });
});

// Gross Profit Margin tests

describe('Gross Profit Margin', function(){
    it("empty input - no matching accounts", function(){
        assert.equal(calc.calc_gpm([], 5), 0)
    });
    it("zero division - revenue value is zero", function(){
        assert.equal(calc.calc_gpm(data.data, 0), Infinity)
    });
})

// // // Net Profit Margin tests

// describe('Net Profit Margin', function(){
// })

// // // Working Capital Ratio tests

// describe('Working Capital Ratio', function(){
// })