console.log("Task2");
const tvShow = [
    "X-factor", 
    "Світське життя", 
    "Суперінтуїція", 
    "Голос країни", 
    "Хто зверху",
];
tvShow.push(prompt("Please add a new show"));
const tvShowСomma = tvShow.join();
const tvShowSpace = tvShow.join("| ");

console.log(tvShowСomma);
console.log(tvShowSpace);
