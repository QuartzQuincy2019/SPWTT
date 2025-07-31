// writeIn.js
const Home = [
    "TextQuantity"
];

/**
 * 对于需要变量的语言显示，可用此函数按顺序传入变量。
 * @param {string} attribute 读取哪一则文本
 * @param {Array} parameters 传入的参数，可选
 * @returns 要写入的结构
 */
function combineParameters(attribute, parameters = []) {
    var output = "";
    if (parameters.length != 0) {
        var parameterList = new Map(parameters.map((val, idx) => ["$v" + idx, val]));
        for (const section of attribute) {
            if (section[0] != "$") {
                output += section;
                continue;
            } else {
                if (section[1] == "v") {
                    let variable = section;
                    output += parameterList.get(variable);
                    continue;
                }
            }
        }
    } else {
        for (const section of attribute) {
            output += section;
        }
    }
    return output;
}

/**
 * 生成一个只服务于某个特定id的元素内文本写入工作的特殊函数。
 * 应用范例：const writer = generateWriter(_LANGUAGE, "TextQuantity", [_PRACTICE_TEXTS]);
 * @param {string} language 设置中的语言
 * @param {string} id id
 * @param {Array} parameters 参数列表
 * @returns 一个函数，该函数仅服务于某个id的文本写入工作
 */
function generateWriter(language, id, parameters = []) {
    var output = combineParameters(_LANG_SETS[language][id], parameters);
    return () => {
        document.getElementById(id).innerHTML = output;
        return output;
    }
}

const writer = generateWriter(__LANGUAGE, "TextQuantity", [_PRACTICE_TEXTS]);