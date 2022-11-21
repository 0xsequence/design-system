var j=Object.defineProperty;var a=(t,n)=>j(t,"name",{value:n,configurable:!0});import{B as E,c as z}from"./Box.84a3e293.js";import{r as M,j as P}from"./jsx-runtime.183293f6.js";import{p as Y}from"./index.3f9518bc.js";/* empty css                              */var N={};Object.defineProperty(N,"__esModule",{value:!0});var L=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},X=function(){function t(n,r){for(var i=0;i<r.length;i++){var e=r[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return a(t,"defineProperties"),function(n,r,i){return r&&t(n.prototype,r),i&&t(n,i),n}}(),F=M.exports,H=R(F),U=Y.exports,S=R(U);function R(t){return t&&t.__esModule?t:{default:t}}a(R,"_interopRequireDefault");function K(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}a(K,"_classCallCheck");function G(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n&&(typeof n=="object"||typeof n=="function")?n:t}a(G,"_possibleConstructorReturn");function J(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}a(J,"_inherits");var x=function(t){J(n,t);function n(r){K(this,n);var i=G(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,r));return i.generateIdenticon=i.generateIdenticon.bind(i),i}return a(n,"Identicon"),X(n,[{key:"componentDidMount",value:a(function(){this.generateIdenticon(L({},this.props))},"componentDidMount")},{key:"componentWillUpdate",value:a(function(i){this.isEquivalent(this.props,i)||this.generateIdenticon(L({},i))},"componentWillUpdate")},{key:"isEquivalent",value:a(function(i,e){var c=Object.getOwnPropertyNames(i),u=Object.getOwnPropertyNames(e);if(c.length!=u.length)return!1;for(var p=0;p<c.length;p++){var h=c[p];if(i[h]!==e[h])return!1}return!0},"isEquivalent")},{key:"generateIdenticon",value:a(function(i){var e=new Array(4);function c(s){for(var l=0;l<e.length;l++)e[l]=0;for(var g=0;g<s.length;g++)e[g%4]=(e[g%4]<<5)-e[g%4]+s.charCodeAt(g)}a(c,"seedrand");function u(){var s=e[0]^e[0]<<11;return e[0]=e[1],e[1]=e[2],e[2]=e[3],e[3]=e[3]^e[3]>>19^s^s>>8,(e[3]>>>0)/(1<<31>>>0)}a(u,"rand");function p(){var s=Math.floor(u()*360),l=u()*60+40+"%",g=(u()+u()+u()+u())*25+"%",d="hsl("+s+","+l+","+g+")";return d}a(p,"createColor");function h(s){for(var l=s,g=s,d=Math.ceil(l/2),b=l-d,C=[],V=0;V<g;V++){for(var o=[],f=0;f<d;f++)o[f]=Math.floor(u()*2.3);var m=o.slice(0,b);m.reverse(),o=o.concat(m);for(var v=0;v<o.length;v++)C.push(o[v])}return C}a(h,"createImageData");function w(s,l,g,d,b,C){var V=Math.sqrt(l.length),o=V*d;s.width=o,s.style.width=o+"px",s.height=o,s.style.height=o+"px";var f=s.getContext("2d");f.fillStyle=b,f.fillRect(0,0,s.width,s.height),f.fillStyle=g;for(var m=0;m<l.length;m++)if(f.fillStyle=l[m]===1?g:C,l[m]){var v=Math.floor(m/V),A=m%V;f.fillRect(A*d,v*d,d,d)}}a(w,"setCanvas");var y=i||{},_=y.size||8,k=y.scale||4,T=y.seed||Math.floor(Math.random()*Math.pow(10,16)).toString(16);c(T);var O=y.color||p(),B=y.bgColor||p(),D=y.spotColor||p(),I=h(_),W=w(this.identicon,I,O,k,B,D);return W},"generateIdenticon")},{key:"render",value:a(function(){var i=this;return H.default.createElement("canvas",{ref:a(function(c){i.identicon=c},"ref"),className:this.props.className})},"render")}]),n}(F.Component),Q=N.default=x;x.defaultProps={className:"identicon"};x.propTypes={seed:S.default.string.isRequired,size:S.default.number,scale:S.default.number,color:S.default.string,bgColor:S.default.string,spotColor:S.default.string};var Z="_19flyys1",$="_19flyys0";const nn={sm:3,md:4,lg:6,xl:8},q=M.exports.memo(t=>{const{className:n,address:r,size:i="md",...e}=t;return P(E,{as:Q,className:z($,Z,n),seed:r.toUpperCase(),size:8,scale:nn[i],...e})});try{q.displayName="Avatar",q.__docgenInfo={description:"",displayName:"Avatar",props:{address:{defaultValue:null,description:"",name:"address",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null>"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; auto: string; full: string; half: string; fit: string; max: string; min: string; vw: string; vh: string; }, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; auto: string; full: string; half: string; fit: string; max: string; min: string; vw: string; vh: string; }, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},borderBottomWidth:{defaultValue:null,description:"",name:"borderBottomWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderLeftWidth:{defaultValue:null,description:"",name:"borderLeftWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderRightWidth:{defaultValue:null,description:"",name:"borderRightWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderTopWidth:{defaultValue:null,description:"",name:"borderTopWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderBottomLeftRadius:{defaultValue:null,description:"",name:"borderBottomLeftRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderBottomRightRadius:{defaultValue:null,description:"",name:"borderBottomRightRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderTopLeftRadius:{defaultValue:null,description:"",name:"borderTopLeftRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderTopRightRadius:{defaultValue:null,description:"",name:"borderTopRightRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ inherit: string; xsmall: string; small: string; normal: string; medium: string; large: string; xlarge: string; }, CSSVarFunction>, { defaultClass: string; conditions: { ...; }; }>>"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ inherit: string; regular: string; medium: string; semiBold: string; bold: string; }, CSSVarFunction>, { defaultClass: string; conditions: { ...; }; }>>"}},letterSpacing:{defaultValue:null,description:"",name:"letterSpacing",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ inherit: string; none: string; regular: string; open: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ inherit: string; xsmall: string; small: string; normal: string; medium: string; large: string; xlarge: string; }, CSSVarFunction>, { defaultClass: string; conditions: { ...; }; }>>"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:'ConditionalStyle<Values<("none" | "block" | "flex" | "grid" | "inline-block" | "inline-flex" | "contents")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'ConditionalStyle<Values<("absolute" | "fixed" | "relative" | "sticky")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'ConditionalStyle<Values<("column" | "column-reverse" | "row" | "row-reverse")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'ConditionalStyle<Values<("space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:'ConditionalStyle<Values<readonly ["flex-start", "center", "flex-end", "stretch"], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:'ConditionalStyle<Values<("stretch" | "center" | "flex-end" | "flex-start" | "baseline")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:'ConditionalStyle<Values<("stretch" | "center" | "flex-end" | "flex-start" | "baseline")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},overflowX:{defaultValue:null,description:"",name:"overflowX",required:!1,type:{name:'ConditionalStyle<Values<("auto" | "hidden" | "scroll")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},overflowY:{defaultValue:null,description:"",name:"overflowY",required:!1,type:{name:'ConditionalStyle<Values<("auto" | "hidden" | "scroll")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderLeftRadius:{defaultValue:null,description:"",name:"borderLeftRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderRightRadius:{defaultValue:null,description:"",name:"borderRightRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderTopRadius:{defaultValue:null,description:"",name:"borderTopRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderBottomRadius:{defaultValue:null,description:"",name:"borderBottomRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:'ConditionalStyle<Values<("auto" | "hidden" | "scroll")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},placeItems:{defaultValue:null,description:"",name:"placeItems",required:!1,type:{name:'ConditionalStyle<Values<("space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }> | Values<...>>'}},backdropFilter:{defaultValue:null,description:"",name:"backdropFilter",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"blur"'}]}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"body"'},{value:'"mono"'}]}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"enum",value:[{value:'"capitalize"'},{value:'"lowercase"'},{value:'"uppercase"'}]}},visibility:{defaultValue:null,description:"",name:"visibility",required:!1,type:{name:"enum",value:[{value:'"hidden"'},{value:'"visible"'}]}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"initial"'},{value:'"normal"'},{value:'"nowrap"'}]}},wordBreak:{defaultValue:null,description:"",name:"wordBreak",required:!1,type:{name:"enum",value:[{value:'"break-word"'}]}},wordWrap:{defaultValue:null,description:"",name:"wordWrap",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"initial"'},{value:'"normal"'},{value:'"break-word"'}]}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"enum",value:[{value:'"0"'},{value:'"auto"'},{value:'"10"'},{value:'"20"'}]}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 24 more ...; white: "#ffffff"; }, CSSVarFunction>, { ...; }>>'}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 24 more ...; white: "#ffffff"; }, CSSVarFunction>, { ...; }>>'}},cursor:{defaultValue:null,description:"",name:"cursor",required:!1,type:{name:'ConditionalStyle<Values<("default" | "not-allowed" | "pointer")[], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; }; }>>'}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '50': string; '80': string; '100': string; }, CSSVarFunction>, { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; }; }>>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:q.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch{}export{q as A};
//# sourceMappingURL=Avatar.bf461aa2.js.map
