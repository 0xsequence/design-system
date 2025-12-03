import{r as o,j as e}from"./iframe-D00-goLr.js";import{r as D,a as z,D as E,E as A}from"./YoutubeIcon-B6FNeEVh.js";import"./SearchIcon-DmZBuCwJ.js";import{C as k}from"./Card-Cs8pA5nE.js";import{b as q}from"./index-Cn1xQXcm.js";import{B as V}from"./Button-D6vGoBUo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CkZCWXXn.js";import"./index-Dp9UmCQa.js";import"./styles-DSBOcsIh.js";import"./Text-DDMnqWt5.js";function P(t,n){const[a,r]=o.useState(t?"entered":"exited"),l=o.useRef(t),s=o.useRef(null);return o.useEffect(()=>{l.current!==t&&(r(t?i=>i==="entering"||i==="entered"?i:"entering":i=>i==="exiting"||i==="exited"?i:"exiting"),l.current=t)},[t]),o.useEffect(()=>{const i=s.current;if(!i)return;const c=m=>{m.target===i&&m.propertyName===n&&r(f=>f==="entering"?"entered":f==="exiting"?"exited":f)};return i.addEventListener("transitionend",c),()=>i.removeEventListener("transitionend",c)},[n]),{state:a,ref:s,attributes:{"data-entering":a==="entering"?"":void 0,"data-entered":a==="entered"?"":void 0,"data-exiting":a==="exiting"?"":void 0,"data-exited":a==="exited"?"":void 0,"data-transition":a}}}const I=o.createContext(null);function v(){const t=o.useContext(I);if(!t)throw new Error("useCarousel must be used within the CarouselContext");return t}function x({children:t,count:n,duration:a=4e3,className:r}){const[l,s]=o.useState(0),[u,i]=o.useState(!1),[c,m]=o.useState("rtl");function f(d){s(w=>{let p=d;return d>n-1?p=0:d<0&&(p=n-1),w===n-1&&p===0?m("rtl"):w===0&&p===n-1?m("ltr"):m(p<w?"ltr":"rtl"),p})}function S(){s(d=>(m("rtl"),d===n-1?0:d+1))}function B(){s(d=>(m("ltr"),d===0?n-1:d-1))}const b=a>0;return o.useEffect(()=>{if(!b||u)return;const d=setInterval(()=>{S()},a);return()=>{clearInterval(d)}},[b,u,a,l,S]),e.jsx(I.Provider,{value:{nextSlide:S,prevSlide:B,setSlide:f,isPaused:u,setPaused:i,autoAdvance:b,duration:a,totalSlides:n,currentSlide:l,direction:c},children:e.jsx("div",{"data-slot":"carousel",role:"region","aria-roledescription":"carousel",className:q(r),style:{"--duration":`${a}ms`},children:t})})}function h({children:t}){const{currentSlide:n,setPaused:a}=v();return e.jsx("div",{"data-slot":"carousel-deck",className:"relative z-2 grid-stack rounded-3xl focus-within:ring-2 ring-black",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),onFocus:()=>a(!0),onBlur:()=>a(!1),children:t(n)})}function C({children:t,className:n,current:a,index:r}){const{ref:l,attributes:s}=P(a===r,"opacity"),{direction:u}=v();return e.jsx("div",{inert:a!==r||void 0,"data-index":r,"data-slot":"carousel-slide","data-current":a===r||void 0,"data-ltr":u==="ltr"||void 0,className:q(`
        transition-[translate,opacity] duration-300 text-end
        data-entering:opacity-100 data-entering:translate-x-0
        data-entered:opacity-100 data-entered:translate-x-0
        data-exiting:opacity-0 data-exiting:-translate-x-16 data-ltr:data-exiting:translate-x-16
        data-exited:opacity-0 data-exited:translate-x-16 data-ltr:data-exited:-translate-x-16 data-exited:transition-none!
        opacity-0 translate-x-16 data-ltr:not-current:-translate-x-16
        z-1 inert:z-0
      `,n),ref:l,...s,children:t})}function N({children:t,variant:n="secondary",shape:a="circle",size:r="md",...l}){const{prevSlide:s}=v();return e.jsx(V,{"data-slot":"carousel-prev-button",variant:n,shape:a,size:r,onClick:s,iconOnly:!0,...l,children:t||e.jsx(D,{})})}function _({children:t,variant:n="secondary",shape:a="circle",size:r="md",...l}){const{nextSlide:s}=v();return e.jsx(V,{"data-slot":"carousel-next-button",variant:n,shape:a,size:r,onClick:s,iconOnly:!0,...l,children:t||e.jsx(z,{})})}function j({hidden:t,className:n}){const{autoAdvance:a,setSlide:r,isPaused:l,totalSlides:s,currentSlide:u}=v();return e.jsx("div",{className:q("flex gap-2 justify-center items-center mx-auto inert:overflow-clip inert:absolute inert:opacity-0",n),inert:t||void 0,"data-slot":"carousel-status",children:Array.from({length:s}).map((i,c)=>e.jsx(O,{index:c,isPaused:l,current:u===c,autoAdvance:a,onChangeSlide:r},c))})}function O({current:t,index:n,isPaused:a,autoAdvance:r,onChangeSlide:l}){const[s,u]=o.useState(!1);return o.useEffect(()=>{requestAnimationFrame(()=>{u(t)})},[t]),e.jsxs("label",{"data-slot":"carousel-status-dot","data-index":n,className:"grid-stack size-2.5 data-auto-advance:data-current:w-6 transition-all rounded-full bg-background-inverse/20 overflow-clip has-[:focus-visible]:outline-2 outline-offset-1 has-[:focus-visible]:outline-border-focus cursor-pointer","data-current":s||void 0,"data-auto-advance":r||void 0,children:[e.jsx("div",{className:"pointer-events-none in-data-current:opacity-100 opacity-0 transition-transform size-full ease-linear bg-background-inverse not-in-data-current:duration-1 data-pause:duration-300 rounded-full duration-(--duration) in-data-current:translate-x-6 data-pause:translate-x-0","data-slide-id":n,"data-pause":!r||a||void 0}),e.jsx("input",{type:"radio",value:`Slide ${n+1}`,name:"current-slide",onChange:()=>l(n),className:"sr-only",tabIndex:s?0:-1,checked:t})]})}try{x.displayName="Carousel",x.__docgenInfo={description:"",displayName:"Carousel",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},duration:{defaultValue:{value:"4000"},description:"",name:"duration",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{h.displayName="CarouselDeck",h.__docgenInfo={description:"",displayName:"CarouselDeck",props:{}}}catch{}try{_.displayName="CarouselNextButton",_.__docgenInfo={description:"",displayName:"CarouselNextButton",props:{variant:{defaultValue:{value:"secondary"},description:"",name:"variant",required:!1,type:{name:'"primary" | "secondary" | "text" | "destructive" | "outline" | "ghost" | "emphasis" | null'}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:'"sm" | "lg" | "md" | "xs" | null'}},shape:{defaultValue:{value:"circle"},description:"",name:"shape",required:!1,type:{name:'"circle" | "square" | null'}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean | null"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{N.displayName="CarouselPrevButton",N.__docgenInfo={description:"",displayName:"CarouselPrevButton",props:{variant:{defaultValue:{value:"secondary"},description:"",name:"variant",required:!1,type:{name:'"primary" | "secondary" | "text" | "destructive" | "outline" | "ghost" | "emphasis" | null'}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:'"sm" | "lg" | "md" | "xs" | null'}},shape:{defaultValue:{value:"circle"},description:"",name:"shape",required:!1,type:{name:'"circle" | "square" | null'}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean | null"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{C.displayName="CarouselSlide",C.__docgenInfo={description:"",displayName:"CarouselSlide",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},current:{defaultValue:null,description:"",name:"current",required:!0,type:{name:"number"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}}}}}catch{}try{j.displayName="CarouselStatus",j.__docgenInfo={description:"",displayName:"CarouselStatus",props:{hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const U={title:"Components/Carousel",component:x},y={render:()=>e.jsx(x,{count:5,duration:4e3,children:e.jsxs("div",{className:"w-full flex flex-col items-center flex-1 justify-center gap-4",children:[e.jsxs("div",{className:"max-w-3xl w-full flex flex-col gap-4",children:[e.jsxs("div",{className:"flex justify-between gap-4 w-full items-center",children:[e.jsx("h2",{className:"text-20 font-bold",children:"Default Carousel"}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(N,{}),e.jsx(_,{})]})]}),e.jsx(h,{children:t=>Array.from({length:5}).map((n,a)=>e.jsx(C,{index:a,current:t,children:e.jsx("div",{className:"p-1",children:e.jsx(k,{className:"flex aspect-video items-center justify-center p-6",children:e.jsx("span",{className:"text-4xl font-semibold",children:a+1})})})},a))})]}),e.jsx(j,{})]})}),args:{}},g={render:()=>e.jsx(x,{count:5,duration:4e3,children:e.jsxs("div",{className:"w-full flex flex-col items-center flex-1 justify-center gap-4",children:[e.jsx("div",{className:"max-w-lg w-full",children:e.jsx(h,{children:t=>Array.from({length:5}).map((n,a)=>e.jsx(C,{current:t,index:a,children:e.jsx("div",{className:"p-1",children:e.jsx(k,{className:"flex aspect-video items-center justify-center p-6",children:e.jsx("span",{className:"text-4xl font-semibold",children:a+1})})})},a))})}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(N,{variant:"ghost",size:"xs",children:e.jsx(E,{})}),e.jsx(j,{}),e.jsx(_,{variant:"ghost",size:"xs",children:e.jsx(A,{})})]})]})}),args:{}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Carousel count={5} duration={4000}>
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
              {current => Array.from({
              length: 5
            }).map((_, index) => <CarouselSlide key={index} index={index} current={current}>
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
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Carousel count={5} duration={4000}>
        <div className="w-full flex flex-col items-center flex-1 justify-center gap-4">
          <div className="max-w-lg w-full">
            <CarouselDeck>
              {current => Array.from({
              length: 5
            }).map((_, index) => <CarouselSlide key={index} current={current} index={index}>
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
}`,...g.parameters?.docs?.source}}};const W=["Default","Small"];export{y as Default,g as Small,W as __namedExportsOrder,U as default};
