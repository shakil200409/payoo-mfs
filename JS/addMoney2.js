document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputValueById('add-money-input');
    const pinNumber = getInputValueById('pin-number-input');
    

    // Verification of pin number, Wrong way
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add money, please try again later')
    }
})