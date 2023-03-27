import{j as $}from"./jsx-runtime-a9c13c85.js";import{$ as V,b as v,_ as m}from"./index.module-93053fc6.js";import{r as l}from"./index-d8ade8ea.js";import{B as p}from"./Box-267ea0e2.js";const g="Progress",d=100,[y,T]=V(g),[N,E]=y(g),b=l.forwardRef((e,r)=>{const{__scopeProgress:t,value:a,max:o,getValueLabel:s=w,..._}=e,i=c(o)?o:d,n=P(a,i)?a:null,h=u(n)?s(n,i):void 0;return l.createElement(N,{scope:t,value:n,max:i},l.createElement(v.div,m({"aria-valuemax":i,"aria-valuemin":0,"aria-valuenow":u(n)?n:void 0,"aria-valuetext":h,role:"progressbar","data-state":x(n,i),"data-value":n??void 0,"data-max":i},_,{ref:r})))});b.propTypes={max(e,r,t){const a=e[r],o=String(a);return a&&!c(a)?new Error(L(o,t)):null},value(e,r,t){const a=e[r],o=String(a),s=c(e.max)?e.max:d;return a!=null&&!P(a,s)?new Error(S(o,t)):null}};const k="ProgressIndicator",D=l.forwardRef((e,r)=>{var t;const{__scopeProgress:a,...o}=e,s=E(k,a);return l.createElement(v.div,m({"data-state":x(s.value,s.max),"data-value":(t=s.value)!==null&&t!==void 0?t:void 0,"data-max":s.max},o,{ref:r}))});function w(e,r){return`${Math.round(e/r*100)}%`}function x(e,r){return e==null?"indeterminate":e===r?"complete":"loading"}function u(e){return typeof e=="number"}function c(e){return u(e)&&!isNaN(e)&&e>0}function P(e,r){return u(e)&&!isNaN(e)&&e<=r&&e>=0}function L(e,r){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${d}\`.`}function S(e,r){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${d} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`}const I=b,f=e=>{const{value:r,color:t="positive"}=e,a=r*100;return $(p,{as:I,value:a,borderRadius:"circle",background:"backgroundPrimary",width:"full",height:"1",overflow:"hidden",position:"relative",children:$(p,{as:D,style:{width:`${a}%`,transition:"width 660ms cubic-bezier(0.65, 0, 0.35, 1)",backgroundSize:"300% 100%"},height:"full",borderRadius:"circle",background:t})})};try{f.displayName="Progress",f.__docgenInfo={description:"",displayName:"Progress",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 28 more ...; transparent: "transparent"; }, CSSVarFunction>, { ...; }>>'}}}}}catch{}export{f as P};
//# sourceMappingURL=Progress-5f4995de.js.map
