const usd = 27.4;
const eur = 30;
const rub = 3.45;
const bgn = 15;
const ron = 8;

const calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener("click", function () {
   
    const currencyElement = document.getElementById('currency').value;

    let currencyCours;
    switch (currencyElement) {
        case 'USD':
            currencyCours = usd
            break
        case 'EUR':
            currencyCours = eur
            break;
        case 'RUB':
            currencyCours = rub
            break;
        case 'BGN':
            currencyCours = bgn
            break
        case 'RON':
            currencyCours = ron
            break
    };
    const currencyValue = document.getElementById("currencyValue");
    currencyValue.innerHTML = currencyCours + " гривень за одиницю";
    const amountElement = document.getElementById('amount');
    const amount = (amountElement.value);
    let suma = currencyCours * amount;
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "за " + amount + " одиниць валюти в гривневому еквіваленті ви отримаєте " + suma + " грн.";
});

