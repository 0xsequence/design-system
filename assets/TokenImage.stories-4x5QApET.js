import{j as s}from"./jsx-runtime-z8MfsBtr.js";import{c as j}from"./index-DKHC-OhD.js";import{r as E}from"./index-D1TSixAU.js";import{c as n}from"./classnames-D6E8UiG_.js";import{N as S}from"./NetworkImage-CKxFRbQ4.js";import{T as W}from"./Text-BQ_5oice.js";import{I as v}from"./Image-BXS02Vgw.js";import"./index-C9rmetsa.js";import"./clsx-B-dksMZM.js";import"./index-DEvaI7vP.js";import"./proxy-DNmaJl8h.js";const d="40%",p="-2%",q=j(["relative","flex","items-center","justify-center","shrink-0"],{variants:{size:{xs:"w-3 h-3 text-[4px]",sm:"w-5 h-5 text-[6px]",md:"w-8 h-8 text-[9px]",lg:"w-10 h-10 text-[11px]",xl:"w-16 h-16 text-[16px]"}},defaultVariants:{size:"md"}}),u="[mask-image:radial-gradient(circle_at_82%_82%,transparent_22%,black_0)]",i=E.memo(m=>{const{className:I,disableAnimation:c=!1,style:N,src:l,symbol:o,size:z="md",withNetwork:e,...T}=m;return s.jsxs("div",{className:n(q({size:z}),I),style:N,...T,children:[l?s.jsx(v,{className:n("rounded-full max-w-full max-h-full object-cover w-full overflow-hidden",e&&u),disableAnimation:c,src:l}):s.jsx(W,{className:n("bg-background-secondary rounded-full w-full h-full flex items-center justify-center overflow-hidden text-inherit",e&&u),variant:"inherit",fontWeight:"medium",color:"muted",uppercase:!0,children:o==null?void 0:o.replace(/\s/,"").slice(0,4)}),e&&s.jsx(S,{chainId:e,className:"absolute z-1",disableAnimation:c,style:{width:d,height:d,right:p,bottom:p}})]})});try{i.displayName="TokenImage",i.__docgenInfo={description:"",displayName:"TokenImage",props:{disableAnimation:{defaultValue:null,description:"",name:"disableAnimation",required:!1,type:{name:"boolean"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},symbol:{defaultValue:null,description:"",name:"symbol",required:!1,type:{name:"string"}},withNetwork:{defaultValue:null,description:"",name:"withNetwork",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | "xs" | "xl" | null'}}}}}catch{}const Z={title:"Components/TokenImage",component:i},a={args:{size:"lg",src:"https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912"}},t={args:{size:"lg",symbol:"SCAM"}},r={args:{symbol:"USDC",size:"lg",src:"https://assets.sequence.info/images/tokens/medium/137/0x2791bca1f2de4661ed88a30c99a7a9449aa84174.webp",withNetwork:137}};var g,f,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    src: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912'
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,w,k;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    symbol: 'SCAM'
  }
}`,...(k=(w=t.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var b,_,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    symbol: 'USDC',
    size: 'lg',
    src: 'https://assets.sequence.info/images/tokens/medium/137/0x2791bca1f2de4661ed88a30c99a7a9449aa84174.webp',
    withNetwork: 137
  }
}`,...(y=(_=r.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};const B=["WithImage","WithoutImage","WithNetwork"];export{a as WithImage,r as WithNetwork,t as WithoutImage,B as __namedExportsOrder,Z as default};
