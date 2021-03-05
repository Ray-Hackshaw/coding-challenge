const assert = require('chai').assert;
const calc = require('./calculation');

// Revenue tests

describe('Revenue', function(){
    it("no accounts classified as revenue", function(){
        assert.equal(calc.calc_rev([]), 0)
    })
})


// // Expenses tests

describe('Expenses', function(){
    it("no accounts classified as expenses", function(){
        assert.equal(calc.calc_exp([]), 0)
    })
})

// // Gross Profit Margin tests

// describe('Gross Profit Margin')

// // Net Profit Margin tests

// describe('Net Profit Margin')

// // Working Capital Ratio tests

// describe('Working Capital Ratio')