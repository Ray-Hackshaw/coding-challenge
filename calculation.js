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
    return total_exp;
}

function calc_gpm(){
    return null
}

function calc_npm(){
    return null
}

function calc_wcr(){
    return null
}

module.exports = {
    calc_rev,
    calc_exp,
    calc_gpm,
    calc_npm,
    calc_wcr
}