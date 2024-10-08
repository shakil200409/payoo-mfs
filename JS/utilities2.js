function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}


// Getting value of innerText
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

// Showing hidden items
function showSectionById(id){
    // Add hidden to all sections
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transactions-section').classList.add('hidden');

    // Remove hidden from selected id 
    document.getElementById(id).classList.remove('hidden');
}