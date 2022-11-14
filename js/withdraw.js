//console.log('withdraw screen');
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawValue = document.getElementById('withdraw-value');
    const withdrawValueString = withdrawValue.value;
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountNew = withdrawAmount.innerText;
    const totalWithdrawAmount = parseFloat(withdrawValueString) + parseFloat(withdrawAmountNew);
    withdrawAmount.innerText = totalWithdrawAmount;
    withdrawValue.value = '';

    const balanceNow = document.getElementById('balance');
    const balanceTotalString2 = balanceNow.innerText;
    const currentBalance = parseFloat(balanceTotalString2) - parseFloat(withdrawValueString);
    balanceNow.innerText = currentBalance;

})