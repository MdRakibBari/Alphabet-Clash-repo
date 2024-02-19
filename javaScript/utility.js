function addHere(elementId) {
    const firstId = document.getElementById(elementId);
    firstId.classList.add("hidden");
}

function removeHere(elementId){
    const secondId = document.getElementById(elementId);
    secondId.classList.remove('hidden');
}

function coloringTheKeyBoard(alphabets){
    const highLightTheKey = document.getElementById(alphabets);
    highLightTheKey.classList.add('bg-orange-400');
}

function getTheAlphabetArray() {
    const alphabetString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabetArray = alphabetString.split('');
    const random = Math.floor(Math.random() * 26);
    const randomAlphabet = alphabetArray[random];
    return randomAlphabet
}
