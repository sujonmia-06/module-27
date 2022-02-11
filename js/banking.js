// input field function
function getInputValue(inputID) {
    // input amount in input field and make it float value
    const input = document.getElementById(inputID);
    const newAmount = parseFloat(input.value);
    // reset value of input field
    input.value = '';

    return newAmount;
}
// update total field amount function
function updateTotalField(totalFieldID, newAmount) {
    // amount and make it float value and update total amount
    const total = document.getElementById(totalFieldID);
    const previousTotal = parseFloat(total.innerText);
    total.innerText = previousTotal + newAmount;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    return previousBalanceTotal;
}
// update balance function
function updateBalance(newAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    /* const previousBalanceTotal = parseFloat(balanceTotal.innerText); */
    previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + newAmount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - newAmount;
    }
}
// deposit amount and update total balance amount
document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositAmount = getInputValue('deposit-input');
    if (newDepositAmount > 0) {
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }
    else {
        alert('Please enter a valid amount.');
    }
});
//////////////////////////////////////////////////////////////////////////////
// withdraw amount and update total balance amount
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > currentBalance) {
        alert('You do not have enough balance');
    }
    else if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }
    else {
        alert('Please enter a valid amount.');
    }
})
