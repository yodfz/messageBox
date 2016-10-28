export default  {
    messageBox:`
    <div id="message_{{id}}" class="screenLock">
    <div id="message_js_{{id}}" class="lcs message animated {{animation}}In {{className}}">
        <div class="title lcs {{className}}_title">
        <span class="close js-cancel"></span>
        {{title}}
        </div>
        <div class="content lcs {{className}}_content">
        {{content}}
        </div>
        <div class="buttonGroup lcs">
            {{button}}
        </div>
    </div></div>`,
    button:[
        `<button class="leftBtn js-cancel">{{cancelButtonText}}</button>
             <button class="rightBtn js-ok">{{okButtonText}}</button>`,
        `<button class="btn js-ok">确定</button>`,
        `<button class="js-ok btn-color">{{buttonText}}</button>`
    ],
    className:['','','modal1']
};