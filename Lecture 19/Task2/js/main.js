const currency = document.getElementById('currency');
currency.addEventListener("click", function () {
    const currencyElement = document.getElementById('currency');
    const currency = currencyElement.value;
    console.log(currency);
    const currencyValue = document.getElementById("currencyValue");
    currencyValue.innerHTML = currency + " гривень за одиницю";
}); 
const calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener("click", function () {
    const amountElement = document.getElementById('amount');
    const amount = (amountElement.value);
    const currencyElement = document.getElementById('currency');
    const currency = currencyElement.value;
    const suma = currency * amount;
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "за " + amount + " одиниць валюти в гривневому еквіваленті ви отримаєте " + suma + " грн.";
});



