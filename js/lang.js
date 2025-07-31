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
            "速度：", $v(0), "有效字/分钟"
        ],
        "Time": [
            "时间：", $v(0), " 秒"
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
            "Speed: ", $v(0), " effective characters/min"
        ],
        "Time": [
            "Time: ", $v(0), " s"
        ]
    }
}