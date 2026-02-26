import{r as i,j as e}from"./iframe-BBMF4_Co.js";import{l as D,b as A,y as P,z as O}from"./YoutubeIcon-BKceRl2c.js";import"./SearchIcon-25ZybBlU.js";import{C as B}from"./Card-CWZeYukv.js";import{b as q}from"./classnames-DhbneTZY.js";import{B as z}from"./Button-CSQJ1WJf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BcWdqSRI.js";import"./index-CDvyhB7W.js";import"./styles-B8EbM403.js";import"./Text-8ROiINqS.js";function L(t,a){const[s,n]=i.useState(t?"entered":"exited"),l=i.useRef(t),r=i.useRef(null);return i.useEffect(()=>{l.current!==t&&(n(t?o=>o==="entering"||o==="entered"?o:"entering":o=>o==="exiting"||o==="exited"?o:"exiting"),l.current=t)},[t]),i.useEffect(()=>{const o=r.current;if(!o)return;const v=m=>{m.target===o&&m.propertyName===a&&n(c=>c==="entering"?"entered":c==="exiting"?"exited":c)};return o.addEventListener("transitionend",v),()=>o.removeEventListener("transitionend",v)},[a]),{state:s,ref:r,attributes:{"data-entering":s==="entering"?"":void 0,"data-entered":s==="entered"?"":void 0,"data-exiting":s==="exiting"?"":void 0,"data-exited":s==="exited"?"":void 0,"data-transition":s}}}const V=i.createContext(null);function C(){const t=i.useContext(V);if(!t)throw new Error("useCarousel must be used within the CarouselContext");return t}function f({children:t,duration:a=4e3,className:s}){const[n,l]=i.useState(0),[r,d]=i.useState(0),[o,v]=i.useState(!1),[m,c]=i.useState("rtl");function I(u){d(k=>{let p=u;return u>n-1?p=0:u<0&&(p=n-1),k===n-1&&p===0?c("rtl"):k===0&&p===n-1?c("ltr"):c(p<k?"ltr":"rtl"),p})}function b(){d(u=>(c("rtl"),u===n-1?0:u+1))}function E(){d(u=>(c("ltr"),u===0?n-1:u-1))}const w=a>0;return i.useEffect(()=>{if(!w||o)return;const u=setInterval(()=>{b()},a);return()=>{clearInterval(u)}},[w,o,a,r,b]),e.jsx(V.Provider,{value:{nextSlide:b,prevSlide:E,setSlide:I,isPaused:o,setPaused:v,autoAdvance:w,duration:a,totalSlides:n,setTotalSlides:l,currentSlide:r,direction:m},children:e.jsx("div",{"data-slot":"carousel",role:"region","aria-roledescription":"carousel",className:q(s),style:{"--duration":`${a}ms`},children:t})})}function y({children:t}){const{setPaused:a,setTotalSlides:s}=C(),n=i.Children.toArray(t).filter(r=>i.isValidElement(r)&&r.type===x).map((r,d)=>i.isValidElement(r)?i.cloneElement(r,{index:d}):r),l=n.length;return i.useEffect(()=>{s(l)},[s,l]),e.jsx("div",{"data-slot":"carousel-deck",className:"relative z-2 grid-stack rounded-3xl focus-within:ring-2 ring-black",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),onFocus:()=>a(!0),onBlur:()=>a(!1),children:n})}function x({children:t,className:a,index:s=0}){const{direction:n,currentSlide:l}=C(),{ref:r,attributes:d}=L(l===s,"opacity");return e.jsx("div",{inert:l!==s||void 0,"data-index":s,"data-slot":"carousel-slide","data-current":l===s||void 0,"data-ltr":n==="ltr"||void 0,className:q(`
        transition-[translate,opacity] duration-300 text-end
        data-entering:opacity-100 data-entering:translate-x-0
        data-entered:opacity-100 data-entered:translate-x-0
        data-exiting:opacity-0 data-exiting:-translate-x-16 data-ltr:data-exiting:translate-x-16
        data-exited:opacity-0 data-exited:translate-x-16 data-ltr:data-exited:-translate-x-16 data-exited:transition-none!
        opacity-0 translate-x-16 data-ltr:not-current:-translate-x-16
        z-1 inert:z-0
      `,a),ref:r,...d,children:t})}function g({children:t,variant:a="secondary",shape:s="circle",size:n="md",...l}){const{prevSlide:r}=C();return e.jsx(z,{"data-slot":"carousel-prev-button",variant:a,shape:s,size:n,onClick:r,iconOnly:!0,...l,children:t||e.jsx(D,{})})}function h({children:t,variant:a="secondary",shape:s="circle",size:n="md",...l}){const{nextSlide:r}=C();return e.jsx(z,{"data-slot":"carousel-next-button",variant:a,shape:s,size:n,onClick:r,iconOnly:!0,...l,children:t||e.jsx(A,{})})}function S({hidden:t,className:a}){const{autoAdvance:s,setPaused:n,setSlide:l,isPaused:r,totalSlides:d,currentSlide:o}=C();return console.log(d),e.jsx("div",{className:q("flex gap-2 justify-center items-center mx-auto inert:overflow-clip inert:absolute inert:opacity-0",a),inert:t||void 0,"data-slot":"carousel-status",onFocus:()=>n(!0),onBlur:()=>n(!1),children:Array.from({length:d}).map((v,m)=>e.jsx(R,{index:m,isPaused:r,current:o===m,autoAdvance:s,onChangeSlide:l},m))})}function R({current:t,index:a,isPaused:s,autoAdvance:n,onChangeSlide:l}){const[r,d]=i.useState(!1);return i.useEffect(()=>{requestAnimationFrame(()=>{d(t)})},[t]),e.jsxs("label",{"data-slot":"carousel-status-dot","data-index":a,className:"grid-stack size-2.5 data-auto-advance:data-current:w-6 transition-all rounded-full bg-background-inverse/20 overflow-clip has-[:focus-visible]:outline-2 outline-offset-1 has-[:focus-visible]:outline-border-focus cursor-pointer","data-current":r||void 0,"data-auto-advance":n||void 0,children:[e.jsx("div",{className:"pointer-events-none in-data-current:opacity-100 opacity-0 transition-transform size-full ease-linear bg-background-inverse not-in-data-current:duration-1 data-pause:duration-300 rounded-full duration-(--duration) in-data-current:translate-x-6 data-pause:translate-x-0","data-slide-id":a,"data-pause":!n||s||void 0}),e.jsx("input",{type:"radio",value:`Slide ${a+1}`,name:"current-slide",onChange:()=>l(a),className:"sr-only",tabIndex:r?0:-1,checked:t})]})}try{f.displayName="Carousel",f.__docgenInfo={description:"",displayName:"Carousel",props:{duration:{defaultValue:{value:"4000"},description:"",name:"duration",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{y.displayName="CarouselDeck",y.__docgenInfo={description:"",displayName:"CarouselDeck",props:{}}}catch{}try{h.displayName="CarouselNextButton",h.__docgenInfo={description:"",displayName:"CarouselNextButton",props:{variant:{defaultValue:{value:"secondary"},description:"",name:"variant",required:!1,type:{name:'"primary" | "secondary" | "text" | "destructive" | "outline" | "ghost" | "emphasis" | null'}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | null'}},shape:{defaultValue:{value:"circle"},description:"",name:"shape",required:!1,type:{name:'"circle" | "square" | null'}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean | null"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{g.displayName="CarouselPrevButton",g.__docgenInfo={description:"",displayName:"CarouselPrevButton",props:{variant:{defaultValue:{value:"secondary"},description:"",name:"variant",required:!1,type:{name:'"primary" | "secondary" | "text" | "destructive" | "outline" | "ghost" | "emphasis" | null'}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | null'}},shape:{defaultValue:{value:"circle"},description:"",name:"shape",required:!1,type:{name:'"circle" | "square" | null'}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean | null"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{x.displayName="CarouselSlide",x.__docgenInfo={description:"",displayName:"CarouselSlide",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},index:{defaultValue:{value:"0"},description:"",name:"index",required:!1,type:{name:"number"}}}}}catch{}try{S.displayName="CarouselStatus",S.__docgenInfo={description:"",displayName:"CarouselStatus",props:{hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const X={title:"Components/Carousel",component:f},N={render:()=>e.jsx(f,{duration:4e3,children:e.jsxs("div",{className:"w-full flex flex-col items-center flex-1 justify-center gap-4",children:[e.jsxs("div",{className:"max-w-3xl w-full flex flex-col gap-4",children:[e.jsxs("div",{className:"flex justify-between gap-4 w-full items-center",children:[e.jsx("h2",{className:"text-20 font-bold",children:"Default Carousel"}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(g,{}),e.jsx(h,{})]})]}),e.jsx(y,{children:Array.from({length:5}).map((t,a)=>e.jsx(x,{children:e.jsx("div",{className:"p-1",children:e.jsx(B,{className:"flex aspect-video items-center justify-center p-6",children:e.jsx("span",{className:"text-4xl font-semibold",children:a+1})})})},a))})]}),e.jsx(S,{})]})}),args:{}},j={render:()=>e.jsxs(f,{duration:4e3,className:"relative",children:[e.jsx(g,{className:"absolute left-4 top-1/2 -translate-y-1/2 z-3"}),e.jsx(y,{children:Array.from({length:5}).map((t,a)=>e.jsx(x,{children:e.jsx(B,{variant:"muted",className:"flex aspect-video items-center justify-center p-6",children:e.jsx("span",{className:"text-4xl font-semibold",children:a+1})})},a))}),e.jsx(h,{className:"absolute right-4 top-1/2 -translate-y-1/2 z-3"})]}),args:{}},_={render:()=>e.jsx(f,{duration:4e3,children:e.jsxs("div",{className:"w-full flex flex-col items-center flex-1 justify-center gap-4",children:[e.jsx("div",{className:"max-w-lg w-full",children:e.jsx(y,{children:Array.from({length:7}).map((t,a)=>e.jsx(x,{children:e.jsx("div",{className:"p-1",children:e.jsx(B,{className:"flex aspect-video items-center justify-center p-6",children:e.jsx("span",{className:"text-4xl font-semibold",children:a+1})})})},a))})}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(g,{variant:"ghost",size:"xs",children:e.jsx(P,{})}),e.jsx(S,{}),e.jsx(h,{variant:"ghost",size:"xs",children:e.jsx(O,{})})]})]})}),args:{}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Carousel duration={4000}>
        <div className="w-full flex flex-col items-center flex-1 justify-center gap-4">
          <div className="max-w-3xl w-full flex flex-col gap-4">
            <div className="flex justify-between gap-4 w-full items-center">
              <h2 className="text-20 font-bold">Default Carousel</h2>

              <div className="flex gap-4 items-center">
                <CarouselPrevButton />
                <CarouselNextButton />
              </div>
            </div>
            <CarouselDeck>
              {Array.from({
              length: 5
            }).map((_, index) => <CarouselSlide key={index}>
                  <div className="p-1">
                    <Card className="flex aspect-video items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </Card>
                  </div>
                </CarouselSlide>)}
            </CarouselDeck>
          </div>
          <CarouselStatus />
        </div>
      </Carousel>;
  },
  args: {}
}`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Carousel duration={4000} className="relative">
        <CarouselPrevButton className="absolute left-4 top-1/2 -translate-y-1/2 z-3" />
        <CarouselDeck>
          {Array.from({
          length: 5
        }).map((_, index) => <CarouselSlide key={index}>
              <Card variant="muted" className="flex aspect-video items-center justify-center p-6">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </Card>
            </CarouselSlide>)}
        </CarouselDeck>
        <CarouselNextButton className="absolute right-4 top-1/2 -translate-y-1/2 z-3" />
      </Carousel>;
  },
  args: {}
}`,...j.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Carousel duration={4000}>
        <div className="w-full flex flex-col items-center flex-1 justify-center gap-4">
          <div className="max-w-lg w-full">
            <CarouselDeck>
              {Array.from({
              length: 7
            }).map((_, index) => <CarouselSlide key={index}>
                  <div className="p-1">
                    <Card className="flex aspect-video items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </Card>
                  </div>
                </CarouselSlide>)}
            </CarouselDeck>
          </div>
          <div className="flex gap-4 items-center">
            <CarouselPrevButton variant="ghost" size="xs">
              <ChevronLeftIcon />
            </CarouselPrevButton>
            <CarouselStatus />
            <CarouselNextButton variant="ghost" size="xs">
              <ChevronRightIcon />
            </CarouselNextButton>
          </div>
        </div>
      </Carousel>;
  },
  args: {}
}`,..._.parameters?.docs?.source}}};const Y=["Default","SideButtons","Small"];export{N as Default,j as SideButtons,_ as Small,Y as __namedExportsOrder,X as default};
