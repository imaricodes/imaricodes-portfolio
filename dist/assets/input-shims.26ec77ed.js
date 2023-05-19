import{d as A,e as I,b as N,f as p,p as B,g as x,h as R,j as _}from"./index.6cf75ad4.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const g=new WeakMap,y=(e,o,t,s=0,n=!1)=>{g.has(e)!==t&&(t?K(e,o,s,n):O(e,o))},M=e=>e===e.getRootNode().activeElement,K=(e,o,t,s=!1)=>{const n=o.parentNode,r=o.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,s&&(r.disabled=!0),n.appendChild(r),g.set(e,r);const c=e.ownerDocument.dir==="rtl"?9999:-9999;e.style.pointerEvents="none",o.style.transform=`translate3d(${c}px,${t}px,0) scale(0)`},O=(e,o)=>{const t=g.get(e);t&&(g.delete(e),t.remove()),e.style.pointerEvents="",o.style.transform=""},F=(e,o,t)=>{if(!t||!o)return()=>{};const s=c=>{M(o)&&y(e,o,c)},n=()=>y(e,o,!1),r=()=>s(!0),i=()=>s(!1);return A(t,"ionScrollStart",r),A(t,"ionScrollEnd",i),o.addEventListener("blur",n),()=>{I(t,"ionScrollStart",r),I(t,"ionScrollEnd",i),o.removeEventListener("blur",n)}},b="input, textarea, [no-blur], [contenteditable]",k=()=>{let e=!0,o=!1;const t=document,s=()=>{o=!0},n=()=>{e=!0},r=i=>{if(o){o=!1;return}const c=t.activeElement;if(!c||c.matches(b))return;const d=i.target;d!==c&&(d.matches(b)||d.closest(b)||(e=!1,setTimeout(()=>{e||c.blur()},50)))};return A(t,"ionScrollStart",s),t.addEventListener("focusin",n,!0),t.addEventListener("touchend",r,!1),()=>{I(t,"ionScrollStart",s,!0),t.removeEventListener("focusin",n,!0),t.removeEventListener("touchend",r,!1)}},H=.3,U=(e,o,t)=>{var s;const n=(s=e.closest("ion-item,[ion-item]"))!==null&&s!==void 0?s:e;return Y(n.getBoundingClientRect(),o.getBoundingClientRect(),t,e.ownerDocument.defaultView.innerHeight)},Y=(e,o,t,s)=>{const n=e.top,r=e.bottom,i=o.top,c=Math.min(o.bottom,s-t),d=i+15,u=c*.75-r,v=d-n,S=Math.round(u<0?-u:v>0?-v:0),m=Math.min(S,n-i),a=Math.abs(m)/H,f=Math.min(400,Math.max(150,a));return{scrollAmount:m,scrollDuration:f,scrollPadding:t,inputSafeY:-(n-d)+4}},$=(e,o,t,s,n,r=!1)=>{let i;const c=l=>{i=B(l)},d=l=>{if(!i)return;const u=B(l);!G(6,i,u)&&!M(o)&&q(e,o,t,s,n,r)};return e.addEventListener("touchstart",c,{capture:!0,passive:!0}),e.addEventListener("touchend",d,!0),()=>{e.removeEventListener("touchstart",c,!0),e.removeEventListener("touchend",d,!0)}},q=async(e,o,t,s,n,r=!1)=>{if(!t&&!s)return;const i=U(e,t||s,n);if(t&&Math.abs(i.scrollAmount)<4){o.focus();return}if(y(e,o,!0,i.inputSafeY,r),o.focus(),x(()=>e.click()),typeof window<"u"){let c;const d=async()=>{c!==void 0&&clearTimeout(c),window.removeEventListener("ionKeyboardDidShow",l),window.removeEventListener("ionKeyboardDidShow",d),t&&await _(t,0,i.scrollAmount,i.scrollDuration),y(e,o,!1,i.inputSafeY),o.focus()},l=()=>{window.removeEventListener("ionKeyboardDidShow",l),window.addEventListener("ionKeyboardDidShow",d)};if(t){const u=await R(t),v=u.scrollHeight-u.clientHeight;if(i.scrollAmount>v-u.scrollTop){o.type==="password"?(i.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",l)):window.addEventListener("ionKeyboardDidShow",d),c=setTimeout(d,1e3);return}}d()}},G=(e,o,t)=>{if(o&&t){const s=o.x-t.x,n=o.y-t.y;return s*s+n*n>e*e}return!1},C="$ionPaddingTimer",W=e=>{const o=document,t=n=>{P(n.target,e)},s=n=>{P(n.target,0)};return o.addEventListener("focusin",t),o.addEventListener("focusout",s),()=>{o.removeEventListener("focusin",t),o.removeEventListener("focusout",s)}},P=(e,o)=>{var t,s;if(e.tagName!=="INPUT"||e.parentElement&&e.parentElement.tagName==="ION-INPUT"||((s=(t=e.parentElement)===null||t===void 0?void 0:t.parentElement)===null||s===void 0?void 0:s.tagName)==="ION-SEARCHBAR")return;const n=p(e);if(n===null)return;const r=n[C];r&&clearTimeout(r),o>0?n.style.setProperty("--keyboard-offset",`${o}px`):n[C]=setTimeout(()=>{n.style.setProperty("--keyboard-offset","0px")},120)},j=!0,V=!0,J=(e,o)=>{const t=document,s=o==="ios",n=o==="android",r=e.getNumber("keyboardHeight",290),i=e.getBoolean("scrollAssist",!0),c=e.getBoolean("hideCaretOnScroll",s),d=e.getBoolean("inputBlurring",s),l=e.getBoolean("scrollPadding",!0),u=Array.from(t.querySelectorAll("ion-input, ion-textarea")),v=new WeakMap,S=new WeakMap,m=async a=>{await new Promise(L=>N(a,L));const f=a.shadowRoot||a,h=f.querySelector("input")||f.querySelector("textarea"),w=p(a),T=w?null:a.closest("ion-footer");if(!h)return;if(!!w&&c&&!v.has(a)){const L=F(a,h,w);v.set(a,L)}if(!(h.type==="date"||h.type==="datetime-local")&&(!!w||!!T)&&i&&!S.has(a)){const L=$(a,h,w,T,r,n);S.set(a,L)}},D=a=>{if(c){const f=v.get(a);f&&f(),v.delete(a)}if(i){const f=S.get(a);f&&f(),S.delete(a)}};d&&j&&k(),l&&V&&W(r);for(const a of u)m(a);t.addEventListener("ionInputDidLoad",a=>{m(a.detail)}),t.addEventListener("ionInputDidUnload",a=>{D(a.detail)})};export{J as startInputShims};
