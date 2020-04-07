const data = [23, 2, 45, 56, 1, 22, 134, 8, 33, 22, 44, 44, 3, 0, 5, 0, 56, 1, 1, 1, 70];
let newDataList = [];
for (let i = 0; i < data.length; i++) {
    if (!newDataList.includes(data[i])) {
       newDataList.push(data[i]); 
    }
}
console.log(newDataList);


