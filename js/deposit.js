document.getElementById('btn-deposit').addEventListener('click', function () {
    const deposit = document.getElementById('deposit-amount');
    const deposit1 = deposit.value;
    console.log(deposit1);
    const preDeposit = document.getElementById('pre-deposit');
    const preDeposit1 = preDeposit.innerText;
    //preDeposit = deposit1;

    console.log(preDeposit1);

    const totalDeposit = parseFloat(preDeposit1) + parseFloat(deposit1);
    console.log(totalDeposit);

    preDeposit.innerText = parseFloat(totalDeposit);
    console.log(totalDeposit);
    deposit.value = '';

    //get total balance
    const balanceTotalElement = document.getElementById('balance');
    const balanceTotalString = balanceTotalElement.innerText;
    const newBalanceTotal = parseFloat(balanceTotalString) + parseFloat(deposit1);
    balanceTotalElement.innerText = newBalanceTotal;

})


