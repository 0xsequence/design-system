import{r as j,j as s}from"./iframe-4jdeRta1.js";import{c as E}from"./index-Dp3B9jqt.js";import{c as n}from"./classnames-CzI9s_aO.js";import{I as S}from"./Image-DDqXYKbT.js";import{N as W}from"./NetworkImage-Cd4vIZNy.js";import{T as v}from"./Text-DZp5baOb.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./proxy-aPoHd49G.js";import"./index-DPmhm0QD.js";const d="40%",p="-2%",q=E(["relative","flex","items-center","justify-center","shrink-0"],{variants:{size:{xs:"size-3 text-[4px]",sm:"size-5 text-[6px]",md:"size-8 text-[9px]",lg:"size-10 text-[11px]",xl:"size-16 text-[16px]"}},defaultVariants:{size:"md"}}),u="[mask-image:radial-gradient(circle_at_82%_82%,transparent_22%,black_0)]",i=j.memo(m=>{const{className:N,style:b,src:c,symbol:o,size:z="md",withNetwork:e,fadeIn:l,...T}=m;return s.jsxs("div",{className:n(q({size:z}),N),style:b,...T,children:[c?s.jsx(S,{className:n("rounded-full max-w-full max-h-full object-cover w-full overflow-hidden",e&&u),fadeIn:l,src:c}):s.jsx(v,{className:n("bg-background-secondary rounded-full w-full h-full flex items-center justify-center overflow-hidden",e&&u),variant:"inherit",fontWeight:"medium",color:"muted",uppercase:!0,children:o==null?void 0:o.replace(/\s/,"").slice(0,4)}),e&&s.jsx(W,{chainId:e,className:"absolute z-1",fadeIn:l,style:{width:d,height:d,right:p,bottom:p}})]})});try{i.displayName="TokenImage",i.__docgenInfo={description:"",displayName:"TokenImage",props:{src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},symbol:{defaultValue:null,description:"",name:"symbol",required:!1,type:{name:"string"}},withNetwork:{defaultValue:null,description:"",name:"withNetwork",required:!1,type:{name:"number"}},fadeIn:{defaultValue:null,description:"",name:"fadeIn",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | "xs" | "xl" | null'}}}}}catch{}const U={title:"Components/TokenImage",component:i},a={args:{size:"lg",src:"https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912"}},t={args:{size:"lg",symbol:"SCAM"}},r={args:{symbol:"USDC",size:"lg",src:"https://assets.sequence.info/images/tokens/medium/137/0x2791bca1f2de4661ed88a30c99a7a9449aa84174.webp",withNetwork:137}};var g,f,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    src: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912'
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,k,w;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    symbol: 'SCAM'
  }
}`,...(w=(k=t.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var I,_,y;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    symbol: 'USDC',
    size: 'lg',
    src: 'https://assets.sequence.info/images/tokens/medium/137/0x2791bca1f2de4661ed88a30c99a7a9449aa84174.webp',
    withNetwork: 137
  }
}`,...(y=(_=r.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};const Z=["WithImage","WithoutImage","WithNetwork"];export{a as WithImage,r as WithNetwork,t as WithoutImage,Z as __namedExportsOrder,U as default};
