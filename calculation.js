#!/usr/bin/env node

// Functions and calculations for all 5 values will go here:

function calc_rev(accounts){
    const rev_array = accounts.filter(account => account.account_category === 'revenue')
    let total_rev = 0;
    for (let account of rev_array){
        total_rev += account.total_value;
    }
    return total_rev;
}

function calc_exp(accounts){
    const exp_array = accounts.filter(account => account.account_category === 'expense')
    let total_exp = 0;
    for (let account of exp_array){
        total_exp += account.total_value;
    }
    return total_exp
}

function calc_gpm(accounts, rev_value){
    const debit_sales = accounts.filter(account => account.account_type === 'sales' && account.value_type === 'debit');
    let total_gp = 0;
    for (let account of debit_sales){
        total_gp += account.total_value;
    }
    const gpm_value = (total_gp / rev_value) * 100;
    return gpm_value
}

function calc_npm(rev_value, exp_value){
    const total_np = rev_value - exp_value;
    const npm_value = (total_np / rev_value) * 100;
    return npm_value
}

function calc_wcr(accounts){
    // Filters and calculations
    const assets_debit;
    const assets_credit;
    const assets = assets_debit - assets_credit;
    // Filters and calculations
    const liabilities_debit;
    const liabilities_credit;
    const liabilities = liabilities_debit - liabilities_credit;
    // Return working capital ratio % value 
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