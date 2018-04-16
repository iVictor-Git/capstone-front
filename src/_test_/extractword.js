const extractWord = (sentence = '') => {
    if (!sentence) return [''];
    console.log(sentence.split(' '));
    return sentence.split(' ');
}

module.exports = {
    extractWord: extractWord
}