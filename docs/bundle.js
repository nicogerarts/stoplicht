!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e,n){"use strict";n.d(e,"f",function(){return r}),n.d(e,"g",function(){return i}),n.d(e,"b",function(){return o}),n.d(e,"a",function(){return a}),n.d(e,"d",function(){return c}),n.d(e,"c",function(){return l}),n.d(e,"e",function(){return d});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${r}--\x3e`,s=new RegExp(`${r}|${i}`),o="$lit$";class a{constructor(t,e){this.parts=[],this.element=e;let n=-1,i=0;const a=[],c=e=>{const u=e.content,h=document.createTreeWalker(u,133,null,!1);let p=0;for(;h.nextNode();){n++;const e=h.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const a=e.attributes;let c=0;for(let t=0;t<a.length;t++)a[t].value.indexOf(r)>=0&&c++;for(;c-- >0;){const r=t.strings[i],a=d.exec(r)[2],c=a.toLowerCase()+o,l=e.getAttribute(c).split(s);this.parts.push({type:"attribute",index:n,name:a,strings:l}),e.removeAttribute(c),i+=l.length-1}}"TEMPLATE"===e.tagName&&c(e)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(r)>=0){const r=e.parentNode,o=t.split(s),c=o.length-1;for(let t=0;t<c;t++)r.insertBefore(""===o[t]?l():document.createTextNode(o[t]),e),this.parts.push({type:"node",index:++n});""===o[c]?(r.insertBefore(l(),e),a.push(e)):e.data=o[c],i+=c}}else if(8===e.nodeType)if(e.data===r){const t=e.parentNode;null!==e.previousSibling&&n!==p||(n++,t.insertBefore(l(),e)),p=n,this.parts.push({type:"node",index:n}),null===e.nextSibling?e.data="":(a.push(e),n--),i++}else{let t=-1;for(;-1!==(t=e.data.indexOf(r,t+1));)this.parts.push({type:"node",index:-1})}}};c(e);for(const t of a)t.parentNode.removeChild(t)}}const c=t=>-1!==t.index,l=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(t,e,n){"use strict";n.r(e);var r=n(2);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class i{handleAttributeExpressions(t,e,n,i){const s=e[0];if("."===s){return new r.f(t,e.slice(1),n).parts}return"@"===s?[new r.d(t,e.slice(1),i.eventContext)]:"?"===s?[new r.c(t,e.slice(1),n)]:new r.a(t,e,n).parts}handleTextExpression(t){return new r.e(t)}}const s=new i;var o=n(5),a=n(7),c=n(4),l=n(3),d=n(8),u=n(6),h=n(9),p=n(0);n.d(e,"html",function(){return f}),n.d(e,"svg",function(){return m}),n.d(e,"DefaultTemplateProcessor",function(){return i}),n.d(e,"defaultTemplateProcessor",function(){return s}),n.d(e,"directive",function(){return a.a}),n.d(e,"isDirective",function(){return a.b}),n.d(e,"removeNodes",function(){return c.b}),n.d(e,"reparentNodes",function(){return c.c}),n.d(e,"noChange",function(){return l.a}),n.d(e,"nothing",function(){return l.b}),n.d(e,"AttributeCommitter",function(){return r.a}),n.d(e,"AttributePart",function(){return r.b}),n.d(e,"BooleanAttributePart",function(){return r.c}),n.d(e,"EventPart",function(){return r.d}),n.d(e,"isPrimitive",function(){return r.h}),n.d(e,"NodePart",function(){return r.e}),n.d(e,"PropertyCommitter",function(){return r.f}),n.d(e,"PropertyPart",function(){return r.g}),n.d(e,"parts",function(){return d.a}),n.d(e,"render",function(){return d.b}),n.d(e,"templateCaches",function(){return u.a}),n.d(e,"templateFactory",function(){return u.b}),n.d(e,"TemplateInstance",function(){return h.a}),n.d(e,"SVGTemplateResult",function(){return o.a}),n.d(e,"TemplateResult",function(){return o.b}),n.d(e,"createMarker",function(){return p.c}),n.d(e,"isTemplatePartActive",function(){return p.d}),n.d(e,"Template",function(){return p.a}),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const f=(t,...e)=>new o.b(t,e,"html",s),m=(t,...e)=>new o.a(t,e,"svg",s)},function(t,e,n){"use strict";n.d(e,"h",function(){return l}),n.d(e,"a",function(){return d}),n.d(e,"b",function(){return u}),n.d(e,"e",function(){return h}),n.d(e,"c",function(){return p}),n.d(e,"f",function(){return f}),n.d(e,"g",function(){return m}),n.d(e,"d",function(){return v});var r=n(7),i=n(4),s=n(3),o=n(9),a=n(5),c=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const l=t=>null===t||!("object"==typeof t||"function"==typeof t);class d{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new u(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let r=0;r<e;r++){n+=t[r];const e=this.parts[r];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)n+="string"==typeof e?e:String(e);else n+="string"==typeof t?t:String(t)}}return n+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class u{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===s.a||l(t)&&t===this.value||(this.value=t,Object(r.b)(t)||(this.committer.dirty=!0))}commit(){for(;Object(r.b)(this.value);){const t=this.value;this.value=s.a,t(this)}this.value!==s.a&&this.committer.commit()}}class h{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(Object(c.c)()),this.endNode=t.appendChild(Object(c.c)())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=Object(c.c)()),t._insert(this.endNode=Object(c.c)())}insertAfterPart(t){t._insert(this.startNode=Object(c.c)()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;Object(r.b)(this._pendingValue);){const t=this._pendingValue;this._pendingValue=s.a,t(this)}const t=this._pendingValue;t!==s.a&&(l(t)?t!==this.value&&this._commitText(t):t instanceof a.b?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):t===s.b?(this.value=s.b,this.clear()):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&3===e.nodeType?e.data=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof o.a&&this.value.template===e)this.value.update(t.values);else{const n=new o.a(e,t.processor,this.options),r=n._clone();n.update(t.values),this._commitNode(r),this.value=n}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,r=0;for(const i of t)void 0===(n=e[r])&&(n=new h(this.options),e.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(e[r-1])),n.setValue(i),n.commit(),r++;r<e.length&&(e.length=r,this.clear(n&&n.endNode))}clear(t=this.startNode){Object(i.b)(this.startNode.parentNode,t.nextSibling,this.endNode)}}class p{constructor(t,e,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this._pendingValue=t}commit(){for(;Object(r.b)(this._pendingValue);){const t=this._pendingValue;this._pendingValue=s.a,t(this)}if(this._pendingValue===s.a)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=s.a}}class f extends d{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new m(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class m extends u{}let g=!1;try{const t={get capture(){return g=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class v{constructor(t,e,n){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this._boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this._pendingValue=t}commit(){for(;Object(r.b)(this._pendingValue);){const t=this._pendingValue;this._pendingValue=s.a,t(this)}if(this._pendingValue===s.a)return;const t=this._pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),i&&(this._options=y(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=s.a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const y=t=>t&&(g?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r={},i={}},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"b",function(){return s});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,n=null,r=null)=>{let i=e;for(;i!==n;){const e=i.nextSibling;t.insertBefore(i,r),i=e}},s=(t,e,n=null)=>{let r=e;for(;r!==n;){const e=r.nextSibling;t.removeChild(r),r=e}}},function(t,e,n){"use strict";n.d(e,"b",function(){return s}),n.d(e,"a",function(){return o});var r=n(4),i=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class s{constructor(t,e,n,r){this.strings=t,this.values=e,this.type=n,this.processor=r}getHTML(){const t=this.strings.length-1;let e="";for(let n=0;n<t;n++){const t=this.strings[n],r=i.e.exec(t);e+=r?t.substr(0,r.index)+r[1]+r[2]+i.b+r[3]+i.f:t+i.g}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class o extends s{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,n=e.firstChild;return e.removeChild(n),Object(r.c)(e,n.firstChild),t}}},function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return s});var r=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function i(t){let e=s.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},s.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(r.f);return void 0===(n=e.keyString.get(i))&&(n=new r.a(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const s=new Map},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=new WeakMap,i=t=>(...e)=>{const n=t(...e);return r.set(n,!0),n},s=t=>"function"==typeof t&&r.has(t)},function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a});var r=n(4),i=n(2),s=n(6);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const o=new WeakMap,a=(t,e,n)=>{let a=o.get(e);void 0===a&&(Object(r.b)(e,e.firstChild),o.set(e,a=new i.e(Object.assign({templateFactory:s.b},n))),a.appendInto(e)),a.setValue(t),a.commit()}},function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(4),i=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class s{constructor(t,e,n){this._parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this._parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=r.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let n=0,s=0;const o=t=>{const r=document.createTreeWalker(t,133,null,!1);let a=r.nextNode();for(;n<e.length&&null!==a;){const t=e[n];if(Object(i.d)(t))if(s===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(a,t.name,t.strings,this.options));n++}else s++,"TEMPLATE"===a.nodeName&&o(a.content),a=r.nextNode();else this._parts.push(void 0),n++}};return o(t),r.a&&(document.adoptNode(t),customElements.upgrade(t)),t}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(11)},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var i,s=arguments.length,o=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(s<3?i(o):s>3?i(e,n,o):i(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o};Object.defineProperty(e,"__esModule",{value:!0});const i=n(14),s=n(12),o=n(13);var a,c;!function(t){t[t.Red=0]="Red",t[t.Orange=1]="Orange",t[t.Yellow=2]="Yellow",t[t.Green=3]="Green"}(a||(a={})),function(t){t.Original="Ongesorteerd",t.Name="Naam",t.Status="Status"}(c||(c={}));const l=c.Original,d={[a.Red]:"red",[a.Orange]:"orange",[a.Yellow]:"yellow",[a.Green]:"green"};console.log(Object.keys(a));let u=class extends i.LitElement{constructor(){super(...arguments),this.sorting=l,this.items=[],this.shiftOn=!1,this.render=(()=>{const t=this.displayItems;return i.html`
            <div class="appRoot">
                <div class="topControls">
                    <div class="tabs">
                        ${Object.keys(c).map(t=>i.html`
                            <div
                                class="tab ${c[t]===this.sorting?"active":""}"
                                @click="${()=>{this.sorting=c[t]}}"
                            >
                                ${c[t]}
                            </div>
                        `)}
                    </div>
                </div>
                <div class="items">
                    ${s.repeat(t,t=>t.key,e=>i.html`
                        <div
                            class="item ${e.index[this.sorting]%2==0?"even":""}"
                            style="--item-color: var(--dark-${d[e.status]}); order: ${e.index[this.sorting]+1};"
                        >
                            <input
                                id="input_${e.index[c.Original]}"
                                class="name"
                                value="${e.name}"
                                @input="${()=>{const t=this.shadowRoot;if(t){const n=t.querySelector(`#input_${e.index[c.Original]}`);n&&this.writeName(e.index[c.Original],n.value)}}}"
                                @keyup="${n=>{if(9===n.keyCode&&!this.shiftOn||13===n.keyCode||40===n.keyCode){const r=t.find(t=>t.index[this.sorting]===e.index[this.sorting]+1);if(r){const t=this.shadowRoot;if(t){const e=t.querySelector(`#input_${r.index[c.Original]}`);e&&e.focus()}}else(9===n.keyCode&&!this.shiftOn||13===n.keyCode)&&this.addItem()}else if(9===n.keyCode&&this.shiftOn||38===n.keyCode){const n=t.find(t=>t.index[this.sorting]===e.index[this.sorting]-1);if(n){const t=this.shadowRoot;if(t){const e=t.querySelector(`#input_${n.index[c.Original]}`);e&&e.focus()}}}else 16===n.keyCode&&(this.shiftOn=!1)}}"
                                @keydown="${t=>{9===t.keyCode?t.preventDefault():16===t.keyCode&&(this.shiftOn=!0)}}"
                            >
                            <div class="controls">
                                <div @click="${()=>{this.toggleDots(e.index[c.Original])}}" class="control svgWrapper fill">
                                    ${o.dots}
                                    ${e.index[c.Original]===this.dotsOpen?i.html`
                                            <div class="dots">
                                                ${Object.keys(d).map(t=>i.html`
                                                    <div
                                                        class="dot ${d[Number(t)]}"
                                                        @click="${n=>{n.preventDefault(),n.stopPropagation(),this.writeStatus(e.index[c.Original],Number(t)),this.dotsOpen=void 0}}"
                                                    ></div>
                                                `)}
                                            </div>
                                        `:void 0}
                                </div>
                                <div @click="${()=>{this.removeItem(e.index[c.Original])}}" class="control svgWrapper fill">
                                    ${o.remove}
                                </div>
                            </div>
                        </div>
                    `)}
                    <div @click="${this.addItem}" class="add" style="order: ${this.items.length+1};">
                        ${o.add} Nieuwe toevoegen...
                    </div>
                </div>
            </div>
        `}),this.addItem=(()=>{const t=this.items.length;this.items=[...this.items,this.createItem()],setTimeout(()=>{const e=this.shadowRoot;if(e){const n=e.querySelector(`#input_${t}`);n&&n.focus()}},30)}),this.toggleDots=(t=>{this.dotsOpen=this.dotsOpen===t?void 0:t}),this.removeItem=(t=>{this.items=this.items.filter((e,n)=>n!==t)}),this.writeName=((t,e)=>{this.items=this.items.map((n,r)=>r===t?{...n,name:e}:n)}),this.writeStatus=((t,e)=>{this.items=this.items.map((n,r)=>r===t?{...n,status:e}:n)})}static get styles(){return i.css`
            :host {
                --red: #FF2600;
                --dark-red: #941100;
                --orange: #FF9300;
                --dark-orange: #945200;
                --yellow: #FFFB00;
                --dark-yellow: #929000;
                --green: #00F900;
                --dark-green: #008F00;

                --item-height: 52px;

                display: block;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgb(36, 39, 46);

                overflow-y: auto;
            }
            .topControls {
                display: flex;
                justify-content: center;
            }
            .tabs {
                margin: 10px;
                border: 1px solid rgba(255, 255, 255, 0.12);
                height: 24px;
                border-radius: 5px;
                display: inline-flex;
                overflow: hidden;
            }
            .tab {
                height: 24px;
                line-height: 24px;
                padding: 0 10px;
                color: rgba(255, 255, 255, 0.24);
                border-right: 1px solid rgba(255, 255, 255, 0.12);
                cursor: pointer;
            }
            .tab:hover {
                color: rgb(0, 0, 0);
                background-color: rgba(255, 255, 255, 0.24);
            }
            .tab.active {
                color: rgb(0, 0, 0);
                background-color: rgba(255, 255, 255, 0.5);
            }
            .tab:last-of-type {
                border-right: 0;
            }
            .items {
                display: flex;
                flex-wrap: wrap;
            }
            .add {
                height: var(--item-height);
                width: calc(100% - 50px);
                padding: 0 25px;
                display: flex;
                align-items: center;
                font-size: 24px;
                color: white;
                opacity: 0.5;
                font-weight: 300;
                cursor: pointer;
            }
            .add:hover {
                opacity: 0.8;
            }
            .add svg {
                fill: white;
                height: 20px;
                width: 20px;
                margin-right: 10px;
            }
            .item {
                height: var(--item-height);
                width: 100%;
                background-color: var(--item-color);
                display: flex;
                align-items: center;
                margin-bottom: 2px;
            }
            @media screen and (min-width: 900px) {
                .item {
                    width: calc(50% - 1px);
                }
                .item.even {
                    margin-right: 2px;
                }
            }
            .name {
                color: white;
                background-color: rgba(0, 0, 0, 0);
                border: 0;
                padding: 0;
                font-size: 36px;
                font-weight: bold;
                margin: 0 0 2px 25px;
                flex-grow: 1;
                flex-shrink: 1;
                outline: none;
                width: 1px;
            }
            .controls {
                margin: 0 20px;
                display: inline-flex;
                height: 100%;
                align-items: center;
            }
            .control {
                margin-left: 20px;
                cursor: pointer;
            }
            .control:first-of-type {
                margin-left: 0;
            }
            .svgWrapper {
                height: 16px;
                width: 16px;
            }
            .svgWrapper svg {
                width: 16px;
                height: 16px;
                --svg-color: rgba(255, 255, 255, 0.6);
            }
            .svgWrapper:hover svg {
                --svg-color: rgba(255, 255, 255, 1);
            }
            .svgWrapper.stroke svg {
                stroke: var(--svg-color);
            }
            .svgWrapper.fill svg {
                fill: var(--svg-color);
            }
            .dots {
                background-color: white;
                display: inline-flex;
                flex-direction: column;
                border-radius: 5px;
                overflow: hidden;
                -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.6);
                -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.6);
                box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.6);
                position: fixed;
                z-index: 900;
            }
            .dot {
                width: 24px;
                height: 24px;
                position: relative;
                border-top: 1px solid #ccc;
                cursor: pointer;
            }
            .dot:hover {
                background-color: #eee;
            }
            .dot:first-of-type {
                border-top: 0;
            }
            .dot::after {
                content: ' ';
                display: block;
                background-color: var(--dot-color, black);
                height: 16px;
                width: 16px;
                border-radius: 8px;
                position: absolute;
                top: 4px;
                left: 4px;
            }
            .dot.red {
                --dot-color: var(--red);
            }
            .dot.orange {
                --dot-color: var(--orange);
            }
            .dot.yellow {
                --dot-color: var(--yellow);
            }
            .dot.green {
                --dot-color: var(--green);
            }
        `}get displayItems(){return this.items.map((t,e)=>({...t,index:{[c.Original]:e}})).sort((t,e)=>t.name.toLowerCase().localeCompare(e.name.toLowerCase())).sort((t,e)=>t.name.length>0&&e.name.length>0?0:t.name.length===e.name.length?0:t.name.length>0?-1:1).map((t,e)=>({...t,index:{...t.index,[c.Name]:e}})).sort((t,e)=>t.status-e.status).map((t,e)=>({...t,index:{...t.index,[c.Status]:e}})).sort((t,e)=>t.index[c.Original]-e.index[c.Original])}createItem(t="",e=a.Green){return{name:t,status:e,key:Symbol()}}};r([i.property()],u.prototype,"sorting",void 0),r([i.property({type:Number})],u.prototype,"dotsOpen",void 0),r([i.property({type:Array})],u.prototype,"items",void 0),u=r([i.customElement("stop-app")],u),e.App=u},function(t,e,n){"use strict";n.r(e),n.d(e,"repeat",function(){return u});var r=n(1);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const i=(t,e)=>{const n=t.startNode.parentNode,i=void 0===e?t.endNode:e.startNode,s=n.insertBefore(Object(r.createMarker)(),i);n.insertBefore(Object(r.createMarker)(),i);const o=new r.NodePart(t.options);return o.insertAfterNode(s),o},s=(t,e)=>(t.setValue(e),t.commit(),t),o=(t,e,n)=>{const i=t.startNode.parentNode,s=n?n.startNode:t.endNode,o=e.endNode.nextSibling;o!==s&&Object(r.reparentNodes)(i,e.startNode,o,s)},a=t=>{Object(r.removeNodes)(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},c=(t,e,n)=>{const r=new Map;for(let i=e;i<=n;i++)r.set(t[i],i);return r},l=new WeakMap,d=new WeakMap,u=Object(r.directive)((t,e,n)=>{let u;return void 0===n?n=e:void 0!==e&&(u=e),e=>{if(!(e instanceof r.NodePart))throw new Error("repeat can only be used in text bindings");const h=l.get(e)||[],p=d.get(e)||[],f=[],m=[],g=[];let v,y,b=0;for(const e of t)g[b]=u?u(e,b):b,m[b]=n(e,b),b++;let x=0,w=h.length-1,_=0,S=m.length-1;for(;x<=w&&_<=S;)if(null===h[x])x++;else if(null===h[w])w--;else if(p[x]===g[_])f[_]=s(h[x],m[_]),x++,_++;else if(p[w]===g[S])f[S]=s(h[w],m[S]),w--,S--;else if(p[x]===g[S])f[S]=s(h[x],m[S]),o(e,h[x],f[S+1]),x++,S--;else if(p[w]===g[_])f[_]=s(h[w],m[_]),o(e,h[w],h[x]),w--,_++;else if(void 0===v&&(v=c(g,_,S),y=c(p,x,w)),v.has(p[x]))if(v.has(p[w])){const t=y.get(g[_]),n=void 0!==t?h[t]:null;if(null===n){const t=i(e,h[x]);s(t,m[_]),f[_]=t}else f[_]=s(n,m[_]),o(e,n,h[x]),h[t]=null;_++}else a(h[w]),w--;else a(h[x]),x++;for(;_<=S;){const t=i(e,f[S+1]);s(t,m[_]),f[_++]=t}for(;x<=w;){const t=h[x++];null!==t&&a(t)}l.set(e,f),d.set(e,g)}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(1);e.remove=r.svg`
    <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512.001 512.001"
        style="enable-background:new 0 0 512.001 512.001;"
        xml:space="preserve"
    >
        <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
                    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
                    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
                    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
    </svg>
`,e.dots=r.svg`
    <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style="enable-background:new 0 0 512 512;"
        xml:space="preserve"
    >
        <circle cx="256" cy="256" r="64"/>
        <circle cx="256" cy="448" r="64"/>
        <circle cx="256" cy="64" r="64"/>
    </svg>
`,e.add=r.svg`
    <svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
        <path
            d="
                m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm112
                277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031
                21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344
                0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344
                9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031
                9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0
            "
        />
    </svg>
`},function(t,e,n){"use strict";n.r(e);var r=n(1),i=n(4),s=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const o=133;function a(t,e){const{element:{content:n},parts:r}=t,i=document.createTreeWalker(n,o,null,!1);let s=l(r),a=r[s],c=-1,d=0;const u=[];let h=null;for(;i.nextNode();){c++;const t=i.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(u.push(t),null===h&&(h=t)),null!==h&&d++;void 0!==a&&a.index===c;)a.index=null!==h?-1:a.index-d,a=r[s=l(r,s)]}u.forEach(t=>t.parentNode.removeChild(t))}const c=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,o,null,!1);for(;n.nextNode();)e++;return e},l=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(Object(s.d)(e))return n}return-1};var d=n(8),u=n(6),h=n(9),p=n(5);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const f=(t,e)=>`${t}--${e}`;let m=!0;void 0===window.ShadyCSS?m=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),m=!1);const g=["html","svg"],v=new Set,y=(t,e,n)=>{v.add(n);const r=t.querySelectorAll("style");if(0===r.length)return void window.ShadyCSS.prepareTemplateStyles(e.element,n);const i=document.createElement("style");for(let t=0;t<r.length;t++){const e=r[t];e.parentNode.removeChild(e),i.textContent+=e.textContent}if((t=>{g.forEach(e=>{const n=u.a.get(f(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),a(t,n)})})})(n),function(t,e,n=null){const{element:{content:r},parts:i}=t;if(null===n||void 0===n)return void r.appendChild(e);const s=document.createTreeWalker(r,o,null,!1);let a=l(i),d=0,u=-1;for(;s.nextNode();)for(u++,s.currentNode===n&&(d=c(e),n.parentNode.insertBefore(e,n));-1!==a&&i[a].index===u;){if(d>0){for(;-1!==a;)i[a].index+=d,a=l(i,a);return}a=l(i,a)}}(e,i,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,n),window.ShadyCSS.nativeShadow){const n=e.element.content.querySelector("style");t.insertBefore(n.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(i,e.element.content.firstChild);const t=new Set;t.add(i),a(e,t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.JSCompiler_renameProperty=((t,e)=>t);const b={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},x=(t,e)=>e!==t&&(e==e||t==t),w={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:x},_=Promise.resolve(!0),S=1,P=4,O=8,N=16,C=32;class k extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=_,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const r=this._attributeNameForProperty(n,e);void 0!==r&&(this._attributeToPropertyMap.set(r,n),t.push(r))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=w){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[n]},set(e){const r=this[t];this[n]=e,this.requestUpdate(t,r)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const t=Object.getPrototypeOf(this);if("function"==typeof t.finalize&&t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=x){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,r=e.converter||b,i="function"==typeof r?r:r.fromAttribute;return i?i(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,r=e.converter;return(r&&r.toAttribute||b.toAttribute)(t,n)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|C,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=w){const r=this.constructor,i=r._attributeNameForProperty(t,n);if(void 0!==i){const t=r._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=this._updateState|O,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=this._updateState&~O}}_attributeToProperty(t,e){if(this._updateState&O)return;const n=this.constructor,r=n._attributeToPropertyMap.get(t);if(void 0!==r){const t=n._classProperties.get(r)||w;this._updateState=this._updateState|N,this[r]=n._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~N}}requestUpdate(t,e){let n=!0;if(void 0!==t&&!this._changedProperties.has(t)){const r=this.constructor,i=r._classProperties.get(t)||w;r._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.set(t,e),!0!==i.reflect||this._updateState&N||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):n=!1}return!this._hasRequestedUpdate&&n&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let t;this._updateState=this._updateState|P;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);const n=this.performUpdate();null!=n&&"function"==typeof n.then&&await n,t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&C}get _hasRequestedUpdate(){return this._updateState&P}get hasUpdated(){return this._updateState&S}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t),this._markUpdated(),this._updateState&S||(this._updateState=this._updateState|S,this.firstUpdated(t)),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~P}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}k.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const T=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:r}=e;return{kind:n,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e),A=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}}:Object.assign({},e,{finisher(n){n.createProperty(e.key,t)}}),E=(t,e,n)=>{e.constructor.createProperty(n,t)};function j(t){return(e,n)=>void 0!==n?E(t,e,n):A(t,e)}const V=z((t,e)=>t.querySelector(e)),R=z((t,e)=>t.querySelectorAll(e)),$=(t,e,n)=>{Object.defineProperty(e,n,t)},M=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t});function z(t){return e=>(n,r)=>{const i={get(){return t(this.renderRoot,e)},enumerable:!0,configurable:!0};return void 0!==r?$(i,n,r):M(i,n)}}const L=t=>(e,n)=>void 0!==n?((t,e,n)=>{Object.assign(e[n],t)})(t,e,n):((t,e)=>Object.assign({},e,{finisher(n){Object.assign(n.prototype[e.key],t)}}))(t,e),U="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol();class q{constructor(t,e){if(e!==F)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(U?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const I=t=>new q(String(t),F),W=(t,...e)=>{const n=e.reduce((e,n,r)=>e+(t=>{if(t instanceof q)return t.cssText;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[r+1],t[0]);return new q(n,F)};n.d(e,"LitElement",function(){return H}),n.d(e,"defaultConverter",function(){return b}),n.d(e,"notEqual",function(){return x}),n.d(e,"UpdatingElement",function(){return k}),n.d(e,"customElement",function(){return T}),n.d(e,"property",function(){return j}),n.d(e,"query",function(){return V}),n.d(e,"queryAll",function(){return R}),n.d(e,"eventOptions",function(){return L}),n.d(e,"html",function(){return r.html}),n.d(e,"svg",function(){return r.svg}),n.d(e,"TemplateResult",function(){return r.TemplateResult}),n.d(e,"SVGTemplateResult",function(){return r.SVGTemplateResult}),n.d(e,"supportsAdoptingStyleSheets",function(){return U}),n.d(e,"CSSResult",function(){return q}),n.d(e,"unsafeCSS",function(){return I}),n.d(e,"css",function(){return W}),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.0");const B=t=>t.flat?t.flat(1/0):function t(e,n=[]){for(let r=0,i=e.length;r<i;r++){const i=e[r];Array.isArray(i)?t(i,n):n.push(i)}return n}(t);class H extends k{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){B(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?U?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof r.TemplateResult&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}H.finalized=!0,H.render=((t,e,n)=>{const r=n.scopeName,o=d.a.has(e),a=e instanceof ShadowRoot&&m&&t instanceof p.b,c=a&&!v.has(r),l=c?document.createDocumentFragment():e;if(Object(d.b)(t,l,Object.assign({templateFactory:(t=>e=>{const n=f(e.type,t);let r=u.a.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},u.a.set(n,r));let i=r.stringsArray.get(e.strings);if(void 0!==i)return i;const o=e.strings.join(s.f);if(void 0===(i=r.keyString.get(o))){const n=e.getTemplateElement();m&&window.ShadyCSS.prepareTemplateDom(n,t),i=new s.a(e,n),r.keyString.set(o,i)}return r.stringsArray.set(e.strings,i),i})(r)},n)),c){const t=d.a.get(l);d.a.delete(l),t.value instanceof h.a&&y(l,t.value.template,r),Object(i.b)(e,e.firstChild),e.appendChild(l),d.a.set(e,t)}!o&&a&&window.ShadyCSS.styleElement(e.host)})}]);
//# sourceMappingURL=bundle.js.map