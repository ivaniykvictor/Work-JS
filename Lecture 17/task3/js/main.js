let number = prompt('Enter a number from 0 to 100 000');
if (number < 0 || number > 100000 || !parseInt(number, 10)) {
    let number = prompt('Data entered incorrectly')
};

for(let i = 1; i <= number; i++) {
    if(i % 2 === 0 && i % 3 === 0) {
        console.log(i + "is divided into 2 and 3")
        
    
    };
    
    if(i % 2 === 0){
        console.log(i + "is divided into 2")
        
    };

    if(i % 3 === 0){
        console.log(i + "is divided into 3")
        
    };
  
};

