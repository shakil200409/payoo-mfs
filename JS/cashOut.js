document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOutAmount = getInputValueById("cash-out-input");
    const pinNumber = getInputValueById("cash-out-pin");

    if (pinNumber === 1234) {
      const balance = getTextFieldValueById("account-balance");

      const newBalance = balance - cashOutAmount;

      document.getElementById("account-balance").innerText = newBalance;

      // Adding history
      // const p = document.createElement('p');
      // p.innerText = `Withdraw: ${cashOutAmount}Tk. New Balance: ${newBalance}`;

      // document.getElementById('transactions-container').appendChild(p);

      // Adding cashout history with another way
      const div = document.createElement("div");
      div.innerHTML = `
        <h5 class="text-2xl">Cash out</h5>
        <p class= "text-blue-500">Withdraw: ${cashOutAmount}Tk. New Balance: ${newBalance}</p>
        `;

        div.classList.add('bg-yellow-300');

        document.getElementById('transactions-container').appendChild(div);

    } else {
      alert("Something went wrong, please try again later");
    }
  });
