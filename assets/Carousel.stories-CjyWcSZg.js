import{r as o,j as e}from"./iframe-Djrw-iJT.js";import{r as E,a as z,D as A,E as P}from"./YoutubeIcon-C1f2gIFt.js";import"./SearchIcon-CzbUQgHE.js";import{C as k}from"./Card-Cfop3jrI.js";import{b as q}from"./index-Cn1xQXcm.js";import{B}from"./Button--4usfRhH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-gCA5zlsB.js";import"./index-9EgrqQcw.js";import"./styles-DSBOcsIh.js";import"./Text-DtXaNAdf.js";function O(t,a){const[r,n]=o.useState(t?"entered":"exited"),s=o.useRef(t),l=o.useRef(null);return o.useEffect(()=>{s.current!==t&&(n(t?i=>i==="entering"||i==="entered"?i:"entering":i=>i==="exiting"||i==="exited"?i:"exiting"),s.current=t)},[t]),o.useEffect(()=>{const i=l.current;if(!i)return;const p=f=>{f.target===i&&f.propertyName===a&&n(c=>c==="entering"?"entered":c==="exiting"?"exited":c)};return i.addEventListener("transitionend",p),()=>i.removeEventListener("transitionend",p)},[a]),{state:r,ref:l,attributes:{"data-entering":r==="entering"?"":void 0,"data-entered":r==="entered"?"":void 0,"data-exiting":r==="exiting"?"":void 0,"data-exited":r==="exited"?"":void 0,"data-transition":r}}}const I=o.createContext(null);function v(){const t=o.useContext(I);if(!t)throw new Error("useCarousel must be used within the CarouselContext");return t}function x({children:t,duration:a=4e3,className:r}){const[n,s]=o.useState(0),[l,d]=o.useState(0),[i,p]=o.useState(!1),[f,c]=o.useState("rtl");function V(u){d(w=>{let m=u;return u>n-1?m=0:u<0&&(m=n-1),w===n-1&&m===0?c("rtl"):w===0&&m===n-1?c("ltr"):c(m<w?"ltr":"rtl"),m})}function S(){d(u=>(c("rtl"),u===n-1?0:u+1))}function D(){d(u=>(c("ltr"),u===0?n-1:u-1))}const b=a>0;return o.useEffect(()=>{if(!b||i)return;const u=setInterval(()=>{S()},a);return()=>{clearInterval(u)}},[b,i,a,l,S]),e.jsx(I.Provider,{value:{nextSlide:S,prevSlide:D,setSlide:V,isPaused:i,setPaused:p,autoAdvance:b,duration:a,totalSlides:n,setTotalSlides:s,currentSlide:l,direction:f},children:e.jsx("div",{"data-slot":"carousel",role:"region","aria-roledescription":"carousel",className:q(r),style:{"--duration":`${a}ms`},children:t})})}function h({children:t}){const{setPaused:a,setTotalSlides:r}=v(),n=o.useRef(null);return o.useEffect(()=>{if(n.current){const s=n.current.querySelectorAll("[data-slot=carousel-slide]");if(s){const l=Array.from(s).length;r(l)}}},[]),e.jsx("div",{ref:n,"data-slot":"carousel-deck",className:"relative z-2 grid-stack rounded-3xl focus-within:ring-2 ring-black",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),onFocus:()=>a(!0),onBlur:()=>a(!1),children:t})}function C({children:t,className:a,index:r}){const{direction:n,currentSlide:s}=v(),{ref:l,attributes:d}=O(s===r,"opacity");return e.jsx("div",{inert:s!==r||void 0,"data-index":r,"data-slot":"carousel-slide","data-current":s===r||void 0,"data-ltr":n==="ltr"||void 0,className:q(`
        transition-[translate,opacity] duration-300 text-end
        data-entering:opacity-100 data-entering:translate-x-0
        data-entered:opacity-100 data-entered:translate-x-0
        data-exiting:opacity-0 data-exiting:-translate-x-16 data-ltr:data-exiting:translate-x-16
        data-exited:opacity-0 data-exited:translate-x-16 data-ltr:data-exited:-translate-x-16 data-exited:transition-none!
        opacity-0 translate-x-16 data-ltr:not-current:-translate-x-16
        z-1 inert:z-0
      `,a),ref:l,...d,children:t})}function N({children:t,variant:a="secondary",shape:r="circle",size:n="md",...s}){const{prevSlide:l}=v();return e.jsx(B,{"data-slot":"carousel-prev-button",variant:a,shape:r,size:n,onClick:l,iconOnly:!0,...s,children:t||e.jsx(E,{})})}function _({children:t,variant:a="secondary",shape:r="circle",size:n="md",...s}){const{nextSlide:l}=v();return e.jsx(B,{"data-slot":"carousel-next-button",variant:a,shape:r,size:n,onClick:l,iconOnly:!0,...s,children:t||e.jsx(z,{})})}function j({hidden:t,className:a}){const{autoAdvance:r,setPaused:n,setSlide:s,isPaused:l,totalSlides:d,currentSlide:i}=v();return console.log(d),e.jsx("div",{className:q("flex gap-2 justify-center items-center mx-auto inert:overflow-clip inert:absolute inert:opacity-0",a),inert:t||void 0,"data-slot":"carousel-status",onFocus:()=>n(!0),onBlur:()=>n(!1),children:Array.from({length:d}).map((p,f)=>e.jsx(R,{index:f,isPaused:l,current:i===f,autoAdvance:r,onChangeSlide:s},f))})}function R({current:t,index:a,isPaused:r,autoAdvance:n,onChangeSlide:s}){const[l,d]=o.useState(!1);return o.useEffect(()=>{requestAnimationFrame(()=>{d(t)})},[t]),e.jsxs("label",{"data-slot":"carousel-status-dot","data-index":a,className:"grid-stack size-2.5 data-auto-advance:data-current:w-6 transition-all rounded-full bg-background-inverse/20 overflow-clip has-[:focus-visible]:outline-2 outline-offset-1 has-[:focus-visible]:outline-border-focus cursor-pointer","data-current":l||void 0,"data-auto-advance":n||void 0,children:[e.jsx("div",{className:"pointer-events-none in-data-current:opacity-100 opacity-0 transition-transform size-full ease-linear bg-background-inverse not-in-data-current:duration-1 data-pause:duration-300 rounded-full duration-(--duration) in-data-current:translate-x-6 data-pause:translate-x-0","data-slide-id":a,"data-pause":!n||r||void 0}),e.jsx("input",{type:"radio",value:`Slide ${a+1}`,name:"current-slide",onChange:()=>s(a),className:"sr-only",tabIndex:l?0:-1,checked:t})]})}try{x.displayName="Carousel",x.__docgenInfo={description:"",displayName:"Carousel",props:{duration:{defaultValue:{value:"4000"},description:"",name:"duration",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{h.displayName="CarouselDeck",h.__docgenInfo={description:"",displayName:"CarouselDeck",props:{}}}catch{}try{_.displayName="CarouselNextButton",_.__docgenInfo={description:"",displayName:"CarouselNextButton",props:{variant:{defaultValue:{value:"secondary"},description:"",name:"variant",required:!1,type:{name:'"primary" | "secondary" | "text" | "destructive" | "outline" | "ghost" | "emphasis" | null'}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | null'}},shape:{defaultValue:{value:"circle"},description:"",name:"shape",required:!1,type:{name:'"circle" | "square" | null'}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean | null"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{N.displayName="CarouselPrevButton",N.__docgenInfo={description:"",displayName:"CarouselPrevButton",props:{variant:{defaultValue:{value:"secondary"},description:"",name:"variant",required:!1,type:{name:'"primary" | "secondary" | "text" | "destructive" | "outline" | "ghost" | "emphasis" | null'}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | null'}},shape:{defaultValue:{value:"circle"},description:"",name:"shape",required:!1,type:{name:'"circle" | "square" | null'}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean | null"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{C.displayName="CarouselSlide",C.__docgenInfo={description:"",displayName:"CarouselSlide",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}}}}}catch{}try{j.displayName="CarouselStatus",j.__docgenInfo={description:"",displayName:"CarouselStatus",props:{hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const W={title:"Components/Carousel",component:x},y={render:()=>e.jsx(x,{duration:4e3,children:e.jsxs("div",{className:"w-full flex flex-col items-center flex-1 justify-center gap-4",children:[e.jsxs("div",{className:"max-w-3xl w-full flex flex-col gap-4",children:[e.jsxs("div",{className:"flex justify-between gap-4 w-full items-center",children:[e.jsx("h2",{className:"text-20 font-bold",children:"Default Carousel"}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(N,{}),e.jsx(_,{})]})]}),e.jsx(h,{children:Array.from({length:5}).map((t,a)=>e.jsx(C,{index:a,children:e.jsx("div",{className:"p-1",children:e.jsx(k,{className:"flex aspect-video items-center justify-center p-6",children:e.jsx("span",{className:"text-4xl font-semibold",children:a+1})})})},a))})]}),e.jsx(j,{})]})}),args:{}},g={render:()=>e.jsx(x,{duration:4e3,children:e.jsxs("div",{className:"w-full flex flex-col items-center flex-1 justify-center gap-4",children:[e.jsx("div",{className:"max-w-lg w-full",children:e.jsx(h,{children:Array.from({length:5}).map((t,a)=>e.jsx(C,{index:a,children:e.jsx("div",{className:"p-1",children:e.jsx(k,{className:"flex aspect-video items-center justify-center p-6",children:e.jsx("span",{className:"text-4xl font-semibold",children:a+1})})})},a))})}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(N,{variant:"ghost",size:"xs",children:e.jsx(A,{})}),e.jsx(j,{}),e.jsx(_,{variant:"ghost",size:"xs",children:e.jsx(P,{})})]})]})}),args:{}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
            }).map((_, index) => <CarouselSlide key={index} index={index}>
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
    return <Carousel duration={4000}>
        <div className="w-full flex flex-col items-center flex-1 justify-center gap-4">
          <div className="max-w-lg w-full">
            <CarouselDeck>
              {Array.from({
              length: 5
            }).map((_, index) => <CarouselSlide key={index} index={index}>
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
}`,...g.parameters?.docs?.source}}};const X=["Default","Small"];export{y as Default,g as Small,X as __namedExportsOrder,W as default};
