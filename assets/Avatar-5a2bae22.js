import{j}from"./jsx-runtime-a9c13c85.js";import{B as E,c as z}from"./Box-f4432bb8.js";import{r as q}from"./index-d8ade8ea.js";import{p as P}from"./index-4d501b15.js";import"./atoms.css-bb4ad6bf.js";var k={};Object.defineProperty(k,"__esModule",{value:!0});var F=Object.assign||function(i){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(i[t]=r[t])}return i},A=function(){function i(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(n,r,t){return r&&i(n.prototype,r),t&&i(n,t),n}}(),L=q,H=w(L),X=P,V=w(X);function w(i){return i&&i.__esModule?i:{default:i}}function Y(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function U(i,n){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n&&(typeof n=="object"||typeof n=="function")?n:i}function G(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(i,n):i.__proto__=n)}var b=function(i){G(n,i);function n(r){Y(this,n);var t=U(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,r));return t.generateIdenticon=t.generateIdenticon.bind(t),t}return A(n,[{key:"componentDidMount",value:function(){this.generateIdenticon(F({},this.props))}},{key:"componentWillUpdate",value:function(t){this.isEquivalent(this.props,t)||this.generateIdenticon(F({},t))}},{key:"isEquivalent",value:function(t,e){var f=Object.getOwnPropertyNames(t),d=Object.getOwnPropertyNames(e);if(f.length!=d.length)return!1;for(var m=0;m<f.length;m++){var y=f[m];if(t[y]!==e[y])return!1}return!0}},{key:"generateIdenticon",value:function(t){var e=new Array(4);function f(a){for(var s=0;s<e.length;s++)e[s]=0;for(var l=0;l<a.length;l++)e[l%4]=(e[l%4]<<5)-e[l%4]+a.charCodeAt(l)}function d(){var a=e[0]^e[0]<<11;return e[0]=e[1],e[1]=e[2],e[2]=e[3],e[3]=e[3]^e[3]>>19^a^a>>8,(e[3]>>>0)/(1<<31>>>0)}function m(){var a=Math.floor(d()*360),s=d()*60+40+"%",l=(d()+d()+d()+d())*25+"%",u="hsl("+a+","+s+","+l+")";return u}function y(a){for(var s=a,l=a,u=Math.ceil(s/2),v=s-u,h=[],S=0;S<l;S++){for(var o=[],g=0;g<u;g++)o[g]=Math.floor(d()*2.3);var c=o.slice(0,v);c.reverse(),o=o.concat(c);for(var C=0;C<o.length;C++)h.push(o[C])}return h}function M(a,s,l,u,v,h){var S=Math.sqrt(s.length),o=S*u;a.width=o,a.style.width=o+"px",a.height=o,a.style.height=o+"px";var g=a.getContext("2d");g.fillStyle=v,g.fillRect(0,0,a.width,a.height),g.fillStyle=l;for(var c=0;c<s.length;c++)if(g.fillStyle=s[c]===1?l:h,s[c]){var C=Math.floor(c/S),I=c%S;g.fillRect(I*u,C*u,u,u)}}var p=t||{},N=p.size||8,D=p.scale||4,R=p.seed||Math.floor(Math.random()*Math.pow(10,16)).toString(16);f(R);var _=p.color||m(),T=p.bgColor||m(),W=p.spotColor||m(),B=y(N),O=M(this.identicon,B,_,D,T,W);return O}},{key:"render",value:function(){var t=this;return H.default.createElement("canvas",{ref:function(f){t.identicon=f},className:this.props.className})}}]),n}(L.Component),J=k.default=b;b.defaultProps={className:"identicon"};b.propTypes={seed:V.default.string.isRequired,size:V.default.number,scale:V.default.number,color:V.default.string,bgColor:V.default.string,spotColor:V.default.string};var K="_19flyys1",Q="_19flyys0";const Z={sm:3,md:4,lg:6,xl:8},x=q.memo(i=>{const{className:n,address:r,size:t="md",...e}=i;return j(E,{as:J,className:z(Q,K,n),display:"inline-block",seed:r.toUpperCase(),size:8,scale:Z[t],...e})});try{x.displayName="Avatar",x.__docgenInfo={description:"",displayName:"Avatar",props:{address:{defaultValue:null,description:"",name:"address",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"(ChildSprinkleProps<{ width: { values: Values<{ none: string; px: string; auto: string; full: string; '1/2': string; '1/3': string; '2/3': string; '1/4': string; '3/4': string; fit: string; max: string; min: string; vw: string; vh: string; ... 14 more ...; 16: CSSVarFunction; }, { ...; }>; }; ... 42 more ...; visibi..."}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; px: string; auto: string; full: string; '1/2': string; '1/3': string; '2/3': string; '1/4': string; '3/4': string; fit: string; max: string; min: string; vw: string; vh: string; 0: CSSVarFunction; ... 13 more ...; 16: CSSVarFunction; }, { ...; }>>"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; px: string; auto: string; full: string; '1/2': string; '1/3': string; '2/3': string; '1/4': string; '3/4': string; fit: string; max: string; min: string; vw: string; vh: string; 0: CSSVarFunction; ... 13 more ...; 16: CSSVarFunction; }, { ...; }>>"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; px: string; auto: string; full: string; '1/2': string; '1/3': string; '2/3': string; '1/4': string; '3/4': string; fit: string; max: string; min: string; vw: string; vh: string; 0: CSSVarFunction; ... 13 more ...; 16: CSSVarFunction; }, { ...; }>>"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; px: string; auto: string; full: string; '1/2': string; '1/3': string; '2/3': string; '1/4': string; '3/4': string; fit: string; max: string; min: string; vw: string; vh: string; 0: CSSVarFunction; ... 13 more ...; 16: CSSVarFunction; }, { ...; }>>"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; px: string; auto: string; full: string; '1/2': string; '1/3': string; '2/3': string; '1/4': string; '3/4': string; fit: string; max: string; min: string; vw: string; vh: string; 0: CSSVarFunction; ... 13 more ...; 16: CSSVarFunction; }, { ...; }>>"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ConditionalStyle<Values<{ none: string; px: string; auto: string; full: string; '1/2': string; '1/3': string; '2/3': string; '1/4': string; '3/4': string; fit: string; max: string; min: string; vw: string; vh: string; 0: CSSVarFunction; ... 13 more ...; 16: CSSVarFunction; }, { ...; }>>"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 9 more ...; 16: CSSVarFunction; }, { ...; }>>'}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 9 more ...; 16: CSSVarFunction; }, { ...; }>>'}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 9 more ...; 16: CSSVarFunction; }, { ...; }>>'}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 9 more ...; 16: CSSVarFunction; }, { ...; }>>'}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 9 more ...; 16: CSSVarFunction; }, { ...; }>>'}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 9 more ...; 16: CSSVarFunction; }, { ...; }>>'}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 9 more ...; 16: CSSVarFunction; }, { ...; }>>'}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 9 more ...; 16: CSSVarFunction; }, { ...; }>>'}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},borderBottomWidth:{defaultValue:null,description:"",name:"borderBottomWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderLeftWidth:{defaultValue:null,description:"",name:"borderLeftWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderRightWidth:{defaultValue:null,description:"",name:"borderRightWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderTopWidth:{defaultValue:null,description:"",name:"borderTopWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderBottomLeftRadius:{defaultValue:null,description:"",name:"borderBottomLeftRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderBottomRightRadius:{defaultValue:null,description:"",name:"borderBottomRightRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderTopLeftRadius:{defaultValue:null,description:"",name:"borderTopLeftRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderTopRightRadius:{defaultValue:null,description:"",name:"borderTopRightRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ inherit: string; xsmall: string; small: string; normal: string; medium: string; large: string; xlarge: string; }, CSSVarFunction>, { defaultClass: string; conditions: { ...; }; }>>"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ inherit: string; normal: string; medium: string; semibold: string; bold: string; }, CSSVarFunction>, { defaultClass: string; conditions: { ...; }; }>>"}},letterSpacing:{defaultValue:null,description:"",name:"letterSpacing",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ inherit: string; none: string; normal: string; wide: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ inherit: string; '4': string; '5': string; '6': string; '7': string; '9': string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:'ConditionalStyle<Values<("left" | "right" | "center")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:'ConditionalStyle<Values<("flex" | "grid" | "none" | "block" | "inline-block" | "inline-flex" | "contents")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'ConditionalStyle<Values<("fixed" | "absolute" | "relative" | "sticky")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'ConditionalStyle<Values<("column" | "column-reverse" | "row" | "row-reverse")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:'ConditionalStyle<Values<("0" | "1")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:'ConditionalStyle<Values<("0" | "1")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'ConditionalStyle<Values<("center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:'ConditionalStyle<Values<readonly ["flex-start", "center", "flex-end", "stretch"], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:'ConditionalStyle<Values<("center" | "stretch" | "flex-end" | "flex-start" | "baseline")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:'ConditionalStyle<Values<("center" | "stretch" | "flex-end" | "flex-start" | "baseline")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},overflowX:{defaultValue:null,description:"",name:"overflowX",required:!1,type:{name:'ConditionalStyle<Values<("auto" | "hidden" | "scroll")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},overflowY:{defaultValue:null,description:"",name:"overflowY",required:!1,type:{name:'ConditionalStyle<Values<("auto" | "hidden" | "scroll")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},visibility:{defaultValue:null,description:"",name:"visibility",required:!1,type:{name:'ConditionalStyle<Values<("hidden" | "visible")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; thin: string; thick: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderLeftRadius:{defaultValue:null,description:"",name:"borderLeftRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderRightRadius:{defaultValue:null,description:"",name:"borderRightRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderTopRadius:{defaultValue:null,description:"",name:"borderTopRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},borderBottomRadius:{defaultValue:null,description:"",name:"borderBottomRadius",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ none: string; xs: string; sm: string; md: string; lg: string; circle: string; }, CSSVarFunction>, { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 9 more ...; 16: CSSVarFunction; }, { ...; }> | Values<...> | Values<...> | Values<...>>'}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 9 more ...; 16: CSSVarFunction; }, { ...; }> | Values<...>>'}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 9 more ...; 16: CSSVarFunction; }, { ...; }> | Values<...>>'}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:'ConditionalStyle<Values<("auto" | "hidden" | "scroll")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},placeItems:{defaultValue:null,description:"",name:"placeItems",required:!1,type:{name:'ConditionalStyle<Values<("center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }> | Values<...>>'}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:'ConditionalStyle<Values<{ auto: "auto"; 0: CSSVarFunction; 0.25: CSSVarFunction; 0.5: CSSVarFunction; 1: CSSVarFunction; 1.5: CSSVarFunction; ... 9 more ...; 16: CSSVarFunction; }, { ...; }> | Values<...> | Values<...> | Values<...>>'}},backdropFilter:{defaultValue:null,description:"",name:"backdropFilter",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"blur"'}]}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"body"'},{value:'"mono"'}]}},textOverflow:{defaultValue:null,description:"",name:"textOverflow",required:!1,type:{name:"enum",value:[{value:'"clip"'},{value:'"ellipsis"'}]}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"enum",value:[{value:'"capitalize"'},{value:'"lowercase"'},{value:'"uppercase"'}]}},userSelect:{defaultValue:null,description:"",name:"userSelect",required:!1,type:{name:"enum",value:[{value:'"none"'}]}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"initial"'},{value:'"normal"'},{value:'"nowrap"'}]}},wordBreak:{defaultValue:null,description:"",name:"wordBreak",required:!1,type:{name:"enum",value:[{value:'"break-word"'}]}},wordWrap:{defaultValue:null,description:"",name:"wordWrap",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"initial"'},{value:'"normal"'},{value:'"break-word"'}]}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"0"'},{value:'"10"'},{value:'"20"'}]}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 27 more ...; white: "#ffffff"; }, CSSVarFunction>, { ...; }>>'}},borderBottomColor:{defaultValue:null,description:"",name:"borderBottomColor",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 27 more ...; white: "#ffffff"; }, CSSVarFunction>, { ...; }>>'}},borderBottomStyle:{defaultValue:null,description:"",name:"borderBottomStyle",required:!1,type:{name:'ConditionalStyle<Values<readonly ["solid", "dashed", "dotted"], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},borderLeftColor:{defaultValue:null,description:"",name:"borderLeftColor",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 27 more ...; white: "#ffffff"; }, CSSVarFunction>, { ...; }>>'}},borderLeftStyle:{defaultValue:null,description:"",name:"borderLeftStyle",required:!1,type:{name:'ConditionalStyle<Values<readonly ["solid", "dashed", "dotted"], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},borderRightColor:{defaultValue:null,description:"",name:"borderRightColor",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 27 more ...; white: "#ffffff"; }, CSSVarFunction>, { ...; }>>'}},borderRightStyle:{defaultValue:null,description:"",name:"borderRightStyle",required:!1,type:{name:'ConditionalStyle<Values<readonly ["solid", "dashed", "dotted"], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},borderTopColor:{defaultValue:null,description:"",name:"borderTopColor",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 27 more ...; white: "#ffffff"; }, CSSVarFunction>, { ...; }>>'}},borderTopStyle:{defaultValue:null,description:"",name:"borderTopStyle",required:!1,type:{name:'ConditionalStyle<Values<readonly ["solid", "dashed", "dotted"], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},cursor:{defaultValue:null,description:"",name:"cursor",required:!1,type:{name:'ConditionalStyle<Values<("text" | "default" | "pointer")[], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '50': string; '80': string; '100': string; }, CSSVarFunction>, { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>"}},outline:{defaultValue:null,description:"",name:"outline",required:!1,type:{name:'ConditionalStyle<Values<"none"[], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},pointerEvents:{defaultValue:null,description:"",name:"pointerEvents",required:!1,type:{name:'ConditionalStyle<Values<("auto" | "none")[], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 27 more ...; white: "#ffffff"; }, CSSVarFunction>, { ...; }>>'}},borderStyle:{defaultValue:null,description:"",name:"borderStyle",required:!1,type:{name:'ConditionalStyle<Values<readonly ["solid", "dashed", "dotted"], { defaultClass: string; conditions: { base: string; active: string; disabled: string; focus: string; hover: string; checked: string; }; }>>'}}}}}catch{}export{x as A};
//# sourceMappingURL=Avatar-5a2bae22.js.map
