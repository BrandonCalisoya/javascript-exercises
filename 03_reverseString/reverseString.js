const reverseString = function(string) {
    let stringinverted="";
    let stringlen = string.length;
    for (let i = 0; i < string.length+1; i++) {
        let char = string.charAt(stringlen);
        stringinverted += char;
        stringlen--;
    }
    return stringinverted;

};

// Do not edit below this line
module.exports = reverseString;
