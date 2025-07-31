// examine.js
var E_Model = document.getElementById("MODEL");
var E_Typing = document.getElementById("TYPING");
var E_Speed = document.getElementById("Speed");
var TEXT_LENGTH = 0;

class ProgressInfo {
    errors = [];
    userInputTokens = [];
    validLength = 0;
    totalLength = 0;
    constructor(errors, userInputTokens, validLength, totalLength) {
        this.errors = errors;
        this.userInputTokens = userInputTokens;
        this.validLength = validLength;
        this.totalLength = totalLength;
    }
    isAllCorrect() {
        return this.errors.length === 0;
    }
    getProgressPercentage() {
        if (this.totalLength === 0) return 0;
        return this.userInputTokens / this.totalLength;
    }
    getOverviewPercentage() {
        if (this.totalLength === 0) return 0;
        return (this.userInputTokens.length - this.errors.length) / this.totalLength;
    }
    getCorrectCount() {
        return this.userInputTokens.length - this.errors.length;
    }
}


function getUserInput() {
    return E_UserInput.value;
}

function examine() {
    var userInput = getUserInput();
    if (userInput.length === 0) return false;
    // 1.获取练习tokens和用户输入tokens
    const tokens = _CURRENT_TOKENS;
    const userInputTokens = antiparse(userInput);
    // 2.检查错误场所
    var errors = [];
    var lastValid = 0;
    for (var index = 0; index < userInputTokens.length; index++) {
        let userChar = userInputTokens[index];
        let modelChar = tokens[index];
        if (userChar != modelChar) {
            errors.push(index);
        }
    }
    if (errors.length > 0) {
        lastValid = errors[0] - 1;
    } else {
        lastValid = userInputTokens.length - 1;
    }
    return new ProgressInfo(errors, userInputTokens, lastValid + 1, tokens.length);
}

function updateDisplay(progressInfo) {
    for (let i = 0; i < E_Model.children.length; i++) {
        let E_modelChar = E_Model.children[i];
        // console.log("i=", i, "validLength=", progressInfo.validLength, "userInputTokens=", progressInfo.userInputTokens,"_CUR="+_CURRENT_TOKENS);
        if (i < progressInfo.userInputTokens.length) {
            if (_CURRENT_TOKENS[i] == progressInfo.userInputTokens[i]) {
                E_modelChar.classList.remove("Error", "Pending");
                E_modelChar.classList.add("Correct");
            } else {
                E_modelChar.classList.remove("Correct", "Pending");
                E_modelChar.classList.add("Error");
            }
        } else {
            E_modelChar.classList.remove("Correct", "Error");
            E_modelChar.classList.add("Pending");
        }
    }
}

E_UserInput.addEventListener("input", () => {
    if (getUserInput().length == 1) {
        _GLOBAL_TIMER.reset();
        _GLOBAL_TIMER.start();
    }
});

function getSpeed(timer, progressInfo) {
    var correctCount = progressInfo.getCorrectCount();
    return Math.round(correctCount / (timer.getDuration() / 60000));
}


E_UserInput.addEventListener("input", () => {
    var progressInfo = examine();
    updateDisplay(progressInfo);
    const speedWriter = generateWriter(__LANGUAGE, "Speed", [getSpeed(_GLOBAL_TIMER, progressInfo)]);
    speedWriter();
    const timeWriter = generateWriter(__LANGUAGE, "Time", [_GLOBAL_TIMER.getDuration() / 1000]);
    timeWriter();
    if (progressInfo.getOverviewPercentage() >= 1.0) {
        alert("本次练习结束！");
        _GLOBAL_TIMER.stop();
    }
});