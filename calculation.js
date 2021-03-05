#!/usr/bin/env node

// Calculation file for Coding Challenge - Ray Hackshaw / March 2021

/**
 * Loop that totals values of an array and returns the total as a single number value.
 * Used for multiple functions throughout the file.
 * @param  {Array} accounts_array aarray of accounts retrieved from data.json to be filtered
 * @return {Number}            calculated Total
 */

function calc_total(accounts_array){
    let total_sum = 0;
    for (let account of accounts_array){
        total_sum += account.total_value;
    }
    return total_sum
}

/**
 * Revenue calculation
 * @param  {Array} accounts array of accounts retrieved from data.json to be filtered
 * @return {Number}            calculated total Revenue
 */

function calc_rev(accounts){
    const rev_array = accounts.filter(account => account.account_category === 'revenue')
    const total_rev = calc_total(rev_array);
    return total_rev
}

/**
 * Expenses calculation
 * @param  {Array} accounts array of accounts retrieved from data.json to be filtered
 * @return {Number}            calculated total Expenses
 */

function calc_exp(accounts){
    const exp_array = accounts.filter(account => account.account_category === 'expense')
    const total_exp = calc_total(exp_array);
    return total_exp
}

/**
 * Gross Profit Margin calculation
 * @param  {Array} accounts array of accounts retrieved from data.json to be filtered
 * @param {Number} rev_value the revenue value returned by the previous 'calc_rev' function 
 * @return {Number}            calculated Gross Profit Margin percentage
 */

function calc_gpm(accounts, rev_value){
    const debit_sales = accounts.filter(account => account.account_type === 'sales' && account.value_type === 'debit');
    const total_gp = calc_total(debit_sales);
    const gpm_value = (total_gp / rev_value) * 100;
    return gpm_value
}

/**
 * Net Profit Margin calculation
 * @param  {Number} rev_value array of accounts retrieved from data.json to be filtered
 * @param {Number} exp_value the Expenses value returned by the previous 'calc_exp' function 
 * @return {Number}            calculated Net Profit Margin percentage
 */

function calc_npm(rev_value, exp_value){
    const total_np = rev_value - exp_value;
    const npm_value = (total_np / rev_value) * 100;
    return npm_value
}

/**
 * Working Capital Ratio calculation
 * @param  {Array} accounts array of accounts retrieved from data.json to be filtered
 * @return {Number}            calculated Working Capital Ratio percentage
 * Two way filter for finding both relevant asset and liability account arrays.
 * Assets and liability totals are calculated separately before being used to calculate the Working Capital Ratio at the very end of the function.
 * Whitespace used to highlight function structure and important variables.
 */

function calc_wcr(accounts){
    const assets_array = accounts.filter(account => account.account_type === 'current' || account.account_type === 'bank' || account.account_type === 'current_accounts_receivable');
    
    const debit_assets_array = assets_array.filter(asset => asset.account_category === 'assets' && asset.value_type === 'debit');
    const debit_assets_value = calc_total(debit_assets_array);
    const credit_assets_array = assets_array.filter(asset => asset.account_category === 'assets' && asset.value_type === 'credit');
    const credit_assets_value = calc_total(credit_assets_array);

    const assets = debit_assets_value - credit_assets_value;

    const liab_array = accounts.filter(asset => asset.account_type === 'current' || asset.account_type === 'current_accounts_payable');
    
    const debit_liab_array = liab_array.filter(account => account.account_category === 'liability' && account.value_type === 'debit');
    const debit_liab_value = calc_total(debit_liab_array);
    const credit_liab_array = liab_array.filter(account => account.account_category === 'liability' && account.value_type === 'credit');
    const credit_liab_value = calc_total(credit_liab_array);

    const liabilities = debit_liab_value - credit_liab_value;

    const wcr_value = (assets / liabilities) * 100;
    return wcr_value;
}

module.exports = {
    calc_rev,
    calc_exp,
    calc_gpm,
    calc_npm,
    calc_wcr
}