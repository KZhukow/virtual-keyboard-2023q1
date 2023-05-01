(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>o});var i=n(645),s=n.n(i)()((function(t){return t[1]}));s.push([t.id,'* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n}\n\n:root {\n  --font-family: "Trebuchet MS", "Helvetica", sans-serif;\n}\n\nbody[theme="dark"] {\n  --bgColor: black;\n  --mainColor: #00f8ff;\n  --titleColor: black;\n  --keyboardContainerShadowColor: #b8feff;\n  --inputTextColor: #d7ffff;\n  --scrollbarTrackColor: #bcffff;\n  --descriptionColor: white;\n  --keyTextColor: powderblue;\n  --pressedKeyBgColor: #002224;\n  --keyIndicatorBgColor: #464646;\n  --keyIndicatorActiveBgColor: white;\n  --switchedBtnIndicatorBgColor: #14bbc1;\n}\n\nbody[theme="light"] {\n  --bgColor: #e6e6e6;\n  --mainColor: #666666;\n  --titleColor: #0000d8;\n  --keyboardContainerShadowColor: black;\n  --inputTextColor: #0000d8;\n  --scrollbarTrackColor: #c8cbe8;\n  --descriptionColor: black;\n  --keyTextColor: #0000d8;\n  --pressedKeyBgColor: #d5d5d5;\n  --keyIndicatorBgColor: #c6c6c6;\n  --keyIndicatorActiveBgColor: #2020ff;\n  --switchedBtnIndicatorBgColor: #6c6cff;\n}\n\nbody {\n  background: var(--bgColor);\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  width: 100vw;\n  height: 100vh;\n}\n\n.title {\n  user-select: none;\n  font-size: 30px;\n  font-family: var(--font-family);\n  text-shadow: -2px -1px 3px var(--mainColor);\n  color: var(--titleColor);\n  letter-spacing: 4px;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  border-radius: 25px;\n  box-shadow: 0px 3px 10px 3px var(--keyboardContainerShadowColor);\n  padding: 15px;\n}\n\n.input-text {\n  width: 700px;\n  height: 200px;\n  padding: 10px;\n  font-size: 18px;\n  line-height: 1.15;\n  font-family: "Trebuchet MS", "Helvetica", sans-serif;\n  outline: none;\n  resize: none;\n  background: var(--bgColor);\n  border: 5px solid var(--mainColor);\n  color: var(--inputTextColor);\n  border-radius: 10px;\n}\n\n.input-text::-webkit-scrollbar {\n  width: 12px;\n  background-color: var(--bgColor);\n}\n\n.input-text::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\n  background-color: var(--mainColor);\n}\n\n.input-text::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n  border-radius: 10px;\n  background-color: var(--scrollbarTrackColor);\n}\n\n.description {\n  font-family: "Trebuchet MS", "Helvetica", sans-serif;\n  line-height: 1.15;\n  font-size: 16px;\n  color: var(--descriptionColor);\n  user-select: none;\n}\n\n.keyboard {\n  width: 704px;\n  display: flex;\n  gap: 8px 6px;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: flex-start;\n}\n\n.key {\n  display: flex;\n  justify-content: center;\n  height: 40px;\n  width: 40px;\n  align-items: center;\n  transition: 0.2s;\n  user-select: none;\n  font-family: "Trebuchet MS", "Helvetica", sans-serif;\n  font-size: 16px;\n  cursor: pointer;\n  background: var(--bgColor);\n  border-left: 3px inset var(--bgColor);\n  border-top: 3px inset var(--bgColor);\n  border-bottom: 3px inset var(--mainColor);\n  border-right: 3px inset var(--mainColor);\n  color: var(--keyTextColor);\n  box-shadow: 2px 2px 3px -1px var(--descriptionColor);\n}\n\n.key:hover {\n  color: var(--descriptionColor);\n  border-radius: 5px;\n  border-left: 1px inset var(--descriptionColor);\n  border-top: 1px inset var(--descriptionColor);\n}\n\n.key:active,\n.key.isKeyPressed {\n  background: var(--pressedKeyBgColor);\n  color: var(--descriptionColor);\n  border-radius: 15px;\n  border-left: 1px inset var(--mainColor);\n  border-top: 1px inset var(--mainColor);\n  border-bottom: 2px inset var(--mainColor);\n  border-right: 2px inset var(--mainColor);\n  transform: scale(0.97) translateY(2px);\n  box-shadow: none;\n}\n\n.keyIndicator {\n  width: 5px;\n  height: 10px;\n  background: var(--keyIndicatorBgColor);\n  margin-left: 8px;\n  border-radius: 3px;\n  transition: 0.3s;\n}\n\n.keyIndicator.isActive {\n  background: var(--keyIndicatorActiveBgColor);\n  box-shadow: 0 0 5px 2px var(--keyIndicatorActiveBgColor);\n}\n\n.optionalButtons {\n  display: flex;\n  width: 700px;\n  justify-content: space-between;\n}\n\n.switchedBtn {\n  position: relative;\n  transition: 0.3s;\n  display: flex;\n  cursor: pointer;\n  width: 60px;\n  height: 30px;\n  padding: 3px;\n  background: var(--keyIndicatorBgColor);\n  border: 2px solid var(--mainColor);\n  border-radius: 5px;\n  color: var(--descriptionColor);\n  font-family: "Trebuchet MS", "Helvetica", sans-serif;\n  font-size: 16px;\n}\n\n.switchedBtn:active {\n  transform: scale(0.95);\n}\n\n.switchedBtn:hover {\n  animation: borderAnimation 10s linear infinite;\n}\n\n.switchedBtnSection {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-grow: 1;\n}\n\n.switchedBtnIndicator {\n  position: absolute;\n  background: var(--switchedBtnIndicatorBgColor);\n  width: 25px;\n  height: 20px;\n  border-radius: 5px;\n  transition: 0.3s;\n}\n\n.switchedBtnIndicator[name="left"] {\n  transform: translateX(0);\n}\n.switchedBtnIndicator[name="right"] {\n  transform: translateX(26px);\n}\n\n@keyframes borderAnimation {\n  0% {border-color: var(--mainColor);}\n  8.3% {border-color: blue;}\n  24.9% {border-color: violet;}\n  41.5% {border-color: red;}\n  58.1% {border-color: orange;}\n  74.7% {border-color: yellow;}\n  91.3% {border-color: green;}\n  100% {border-color: var(--mainColor);}\n}',""]);const o=s},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(i)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(s[r]=!0)}for(var a=0;a<t.length;a++){var h=[].concat(t[a]);i&&s[h[0]]||(n&&(h[2]?h[2]="".concat(n," and ").concat(h[2]):h[2]=n),e.push(h))}},e}},379:(t,e,n)=>{var i,s=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),o=[];function r(t){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===t){e=n;break}return e}function a(t,e){for(var n={},i=[],s=0;s<t.length;s++){var a=t[s],h=e.base?a[0]+e.base:a[0],d=n[h]||0,l="".concat(h," ").concat(d);n[h]=d+1;var c=r(l),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==c?(o[c].references++,o[c].updater(u)):o.push({identifier:l,updater:g(u,e),references:1}),i.push(l)}return i}function h(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var r=s(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var d,l=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function c(t,e,n,i){var s=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=l(e,s);else{var o=document.createTextNode(s),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}function u(t,e,n){var i=n.css,s=n.media,o=n.sourceMap;if(s?t.setAttribute("media",s):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var y=null,p=0;function g(t,e){var n,i,s;if(e.singleton){var o=p++;n=y||(y=h(e)),i=c.bind(null,n,o,!1),s=c.bind(null,n,o,!0)}else n=h(e),i=u.bind(null,n,e),s=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else s()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<n.length;i++){var s=r(n[i]);o[s].references--}for(var h=a(t,e),d=0;d<n.length;d++){var l=r(n[d]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}n=h}}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var o=e[i]={id:i,exports:{}};return t[i](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{const t="language-virtual-keyboard-2023q1-7OFej",e="theme-virtual-keyboard-2023q1-7OFej",i="ru",s="en",o=[s,i],r="dark",a="light",h=[r,a],d="default",l="shift",c="caps",u="shiftCaps",y="isKeyPressed";function p(e){localStorage.setItem(t,e)}function g(t,e=void 0,n=void 0,i=!1){const s=document.createElement("div");if(s.className="key",s.id=t,void 0!==e&&(s.style.width=`${e}px`),void 0!==n&&(s.innerHTML=n),i){const e=document.createElement("div");e.className="keyIndicator",e.id=`${t}Indicator`,s.appendChild(e)}return s}class f{constructor(t){this.root=t,this.inputElement=function(){const t=document.createElement("textarea");return t.setAttribute("autofocus",""),t.spellcheck=!1,t.id="text",t.className="input-text",t}(),this.inputElement.addEventListener("blur",this.inputElement.focus),this.inputElement.addEventListener("click",(t=>{this.root.startCursorPosition=t.currentTarget.selectionStart,this.root.ensCursorPosition=t.currentTarget.selectionEnd})),this.inputElement.addEventListener("select",(t=>{this.root.startCursorPosition=t.currentTarget.selectionStart,this.root.ensCursorPosition=t.currentTarget.selectionEnd}))}getElement(){return this.inputElement}setInputValue(t){this.inputElement.value=t}setCursorPosition(t,e=t){this.inputElement.setSelectionRange(t,e)}getCursorPosition(){return this.inputElement.selectionStart}}class w{isCharacterKey=!0;constructor(t,e,n,o,r,a,h=void 0){this.root=t,this.keyCode=e,this.keyData={[i]:{[d]:r,[l]:a,[c]:r.toUpperCase(),[u]:a.toLowerCase()},[s]:{[d]:n,[l]:o,[c]:n.toUpperCase(),[u]:o.toLowerCase()}},this.key=g(this.keyCode,h),this.key.addEventListener("mousedown",(()=>{this.root.changeInputState(this.root.addInputValueSymbol,this.getKeyValue())})),window.addEventListener("keydown",(t=>{t.code===this.keyCode&&(this.root.changeInputState(this.root.addInputValueSymbol,this.getKeyValue()),this.key.classList.add(y))})),window.addEventListener("keyup",(t=>{t.code===this.keyCode&&this.key.classList.remove(y)}))}getElement(){return this.key}setKeyValue(){this.key.innerHTML=this.getKeyValue()}getKeyValue(){return this.keyData[this.root.language][this.root.keysType]}}class m{constructor(t,e,n,i=[],s=void 0){this.root=t,this.keyCode=e,this.keyName=n,this.keyActions=i,this.key=g(this.keyCode,s,this.keyName),this.key.addEventListener("mousedown",(()=>{this.keyActions.forEach((t=>t()))})),window.addEventListener("keydown",(t=>{t.code===this.keyCode&&(this.keyActions.forEach((t=>t())),this.key.classList.add(y))})),window.addEventListener("keyup",(t=>{t.code===this.keyCode&&this.key.classList.remove(y)}))}getElement(){return this.key}}class b{constructor(t,e,n,i,s=!1,o=void 0){this.root=t,this.keyCode=e,this.keyName=n,this.setState=i,this.isIndicatorKey=s,this.isKeyClicked=!1,this.isKeyPressed=!1,this.key=g(this.keyCode,o,this.keyName,s),this.key.addEventListener("mousedown",(()=>{this.isKeyClicked=!0,this.isKeyPressed||(this.root.changeKeysTypeState(this.setState,!0),s&&this.toggleIndicator())})),window.addEventListener("mouseup",(()=>{!this.isKeyClicked||this.isIndicatorKey||this.isKeyPressed||this.root.changeKeysTypeState(this.setState,!1),this.isKeyClicked=!1})),window.addEventListener("keydown",(t=>{t.code!==this.keyCode||t.repeat||(this.isKeyPressed=!0,this.isKeyClicked||(this.root.changeKeysTypeState(this.setState,!0),s&&this.toggleIndicator()),this.key.classList.add(y))})),window.addEventListener("keyup",(t=>{t.code===this.keyCode&&(this.isKeyPressed=!1,this.isIndicatorKey||this.isKeyClicked||this.root.changeKeysTypeState(this.setState,!1),this.key.classList.remove(y))}))}getElement(){return this.key}toggleIndicator(){this.getElement().querySelector(`#${this.keyCode}Indicator`).classList.toggle("isActive")}resetClickedState(){this.isKeyClicked=!1,this.isKeyPressed=!1}}class v{constructor(t,e,n,i,s=void 0){this.root=t,this.keyCode=e,this.keyName=n,this.keyData=i,this.key=g(this.keyCode,s,this.keyName),this.key.addEventListener("mousedown",(()=>{this.root.changeInputState(this.root.addInputValueSymbol,this.keyData)})),window.addEventListener("keydown",(t=>{t.code===this.keyCode&&(this.root.changeInputState(this.root.addInputValueSymbol,this.keyData),this.key.classList.add(y))})),window.addEventListener("keyup",(t=>{t.code===this.keyCode&&this.key.classList.remove(y)}))}getElement(){return this.key}}class C{constructor(t){this.root=t,this.keyboardContainer=function(){const t=document.createElement("div");return t.className="keyboard",t.id="keyboard",t}(),this.keysData=[new w(this.root,"Backquote","`","~","ё","Ё"),new w(this.root,"Digit1","1","!","1","!"),new w(this.root,"Digit2","2","@","2",'"'),new w(this.root,"Digit3","3","#","3","№"),new w(this.root,"Digit4","4","$","4",";"),new w(this.root,"Digit5","5","%","5","%"),new w(this.root,"Digit6","6","^","6",":"),new w(this.root,"Digit7","7","&","7","?"),new w(this.root,"Digit8","8","*","8","*"),new w(this.root,"Digit9","9","(","9","("),new w(this.root,"Digit0","0",")","0",")"),new w(this.root,"Minus","-","_","-","_"),new w(this.root,"Equal","=","+","=","+"),new m(this.root,"Backspace","Backspace",[this.root.changeInputState.bind(this.root,this.root.delPrevSymbol)],100),new v(this.root,"Tab","Tab","\t",50),new w(this.root,"KeyQ","q","Q","й","Й"),new w(this.root,"KeyW","w","W","ц","Ц"),new w(this.root,"KeyE","e","E","у","У"),new w(this.root,"KeyR","r","R","к","К"),new w(this.root,"KeyT","t","T","е","Е"),new w(this.root,"KeyY","y","Y","н","Н"),new w(this.root,"KeyU","u","U","г","Г"),new w(this.root,"KeyI","i","I","ш","Ш"),new w(this.root,"KeyO","o","O","щ","Щ"),new w(this.root,"KeyP","p","P","з","З"),new w(this.root,"BracketLeft","[","{","х","Х"),new w(this.root,"BracketRight","]","}","ъ","Ъ"),new w(this.root,"Backslash","\\","|","\\","/"),new m(this.root,"Delete","Del",[this.root.changeInputState.bind(this.root,this.root.delNextSymbol)],44),new b(this.root,"CapsLock","Caps Lock",this.root.switchIsCapsPressed,!0,100),new w(this.root,"KeyA","a","A","ф","Ф"),new w(this.root,"KeyS","s","S","ы","Ы"),new w(this.root,"KeyD","d","D","в","В"),new w(this.root,"KeyF","f","F","а","А"),new w(this.root,"KeyG","g","G","п","П"),new w(this.root,"KeyH","h","H","р","Р"),new w(this.root,"KeyJ","j","J","о","О"),new w(this.root,"KeyK","k","K","л","Л"),new w(this.root,"KeyL","l","L","д","Д"),new w(this.root,"Semicolon",";",":","ж","Ж"),new w(this.root,"Quote","'",'"',"э","Э"),new v(this.root,"Enter","Enter","\n",86),new b(this.root,"ShiftLeft","Shift",this.root.setIsLeftShiftPressed,!1,100),new w(this.root,"KeyZ","z","Z","я","Я"),new w(this.root,"KeyX","x","X","ч","Ч"),new w(this.root,"KeyC","c","C","с","С"),new w(this.root,"KeyV","v","V","м","М"),new w(this.root,"KeyB","b","B","и","И"),new w(this.root,"KeyN","n","N","т","Т"),new w(this.root,"KeyM","m","M","ь","Ь"),new w(this.root,"Comma",",","<","б","Б"),new w(this.root,"Period",".",">","ю","Ю"),new w(this.root,"Slash","/","?",".",","),new v(this.root,"ArrowUp","▲","▲"),new b(this.root,"ShiftRight","Shift",this.root.setIsRightShiftPressed,!1,86),new m(this.root,"ControlLeft","Ctrl"),new m(this.root,"MetaLeft","Win"),new b(this.root,"AltLeft","Alt",this.root.setIsAltPressed),new v(this.root,"Space",""," ",330),new m(this.root,"AltRight","Alt"),new v(this.root,"ArrowLeft","◄","◄"),new v(this.root,"ArrowDown","▼","▼"),new v(this.root,"ArrowRight","►","►"),new m(this.root,"ControlRight","Ctrl")],this.keysData.forEach((t=>this.keyboardContainer.appendChild(t.getElement()))),this.setKeysValue()}setKeysValue(){this.keysData.forEach((t=>t.setKeyValue?.()))}}class k{constructor(t,e,n,i,s,o){this.segmentsData={[n]:{label:e,position:"left",reverseKey:s},[s]:{label:i,position:"right",reverseKey:n}},this.action=o,this.activeKey=t,this.indicatorPosition=this.segmentsData[this.activeKey].position,this.btnIndicator=null,this.element=this.createElement(e,i)}setActiveKey(t){this.activeKey=t}changeBtnState(t){this.setActiveKey(t),this.indicatorPosition=this.segmentsData[this.activeKey].position,this.btnIndicator.setAttribute("name",this.indicatorPosition)}createElement(t,e){const n=document.createElement("div");return n.className="switchedBtn",n.insertAdjacentHTML("afterbegin",`\n      <div class="switchedBtnIndicator" name="${this.indicatorPosition}"></div>\n      <div class="switchedBtnSection">${t}</div>\n      <div class="switchedBtnSection">${e}</div>\n    `),this.btnIndicator=n.querySelector(".switchedBtnIndicator"),n.addEventListener("click",(()=>{this.changeBtnState(this.segmentsData[this.activeKey].reverseKey),this.action()})),n}getElement(){return this.element}}var x=n(379),S=n.n(x),K=n(426);S()(K.Z,{insert:"head",singleton:!1}),K.Z.locals,(new class{body=document.body;constructor(){this.language=function(){const e=localStorage.getItem(t);return o.includes(e)?e:(localStorage.setItem(t,s),s)}(),this.theme=function(){const t=localStorage.getItem(e);return h.includes(t)?t:(localStorage.setItem(e,r),r)}(),this.isLanguageSwitched=!1,this.isLeftShiftPressed=!1,this.isRightShiftPressed=!1,this.isCapsPressed=!1,this.isAltPressed=!1,this.keysType=d,this.inputValue="",this.startCursorPosition=0,this.ensCursorPosition=0,this.keyboard=new C(this),this.inputField=new f(this),this.languageSegmentedControl=new k(this.language,"EN",s,"RU",i,this.switchSegmentedControlLanguage),this.themeSegmentedControl=new k(this.theme,"🌑",r,"🌞",a,this.switchTheme)}addInputValueSymbol=t=>{const{inputValue:e,startCursorPosition:n,ensCursorPosition:i}=this;this.inputValue=e.slice(0,n)+t+e.slice(i),this.startCursorPosition+=1,this.ensCursorPosition=this.startCursorPosition};delPrevSymbol=()=>{const{inputValue:t,startCursorPosition:e,ensCursorPosition:n}=this;0===e&&0===n||(this.inputValue=t.slice(0,e===n?e-1:e)+t.slice(n),this.startCursorPosition=e===n?e-1:e,this.ensCursorPosition=this.startCursorPosition)};delNextSymbol=()=>{const{inputValue:t,startCursorPosition:e,ensCursorPosition:n}=this;e===t.length&&n===t.length||(this.inputValue=t.slice(0,e)+t.slice(e===n?n+1:n),this.ensCursorPosition=this.startCursorPosition)};setKeysType(){const t=this.isLeftShiftPressed||this.isRightShiftPressed,e=this.isCapsPressed;t||e||(this.keysType=d),t&&!e&&(this.keysType=l),!t&&e&&(this.keysType=c),t&&e&&(this.keysType=u)}setIsLeftShiftPressed=t=>{this.isLeftShiftPressed=t,t||this.isRightShiftPressed||(this.isLanguageSwitched=!1)};setIsRightShiftPressed=t=>{this.isRightShiftPressed=t,t||this.isLeftShiftPressed||(this.isLanguageSwitched=!1)};setIsAltPressed=t=>{this.isAltPressed=t,t||(this.isLanguageSwitched=!1)};switchIsCapsPressed=()=>{this.isCapsPressed=!this.isCapsPressed};resetPressedStates=()=>{this.isLeftShiftPressed=!1,this.isRightShiftPressed=!1,this.isAltPressed=!1};changeInputState(t,...e){t(...e),this.inputField.setInputValue(this.inputValue),this.inputField.setCursorPosition(this.startCursorPosition,this.ensCursorPosition)}switchLanguage(){this.isLanguageSwitched||(this.isLeftShiftPressed||this.isRightShiftPressed)&&this.isAltPressed&&(this.language=this.language===i?s:i,p(this.language),this.isLanguageSwitched=!0,this.languageSegmentedControl.changeBtnState(this.language))}switchSegmentedControlLanguage=()=>(this.language=this.language===i?s:i,p(this.language),this.keyboard.setKeysValue(),this.language);changeKeysTypeState(t,...e){t(...e);const{language:n,keysType:i}=this;this.setKeysType(),this.switchLanguage();const{language:s,keysType:o}=this;i===o&&n===s||this.keyboard.setKeysValue()}switchTheme=()=>{var t;return this.theme=this.theme===r?a:r,t=this.theme,localStorage.setItem(e,t),this.body.setAttribute("theme",this.theme),this.theme};start(){this.body.insertAdjacentHTML("afterbegin",'\n    <div class="container">\n      <p class="title">RSS Virtual Keyboard</p>\n      <div class="main">\n      </div>\n      <div class="optionalButtons">\n      </div>\n      <p class="description">Keyboard created in Windows</p>\n      <p class="description">Switch language: left alt + shift</p>\n    </div>\n  '),this.body.setAttribute("theme",this.theme),this.body.querySelector(".main").appendChild(this.inputField.getElement()),this.body.querySelector(".main").appendChild(this.keyboard.keyboardContainer),this.body.querySelector(".optionalButtons").appendChild(this.languageSegmentedControl.getElement()),this.body.querySelector(".optionalButtons").appendChild(this.themeSegmentedControl.getElement()),window.addEventListener("keydown",(t=>{t.preventDefault()})),window.addEventListener("keyup",(t=>{t.preventDefault()})),window.addEventListener("blur",(()=>{this.keyboard.keysData.forEach((t=>{t.getElement().classList.remove(y),t.resetClickedState?.()})),this.changeKeysTypeState(this.resetPressedStates)}))}}).start()})()})();