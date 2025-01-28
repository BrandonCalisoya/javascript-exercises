const palindromes = function (word) {
    const cleanSentence = word.toLowerCase().replace(/[^a/zA-Z0-9]/g, '');
    let start = 0;
    let end = cleanSentence.length -1;
    while (start < end ){
        if(cleanSentence[start] !== cleanSentence[end]){
            return false;
        }
        start++;
        end--;
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
