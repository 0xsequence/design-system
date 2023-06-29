import{j as m}from"./jsx-runtime-5c44f2f2.js";import{a as D,c as b,_}from"./index-bfc13c15.js";import{r as l}from"./index-32f9f3e1.js";import{B as g}from"./Box-403628ef.js";import"./index-81ed4395.js";/* empty css                            */const P="Progress",c=100,[k,F]=D(P),[S,w]=k(P),h=l.forwardRef((e,r)=>{const{__scopeProgress:t,value:a,max:n,getValueLabel:s=R,...V}=e,i=p(n)?n:c,o=E(a,i)?a:null,N=d(o)?s(o,i):void 0;return l.createElement(S,{scope:t,value:o,max:i},l.createElement(b.div,_({"aria-valuemax":i,"aria-valuemin":0,"aria-valuenow":d(o)?o:void 0,"aria-valuetext":N,role:"progressbar","data-state":y(o,i),"data-value":o??void 0,"data-max":i},V,{ref:r})))});h.propTypes={max(e,r,t){const a=e[r],n=String(a);return a&&!p(a)?new Error(M(n,t)):null},value(e,r,t){const a=e[r],n=String(a),s=p(e.max)?e.max:c;return a!=null&&!E(a,s)?new Error(C(n,t)):null}};const L="ProgressIndicator",I=l.forwardRef((e,r)=>{var t;const{__scopeProgress:a,...n}=e,s=w(L,a);return l.createElement(b.div,_({"data-state":y(s.value,s.max),"data-value":(t=s.value)!==null&&t!==void 0?t:void 0,"data-max":s.max},n,{ref:r}))});function R(e,r){return`${Math.round(e/r*100)}%`}function y(e,r){return e==null?"indeterminate":e===r?"complete":"loading"}function d(e){return typeof e=="number"}function p(e){return d(e)&&!isNaN(e)&&e>0}function E(e,r){return d(e)&&!isNaN(e)&&e<=r&&e>=0}function M(e,r){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${c}\`.`}function C(e,r){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${c} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`}const A=h,$=e=>{const{value:r,color:t="positive"}=e,a=r*100;return m.jsx(g,{as:A,value:a,borderRadius:"circle",background:"backgroundPrimary",width:"full",height:"1",overflow:"hidden",position:"relative",children:m.jsx(g,{as:I,style:{width:`${a}%`,transition:"width 660ms cubic-bezier(0.65, 0, 0.35, 1)",backgroundSize:"300% 100%"},height:"full",borderRadius:"circle",background:t})})};try{$.displayName="Progress",$.__docgenInfo={description:"",displayName:"Progress",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 30 more ...; transparent: "transparent"; }, CSSVarFunction>, { ...; }>>'}}}}}catch{}const G={title:"Components/Progress",component:$,argTypes:{value:{control:{type:"range",min:0,max:1,step:.1}}}},u={args:{value:.5}};var f,v,x;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: 0.5
  }
}`,...(x=(v=u.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const U=["Default"];export{u as Default,U as __namedExportsOrder,G as default};
//# sourceMappingURL=Progress.stories-a462a4c1.js.map
