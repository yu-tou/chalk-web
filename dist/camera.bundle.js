!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return l}));var n=["black","silver","gray","white","maroon","red","purple","fuchsia","green","lime","olive","yellow","navy","blue","teal","aqua","orange","aliceblue","antiquewhite","aquamarine","azure","beige","bisque","blanchedalmond","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","gainsboro","ghostwhite","gold","goldenrod","greenyellow","grey","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","limegreen","linen","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","oldlace","olivedrab","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","thistle","tomato","turquoise","violet","wheat","whitesmoke","yellowgreen","rebeccapurple"];var o={create:function(){const e=function(e){return e&&(this.o=e),this};return e.type="colors-web-instance",Object.assign(e,{styles:[],o:"",log(e){return this.o=e,this},hexColor(e){return this.styles.push(`color:${e};`),this},color(e){return this.styles.push(`color:${e};`),this},bg(e){return this.styles.push(`background:${e};`),this},fontsize(e){return this.styles.push(`font-size:${e}px;`),this},fontfamily(e){return this.styles.push(`font-family:${e};`),this},padding(e,t){return t?this.styles.push(`padding:${e}px ${t}px;`):this.styles.push(`padding:${e}px;`),this},bold(e){return this.styles.push("font-weight:bold;"),e&&(this.o=e),this},underline(e){return this.styles.push("text-decoration:underline;"),e&&(this.o=e),this},linethrough(e){return this.styles.push("text-decoration:line-through;"),e&&(this.o=e),this},italic(e){return this.styles.push("font-style:italic;"),e&&(this.o=e),this},result(){const e={o:this.o,style:this.styles.join("")};return this.o="",this.styles=[],e}}),n.forEach(t=>{Object.defineProperty(e,t,{get(){return this.styles.push(`color:${t};`),this}}),Object.defineProperty(e,t+"Bg",{get(){return this.styles.push(`background:${t};`),this}})}),e}};const i=(...e)=>{const t=[],r=[];e.forEach(e=>{if("string"==typeof e)r.push("%c"+e),t.push("");else if(e&&"colors-web-instance"===e.type){const n=e.result();r.push("%c"+n.o),t.push(n.style)}else r.push(String(e))}),i.source(r.join(""),...t)};i.source=window.console.log;const l=()=>o.create()},,function(e,t,r){"use strict";r.r(t),r.d(t,"render",(function(){return l}));var n=r(0);const o=window.console.log;n.b.source=o;let i=0;const l=function(e){i++,i%20==0&&console.clear();const t=[];for(let r=0;r<e.length;r++){for(let o=0;o<e[r].length;o++){const i=e[r][o];t.push(Object(n.a)().bg(`rgb(${i.r},${i.g},${i.b})`).log(" "))}t.push("\n")}Object(n.b)(...t)};var s=document.createElement("video");s.style.width="100px",s.style.height="30px",document.body.appendChild(s);var a=document.createElement("canvas");a.style.width="100px",a.style.height="30px",document.body.appendChild(a);var u=a.getContext("2d");a.width=100,a.height=30;!async function(){const e=await navigator.mediaDevices.getUserMedia({video:!0});s.onloadedmetadata=function(e){s.play()},s.srcObject=e}(),setInterval(()=>{!function(){u.drawImage(s,0,0,100,30);for(var e=u.getImageData(0,0,100,30).data,t=[],r=0;r<30;r++){t[r]=[];for(var n=0;n<100;n++)100*r+n<e.length&&t[r].push({r:e[4*(100*r+n)+0],g:e[4*(100*r+n)+1],b:e[4*(100*r+n)+2]})}l(t)}()},800)}]);