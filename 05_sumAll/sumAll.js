const sumAll = function(num1,num2) {
    let sum = 0;
    
    if(num1<0 ||num2<0) return 'ERROR';
    if(!Number.isInteger(num1)||!Number.isInteger(num2))return 'ERROR';

    if(num1>num2){
        let aux = num1;
        num1 = num2;
        num2= aux;
    }
    for (let i = 0; i < num2; i++) {
        sum += num1++;
        
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
