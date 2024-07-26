import{_ as Be,a as Me,w as Ee,c as Xe,B as $e}from"./index-20432540.js";import{u as je,o as We,U as ve,F as Ye,I as Le,_ as Ke,b as Je}from"./user-33ed915c.js";import{i as Qe,D as Ze,S as et,_ as tt}from"./index-4917c236.js";import{_ as nt}from"./index-df906824.js";import{e as s,A as at,j as h,h as Se,r as D,s as Re,t as U,k as _,F as rt,G as it,i as le,H as ut,n as J,I as Fe,x as lt,u as ot,P as me,_ as st,o as ct,b as dt,d as pe,w as x,f as oe}from"./index-ff77ca57.js";import{K as se}from"./Overflow-feb0de69.js";var ft={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"};const vt=ft;function Pe(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},l=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),l.forEach(function(i){mt(n,i,t[i])})}return n}function mt(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Ne=function(e,t){var l=Pe({},e,t.attrs);return s(at,Pe({},l,{icon:vt}),null)};Ne.displayName="UpOutlined";Ne.inheritAttrs=!1;const pt=Ne;function he(){return typeof BigInt=="function"}function Q(n){var e=n.trim(),t=e.startsWith("-");t&&(e=e.slice(1)),e=e.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),e.startsWith(".")&&(e="0".concat(e));var l=e||"0",i=l.split("."),d=i[0]||"0",g=i[1]||"0";d==="0"&&g==="0"&&(t=!1);var c=t?"-":"";return{negative:t,negativeStr:c,trimStr:l,integerStr:d,decimalStr:g,fullStr:"".concat(c).concat(l)}}function _e(n){var e=String(n);return!Number.isNaN(Number(e))&&e.includes("e")}function Z(n){var e=String(n);if(_e(n)){var t=Number(e.slice(e.indexOf("e-")+2)),l=e.match(/\.(\d+)/);return l!=null&&l[1]&&(t+=l[1].length),t}return e.includes(".")&&xe(e)?e.length-e.indexOf(".")-1:0}function Ie(n){var e=String(n);if(_e(n)){if(n>Number.MAX_SAFE_INTEGER)return String(he()?BigInt(n).toString():Number.MAX_SAFE_INTEGER);if(n<Number.MIN_SAFE_INTEGER)return String(he()?BigInt(n).toString():Number.MIN_SAFE_INTEGER);e=n.toFixed(Z(e))}return Q(e).fullStr}function xe(n){return typeof n=="number"?!Number.isNaN(n):n?/^\s*-?\d+(\.\d+)?\s*$/.test(n)||/^\s*-?\d+\.\s*$/.test(n)||/^\s*-?\.\d+\s*$/.test(n):!1}function Ve(n){return!n&&n!==0&&!Number.isNaN(n)||!String(n).trim()}var gt=function(){function n(e){if(Me(this,n),h(this,"origin",""),Ve(e)){this.empty=!0;return}this.origin=String(e),this.number=Number(e)}return Be(n,[{key:"negate",value:function(){return new n(-this.toNumber())}},{key:"add",value:function(t){if(this.isInvalidate())return new n(t);var l=Number(t);if(Number.isNaN(l))return this;var i=this.number+l;if(i>Number.MAX_SAFE_INTEGER)return new n(Number.MAX_SAFE_INTEGER);if(i<Number.MIN_SAFE_INTEGER)return new n(Number.MIN_SAFE_INTEGER);var d=Math.max(Z(this.number),Z(l));return new n(i.toFixed(d))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toNumber()===(t==null?void 0:t.toNumber())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":Ie(this.number):this.origin}}]),n}(),yt=function(){function n(e){if(Me(this,n),h(this,"origin",""),Ve(e)){this.empty=!0;return}if(this.origin=String(e),e==="-"||Number.isNaN(e)){this.nan=!0;return}var t=e;if(_e(t)&&(t=Number(t)),t=typeof t=="string"?t:Ie(t),xe(t)){var l=Q(t);this.negative=l.negative;var i=l.trimStr.split(".");this.integer=BigInt(i[0]);var d=i[1]||"0";this.decimal=BigInt(d),this.decimalLen=d.length}else this.nan=!0}return Be(n,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(t){var l="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(t,"0"));return BigInt(l)}},{key:"negate",value:function(){var t=new n(this.toString());return t.negative=!t.negative,t}},{key:"add",value:function(t){if(this.isInvalidate())return new n(t);var l=new n(t);if(l.isInvalidate())return this;var i=Math.max(this.getDecimalStr().length,l.getDecimalStr().length),d=this.alignDecimal(i),g=l.alignDecimal(i),c=(d+g).toString(),v=Q(c),y=v.negativeStr,p=v.trimStr,u="".concat(y).concat(p.padStart(i+1,"0"));return new n("".concat(u.slice(0,-i),".").concat(u.slice(-i)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toString()===(t==null?void 0:t.toString())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":Q("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),n}();function R(n){return he()?new yt(n):new gt(n)}function be(n,e,t){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(n==="")return"";var i=Q(n),d=i.negativeStr,g=i.integerStr,c=i.decimalStr,v="".concat(e).concat(c),y="".concat(d).concat(g);if(t>=0){var p=Number(c[t]);if(p>=5&&!l){var u=R(n).add("".concat(d,"0.").concat("0".repeat(t)).concat(10-p));return be(u.toString(),e,t,l)}return t===0?y:"".concat(y).concat(e).concat(c.padEnd(t,"0").slice(0,t))}return v===".0"?y:"".concat(y).concat(v)}var ht=200,bt=600;const St=Se({compatConfig:{MODE:3},name:"StepHandler",inheritAttrs:!1,props:{prefixCls:String,upDisabled:Boolean,downDisabled:Boolean,onStep:{type:Function}},slots:["upNode","downNode"],setup:function(e,t){var l=t.slots,i=t.emit,d=D(),g=function(y,p){y.preventDefault(),i("step",p);function u(){i("step",p),d.value=setTimeout(u,ht)}d.value=setTimeout(u,bt)},c=function(){clearTimeout(d.value)};return Re(function(){c()}),function(){if(Qe())return null;var v=e.prefixCls,y=e.upDisabled,p=e.downDisabled,u="".concat(v,"-handler"),P=U(u,"".concat(u,"-up"),h({},"".concat(u,"-up-disabled"),y)),C=U(u,"".concat(u,"-down"),h({},"".concat(u,"-down-disabled"),p)),w={unselectable:"on",role:"button",onMouseup:c,onMouseleave:c},m=l.upNode,V=l.downNode;return s("div",{class:"".concat(u,"-wrap")},[s("span",_(_({},w),{},{onMousedown:function(B){g(B,!0)},"aria-label":"Increase Value","aria-disabled":y,class:P}),[(m==null?void 0:m())||s("span",{unselectable:"on",class:"".concat(v,"-handler-up-inner")},null)]),s("span",_(_({},w),{},{onMousedown:function(B){g(B,!1)},"aria-label":"Decrease Value","aria-disabled":p,class:C}),[(V==null?void 0:V())||s("span",{unselectable:"on",class:"".concat(v,"-handler-down-inner")},null)])])}}});function Nt(n,e){var t=D(null);function l(){try{var d=n.value,g=d.selectionStart,c=d.selectionEnd,v=d.value,y=v.substring(0,g),p=v.substring(c);t.value={start:g,end:c,value:v,beforeTxt:y,afterTxt:p}}catch(u){}}function i(){if(n.value&&t.value&&e.value)try{var d=n.value.value,g=t.value,c=g.beforeTxt,v=g.afterTxt,y=g.start,p=d.length;if(d.endsWith(v))p=d.length-t.value.afterTxt.length;else if(d.startsWith(c))p=c.length;else{var u=c[y-1],P=d.indexOf(u,y-1);P!==-1&&(p=P+1)}n.value.setSelectionRange(p,p)}catch(C){rt(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(C.message))}}return[l,i]}const _t=function(){var n=D(0),e=function(){Ee.cancel(n.value)};return Re(function(){e()}),function(t){e(),n.value=Ee(function(){t()})}};var It=["prefixCls","min","max","step","defaultValue","value","disabled","readonly","keyboard","controls","autofocus","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep","lazy","class","style"],Ce=function(e,t){return e||t.isEmpty()?t.toString():t.toNumber()},ke=function(e){var t=R(e);return t.isInvalidate()?null:t},Ae=function(){return{stringMode:{type:Boolean},defaultValue:{type:[String,Number]},value:{type:[String,Number]},prefixCls:{type:String},min:{type:[String,Number]},max:{type:[String,Number]},step:{type:[String,Number],default:1},tabindex:{type:Number},controls:{type:Boolean,default:!0},readonly:{type:Boolean},disabled:{type:Boolean},autofocus:{type:Boolean},keyboard:{type:Boolean,default:!0},parser:{type:Function},formatter:{type:Function},precision:{type:Number},decimalSeparator:{type:String},onInput:{type:Function},onChange:{type:Function},onPressEnter:{type:Function},onStep:{type:Function},onBlur:{type:Function},onFocus:{type:Function}}};const xt=Se({compatConfig:{MODE:3},name:"InnerInputNumber",inheritAttrs:!1,props:_(_({},Ae()),{},{lazy:Boolean}),slots:["upHandler","downHandler"],setup:function(e,t){var l=t.attrs,i=t.slots,d=t.emit,g=t.expose,c=D(),v=D(!1),y=D(!1),p=D(!1),u=D(R(e.value));function P(o){e.value===void 0&&(u.value=o)}var C=function(a,f){if(!f)return e.precision>=0?e.precision:Math.max(Z(a),Z(e.step))},w=function(a){var f=String(a);if(e.parser)return e.parser(f);var r=f;return e.decimalSeparator&&(r=r.replace(e.decimalSeparator,".")),r.replace(/[^\w.-]+/g,"")},m=D(""),V=function(a,f){if(e.formatter)return e.formatter(a,{userTyping:f,input:String(m.value)});var r=typeof a=="number"?Ie(a):a;if(!f){var I=C(r,f);if(xe(r)&&(e.decimalSeparator||I>=0)){var N=e.decimalSeparator||".";r=be(r,N,I)}}return r},$=function(){var o=e.value;return u.value.isInvalidate()&&["string","number"].includes(it(o))?Number.isNaN(o)?"":o:V(u.value.toString(),!1)}();m.value=$;function B(o,a){m.value=V(o.isInvalidate()?o.toString(!1):o.toString(!a),a)}var O=le(function(){return ke(e.max)}),E=le(function(){return ke(e.min)}),S=le(function(){return!O.value||!u.value||u.value.isInvalidate()?!1:O.value.lessEquals(u.value)}),T=le(function(){return!E.value||!u.value||u.value.isInvalidate()?!1:u.value.lessEquals(E.value)}),F=Nt(c,v),k=ut(F,2),q=k[0],ee=k[1],G=function(a){return O.value&&!a.lessEquals(O.value)?O.value:E.value&&!E.value.lessEquals(a)?E.value:null},H=function(a){return!G(a)},z=function(a,f){var r=a,I=H(r)||r.isEmpty();if(!r.isEmpty()&&!f&&(r=G(r)||r,I=!0),!e.readonly&&!e.disabled&&I){var N=r.toString(),M=C(N,f);if(M>=0&&(r=R(be(N,".",M))),!r.equals(u.value)){var A;P(r),(A=e.onChange)===null||A===void 0||A.call(e,r.isEmpty()?null:Ce(e.stringMode,r)),e.value===void 0&&B(r,f)}return r}return u.value},j=_t(),W=function o(a){var f;if(q(),m.value=a,!p.value){var r=w(a),I=R(r);I.isNaN()||z(I,!0)}(f=e.onInput)===null||f===void 0||f.call(e,a),j(function(){var N=a;e.parser||(N=a.replace(/。/g,".")),N!==a&&o(N)})},Y=function(){p.value=!0},te=function(){p.value=!1,W(c.value.value)},L=function(a){W(a.target.value)},K=function(a){var f,r;if(!(a&&S.value||!a&&T.value)){y.value=!1;var I=R(e.step);a||(I=I.negate());var N=(u.value||R(0)).add(I.toString()),M=z(N,!1);(f=e.onStep)===null||f===void 0||f.call(e,Ce(e.stringMode,M),{offset:e.step,type:a?"up":"down"}),(r=c.value)===null||r===void 0||r.focus()}},ne=function(a){var f=R(w(m.value)),r=f;f.isNaN()?r=u.value:r=z(f,a),e.value!==void 0?B(u.value,!1):r.isNaN()||B(r,!1)},ce=function(a){var f=a.which;if(y.value=!0,f===se.ENTER){var r;p.value||(y.value=!1),ne(!1),(r=e.onPressEnter)===null||r===void 0||r.call(e,a)}e.keyboard!==!1&&!p.value&&[se.UP,se.DOWN].includes(f)&&(K(se.UP===f),a.preventDefault())},b=function(){y.value=!1},X=function(a){ne(!1),v.value=!1,y.value=!1,d("blur",a)};return J(function(){return e.precision},function(){u.value.isInvalidate()||B(u.value,!1)},{flush:"post"}),J(function(){return e.value},function(){var o=R(e.value);u.value=o;var a=R(w(m.value));(!o.equals(a)||!y.value||e.formatter)&&B(o,y.value)},{flush:"post"}),J(m,function(){e.formatter&&ee()},{flush:"post"}),J(function(){return e.disabled},function(o){o&&(v.value=!1)}),g({focus:function(){var a;(a=c.value)===null||a===void 0||a.focus()},blur:function(){var a;(a=c.value)===null||a===void 0||a.blur()}}),function(){var o,a=_(_({},l),e),f=a.prefixCls,r=f===void 0?"rc-input-number":f,I=a.min,N=a.max,M=a.step,A=M===void 0?1:M;a.defaultValue,a.value;var ae=a.disabled,re=a.readonly;a.keyboard;var ie=a.controls,de=ie===void 0?!0:ie,ue=a.autofocus;a.stringMode,a.parser,a.formatter,a.precision,a.decimalSeparator,a.onChange,a.onInput,a.onPressEnter,a.onStep;var Oe=a.lazy,Ue=a.class,Te=a.style,qe=Fe(a,It),Ge=i.upHandler,He=i.downHandler,we="".concat(r,"-input"),fe={};return Oe?fe.onChange=L:fe.onInput=L,s("div",{class:U(r,Ue,(o={},h(o,"".concat(r,"-focused"),v.value),h(o,"".concat(r,"-disabled"),ae),h(o,"".concat(r,"-readonly"),re),h(o,"".concat(r,"-not-a-number"),u.value.isNaN()),h(o,"".concat(r,"-out-of-range"),!u.value.isInvalidate()&&!H(u.value)),o)),style:Te,onKeydown:ce,onKeyup:b},[de&&s(St,{prefixCls:r,upDisabled:S.value,downDisabled:T.value,onStep:K},{upNode:Ge,downNode:He}),s("div",{class:"".concat(we,"-wrap")},[s("input",_(_(_({autofocus:ue,autocomplete:"off",role:"spinbutton","aria-valuemin":I,"aria-valuemax":N,"aria-valuenow":u.value.isInvalidate()?null:u.value.toString(),step:A},qe),{},{ref:c,class:we,value:m.value,disabled:ae,readonly:re,onFocus:function(ze){v.value=!0,d("focus",ze)}},fe),{},{onBlur:X,onCompositionstart:Y,onCompositionend:te}),null)])])}}});function ge(n){return n!=null}var wt=["class","bordered","readonly","style","addonBefore","addonAfter","prefix","valueModifiers"],De=Ae(),Et=function(){return _(_({},De),{},{size:{type:String},bordered:{type:Boolean,default:!0},placeholder:String,name:String,id:String,type:String,addonBefore:me.any,addonAfter:me.any,prefix:me.any,"onUpdate:value":De.onChange,valueModifiers:Object})},ye=Se({compatConfig:{MODE:3},name:"AInputNumber",inheritAttrs:!1,props:Et(),slots:["addonBefore","addonAfter","prefix"],setup:function(e,t){var l=t.emit,i=t.expose,d=t.attrs,g=t.slots,c=je(),v=ot("input-number",e),y=v.prefixCls,p=v.size,u=v.direction,P=D(e.value===void 0?e.defaultValue:e.value),C=D(!1);J(function(){return e.value},function(){P.value=e.value});var w=D(null),m=function(){var S;(S=w.value)===null||S===void 0||S.focus()},V=function(){var S;(S=w.value)===null||S===void 0||S.blur()};i({focus:m,blur:V});var $=function(S){e.value===void 0&&(P.value=S),l("update:value",S),l("change",S),c.onFieldChange()},B=function(S){C.value=!1,l("blur",S),c.onFieldBlur()},O=function(S){C.value=!0,l("focus",S)};return function(){var E,S,T,F,k=_(_({},d),e),q=k.class,ee=k.bordered,G=k.readonly,H=k.style,z=k.addonBefore,j=z===void 0?(E=g.addonBefore)===null||E===void 0?void 0:E.call(g):z,W=k.addonAfter,Y=W===void 0?(S=g.addonAfter)===null||S===void 0?void 0:S.call(g):W,te=k.prefix,L=te===void 0?(T=g.prefix)===null||T===void 0?void 0:T.call(g):te,K=k.valueModifiers,ne=K===void 0?{}:K,ce=Fe(k,wt),b=y.value,X=p.value,o=U((F={},h(F,"".concat(b,"-lg"),X==="large"),h(F,"".concat(b,"-sm"),X==="small"),h(F,"".concat(b,"-rtl"),u.value==="rtl"),h(F,"".concat(b,"-readonly"),G),h(F,"".concat(b,"-borderless"),!ee),F),q),a=s(xt,_(_({},We(ce,["size","defaultValue"])),{},{ref:w,lazy:!!ne.lazy,value:P.value,class:o,prefixCls:b,readonly:G,onChange:$,onBlur:B,onFocus:O}),{upHandler:function(){return s(pt,{class:"".concat(b,"-handler-up-inner")},null)},downHandler:function(){return s(Ze,{class:"".concat(b,"-handler-down-inner")},null)}}),f=ge(j)||ge(Y);if(ge(L)){var r,I=U("".concat(b,"-affix-wrapper"),(r={},h(r,"".concat(b,"-affix-wrapper-focused"),C.value),h(r,"".concat(b,"-affix-wrapper-disabled"),e.disabled),h(r,"".concat(b,"-affix-wrapper-rtl"),u.value==="rtl"),h(r,"".concat(b,"-affix-wrapper-readonly"),G),h(r,"".concat(b,"-affix-wrapper-borderless"),!ee),h(r,"".concat(q),!f&&q),r));a=s("div",{class:I,style:H,onMouseup:function(){return w.value.focus()}},[s("span",{class:"".concat(b,"-prefix")},[L]),a])}if(f){var N,M="".concat(b,"-group"),A="".concat(M,"-addon"),ae=j?s("div",{class:A},[j]):null,re=Y?s("div",{class:A},[Y]):null,ie=U("".concat(b,"-wrapper"),M,h({},"".concat(M,"-rtl"),u.value==="rtl")),de=U("".concat(b,"-group-wrapper"),(N={},h(N,"".concat(b,"-group-wrapper-sm"),X==="small"),h(N,"".concat(b,"-group-wrapper-lg"),X==="large"),h(N,"".concat(b,"-group-wrapper-rtl"),u.value==="rtl"),N),q);a=s("div",{class:de,style:H},[s("div",{class:ie},[ae,a,re])])}return Xe(a,{style:H})}}});const Pt=lt(ye,{install:function(e){return e.component(ye.name,ye),e}});const Ct={components:{},data(){return{resXY:"",systemParam:{AudioMixer:!1,PORT:"",RenderOffScreen:!1,ResX:"",ResY:"",Unattended:!1,SignalIp:"",WebRTCFps:"",auth:!1,exeUeCoolTime:"",iceServers:"",idleReleaseTime:"",preloadReleaseTime:""}}},methods:{authChange(n){},btnReset(){this.GetSystemParam()},btnSave(){console.log(this.systemParam),this.systemParam.ResX=this.resXY.split("*")[0],this.systemParam.ResY=this.resXY.split("*")[1],ve.UpdateSystemParam(this.systemParam).then(n=>{this.GetSystemParam()})},GetSystemParam(){ve.GetSystemParam().then(n=>{n.data.status=="0"&&(this.systemParam=n.data,console.log(this.systemParam))})}},mounted(){ve.GetSystemParam().then(n=>{n.data.status=="0"&&(this.systemParam=n.data,this.systemParam.iceServers=JSON.stringify(n.data.iceServers),this.resXY=n.data.ResX+"*"+n.data.ResY,console.log(this.systemParam))})}},kt={class:"container",style:{height:"100%"}},Dt={style:{"padding-left":"20%","padding-right":"20%",width:"100%",height:"100%","padding-top":"40px","background-color":"#1B1B1B"}},Bt={style:{width:"40%"}},Mt={style:{float:"right"}};function Rt(n,e,t,l,i,d){const g=Le,c=Ke,v=nt,y=Pt,p=et,u=tt,P=Je,C=Ye,w=$e;return ct(),dt("div",kt,[pe("div",Dt,[pe("div",Bt,[s(C,{model:i.systemParam},{default:x(()=>[s(c,{"label-style":"color: black;",label:"端口"},{default:x(()=>[s(g,{value:i.systemParam.PORT,"onUpdate:value":e[0]||(e[0]=m=>i.systemParam.PORT=m)},null,8,["value"])]),_:1}),s(c,{label:"用户认证"},{default:x(()=>[s(v,{checked:i.systemParam.auth,"onUpdate:checked":e[1]||(e[1]=m=>i.systemParam.auth=m),onChange:d.authChange},null,8,["checked","onChange"])]),_:1}),s(c,{label:"服务IP地址"},{default:x(()=>[s(g,{value:i.systemParam.SignalIp,"onUpdate:value":e[2]||(e[2]=m=>i.systemParam.SignalIp=m)},null,8,["value"])]),_:1}),s(c,{label:"发送帧率"},{default:x(()=>[s(y,{value:i.systemParam.WebRTCFps,"onUpdate:value":e[3]||(e[3]=m=>i.systemParam.WebRTCFps=m)},null,8,["value"])]),_:1}),s(c,{label:"分辨率"},{default:x(()=>[s(u,{value:i.resXY,"onUpdate:value":e[4]||(e[4]=m=>i.resXY=m)},{default:x(()=>[s(p,{key:"",value:"1920*1080"},{default:x(()=>[oe("1920*1080")]),_:1}),s(p,{key:"",value:"1280*960"},{default:x(()=>[oe("1280*960")]),_:1})]),_:1},8,["value"])]),_:1}),s(c,{label:"异常忽略"},{default:x(()=>[s(v,{checked:i.systemParam.Unattended,"onUpdate:checked":e[5]||(e[5]=m=>i.systemParam.Unattended=m)},null,8,["checked"])]),_:1}),s(c,{label:"渲染程序后台运行"},{default:x(()=>[s(v,{checked:i.systemParam.RenderOffScreen,"onUpdate:checked":e[6]||(e[6]=m=>i.systemParam.RenderOffScreen=m)},null,8,["checked"])]),_:1}),s(c,{label:"音频发送"},{default:x(()=>[s(v,{checked:i.systemParam.AudioMixer,"onUpdate:checked":e[7]||(e[7]=m=>i.systemParam.AudioMixer=m)},null,8,["checked"])]),_:1}),s(c,{label:"iceServers"},{default:x(()=>[s(P,{"auto-size":"",value:i.systemParam.iceServers,"onUpdate:value":e[8]||(e[8]=m=>i.systemParam.iceServers=m)},null,8,["value"])]),_:1})]),_:1},8,["model"]),pe("div",Mt,[s(w,{type:"primary",onClick:d.btnReset},{default:x(()=>[oe("重置")]),_:1},8,["onClick"]),s(w,{type:"primary",style:{"margin-left":"10px"},onClick:d.btnSave},{default:x(()=>[oe("保存")]),_:1},8,["onClick"])])])])])}const Gt=st(Ct,[["render",Rt],["__scopeId","data-v-604d0960"]]);export{Gt as default};