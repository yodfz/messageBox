(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.messageBox = factory());
}(this, (function () { 'use strict';

var template = {
    messageBox: "<div id=\"message_{{id}}\" class=\"comm-window-module {{animation}}In\">\n        <div class=\"outline-window\">\n            <div class=\"window-title\">\n                <i class=\"fs17\">X</i>\n                <span class=\"fs17\">{{title}}</span>\n            </div>\n            <div class=\"window-content\">\n                {{content}}\n            </div>\n            {{button}}\n        </div>\n    </div>",
    button: ["<div class=\"search-others fs15 js-messageBox-ok\">{{buttonText}}</div>"]
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();















var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var index = {
    showMsg: function showMsg(_title, _content, okEvent, cancelEvent, _type, _animation) {
        var _id = +new Date();
        var d = document;

        if ((typeof _title === 'undefined' ? 'undefined' : _typeof(_title)) === 'object') {
            var result = Object.assign({}, _title);
            _title = result.title;
            _content = result.content;
            okEvent = result.okEvent;
            cancelEvent = result.cancelEvent;
            _type = result.type;
            _animation = result.animation;
        }

        _type = _type || 0;
        _animation = _animation || 'fade';

        var $hasTouch = 'ontouchend' in window;

        var $eventStart = $hasTouch ? 'touchend' : 'click';
        var _html = template.messageBox.replace('{{title}}', _title).replace('{{content}}', _content).replace(/\{\{id\}\}/ig, _id).replace('{{animation}}', _animation);

        _html = _html.replace('{{button}}', _btnHtml[_type]);

        d.body.insertAdjacentHTML('beforeend', _html);

        var _obj = d.querySelector('#message_' + _id);

        var bgContent = d.querySelector('.wrapperContains');
        bgContent.classList.add('blur');

        _obj.addEventListener($eventStart, function (e) {
            e.preventDefault();
            var _className = e.target.className;
            if (_className.indexOf('js-cancel') > -1) {
                bgContent.classList.remove('blur');
                cancelEvent && cancelEvent();
                _obj.className = 'screenLock animated ' + _animation + 'Out';
                setTimeout(function () {
                    _obj && _obj.parentNode.removeChild(_obj);
                }, 500);
            }
            if (_className.indexOf('js-ok') > -1) {
                bgContent.classList.remove('blur');
                okEvent && okEvent();
                _obj.className = 'screenLock animated ' + _animation + 'Out';
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

return index;

})));
