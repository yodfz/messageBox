;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-queding" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1013.62632 151.978367c-13.82748-13.82589-36.223454-13.82589-50.048887 0L353.22805 796.362466l-292.616164-292.634874c-13.895021-13.860682-36.361606-13.860682-50.187039 0-13.895021 13.859659-13.895021 36.325323 0 50.184983l318.063761 318.085522c13.049735 13.015432 33.65792 13.805424 47.568291 2.375094 1.395847-1.034563 2.73541-2.183735 4.002315-3.447519l633.569152-668.900469C1027.452777 188.200336 1027.452777 165.803233 1013.62632 151.978367z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-guanbi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M551.563064 512.884137l231.774761-231.774761c10.665921-10.667967 10.665921-27.963888 0-38.629809-10.667967-10.666944-27.962865-10.666944-38.629809 0L512.933255 474.254328 281.157471 242.478544c-10.66899-10.666944-27.963888-10.666944-38.629809 0-10.667967 10.665921-10.667967 27.961842 0 38.629809L474.302423 512.884137 242.527662 744.658897c-10.667967 10.667967-10.667967 27.963888 0 38.630832 10.665921 10.665921 27.960819 10.665921 38.629809 0L512.933255 551.513946l231.775784 231.775784c10.666944 10.665921 27.961842 10.665921 38.629809 0 10.665921-10.666944 10.665921-27.962865 0-38.630832L551.563064 512.884137z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jinlingyingcaiwangtubiao07" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M843.3408 190.0544c-87.0144-87.0144-202.7264-134.9376-325.8112-134.9376-123.0848 0-238.8224 47.9488-325.8624 134.9632-87.0144 87.0144-134.9376 202.7264-134.9376 325.8112 0 123.0848 47.9232 238.7968 134.9376 325.8368 87.0144 87.0144 202.7264 134.9376 325.8112 134.9376s238.7968-47.9232 325.8112-134.9376C1022.976 662.0416 1022.976 369.7152 843.3408 190.0544zM786.0224 364.3136 446.8992 690.6624c-3.7376 3.584-8.5248 5.3504-13.3376 5.3504-4.9152 0-9.8304-1.8688-13.568-5.632l-171.4944-171.4688c-7.5008-7.5008-7.5008-19.6608 0-27.1616s19.6608-7.5008 27.1616 0l158.1824 158.1568L759.3728 336.64c7.6288-7.296 19.8144-7.1168 27.1616 0.5376C793.8816 344.8064 793.6512 356.9664 786.0224 364.3136z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jinlingyingcaiwangtubiao08" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M836.7104 192.7168c-87.0144-87.0144-202.7264-134.9376-325.8112-134.9376-123.0848 0-238.8224 47.9488-325.8624 134.9632-87.0144 87.0144-134.9376 202.7264-134.9376 325.8112 0 123.0848 47.9232 238.7968 134.9376 325.8368 87.0144 87.0144 202.7264 134.9376 325.8112 134.9376s238.7968-47.9232 325.8112-134.9376C1016.3456 664.704 1016.3712 372.3776 836.7104 192.7168zM722.7648 703.3856c7.5008 7.5008 7.5008 19.6608 0 27.1616-3.7376 3.7376-8.6528 5.632-13.568 5.632s-9.8304-1.8688-13.568-5.632l-184.832-184.832-184.832 184.832c-3.7376 3.7376-8.6528 5.632-13.568 5.632s-9.8304-1.8688-13.568-5.632c-7.5008-7.5008-7.5008-19.6608 0-27.1616l184.832-184.832-184.832-184.832c-7.5008-7.5008-7.5008-19.6608 0-27.1616s19.6608-7.5008 27.1616 0l184.832 184.832 184.832-184.832c7.5008-7.5008 19.6608-7.5008 27.1616 0s7.5008 19.6608 0 27.1616l-184.832 184.832L722.7648 703.3856z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-queding1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1024 185.152 963.264 124.416 480.96 606.72 256.96 382.72 196.224 443.52 420.16 667.52 480.96 728.256 541.696 667.52Z"  ></path>' +
    '' +
    '<path d="M933.056 446.656C936.384 467.968 938.048 489.792 938.048 512c0 234.944-191.104 426.048-426.048 426.048S85.952 746.944 85.952 512 277.056 85.888 512 85.888c90.624 0 174.72 28.544 243.904 77.056l61.76-61.76C732.288 37.632 626.56 0 512 0 229.248 0 0 229.248 0 512c0 282.752 229.248 512 512 512s512-229.248 512-512c0-47.616-6.656-93.632-18.816-137.408L933.056 446.656z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)