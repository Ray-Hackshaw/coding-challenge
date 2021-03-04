#!/usr/bin/env node

// Main console.logs and function calls will go here:

const calculations = require('./calculation');
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json'));

const rev_value = calculations.calc_rev(data.data);
const exp_value = calculations.calc_exp(data.data);
const gpm_value = calculations.calc_gpm(data.data, rev_value);
const npm_value = calculations.calc_npm(rev_value, exp_value);
const wcr_value = calculations.calc_wcr();

console.log("Revenue:", rev_value)
console.log("Expenses:", exp_value)
console.log("Gross Profit Margin:", gpm_value)
console.log("Net Profit Margin:", npm_value)
console.log("Working Capital Ratio:", wcr_value)
