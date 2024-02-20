function keyBoardButtonPress(event) {
    const playerPressed = event.key;
    console.log("Player pressed this :", playerPressed )

    if(playerPressed === "Escape"){
        gameToResult()
    }

    const randomAlphabet = document.getElementById('different-alphabet');
    const justText = randomAlphabet.innerText;
    const randomShorter = justText.toLowerCase();

    if (playerPressed === randomShorter) {
        const getTheNumber = setAsTextToNumber('score-Inc-Id');
        const addPlus = getTheNumber + 1;
        setInSpan('score-Inc-Id', addPlus)

        removeColorOfKey(playerPressed);
        continueGame();

    }
    else {
        const getTheNumber = setAsTextToNumber('life-Dec-Id');
        const minusOne = getTheNumber - 1;
        setInSpan('life-Dec-Id', minusOne);
        if (minusOne === 0) {
            gameToResult()
        }
    }
}
document.addEventListener('keyup', keyBoardButtonPress)

function continueGame() {
    const getTheAlphabet = getTheAlphabetArray();

    const alphabetPlace = document.getElementById('different-alphabet');
    const bigAlphabet = getTheAlphabet.toUpperCase();
    alphabetPlace.innerText = bigAlphabet;

    coloringTheKeyBoard(getTheAlphabet)
}

function homeToGame() {
    addHere('home-Id');
    addHere('result-section')
    removeHere('game-Id');

    setInSpan('score-Inc-Id', 0)
    setInSpan('life-Dec-Id', 5)
    continueGame();
}

function gameToResult() {
    addHere('game-Id');
    removeHere('result-section');

    const lastScore = setAsTextToNumber('score-Inc-Id')
    setInSpan('game-End-Score', lastScore);

    const getTheAlpha = removeBgFromLastKey("different-alphabet");
    const doShorter = getTheAlpha.toLowerCase();
    removeColorOfKey(doShorter)
}