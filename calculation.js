#!/usr/bin/env node

// Functions and calculations for all 5 values will go here:
/* To do list (for tomorrow):
*   Polish WCR function - find a way to clean up long/reused code segments.
*   Global function for account.total_value totalling - often reused.
*   Code comments/documentation for each function.
*   Formatting output correctly for each unit (currency and percentage values).
*   Implement unit test framework.
*   Implement some basic unit tests.
*   Final check-through of application and push all changes to repo.
*/

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
    const debit_assets_filter = accounts.filter(account => account.account_category === 'assets' && account.value_type === 'debit');
    const debit_assets_arr = debit_assets_filter.filter(asset => asset.account_type === 'current' || asset.account_type === 'bank' || asset.account_type === 'current_accounts_receivable');
    let assets_debit = 0;
    for (let item of debit_assets_arr){
        assets_debit += item.total_value;
    }

    const credit_assets_filter = accounts.filter(account => account.account_category === 'assets' && account.value_type === 'credit');
    const credit_assets_arr = credit_assets_filter.filter(asset => asset.account_type === 'current' || asset.account_type === 'bank' || asset.account_type === 'current_accounts_receivable');
    let assets_credit = 0;
    for (let item of credit_assets_arr){
        assets_credit += item.total_value;
    }

    const debit_liab_filter = accounts.filter(account => account.account_category === 'liability' && account.value_type === 'debit');
    const debit_liab_arr = debit_liab_filter.filter(asset => asset.account_type === 'current' || asset.account_type === 'current_accounts_payable');
    let liab_debit = 0;
    for (let item of debit_liab_arr){
        liab_debit += item.total_value;
    }

    const credit_liab_filter = accounts.filter(account => account.account_category === 'liability' && account.value_type === 'credit');
    const credit_liab_arr = credit_liab_filter.filter(asset => asset.account_type === 'current' || asset.account_type === 'current_accounts_payable');
    let liab_credit = 0;
    for (let item of credit_liab_arr){
        liab_credit += item.total_value;
    }

    const assets = assets_debit - assets_credit;
    const liabilities = liab_debit - liab_credit;

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