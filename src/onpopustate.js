var msgEvent = {};
var i = 0;
export default {
    install () {
        if (!window.messageBoxOnPopuState) {
            var onpopustate = window.onpopustate;
            window.messageBoxOnPopuState = true;
            window.onpopstate = function () {
                onpopustate && onpopustate();
                var event = msgEvent[window.location.href];
                if (!event) {
                    event = {};
                    event.index = -1;
                }
                var events = [];
                for (var key in msgEvent) {
                    if (msgEvent[key].index > event.index) {
                        events.push(msgEvent[key]);
                    }
                }
                events.forEach(p=> {
                    p.msg.forEach(el=> {
                        if (el) {
                            el.destory();
                            // document.body.removeChild(el);
                        }
                    });
                });
            }
        }
    },
    /**
     * 注册消息
     * @param _obj 被注册窗体
     * @param url 注册的地址
     * @private
     */
    regMsg (_obj, url) {
        if (!msgEvent[url]) {
            msgEvent[url] = {
                index: i++,
                msg: []
            };
        }
        msgEvent[url].msg.push(_obj);
    },
};