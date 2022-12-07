import{B as l,c as q}from"./Box.decd8f5e.js";import{r as L,j as i,a as m}from"./jsx-runtime.528c4313.js";import{T as k}from"./Text.4ff57f0a.js";/* empty css                             *//* empty css                              */import{c as F}from"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";var N=F({defaultClassName:"tnw2be120 tnw2be12c tnw2be134",variantClassNames:{variant:{base:"_140wn8nd",primary:"tnw2be14y tnw2be1hy tnw2be1l0",glass:"tnw2be16a tnw2be1ks tnw2be1l0",emphasis:"tnw2be16g tnw2be1ks tnw2be1l0",text:"tnw2be12v tnw2bev0 tnw2bewk tnw2bewg tnw2bevs tnw2beds tnw2bef8 tnw2bego tnw2bei4 tnw2be13s tnw2be1l4 tnw2be1l0"},clickable:{true:"tnw2be1nm tnw2be1og tnw2be1oe"},shape:{circle:"tnw2beu0 tnw2beuo tnw2beso tnw2betc",square:"tnw2beto tnw2beuc tnw2besc tnw2bet0"},disabled:{true:"tnw2be1ns tnw2be1o4"},iconOnly:{true:"_140wn8nm"},hasLeftIcon:{true:"_140wn8nn"},hasRightIcon:{true:"_140wn8no"},size:{xs:"_140wn8np tnw2be12v tnw2beuw tnw2bewk tnw2bewg tnw2bew0 tnw2beh0 tnw2beig tnw2bef4 tnw2begk",sm:"_140wn8nq tnw2be12v tnw2bev4 tnw2bewo tnw2bewg tnw2bevo tnw2beh4 tnw2beik tnw2bee0 tnw2befg",md:"_140wn8nr tnw2be12v tnw2bev4 tnw2bewo tnw2bewg tnw2bevo tnw2beh8 tnw2beio tnw2bee4 tnw2befk",lg:"_140wn8ns tnw2be12v tnw2bev4 tnw2bewo tnw2bewg tnw2bevo tnw2beh8 tnw2beio tnw2bee8 tnw2befo"}},defaultVariants:{},compoundVariants:[[{iconOnly:!0,size:"xs"},"_140wn8nt"],[{iconOnly:!0,size:"sm"},"_140wn8nu"],[{iconOnly:!0,size:"md"},"_140wn8nv"],[{hasLeftIcon:!0,size:"xs"},"_140wn8nw"],[{hasLeftIcon:!0,size:"sm"},"_140wn8nx"],[{hasLeftIcon:!0,size:"md"},"_140wn8ny"],[{hasRightIcon:!0,size:"xs"},"_140wn8nz"],[{hasRightIcon:!0,size:"sm"},"_140wn8n10"],[{hasRightIcon:!0,size:"md"},"_140wn8n11"]]});const g=L.exports.forwardRef((o,c)=>{const{as:p="button",className:y,disabled:s=!1,display:V="inline-flex",fontWeight:S="bold",pending:r=!1,label:n,leftIcon:e,rightIcon:a,size:t="md",variant:d="glass",width:b="fit",shape:h="circle",...C}=o,w=e!==void 0&&n!==void 0,v=a!==void 0&&n!==void 0,u=e!==void 0&&n===void 0,x=!s&&!r,f=t==="xs"?"xs":"sm";return i(l,{as:p,className:q(y,N({clickable:x,disabled:s||r,hasLeftIcon:w,hasRightIcon:v,iconOnly:u,size:d==="text"?void 0:t,shape:h,variant:d})),disabled:s||r,display:V,fontWeight:S,ref:c,width:b,...C,children:m(l,{width:"full",justifyContent:"space-between",alignItems:"center",gap:t==="xs"?"1":"2",children:[m(l,{justifyContent:"flex-start",alignItems:"center",gap:t==="xs"?"1":"2",children:[e&&i(e,{size:f}),!u&&i(k,{children:n})]}),a&&i(a,{size:f})]})})});try{g.displayName="Button",g.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"glass"'},{value:'"emphasis"'},{value:'"text"'},{value:'"base"'}]}},clickable:{defaultValue:null,description:"",name:"clickable",required:!1,type:{name:"boolean"}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"square"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean"}},hasLeftIcon:{defaultValue:null,description:"",name:"hasLeftIcon",required:!1,type:{name:"boolean"}},hasRightIcon:{defaultValue:null,description:"",name:"hasRightIcon",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'}]}},pending:{defaultValue:null,description:"",name:"pending",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},leftIcon:{defaultValue:null,description:"",name:"leftIcon",required:!1,type:{name:"ComponentType<VariantSelection<{ size: { xs: { height: CSSVarFunction; width: CSSVarFunction; }; sm: { height: CSSVarFunction; width: CSSVarFunction; }; md: { ...; }; lg: { ...; }; xl: { ...; }; }; }> & ... 4 more ... & ChildSprinkleProps<...>>"}},rightIcon:{defaultValue:null,description:"",name:"rightIcon",required:!1,type:{name:"ComponentType<VariantSelection<{ size: { xs: { height: CSSVarFunction; width: CSSVarFunction; }; sm: { height: CSSVarFunction; width: CSSVarFunction; }; md: { ...; }; lg: { ...; }; xl: { ...; }; }; }> & ... 4 more ... & ChildSprinkleProps<...>>"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; px: string; auto: string; full: string; half: string; third: string; quarter: string; fit: string; max: string; min: string; vw: string; vh: string; }, { defaultClass: string; conditions: { ...; }; }>>"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; px: string; auto: string; full: string; half: string; third: string; quarter: string; fit: string; max: string; min: string; vw: string; vh: string; }, { defaultClass: string; conditions: { ...; }; }>>"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; px: string; auto: string; full: string; half: string; third: string; quarter: string; fit: string; max: string; min: string; vw: string; vh: string; }, { defaultClass: string; conditions: { ...; }; }>>"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; px: string; auto: string; full: string; half: string; third: string; quarter: string; fit: string; max: string; min: string; vw: string; vh: string; }, { defaultClass: string; conditions: { ...; }; }>>"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; px: string; auto: string; full: string; half: string; third: string; quarter: string; fit: string; max: string; min: string; vw: string; vh: string; }, { defaultClass: string; conditions: { ...; }; }>>"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; px: string; auto: string; full: string; half: string; third: string; quarter: string; fit: string; max: string; min: string; vw: string; vh: string; }, { defaultClass: string; conditions: { ...; }; }>>"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},borderBottomWidth:{defaultValue:null,description:"",name:"borderBottomWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderLeftWidth:{defaultValue:null,description:"",name:"borderLeftWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderRightWidth:{defaultValue:null,description:"",name:"borderRightWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderTopWidth:{defaultValue:null,description:"",name:"borderTopWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderBottomLeftRadius:{defaultValue:null,description:"",name:"borderBottomLeftRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderBottomRightRadius:{defaultValue:null,description:"",name:"borderBottomRightRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderTopLeftRadius:{defaultValue:null,description:"",name:"borderTopLeftRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderTopRightRadius:{defaultValue:null,description:"",name:"borderTopRightRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ inherit: string; xsmall: string; small: string; normal: string; medium: string; large: string; xlarge: string; }, CSSVarFunction>, { defaultClass: string; conditions: { ...; }; }>>"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ inherit: string; normal: string; medium: string; semibold: string; bold: string; }, CSSVarFunction>, { defaultClass: string; conditions: { ...; }; }>>"}},letterSpacing:{defaultValue:null,description:"",name:"letterSpacing",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ inherit: string; none: string; normal: string; wide: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ inherit: string; '4': string; '5': string; '6': string; '7': string; '9': string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:'ConditionalStyle<Values<("left" | "right" | "center")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:'ConditionalStyle<Values<("flex" | "grid" | "none" | "block" | "inline-block" | "inline-flex" | "contents")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'ConditionalStyle<Values<("fixed" | "absolute" | "relative" | "sticky")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'ConditionalStyle<Values<("column" | "column-reverse" | "row" | "row-reverse")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:'ConditionalStyle<Values<("0" | "1")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:'ConditionalStyle<Values<("0" | "1")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'ConditionalStyle<Values<("center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:'ConditionalStyle<Values<readonly ["flex-start", "center", "flex-end", "stretch"], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:'ConditionalStyle<Values<("center" | "stretch" | "flex-end" | "flex-start" | "baseline")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:'ConditionalStyle<Values<("center" | "stretch" | "flex-end" | "flex-start" | "baseline")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},overflowX:{defaultValue:null,description:"",name:"overflowX",required:!1,type:{name:'ConditionalStyle<Values<("auto" | "hidden" | "scroll")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},overflowY:{defaultValue:null,description:"",name:"overflowY",required:!1,type:{name:'ConditionalStyle<Values<("auto" | "hidden" | "scroll")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},visibility:{defaultValue:null,description:"",name:"visibility",required:!1,type:{name:'ConditionalStyle<Values<("hidden" | "visible")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderLeftRadius:{defaultValue:null,description:"",name:"borderLeftRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderRightRadius:{defaultValue:null,description:"",name:"borderRightRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderTopRadius:{defaultValue:null,description:"",name:"borderTopRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderBottomRadius:{defaultValue:null,description:"",name:"borderBottomRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:'ConditionalStyle<Values<("auto" | "hidden" | "scroll")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},placeItems:{defaultValue:null,description:"",name:"placeItems",required:!1,type:{name:'ConditionalStyle<Values<("center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }> | Values<...>>'}},backdropFilter:{defaultValue:null,description:"",name:"backdropFilter",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"blur"'}]}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"body"'},{value:'"mono"'}]}},textOverflow:{defaultValue:null,description:"",name:"textOverflow",required:!1,type:{name:"enum",value:[{value:'"clip"'},{value:'"ellipsis"'}]}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"enum",value:[{value:'"capitalize"'},{value:'"lowercase"'},{value:'"uppercase"'}]}},userSelect:{defaultValue:null,description:"",name:"userSelect",required:!1,type:{name:"enum",value:[{value:'"none"'}]}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"initial"'},{value:'"normal"'},{value:'"nowrap"'}]}},wordBreak:{defaultValue:null,description:"",name:"wordBreak",required:!1,type:{name:"enum",value:[{value:'"break-word"'}]}},wordWrap:{defaultValue:null,description:"",name:"wordWrap",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"initial"'},{value:'"normal"'},{value:'"break-word"'}]}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"enum",value:[{value:'"0"'},{value:'"auto"'},{value:'"10"'},{value:'"20"'}]}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 26 more ...; white: "#ffffff"; }, CSSVarFunction>, { ...; }>>'}},borderBottomStyle:{defaultValue:null,description:"",name:"borderBottomStyle",required:!1,type:{name:'ConditionalStyle<Values<readonly ["solid", "dashed", "dotted"], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 26 more ...; white: "#ffffff"; }, CSSVarFunction>, { ...; }>>'}},borderLeftStyle:{defaultValue:null,description:"",name:"borderLeftStyle",required:!1,type:{name:'ConditionalStyle<Values<readonly ["solid", "dashed", "dotted"], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},borderRightStyle:{defaultValue:null,description:"",name:"borderRightStyle",required:!1,type:{name:'ConditionalStyle<Values<readonly ["solid", "dashed", "dotted"], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},borderTopStyle:{defaultValue:null,description:"",name:"borderTopStyle",required:!1,type:{name:'ConditionalStyle<Values<readonly ["solid", "dashed", "dotted"], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 26 more ...; white: "#ffffff"; }, CSSVarFunction>, { ...; }>>'}},cursor:{defaultValue:null,description:"",name:"cursor",required:!1,type:{name:'ConditionalStyle<Values<("default" | "not-allowed" | "pointer")[], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '50': string; '80': string; '100': string; }, CSSVarFunction>, { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>"}},outline:{defaultValue:null,description:"",name:"outline",required:!1,type:{name:'ConditionalStyle<Values<"none"[], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},pointerEvents:{defaultValue:null,description:"",name:"pointerEvents",required:!1,type:{name:'ConditionalStyle<Values<("auto" | "none")[], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},borderStyle:{defaultValue:null,description:"",name:"borderStyle",required:!1,type:{name:'ConditionalStyle<Values<readonly ["solid", "dashed", "dotted"], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:g.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch{}export{g as B};
//# sourceMappingURL=Button.68104d9c.js.map
