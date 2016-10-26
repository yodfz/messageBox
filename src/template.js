export default  {
    messageBox:`
    <div id="message_{{id}}" class="screenLock">
    <div id="message_js_{{id}}" class="lcs message animated {{animation}}In">
        <div class="title lcs">
        {{title}}
        </div>
        <div class="content lcs">
        {{content}}
        </div>
        <div class="buttonGroup lcs">
            {{button}}
        </div>
    </div></div>`,
    button:[
        `<button class="leftBtn js-cancel lcs">取消</button>
             <button class="rightBtn js-ok lcs">确定</button>`,
        `<button class="btn js-ok lcs">
            确定</button>`
    ]
};