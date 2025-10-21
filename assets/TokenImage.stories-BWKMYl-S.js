import{r as k,j as s}from"./iframe-CXXZZJqO.js";import{a as w}from"./index-jbG8BFt3.js";import{c as o}from"./classnames-By7m_D43.js";import{I as y}from"./Image-CPVkRlYX.js";import{N as I}from"./NetworkImage-D70Z3IYr.js";import{T as _}from"./Text-gsUq4eMD.js";import"./preload-helper-PPVm8Dsz.js";import"./proxy-DiQYc7-E.js";import"./index-DgpCyxu5.js";const l="40%",d="-2%",b=w(["relative","flex","items-center","justify-center","shrink-0"],{variants:{size:{xs:"size-3 text-[4px]",sm:"size-5 text-[6px]",md:"size-8 text-[9px]",lg:"size-10 text-[11px]",xl:"size-16 text-[16px]"}},defaultVariants:{size:"md"}}),p="[mask-image:radial-gradient(circle_at_82%_82%,transparent_22%,black_0)]",n=k.memo(i=>{const{className:u,style:g,src:m,symbol:f,size:h="md",withNetwork:e,fadeIn:c,...x}=i;return s.jsxs("div",{className:o(b({size:h}),u),style:g,...x,children:[m?s.jsx(y,{className:o("rounded-full max-w-full max-h-full object-cover w-full overflow-hidden",e&&p),fadeIn:c,src:m}):s.jsx(_,{className:o("bg-background-secondary rounded-full w-full h-full flex items-center justify-center overflow-hidden",e&&p),variant:"inherit",fontWeight:"medium",color:"muted",uppercase:!0,children:f?.replace(/\s/,"").slice(0,4)}),e&&s.jsx(I,{chainId:e,className:"absolute z-1",fadeIn:c,style:{width:l,height:l,right:d,bottom:d}})]})});try{n.displayName="TokenImage",n.__docgenInfo={description:"",displayName:"TokenImage",props:{src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},symbol:{defaultValue:null,description:"",name:"symbol",required:!1,type:{name:"string"}},withNetwork:{defaultValue:null,description:"",name:"withNetwork",required:!1,type:{name:"number"}},fadeIn:{defaultValue:null,description:"",name:"fadeIn",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | "xs" | "xl" | null'}}}}}catch{}const V={title:"Components/TokenImage",component:n},a={args:{size:"lg",src:"https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912"}},t={args:{size:"lg",symbol:"SCAM"}},r={args:{symbol:"USDC",size:"lg",src:"https://assets.sequence.info/images/tokens/medium/137/0x2791bca1f2de4661ed88a30c99a7a9449aa84174.webp",withNetwork:137}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    src: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    symbol: 'SCAM'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    symbol: 'USDC',
    size: 'lg',
    src: 'https://assets.sequence.info/images/tokens/medium/137/0x2791bca1f2de4661ed88a30c99a7a9449aa84174.webp',
    withNetwork: 137
  }
}`,...r.parameters?.docs?.source}}};const C=["WithImage","WithoutImage","WithNetwork"];export{a as WithImage,r as WithNetwork,t as WithoutImage,C as __namedExportsOrder,V as default};
