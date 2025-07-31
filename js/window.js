// window.js

/**
 * 绘制一个关闭按钮
 * @param {Node} parentWindow 
 */
function drawClose(parentWindow) {
    var close = document.createElement("div");
    close.classList.add("CloseButton");
    close.innerHTML = "×";
    close.onclick = function () {
        let grandparent = this.parentNode.parentNode.parentNode;
        grandparent.removeChild(this.parentNode.parentNode);
    }
    parentWindow.firstChild.appendChild(close);
}

/**
 * 绘制一个窗口
 * @param {string} windowId 
 * @param {number} layer 
 * @param  {...Node} fillings 
 * @returns 
 */
function drawWindow(windowId, title, layer, fillings) {
    if (document.getElementById(windowId)) return;
    var window = document.createElement("div");
    window.id = windowId;
    window.classList.add("window");
    var z = layer * 10;
    window.setAttribute("data-layer", "" + layer);
    window.style.zIndex = "" + z;
    var bar = document.createElement("div");
    bar.classList.add("WindowBar");
    bar.innerHTML = title;
    var contents = document.createElement("div");
    contents.classList.add("WindowContents")
    contents.append(...fillings);
    window.append(bar, contents);
    document.body.appendChild(window);
    drawClose(window);
    return windowId, true;
}

function windowSelectText() {
    drawWindow("Selector", _LANG_SETS[__LANGUAGE]["win_selectText"], 10, fillTextSelection());
}
drawWindow("Selector", _LANG_SETS[__LANGUAGE]["win_selectText"], 10, fillTextSelection());