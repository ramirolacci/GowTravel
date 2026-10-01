(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function gc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xs={exports:{}},rl={},Zs={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bn=Symbol.for("react.element"),vc=Symbol.for("react.portal"),yc=Symbol.for("react.fragment"),xc=Symbol.for("react.strict_mode"),kc=Symbol.for("react.profiler"),wc=Symbol.for("react.provider"),Sc=Symbol.for("react.context"),jc=Symbol.for("react.forward_ref"),Nc=Symbol.for("react.suspense"),Cc=Symbol.for("react.memo"),Ec=Symbol.for("react.lazy"),Vo=Symbol.iterator;function zc(e){return e===null||typeof e!="object"?null:(e=Vo&&e[Vo]||e["@@iterator"],typeof e=="function"?e:null)}var Js={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ea=Object.assign,ta={};function on(e,t,n){this.props=e,this.context=t,this.refs=ta,this.updater=n||Js}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function na(){}na.prototype=on.prototype;function Qi(e,t,n){this.props=e,this.context=t,this.refs=ta,this.updater=n||Js}var Wi=Qi.prototype=new na;Wi.constructor=Qi;ea(Wi,on.prototype);Wi.isPureReactComponent=!0;var Ho=Array.isArray,ra=Object.prototype.hasOwnProperty,qi={current:null},la={key:!0,ref:!0,__self:!0,__source:!0};function ia(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)ra.call(t,r)&&!la.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var u=Array(a),f=0;f<a;f++)u[f]=arguments[f+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:bn,type:e,key:i,ref:o,props:l,_owner:qi.current}}function _c(e,t){return{$$typeof:bn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ki(e){return typeof e=="object"&&e!==null&&e.$$typeof===bn}function Pc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Bo=/\/+/g;function jl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Pc(""+e.key):t.toString(36)}function kr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case bn:case vc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+jl(o,0):r,Ho(l)?(n="",e!=null&&(n=e.replace(Bo,"$&/")+"/"),kr(l,t,n,"",function(f){return f})):l!=null&&(Ki(l)&&(l=_c(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Bo,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Ho(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+jl(i,a);o+=kr(i,t,n,u,l)}else if(u=zc(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+jl(i,a++),o+=kr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function rr(e,t,n){if(e==null)return e;var r=[],l=0;return kr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Tc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},wr={transition:null},Lc={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:wr,ReactCurrentOwner:qi};function oa(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:rr,forEach:function(e,t,n){rr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return rr(e,function(){t++}),t},toArray:function(e){return rr(e,function(t){return t})||[]},only:function(e){if(!Ki(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=on;T.Fragment=yc;T.Profiler=kc;T.PureComponent=Qi;T.StrictMode=xc;T.Suspense=Nc;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lc;T.act=oa;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ea({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=qi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)ra.call(t,u)&&!la.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var f=0;f<u;f++)a[f]=arguments[f+2];r.children=a}return{$$typeof:bn,type:e.type,key:l,ref:i,props:r,_owner:o}};T.createContext=function(e){return e={$$typeof:Sc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wc,_context:e},e.Consumer=e};T.createElement=ia;T.createFactory=function(e){var t=ia.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:jc,render:e}};T.isValidElement=Ki;T.lazy=function(e){return{$$typeof:Ec,_payload:{_status:-1,_result:e},_init:Tc}};T.memo=function(e,t){return{$$typeof:Cc,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=wr.transition;wr.transition={};try{e()}finally{wr.transition=t}};T.unstable_act=oa;T.useCallback=function(e,t){return ue.current.useCallback(e,t)};T.useContext=function(e){return ue.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};T.useEffect=function(e,t){return ue.current.useEffect(e,t)};T.useId=function(){return ue.current.useId()};T.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return ue.current.useMemo(e,t)};T.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};T.useRef=function(e){return ue.current.useRef(e)};T.useState=function(e){return ue.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return ue.current.useTransition()};T.version="18.3.1";Zs.exports=T;var M=Zs.exports;const Mc=gc(M);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc=M,Rc=Symbol.for("react.element"),Oc=Symbol.for("react.fragment"),Fc=Object.prototype.hasOwnProperty,Ic=Dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ac={key:!0,ref:!0,__self:!0,__source:!0};function sa(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Fc.call(t,r)&&!Ac.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Rc,type:e,key:i,ref:o,props:l,_owner:Ic.current}}rl.Fragment=Oc;rl.jsx=sa;rl.jsxs=sa;Xs.exports=rl;var s=Xs.exports,bl={},aa={exports:{}},ke={},ua={exports:{}},ca={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,_){var P=C.length;C.push(_);e:for(;0<P;){var q=P-1>>>1,X=C[q];if(0<l(X,_))C[q]=_,C[P]=X,P=q;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var _=C[0],P=C.pop();if(P!==_){C[0]=P;e:for(var q=0,X=C.length,tr=X>>>1;q<tr;){var vt=2*(q+1)-1,Sl=C[vt],yt=vt+1,nr=C[yt];if(0>l(Sl,P))yt<X&&0>l(nr,Sl)?(C[q]=nr,C[yt]=P,q=yt):(C[q]=Sl,C[vt]=P,q=vt);else if(yt<X&&0>l(nr,P))C[q]=nr,C[yt]=P,q=yt;else break e}}return _}function l(C,_){var P=C.sortIndex-_.sortIndex;return P!==0?P:C.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],f=[],g=1,h=null,m=3,x=!1,w=!1,k=!1,F=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var _=n(f);_!==null;){if(_.callback===null)r(f);else if(_.startTime<=C)r(f),_.sortIndex=_.expirationTime,t(u,_);else break;_=n(f)}}function v(C){if(k=!1,p(C),!w)if(n(u)!==null)w=!0,kl(S);else{var _=n(f);_!==null&&wl(v,_.startTime-C)}}function S(C,_){w=!1,k&&(k=!1,d(z),z=-1),x=!0;var P=m;try{for(p(_),h=n(u);h!==null&&(!(h.expirationTime>_)||C&&!_e());){var q=h.callback;if(typeof q=="function"){h.callback=null,m=h.priorityLevel;var X=q(h.expirationTime<=_);_=e.unstable_now(),typeof X=="function"?h.callback=X:h===n(u)&&r(u),p(_)}else r(u);h=n(u)}if(h!==null)var tr=!0;else{var vt=n(f);vt!==null&&wl(v,vt.startTime-_),tr=!1}return tr}finally{h=null,m=P,x=!1}}var N=!1,E=null,z=-1,W=5,L=-1;function _e(){return!(e.unstable_now()-L<W)}function un(){if(E!==null){var C=e.unstable_now();L=C;var _=!0;try{_=E(!0,C)}finally{_?cn():(N=!1,E=null)}}else N=!1}var cn;if(typeof c=="function")cn=function(){c(un)};else if(typeof MessageChannel<"u"){var Uo=new MessageChannel,hc=Uo.port2;Uo.port1.onmessage=un,cn=function(){hc.postMessage(null)}}else cn=function(){F(un,0)};function kl(C){E=C,N||(N=!0,cn())}function wl(C,_){z=F(function(){C(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,kl(S))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var P=m;m=_;try{return C()}finally{m=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,_){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var P=m;m=C;try{return _()}finally{m=P}},e.unstable_scheduleCallback=function(C,_,P){var q=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?q+P:q):P=q,C){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=P+X,C={id:g++,callback:_,priorityLevel:C,startTime:P,expirationTime:X,sortIndex:-1},P>q?(C.sortIndex=P,t(f,C),n(u)===null&&C===n(f)&&(k?(d(z),z=-1):k=!0,wl(v,P-q))):(C.sortIndex=X,t(u,C),w||x||(w=!0,kl(S))),C},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(C){var _=m;return function(){var P=m;m=_;try{return C.apply(this,arguments)}finally{m=P}}}})(ca);ua.exports=ca;var $c=ua.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uc=M,xe=$c;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,Mn={};function Lt(e,t){Zt(e,t),Zt(e+"Capture",t)}function Zt(e,t){for(Mn[e]=t,e=0;e<t.length;e++)da.add(t[e])}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gl=Object.prototype.hasOwnProperty,Vc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qo={},Wo={};function Hc(e){return Gl.call(Wo,e)?!0:Gl.call(Qo,e)?!1:Vc.test(e)?Wo[e]=!0:(Qo[e]=!0,!1)}function Bc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qc(e,t,n,r){if(t===null||typeof t>"u"||Bc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yi=/[\-:]([a-z])/g;function bi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Yi,bi);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Yi,bi);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Yi,bi);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Gi(e,t,n,r){var l=ne.hasOwnProperty(t)?ne[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qc(t,n,l,r)&&(n=null),r||l===null?Hc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ge=Uc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lr=Symbol.for("react.element"),Rt=Symbol.for("react.portal"),Ot=Symbol.for("react.fragment"),Xi=Symbol.for("react.strict_mode"),Xl=Symbol.for("react.profiler"),fa=Symbol.for("react.provider"),pa=Symbol.for("react.context"),Zi=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),Jl=Symbol.for("react.suspense_list"),Ji=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),ma=Symbol.for("react.offscreen"),qo=Symbol.iterator;function dn(e){return e===null||typeof e!="object"?null:(e=qo&&e[qo]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,Nl;function xn(e){if(Nl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Nl=t&&t[1]||""}return`
`+Nl+e}var Cl=!1;function El(e,t){if(!e||Cl)return"";Cl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var l=f.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{Cl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xn(e):""}function Wc(e){switch(e.tag){case 5:return xn(e.type);case 16:return xn("Lazy");case 13:return xn("Suspense");case 19:return xn("SuspenseList");case 0:case 2:case 15:return e=El(e.type,!1),e;case 11:return e=El(e.type.render,!1),e;case 1:return e=El(e.type,!0),e;default:return""}}function ei(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ot:return"Fragment";case Rt:return"Portal";case Xl:return"Profiler";case Xi:return"StrictMode";case Zl:return"Suspense";case Jl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pa:return(e.displayName||"Context")+".Consumer";case fa:return(e._context.displayName||"Context")+".Provider";case Zi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ji:return t=e.displayName||null,t!==null?t:ei(e.type)||"Memo";case Ze:t=e._payload,e=e._init;try{return ei(e(t))}catch{}}return null}function qc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ei(t);case 8:return t===Xi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ha(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kc(e){var t=ha(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ir(e){e._valueTracker||(e._valueTracker=Kc(e))}function ga(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ha(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Mr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ti(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ko(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function va(e,t){t=t.checked,t!=null&&Gi(e,"checked",t,!1)}function ni(e,t){va(e,t);var n=ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ri(e,t.type,n):t.hasOwnProperty("defaultValue")&&ri(e,t.type,ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ri(e,t,n){(t!=="number"||Mr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kn=Array.isArray;function qt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ft(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function li(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(kn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ft(n)}}function ya(e,t){var n=ft(t.value),r=ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Go(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ii(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var or,ka=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yc=["Webkit","ms","Moz","O"];Object.keys(jn).forEach(function(e){Yc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jn[t]=jn[e]})});function wa(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jn.hasOwnProperty(e)&&jn[e]?(""+t).trim():t+"px"}function Sa(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=wa(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var bc=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oi(e,t){if(t){if(bc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function si(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ai=null;function eo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ui=null,Kt=null,Yt=null;function Xo(e){if(e=Zn(e)){if(typeof ui!="function")throw Error(y(280));var t=e.stateNode;t&&(t=al(t),ui(e.stateNode,e.type,t))}}function ja(e){Kt?Yt?Yt.push(e):Yt=[e]:Kt=e}function Na(){if(Kt){var e=Kt,t=Yt;if(Yt=Kt=null,Xo(e),t)for(e=0;e<t.length;e++)Xo(t[e])}}function Ca(e,t){return e(t)}function Ea(){}var zl=!1;function za(e,t,n){if(zl)return e(t,n);zl=!0;try{return Ca(e,t,n)}finally{zl=!1,(Kt!==null||Yt!==null)&&(Ea(),Na())}}function Rn(e,t){var n=e.stateNode;if(n===null)return null;var r=al(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var ci=!1;if(qe)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){ci=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{ci=!1}function Gc(e,t,n,r,l,i,o,a,u){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(g){this.onError(g)}}var Nn=!1,Dr=null,Rr=!1,di=null,Xc={onError:function(e){Nn=!0,Dr=e}};function Zc(e,t,n,r,l,i,o,a,u){Nn=!1,Dr=null,Gc.apply(Xc,arguments)}function Jc(e,t,n,r,l,i,o,a,u){if(Zc.apply(this,arguments),Nn){if(Nn){var f=Dr;Nn=!1,Dr=null}else throw Error(y(198));Rr||(Rr=!0,di=f)}}function Mt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _a(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zo(e){if(Mt(e)!==e)throw Error(y(188))}function ed(e){var t=e.alternate;if(!t){if(t=Mt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Zo(l),e;if(i===r)return Zo(l),t;i=i.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Pa(e){return e=ed(e),e!==null?Ta(e):null}function Ta(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ta(e);if(t!==null)return t;e=e.sibling}return null}var La=xe.unstable_scheduleCallback,Jo=xe.unstable_cancelCallback,td=xe.unstable_shouldYield,nd=xe.unstable_requestPaint,K=xe.unstable_now,rd=xe.unstable_getCurrentPriorityLevel,to=xe.unstable_ImmediatePriority,Ma=xe.unstable_UserBlockingPriority,Or=xe.unstable_NormalPriority,ld=xe.unstable_LowPriority,Da=xe.unstable_IdlePriority,ll=null,$e=null;function id(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(ll,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:ad,od=Math.log,sd=Math.LN2;function ad(e){return e>>>=0,e===0?32:31-(od(e)/sd|0)|0}var sr=64,ar=4194304;function wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~l;a!==0?r=wn(a):(i&=o,i!==0&&(r=wn(i)))}else o=n&~l,o!==0?r=wn(o):i!==0&&(r=wn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),l=1<<n,r|=e[n],t&=~l;return r}function ud(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-De(i),a=1<<o,u=l[o];u===-1?(!(a&n)||a&r)&&(l[o]=ud(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function fi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ra(){var e=sr;return sr<<=1,!(sr&4194240)&&(sr=64),e}function _l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function dd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-De(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function no(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var O=0;function Oa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fa,ro,Ia,Aa,$a,pi=!1,ur=[],lt=null,it=null,ot=null,On=new Map,Fn=new Map,et=[],fd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function es(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":it=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":On.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fn.delete(t.pointerId)}}function pn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Zn(t),t!==null&&ro(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function pd(e,t,n,r,l){switch(t){case"focusin":return lt=pn(lt,e,t,n,r,l),!0;case"dragenter":return it=pn(it,e,t,n,r,l),!0;case"mouseover":return ot=pn(ot,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return On.set(i,pn(On.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Fn.set(i,pn(Fn.get(i)||null,e,t,n,r,l)),!0}return!1}function Ua(e){var t=wt(e.target);if(t!==null){var n=Mt(t);if(n!==null){if(t=n.tag,t===13){if(t=_a(n),t!==null){e.blockedOn=t,$a(e.priority,function(){Ia(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=mi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ai=r,n.target.dispatchEvent(r),ai=null}else return t=Zn(n),t!==null&&ro(t),e.blockedOn=n,!1;t.shift()}return!0}function ts(e,t,n){Sr(e)&&n.delete(t)}function md(){pi=!1,lt!==null&&Sr(lt)&&(lt=null),it!==null&&Sr(it)&&(it=null),ot!==null&&Sr(ot)&&(ot=null),On.forEach(ts),Fn.forEach(ts)}function mn(e,t){e.blockedOn===t&&(e.blockedOn=null,pi||(pi=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,md)))}function In(e){function t(l){return mn(l,e)}if(0<ur.length){mn(ur[0],e);for(var n=1;n<ur.length;n++){var r=ur[n];r.blockedOn===e&&(r.blockedOn=null)}}for(lt!==null&&mn(lt,e),it!==null&&mn(it,e),ot!==null&&mn(ot,e),On.forEach(t),Fn.forEach(t),n=0;n<et.length;n++)r=et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)Ua(n),n.blockedOn===null&&et.shift()}var bt=Ge.ReactCurrentBatchConfig,Ir=!0;function hd(e,t,n,r){var l=O,i=bt.transition;bt.transition=null;try{O=1,lo(e,t,n,r)}finally{O=l,bt.transition=i}}function gd(e,t,n,r){var l=O,i=bt.transition;bt.transition=null;try{O=4,lo(e,t,n,r)}finally{O=l,bt.transition=i}}function lo(e,t,n,r){if(Ir){var l=mi(e,t,n,r);if(l===null)Al(e,t,r,Ar,n),es(e,r);else if(pd(l,e,t,n,r))r.stopPropagation();else if(es(e,r),t&4&&-1<fd.indexOf(e)){for(;l!==null;){var i=Zn(l);if(i!==null&&Fa(i),i=mi(e,t,n,r),i===null&&Al(e,t,r,Ar,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Al(e,t,r,null,n)}}var Ar=null;function mi(e,t,n,r){if(Ar=null,e=eo(r),e=wt(e),e!==null)if(t=Mt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_a(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ar=e,null}function Va(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rd()){case to:return 1;case Ma:return 4;case Or:case ld:return 16;case Da:return 536870912;default:return 16}default:return 16}}var nt=null,io=null,jr=null;function Ha(){if(jr)return jr;var e,t=io,n=t.length,r,l="value"in nt?nt.value:nt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return jr=l.slice(e,1<r?1-r:void 0)}function Nr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cr(){return!0}function ns(){return!1}function we(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?cr:ns,this.isPropagationStopped=ns,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cr)},persist:function(){},isPersistent:cr}),t}var sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oo=we(sn),Xn=B({},sn,{view:0,detail:0}),vd=we(Xn),Pl,Tl,hn,il=B({},Xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:so,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(Pl=e.screenX-hn.screenX,Tl=e.screenY-hn.screenY):Tl=Pl=0,hn=e),Pl)},movementY:function(e){return"movementY"in e?e.movementY:Tl}}),rs=we(il),yd=B({},il,{dataTransfer:0}),xd=we(yd),kd=B({},Xn,{relatedTarget:0}),Ll=we(kd),wd=B({},sn,{animationName:0,elapsedTime:0,pseudoElement:0}),Sd=we(wd),jd=B({},sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nd=we(jd),Cd=B({},sn,{data:0}),ls=we(Cd),Ed={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_d={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_d[e])?!!t[e]:!1}function so(){return Pd}var Td=B({},Xn,{key:function(e){if(e.key){var t=Ed[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Nr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:so,charCode:function(e){return e.type==="keypress"?Nr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ld=we(Td),Md=B({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),is=we(Md),Dd=B({},Xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:so}),Rd=we(Dd),Od=B({},sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fd=we(Od),Id=B({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ad=we(Id),$d=[9,13,27,32],ao=qe&&"CompositionEvent"in window,Cn=null;qe&&"documentMode"in document&&(Cn=document.documentMode);var Ud=qe&&"TextEvent"in window&&!Cn,Ba=qe&&(!ao||Cn&&8<Cn&&11>=Cn),os=" ",ss=!1;function Qa(e,t){switch(e){case"keyup":return $d.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ft=!1;function Vd(e,t){switch(e){case"compositionend":return Wa(t);case"keypress":return t.which!==32?null:(ss=!0,os);case"textInput":return e=t.data,e===os&&ss?null:e;default:return null}}function Hd(e,t){if(Ft)return e==="compositionend"||!ao&&Qa(e,t)?(e=Ha(),jr=io=nt=null,Ft=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ba&&t.locale!=="ko"?null:t.data;default:return null}}var Bd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function as(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bd[e.type]:t==="textarea"}function qa(e,t,n,r){ja(r),t=$r(t,"onChange"),0<t.length&&(n=new oo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var En=null,An=null;function Qd(e){ru(e,0)}function ol(e){var t=$t(e);if(ga(t))return e}function Wd(e,t){if(e==="change")return t}var Ka=!1;if(qe){var Ml;if(qe){var Dl="oninput"in document;if(!Dl){var us=document.createElement("div");us.setAttribute("oninput","return;"),Dl=typeof us.oninput=="function"}Ml=Dl}else Ml=!1;Ka=Ml&&(!document.documentMode||9<document.documentMode)}function cs(){En&&(En.detachEvent("onpropertychange",Ya),An=En=null)}function Ya(e){if(e.propertyName==="value"&&ol(An)){var t=[];qa(t,An,e,eo(e)),za(Qd,t)}}function qd(e,t,n){e==="focusin"?(cs(),En=t,An=n,En.attachEvent("onpropertychange",Ya)):e==="focusout"&&cs()}function Kd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol(An)}function Yd(e,t){if(e==="click")return ol(t)}function bd(e,t){if(e==="input"||e==="change")return ol(t)}function Gd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:Gd;function $n(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Gl.call(t,l)||!Oe(e[l],t[l]))return!1}return!0}function ds(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fs(e,t){var n=ds(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ds(n)}}function ba(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ba(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ga(){for(var e=window,t=Mr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mr(e.document)}return t}function uo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xd(e){var t=Ga(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ba(n.ownerDocument.documentElement,n)){if(r!==null&&uo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=fs(n,i);var o=fs(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Zd=qe&&"documentMode"in document&&11>=document.documentMode,It=null,hi=null,zn=null,gi=!1;function ps(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gi||It==null||It!==Mr(r)||(r=It,"selectionStart"in r&&uo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zn&&$n(zn,r)||(zn=r,r=$r(hi,"onSelect"),0<r.length&&(t=new oo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=It)))}function dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var At={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionend:dr("Transition","TransitionEnd")},Rl={},Xa={};qe&&(Xa=document.createElement("div").style,"AnimationEvent"in window||(delete At.animationend.animation,delete At.animationiteration.animation,delete At.animationstart.animation),"TransitionEvent"in window||delete At.transitionend.transition);function sl(e){if(Rl[e])return Rl[e];if(!At[e])return e;var t=At[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xa)return Rl[e]=t[n];return e}var Za=sl("animationend"),Ja=sl("animationiteration"),eu=sl("animationstart"),tu=sl("transitionend"),nu=new Map,ms="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mt(e,t){nu.set(e,t),Lt(t,[e])}for(var Ol=0;Ol<ms.length;Ol++){var Fl=ms[Ol],Jd=Fl.toLowerCase(),ef=Fl[0].toUpperCase()+Fl.slice(1);mt(Jd,"on"+ef)}mt(Za,"onAnimationEnd");mt(Ja,"onAnimationIteration");mt(eu,"onAnimationStart");mt("dblclick","onDoubleClick");mt("focusin","onFocus");mt("focusout","onBlur");mt(tu,"onTransitionEnd");Zt("onMouseEnter",["mouseout","mouseover"]);Zt("onMouseLeave",["mouseout","mouseover"]);Zt("onPointerEnter",["pointerout","pointerover"]);Zt("onPointerLeave",["pointerout","pointerover"]);Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));function hs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Jc(r,t,void 0,e),e.currentTarget=null}function ru(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,f=a.currentTarget;if(a=a.listener,u!==i&&l.isPropagationStopped())break e;hs(l,a,f),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,f=a.currentTarget,a=a.listener,u!==i&&l.isPropagationStopped())break e;hs(l,a,f),i=u}}}if(Rr)throw e=di,Rr=!1,di=null,e}function A(e,t){var n=t[wi];n===void 0&&(n=t[wi]=new Set);var r=e+"__bubble";n.has(r)||(lu(t,e,2,!1),n.add(r))}function Il(e,t,n){var r=0;t&&(r|=4),lu(n,e,r,t)}var fr="_reactListening"+Math.random().toString(36).slice(2);function Un(e){if(!e[fr]){e[fr]=!0,da.forEach(function(n){n!=="selectionchange"&&(tf.has(n)||Il(n,!1,e),Il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fr]||(t[fr]=!0,Il("selectionchange",!1,t))}}function lu(e,t,n,r){switch(Va(t)){case 1:var l=hd;break;case 4:l=gd;break;default:l=lo}n=l.bind(null,t,n,e),l=void 0,!ci||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Al(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;a!==null;){if(o=wt(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}za(function(){var f=i,g=eo(n),h=[];e:{var m=nu.get(e);if(m!==void 0){var x=oo,w=e;switch(e){case"keypress":if(Nr(n)===0)break e;case"keydown":case"keyup":x=Ld;break;case"focusin":w="focus",x=Ll;break;case"focusout":w="blur",x=Ll;break;case"beforeblur":case"afterblur":x=Ll;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=rs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=xd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Rd;break;case Za:case Ja:case eu:x=Sd;break;case tu:x=Fd;break;case"scroll":x=vd;break;case"wheel":x=Ad;break;case"copy":case"cut":case"paste":x=Nd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=is}var k=(t&4)!==0,F=!k&&e==="scroll",d=k?m!==null?m+"Capture":null:m;k=[];for(var c=f,p;c!==null;){p=c;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,d!==null&&(v=Rn(c,d),v!=null&&k.push(Vn(c,v,p)))),F)break;c=c.return}0<k.length&&(m=new x(m,w,null,n,g),h.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==ai&&(w=n.relatedTarget||n.fromElement)&&(wt(w)||w[Ke]))break e;if((x||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=f,w=w?wt(w):null,w!==null&&(F=Mt(w),w!==F||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=f),x!==w)){if(k=rs,v="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=is,v="onPointerLeave",d="onPointerEnter",c="pointer"),F=x==null?m:$t(x),p=w==null?m:$t(w),m=new k(v,c+"leave",x,n,g),m.target=F,m.relatedTarget=p,v=null,wt(g)===f&&(k=new k(d,c+"enter",w,n,g),k.target=p,k.relatedTarget=F,v=k),F=v,x&&w)t:{for(k=x,d=w,c=0,p=k;p;p=Dt(p))c++;for(p=0,v=d;v;v=Dt(v))p++;for(;0<c-p;)k=Dt(k),c--;for(;0<p-c;)d=Dt(d),p--;for(;c--;){if(k===d||d!==null&&k===d.alternate)break t;k=Dt(k),d=Dt(d)}k=null}else k=null;x!==null&&gs(h,m,x,k,!1),w!==null&&F!==null&&gs(h,F,w,k,!0)}}e:{if(m=f?$t(f):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var S=Wd;else if(as(m))if(Ka)S=bd;else{S=Kd;var N=qd}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Yd);if(S&&(S=S(e,f))){qa(h,S,n,g);break e}N&&N(e,m,f),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&ri(m,"number",m.value)}switch(N=f?$t(f):window,e){case"focusin":(as(N)||N.contentEditable==="true")&&(It=N,hi=f,zn=null);break;case"focusout":zn=hi=It=null;break;case"mousedown":gi=!0;break;case"contextmenu":case"mouseup":case"dragend":gi=!1,ps(h,n,g);break;case"selectionchange":if(Zd)break;case"keydown":case"keyup":ps(h,n,g)}var E;if(ao)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Ft?Qa(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Ba&&n.locale!=="ko"&&(Ft||z!=="onCompositionStart"?z==="onCompositionEnd"&&Ft&&(E=Ha()):(nt=g,io="value"in nt?nt.value:nt.textContent,Ft=!0)),N=$r(f,z),0<N.length&&(z=new ls(z,e,null,n,g),h.push({event:z,listeners:N}),E?z.data=E:(E=Wa(n),E!==null&&(z.data=E)))),(E=Ud?Vd(e,n):Hd(e,n))&&(f=$r(f,"onBeforeInput"),0<f.length&&(g=new ls("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:f}),g.data=E))}ru(h,t)})}function Vn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $r(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Rn(e,n),i!=null&&r.unshift(Vn(e,i,l)),i=Rn(e,t),i!=null&&r.push(Vn(e,i,l))),e=e.return}return r}function Dt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gs(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,f=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&f!==null&&(a=f,l?(u=Rn(n,i),u!=null&&o.unshift(Vn(n,u,a))):l||(u=Rn(n,i),u!=null&&o.push(Vn(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var nf=/\r\n?/g,rf=/\u0000|\uFFFD/g;function vs(e){return(typeof e=="string"?e:""+e).replace(nf,`
`).replace(rf,"")}function pr(e,t,n){if(t=vs(t),vs(e)!==t&&n)throw Error(y(425))}function Ur(){}var vi=null,yi=null;function xi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ki=typeof setTimeout=="function"?setTimeout:void 0,lf=typeof clearTimeout=="function"?clearTimeout:void 0,ys=typeof Promise=="function"?Promise:void 0,of=typeof queueMicrotask=="function"?queueMicrotask:typeof ys<"u"?function(e){return ys.resolve(null).then(e).catch(sf)}:ki;function sf(e){setTimeout(function(){throw e})}function $l(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),In(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);In(t)}function st(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var an=Math.random().toString(36).slice(2),Ae="__reactFiber$"+an,Hn="__reactProps$"+an,Ke="__reactContainer$"+an,wi="__reactEvents$"+an,af="__reactListeners$"+an,uf="__reactHandles$"+an;function wt(e){var t=e[Ae];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Ae]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xs(e);e!==null;){if(n=e[Ae])return n;e=xs(e)}return t}e=n,n=e.parentNode}return null}function Zn(e){return e=e[Ae]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $t(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function al(e){return e[Hn]||null}var Si=[],Ut=-1;function ht(e){return{current:e}}function $(e){0>Ut||(e.current=Si[Ut],Si[Ut]=null,Ut--)}function I(e,t){Ut++,Si[Ut]=e.current,e.current=t}var pt={},oe=ht(pt),pe=ht(!1),Et=pt;function Jt(e,t){var n=e.type.contextTypes;if(!n)return pt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function me(e){return e=e.childContextTypes,e!=null}function Vr(){$(pe),$(oe)}function ks(e,t,n){if(oe.current!==pt)throw Error(y(168));I(oe,t),I(pe,n)}function iu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,qc(e)||"Unknown",l));return B({},n,r)}function Hr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pt,Et=oe.current,I(oe,e),I(pe,pe.current),!0}function ws(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=iu(e,t,Et),r.__reactInternalMemoizedMergedChildContext=e,$(pe),$(oe),I(oe,e)):$(pe),I(pe,n)}var He=null,ul=!1,Ul=!1;function ou(e){He===null?He=[e]:He.push(e)}function cf(e){ul=!0,ou(e)}function gt(){if(!Ul&&He!==null){Ul=!0;var e=0,t=O;try{var n=He;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}He=null,ul=!1}catch(l){throw He!==null&&(He=He.slice(e+1)),La(to,gt),l}finally{O=t,Ul=!1}}return null}var Vt=[],Ht=0,Br=null,Qr=0,Se=[],je=0,zt=null,Be=1,Qe="";function xt(e,t){Vt[Ht++]=Qr,Vt[Ht++]=Br,Br=e,Qr=t}function su(e,t,n){Se[je++]=Be,Se[je++]=Qe,Se[je++]=zt,zt=e;var r=Be;e=Qe;var l=32-De(r)-1;r&=~(1<<l),n+=1;var i=32-De(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Be=1<<32-De(t)+l|n<<l|r,Qe=i+e}else Be=1<<i|n<<l|r,Qe=e}function co(e){e.return!==null&&(xt(e,1),su(e,1,0))}function fo(e){for(;e===Br;)Br=Vt[--Ht],Vt[Ht]=null,Qr=Vt[--Ht],Vt[Ht]=null;for(;e===zt;)zt=Se[--je],Se[je]=null,Qe=Se[--je],Se[je]=null,Be=Se[--je],Se[je]=null}var ye=null,ve=null,U=!1,Me=null;function au(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ss(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,ve=st(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zt!==null?{id:Be,overflow:Qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,ve=null,!0):!1;default:return!1}}function ji(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ni(e){if(U){var t=ve;if(t){var n=t;if(!Ss(e,t)){if(ji(e))throw Error(y(418));t=st(n.nextSibling);var r=ye;t&&Ss(e,t)?au(r,n):(e.flags=e.flags&-4097|2,U=!1,ye=e)}}else{if(ji(e))throw Error(y(418));e.flags=e.flags&-4097|2,U=!1,ye=e}}}function js(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function mr(e){if(e!==ye)return!1;if(!U)return js(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xi(e.type,e.memoizedProps)),t&&(t=ve)){if(ji(e))throw uu(),Error(y(418));for(;t;)au(e,t),t=st(t.nextSibling)}if(js(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=st(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=ye?st(e.stateNode.nextSibling):null;return!0}function uu(){for(var e=ve;e;)e=st(e.nextSibling)}function en(){ve=ye=null,U=!1}function po(e){Me===null?Me=[e]:Me.push(e)}var df=Ge.ReactCurrentBatchConfig;function gn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function hr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ns(e){var t=e._init;return t(e._payload)}function cu(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function l(d,c){return d=dt(d,c),d.index=0,d.sibling=null,d}function i(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,p,v){return c===null||c.tag!==6?(c=Kl(p,d.mode,v),c.return=d,c):(c=l(c,p),c.return=d,c)}function u(d,c,p,v){var S=p.type;return S===Ot?g(d,c,p.props.children,v,p.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ze&&Ns(S)===c.type)?(v=l(c,p.props),v.ref=gn(d,c,p),v.return=d,v):(v=Lr(p.type,p.key,p.props,null,d.mode,v),v.ref=gn(d,c,p),v.return=d,v)}function f(d,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Yl(p,d.mode,v),c.return=d,c):(c=l(c,p.children||[]),c.return=d,c)}function g(d,c,p,v,S){return c===null||c.tag!==7?(c=Ct(p,d.mode,v,S),c.return=d,c):(c=l(c,p),c.return=d,c)}function h(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Kl(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case lr:return p=Lr(c.type,c.key,c.props,null,d.mode,p),p.ref=gn(d,null,c),p.return=d,p;case Rt:return c=Yl(c,d.mode,p),c.return=d,c;case Ze:var v=c._init;return h(d,v(c._payload),p)}if(kn(c)||dn(c))return c=Ct(c,d.mode,p,null),c.return=d,c;hr(d,c)}return null}function m(d,c,p,v){var S=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:a(d,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case lr:return p.key===S?u(d,c,p,v):null;case Rt:return p.key===S?f(d,c,p,v):null;case Ze:return S=p._init,m(d,c,S(p._payload),v)}if(kn(p)||dn(p))return S!==null?null:g(d,c,p,v,null);hr(d,p)}return null}function x(d,c,p,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(p)||null,a(c,d,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case lr:return d=d.get(v.key===null?p:v.key)||null,u(c,d,v,S);case Rt:return d=d.get(v.key===null?p:v.key)||null,f(c,d,v,S);case Ze:var N=v._init;return x(d,c,p,N(v._payload),S)}if(kn(v)||dn(v))return d=d.get(p)||null,g(c,d,v,S,null);hr(c,v)}return null}function w(d,c,p,v){for(var S=null,N=null,E=c,z=c=0,W=null;E!==null&&z<p.length;z++){E.index>z?(W=E,E=null):W=E.sibling;var L=m(d,E,p[z],v);if(L===null){E===null&&(E=W);break}e&&E&&L.alternate===null&&t(d,E),c=i(L,c,z),N===null?S=L:N.sibling=L,N=L,E=W}if(z===p.length)return n(d,E),U&&xt(d,z),S;if(E===null){for(;z<p.length;z++)E=h(d,p[z],v),E!==null&&(c=i(E,c,z),N===null?S=E:N.sibling=E,N=E);return U&&xt(d,z),S}for(E=r(d,E);z<p.length;z++)W=x(E,d,z,p[z],v),W!==null&&(e&&W.alternate!==null&&E.delete(W.key===null?z:W.key),c=i(W,c,z),N===null?S=W:N.sibling=W,N=W);return e&&E.forEach(function(_e){return t(d,_e)}),U&&xt(d,z),S}function k(d,c,p,v){var S=dn(p);if(typeof S!="function")throw Error(y(150));if(p=S.call(p),p==null)throw Error(y(151));for(var N=S=null,E=c,z=c=0,W=null,L=p.next();E!==null&&!L.done;z++,L=p.next()){E.index>z?(W=E,E=null):W=E.sibling;var _e=m(d,E,L.value,v);if(_e===null){E===null&&(E=W);break}e&&E&&_e.alternate===null&&t(d,E),c=i(_e,c,z),N===null?S=_e:N.sibling=_e,N=_e,E=W}if(L.done)return n(d,E),U&&xt(d,z),S;if(E===null){for(;!L.done;z++,L=p.next())L=h(d,L.value,v),L!==null&&(c=i(L,c,z),N===null?S=L:N.sibling=L,N=L);return U&&xt(d,z),S}for(E=r(d,E);!L.done;z++,L=p.next())L=x(E,d,z,L.value,v),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?z:L.key),c=i(L,c,z),N===null?S=L:N.sibling=L,N=L);return e&&E.forEach(function(un){return t(d,un)}),U&&xt(d,z),S}function F(d,c,p,v){if(typeof p=="object"&&p!==null&&p.type===Ot&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case lr:e:{for(var S=p.key,N=c;N!==null;){if(N.key===S){if(S=p.type,S===Ot){if(N.tag===7){n(d,N.sibling),c=l(N,p.props.children),c.return=d,d=c;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ze&&Ns(S)===N.type){n(d,N.sibling),c=l(N,p.props),c.ref=gn(d,N,p),c.return=d,d=c;break e}n(d,N);break}else t(d,N);N=N.sibling}p.type===Ot?(c=Ct(p.props.children,d.mode,v,p.key),c.return=d,d=c):(v=Lr(p.type,p.key,p.props,null,d.mode,v),v.ref=gn(d,c,p),v.return=d,d=v)}return o(d);case Rt:e:{for(N=p.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(d,c.sibling),c=l(c,p.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=Yl(p,d.mode,v),c.return=d,d=c}return o(d);case Ze:return N=p._init,F(d,c,N(p._payload),v)}if(kn(p))return w(d,c,p,v);if(dn(p))return k(d,c,p,v);hr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(d,c.sibling),c=l(c,p),c.return=d,d=c):(n(d,c),c=Kl(p,d.mode,v),c.return=d,d=c),o(d)):n(d,c)}return F}var tn=cu(!0),du=cu(!1),Wr=ht(null),qr=null,Bt=null,mo=null;function ho(){mo=Bt=qr=null}function go(e){var t=Wr.current;$(Wr),e._currentValue=t}function Ci(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gt(e,t){qr=e,mo=Bt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(mo!==e)if(e={context:e,memoizedValue:t,next:null},Bt===null){if(qr===null)throw Error(y(308));Bt=e,qr.dependencies={lanes:0,firstContext:e}}else Bt=Bt.next=e;return t}var St=null;function vo(e){St===null?St=[e]:St.push(e)}function fu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,vo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ye(e,r)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Je=!1;function yo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function We(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function at(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ye(e,n)}return l=r.interleaved,l===null?(t.next=t,vo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ye(e,n)}function Cr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,no(e,n)}}function Cs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Kr(e,t,n,r){var l=e.updateQueue;Je=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,f=u.next;u.next=null,o===null?i=f:o.next=f,o=u;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==o&&(a===null?g.firstBaseUpdate=f:a.next=f,g.lastBaseUpdate=u))}if(i!==null){var h=l.baseState;o=0,g=f=u=null,a=i;do{var m=a.lane,x=a.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,k=a;switch(m=t,x=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){h=w.call(x,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(x,h,m):w,m==null)break e;h=B({},h,m);break e;case 2:Je=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[a]:m.push(a))}else x={eventTime:x,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(f=g=x,u=h):g=g.next=x,o|=m;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;m=a,a=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(g===null&&(u=h),l.baseState=u,l.firstBaseUpdate=f,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Pt|=o,e.lanes=o,e.memoizedState=h}}function Es(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var Jn={},Ue=ht(Jn),Bn=ht(Jn),Qn=ht(Jn);function jt(e){if(e===Jn)throw Error(y(174));return e}function xo(e,t){switch(I(Qn,t),I(Bn,e),I(Ue,Jn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ii(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ii(t,e)}$(Ue),I(Ue,t)}function nn(){$(Ue),$(Bn),$(Qn)}function mu(e){jt(Qn.current);var t=jt(Ue.current),n=ii(t,e.type);t!==n&&(I(Bn,e),I(Ue,n))}function ko(e){Bn.current===e&&($(Ue),$(Bn))}var V=ht(0);function Yr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vl=[];function wo(){for(var e=0;e<Vl.length;e++)Vl[e]._workInProgressVersionPrimary=null;Vl.length=0}var Er=Ge.ReactCurrentDispatcher,Hl=Ge.ReactCurrentBatchConfig,_t=0,H=null,b=null,Z=null,br=!1,_n=!1,Wn=0,ff=0;function re(){throw Error(y(321))}function So(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Oe(e[n],t[n]))return!1;return!0}function jo(e,t,n,r,l,i){if(_t=i,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Er.current=e===null||e.memoizedState===null?gf:vf,e=n(r,l),_n){i=0;do{if(_n=!1,Wn=0,25<=i)throw Error(y(301));i+=1,Z=b=null,t.updateQueue=null,Er.current=yf,e=n(r,l)}while(_n)}if(Er.current=Gr,t=b!==null&&b.next!==null,_t=0,Z=b=H=null,br=!1,t)throw Error(y(300));return e}function No(){var e=Wn!==0;return Wn=0,e}function Ie(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?H.memoizedState=Z=e:Z=Z.next=e,Z}function ze(){if(b===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=b.next;var t=Z===null?H.memoizedState:Z.next;if(t!==null)Z=t,b=e;else{if(e===null)throw Error(y(310));b=e,e={memoizedState:b.memoizedState,baseState:b.baseState,baseQueue:b.baseQueue,queue:b.queue,next:null},Z===null?H.memoizedState=Z=e:Z=Z.next=e}return Z}function qn(e,t){return typeof t=="function"?t(e):t}function Bl(e){var t=ze(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=b,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,u=null,f=i;do{var g=f.lane;if((_t&g)===g)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var h={lane:g,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(a=u=h,o=r):u=u.next=h,H.lanes|=g,Pt|=g}f=f.next}while(f!==null&&f!==i);u===null?o=r:u.next=a,Oe(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,H.lanes|=i,Pt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ql(e){var t=ze(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Oe(i,t.memoizedState)||(fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function hu(){}function gu(e,t){var n=H,r=ze(),l=t(),i=!Oe(r.memoizedState,l);if(i&&(r.memoizedState=l,fe=!0),r=r.queue,Co(xu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Kn(9,yu.bind(null,n,r,l,t),void 0,null),J===null)throw Error(y(349));_t&30||vu(n,t,l)}return l}function vu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yu(e,t,n,r){t.value=n,t.getSnapshot=r,ku(t)&&wu(e)}function xu(e,t,n){return n(function(){ku(t)&&wu(e)})}function ku(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function wu(e){var t=Ye(e,1);t!==null&&Re(t,e,1,-1)}function zs(e){var t=Ie();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:e},t.queue=e,e=e.dispatch=hf.bind(null,H,e),[t.memoizedState,e]}function Kn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Su(){return ze().memoizedState}function zr(e,t,n,r){var l=Ie();H.flags|=e,l.memoizedState=Kn(1|t,n,void 0,r===void 0?null:r)}function cl(e,t,n,r){var l=ze();r=r===void 0?null:r;var i=void 0;if(b!==null){var o=b.memoizedState;if(i=o.destroy,r!==null&&So(r,o.deps)){l.memoizedState=Kn(t,n,i,r);return}}H.flags|=e,l.memoizedState=Kn(1|t,n,i,r)}function _s(e,t){return zr(8390656,8,e,t)}function Co(e,t){return cl(2048,8,e,t)}function ju(e,t){return cl(4,2,e,t)}function Nu(e,t){return cl(4,4,e,t)}function Cu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Eu(e,t,n){return n=n!=null?n.concat([e]):null,cl(4,4,Cu.bind(null,t,e),n)}function Eo(){}function zu(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&So(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _u(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&So(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pu(e,t,n){return _t&21?(Oe(n,t)||(n=Ra(),H.lanes|=n,Pt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function pf(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=Hl.transition;Hl.transition={};try{e(!1),t()}finally{O=n,Hl.transition=r}}function Tu(){return ze().memoizedState}function mf(e,t,n){var r=ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lu(e))Mu(t,n);else if(n=fu(e,t,n,r),n!==null){var l=ae();Re(n,e,r,l),Du(n,t,r)}}function hf(e,t,n){var r=ct(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lu(e))Mu(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(l.hasEagerState=!0,l.eagerState=a,Oe(a,o)){var u=t.interleaved;u===null?(l.next=l,vo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=fu(e,t,l,r),n!==null&&(l=ae(),Re(n,e,r,l),Du(n,t,r))}}function Lu(e){var t=e.alternate;return e===H||t!==null&&t===H}function Mu(e,t){_n=br=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Du(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,no(e,n)}}var Gr={readContext:Ee,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},gf={readContext:Ee,useCallback:function(e,t){return Ie().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:_s,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zr(4194308,4,Cu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zr(4194308,4,e,t)},useInsertionEffect:function(e,t){return zr(4,2,e,t)},useMemo:function(e,t){var n=Ie();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ie();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=mf.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Ie();return e={current:e},t.memoizedState=e},useState:zs,useDebugValue:Eo,useDeferredValue:function(e){return Ie().memoizedState=e},useTransition:function(){var e=zs(!1),t=e[0];return e=pf.bind(null,e[1]),Ie().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,l=Ie();if(U){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),J===null)throw Error(y(349));_t&30||vu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,_s(xu.bind(null,r,i,e),[e]),r.flags|=2048,Kn(9,yu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ie(),t=J.identifierPrefix;if(U){var n=Qe,r=Be;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ff++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},vf={readContext:Ee,useCallback:zu,useContext:Ee,useEffect:Co,useImperativeHandle:Eu,useInsertionEffect:ju,useLayoutEffect:Nu,useMemo:_u,useReducer:Bl,useRef:Su,useState:function(){return Bl(qn)},useDebugValue:Eo,useDeferredValue:function(e){var t=ze();return Pu(t,b.memoizedState,e)},useTransition:function(){var e=Bl(qn)[0],t=ze().memoizedState;return[e,t]},useMutableSource:hu,useSyncExternalStore:gu,useId:Tu,unstable_isNewReconciler:!1},yf={readContext:Ee,useCallback:zu,useContext:Ee,useEffect:Co,useImperativeHandle:Eu,useInsertionEffect:ju,useLayoutEffect:Nu,useMemo:_u,useReducer:Ql,useRef:Su,useState:function(){return Ql(qn)},useDebugValue:Eo,useDeferredValue:function(e){var t=ze();return b===null?t.memoizedState=e:Pu(t,b.memoizedState,e)},useTransition:function(){var e=Ql(qn)[0],t=ze().memoizedState;return[e,t]},useMutableSource:hu,useSyncExternalStore:gu,useId:Tu,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ei(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dl={isMounted:function(e){return(e=e._reactInternals)?Mt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),l=ct(e),i=We(r,l);i.payload=t,n!=null&&(i.callback=n),t=at(e,i,l),t!==null&&(Re(t,e,l,r),Cr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),l=ct(e),i=We(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=at(e,i,l),t!==null&&(Re(t,e,l,r),Cr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=ct(e),l=We(n,r);l.tag=2,t!=null&&(l.callback=t),t=at(e,l,r),t!==null&&(Re(t,e,r,n),Cr(t,e,r))}};function Ps(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!$n(n,r)||!$n(l,i):!0}function Ru(e,t,n){var r=!1,l=pt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ee(i):(l=me(t)?Et:oe.current,r=t.contextTypes,i=(r=r!=null)?Jt(e,l):pt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=dl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ts(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&dl.enqueueReplaceState(t,t.state,null)}function zi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},yo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ee(i):(i=me(t)?Et:oe.current,l.context=Jt(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ei(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&dl.enqueueReplaceState(l,l.state,null),Kr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function rn(e,t){try{var n="",r=t;do n+=Wc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Wl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function _i(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xf=typeof WeakMap=="function"?WeakMap:Map;function Ou(e,t,n){n=We(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zr||(Zr=!0,Ai=r),_i(e,t)},n}function Fu(e,t,n){n=We(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){_i(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){_i(e,t),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ls(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new xf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Df.bind(null,e,t,n),t.then(e,e))}function Ms(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ds(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=We(-1,1),t.tag=2,at(n,t,1))),n.lanes|=1),e)}var kf=Ge.ReactCurrentOwner,fe=!1;function se(e,t,n,r){t.child=e===null?du(t,null,n,r):tn(t,e.child,n,r)}function Rs(e,t,n,r,l){n=n.render;var i=t.ref;return Gt(t,l),r=jo(e,t,n,r,i,l),n=No(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,be(e,t,l)):(U&&n&&co(t),t.flags|=1,se(e,t,r,l),t.child)}function Os(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Ro(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Iu(e,t,i,r,l)):(e=Lr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:$n,n(o,r)&&e.ref===t.ref)return be(e,t,l)}return t.flags|=1,e=dt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Iu(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if($n(i,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,be(e,t,l)}return Pi(e,t,n,r,l)}function Au(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(Wt,ge),ge|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(Wt,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,I(Wt,ge),ge|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,I(Wt,ge),ge|=r;return se(e,t,l,n),t.child}function $u(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pi(e,t,n,r,l){var i=me(n)?Et:oe.current;return i=Jt(t,i),Gt(t,l),n=jo(e,t,n,r,i,l),r=No(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,be(e,t,l)):(U&&r&&co(t),t.flags|=1,se(e,t,n,l),t.child)}function Fs(e,t,n,r,l){if(me(n)){var i=!0;Hr(t)}else i=!1;if(Gt(t,l),t.stateNode===null)_r(e,t),Ru(t,n,r),zi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,f=n.contextType;typeof f=="object"&&f!==null?f=Ee(f):(f=me(n)?Et:oe.current,f=Jt(t,f));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==f)&&Ts(t,o,r,f),Je=!1;var m=t.memoizedState;o.state=m,Kr(t,r,o,l),u=t.memoizedState,a!==r||m!==u||pe.current||Je?(typeof g=="function"&&(Ei(t,n,g,r),u=t.memoizedState),(a=Je||Ps(t,n,a,r,m,u,f))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=f,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,pu(e,t),a=t.memoizedProps,f=t.type===t.elementType?a:Te(t.type,a),o.props=f,h=t.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ee(u):(u=me(n)?Et:oe.current,u=Jt(t,u));var x=n.getDerivedStateFromProps;(g=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||m!==u)&&Ts(t,o,r,u),Je=!1,m=t.memoizedState,o.state=m,Kr(t,r,o,l);var w=t.memoizedState;a!==h||m!==w||pe.current||Je?(typeof x=="function"&&(Ei(t,n,x,r),w=t.memoizedState),(f=Je||Ps(t,n,f,r,m,w,u)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=u,r=f):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ti(e,t,n,r,i,l)}function Ti(e,t,n,r,l,i){$u(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&ws(t,n,!1),be(e,t,i);r=t.stateNode,kf.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=tn(t,e.child,null,i),t.child=tn(t,null,a,i)):se(e,t,a,i),t.memoizedState=r.state,l&&ws(t,n,!0),t.child}function Uu(e){var t=e.stateNode;t.pendingContext?ks(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ks(e,t.context,!1),xo(e,t.containerInfo)}function Is(e,t,n,r,l){return en(),po(l),t.flags|=256,se(e,t,n,r),t.child}var Li={dehydrated:null,treeContext:null,retryLane:0};function Mi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vu(e,t,n){var r=t.pendingProps,l=V.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),I(V,l&1),e===null)return Ni(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=ml(o,r,0,null),e=Ct(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Mi(n),t.memoizedState=Li,e):zo(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return wf(e,t,o,r,a,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=dt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=dt(a,i):(i=Ct(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Mi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Li,r}return i=e.child,e=i.sibling,r=dt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function zo(e,t){return t=ml({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gr(e,t,n,r){return r!==null&&po(r),tn(t,e.child,null,n),e=zo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wf(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Wl(Error(y(422))),gr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=ml({mode:"visible",children:r.children},l,0,null),i=Ct(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&tn(t,e.child,null,o),t.child.memoizedState=Mi(o),t.memoizedState=Li,i);if(!(t.mode&1))return gr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(y(419)),r=Wl(i,r,void 0),gr(e,t,o,r)}if(a=(o&e.childLanes)!==0,fe||a){if(r=J,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ye(e,l),Re(r,e,l,-1))}return Do(),r=Wl(Error(y(421))),gr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Rf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ve=st(l.nextSibling),ye=t,U=!0,Me=null,e!==null&&(Se[je++]=Be,Se[je++]=Qe,Se[je++]=zt,Be=e.id,Qe=e.overflow,zt=t),t=zo(t,r.children),t.flags|=4096,t)}function As(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ci(e.return,t,n)}function ql(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Hu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(se(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&As(e,n,t);else if(e.tag===19)As(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(V,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Yr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ql(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Yr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ql(t,!0,n,null,i);break;case"together":ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _r(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function be(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sf(e,t,n){switch(t.tag){case 3:Uu(t),en();break;case 5:mu(t);break;case 1:me(t.type)&&Hr(t);break;case 4:xo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;I(Wr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Vu(e,t,n):(I(V,V.current&1),e=be(e,t,n),e!==null?e.sibling:null);I(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Hu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),I(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Au(e,t,n)}return be(e,t,n)}var Bu,Di,Qu,Wu;Bu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Di=function(){};Qu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,jt(Ue.current);var i=null;switch(n){case"input":l=ti(e,l),r=ti(e,r),i=[];break;case"select":l=B({},l,{value:void 0}),r=B({},r,{value:void 0}),i=[];break;case"textarea":l=li(e,l),r=li(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ur)}oi(n,r);var o;n=null;for(f in l)if(!r.hasOwnProperty(f)&&l.hasOwnProperty(f)&&l[f]!=null)if(f==="style"){var a=l[f];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Mn.hasOwnProperty(f)?i||(i=[]):(i=i||[]).push(f,null));for(f in r){var u=r[f];if(a=l!=null?l[f]:void 0,r.hasOwnProperty(f)&&u!==a&&(u!=null||a!=null))if(f==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(f,n)),n=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Mn.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&A("scroll",e),i||a===u||(i=[])):(i=i||[]).push(f,u))}n&&(i=i||[]).push("style",n);var f=i;(t.updateQueue=f)&&(t.flags|=4)}};Wu=function(e,t,n,r){n!==r&&(t.flags|=4)};function vn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function jf(e,t,n){var r=t.pendingProps;switch(fo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return me(t.type)&&Vr(),le(t),null;case 3:return r=t.stateNode,nn(),$(pe),$(oe),wo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(Vi(Me),Me=null))),Di(e,t),le(t),null;case 5:ko(t);var l=jt(Qn.current);if(n=t.type,e!==null&&t.stateNode!=null)Qu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return le(t),null}if(e=jt(Ue.current),mr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ae]=t,r[Hn]=i,e=(t.mode&1)!==0,n){case"dialog":A("cancel",r),A("close",r);break;case"iframe":case"object":case"embed":A("load",r);break;case"video":case"audio":for(l=0;l<Sn.length;l++)A(Sn[l],r);break;case"source":A("error",r);break;case"img":case"image":case"link":A("error",r),A("load",r);break;case"details":A("toggle",r);break;case"input":Ko(r,i),A("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},A("invalid",r);break;case"textarea":bo(r,i),A("invalid",r)}oi(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&pr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&pr(r.textContent,a,e),l=["children",""+a]):Mn.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&A("scroll",r)}switch(n){case"input":ir(r),Yo(r,i,!0);break;case"textarea":ir(r),Go(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ur)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ae]=t,e[Hn]=r,Bu(e,t,!1,!1),t.stateNode=e;e:{switch(o=si(n,r),n){case"dialog":A("cancel",e),A("close",e),l=r;break;case"iframe":case"object":case"embed":A("load",e),l=r;break;case"video":case"audio":for(l=0;l<Sn.length;l++)A(Sn[l],e);l=r;break;case"source":A("error",e),l=r;break;case"img":case"image":case"link":A("error",e),A("load",e),l=r;break;case"details":A("toggle",e),l=r;break;case"input":Ko(e,r),l=ti(e,r),A("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=B({},r,{value:void 0}),A("invalid",e);break;case"textarea":bo(e,r),l=li(e,r),A("invalid",e);break;default:l=r}oi(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?Sa(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ka(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Dn(e,u):typeof u=="number"&&Dn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&A("scroll",e):u!=null&&Gi(e,i,u,o))}switch(n){case"input":ir(e),Yo(e,r,!1);break;case"textarea":ir(e),Go(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ft(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?qt(e,!!r.multiple,i,!1):r.defaultValue!=null&&qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ur)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)Wu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=jt(Qn.current),jt(Ue.current),mr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ae]=t,(i=r.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:pr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ae]=t,t.stateNode=r}return le(t),null;case 13:if($(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ve!==null&&t.mode&1&&!(t.flags&128))uu(),en(),t.flags|=98560,i=!1;else if(i=mr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[Ae]=t}else en(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),i=!1}else Me!==null&&(Vi(Me),Me=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?G===0&&(G=3):Do())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return nn(),Di(e,t),e===null&&Un(t.stateNode.containerInfo),le(t),null;case 10:return go(t.type._context),le(t),null;case 17:return me(t.type)&&Vr(),le(t),null;case 19:if($(V),i=t.memoizedState,i===null)return le(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)vn(i,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Yr(e),o!==null){for(t.flags|=128,vn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(V,V.current&1|2),t.child}e=e.sibling}i.tail!==null&&K()>ln&&(t.flags|=128,r=!0,vn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Yr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!U)return le(t),null}else 2*K()-i.renderingStartTime>ln&&n!==1073741824&&(t.flags|=128,r=!0,vn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=K(),t.sibling=null,n=V.current,I(V,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Mo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ge&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function Nf(e,t){switch(fo(t),t.tag){case 1:return me(t.type)&&Vr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),$(pe),$(oe),wo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ko(t),null;case 13:if($(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(V),null;case 4:return nn(),null;case 10:return go(t.type._context),null;case 22:case 23:return Mo(),null;case 24:return null;default:return null}}var vr=!1,ie=!1,Cf=typeof WeakSet=="function"?WeakSet:Set,j=null;function Qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function Ri(e,t,n){try{n()}catch(r){Q(e,t,r)}}var $s=!1;function Ef(e,t){if(vi=Ir,e=Ga(),uo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,f=0,g=0,h=e,m=null;t:for(;;){for(var x;h!==n||l!==0&&h.nodeType!==3||(a=o+l),h!==i||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(x=h.firstChild)!==null;)m=h,h=x;for(;;){if(h===e)break t;if(m===n&&++f===l&&(a=o),m===i&&++g===r&&(u=o),(x=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=x}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(yi={focusedElem:e,selectionRange:n},Ir=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,F=w.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?k:Te(t.type,k),F);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){Q(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return w=$s,$s=!1,w}function Pn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ri(t,n,i)}l=l.next}while(l!==r)}}function fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Oi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function qu(e){var t=e.alternate;t!==null&&(e.alternate=null,qu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ae],delete t[Hn],delete t[wi],delete t[af],delete t[uf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ku(e){return e.tag===5||e.tag===3||e.tag===4}function Us(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ku(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ur));else if(r!==4&&(e=e.child,e!==null))for(Fi(e,t,n),e=e.sibling;e!==null;)Fi(e,t,n),e=e.sibling}function Ii(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ii(e,t,n),e=e.sibling;e!==null;)Ii(e,t,n),e=e.sibling}var ee=null,Le=!1;function Xe(e,t,n){for(n=n.child;n!==null;)Yu(e,t,n),n=n.sibling}function Yu(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(ll,n)}catch{}switch(n.tag){case 5:ie||Qt(n,t);case 6:var r=ee,l=Le;ee=null,Xe(e,t,n),ee=r,Le=l,ee!==null&&(Le?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Le?(e=ee,n=n.stateNode,e.nodeType===8?$l(e.parentNode,n):e.nodeType===1&&$l(e,n),In(e)):$l(ee,n.stateNode));break;case 4:r=ee,l=Le,ee=n.stateNode.containerInfo,Le=!0,Xe(e,t,n),ee=r,Le=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ri(n,t,o),l=l.next}while(l!==r)}Xe(e,t,n);break;case 1:if(!ie&&(Qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Q(n,t,a)}Xe(e,t,n);break;case 21:Xe(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,Xe(e,t,n),ie=r):Xe(e,t,n);break;default:Xe(e,t,n)}}function Vs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Cf),t.forEach(function(r){var l=Of.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,Le=!1;break e;case 3:ee=a.stateNode.containerInfo,Le=!0;break e;case 4:ee=a.stateNode.containerInfo,Le=!0;break e}a=a.return}if(ee===null)throw Error(y(160));Yu(i,o,l),ee=null,Le=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(f){Q(l,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bu(t,e),t=t.sibling}function bu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),Fe(e),r&4){try{Pn(3,e,e.return),fl(3,e)}catch(k){Q(e,e.return,k)}try{Pn(5,e,e.return)}catch(k){Q(e,e.return,k)}}break;case 1:Pe(t,e),Fe(e),r&512&&n!==null&&Qt(n,n.return);break;case 5:if(Pe(t,e),Fe(e),r&512&&n!==null&&Qt(n,n.return),e.flags&32){var l=e.stateNode;try{Dn(l,"")}catch(k){Q(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&va(l,i),si(a,o);var f=si(a,i);for(o=0;o<u.length;o+=2){var g=u[o],h=u[o+1];g==="style"?Sa(l,h):g==="dangerouslySetInnerHTML"?ka(l,h):g==="children"?Dn(l,h):Gi(l,g,h,f)}switch(a){case"input":ni(l,i);break;case"textarea":ya(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?qt(l,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?qt(l,!!i.multiple,i.defaultValue,!0):qt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Hn]=i}catch(k){Q(e,e.return,k)}}break;case 6:if(Pe(t,e),Fe(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(k){Q(e,e.return,k)}}break;case 3:if(Pe(t,e),Fe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{In(t.containerInfo)}catch(k){Q(e,e.return,k)}break;case 4:Pe(t,e),Fe(e);break;case 13:Pe(t,e),Fe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(To=K())),r&4&&Vs(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(f=ie)||g,Pe(t,e),ie=f):Pe(t,e),Fe(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!g&&e.mode&1)for(j=e,g=e.child;g!==null;){for(h=j=g;j!==null;){switch(m=j,x=m.child,m.tag){case 0:case 11:case 14:case 15:Pn(4,m,m.return);break;case 1:Qt(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){Q(r,n,k)}}break;case 5:Qt(m,m.return);break;case 22:if(m.memoizedState!==null){Bs(h);continue}}x!==null?(x.return=m,j=x):Bs(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{l=h.stateNode,f?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=wa("display",o))}catch(k){Q(e,e.return,k)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=f?"":h.memoizedProps}catch(k){Q(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Pe(t,e),Fe(e),r&4&&Vs(e);break;case 21:break;default:Pe(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ku(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Dn(l,""),r.flags&=-33);var i=Us(e);Ii(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Us(e);Fi(e,a,o);break;default:throw Error(y(161))}}catch(u){Q(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zf(e,t,n){j=e,Gu(e)}function Gu(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var l=j,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||vr;if(!o){var a=l.alternate,u=a!==null&&a.memoizedState!==null||ie;a=vr;var f=ie;if(vr=o,(ie=u)&&!f)for(j=l;j!==null;)o=j,u=o.child,o.tag===22&&o.memoizedState!==null?Qs(l):u!==null?(u.return=o,j=u):Qs(l);for(;i!==null;)j=i,Gu(i),i=i.sibling;j=l,vr=a,ie=f}Hs(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,j=i):Hs(e)}}function Hs(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||fl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Te(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Es(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Es(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var g=f.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&In(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}ie||t.flags&512&&Oi(t)}catch(m){Q(t,t.return,m)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Bs(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Qs(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fl(4,t)}catch(u){Q(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){Q(t,l,u)}}var i=t.return;try{Oi(t)}catch(u){Q(t,i,u)}break;case 5:var o=t.return;try{Oi(t)}catch(u){Q(t,o,u)}}}catch(u){Q(t,t.return,u)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var _f=Math.ceil,Xr=Ge.ReactCurrentDispatcher,_o=Ge.ReactCurrentOwner,Ce=Ge.ReactCurrentBatchConfig,D=0,J=null,Y=null,te=0,ge=0,Wt=ht(0),G=0,Yn=null,Pt=0,pl=0,Po=0,Tn=null,de=null,To=0,ln=1/0,Ve=null,Zr=!1,Ai=null,ut=null,yr=!1,rt=null,Jr=0,Ln=0,$i=null,Pr=-1,Tr=0;function ae(){return D&6?K():Pr!==-1?Pr:Pr=K()}function ct(e){return e.mode&1?D&2&&te!==0?te&-te:df.transition!==null?(Tr===0&&(Tr=Ra()),Tr):(e=O,e!==0||(e=window.event,e=e===void 0?16:Va(e.type)),e):1}function Re(e,t,n,r){if(50<Ln)throw Ln=0,$i=null,Error(y(185));Gn(e,n,r),(!(D&2)||e!==J)&&(e===J&&(!(D&2)&&(pl|=n),G===4&&tt(e,te)),he(e,r),n===1&&D===0&&!(t.mode&1)&&(ln=K()+500,ul&&gt()))}function he(e,t){var n=e.callbackNode;cd(e,t);var r=Fr(e,e===J?te:0);if(r===0)n!==null&&Jo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Jo(n),t===1)e.tag===0?cf(Ws.bind(null,e)):ou(Ws.bind(null,e)),of(function(){!(D&6)&&gt()}),n=null;else{switch(Oa(r)){case 1:n=to;break;case 4:n=Ma;break;case 16:n=Or;break;case 536870912:n=Da;break;default:n=Or}n=lc(n,Xu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Xu(e,t){if(Pr=-1,Tr=0,D&6)throw Error(y(327));var n=e.callbackNode;if(Xt()&&e.callbackNode!==n)return null;var r=Fr(e,e===J?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=el(e,r);else{t=r;var l=D;D|=2;var i=Ju();(J!==e||te!==t)&&(Ve=null,ln=K()+500,Nt(e,t));do try{Lf();break}catch(a){Zu(e,a)}while(!0);ho(),Xr.current=i,D=l,Y!==null?t=0:(J=null,te=0,t=G)}if(t!==0){if(t===2&&(l=fi(e),l!==0&&(r=l,t=Ui(e,l))),t===1)throw n=Yn,Nt(e,0),tt(e,r),he(e,K()),n;if(t===6)tt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Pf(l)&&(t=el(e,r),t===2&&(i=fi(e),i!==0&&(r=i,t=Ui(e,i))),t===1))throw n=Yn,Nt(e,0),tt(e,r),he(e,K()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:kt(e,de,Ve);break;case 3:if(tt(e,r),(r&130023424)===r&&(t=To+500-K(),10<t)){if(Fr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ki(kt.bind(null,e,de,Ve),t);break}kt(e,de,Ve);break;case 4:if(tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-De(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_f(r/1960))-r,10<r){e.timeoutHandle=ki(kt.bind(null,e,de,Ve),r);break}kt(e,de,Ve);break;case 5:kt(e,de,Ve);break;default:throw Error(y(329))}}}return he(e,K()),e.callbackNode===n?Xu.bind(null,e):null}function Ui(e,t){var n=Tn;return e.current.memoizedState.isDehydrated&&(Nt(e,t).flags|=256),e=el(e,t),e!==2&&(t=de,de=n,t!==null&&Vi(t)),e}function Vi(e){de===null?de=e:de.push.apply(de,e)}function Pf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Oe(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~Po,t&=~pl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function Ws(e){if(D&6)throw Error(y(327));Xt();var t=Fr(e,0);if(!(t&1))return he(e,K()),null;var n=el(e,t);if(e.tag!==0&&n===2){var r=fi(e);r!==0&&(t=r,n=Ui(e,r))}if(n===1)throw n=Yn,Nt(e,0),tt(e,t),he(e,K()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kt(e,de,Ve),he(e,K()),null}function Lo(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(ln=K()+500,ul&&gt())}}function Tt(e){rt!==null&&rt.tag===0&&!(D&6)&&Xt();var t=D;D|=1;var n=Ce.transition,r=O;try{if(Ce.transition=null,O=1,e)return e()}finally{O=r,Ce.transition=n,D=t,!(D&6)&&gt()}}function Mo(){ge=Wt.current,$(Wt)}function Nt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,lf(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(fo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vr();break;case 3:nn(),$(pe),$(oe),wo();break;case 5:ko(r);break;case 4:nn();break;case 13:$(V);break;case 19:$(V);break;case 10:go(r.type._context);break;case 22:case 23:Mo()}n=n.return}if(J=e,Y=e=dt(e.current,null),te=ge=t,G=0,Yn=null,Po=pl=Pt=0,de=Tn=null,St!==null){for(t=0;t<St.length;t++)if(n=St[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}St=null}return e}function Zu(e,t){do{var n=Y;try{if(ho(),Er.current=Gr,br){for(var r=H.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}br=!1}if(_t=0,Z=b=H=null,_n=!1,Wn=0,_o.current=null,n===null||n.return===null){G=1,Yn=t,Y=null;break}e:{var i=e,o=n.return,a=n,u=t;if(t=te,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,g=a,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=Ms(o);if(x!==null){x.flags&=-257,Ds(x,o,a,i,t),x.mode&1&&Ls(i,f,t),t=x,u=f;var w=t.updateQueue;if(w===null){var k=new Set;k.add(u),t.updateQueue=k}else w.add(u);break e}else{if(!(t&1)){Ls(i,f,t),Do();break e}u=Error(y(426))}}else if(U&&a.mode&1){var F=Ms(o);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Ds(F,o,a,i,t),po(rn(u,a));break e}}i=u=rn(u,a),G!==4&&(G=2),Tn===null?Tn=[i]:Tn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=Ou(i,u,t);Cs(i,d);break e;case 1:a=u;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ut===null||!ut.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Fu(i,a,t);Cs(i,v);break e}}i=i.return}while(i!==null)}tc(n)}catch(S){t=S,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function Ju(){var e=Xr.current;return Xr.current=Gr,e===null?Gr:e}function Do(){(G===0||G===3||G===2)&&(G=4),J===null||!(Pt&268435455)&&!(pl&268435455)||tt(J,te)}function el(e,t){var n=D;D|=2;var r=Ju();(J!==e||te!==t)&&(Ve=null,Nt(e,t));do try{Tf();break}catch(l){Zu(e,l)}while(!0);if(ho(),D=n,Xr.current=r,Y!==null)throw Error(y(261));return J=null,te=0,G}function Tf(){for(;Y!==null;)ec(Y)}function Lf(){for(;Y!==null&&!td();)ec(Y)}function ec(e){var t=rc(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?tc(e):Y=t,_o.current=null}function tc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Nf(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,Y=null;return}}else if(n=jf(n,t,ge),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);G===0&&(G=5)}function kt(e,t,n){var r=O,l=Ce.transition;try{Ce.transition=null,O=1,Mf(e,t,n,r)}finally{Ce.transition=l,O=r}return null}function Mf(e,t,n,r){do Xt();while(rt!==null);if(D&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(dd(e,i),e===J&&(Y=J=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yr||(yr=!0,lc(Or,function(){return Xt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ce.transition,Ce.transition=null;var o=O;O=1;var a=D;D|=4,_o.current=null,Ef(e,n),bu(n,e),Xd(yi),Ir=!!vi,yi=vi=null,e.current=n,zf(n),nd(),D=a,O=o,Ce.transition=i}else e.current=n;if(yr&&(yr=!1,rt=e,Jr=l),i=e.pendingLanes,i===0&&(ut=null),id(n.stateNode),he(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Zr)throw Zr=!1,e=Ai,Ai=null,e;return Jr&1&&e.tag!==0&&Xt(),i=e.pendingLanes,i&1?e===$i?Ln++:(Ln=0,$i=e):Ln=0,gt(),null}function Xt(){if(rt!==null){var e=Oa(Jr),t=Ce.transition,n=O;try{if(Ce.transition=null,O=16>e?16:e,rt===null)var r=!1;else{if(e=rt,rt=null,Jr=0,D&6)throw Error(y(331));var l=D;for(D|=4,j=e.current;j!==null;){var i=j,o=i.child;if(j.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var f=a[u];for(j=f;j!==null;){var g=j;switch(g.tag){case 0:case 11:case 15:Pn(8,g,i)}var h=g.child;if(h!==null)h.return=g,j=h;else for(;j!==null;){g=j;var m=g.sibling,x=g.return;if(qu(g),g===f){j=null;break}if(m!==null){m.return=x,j=m;break}j=x}}}var w=i.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var F=k.sibling;k.sibling=null,k=F}while(k!==null)}}j=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,j=o;else e:for(;j!==null;){if(i=j,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Pn(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,j=d;break e}j=i.return}}var c=e.current;for(j=c;j!==null;){o=j;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,j=p;else e:for(o=c;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fl(9,a)}}catch(S){Q(a,a.return,S)}if(a===o){j=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,j=v;break e}j=a.return}}if(D=l,gt(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(ll,e)}catch{}r=!0}return r}finally{O=n,Ce.transition=t}}return!1}function qs(e,t,n){t=rn(n,t),t=Ou(e,t,1),e=at(e,t,1),t=ae(),e!==null&&(Gn(e,1,t),he(e,t))}function Q(e,t,n){if(e.tag===3)qs(e,e,n);else for(;t!==null;){if(t.tag===3){qs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=rn(n,e),e=Fu(t,e,1),t=at(t,e,1),e=ae(),t!==null&&(Gn(t,1,e),he(t,e));break}}t=t.return}}function Df(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(te&n)===n&&(G===4||G===3&&(te&130023424)===te&&500>K()-To?Nt(e,0):Po|=n),he(e,t)}function nc(e,t){t===0&&(e.mode&1?(t=ar,ar<<=1,!(ar&130023424)&&(ar=4194304)):t=1);var n=ae();e=Ye(e,t),e!==null&&(Gn(e,t,n),he(e,n))}function Rf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),nc(e,n)}function Of(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),nc(e,n)}var rc;rc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,Sf(e,t,n);fe=!!(e.flags&131072)}else fe=!1,U&&t.flags&1048576&&su(t,Qr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_r(e,t),e=t.pendingProps;var l=Jt(t,oe.current);Gt(t,n),l=jo(null,t,r,e,l,n);var i=No();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(i=!0,Hr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,yo(t),l.updater=dl,t.stateNode=l,l._reactInternals=t,zi(t,r,e,n),t=Ti(null,t,r,!0,i,n)):(t.tag=0,U&&i&&co(t),se(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_r(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=If(r),e=Te(r,e),l){case 0:t=Pi(null,t,r,e,n);break e;case 1:t=Fs(null,t,r,e,n);break e;case 11:t=Rs(null,t,r,e,n);break e;case 14:t=Os(null,t,r,Te(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Pi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Fs(e,t,r,l,n);case 3:e:{if(Uu(t),e===null)throw Error(y(387));r=t.pendingProps,i=t.memoizedState,l=i.element,pu(e,t),Kr(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=rn(Error(y(423)),t),t=Is(e,t,r,n,l);break e}else if(r!==l){l=rn(Error(y(424)),t),t=Is(e,t,r,n,l);break e}else for(ve=st(t.stateNode.containerInfo.firstChild),ye=t,U=!0,Me=null,n=du(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),r===l){t=be(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return mu(t),e===null&&Ni(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,xi(r,l)?o=null:i!==null&&xi(r,i)&&(t.flags|=32),$u(e,t),se(e,t,o,n),t.child;case 6:return e===null&&Ni(t),null;case 13:return Vu(e,t,n);case 4:return xo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Rs(e,t,r,l,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,I(Wr,r._currentValue),r._currentValue=o,i!==null)if(Oe(i.value,o)){if(i.children===l.children&&!pe.current){t=be(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=We(-1,n&-n),u.tag=2;var f=i.updateQueue;if(f!==null){f=f.shared;var g=f.pending;g===null?u.next=u:(u.next=g.next,g.next=u),f.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ci(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(y(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ci(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}se(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Gt(t,n),l=Ee(l),r=r(l),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,l=Te(r,t.pendingProps),l=Te(r.type,l),Os(e,t,r,l,n);case 15:return Iu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),_r(e,t),t.tag=1,me(r)?(e=!0,Hr(t)):e=!1,Gt(t,n),Ru(t,r,l),zi(t,r,l,n),Ti(null,t,r,!0,e,n);case 19:return Hu(e,t,n);case 22:return Au(e,t,n)}throw Error(y(156,t.tag))};function lc(e,t){return La(e,t)}function Ff(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Ff(e,t,n,r)}function Ro(e){return e=e.prototype,!(!e||!e.isReactComponent)}function If(e){if(typeof e=="function")return Ro(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zi)return 11;if(e===Ji)return 14}return 2}function dt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Ro(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ot:return Ct(n.children,l,i,t);case Xi:o=8,l|=8;break;case Xl:return e=Ne(12,n,t,l|2),e.elementType=Xl,e.lanes=i,e;case Zl:return e=Ne(13,n,t,l),e.elementType=Zl,e.lanes=i,e;case Jl:return e=Ne(19,n,t,l),e.elementType=Jl,e.lanes=i,e;case ma:return ml(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fa:o=10;break e;case pa:o=9;break e;case Zi:o=11;break e;case Ji:o=14;break e;case Ze:o=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ne(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Ct(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function ml(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=ma,e.lanes=n,e.stateNode={isHidden:!1},e}function Kl(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Yl(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Af(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Oo(e,t,n,r,l,i,o,a,u){return e=new Af(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ne(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yo(i),e}function $f(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ic(e){if(!e)return pt;e=e._reactInternals;e:{if(Mt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(me(n))return iu(e,n,t)}return t}function oc(e,t,n,r,l,i,o,a,u){return e=Oo(n,r,!0,e,l,i,o,a,u),e.context=ic(null),n=e.current,r=ae(),l=ct(n),i=We(r,l),i.callback=t??null,at(n,i,l),e.current.lanes=l,Gn(e,l,r),he(e,r),e}function hl(e,t,n,r){var l=t.current,i=ae(),o=ct(l);return n=ic(n),t.context===null?t.context=n:t.pendingContext=n,t=We(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=at(l,t,o),e!==null&&(Re(e,l,o,i),Cr(e,l,o)),o}function tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ks(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fo(e,t){Ks(e,t),(e=e.alternate)&&Ks(e,t)}function Uf(){return null}var sc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Io(e){this._internalRoot=e}gl.prototype.render=Io.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));hl(e,t,null,null)};gl.prototype.unmount=Io.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tt(function(){hl(null,e,null,null)}),t[Ke]=null}};function gl(e){this._internalRoot=e}gl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Aa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<et.length&&t!==0&&t<et[n].priority;n++);et.splice(n,0,e),n===0&&Ua(e)}};function Ao(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ys(){}function Vf(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var f=tl(o);i.call(f)}}var o=oc(t,r,e,0,null,!1,!1,"",Ys);return e._reactRootContainer=o,e[Ke]=o.current,Un(e.nodeType===8?e.parentNode:e),Tt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var f=tl(u);a.call(f)}}var u=Oo(e,0,!1,null,null,!1,!1,"",Ys);return e._reactRootContainer=u,e[Ke]=u.current,Un(e.nodeType===8?e.parentNode:e),Tt(function(){hl(t,u,n,r)}),u}function yl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var u=tl(o);a.call(u)}}hl(t,o,e,l)}else o=Vf(n,t,e,l,r);return tl(o)}Fa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wn(t.pendingLanes);n!==0&&(no(t,n|1),he(t,K()),!(D&6)&&(ln=K()+500,gt()))}break;case 13:Tt(function(){var r=Ye(e,1);if(r!==null){var l=ae();Re(r,e,1,l)}}),Fo(e,1)}};ro=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=ae();Re(t,e,134217728,n)}Fo(e,134217728)}};Ia=function(e){if(e.tag===13){var t=ct(e),n=Ye(e,t);if(n!==null){var r=ae();Re(n,e,t,r)}Fo(e,t)}};Aa=function(){return O};$a=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};ui=function(e,t,n){switch(t){case"input":if(ni(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=al(r);if(!l)throw Error(y(90));ga(r),ni(r,l)}}}break;case"textarea":ya(e,n);break;case"select":t=n.value,t!=null&&qt(e,!!n.multiple,t,!1)}};Ca=Lo;Ea=Tt;var Hf={usingClientEntryPoint:!1,Events:[Zn,$t,al,ja,Na,Lo]},yn={findFiberByHostInstance:wt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bf={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pa(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||Uf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xr.isDisabled&&xr.supportsFiber)try{ll=xr.inject(Bf),$e=xr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hf;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ao(t))throw Error(y(200));return $f(e,t,null,n)};ke.createRoot=function(e,t){if(!Ao(e))throw Error(y(299));var n=!1,r="",l=sc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Oo(e,1,!1,null,null,n,!1,r,l),e[Ke]=t.current,Un(e.nodeType===8?e.parentNode:e),new Io(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Pa(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Tt(e)};ke.hydrate=function(e,t,n){if(!vl(t))throw Error(y(200));return yl(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!Ao(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=sc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=oc(t,null,e,1,n??null,l,!1,i,o),e[Ke]=t.current,Un(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new gl(t)};ke.render=function(e,t,n){if(!vl(t))throw Error(y(200));return yl(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!vl(e))throw Error(y(40));return e._reactRootContainer?(Tt(function(){yl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};ke.unstable_batchedUpdates=Lo;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!vl(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return yl(e,t,n,!1,r)};ke.version="18.3.1-next-f1338f8080-20240426";function ac(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ac)}catch(e){console.error(e)}}ac(),aa.exports=ke;var Qf=aa.exports,bs=Qf;bl.createRoot=bs.createRoot,bl.hydrateRoot=bs.hydrateRoot;/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),uc=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=M.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:i,iconNode:o,...a},u)=>M.createElement("svg",{ref:u,...qf,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:uc("lucide",l),...a},[...o.map(([f,g])=>M.createElement(f,g)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=(e,t)=>{const n=M.forwardRef(({className:r,...l},i)=>M.createElement(Kf,{ref:i,iconNode:t,className:uc(`lucide-${Wf(e)}`,r),...l}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=R("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=R("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=R("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=R("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=R("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=R("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=R("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=R("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=R("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=R("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=R("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=R("Headset",[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",key:"12oyoe"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5",key:"1x7m43"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=R("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"4oyue0"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=R("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=R("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=R("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=R("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=R("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=R("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=R("Mountain",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=R("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=R("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=R("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=R("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=R("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=R("Snowflake",[["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"m20 16-4-4 4-4",key:"rquw4f"}],["path",{d:"m4 8 4 4-4 4",key:"12s3z9"}],["path",{d:"m16 4-4 4-4-4",key:"1tumq1"}],["path",{d:"m8 20 4-4 4 4",key:"9p200w"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=R("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=R("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=R("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=R("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=R("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=R("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),hp=({activeSection:e,onNavigate:t,onOpenQuickBook:n})=>{const[r,l]=M.useState(!1),[i,o]=M.useState(!1);M.useEffect(()=>{const f=()=>{window.scrollY>50?l(!0):l(!1)};return window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)},[]);const a=[{id:"home",label:"Home"},{id:"packages",label:"Packages"},{id:"destinations",label:"Destinations"},{id:"contact",label:"Contact"}],u=f=>{t(f),o(!1)};return s.jsxs("header",{className:`header-nav ${r?"header-scrolled":""}`,children:[s.jsxs("a",{href:"#home",onClick:f=>{f.preventDefault(),u("home")},className:"logo-brand",children:[s.jsx("div",{className:"logo-icon-wrapper",children:s.jsx(ap,{className:"logo-plane",size:28})}),s.jsxs("span",{children:["Gow",s.jsx("span",{className:"logo-accent",children:"Travel"})]})]}),s.jsx("button",{className:"menu-toggle-btn","aria-label":"Toggle navigation menu",onClick:()=>o(!i),children:i?s.jsx(xl,{size:32}):s.jsx(sp,{size:32})}),s.jsxs("nav",{className:`navbar-links ${i?"mobile-active":""}`,children:[a.map(f=>s.jsx("a",{href:`#${f.id}`,className:`nav-link ${e===f.id?"active":""}`,onClick:g=>{g.preventDefault(),u(f.id)},children:f.label},f.id)),s.jsxs("button",{className:"nav-cta-btn",onClick:n,children:[s.jsx(nl,{size:18}),s.jsx("span",{children:"Explorar Viajes"})]})]}),s.jsx("style",{children:`
        .header-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 2.2rem 9%;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }

        .header-scrolled {
          padding: 1.5rem 9%;
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .logo-brand {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 2.8rem;
          color: #0f172a;
          font-weight: 800;
          font-family: 'Outfit', sans-serif;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .logo-brand:hover {
          transform: scale(1.03);
        }

        .logo-icon-wrapper {
          width: 42px;
          height: 42px;
          background: linear-gradient(135deg, #155bff, #00d2ff);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(21, 91, 255, 0.3);
        }

        .logo-accent {
          color: #155bff;
        }

        .menu-toggle-btn {
          display: none;
          background: transparent;
          color: #155bff;
          cursor: pointer;
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 3.5rem;
        }

        .nav-link {
          font-size: 1.7rem;
          color: #1e293b;
          font-weight: 600;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 3px;
          background: #155bff;
          border-radius: 3px;
          transition: width 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #155bff;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .nav-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1rem 2.2rem;
          background: linear-gradient(135deg, #155bff, #0052ff);
          color: white;
          font-size: 1.5rem;
          font-weight: 600;
          border-radius: 3rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(21, 91, 255, 0.25);
        }

        .nav-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(21, 91, 255, 0.35);
        }

        @media (max-width: 895px) {
          .menu-toggle-btn {
            display: block;
          }

          .navbar-links {
            position: absolute;
            top: 100%;
            right: 0;
            width: 100%;
            max-width: 340px;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            padding: 3rem 2.5rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
            border-left: 2px solid #155bff;
            border-bottom: 2px solid #155bff;
            border-bottom-left-radius: 2rem;
            box-shadow: -10px 20px 40px rgba(0, 0, 0, 0.15);
            display: none;
          }

          .navbar-links.mobile-active {
            display: flex;
            animation: slideDown 0.3s ease forwards;
          }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `})]})},gp=({onSearch:e,onExploreClick:t})=>{const[n,r]=M.useState(""),[l,i]=M.useState(""),[o,a]=M.useState("2"),u=f=>{f.preventDefault(),e(n)};return s.jsxs("section",{className:"home",id:"home",children:[s.jsx("div",{className:"home-overlay"}),s.jsxs("div",{className:"home-content",children:[s.jsx("div",{className:"badge-pill",children:s.jsx("span",{children:"✨ Experiencias de Viaje Premium 2026"})}),s.jsxs("h1",{children:["Welcome to ",s.jsx("br",{})," Gow",s.jsx("span",{children:"Travel"})]}),s.jsx("p",{children:"Descubre paisajes inolvidables, aventuras de esquí en la montaña y destinos exclusivos alrededor del mundo con la máxima comodidad y seguridad. Tu próximo viaje soñado comienza aquí."}),s.jsx("div",{className:"hero-actions",children:s.jsxs("button",{className:"btn",onClick:t,children:[s.jsx("span",{children:"Read More"}),s.jsx(Yf,{size:20})]})}),s.jsxs("form",{className:"hero-search-box",onSubmit:u,children:[s.jsxs("div",{className:"search-field",children:[s.jsx(er,{className:"search-icon",size:22}),s.jsxs("div",{className:"search-input-group",children:[s.jsx("label",{children:"¿A dónde viajas?"}),s.jsx("input",{type:"text",placeholder:"Ej: Bariloche, Iguazú, Salta...",value:n,onChange:f=>r(f.target.value)})]})]}),s.jsx("div",{className:"search-divider"}),s.jsxs("div",{className:"search-field",children:[s.jsx(cc,{className:"search-icon",size:22}),s.jsxs("div",{className:"search-input-group",children:[s.jsx("label",{children:"Fecha de Viaje"}),s.jsx("input",{type:"date",value:l,onChange:f=>i(f.target.value)})]})]}),s.jsx("div",{className:"search-divider"}),s.jsxs("div",{className:"search-field",children:[s.jsx(mp,{className:"search-icon",size:22}),s.jsxs("div",{className:"search-input-group",children:[s.jsx("label",{children:"Pasajeros"}),s.jsxs("select",{value:o,onChange:f=>a(f.target.value),children:[s.jsx("option",{value:"1",children:"1 Pasajero"}),s.jsx("option",{value:"2",children:"2 Pasajeros"}),s.jsx("option",{value:"4",children:"4 Pasajeros"}),s.jsx("option",{value:"group",children:"Grupo (5+)"})]})]})]}),s.jsxs("button",{type:"submit",className:"search-btn","aria-label":"Buscar viajes",children:[s.jsx(up,{size:22}),s.jsx("span",{children:"Buscar"})]})]}),s.jsxs("div",{className:"hero-trust-badges",children:[s.jsxs("div",{className:"trust-item",children:[s.jsx(bf,{size:20,className:"trust-icon"}),s.jsx("span",{children:"+50 Destinos Exclusivos"})]}),s.jsxs("div",{className:"trust-item",children:[s.jsx(pc,{size:20,className:"trust-icon"}),s.jsx("span",{children:"Garantía de Satisfacción"})]}),s.jsxs("div",{className:"trust-item",children:[s.jsx(tp,{size:20,className:"trust-icon"}),s.jsx("span",{children:"Asistencia 24/7 en Salta"})]})]})]}),s.jsx("style",{children:`
        .home {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          background: url('/wallp/wallpappers5.jpg') no-repeat center center/cover;
          position: relative;
          min-height: 100vh;
          overflow: hidden;
        }

        .home-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 45%, rgba(15, 23, 42, 0.4) 100%);
          z-index: 1;
        }

        .home-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 2rem;
          max-width: 820px;
          width: 100%;
          margin-right: auto;
        }

        .badge-pill {
          display: inline-block;
          padding: 0.6rem 1.6rem;
          background: rgba(21, 91, 255, 0.1);
          border: 1px solid rgba(21, 91, 255, 0.3);
          border-radius: 3rem;
          color: #155bff;
          font-weight: 700;
          font-size: 1.4rem;
          backdrop-filter: blur(8px);
        }

        .home-content h1 {
          font-family: 'Outfit', sans-serif;
          font-size: 7.5rem;
          font-weight: 800;
          line-height: 1.1;
          color: #0f172a;
          letter-spacing: -0.02em;
        }

        .home-content h1 span {
          color: #155bff;
        }

        .home-content p {
          font-size: 1.8rem;
          font-weight: 500;
          color: #334155;
          max-width: 650px;
          line-height: 1.6;
        }

        .hero-actions {
          margin-top: 1rem;
        }

        /* Search Box Widget */
        .hero-search-box {
          display: flex;
          align-items: center;
          background: #ffffff;
          padding: 1.2rem 1.5rem;
          border-radius: 2rem;
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.12);
          width: 100%;
          max-width: 780px;
          gap: 1.5rem;
          margin-top: 1.5rem;
          border: 1px solid rgba(226, 232, 240, 0.8);
        }

        .search-field {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          flex: 1;
        }

        .search-icon {
          color: #155bff;
          flex-shrink: 0;
        }

        .search-input-group {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          width: 100%;
        }

        .search-input-group label {
          font-size: 1.1rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #64748b;
        }

        .search-input-group input,
        .search-input-group select {
          border: none;
          background: transparent;
          font-size: 1.4rem;
          font-weight: 600;
          color: #0f172a;
          outline: none;
          width: 100%;
        }

        .search-divider {
          width: 1px;
          height: 35px;
          background: #e2e8f0;
        }

        .search-btn {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1.2rem 2.2rem;
          background: linear-gradient(135deg, #155bff, #0052ff);
          color: white;
          border: none;
          border-radius: 1.4rem;
          font-size: 1.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(21, 91, 255, 0.3);
          flex-shrink: 0;
        }

        .search-btn:hover {
          transform: scale(1.03);
          box-shadow: 0 12px 25px rgba(21, 91, 255, 0.4);
        }

        .hero-trust-badges {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.4rem;
          font-weight: 600;
          color: #475569;
        }

        .trust-icon {
          color: #155bff;
        }

        @media (max-width: 1095px) {
          .home-overlay {
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.85) 100%);
          }
          .home-content h1 {
            font-size: 5.5rem;
          }
        }

        @media (max-width: 780px) {
          .hero-search-box {
            flex-direction: column;
            align-items: stretch;
            padding: 2rem;
            gap: 1.5rem;
          }
          .search-divider {
            display: none;
          }
          .search-btn {
            justify-content: center;
            width: 100%;
          }
          .home-content h1 {
            font-size: 4.2rem;
          }
        }
      `})]})},Bi=[{id:"pack-1",title:"Nieve Infinita - Tour Package 1",category:"snow",description:"Disfruta de las mejores pistas de nieve con hospedaje resort de primera clase, pases VIP y equipo completo incluido.",price:1699.99,icon:"fa-snowflake",image:"/packages/pack1.jpg",duration:"7 Días / 6 Noches",rating:4.9,features:["Vuelos directos incluidos","Hotel 5★ frente a las pistas","Pases VIP de esquí","Guía de montaña experimentado"]},{id:"pack-2",title:"Esquí Alpino - Tour Package 2",category:"ski",description:"Vive la aventura alpina definitiva con lecciones de esquí personalizadas, spas termales y traslados privados.",price:2499.99,icon:"fa-person-skiing",image:"/packages/pack2.jpg",duration:"10 Días / 9 Noches",rating:4.95,features:["Acceso a spas termales","Clases privadas de esquí/snowboard","Pensión completa en resort","Seguro de montaña premium"]},{id:"pack-3",title:"Cumbre Extrema - Tour Package 3",category:"mountain",description:"Travesía épica de alta montaña con expediciones guiadas, campamento de lujo y paisajes glaciares inigualables.",price:3499.99,icon:"fa-mountain",image:"/packages/pack3.jpg",duration:"14 Días / 13 Noches",rating:5,features:["Expedición en helicóptero","Cena gourmet en altura","Equipamiento profesional","Cámara fotográfica 4K de alquiler"]}],vp=[{id:"dest-1",title:"Laguna de los Tres",subtitle:"El Chaltén, Patagonia",category:"mountain",image:"/destin/destination1.jpg",description:"Una de las caminatas más icónicas del mundo con vistas imponentes al Monte Fitz Roy y sus majestuosos glaciares.",location:"Patagonia, Argentina",priceFrom:850,bestSeason:"Octubre - Abril",highlights:["Trekking al Fitz Roy","Navegación glaciar","Avistamiento de fauna andina"]},{id:"dest-2",title:"Bariloche & Lagos",subtitle:"Río Negro, Argentina",category:"nature",image:"/destin/destination2.jpg",description:"Lagos cristalinos de aguas turquesas, bosques milenarios de arrayanes y la capital nacional del chocolate artesanal.",location:"Río Negro, Argentina",priceFrom:620,bestSeason:"Todo el año",highlights:["Circuito Chico","Cerro Catedral","Chocolaterías tradicionales","Kayak en lago Nahuel Huapi"]},{id:"dest-3",title:"Quebrada de Humahuaca",subtitle:"Jujuy, Argentina",category:"adventure",image:"/destin/destination3.jpg",description:"Patrimonio de la Humanidad por la UNESCO. Cerros multicolores, rica cultura ancestral y gastronomía autóctona.",location:"Jujuy, Argentina",priceFrom:490,bestSeason:"Marzo - Noviembre",highlights:["Cerro de los 7 Colores","Serranías del Hornocal","Salinas Grandes"]},{id:"dest-4",title:"Tren a las Nubes",subtitle:"Salta, Argentina",category:"adventure",image:"/destin/destination4.jpg",description:"Un viaje inolvidable por uno de los ferrocarriles más altos del planeta a más de 4.220 metros sobre el nivel del mar.",location:"Salta Capital, Argentina",priceFrom:580,bestSeason:"Abril - Diciembre",highlights:["Viaducto La Polvorilla","Degustación de vinos torrontés","Arquitectura colonial de Salta"]},{id:"dest-5",title:"Cataratas del Iguazú",subtitle:"Misiones, Argentina",category:"nature",image:"/destin/destination5.jpg",description:"Una de las 7 Maravillas Naturales del Mundo. Más de 275 saltos de agua rodeados por la exuberante selva paranaense.",location:"Puerto Iguazú, Argentina",priceFrom:720,bestSeason:"Marzo - Mayo / Sep - Nov",highlights:["Garganta del Diablo","Paseo en lancha Gran Aventura","Senderismo nocturno con luna llena"]},{id:"dest-6",title:"Glaciar Perito Moreno",subtitle:"Santa Cruz, Argentina",category:"nature",image:"/destin/destination6.jpg",description:"Maravíllate con el estruendo de los desprendimientos de hielo de una masa glacial imponente de 30 km de longitud.",location:"El Calafate, Argentina",priceFrom:950,bestSeason:"Noviembre - Marzo",highlights:["Minitrekking sobre el glaciar","Pasarelas panorámicas","Crucero Safari Náutico"]}],yp=[{question:"¿Cómo realizo una reserva?",answer:'Puedes elegir un paquete o destino, hacer clic en "Explorar" o "Comprar Paquete" y completar los datos. Nuestro equipo te contactará de inmediato.'},{question:"¿Qué incluyen nuestros paquetes?",answer:"Todos nuestros paquetes incluyen traslados, alojamiento en hoteles seleccionados, seguro de viaje y asistencia 24/7 en destino."},{question:"¿Cuál es la política de cancelación?",answer:"Ofrecemos cancelación gratuita hasta 15 días antes de la fecha de viaje en la mayoría de nuestras reservas."},{question:"¿Atienden consultas en Salta Capital?",answer:"¡Sí! Puedes visitarnos en nuestra casa central en Santiago del Estero 750, Salta Capital, Argentina."}],xp=({onSelectPackage:e})=>{const[t,n]=M.useState("all"),r=t==="all"?Bi:Bi.filter(i=>i.category===t),l=i=>{switch(i){case"fa-snowflake":return s.jsx(cp,{size:52,className:"pkg-icon"});case"fa-person-skiing":return s.jsx(np,{size:52,className:"pkg-icon"});case"fa-mountain":return s.jsx(Gs,{size:52,className:"pkg-icon"});default:return s.jsx(Gs,{size:52,className:"pkg-icon"})}};return s.jsxs("section",{className:"packages",id:"packages",children:[s.jsxs("div",{className:"packages-header",children:[s.jsx("h2",{className:"heading",children:"Packages"}),s.jsx("p",{className:"subheading",children:"Paquetes exclusivos diseñados a la medida de tus expectativas, con servicios VIP de alta categoría."}),s.jsxs("div",{className:"category-filters",children:[s.jsx("button",{className:`filter-chip ${t==="all"?"active":""}`,onClick:()=>n("all"),children:"Todos los Paquetes"}),s.jsx("button",{className:`filter-chip ${t==="snow"?"active":""}`,onClick:()=>n("snow"),children:"Nieve & Esquí"}),s.jsx("button",{className:`filter-chip ${t==="ski"?"active":""}`,onClick:()=>n("ski"),children:"Alpino VIP"}),s.jsx("button",{className:`filter-chip ${t==="mountain"?"active":""}`,onClick:()=>n("mountain"),children:"Alta Montaña"})]})]}),s.jsx("div",{className:"packages-container",children:r.map(i=>s.jsxs("div",{className:"packages-box",children:[s.jsx("div",{className:"pkg-bg-overlay",style:{backgroundImage:`url(${i.image})`}}),s.jsx("div",{className:"pkg-dark-mask"}),s.jsxs("div",{className:"pkg-content",children:[s.jsxs("div",{className:"pkg-top-badge",children:[s.jsx(mc,{size:14,fill:"#fbbf24",color:"#fbbf24"}),s.jsxs("span",{children:[i.rating," (",i.duration,")"]})]}),l(i.icon),s.jsx("h3",{children:i.title}),s.jsx("p",{children:i.description}),s.jsx("div",{className:"pkg-features-list",children:i.features.map((o,a)=>s.jsxs("div",{className:"feature-tag",children:[s.jsx($o,{size:14,className:"check-icon"}),s.jsx("span",{children:o})]},a))}),s.jsx("div",{className:"pkg-price-tag",children:s.jsxs("h2",{children:["$",i.price.toFixed(2)]})}),s.jsx("button",{className:"btn buy-btn",onClick:()=>e(i),children:"BUY PACKAGE"})]})]},i.id))}),s.jsx("style",{children:`
        .packages {
          background: linear-gradient(180deg, #155bff 0%, #0043df 100%);
          position: relative;
          color: #ffffff;
        }

        .packages-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .subheading {
          font-size: 1.8rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 650px;
          margin: 0 auto 3rem;
          font-weight: 400;
        }

        .category-filters {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        .filter-chip {
          padding: 0.9rem 2.2rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 3rem;
          color: #ffffff;
          font-size: 1.4rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-chip:hover,
        .filter-chip.active {
          background: #ffffff;
          color: #155bff;
          border-color: #ffffff;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .packages-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 3.5rem;
          max-width: 1300px;
          margin: 0 auto;
        }

        .packages-box {
          position: relative;
          border-radius: 2.4rem;
          min-height: 620px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          display: flex;
          flex-direction: column;
        }

        .packages-box:hover {
          transform: translateY(-12px) scale(1.01);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
        }

        .pkg-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.6s ease;
          z-index: 1;
        }

        .packages-box:hover .pkg-bg-overlay {
          transform: scale(1.08);
        }

        .pkg-dark-mask {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.85) 100%);
          z-index: 2;
        }

        .pkg-content {
          position: relative;
          z-index: 3;
          padding: 4rem 3rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.5rem;
        }

        .pkg-top-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 1.4rem;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 2rem;
          font-size: 1.3rem;
          font-weight: 600;
          color: #ffffff;
        }

        .pkg-icon {
          color: #ffffff;
          margin-top: 1rem;
          filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.3));
        }

        .pkg-content h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 2.8rem;
          font-weight: 700;
          color: #ffffff;
        }

        .pkg-content p {
          font-size: 1.5rem;
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.6;
        }

        .pkg-features-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          width: 100%;
          margin: 1rem 0;
        }

        .feature-tag {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.95);
          text-align: left;
        }

        .check-icon {
          color: #38bdf8;
          flex-shrink: 0;
        }

        .pkg-price-tag h2 {
          display: inline-block;
          padding: 1rem 3rem;
          background: #ffffff;
          color: #155bff;
          border-radius: 1.6rem;
          font-size: 4rem;
          font-weight: 800;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
          font-family: 'Outfit', sans-serif;
        }

        .packages-box:hover .pkg-price-tag h2 {
          background: #155bff;
          color: #ffffff;
          box-shadow: 0 12px 30px rgba(21, 91, 255, 0.4);
        }

        .buy-btn {
          width: 100%;
          margin-top: auto;
        }
      `})]})},kp=({children:e,className:t="",maxDegree:n=12,scale:r=1.03,onClick:l})=>{const i=M.useRef(null),[o,a]=M.useState({transform:"perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",transition:"transform 0.5s cubic-bezier(0.03, 0.98, 0.52, 0.99)"}),u=g=>{if(!i.current)return;const h=i.current.getBoundingClientRect(),m=g.clientX-h.left,x=g.clientY-h.top,w=h.width/2,k=h.height/2,F=(x-k)/k*-n,d=(m-w)/w*n;a({transform:`perspective(1000px) rotateX(${F.toFixed(2)}deg) rotateY(${d.toFixed(2)}deg) scale3d(${r}, ${r}, ${r})`,transition:"transform 0.1s ease-out"})},f=()=>{a({transform:"perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",transition:"transform 0.5s cubic-bezier(0.03, 0.98, 0.52, 0.99)"})};return s.jsx("div",{ref:i,className:`tilt-card-container ${t}`,style:o,onMouseMove:u,onMouseLeave:f,onClick:l,children:e})},wp=({onSelectDestination:e,searchFilter:t=""})=>{const[n,r]=M.useState("all"),l=vp.filter(i=>{const o=n==="all"||i.category===n,a=t===""||i.title.toLowerCase().includes(t.toLowerCase())||i.subtitle.toLowerCase().includes(t.toLowerCase())||i.location.toLowerCase().includes(t.toLowerCase());return o&&a});return s.jsxs("section",{className:"destinations",id:"destinations",children:[s.jsxs("div",{className:"destinations-header",children:[s.jsxs("h2",{className:"heading heading-dark",children:["Destina",s.jsx("span",{children:"tions"})]}),s.jsx("p",{className:"dest-subheading",children:"Explora los rincones más fascinantes con guías expertos y experiencias personalizadas de alta gama."}),s.jsxs("div",{className:"dest-filters",children:[s.jsxs("button",{className:`dest-chip ${n==="all"?"active":""}`,onClick:()=>r("all"),children:[s.jsx(ep,{size:16}),s.jsx("span",{children:"Todos"})]}),s.jsx("button",{className:`dest-chip ${n==="mountain"?"active":""}`,onClick:()=>r("mountain"),children:"Montañas & Glaciares"}),s.jsx("button",{className:`dest-chip ${n==="nature"?"active":""}`,onClick:()=>r("nature"),children:"Naturaleza"}),s.jsx("button",{className:`dest-chip ${n==="adventure"?"active":""}`,onClick:()=>r("adventure"),children:"Aventura"})]})]}),s.jsx("div",{className:"destinations-container",children:l.map(i=>s.jsxs(kp,{className:"destinations-box",maxDegree:10,scale:1.03,children:[s.jsxs("div",{className:"dest-img-wrapper",children:[s.jsx("img",{src:i.image,alt:i.title,className:"dest-img"}),s.jsxs("div",{className:"dest-category-badge",children:[s.jsx(dp,{size:14}),s.jsx("span",{children:i.subtitle})]})]}),s.jsxs("div",{className:"destinations-info",children:[s.jsxs("div",{className:"dest-header-info",children:[s.jsxs("span",{className:"dest-location-pill",children:[s.jsx(er,{size:14}),i.location]}),s.jsx("h4",{children:i.title})]}),s.jsx("p",{children:i.description}),s.jsxs("div",{className:"dest-footer-action",children:[s.jsxs("div",{className:"dest-price",children:[s.jsx("small",{children:"Desde"}),s.jsxs("span",{children:["$",i.priceFrom," USD"]})]}),s.jsxs("button",{className:"btn btn-explore",onClick:o=>{o.stopPropagation(),e(i)},children:[s.jsx(nl,{size:18}),s.jsx("span",{children:"Explore"})]})]})]})]},i.id))}),s.jsx("style",{children:`
        .destinations {
          background: #f8fafc;
          padding-top: 10rem;
        }

        .destinations-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .dest-subheading {
          font-size: 1.8rem;
          color: #64748b;
          max-width: 650px;
          margin: 0 auto 3rem;
        }

        .dest-filters {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        .dest-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.9rem 2.2rem;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 3rem;
          color: #475569;
          font-size: 1.4rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        }

        .dest-chip:hover,
        .dest-chip.active {
          background: #155bff;
          color: #ffffff;
          border-color: #155bff;
          box-shadow: 0 8px 20px rgba(21, 91, 255, 0.25);
        }

        .destinations-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          max-width: 1300px;
          margin: 0 auto;
        }

        .destinations-box {
          border-radius: 2.4rem;
          overflow: hidden;
          background: #ffffff;
          min-height: 480px;
          position: relative;
          box-shadow: 0 15px 35px rgba(15, 23, 42, 0.08);
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }

        .dest-img-wrapper {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
        }

        .dest-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease;
          filter: brightness(0.95);
        }

        .destinations-box:hover .dest-img {
          transform: scale(1.08);
          filter: brightness(1.05);
        }

        .dest-category-badge {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 1.4rem;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(10px);
          border-radius: 2rem;
          color: #ffffff;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .destinations-info {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 1.2rem;
        }

        .dest-location-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.2rem;
          font-weight: 700;
          color: #155bff;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .destinations-info h4 {
          font-family: 'Outfit', sans-serif;
          font-size: 2.4rem;
          font-weight: 700;
          color: #0f172a;
          margin-top: 0.4rem;
        }

        .destinations-info p {
          font-size: 1.4rem;
          color: #64748b;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .dest-footer-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 1.5rem;
          border-top: 1px solid #f1f5f9;
        }

        .dest-price {
          display: flex;
          flex-direction: column;
        }

        .dest-price small {
          font-size: 1.1rem;
          color: #94a3b8;
          font-weight: 600;
          text-transform: uppercase;
        }

        .dest-price span {
          font-size: 1.8rem;
          font-weight: 800;
          color: #155bff;
          font-family: 'Outfit', sans-serif;
        }

        .btn-explore {
          padding: 0.8rem 2rem;
          font-size: 1.4rem;
          border-radius: 2rem;
        }

        @media (max-width: 1095px) {
          .destinations-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 780px) {
          .destinations-container {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Sp=({onSubmitContact:e})=>{const[t,n]=M.useState({fullName:"",email:"",phone:"",message:""}),[r,l]=M.useState(!1),[i,o]=M.useState(!1),a=u=>{u.preventDefault(),!(!t.fullName||!t.email||!t.phone)&&(l(!0),setTimeout(()=>{l(!1),o(!0),e(t),n({fullName:"",email:"",phone:"",message:""}),setTimeout(()=>o(!1),5e3)},1e3))};return s.jsxs("section",{className:"contact",id:"contact",children:[s.jsx("div",{className:"contact-overlay"}),s.jsxs("div",{className:"contact-container",children:[s.jsx("h2",{className:"heading",children:"Contact Us"}),s.jsx("p",{className:"contact-subtitle",children:"¿Tienes alguna duda o quieres cotizar un paquete personalizado? Completa tus datos y un asesor se pondrá en contacto contigo a la brevedad."}),s.jsxs("form",{className:"contact-form",onSubmit:a,children:[s.jsxs("div",{className:"input-grid",children:[s.jsxs("div",{className:"input-wrapper",children:[s.jsx(pp,{className:"input-icon",size:20}),s.jsx("input",{type:"text",placeholder:"Full Name *",required:!0,value:t.fullName,onChange:u=>n({...t,fullName:u.target.value})})]}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(op,{className:"input-icon",size:20}),s.jsx("input",{type:"email",placeholder:"E-mail *",required:!0,value:t.email,onChange:u=>n({...t,email:u.target.value})})]}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(Hi,{className:"input-icon",size:20}),s.jsx("input",{type:"tel",placeholder:"Phone Number *",required:!0,value:t.phone,onChange:u=>n({...t,phone:u.target.value})})]})]}),s.jsx("div",{className:"input-wrapper textarea-wrapper",children:s.jsx("textarea",{placeholder:"¿Cómo podemos ayudarte? (Destino de preferencia, fechas estimadas, número de viajeros...)",rows:4,value:t.message,onChange:u=>n({...t,message:u.target.value})})}),s.jsx("button",{type:"submit",className:"btn submit-btn",disabled:r,children:r?s.jsx("span",{children:"Enviando..."}):i?s.jsxs(s.Fragment,{children:[s.jsx(dc,{size:22}),s.jsx("span",{children:"¡Mensaje Enviado!"})]}):s.jsxs(s.Fragment,{children:[s.jsx(fc,{size:20}),s.jsx("span",{children:"Contact Us"})]})})]}),s.jsxs("div",{className:"contact-info-strip",children:[s.jsxs("div",{className:"info-badge",children:[s.jsx(er,{size:18,className:"info-icon"}),s.jsx("span",{children:"Santiago del Estero 750, Salta Capital, Argentina"})]}),s.jsxs("div",{className:"info-badge",children:[s.jsx(Hi,{size:18,className:"info-icon"}),s.jsx("span",{children:"853-967-0100"})]})]})]}),s.jsx("style",{children:`
        .contact {
          background: url('/wallp/wallpappers6.jpg') no-repeat center center/cover;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }

        .contact-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(4px);
          z-index: 1;
        }

        .contact-container {
          position: relative;
          z-index: 2;
          max-width: 800px;
          width: 100%;
          text-align: center;
          color: #ffffff;
        }

        .contact-subtitle {
          font-size: 1.7rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 4rem;
          line-height: 1.6;
        }

        .contact-form {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          padding: 4rem;
          border-radius: 2.4rem;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .input-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 1.8rem;
          color: #155bff;
          z-index: 2;
        }

        .input-wrapper input,
        .input-wrapper textarea {
          width: 100%;
          padding: 1.5rem 1.8rem 1.5rem 5rem;
          font-size: 1.6rem;
          color: #0f172a;
          background: #ffffff;
          border-radius: 1.2rem;
          border: 2px solid transparent;
          transition: all 0.3s ease;
          outline: none;
        }

        .textarea-wrapper textarea {
          padding-left: 2rem;
          resize: vertical;
        }

        .input-wrapper input:focus,
        .input-wrapper textarea:focus {
          border-color: #155bff;
          box-shadow: 0 0 15px rgba(21, 91, 255, 0.3);
        }

        .submit-btn {
          margin-top: 1rem;
          width: 100%;
          padding: 1.5rem;
          font-size: 1.8rem;
        }

        .contact-info-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3rem;
          margin-top: 3.5rem;
          flex-wrap: wrap;
        }

        .info-badge {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.4rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          background: rgba(255, 255, 255, 0.1);
          padding: 0.8rem 1.8rem;
          border-radius: 2rem;
          backdrop-filter: blur(10px);
        }

        .info-icon {
          color: #38bdf8;
        }

        @media (max-width: 600px) {
          .contact-form {
            padding: 2.5rem 1.8rem;
          }
        }
      `})]})},jp=({onSubscribeNewsletter:e})=>{const[t,n]=M.useState(""),[r,l]=M.useState(null),i=o=>{o.preventDefault(),t&&(e(t),n(""))};return s.jsxs("footer",{className:"footer",id:"footer",children:[s.jsx("div",{className:"footer-overlay"}),s.jsxs("div",{className:"footer-content",children:[s.jsxs("div",{className:"faq",children:[s.jsx("h3",{children:"FAQ"}),s.jsxs("ul",{className:"faq-list",children:[s.jsx("li",{children:s.jsx("a",{href:"#faq",onClick:o=>{o.preventDefault(),l(r===0?null:0)},children:"Company"})}),s.jsx("li",{children:s.jsx("a",{href:"#faq",onClick:o=>{o.preventDefault(),l(r===1?null:1)},children:"Employment"})}),s.jsx("li",{children:s.jsx("a",{href:"#faq",onClick:o=>{o.preventDefault(),l(r===2?null:2)},children:"Order History"})}),s.jsx("li",{children:s.jsx("a",{href:"#faq",onClick:o=>{o.preventDefault(),l(r===3?null:3)},children:"Terms & Services"})})]}),s.jsx("div",{className:"faq-accordion-box",children:yp.map((o,a)=>s.jsxs("div",{className:"faq-item",children:[s.jsxs("button",{className:"faq-question-btn",onClick:()=>l(r===a?null:a),children:[s.jsx("span",{children:o.question}),s.jsx(Gf,{size:16,style:{transform:r===a?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s ease"}})]}),r===a&&s.jsx("p",{className:"faq-answer",children:o.answer})]},a))})]}),s.jsxs("div",{className:"news",children:[s.jsx("h3",{children:"NewsLetter"}),s.jsx("p",{className:"news-desc",children:"Suscríbete a nuestro boletín para recibir ofertas secretas y paquetes de temporada."}),s.jsxs("form",{className:"news-form",onSubmit:i,children:[s.jsx("input",{type:"email",placeholder:"Your E-mail Adress",required:!0,value:t,onChange:o=>n(o.target.value)}),s.jsxs("button",{type:"submit",children:[s.jsx("span",{children:"Send"}),s.jsx(fc,{size:16})]})]})]}),s.jsxs("div",{className:"info",children:[s.jsx("h3",{children:"General Information"}),s.jsxs("div",{className:"phone-box",children:[s.jsx(Hi,{size:20,className:"info-icon"}),s.jsx("p",{children:"853-967-0100"})]}),s.jsxs("ul",{className:"location-list",children:[s.jsxs("li",{children:[s.jsx(er,{size:16,className:"inline-icon"}),s.jsx("a",{href:"https://maps.google.com",target:"_blank",rel:"noreferrer",children:"750 Santiago del Estero. Salta Capital"})]}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"Salta Capital, Argentina"})})]}),s.jsxs("div",{className:"icons",children:[s.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noreferrer","aria-label":"Facebook",children:s.jsx(Jf,{size:20})}),s.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noreferrer","aria-label":"Instagram",children:s.jsx(lp,{size:20})}),s.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noreferrer","aria-label":"Twitter",children:s.jsx(fp,{size:20})}),s.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",children:s.jsx(ip,{size:20})})]})]})]}),s.jsx("div",{className:"footer-bottom",children:s.jsx("p",{children:"© 2026 GowTravel - Salta Capital, Argentina. Todos los derechos reservados."})}),s.jsx("style",{children:`
        .footer {
          width: 100%;
          position: relative;
          background: linear-gradient(135deg, #155bff 0%, #0043df 100%);
          color: #ffffff;
          padding: 7rem 9% 3rem;
          overflow: hidden;
        }

        .footer-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 23, 42, 0.45);
          z-index: 1;
        }

        .footer-content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
          align-items: start;
        }

        h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 2rem;
          letter-spacing: -0.01em;
        }

        /* FAQ */
        .faq {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-list a {
          color: rgba(255, 255, 255, 0.85);
          font-size: 1.6rem;
          transition: all 0.3s ease;
        }

        .faq-list a:hover {
          color: #ffffff;
          padding-left: 0.5rem;
        }

        .faq-accordion-box {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          overflow: hidden;
        }

        .faq-question-btn {
          width: 100%;
          padding: 1rem 1.4rem;
          background: transparent;
          color: #ffffff;
          font-size: 1.3rem;
          font-weight: 600;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          text-align: left;
        }

        .faq-answer {
          padding: 0 1.4rem 1rem;
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
        }

        /* Newsletter */
        .news {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.8rem;
        }

        .news-desc {
          font-size: 1.4rem;
          color: rgba(255, 255, 255, 0.85);
        }

        .news-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .news-form input {
          border-radius: 1.2rem;
          width: 90%;
          padding: 1.4rem 1.8rem;
          border: 2px solid rgba(255, 255, 255, 0.8);
          outline: none;
          text-align: center;
          font-size: 1.5rem;
          background: rgba(255, 255, 255, 0.95);
          color: #0f172a;
          transition: all 0.3s ease;
        }

        .news-form input:focus {
          background: #ffffff;
          border-color: #ffffff;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
        }

        .news-form button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          padding: 1.2rem 4rem;
          border-radius: 1.2rem;
          border: 2px solid #ffffff;
          background: transparent;
          color: #ffffff;
          font-weight: 700;
          font-size: 1.6rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .news-form button:hover {
          background: #ffffff;
          color: #155bff;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        /* General Info */
        .info {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }

        .phone-box {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.8rem;
          font-weight: 700;
        }

        .location-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .location-list li {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .location-list a {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.5rem;
          transition: color 0.3s ease;
        }

        .location-list a:hover {
          color: #ffffff;
          text-decoration: underline;
        }

        .icons {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          margin-top: 1rem;
        }

        .icons a {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 2px solid #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: all 0.4s ease;
        }

        .icons a:hover {
          background: #ffffff;
          color: #155bff;
          transform: scale(1.15) rotate(5deg);
        }

        .footer-bottom {
          position: relative;
          z-index: 2;
          margin-top: 6rem;
          padding-top: 2.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          text-align: center;
          font-size: 1.4rem;
          color: rgba(255, 255, 255, 0.8);
        }

        @media (max-width: 895px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 4rem;
            text-align: center;
          }
          .faq, .info {
            align-items: center;
          }
          .icons {
            justify-content: center;
          }
        }
      `})]})},Np=({packageItem:e,onClose:t,onConfirmBooking:n})=>{if(!e)return null;const[r,l]=M.useState(2),[i,o]=M.useState(""),[a,u]=M.useState(""),[f,g]=M.useState(""),[h,m]=M.useState(!1),x=e.price*r,w=k=>{k.preventDefault(),m(!0),setTimeout(()=>{n({packageId:e.id,packageName:e.title,travelers:r,date:i,totalPrice:x,customerName:a,email:f}),m(!1),t()},1800)};return s.jsxs("div",{className:"modal-overlay",onClick:t,children:[s.jsxs("div",{className:"modal-card",onClick:k=>k.stopPropagation(),children:[s.jsx("button",{className:"modal-close-btn",onClick:t,"aria-label":"Close modal",children:s.jsx(xl,{size:24})}),h?s.jsxs("div",{className:"modal-success-state",children:[s.jsx(dc,{size:70,className:"success-icon"}),s.jsx("h2",{children:"¡Reserva Solicitada con Éxito!"}),s.jsxs("p",{children:["Hemos enviado la confirmación y el itinerario detallado a ",s.jsx("strong",{children:f}),"."]})]}):s.jsxs("form",{className:"booking-form",onSubmit:w,children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("span",{className:"modal-category",children:"Reservar Paquete Turístico"}),s.jsx("h2",{children:e.title}),s.jsxs("p",{className:"modal-subtitle",children:[e.duration," • Incluye traslados y hotel 5★"]})]}),s.jsxs("div",{className:"booking-summary-card",children:[s.jsxs("div",{className:"summary-item",children:[s.jsx("span",{children:"Precio por persona"}),s.jsxs("strong",{children:["$",e.price.toFixed(2)," USD"]})]}),s.jsxs("div",{className:"summary-item",children:[s.jsx("span",{children:"Pasajeros"}),s.jsxs("div",{className:"counter-controls",children:[s.jsx("button",{type:"button",onClick:()=>l(Math.max(1,r-1)),children:"-"}),s.jsx("span",{children:r}),s.jsx("button",{type:"button",onClick:()=>l(r+1),children:"+"})]})]}),s.jsx("div",{className:"summary-divider"}),s.jsxs("div",{className:"summary-item total-item",children:[s.jsx("span",{children:"Total Estimado"}),s.jsxs("span",{className:"total-price",children:["$",x.toFixed(2)," USD"]})]})]}),s.jsxs("div",{className:"form-fields",children:[s.jsxs("div",{className:"field-group",children:[s.jsx("label",{children:"Nombre y Apellido"}),s.jsx("input",{type:"text",required:!0,placeholder:"Tu nombre completo",value:a,onChange:k=>u(k.target.value)})]}),s.jsxs("div",{className:"field-group",children:[s.jsx("label",{children:"Correo Electrónico"}),s.jsx("input",{type:"email",required:!0,placeholder:"ejemplo@correo.com",value:f,onChange:k=>g(k.target.value)})]}),s.jsxs("div",{className:"field-group",children:[s.jsx("label",{children:"Fecha Deseada de Salida"}),s.jsx("input",{type:"date",required:!0,value:i,onChange:k=>o(k.target.value)})]})]}),s.jsxs("div",{className:"modal-security-note",children:[s.jsx(pc,{size:18,className:"shield-icon"}),s.jsx("span",{children:"Reserva 100% protegida y sin cargos ocultos."})]}),s.jsxs("button",{type:"submit",className:"btn modal-submit-btn",children:[s.jsx(Zf,{size:20}),s.jsxs("span",{children:["Confirmar Reserva ($",x.toFixed(2),")"]})]})]})]}),s.jsx("style",{children:`
        .modal-close-btn {
          position: absolute;
          top: 2rem;
          right: 2rem;
          background: #f1f5f9;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #64748b;
          transition: all 0.3s ease;
        }

        .modal-close-btn:hover {
          background: #155bff;
          color: #ffffff;
        }

        .modal-header {
          margin-bottom: 2.5rem;
        }

        .modal-category {
          font-size: 1.2rem;
          font-weight: 700;
          color: #155bff;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .modal-header h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 3rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0.4rem 0;
        }

        .modal-subtitle {
          font-size: 1.4rem;
          color: #64748b;
        }

        .booking-summary-card {
          background: #f8fafc;
          border-radius: 1.6rem;
          padding: 2rem;
          margin-bottom: 2.5rem;
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .summary-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.5rem;
          color: #475569;
        }

        .counter-controls {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          background: #ffffff;
          padding: 0.4rem 1.2rem;
          border-radius: 2rem;
          border: 1px solid #cbd5e1;
        }

        .counter-controls button {
          background: transparent;
          font-size: 1.8rem;
          font-weight: 700;
          color: #155bff;
          cursor: pointer;
          width: 24px;
        }

        .summary-divider {
          height: 1px;
          background: #e2e8f0;
        }

        .total-item {
          font-weight: 700;
          color: #0f172a;
        }

        .total-price {
          font-size: 2.4rem;
          color: #155bff;
          font-family: 'Outfit', sans-serif;
        }

        .form-fields {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
          margin-bottom: 2rem;
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .field-group label {
          font-size: 1.3rem;
          font-weight: 600;
          color: #475569;
        }

        .field-group input {
          padding: 1.3rem 1.6rem;
          font-size: 1.5rem;
          border-radius: 1rem;
          border: 1.5px solid #cbd5e1;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .field-group input:focus {
          border-color: #155bff;
        }

        .modal-security-note {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.3rem;
          color: #64748b;
          margin-bottom: 2.5rem;
        }

        .shield-icon {
          color: #10b981;
        }

        .modal-submit-btn {
          width: 100%;
          padding: 1.5rem;
        }

        .modal-success-state {
          text-align: center;
          padding: 4rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .success-icon {
          color: #10b981;
        }
      `})]})},Cp=({destination:e,onClose:t,onBookNow:n})=>e?s.jsxs("div",{className:"modal-overlay",onClick:t,children:[s.jsxs("div",{className:"modal-card dest-modal-card",onClick:r=>r.stopPropagation(),children:[s.jsx("button",{className:"modal-close-btn",onClick:t,"aria-label":"Close modal",children:s.jsx(xl,{size:24})}),s.jsxs("div",{className:"dest-modal-banner",children:[s.jsx("img",{src:e.image,alt:e.title}),s.jsx("div",{className:"dest-modal-banner-overlay"}),s.jsxs("div",{className:"dest-modal-header-text",children:[s.jsxs("span",{className:"dest-location-badge",children:[s.jsx(er,{size:14}),e.location]}),s.jsx("h2",{children:e.title}),s.jsx("p",{children:e.subtitle})]})]}),s.jsxs("div",{className:"dest-modal-body",children:[s.jsxs("div",{className:"dest-quick-stats",children:[s.jsxs("div",{className:"stat-box",children:[s.jsx(cc,{size:18,className:"stat-icon"}),s.jsxs("div",{children:[s.jsx("small",{children:"Mejor Época"}),s.jsx("strong",{children:e.bestSeason})]})]}),s.jsxs("div",{className:"stat-box",children:[s.jsx(mc,{size:18,className:"stat-icon yellow"}),s.jsxs("div",{children:[s.jsx("small",{children:"Valoración"}),s.jsx("strong",{children:"4.9 / 5.0 Excelente"})]})]}),s.jsxs("div",{className:"stat-box",children:[s.jsx(nl,{size:18,className:"stat-icon"}),s.jsxs("div",{children:[s.jsx("small",{children:"Tarifa Desde"}),s.jsxs("strong",{children:["$",e.priceFrom," USD"]})]})]})]}),s.jsxs("div",{className:"dest-description-section",children:[s.jsx("h3",{children:"Descripción del Destino"}),s.jsx("p",{children:e.description})]}),s.jsxs("div",{className:"dest-highlights-section",children:[s.jsx("h3",{children:"Puntos Destacados e Itinerario"}),s.jsx("div",{className:"highlights-grid",children:e.highlights.map((r,l)=>s.jsxs("div",{className:"highlight-card",children:[s.jsx($o,{size:18,className:"check-icon"}),s.jsx("span",{children:r})]},l))})]}),s.jsx("div",{className:"dest-modal-actions",children:s.jsxs("button",{className:"btn dest-book-btn",onClick:()=>{t(),n(e)},children:[s.jsx(nl,{size:20}),s.jsxs("span",{children:["Reservar Experiencia ($",e.priceFrom," USD)"]})]})})]})]}),s.jsx("style",{children:`
        .dest-modal-card {
          padding: 0;
          overflow: hidden;
          max-width: 720px;
        }

        .dest-modal-banner {
          position: relative;
          width: 100%;
          height: 280px;
        }

        .dest-modal-banner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .dest-modal-banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.2) 0%, rgba(15, 23, 42, 0.85) 100%);
        }

        .dest-modal-header-text {
          position: absolute;
          bottom: 2.5rem;
          left: 3rem;
          right: 3rem;
          color: #ffffff;
        }

        .dest-location-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 1.2rem;
          background: rgba(21, 91, 255, 0.8);
          backdrop-filter: blur(8px);
          border-radius: 2rem;
          font-size: 1.2rem;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 0.8rem;
        }

        .dest-modal-header-text h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 3.2rem;
          font-weight: 800;
          margin-bottom: 0.2rem;
        }

        .dest-modal-header-text p {
          font-size: 1.6rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .dest-modal-body {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .dest-quick-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          background: #f8fafc;
          padding: 1.5rem;
          border-radius: 1.6rem;
          border: 1px solid #e2e8f0;
        }

        .stat-box {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon {
          color: #155bff;
        }

        .stat-icon.yellow {
          color: #f59e0b;
        }

        .stat-box small {
          display: block;
          font-size: 1.1rem;
          color: #64748b;
          text-transform: uppercase;
          font-weight: 600;
        }

        .stat-box strong {
          font-size: 1.4rem;
          color: #0f172a;
        }

        .dest-description-section h3,
        .dest-highlights-section h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 1rem;
        }

        .dest-description-section p {
          font-size: 1.5rem;
          color: #475569;
          line-height: 1.7;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.2rem;
        }

        .highlight-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.2rem 1.5rem;
          background: #f1f5f9;
          border-radius: 1.2rem;
          font-size: 1.4rem;
          font-weight: 600;
          color: #334155;
        }

        .dest-modal-actions {
          margin-top: 1rem;
        }

        .dest-book-btn {
          width: 100%;
          padding: 1.5rem;
        }

        @media (max-width: 600px) {
          .dest-quick-stats {
            grid-template-columns: 1fr;
          }
        }
      `})]}):null,Ep=({toasts:e,onDismiss:t})=>e.length===0?null:s.jsxs("div",{className:"toast-container",children:[e.map(n=>s.jsxs("div",{className:`toast toast-${n.type}`,children:[n.type==="success"&&s.jsx($o,{size:22,className:"toast-icon success"}),n.type==="error"&&s.jsx(Xf,{size:22,className:"toast-icon error"}),n.type==="info"&&s.jsx(rp,{size:22,className:"toast-icon info"}),s.jsxs("div",{className:"toast-body",children:[s.jsx("strong",{children:n.title}),s.jsx("p",{children:n.message})]}),s.jsx("button",{className:"toast-dismiss",onClick:()=>t(n.id),"aria-label":"Dismiss toast",children:s.jsx(xl,{size:16})})]},n.id)),s.jsx("style",{children:`
        .toast-body {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .toast-body strong {
          font-size: 1.4rem;
          color: #0f172a;
        }

        .toast-body p {
          font-size: 1.2rem;
          color: #64748b;
        }

        .toast-icon.success { color: #10b981; }
        .toast-icon.error { color: #ef4444; }
        .toast-icon.info { color: #155bff; }

        .toast-dismiss {
          background: transparent;
          color: #94a3b8;
          cursor: pointer;
          margin-left: auto;
          padding: 0.4rem;
          transition: color 0.3s ease;
        }

        .toast-dismiss:hover {
          color: #0f172a;
        }
      `})]}),zp=()=>{const[e,t]=M.useState("home"),[n,r]=M.useState(null),[l,i]=M.useState(null),[o,a]=M.useState(""),[u,f]=M.useState([]),g=(d,c,p)=>{const v=Date.now().toString(),S={id:v,type:d,title:c,message:p};f(N=>[...N,S]),setTimeout(()=>{f(N=>N.filter(E=>E.id!==v))},4500)},h=d=>{f(c=>c.filter(p=>p.id!==d))};M.useEffect(()=>{const d=()=>{const c=["home","packages","destinations","contact"],p=window.scrollY+200;for(const v of c){const S=document.getElementById(v);if(S){const N=S.offsetTop,E=S.offsetHeight;if(p>=N&&p<N+E){t(v);break}}}};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]);const m=d=>{t(d);const c=document.getElementById(d);c&&c.scrollIntoView({behavior:"smooth"})},x=d=>{a(d),m("destinations"),d&&g("info","Filtro Aplicado",`Buscando destinos que coincidan con "${d}"`)},w=d=>{g("success","¡Reserva Confirmada!",`Gracias ${d.customerName}, tu paquete "${d.packageName}" ha sido reservado para ${d.travelers} viajeros.`)},k=d=>{g("success","¡Suscripción Exitosa!",`Te has suscrito correctamente con ${d}. Recibirás nuestras novedades en breve.`)},F=d=>{g("success","¡Mensaje Recibido!",`Gracias ${d.fullName}. Un asesor de GowTravel te responderá pronto.`)};return s.jsxs("div",{className:"app-container",children:[s.jsx(hp,{activeSection:e,onNavigate:m,onOpenQuickBook:()=>r(Bi[0])}),s.jsxs("main",{children:[s.jsx(gp,{onSearch:x,onExploreClick:()=>m("packages")}),s.jsx(xp,{onSelectPackage:d=>r(d)}),s.jsx(wp,{onSelectDestination:d=>i(d),searchFilter:o}),s.jsx(Sp,{onSubmitContact:F})]}),s.jsx(jp,{onSubscribeNewsletter:k}),s.jsx(Np,{packageItem:n,onClose:()=>r(null),onConfirmBooking:w}),s.jsx(Cp,{destination:l,onClose:()=>i(null),onBookNow:d=>{i(null),r({id:`pack-${d.id}`,title:`Experiencia ${d.title}`,category:"luxury",description:d.description,price:d.priceFrom,icon:"fa-mountain",image:d.image,duration:"5 Días / 4 Noches",rating:4.9,features:d.highlights})}}),s.jsx(Ep,{toasts:u,onDismiss:h})]})};bl.createRoot(document.getElementById("root")).render(s.jsx(Mc.StrictMode,{children:s.jsx(zp,{})}));
