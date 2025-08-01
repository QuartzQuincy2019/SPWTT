// core.js
class Timer {
    body = null;
    interval = 100;// 定时器间隔，默认为100毫秒
    count = 0;// 计数器，记录经过的时间
    start = function () {
        this.body = setInterval(() => {
            this.count++;
        }, this.interval);
    }

    /**
     * 返回计时器运行的总时间
     * @returns {number} 计时器运行的总时间，单位为毫秒
     */
    getDuration = function () {
        return this.count * this.interval;
    }

    /**
     * 停止计时器并返回总时间，但不重置count
     * @returns {number} 
     */
    stop = function () {
        clearInterval(this.body);
        this.body = null;
        return this.getDuration();
    }

    toggle = function () {
        if (this.body) {
            return this.stop();
        } else {
            this.start();
            return 0;
        }
    }

    /**
     * 重置计时器，停止计时并将计数器归零
     * @returns 
     */
    reset = function () {
        let dur = this.stop();
        this.count = 0;
        return dur;
    }
}
var _GLOBAL_TIMER = new Timer();


/**
 * 平滑滚动到指定元素的顶部位置
 * @param {HTMLElement} targetElement - 目标元素
 * @param {number} distanceFromTop - 距离顶部的距离，单位为像素
 */
function scrollToPosition(targetElement, distanceFromTop) {
    // 获取元素相对于视口的位置
    const rect = targetElement.getBoundingClientRect();

    // 计算目标滚动位置
    const targetScrollPosition = window.scrollY + rect.top - distanceFromTop;

    // 执行平滑滚动
    window.scrollTo({
        top: targetScrollPosition,
        behavior: 'smooth'
    });
}