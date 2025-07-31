// display.js
// 务必置于writeIn.js和parse.js之后

var E_UserInput = document.getElementById("UserInput");
/**
 * 
 * @param {string} content 
 * @param {Element} destination 
 */
function initializeQueue(content, destination) {
    _CURRENT_TOKENS = getTokens(content);
    var queue = generateCorrectionQueue(_CURRENT_TOKENS);
    destination.innerHTML = "";
    destination.append(...queue);
}


function fillTextSelection() {
    var nodes = []
    var width = window.visualViewport.width;
    for (eachText of proto_practices) {
        let author = eachText["author"];
        let title = eachText["title"];
        let date = eachText["date"];
        let option = document.createElement("div");
        option.setAttribute("data-value", title);
        option.classList.add("ArticleOption");
        if (width > 768) {
            option.innerHTML = _LANG_SETS[__LANGUAGE]["title"] + ":" + title + " / " + _LANG_SETS[__LANGUAGE]["author"] + ":" + author + " / " + _LANG_SETS[__LANGUAGE]["date"] + ":" + date;
        } else {
            option.innerHTML = title;
        }
        option.onclick = function () {
            let t = this.getAttribute("data-value");
            selectPractice(t);
            initializeQueue(getPractice(t).content, document.getElementById("MODEL"));
            E_UserInput.value = "";
            _GLOBAL_TIMER.reset();
        }
        nodes.push(option);
    }
    return nodes;
}

function E_UserInput_PlaceholderWriter() {
    E_UserInput.placeholder = _LANG_SETS[__LANGUAGE]["UserInput"];
}
E_UserInput_PlaceholderWriter();