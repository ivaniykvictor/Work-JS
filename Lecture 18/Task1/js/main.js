const squareWidth = 10;
const heightWidth = 10;


function showCalculatedPerimeter(algoritm, width, height) {
  console.log("Довжина квадрата = " + width);
  console.log("Ширина квадрата = " + height);
  console.log("Периметер квадрата = " + algoritm(width, height));
};
showCalculatedPerimeter(perimetrSquare, squareWidth, heightWidth);
// // пистаи можна код після цього коментарю


function perimetrSquare(squareWidth, heightWidth){
   return 2 * (squareWidth + heightWidth);
};




