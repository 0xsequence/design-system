import{r as h,j as m}from"./iframe-WewUa6Bl.js";import{T as E}from"./TextInput-Dj10w6J4.js";import"./ControlledTextInput-B6o5MZtP.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./Field-BsAiTMsa.js";import"./Text-B1GdKoPO.js";import"./index-C_WgVH5G.js";import"./classnames-DQzbijWx.js";const S=RegExp("^\\d*(?:\\\\[.])?\\d*$");function y(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function _(t,l){if(l===void 0||!t.includes("."))return t;const[s,i]=t.split(".");return l===0?s:i&&i.length>l?`${s}.${i.slice(0,l)}`:t}const f=h.forwardRef((t,l)=>{const{name:s="amount",placeholder:i,onChange:n,onBlur:g,decimals:c,value:o,...v}=t;h.useEffect(()=>{if(o&&typeof o=="string"&&c!==void 0){const r=_(o,c);if(r!==o){const e={target:{value:r},currentTarget:{value:r}};n==null||n(e)}}},[c,o]);const w=r=>{let{value:e}=r.target;e=e.replace(/,/g,"."),e.startsWith(".")&&(e="0"+e),e.startsWith("0")&&(e=e.replace(/^0+(?=\d)/,"")),(e===""||S.test(y(e)))&&(e=_(e,c),n==null||n({...r,target:{...r.target,value:e}}))},D=r=>{const{value:e}=r.target;let a=e;a.endsWith(".")&&(a=a.slice(0,-1)),a.endsWith(".0")&&(a=a.slice(0,-2)),a==="0"&&(a=""),g==null||g(r),a!==e&&(n==null||n({...r,target:{...r.target,value:a}}))};return m.jsx(E,{name:s,onChange:w,onBlur:D,inputMode:"decimal",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:i||"0",minLength:1,maxLength:79,spellCheck:"false",numeric:!0,value:o,ref:l,...v})});try{y.displayName="escapeRegExp",y.__docgenInfo={description:"",displayName:"escapeRegExp",props:{}}}catch{}try{f.displayName="NumericInput",f.__docgenInfo={description:"",displayName:"NumericInput",props:{decimals:{defaultValue:null,description:"",name:"decimals",required:!1,type:{name:"number"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},labelLocation:{defaultValue:null,description:"",name:"labelLocation",required:!1,type:{name:'"hidden" | "top" | "left" | "right" | null'}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},trailDescription:{defaultValue:null,description:"",name:"trailDescription",required:!1,type:{name:"ReactNode"}},leftIcon:{defaultValue:null,description:"",name:"leftIcon",required:!1,type:{name:"ComponentType<IconProps>"}},rightIcon:{defaultValue:null,description:"",name:"rightIcon",required:!1,type:{name:"ComponentType<IconProps>"}},controls:{defaultValue:null,description:"",name:"controls",required:!1,type:{name:"ReactNode"}}}}}catch{}const M={title:"Forms/NumericInput",component:f},b=t=>{const[l,s]=h.useState("");return m.jsx(m.Fragment,{children:m.jsx(f,{value:l,onChange:i=>s(i.target.value),...t})})},p={render:b,args:{label:"This the label",description:"This is the description",labelLocation:"top"}},u={render:b,args:{label:"Amount (2 decimal places max)",description:"Values with more than 2 decimal places will be truncated. Values automatically adjust when the decimals prop changes. Try pasting: 0.123456",labelLocation:"top",decimals:2}},d={render:b,args:{label:"Integer Only",description:"Decimal values will be truncated to integers. Try pasting: 1.234",labelLocation:"top",decimals:0}};var x,I,V;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    label: 'This the label',
    description: 'This is the description',
    labelLocation: 'top'
  }
}`,...(V=(I=p.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var N,R,T;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    label: 'Amount (2 decimal places max)',
    description: 'Values with more than 2 decimal places will be truncated. Values automatically adjust when the decimals prop changes. Try pasting: 0.123456',
    labelLocation: 'top',
    decimals: 2
  }
}`,...(T=(R=u.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var q,L,W;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    label: 'Integer Only',
    description: 'Decimal values will be truncated to integers. Try pasting: 1.234',
    labelLocation: 'top',
    decimals: 0
  }
}`,...(W=(L=d.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};const z=["Default","WithDecimalRestriction","IntegerOnly"];export{p as Default,d as IntegerOnly,u as WithDecimalRestriction,z as __namedExportsOrder,M as default};
