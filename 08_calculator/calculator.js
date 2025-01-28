const add = function(...args) {

  return args.reduce((first, current)=> first +current);
	
};

const subtract = function(...args) {
  return args.reduce((first, current)=> first -current);

};

const sum = function(args=[]) {
  if(args== 0){
    return 0
  }
  if(args.length == 1) return args[0]
  let sum=0
  sum =   args.reduce((first, current)=> first+ current);

  
  return sum;

};

const multiply = function(args=[]) {
  let result =args.reduce((first, current)=> first *current);;
  
  return result;

};

const power = function(num, exp) {
  
  let numActual = num;
  for(let i =1; i< exp; i++){
    num *= numActual 
  }
	return num;
};

const factorial = function(num) {
  if(num == 0 || num == 1)return 1
    let count = num;
    let aux = num;
  for (let i = 0; i < count-1; i++) {
    num = num * (--aux);
  }
	return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
