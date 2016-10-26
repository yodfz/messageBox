export default  {
    messageBox:`<div id="message_{{id}}" class="comm-window-module {{animation}}In">
        <div class="outline-window">
            <div class="window-title">
                <i class="fs17">X</i>
                <span class="fs17">{{title}}</span>
            </div>
            <div class="window-content">
                {{content}}
            </div>
            {{button}}
        </div>
    </div>`,
    button:[
        `<div class="search-others fs15 js-messageBox-ok">{{buttonText}}</div>`
    ]
};