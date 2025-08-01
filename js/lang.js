const $v = (sequence) => {
    return "$v" + sequence;
}

const _LANG_SETS = {
    "zh-CN": {
        "TextQuantity": [
            "目前共有", $v(0), "则可供练习的文本。"
        ],
        "author": [
            "作者"
        ],
        "title": [
            "标题"
        ],
        "date": [
            "日期"
        ],
        "win_selectText": [
            "选择文本："
        ],
        "UserInput": [
            "在此处输入字符……"
        ],
        "Speed": [
            "速度：", $v(0), "字/分"
        ],
        "KeySpeed": [
            "按键：", $v(0), "次/分"
        ],
        "Time": [
            "时间：", $v(0), "秒"
        ],
        "Progress": [
            "进度：", $v(0), "%"
        ]
    },
    "en": {
        "TextQuantity": [
            "Now there are ", $v(0), " piece(s) of texts for practice."
        ],
        "author": [
            "Author"
        ],
        "title": [
            "Title"
        ],
        "date": [
            "Date"
        ],
        "win_selectText": [
            "Select Text:"
        ],
        "UserInput": [
            "The timer will automatically start once you input anything here..."
        ],
        "Speed": [
            "Speed: ", $v(0), " characters/min"
        ],
        "KeySpeed": [
            "Keydown: ", $v(0), " times/min"
        ],
        "Time": [
            "Time: ", $v(0), " s"
        ],
        "Progress": [
            "Progress: ", $v(0), "%"
        ]
    }
}