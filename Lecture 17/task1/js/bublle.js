const data = [23, 2, 45, 56, 1, 22, 134, 8, 33, 22, 44, 44, 3, 0, 5];
function bubbleSort(data) {
    for (let j = data.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (data[i] > data[i + 1]) {
          let temp = data[i];
          data[i] = data[i + 1];
          data[i + 1] = temp;
        }
      }
    }
    return(data);
}
console.log(data);

function sortNumericArray(data) {
    return bubbleSort(data);
};
console.log(sortNumericArray(data));
