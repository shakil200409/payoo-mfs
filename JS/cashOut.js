document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
    event.preventDefault();

    const cashOutAmount = getInputValueById('cash-out-input');
    const pinNumber = getInputValueById('cash-out-pin');

    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');

        const newBalance = balance - cashOutAmount;

        document.getElementById('account-balance').innerText = newBalance;

        // Adding history 
        const p = document.createElement('p');
        p.innerText = `Withdraw: ${cashOutAmount}Tk. New Balance: ${newBalance}`;

        document.getElementById('transactions-container').appendChild(p);
    }
    else{
        alert('Something went wrong, please try again later');
    }
})