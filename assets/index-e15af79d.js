import{r as e}from"./index-d8ade8ea.js";import{u as M,s as b,a as F,P as $,w as A,L as O,b as U,e as K}from"./motion-bd85eac6.js";function P(){const r=e.useRef(!1);return M(()=>(r.current=!0,()=>{r.current=!1}),[]),r}function S(){const r=P(),[o,t]=e.useState(0),n=e.useCallback(()=>{r.current&&t(o+1)},[o]);return[e.useCallback(()=>b.postRender(n),[n]),o]}class T extends e.Component{getSnapshotBeforeUpdate(o){const t=this.props.childRef.current;if(t&&o.isPresent&&!this.props.isPresent){const n=this.props.sizeRef.current;n.height=t.offsetHeight||0,n.width=t.offsetWidth||0,n.top=t.offsetTop,n.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function B({children:r,isPresent:o}){const t=e.useId(),n=e.useRef(null),m=e.useRef({width:0,height:0,top:0,left:0});return e.useInsertionEffect(()=>{const{width:f,height:u,top:c,left:h}=m.current;if(o||!n.current||!f||!u)return;n.current.dataset.motionPopId=t;const l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${u}px !important;
            top: ${c}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[o]),e.createElement(T,{isPresent:o,childRef:n,sizeRef:m},e.cloneElement(r,{ref:n}))}const y=({children:r,initial:o,isPresent:t,onExitComplete:n,custom:m,presenceAffectsLayout:f,mode:u})=>{const c=F(G),h=e.useId(),l=e.useMemo(()=>({id:h,initial:o,isPresent:t,custom:m,onExitComplete:a=>{c.set(a,!0);for(const i of c.values())if(!i)return;n&&n()},register:a=>(c.set(a,!1),()=>c.delete(a))}),f?void 0:[t]);return e.useMemo(()=>{c.forEach((a,i)=>c.set(i,!1))},[t]),e.useEffect(()=>{!t&&!c.size&&n&&n()},[t]),u==="popLayout"&&(r=e.createElement(B,{isPresent:t},r)),e.createElement($.Provider,{value:l},r)};function G(){return new Map}const R=r=>r.key||"";function D(r,o){r.forEach(t=>{const n=R(t);o.set(n,t)})}function H(r){const o=[];return e.Children.forEach(r,t=>{e.isValidElement(t)&&o.push(t)}),o}const Y=({children:r,custom:o,initial:t=!0,onExitComplete:n,exitBeforeEnter:m,presenceAffectsLayout:f=!0,mode:u="sync"})=>{m&&(u="wait",A(!1,"Replace exitBeforeEnter with mode='wait'"));let[c]=S();const h=e.useContext(O).forceRender;h&&(c=h);const l=P(),a=H(r);let i=a;const d=new Set,E=e.useRef(i),C=e.useRef(new Map).current,w=e.useRef(!0);if(M(()=>{w.current=!1,D(a,C),E.current=i}),U(()=>{w.current=!0,C.clear(),d.clear()}),w.current)return e.createElement(e.Fragment,null,i.map(s=>e.createElement(y,{key:R(s),isPresent:!0,initial:t?void 0:!1,presenceAffectsLayout:f,mode:u},s)));i=[...i];const x=E.current.map(R),g=a.map(R),I=x.length;for(let s=0;s<I;s++){const p=x[s];g.indexOf(p)===-1&&d.add(p)}return u==="wait"&&d.size&&(i=[]),d.forEach(s=>{if(g.indexOf(s)!==-1)return;const p=C.get(s);if(!p)return;const v=x.indexOf(s),z=()=>{C.delete(s),d.delete(s);const L=E.current.findIndex(k=>k.key===s);if(E.current.splice(L,1),!d.size){if(E.current=a,l.current===!1)return;c(),n&&n()}};i.splice(v,0,e.createElement(y,{key:R(p),isPresent:!1,onExitComplete:z,custom:o,presenceAffectsLayout:f,mode:u},p))}),i=i.map(s=>{const p=s.key;return d.has(p)?s:e.createElement(y,{key:R(s),isPresent:!0,presenceAffectsLayout:f,mode:u},s)}),K!=="production"&&u==="wait"&&i.length>1&&console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`),e.createElement(e.Fragment,null,d.size?i:i.map(s=>e.cloneElement(s)))};export{Y as A};
//# sourceMappingURL=index-e15af79d.js.map
