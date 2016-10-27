function setDPR() {
    //定义设计稿宽度
    var d = document;
    const desWidth = 750;
    var _dpr = (1 / window.devicePixelRatio);
    const _MaxWidth = 414 * window.devicePixelRatio;
    const userAgent = navigator.userAgent;
    var widthStr = 'device-width';
    var isMobile = true;
    var iWidth = 0;
    var _html = d.getElementsByTagName('html')[0];
    if (userAgent.toLowerCase().indexOf('iphone') == -1 && userAgent.toLowerCase().indexOf('android') == -1) {
        isMobile = false;//iWidth = _MaxWidth;
        widthStr = iWidth + 'px';
    }
    d.querySelector('[name="viewport"]').setAttribute('content',
        'width=' + widthStr + ' , initial-scale=' + _dpr + ', maximum-scale=' + _dpr + ', minimum-scale=' + _dpr + ', user-scalable=no');
    iWidth = Math.min(d.documentElement.clientWidth, window.innerWidth);
    if (!isMobile) iWidth = _MaxWidth;
    _html.style.fontSize = (((100 * iWidth) / desWidth)) + 'px';
    _html.dataset.dpr = window.devicePixelRatio;
    /*
     (((100 * iWidth ) / desWidth)) * window.devicePixelRatio
     首先将当前屏幕宽度放大100倍,接着除以设计稿宽度,那么就得出了 100PX设计稿宽度 在当前屏幕是多少PX了
     接着我们乘以了一个 当前屏幕像素比.
     为什么要乘以像素比
     因为设计稿是按照1:1设计的
     而手机上会有 2个物理像素点组成一个虚拟像素点.
     然而我们已经设置了缩放比,所以要乘以当前屏幕1虚拟像素=多少物理像素
     最后在LESS里面
     只要设置  物体宽度/设计稿宽度*100REM即可.
     */
    //var $fontsizeCss = [
    //    '.fs_25{font-size:' + (12.5 * window.devicePixelRatio) + 'px;}',
    //    '.fs_21{font-size:' + (10.5 * window.devicePixelRatio) + 'px;}',
    //    '.fs_33{font-size:' + (16.5 * window.devicePixelRatio) + 'px;}',
    //    '.fs_29{font-size:' + (14.5 * window.devicePixelRatio) + 'px;}',
    //    '.fs_7{font-size:' + (7.5 * window.devicePixelRatio) + 'px;}'];
    //for (var i = 7; i <= 24; i++) {
    //    $fontsizeCss.push(".fs" + i + "{font-size:" + (i * window.devicePixelRatio) + "px}");
    //}
    //document.querySelector("#fontsize").innerHTML = $fontsizeCss.join('');
}
setDPR();
window.onresize = function () {
    setDPR();
};