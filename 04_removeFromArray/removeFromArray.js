const removeFromArray = function(array, ...argument) {

    const newArray = [];

    array.forEach(element => {
       if(!argument.includes(element)){
        newArray.push(element);
       } 
    });
    return newArray;

   

};

// Do not edit below this line
module.exports = removeFromArray;
