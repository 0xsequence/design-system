import{r as i,j as e}from"./iframe-gc0R0tdm.js";import{r as D,a as z,D as A,E as P}from"./YoutubeIcon-C-yMw-Ut.js";import"./SearchIcon-Dgq3blqC.js";import{C as k}from"./Card-D6AwI0cd.js";import{b as q}from"./index-Cn1xQXcm.js";import{B as V}from"./Button-D1WPboKF.js";import"./preload-helper-PPVm8Dsz.js";import"./index--dA_Jfmr.js";import"./index-C0mxVCnv.js";import"./styles-DSBOcsIh.js";import"./Text-DqwRyWG_.js";function O(t,a){const[r,n]=i.useState(t?"entered":"exited"),l=i.useRef(t),s=i.useRef(null);return i.useEffect(()=>{l.current!==t&&(n(t?o=>o==="entering"||o==="entered"?o:"entering":o=>o==="exiting"||o==="exited"?o:"exiting"),l.current=t)},[t]),i.useEffect(()=>{const o=s.current;if(!o)return;const p=m=>{m.target===o&&m.propertyName===a&&n(c=>c==="entering"?"entered":c==="exiting"?"exited":c)};return o.addEventListener("transitionend",p),()=>o.removeEventListener("transitionend",p)},[a]),{state:r,ref:s,attributes:{"data-entering":r==="entering"?"":void 0,"data-entered":r==="entered"?"":void 0,"data-exiting":r==="exiting"?"":void 0,"data-exited":r==="exited"?"":void 0,"data-transition":r}}}const E=i.createContext(null);function y(){const t=i.useContext(E);if(!t)throw new Error("useCarousel must be used within the CarouselContext");return t}function x({children:t,duration:a=4e3,className:r}){const[n,l]=i.useState(0),[s,d]=i.useState(0),[o,p]=i.useState(!1),[m,c]=i.useState("rtl");function I(u){d(w=>{let f=u;return u>n-1?f=0:u<0&&(f=n-1),w===n-1&&f===0?c("rtl"):w===0&&f===n-1?c("ltr"):c(f<w?"ltr":"rtl"),f})}function S(){d(u=>(c("rtl"),u===n-1?0:u+1))}function B(){d(u=>(c("ltr"),u===0?n-1:u-1))}const b=a>0;return i.useEffect(()=>{if(!b||o)return;const u=setInterval(()=>{S()},a);return()=>{clearInterval(u)}},[b,o,a,s,S]),e.jsx(E.Provider,{value:{nextSlide:S,prevSlide:B,setSlide:I,isPaused:o,setPaused:p,autoAdvance:b,duration:a,totalSlides:n,setTotalSlides:l,currentSlide:s,direction:m},children:e.jsx("div",{"data-slot":"carousel",role:"region","aria-roledescription":"carousel",className:q(r),style:{"--duration":`${a}ms`},children:t})})}function C({children:t}){const{setPaused:a,setTotalSlides:r}=y(),n=i.Children.toArray(t).filter(s=>i.isValidElement(s)&&s.type===v).map((s,d)=>i.isValidElement(s)?i.cloneElement(s,{index:d}):s),l=n.length;return i.useEffect(()=>{r(l)},[r,l]),e.jsx("div",{"data-slot":"carousel-deck",className:"relative z-2 grid-stack rounded-3xl focus-within:ring-2 ring-black",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),onFocus:()=>a(!0),onBlur:()=>a(!1),children:n})}function v({children:t,className:a,index:r=0}){const{direction:n,currentSlide:l}=y(),{ref:s,attributes:d}=O(l===r,"opacity");return e.jsx("div",{inert:l!==r||void 0,"data-index":r,"data-slot":"carousel-slide","data-current":l===r||void 0,"data-ltr":n==="ltr"||void 0,className:q(`
        transition-[translate,opacity] duration-300 text-end
        data-entering:opacity-100 data-entering:translate-x-0
        data-entered:opacity-100 data-entered:translate-x-0
        data-exiting:opacity-0 data-exiting:-translate-x-16 data-ltr:data-exiting:translate-x-16
        data-exited:opacity-0 data-exited:translate-x-16 data-ltr:data-exited:-translate-x-16 data-exited:transition-none!
        opacity-0 translate-x-16 data-ltr:not-current:-translate-x-16
        z-1 inert:z-0
      `,a),ref:s,...d,children:t})}function N({children:t,variant:a="secondary",shape:r="circle",size:n="md",...l}){const{prevSlide:s}=y();return e.jsx(V,{"data-slot":"carousel-prev-button",variant:a,shape:r,size:n,onClick:s,iconOnly:!0,...l,children:t||e.jsx(D,{})})}function _({children:t,variant:a="secondary",shape:r="circle",size:n="md",...l}){const{nextSlide:s}=y();return e.jsx(V,{"data-slot":"carousel-next-button",variant:a,shape:r,size:n,onClick:s,iconOnly:!0,...l,children:t||e.jsx(z,{})})}function j({hidden:t,className:a}){const{autoAdvance:r,setPaused:n,setSlide:l,isPaused:s,totalSlides:d,currentSlide:o}=y();return console.log(d),e.jsx("div",{className:q("flex gap-2 justify-center items-center mx-auto inert:overflow-clip inert:absolute inert:opacity-0",a),inert:t||void 0,"data-slot":"carousel-status",onFocus:()=>n(!0),onBlur:()=>n(!1),children:Array.from({length:d}).map((p,m)=>e.jsx(L,{index:m,isPaused:s,current:o===m,autoAdvance:r,onChangeSlide:l},m))})}function L({current:t,index:a,isPaused:r,autoAdvance:n,onChangeSlide:l}){const[s,d]=i.useState(!1);return i.useEffect(()=>{requestAnimationFrame(()=>{d(t)})},[t]),e.jsxs("label",{"data-slot":"carousel-status-dot","data-index":a,className:"grid-stack size-2.5 data-auto-advance:data-current:w-6 transition-all rounded-full bg-background-inverse/20 overflow-clip has-[:focus-visible]:outline-2 outline-offset-1 has-[:focus-visible]:outline-border-focus cursor-pointer","data-current":s||void 0,"data-auto-advance":n||void 0,children:[e.jsx("div",{className:"pointer-events-none in-data-current:opacity-100 opacity-0 transition-transform size-full ease-linear bg-background-inverse not-in-data-current:duration-1 data-pause:duration-300 rounded-full duration-(--duration) in-data-current:translate-x-6 data-pause:translate-x-0","data-slide-id":a,"data-pause":!n||r||void 0}),e.jsx("input",{type:"radio",value:`Slide ${a+1}`,name:"current-slide",onChange:()=>l(a),className:"sr-only",tabIndex:s?0:-1,checked:t})]})}try{x.displayName="Carousel",x.__docgenInfo={description:"",displayName:"Carousel",props:{duration:{defaultValue:{value:"4000"},description:"",name:"duration",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{C.displayName="CarouselDeck",C.__docgenInfo={description:"",displayName:"CarouselDeck",props:{}}}catch{}try{_.displayName="CarouselNextButton",_.__docgenInfo={description:"",displayName:"CarouselNextButton",props:{variant:{defaultValue:{value:"secondary"},description:"",name:"variant",required:!1,type:{name:'"destructive" | "primary" | "secondary" | "text" | "outline" | "ghost" | "emphasis" | null'}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | null'}},shape:{defaultValue:{value:"circle"},description:"",name:"shape",required:!1,type:{name:'"square" | "circle" | null'}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean | null"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{N.displayName="CarouselPrevButton",N.__docgenInfo={description:"",displayName:"CarouselPrevButton",props:{variant:{defaultValue:{value:"secondary"},description:"",name:"variant",required:!1,type:{name:'"destructive" | "primary" | "secondary" | "text" | "outline" | "ghost" | "emphasis" | null'}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | null'}},shape:{defaultValue:{value:"circle"},description:"",name:"shape",required:!1,type:{name:'"square" | "circle" | null'}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean | null"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{v.displayName="CarouselSlide",v.__docgenInfo={description:"",displayName:"CarouselSlide",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},index:{defaultValue:{value:"0"},description:"",name:"index",required:!1,type:{name:"number"}}}}}catch{}try{j.displayName="CarouselStatus",j.__docgenInfo={description:"",displayName:"CarouselStatus",props:{hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const U={title:"Components/Carousel",component:x},g={render:()=>e.jsx(x,{duration:4e3,children:e.jsxs("div",{className:"w-full flex flex-col items-center flex-1 justify-center gap-4",children:[e.jsxs("div",{className:"max-w-3xl w-full flex flex-col gap-4",children:[e.jsxs("div",{className:"flex justify-between gap-4 w-full items-center",children:[e.jsx("h2",{className:"text-20 font-bold",children:"Default Carousel"}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(N,{}),e.jsx(_,{})]})]}),e.jsx(C,{children:Array.from({length:5}).map((t,a)=>e.jsx(v,{children:e.jsx("div",{className:"p-1",children:e.jsx(k,{className:"flex aspect-video items-center justify-center p-6",children:e.jsx("span",{className:"text-4xl font-semibold",children:a+1})})})},a))})]}),e.jsx(j,{})]})}),args:{}},h={render:()=>e.jsx(x,{duration:4e3,children:e.jsxs("div",{className:"w-full flex flex-col items-center flex-1 justify-center gap-4",children:[e.jsx("div",{className:"max-w-lg w-full",children:e.jsx(C,{children:Array.from({length:7}).map((t,a)=>e.jsx(v,{children:e.jsx("div",{className:"p-1",children:e.jsx(k,{className:"flex aspect-video items-center justify-center p-6",children:e.jsx("span",{className:"text-4xl font-semibold",children:a+1})})})},a))})}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(N,{variant:"ghost",size:"xs",children:e.jsx(A,{})}),e.jsx(j,{}),e.jsx(_,{variant:"ghost",size:"xs",children:e.jsx(P,{})})]})]})}),args:{}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const X=["Default","Small"];export{g as Default,h as Small,X as __namedExportsOrder,U as default};
