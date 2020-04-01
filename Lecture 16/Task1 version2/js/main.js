const income = [20,30,700,500];
const costs = [100,500,50];

let totalIncome = 0;
let totalCosts = 0;

for (let i = 0; i < income.length; i++) {
    totalIncome = totalIncome + (income[i]);
}

for (let i = 0; i < costs.length; i++) {
    totalCosts = totalCosts + (costs[i]);
}

let balance = totalIncome - totalCosts;

if (balance>0) {
    console.log("Вітаю ваш баланс плюсовий і дорівноє",balance);
} else if(balance<0) {
    console.log("Нажаль ваш баланс нижче нуля і дорівноє",balance);
} else if(balance===0) {
    console.log("Нажаль ваш баланс дорівнює",balance);
}
