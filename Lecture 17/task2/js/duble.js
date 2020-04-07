const data = [23, 2, 45, 56, 1, 22, 134, 8, 33, 22, 44, 44, 3, 0, 5, 0, 56, 1, 1, 1, 70];
let newData = [... new Set(data)];
console.log(newData);