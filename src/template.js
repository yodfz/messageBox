export default  {
    messageBox:`
    <div id="message_{{id}}" class="screenLock">
    <div id="message_js_{{id}}" style="{{style}}" class="lcs message animated {{animation}}In {{className}}">
        <div class="title lcs {{className}}_title">
        <span class="close js-cancel">
                    <i class="messageBoxIconFont icon-guanbi  js-cancel"></i>
        </span>
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
        `<button class="leftBtn js-cancel" {{cancelAttr}}>{{cancelButtonText}}</button>
             <button class="rightBtn js-ok" {{okAttr}}>{{okButtonText}}</button>`,
        `<button class="btn js-ok" {{okAttr}}>确定</button>`,
        `<button class="js-ok btn-color" {{okAttr}}>{{buttonText}}</button>`,
        ``
    ],
    className:['','','modal1','messageBox-modal2']
};