

function getInputValue (){
    // deposit amount in input field and make it float value
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = parseFloat(depositInput.value);
    // reset value of input field
    depositInput.value = '';

    return newDepositAmount;
}



// deposit amount and update total balance amount
document.getElementById('deposit-btn').addEventListener('click', function() {
    const newDepositAmount = getInputValue();
    // deposit amount and make it float value and update total deposit amount
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotal.innerText);
    depositTotal.innerText =  previousDepositTotal + newDepositAmount;
    
    // previous balance amount and new deposit amount adding
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    balanceTotal.innerText = previousBalanceTotal + newDepositAmount;
});
//////////////////////////////////////////////////////////////////////////////
// withdraw amount and update total balance amount
document.getElementById('withdraw-btn').addEventListener('click', function() {
    // withdraw amount in input field and make it float value
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = parseFloat(withdrawInput.value);
    // withdraw amount and make it float value and update total withdraw amount
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotal.innerText);
    withdrawTotal.innerText = previousWithdrawTotal + newWithdrawAmount;
    // reset value of input field
    withdrawInput.value = '';
    // previous balance amount and new withdraw amount deducting
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    balanceTotal.innerText = previousBalanceTotal - newWithdrawAmount;
})
