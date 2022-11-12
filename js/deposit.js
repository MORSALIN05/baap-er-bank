document.getElementById('btn-deposit').addEventListener('click', function () {
    const deposit = document.getElementById('deposit-amount');
    const deposit1 = deposit.value;
    console.log(deposit1);
    const preDeposit = document.getElementById('pre-deposit');
    const preDeposit1 = preDeposit.innerText;
    //preDeposit = deposit1;

    console.log(preDeposit1);

    const totalDeposit = deposit1 + preDeposit1;
    console.log(totalDeposit);

    preDeposit.innerText = totalDeposit;
    console.log(totalDeposit);
    deposit.value = '';

})


