// parse.js
// 置于display.js之前

var _CURRENT_PRACTICE_TITLE = proto_practices[0].title;
var _CURRENT_TOKENS = [];

/**
 * 通过文章标题获取文章对象
 * @param {string} title 
 * @returns {Object|null}
 */
function getPractice(title) {
    return proto_practices.find(practice => practice.title === title);
}

/**
 * 获取当前练习的文章对象
 * @returns 
 */
function getCurrentPractice() {
    return getPractice(_CURRENT_PRACTICE_TITLE);
}

/**
 * 生成一个校正单元
 * @param {string} dataAttribute 元素内部定义的data属性
 * @param {string} character 待校正的字符
 * @param {number} index 校正位置
 * @returns 
 */
function generateCorrectionUnit(dataAttribute, character, index) {
    let unit = document.createElement('span');
    unit.classList.add("CorrectionUnit");
    unit.setAttribute("data-identifier", dataAttribute);
    unit.setAttribute("data-index", index);
    unit.innerHTML = character;
    return unit;
}


/**
 * 获取练习tokens，供下一步生成校正队列使用
 * @param {string} content 原练习文本
 * @returns 
 */
function getTokens(content) {
    let tokens = [];
    for (let i = 0; i < content.length;) {
        let currentToken = "";
        let char = content[i];
        if (char == "\\") {
            currentToken += char;
            if (i + 1 < content.length) {
                currentToken += content[i + 1];
                i += 2;
            }
        } else {
            currentToken += char;
            i++;
        }
        tokens.push(currentToken);
    }
    return tokens;
}

/**
 * 获取实际长度，即需要的按键总次数。
 * @param {string} content 练习文本
 * @returns 
 */
function getActualLength(content) {
    let tokens = getTokens(content);
    return tokens.length;
}

const displayMap = new Map([
    ["\n", "<br>"],
    [" ", "&nbsp;"]
]);
const controlMap = new Map([
    ["\n", "_n"],
    [" ", "_s"]
]);

function generateCorrectionQueue(tokens) {
    var output = [];
    tokens.forEach((token, index) => {
        if (displayMap.has(token)) {
            var unit = generateCorrectionUnit(controlMap.get(token), displayMap.get(token), index);
        } else {
            var unit = generateCorrectionUnit(token, token, index);
        }
        output.push(unit);
    });
    return output;
}

/**
 * 选择练习，并将其标题存储在全局变量_CURRENT_PRACTICE_TITLE中
 * @param {string} title 
 */
function selectPractice(title) {
    _CURRENT_PRACTICE_TITLE = title;
    return title;
}

/**
 * 将用户输入的文本转换为合法tokens
 * @param {string} userInput 
 * @returns 
 */
function antiparse(userInput) {
    var output = [];
    for (var i = 0; i < userInput.length; i++) {
        var char = userInput[i];
        output.push(char);
    }
    return output;
}