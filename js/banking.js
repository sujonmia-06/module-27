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

// deposit amount and update total balance amount
document.getElementById('deposit-btn').addEventListener('click', function () {
    // function calling: input field function
    const newDepositAmount = getInputValue('deposit-input');
    // function calling: update total field amount function
    updateTotalField('deposit-total', newDepositAmount);

    // previous balance amount and new deposit amount adding
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    balanceTotal.innerText = previousBalanceTotal + newDepositAmount;
});
//////////////////////////////////////////////////////////////////////////////
// withdraw amount and update total balance amount
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // function calling: input field function
    const newWithdrawAmount = getInputValue('withdraw-input');
    // function calling: update total field amount function
    updateTotalField('withdraw-total', newWithdrawAmount);

    // previous balance amount and new withdraw amount deducting
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    balanceTotal.innerText = previousBalanceTotal - newWithdrawAmount;
})
