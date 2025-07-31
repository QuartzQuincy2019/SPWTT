// core.js
class Timer {
    body=null;
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
