function continueGame(){
    // get a random alphabet
    const getTheAlphabet = getTheAlphabetArray();

    // set the alphabet as a innertext in paragraph
    const alphabetPlace = document.getElementById('different-alphabet');
    alphabetPlace.innerText = getTheAlphabet;
    
    coloringTheKeyBoard(getTheAlphabet);
}

function homeToGame() {
    const homeId = addHere('home-Id');
    const gameId = removeHere('game-Id');
    continueGame()
}
