
// deposit input field function
function getInputValue (inputID){
    // input amount in input field and make it float value
    const input = document.getElementById(inputID);
    const newAmount = parseFloat(input.value);
    // reset value of input field
    input.value = '';

    return newAmount;
}



// deposit amount and update total balance amount
document.getElementById('deposit-btn').addEventListener('click', function() {
    // function calling
    const newDepositAmount = getInputValue('deposit-input');
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
    // function calling
    const newWithdrawAmount = getInputValue('withdraw-input');
    // withdraw amount and make it float value and update total withdraw amount
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotal.innerText);
    withdrawTotal.innerText = previousWithdrawTotal + newWithdrawAmount;
    
    // previous balance amount and new withdraw amount deducting
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    balanceTotal.innerText = previousBalanceTotal - newWithdrawAmount;
})
