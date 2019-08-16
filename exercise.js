const newList = ["Totam", "ut", "odit","quis", "Maiores", "unde", "EX", "EST", "corporis"];

function stringFunc(wordList) {
    for (let i = 0; i < wordList.length; i++){
        if (wordList[i] == wordList[i].toLowerCase() && wordList[i].length > 4) {
            console.log('long and lowercase');
        } else if (wordList[i].length > 4){
            console.log('long');
        } else if (wordList[i] == wordList[i].toLowerCase()) {
            console.log('lowercase');
        } else {
            console.log(wordList[i])
        }
    }
}

stringFunc(newList)