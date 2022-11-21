import{r as w,j as e,a as c}from"./jsx-runtime.d0578377.js";import{B as r}from"./Box.948ea6da.js";import{T as h}from"./Text.750447f6.js";/* empty css                             *//* empty css                              */import{c as b}from"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";var v=b({defaultClassName:"tnw2bepk",variantClassNames:{variant:{base:"_140wn8nf",primary:"tnw2bex2 tnw2be15y tnw2be188",glass:"tnw2bevg tnw2bey6 tnw2be181 tnw2be188",emphasis:"tnw2bevg tnw2beyb tnw2be181 tnw2be188",text:"tnw2bevj tnw2beok tnw2beqc tnw2beq0 tnw2bepc tnw2be7s tnw2be98 tnw2beao tnw2bec4 tnw2bewd tnw2be18b tnw2be188",active:"tnw2beyg tnw2be18g tnw2be188",inactive:"tnw2bewd tnw2be18b tnw2be185 tnw2be188"},clickable:{true:"tnw2be1ae tnw2be1b3 tnw2be1b2"},disabled:{true:"tnw2be1aj tnw2be1at"},iconOnly:{true:"_140wn8no"},size:{xs:"_140wn8np tnw2bevj tnw2beog tnw2beq8 tnw2beq0 tnw2bepk tnw2benc tnw2benw tnw2bem8 tnw2bems tnw2beb0 tnw2becg tnw2be94 tnw2beak",sm:"_140wn8nq tnw2bevj tnw2beoo tnw2beqg tnw2beq0 tnw2bep8 tnw2beng tnw2beo0 tnw2bemc tnw2bemw tnw2beb4 tnw2beck tnw2be80 tnw2be9g",md:"_140wn8nr tnw2bevj tnw2beoo tnw2beqg tnw2beq0 tnw2bep8 tnw2beno tnw2beo8 tnw2bemk tnw2ben4 tnw2beb8 tnw2beco tnw2be84 tnw2be9k",lg:"_140wn8ns tnw2bevj tnw2beoo tnw2beqg tnw2beq0 tnw2bep8 tnw2beno tnw2beo8 tnw2bemk tnw2ben4 tnw2beb8 tnw2beco tnw2be88 tnw2be9o"},width:{full:"_140wn8nt tnw2beqw",normal:"tnw2ber8"}},defaultVariants:{},compoundVariants:[[{iconOnly:!0,size:"xs"},"_140wn8nv"],[{iconOnly:!0,size:"sm"},"_140wn8nw"],[{iconOnly:!0,size:"md"},"_140wn8nx"]]}),p=b({defaultClassName:"_140wn8ny",variantClassNames:{size:{xs:"_140wn8nz",sm:"_140wn8n10",md:"_140wn8n11",lg:"_140wn8n12"}},defaultVariants:{},compoundVariants:[]});const a=w.exports.forwardRef((l,V)=>{const{as:y="button",disabled:t=!1,href:g,pending:i=!1,label:o,LeftIcon:s,onClick:d,RightIcon:u,size:n="md",variant:m="glass",width:S="normal",...C}=l,f=s!==void 0&&o===void 0;return e(r,{as:y,className:v({clickable:!t&&!i&&(g!==void 0||d!==void 0),disabled:t||i,iconOnly:f,size:m==="text"?void 0:n,variant:m,width:S}),disabled:t||i,href:g,onClick:d,ref:V,...C,children:c(r,{as:"span",display:"flex",justifyContent:"space-between",alignItems:"center",gap:n==="xs"?"1":"2",children:[c(r,{as:"span",display:"flex",justifyContent:"flex-start",alignItems:"center",gap:n==="xs"?"1":"2",children:[s&&e(s,{className:p({size:n})}),!f&&e(h,{children:o})]}),u&&e(u,{className:p({size:n})})]})})});try{a.displayName="Button",a.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"glass"'},{value:'"emphasis"'},{value:'"inactive"'},{value:'"text"'},{value:'"base"'},{value:'"active"'}]}},clickable:{defaultValue:null,description:"",name:"clickable",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:'(("normal" | "full") & ConditionalStyle<Values<{ none: string; auto: string; full: string; half: string; fit: string; max: string; min: string; vw: string; vh: string; }, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>)'}},pending:{defaultValue:null,description:"",name:"pending",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},LeftIcon:{defaultValue:null,description:"",name:"LeftIcon",required:!1,type:{name:"ComponentType<IconProps>"}},RightIcon:{defaultValue:null,description:"",name:"RightIcon",required:!1,type:{name:"ComponentType<IconProps>"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:'Ref<ComponentPropsWithRef<T>["ref"]>'}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; auto: string; full: string; half: string; fit: string; max: string; min: string; vw: string; vh: string; }, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},borderBottomWidth:{defaultValue:null,description:"",name:"borderBottomWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderLeftWidth:{defaultValue:null,description:"",name:"borderLeftWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderRightWidth:{defaultValue:null,description:"",name:"borderRightWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderTopWidth:{defaultValue:null,description:"",name:"borderTopWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderBottomLeftRadius:{defaultValue:null,description:"",name:"borderBottomLeftRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderBottomRightRadius:{defaultValue:null,description:"",name:"borderBottomRightRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderTopLeftRadius:{defaultValue:null,description:"",name:"borderTopLeftRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderTopRightRadius:{defaultValue:null,description:"",name:"borderTopRightRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ inherit: string; xsmall: string; small: string; normal: string; medium: string; large: string; xlarge: string; }, CSSVarFunction>, { defaultClass: string; conditions: { ...; }; }>>"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ inherit: string; regular: string; medium: string; semiBold: string; bold: string; }, CSSVarFunction>, { defaultClass: string; conditions: { ...; }; }>>"}},letterSpacing:{defaultValue:null,description:"",name:"letterSpacing",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ inherit: string; none: string; regular: string; open: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ inherit: string; xsmall: string; small: string; normal: string; medium: string; large: string; xlarge: string; }, CSSVarFunction>, { defaultClass: string; conditions: { ...; }; }>>"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:'ConditionalStyle<Values<("none" | "block" | "flex" | "grid" | "inline-block" | "inline-flex" | "contents")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'ConditionalStyle<Values<("absolute" | "fixed" | "relative" | "sticky")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'ConditionalStyle<Values<("column" | "column-reverse" | "row" | "row-reverse")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'ConditionalStyle<Values<("space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:'ConditionalStyle<Values<readonly ["flex-start", "center", "flex-end", "stretch"], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:'ConditionalStyle<Values<("stretch" | "center" | "flex-end" | "flex-start" | "baseline")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:'ConditionalStyle<Values<("stretch" | "center" | "flex-end" | "flex-start" | "baseline")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},overflowX:{defaultValue:null,description:"",name:"overflowX",required:!1,type:{name:'ConditionalStyle<Values<("auto" | "hidden" | "scroll")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},overflowY:{defaultValue:null,description:"",name:"overflowY",required:!1,type:{name:'ConditionalStyle<Values<("auto" | "hidden" | "scroll")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderLeftRadius:{defaultValue:null,description:"",name:"borderLeftRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderRightRadius:{defaultValue:null,description:"",name:"borderRightRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderTopRadius:{defaultValue:null,description:"",name:"borderTopRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderBottomRadius:{defaultValue:null,description:"",name:"borderBottomRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:'ConditionalStyle<Values<("auto" | "hidden" | "scroll")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},placeItems:{defaultValue:null,description:"",name:"placeItems",required:!1,type:{name:'ConditionalStyle<Values<("space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }> | Values<...>>'}},backdropFilter:{defaultValue:null,description:"",name:"backdropFilter",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"blur"'}]}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"body"'},{value:'"mono"'}]}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"enum",value:[{value:'"capitalize"'},{value:'"lowercase"'},{value:'"uppercase"'}]}},visibility:{defaultValue:null,description:"",name:"visibility",required:!1,type:{name:"enum",value:[{value:'"hidden"'},{value:'"visible"'}]}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"initial"'},{value:'"normal"'},{value:'"nowrap"'}]}},wordBreak:{defaultValue:null,description:"",name:"wordBreak",required:!1,type:{name:"enum",value:[{value:'"break-word"'}]}},wordWrap:{defaultValue:null,description:"",name:"wordWrap",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"initial"'},{value:'"normal"'},{value:'"break-word"'}]}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"enum",value:[{value:'"0"'},{value:'"auto"'},{value:'"10"'},{value:'"20"'}]}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 24 more ...; white: "#ffffff"; }, CSSVarFunction>, { ...; }>>'}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 24 more ...; white: "#ffffff"; }, CSSVarFunction>, { ...; }>>'}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 24 more ...; white: "#ffffff"; }, CSSVarFunction>, { ...; }>>'}},cursor:{defaultValue:null,description:"",name:"cursor",required:!1,type:{name:'ConditionalStyle<Values<("default" | "not-allowed" | "pointer")[], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; }; }>>'}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '50': string; '80': string; '100': string; }, CSSVarFunction>, { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; }; }>>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:a.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch{}export{a as B};
//# sourceMappingURL=Button.3b0d2264.js.map
