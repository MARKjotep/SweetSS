// @bun
var Y={important:" !important",visible:"visible",hidden:"hidden",auto:"auto",none:"none",clip:"clip",scroll:"scroll",initial:"initial",inherit:"inherit",flex:"flex",center:"center",flex_start:"flex-start",flex_end:"flex-end",space_evenly:"space-evenly",stretch:"stretch",wrap:"wrap",column:"column",column_reverse:"column-reverse",row:"row",row_reverse:"row-reverse",space_between:"space-between",space_around:"space-around",pr100:"100%",pr50:"50%",i100vh:"100vh",i100vw:"100vw",block:"block",sticky:"sticky",fixed:"fixed",absolute:"absolute",relative:"relative",pointer:"pointer",grabbing:"grabbing",checkbox:"checkbox",solid:"solid",inset:"inset",bold:"bold",currentColor:"currentColor",forwards:"forwards",text:"text",norepeat:"no-repeat",nowrap:"nowrap",difference:"difference",preserve3d:"preserve-3d"};class V{static set p(t){if(Array.isArray(t))console.log(...t);else console.log(t)}}class e extends Map{obj(t){t&&A(t).forEach(([n,F])=>this.set(n,F))}map(t){t.forEach((n,F)=>{this.set(F,n)})}ass(t,n){if(!this.has(t))this.set(t,{});f(this.get(t),n)}}var rt=(t)=>Array.from({length:t},(n,F)=>F);var gt=rt(10).join(""),ft=new RegExp(/(\d+)(\d*)/,"m");var T=(t)=>{return!isNaN(parseFloat(t))&&isFinite(t)};var K=(t)=>{return t.startsWith(".")||t.startsWith("#")};var y=(t)=>typeof t==="string",a=(t)=>Array.isArray(t),W=(t)=>typeof t==="object";var{values:P,keys:I,entries:A,hasOwn:Ct}=Object;var f=Object.assign,z=(t)=>{return Object.keys(t).length};var m=(t)=>JSON.stringify(t),k=(t)=>{return JSON.parse(t)},C=(t)=>{if(t.startsWith("webkit"))t="--"+t;return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()};var j=(t=6,n)=>{if(!n)return Math.floor(Math.random()*t);return Math.round(Math.random()*(n-t)+t)};var h={aliceBlue:"#F0F8FF",antiqueWhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedAlmond:"#FFEBCD",blue:"#0000FF",blueViolet:"#8A2BE2",brown:"#A52A2A",burlyWood:"#DEB887",cadetBlue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerBlue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkBlue:"#00008B",darkCyan:"#008B8B",darkGoldenrod:"#B8860B",darkGray:"#A9A9A9",darkGreen:"#006400",darkKhaki:"#BDB76B",darkMagenta:"#8B008B",darkOliveGreen:"#556B2F",darkOrange:"#FF8C00",darkOrchid:"#9932CC",darkRed:"#8B0000",darkSalmon:"#E9967A",darkSeaGreen:"#8FBC8B",darkSlateBlue:"#483D8B",darkSlateGray:"#2F4F4F",darkTurquoise:"#00CED1",darkViolet:"#9400D3",deepPink:"#FF1493",deepSkyBlue:"#00BFFF",dimGray:"#696969",dodgerBlue:"#1E90FF",fireBrick:"#B22222",floralWhite:"#FFFAF0",forestGreen:"#228B22",fuchsia:"#FF00FF",gainsboro:"#DCDCDC",ghostWhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",green:"#008000",greenYellow:"#ADFF2F",honeyDew:"#F0FFF0",hotPink:"#FF69B4",indianRed:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderBlush:"#FFF0F5",lawnGreen:"#7CFC00",lemonChiffon:"#FFFACD",lightBlue:"#ADD8E6",lightCoral:"#F08080",lightCyan:"#E0FFFF",lightGoldenrodYellow:"#FAFAD2",lightGray:"#D3D3D3",lightGreen:"#90EE90",lightPink:"#FFB6C1",lightSalmon:"#FFA07A",lightSeaGreen:"#20B2AA",lightSkyBlue:"#87CEFA",lightSlateGray:"#778899",lightSteelBlue:"#B0C4DE",lightYellow:"#FFFFE0",lime:"#00FF00",limeGreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",maroon:"#800000",mediumAquamarine:"#66CDAA",mediumBlue:"#0000CD",mediumOrchid:"#BA55D3",mediumPurple:"#9370DB",mediumSeaGreen:"#3CB371",mediumSlateBlue:"#7B68EE",mediumSpringGreen:"#00FA9A",mediumTurquoise:"#48D1CC",mediumVioletRed:"#C71585",midnightBlue:"#191970",mintCream:"#F5FFFA",mistyRose:"#FFE4E1",moccasin:"#FFE4B5",navajoWhite:"#FFDEAD",navy:"#000080",oldLace:"#FDF5E6",olive:"#808000",oliveDrab:"#6B8E23",orange:"#FFA500",orangeRed:"#FF4500",orchid:"#DA70D6",paleGoldenrod:"#EEE8AA",paleGreen:"#98FB98",paleTurquoise:"#AFEEEE",paleVioletRed:"#DB7093",papayaWhip:"#FFEFD5",peachPuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderBlue:"#B0E0E6",purple:"#800080",rebeccaPurple:"#663399",red:"#FF0000",rosyBrown:"#BC8F8F",royalBlue:"#4169E1",saddleBrown:"#8B4513",salmon:"#FA8072",sandyBrown:"#F4A460",seaGreen:"#2E8B57",seaShell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyBlue:"#87CEEB",slateBlue:"#6A5ACD",slateGray:"#708090",snow:"#FFFAFA",springGreen:"#00FF7F",steelBlue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",whiteSmoke:"#F5F5F5",yellow:"#FFFF00",yellowGreen:"#9ACD32",transparent:"transparent",color:"currentColor",rbga:(t=0,n=0,F=0,i=1)=>{return`rgba(${[t,n,F,i].join(",")})`},rand:()=>{let t=Object.entries(h),n=j(0,t.length-1),F=["transparent","rgba","rand","color","hex2rbga"],[i,l]=t[n];while(F.includes(i)){let $=j(0,t.length-1);[i,l]=t[$]}return l},hex2rbga:(t,n=1)=>{let F=t.replace("#","");if(F.length===3)F=`${F[0]}${F[0]}${F[1]}${F[1]}${F[2]}${F[2]}`;let i=parseInt(F.substring(0,2),16),l=parseInt(F.substring(2,4),16),$=parseInt(F.substring(4,6),16);if(n>1&&n<=100)n=n/100;return`rgba(${i}, ${l}, ${$}, ${n})`}};var it=["zIndex","opacity","aspectRatio","flexGrow","order","flexShrink","flexBasis","flex","transitionDelay","animationDelay","fillOpacity","lineClamp","webkitLineClamp"];function X(t,n,F={rem:!0,deg:!1}){let{rem:i,deg:l}=F;if(n instanceof u)return n.__();if(a(n))return n.map((B)=>X(t,B)).join(" ");if(typeof n==="number"){let B=n.toString();if(i&&!it.includes(t))B+="rem";if(l)B+="deg";return B}let $=n.toString();return $.includes("(")?$:`${$}`}function R(t,n=!0,F=!0,i=!1,l=!1){return t.map((B)=>{if(y(B))return l?`'${B}'`:B;if(B instanceof u)return B.__();if(T(B))return`${B}${n?"":i?"deg":"rem"}`;return""}).join(F?", ":" ")}class G{static prop={xs:"@media (width <= 480px)",sm:"@media (width >= 480px)",smd:"@media (width >= 624px)",md:"@media (width >=  768px)",lg:"@media (width >=  1024px)",xl:"@media (width >= 1280px)",xxl:"@media (width >= 1536px)",no_hover:"@media (pointer: coarse)",print:"@media print"};static default="xs";constructor(t,n={}){let F=G.default,i={};if(i[F]=t,!(F in n))n[F]=t;A(n).forEach(([l,$])=>{i[l]=a($)?R($,!1,!1):$}),f(this,i)}static setDefault(t){G.default=t}}class u{_var="";k="";_cvar="";_val={};constructor(t={}){if(z(t)){let[n,F]=A(t)[0];this.k=n,this._var="--"+C(n),this._val=F instanceof G?F:g(F)}}__(t){return`var(${this._var}${t?","+X(this._var,t):""})`}new(t){return new u({[this.k]:t})}not(t){return new u({[this.k]:t})}}var g=(t,n={})=>new G(t,n),Rt=(t)=>new u(t);class d{static attr(...t){return`attr(${R(t)}) `}static blur(...t){return`blur(${R(t,!1,!1,!1)}) `}static brightness(...t){return`brightness(${R(t)}) `}static calc(...t){return`calc(${R(t,!1,!1,!1,!1)}) `}static circle(...t){return`circle(${R(t,!1,!1,!1,!1)}) `}static colorMix(...t){return`color-mix(${R(t)}) `}static conicGradient(...t){return`conic-gradient(${R(t)}) `}static contrast(...t){return`contrast(${R(t)}) `}static cubicBezier(...t){return`cubic-bezier(${R(t)}) `}static dropShadow(...t){return`drop-shadow(${R(t,!1,!1,!1,!1)}) `}static env(...t){return`env(${R(t,!1)}) `}static grayscale(...t){return`grayscale(${R(t)}) `}static hsl(...t){return`hsl(${R(t)}) `}static hsla(...t){return`hsla(${R(t)}) `}static hueRotate(...t){return`hue-rotate(${R(t,!1,!1,!0)}) `}static inset(...t){return`inset(${R(t)}) `}static invert(...t){return`invert(${R(t)}) `}static linearGradient(...t){return`linear-gradient(${R(t)}) `}static matrix(...t){return`matrix(${R(t)}) `}static matrix3d(...t){return`matrix3d(${R(t)}) `}static max(...t){return`max(${R(t,!1)}) `}static min(...t){return`min(${R(t,!1)}) `}static opacity(...t){return`opacity(${R(t)}) `}static path(...t){return`path(${R(t,!0,!0,!1,!0)}) `}static perspective(...t){return`perspective(${R(t,!1,!1,!1,!1)}) `}static polygon(...t){return`polygon(${R(t)}) `}static radialGradient(...t){return`radial-gradient(${R(t)}) `}static repeatingConicFunction(...t){return`repeating-conic-function(${R(t)}) `}static repeatingLinearGradient(...t){return`repeating-linear-gradient(${R(t)}) `}static repeatingRadialGradient(...t){return`repeating-radial-gradient(${R(t)}) `}static rgb(...t){return`rgb(${R(t)}) `}static rgba(...t){return`rgba(${R(t)}) `}static rotate(...t){return`rotate(${R(t,!1,!1,!0)}) `}static rotate3d(t,n,F,i){return`rotate3d(${t},${t},${t},${i}) `}static rotateX(...t){return`rotateX(${R(t,!1,!1,!0)}) `}static rotateY(...t){return`rotateY(${R(t,!1,!1,!0)}) `}static rotateZ(...t){return`rotateZ(${R(t,!1,!1,!0)}) `}static saturate(...t){return`saturate(${R(t)}) `}static scale(...t){return`scale(${R(t)}) `}static scale3d(...t){return`scale3d(${R(t)}) `}static scaleX(...t){return`scaleX(${R(t)}) `}static scaleY(...t){return`scaleY(${R(t)}) `}static scaleZ(...t){return`scaleZ(${R(t)}) `}static sepia(...t){return`sepia(${R(t)}) `}static skew(...t){return`skew(${R(t,!1,!0,!0)}) `}static skewX(...t){return`skewX(${R(t,!1,!1,!0)}) `}static skewY(...t){return`skewY(${R(t,!1,!1,!0)}) `}static translate(...t){return`translate(${R(t,!1,!0)}) `}static translate3d(...t){return`translate3d(${R(t,!1,!1)}) `}static translateX(...t){return`translateX(${R(t,!1,!1)}) `}static translateY(...t){return`translateY(${R(t,!1,!1)}) `}static translateZ(...t){return`translateZ(${R(t,!1,!1)}) `}static url(...t){return`url(${R(t)}) `}static var(t,n=""){t="--"+C(t);let F=n?", "+R([n],!1,!1):"";return`var(${R([t],!1)}${F})`}}function r(t){return function(...n){let F=n.reduce((i,l)=>{if(l instanceof u)i[l._var]=l._val;else if(W(l))f(i,l);return i},{});if(t.startsWith("::before")||t.startsWith("::after")){let i=F.content;F.content=i?`"${i}"`:"''"}return{[t]:F}}}class b{static attr(t){let[n,F]=A(t)[0];return r(`[${n}="${F}"]`)}static after(t=""){return r("::after"+t)}static before(t=""){return r("::before"+t)}static backdrop(t=""){return r("::backdrop"+t)}static cue(t=""){return r("::cue"+t)}static cueRegion(t=""){return r("::cue-region"+t)}static firstLetter(t=""){return r("::first-letter"+t)}static firstLine(t=""){return r("::first-line"+t)}static marker(t=""){return r("::marker"+t)}static part(t=""){return r("::part"+t)}static placeholder(t=""){return r("::placeholder"+t)}static selection(t=""){return r("::selection"+t)}static slotted(t=""){return r("::slotted"+t)}static spellingError(t=""){return r("::spelling-error"+t)}static targetText(t=""){return r("::target-text"+t)}static viewTransition(t=""){return r("::view-transition"+t)}static viewTransitionGroup(t=""){return r("::view-transition-group"+t)}static viewTransitionImagePair(t=""){return r("::view-transition-image-pair"+t)}static viewTransitionNew(t=""){return r("::view-transition-new"+t)}static viewTransitionOld(t=""){return r("::view-transition-old"+t)}static scrollbar(t=""){return r("::-webkit-scrollbar"+t)}static scrollbarThumb(t=""){return r("::-webkit-scrollbar-thumb"+t)}static scrollbarTrack(t=""){return r("::-webkit-scrollbar-track"+t)}static scrollbarCorner(t=""){return r("::-webkit-scrollbar-corner"+t)}static active(t=""){return r(":active"+t)}static anyLink(t=""){return r(":any-link"+t)}static autofill(t=""){return r(":autofill"+t)}static blank(t=""){return r(":blank"+t)}static checked(t=""){return r(":checked"+t)}static current(t=""){return r(":current"+t)}static default(t=""){return r(":default"+t)}static defined(t=""){return r(":defined"+t)}static disabled(t=""){return r(":disabled"+t)}static empty(t=""){return r(":empty"+t)}static enabled(t=""){return r(":enabled"+t)}static first(t=""){return r(":first"+t)}static firstChild(t=""){return r(":first-child"+t)}static firstOfType(t=""){return r(":first-of-type"+t)}static fullscreen(t=""){return r(":fullscreen"+t)}static future(t=""){return r(":future"+t)}static focus(t=""){return r(":focus"+t)}static focusVisible(t=""){return r(":focus-visible"+t)}static focusWithin(t=""){return r(":focus-within"+t)}static host(t=""){return r(":host"+t)}static hover(t=""){return r(":hover"+t)}static indeterminate(t=""){return r(":indeterminate"+t)}static inRange(t=""){return r(":in-range"+t)}static invalid(t=""){return r(":invalid"+t)}static lastChild(t=""){return r(":last-child"+t)}static lastOfType(t=""){return r(":last-of-type"+t)}static left(t=""){return r(":left"+t)}static link(t=""){return r(":link"+t)}static localLink(t=""){return r(":local-link"+t)}static modal(t=""){return r(":modal"+t)}static onlyChild(t=""){return r(":only-child"+t)}static onlyOfType(t=""){return r(":only-of-type"+t)}static optional(t=""){return r(":optional"+t)}static outOfRange(t=""){return r(":out-of-range"+t)}static past(t=""){return r(":past"+t)}static pictureInPicture(t=""){return r(":picture-in-picture"+t)}static placeholderShown(t=""){return r(":placeholder-shown"+t)}static paused(t=""){return r(":paused"+t)}static playing(t=""){return r(":playing"+t)}static readOnly(t=""){return r(":read-only"+t)}static readWrite(t=""){return r(":read-write"+t)}static required(t=""){return r(":required"+t)}static right(t=""){return r(":right"+t)}static root(t=""){return r(":root"+t)}static scope(t=""){return r(":scope"+t)}static target(t=""){return r(":target"+t)}static targetWithin(t=""){return r(":target-within"+t)}static userInvalid(t=""){return r(":user-invalid"+t)}static valid(t=""){return r(":valid"+t)}static visited(t=""){return r(":visited"+t)}static dir(t){return r(`:dir(${t})`)}static has(t){return r(`:has(${t})`)}static host_(t){return r(`:host(${t})`)}static hostContext(t){return r(`:host-context(${t})`)}static is(t){return r(`:is(${t})`)}static lang(t){return r(`:lang(${t})`)}static not(t){return r(`:not(${t})`)}static nthChild(t){return r(`:nth-child(${t})`)}static nthCol(t){return r(`:nth-col(${t})`)}static nthLastChild(t){return r(`:nth-last-child(${t})`)}static nthLastCol(t){return r(`:nth-last-col(${t})`)}static nthLastOfType(t){return r(`:nth-last-of-type(${t})`)}static nthOfType(t){return r(`:nth-of-type(${t})`)}static state(t){return r(`:state(${t})`)}static where(t){return r(`:where(${t})`)}static and(t){return r(", "+t)}static child(t){return r(" > "+t)}static desc(t){return r(" "+t)}static next(t){return r(" + "+t)}static general(t){return r(" ~ "+t)}static with(t){if(!(t.startsWith(".")||t.startsWith("#")))throw Error("should start with . or # - class / id");return r(t)}}var lt={DGRAY:{background:"#2f2f2f"},MSIZES:b.after()({position:Y.absolute,right:4.3,top:1.3,content:g("xs",{sm:"sm",smd:"smd",md:"md",lg:"lg",xl:"xl",xxl:"xxl"}),color:h.orange,fontSize:1.5,zIndex:1000,pointerEvents:Y.none}),BORDER1:{border:"1px dashed #80808070"},TRANS25:{transition:"all 0.25s"},SCROLL2:(t,n=Y.inherit)=>[b.scrollbar()({width:g(1,{no_hover:0}),height:g(1,{no_hover:0})}),b.scrollbarTrack()({background:n}),b.scrollbarThumb()({background:t,borderRadius:2,backgroundClip:"content-box",border:"2.5px solid transparent"},b.hover()({border:"1px solid transparent",cursor:Y.grabbing})),b.scrollbarCorner()({background:n})],BACKDROP:(t=0.8)=>{return{backdropFilter:d.blur(t),webkitBackdropFilter:d.blur(t)}},MASK:(t)=>{return{mask:t,webkitMask:t}}};import{readFileSync as Bt,writeFileSync as J}from"fs";import{mkdirSync as $t,writeFileSync as Mt}from"fs";var H=(t,n="")=>{try{return Mt(t,n,{flag:"wx"}),!0}catch(F){return!1}},_=(t)=>{return $t(t,{recursive:!0}),!0};function s(t,n){return A(n).forEach(([F,i])=>{n[F]=X(t,i)}),n}var Dt=(t)=>{return t.replace(/\/\*[\s\S]*?\*\//g,"").replace(/\s*([{}:;,])\s*/g,"$1").trim()};function O(t,n,F,i,l){if(!W(n))return;let $=new e,B=(D,E)=>{if(D.startsWith(":")||D.startsWith(","))O(t+D,E,F,i,l);else if(D.startsWith(" ")){let w=D.match(/^.*?\./gm)?.[0].slice(0,-1),q=D.replaceAll(/, *?\./gm,`, ${t}${w}.`).replaceAll(/, *?\#/gm,`, ${t}${w}#`);O(t+q,E,F,i,l)}else if(K(D))console.log(D,E);else $.set(D,s(D,v(E)))};if(n instanceof u)$.ass(n._var,s(n._var,v(n._val)));else A(n).forEach(([D,E])=>B(D,E));let{classes:M,ids:c}=At(t);if([M,c].flat().forEach((D)=>{i.set(D,l+D)}),t=l?Et(t,l):t,F.has(t))F.get(t)?.map($);else F.set(t,$)}class Z{pre;fix;data={};cid=new e;datax=new e;constructor(t="",n=""){this.pre=t;this.fix=n?n+"_":n}set(t,n,F){let i=this.pre+n,l=a(F)?F:[F];return l.forEach(($)=>{O(i,$,this.datax,this.cid,this.fix)}),this.data[i]=l,!0}get(t,n){let F=this.pre+n;if(F in this.data)return F;else if(n=="data")return this.data;else if(n=="datax")return this.datax;else if(n=="cid")return this.cid;return}get css(){return new Proxy(this,this)}}class Q{data={};cid=new e;datax=new e;constructor(){this.data={}}set(t,n,F){let i=n,l=a(F)?F:[F],$=`@keyframes ${i}`,B=`@-webkit-keyframes ${i}`,M=new e;return l.forEach((c)=>{A(c).forEach(([D,E])=>{O(D,E,M,this.cid,"")})}),this.datax.set($,M),this.datax.set(B,M),this.data[i]=l,!0}get(t,n){let F=n;if(F in this.data)return F;else if(n=="data")return this.data;else if(n=="datax")return this.datax;return}get css(){return new Proxy(this,this)}}class L{data;pre;constructor(t="@"){this.data={},this.pre=t}set(t,n,F){let i=this.pre+n;if(i in t.data)t.data[i].push(F);else t.data[i]=[F];return t}get(t,n){let F=this.pre+n;if(F in t)return t[F];else if(n=="data")return t.data;return t.data[F]}get css(){return new Proxy(this,this)}}class N{data;pre;constructor(t="@font-face"){this.data=[],this.pre=t}set(t,n,F){return this.data.push(F),!0}get css(){return new Proxy(this,this)}}var Et=(t,n)=>{return t.replaceAll(/\.|\#/g,(F)=>F+n)},v=(t)=>{if(t instanceof G)return t;if(t instanceof u)return g(t.__());return g(t)},At=(t)=>{let n=(l)=>Array.from(t.matchAll(l),($)=>$[1]),F=/\.(?![0-9])([a-zA-Z0-9_-]+)(?![^{]*})/g,i=/#(?![0-9])([a-zA-Z0-9_-]+)(?![^{]*})/g;return{classes:[...new Set(n(F))],ids:[...new Set(n(i))]}},p=(t,n)=>{let F=A(n).map(([i,l])=>`${i}: ${l};`).join(` 
  `);return`${t} {
  ${F}
}`},ct=(t,n)=>{return t==="content"&&!n.includes("(")?`'${n}'`:n},x=(t,n,F)=>{if(!t[n][F])t[n][F]=[]},ot=(t,n,F,i)=>{t[n][F].push(...i.split(",").map((l)=>l.trim()))};class tt{css="";cid={};constructor(){}updateCid(t){t.forEach((n,F)=>{this.cid[F]=n})}processCB(t,n){t.datax.forEach((F,i)=>{F.forEach((l,$)=>{A(l).forEach(([B,M])=>{let c=B,D=ct(c,M),E=m({[C($)]:D});x(n,c,E),ot(n,c,E,i)})})}),this.updateCid(t.cid)}processKF(t,n){t.datax.forEach((F,i)=>{F.forEach((l,$)=>{let B={};l.forEach((M,c)=>{A(M).forEach(([D,E])=>{let o=D;if(!B[o])B[o]={};B[o][c]=E})}),A(B).forEach(([M,c])=>{let D=M;x(n,D,i),n[D][i].push(p($,c))})})})}processAT(t,n){for(let[F,i]of A(t.data))for(let l of i){let $=l.includes("(")?l:`"${l}"`;n.push(`${F} ${$.trim()};`)}}processFF(t,n){t.data.forEach((i)=>{let l=A(i).map(([$,B])=>`${C($)}: ${X($,B)}`).join(`;
\t`);n.push(`@font-face {
\t${l}
}`)})}load(t){let n=G.prop,F=G.default,i={},l={},$={},B=[];return I(n).forEach((M)=>{i[M]={},l[M]={},$[M]={}}),P(t).forEach((M)=>{if(M instanceof Z)this.processCB(M,i);else if(M instanceof Q)this.processKF(M,l);else if(M instanceof L)this.processAT(M,B);else if(M instanceof N)this.processFF(M,B)}),A(i).forEach(([M,c])=>{if(!$[M])$[M]={};A(c).forEach(([D,E])=>{let o=E.join(", ");if(!$[M][o])$[M][o]={};f($[M][o],k(D))})}),A($).forEach(([M,c])=>{let D=[];if(A(c).forEach(([E,o])=>D.push(p(E,o))),A(l[M]).forEach(([E,o])=>{D.push(`${E} {
${o.join(`
`)}
}`)}),D.length)if(B.push(`/* -------------- ${M+(M==F?" ( default )":"")} */`),M==F)B.push(D.join(`
`));else B.push(`${n[M]}\t{
${D.join(`
`)}
}`)}),this.css=B.join(`
`),this}}class ut{dom;id;cx;kf=new Q().css;at=new L().css;font=new N().css;save;constructor({name:t,prefix:n}){let F=n??t;this.dom=new Z("",F).css,this.id=new Z("#",F).css,this.cx=new Z(".",F).css,this.save=({path:i,map:l,minify:$})=>{let B=new tt().load(this),M=i.endsWith("/")?"":"/",c=i+M+t+".css";_(i+M),H(c);let D=$?Dt(B.css):B.css;if(J(c,D),l??=i){let E=l.endsWith("/")?"":"/",o=l+E+"css.js";H(o);let w=Bt(o).toString(),q=`export const ${t} = `,nt=JSON.stringify(B.cid),U=q+nt+";";if(w.match(q)){let S=new RegExp(`${q}.*?};`,"gm"),Ft=w.replace(/\n/gm,"").replace(S,U);J(o,Ft)}else{let S=w+U;J(o,S)}}}}}export{lt as x,Y as v,b as ps,g as med,d as f,ut as css,h as c,Rt as _var,V as $$};
