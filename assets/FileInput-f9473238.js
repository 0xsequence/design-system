var N=Object.defineProperty;var c=(i,e)=>N(i,"name",{value:e,configurable:!0});import{r as m}from"./index-9b47cd5d.js";import{B as o}from"./Box-0ba2098e.js";import{F as M}from"./Field-d1e82def.js";import{I}from"./IconButton-b8b35c44.js";import{T as f}from"./Text-dbab31a0.js";/* empty css                             *//* empty css                              */import{c as T}from"./WarningIcon-58080c2d.js";import{j as l,a as p}from"./jsx-runtime-6057fa59.js";const D=c((...i)=>e=>i.forEach(t=>{t&&(typeof t=="function"?t(e):t.current=e)}),"useCombinedRefs");var B="tnw2be1dg tnw2be23k tnw2bejc tnw2bemw tnw2bel4 tnw2beoo",_="_1hq71vk1 tnw2be1hz tnw2be1a8 tnw2be1bs tnw2be1bk tnw2be1as tnw2be160 tnw2be16c tnw2be16o tnw2be170 tnw2be18w tnw2be19k tnw2be17k tnw2be188 tnw2beqw tnw2besk tnw2beu8 tnw2bevw tnw2be1wk tnw2be1w2 tnw2be1ow tnw2be1vk tnw2be1g0 tnw2be1rw tnw2be1d4 tnw2be1e4 tnw2be1es tnw2beew tnw2be242 tnw2be240 tnw2be23s tnw2be1do";const j={png:".png,image/png",jpeg:".jpeg,image/jpeg",jpg:".jpg,image/jpg",images:"image/*",pdf:".pdf,application/pdf"},S=m.exports.forwardRef(({description:i,disabled:e=!1,id:t,label:y="",labelLocation:b="hidden",name:u,onValueChange:r,placeholder:F="Upload a file",processing:h=!1,validExtensions:v,...x},q)=>{const d=m.exports.useRef(null),w=D(d,q),[n,V]=m.exports.useState(null),L=c(s=>{const a=s.currentTarget.files;if(!a||!a[0])return;const g=a[0],C=g.name,R=g.size/1e3;V({name:C,size:R,extension:C.split(".").pop()??""}),r==null||r(g)},"handleChange"),k=v.map(s=>j[s]).join(",");return l(M,{description:i,disabled:e,display:"grid",forId:t??u,label:y,labelLocation:b,children:l(o,{width:"full",children:p(o,{justifyContent:n?"space-between":"flex-start",color:n?"text100":"text50",className:_,children:[n?p(o,{flexDirection:"row",gap:"2",alignItems:"baseline",children:[l(f,{children:n.name}),p(f,{color:"text50",variant:"xsmall",children:[n.size.toFixed(2)," kb"]})]}):l(f,{children:F}),l(o,{accept:k,as:"input",className:B,cursor:n?"text":"pointer",disabled:e||h||!!n,id:t??u,name:u,onChange:L,ref:w,type:"file",...x}),n&&l(I,{cursor:"pointer",icon:T,size:"xs",onClick:s=>{var a;s.preventDefault(),s.stopPropagation(),(a=d.current)!=null&&a.value&&(d.current.value=""),r==null||r(null),V(null)},zIndex:"10"})]})})})});try{S.displayName="FileInput",S.__docgenInfo={description:"",displayName:"FileInput",props:{label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},labelLocation:{defaultValue:{value:"hidden"},description:"",name:"labelLocation",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"hidden"'}]}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},processing:{defaultValue:{value:"false"},description:"",name:"processing",required:!1,type:{name:"boolean"}},validExtensions:{defaultValue:null,description:"",name:"validExtensions",required:!0,type:{name:'("png" | "jpeg" | "jpg" | "images" | "pdf")[]'}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"File"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"((value: File | null) => void)"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; px: string; auto: string; full: string; '1/2': string; '1/3': string; '2/3': string; '1/4': string; '3/4': string; fit: string; max: string; min: string; vw: string; vh: string; 0: CSSVarFunction; ... 13 more ...; 16: CSSVarFunction; }, { ...; }>>"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; px: string; auto: string; full: string; '1/2': string; '1/3': string; '2/3': string; '1/4': string; '3/4': string; fit: string; max: string; min: string; vw: string; vh: string; 0: CSSVarFunction; ... 13 more ...; 16: CSSVarFunction; }, { ...; }>>"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; px: string; auto: string; full: string; '1/2': string; '1/3': string; '2/3': string; '1/4': string; '3/4': string; fit: string; max: string; min: string; vw: string; vh: string; 0: CSSVarFunction; ... 13 more ...; 16: CSSVarFunction; }, { ...; }>>"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; px: string; auto: string; full: string; '1/2': string; '1/3': string; '2/3': string; '1/4': string; '3/4': string; fit: string; max: string; min: string; vw: string; vh: string; 0: CSSVarFunction; ... 13 more ...; 16: CSSVarFunction; }, { ...; }>>"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; px: string; auto: string; full: string; '1/2': string; '1/3': string; '2/3': string; '1/4': string; '3/4': string; fit: string; max: string; min: string; vw: string; vh: string; 0: CSSVarFunction; ... 13 more ...; 16: CSSVarFunction; }, { ...; }>>"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; px: string; auto: string; full: string; '1/2': string; '1/3': string; '2/3': string; '1/4': string; '3/4': string; fit: string; max: string; min: string; vw: string; vh: string; 0: CSSVarFunction; ... 13 more ...; 16: CSSVarFunction; }, { ...; }>>"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 9 more ...; 16: CSSVarFunction; }, { ...; }>>'}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 9 more ...; 16: CSSVarFunction; }, { ...; }>>'}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 9 more ...; 16: CSSVarFunction; }, { ...; }>>'}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 9 more ...; 16: CSSVarFunction; }, { ...; }>>'}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 9 more ...; 16: CSSVarFunction; }, { ...; }>>'}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 9 more ...; 16: CSSVarFunction; }, { ...; }>>'}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 9 more ...; 16: CSSVarFunction; }, { ...; }>>'}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 9 more ...; 16: CSSVarFunction; }, { ...; }>>'}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},borderBottomWidth:{defaultValue:null,description:"",name:"borderBottomWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderLeftWidth:{defaultValue:null,description:"",name:"borderLeftWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderRightWidth:{defaultValue:null,description:"",name:"borderRightWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderTopWidth:{defaultValue:null,description:"",name:"borderTopWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderBottomLeftRadius:{defaultValue:null,description:"",name:"borderBottomLeftRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderBottomRightRadius:{defaultValue:null,description:"",name:"borderBottomRightRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderTopLeftRadius:{defaultValue:null,description:"",name:"borderTopLeftRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderTopRightRadius:{defaultValue:null,description:"",name:"borderTopRightRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ inherit: string; xsmall: string; small: string; normal: string; medium: string; large: string; xlarge: string; }, CSSVarFunction>, { defaultClass: string; conditions: { ...; }; }>>"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ inherit: string; normal: string; medium: string; semibold: string; bold: string; }, CSSVarFunction>, { defaultClass: string; conditions: { ...; }; }>>"}},letterSpacing:{defaultValue:null,description:"",name:"letterSpacing",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ inherit: string; none: string; normal: string; wide: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ inherit: string; '4': string; '5': string; '6': string; '7': string; '9': string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:'ConditionalStyle<Values<("left" | "right" | "center")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:'ConditionalStyle<Values<("flex" | "grid" | "none" | "block" | "inline-block" | "inline-flex" | "contents")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'ConditionalStyle<Values<("fixed" | "absolute" | "relative" | "sticky")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'ConditionalStyle<Values<("column" | "column-reverse" | "row" | "row-reverse")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:'ConditionalStyle<Values<("0" | "1")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:'ConditionalStyle<Values<("0" | "1")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'ConditionalStyle<Values<("center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:'ConditionalStyle<Values<readonly ["flex-start", "center", "flex-end", "stretch"], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:'ConditionalStyle<Values<("center" | "stretch" | "flex-end" | "flex-start" | "baseline")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:'ConditionalStyle<Values<("center" | "stretch" | "flex-end" | "flex-start" | "baseline")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},overflowX:{defaultValue:null,description:"",name:"overflowX",required:!1,type:{name:'ConditionalStyle<Values<("auto" | "hidden" | "scroll")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},overflowY:{defaultValue:null,description:"",name:"overflowY",required:!1,type:{name:'ConditionalStyle<Values<("auto" | "hidden" | "scroll")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},visibility:{defaultValue:null,description:"",name:"visibility",required:!1,type:{name:'ConditionalStyle<Values<("hidden" | "visible")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderLeftRadius:{defaultValue:null,description:"",name:"borderLeftRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderRightRadius:{defaultValue:null,description:"",name:"borderRightRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderTopRadius:{defaultValue:null,description:"",name:"borderTopRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderBottomRadius:{defaultValue:null,description:"",name:"borderBottomRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 9 more ...; 16: CSSVarFunction; }, { ...; }> | Values<...> | Values<...> | Values<...>>'}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 9 more ...; 16: CSSVarFunction; }, { ...; }> | Values<...>>'}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 9 more ...; 16: CSSVarFunction; }, { ...; }> | Values<...>>'}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:'ConditionalStyle<Values<("auto" | "hidden" | "scroll")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},placeItems:{defaultValue:null,description:"",name:"placeItems",required:!1,type:{name:'ConditionalStyle<Values<("center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }> | Values<...>>'}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 9 more ...; 16: CSSVarFunction; }, { ...; }> | Values<...> | Values<...> | Values<...>>'}},backdropFilter:{defaultValue:null,description:"",name:"backdropFilter",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"blur"'}]}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"body"'},{value:'"mono"'}]}},textOverflow:{defaultValue:null,description:"",name:"textOverflow",required:!1,type:{name:"enum",value:[{value:'"clip"'},{value:'"ellipsis"'}]}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"enum",value:[{value:'"capitalize"'},{value:'"lowercase"'},{value:'"uppercase"'}]}},userSelect:{defaultValue:null,description:"",name:"userSelect",required:!1,type:{name:"enum",value:[{value:'"none"'}]}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"initial"'},{value:'"normal"'},{value:'"nowrap"'}]}},wordBreak:{defaultValue:null,description:"",name:"wordBreak",required:!1,type:{name:"enum",value:[{value:'"break-word"'}]}},wordWrap:{defaultValue:null,description:"",name:"wordWrap",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"initial"'},{value:'"normal"'},{value:'"break-word"'}]}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"0"'},{value:'"10"'},{value:'"20"'}]}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 27 more ...; white: "#ffffff"; }, CSSVarFunction>, { ...; }>>'}},borderBottomStyle:{defaultValue:null,description:"",name:"borderBottomStyle",required:!1,type:{name:'ConditionalStyle<Values<readonly ["solid", "dashed", "dotted"], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 27 more ...; white: "#ffffff"; }, CSSVarFunction>, { ...; }>>'}},borderLeftStyle:{defaultValue:null,description:"",name:"borderLeftStyle",required:!1,type:{name:'ConditionalStyle<Values<readonly ["solid", "dashed", "dotted"], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},borderRightStyle:{defaultValue:null,description:"",name:"borderRightStyle",required:!1,type:{name:'ConditionalStyle<Values<readonly ["solid", "dashed", "dotted"], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},borderTopStyle:{defaultValue:null,description:"",name:"borderTopStyle",required:!1,type:{name:'ConditionalStyle<Values<readonly ["solid", "dashed", "dotted"], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 27 more ...; white: "#ffffff"; }, CSSVarFunction>, { ...; }>>'}},cursor:{defaultValue:null,description:"",name:"cursor",required:!1,type:{name:'ConditionalStyle<Values<("text" | "default" | "pointer")[], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '50': string; '80': string; '100': string; }, CSSVarFunction>, { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>"}},outline:{defaultValue:null,description:"",name:"outline",required:!1,type:{name:'ConditionalStyle<Values<"none"[], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},pointerEvents:{defaultValue:null,description:"",name:"pointerEvents",required:!1,type:{name:'ConditionalStyle<Values<("auto" | "none")[], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},borderStyle:{defaultValue:null,description:"",name:"borderStyle",required:!1,type:{name:'ConditionalStyle<Values<readonly ["solid", "dashed", "dotted"], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/FileInput/FileInput.tsx#FileInput"]={docgenInfo:S.__docgenInfo,name:"FileInput",path:"src/components/FileInput/FileInput.tsx#FileInput"})}catch{}export{S as F};
//# sourceMappingURL=FileInput-f9473238.js.map
