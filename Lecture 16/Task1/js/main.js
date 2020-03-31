let income = [20,30,700,900,400,50,1300,4000,10000,600];
let costs = [500,60,80,100,400,5000,900,160,1080];
let totalIncome = income.reduce( (accumulator, currentValue) => accumulator + currentValue);
let totalCosts = costs.reduce( (accumulator, currentValue) => accumulator + currentValue);
let balance = totalIncome - totalCosts;

if (balance>0) {
    console.log("Вітаю ваш баланс плюсовий і дорівноє",balance);
} else if(balance<0) {
    console.log("Нажаль ваш баланс нижче нуля і дорівноє",balance);
} else if(balance===0) {
    console.log("Нажаль ваш баланс дорівнює нулю",balance);
}

