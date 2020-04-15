let usd;
let pln;
let cad;
let bgn;
let ron;

const calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener("click", function () {
   
    const currencyElement = document.getElementById('currency').value;

    let currencyCours;
    switch (currencyElement) {
        case 'USD':
            currencyCours = usd
            break
        case 'PLN':
            currencyCours = pln
            break;
        case 'CAD':
            currencyCours = cad
            break;
        case 'BGN':
            currencyCours = bgn
            break
        case 'RON':
            currencyCours = ron
            break
    };
    const currencyValue = document.getElementById("currencyValue");
    currencyValue.innerHTML = currencyCours + currencyElement + " за одиницю";
    const amountElement = document.getElementById('amount');
    const amount = (amountElement.value);
    let suma = currencyCours * amount;
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "за " + amount + " одиниць валюти  ви отримаєте " + suma + currencyElement;
});


async function getResponce () {
    let responce = await fetch('https://api.exchangeratesapi.io/latest');
    let content = await responce.json();
    let kurs = content.rates;
    usd = kurs.USD;
    pln = kurs.PLN;
    cad = kurs.CAD;
    bgn = kurs.BGN;
    ron = kurs.RON;
}
getResponce ()