import template from './template';
import onpopustate from './onpopustate';
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
        onpopustate.install();
        let _id = +new Date();
        let d = document;
        let buttonText = '';
        let opt = {};
        // 初始化
        if (typeof _title === 'object') {
            let result = Object.assign({}, _title);
            _title = result.title;
            _content = result.content;
            okEvent = result.ok;
            cancelEvent = result.cancel;
            _type = result.type;
            _animation = result.animation;
            buttonText = result.buttonText;
            opt.okButtonText = result.okButtonText || '确定';
            opt.cancelButtonText = result.cancelButtonText || '取消';
            opt.okButtonDisabled = result.okButtonDisabled || false;
            opt.cancelButtonDisabled = result.cancelButtonDisabled || false;
        }
        // 判断类型,计算给什么种类的按钮
        _type = _type || 0;
        _animation = _animation || 'fade';

        let $hasTouch = 'ontouchend' in window;
        // 点透问题
        let $eventStart = $hasTouch ? 'touchend' : 'click';
        let className = template.className[_type];
        let _html = template.messageBox.replace('{{title}}', _title)
            .replace('{{content}}', _content)
            .replace(/\{\{id\}\}/ig, _id)
            .replace(/\{\{className\}\}/ig, className)
            .replace('{{animation}}', _animation);

        let okAttr = '';
        let cancelAttr = '';
        if (opt.okButtonDisabled) {
            okAttr = ' disabled="disabled"';
        }
        if (opt.cancelButtonDisabled) {
            cancelAttr = ' disabled="disabled"';
        }
        _html = _html.replace('{{button}}',
            template.button[_type]
                .replace('{{buttonText}}', buttonText)
                .replace('{{okButtonText}}', opt.okButtonText)
                .replace('{{cancelButtonText}}', opt.cancelButtonText)
                .replace('{{okAttr}}', okAttr)
                .replace('{{cancelAttr}}', cancelAttr)
        );
        // 插入消息框
        d.body.insertAdjacentHTML('beforeend', _html);
        let _obj = d.querySelector('#message_' + _id);
        // 毛玻璃背景
        let bgContent = d.querySelector('.wrapperContains');
        className && _obj.classList.add(className);
        bgContent && bgContent.classList.add('blur');// = 'wrapperContains blur';
        _obj.destory = ()=>{
            bgContent && bgContent.classList.remove('blur');
            _obj && _obj.parentNode.removeChild(_obj);
        };
        _obj.addEventListener($eventStart, function (e) {
            e.preventDefault();
            let _className = e.target.className;
            if (!e.target.disabled) {
                if (_className.indexOf('screenLock') > -1) {
                    bgContent && bgContent.classList.remove('blur');
                    cancelEvent && cancelEvent(false);
                    _obj.className = 'screenLock animated ' + _animation + 'Out';

                    setTimeout(function () {
                        _obj && _obj.parentNode.removeChild(_obj);
                    }, 500);
                }
                if (_className.indexOf('js-cancel') > -1) {
                    bgContent && bgContent.classList.remove('blur');
                    cancelEvent && cancelEvent();
                    _obj.className = `screenLock animated ${_animation}Out`;
                    // 在动画结束的时候再次移除
                    setTimeout(function () {
                        _obj && _obj.parentNode.removeChild(_obj);
                    }, 500);
                }
                if (_className.indexOf('js-ok') > -1) {
                    bgContent && bgContent.classList.remove('blur');
                    okEvent && okEvent();
                    _obj.className = `screenLock animated ${_animation}Out`;
                    setTimeout(function () {
                        _obj && _obj.parentNode.removeChild(_obj);
                    }, 500);
                }
            }
        });
        onpopustate.regMsg(_obj, window.location.href);
        _obj.addEventListener('click', function (e) {
            e.preventDefault();
        });
    }
};