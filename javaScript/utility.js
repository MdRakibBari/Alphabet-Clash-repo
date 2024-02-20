function addHere(elementId) {
    const firstId = document.getElementById(elementId);
    firstId.classList.add("hidden");
}

function removeHere(elementId) {
    const secondId = document.getElementById(elementId);
    secondId.classList.remove('hidden');
}

function coloringTheKeyBoard(alphabets) {
    const highLightTheKey = document.getElementById(alphabets);
    highLightTheKey.classList.add('bg-orange-400');
}

function removeColorOfKey(elementId) {
    const removeColor = document.getElementById(elementId);
    removeColor.classList.remove('bg-orange-400')

}

function getTheAlphabetArray() {
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabetString.split('');
    const random = Math.floor(Math.random() * 26);
    const randomAlphabet = alphabetArray[random];
    return randomAlphabet
}

function setAsTextToNumber(elementId) {
    const changeElement = document.getElementById(elementId);
    const gotTheText = changeElement.innerText;
    const change2Number = parseInt(gotTheText);
    return change2Number;
}

function setInSpan(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value
}


function removeBgFromLastKey(elementId){
    const alphabet = document.getElementById(elementId);
    const text = alphabet.innerText;
    return text
}