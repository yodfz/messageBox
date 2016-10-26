import template from './template';

export default {
    /**
     *
     * @param _title    标题
     * @param _content  显示内容
     * @param okEvent       确定事件
     * @param cancelEvent   取消事件
     * @param _type         按钮类型
     * @param _animation    淡入淡出动画
     */
    showMsg (_title, _content, okEvent, cancelEvent, _type, _animation) {
        let _id = +new Date();
        let d = document;
        // 初始化
        if (typeof _title === 'object') {
            let result = Object.assign({}, _title);
            _title = result.title;
            _content = result.content;
            okEvent = result.okEvent;
            cancelEvent = result.cancelEvent;
            _type = result.type;
            _animation = result.animation;
        }
        // 判断类型,计算给什么种类的按钮
        _type = _type || 0;
        _animation = _animation || 'fade';

        let $hasTouch = 'ontouchend' in window;
        // 点透问题
        let $eventStart = $hasTouch ? 'touchend' : 'click';
        let _html = template.messageBox.replace('{{title}}', _title)
            .replace('{{content}}', _content)
            .replace(/\{\{id\}\}/ig, _id)
            .replace('{{animation}}', _animation);

        _html = _html.replace('{{button}}', template.button[_type]);
        // 插入消息框
        d.body.insertAdjacentHTML('beforeend', _html);

        let _obj = d.querySelector('#message_' + _id);
        // 毛玻璃背景
        let bgContent = d.querySelector('.wrapperContains');
        bgContent&&bgContent.classList.add('blur');// = 'wrapperContains blur';

        _obj.addEventListener($eventStart, function (e) {
            e.preventDefault();
            let _className = e.target.className;
            if (_className.indexOf('js-cancel') > -1) {
                bgContent&&bgContent.classList.remove('blur');
                cancelEvent && cancelEvent();
                _obj.className = `screenLock animated ${_animation}Out`;
                setTimeout(function () {
                    _obj && _obj.parentNode.removeChild(_obj);
                }, 500);
            }
            if (_className.indexOf('js-ok') > -1) {
                bgContent.classList.remove('blur');
                okEvent && okEvent();
                _obj.className = `screenLock animated ${_animation}Out`;
                setTimeout(function () {
                    _obj && _obj.parentNode.removeChild(_obj);
                }, 500);
            }
        });

        _obj.addEventListener('click', function (e) {
            e.preventDefault();
        });
    }
};