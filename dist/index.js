// @bun
import{writeFileSync as Tt}from"fs";var N=(t)=>{return!isNaN(parseFloat(t))&&isFinite(t)};var Et=(t)=>{return t.startsWith(".")||t.startsWith("#")};var I=(t)=>typeof t==="string",b=(t)=>Array.isArray(t),P=(t)=>typeof t==="object";var Bt=(t)=>{return Number.isInteger(Number(t))};class Rt{static set p(t){if(Array.isArray(t))console.log(...t);else console.log(t)}}class nt{_c=0;_id="";constructor(t){if(this._c=0,this._id=t??e(5),t?.includes("-")){let[n,r]=[t.split("-").slice(0,-1).join("-"),t.split("-").slice(-1)[0]];this._id=n,this._c=N(r)?parseInt(r):0}}get id(){return this._id+"-"+this._c}get mid(){return this._id+"-"+ ++this._c}}var Fn=new RegExp(/(\d+)(\d*)/,"m"),Zt=(t)=>Array.from({length:t},(n,r)=>r),qt="ABCDEFGHIJKLMNOPQRSTUVWXYZ",Wt="abcdefghijklmnopqrstuvwxyz",Qt=Zt(10).join("");var c=(t)=>JSON.stringify(t),m=(t)=>{return JSON.parse(t)},h=(t)=>{if(t.startsWith("webkit"))t="-"+t;return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},e=(t)=>{let n=qt+Wt;return Array.from({length:t},(r,i)=>n+(i?Qt:"")).reduce((r,i)=>{return r+=i.charAt(Math.floor(Math.random()*i.length))},"")},rt=(t=6,n)=>{if(!n)return Math.floor(Math.random()*t);return Math.round(Math.random()*(n-t)+t)};class M extends Map{obj(t){t&&B(t).forEach(([n,r])=>this.set(n,r))}map(t){t.forEach((n,r)=>{if(n instanceof M)this.set(r,n);else if(b(n)){if(this.lacks(r))this.set(r,[]);this.get(r).push(...n)}else if(P(n))this.ass(r,n);else this.set(r,n)})}ass(t,n){if(!this.has(t))this.set(t,{});J(this.get(t),n)}lacks(t){return!this.has(t)}init(t,n){return this.has(t)?this.get(t):this.set(t,n).get(t)}}var{values:V,keys:j,entries:B,fromEntries:ut,hasOwn:Ut}=Object;var J=Object.assign,s=(t)=>{return Object.keys(t).length};var O=(t,n)=>{return{name:t,content:n}},Ht=(t,n)=>{return{property:t,content:n}},ct=(t,n)=>{return{"http-equiv":t,content:n}};class it{metas=[];constructor(t){t&&this.metas.push(O("description",t))}author(t){return this.meta=O("author",t),this}charset(t){return this.meta={charset:t},this}keywords(...t){return this.meta=O("keywords",t.join(", ")),this}viewport(t){let n=B(t).map(([r,i])=>[h(r),String(i)].join("="));return this.meta=O("viewport",n.join(", ")),this}httpEquiv(t){return B(t).forEach(([n,r])=>{this.meta=ct(h(n),String(r))}),this}robots(...t){return this.meta=O("robots",t.join(", ")),this}themeColor(t){return this.meta=O("theme-color",t),this}openGraph(t){return B(t).forEach(([n,r])=>{this.meta=Ht("og:"+n,String(r))}),this}twitter(t){return B(t).forEach(([n,r])=>{this.meta=O("twitter:"+n,String(r))}),this}and(t){return this}set meta(t){this.metas.push(t)}}var Ot=["charset","name","property","http-equiv"],Dt=(t,n)=>{n.forEach((r)=>{for(let i of Ot)if(i in r){let o=r[i];t[`${i}_${i==="charset"?"":o}`]=r}})},Lt=(t,n)=>{n.forEach((r)=>{if("href"in r){let i=r.href;t[`${i}`]=r}})};class Mt{_head;idm;constructor(t){this._head=new M(t)}set head(t){B(t).forEach(([n,r])=>{if(n==="title"||n==="base"){if(r!==void 0)this._head.set(n,r);return}if(r instanceof it)return Dt(this._head.init("meta",{}),r.metas);if(!b(r))return;switch(n){case"meta":return Dt(this._head.init("meta",{}),r);case"link":return Lt(this._head.init("link",{}),r);case"script":if(r.length){this._head.init(n,[]);let i=r.map((o)=>{if(!o.yid&&this.idm)o.yid="sc"+this.idm.mid;return o});this._head.get(n).push(...i)}return}})}get head(){return this._head}set id(t){this.idm=new nt(t)}}class Nt{lang="en";htmlHead=new M;head;constructor(){this.head=(t={})=>{let n=new Mt(this.htmlHead);n.head=t,this.htmlHead=n.head}}}var Ct=(t,n=!1)=>{if(N(t))return[+t,Bt(t)?"int":"float"];if(n&&/\.\w+$/.test(t))return[t,"file"];if(t==="/")return[t,"-"];if(t.length===36&&t.match(/\-/g)?.length===4)return[t,"uuid"];return[t,"string"]},Ft=(t)=>{let n=t.startsWith("/")?t:"/"+t,r=n.match(/(?<=\/)[^/].*?(?=\/|$)/g)??["/"],[i,o]=r.reduce(([$,f],R)=>{if(R.includes("<")){let D=R.match(/(?<=<)[^/].*?(?=>|$)/g);if(D?.length){let[C,E]=D[0].split(":");if(C&&E)$.push(C),f.push(E)}}else $.push(R===">"?"/":R);return[$,f]},[[],[]]);if(n.endsWith("/")&&n.length>1)i.push("/");return{parsed:i,args:o}};class _{storage=new M;cache(t,n){if(this.storage.lacks(t))this.storage.set(t,n());return this.storage.get(t)}}var Pt=["int","float","file","uuid","string"],jt=new _;class lt{_storage=new M;set(t){let{parsed:n,path:r}=t,i=c(n);if(!this._storage.get(i))this._storage.set(i,t);else throw`path: ${r} already used.`}get(t){let{parsed:n}=jt.cache(t,()=>Ft(t)),r={},i=this._storage.get(c(n));if(!i&&t!=="/")for(let o of this._storage.keys()){let $=[],f=m(o);if(n.length===f.length){let R=f.map((E,l)=>{let u=Ct(n[l],n.length-1===l);if(E===u[0])return u[0];if(Pt.includes(u[1]))return $.push(u[0]),u[1];return E}),D=c(R);if(this._storage.has(D)){i=this._storage.get(D),i?.args.forEach((E,l)=>{r[E]=$[l]});break}}}return[i,r]}}import{mkdirSync as It,writeFileSync as Vt,existsSync as Gt}from"fs";var k=(t,n="")=>{if(Gt(t))return!0;return Vt(t,n,{flag:"wx"}),!0},v=(t)=>{if(Gt(t))return!0;return It(t,{recursive:!0}),!0};class Y{static default="xs";static prop={xs:"@media (max-width: 480px)",sm:"@media (min-width: 480px)",smd:"@media (min-width: 624px)",md:"@media (min-width: 768px)",lg:"@media (min-width:  1024px)",xl:"@media (min-width: 1280px)",xxl:"@media (min-width: 1536px)",no_hover:"@media (pointer: coarse)",print:"@media print",screen:"@media screen",dark:"@media (prefers-color-scheme: dark)"};constructor(t,n={}){let r=Y.default,i={};if(i[r]=t,!(r in n))n[r]=t;B(n).forEach(([o,$])=>{i[o]=b($)?g($,!1,!1):$}),J(this,i)}static new(t){B(t).forEach(([n,r])=>{if(!this.prop[n])this.prop[n]=`@media (${r})`})}}var w=(t,n={})=>new Y(t,n);class X{_var="";k="";_cvar="";_val={};constructor(t={}){if(s(t)){let[n,r]=B(t)[0];this.k=n,this._var="--"+h(n),this._val=r instanceof Y?r:w(r)}}__(t){return`var(${this._var}${t?","+W(this._var,t):""})`}new(t){return new X({[this.k]:t})}}var Kt=(t)=>new X(t);var At=(t)=>{if(t instanceof Y)return t;if(t instanceof X)return w(t.__());return w(t)};class p{prefix;anim;constructor(t,n=new Set){this.prefix=t;this.anim=n}set(t,n,r){if(!P(n))return;let i=new M,o=($,f)=>{if($.startsWith(":")||$.startsWith(","))this.set(t+$,f,r);else if($.startsWith(" ")){let D=$.match(/^.*?\w/gm)?.[0].slice(0,-1),C=$.replaceAll(/, /gm,`, ${t}${D}`);this.set(t+C,f,r)}else if(Et($))this.set(t+$,f,r);else i.set($,this.props($,At(f)))};if(n instanceof X)i.ass(n._var,this.props(n._var,At(n._val)));else B(n).forEach(([$,f])=>o($,f));r.init(t,i).map(i)}props(t,n){let r=["animation","animationName"].includes(t);return B(n).forEach(([i,o])=>{if(r)n[i]=W(t,this.addPrefixToAnimation(o));else n[i]=W(t,o)}),n}addPrefixToAnimation(t){return t.split(", ").map((i)=>{let o=i.split(" "),$=o[0],f=o.slice(1).join(" ");return this.anim.add(`${this.prefix}${$}`),`${this.prefix}${$} ${f}`}).join(", ")}}class K{pre;data=new M;cid=new M;animCLS=new Set;DATAX=new M;prefix;constructor(t,n=""){this.pre=t,this.prefix=n?n+"_":n}get(t,n){let r=this.pre+n;if(r in this.data)return r;else if(n=="data")return this.data;else if(n=="DATAX")return this.DATAX;else if(n=="cid")return this.cid;else if(n=="prefix")return this.prefix;else if(n=="animCLS")return this.animCLS;return}set(t,n,r){return!1}get css(){return new Proxy(this,this)}load(t){if(t.DATAX.size)t.DATAX.forEach((n,r)=>{this.DATAX.init(r,new M).map(n)});return t.data.size&&this.data.map(t.data),this}}class L extends K{PS;constructor(t="",n=""){super(t,n);this.PS=new p(this.prefix,this.animCLS)}set(t,n,r){let i=this.pre+n;return(b(r)?r:[r]).forEach(($)=>{this.PS.set(i,$,this.DATAX.init(this.prefix,new M))}),!0}get css(){return new Proxy(this,this)}}class z extends K{webkit;PS;constructor(t="",n=!0){super("",t);this.webkit=n;this.PS=new p(this.prefix)}set(t,n,r){let i=this.prefix+n,o=b(r)?r:[r],$=new M;o.forEach((D)=>{B(D).forEach(([C,E])=>{this.PS.set(C,E,$)})});let f=this.DATAX.init(this.prefix,new M);this.animCLS.add(i);let R=`@keyframes ${i}`;if(f.set(R,$),this.webkit){let D=`@-webkit-keyframes ${i}`;f.set(D,$)}return!0}get css(){return new Proxy(this,this)}}class y extends K{constructor(t=""){super("@",t)}set(t,n,r){let i=this.pre+n;if(i in t.data)this.data.get(i)?.push(r);else this.data.set(i,[r]);return t}get css(){return new Proxy(this,this)}}class S extends K{constructor(t=""){super("@font-face",t);this.data.set("@font",[])}set(t,n,r){return this.data.get("@font")?.push(r),!0}get css(){return new Proxy(this,this)}}var zt=(t,n)=>{return t==="content"&&!n.includes("(")?`'${n}'`:n},yt=(t)=>{let n=(o)=>Array.from(t.matchAll(o),($)=>$[1]),r=/\.(?![0-9])([a-zA-Z0-9_-]+)(?![^{]*})/g,i=/#(?![0-9])([a-zA-Z0-9_-]+)(?![^{]*})/g;return{classes:[...new Set(n(r))],ids:[...new Set(n(i))]}},St=(t,n)=>{return t.replaceAll(/\.|\#/g,(r)=>r+n)},bt=(t,n,r,i)=>{t[n][r].push(...i.split(",").map((o)=>o.trim()))},ot=(t,n)=>{let r=B(n).map(([i,o])=>`${i}: ${o};`).join(` 
  `);return`${t} {
  ${r}
}`};function ht(t,n,r=[],i=[]){return t.DATAX.forEach((o,$)=>{o.forEach((f,R)=>{f.forEach((D,C)=>{B(D).forEach(([E,l])=>{let u=E,A=zt(u,l),G=c({[h(C)]:A}),{classes:U,ids:T}=yt(R);[U,T].flat().forEach((Z)=>{t.cid.set(Z,$+Z)});let q=$?St(R,$):R;if(r.length&&q.startsWith(".")){if(U.some((H)=>r.includes(H)||i.length&&i.includes(H)))x(n,u,G),bt(n,u,G,q)}else x(n,u,G),bt(n,u,G,q)})})})}),t}function Jt(t,n,r){t.DATAX.forEach((i,o)=>{i.forEach(($,f)=>{$.forEach((R,D)=>{let C={};R.forEach((E,l)=>{B(E).forEach(([u,A])=>{let G=u;if(!C[G])C[G]={};C[G][h(l)]=A})}),B(C).forEach(([E,l])=>{let u=f.split(" ")[1];if(r.has(u)){let A=E;x(n,A,f),n[A][f].push(ot(D,l))}})})})})}function Yt(t,n){for(let[r,i]of t.data)for(let o of i){let $=o.includes("(")?o:`"${o}"`;n.push(`${r} ${$.trim()};`)}}function Xt(t,n){t.data.get("@font")?.forEach((i)=>{let o=B(i).map(([$,f])=>`${h($)}: ${W($,f)}`).join(`;
	`);n.push(`@font-face {
	${o}
}`)})}var wt=["transitionDuration","transitionDelay","animationDelay","animationDuration"],at=[...wt,"zIndex","opacity","aspectRatio","flexGrow","order","flexShrink","flexBasis","flex","fillOpacity","lineClamp","webkitLineClamp"];function W(t,n,r={rem:!0,deg:!1}){let{rem:i,deg:o}=r;if(n instanceof X)return n.__();if(b(n))return n.map((f)=>W(t,f)).join(" ");if(typeof n==="number"){let f=n.toString();if(i&&!at.includes(t))f+="rem";if(wt.includes(t))f+="s";if(o)f+="deg";return f}let $=n.toString();return $.includes("(")?$:`${$}`}function g(t,n=!0,r=!0,i=!1,o=!1){return t.map((f)=>{if(b(f))return g(f,n,!1,i,o);if(I(f))return o?`'${f}'`:f;if(f instanceof X)return f.__();if(N(f))return`${f}${n?"":i?"deg":"rem"}`;return""}).join(r?", ":" ")}var x=(t,n,r)=>{try{if(!t[n][r])t[n][r]=[]}catch(i){console.error(`property "${n}" not found!`)}};class $t{css="";cid={};constructor(){}updateCid(t){t.forEach((n,r)=>{this.cid[r]=n})}load(t,n=[],r=[]){let i=Y.prop,o=Y.default,$={},f={},R={},D=[];j(i).forEach((E)=>{$[E]={},f[E]={},R[E]={}});let C=new Set;return V(t).forEach((E)=>{if(E instanceof L){let l=ht(E,$,n,r);E.animCLS.forEach((u)=>{C.add(u)}),this.updateCid(l.cid)}else if(E instanceof z)Jt(E,f,C);else if(E instanceof y)Yt(E,D);else if(E instanceof S)Xt(E,D)}),B($).forEach(([E,l])=>{if(!R[E])R[E]={};B(l).forEach(([u,A])=>{let G=A.join(", ");if(!R[E][G])R[E][G]={};J(R[E][G],m(u))})}),B(R).forEach(([E,l])=>{let u=[];if(B(l).forEach(([A,G])=>u.push(ot(A,G))),B(f[E]).forEach(([A,G])=>{u.push(`${A} {
${G.join(`
`)}
}`)}),u.length)if(D.push(`/* -------------- ${E+(E==o?" ( default )":"")} */`),E==o)D.push(u.join(`
`));else D.push(`${i[E]}	{
${u.join(`
`)}
}`)}),this.css=D.join(`
`),this}}var a={important:" !important",visible:"visible",hidden:"hidden",auto:"auto",none:"none",clip:"clip",scroll:"scroll",initial:"initial",inherit:"inherit",flex:"flex",center:"center",flex_start:"flex-start",flex_end:"flex-end",space_evenly:"space-evenly",stretch:"stretch",wrap:"wrap",column:"column",column_reverse:"column-reverse",row:"row",row_reverse:"row-reverse",space_between:"space-between",space_around:"space-around",pr100:"100%",pr50:"50%",i100vh:"100vh",i100vw:"100vw",block:"block",sticky:"sticky",fixed:"fixed",absolute:"absolute",relative:"relative",pointer:"pointer",grabbing:"grabbing",checkbox:"checkbox",solid:"solid",inset:"inset",bold:"bold",currentColor:"currentColor",forwards:"forwards",text:"text",norepeat:"no-repeat",nowrap:"nowrap",difference:"difference",preserve3d:"preserve-3d"};var gt={aliceBlue:"#F0F8FF",antiqueWhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedAlmond:"#FFEBCD",blue:"#0000FF",blueViolet:"#8A2BE2",brown:"#A52A2A",burlyWood:"#DEB887",cadetBlue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerBlue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkBlue:"#00008B",darkCyan:"#008B8B",darkGoldenrod:"#B8860B",darkGray:"#A9A9A9",darkGreen:"#006400",darkKhaki:"#BDB76B",darkMagenta:"#8B008B",darkOliveGreen:"#556B2F",darkOrange:"#FF8C00",darkOrchid:"#9932CC",darkRed:"#8B0000",darkSalmon:"#E9967A",darkSeaGreen:"#8FBC8B",darkSlateBlue:"#483D8B",darkSlateGray:"#2F4F4F",darkTurquoise:"#00CED1",darkViolet:"#9400D3",deepPink:"#FF1493",deepSkyBlue:"#00BFFF",dimGray:"#696969",dodgerBlue:"#1E90FF",fireBrick:"#B22222",floralWhite:"#FFFAF0",forestGreen:"#228B22",fuchsia:"#FF00FF",gainsboro:"#DCDCDC",ghostWhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",green:"#008000",greenYellow:"#ADFF2F",honeyDew:"#F0FFF0",hotPink:"#FF69B4",indianRed:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderBlush:"#FFF0F5",lawnGreen:"#7CFC00",lemonChiffon:"#FFFACD",lightBlue:"#ADD8E6",lightCoral:"#F08080",lightCyan:"#E0FFFF",lightGoldenrodYellow:"#FAFAD2",lightGray:"#D3D3D3",lightGreen:"#90EE90",lightPink:"#FFB6C1",lightSalmon:"#FFA07A",lightSeaGreen:"#20B2AA",lightSkyBlue:"#87CEFA",lightSlateGray:"#778899",lightSteelBlue:"#B0C4DE",lightYellow:"#FFFFE0",lime:"#00FF00",limeGreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",maroon:"#800000",mediumAquamarine:"#66CDAA",mediumBlue:"#0000CD",mediumOrchid:"#BA55D3",mediumPurple:"#9370DB",mediumSeaGreen:"#3CB371",mediumSlateBlue:"#7B68EE",mediumSpringGreen:"#00FA9A",mediumTurquoise:"#48D1CC",mediumVioletRed:"#C71585",midnightBlue:"#191970",mintCream:"#F5FFFA",mistyRose:"#FFE4E1",moccasin:"#FFE4B5",navajoWhite:"#FFDEAD",navy:"#000080",oldLace:"#FDF5E6",olive:"#808000",oliveDrab:"#6B8E23",orange:"#FFA500",orangeRed:"#FF4500",orchid:"#DA70D6",paleGoldenrod:"#EEE8AA",paleGreen:"#98FB98",paleTurquoise:"#AFEEEE",paleVioletRed:"#DB7093",papayaWhip:"#FFEFD5",peachPuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderBlue:"#B0E0E6",purple:"#800080",rebeccaPurple:"#663399",red:"#FF0000",rosyBrown:"#BC8F8F",royalBlue:"#4169E1",saddleBrown:"#8B4513",salmon:"#FA8072",sandyBrown:"#F4A460",seaGreen:"#2E8B57",seaShell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyBlue:"#87CEEB",slateBlue:"#6A5ACD",slateGray:"#708090",snow:"#FFFAFA",springGreen:"#00FF7F",steelBlue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",whiteSmoke:"#F5F5F5",yellow:"#FFFF00",yellowGreen:"#9ACD32",transparent:"transparent",color:"currentColor",rbga:(t=0,n=0,r=0,i=1)=>{return`rgba(${[t,n,r,i].join(",")})`},rand:()=>{let t=Object.entries(gt),n=rt(0,t.length-1),r=["transparent","rgba","rand","color","hex2rbga"],[i,o]=t[n];while(r.includes(i)){let $=rt(0,t.length-1);[i,o]=t[$]}return o},hex2rbga:(t,n=1)=>{let r=t.replace("#","");if(r.length===3)r=`${r[0]}${r[0]}${r[1]}${r[1]}${r[2]}${r[2]}`;let i=parseInt(r.substring(0,2),16),o=parseInt(r.substring(2,4),16),$=parseInt(r.substring(4,6),16);if(n>1&&n<=100)n=n/100;return`rgba(${i}, ${o}, ${$}, ${n})`}};class tt{static attr(...t){return`attr(${g(t)})`}static blur(...t){return`blur(${g(t,!1,!1,!1)})`}static brightness(...t){return`brightness(${g(t)})`}static calc(...t){return`calc(${g(t,!1,!1,!1,!1)})`}static circle(...t){return`circle(${g(t,!1,!1,!1,!1)})`}static colorMix(...t){return`color-mix(${g(t)})`}static conicGradient(...t){return`conic-gradient(${g(t)})`}static contrast(...t){return`contrast(${g(t)})`}static cubicBezier(...t){return`cubic-bezier(${g(t)})`}static dropShadow(...t){return`drop-shadow(${g(t,!1,!1,!1,!1)})`}static env(...t){return`env(${g(t,!1)})`}static grayscale(...t){return`grayscale(${g(t)})`}static hsl(...t){return`hsl(${g(t)})`}static hsla(...t){return`hsla(${g(t)})`}static hueRotate(...t){return`hue-rotate(${g(t,!1,!1,!0)})`}static inset(...t){return`inset(${g(t)})`}static invert(...t){return`invert(${g(t)})`}static linearGradient(...t){return`linear-gradient(${g(t)})`}static matrix(...t){return`matrix(${g(t)})`}static matrix3d(...t){return`matrix3d(${g(t)})`}static max(...t){return`max(${g(t,!1)})`}static min(...t){return`min(${g(t,!1)})`}static opacity(...t){return`opacity(${g(t)})`}static path(...t){return`path(${g(t,!0,!0,!1,!0)})`}static perspective(...t){return`perspective(${g(t,!1,!1,!1,!1)})`}static polygon(...t){return`polygon(${g(t)})`}static radialGradient(...t){return`radial-gradient(${g(t)})`}static repeatingConicFunction(...t){return`repeating-conic-function(${g(t)})`}static repeatingLinearGradient(...t){return`repeating-linear-gradient(${g(t)})`}static repeatingRadialGradient(...t){return`repeating-radial-gradient(${g(t)})`}static rgb(...t){return`rgb(${g(t)})`}static rgba(...t){return`rgba(${g(t)})`}static rotate(...t){return`rotate(${g(t,!1,!1,!0)})`}static rotate3d(t,n,r,i){return`rotate3d(${t},${t},${t},${i})`}static rotateX(...t){return`rotateX(${g(t,!1,!1,!0)})`}static rotateY(...t){return`rotateY(${g(t,!1,!1,!0)})`}static rotateZ(...t){return`rotateZ(${g(t,!1,!1,!0)})`}static saturate(...t){return`saturate(${g(t)})`}static scale(...t){return`scale(${g(t)})`}static scale3d(...t){return`scale3d(${g(t)})`}static scaleX(...t){return`scaleX(${g(t)})`}static scaleY(...t){return`scaleY(${g(t)})`}static scaleZ(...t){return`scaleZ(${g(t)})`}static sepia(...t){return`sepia(${g(t)})`}static skew(...t){return`skew(${g(t,!1,!0,!0)})`}static skewX(...t){return`skewX(${g(t,!1,!1,!0)})`}static skewY(...t){return`skewY(${g(t,!1,!1,!0)})`}static translate(...t){return`translate(${g(t,!1,!0)})`}static translate3d(...t){return`translate3d(${g(t,!1,!1)})`}static translateX(...t){return`translateX(${g(t,!1,!1)})`}static translateY(...t){return`translateY(${g(t,!1,!1)})`}static translateZ(...t){return`translateZ(${g(t,!1,!1)})`}static url(...t){return`url(${g(t)})`}static var(t,n=""){t="--"+h(t);let r=n?", "+g([n],!1,!1):"";return`var(${g([t],!1)}${r})`}}function F(t){return function(...n){let r=n.reduce((i,o)=>{if(o instanceof X)i[o._var]=o._val;else if(P(o))J(i,o);return i},{});if(t.startsWith("::before")||t.startsWith("::after")){let i=r.content;if(I(i))i=i.includes("(")?i:`"${i}"`;r.content=i?i:"''"}return{[t]:r}}}class Q{static attr(t){let[n,r]=B(t)[0];return F(`[${n}="${r}"]`)}static after(t=""){return F("::after"+t)}static before(t=""){return F("::before"+t)}static backdrop(t=""){return F("::backdrop"+t)}static cue(t=""){return F("::cue"+t)}static cueRegion(t=""){return F("::cue-region"+t)}static firstLetter(t=""){return F("::first-letter"+t)}static firstLine(t=""){return F("::first-line"+t)}static marker(t=""){return F("::marker"+t)}static part(t=""){return F("::part"+t)}static placeholder(t=""){return F("::placeholder"+t)}static selection(t=""){return F("::selection"+t)}static slotted(t=""){return F("::slotted"+t)}static spellingError(t=""){return F("::spelling-error"+t)}static targetText(t=""){return F("::target-text"+t)}static viewTransition(t=""){return F("::view-transition"+t)}static viewTransitionGroup(t=""){return F("::view-transition-group"+t)}static viewTransitionImagePair(t=""){return F("::view-transition-image-pair"+t)}static viewTransitionNew(t=""){return F("::view-transition-new"+t)}static viewTransitionOld(t=""){return F("::view-transition-old"+t)}static scrollbar(t=""){return F("::-webkit-scrollbar"+t)}static scrollbarThumb(t=""){return F("::-webkit-scrollbar-thumb"+t)}static scrollbarTrack(t=""){return F("::-webkit-scrollbar-track"+t)}static scrollbarCorner(t=""){return F("::-webkit-scrollbar-corner"+t)}static active(t=""){return F(":active"+t)}static anyLink(t=""){return F(":any-link"+t)}static autofill(t=""){return F(":autofill"+t)}static blank(t=""){return F(":blank"+t)}static checked(t=""){return F(":checked"+t)}static current(t=""){return F(":current"+t)}static default(t=""){return F(":default"+t)}static defined(t=""){return F(":defined"+t)}static disabled(t=""){return F(":disabled"+t)}static empty(t=""){return F(":empty"+t)}static enabled(t=""){return F(":enabled"+t)}static first(t=""){return F(":first"+t)}static firstChild(t=""){return F(":first-child"+t)}static firstOfType(t=""){return F(":first-of-type"+t)}static fullscreen(t=""){return F(":fullscreen"+t)}static future(t=""){return F(":future"+t)}static focus(t=""){return F(":focus"+t)}static focusVisible(t=""){return F(":focus-visible"+t)}static focusWithin(t=""){return F(":focus-within"+t)}static host(t=""){return F(":host"+t)}static hover(t=""){return F(":hover"+t)}static indeterminate(t=""){return F(":indeterminate"+t)}static inRange(t=""){return F(":in-range"+t)}static invalid(t=""){return F(":invalid"+t)}static lastChild(t=""){return F(":last-child"+t)}static lastOfType(t=""){return F(":last-of-type"+t)}static left(t=""){return F(":left"+t)}static link(t=""){return F(":link"+t)}static localLink(t=""){return F(":local-link"+t)}static modal(t=""){return F(":modal"+t)}static onlyChild(t=""){return F(":only-child"+t)}static onlyOfType(t=""){return F(":only-of-type"+t)}static optional(t=""){return F(":optional"+t)}static outOfRange(t=""){return F(":out-of-range"+t)}static past(t=""){return F(":past"+t)}static pictureInPicture(t=""){return F(":picture-in-picture"+t)}static placeholderShown(t=""){return F(":placeholder-shown"+t)}static paused(t=""){return F(":paused"+t)}static playing(t=""){return F(":playing"+t)}static readOnly(t=""){return F(":read-only"+t)}static readWrite(t=""){return F(":read-write"+t)}static required(t=""){return F(":required"+t)}static right(t=""){return F(":right"+t)}static root(t=""){return F(":root"+t)}static scope(t=""){return F(":scope"+t)}static target(t=""){return F(":target"+t)}static targetWithin(t=""){return F(":target-within"+t)}static userInvalid(t=""){return F(":user-invalid"+t)}static valid(t=""){return F(":valid"+t)}static visited(t=""){return F(":visited"+t)}static dir(t){return F(`:dir(${t})`)}static has(t){return F(`:has(${t})`)}static host_(t){return F(`:host(${t})`)}static hostContext(t){return F(`:host-context(${t})`)}static is(t){return F(`:is(${t})`)}static lang(t){return F(`:lang(${t})`)}static not(t){return F(`:not(${t})`)}static nthChild(t){return F(`:nth-child(${t})`)}static nthCol(t){return F(`:nth-col(${t})`)}static nthLastChild(t){return F(`:nth-last-child(${t})`)}static nthLastCol(t){return F(`:nth-last-col(${t})`)}static nthLastOfType(t){return F(`:nth-last-of-type(${t})`)}static nthOfType(t){return F(`:nth-of-type(${t})`)}static state(t){return F(`:state(${t})`)}static where(t){return F(`:where(${t})`)}static and(t){return F(", "+t)}static child(t){return F(" > "+t)}static desc(t){return F(" "+t)}static next(t){return F(" + "+t)}static general(t){return F(" ~ "+t)}static _with(t){if(!(t.startsWith(".")||t.startsWith("#")))throw Error("should start with . or # - class / id");return F(t)}}var Qi={DGRAY:{background:"#2f2f2f"},MSIZES:Q.after()({position:a.absolute,right:4.3,top:1.3,content:w("xs",{sm:"sm",smd:"smd",md:"md",lg:"lg",xl:"xl",xxl:"xxl"}),color:gt.orange,fontSize:1.5,zIndex:1000,pointerEvents:a.none}),BORDER1:{border:"1px dashed #80808070"},TRANS25:{transition:"all 0.25s"},SCROLL2:(t,n=a.inherit)=>[Q.scrollbar()({width:w(1,{no_hover:0}),height:w(1,{no_hover:0})}),Q.scrollbarTrack()({background:n}),Q.scrollbarThumb()({background:t,borderRadius:2,backgroundClip:"content-box",border:"2.5px solid transparent"},Q.hover()({border:"1px solid transparent",cursor:a.grabbing})),Q.scrollbarCorner()({background:n})],BACKDROP:(t=0.8)=>{return{backdropFilter:tt.blur(t),webkitBackdropFilter:tt.blur(t)}},MASK:(t)=>{return{mask:t,webkitMask:t}}};class dt{name;prefix;save;exportMap=!1;cids=new M;constructor({name:t,prefix:n,sweetSS:r=[],exportMap:i=!1,webkitKeyframes:o}){this.name=t,this.prefix=n??"",this.exportMap=i;let $=b(r)?r:[r];st.call(this,this.prefix,$,o),this.save=({dir:f,mapDir:R,mapName:D,minify:C=!0,shaker:E=[],include:l=[]})=>{let u=new $t().load(this,E,l),A=b(f)?f:[f],G=C?mt(u.css):u.css;A.forEach((T)=>{if(!T)return;let q=T.endsWith("/")?"":"/",Z=T+q+t+".css";v(T+q),k(Z),Tt(Z,G)});let U=R?R:A[0]??"";if(U){let T=U.endsWith("/")?"":"/",q=D?D:"css",Z=U+T+q+".js";v(U+T),k(Z),this.cids.init(t,{});let H=this.cids.get(t);B(u.cid).forEach(([d,ft])=>{if(H[d])H[d]=ft+" "+H[d];else H[d]=ft}),et(Z,this.cids)}}}}var et=(t,n)=>{let r={};n.values().forEach((o)=>{B(o).forEach(([$,f])=>{if(!r[$])r[$]=[f];else r[$].push(f)})});let i=B(r).map(([o,$])=>{return`${o} = "${$.join(" ")}"`}).join();Tt(t,`export const ${i};`);return},mt=(t)=>{return t.replace(/\/\*[\s\S]*?\*\//g,"").replace(/\s*([{}:;,])\s*/g,"$1").trim()};function st(t,n,r=!0){let i={dom:new L("",t),id:new L("#",t),cx:new L(".",t),kf:new z(t,r),at:new y,font:new S};n.forEach((o)=>{let $=o.exportMap,f={};if(j(i).forEach((R)=>{if(i[R].load(o[R]),$)J(f,ut(o[R].cid))}),$&&s(f)){this.cids.set(o.name,{});let R=this.cids.get(o.name);J(R,f)}}),j(i).forEach((o)=>{i[o]=i[o].css}),J(this,i)}function zi(t){return t.split("/").slice(-1)[0].split(".")[0]}export{Qi as x,a as v,Q as ps,Y as media,w as med,zi as fileName,tt as f,gt as c,Kt as _var,dt as SweetSS,Rt as $$};
