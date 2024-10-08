// console.log('Add money loaded');
document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    console.log('button clicked')
    // getInputValue();

    const addMoney = getInputValueById('add-money-input');
    const pinNumber = getInputValueById('pin-number-input');
    console.log('Input value with parameter', addMoney, pinNumber);
})