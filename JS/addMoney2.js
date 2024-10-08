document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputValueById('add-money-input');
    const pinNumber = getInputValueById('pin-number-input');
    

    // Checking if it is a number
    if(isNaN(addMoney)){
        alert('Failed to add money');
        return;
    }
    
    // Verification of pin number, Wrong way
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;

        // Adding history to transactions
        const p = document.createElement('p');
        p.innerText = `Added: ${addMoney}Tk.  New Balance: ${newBalance}`;
        

        // Put the p inside the transactions section
        document.getElementById('transactions-container').appendChild(p);
    }
    else{
        alert('Failed to add money, please try again later')
    }
})