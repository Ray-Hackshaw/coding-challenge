#!/usr/bin/env node

// Main console.logs and function calls will go here:

const calculations = require('./calculation');
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json'));
console.log(data.data)
const rev_value = calculations.calc_rev(data.data);
const exp_value = calculations.calc_exp(data.data);
const gpm_value = calculations.calc_gpm(data.data, rev_value);
const npm_value = calculations.calc_npm(rev_value, exp_value);
const wcr_value = calculations.calc_wcr(data.data);

console.log("Revenue: $" + rev_value.toLocaleString('en-NZ', { currency: 'NZD', maximumFractionDigits: 0, minimumFractionDigits: 0}))
console.log("Expenses: $" + exp_value.toLocaleString('en-NZ', { currency: 'NZD', maximumFractionDigits: 0, minimumFractionDigits: 0}))
console.log("Gross Profit Margin: " + gpm_value.toLocaleString('en-NZ', { maximumFractionDigits: 1, minimumFractionDigits: 0}) + '%') 
console.log("Net Profit Margin: " + npm_value.toLocaleString('en-NZ', { maximumFractionDigits: 1, minimumFractionDigits: 0}) + '%')
console.log("Working Capital Ratio: " + wcr_value.toLocaleString('en-NZ', { maximumFractionDigits: 1, minimumFractionDigits: 0}) + '%')
