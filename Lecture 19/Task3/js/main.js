const squareRed = document.getElementById('squareRed');

squareRed.addEventListener('click', function() {
    const squareRedElement = document.getElementById('squareRed');
    squareRedElement.className = 'circle';
    setInterval ( () => squareRedElement.className = 'triangle', 10000);
});
