import{j as a}from"./jsx-runtime-69eee039.js";import{T as _}from"./Text-23aecd3e.js";import{b as B,a as b,_ as S,$ as j}from"./index-53a40ded.js";import{r as e}from"./index-7c191284.js";import{a as W,c as O,$ as I}from"./index-006d63ff.js";import{$ as P}from"./index-3baa516f.js";import{$ as A}from"./index-8f163998.js";import{B as R,c as H}from"./Box-64e6f390.js";import{i as z}from"./WarningIcon-54dbaf58.js";import"./atoms-27ff9aca.js";import{m as C}from"./motion-cc45ae8c.js";import{A as X}from"./index-686b454f.js";import"./typography-f274f330.js";/* empty css                              */import"./createRuntimeFn-f8e161c6.esm-526ef7c2.js";import"./extends-98964cd2.js";import"./index-ecbee218.js";const T="Collapsible",[Y,Fe]=B(T),[G,h]=Y(T),J=e.forwardRef((n,s)=>{const{__scopeCollapsible:l,open:i,defaultOpen:t,disabled:d,onOpenChange:o,...u}=n,[c=!1,g]=W({prop:i,defaultProp:t,onChange:o});return e.createElement(G,{scope:l,disabled:d,contentId:A(),open:c,onOpenToggle:e.useCallback(()=>g(f=>!f),[g])},e.createElement(b.div,S({"data-state":v(c),"data-disabled":d?"":void 0},u,{ref:s})))}),K="CollapsibleTrigger",Q=e.forwardRef((n,s)=>{const{__scopeCollapsible:l,...i}=n,t=h(K,l);return e.createElement(b.button,S({type:"button","aria-controls":t.contentId,"aria-expanded":t.open||!1,"data-state":v(t.open),"data-disabled":t.disabled?"":void 0,disabled:t.disabled},i,{ref:s,onClick:O(n.onClick,t.onOpenToggle)}))}),E="CollapsibleContent",U=e.forwardRef((n,s)=>{const{forceMount:l,...i}=n,t=h(E,n.__scopeCollapsible);return e.createElement(P,{present:l||t.open},({present:d})=>e.createElement(Z,S({},i,{ref:s,present:d})))}),Z=e.forwardRef((n,s)=>{const{__scopeCollapsible:l,present:i,children:t,...d}=n,o=h(E,l),[u,c]=e.useState(i),g=e.useRef(null),f=j(s,g),x=e.useRef(0),F=x.current,q=e.useRef(0),$=q.current,V=o.open||u,L=e.useRef(V),m=e.useRef();return e.useEffect(()=>{const r=requestAnimationFrame(()=>L.current=!1);return()=>cancelAnimationFrame(r)},[]),I(()=>{const r=g.current;if(r){m.current=m.current||{transitionDuration:r.style.transitionDuration,animationName:r.style.animationName},r.style.transitionDuration="0s",r.style.animationName="none";const k=r.getBoundingClientRect();x.current=k.height,q.current=k.width,L.current||(r.style.transitionDuration=m.current.transitionDuration,r.style.animationName=m.current.animationName),c(i)}},[o.open,i]),e.createElement(b.div,S({"data-state":v(o.open),"data-disabled":o.disabled?"":void 0,id:o.contentId,hidden:!V},d,{ref:f,style:{"--radix-collapsible-content-height":F?`${F}px`:void 0,"--radix-collapsible-content-width":$?`${$}px`:void 0,...n.style}}),V&&t)});function v(n){return n?"open":"closed"}const ee=J,ne=Q,te=U;var w="64px",ie="_4j62fl4 fyvr1ww fyvr1ys fyvr1so fyvr1v0 fyvr128",re="_4j62fl5",ae="_4j62fl0",se="_4j62fl2 fyvr11d4 fyvr11ds fyvr11bs fyvr11cg fyvr1t4 fyvr1v0 fyvr1ww fyvr1ys fyvr11h0 fyvr11ko fyvr11ob fyvr128 fyvr12tz fyvr11n2";const y=n=>{const{className:s,children:l,defaultOpen:i,onOpenChange:t,label:d,...o}=n,[u,c]=e.useState(i),g=f=>{c(f),t==null||t(f)};return a.jsx(ee,{defaultOpen:i,onOpenChange:g,asChild:!0,children:a.jsxs(R,{as:C.div,className:H(s,ae),initial:{height:i?"auto":w},animate:{height:u?"auto":w},transition:{ease:"easeOut",duration:.3},borderRadius:"md",background:"backgroundSecondary",position:"relative",overflow:"hidden",width:"full",...o,children:[a.jsxs(ne,{className:se,children:[a.jsx(_,{as:"div",variant:"normal",fontWeight:"bold",color:"text80",children:d}),a.jsx(R,{as:C.div,position:"absolute",right:"0",marginRight:"4",initial:{rotate:i?180:0},animate:{rotate:u?180:0},transition:{ease:"linear",duration:.1},children:a.jsx(z,{className:re,color:"text50"})})]}),a.jsx(X,{children:u&&a.jsx(te,{className:ie,asChild:!0,forceMount:!0,children:a.jsx(C.div,{initial:{opacity:i?1:0},animate:{opacity:1},exit:{opacity:0},transition:{ease:"easeOut",duration:.3},children:l})})})]})})};try{y.displayName="Collapsible",y.__docgenInfo={description:"",displayName:"Collapsible",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"(ChildSprinkleProps<{ width: { values: Values<{ none: string; px: string; auto: string; full: string; '1/2': string; '1/3': string; '2/3': string; '1/4': string; '3/4': string; fit: string; max: string; min: string; vw: string; vh: string; ... 16 more ...; 16: CSSVarFunction; }, { ...; }>; }; ... 43 more ...; visibi..."}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; px: string; auto: string; full: string; '1/2': string; '1/3': string; '2/3': string; '1/4': string; '3/4': string; fit: string; max: string; min: string; vw: string; vh: string; 0: CSSVarFunction; ... 15 more ...; 16: CSSVarFunction; }, { ...; }>>"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; px: string; auto: string; full: string; '1/2': string; '1/3': string; '2/3': string; '1/4': string; '3/4': string; fit: string; max: string; min: string; vw: string; vh: string; 0: CSSVarFunction; ... 15 more ...; 16: CSSVarFunction; }, { ...; }>>"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; px: string; auto: string; full: string; '1/2': string; '1/3': string; '2/3': string; '1/4': string; '3/4': string; fit: string; max: string; min: string; vw: string; vh: string; 0: CSSVarFunction; ... 15 more ...; 16: CSSVarFunction; }, { ...; }>>"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; px: string; auto: string; full: string; '1/2': string; '1/3': string; '2/3': string; '1/4': string; '3/4': string; fit: string; max: string; min: string; vw: string; vh: string; 0: CSSVarFunction; ... 15 more ...; 16: CSSVarFunction; }, { ...; }>>"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; px: string; auto: string; full: string; '1/2': string; '1/3': string; '2/3': string; '1/4': string; '3/4': string; fit: string; max: string; min: string; vw: string; vh: string; 0: CSSVarFunction; ... 15 more ...; 16: CSSVarFunction; }, { ...; }>>"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; px: string; auto: string; full: string; '1/2': string; '1/3': string; '2/3': string; '1/4': string; '3/4': string; fit: string; max: string; min: string; vw: string; vh: string; 0: CSSVarFunction; ... 15 more ...; 16: CSSVarFunction; }, { ...; }>>"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 11 more ...; 16: CSSVarFunction; }, { ...; }>>'}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 11 more ...; 16: CSSVarFunction; }, { ...; }>>'}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 11 more ...; 16: CSSVarFunction; }, { ...; }>>'}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 11 more ...; 16: CSSVarFunction; }, { ...; }>>'}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '7': string; '8': string; '9': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '7': string; '8': string; '9': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '7': string; '8': string; '9': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '7': string; '8': string; '9': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 11 more ...; 16: CSSVarFunction; }, { ...; }>>'}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 11 more ...; 16: CSSVarFunction; }, { ...; }>>'}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 11 more ...; 16: CSSVarFunction; }, { ...; }>>'}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 11 more ...; 16: CSSVarFunction; }, { ...; }>>'}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '7': string; '8': string; '9': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},borderBottomWidth:{defaultValue:null,description:"",name:"borderBottomWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderLeftWidth:{defaultValue:null,description:"",name:"borderLeftWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderRightWidth:{defaultValue:null,description:"",name:"borderRightWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderTopWidth:{defaultValue:null,description:"",name:"borderTopWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderBottomLeftRadius:{defaultValue:null,description:"",name:"borderBottomLeftRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderBottomRightRadius:{defaultValue:null,description:"",name:"borderBottomRightRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderTopLeftRadius:{defaultValue:null,description:"",name:"borderTopLeftRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderTopRightRadius:{defaultValue:null,description:"",name:"borderTopRightRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ inherit: string; xsmall: string; small: string; normal: string; medium: string; large: string; xlarge: string; }, CSSVarFunction>, { defaultClass: string; conditions: { ...; }; }>>"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ inherit: string; normal: string; medium: string; semibold: string; bold: string; }, CSSVarFunction>, { defaultClass: string; conditions: { ...; }; }>>"}},letterSpacing:{defaultValue:null,description:"",name:"letterSpacing",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ inherit: string; none: string; normal: string; wide: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ inherit: string; '4': string; '5': string; '6': string; '7': string; '9': string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:'ConditionalStyle<Values<("center" | "left" | "right")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:'ConditionalStyle<Values<("none" | "flex" | "grid" | "block" | "contents" | "inline-block" | "inline-flex")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'ConditionalStyle<Values<("fixed" | "absolute" | "relative" | "sticky")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'ConditionalStyle<Values<("column" | "column-reverse" | "row" | "row-reverse")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:'ConditionalStyle<Values<("0" | "1")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:'ConditionalStyle<Values<("0" | "1")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:'ConditionalStyle<Values<("nowrap" | "wrap" | "wrap-reverse")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'ConditionalStyle<Values<("center" | "flex-end" | "flex-start" | "stretch" | "space-around" | "space-between" | "space-evenly")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:'ConditionalStyle<Values<readonly ["flex-start", "center", "flex-end", "stretch"], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:'ConditionalStyle<Values<("center" | "flex-end" | "flex-start" | "baseline" | "stretch")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:'ConditionalStyle<Values<("center" | "flex-end" | "flex-start" | "baseline" | "stretch")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},overflowX:{defaultValue:null,description:"",name:"overflowX",required:!1,type:{name:'ConditionalStyle<Values<("auto" | "hidden" | "visible" | "scroll")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},overflowY:{defaultValue:null,description:"",name:"overflowY",required:!1,type:{name:'ConditionalStyle<Values<("auto" | "hidden" | "visible" | "scroll")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},visibility:{defaultValue:null,description:"",name:"visibility",required:!1,type:{name:'ConditionalStyle<Values<("hidden" | "visible")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderLeftRadius:{defaultValue:null,description:"",name:"borderLeftRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderRightRadius:{defaultValue:null,description:"",name:"borderRightRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderTopRadius:{defaultValue:null,description:"",name:"borderTopRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderBottomRadius:{defaultValue:null,description:"",name:"borderBottomRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 11 more ...; 16: CSSVarFunction; }, { ...; }> | Values<...> | Values<...> | Values<...>>'}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 11 more ...; 16: CSSVarFunction; }, { ...; }> | Values<...>>'}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 11 more ...; 16: CSSVarFunction; }, { ...; }> | Values<...>>'}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:'ConditionalStyle<Values<("auto" | "hidden" | "visible" | "scroll")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '7': string; '8': string; '9': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '7': string; '8': string; '9': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '7': string; '8': string; '9': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},placeItems:{defaultValue:null,description:"",name:"placeItems",required:!1,type:{name:'ConditionalStyle<Values<("center" | "flex-end" | "flex-start" | "stretch" | "space-around" | "space-between" | "space-evenly")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }> | Values<...>>'}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 11 more ...; 16: CSSVarFunction; }, { ...; }> | Values<...> | Values<...> | Values<...>>'}},backdropFilter:{defaultValue:null,description:"",name:"backdropFilter",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"blur"'}]}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"body"'},{value:'"mono"'}]}},textOverflow:{defaultValue:null,description:"",name:"textOverflow",required:!1,type:{name:"enum",value:[{value:'"clip"'},{value:'"ellipsis"'}]}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"enum",value:[{value:'"capitalize"'},{value:'"lowercase"'},{value:'"uppercase"'}]}},userSelect:{defaultValue:null,description:"",name:"userSelect",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"all"'},{value:'"auto"'},{value:'"text"'}]}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"initial"'},{value:'"normal"'},{value:'"nowrap"'}]}},wordBreak:{defaultValue:null,description:"",name:"wordBreak",required:!1,type:{name:"enum",value:[{value:'"break-word"'}]}},wordWrap:{defaultValue:null,description:"",name:"wordWrap",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"initial"'},{value:'"normal"'},{value:'"break-word"'}]}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"0"'},{value:'"1"'},{value:'"50"'},{value:'"10"'},{value:'"20"'},{value:'"30"'},{value:'"40"'},{value:'"-1"'}]}},aspectRatio:{defaultValue:null,description:"",name:"aspectRatio",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"1/1"'},{value:'"16/9"'},{value:'"4/3"'},{value:'"3/1"'}]}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 30 more ...; transparent: "transparent"; }, CSSVarFunction>, { ...; }>>'}},borderBottomColor:{defaultValue:null,description:"",name:"borderBottomColor",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 30 more ...; transparent: "transparent"; }, CSSVarFunction>, { ...; }>>'}},borderBottomStyle:{defaultValue:null,description:"",name:"borderBottomStyle",required:!1,type:{name:'ConditionalStyle<Values<readonly ["solid", "dashed", "dotted"], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},borderLeftColor:{defaultValue:null,description:"",name:"borderLeftColor",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 30 more ...; transparent: "transparent"; }, CSSVarFunction>, { ...; }>>'}},borderLeftStyle:{defaultValue:null,description:"",name:"borderLeftStyle",required:!1,type:{name:'ConditionalStyle<Values<readonly ["solid", "dashed", "dotted"], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},borderRightColor:{defaultValue:null,description:"",name:"borderRightColor",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 30 more ...; transparent: "transparent"; }, CSSVarFunction>, { ...; }>>'}},borderRightStyle:{defaultValue:null,description:"",name:"borderRightStyle",required:!1,type:{name:'ConditionalStyle<Values<readonly ["solid", "dashed", "dotted"], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},borderTopColor:{defaultValue:null,description:"",name:"borderTopColor",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 30 more ...; transparent: "transparent"; }, CSSVarFunction>, { ...; }>>'}},borderTopStyle:{defaultValue:null,description:"",name:"borderTopStyle",required:!1,type:{name:'ConditionalStyle<Values<readonly ["solid", "dashed", "dotted"], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},cursor:{defaultValue:null,description:"",name:"cursor",required:!1,type:{name:'ConditionalStyle<Values<("default" | "pointer" | "text")[], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '50': string; '80': string; '100': string; }, CSSVarFunction>, { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>"}},pointerEvents:{defaultValue:null,description:"",name:"pointerEvents",required:!1,type:{name:'ConditionalStyle<Values<("none" | "auto")[], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},outline:{defaultValue:null,description:"",name:"outline",required:!1,type:{name:'ConditionalStyle<Values<"none"[], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:'ConditionalStyle<Values<"none"[], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 30 more ...; transparent: "transparent"; }, CSSVarFunction>, { ...; }>>'}},borderStyle:{defaultValue:null,description:"",name:"borderStyle",required:!1,type:{name:'ConditionalStyle<Values<readonly ["solid", "dashed", "dotted"], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},focusRing:{defaultValue:null,description:"",name:"focusRing",required:!1,type:{name:'ConditionalStyle<Values<"none"[], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}}}}}catch{}const qe={title:"Components/Collapsible",component:y},p={args:{label:"My Heading",children:[1,2,3,4,5].map(n=>a.jsxs(_,{variant:"normal",as:"p",color:"text80",children:["Item ",n]},n))}};var N,D,M;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'My Heading',
    children: [1, 2, 3, 4, 5].map(x => <Text variant="normal" as="p" color="text80" key={x}>
        Item {x}
      </Text>)
  }
}`,...(M=(D=p.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const $e=["Default"];export{p as Default,$e as __namedExportsOrder,qe as default};
//# sourceMappingURL=Collapsible.stories-21e60c65.js.map
