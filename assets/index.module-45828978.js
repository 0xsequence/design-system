import{r as n}from"./index-d8ade8ea.js";import{e as a}from"./index.module-d15610cf.js";function u(r){const[h,e]=n.useState(void 0);return a(()=>{if(r){e({width:r.offsetWidth,height:r.offsetHeight});const f=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const b=i[0];let o,t;if("borderBoxSize"in b){const s=b.borderBoxSize,d=Array.isArray(s)?s[0]:s;o=d.inlineSize,t=d.blockSize}else o=r.offsetWidth,t=r.offsetHeight;e({width:o,height:t})});return f.observe(r,{box:"border-box"}),()=>f.unobserve(r)}else e(void 0)},[r]),h}export{u as $};
//# sourceMappingURL=index.module-45828978.js.map