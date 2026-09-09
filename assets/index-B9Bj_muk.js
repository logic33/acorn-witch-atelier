(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const ka="acorn-intro-seen-morning-v1";function id(n){try{if(localStorage.getItem(ka))return null}catch{}n.classList.add("intro-active");const e=document.createElement("div");e.className="intro-layer",e.hidden=!0,e.innerHTML='<video playsinline preload="auto"></video><button class="intro-enter">进入松团子的世界</button>';const t=e.querySelector("video"),i=e.querySelector(".intro-enter");t.poster="/acorn-witch-atelier/assets/intro/arrival-morning-poster.png",t.src="/acorn-witch-atelier/assets/intro/arrival-morning.mp4",n.append(e);let r=!1,s=!1;function a(){if(!s){s=!0,t.pause();try{localStorage.setItem(ka,"1")}catch{}n.classList.add("intro-leaving"),setTimeout(()=>{e.remove(),t.removeAttribute("src"),t.load(),n.classList.remove("intro-active","intro-leaving")},2200)}}return i.onclick=async()=>{if(r){i.hidden=!0;try{await t.play()}catch{i.hidden=!1,i.textContent="点击播放片头"}}},t.onended=a,t.onerror=()=>{i.textContent="进入小屋",i.onclick=a},{start(){r=!0,e.hidden=!1},get active(){return!s}}}function rd(){try{localStorage.removeItem(ka)}catch{}location.reload()}function sd(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var yi={},Ps,sc;function ad(){return sc||(sc=1,Ps=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Ps}var Ls={},On={},ac;function gi(){if(ac)return On;ac=1;let n;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return On.getSymbolSize=function(i){if(!i)throw new Error('"version" cannot be null or undefined');if(i<1||i>40)throw new Error('"version" should be in range from 1 to 40');return i*4+17},On.getSymbolTotalCodewords=function(i){return e[i]},On.getBCHDigit=function(t){let i=0;for(;t!==0;)i++,t>>>=1;return i},On.setToSJISFunction=function(i){if(typeof i!="function")throw new Error('"toSJISFunc" is not a valid function.');n=i},On.isKanjiModeEnabled=function(){return typeof n<"u"},On.toSJIS=function(i){return n(i)},On}var Ds={},oc;function Oo(){return oc||(oc=1,function(n){n.L={bit:1},n.M={bit:0},n.Q={bit:3},n.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return n.L;case"m":case"medium":return n.M;case"q":case"quartile":return n.Q;case"h":case"high":return n.H;default:throw new Error("Unknown EC Level: "+t)}}n.isValid=function(i){return i&&typeof i.bit<"u"&&i.bit>=0&&i.bit<4},n.from=function(i,r){if(n.isValid(i))return i;try{return e(i)}catch{return r}}}(Ds)),Ds}var Is,cc;function od(){if(cc)return Is;cc=1;function n(){this.buffer=[],this.length=0}return n.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},Is=n,Is}var Us,lc;function cd(){if(lc)return Us;lc=1;function n(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return n.prototype.set=function(e,t,i,r){const s=e*this.size+t;this.data[s]=i,r&&(this.reservedBit[s]=!0)},n.prototype.get=function(e,t){return this.data[e*this.size+t]},n.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i},n.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},Us=n,Us}var Ns={},uc;function ld(){return uc||(uc=1,function(n){const e=gi().getSymbolSize;n.getRowColCoords=function(i){if(i===1)return[];const r=Math.floor(i/7)+2,s=e(i),a=s===145?26:Math.ceil((s-13)/(2*r-2))*2,o=[s-7];for(let c=1;c<r-1;c++)o[c]=o[c-1]-a;return o.push(6),o.reverse()},n.getPositions=function(i){const r=[],s=n.getRowColCoords(i),a=s.length;for(let o=0;o<a;o++)for(let c=0;c<a;c++)o===0&&c===0||o===0&&c===a-1||o===a-1&&c===0||r.push([s[o],s[c]]);return r}}(Ns)),Ns}var Fs={},dc;function ud(){if(dc)return Fs;dc=1;const n=gi().getSymbolSize,e=7;return Fs.getPositions=function(i){const r=n(i);return[[0,0],[r-e,0],[0,r-e]]},Fs}var Os={},hc;function dd(){return hc||(hc=1,function(n){n.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};n.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},n.from=function(r){return n.isValid(r)?parseInt(r,10):void 0},n.getPenaltyN1=function(r){const s=r.size;let a=0,o=0,c=0,l=null,u=null;for(let d=0;d<s;d++){o=c=0,l=u=null;for(let f=0;f<s;f++){let m=r.get(d,f);m===l?o++:(o>=5&&(a+=e.N1+(o-5)),l=m,o=1),m=r.get(f,d),m===u?c++:(c>=5&&(a+=e.N1+(c-5)),u=m,c=1)}o>=5&&(a+=e.N1+(o-5)),c>=5&&(a+=e.N1+(c-5))}return a},n.getPenaltyN2=function(r){const s=r.size;let a=0;for(let o=0;o<s-1;o++)for(let c=0;c<s-1;c++){const l=r.get(o,c)+r.get(o,c+1)+r.get(o+1,c)+r.get(o+1,c+1);(l===4||l===0)&&a++}return a*e.N2},n.getPenaltyN3=function(r){const s=r.size;let a=0,o=0,c=0;for(let l=0;l<s;l++){o=c=0;for(let u=0;u<s;u++)o=o<<1&2047|r.get(l,u),u>=10&&(o===1488||o===93)&&a++,c=c<<1&2047|r.get(u,l),u>=10&&(c===1488||c===93)&&a++}return a*e.N3},n.getPenaltyN4=function(r){let s=0;const a=r.data.length;for(let c=0;c<a;c++)s+=r.data[c];return Math.abs(Math.ceil(s*100/a/5)-10)*e.N4};function t(i,r,s){switch(i){case n.Patterns.PATTERN000:return(r+s)%2===0;case n.Patterns.PATTERN001:return r%2===0;case n.Patterns.PATTERN010:return s%3===0;case n.Patterns.PATTERN011:return(r+s)%3===0;case n.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(s/3))%2===0;case n.Patterns.PATTERN101:return r*s%2+r*s%3===0;case n.Patterns.PATTERN110:return(r*s%2+r*s%3)%2===0;case n.Patterns.PATTERN111:return(r*s%3+(r+s)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}n.applyMask=function(r,s){const a=s.size;for(let o=0;o<a;o++)for(let c=0;c<a;c++)s.isReserved(c,o)||s.xor(c,o,t(r,c,o))},n.getBestMask=function(r,s){const a=Object.keys(n.Patterns).length;let o=0,c=1/0;for(let l=0;l<a;l++){s(l),n.applyMask(l,r);const u=n.getPenaltyN1(r)+n.getPenaltyN2(r)+n.getPenaltyN3(r)+n.getPenaltyN4(r);n.applyMask(l,r),u<c&&(c=u,o=l)}return o}}(Os)),Os}var Rr={},fc;function Nl(){if(fc)return Rr;fc=1;const n=Oo(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return Rr.getBlocksCount=function(r,s){switch(s){case n.L:return e[(r-1)*4+0];case n.M:return e[(r-1)*4+1];case n.Q:return e[(r-1)*4+2];case n.H:return e[(r-1)*4+3];default:return}},Rr.getTotalCodewordsCount=function(r,s){switch(s){case n.L:return t[(r-1)*4+0];case n.M:return t[(r-1)*4+1];case n.Q:return t[(r-1)*4+2];case n.H:return t[(r-1)*4+3];default:return}},Rr}var Bs={},rr={},pc;function hd(){if(pc)return rr;pc=1;const n=new Uint8Array(512),e=new Uint8Array(256);return function(){let i=1;for(let r=0;r<255;r++)n[r]=i,e[i]=r,i<<=1,i&256&&(i^=285);for(let r=255;r<512;r++)n[r]=n[r-255]}(),rr.log=function(i){if(i<1)throw new Error("log("+i+")");return e[i]},rr.exp=function(i){return n[i]},rr.mul=function(i,r){return i===0||r===0?0:n[e[i]+e[r]]},rr}var mc;function fd(){return mc||(mc=1,function(n){const e=hd();n.mul=function(i,r){const s=new Uint8Array(i.length+r.length-1);for(let a=0;a<i.length;a++)for(let o=0;o<r.length;o++)s[a+o]^=e.mul(i[a],r[o]);return s},n.mod=function(i,r){let s=new Uint8Array(i);for(;s.length-r.length>=0;){const a=s[0];for(let c=0;c<r.length;c++)s[c]^=e.mul(r[c],a);let o=0;for(;o<s.length&&s[o]===0;)o++;s=s.slice(o)}return s},n.generateECPolynomial=function(i){let r=new Uint8Array([1]);for(let s=0;s<i;s++)r=n.mul(r,new Uint8Array([1,e.exp(s)]));return r}}(Bs)),Bs}var ks,gc;function pd(){if(gc)return ks;gc=1;const n=fd();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(i){this.degree=i,this.genPoly=n.generateECPolynomial(this.degree)},e.prototype.encode=function(i){if(!this.genPoly)throw new Error("Encoder not initialized");const r=new Uint8Array(i.length+this.degree);r.set(i);const s=n.mod(r,this.genPoly),a=this.degree-s.length;if(a>0){const o=new Uint8Array(this.degree);return o.set(s,a),o}return s},ks=e,ks}var zs={},Hs={},Vs={},_c;function Fl(){return _c||(_c=1,Vs.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),Vs}var pn={},vc;function Ol(){if(vc)return pn;vc=1;const n="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const i="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;pn.KANJI=new RegExp(t,"g"),pn.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),pn.BYTE=new RegExp(i,"g"),pn.NUMERIC=new RegExp(n,"g"),pn.ALPHANUMERIC=new RegExp(e,"g");const r=new RegExp("^"+t+"$"),s=new RegExp("^"+n+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return pn.testKanji=function(c){return r.test(c)},pn.testNumeric=function(c){return s.test(c)},pn.testAlphanumeric=function(c){return a.test(c)},pn}var xc;function _i(){return xc||(xc=1,function(n){const e=Fl(),t=Ol();n.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},n.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},n.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},n.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},n.MIXED={bit:-1},n.getCharCountIndicator=function(s,a){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?s.ccBits[0]:a<27?s.ccBits[1]:s.ccBits[2]},n.getBestModeForData=function(s){return t.testNumeric(s)?n.NUMERIC:t.testAlphanumeric(s)?n.ALPHANUMERIC:t.testKanji(s)?n.KANJI:n.BYTE},n.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},n.isValid=function(s){return s&&s.bit&&s.ccBits};function i(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return n.NUMERIC;case"alphanumeric":return n.ALPHANUMERIC;case"kanji":return n.KANJI;case"byte":return n.BYTE;default:throw new Error("Unknown mode: "+r)}}n.from=function(s,a){if(n.isValid(s))return s;try{return i(s)}catch{return a}}}(Hs)),Hs}var yc;function md(){return yc||(yc=1,function(n){const e=gi(),t=Nl(),i=Oo(),r=_i(),s=Fl(),a=7973,o=e.getBCHDigit(a);function c(f,m,g){for(let _=1;_<=40;_++)if(m<=n.getCapacity(_,g,f))return _}function l(f,m){return r.getCharCountIndicator(f,m)+4}function u(f,m){let g=0;return f.forEach(function(_){const p=l(_.mode,m);g+=p+_.getBitsLength()}),g}function d(f,m){for(let g=1;g<=40;g++)if(u(f,g)<=n.getCapacity(g,m,r.MIXED))return g}n.from=function(m,g){return s.isValid(m)?parseInt(m,10):g},n.getCapacity=function(m,g,_){if(!s.isValid(m))throw new Error("Invalid QR Code version");typeof _>"u"&&(_=r.BYTE);const p=e.getSymbolTotalCodewords(m),h=t.getTotalCodewordsCount(m,g),w=(p-h)*8;if(_===r.MIXED)return w;const M=w-l(_,m);switch(_){case r.NUMERIC:return Math.floor(M/10*3);case r.ALPHANUMERIC:return Math.floor(M/11*2);case r.KANJI:return Math.floor(M/13);case r.BYTE:default:return Math.floor(M/8)}},n.getBestVersionForData=function(m,g){let _;const p=i.from(g,i.M);if(Array.isArray(m)){if(m.length>1)return d(m,p);if(m.length===0)return 1;_=m[0]}else _=m;return c(_.mode,_.getLength(),p)},n.getEncodedBits=function(m){if(!s.isValid(m)||m<7)throw new Error("Invalid QR Code version");let g=m<<12;for(;e.getBCHDigit(g)-o>=0;)g^=a<<e.getBCHDigit(g)-o;return m<<12|g}}(zs)),zs}var Gs={},Sc;function gd(){if(Sc)return Gs;Sc=1;const n=gi(),e=1335,t=21522,i=n.getBCHDigit(e);return Gs.getEncodedBits=function(s,a){const o=s.bit<<3|a;let c=o<<10;for(;n.getBCHDigit(c)-i>=0;)c^=e<<n.getBCHDigit(c)-i;return(o<<10|c)^t},Gs}var $s={},Ws,Mc;function _d(){if(Mc)return Ws;Mc=1;const n=_i();function e(t){this.mode=n.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(i){return 10*Math.floor(i/3)+(i%3?i%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(i){let r,s,a;for(r=0;r+3<=this.data.length;r+=3)s=this.data.substr(r,3),a=parseInt(s,10),i.put(a,10);const o=this.data.length-r;o>0&&(s=this.data.substr(r),a=parseInt(s,10),i.put(a,o*3+1))},Ws=e,Ws}var qs,bc;function vd(){if(bc)return qs;bc=1;const n=_i(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(i){this.mode=n.ALPHANUMERIC,this.data=i}return t.getBitsLength=function(r){return 11*Math.floor(r/2)+6*(r%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(r){let s;for(s=0;s+2<=this.data.length;s+=2){let a=e.indexOf(this.data[s])*45;a+=e.indexOf(this.data[s+1]),r.put(a,11)}this.data.length%2&&r.put(e.indexOf(this.data[s]),6)},qs=t,qs}var Xs,Ec;function xd(){if(Ec)return Xs;Ec=1;const n=_i();function e(t){this.mode=n.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(i){return i*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let i=0,r=this.data.length;i<r;i++)t.put(this.data[i],8)},Xs=e,Xs}var Ys,Tc;function yd(){if(Tc)return Ys;Tc=1;const n=_i(),e=gi();function t(i){this.mode=n.KANJI,this.data=i}return t.getBitsLength=function(r){return r*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let r;for(r=0;r<this.data.length;r++){let s=e.toSJIS(this.data[r]);if(s>=33088&&s<=40956)s-=33088;else if(s>=57408&&s<=60351)s-=49472;else throw new Error("Invalid SJIS character: "+this.data[r]+`
Make sure your charset is UTF-8`);s=(s>>>8&255)*192+(s&255),i.put(s,13)}},Ys=t,Ys}var js={exports:{}},wc;function Sd(){return wc||(wc=1,function(n){var e={single_source_shortest_paths:function(t,i,r){var s={},a={};a[i]=0;var o=e.PriorityQueue.make();o.push(i,0);for(var c,l,u,d,f,m,g,_,p;!o.empty();){c=o.pop(),l=c.value,d=c.cost,f=t[l]||{};for(u in f)f.hasOwnProperty(u)&&(m=f[u],g=d+m,_=a[u],p=typeof a[u]>"u",(p||_>g)&&(a[u]=g,o.push(u,g),s[u]=l))}if(typeof r<"u"&&typeof a[r]>"u"){var h=["Could not find a path from ",i," to ",r,"."].join("");throw new Error(h)}return s},extract_shortest_path_from_predecessor_list:function(t,i){for(var r=[],s=i;s;)r.push(s),t[s],s=t[s];return r.reverse(),r},find_path:function(t,i,r){var s=e.single_source_shortest_paths(t,i,r);return e.extract_shortest_path_from_predecessor_list(s,r)},PriorityQueue:{make:function(t){var i=e.PriorityQueue,r={},s;t=t||{};for(s in i)i.hasOwnProperty(s)&&(r[s]=i[s]);return r.queue=[],r.sorter=t.sorter||i.default_sorter,r},default_sorter:function(t,i){return t.cost-i.cost},push:function(t,i){var r={value:t,cost:i};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};n.exports=e}(js)),js.exports}var Ac;function Md(){return Ac||(Ac=1,function(n){const e=_i(),t=_d(),i=vd(),r=xd(),s=yd(),a=Ol(),o=gi(),c=Sd();function l(h){return unescape(encodeURIComponent(h)).length}function u(h,w,M){const y=[];let C;for(;(C=h.exec(M))!==null;)y.push({data:C[0],index:C.index,mode:w,length:C[0].length});return y}function d(h){const w=u(a.NUMERIC,e.NUMERIC,h),M=u(a.ALPHANUMERIC,e.ALPHANUMERIC,h);let y,C;return o.isKanjiModeEnabled()?(y=u(a.BYTE,e.BYTE,h),C=u(a.KANJI,e.KANJI,h)):(y=u(a.BYTE_KANJI,e.BYTE,h),C=[]),w.concat(M,y,C).sort(function(E,P){return E.index-P.index}).map(function(E){return{data:E.data,mode:E.mode,length:E.length}})}function f(h,w){switch(w){case e.NUMERIC:return t.getBitsLength(h);case e.ALPHANUMERIC:return i.getBitsLength(h);case e.KANJI:return s.getBitsLength(h);case e.BYTE:return r.getBitsLength(h)}}function m(h){return h.reduce(function(w,M){const y=w.length-1>=0?w[w.length-1]:null;return y&&y.mode===M.mode?(w[w.length-1].data+=M.data,w):(w.push(M),w)},[])}function g(h){const w=[];for(let M=0;M<h.length;M++){const y=h[M];switch(y.mode){case e.NUMERIC:w.push([y,{data:y.data,mode:e.ALPHANUMERIC,length:y.length},{data:y.data,mode:e.BYTE,length:y.length}]);break;case e.ALPHANUMERIC:w.push([y,{data:y.data,mode:e.BYTE,length:y.length}]);break;case e.KANJI:w.push([y,{data:y.data,mode:e.BYTE,length:l(y.data)}]);break;case e.BYTE:w.push([{data:y.data,mode:e.BYTE,length:l(y.data)}])}}return w}function _(h,w){const M={},y={start:{}};let C=["start"];for(let T=0;T<h.length;T++){const E=h[T],P=[];for(let v=0;v<E.length;v++){const S=E[v],R=""+T+v;P.push(R),M[R]={node:S,lastCount:0},y[R]={};for(let N=0;N<C.length;N++){const O=C[N];M[O]&&M[O].node.mode===S.mode?(y[O][R]=f(M[O].lastCount+S.length,S.mode)-f(M[O].lastCount,S.mode),M[O].lastCount+=S.length):(M[O]&&(M[O].lastCount=S.length),y[O][R]=f(S.length,S.mode)+4+e.getCharCountIndicator(S.mode,w))}}C=P}for(let T=0;T<C.length;T++)y[C[T]].end=0;return{map:y,table:M}}function p(h,w){let M;const y=e.getBestModeForData(h);if(M=e.from(w,y),M!==e.BYTE&&M.bit<y.bit)throw new Error('"'+h+'" cannot be encoded with mode '+e.toString(M)+`.
 Suggested mode is: `+e.toString(y));switch(M===e.KANJI&&!o.isKanjiModeEnabled()&&(M=e.BYTE),M){case e.NUMERIC:return new t(h);case e.ALPHANUMERIC:return new i(h);case e.KANJI:return new s(h);case e.BYTE:return new r(h)}}n.fromArray=function(w){return w.reduce(function(M,y){return typeof y=="string"?M.push(p(y,null)):y.data&&M.push(p(y.data,y.mode)),M},[])},n.fromString=function(w,M){const y=d(w,o.isKanjiModeEnabled()),C=g(y),T=_(C,M),E=c.find_path(T.map,"start","end"),P=[];for(let v=1;v<E.length-1;v++)P.push(T.table[E[v]].node);return n.fromArray(m(P))},n.rawSplit=function(w){return n.fromArray(d(w,o.isKanjiModeEnabled()))}}($s)),$s}var Cc;function bd(){if(Cc)return Ls;Cc=1;const n=gi(),e=Oo(),t=od(),i=cd(),r=ld(),s=ud(),a=dd(),o=Nl(),c=pd(),l=md(),u=gd(),d=_i(),f=Md();function m(T,E){const P=T.size,v=s.getPositions(E);for(let S=0;S<v.length;S++){const R=v[S][0],N=v[S][1];for(let O=-1;O<=7;O++)if(!(R+O<=-1||P<=R+O))for(let H=-1;H<=7;H++)N+H<=-1||P<=N+H||(O>=0&&O<=6&&(H===0||H===6)||H>=0&&H<=6&&(O===0||O===6)||O>=2&&O<=4&&H>=2&&H<=4?T.set(R+O,N+H,!0,!0):T.set(R+O,N+H,!1,!0))}}function g(T){const E=T.size;for(let P=8;P<E-8;P++){const v=P%2===0;T.set(P,6,v,!0),T.set(6,P,v,!0)}}function _(T,E){const P=r.getPositions(E);for(let v=0;v<P.length;v++){const S=P[v][0],R=P[v][1];for(let N=-2;N<=2;N++)for(let O=-2;O<=2;O++)N===-2||N===2||O===-2||O===2||N===0&&O===0?T.set(S+N,R+O,!0,!0):T.set(S+N,R+O,!1,!0)}}function p(T,E){const P=T.size,v=l.getEncodedBits(E);let S,R,N;for(let O=0;O<18;O++)S=Math.floor(O/3),R=O%3+P-8-3,N=(v>>O&1)===1,T.set(S,R,N,!0),T.set(R,S,N,!0)}function h(T,E,P){const v=T.size,S=u.getEncodedBits(E,P);let R,N;for(R=0;R<15;R++)N=(S>>R&1)===1,R<6?T.set(R,8,N,!0):R<8?T.set(R+1,8,N,!0):T.set(v-15+R,8,N,!0),R<8?T.set(8,v-R-1,N,!0):R<9?T.set(8,15-R-1+1,N,!0):T.set(8,15-R-1,N,!0);T.set(v-8,8,1,!0)}function w(T,E){const P=T.size;let v=-1,S=P-1,R=7,N=0;for(let O=P-1;O>0;O-=2)for(O===6&&O--;;){for(let H=0;H<2;H++)if(!T.isReserved(S,O-H)){let I=!1;N<E.length&&(I=(E[N]>>>R&1)===1),T.set(S,O-H,I),R--,R===-1&&(N++,R=7)}if(S+=v,S<0||P<=S){S-=v,v=-v;break}}}function M(T,E,P){const v=new t;P.forEach(function(H){v.put(H.mode.bit,4),v.put(H.getLength(),d.getCharCountIndicator(H.mode,T)),H.write(v)});const S=n.getSymbolTotalCodewords(T),R=o.getTotalCodewordsCount(T,E),N=(S-R)*8;for(v.getLengthInBits()+4<=N&&v.put(0,4);v.getLengthInBits()%8!==0;)v.putBit(0);const O=(N-v.getLengthInBits())/8;for(let H=0;H<O;H++)v.put(H%2?17:236,8);return y(v,T,E)}function y(T,E,P){const v=n.getSymbolTotalCodewords(E),S=o.getTotalCodewordsCount(E,P),R=v-S,N=o.getBlocksCount(E,P),O=v%N,H=N-O,I=Math.floor(v/N),B=Math.floor(R/N),L=B+1,U=I-B,G=new c(U);let oe=0;const fe=new Array(N),me=new Array(N);let Pe=0;const ke=new Uint8Array(T.buffer);for(let we=0;we<N;we++){const Me=we<H?B:L;fe[we]=ke.slice(oe,oe+Me),me[we]=G.encode(fe[we]),oe+=Me,Pe=Math.max(Pe,Me)}const ze=new Uint8Array(v);let Z=0,ee,ve;for(ee=0;ee<Pe;ee++)for(ve=0;ve<N;ve++)ee<fe[ve].length&&(ze[Z++]=fe[ve][ee]);for(ee=0;ee<U;ee++)for(ve=0;ve<N;ve++)ze[Z++]=me[ve][ee];return ze}function C(T,E,P,v){let S;if(Array.isArray(T))S=f.fromArray(T);else if(typeof T=="string"){let I=E;if(!I){const B=f.rawSplit(T);I=l.getBestVersionForData(B,P)}S=f.fromString(T,I||40)}else throw new Error("Invalid data");const R=l.getBestVersionForData(S,P);if(!R)throw new Error("The amount of data is too big to be stored in a QR Code");if(!E)E=R;else if(E<R)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+R+`.
`);const N=M(E,P,S),O=n.getSymbolSize(E),H=new i(O);return m(H,E),g(H),_(H,E),h(H,P,0),E>=7&&p(H,E),w(H,N),isNaN(v)&&(v=a.getBestMask(H,h.bind(null,H,P))),a.applyMask(v,H),h(H,P,v),{modules:H,version:E,errorCorrectionLevel:P,maskPattern:v,segments:S}}return Ls.create=function(E,P){if(typeof E>"u"||E==="")throw new Error("No input text");let v=e.M,S,R;return typeof P<"u"&&(v=e.from(P.errorCorrectionLevel,e.M),S=l.from(P.version),R=a.from(P.maskPattern),P.toSJISFunc&&n.setToSJISFunction(P.toSJISFunc)),C(E,S,v,R)},Ls}var Ks={},Zs={},Rc;function Bl(){return Rc||(Rc=1,function(n){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let i=t.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+t);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(s){return[s,s]}))),i.length===6&&i.push("F","F");const r=parseInt(i.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+i.slice(0,6).join("")}}n.getOptions=function(i){i||(i={}),i.color||(i.color={});const r=typeof i.margin>"u"||i.margin===null||i.margin<0?4:i.margin,s=i.width&&i.width>=21?i.width:void 0,a=i.scale||4;return{width:s,scale:s?4:a,margin:r,color:{dark:e(i.color.dark||"#000000ff"),light:e(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},n.getScale=function(i,r){return r.width&&r.width>=i+r.margin*2?r.width/(i+r.margin*2):r.scale},n.getImageWidth=function(i,r){const s=n.getScale(i,r);return Math.floor((i+r.margin*2)*s)},n.qrToImageData=function(i,r,s){const a=r.modules.size,o=r.modules.data,c=n.getScale(a,s),l=Math.floor((a+s.margin*2)*c),u=s.margin*c,d=[s.color.light,s.color.dark];for(let f=0;f<l;f++)for(let m=0;m<l;m++){let g=(f*l+m)*4,_=s.color.light;if(f>=u&&m>=u&&f<l-u&&m<l-u){const p=Math.floor((f-u)/c),h=Math.floor((m-u)/c);_=d[o[p*a+h]?1:0]}i[g++]=_.r,i[g++]=_.g,i[g++]=_.b,i[g]=_.a}}}(Zs)),Zs}var Pc;function Ed(){return Pc||(Pc=1,function(n){const e=Bl();function t(r,s,a){r.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=a,s.width=a,s.style.height=a+"px",s.style.width=a+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}n.render=function(s,a,o){let c=o,l=a;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),a||(l=i()),c=e.getOptions(c);const u=e.getImageWidth(s.modules.size,c),d=l.getContext("2d"),f=d.createImageData(u,u);return e.qrToImageData(f.data,s,c),t(d,l,u),d.putImageData(f,0,0),l},n.renderToDataURL=function(s,a,o){let c=o;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),c||(c={});const l=n.render(s,a,c),u=c.type||"image/png",d=c.rendererOpts||{};return l.toDataURL(u,d.quality)}}(Ks)),Ks}var Js={},Lc;function Td(){if(Lc)return Js;Lc=1;const n=Bl();function e(r,s){const a=r.a/255,o=s+'="'+r.hex+'"';return a<1?o+" "+s+'-opacity="'+a.toFixed(2).slice(1)+'"':o}function t(r,s,a){let o=r+s;return typeof a<"u"&&(o+=" "+a),o}function i(r,s,a){let o="",c=0,l=!1,u=0;for(let d=0;d<r.length;d++){const f=Math.floor(d%s),m=Math.floor(d/s);!f&&!l&&(l=!0),r[d]?(u++,d>0&&f>0&&r[d-1]||(o+=l?t("M",f+a,.5+m+a):t("m",c,0),c=0,l=!1),f+1<s&&r[d+1]||(o+=t("h",u),u=0)):c++}return o}return Js.render=function(s,a,o){const c=n.getOptions(a),l=s.modules.size,u=s.modules.data,d=l+c.margin*2,f=c.color.light.a?"<path "+e(c.color.light,"fill")+' d="M0 0h'+d+"v"+d+'H0z"/>':"",m="<path "+e(c.color.dark,"stroke")+' d="'+i(u,l,c.margin)+'"/>',g='viewBox="0 0 '+d+" "+d+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(c.width?'width="'+c.width+'" height="'+c.width+'" ':"")+g+' shape-rendering="crispEdges">'+f+m+`</svg>
`;return typeof o=="function"&&o(null,p),p},Js}var Dc;function wd(){if(Dc)return yi;Dc=1;const n=ad(),e=bd(),t=Ed(),i=Td();function r(s,a,o,c,l){const u=[].slice.call(arguments,1),d=u.length,f=typeof u[d-1]=="function";if(!f&&!n())throw new Error("Callback required as last argument");if(f){if(d<2)throw new Error("Too few arguments provided");d===2?(l=o,o=a,a=c=void 0):d===3&&(a.getContext&&typeof l>"u"?(l=c,c=void 0):(l=c,c=o,o=a,a=void 0))}else{if(d<1)throw new Error("Too few arguments provided");return d===1?(o=a,a=c=void 0):d===2&&!a.getContext&&(c=o,o=a,a=void 0),new Promise(function(m,g){try{const _=e.create(o,c);m(s(_,a,c))}catch(_){g(_)}})}try{const m=e.create(o,c);l(null,s(m,a,c))}catch(m){l(m)}}return yi.create=e.create,yi.toCanvas=r.bind(null,t.render),yi.toDataURL=r.bind(null,t.renderToDataURL),yi.toString=r.bind(null,function(s,a,o){return i.render(s,o)}),yi}var Ad=wd();const Cd=sd(Ad);async function Rd(n,e){var f,m,g;const t=new Image;t.src=`/acorn-witch-atelier/assets/rewards/cg-${n.id}.webp`,await t.decode();const i=document.createElement("canvas");i.width=900,i.height=1560;const r=i.getContext("2d");r.fillStyle="#f4e8cb",r.fillRect(0,0,900,1560),r.strokeStyle="#b38a49",r.lineWidth=3,r.strokeRect(28,28,844,1504),r.textBaseline="top",r.fillStyle="#725533",r.font='24px "Songti SC",serif',r.fillText("橡果魔女  /  与松团子的珍藏时刻",55,62);const s=Math.max(790/t.width,800/t.height),a=t.width*s,o=t.height*s;r.save(),r.beginPath(),r.rect(55,112,790,800),r.clip(),r.drawImage(t,55+(790-a)/2,112+(800-o)*.38,a,o),r.restore(),r.fillStyle="#493927",r.font='bold 42px "Songti SC",serif',r.fillText(n.name,55,948,790);const c=["松团子",...n.costume.split(" · ")];r.font='20px "Songti SC",serif';let l=55;for(const _ of c){const p=r.measureText(_).width+28;r.fillStyle="#365746",r.fillRect(l,1012,p,40),r.fillStyle="#fff0d1",r.fillText(_,l+14,1021),l+=p+12}r.fillStyle="#655039",r.font='25px "Songti SC",serif';let u="",d=1090;for(const _ of n.lines[0])r.measureText(u+_).width>790&&(r.fillText(u,55,d),d+=43,u=""),u+=_;return u&&r.fillText(u,55,d),r.strokeStyle="#b89b6666",r.beginPath(),r.moveTo(55,1260),r.lineTo(845,1260),r.stroke(),r.font='20px "Songti SC",serif',r.fillStyle="#786445",r.fillText(`收录条件 · ${n.condition}`,55,1284,790),r.fillText(`相伴第 ${e.day} 天   ·   好感 ${((f=e.collection)==null?void 0:f.bond)??0}   ·   CG 收藏 ${((g=(m=e.collection)==null?void 0:m.cgs)==null?void 0:g.length)??0} / 6`,55,1320,790),r.fillStyle="#365746",r.fillRect(55,1370,790,140),r.fillStyle="#fff0d1",r.font='25px "Songti SC",serif',r.fillText("来橡果小屋，写下你们的故事",78,1400),r.font='20px "Songti SC",serif',r.fillText("扫码开启与松团子的森林生活",78,1450),await kl(r,709,1380,120),new Promise(_=>i.toBlob(_,"image/png"))}async function kl(n,e,t,i){const r=document.createElement("canvas");await Cd.toCanvas(r,"https://logic33.github.io/acorn-witch-atelier/",{width:i,margin:2,errorCorrectionLevel:"M",color:{dark:"#294735",light:"#fff8e7"}}),n.drawImage(r,e,t,i,i)}async function zl(n,e){const t=document.createElement("dialog");t.className="cg-share-preview",t.setAttribute("aria-label","分享奇遇"),t.innerHTML='<header><h2>分享奇遇</h2><button class="share-close" aria-label="关闭分享">×</button></header><div class="share-preview-body"><p role="status">正在准备纪念卡…</p></div><footer><button data-share="save" disabled>保存图片</button><button data-share="douyin" disabled>分享剧情到抖音</button></footer>',document.body.append(t),t.showModal();let i;t.querySelector(".share-close").onclick=()=>t.close(),t.addEventListener("close",()=>{i&&URL.revokeObjectURL(i),t.remove()},{once:!0});try{const r=await Rd(n,e);if(!t.open)return;i=URL.createObjectURL(r);const s=t.querySelector(".share-preview-body"),a=new Image;a.src=i,a.alt=n.name+"纪念卡",s.replaceChildren(a),t.querySelectorAll("footer button").forEach(o=>o.disabled=!1),t.querySelector("[data-share=save]").onclick=()=>{const o=document.createElement("a");o.href=i,o.download=n.name+"-纪念卡.png",o.click()},t.querySelector("[data-share=douyin]").onclick=()=>{var l,u;s.innerHTML='<label>分享剧情到抖音<textarea aria-label="剧情文本" rows="10"></textarea></label><p class="share-note">创作预览，暂未连接抖音。</p><button class="share-back">返回图片预览</button>';const o=(l=e.memories)==null?void 0:l.filter(d=>d.cg===n.id).at(-1),c=((u=o==null?void 0:o.messages)==null?void 0:u.map(d=>d.content))||[];s.querySelector("textarea").value=["奇遇 · "+n.name,n.lines[0],...c].join(`

`),s.querySelector(".share-back").onclick=()=>s.replaceChildren(a),s.querySelector("textarea").focus()}}catch{t.open&&(t.querySelector(".share-preview-body").textContent="纪念卡生成失败，请关闭后重试。")}}function Pd({world:n,root:e,onFinish:t}){let i=!0,r="berry",s=!1,a=!1,o=0,c=!1;function l(d=""){if(i){e.innerHTML='<div class="gather-guide"><b>01 · 摘莓果</b><span>走近莓果丛…</span></div>';return}const f={berry:"轻点莓果，装进篮子",acorn:"按住蓄力，亮起时松手",mushroom:"光点进入金色区域时采摘"};if(e.innerHTML=`<div class="gather-guide"><b>${{berry:"01 · 摘莓果",acorn:"02 · 够橡果",mushroom:"03 · 采蘑菇"}[r]}</b><span>${d||f[r]}</span></div>`,r==="berry"&&(e.insertAdjacentHTML("beforeend",'<button class="gather-berry" aria-label="采摘莓果">✦<small>采摘</small></button>'),e.querySelector("button").onclick=()=>u("pick")),r==="acorn"){e.insertAdjacentHTML("beforeend",'<button class="gather-hold" aria-label="按住蓄力，松手起跳"><span>按住蓄力</span><i><em></em></i></button>');const m=e.querySelector("button"),g=()=>{s||a||(a=!0,o=0,n.setAction("crouch"))},_=()=>{a&&(a=!1,o>=650&&o<=1450?u("jump"):(n.setAction("acorn"),l(o<650?"再蓄一点力，亮起时松手":"力气太大啦，再试一次")))};m.onpointerdown=p=>{m.setPointerCapture(p.pointerId),g()},m.onpointerup=_,m.onpointercancel=()=>{a=!1,n.setAction("acorn"),l()},m.onkeydown=p=>{["Space","Enter"].includes(p.code)&&(p.preventDefault(),g())},m.onkeyup=p=>{["Space","Enter"].includes(p.code)&&(p.preventDefault(),_())}}r==="mushroom"&&(e.insertAdjacentHTML("beforeend",'<button class="gather-timing" aria-label="把握时机采蘑菇"><i></i><span>采摘</span></button>'),e.querySelector("button").onclick=()=>{if(s)return;const m=o%1800/1800;m>=.35&&m<=.65?u("harvest"):(o=0,l("差一点，等光点进入金色区域"))})}function u(d){s||c||(s=!0,e.querySelectorAll("button").forEach(f=>f.disabled=!0),e.querySelector(".gather-guide span").textContent=d==="harvest"?"收好满满一篮，再带回家":"松团子正在采集…",n.setAction(d))}return l(),{tick(d){if(c)return;const f=n.getInfo().gatherMotion;if(!f.seeking){if(i){if(f.action!=="berry")return;i=!1,l()}if(s){if(!f.complete)return;if(s=!1,r==="mushroom"){c=!0,e.innerHTML="",t();return}r=r==="berry"?"acorn":"mushroom",o=0,n.setAction(r),l();return}if(a){o+=d;const m=e.querySelector(".gather-hold");m.classList.toggle("ready",o>=650&&o<=1450),m.querySelector("em").style.width=`${Math.min(100,o/18)}%`,m.querySelector("span").textContent=o>=650&&o<=1450?"松手起跳":"按住蓄力"}r==="mushroom"&&(o+=d,e.querySelector(".gather-timing").classList.toggle("ready",o%1800/1800>=.35&&o%1800/1800<=.65),e.querySelector(".gather-timing i").style.transform=`rotate(${o%1800/1800*360}deg)`)}},dispose(){c=!0,e.innerHTML=""}}}const Hl="acorn-witch-save-v1",ps={baking:"烘焙",magic:"魔法",style:"审美",knowledge:"学识",charm:"亲和"},Bo={acorn:"橡果",berry:"莓果",cream:"奶油",herb:"香草",honey:"蜂蜜"},fr=[{id:"tart",name:"星光橡果塔",note:"酥脆塔皮，藏着一小片星空。",need:{acorn:2,berry:1,cream:1},temp:180,spell:"star",color:"#d9a050"},{id:"pie",name:"莓果云朵派",note:"把森林的清甜，叠进奶油云朵。",need:{berry:2,cream:1,herb:1},temp:170,spell:"forest",color:"#b54f65"},{id:"pudding",name:"蜂蜜布丁",note:"温柔的蜂蜜香，适合送给朋友。",need:{honey:2,cream:1},temp:160,spell:"heal",color:"#e3ba59"},{id:"maple",unlock:!0,name:"枫糖橡果饼",note:"轮盘新菜单 · 蜂蜜香裹住烤橡果。",need:{acorn:2,honey:1,cream:1},temp:175,spell:"forest",color:"#c69049"},{id:"berryroll",unlock:!0,name:"莓果奶油卷",note:"轮盘新菜单 · 把莓果卷进软软的奶油里。",need:{berry:2,cream:2,honey:1},temp:165,spell:"heal",color:"#dba3ad"}],qi=[{id:"acorn",name:"橡果烘焙师",short:"烘焙师",description:"松鼠围裙 · 格纹口袋 · 软软堆堆袜",color:"#776044",tags:"甜美 · 温暖",bonus:8,price:0},{id:"tea",name:"莓果茶会",short:"洛丽塔",description:"层叠蕾丝蓬裙 · 缎带蝴蝶结 · 玛丽珍鞋",color:"#b87587",tags:"甜美 · 华丽",bonus:14,price:70},{id:"forest",name:"森林小洋装",short:"小洋装",description:"短斗篷外套 · 收腰裙 · 小挎包与短靴",color:"#436d58",tags:"森林 · 温暖",bonus:10,price:55},{id:"school",name:"橡果学院",short:"校服",description:"水手领 · 格纹百褶裙 · 书包与银色耳环",color:"#3d4e59",tags:"学院 · 清新",bonus:12,price:45},{id:"adventure",name:"森林探险家",short:"冒险装",description:"短披风 · 皮革护腰 · 工具腰包与叶片耳坠",color:"#6b744f",tags:"冒险 · 自然",bonus:18,price:100},{id:"star",name:"飞行小魔女",short:"小魔女",description:"深蓝宽松裙 · 红蝴蝶结 · 送信包与扫帚",color:"#3d405b",tags:"魔法 · 自由",bonus:16,price:85}];function Vl(){return{version:1,day:1,slot:0,energy:90,mood:75,coins:120,stats:{baking:12,magic:8,style:8,knowledge:8,charm:10},inventory:{acorn:6,berry:5,cream:5,herb:3,honey:4},desserts:[],outfit:"acorn",owned:["acorn"],friendship:0,story:0,records:[],memories:[],memoryStamps:[],ending:null}}function ur(n,e){return Object.entries(e.need).every(([t,i])=>n.inventory[t]>=i)}function Ld(n,e,t,i,r){return Math.min(100,Math.round(20+e*30+t*25+(i===r.spell?12:5)+Math.min(13,n.stats.baking*.25+n.stats.magic*.15)))}function Gl(n){return n>=88?"S":n>=72?"A":n>=52?"B":"C"}function vi(n,e){return(!n.ending||n.day>7)&&n.energy>=e&&!(n.day===7&&n.slot===3)}function Dd(n,{name:e,cost:t=0,stats:i={},mood:r=0,coins:s=0,energy:a=0,ingredients:o={},dessert:c=null,friendship:l=0}){if(!vi(n,t))throw new Error("没有足够的体力或行动时段");if(n.coins+s<0)throw new Error("金币不足");for(const[u,d]of Object.entries(o))if(n.inventory[u]+d<0)throw new Error("材料不足");n.energy=Math.min(100,n.energy-t+a),n.mood=Math.max(0,Math.min(100,n.mood+r)),n.coins+=s;for(const[u,d]of Object.entries(i))n.stats[u]+=d;for(const[u,d]of Object.entries(o))n.inventory[u]+=d;return c&&n.desserts.push(c),n.friendship+=l,n.records.unshift({day:n.day,slot:n.slot,name:e,id:crypto.randomUUID(),createdAt:new Date().toISOString()}),n.slot++,n.slot===3&&n.day!==7&&(n.day++,n.slot=0,n.energy=Math.min(100,n.energy+25)),n}function Id(n,e){const t=Math.round(e.score*.5),i=Math.min(25,Math.round(n.stats.baking*.35+n.stats.magic*.25+n.stats.knowledge*.15)),r=Math.min(20,qi.find(c=>c.id===n.outfit).bonus+Math.floor(n.stats.style*.2)),s=Math.min(5,Math.floor(n.friendship/2)),a=t+i+r+s,o=a>=88?"金色掌声之夜":n.friendship>=6?"有人为你而来":n.stats.magic>n.stats.baking?"秋叶与星光":"第一份秋日心意";return{score:a,grade:Gl(a),title:o,taste:t,growth:i,dress:r,bond:s,dessert:e.name}}const Xi=[{guest:"放学的小客人",request:"甜点配一杯热茶，想暖暖手。",choice:"tea",motion:"child"},{guest:"结伴而来的街坊",request:"今天想喝热可可，搭配一小块甜点。",choice:"cocoa",motion:"queue"},{guest:"喜欢甜味的小姐",request:"今天想吃甜一点的，请加一杯蜂蜜茶。",choice:"honey",motion:"vip"}],ms=2e4;function Ud(n,e){const t=e.filter(a=>a.correct).length,i=e.filter(a=>a.perfect).length,r=Math.round((Math.round(n*.6)+18)*t/Xi.length),s=i*5;return{served:t,perfect:i,sales:r,tips:s,coins:r+s,satisfaction:Math.round(t/Xi.length*100),charm:t,mood:t||-2}}const Nd=5,ki=35,ko=[{id:"ribbon",slot:"accessory",name:"秋色蝴蝶结"},{id:"moon",slot:"accessory",name:"琥珀月牙耳饰"},{id:"leaf",slot:"accessory",name:"秋叶橡果发夹"}],Oi=[{id:"orange",name:"橘猫",look:"橘色条纹 · 圆滚滚",line:"它把脑袋放在我的鞋上了……这是想跟我们回家吗？",action:"蹲下来摸摸它",reply:"咕噜噜……它眯着眼，把脑袋往你手心里送。"},{id:"calico",name:"三花猫",look:"橙黑花斑 · 爱扑落叶",line:"那片叶子是我变的。它追了这么久，我再变一片给它吧。",action:"陪它追落叶",reply:"它抬起爪子接住叶子，又轻轻推到了你面前。"},{id:"silver",name:"银渐层",look:"银白绒毛 · 圆脸",line:"像一小团落到地上的云。云也会呼噜吗？",action:"轻轻挠下巴",reply:"它仰起圆圆的脸，闭着眼睛蹭了蹭你的手。"},{id:"ragdoll",name:"布偶猫",look:"蓝眼睛 · 蓬松长毛",line:"它靠过来以后，我都舍不得翻书了。再坐一会儿吧。",action:"陪它打个盹",reply:"蓬松的尾巴轻轻一卷，它安心地靠着你睡着了。"},{id:"siamese",name:"暹罗猫",look:"蓝眼睛 · 深色脸爪",line:"我走到哪儿，它就跟到哪儿。你看，它又在问我们什么呢。",action:"轻声回应它",reply:"喵——它歪歪头，向你又迈近了一小步。"},{id:"black",name:"黑猫",look:"黑色短毛 · 金色眼睛",line:"我的帽子好像在动……原来你在这里！",action:"伸手打个招呼",reply:"黑色的小爪子伸过来，认真地碰了碰你的指尖。"},{id:"golden",name:"金渐层",look:"金色绒毛 · 圆脸绿眼",line:"它的毛和晒过太阳的秋叶一个颜色。我们叫它什么好呢？",action:"轻轻摸摸背",reply:"它舒舒服服地伸了个懒腰，又团成一小颗金色毛球。"},{id:"devon",name:"德文猫",look:"大耳朵 · 短卷毛",line:"它的耳朵也好大！是在偷偷听秋天说话吗？",action:"凑近悄悄说话",reply:"它竖起大耳朵，轻轻蹭了蹭你，像听懂了秘密。"},{id:"abyssinian",name:"阿比西尼亚猫",look:"暖棕短毛 · 修长灵巧",line:"刚才还在门边，一转眼就到椅背上了。真像一阵秋风。",action:"晃一晃秋叶",reply:"它轻巧地跃过去，停下时还回头等你跟上。"}],_n=[{id:"magic",name:"第一片会飞的秋叶",activity:"course",stat:"magic",threshold:20,condition:"魔法达到 20 后完成一节课",costume:"魔女装 · 彩窗教室",lines:["同学们离开后，窗边那片秋叶仍悬在半空，怎么也落不下来。松团子收起笑容，重新翻开了课本。","「我只练过让它飞起来……书上怎么没写，它不肯下来怎么办？」","她试着把声音放轻，秋叶却绕着灯罩越转越快。叶柄碰到铜铃，清脆的一声响让她缩了缩耳朵。","她伸出的手停住了，转而把书合上。「也许它不是想听更多咒语。我先不催它了。」","铃声渐渐停了。她摊开空着的手，让叶子自己靠近；那点微光终于从灯罩旁慢慢降下来。","叶子在掌心上方摇了一下，安静地落下。她没有马上欢呼，而是认真看了看自己还在发抖的手。","「原来停下来也要练习。我以前总想让大家看看，我能把魔法变得多漂亮。」","她在课本空白处画下一片小叶子。「这一页先留着吧。你觉得刚才，是哪里开始不一样了？」"]},{id:"baking",name:"第一口，留给你",activity:"baking",stat:"baking",threshold:27,condition:"烘焙达到 27 后完成一次烘焙",costume:"围裙 · 小屋厨房",lines:["甜点已经出炉，松团子却拿着两只小盘子，在桌边站了很久。","「这一口本来想留给你……可是如果不合你的口味呢？」","她低头整理奶油，越想让它完美，叉尖越不听话。一小块莓果滑了下来，留下歪歪的缺口。","她的尾巴垂下来，伸手去拿备用的盘子，又停住了。「我是不是把分享，弄得像交作业一样？」","她放下装饰用的小匙，把那块不太整齐的甜点放到窗边，又给另一只盘子分了一小份。","「我可以先说实话：这里有点酸，边缘也烤得脆了。可是刚打开烤箱的时候，我第一个想到的是你。」","她把小叉子放在盘边，终于不再修补那个缺口。「不喜欢也可以告诉我，不用为了让我高兴说好吃。」","她坐到桌边，给你留出挑选的余地。「下一次，我们试着做一种你喜欢、我也想尝尝的味道，好吗？」"]},{id:"shop",name:"打烊后的掌声",activity:"shop",stat:"charm",threshold:16,condition:"亲和达到 16 后完成一次营业",costume:"围裙 · 烘焙小铺",lines:["最后一位客人离开后，松团子在桌脚旁发现了一张折起来的纸。","纸上画着一块甜点，下面只写着几个字：下次还想来，可是我不太敢开口。","她对着门外看了看，街上已经没有刚才那位小客人的身影。「我今天一直在忙，都没发现它想说话。」","她原本要擦掉柜台上的欢迎字样，手里的布停在半空。「是不是一定要会大声点单，才能被好好招待？」","她找来一张旧菜单，把饮品旁边画上杯子，又在角落留出一块空白。","「不会说的时候，可以指给我看。不知道想要什么，也可以慢慢选。」她把菜单放到更低、容易够到的地方。","门外传来轻轻的脚步，刚才的小客人探头看了看新菜单。松团子没有催促，只笑着把它往前推了一点。","小客人点了点那幅杯子。她回头轻声问你：「空白的这一角，还能写点什么，让它知道不着急呢？」"]},{id:"explore",name:"秋风知道的小路",activity:"gather",visits:3,condition:"完成三次森林采集",costume:"冒险装 · 榛果林",lines:["小路尽头，松团子在熟悉的苔草旁停下来。昨夜落下的树枝挡住了那条窄窄的路。","「我小时候总从这里过去。你听，树叶的声音……今天好像不太一样。」","灌木底下传来细小的摩擦声。一只刺猬拖着叶子绕来绕去，每次都被同一根横枝挡回来。","松团子刚要伸手抱它，刺猬就缩成了小球。她立刻退后，把自己的尾巴也收了起来。","「它不认识我。我以为帮忙就是把它带过去，可它可能只想自己走。」她蹲远了一点，耐心等那颗小球重新展开。","刺猬又试着往左钻。她顺着那个方向，轻轻拨开几片压低的蕨叶，让那条原本就有的小缝重新露出来。","小小的身影穿过缝隙消失了，灌木另一侧响起窸窣声。松团子躺回苔草上，长长地松了一口气。","「原来这条路不只属于我的回忆。」她侧过脸看你。「以后再来，我们怎么走，才不会挡住这些小邻居呢？」"]},{id:"bond",name:"再陪我读一页",activity:"home",bond:12,condition:"与松团子的好感达到 12，回到小屋",costume:"日常围裙装 · 窗边",lines:["松团子把书挪过来，却在同一页上停了很久。故事里的小旅人刚向朋友告别。","「它都说了会回来，为什么留下来的那个人还是难过呢？」","她往后翻了两页，又急忙翻回来。「我想先看看结局……这样就不用一直担心了吧。」","窗外传来风声，一张夹在书里的旧书签滑到桌上。上面是她刚学会写名字时，留下的歪歪扭扭的字。","她拾起书签，慢慢把书翻回原来的那页。「那个时候，我也不知道自己后来能把名字写好。」","她把想偷看的后半本合住，只留出眼前这一页。「也许不知道以后怎样的时候，现在的陪伴才会这么重要。」","她读完了小旅人出门的那一段，这次没有急着找结局，肩膀也渐渐放松下来。","「我还会担心的。」她把书签放在两页中间。「但今天可以先读到这里。你有没有一段舍不得翻过去的故事？」"]},{id:"festival",name:"把秋天送给你",activity:"festival",condition:"参加第七天的秋日祭",costume:"秋日盛装 · 祭典广场",lines:["广场上的灯亮起来时，松团子还攥着那片准备送出的秋叶，叶边已经被手心捂得微微卷起。","「大家的礼物都有漂亮的盒子。我找了很久，好像只找得到这种东西。」","一阵风吹过，叶片的微光暗了下来。她连忙用双手护住它，却越护越紧。","她看着路边孩子们捡起普通落叶，互相交换形状和颜色，慢慢松开了手指。","「它不一定要一直发光，才值得被留下吧？」她把叶子放平，让灯火照见叶面细细的脉络。","她指着其中一道纹路，说起第一次走进小屋时的紧张，又说到那些想问、却一直没敢问出口的问题。","「我原来想把整个秋天都送出去。现在想想，应该先问问你，愿不愿意留下我们一起过的这一小段。」","她伸出手，让叶子安静地躺在掌心。「不用现在就回答。灯还亮着，我们可以慢慢说。」"]}],Bi=[{id:"warm",name:"暖茸茸的初遇",cats:["golden","devon","orange"],part:"ribbon",menu:"maple"},{id:"forest",name:"林间小脚印",cats:["abyssinian","calico","black"],part:"moon",menu:"berryroll"},{id:"tea",name:"午后茶会",cats:["orange","silver","golden"],part:"leaf",menu:"maple"},{id:"moon",name:"月亮的来客",cats:["ragdoll","siamese","silver"],part:"ribbon",menu:"berryroll"},{id:"hat",name:"帽子里的秘密",cats:["black","devon","calico"],part:"moon",menu:"maple"}];function yn(n){n.collection??(n.collection={});const e=n.collection;return e.customOutfits??(e.customOutfits=[]),e.activeCustom??(e.activeCustom=null),e.cgs??(e.cgs=[]),e.seen??(e.seen=[]),e.pets??(e.pets=[]),e.petNames??(e.petNames={}),e.activePet??(e.activePet=null),e.petInteractions??(e.petInteractions={}),e.parts??(e.parts=[]),e.menus??(e.menus=[]),e.draws??(e.draws={}),e.bond??(e.bond=0),e.bondSources??(e.bondSources=[]),e.visits??(e.visits={}),e.wear??(e.wear={accessory:null}),e}function $l(n,e){const t=yn(n);t.bondSources.includes(e)||(t.bondSources.push(e),t.bond=Math.min(100,t.bond+2))}function Wl(n,e){const t=yn(n);if(t.cgs.includes(e))return!1;t.cgs.push(e),n.memories??(n.memories=[]);const i=_n.find(r=>r.id===e);return n.memories.push({id:`cg-${e}`,title:i.name,summary:i.lines.at(-1),activity:i.activity,kind:"canon",cg:e,day:n.day,slot:n.slot,createdAt:new Date().toISOString()}),!0}function ql(n,e){const t=yn(n);for(const i of _n)i.activity!==e||i.id==="festival"||i.stat&&n.stats[i.stat]<i.threshold||i.visits&&(t.visits[e]??0)<i.visits||i.bond&&t.bond<i.bond||Wl(n,i.id)}function Fd(n,e){const t=yn(n);t.visits[e]=(t.visits[e]??0)+1,$l(n,`${n.day}:${e}`),ql(n,e)}function Od(n){return[...n.cats.map(e=>({id:`pet-${e}`,type:"pet",item:e,name:Oi.find(t=>t.id===e).name})),{id:`part-${n.part}`,type:"part",item:n.part,name:ko.find(e=>e.id===n.part).name},{id:"outfit-tea",type:"outfit",item:"tea",name:"莓果茶会套装"},{id:`menu-${n.menu}`,type:"menu",item:n.menu,name:fr.find(e=>e.id===n.menu).name},{id:"coins-20",type:"coins",amount:20,name:"20 金币"}]}function za(n,e){const t=yn(n),i=Bi.find(r=>r.id===e);return i?Od(i).filter(r=>!(t.draws[e]??[]).includes(r.id)&&!(r.type==="pet"&&t.pets.includes(r.item))&&!(r.type==="part"&&t.parts.includes(r.item))&&!(r.type==="menu"&&t.menus.includes(r.item))&&!(r.type==="outfit"&&n.owned.includes(r.item))):[]}function Bd(n,e,t=Math.random()){var a;const i=za(n,e);if(n.coins<ki)throw new Error("金币不足，去小铺接待客人吧。");if(!i.length)throw new Error("这期已经收集齐啦。");if(!Number.isFinite(t)||t<0||t>=1)throw new Error("抽取值无效");const r=i[Math.floor(t*i.length)],s=n.collection;return n.coins-=ki,(a=s.draws)[e]??(a[e]=[]),s.draws[e].push(r.id),r.type==="coins"&&(n.coins+=r.amount),r.type==="pet"&&(s.pets.push(r.item),s.activePet??(s.activePet=r.item)),r.type==="part"&&s.parts.push(r.item),r.type==="menu"&&s.menus.push(r.item),r.type==="outfit"&&n.owned.push(r.item),s.lastReward={...r,poolId:e},r}function kd(n){return fr.filter(e=>!e.unlock||yn(n).menus.includes(e.id))}const Si=240,Pr=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function zd({game:n,getState:e,save:t,world:i,pause:r,onEquipped:s}){const a=document.createElement("dialog");a.id="atelier-dialog",n.append(a);let o=!1,c=null,l=!1,u=null,d="",f="",m="";const g=()=>yn(e());async function _(y,C){const T=await fetch("/api/wardrobe"+y,{...C?{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(C)}:{}}),E=await T.text();let P;try{P=JSON.parse(E)}catch{throw new Error("服装绘图服务尚未连接。")}if(!T.ok)throw new Error(P.error||"服装绘图请求未完成。");return P}function p(y=""){a.innerHTML=`<header class="collection-header"><div><small>为松团子设计一套新衣服</small><h2>小小裁缝铺</h2></div><button data-design="close" aria-label="关闭设计">×</button></header><div class="atelier-body">${(c==null?void 0:c.status)==="ready"?`<img class="atelier-preview" src="${y||i.customPreview(c.id)}" alt="新衣服站姿预览"><h3>${Pr(c.name||"我的新衣服")}</h3><p>这套衣服喜欢吗？穿回小屋，就能陪她继续读书。</p><button class="button wide" data-design="accept" ${e().coins<Si?"disabled":""}>收进衣柜 · ${Si} 金币</button><button class="button subtle wide" data-design="again">重新描述</button>`:`<p>可以写款式、颜色和配饰。她还是原来的松团子。</p><label>给这套衣服起名<input id="design-name" maxlength="20" value="${Pr(m)}" placeholder="例如：雨后的来信" ${l?"disabled":""}></label><label>你想让她穿什么？<textarea id="design-prompt" maxlength="600" rows="4" placeholder="浅蓝色水手领小洋装，白色蕾丝裙边，配一个红色小蝴蝶结……" ${l?"disabled":""}>${Pr(f)}</textarea></label><p class="collection-note">整套定制 ${Si} 金币 · 确认收进衣柜时扣除<br>可以保留描述，稍后回来继续。</p><button class="button wide" data-design="generate" ${l||!o||e().coins<Si?"disabled":""}>${l?"正在为她制作新衣服…":o?"开始设计":"绘图服务尚未配置"}</button>${l?'<p class="atelier-progress" role="status">正在绘制服装与配套动作，请稍等。可以先关闭，稍后回来查看。</p>':""}`}<p class="atelier-error" role="alert">${Pr(d)}</p><small>余额 ◈ ${e().coins}</small></div>`}async function h(){clearTimeout(u);try{c=await _("/jobs/"+g().pendingDesign),c.status==="ready"?(await i.prepareCustom(c),l=!1,a.open&&p()):c.status==="failed"?(l=!1,d=c.error,delete g().pendingDesign,t(),a.open&&p()):(l=!0,a.open&&p(),u=setTimeout(h,2200))}catch(y){l=!1,d=y.message,a.open&&p()}}async function w(){a.open||(a.showModal(),r(!0)),d="",f=g().designDraft??f,m=g().designName??m,p();try{o=(await _("/status")).available,g().pendingDesign?(l=!0,await h()):p()}catch(y){d=y.message,p()}}function M(){a.close(),r(!1)}return a.addEventListener("cancel",y=>{y.preventDefault(),M()}),a.addEventListener("input",y=>{y.target.id==="design-prompt"&&(f=y.target.value,g().designDraft=f),y.target.id==="design-name"&&(m=y.target.value,g().designName=m),t()}),a.addEventListener("click",async y=>{var E;const C=y.target.closest("[data-design]");if(!C||C.disabled)return;const T=C.dataset.design;if(T==="close"&&M(),T==="generate"){if(l)return;if(f.trim().length<4){d="再具体一点吧，至少写 4 个字。",p();return}l=!0,d="";const P=crypto.randomUUID();g().pendingDesign=P,t(),p();try{c=await _("/jobs",{id:P,prompt:f,name:m||"我的新衣服"}),await h()}catch(v){l=!1,d=v.message,delete g().pendingDesign,t(),p()}}if(T==="accept"&&(c==null?void 0:c.status)==="ready"){const P=e();if(P.coins<Si)return;(E=g()).customOutfits??(E.customOutfits=[]),g().customOutfits.some(v=>v.id===c.id)||(P.coins-=Si,g().customOutfits.push({id:c.id,name:c.name||"我的新衣服",prompt:c.prompt,standing:c.standing,reading:c.reading})),g().activeCustom=c.id,delete g().pendingDesign,t(),M(),s()}T==="again"&&(c=null,delete g().pendingDesign,t(),p())}),{open:w,get opened(){return a.open}}}function Xl(n,e){const t=n.textContent;e.startsWith(t)||n.replaceChildren();const i=e.slice(n.textContent.length),r=document.createDocumentFragment();for(const[s,a]of Array.from(i).entries()){const o=document.createElement("span");o.className="stream-text-reveal",o.textContent=a,o.style.animationDelay=Math.min(s*12,72)+"ms",r.append(o)}n.append(r)}function Yl(n){n==null||n.querySelectorAll(".stream-text-reveal").forEach(e=>{e.classList.remove("stream-text-reveal"),e.style.animationDelay=""})}async function*Hd(n){const e=n.getReader(),t=new TextDecoder;let i="";try{for(;;){const{done:r,value:s}=await e.read();i+=t.decode(s,{stream:!r});let a;for(;(a=i.indexOf(`
`))>=0;)yield i.slice(0,a).replace(/\r$/,""),i=i.slice(a+1);if(r){i&&(yield i);break}}}finally{await e.cancel().catch(()=>{}),e.releaseLock()}}async function jl(n,e){var t;if(!n.ok||!((t=n.headers.get("content-type"))!=null&&t.includes("application/x-ndjson"))){const i=await n.json();if(!n.ok)throw new Error(i.error||"连接没有完成，请重试。");return i}for await(const i of Hd(n.body)){if(!i.trim())continue;const r=JSON.parse(i);if(r.type==="text"&&e(r.dialogue),r.type==="error")throw new Error(r.error);if(r.type==="done")return r.reply}throw new Error("回复中断了，请重试；输入内容已保留。")}const Vd="https://sjktg7i6ngh4etmcagt01.apigateway-cn-beijing.volceapi.com/api/companion";function Gd({dialog:n,getState:e,save:t,cg:i,onEnd:r}){const s=n.querySelector("#cg-chat-form"),a=n.querySelector("#cg-chat-input"),o=n.querySelector("#cg-chat-status"),c=n.querySelector("#cg-responses"),l=()=>{a.style.height="auto",a.style.height=a.scrollHeight+"px"};a.addEventListener("input",l);const u=e(),d={id:crypto.randomUUID(),title:i.name+" · 对话",activity:i.activity,kind:"branch",cg:i.id,day:u.day,slot:u.slot,createdAt:new Date().toISOString(),messages:[]};let f=null,m=!1;const g={magic:["先停下咒语，观察叶子的反应。","别着急，我们一起找找书里的办法。"],baking:["不必做得完美，我想听听你的心意。","我们一起看看，是哪里让你犹豫了？"],shop:["先看看纸上写了什么。","刚才的客人是不是落下什么了？"],explore:["先看看是什么挡住了路。","听听附近的动静，别急着过去。"],bond:["这一页，是有什么让你在意吗？","不用赶，我陪你慢慢读。"],festival:["你手里拿着的，是准备送人的礼物吗？","不着急，我们找个安静的地方说。"]},_={magic:"把今天学到的记好，我们回家吧。",baking:"把甜点装好，我们一起收拾厨房吧。",shop:"收好今天的心意，我们打烊回家吧。",explore:"记住这条小路，我们一起回家吧。",bond:"把这页夹好，我们休息一会儿吧。",festival:"把这片秋叶收好，我们一起回家吧。"};function p(M){c.replaceChildren();const y=d.messages.filter(T=>T.role==="user").length>=4;for(const T of[y?_[i.id]:M[0]]){const E=document.createElement("button");E.type="button",E.className="cg-response",E.textContent=T,E.setAttribute("aria-label",T),E.onclick=()=>{if(y){d.messages.push({role:"user",content:T}),d.ended=!0,d.updatedAt=new Date().toISOString();const P=e().memories.findIndex(v=>v.id===d.id);P>=0&&(e().memories[P]=structuredClone(d)),t(),r()}else w(null,T)},c.append(E)}const C=document.createElement("button");C.type="button",C.className="cg-custom-response",C.innerHTML='<svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true"><path d="M3 3.5h14v10H9l-4 3v-3H3z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M6 7h8M6 10h5" stroke="currentColor" stroke-width="1.2"/></svg><span>其他</span>',C.onclick=()=>{c.hidden=!0,s.hidden=!1,l(),a.focus()},c.append(C),c.hidden=!1,s.hidden=!0}function h(M,y){const C=n.querySelector("#cg-line");for(const T of[...C.childNodes])T.nodeType===3&&T.remove();for(const[T,E]of[["narration",M],["dialogue",y]]){let P=C.querySelector(".cg-"+T);if(!E){P==null||P.remove();continue}P||(P=document.createElement("span"),P.className="cg-"+T,T==="narration"?C.prepend(P):C.append(P)),P.textContent!==E&&(P.textContent=E)}}h(i.lines[0]),p(g[i.id]),n.querySelector("#cg-custom-cancel").onclick=()=>{s.hidden=!0,c.hidden=!1};async function w(M,y){var P;M==null||M.preventDefault();const C=y??a.value.trim();if(!C||f)return;const T=n.querySelector("#cg-line").innerHTML;let E=null;f=new AbortController,n.querySelectorAll("#cg-responses button,#cg-chat-form button").forEach(v=>v.disabled=!0),a.readOnly=!0,o.textContent="松团子正在回应…";try{const v=e(),S=await fetch(Vd+"/chat",{method:"POST",headers:{"Content-Type":"application/json"},signal:f.signal,body:JSON.stringify({stream:!0,messages:[...d.messages.slice(-30),{role:"user",content:C}],context:{activity:i.activity,day:v.day,slot:v.slot,cg:{id:i.id,title:i.name,costume:i.costume,lines:[i.lines[0]],outline:i.lines,currentLine:n.querySelector("#cg-line").textContent,interactive:!0},memories:(v.memories??[]).slice(-12).map(({title:O,summary:H})=>({title:O,summary:H}))}})}),R=await jl(S,O=>{var H;!m&&!f.signal.aborted&&(E||(h((H=n.querySelector(".cg-narration"))==null?void 0:H.textContent," "),E=n.querySelector(".cg-dialogue"),E.replaceChildren()),Xl(E,O))});if(!S.ok)throw new Error(R.error||"暂时未能连接，请重试。");if(m)return;if(!Array.isArray(R.choices)||R.choices.length!==2)throw new Error("剧情反馈未完整生成，请重试。");d.messages.push({role:"user",content:C},{role:"assistant",content:[R.narration,R.dialogue].filter(Boolean).join(`
`)}),d.summary=((P=R.event)==null?void 0:P.summary)||[R.narration,R.dialogue].filter(Boolean).join(" "),d.updatedAt=new Date().toISOString(),R.event&&(d.event=R.event),v.memories??(v.memories=[]);const N=v.memories.findIndex(O=>O.id===d.id);N<0?v.memories.push(structuredClone(d)):v.memories[N]=structuredClone(d),t(),Yl(E),h(R.narration,R.dialogue),a.value="",p(R.choices),o.textContent="剧情已记入手记"}catch(v){v.name!=="AbortError"&&!m&&(n.querySelector("#cg-line").innerHTML=T,o.textContent=v.message)}finally{f=null,m||(n.querySelectorAll("#cg-responses button,#cg-chat-form button").forEach(v=>v.disabled=!1),a.readOnly=!1)}}return s.addEventListener("submit",w),{dispose(){m=!0,f==null||f.abort(),s.removeEventListener("submit",w)}}}function Kl(n,e){const t=e.getBoundingClientRect(),i=Math.min(820,innerHeight-48),r=Math.min(500,innerWidth-32,i*.7);n.style.setProperty("--book-left",`${Math.max(16,Math.min(innerWidth-r-16,t.left+t.width/2-r/2))}px`),n.style.setProperty("--book-top",`${(innerHeight-i)/2}px`),n.style.setProperty("--book-width",`${r}px`),n.style.setProperty("--book-height",`${i}px`)}const Ha=n=>`<header class="storybook-heading"><small>与她一起生活的日子</small><h2>${n==="stories"?"角色故事":"手记"}</h2><button class="book-close" data-co="close" aria-label="${n==="stories"?"合上故事书":"合上手记"}">×</button></header>`,Zl={magic:"50% 44%",baking:"50% 38%",shop:"50% 37%",explore:"50% 45%",bond:"50% 35%",festival:"50% 37%"},Lr=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Qn=n=>`/acorn-witch-atelier/assets/rewards/${n}.webp`;function $d({game:n,getState:e,save:t,refresh:i,pause:r,world:s,onWear:a,onRecipes:o}){const c=document.createElement("dialog");c.id="rewards-dialog",n.append(c);const l=document.createElement("button");l.id="home-pet",l.hidden=!0,l.type="button",n.append(l);let u=Bi[0].id,d="album",f=!1,m=null,g=null,_=null;const p=()=>yn(e());function h(){if(g){const I=n.getBoundingClientRect();for(const[B,L]of Object.entries({left:I.left,top:I.top,width:I.width,height:I.height}))c.style.setProperty(`--book-${B}`,`${L}px`)}else Kl(c,n)}function w(){h(),c.open||(c.showModal(),r(!0)),n.dataset.collection="open"}function M(){if(f)return;_==null||_.dispose(),_=null,g&&p().cgs.includes(g)&&!p().seen.includes(g)&&(p().seen.push(g),t()),c.close(),delete n.dataset.collection,r(!1),g=null;const I=m;m=null,i(),I==null||I()}window.addEventListener("resize",()=>{c.open&&h()}),c.addEventListener("cancel",I=>{I.preventDefault(),M()});const y=(I,B,L="",U="")=>`<button class="button" data-reward="${B}" data-id="${L}" ${U}>${I}</button>`;function C(I,B){w(),c.className="collection-page",c.dataset.tab=d,c.innerHTML=`<header class="collection-header"><div><small>松团子的秋日收藏</small><h2>${I}</h2></div><button data-reward="close" aria-label="关闭收藏">×</button></header>${d==="wheel"?"":`<nav class="collection-tabs" aria-label="收藏分类">${[["album","剧情相册"],["pets","宠物册"]].map(([L,U])=>`<button data-reward="tab" data-id="${L}" aria-pressed="${d===L}">${U}</button>`).join("")}</nav>`}<div class="collection-body">${B}</div>`}function T(){d="album";const I=p().cgs;C("CG 相册",`<p class="collection-intro">学习与相处，会把新的故事带到身边。<br>松团子好感 <b>${p().bond}</b> · 已收录 ${I.length} / ${_n.length}</p><div class="cg-grid">${_n.map(B=>`<button class="cg-card ${I.includes(B.id)?"":"locked"}" data-reward="cg" data-id="${B.id}" style="--cg-focus:${Zl[B.id]}" ${I.includes(B.id)?"":"disabled"}><div><img src="${Qn("cg-"+B.id)}" alt="${I.includes(B.id)?B.name:"未解锁剧情剪影"}">${I.includes(B.id)?"<span>▷ 重温</span>":"<span>尚未遇见</span>"}</div><b>${B.name}</b><small>${I.includes(B.id)?B.costume:B.condition}</small></button>`).join("")}</div><p class="collection-note">参加秋日祭即可获得祭典 CG，庆典后生活继续。</p>`)}function E(I,B=!1){return I.type==="pet"?`<img src="${Qn("cat-"+I.item)}" alt="${I.name}">`:I.type==="part"?`<img src="${Qn("part-"+I.item)}" alt="${I.name}">`:I.type==="outfit"?`<img src="${s.getOutfitPreview(I.item,B)}" alt="${I.name}">`:`<span class="wheel-symbol">${I.type==="coins"?"◈":"♧"}</span>`}function P(){d="wheel";const I=e();Bi.find(L=>L.id===u);const B=za(I,u);C("秋日幸运轮盘",`<label class="pool-select">本期收藏<select id="wheel-pool" aria-label="选择轮盘主题">${Bi.map(L=>`<option value="${L.id}" ${L.id===u?"selected":""}>${L.name}</option>`).join("")}</select></label><div class="wheel-balance">◈ ${I.coins} <small>每次 ${ki} 金币</small></div><div class="wheel-stage"><div class="wheel-pointer">▼</div><div class="reward-wheel" style="--count:${Math.max(B.length,1)}">${B.map((L,U)=>`<div class="wheel-prize" style="--angle:${U*360/B.length}deg"><div>${E(L)}<small>${L.name}</small></div></div>`).join("")}<div class="wheel-center">✦</div></div></div><p class="wheel-status" role="status">${B.length?`剩余 ${B.length} 件 · 每件概率 ${(100/B.length).toFixed(2)}%`:"这期收藏齐了，看看别的主题吧。"}</p><div class="wheel-cta">${y(`转一次 · ${ki} ◈`,"spin","",!B.length||I.coins<ki?"disabled":"")}</div><p class="collection-note">不重复获得 · 抽中即得<br>集齐本期最多还需 ${B.length*ki} 金币</p>`)}function v(I){c.className="collection-page reward-reveal",c.innerHTML=`<header class="collection-header"><small>这份小惊喜，属于你了</small><button data-reward="close" aria-label="关闭奖励">×</button></header><div class="reveal-content"><span class="reveal-spark">✦</span><div class="reveal-art">${E(I,!0)}</div><h2>${I.name}</h2><p>${{pet:"一位新朋友，来小屋住下啦。",part:"已放进衣柜，可以自由搭配。",outfit:"整套穿搭已放进衣柜。",menu:"已经学会，可以去厨房制作，再到小铺售卖。",coins:"已放进你的钱袋。"}[I.type]}</p><div class="reveal-actions">${I.type==="pet"?y("认识它","pet",I.item):I.type==="part"||I.type==="outfit"?y("去试衣间","wear"):I.type==="menu"?y("看看新菜单","recipes"):""}${y("继续看轮盘","wheel")}</div></div>`}function S(){if(f)return;let I;const B=za(e(),u);try{I=Bd(e(),u,crypto.getRandomValues(new Uint32Array(1))[0]/4294967296)}catch(G){c.querySelector(".wheel-status").textContent=G.message;return}t(),i(),f=!0,c.querySelectorAll("button,select").forEach(G=>G.disabled=!0),c.querySelector(".wheel-status").textContent="指针慢慢停下来了…";const L=B.findIndex(G=>G.id===I.id),U=c.querySelector(".reward-wheel");U.style.transform=`rotate(${1800-L*360/B.length}deg)`,setTimeout(()=>{f=!1,v(I)},matchMedia("(prefers-reduced-motion: reduce)").matches?50:2400)}function R(){d="pets",C("小屋里的毛茸茸",`<p class="collection-intro">已结识 ${p().pets.length} / ${Oi.length} 位朋友<br>点击已拥有的猫咪，起名、互动或带回主页。</p><div class="pet-grid">${Oi.map(I=>`<button class="pet-card ${p().pets.includes(I.id)?"":"unowned"}" data-reward="pet" data-id="${I.id}"><img src="${Qn("cat-"+I.id)}" alt="${I.name}"><b>${Lr(p().petNames[I.id]||I.name)}</b><small>${p().activePet===I.id?"正在陪伴":p().pets.includes(I.id)?"已结识":"轮盘可获得"}</small></button>`).join("")}</div>`)}function N(I){const B=Oi.find(U=>U.id===I);if(!B)return;const L=p().pets.includes(I);d="pets",C(B.name,`<div class="pet-detail"><img class="pet-large" src="${Qn("cat-"+I)}" alt="${B.name}"><p>${B.look}</p><p class="pet-dialogue">松团子：「${B.line}」</p>${L?`<label>名字<input id="pet-name" maxlength="12" value="${Lr(p().petNames[I]||"")}" placeholder="${B.name}" autocomplete="off"></label><div class="pet-actions">${y("改名","pet-name",I)}${y(p().activePet===I?"休息":"带回",p().activePet===I?"pet-rest":"pet-equip",I)}${y("互动","pet-touch",I,`aria-label="${B.action}"`)}</div><p id="pet-reply" role="status"></p><small>已互动 ${p().petInteractions[I]??0} 次 · 不需要强制喂养</small>`:`<p>在「${Bi.find(U=>U.cats.includes(I)).name}」轮盘结识它。</p>${y("去看看轮盘","pet-pool",I)}`}</div>`)}function O(I,B=null){const L=_n.find(U=>U.id===I);!L||!p().cgs.includes(I)||(m=B,g=I,w(),c.className="cg-player",c.innerHTML=`<img class="cg-full" src="${Qn("cg-"+I)}" alt="${Lr(L.name)}"><div class="cg-motes" aria-hidden="true">${Array.from({length:10},(U,G)=>`<i style="--i:${G}">✧</i>`).join("")}</div><header class="cg-heading"><span>奇遇 · ${Lr(L.name)}</span><div class="cg-share-tools"><button data-reward="cg-share" data-id="${L.id}" aria-label="分享奇遇"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16V3m-5 5 5-5 5 5M5 13v7h14v-7"/></svg></button><button data-reward="cg-exit" aria-label="稍后重看"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg></button></div></header><div class="cg-caption"><small>松团子 · ${L.costume}</small><p id="cg-line"></p><div id="cg-responses" aria-label="选择你的反馈"></div><form id="cg-chat-form" hidden><label class="cg-input-label" for="cg-chat-input">和松团子聊聊</label><textarea id="cg-chat-input" rows="1" maxlength="1000" autocomplete="off" placeholder="想对她说些什么…"></textarea><button type="submit">发送</button><button type="button" id="cg-custom-cancel">收起</button></form><p id="cg-chat-status" role="status"></p></div>`,c.querySelector("#cg-line").textContent=L.lines[0],_=Gd({dialog:c,getState:e,save:t,cg:L,onEnd:M}))}function H(I){const B=p().activePet;if(l.hidden=!I||!B,!B)return;const L=Oi.find(U=>U.id===B);L&&(l.dataset.id!==B&&(l.dataset.id=B,l.innerHTML=`<img src="${Qn("cat-"+B)}" alt="">`),l.setAttribute("aria-label",`和${p().petNames[B]||L.name}互动`))}return l.onclick=()=>N(p().activePet),c.addEventListener("change",I=>{I.target.id==="wheel-pool"&&(u=I.target.value,P())}),c.addEventListener("click",I=>{const B=I.target.closest("[data-reward]");if(!B||B.disabled||f)return;const L=B.dataset.reward,U=B.dataset.id;if(L==="cg-share"&&zl(_n.find(G=>G.id===U),e()).catch(G=>{c.querySelector("#cg-chat-status").textContent=G.message}),(L==="close"||L==="cg-exit")&&M(),L==="tab"&&{album:T,pets:R}[U](),L==="wheel"&&P(),L==="spin"&&S(),L==="cg"&&O(U),L==="pet"&&N(U),L==="pet-pool"&&(u=Bi.find(G=>G.cats.includes(U)).id,P()),L==="pet-rest"&&(p().activePet=null,t(),i(),N(U)),L==="pet-equip"&&p().pets.includes(U)&&(p().activePet=U,t(),M()),L==="pet-name"&&p().pets.includes(U)&&(p().petNames[U]=c.querySelector("#pet-name").value.trim().slice(0,12),t(),c.querySelector("#pet-reply").textContent="记住这个名字啦。"),L==="pet-touch"&&p().pets.includes(U)){p().petInteractions[U]=(p().petInteractions[U]??0)+1,t(),c.querySelector("#pet-reply").textContent=Oi.find(oe=>oe.id===U).reply;const G=c.querySelector(".pet-large");G.classList.remove("pet-nuzzle"),G.offsetWidth,G.classList.add("pet-nuzzle")}L==="wear"&&(M(),a()),L==="recipes"&&(M(),o())}),{album:T,wheel:P,pets:R,playCG:O,updatePet:H,get opened(){return c.open}}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zo="180",Wd=0,Ic=1,qd=2,Jl=1,Xd=2,Cn=3,jn=0,Bt=1,Rn=2,Xn=0,Gi=1,Uc=2,Nc=3,Fc=4,Yd=5,ci=100,jd=101,Kd=102,Zd=103,Jd=104,Qd=200,eh=201,th=202,nh=203,Va=204,Ga=205,ih=206,rh=207,sh=208,ah=209,oh=210,ch=211,lh=212,uh=213,dh=214,$a=0,Wa=1,qa=2,Yi=3,Xa=4,Ya=5,ja=6,Ka=7,Ql=0,hh=1,fh=2,Yn=0,ph=1,mh=2,gh=3,_h=4,vh=5,xh=6,yh=7,eu=300,ji=301,Ki=302,Za=303,Ja=304,ys=306,Qa=1e3,ui=1001,eo=1002,ln=1003,Sh=1004,Dr=1005,Jt=1006,Qs=1007,di=1008,In=1009,tu=1010,nu=1011,pr=1012,Ho=1013,pi=1014,Ln=1015,yr=1016,Vo=1017,Go=1018,mr=1020,iu=35902,ru=35899,su=1021,au=1022,cn=1023,gr=1026,_r=1027,ou=1028,$o=1029,cu=1030,Wo=1031,qo=1033,ss=33776,as=33777,os=33778,cs=33779,to=35840,no=35841,io=35842,ro=35843,so=36196,ao=37492,oo=37496,co=37808,lo=37809,uo=37810,ho=37811,fo=37812,po=37813,mo=37814,go=37815,_o=37816,vo=37817,xo=37818,yo=37819,So=37820,Mo=37821,bo=36492,Eo=36494,To=36495,wo=36283,Ao=36284,Co=36285,Ro=36286,Mh=3200,bh=3201,Eh=0,Th=1,$n="",xt="srgb",Zi="srgb-linear",gs="linear",st="srgb",Mi=7680,Oc=519,wh=512,Ah=513,Ch=514,lu=515,Rh=516,Ph=517,Lh=518,Dh=519,Bc=35044,kc="300 es",vn=2e3,_s=2001;class er{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ea=Math.PI/180,Po=180/Math.PI;function Sr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function Ih(n,e){return(n%e+e)%e}function ta(n,e,t){return(1-t)*n+t*e}function sr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const f=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==f||l!==m||u!==g){let p=1-o;const h=c*f+l*m+u*g+d*_,w=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){const C=Math.sqrt(M),T=Math.atan2(C,h*w);p=Math.sin(p*T)/C,o=Math.sin(o*T)/C}const y=o*w;if(c=c*p+f*y,l=l*p+m*y,u=u*p+g*y,d=d*p+_*y,p===1-o){const C=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=C,l*=C,u*=C,d*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*d+c*m-l*f,e[t+1]=c*g+u*f+l*d-o*m,e[t+2]=l*g+u*m+o*f-c*d,e[t+3]=u*g-o*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),d=o(s/2),f=c(i/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*u*d+l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d+f*m*g;break;case"YZX":this._x=f*u*d+l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d-f*m*g;break;case"XZY":this._x=f*u*d-l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+c*l+a*d-o*u,this.y=i+c*u+o*l-s*d,this.z=r+c*d+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return na.copy(this).projectOnVector(e),this.sub(na)}reflect(e){return this.sub(na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const na=new X,zc=new Mr;class We{constructor(e,t,i,r,s,a,o,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],m=i[5],g=i[8],_=r[0],p=r[3],h=r[6],w=r[1],M=r[4],y=r[7],C=r[2],T=r[5],E=r[8];return s[0]=a*_+o*w+c*C,s[3]=a*p+o*M+c*T,s[6]=a*h+o*y+c*E,s[1]=l*_+u*w+d*C,s[4]=l*p+u*M+d*T,s[7]=l*h+u*y+d*E,s[2]=f*_+m*w+g*C,s[5]=f*p+m*M+g*T,s[8]=f*h+m*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,f=o*c-u*s,m=l*s-a*c,g=t*d+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*l-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=f*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=m*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ia.makeScale(e,t)),this}rotate(e){return this.premultiply(ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ia=new We;function uu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function vr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Uh(){const n=vr("canvas");return n.style.display="block",n}const Hc={};function xr(n){n in Hc||(Hc[n]=!0,console.warn(n))}function Nh(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Vc=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gc=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fh(){const n={enabled:!0,workingColorSpace:Zi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=Dn(r.r),r.g=Dn(r.g),r.b=Dn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=$i(r.r),r.g=$i(r.g),r.b=$i(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$n?gs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return xr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return xr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Zi]:{primaries:e,whitePoint:i,transfer:gs,toXYZ:Vc,fromXYZ:Gc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:i,transfer:st,toXYZ:Vc,fromXYZ:Gc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),n}const Je=Fh();function Dn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $i(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let bi;class Oh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{bi===void 0&&(bi=vr("canvas")),bi.width=e.width,bi.height=e.height;const r=bi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=bi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Dn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Dn(t[i]/255)*255):t[i]=Dn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bh=0;class Xo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Sr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ra(r[a].image)):s.push(ra(r[a]))}else s=ra(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ra(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Oh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kh=0;const sa=new X;class wt extends er{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,i=ui,r=ui,s=Jt,a=di,o=cn,c=In,l=wt.DEFAULT_ANISOTROPY,u=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=Sr(),this.name="",this.source=new Xo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sa).x}get height(){return this.source.getSize(sa).y}get depth(){return this.source.getSize(sa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qa:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qa:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=eu;wt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,i=0,r=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],m=c[5],g=c[9],_=c[2],p=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,y=(m+1)/2,C=(h+1)/2,T=(u+f)/4,E=(d+_)/4,P=(g+p)/4;return M>y&&M>C?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=T/i,s=E/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=E/s,r=P/s),this.set(i,r,s,t),this}let w=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(d-_)/w,this.z=(f-u)/w,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zh extends er{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new wt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Xo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends zh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class du extends wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hh extends wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class br{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,tn):tn.fromBufferAttribute(s,a),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ir.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ir.copy(i.boundingBox)),Ir.applyMatrix4(e.matrixWorld),this.union(Ir)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),Ur.subVectors(this.max,ar),Ei.subVectors(e.a,ar),Ti.subVectors(e.b,ar),wi.subVectors(e.c,ar),Bn.subVectors(Ti,Ei),kn.subVectors(wi,Ti),ei.subVectors(Ei,wi);let t=[0,-Bn.z,Bn.y,0,-kn.z,kn.y,0,-ei.z,ei.y,Bn.z,0,-Bn.x,kn.z,0,-kn.x,ei.z,0,-ei.x,-Bn.y,Bn.x,0,-kn.y,kn.x,0,-ei.y,ei.x,0];return!aa(t,Ei,Ti,wi,Ur)||(t=[1,0,0,0,1,0,0,0,1],!aa(t,Ei,Ti,wi,Ur))?!1:(Nr.crossVectors(Bn,kn),t=[Nr.x,Nr.y,Nr.z],aa(t,Ei,Ti,wi,Ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mn=[new X,new X,new X,new X,new X,new X,new X,new X],tn=new X,Ir=new br,Ei=new X,Ti=new X,wi=new X,Bn=new X,kn=new X,ei=new X,ar=new X,Ur=new X,Nr=new X,ti=new X;function aa(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ti.fromArray(n,s);const o=r.x*Math.abs(ti.x)+r.y*Math.abs(ti.y)+r.z*Math.abs(ti.z),c=e.dot(ti),l=t.dot(ti),u=i.dot(ti);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Vh=new br,or=new X,oa=new X;class Ss{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Vh.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);const t=or.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(or,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(oa)),this.expandByPoint(or.copy(e.center).sub(oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const bn=new X,ca=new X,Fr=new X,zn=new X,la=new X,Or=new X,ua=new X;class hu{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,t),bn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ca.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(ca);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Fr),o=zn.dot(this.direction),c=-zn.dot(Fr),l=zn.lengthSq(),u=Math.abs(1-a*a);let d,f,m,g;if(u>0)if(d=a*c-o,f=a*o-c,g=s*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,m=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ca).addScaledVector(Fr,f),m}intersectSphere(e,t){bn.subVectors(e.center,this.origin);const i=bn.dot(this.direction),r=bn.dot(bn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,i,r,s){la.subVectors(t,e),Or.subVectors(i,e),ua.crossVectors(la,Or);let a=this.direction.dot(ua),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,e);const c=o*this.direction.dot(Or.crossVectors(zn,Or));if(c<0)return null;const l=o*this.direction.dot(la.cross(zn));if(l<0||c+l>a)return null;const u=-o*zn.dot(ua);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,i,r,s,a,o,c,l,u,d,f,m,g,_,p){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,d,f,m,g,_,p)}set(e,t,i,r,s,a,o,c,l,u,d,f,m,g,_,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ai.setFromMatrixColumn(e,0).length(),s=1/Ai.setFromMatrixColumn(e,1).length(),a=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,m=a*d,g=o*u,_=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,m=c*d,g=l*u,_=l*d;t[0]=f+_*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,m=c*d,g=l*u,_=l*d;t[0]=f-_*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,m=a*d,g=o*u,_=o*d;t[0]=c*u,t[4]=g*l-m,t[8]=f*l+_,t[1]=c*d,t[5]=_*l+f,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-f*d,t[8]=g*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+_,t[5]=a*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gh,e,$h)}lookAt(e,t,i){const r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Hn.crossVectors(i,Vt),Hn.lengthSq()===0&&(Math.abs(i.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Hn.crossVectors(i,Vt)),Hn.normalize(),Br.crossVectors(Vt,Hn),r[0]=Hn.x,r[4]=Br.x,r[8]=Vt.x,r[1]=Hn.y,r[5]=Br.y,r[9]=Vt.y,r[2]=Hn.z,r[6]=Br.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],h=i[14],w=i[3],M=i[7],y=i[11],C=i[15],T=r[0],E=r[4],P=r[8],v=r[12],S=r[1],R=r[5],N=r[9],O=r[13],H=r[2],I=r[6],B=r[10],L=r[14],U=r[3],G=r[7],oe=r[11],fe=r[15];return s[0]=a*T+o*S+c*H+l*U,s[4]=a*E+o*R+c*I+l*G,s[8]=a*P+o*N+c*B+l*oe,s[12]=a*v+o*O+c*L+l*fe,s[1]=u*T+d*S+f*H+m*U,s[5]=u*E+d*R+f*I+m*G,s[9]=u*P+d*N+f*B+m*oe,s[13]=u*v+d*O+f*L+m*fe,s[2]=g*T+_*S+p*H+h*U,s[6]=g*E+_*R+p*I+h*G,s[10]=g*P+_*N+p*B+h*oe,s[14]=g*v+_*O+p*L+h*fe,s[3]=w*T+M*S+y*H+C*U,s[7]=w*E+M*R+y*I+C*G,s[11]=w*P+M*N+y*B+C*oe,s[15]=w*v+M*O+y*L+C*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],h=e[15];return g*(+s*c*d-r*l*d-s*o*f+i*l*f+r*o*m-i*c*m)+_*(+t*c*m-t*l*f+s*a*f-r*a*m+r*l*u-s*c*u)+p*(+t*l*d-t*o*m-s*a*d+i*a*m+s*o*u-i*l*u)+h*(-r*o*u-t*c*d+t*o*f+r*a*d-i*a*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],h=e[15],w=d*p*l-_*f*l+_*c*m-o*p*m-d*c*h+o*f*h,M=g*f*l-u*p*l-g*c*m+a*p*m+u*c*h-a*f*h,y=u*_*l-g*d*l+g*o*m-a*_*m-u*o*h+a*d*h,C=g*d*c-u*_*c-g*o*f+a*_*f+u*o*p-a*d*p,T=t*w+i*M+r*y+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=w*E,e[1]=(_*f*s-d*p*s-_*r*m+i*p*m+d*r*h-i*f*h)*E,e[2]=(o*p*s-_*c*s+_*r*l-i*p*l-o*r*h+i*c*h)*E,e[3]=(d*c*s-o*f*s-d*r*l+i*f*l+o*r*m-i*c*m)*E,e[4]=M*E,e[5]=(u*p*s-g*f*s+g*r*m-t*p*m-u*r*h+t*f*h)*E,e[6]=(g*c*s-a*p*s-g*r*l+t*p*l+a*r*h-t*c*h)*E,e[7]=(a*f*s-u*c*s+u*r*l-t*f*l-a*r*m+t*c*m)*E,e[8]=y*E,e[9]=(g*d*s-u*_*s-g*i*m+t*_*m+u*i*h-t*d*h)*E,e[10]=(a*_*s-g*o*s+g*i*l-t*_*l-a*i*h+t*o*h)*E,e[11]=(u*o*s-a*d*s-u*i*l+t*d*l+a*i*m-t*o*m)*E,e[12]=C*E,e[13]=(u*_*r-g*d*r+g*i*f-t*_*f-u*i*p+t*d*p)*E,e[14]=(g*o*r-a*_*r-g*i*c+t*_*c+a*i*p-t*o*p)*E,e[15]=(a*d*r-u*o*r+u*i*c-t*d*c-a*i*f+t*o*f)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,d=o+o,f=s*l,m=s*u,g=s*d,_=a*u,p=a*d,h=o*d,w=c*l,M=c*u,y=c*d,C=i.x,T=i.y,E=i.z;return r[0]=(1-(_+h))*C,r[1]=(m+y)*C,r[2]=(g-M)*C,r[3]=0,r[4]=(m-y)*T,r[5]=(1-(f+h))*T,r[6]=(p+w)*T,r[7]=0,r[8]=(g+M)*E,r[9]=(p-w)*E,r[10]=(1-(f+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ai.set(r[0],r[1],r[2]).length();const a=Ai.set(r[4],r[5],r[6]).length(),o=Ai.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],nn.copy(this);const l=1/s,u=1/a,d=1/o;return nn.elements[0]*=l,nn.elements[1]*=l,nn.elements[2]*=l,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=d,nn.elements[9]*=d,nn.elements[10]*=d,t.setFromRotationMatrix(nn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=vn,c=!1){const l=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),m=(i+r)/(i-r);let g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===vn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===_s)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=vn,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),m=-(i+r)/(i-r);let g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===vn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===_s)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ai=new X,nn=new yt,Gh=new X(0,0,0),$h=new X(1,1,1),Hn=new X,Br=new X,Vt=new X,$c=new yt,Wc=new Mr;class Un{constructor(e=0,t=0,i=0,r=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $c.makeRotationFromQuaternion(e),this.setFromRotationMatrix($c,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wc.setFromEuler(this),this.setFromQuaternion(Wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class fu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wh=0;const qc=new X,Ci=new Mr,En=new yt,kr=new X,cr=new X,qh=new X,Xh=new Mr,Xc=new X(1,0,0),Yc=new X(0,1,0),jc=new X(0,0,1),Kc={type:"added"},Yh={type:"removed"},Ri={type:"childadded",child:null},da={type:"childremoved",child:null};class kt extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new X,t=new Un,i=new Mr,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new We}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(Xc,e)}rotateY(e){return this.rotateOnAxis(Yc,e)}rotateZ(e){return this.rotateOnAxis(jc,e)}translateOnAxis(e,t){return qc.copy(e).applyQuaternion(this.quaternion),this.position.add(qc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xc,e)}translateY(e){return this.translateOnAxis(Yc,e)}translateZ(e){return this.translateOnAxis(jc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?kr.copy(e):kr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(cr,kr,this.up):En.lookAt(kr,cr,this.up),this.quaternion.setFromRotationMatrix(En),r&&(En.extractRotation(r.matrixWorld),Ci.setFromRotationMatrix(En),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kc),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yh),da.child=e,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kc),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,e,qh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,Xh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new X(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new X,Tn=new X,ha=new X,wn=new X,Pi=new X,Li=new X,Zc=new X,fa=new X,pa=new X,ma=new X,ga=new mt,_a=new mt,va=new mt;class on{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),rn.subVectors(e,t),r.cross(rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){rn.subVectors(r,t),Tn.subVectors(i,t),ha.subVectors(e,t);const a=rn.dot(rn),o=rn.dot(Tn),c=rn.dot(ha),l=Tn.dot(Tn),u=Tn.dot(ha),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(l*c-o*u)*f,g=(a*u-o*c)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,wn.x),c.addScaledVector(a,wn.y),c.addScaledVector(o,wn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return ga.setScalar(0),_a.setScalar(0),va.setScalar(0),ga.fromBufferAttribute(e,t),_a.fromBufferAttribute(e,i),va.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ga,s.x),a.addScaledVector(_a,s.y),a.addScaledVector(va,s.z),a}static isFrontFacing(e,t,i,r){return rn.subVectors(i,t),Tn.subVectors(e,t),rn.cross(Tn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),rn.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return on.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Pi.subVectors(r,i),Li.subVectors(s,i),fa.subVectors(e,i);const c=Pi.dot(fa),l=Li.dot(fa);if(c<=0&&l<=0)return t.copy(i);pa.subVectors(e,r);const u=Pi.dot(pa),d=Li.dot(pa);if(u>=0&&d<=u)return t.copy(r);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Pi,a);ma.subVectors(e,s);const m=Pi.dot(ma),g=Li.dot(ma);if(g>=0&&m<=g)return t.copy(s);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Li,o);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return Zc.subVectors(s,r),o=(d-u)/(d-u+(m-g)),t.copy(r).addScaledVector(Zc,o);const h=1/(p+_+f);return a=_*h,o=f*h,t.copy(i).addScaledVector(Pi,a).addScaledVector(Li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},zr={h:0,s:0,l:0};function xa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class it{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=Ih(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=xa(a,s,e+1/3),this.g=xa(a,s,e),this.b=xa(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=xt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){const i=pu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}copyLinearToSRGB(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return Je.workingToColorSpace(Ct.copy(this),e),Math.round(je(Ct.r*255,0,255))*65536+Math.round(je(Ct.g*255,0,255))*256+Math.round(je(Ct.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Ct.copy(this),t);const i=Ct.r,r=Ct.g,s=Ct.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=xt){Je.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,r=Ct.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(zr);const i=ta(Vn.h,zr.h,t),r=ta(Vn.s,zr.s,t),s=ta(Vn.l,zr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new it;it.NAMES=pu;let jh=0;class Er extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=Gi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=Ga,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(i.blending=this.blending),this.side!==jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Va&&(i.blendSrc=this.blendSrc),this.blendDst!==Ga&&(i.blendDst=this.blendDst),this.blendEquation!==ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $t extends Er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new X,Hr=new nt;let Kh=0;class un{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bc,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix3(e),this.setXY(t,Hr.x,Hr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=sr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bc&&(e.usage=this.usage),e}}class mu extends un{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gu extends un{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class fi extends un{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Zh=0;const Kt=new yt,ya=new kt,Di=new X,Gt=new br,lr=new br,bt=new X;class Fn extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uu(e)?gu:mu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,i){return Kt.makeTranslation(e,t,i),this.applyMatrix4(Kt),this}scale(e,t,i){return Kt.makeScale(e,t,i),this.applyMatrix4(Kt),this}lookAt(e){return ya.lookAt(e),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fi(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];lr.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Gt.min,lr.min),Gt.expandByPoint(bt),bt.addVectors(Gt.max,lr.max),Gt.expandByPoint(bt)):(Gt.expandByPoint(lr.min),Gt.expandByPoint(lr.max))}Gt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)bt.fromBufferAttribute(o,l),c&&(Di.fromBufferAttribute(e,l),bt.add(Di)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<i.count;P++)o[P]=new X,c[P]=new X;const l=new X,u=new X,d=new X,f=new nt,m=new nt,g=new nt,_=new X,p=new X;function h(P,v,S){l.fromBufferAttribute(i,P),u.fromBufferAttribute(i,v),d.fromBufferAttribute(i,S),f.fromBufferAttribute(s,P),m.fromBufferAttribute(s,v),g.fromBufferAttribute(s,S),u.sub(l),d.sub(l),m.sub(f),g.sub(f);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(R),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(R),o[P].add(_),o[v].add(_),o[S].add(_),c[P].add(p),c[v].add(p),c[S].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let P=0,v=w.length;P<v;++P){const S=w[P],R=S.start,N=S.count;for(let O=R,H=R+N;O<H;O+=3)h(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const M=new X,y=new X,C=new X,T=new X;function E(P){C.fromBufferAttribute(r,P),T.copy(C);const v=o[P];M.copy(v),M.sub(C.multiplyScalar(C.dot(v))).normalize(),y.crossVectors(T,v);const R=y.dot(c[P])<0?-1:1;a.setXYZW(P,M.x,M.y,M.z,R)}for(let P=0,v=w.length;P<v;++P){const S=w[P],R=S.start,N=S.count;for(let O=R,H=R+N;O<H;O+=3)E(e.getX(O+0)),E(e.getX(O+1)),E(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new X,s=new X,a=new X,o=new X,c=new X,l=new X,u=new X,d=new X;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,f=new l.constructor(c.length*u);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*u;for(let h=0;h<u;h++)f[g++]=l[m++]}return new un(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,d=l.length;u<d;u++){const f=l[u],m=e(f,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jc=new yt,ni=new hu,Vr=new Ss,Qc=new X,Gr=new X,$r=new X,Wr=new X,Sa=new X,qr=new X,el=new X,Xr=new X;class vt extends kt{constructor(e=new Fn,t=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){qr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],d=s[c];u!==0&&(Sa.fromBufferAttribute(d,e),a?qr.addScaledVector(Sa,u):qr.addScaledVector(Sa.sub(t),u))}t.add(qr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere),Vr.applyMatrix4(s),ni.copy(e.ray).recast(e.near),!(Vr.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Vr,Qc)===null||ni.origin.distanceToSquared(Qc)>(e.far-e.near)**2))&&(Jc.copy(s).invert(),ni.copy(e.ray).applyMatrix4(Jc),!(i.boundingBox!==null&&ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],h=a[p.materialIndex],w=Math.max(p.start,m.start),M=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=w,C=M;y<C;y+=3){const T=o.getX(y),E=o.getX(y+1),P=o.getX(y+2);r=Yr(this,h,e,i,l,u,d,T,E,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const w=o.getX(p),M=o.getX(p+1),y=o.getX(p+2);r=Yr(this,a,e,i,l,u,d,w,M,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],h=a[p.materialIndex],w=Math.max(p.start,m.start),M=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let y=w,C=M;y<C;y+=3){const T=y,E=y+1,P=y+2;r=Yr(this,h,e,i,l,u,d,T,E,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const w=p,M=p+1,y=p+2;r=Yr(this,a,e,i,l,u,d,w,M,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Jh(n,e,t,i,r,s,a,o){let c;if(e.side===Bt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===jn,o),c===null)return null;Xr.copy(o),Xr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Xr);return l<t.near||l>t.far?null:{distance:l,point:Xr.clone(),object:n}}function Yr(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Gr),n.getVertexPosition(c,$r),n.getVertexPosition(l,Wr);const u=Jh(n,e,t,i,Gr,$r,Wr,el);if(u){const d=new X;on.getBarycoord(el,Gr,$r,Wr,d),r&&(u.uv=on.getInterpolatedAttribute(r,o,c,l,d,new nt)),s&&(u.uv1=on.getInterpolatedAttribute(s,o,c,l,d,new nt)),a&&(u.normal=on.getInterpolatedAttribute(a,o,c,l,d,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new X,materialIndex:0};on.getNormal(Gr,$r,Wr,f.normal),u.face=f,u.barycoord=d}return u}class Tr extends Fn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new fi(l,3)),this.setAttribute("normal",new fi(u,3)),this.setAttribute("uv",new fi(d,2));function g(_,p,h,w,M,y,C,T,E,P,v){const S=y/E,R=C/P,N=y/2,O=C/2,H=T/2,I=E+1,B=P+1;let L=0,U=0;const G=new X;for(let oe=0;oe<B;oe++){const fe=oe*R-O;for(let me=0;me<I;me++){const Pe=me*S-N;G[_]=Pe*w,G[p]=fe*M,G[h]=H,l.push(G.x,G.y,G.z),G[_]=0,G[p]=0,G[h]=T>0?1:-1,u.push(G.x,G.y,G.z),d.push(me/E),d.push(1-oe/P),L+=1}}for(let oe=0;oe<P;oe++)for(let fe=0;fe<E;fe++){const me=f+fe+I*oe,Pe=f+fe+I*(oe+1),ke=f+(fe+1)+I*(oe+1),ze=f+(fe+1)+I*oe;c.push(me,Pe,ze),c.push(Pe,ke,ze),U+=6}o.addGroup(m,U,v),m+=U,f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ji(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Dt(n){const e={};for(let t=0;t<n.length;t++){const i=Ji(n[t]);for(const r in i)e[r]=i[r]}return e}function Qh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _u(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const ef={clone:Ji,merge:Dt};var tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends Er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tf,this.fragmentShader=nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=Qh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class vu extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new X,tl=new nt,nl=new nt;class an extends vu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Po*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,tl,nl),t.subVectors(nl,tl)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ea*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ii=-90,Ui=1;class rf extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(Ii,Ui,e,t);r.layers=this.layers,this.add(r);const s=new an(Ii,Ui,e,t);s.layers=this.layers,this.add(s);const a=new an(Ii,Ui,e,t);a.layers=this.layers,this.add(a);const o=new an(Ii,Ui,e,t);o.layers=this.layers,this.add(o);const c=new an(Ii,Ui,e,t);c.layers=this.layers,this.add(c);const l=new an(Ii,Ui,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===vn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_s)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class xu extends wt{constructor(e=[],t=ji,i,r,s,a,o,c,l,u){super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sf extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new xu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Tr(5,5,5),s=new Kn({name:"CubemapFromEquirect",uniforms:Ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:Xn});s.uniforms.tEquirect.value=t;const a=new vt(r,s),o=t.minFilter;return t.minFilter===di&&(t.minFilter=Jt),new rf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class jr extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const af={type:"move"};class Ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),h=this._getHandJoint(l,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(af)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new jr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class yu extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ba=new X,of=new X,cf=new We;class ai{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ba.subVectors(i,t).cross(of.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ba),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||cf.getNormalMatrix(e),r=this.coplanarPoint(ba).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new Ss,lf=new nt(.5,.5),Kr=new X;class Su{constructor(e=new ai,t=new ai,i=new ai,r=new ai,s=new ai,a=new ai){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],d=s[5],f=s[6],m=s[7],g=s[8],_=s[9],p=s[10],h=s[11],w=s[12],M=s[13],y=s[14],C=s[15];if(r[0].setComponents(l-a,m-u,h-g,C-w).normalize(),r[1].setComponents(l+a,m+u,h+g,C+w).normalize(),r[2].setComponents(l+o,m+d,h+_,C+M).normalize(),r[3].setComponents(l-o,m-d,h-_,C-M).normalize(),i)r[4].setComponents(c,f,p,y).normalize(),r[5].setComponents(l-c,m-f,h-p,C-y).normalize();else if(r[4].setComponents(l-c,m-f,h-p,C-y).normalize(),t===vn)r[5].setComponents(l+c,m+f,h+p,C+y).normalize();else if(t===_s)r[5].setComponents(c,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){ii.center.set(0,0,0);const t=lf.distanceTo(e.center);return ii.radius=.7071067811865476+t,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Kr.x=r.normal.x>0?e.max.x:e.min.x,Kr.y=r.normal.y>0?e.max.y:e.min.y,Kr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mu extends Er{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const il=new yt,Lo=new hu,Zr=new Ss,Jr=new X;class uf extends kt{constructor(e=new Fn,t=new Mu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(r),Zr.radius+=s,e.ray.intersectsSphere(Zr)===!1)return;il.copy(r).invert(),Lo.copy(e.ray).applyMatrix4(il);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,d=i.attributes.position;if(l!==null){const f=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=f,_=m;g<_;g++){const p=l.getX(g);Jr.fromBufferAttribute(d,p),rl(Jr,p,c,r,e,t,this)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=f,_=m;g<_;g++)Jr.fromBufferAttribute(d,g),rl(Jr,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function rl(n,e,t,i,r,s,a){const o=Lo.distanceSqToPoint(n);if(o<t){const c=new X;Lo.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ls extends wt{constructor(e,t,i,r,s=Jt,a=Jt,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function d(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),super.dispose()}}class hr extends wt{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bu extends wt{constructor(e,t,i=pi,r,s,a,o=ln,c=ln,l,u=gr,d=1){if(u!==gr&&u!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Eu extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class It extends Fn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,d=e/o,f=t/c,m=[],g=[],_=[],p=[];for(let h=0;h<u;h++){const w=h*f-a;for(let M=0;M<l;M++){const y=M*d-s;g.push(y,-w,0),_.push(0,0,1),p.push(M/o),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let w=0;w<o;w++){const M=w+l*h,y=w+l*(h+1),C=w+1+l*(h+1),T=w+1+l*h;m.push(M,y,T),m.push(y,C,T)}this.setIndex(m),this.setAttribute("position",new fi(g,3)),this.setAttribute("normal",new fi(_,3)),this.setAttribute("uv",new fi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new It(e.width,e.height,e.widthSegments,e.heightSegments)}}class df extends Er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hf extends Er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ea={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class ff{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){const m=l[d],g=l[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const pf=new ff;class Yo{constructor(e){this.manager=e!==void 0?e:pf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Yo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ni=new WeakMap;class mf extends Yo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ea.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=Ni.get(a);d===void 0&&(d=[],Ni.set(a,d)),d.push({onLoad:t,onError:r})}return a}const o=vr("img");function c(){u(),t&&t(this);const d=Ni.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onLoad&&m.onLoad(this)}Ni.delete(this),s.manager.itemEnd(e)}function l(d){u(),r&&r(d),Ea.remove(`image:${e}`);const f=Ni.get(this)||[];for(let m=0;m<f.length;m++){const g=f[m];g.onError&&g.onError(d)}Ni.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ea.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Tu extends Yo{constructor(e){super(e)}load(e,t,i,r){const s=new wt,a=new mf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class jo extends vu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class gf extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function sl(n,e,t,i){const r=_f(i);switch(t){case su:return n*e;case ou:return n*e/r.components*r.byteLength;case $o:return n*e/r.components*r.byteLength;case cu:return n*e*2/r.components*r.byteLength;case Wo:return n*e*2/r.components*r.byteLength;case au:return n*e*3/r.components*r.byteLength;case cn:return n*e*4/r.components*r.byteLength;case qo:return n*e*4/r.components*r.byteLength;case ss:case as:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case os:case cs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case no:case ro:return Math.max(n,16)*Math.max(e,8)/4;case to:case io:return Math.max(n,8)*Math.max(e,8)/2;case so:case ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case uo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ho:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case fo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case po:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case mo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case go:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case _o:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case vo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case xo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case yo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case So:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case bo:case Eo:case To:return Math.ceil(n/4)*Math.ceil(e/4)*16;case wo:case Ao:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Co:case Ro:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _f(n){switch(n){case In:case tu:return{byteLength:1,components:1};case pr:case nu:case yr:return{byteLength:2,components:1};case Vo:case Go:return{byteLength:2,components:4};case pi:case Ho:case Ln:return{byteLength:4,components:1};case iu:case ru:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function vf(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,u);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],_=d[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const _=d[m];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var xf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Af=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Cf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Df=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,If=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Vf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$f=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ap=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,up=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_p=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ip=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Up=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Np=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Op=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,im=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,am=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,om=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Am=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Om=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,km=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ym=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Km=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:xf,alphahash_pars_fragment:yf,alphamap_fragment:Sf,alphamap_pars_fragment:Mf,alphatest_fragment:bf,alphatest_pars_fragment:Ef,aomap_fragment:Tf,aomap_pars_fragment:wf,batching_pars_vertex:Af,batching_vertex:Cf,begin_vertex:Rf,beginnormal_vertex:Pf,bsdfs:Lf,iridescence_fragment:Df,bumpmap_pars_fragment:If,clipping_planes_fragment:Uf,clipping_planes_pars_fragment:Nf,clipping_planes_pars_vertex:Ff,clipping_planes_vertex:Of,color_fragment:Bf,color_pars_fragment:kf,color_pars_vertex:zf,color_vertex:Hf,common:Vf,cube_uv_reflection_fragment:Gf,defaultnormal_vertex:$f,displacementmap_pars_vertex:Wf,displacementmap_vertex:qf,emissivemap_fragment:Xf,emissivemap_pars_fragment:Yf,colorspace_fragment:jf,colorspace_pars_fragment:Kf,envmap_fragment:Zf,envmap_common_pars_fragment:Jf,envmap_pars_fragment:Qf,envmap_pars_vertex:ep,envmap_physical_pars_fragment:dp,envmap_vertex:tp,fog_vertex:np,fog_pars_vertex:ip,fog_fragment:rp,fog_pars_fragment:sp,gradientmap_pars_fragment:ap,lightmap_pars_fragment:op,lights_lambert_fragment:cp,lights_lambert_pars_fragment:lp,lights_pars_begin:up,lights_toon_fragment:hp,lights_toon_pars_fragment:fp,lights_phong_fragment:pp,lights_phong_pars_fragment:mp,lights_physical_fragment:gp,lights_physical_pars_fragment:_p,lights_fragment_begin:vp,lights_fragment_maps:xp,lights_fragment_end:yp,logdepthbuf_fragment:Sp,logdepthbuf_pars_fragment:Mp,logdepthbuf_pars_vertex:bp,logdepthbuf_vertex:Ep,map_fragment:Tp,map_pars_fragment:wp,map_particle_fragment:Ap,map_particle_pars_fragment:Cp,metalnessmap_fragment:Rp,metalnessmap_pars_fragment:Pp,morphinstance_vertex:Lp,morphcolor_vertex:Dp,morphnormal_vertex:Ip,morphtarget_pars_vertex:Up,morphtarget_vertex:Np,normal_fragment_begin:Fp,normal_fragment_maps:Op,normal_pars_fragment:Bp,normal_pars_vertex:kp,normal_vertex:zp,normalmap_pars_fragment:Hp,clearcoat_normal_fragment_begin:Vp,clearcoat_normal_fragment_maps:Gp,clearcoat_pars_fragment:$p,iridescence_pars_fragment:Wp,opaque_fragment:qp,packing:Xp,premultiplied_alpha_fragment:Yp,project_vertex:jp,dithering_fragment:Kp,dithering_pars_fragment:Zp,roughnessmap_fragment:Jp,roughnessmap_pars_fragment:Qp,shadowmap_pars_fragment:em,shadowmap_pars_vertex:tm,shadowmap_vertex:nm,shadowmask_pars_fragment:im,skinbase_vertex:rm,skinning_pars_vertex:sm,skinning_vertex:am,skinnormal_vertex:om,specularmap_fragment:cm,specularmap_pars_fragment:lm,tonemapping_fragment:um,tonemapping_pars_fragment:dm,transmission_fragment:hm,transmission_pars_fragment:fm,uv_pars_fragment:pm,uv_pars_vertex:mm,uv_vertex:gm,worldpos_vertex:_m,background_vert:vm,background_frag:xm,backgroundCube_vert:ym,backgroundCube_frag:Sm,cube_vert:Mm,cube_frag:bm,depth_vert:Em,depth_frag:Tm,distanceRGBA_vert:wm,distanceRGBA_frag:Am,equirect_vert:Cm,equirect_frag:Rm,linedashed_vert:Pm,linedashed_frag:Lm,meshbasic_vert:Dm,meshbasic_frag:Im,meshlambert_vert:Um,meshlambert_frag:Nm,meshmatcap_vert:Fm,meshmatcap_frag:Om,meshnormal_vert:Bm,meshnormal_frag:km,meshphong_vert:zm,meshphong_frag:Hm,meshphysical_vert:Vm,meshphysical_frag:Gm,meshtoon_vert:$m,meshtoon_frag:Wm,points_vert:qm,points_frag:Xm,shadow_vert:Ym,shadow_frag:jm,sprite_vert:Km,sprite_frag:Zm},be={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},mn={basic:{uniforms:Dt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Dt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new it(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Dt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Dt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Dt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new it(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Dt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Dt([be.points,be.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Dt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Dt([be.common,be.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Dt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Dt([be.sprite,be.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Dt([be.common,be.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Dt([be.lights,be.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};mn.physical={uniforms:Dt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Qr={r:0,b:0,g:0},ri=new Un,Jm=new yt;function Qm(n,e,t,i,r,s,a){const o=new it(0);let c=s===!0?0:1,l,u,d=null,f=0,m=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function _(M){let y=!1;const C=g(M);C===null?h(o,c):C&&C.isColor&&(h(C,1),y=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(M,y){const C=g(y);C&&(C.isCubeTexture||C.mapping===ys)?(u===void 0&&(u=new vt(new Tr(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Ji(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ri.copy(y.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Jm.makeRotationFromEuler(ri)),u.material.toneMapped=Je.getTransfer(C.colorSpace)!==st,(d!==C||f!==C.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=C,f=C.version,m=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new vt(new It(2,2),new Kn({name:"BackgroundMaterial",uniforms:Ji(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Je.getTransfer(C.colorSpace)!==st,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||f!==C.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=C,f=C.version,m=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function h(M,y){M.getRGB(Qr,_u(n)),i.buffers.color.setClear(Qr.r,Qr.g,Qr.b,y,a)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,y=1){o.set(M),c=y,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,h(o,c)},render:_,addToRenderList:p,dispose:w}}function eg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(S,R,N,O,H){let I=!1;const B=d(O,N,R);s!==B&&(s=B,l(s.object)),I=m(S,O,N,H),I&&g(S,O,N,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(I||a)&&(a=!1,y(S,R,N,O),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function d(S,R,N){const O=N.wireframe===!0;let H=i[S.id];H===void 0&&(H={},i[S.id]=H);let I=H[R.id];I===void 0&&(I={},H[R.id]=I);let B=I[O];return B===void 0&&(B=f(c()),I[O]=B),B}function f(S){const R=[],N=[],O=[];for(let H=0;H<t;H++)R[H]=0,N[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:O,object:S,attributes:{},index:null}}function m(S,R,N,O){const H=s.attributes,I=R.attributes;let B=0;const L=N.getAttributes();for(const U in L)if(L[U].location>=0){const oe=H[U];let fe=I[U];if(fe===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),oe===void 0||oe.attribute!==fe||fe&&oe.data!==fe.data)return!0;B++}return s.attributesNum!==B||s.index!==O}function g(S,R,N,O){const H={},I=R.attributes;let B=0;const L=N.getAttributes();for(const U in L)if(L[U].location>=0){let oe=I[U];oe===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor));const fe={};fe.attribute=oe,oe&&oe.data&&(fe.data=oe.data),H[U]=fe,B++}s.attributes=H,s.attributesNum=B,s.index=O}function _(){const S=s.newAttributes;for(let R=0,N=S.length;R<N;R++)S[R]=0}function p(S){h(S,0)}function h(S,R){const N=s.newAttributes,O=s.enabledAttributes,H=s.attributeDivisors;N[S]=1,O[S]===0&&(n.enableVertexAttribArray(S),O[S]=1),H[S]!==R&&(n.vertexAttribDivisor(S,R),H[S]=R)}function w(){const S=s.newAttributes,R=s.enabledAttributes;for(let N=0,O=R.length;N<O;N++)R[N]!==S[N]&&(n.disableVertexAttribArray(N),R[N]=0)}function M(S,R,N,O,H,I,B){B===!0?n.vertexAttribIPointer(S,R,N,H,I):n.vertexAttribPointer(S,R,N,O,H,I)}function y(S,R,N,O){_();const H=O.attributes,I=N.getAttributes(),B=R.defaultAttributeValues;for(const L in I){const U=I[L];if(U.location>=0){let G=H[L];if(G===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(G=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(G=S.instanceColor)),G!==void 0){const oe=G.normalized,fe=G.itemSize,me=e.get(G);if(me===void 0)continue;const Pe=me.buffer,ke=me.type,ze=me.bytesPerElement,Z=ke===n.INT||ke===n.UNSIGNED_INT||G.gpuType===Ho;if(G.isInterleavedBufferAttribute){const ee=G.data,ve=ee.stride,we=G.offset;if(ee.isInstancedInterleavedBuffer){for(let Me=0;Me<U.locationSize;Me++)h(U.location+Me,ee.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Me=0;Me<U.locationSize;Me++)p(U.location+Me);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let Me=0;Me<U.locationSize;Me++)M(U.location+Me,fe/U.locationSize,ke,oe,ve*ze,(we+fe/U.locationSize*Me)*ze,Z)}else{if(G.isInstancedBufferAttribute){for(let ee=0;ee<U.locationSize;ee++)h(U.location+ee,G.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ee=0;ee<U.locationSize;ee++)p(U.location+ee);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let ee=0;ee<U.locationSize;ee++)M(U.location+ee,fe/U.locationSize,ke,oe,fe*ze,fe/U.locationSize*ee*ze,Z)}}else if(B!==void 0){const oe=B[L];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(U.location,oe);break;case 3:n.vertexAttrib3fv(U.location,oe);break;case 4:n.vertexAttrib4fv(U.location,oe);break;default:n.vertexAttrib1fv(U.location,oe)}}}}w()}function C(){P();for(const S in i){const R=i[S];for(const N in R){const O=R[N];for(const H in O)u(O[H].object),delete O[H];delete R[N]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;const R=i[S.id];for(const N in R){const O=R[N];for(const H in O)u(O[H].object),delete O[H];delete R[N]}delete i[S.id]}function E(S){for(const R in i){const N=i[R];if(N[S.id]===void 0)continue;const O=N[S.id];for(const H in O)u(O[H].object),delete O[H];delete N[S.id]}}function P(){v(),a=!0,s!==r&&(s=r,l(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:v,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:w}}function tg(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];t.update(m,i,1)}function c(l,u,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function ng(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(E){return!(E!==cn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const P=E===yr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==In&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ln&&!P)}function c(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:C,maxSamples:T}}function ig(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ai,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{const w=s?0:i,M=w*4;let y=h.clippingState||null;c.value=y,y=u(g,f,M,m);for(let C=0;C!==M;++C)y[C]=t[C];h.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const h=m+_*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<h)&&(p=new Float32Array(h));for(let M=0,y=m;M!==_;++M,y+=4)a.copy(d[M]).applyMatrix4(w,o),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function rg(n){let e=new WeakMap;function t(a,o){return o===Za?a.mapping=ji:o===Ja&&(a.mapping=Ki),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Za||o===Ja)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new sf(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const zi=4,al=[.125,.215,.35,.446,.526,.582],li=20,Ta=new jo,ol=new it;let wa=null,Aa=0,Ca=0,Ra=!1;const oi=(1+Math.sqrt(5))/2,Fi=1/oi,cl=[new X(-oi,Fi,0),new X(oi,Fi,0),new X(-Fi,0,oi),new X(Fi,0,oi),new X(0,oi,-Fi),new X(0,oi,Fi),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],sg=new X;class ll{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=sg}=s;wa=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wa,Aa,Ca),this._renderer.xr.enabled=Ra,e.scissorTest=!1,es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ji||e.mapping===Ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wa=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:yr,format:cn,colorSpace:Zi,depthBuffer:!1},r=ul(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ul(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ag(s)),this._blurMaterial=og(s,e,t)}return r}_compileMaterial(e){const t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,Ta)}_sceneToCubeUV(e,t,i,r,s){const c=new an(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(ol),d.toneMapping=Yn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const _=new $t({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),p=new vt(new Tr,_);let h=!1;const w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,h=!0):(_.color.copy(ol),h=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[M],s.y,s.z)):y===1?(c.up.set(0,0,l[M]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[M],s.z)):(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[M]));const C=this._cubeSize;es(r,y*C,M>2?C:0,C,C),d.setRenderTarget(r),h&&d.render(p,c),d.render(e,c)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=m,d.autoClear=f,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ji||e.mapping===Ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new vt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;es(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Ta)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=cl[(r-s-1)%cl.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new vt(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*li-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):li;p>li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${li}`);const h=[];let w=0;for(let E=0;E<li;++E){const P=E/_,v=Math.exp(-P*P/2);h.push(v),E===0?w+=v:E<p&&(w+=2*v)}for(let E=0;E<h.length;E++)h[E]=h[E]/w;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;const y=this._sizeLods[r],C=3*y*(r>M-zi?r-M+zi:0),T=4*(this._cubeSize-y);es(t,C,T,3*y,2*y),c.setRenderTarget(t),c.render(d,Ta)}}function ag(n){const e=[],t=[],i=[];let r=n;const s=n-zi+1+al.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-zi?c=al[a-n+zi-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,p=2,h=1,w=new Float32Array(_*g*m),M=new Float32Array(p*g*m),y=new Float32Array(h*g*m);for(let T=0;T<m;T++){const E=T%3*2/3-1,P=T>2?0:-1,v=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];w.set(v,_*g*T),M.set(f,p*g*T);const S=[T,T,T,T,T,T];y.set(S,h*g*T)}const C=new Fn;C.setAttribute("position",new un(w,_)),C.setAttribute("uv",new un(M,p)),C.setAttribute("faceIndex",new un(y,h)),e.push(C),r>zi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ul(n,e,t){const i=new mi(n,e,t);return i.texture.mapping=ys,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function es(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function og(n,e,t){const i=new Float32Array(li),r=new X(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function dl(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function hl(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Ko(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function cg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Za||c===Ja,u=c===ji||c===Ki;if(l||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new ll(n)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return l&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new ll(n)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function lg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&xr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ug(n,e,t,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const m in f)e.update(f[m],n.ARRAY_BUFFER)}function l(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const w=m.array;_=m.version;for(let M=0,y=w.length;M<y;M+=3){const C=w[M+0],T=w[M+1],E=w[M+2];f.push(C,T,T,E,E,C)}}else if(g!==void 0){const w=g.array;_=g.version;for(let M=0,y=w.length/3-1;M<y;M+=3){const C=M+0,T=M+1,E=M+2;f.push(C,T,T,E,E,C)}}else return;const p=new(uu(f)?gu:mu)(f,1);p.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,p)}function u(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function dg(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,m){n.drawElements(i,m,s,f*a),t.update(m,i,1)}function l(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,f*a,g),t.update(m,i,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];t.update(p,i,1)}function d(f,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)l(f[h]/a,m[h],_[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,_,0,g);let h=0;for(let w=0;w<g;w++)h+=m[w]*_[w];t.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function hg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function fg(n,e,t){const i=new WeakMap,r=new mt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let S=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var m=S;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),p===!0&&(y=3);let C=o.attributes.position.count*y,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const E=new Float32Array(C*T*4*d),P=new du(E,C,T,d);P.type=Ln,P.needsUpdate=!0;const v=y*4;for(let R=0;R<d;R++){const N=h[R],O=w[R],H=M[R],I=C*T*4*R;for(let B=0;B<N.count;B++){const L=B*v;g===!0&&(r.fromBufferAttribute(N,B),E[I+L+0]=r.x,E[I+L+1]=r.y,E[I+L+2]=r.z,E[I+L+3]=0),_===!0&&(r.fromBufferAttribute(O,B),E[I+L+4]=r.x,E[I+L+5]=r.y,E[I+L+6]=r.z,E[I+L+7]=0),p===!0&&(r.fromBufferAttribute(H,B),E[I+L+8]=r.x,E[I+L+9]=r.y,E[I+L+10]=r.z,E[I+L+11]=H.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new nt(C,T)},i.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function pg(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Au=new wt,fl=new bu(1,1),Cu=new du,Ru=new Hh,Pu=new xu,pl=[],ml=[],gl=new Float32Array(16),_l=new Float32Array(9),vl=new Float32Array(4);function tr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=pl[r];if(s===void 0&&(s=new Float32Array(r),pl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ms(n,e){let t=ml[e];t===void 0&&(t=new Int32Array(e),ml[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function mg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function _g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function xg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;vl.set(i),n.uniformMatrix2fv(this.addr,!1,vl),Mt(t,i)}}function yg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;_l.set(i),n.uniformMatrix3fv(this.addr,!1,_l),Mt(t,i)}}function Sg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;gl.set(i),n.uniformMatrix4fv(this.addr,!1,gl),Mt(t,i)}}function Mg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function Eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function Tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function wg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function Cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function Rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function Pg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(fl.compareFunction=lu,s=fl):s=Au,t.setTexture2D(e||s,r)}function Lg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ru,r)}function Dg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Pu,r)}function Ig(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Cu,r)}function Ug(n){switch(n){case 5126:return mg;case 35664:return gg;case 35665:return _g;case 35666:return vg;case 35674:return xg;case 35675:return yg;case 35676:return Sg;case 5124:case 35670:return Mg;case 35667:case 35671:return bg;case 35668:case 35672:return Eg;case 35669:case 35673:return Tg;case 5125:return wg;case 36294:return Ag;case 36295:return Cg;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Ig}}function Ng(n,e){n.uniform1fv(this.addr,e)}function Fg(n,e){const t=tr(e,this.size,2);n.uniform2fv(this.addr,t)}function Og(n,e){const t=tr(e,this.size,3);n.uniform3fv(this.addr,t)}function Bg(n,e){const t=tr(e,this.size,4);n.uniform4fv(this.addr,t)}function kg(n,e){const t=tr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function zg(n,e){const t=tr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Hg(n,e){const t=tr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Vg(n,e){n.uniform1iv(this.addr,e)}function Gg(n,e){n.uniform2iv(this.addr,e)}function $g(n,e){n.uniform3iv(this.addr,e)}function Wg(n,e){n.uniform4iv(this.addr,e)}function qg(n,e){n.uniform1uiv(this.addr,e)}function Xg(n,e){n.uniform2uiv(this.addr,e)}function Yg(n,e){n.uniform3uiv(this.addr,e)}function jg(n,e){n.uniform4uiv(this.addr,e)}function Kg(n,e,t){const i=this.cache,r=e.length,s=Ms(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Au,s[a])}function Zg(n,e,t){const i=this.cache,r=e.length,s=Ms(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ru,s[a])}function Jg(n,e,t){const i=this.cache,r=e.length,s=Ms(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Pu,s[a])}function Qg(n,e,t){const i=this.cache,r=e.length,s=Ms(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Cu,s[a])}function e0(n){switch(n){case 5126:return Ng;case 35664:return Fg;case 35665:return Og;case 35666:return Bg;case 35674:return kg;case 35675:return zg;case 35676:return Hg;case 5124:case 35670:return Vg;case 35667:case 35671:return Gg;case 35668:case 35672:return $g;case 35669:case 35673:return Wg;case 5125:return qg;case 36294:return Xg;case 36295:return Yg;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Kg;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return Qg}}class t0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ug(t.type)}}class n0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=e0(t.type)}}class i0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function xl(n,e){n.seq.push(e),n.map[e.id]=e}function r0(n,e,t){const i=n.name,r=i.length;for(Pa.lastIndex=0;;){const s=Pa.exec(i),a=Pa.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){xl(t,l===void 0?new t0(o,n,e):new n0(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new i0(o),xl(t,d)),t=d}}}class us{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);r0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function yl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const s0=37297;let a0=0;function o0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Sl=new We;function c0(n){Je._getMatrix(Sl,Je.workingColorSpace,n);const e=`mat3( ${Sl.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case gs:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ml(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+o0(n.getShaderSource(e),o)}else return s}function l0(n,e){const t=c0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function u0(n,e){let t;switch(e){case ph:t="Linear";break;case mh:t="Reinhard";break;case gh:t="Cineon";break;case _h:t="ACESFilmic";break;case xh:t="AgX";break;case yh:t="Neutral";break;case vh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ts=new X;function d0(){Je.getLuminanceCoefficients(ts);const n=ts.x.toFixed(4),e=ts.y.toFixed(4),t=ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function f0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function p0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function dr(n){return n!==""}function bl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function El(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const m0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(n){return n.replace(m0,_0)}const g0=new Map;function _0(n,e){let t=Xe[e];if(t===void 0){const i=g0.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Do(t)}const v0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tl(n){return n.replace(v0,x0)}function x0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wl(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function y0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Jl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Xd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Cn&&(e="SHADOWMAP_TYPE_VSM"),e}function S0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ji:case Ki:e="ENVMAP_TYPE_CUBE";break;case ys:e="ENVMAP_TYPE_CUBE_UV";break}return e}function M0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ki:e="ENVMAP_MODE_REFRACTION";break}return e}function b0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ql:e="ENVMAP_BLENDING_MULTIPLY";break;case hh:e="ENVMAP_BLENDING_MIX";break;case fh:e="ENVMAP_BLENDING_ADD";break}return e}function E0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function T0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=y0(t),l=S0(t),u=M0(t),d=b0(t),f=E0(t),m=h0(t),g=f0(s),_=r.createProgram();let p,h,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dr).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dr).join(`
`),h.length>0&&(h+=`
`)):(p=[wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),h=[wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Yn?u0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,l0("linearToOutputTexel",t.outputColorSpace),d0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),a=Do(a),a=bl(a,t),a=El(a,t),o=Do(o),o=bl(o,t),o=El(o,t),a=Tl(a),o=Tl(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=w+p+a,y=w+h+o,C=yl(r,r.VERTEX_SHADER,M),T=yl(r,r.FRAGMENT_SHADER,y);r.attachShader(_,C),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(R){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(_)||"",O=r.getShaderInfoLog(C)||"",H=r.getShaderInfoLog(T)||"",I=N.trim(),B=O.trim(),L=H.trim();let U=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,T);else{const oe=Ml(r,C,"vertex"),fe=Ml(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+oe+`
`+fe)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(B===""||L==="")&&(G=!1);G&&(R.diagnostics={runnable:U,programLog:I,vertexShader:{log:B,prefix:p},fragmentShader:{log:L,prefix:h}})}r.deleteShader(C),r.deleteShader(T),P=new us(r,_),v=p0(r,_)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let v;this.getAttributes=function(){return v===void 0&&E(this),v};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,s0)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=a0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=T,this}let w0=0;class A0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new C0(e),t.set(e,i)),i}}class C0{constructor(e){this.id=w0++,this.code=e,this.usedTimes=0}}function R0(n,e,t,i,r,s,a){const o=new fu,c=new A0,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,S,R,N,O){const H=N.fog,I=O.geometry,B=v.isMeshStandardMaterial?N.environment:null,L=(v.isMeshStandardMaterial?t:e).get(v.envMap||B),U=L&&L.mapping===ys?L.image.height:null,G=g[v.type];v.precision!==null&&(m=r.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const oe=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,fe=oe!==void 0?oe.length:0;let me=0;I.morphAttributes.position!==void 0&&(me=1),I.morphAttributes.normal!==void 0&&(me=2),I.morphAttributes.color!==void 0&&(me=3);let Pe,ke,ze,Z;if(G){const tt=mn[G];Pe=tt.vertexShader,ke=tt.fragmentShader}else Pe=v.vertexShader,ke=v.fragmentShader,c.update(v),ze=c.getVertexShaderID(v),Z=c.getFragmentShaderID(v);const ee=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),we=O.isInstancedMesh===!0,Me=O.isBatchedMesh===!0,Ge=!!v.map,dt=!!v.matcap,D=!!L,Qe=!!v.aoMap,Ne=!!v.lightMap,Ue=!!v.bumpMap,te=!!v.normalMap,xe=!!v.displacementMap,re=!!v.emissiveMap,Se=!!v.metalnessMap,Ae=!!v.roughnessMap,qe=v.anisotropy>0,A=v.clearcoat>0,x=v.dispersion>0,W=v.iridescence>0,J=v.sheen>0,ce=v.transmission>0,Q=qe&&!!v.anisotropyMap,Ce=A&&!!v.clearcoatMap,_e=A&&!!v.clearcoatNormalMap,k=A&&!!v.clearcoatRoughnessMap,le=W&&!!v.iridescenceMap,q=W&&!!v.iridescenceThicknessMap,ne=J&&!!v.sheenColorMap,ye=J&&!!v.sheenRoughnessMap,he=!!v.specularMap,de=!!v.specularColorMap,Ie=!!v.specularIntensityMap,F=ce&&!!v.transmissionMap,se=ce&&!!v.thicknessMap,pe=!!v.gradientMap,ue=!!v.alphaMap,ie=v.alphaTest>0,ae=!!v.alphaHash,De=!!v.extensions;let $e=Yn;v.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&($e=n.toneMapping);const ct={shaderID:G,shaderType:v.type,shaderName:v.name,vertexShader:Pe,fragmentShader:ke,defines:v.defines,customVertexShaderID:ze,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:Me,batchingColor:Me&&O._colorsTexture!==null,instancing:we,instancingColor:we&&O.instanceColor!==null,instancingMorph:we&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Zi,alphaToCoverage:!!v.alphaToCoverage,map:Ge,matcap:dt,envMap:D,envMapMode:D&&L.mapping,envMapCubeUVHeight:U,aoMap:Qe,lightMap:Ne,bumpMap:Ue,normalMap:te,displacementMap:f&&xe,emissiveMap:re,normalMapObjectSpace:te&&v.normalMapType===Th,normalMapTangentSpace:te&&v.normalMapType===Eh,metalnessMap:Se,roughnessMap:Ae,anisotropy:qe,anisotropyMap:Q,clearcoat:A,clearcoatMap:Ce,clearcoatNormalMap:_e,clearcoatRoughnessMap:k,dispersion:x,iridescence:W,iridescenceMap:le,iridescenceThicknessMap:q,sheen:J,sheenColorMap:ne,sheenRoughnessMap:ye,specularMap:he,specularColorMap:de,specularIntensityMap:Ie,transmission:ce,transmissionMap:F,thicknessMap:se,gradientMap:pe,opaque:v.transparent===!1&&v.blending===Gi&&v.alphaToCoverage===!1,alphaMap:ue,alphaTest:ie,alphaHash:ae,combine:v.combine,mapUv:Ge&&_(v.map.channel),aoMapUv:Qe&&_(v.aoMap.channel),lightMapUv:Ne&&_(v.lightMap.channel),bumpMapUv:Ue&&_(v.bumpMap.channel),normalMapUv:te&&_(v.normalMap.channel),displacementMapUv:xe&&_(v.displacementMap.channel),emissiveMapUv:re&&_(v.emissiveMap.channel),metalnessMapUv:Se&&_(v.metalnessMap.channel),roughnessMapUv:Ae&&_(v.roughnessMap.channel),anisotropyMapUv:Q&&_(v.anisotropyMap.channel),clearcoatMapUv:Ce&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:_e&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:q&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(v.sheenRoughnessMap.channel),specularMapUv:he&&_(v.specularMap.channel),specularColorMapUv:de&&_(v.specularColorMap.channel),specularIntensityMapUv:Ie&&_(v.specularIntensityMap.channel),transmissionMapUv:F&&_(v.transmissionMap.channel),thicknessMapUv:se&&_(v.thicknessMap.channel),alphaMapUv:ue&&_(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(te||qe),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!I.attributes.uv&&(Ge||ue),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:O.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:me,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:Ge&&v.map.isVideoTexture===!0&&Je.getTransfer(v.map.colorSpace)===st,decodeVideoTextureEmissive:re&&v.emissiveMap.isVideoTexture===!0&&Je.getTransfer(v.emissiveMap.colorSpace)===st,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Rn,flipSided:v.side===Bt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:De&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&v.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function h(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)S.push(R),S.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(w(S,v),M(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function w(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function M(v,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),v.push(o.mask)}function y(v){const S=g[v.type];let R;if(S){const N=mn[S];R=ef.clone(N.uniforms)}else R=v.uniforms;return R}function C(v,S){let R;for(let N=0,O=u.length;N<O;N++){const H=u[N];if(H.cacheKey===S){R=H,++R.usedTimes;break}}return R===void 0&&(R=new T0(n,S,v,s),u.push(R)),R}function T(v){if(--v.usedTimes===0){const S=u.indexOf(v);u[S]=u[u.length-1],u.pop(),v.destroy()}}function E(v){c.remove(v)}function P(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:y,acquireProgram:C,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:P}}function P0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function L0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Al(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,f,m,g,_,p){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=p),e++,h}function o(d,f,m,g,_,p){const h=a(d,f,m,g,_,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function c(d,f,m,g,_,p){const h=a(d,f,m,g,_,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function l(d,f){t.length>1&&t.sort(d||L0),i.length>1&&i.sort(f||Al),r.length>1&&r.sort(f||Al)}function u(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function D0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Cl,n.set(i,[a])):r>=s.length?(a=new Cl,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function I0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new it};break;case"SpotLight":t={position:new X,direction:new X,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function U0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let N0=0;function F0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function O0(n){const e=new I0,t=U0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new X);const r=new X,s=new yt,a=new yt;function o(l){let u=0,d=0,f=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let m=0,g=0,_=0,p=0,h=0,w=0,M=0,y=0,C=0,T=0,E=0;l.sort(F0);for(let v=0,S=l.length;v<S;v++){const R=l[v],N=R.color,O=R.intensity,H=R.distance,I=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=N.r*O,d+=N.g*O,f+=N.b*O;else if(R.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(R.sh.coefficients[B],O);E++}else if(R.isDirectionalLight){const B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const L=R.shadow,U=t.get(R);U.shadowIntensity=L.intensity,U.shadowBias=L.bias,U.shadowNormalBias=L.normalBias,U.shadowRadius=L.radius,U.shadowMapSize=L.mapSize,i.directionalShadow[m]=U,i.directionalShadowMap[m]=I,i.directionalShadowMatrix[m]=R.shadow.matrix,w++}i.directional[m]=B,m++}else if(R.isSpotLight){const B=e.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(N).multiplyScalar(O),B.distance=H,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,i.spot[_]=B;const L=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,L.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[_]=L.matrix,R.castShadow){const U=t.get(R);U.shadowIntensity=L.intensity,U.shadowBias=L.bias,U.shadowNormalBias=L.normalBias,U.shadowRadius=L.radius,U.shadowMapSize=L.mapSize,i.spotShadow[_]=U,i.spotShadowMap[_]=I,y++}_++}else if(R.isRectAreaLight){const B=e.get(R);B.color.copy(N).multiplyScalar(O),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=B,p++}else if(R.isPointLight){const B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){const L=R.shadow,U=t.get(R);U.shadowIntensity=L.intensity,U.shadowBias=L.bias,U.shadowNormalBias=L.normalBias,U.shadowRadius=L.radius,U.shadowMapSize=L.mapSize,U.shadowCameraNear=L.camera.near,U.shadowCameraFar=L.camera.far,i.pointShadow[g]=U,i.pointShadowMap[g]=I,i.pointShadowMatrix[g]=R.shadow.matrix,M++}i.point[g]=B,g++}else if(R.isHemisphereLight){const B=e.get(R);B.skyColor.copy(R.color).multiplyScalar(O),B.groundColor.copy(R.groundColor).multiplyScalar(O),i.hemi[h]=B,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==m||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==p||P.hemiLength!==h||P.numDirectionalShadows!==w||P.numPointShadows!==M||P.numSpotShadows!==y||P.numSpotMaps!==C||P.numLightProbes!==E)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=E,P.directionalLength=m,P.pointLength=g,P.spotLength=_,P.rectAreaLength=p,P.hemiLength=h,P.numDirectionalShadows=w,P.numPointShadows=M,P.numSpotShadows=y,P.numSpotMaps=C,P.numLightProbes=E,i.version=N0++)}function c(l,u){let d=0,f=0,m=0,g=0,_=0;const p=u.matrixWorldInverse;for(let h=0,w=l.length;h<w;h++){const M=l[h];if(M.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),d++}else if(M.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:o,setupView:c,state:i}}function Rl(n){const e=new O0(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function B0(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Rl(n),e.set(r,[o])):s>=a.length?(o=new Rl(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const k0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function H0(n,e,t){let i=new Su;const r=new nt,s=new nt,a=new mt,o=new df({depthPacking:bh}),c=new hf,l={},u=t.maxTextureSize,d={[jn]:Bt,[Bt]:jn,[Rn]:Rn},f=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:k0,fragmentShader:z0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Fn;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new vt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jl;let h=this.type;this.render=function(T,E,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const v=n.getRenderTarget(),S=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Xn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=h!==Cn&&this.type===Cn,H=h===Cn&&this.type!==Cn;for(let I=0,B=T.length;I<B;I++){const L=T[I],U=L.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const G=U.getFrameExtents();if(r.multiply(G),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/G.x),r.x=s.x*G.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/G.y),r.y=s.y*G.y,U.mapSize.y=s.y)),U.map===null||O===!0||H===!0){const fe=this.type!==Cn?{minFilter:ln,magFilter:ln}:{};U.map!==null&&U.map.dispose(),U.map=new mi(r.x,r.y,fe),U.map.texture.name=L.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const oe=U.getViewportCount();for(let fe=0;fe<oe;fe++){const me=U.getViewport(fe);a.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),N.viewport(a),U.updateMatrices(L,fe),i=U.getFrustum(),y(E,P,U.camera,L,this.type)}U.isPointLightShadow!==!0&&this.type===Cn&&w(U,P),U.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(v,S,R)};function w(T,E){const P=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new mi(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(E,null,P,f,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(E,null,P,m,_,null)}function M(T,E,P,v){let S=null;const R=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)S=R;else if(S=P.isPointLight===!0?c:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const N=S.uuid,O=E.uuid;let H=l[N];H===void 0&&(H={},l[N]=H);let I=H[O];I===void 0&&(I=S.clone(),H[O]=I,E.addEventListener("dispose",C)),S=I}if(S.visible=E.visible,S.wireframe=E.wireframe,v===Cn?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:d[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=n.properties.get(S);N.light=P}return S}function y(T,E,P,v,S){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Cn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const O=e.update(T),H=T.material;if(Array.isArray(H)){const I=O.groups;for(let B=0,L=I.length;B<L;B++){const U=I[B],G=H[U.materialIndex];if(G&&G.visible){const oe=M(T,G,v,S);T.onBeforeShadow(n,T,E,P,O,oe,U),n.renderBufferDirect(P,null,O,oe,T,U),T.onAfterShadow(n,T,E,P,O,oe,U)}}}else if(H.visible){const I=M(T,H,v,S);T.onBeforeShadow(n,T,E,P,O,I,null),n.renderBufferDirect(P,null,O,I,T,null),T.onAfterShadow(n,T,E,P,O,I,null)}}const N=T.children;for(let O=0,H=N.length;O<H;O++)y(N[O],E,P,v,S)}function C(T){T.target.removeEventListener("dispose",C);for(const P in l){const v=l[P],S=T.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}const V0={[$a]:Wa,[qa]:ja,[Xa]:Ka,[Yi]:Ya,[Wa]:$a,[ja]:qa,[Ka]:Xa,[Ya]:Yi};function G0(n,e){function t(){let F=!1;const se=new mt;let pe=null;const ue=new mt(0,0,0,0);return{setMask:function(ie){pe!==ie&&!F&&(n.colorMask(ie,ie,ie,ie),pe=ie)},setLocked:function(ie){F=ie},setClear:function(ie,ae,De,$e,ct){ct===!0&&(ie*=$e,ae*=$e,De*=$e),se.set(ie,ae,De,$e),ue.equals(se)===!1&&(n.clearColor(ie,ae,De,$e),ue.copy(se))},reset:function(){F=!1,pe=null,ue.set(-1,0,0,0)}}}function i(){let F=!1,se=!1,pe=null,ue=null,ie=null;return{setReversed:function(ae){if(se!==ae){const De=e.get("EXT_clip_control");ae?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),se=ae;const $e=ie;ie=null,this.setClear($e)}},getReversed:function(){return se},setTest:function(ae){ae?ee(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(ae){pe!==ae&&!F&&(n.depthMask(ae),pe=ae)},setFunc:function(ae){if(se&&(ae=V0[ae]),ue!==ae){switch(ae){case $a:n.depthFunc(n.NEVER);break;case Wa:n.depthFunc(n.ALWAYS);break;case qa:n.depthFunc(n.LESS);break;case Yi:n.depthFunc(n.LEQUAL);break;case Xa:n.depthFunc(n.EQUAL);break;case Ya:n.depthFunc(n.GEQUAL);break;case ja:n.depthFunc(n.GREATER);break;case Ka:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=ae}},setLocked:function(ae){F=ae},setClear:function(ae){ie!==ae&&(se&&(ae=1-ae),n.clearDepth(ae),ie=ae)},reset:function(){F=!1,pe=null,ue=null,ie=null,se=!1}}}function r(){let F=!1,se=null,pe=null,ue=null,ie=null,ae=null,De=null,$e=null,ct=null;return{setTest:function(tt){F||(tt?ee(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(tt){se!==tt&&!F&&(n.stencilMask(tt),se=tt)},setFunc:function(tt,Sn,fn){(pe!==tt||ue!==Sn||ie!==fn)&&(n.stencilFunc(tt,Sn,fn),pe=tt,ue=Sn,ie=fn)},setOp:function(tt,Sn,fn){(ae!==tt||De!==Sn||$e!==fn)&&(n.stencilOp(tt,Sn,fn),ae=tt,De=Sn,$e=fn)},setLocked:function(tt){F=tt},setClear:function(tt){ct!==tt&&(n.clearStencil(tt),ct=tt)},reset:function(){F=!1,se=null,pe=null,ue=null,ie=null,ae=null,De=null,$e=null,ct=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,h=null,w=null,M=null,y=null,C=null,T=null,E=new it(0,0,0),P=0,v=!1,S=null,R=null,N=null,O=null,H=null;const I=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,L=0;const U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(U)[1]),B=L>=1):U.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),B=L>=2);let G=null,oe={};const fe=n.getParameter(n.SCISSOR_BOX),me=n.getParameter(n.VIEWPORT),Pe=new mt().fromArray(fe),ke=new mt().fromArray(me);function ze(F,se,pe,ue){const ie=new Uint8Array(4),ae=n.createTexture();n.bindTexture(F,ae),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<pe;De++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,ie):n.texImage2D(se+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ie);return ae}const Z={};Z[n.TEXTURE_2D]=ze(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(n.DEPTH_TEST),a.setFunc(Yi),Ue(!1),te(Ic),ee(n.CULL_FACE),Qe(Xn);function ee(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function ve(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function we(F,se){return d[F]!==se?(n.bindFramebuffer(F,se),d[F]=se,F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=se),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=se),!0):!1}function Me(F,se){let pe=m,ue=!1;if(F){pe=f.get(se),pe===void 0&&(pe=[],f.set(se,pe));const ie=F.textures;if(pe.length!==ie.length||pe[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,De=ie.length;ae<De;ae++)pe[ae]=n.COLOR_ATTACHMENT0+ae;pe.length=ie.length,ue=!0}}else pe[0]!==n.BACK&&(pe[0]=n.BACK,ue=!0);ue&&n.drawBuffers(pe)}function Ge(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const dt={[ci]:n.FUNC_ADD,[jd]:n.FUNC_SUBTRACT,[Kd]:n.FUNC_REVERSE_SUBTRACT};dt[Zd]=n.MIN,dt[Jd]=n.MAX;const D={[Qd]:n.ZERO,[eh]:n.ONE,[th]:n.SRC_COLOR,[Va]:n.SRC_ALPHA,[oh]:n.SRC_ALPHA_SATURATE,[sh]:n.DST_COLOR,[ih]:n.DST_ALPHA,[nh]:n.ONE_MINUS_SRC_COLOR,[Ga]:n.ONE_MINUS_SRC_ALPHA,[ah]:n.ONE_MINUS_DST_COLOR,[rh]:n.ONE_MINUS_DST_ALPHA,[ch]:n.CONSTANT_COLOR,[lh]:n.ONE_MINUS_CONSTANT_COLOR,[uh]:n.CONSTANT_ALPHA,[dh]:n.ONE_MINUS_CONSTANT_ALPHA};function Qe(F,se,pe,ue,ie,ae,De,$e,ct,tt){if(F===Xn){_===!0&&(ve(n.BLEND),_=!1);return}if(_===!1&&(ee(n.BLEND),_=!0),F!==Yd){if(F!==p||tt!==v){if((h!==ci||y!==ci)&&(n.blendEquation(n.FUNC_ADD),h=ci,y=ci),tt)switch(F){case Gi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uc:n.blendFunc(n.ONE,n.ONE);break;case Nc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Gi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Nc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,M=null,C=null,T=null,E.set(0,0,0),P=0,p=F,v=tt}return}ie=ie||se,ae=ae||pe,De=De||ue,(se!==h||ie!==y)&&(n.blendEquationSeparate(dt[se],dt[ie]),h=se,y=ie),(pe!==w||ue!==M||ae!==C||De!==T)&&(n.blendFuncSeparate(D[pe],D[ue],D[ae],D[De]),w=pe,M=ue,C=ae,T=De),($e.equals(E)===!1||ct!==P)&&(n.blendColor($e.r,$e.g,$e.b,ct),E.copy($e),P=ct),p=F,v=!1}function Ne(F,se){F.side===Rn?ve(n.CULL_FACE):ee(n.CULL_FACE);let pe=F.side===Bt;se&&(pe=!pe),Ue(pe),F.blending===Gi&&F.transparent===!1?Qe(Xn):Qe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const ue=F.stencilWrite;o.setTest(ue),ue&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),re(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(F){S!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),S=F)}function te(F){F!==Wd?(ee(n.CULL_FACE),F!==R&&(F===Ic?n.cullFace(n.BACK):F===qd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),R=F}function xe(F){F!==N&&(B&&n.lineWidth(F),N=F)}function re(F,se,pe){F?(ee(n.POLYGON_OFFSET_FILL),(O!==se||H!==pe)&&(n.polygonOffset(se,pe),O=se,H=pe)):ve(n.POLYGON_OFFSET_FILL)}function Se(F){F?ee(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function Ae(F){F===void 0&&(F=n.TEXTURE0+I-1),G!==F&&(n.activeTexture(F),G=F)}function qe(F,se,pe){pe===void 0&&(G===null?pe=n.TEXTURE0+I-1:pe=G);let ue=oe[pe];ue===void 0&&(ue={type:void 0,texture:void 0},oe[pe]=ue),(ue.type!==F||ue.texture!==se)&&(G!==pe&&(n.activeTexture(pe),G=pe),n.bindTexture(F,se||Z[F]),ue.type=F,ue.texture=se)}function A(){const F=oe[G];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function W(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function k(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(F){Pe.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Pe.copy(F))}function ye(F){ke.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ke.copy(F))}function he(F,se){let pe=l.get(se);pe===void 0&&(pe=new WeakMap,l.set(se,pe));let ue=pe.get(F);ue===void 0&&(ue=n.getUniformBlockIndex(se,F.name),pe.set(F,ue))}function de(F,se){const ue=l.get(se).get(F);c.get(se)!==ue&&(n.uniformBlockBinding(se,ue,F.__bindingPointIndex),c.set(se,ue))}function Ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},G=null,oe={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,h=null,w=null,M=null,y=null,C=null,T=null,E=new it(0,0,0),P=0,v=!1,S=null,R=null,N=null,O=null,H=null,Pe.set(0,0,n.canvas.width,n.canvas.height),ke.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:ve,bindFramebuffer:we,drawBuffers:Me,useProgram:Ge,setBlending:Qe,setMaterial:Ne,setFlipSided:Ue,setCullFace:te,setLineWidth:xe,setPolygonOffset:re,setScissorTest:Se,activeTexture:Ae,bindTexture:qe,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:W,texImage2D:le,texImage3D:q,updateUBOMapping:he,uniformBlockBinding:de,texStorage2D:_e,texStorage3D:k,texSubImage2D:J,texSubImage3D:ce,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ce,scissor:ne,viewport:ye,reset:Ie}}function $0(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return m?new OffscreenCanvas(A,x):vr("canvas")}function _(A,x,W){let J=1;const ce=qe(A);if((ce.width>W||ce.height>W)&&(J=W/Math.max(ce.width,ce.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Q=Math.floor(J*ce.width),Ce=Math.floor(J*ce.height);d===void 0&&(d=g(Q,Ce));const _e=x?g(Q,Ce):d;return _e.width=Q,_e.height=Ce,_e.getContext("2d").drawImage(A,0,0,Q,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+Q+"x"+Ce+")."),_e}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),A;return A}function p(A){return A.generateMipmaps}function h(A){n.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(A,x,W,J,ce=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=x;if(x===n.RED&&(W===n.FLOAT&&(Q=n.R32F),W===n.HALF_FLOAT&&(Q=n.R16F),W===n.UNSIGNED_BYTE&&(Q=n.R8)),x===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.R8UI),W===n.UNSIGNED_SHORT&&(Q=n.R16UI),W===n.UNSIGNED_INT&&(Q=n.R32UI),W===n.BYTE&&(Q=n.R8I),W===n.SHORT&&(Q=n.R16I),W===n.INT&&(Q=n.R32I)),x===n.RG&&(W===n.FLOAT&&(Q=n.RG32F),W===n.HALF_FLOAT&&(Q=n.RG16F),W===n.UNSIGNED_BYTE&&(Q=n.RG8)),x===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.RG8UI),W===n.UNSIGNED_SHORT&&(Q=n.RG16UI),W===n.UNSIGNED_INT&&(Q=n.RG32UI),W===n.BYTE&&(Q=n.RG8I),W===n.SHORT&&(Q=n.RG16I),W===n.INT&&(Q=n.RG32I)),x===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),W===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),W===n.UNSIGNED_INT&&(Q=n.RGB32UI),W===n.BYTE&&(Q=n.RGB8I),W===n.SHORT&&(Q=n.RGB16I),W===n.INT&&(Q=n.RGB32I)),x===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),W===n.UNSIGNED_INT&&(Q=n.RGBA32UI),W===n.BYTE&&(Q=n.RGBA8I),W===n.SHORT&&(Q=n.RGBA16I),W===n.INT&&(Q=n.RGBA32I)),x===n.RGB&&(W===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),x===n.RGBA){const Ce=ce?gs:Je.getTransfer(J);W===n.FLOAT&&(Q=n.RGBA32F),W===n.HALF_FLOAT&&(Q=n.RGBA16F),W===n.UNSIGNED_BYTE&&(Q=Ce===st?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(A,x){let W;return A?x===null||x===pi||x===mr?W=n.DEPTH24_STENCIL8:x===Ln?W=n.DEPTH32F_STENCIL8:x===pr&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===pi||x===mr?W=n.DEPTH_COMPONENT24:x===Ln?W=n.DEPTH_COMPONENT32F:x===pr&&(W=n.DEPTH_COMPONENT16),W}function C(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==ln&&A.minFilter!==Jt?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function T(A){const x=A.target;x.removeEventListener("dispose",T),P(x),x.isVideoTexture&&u.delete(x)}function E(A){const x=A.target;x.removeEventListener("dispose",E),S(x)}function P(A){const x=i.get(A);if(x.__webglInit===void 0)return;const W=A.source,J=f.get(W);if(J){const ce=J[x.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&v(A),Object.keys(J).length===0&&f.delete(W)}i.remove(A)}function v(A){const x=i.get(A);n.deleteTexture(x.__webglTexture);const W=A.source,J=f.get(W);delete J[x.__cacheKey],a.memory.textures--}function S(A){const x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let ce=0;ce<x.__webglFramebuffer[J].length;ce++)n.deleteFramebuffer(x.__webglFramebuffer[J][ce]);else n.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)n.deleteFramebuffer(x.__webglFramebuffer[J]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const W=A.textures;for(let J=0,ce=W.length;J<ce;J++){const Q=i.get(W[J]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(W[J])}i.remove(A)}let R=0;function N(){R=0}function O(){const A=R;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),R+=1,A}function H(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function I(A,x){const W=i.get(A);if(A.isVideoTexture&&Se(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&W.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(W,A,x);return}}else A.isExternalTexture&&(W.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+x)}function B(A,x){const W=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){Z(W,A,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+x)}function L(A,x){const W=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){Z(W,A,x);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+x)}function U(A,x){const W=i.get(A);if(A.version>0&&W.__version!==A.version){ee(W,A,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+x)}const G={[Qa]:n.REPEAT,[ui]:n.CLAMP_TO_EDGE,[eo]:n.MIRRORED_REPEAT},oe={[ln]:n.NEAREST,[Sh]:n.NEAREST_MIPMAP_NEAREST,[Dr]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[Qs]:n.LINEAR_MIPMAP_NEAREST,[di]:n.LINEAR_MIPMAP_LINEAR},fe={[wh]:n.NEVER,[Dh]:n.ALWAYS,[Ah]:n.LESS,[lu]:n.LEQUAL,[Ch]:n.EQUAL,[Lh]:n.GEQUAL,[Rh]:n.GREATER,[Ph]:n.NOTEQUAL};function me(A,x){if(x.type===Ln&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Jt||x.magFilter===Qs||x.magFilter===Dr||x.magFilter===di||x.minFilter===Jt||x.minFilter===Qs||x.minFilter===Dr||x.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,G[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,G[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,G[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,oe[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,oe[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,fe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ln||x.minFilter!==Dr&&x.minFilter!==di||x.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Pe(A,x){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",T));const J=x.source;let ce=f.get(J);ce===void 0&&(ce={},f.set(J,ce));const Q=H(x);if(Q!==A.__cacheKey){ce[Q]===void 0&&(ce[Q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ce[Q].usedTimes++;const Ce=ce[A.__cacheKey];Ce!==void 0&&(ce[A.__cacheKey].usedTimes--,Ce.usedTimes===0&&v(x)),A.__cacheKey=Q,A.__webglTexture=ce[Q].texture}return W}function ke(A,x,W){return Math.floor(Math.floor(A/W)/x)}function ze(A,x,W,J){const Q=A.updateRanges;if(Q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,W,J,x.data);else{Q.sort((q,ne)=>q.start-ne.start);let Ce=0;for(let q=1;q<Q.length;q++){const ne=Q[Ce],ye=Q[q],he=ne.start+ne.count,de=ke(ye.start,x.width,4),Ie=ke(ne.start,x.width,4);ye.start<=he+1&&de===Ie&&ke(ye.start+ye.count-1,x.width,4)===de?ne.count=Math.max(ne.count,ye.start+ye.count-ne.start):(++Ce,Q[Ce]=ye)}Q.length=Ce+1;const _e=n.getParameter(n.UNPACK_ROW_LENGTH),k=n.getParameter(n.UNPACK_SKIP_PIXELS),le=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let q=0,ne=Q.length;q<ne;q++){const ye=Q[q],he=Math.floor(ye.start/4),de=Math.ceil(ye.count/4),Ie=he%x.width,F=Math.floor(he/x.width),se=de,pe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ie),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Ie,F,se,pe,W,J,x.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,_e),n.pixelStorei(n.UNPACK_SKIP_PIXELS,k),n.pixelStorei(n.UNPACK_SKIP_ROWS,le)}}function Z(A,x,W){let J=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=n.TEXTURE_3D);const ce=Pe(A,x),Q=x.source;t.bindTexture(J,A.__webglTexture,n.TEXTURE0+W);const Ce=i.get(Q);if(Q.version!==Ce.__version||ce===!0){t.activeTexture(n.TEXTURE0+W);const _e=Je.getPrimaries(Je.workingColorSpace),k=x.colorSpace===$n?null:Je.getPrimaries(x.colorSpace),le=x.colorSpace===$n||_e===k?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let q=_(x.image,!1,r.maxTextureSize);q=Ae(x,q);const ne=s.convert(x.format,x.colorSpace),ye=s.convert(x.type);let he=M(x.internalFormat,ne,ye,x.colorSpace,x.isVideoTexture);me(J,x);let de;const Ie=x.mipmaps,F=x.isVideoTexture!==!0,se=Ce.__version===void 0||ce===!0,pe=Q.dataReady,ue=C(x,q);if(x.isDepthTexture)he=y(x.format===_r,x.type),se&&(F?t.texStorage2D(n.TEXTURE_2D,1,he,q.width,q.height):t.texImage2D(n.TEXTURE_2D,0,he,q.width,q.height,0,ne,ye,null));else if(x.isDataTexture)if(Ie.length>0){F&&se&&t.texStorage2D(n.TEXTURE_2D,ue,he,Ie[0].width,Ie[0].height);for(let ie=0,ae=Ie.length;ie<ae;ie++)de=Ie[ie],F?pe&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,de.width,de.height,ne,ye,de.data):t.texImage2D(n.TEXTURE_2D,ie,he,de.width,de.height,0,ne,ye,de.data);x.generateMipmaps=!1}else F?(se&&t.texStorage2D(n.TEXTURE_2D,ue,he,q.width,q.height),pe&&ze(x,q,ne,ye)):t.texImage2D(n.TEXTURE_2D,0,he,q.width,q.height,0,ne,ye,q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){F&&se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,he,Ie[0].width,Ie[0].height,q.depth);for(let ie=0,ae=Ie.length;ie<ae;ie++)if(de=Ie[ie],x.format!==cn)if(ne!==null)if(F){if(pe)if(x.layerUpdates.size>0){const De=sl(de.width,de.height,x.format,x.type);for(const $e of x.layerUpdates){const ct=de.data.subarray($e*De/de.data.BYTES_PER_ELEMENT,($e+1)*De/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,$e,de.width,de.height,1,ne,ct)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,q.depth,ne,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,he,de.width,de.height,q.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?pe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,q.depth,ne,ye,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,he,de.width,de.height,q.depth,0,ne,ye,de.data)}else{F&&se&&t.texStorage2D(n.TEXTURE_2D,ue,he,Ie[0].width,Ie[0].height);for(let ie=0,ae=Ie.length;ie<ae;ie++)de=Ie[ie],x.format!==cn?ne!==null?F?pe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,de.width,de.height,ne,de.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,he,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?pe&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,de.width,de.height,ne,ye,de.data):t.texImage2D(n.TEXTURE_2D,ie,he,de.width,de.height,0,ne,ye,de.data)}else if(x.isDataArrayTexture)if(F){if(se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,he,q.width,q.height,q.depth),pe)if(x.layerUpdates.size>0){const ie=sl(q.width,q.height,x.format,x.type);for(const ae of x.layerUpdates){const De=q.data.subarray(ae*ie/q.data.BYTES_PER_ELEMENT,(ae+1)*ie/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ae,q.width,q.height,1,ne,ye,De)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,ne,ye,q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,he,q.width,q.height,q.depth,0,ne,ye,q.data);else if(x.isData3DTexture)F?(se&&t.texStorage3D(n.TEXTURE_3D,ue,he,q.width,q.height,q.depth),pe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,ne,ye,q.data)):t.texImage3D(n.TEXTURE_3D,0,he,q.width,q.height,q.depth,0,ne,ye,q.data);else if(x.isFramebufferTexture){if(se)if(F)t.texStorage2D(n.TEXTURE_2D,ue,he,q.width,q.height);else{let ie=q.width,ae=q.height;for(let De=0;De<ue;De++)t.texImage2D(n.TEXTURE_2D,De,he,ie,ae,0,ne,ye,null),ie>>=1,ae>>=1}}else if(Ie.length>0){if(F&&se){const ie=qe(Ie[0]);t.texStorage2D(n.TEXTURE_2D,ue,he,ie.width,ie.height)}for(let ie=0,ae=Ie.length;ie<ae;ie++)de=Ie[ie],F?pe&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ne,ye,de):t.texImage2D(n.TEXTURE_2D,ie,he,ne,ye,de);x.generateMipmaps=!1}else if(F){if(se){const ie=qe(q);t.texStorage2D(n.TEXTURE_2D,ue,he,ie.width,ie.height)}pe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne,ye,q)}else t.texImage2D(n.TEXTURE_2D,0,he,ne,ye,q);p(x)&&h(J),Ce.__version=Q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ee(A,x,W){if(x.image.length!==6)return;const J=Pe(A,x),ce=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+W);const Q=i.get(ce);if(ce.version!==Q.__version||J===!0){t.activeTexture(n.TEXTURE0+W);const Ce=Je.getPrimaries(Je.workingColorSpace),_e=x.colorSpace===$n?null:Je.getPrimaries(x.colorSpace),k=x.colorSpace===$n||Ce===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);const le=x.isCompressedTexture||x.image[0].isCompressedTexture,q=x.image[0]&&x.image[0].isDataTexture,ne=[];for(let ae=0;ae<6;ae++)!le&&!q?ne[ae]=_(x.image[ae],!0,r.maxCubemapSize):ne[ae]=q?x.image[ae].image:x.image[ae],ne[ae]=Ae(x,ne[ae]);const ye=ne[0],he=s.convert(x.format,x.colorSpace),de=s.convert(x.type),Ie=M(x.internalFormat,he,de,x.colorSpace),F=x.isVideoTexture!==!0,se=Q.__version===void 0||J===!0,pe=ce.dataReady;let ue=C(x,ye);me(n.TEXTURE_CUBE_MAP,x);let ie;if(le){F&&se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Ie,ye.width,ye.height);for(let ae=0;ae<6;ae++){ie=ne[ae].mipmaps;for(let De=0;De<ie.length;De++){const $e=ie[De];x.format!==cn?he!==null?F?pe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De,0,0,$e.width,$e.height,he,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De,Ie,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De,0,0,$e.width,$e.height,he,de,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De,Ie,$e.width,$e.height,0,he,de,$e.data)}}}else{if(ie=x.mipmaps,F&&se){ie.length>0&&ue++;const ae=qe(ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Ie,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(q){F?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ne[ae].width,ne[ae].height,he,de,ne[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ie,ne[ae].width,ne[ae].height,0,he,de,ne[ae].data);for(let De=0;De<ie.length;De++){const ct=ie[De].image[ae].image;F?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De+1,0,0,ct.width,ct.height,he,de,ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De+1,Ie,ct.width,ct.height,0,he,de,ct.data)}}else{F?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,he,de,ne[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ie,he,de,ne[ae]);for(let De=0;De<ie.length;De++){const $e=ie[De];F?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De+1,0,0,he,de,$e.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De+1,Ie,he,de,$e.image[ae])}}}p(x)&&h(n.TEXTURE_CUBE_MAP),Q.__version=ce.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ve(A,x,W,J,ce,Q){const Ce=s.convert(W.format,W.colorSpace),_e=s.convert(W.type),k=M(W.internalFormat,Ce,_e,W.colorSpace),le=i.get(x),q=i.get(W);if(q.__renderTarget=x,!le.__hasExternalTextures){const ne=Math.max(1,x.width>>Q),ye=Math.max(1,x.height>>Q);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,Q,k,ne,ye,x.depth,0,Ce,_e,null):t.texImage2D(ce,Q,k,ne,ye,0,Ce,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),re(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ce,q.__webglTexture,0,xe(x)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ce,q.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(A,x,W){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){const J=x.depthTexture,ce=J&&J.isDepthTexture?J.type:null,Q=y(x.stencilBuffer,ce),Ce=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=xe(x);re(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,Q,x.width,x.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,Q,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Q,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,A)}else{const J=x.textures;for(let ce=0;ce<J.length;ce++){const Q=J[ce],Ce=s.convert(Q.format,Q.colorSpace),_e=s.convert(Q.type),k=M(Q.internalFormat,Ce,_e,Q.colorSpace),le=xe(x);W&&re(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,k,x.width,x.height):re(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,k,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,k,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Me(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(x.depthTexture);J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),I(x.depthTexture,0);const ce=J.__webglTexture,Q=xe(x);if(x.depthTexture.format===gr)re(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0);else if(x.depthTexture.format===_r)re(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Ge(A){const x=i.get(A),W=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const J=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),J){const ce=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,J.removeEventListener("dispose",ce)};J.addEventListener("dispose",ce),x.__depthDisposeCallback=ce}x.__boundDepthTexture=J}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const J=A.texture.mipmaps;J&&J.length>0?Me(x.__webglFramebuffer[0],A):Me(x.__webglFramebuffer,A)}else if(W){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]===void 0)x.__webglDepthbuffer[J]=n.createRenderbuffer(),we(x.__webglDepthbuffer[J],A,!1);else{const ce=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,Q)}}else{const J=A.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),we(x.__webglDepthbuffer,A,!1);else{const ce=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,Q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(A,x,W){const J=i.get(A);x!==void 0&&ve(J.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Ge(A)}function D(A){const x=A.texture,W=i.get(A),J=i.get(x);A.addEventListener("dispose",E);const ce=A.textures,Q=A.isWebGLCubeRenderTarget===!0,Ce=ce.length>1;if(Ce||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=x.version,a.memory.textures++),Q){W.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer[_e]=[];for(let k=0;k<x.mipmaps.length;k++)W.__webglFramebuffer[_e][k]=n.createFramebuffer()}else W.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer=[];for(let _e=0;_e<x.mipmaps.length;_e++)W.__webglFramebuffer[_e]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let _e=0,k=ce.length;_e<k;_e++){const le=i.get(ce[_e]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&re(A)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let _e=0;_e<ce.length;_e++){const k=ce[_e];W.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[_e]);const le=s.convert(k.format,k.colorSpace),q=s.convert(k.type),ne=M(k.internalFormat,le,q,k.colorSpace,A.isXRRenderTarget===!0),ye=xe(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,ne,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,W.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),we(W.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),me(n.TEXTURE_CUBE_MAP,x);for(let _e=0;_e<6;_e++)if(x.mipmaps&&x.mipmaps.length>0)for(let k=0;k<x.mipmaps.length;k++)ve(W.__webglFramebuffer[_e][k],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,k);else ve(W.__webglFramebuffer[_e],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);p(x)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let _e=0,k=ce.length;_e<k;_e++){const le=ce[_e],q=i.get(le);let ne=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,q.__webglTexture),me(ne,le),ve(W.__webglFramebuffer,A,le,n.COLOR_ATTACHMENT0+_e,ne,0),p(le)&&h(ne)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(_e=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,J.__webglTexture),me(_e,x),x.mipmaps&&x.mipmaps.length>0)for(let k=0;k<x.mipmaps.length;k++)ve(W.__webglFramebuffer[k],A,x,n.COLOR_ATTACHMENT0,_e,k);else ve(W.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,_e,0);p(x)&&h(_e),t.unbindTexture()}A.depthBuffer&&Ge(A)}function Qe(A){const x=A.textures;for(let W=0,J=x.length;W<J;W++){const ce=x[W];if(p(ce)){const Q=w(A),Ce=i.get(ce).__webglTexture;t.bindTexture(Q,Ce),h(Q),t.unbindTexture()}}}const Ne=[],Ue=[];function te(A){if(A.samples>0){if(re(A)===!1){const x=A.textures,W=A.width,J=A.height;let ce=n.COLOR_BUFFER_BIT;const Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(A),_e=x.length>1;if(_e)for(let le=0;le<x.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const k=A.texture.mipmaps;k&&k.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let le=0;le<x.length;le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[le]);const q=i.get(x[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,q,0)}n.blitFramebuffer(0,0,W,J,0,0,W,J,ce,n.NEAREST),c===!0&&(Ne.length=0,Ue.length=0,Ne.push(n.COLOR_ATTACHMENT0+le),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ne.push(Q),Ue.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ue)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let le=0;le<x.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[le]);const q=i.get(x[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,q,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function xe(A){return Math.min(r.maxSamples,A.samples)}function re(A){const x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Se(A){const x=a.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function Ae(A,x){const W=A.colorSpace,J=A.format,ce=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||W!==Zi&&W!==$n&&(Je.getTransfer(W)===st?(J!==cn||ce!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),x}function qe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=I,this.setTexture2DArray=B,this.setTexture3D=L,this.setTextureCube=U,this.rebindTextures=dt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=re}function W0(n,e){function t(i,r=$n){let s;const a=Je.getTransfer(r);if(i===In)return n.UNSIGNED_BYTE;if(i===Vo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Go)return n.UNSIGNED_SHORT_5_5_5_1;if(i===iu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ru)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===tu)return n.BYTE;if(i===nu)return n.SHORT;if(i===pr)return n.UNSIGNED_SHORT;if(i===Ho)return n.INT;if(i===pi)return n.UNSIGNED_INT;if(i===Ln)return n.FLOAT;if(i===yr)return n.HALF_FLOAT;if(i===su)return n.ALPHA;if(i===au)return n.RGB;if(i===cn)return n.RGBA;if(i===gr)return n.DEPTH_COMPONENT;if(i===_r)return n.DEPTH_STENCIL;if(i===ou)return n.RED;if(i===$o)return n.RED_INTEGER;if(i===cu)return n.RG;if(i===Wo)return n.RG_INTEGER;if(i===qo)return n.RGBA_INTEGER;if(i===ss||i===as||i===os||i===cs)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ss)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===as)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ss)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===as)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===os)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===to||i===no||i===io||i===ro)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===to)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===no)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===io)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ro)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===so||i===ao||i===oo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===so||i===ao)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===oo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===co||i===lo||i===uo||i===ho||i===fo||i===po||i===mo||i===go||i===_o||i===vo||i===xo||i===yo||i===So||i===Mo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===co)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ho)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===po)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===go)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_o)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===So)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bo||i===Eo||i===To)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===bo)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Eo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===To)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wo||i===Ao||i===Co||i===Ro)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===wo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ao)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Co)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ro)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Y0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Eu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Kn({vertexShader:q0,fragmentShader:X0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new It(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j0 extends er{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,f=null,m=null,g=null;const _=typeof XRWebGLBinding<"u",p=new Y0,h={},w=t.getContextAttributes();let M=null,y=null;const C=[],T=[],E=new nt;let P=null;const v=new an;v.viewport=new mt;const S=new an;S.viewport=new mt;const R=[v,S],N=new gf;let O=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=C[Z];return ee===void 0&&(ee=new Ma,C[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=C[Z];return ee===void 0&&(ee=new Ma,C[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=C[Z];return ee===void 0&&(ee=new Ma,C[Z]=ee),ee.getHandSpace()};function I(Z){const ee=T.indexOf(Z.inputSource);if(ee===-1)return;const ve=C[ee];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,l||a),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",L);for(let Z=0;Z<C.length;Z++){const ee=T[Z];ee!==null&&(T[Z]=null,C[Z].disconnect(ee))}O=null,H=null,p.reset();for(const Z in h)delete h[Z];e.setRenderTarget(M),m=null,f=null,d=null,r=null,y=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",B),r.addEventListener("inputsourceschange",L),w.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,we=null,Me=null;w.depth&&(Me=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=w.stencil?_r:gr,we=w.stencil?mr:pi);const Ge={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ge),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new mi(f.textureWidth,f.textureHeight,{format:cn,type:In,depthTexture:new bu(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ve={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new mi(m.framebufferWidth,m.framebufferHeight,{format:cn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function L(Z){for(let ee=0;ee<Z.removed.length;ee++){const ve=Z.removed[ee],we=T.indexOf(ve);we>=0&&(T[we]=null,C[we].disconnect(ve))}for(let ee=0;ee<Z.added.length;ee++){const ve=Z.added[ee];let we=T.indexOf(ve);if(we===-1){for(let Ge=0;Ge<C.length;Ge++)if(Ge>=T.length){T.push(ve),we=Ge;break}else if(T[Ge]===null){T[Ge]=ve,we=Ge;break}if(we===-1)break}const Me=C[we];Me&&Me.connect(ve)}}const U=new X,G=new X;function oe(Z,ee,ve){U.setFromMatrixPosition(ee.matrixWorld),G.setFromMatrixPosition(ve.matrixWorld);const we=U.distanceTo(G),Me=ee.projectionMatrix.elements,Ge=ve.projectionMatrix.elements,dt=Me[14]/(Me[10]-1),D=Me[14]/(Me[10]+1),Qe=(Me[9]+1)/Me[5],Ne=(Me[9]-1)/Me[5],Ue=(Me[8]-1)/Me[0],te=(Ge[8]+1)/Ge[0],xe=dt*Ue,re=dt*te,Se=we/(-Ue+te),Ae=Se*-Ue;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ae),Z.translateZ(Se),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Me[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const qe=dt+Se,A=D+Se,x=xe-Ae,W=re+(we-Ae),J=Qe*D/A*qe,ce=Ne*D/A*qe;Z.projectionMatrix.makePerspective(x,W,J,ce,qe,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function fe(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ee=Z.near,ve=Z.far;p.texture!==null&&(p.depthNear>0&&(ee=p.depthNear),p.depthFar>0&&(ve=p.depthFar)),N.near=S.near=v.near=ee,N.far=S.far=v.far=ve,(O!==N.near||H!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),O=N.near,H=N.far),N.layers.mask=Z.layers.mask|6,v.layers.mask=N.layers.mask&3,S.layers.mask=N.layers.mask&5;const we=Z.parent,Me=N.cameras;fe(N,we);for(let Ge=0;Ge<Me.length;Ge++)fe(Me[Ge],we);Me.length===2?oe(N,v,S):N.projectionMatrix.copy(v.projectionMatrix),me(Z,N,we)};function me(Z,ee,ve){ve===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Po*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(Z){return h[Z]};let Pe=null;function ke(Z,ee){if(u=ee.getViewerPose(l||a),g=ee,u!==null){const ve=u.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let we=!1;ve.length!==N.cameras.length&&(N.cameras.length=0,we=!0);for(let D=0;D<ve.length;D++){const Qe=ve[D];let Ne=null;if(m!==null)Ne=m.getViewport(Qe);else{const te=d.getViewSubImage(f,Qe);Ne=te.viewport,D===0&&(e.setRenderTargetTextures(y,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(y))}let Ue=R[D];Ue===void 0&&(Ue=new an,Ue.layers.enable(D),Ue.viewport=new mt,R[D]=Ue),Ue.matrix.fromArray(Qe.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Qe.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),D===0&&(N.matrix.copy(Ue.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),we===!0&&N.cameras.push(Ue)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const D=d.getDepthInformation(ve[0]);D&&D.isValid&&D.texture&&p.init(D,r.renderState)}if(Me&&Me.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let D=0;D<ve.length;D++){const Qe=ve[D].camera;if(Qe){let Ne=h[Qe];Ne||(Ne=new Eu,h[Qe]=Ne);const Ue=d.getCameraImage(Qe);Ne.sourceTexture=Ue}}}}for(let ve=0;ve<C.length;ve++){const we=T[ve],Me=C[ve];we!==null&&Me!==void 0&&Me.update(we,ee,l||a)}Pe&&Pe(Z,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const ze=new wu;ze.setAnimationLoop(ke),this.setAnimationLoop=function(Z){Pe=Z},this.dispose=function(){}}}const si=new Un,K0=new yt;function Z0(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,_u(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,w,M,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),d(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,y)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),_(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?c(p,h,w,M):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Bt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Bt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const w=e.get(h),M=w.envMap,y=w.envMapRotation;M&&(p.envMap.value=M,si.copy(y),si.x*=-1,si.y*=-1,si.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),p.envMapRotation.value.setFromMatrix4(K0.makeRotationFromEuler(si)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,w,M){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*w,p.scale.value=M*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,w){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Bt&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const w=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function J0(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,M){const y=M.program;i.uniformBlockBinding(w,y)}function l(w,M){let y=r[w.id];y===void 0&&(g(w),y=u(w),r[w.id]=y,w.addEventListener("dispose",p));const C=M.program;i.updateUBOMapping(w,C);const T=e.render.frame;s[w.id]!==T&&(f(w),s[w.id]=T)}function u(w){const M=d();w.__bindingPointIndex=M;const y=n.createBuffer(),C=w.__size,T=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,y),y}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const M=r[w.id],y=w.uniforms,C=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let T=0,E=y.length;T<E;T++){const P=Array.isArray(y[T])?y[T]:[y[T]];for(let v=0,S=P.length;v<S;v++){const R=P[v];if(m(R,T,v,C)===!0){const N=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let H=0;for(let I=0;I<O.length;I++){const B=O[I],L=_(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,N+H,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,H),H+=L.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,M,y,C){const T=w.value,E=M+"_"+y;if(C[E]===void 0)return typeof T=="number"||typeof T=="boolean"?C[E]=T:C[E]=T.clone(),!0;{const P=C[E];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[E]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(w){const M=w.uniforms;let y=0;const C=16;for(let E=0,P=M.length;E<P;E++){const v=Array.isArray(M[E])?M[E]:[M[E]];for(let S=0,R=v.length;S<R;S++){const N=v[S],O=Array.isArray(N.value)?N.value:[N.value];for(let H=0,I=O.length;H<I;H++){const B=O[H],L=_(B),U=y%C,G=U%L.boundary,oe=U+G;y+=G,oe!==0&&C-oe<L.storage&&(y+=C-oe),N.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=L.storage}}}const T=y%C;return T>0&&(y+=C-T),w.__size=y,w.__cache={},this}function _(w){const M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function p(w){const M=w.target;M.removeEventListener("dispose",p);const y=a.indexOf(M.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function h(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}class Lu{constructor(e={}){const{canvas:t=Uh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,h=null;const w=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let C=!1;this._outputColorSpace=xt;let T=0,E=0,P=null,v=-1,S=null;const R=new mt,N=new mt;let O=null;const H=new it(0);let I=0,B=t.width,L=t.height,U=1,G=null,oe=null;const fe=new mt(0,0,B,L),me=new mt(0,0,B,L);let Pe=!1;const ke=new Su;let ze=!1,Z=!1;const ee=new yt,ve=new X,we=new mt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function dt(){return P===null?U:1}let D=i;function Qe(b,V){return t.getContext(b,V)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zo}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",ie,!1),D===null){const V="webgl2";if(D=Qe(V,b),D===null)throw Qe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ne,Ue,te,xe,re,Se,Ae,qe,A,x,W,J,ce,Q,Ce,_e,k,le,q,ne,ye,he,de,Ie;function F(){Ne=new lg(D),Ne.init(),he=new W0(D,Ne),Ue=new ng(D,Ne,e,he),te=new G0(D,Ne),Ue.reversedDepthBuffer&&f&&te.buffers.depth.setReversed(!0),xe=new hg(D),re=new P0,Se=new $0(D,Ne,te,re,Ue,he,xe),Ae=new rg(y),qe=new cg(y),A=new vf(D),de=new eg(D,A),x=new ug(D,A,xe,de),W=new pg(D,x,A,xe),q=new fg(D,Ue,Se),_e=new ig(re),J=new R0(y,Ae,qe,Ne,Ue,de,_e),ce=new Z0(y,re),Q=new D0,Ce=new B0(Ne),le=new Qm(y,Ae,qe,te,W,m,c),k=new H0(y,W,Ue),Ie=new J0(D,xe,Ue,te),ne=new tg(D,Ne,xe),ye=new dg(D,Ne,xe),xe.programs=J.programs,y.capabilities=Ue,y.extensions=Ne,y.properties=re,y.renderLists=Q,y.shadowMap=k,y.state=te,y.info=xe}F();const se=new j0(y,D);this.xr=se,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=Ne.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ne.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(b){b!==void 0&&(U=b,this.setSize(B,L,!1))},this.getSize=function(b){return b.set(B,L)},this.setSize=function(b,V,Y=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=b,L=V,t.width=Math.floor(b*U),t.height=Math.floor(V*U),Y===!0&&(t.style.width=b+"px",t.style.height=V+"px"),this.setViewport(0,0,b,V)},this.getDrawingBufferSize=function(b){return b.set(B*U,L*U).floor()},this.setDrawingBufferSize=function(b,V,Y){B=b,L=V,U=Y,t.width=Math.floor(b*Y),t.height=Math.floor(V*Y),this.setViewport(0,0,b,V)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(fe)},this.setViewport=function(b,V,Y,j){b.isVector4?fe.set(b.x,b.y,b.z,b.w):fe.set(b,V,Y,j),te.viewport(R.copy(fe).multiplyScalar(U).round())},this.getScissor=function(b){return b.copy(me)},this.setScissor=function(b,V,Y,j){b.isVector4?me.set(b.x,b.y,b.z,b.w):me.set(b,V,Y,j),te.scissor(N.copy(me).multiplyScalar(U).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(b){te.setScissorTest(Pe=b)},this.setOpaqueSort=function(b){G=b},this.setTransparentSort=function(b){oe=b},this.getClearColor=function(b){return b.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(b=!0,V=!0,Y=!0){let j=0;if(b){let $=!1;if(P!==null){const ge=P.texture.format;$=ge===qo||ge===Wo||ge===$o}if($){const ge=P.texture.type,Ee=ge===In||ge===pi||ge===pr||ge===mr||ge===Vo||ge===Go,Le=le.getClearColor(),Te=le.getClearAlpha(),He=Le.r,Ve=Le.g,Oe=Le.b;Ee?(g[0]=He,g[1]=Ve,g[2]=Oe,g[3]=Te,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=He,_[1]=Ve,_[2]=Oe,_[3]=Te,D.clearBufferiv(D.COLOR,0,_))}else j|=D.COLOR_BUFFER_BIT}V&&(j|=D.DEPTH_BUFFER_BIT),Y&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),le.dispose(),Q.dispose(),Ce.dispose(),re.dispose(),Ae.dispose(),qe.dispose(),W.dispose(),de.dispose(),Ie.dispose(),J.dispose(),se.dispose(),se.removeEventListener("sessionstart",fn),se.removeEventListener("sessionend",Qo),Zn.stop()};function pe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const b=xe.autoReset,V=k.enabled,Y=k.autoUpdate,j=k.needsUpdate,$=k.type;F(),xe.autoReset=b,k.enabled=V,k.autoUpdate=Y,k.needsUpdate=j,k.type=$}function ie(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ae(b){const V=b.target;V.removeEventListener("dispose",ae),De(V)}function De(b){$e(b),re.remove(b)}function $e(b){const V=re.get(b).programs;V!==void 0&&(V.forEach(function(Y){J.releaseProgram(Y)}),b.isShaderMaterial&&J.releaseShaderCache(b))}this.renderBufferDirect=function(b,V,Y,j,$,ge){V===null&&(V=Me);const Ee=$.isMesh&&$.matrixWorld.determinant()<0,Le=Zu(b,V,Y,j,$);te.setMaterial(j,Ee);let Te=Y.index,He=1;if(j.wireframe===!0){if(Te=x.getWireframeAttribute(Y),Te===void 0)return;He=2}const Ve=Y.drawRange,Oe=Y.attributes.position;let Ye=Ve.start*He,rt=(Ve.start+Ve.count)*He;ge!==null&&(Ye=Math.max(Ye,ge.start*He),rt=Math.min(rt,(ge.start+ge.count)*He)),Te!==null?(Ye=Math.max(Ye,0),rt=Math.min(rt,Te.count)):Oe!=null&&(Ye=Math.max(Ye,0),rt=Math.min(rt,Oe.count));const pt=rt-Ye;if(pt<0||pt===1/0)return;de.setup($,j,Le,Y,Te);let lt,at=ne;if(Te!==null&&(lt=A.get(Te),at=ye,at.setIndex(lt)),$.isMesh)j.wireframe===!0?(te.setLineWidth(j.wireframeLinewidth*dt()),at.setMode(D.LINES)):at.setMode(D.TRIANGLES);else if($.isLine){let Be=j.linewidth;Be===void 0&&(Be=1),te.setLineWidth(Be*dt()),$.isLineSegments?at.setMode(D.LINES):$.isLineLoop?at.setMode(D.LINE_LOOP):at.setMode(D.LINE_STRIP)}else $.isPoints?at.setMode(D.POINTS):$.isSprite&&at.setMode(D.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)xr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))at.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Be=$._multiDrawStarts,ht=$._multiDrawCounts,Ze=$._multiDrawCount,zt=Te?A.get(Te).bytesPerElement:1,xi=re.get(j).currentProgram.getUniforms();for(let Ht=0;Ht<Ze;Ht++)xi.setValue(D,"_gl_DrawID",Ht),at.render(Be[Ht]/zt,ht[Ht])}else if($.isInstancedMesh)at.renderInstances(Ye,pt,$.count);else if(Y.isInstancedBufferGeometry){const Be=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ht=Math.min(Y.instanceCount,Be);at.renderInstances(Ye,pt,ht)}else at.render(Ye,pt)};function ct(b,V,Y){b.transparent===!0&&b.side===Rn&&b.forceSinglePass===!1?(b.side=Bt,b.needsUpdate=!0,Cr(b,V,Y),b.side=jn,b.needsUpdate=!0,Cr(b,V,Y),b.side=Rn):Cr(b,V,Y)}this.compile=function(b,V,Y=null){Y===null&&(Y=b),h=Ce.get(Y),h.init(V),M.push(h),Y.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(h.pushLight($),$.castShadow&&h.pushShadow($))}),b!==Y&&b.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(h.pushLight($),$.castShadow&&h.pushShadow($))}),h.setupLights();const j=new Set;return b.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const ge=$.material;if(ge)if(Array.isArray(ge))for(let Ee=0;Ee<ge.length;Ee++){const Le=ge[Ee];ct(Le,Y,$),j.add(Le)}else ct(ge,Y,$),j.add(ge)}),h=M.pop(),j},this.compileAsync=function(b,V,Y=null){const j=this.compile(b,V,Y);return new Promise($=>{function ge(){if(j.forEach(function(Ee){re.get(Ee).currentProgram.isReady()&&j.delete(Ee)}),j.size===0){$(b);return}setTimeout(ge,10)}Ne.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let tt=null;function Sn(b){tt&&tt(b)}function fn(){Zn.stop()}function Qo(){Zn.start()}const Zn=new wu;Zn.setAnimationLoop(Sn),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(b){tt=b,se.setAnimationLoop(b),b===null?Zn.stop():Zn.start()},se.addEventListener("sessionstart",fn),se.addEventListener("sessionend",Qo),this.render=function(b,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(V),V=se.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,V,P),h=Ce.get(b,M.length),h.init(V),M.push(h),ee.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ke.setFromProjectionMatrix(ee,vn,V.reversedDepth),Z=this.localClippingEnabled,ze=_e.init(this.clippingPlanes,Z),p=Q.get(b,w.length),p.init(),w.push(p),se.enabled===!0&&se.isPresenting===!0){const ge=y.xr.getDepthSensingMesh();ge!==null&&Cs(ge,V,-1/0,y.sortObjects)}Cs(b,V,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(G,oe),Ge=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ge&&le.addToRenderList(p,b),this.info.render.frame++,ze===!0&&_e.beginShadows();const Y=h.state.shadowsArray;k.render(Y,b,V),ze===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=p.opaque,$=p.transmissive;if(h.setupLights(),V.isArrayCamera){const ge=V.cameras;if($.length>0)for(let Ee=0,Le=ge.length;Ee<Le;Ee++){const Te=ge[Ee];tc(j,$,b,Te)}Ge&&le.render(b);for(let Ee=0,Le=ge.length;Ee<Le;Ee++){const Te=ge[Ee];ec(p,b,Te,Te.viewport)}}else $.length>0&&tc(j,$,b,V),Ge&&le.render(b),ec(p,b,V);P!==null&&E===0&&(Se.updateMultisampleRenderTarget(P),Se.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(y,b,V),de.resetDefaultState(),v=-1,S=null,M.pop(),M.length>0?(h=M[M.length-1],ze===!0&&_e.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function Cs(b,V,Y,j){if(b.visible===!1)return;if(b.layers.test(V.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(V);else if(b.isLight)h.pushLight(b),b.castShadow&&h.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ke.intersectsSprite(b)){j&&we.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ee);const Ee=W.update(b),Le=b.material;Le.visible&&p.push(b,Ee,Le,Y,we.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ke.intersectsObject(b))){const Ee=W.update(b),Le=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),we.copy(b.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),we.copy(Ee.boundingSphere.center)),we.applyMatrix4(b.matrixWorld).applyMatrix4(ee)),Array.isArray(Le)){const Te=Ee.groups;for(let He=0,Ve=Te.length;He<Ve;He++){const Oe=Te[He],Ye=Le[Oe.materialIndex];Ye&&Ye.visible&&p.push(b,Ee,Ye,Y,we.z,Oe)}}else Le.visible&&p.push(b,Ee,Le,Y,we.z,null)}}const ge=b.children;for(let Ee=0,Le=ge.length;Ee<Le;Ee++)Cs(ge[Ee],V,Y,j)}function ec(b,V,Y,j){const $=b.opaque,ge=b.transmissive,Ee=b.transparent;h.setupLightsView(Y),ze===!0&&_e.setGlobalState(y.clippingPlanes,Y),j&&te.viewport(R.copy(j)),$.length>0&&Ar($,V,Y),ge.length>0&&Ar(ge,V,Y),Ee.length>0&&Ar(Ee,V,Y),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function tc(b,V,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[j.id]===void 0&&(h.state.transmissionRenderTarget[j.id]=new mi(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?yr:In,minFilter:di,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ge=h.state.transmissionRenderTarget[j.id],Ee=j.viewport||R;ge.setSize(Ee.z*y.transmissionResolutionScale,Ee.w*y.transmissionResolutionScale);const Le=y.getRenderTarget(),Te=y.getActiveCubeFace(),He=y.getActiveMipmapLevel();y.setRenderTarget(ge),y.getClearColor(H),I=y.getClearAlpha(),I<1&&y.setClearColor(16777215,.5),y.clear(),Ge&&le.render(Y);const Ve=y.toneMapping;y.toneMapping=Yn;const Oe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),h.setupLightsView(j),ze===!0&&_e.setGlobalState(y.clippingPlanes,j),Ar(b,Y,j),Se.updateMultisampleRenderTarget(ge),Se.updateRenderTargetMipmap(ge),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let rt=0,pt=V.length;rt<pt;rt++){const lt=V[rt],at=lt.object,Be=lt.geometry,ht=lt.material,Ze=lt.group;if(ht.side===Rn&&at.layers.test(j.layers)){const zt=ht.side;ht.side=Bt,ht.needsUpdate=!0,nc(at,Y,j,Be,ht,Ze),ht.side=zt,ht.needsUpdate=!0,Ye=!0}}Ye===!0&&(Se.updateMultisampleRenderTarget(ge),Se.updateRenderTargetMipmap(ge))}y.setRenderTarget(Le,Te,He),y.setClearColor(H,I),Oe!==void 0&&(j.viewport=Oe),y.toneMapping=Ve}function Ar(b,V,Y){const j=V.isScene===!0?V.overrideMaterial:null;for(let $=0,ge=b.length;$<ge;$++){const Ee=b[$],Le=Ee.object,Te=Ee.geometry,He=Ee.group;let Ve=Ee.material;Ve.allowOverride===!0&&j!==null&&(Ve=j),Le.layers.test(Y.layers)&&nc(Le,V,Y,Te,Ve,He)}}function nc(b,V,Y,j,$,ge){b.onBeforeRender(y,V,Y,j,$,ge),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.onBeforeRender(y,V,Y,j,b,ge),$.transparent===!0&&$.side===Rn&&$.forceSinglePass===!1?($.side=Bt,$.needsUpdate=!0,y.renderBufferDirect(Y,V,j,$,b,ge),$.side=jn,$.needsUpdate=!0,y.renderBufferDirect(Y,V,j,$,b,ge),$.side=Rn):y.renderBufferDirect(Y,V,j,$,b,ge),b.onAfterRender(y,V,Y,j,$,ge)}function Cr(b,V,Y){V.isScene!==!0&&(V=Me);const j=re.get(b),$=h.state.lights,ge=h.state.shadowsArray,Ee=$.state.version,Le=J.getParameters(b,$.state,ge,V,Y),Te=J.getProgramCacheKey(Le);let He=j.programs;j.environment=b.isMeshStandardMaterial?V.environment:null,j.fog=V.fog,j.envMap=(b.isMeshStandardMaterial?qe:Ae).get(b.envMap||j.environment),j.envMapRotation=j.environment!==null&&b.envMap===null?V.environmentRotation:b.envMapRotation,He===void 0&&(b.addEventListener("dispose",ae),He=new Map,j.programs=He);let Ve=He.get(Te);if(Ve!==void 0){if(j.currentProgram===Ve&&j.lightsStateVersion===Ee)return rc(b,Le),Ve}else Le.uniforms=J.getUniforms(b),b.onBeforeCompile(Le,y),Ve=J.acquireProgram(Le,Te),He.set(Te,Ve),j.uniforms=Le.uniforms;const Oe=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Oe.clippingPlanes=_e.uniform),rc(b,Le),j.needsLights=Qu(b),j.lightsStateVersion=Ee,j.needsLights&&(Oe.ambientLightColor.value=$.state.ambient,Oe.lightProbe.value=$.state.probe,Oe.directionalLights.value=$.state.directional,Oe.directionalLightShadows.value=$.state.directionalShadow,Oe.spotLights.value=$.state.spot,Oe.spotLightShadows.value=$.state.spotShadow,Oe.rectAreaLights.value=$.state.rectArea,Oe.ltc_1.value=$.state.rectAreaLTC1,Oe.ltc_2.value=$.state.rectAreaLTC2,Oe.pointLights.value=$.state.point,Oe.pointLightShadows.value=$.state.pointShadow,Oe.hemisphereLights.value=$.state.hemi,Oe.directionalShadowMap.value=$.state.directionalShadowMap,Oe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Oe.spotShadowMap.value=$.state.spotShadowMap,Oe.spotLightMatrix.value=$.state.spotLightMatrix,Oe.spotLightMap.value=$.state.spotLightMap,Oe.pointShadowMap.value=$.state.pointShadowMap,Oe.pointShadowMatrix.value=$.state.pointShadowMatrix),j.currentProgram=Ve,j.uniformsList=null,Ve}function ic(b){if(b.uniformsList===null){const V=b.currentProgram.getUniforms();b.uniformsList=us.seqWithValue(V.seq,b.uniforms)}return b.uniformsList}function rc(b,V){const Y=re.get(b);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.batchingColor=V.batchingColor,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.instancingMorph=V.instancingMorph,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function Zu(b,V,Y,j,$){V.isScene!==!0&&(V=Me),Se.resetTextureUnits();const ge=V.fog,Ee=j.isMeshStandardMaterial?V.environment:null,Le=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Zi,Te=(j.isMeshStandardMaterial?qe:Ae).get(j.envMap||Ee),He=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ve=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Oe=!!Y.morphAttributes.position,Ye=!!Y.morphAttributes.normal,rt=!!Y.morphAttributes.color;let pt=Yn;j.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(pt=y.toneMapping);const lt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,at=lt!==void 0?lt.length:0,Be=re.get(j),ht=h.state.lights;if(ze===!0&&(Z===!0||b!==S)){const Pt=b===S&&j.id===v;_e.setState(j,b,Pt)}let Ze=!1;j.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==ht.state.version||Be.outputColorSpace!==Le||$.isBatchedMesh&&Be.batching===!1||!$.isBatchedMesh&&Be.batching===!0||$.isBatchedMesh&&Be.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Be.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Be.instancing===!1||!$.isInstancedMesh&&Be.instancing===!0||$.isSkinnedMesh&&Be.skinning===!1||!$.isSkinnedMesh&&Be.skinning===!0||$.isInstancedMesh&&Be.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Be.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Be.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Be.instancingMorph===!1&&$.morphTexture!==null||Be.envMap!==Te||j.fog===!0&&Be.fog!==ge||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==_e.numPlanes||Be.numIntersection!==_e.numIntersection)||Be.vertexAlphas!==He||Be.vertexTangents!==Ve||Be.morphTargets!==Oe||Be.morphNormals!==Ye||Be.morphColors!==rt||Be.toneMapping!==pt||Be.morphTargetsCount!==at)&&(Ze=!0):(Ze=!0,Be.__version=j.version);let zt=Be.currentProgram;Ze===!0&&(zt=Cr(j,V,$));let xi=!1,Ht=!1,ir=!1;const ft=zt.getUniforms(),Yt=Be.uniforms;if(te.useProgram(zt.program)&&(xi=!0,Ht=!0,ir=!0),j.id!==v&&(v=j.id,Ht=!0),xi||S!==b){te.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ft.setValue(D,"projectionMatrix",b.projectionMatrix),ft.setValue(D,"viewMatrix",b.matrixWorldInverse);const Ft=ft.map.cameraPosition;Ft!==void 0&&Ft.setValue(D,ve.setFromMatrixPosition(b.matrixWorld)),Ue.logarithmicDepthBuffer&&ft.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ft.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Ht=!0,ir=!0)}if($.isSkinnedMesh){ft.setOptional(D,$,"bindMatrix"),ft.setOptional(D,$,"bindMatrixInverse");const Pt=$.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ft.setValue(D,"boneTexture",Pt.boneTexture,Se))}$.isBatchedMesh&&(ft.setOptional(D,$,"batchingTexture"),ft.setValue(D,"batchingTexture",$._matricesTexture,Se),ft.setOptional(D,$,"batchingIdTexture"),ft.setValue(D,"batchingIdTexture",$._indirectTexture,Se),ft.setOptional(D,$,"batchingColorTexture"),$._colorsTexture!==null&&ft.setValue(D,"batchingColorTexture",$._colorsTexture,Se));const jt=Y.morphAttributes;if((jt.position!==void 0||jt.normal!==void 0||jt.color!==void 0)&&q.update($,Y,zt),(Ht||Be.receiveShadow!==$.receiveShadow)&&(Be.receiveShadow=$.receiveShadow,ft.setValue(D,"receiveShadow",$.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Yt.envMap.value=Te,Yt.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&V.environment!==null&&(Yt.envMapIntensity.value=V.environmentIntensity),Ht&&(ft.setValue(D,"toneMappingExposure",y.toneMappingExposure),Be.needsLights&&Ju(Yt,ir),ge&&j.fog===!0&&ce.refreshFogUniforms(Yt,ge),ce.refreshMaterialUniforms(Yt,j,U,L,h.state.transmissionRenderTarget[b.id]),us.upload(D,ic(Be),Yt,Se)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(us.upload(D,ic(Be),Yt,Se),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ft.setValue(D,"center",$.center),ft.setValue(D,"modelViewMatrix",$.modelViewMatrix),ft.setValue(D,"normalMatrix",$.normalMatrix),ft.setValue(D,"modelMatrix",$.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Pt=j.uniformsGroups;for(let Ft=0,Rs=Pt.length;Ft<Rs;Ft++){const Jn=Pt[Ft];Ie.update(Jn,zt),Ie.bind(Jn,zt)}}return zt}function Ju(b,V){b.ambientLightColor.needsUpdate=V,b.lightProbe.needsUpdate=V,b.directionalLights.needsUpdate=V,b.directionalLightShadows.needsUpdate=V,b.pointLights.needsUpdate=V,b.pointLightShadows.needsUpdate=V,b.spotLights.needsUpdate=V,b.spotLightShadows.needsUpdate=V,b.rectAreaLights.needsUpdate=V,b.hemisphereLights.needsUpdate=V}function Qu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,V,Y){const j=re.get(b);j.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),re.get(b.texture).__webglTexture=V,re.get(b.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Y,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,V){const Y=re.get(b);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0};const ed=D.createFramebuffer();this.setRenderTarget=function(b,V=0,Y=0){P=b,T=V,E=Y;let j=!0,$=null,ge=!1,Ee=!1;if(b){const Te=re.get(b);if(Te.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(D.FRAMEBUFFER,null),j=!1;else if(Te.__webglFramebuffer===void 0)Se.setupRenderTarget(b);else if(Te.__hasExternalTextures)Se.rebindTextures(b,re.get(b.texture).__webglTexture,re.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Oe=b.depthTexture;if(Te.__boundDepthTexture!==Oe){if(Oe!==null&&re.has(Oe)&&(b.width!==Oe.image.width||b.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Se.setupDepthRenderbuffer(b)}}const He=b.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ee=!0);const Ve=re.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ve[V])?$=Ve[V][Y]:$=Ve[V],ge=!0):b.samples>0&&Se.useMultisampledRTT(b)===!1?$=re.get(b).__webglMultisampledFramebuffer:Array.isArray(Ve)?$=Ve[Y]:$=Ve,R.copy(b.viewport),N.copy(b.scissor),O=b.scissorTest}else R.copy(fe).multiplyScalar(U).floor(),N.copy(me).multiplyScalar(U).floor(),O=Pe;if(Y!==0&&($=ed),te.bindFramebuffer(D.FRAMEBUFFER,$)&&j&&te.drawBuffers(b,$),te.viewport(R),te.scissor(N),te.setScissorTest(O),ge){const Te=re.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+V,Te.__webglTexture,Y)}else if(Ee){const Te=V;for(let He=0;He<b.textures.length;He++){const Ve=re.get(b.textures[He]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+He,Ve.__webglTexture,Y,Te)}}else if(b!==null&&Y!==0){const Te=re.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Te.__webglTexture,Y)}v=-1},this.readRenderTargetPixels=function(b,V,Y,j,$,ge,Ee,Le=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te){te.bindFramebuffer(D.FRAMEBUFFER,Te);try{const He=b.textures[Le],Ve=He.format,Oe=He.type;if(!Ue.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=b.width-j&&Y>=0&&Y<=b.height-$&&(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Le),D.readPixels(V,Y,j,$,he.convert(Ve),he.convert(Oe),ge))}finally{const He=P!==null?re.get(P).__webglFramebuffer:null;te.bindFramebuffer(D.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(b,V,Y,j,$,ge,Ee,Le=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te)if(V>=0&&V<=b.width-j&&Y>=0&&Y<=b.height-$){te.bindFramebuffer(D.FRAMEBUFFER,Te);const He=b.textures[Le],Ve=He.format,Oe=He.type;if(!Ue.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ye),D.bufferData(D.PIXEL_PACK_BUFFER,ge.byteLength,D.STREAM_READ),b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Le),D.readPixels(V,Y,j,$,he.convert(Ve),he.convert(Oe),0);const rt=P!==null?re.get(P).__webglFramebuffer:null;te.bindFramebuffer(D.FRAMEBUFFER,rt);const pt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Nh(D,pt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ye),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ge),D.deleteBuffer(Ye),D.deleteSync(pt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,V=null,Y=0){const j=Math.pow(2,-Y),$=Math.floor(b.image.width*j),ge=Math.floor(b.image.height*j),Ee=V!==null?V.x:0,Le=V!==null?V.y:0;Se.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,Ee,Le,$,ge),te.unbindTexture()};const td=D.createFramebuffer(),nd=D.createFramebuffer();this.copyTextureToTexture=function(b,V,Y=null,j=null,$=0,ge=null){ge===null&&($!==0?(xr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=$,$=0):ge=0);let Ee,Le,Te,He,Ve,Oe,Ye,rt,pt;const lt=b.isCompressedTexture?b.mipmaps[ge]:b.image;if(Y!==null)Ee=Y.max.x-Y.min.x,Le=Y.max.y-Y.min.y,Te=Y.isBox3?Y.max.z-Y.min.z:1,He=Y.min.x,Ve=Y.min.y,Oe=Y.isBox3?Y.min.z:0;else{const jt=Math.pow(2,-$);Ee=Math.floor(lt.width*jt),Le=Math.floor(lt.height*jt),b.isDataArrayTexture?Te=lt.depth:b.isData3DTexture?Te=Math.floor(lt.depth*jt):Te=1,He=0,Ve=0,Oe=0}j!==null?(Ye=j.x,rt=j.y,pt=j.z):(Ye=0,rt=0,pt=0);const at=he.convert(V.format),Be=he.convert(V.type);let ht;V.isData3DTexture?(Se.setTexture3D(V,0),ht=D.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Se.setTexture2DArray(V,0),ht=D.TEXTURE_2D_ARRAY):(Se.setTexture2D(V,0),ht=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,V.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,V.unpackAlignment);const Ze=D.getParameter(D.UNPACK_ROW_LENGTH),zt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),xi=D.getParameter(D.UNPACK_SKIP_PIXELS),Ht=D.getParameter(D.UNPACK_SKIP_ROWS),ir=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,lt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,lt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,He),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ve),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Oe);const ft=b.isDataArrayTexture||b.isData3DTexture,Yt=V.isDataArrayTexture||V.isData3DTexture;if(b.isDepthTexture){const jt=re.get(b),Pt=re.get(V),Ft=re.get(jt.__renderTarget),Rs=re.get(Pt.__renderTarget);te.bindFramebuffer(D.READ_FRAMEBUFFER,Ft.__webglFramebuffer),te.bindFramebuffer(D.DRAW_FRAMEBUFFER,Rs.__webglFramebuffer);for(let Jn=0;Jn<Te;Jn++)ft&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,re.get(b).__webglTexture,$,Oe+Jn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,re.get(V).__webglTexture,ge,pt+Jn)),D.blitFramebuffer(He,Ve,Ee,Le,Ye,rt,Ee,Le,D.DEPTH_BUFFER_BIT,D.NEAREST);te.bindFramebuffer(D.READ_FRAMEBUFFER,null),te.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if($!==0||b.isRenderTargetTexture||re.has(b)){const jt=re.get(b),Pt=re.get(V);te.bindFramebuffer(D.READ_FRAMEBUFFER,td),te.bindFramebuffer(D.DRAW_FRAMEBUFFER,nd);for(let Ft=0;Ft<Te;Ft++)ft?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,jt.__webglTexture,$,Oe+Ft):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,jt.__webglTexture,$),Yt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pt.__webglTexture,ge,pt+Ft):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Pt.__webglTexture,ge),$!==0?D.blitFramebuffer(He,Ve,Ee,Le,Ye,rt,Ee,Le,D.COLOR_BUFFER_BIT,D.NEAREST):Yt?D.copyTexSubImage3D(ht,ge,Ye,rt,pt+Ft,He,Ve,Ee,Le):D.copyTexSubImage2D(ht,ge,Ye,rt,He,Ve,Ee,Le);te.bindFramebuffer(D.READ_FRAMEBUFFER,null),te.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Yt?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(ht,ge,Ye,rt,pt,Ee,Le,Te,at,Be,lt.data):V.isCompressedArrayTexture?D.compressedTexSubImage3D(ht,ge,Ye,rt,pt,Ee,Le,Te,at,lt.data):D.texSubImage3D(ht,ge,Ye,rt,pt,Ee,Le,Te,at,Be,lt):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ge,Ye,rt,Ee,Le,at,Be,lt.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ge,Ye,rt,lt.width,lt.height,at,lt.data):D.texSubImage2D(D.TEXTURE_2D,ge,Ye,rt,Ee,Le,at,Be,lt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ze),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,zt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xi),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ht),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ir),ge===0&&V.generateMipmaps&&D.generateMipmap(ht),te.unbindTexture()},this.initRenderTarget=function(b){re.get(b).__webglFramebuffer===void 0&&Se.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Se.setTextureCube(b,0):b.isData3DTexture?Se.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Se.setTexture2DArray(b,0):Se.setTexture2D(b,0),te.unbindTexture()},this.resetState=function(){T=0,E=0,P=null,te.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const Hi={"girl-standing":{eyes:[[.385,.378],[.565,.362]],seeds:[[.714,.432],[.225,.449]]},"girl-reading":{eyes:[[.474,.388],[.606,.386]],seeds:[]},"girl-cooking":{eyes:[[.43,.384],[.613,.369]],seeds:[[.7612,.4402],[.2712,.4562],[.72768,.44305],[.24554,.45957]]},"girl-tasting":{seeds:[]},"girl-adventure-cooking":{seeds:[[.7855,.4368],[.2615,.4516],[.77542,.43736],[.24246,.45501]],eyes:[[.4307,.3847],[.614,.3696]]},"girl-adventure-reading":{seeds:[[.2393,.3958],[.25781,.39974],[.6748,.44596],[.7168,.84375]],eyes:[[.4819,.3818],[.6138,.3799]]},"girl-adventure-standing":{seeds:[[.7528,.4369],[.2071,.4386],[.76281,.44089],[.1637,.43918]],eyes:[[.4003,.3669],[.5802,.3535]]},"girl-adventure-tasting":{seeds:[]},"girl-forest-cooking":{seeds:[[.743,.436],[.2771,.4496],[.7743,.43825],[.23128,.45134]],eyes:[[.424,.3785],[.6,.3654]]},"girl-forest-reading":{seeds:[[.2471,.416],[.23438,.41732],[.61328,.45117],[.71387,.85221]],eyes:[[.4722,.3857],[.6045,.3848]]},"girl-forest-standing":{seeds:[[.7272,.4415],[.2372,.4529],[.67372,.44032],[.20824,.45174]],eyes:[[.3925,.3775],[.5757,.3621]]},"girl-forest-tasting":{seeds:[[.2831,.5087],[.25026,.50929]]},"girl-school-cooking":{seeds:[[.7553,.43],[.2715,.4368],[.1933,.4795],[.77654,.43109],[.2581,.44077]],eyes:[[.4274,.3693],[.6056,.3554]]},"girl-school-reading":{seeds:[[.2646,.4121],[.29688,.41667],[.64746,.45182]],eyes:[[.4722,.3861],[.6045,.3844]]},"girl-school-standing":{seeds:[[.235,.45],[.22272,.44832]],eyes:[[.3859,.3775],[.5674,.3626]]},"girl-school-tasting":{seeds:[[.7395,.4808],[.2728,.505],[.73436,.48637],[.37949,.5062]]},"girl-star-cooking":{seeds:[[.7341,.4394],[.2816,.4502],[.1944,.4883],[.79106,.44109],[.2324,.45191]],eyes:[[.4212,.3768],[.6,.3628]]},"girl-star-reading":{seeds:[[.67676,.45573],[.33301,.4401]],eyes:[[.5034,.3857],[.635,.384]]},"girl-star-standing":{seeds:[[.2,.42],[.76,.43]],eyes:[[.389,.355],[.573,.342]],source:"assets/2d/outfits/star-standing-hat.png"},"girl-star-tasting":{seeds:[[.2813,.4919],[.7392,.4969],[.37269,.49442],[.74846,.49752]]},"girl-tea-cooking":{seeds:[[.7598,.4339],[.267,.4505],[.79888,.43793],[.2648,.4533]],eyes:[[.4296,.3813],[.6134,.367]]},"girl-tea-reading":{seeds:[[.2568,.416],[.20996,.41927],[.64062,.44401],[.68262,.85026]],eyes:[[.4697,.3831],[.6021,.3809]]},"girl-tea-standing":{seeds:[[.7397,.4469],[.2436,.4509],[.7842,.44286],[.22247,.45029]],eyes:[[.4032,.3786],[.5868,.3631]]},"girl-tea-tasting":{seeds:[[.2841,.4944],[.27282,.49628]]}};function Du(n,e,t){n.userData.key=e;const i={time:{value:0},moving:{value:0},joy:{value:0},blink:{value:0},showcase:{value:new X},headScale:{value:e.endsWith("-reading")?1.12:1},eyeA:{value:new nt(...(t==null?void 0:t[0])??[-2,-2])},eyeB:{value:new nt(...(t==null?void 0:t[1])??[-2,-2])}};return n.material.onBeforeCompile=r=>{Object.assign(r.uniforms,i),r.vertexShader=`uniform float time; uniform float moving; uniform float joy; uniform float headScale; uniform vec3 showcase;
`+r.vertexShader,r.vertexShader=r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
    float anchor=smoothstep(.07,.30,uv.y);
    float angle=showcase.z*.045*anchor;
    mat2 bodyTurn=mat2(cos(angle),-sin(angle),sin(angle),cos(angle));
    transformed.xy=bodyTurn*(transformed.xy-vec2(0.,-.43))+vec2(0.,-.43);
    float headWeight=1.-smoothstep(.435,.495,1.-uv.y);
    transformed.x=mix(transformed.x,(position.x-.05)*headScale+.05,headWeight);
    transformed.y=mix(transformed.y,(position.y-.05)*headScale+.05,headWeight);
    float nod=showcase.y*.10*headWeight;
    mat2 headTurn=mat2(cos(nod),-sin(nod),sin(nod),cos(nod));
    transformed.xy=mix(transformed.xy,headTurn*(transformed.xy-vec2(0.,.05))+vec2(0.,.05),headWeight);
    float skirt=exp(-pow((uv.y-.33)/.10,2.))*smoothstep(.09,.23,abs(uv.x-.5));
    float wrists=exp(-pow((uv.y-.43)/.095,2.))*smoothstep(.17,.32,abs(uv.x-.5));
    transformed.x+=sign(uv.x-.5)*showcase.x*(skirt*.038+wrists*.021);
    transformed.y+=showcase.x*(skirt*.026+wrists*.035);
    float top=uv.y;
    float sides=smoothstep(.12,.4,abs(uv.x-.5));
    float ears=smoothstep(.72,1.,top);
    float tail=(1.-smoothstep(.23,.43,uv.x))*exp(-pow((top-.30)/.20,2.));
    transformed.x+=sin(time*1.2)*.003*top+sin(time*2.3+uv.x*4.)*.005*ears;
    transformed.x+=sin(time*1.6+top*5.)*.005*sides*(1.-ears)+sin(time*1.1)*.009*tail;
    transformed.y+=sin(time*1.8)*.0018*top;
    float hands=exp(-pow((top-.44)/.13,2.));
    transformed.x+=moving*sin(time*8.)*.008*hands;
    transformed.y+=moving*cos(time*8.)*.004*hands+joy*abs(sin(time*4.))*.006;
   `),r.fragmentShader=`uniform float blink; uniform vec2 eyeA; uniform vec2 eyeB; 
`+r.fragmentShader,r.fragmentShader=r.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
    vec2 q=vec2(vMapUv.x,1.-vMapUv.y);
    for(int i=0;i<2;i++){
     vec2 eye=i==0?eyeA:eyeB;
     vec2 e=(q-eye)/vec2(.053,.032);
     float mask=(1.-smoothstep(.82,1.06,length(e)))*blink;
     vec4 skin=texture2D(map,vec2(eye.x,1.-eye.y-.037));
     float lash=1.-smoothstep(.07,.14,abs(e.y-(.20-.26*e.x*e.x)));
     vec3 closed=mix(skin.rgb,vec3(.15,.035,.026),lash);
     diffuseColor.rgb=mix(diffuseColor.rgb,closed,mask);
    }
   `)},n.material.customProgramCacheKey=()=>e,n.userData.uniforms=i,n}function Q0(n,e){var y;const t=document.createElement("canvas");t.className="companion-portrait",t.setAttribute("role","img"),t.setAttribute("aria-label","面向你的松团子");const i=new Lu({canvas:t,alpha:!0,antialias:!0});i.setPixelRatio(Math.min(devicePixelRatio,2)),i.setClearColor(0,0);const r=new yu,s=new jo(-.5,.5,.5,-.5,.1,10);s.position.z=2;const a=new Tu().load(n,()=>{if(u)return;const C=a.image.width/a.image.height;c.scale.x=C,s.left=-C/2,s.right=C/2,s.updateProjectionMatrix(),t.style.aspectRatio=String(C),h(),t.dataset.ready="true"});a.colorSpace=xt;const o=e==="acorn"?"girl-standing":`girl-${e}-standing`,c=Du(new vt(new It(1,1,36,52),new $t({map:a,transparent:!0})),o,(y=Hi[o])==null?void 0:y.eyes);r.add(c);const l=matchMedia("(prefers-reduced-motion: reduce)");let u=!1,d=0,f=0,m=performance.now(),g="idle",_=0,p=0;function h(){const C=t.getBoundingClientRect();C.width&&C.height&&i.setSize(C.width,C.height,!1)}const w=new ResizeObserver(h);w.observe(t);function M(C){const T=Math.min((C-m)/1e3,.1);if(m=C,t.isConnected&&!document.hidden){l.matches||(f+=T),_+=(+(g==="replying")-_)*Math.min(1,T*5);const E=l.matches?0:f,P=c.userData.uniforms,v=E%5.7,S=v>4.9&&v<5.13?Math.sin((v-4.9)/.23*Math.PI):0,R=g==="thinking"?.25+Math.sin(E*.7)*.2:g==="listening"?.25:0;p+=(R-p)*Math.min(1,T*4),P.time.value=E,P.blink.value=S,P.joy.value=0,P.moving.value=0,P.showcase.value.set(l.matches?0:_*(.2+.1*Math.sin(E*2)),l.matches?0:p+_*Math.sin(E*2.4)*.22,l.matches?0:Math.sin(E*.8)*.12),i.render(r,s)}d=requestAnimationFrame(M)}return d=requestAnimationFrame(M),{canvas:t,setState(C){g=C,t.dataset.motion=C},dispose(){u=!0,cancelAnimationFrame(d),w.disconnect(),a.dispose(),c.geometry.dispose(),c.material.dispose(),i.dispose()}}}function e_({dialog:n,isOpen:e,getText:t}){let i=null,r="";function s(){i==null||i.remove(),i=null}function a(c=!1,l=null){if(s(),i=document.createElement("div"),i.className="story-creation-menu"+(c?" selection-menu":""),i.setAttribute("role","dialog"),i.setAttribute("aria-label",c?"选中文字操作":"选择创作方式"),i.innerHTML=`${c?"":"<strong>选择创作方式</strong>"}<div class="creation-options">${c?'<button data-create="copy">复制</button>':""}<button data-create="video">视频创作</button><button data-create="comic">漫画创作</button>${c?"":'<button data-create="text">文字发布</button>'}</div><p class="creation-message" role="status" hidden></p>${c?"":'<button class="creation-cancel" data-create="close">取消</button>'}`,i.addEventListener("pointerdown",u=>{i.classList.contains("selection-menu")&&u.preventDefault()}),i.addEventListener("click",async u=>{var g;const d=(g=u.target.closest("[data-create]"))==null?void 0:g.dataset.create;if(!d)return;if(d==="close"){s();return}const f=i.querySelector(".creation-message");if(d==="copy"){try{await navigator.clipboard.writeText(r),f.textContent="已复制"}catch{f.textContent="复制未完成，请使用系统复制菜单。"}f.hidden=!1;return}const m={video:"视频创作",comic:"漫画创作",text:"文字发布"}[d];i.className="story-creation-menu",i.style.left="",i.style.top="",i.setAttribute("aria-label",m),i.innerHTML=`<strong>${m}</strong><label class="creation-text-label">创作文本<textarea rows="5" aria-label="创作文本"></textarea></label><button class="creation-cancel" data-create="close">关闭</button>`,i.querySelector("textarea").value=r}),n.append(i),c&&l){const u=n.getBoundingClientRect(),d=i.offsetWidth,f=i.offsetHeight;i.style.left=Math.max(8,Math.min(u.width-d-8,l.left-u.left+l.width/2-d/2))+"px",i.style.top=Math.max(8,l.top-u.top-f-12)+"px"}}function o(){if(!e()||i&&!i.classList.contains("selection-menu"))return;const c=window.getSelection(),l=n.querySelector(".story-prose");if(!(c!=null&&c.rangeCount)||c.isCollapsed||!(l!=null&&l.contains(c.anchorNode))||!l.contains(c.focusNode)){i!=null&&i.classList.contains("selection-menu")&&s();return}const u=c.toString().trim();u===r&&i||(r=u,r&&a(!0,c.getRangeAt(0).getBoundingClientRect()))}return document.addEventListener("selectionchange",o),n.addEventListener("pointerdown",c=>{i&&!i.contains(c.target)&&s()}),n.addEventListener("keydown",c=>{c.key==="Escape"&&i&&(c.preventDefault(),c.stopPropagation(),s())}),{open(){r=t(),a()},close:s}}function Zt(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function Pn(n){return[...n.memories??[],...n.records.map((e,t)=>({id:e.id??`old-${t}`,title:e.name,summary:e.name,day:e.day,slot:e.slot,createdAt:e.createdAt,kind:"life",activity:t_(e.name)}))].sort((e,t)=>(t.createdAt??"").localeCompare(e.createdAt??""))}function t_(n){return/烘焙/.test(n)?"baking":/课程/.test(n)?"course":/采集/.test(n)?"gather":/小铺/.test(n)?"shop":/薄荷|约定|甜点/.test(n)?"story":"home"}function Iu(n,e=Zt()){return!(n.memoryStamps??[]).includes(e)&&Pn(n).some(t=>t.createdAt&&Zt(new Date(t.createdAt))===e&&(t.kind==="life"||t.event))}function n_(n,e=Zt()){return Iu(n,e)?(n.memoryStamps??(n.memoryStamps=[]),n.memoryStamps.push(e),n.coins+=Nd,!0):!1}const Io=[{id:"demo-baking",kind:"demo",title:"示例支线 · 第一口，留给你",chapters:[{title:"不太完美的那一口",cgId:"baking",paragraphs:["甜点出炉以后，松团子没有立刻端来。她站在窗边，把两只小盘子换了好几次位置。一颗莓果从奶油上滑下来，在盘沿留下浅红色的痕迹。","「这一块本来想留给你。」她用叉子指了指那个缺口，「可是它好像没有我想的那么漂亮。」","你说，先尝尝再决定。她终于坐下来，却还是紧张地看着你的叉子。第一口有一点酸，边缘也比中间更脆。你把这些都告诉了她。","松团子的耳朵先垂了一下，随后又慢慢竖起来。「那下一次，莓果少放一点。边缘……如果你喜欢，我们就留着。」她翻开小本子，没有写下“失败”，只画了两只并排的小盘子。","窗外的光落在剩下的甜点上。她把有缺口的那一块分成两半，推来其中一半。「这一口，我们一起吃吧。」"]}]},{id:"demo-magic",kind:"demo",title:"示例支线 · 第一片会飞的秋叶",chapters:[{title:"让秋叶自己落下来",cgId:"magic",paragraphs:["放学的钟声已经停了，彩窗前却还悬着一片秋叶。松团子举着魔杖，嘴里的咒语越来越轻。叶子绕过灯罩，又绕回来，仿佛没有听见。","「书里只教了怎么让它飞。」她翻过一页，又翻回来，「没有说，它不想下来怎么办。」","你提议先停下咒语。教室安静下来，只有窗缝里的风。她放下魔杖，叶子也不再急着打转，只在半空慢慢摇晃。","松团子试着伸出手，没有去抓。过了一会儿，秋叶落在她掌心里。她看着那片叶子笑了，却没有马上把成功的咒语记进书里。","她写下的是：“先等一等。”旁边留着一块空白。「这还是我们的办法，」她说，「等下次遇见不肯落下来的东西，再来补这一页。」"]}]}],ds=[{id:"preset-bookmark",kind:"demo",title:"体验新篇 · 留给明天的书签",scenes:["松团子发现书签不见了。","你们用一片落叶做了新的书签。","她在叶背写下明天一起读书的约定。"],chapters:[{title:"留给明天的书签",cgId:"bond",paragraphs:["松团子把书翻来翻去，又低头看了看椅子下面。「昨天明明夹在这里的。」她的耳朵随着叹气轻轻落下来。没有书签，她忽然不知道该从哪里继续。","你从窗台捡起一片干净的落叶，放在摊开的书旁。她用指尖沿着叶脉画了一圈。「这个可以。不过，风会不会又把它借走？」","你们给叶柄系了一小段棉线。松团子拿来铅笔，在叶背写下几个很小的字：明天，一起读到这里。","她把叶子夹好，合上书，又忍不住打开确认了一次。这一次她笑了。「原来书签不只是记住读到了哪里，也可以记住下一次想和谁一起读。」"]}]},{id:"preset-bag",kind:"demo",title:"体验新篇 · 纸袋上的小太阳",scenes:["打烊前，一只没有署名的纸袋被留在柜台。","松团子发现纸袋上画着感谢的小太阳。","她把画贴在门边，给明天的客人留一份温暖。"],chapters:[{title:"纸袋上的小太阳",cgId:"shop",paragraphs:["打烊时，柜台上还放着一只折好的纸袋。松团子打开看，里面没有甜点，也没有零钱，只有一张画着小太阳的纸。","「会不会是谁忘记的？」她把纸转过来，背面写着：今天的热可可很好喝。字挤在一起，最后一笔还画成了卷卷的尾巴。","你说，也许这就是特意留给她的。松团子站在灯下看了很久，小心地把纸角抚平。她原本正在想今天有哪里做得不够好，现在那些问题暂时安静了。","她把小太阳贴在门边，旁边添了一句话：明天也有热可可。「这样，第一个进来的人就能看见。」她关好灯，回头望了一眼，又把纸贴正了一点。"]}]}],Pl={id:"main-prologue",kind:"prologue",title:"序章 · 橡果小屋的来信",summary:"秋天精灵松团子住进橡果小屋，开始学习人类的生活，并期待七日后的秋收祭。",chapters:[{title:"秋天，推开了小屋的门",cgId:null,paragraphs:["榛果林的秋天，总比镇上来得早一些。风拂过树梢，松团子竖起橙棕色的松鼠耳朵，听见橡果落在苔藓上的轻响。金色的双麻花辫垂在肩头，蓬松的尾巴替她拢住了清晨的凉意。","森林的季节，她再熟悉不过。可人类为什么要把果实烤成甜点，为什么把喜欢的东西分给别人，又为什么会在一盏灯下等另一个人回来？这些问题，书里似乎没有一句就能说清的答案。","于是，她来到林边的橡果小屋。窗边有一把阅读椅，厨房里有一只安静的烤箱，门外的小路通向魔女学院，也通向小镇和烘焙小铺。她的学院朋友薄荷，也在为即将到来的秋收祭做准备。","再过七天，镇上的人们就会聚在一起庆祝丰收。松团子还不知道自己会带去什么，也没有急着给未来写下答案。她想先读懂一页书，学会一道配方，再认真认识一个人。","你推开门时，她正把一枚秋叶夹进书里。粉色星形的眼睛从书页上抬起来，先是好奇，随后露出一点笑意。她把身旁的位置让出来，像是为一段还没开始的故事留下一页空白。",`「今天，想把时间花在什么美好的事上？」
窗外的风吹动了花帘。你们的日子，就从这里开始。`]}]},_t=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),La=n=>Io.includes(n)||[...Io,...ds].some(e=>e.id===n.demoSourceId),i_=n=>`/acorn-witch-atelier/assets/2d/${n}.webp`;function r_({dialog:n,getState:e,save:t,api:i,getStatus:r,isOpen:s}){let a="main",o=null,c=0,l=0,u=[],d=!1,f=[],m=!1,g="",_="",p=null,h="preset-bookmark";const w=()=>d?f:a==="mine"?[...Io,...e().characterStories??[]]:[Pl,...(r().canon??[]).map(L=>({id:L.id,kind:"canon",title:L.title,summary:L.summary,chapters:[{title:L.title,paragraphs:L.summary.split(/\n+/).filter(Boolean)}]}))],M=()=>w().find(L=>L.id===o)??w().at(-1),y=e_({dialog:n,isOpen:s,getText:()=>{var L;return((L=M())==null?void 0:L.chapters.map(U=>U.paragraphs.join(`
`)).join(`

`))??""}}),C=()=>_n.filter(L=>{var U;return(((U=e().collection)==null?void 0:U.cgs)??[]).includes(L.id)}),T=L=>{const U=L.chapters[c];if(L===Pl)return{src:"/acorn-witch-atelier/assets/intro/story-city-landscape.png",name:"秋日小镇",focus:"50%"};const G=(La(L)?_n:C()).find(oe=>oe.id===U.cgId);return G?{src:`/acorn-witch-atelier/assets/rewards/cg-${G.id}.webp`,name:G.name,focus:Zl[G.id]}:null},E=(L,U,G="")=>`<button data-story="${U}" ${G}>${L}</button>`;function P(L){n.className="story-book",n.innerHTML=`${Ha("stories")}${L}`}function v(){if(!s())return;const L=M(),U=r();if(_){I();return}P(`${d?"":`<nav class="story-branches" aria-label="故事分支">${E("主线","branch",`data-branch="main" aria-pressed="${a==="main"}"`)}${E("我的支线","branch",`data-branch="mine" aria-pressed="${a==="mine"}"`)}</nav>`}<div class="story-tools">${w().length?`<select id="story-volume" aria-label="选择故事">${w().map(G=>`<option value="${_t(G.id)}" ${G.id===(L==null?void 0:L.id)?"selected":""}>${_t(G.title)}</option>`).join("")}</select>`:`<span>${d?"作者稿箱":"属于你的篇章"}</span>`}${L?E("分享","share"):""}${E(d?"我的故事":"编成新篇",d?"mine":"compose",m?"disabled":"")}${U.creator?E(d?"刷新稿箱":"作者稿箱","inbox",m?"disabled":""):""}</div>${m?'<p class="novel-message" role="status">正在把经历编成故事，请稍等…</p>':""}${g?`<p class="novel-message novel-error" role="alert">${_t(g)}</p>`:""}${L?R(L):S()}`),L&&(O(),H())}function S(){return`<div class="novel-empty"><span class="novel-kicker">序 · 还未落笔</span><h1>${d?"等待一封来稿":"把日子，写成故事"}</h1><img src="${i_("forest-bg")}" alt="榛果林中的小路"><p>${d?"玩家交来的故事会留在这里。你可以阅读、改写，再收录为主线。":"松团子在小屋、学院和森林里的经历，<br>会成为这本书的章节。"}</p>${d?"":E("用已有经历写第一篇","compose",m?"disabled":"")}</div>`}function R(L){c=Math.min(c,L.chapters.length-1);const U=La(L),G=L.kind==="prologue",oe=G||L.kind==="canon",fe=L.chapters[c],me=C().find(Pe=>Pe.id===fe.cgId);return T(L),`<nav class="chapter-tabs" aria-label="故事章节" ${L.chapters.length===1?"hidden":""}>${L.chapters.map((Pe,ke)=>E(["I","II","III","IV","V","VI"][ke],"chapter",`data-index="${ke}" aria-label="第 ${ke+1} 章：${_t(Pe.title)}" aria-current="${ke===c?"page":"false"}"`)).join("")}</nav><article class="novel-page"><header><small>${G?"主线序章":"第 "+(c+1)+" 章"}</small><h1>${_t(fe.title)}</h1></header><div class="story-prose" aria-label="小说正文" aria-live="polite"></div></article><footer class="novel-footer"><div class="novel-paging">${E("‹ 上一页","prev")}<span id="story-page-label"></span>${E("下一页 ›","next")}</div>${!U&&!oe&&!d&&C().length?`<label class="story-art-picker">章节插图<select id="story-illustration" aria-label="章节插图" ${L.submissionId?"disabled":""}><option value="">纯文字</option>${C().map(Pe=>`<option value="${Pe.id}" ${(me==null?void 0:me.id)===Pe.id?"selected":""}>${_t(Pe.name)}</option>`).join("")}</select></label>`:""}<div class="novel-actions"><span>${U?"示例支线 · 不计入游玩经历":oe?G?"主线 · 故事的起点":"主线 · 已收录剧情":d?_t(L.author)+" · "+(L.canonId?"已收录主线":"待作者整理"):"AI 编写 · "+(L.submissionId?"已交稿":"个人故事")}</span>${oe||U?"":d?E(L.canonId?"已收录":"整理为主线","review",L.canonId?"disabled":""):E(L.submissionId?"已交给作者":"交给作者","submit",L.submissionId?"disabled":"")}</div></footer>`}function N(L,U){const G=U===0?T(M()):null;return(G?`<figure class="novel-illustration" style="--cg-focus:${G.focus}"><button data-story="art" aria-label="查看完整插图"><img class="novel-art" src="${G.src}" alt="${_t(G.name)}"></button></figure>`:"")+L.map(oe=>`<p>${_t(oe)}</p>`).join("")}function O(){const L=n.querySelector(".story-prose");if(!L)return;const U=M().chapters[c].paragraphs;u=[];let G=[];const oe=fe=>(n.querySelector(".novel-page header").hidden=u.length>0,L.innerHTML=N(fe,u.length),L.scrollHeight<=L.clientHeight);for(const fe of U){let me=Array.from(fe);for(;me.length;){if(oe([...G,me.join("")])){G.push(me.join(""));break}let Pe=0,ke=me.length;for(;Pe<ke;){const Z=Math.ceil((Pe+ke)/2);oe([...G,me.slice(0,Z).join("")])?Pe=Z:ke=Z-1}if(Pe===0&&G.length){u.push(G),G=[];continue}const ze=Math.max(1,Pe);G.push(me.splice(0,ze).join("")),u.push(G),G=[]}}G.length&&u.push(G),l=Math.min(l,Math.max(0,u.length-1))}function H(){const L=n.querySelector(".story-prose");L&&(n.querySelector(".novel-page header").hidden=l>0,L.innerHTML=N(u[l]??[],l),n.querySelector("#story-page-label").textContent=`第 ${l+1} 页 / 共 ${u.length} 页`,n.querySelector("[data-story=prev]").disabled=l===0&&c===0,n.querySelector("[data-story=next]").disabled=l===u.length-1&&c===M().chapters.length-1)}function I(){const L=M(),U=_==="compose",G=_==="review";if(_==="demo-source"||_==="demo-outline"){const oe=ds.find(me=>me.id===h),fe=oe.scenes;P(`<section class="story-editor"><small>预制剧情体验 · ${_==="demo-source"?"1 / 2 选择素材":"2 / 2 整理成篇"}</small><h1>${_==="demo-source"?"把这一幕，编成故事":"故事已经有了模样"}</h1>${_==="demo-source"?`<label>选择一段剧情<select id="demo-source">${ds.map(me=>`<option value="${me.id}" ${me.id===h?"selected":""}>${_t(me.chapters[0].title)}</option>`).join("")}</select></label><p>${fe.map((me,Pe)=>`${Pe+1}. ${me}`).join("<br>")}</p><p>这些是预制素材，可以先体验从剧情到故事的过程。</p>`:`<h2>${_t(oe.chapters[0].title)}</h2><p>开头：${fe[0]}<br>转折：${fe[1]}<br>结尾：${fe[2]}</p><p>故事节选</p><p>${_t(oe.chapters[0].paragraphs[0])}</p><p>配图：${_t(_n.find(me=>me.id===oe.chapters[0].cgId).name)}</p>`}<div class="story-editor-actions">${E("返回",_==="demo-source"?"cancel":"demo-back")}${E(_==="demo-source"?"整理成故事":"保存并阅读新篇",_==="demo-source"?"demo-outline":"demo-save")}</div></section>`);return}if(_==="art"){const oe=T(L);P(`<figure class="story-full-art"><img src="${oe.src}" alt="${_t(oe.name)}"><figcaption>${_t(oe.name)}</figcaption></figure><div class="full-art-back">${E("返回阅读","cancel")}${L.kind==="prologue"||La(L)?"":E("分享插图","share-art")}</div>`);return}P(`<form class="story-editor" id="story-editor"><small>${U?"让经历成为篇章":G?"作者工作台":"故事来稿"}</small><h1>${U?"编成自己的故事":G?"发展为主线剧情":"交给故事的作者"}</h1><p>${U?"融合最近 40 段经历与已确认主线。生成后另存为新篇，原有故事保留。":G?"以这篇故事为素材，确认你要采用的主线版本。收录后，AI 会读取这段主线。":"发送当前故事的固定版本到本机作者稿箱，由作者阅读、改写与收录。"}</p>${U?`${E("用预制剧情体验","demo-start")}<label>想突出什么？<textarea name="preference" maxlength="300" rows="3" placeholder="例如：松团子第一次学会分享的心情（选填）"></textarea></label>`:G?`<label>主线标题<input name="title" maxlength="60" value="${_t(L.title)}" required></label><label>确认后的主线剧情<textarea name="summary" maxlength="2000" required>${_t(L.summary)}</textarea></label><label>共创作者<input name="author" maxlength="60" value="${_t(L.author)}"></label>`:`<h2>${_t(L.title)}</h2><label>你的署名<input name="author" maxlength="60" placeholder="共创玩家"></label><p>当前仅支持本机收稿，尚未开放跨玩家投稿。</p>`}<p class="editor-error" role="alert">${_t(g)}</p><div class="story-editor-actions">${E("返回阅读","cancel",m?"disabled":"")}<button type="submit" ${m||U&&(!r().chat||!Pn(e()).length)?"disabled":""}>${m?"正在处理…":U?"开始编写":G?"确认收录主线":"确认交稿"}</button></div>${U?`<p class="story-connection-note" ${r().chat?"hidden":""}>豆包尚未连接，已有故事仍可阅读。</p>`:""}${U&&!Pn(e()).length?"<p>先完成一次活动或留下一段对话。</p>":""}</form>`)}async function B(L){var fe;if(L.target.id!=="story-editor"||(L.preventDefault(),m))return;const U=Object.fromEntries(new FormData(L.target)),G=_,oe=M();m=!0,g="",p=new AbortController,L.target.querySelectorAll("button").forEach(me=>me.disabled=!0),L.target.querySelector("button[type=submit]").textContent=G==="compose"?"正在编写…":"正在处理…";try{if(G==="compose"){const me=e(),Pe=Pn(me).slice(0,40).reverse().map(({id:Z,title:ee,summary:ve,day:we,slot:Me,kind:Ge,event:dt})=>({id:Z,title:ee,summary:ve,day:we,slot:Me,kind:Ge,event:dt})),ke=await i("/stories/generate",{memories:Pe,preference:U.preference,cgIds:((fe=me.collection)==null?void 0:fe.cgs)??[],progress:{day:me.day,slot:me.slot,story:me.story,ending:me.ending}},p.signal);if(!s())return;const ze={...ke.story,id:crypto.randomUUID(),createdAt:new Date().toISOString(),sourceIds:Pe.map(Z=>Z.id)};me.characterStories??(me.characterStories=[]),me.characterStories.push(ze),t(),a="mine",o=ze.id,c=0,l=0,d=!1}else if(G==="submit"){const me=await i("/stories/submit",{storyId:oe.id,story:{title:oe.title,summary:oe.summary,chapters:oe.chapters},author:U.author},p.signal);oe.submissionId=me.entry.id,t()}else{const me=await i("/canon",{...U,submissionId:oe.id},p.signal);oe.canonId=me.entry.id,r().canon.push(me.entry)}_="",m=!1,v()}catch(me){if(me.name==="AbortError")return;if(m=!1,g=me.message,s()){const Pe=n.querySelector(".editor-error");Pe&&(Pe.textContent=g,n.querySelectorAll(".story-editor button").forEach(ke=>ke.disabled=!1),n.querySelector("button[type=submit]").textContent="重试")}}}return n.addEventListener("submit",B),n.addEventListener("change",L=>{if(L.target.id==="demo-source"){h=L.target.value,v();return}if(L.target.id==="story-illustration"&&!d&&M().kind!=="prologue"&&!M().submissionId){const U=L.target.value;M().chapters[c].cgId=C().some(G=>G.id===U)?U:null,t(),l=0,v()}L.target.id==="story-volume"&&(o=L.target.value,c=0,l=0,v())}),n.addEventListener("click",async L=>{var oe;const U=L.target.closest("[data-story]");if(!U||U.disabled||m)return;const G=U.dataset.story;if(g="",G==="share"){y.open();return}if(G==="share-art"){U.disabled=!0;try{await zl(C().find(fe=>fe.id===M().chapters[c].cgId),e())}catch(fe){g=fe.message,_="",v()}finally{U.disabled=!1}return}if(G==="compose"&&!Pn(e()).length){_="demo-source",v();return}if(G==="demo-start"||G==="demo-back"){_="demo-source",v();return}if(G==="demo-outline"){_="demo-outline",v();return}if(G==="demo-save"){const fe=ds.find(Pe=>Pe.id===h),me={...structuredClone(fe),id:crypto.randomUUID(),demoSourceId:fe.id,title:fe.title.replace("示例支线","体验新篇"),createdAt:new Date().toISOString()};(oe=e()).characterStories??(oe.characterStories=[]),e().characterStories.push(me),t(),a="mine",o=me.id,c=0,l=0,d=!1,_="",v();return}if((G==="compose"||G==="submit"||G==="review"||G==="art")&&(_=G,v()),G==="cancel"&&(_="",v()),G==="branch"&&(y.close(),a=U.dataset.branch,o=null,c=0,l=0,v()),G==="chapter"&&(c=Number(U.dataset.index),l=0,v()),G==="prev"&&(l>0?(l--,H()):c>0&&(c--,l=0,v(),l=u.length-1,H())),G==="next"&&(l<u.length-1?(l++,H()):c<M().chapters.length-1&&(c++,l=0,v())),G==="mine"&&(a="mine",d=!1,o=null,c=0,l=0,v()),G==="inbox"){m=!0,p=new AbortController;try{const fe=await i("/stories/submissions",void 0,p.signal);if(!s())return;f=fe.entries,d=!0,o=null,c=0,l=0}catch(fe){fe.name!=="AbortError"&&(g=fe.message)}finally{m=!1,v()}}}),new ResizeObserver(()=>{s()&&!_&&M()&&(O(),H())}).observe(n),{open(){_="",g="",v()},refresh(){if(!_&&!m)v();else if(_==="compose"&&!m){const L=n.querySelector("button[type=submit]");L&&(L.disabled=!r().chat||!Pn(e()).length);const U=n.querySelector(".story-connection-note");U&&(U.hidden=r().chat)}},leave(){y.close(),p==null||p.abort(),m=!1,_=""}}}const Tt=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Da="https://sjktg7i6ngh4etmcagt01.apigateway-cn-beijing.volceapi.com/api/companion",ns=n=>`/acorn-witch-atelier/assets/2d/${n}.webp`,Ll={home:"窗边闲聊",baking:"一起烘焙",course:"学院生活",gather:"榛果林探索",shop:"小铺营业",story:"朋友来信"},is={home:"home-bg",baking:"kitchen-bg",course:"school-bg",gather:"forest-bg",shop:"kitchen-bg",story:"home-bg"},s_={history:'<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M3 5q7-2 12 2v23q-5-4-12-2zm26 0q-7-2-12 2v23q5-4 12-2z"/><path d="m6 11 6 1m-6 4 6 1m8-5 6-1m-6 6 6-1" fill="none" stroke="#fff2d7" stroke-width="1.5"/></svg>'},Ia=[{hint:"咦，这一页还夹着片叶子。",opening:"咦，这一页还夹着片叶子。叶脉像一张小地图……你觉得它通向哪里？"},{hint:"唔……这段我读了两遍。",opening:"书里说，烤甜点时的心情也会藏进味道里。那今天，你想尝到什么样的味道？"},{hint:"看到这里，忽然有点饿了。",opening:"刚读到一块还冒着热气的小蛋糕，我的肚子就响了……你现在最想吃什么？"},{hint:"要是我们也去走走呢……",opening:"书里的小路一直伸进森林深处。如果我们去散步，你想沿着溪水走，还是找一块树荫坐坐？"}],a_={baking:"闻起来已经有点香了。你想在今天的甜点里藏一点什么小惊喜？",course:"刚才那段我还在琢磨……你觉得魔法最有意思的地方是什么？",gather:"嘘，叶子底下好像有动静。我们先蹲下来看看？",shop:"你说，客人推开门时，最先注意到的是香味，还是柜台里的甜点？",story:"读到这里，我有点想知道你的看法。要是你来回这封信，会先写什么？"};function o_({game:n,getState:e,getContext:t,save:i,refresh:r,pause:s,portrait:a,onActivity:o,onAlbum:c,onCG:l}){const u=document.createElement("dialog");u.id="memory-dialog",n.append(u);const d=document.createElement("button");d.id="character-talk",d.type="button",d.setAttribute("aria-label","和松团子聊天"),d.innerHTML='<span class=character-reaction><span class=character-reaction-text></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v12H10l-5 4v-4H4z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M8 8h8M8 12h5" stroke="currentColor" stroke-width="1.5"/></svg></span>',n.append(d);let f="",m={chat:!1,voice:!1,creator:!1,canon:[]},g=new Date(new Date().getFullYear(),new Date().getMonth(),1),_=Zt(),p="",h=null,w=!1,M=null,y=null,C=null,T="",E=!0,P="",v="",S=0,R=null,N=!1;const O=r_({dialog:u,getState:e,save:i,api:fe,getStatus:()=>m,isOpen:()=>u.open&&f==="stories"});let H="",I=null;function B(){I==null||I.dispose(),I=null}function L(){I==null||I.setState(w?H?"replying":"thinking":P?"listening":"idle")}let U=Ia[0],G=0,oe=0;async function fe(te,xe,re){const Se=await fetch(Da+te,{method:xe?"POST":"GET",headers:xe?{"Content-Type":"application/json"}:void 0,body:xe?JSON.stringify(xe):void 0,signal:re}),Ae=await Se.json();if(!Se.ok)throw new Error(Ae.error||"连接没有完成，请稍后再试。");return Ae}async function me(){try{m=await fe("/status")}catch{m={chat:!1,voice:!1,creator:!1,canon:[]}}u.open&&f==="chat"?Me():u.open&&f==="book"&&!R?Ne():u.open&&f==="stories"&&O.refresh()}const Pe=()=>({kitchen:"baking",school:"course",classroom:"course",garden:"gather",shop:"shop",story:"story"})[t().view]??"home";function ke(){const te=t(),xe=te.collectionOpen||u.open||!!n.querySelector("#loading");if(d.hidden=xe||te.view!=="home"||!!te.panel,!d.hidden&&performance.now()>=oe){const re=Pn(e()).find(Ae=>Ae.title&&Ae.summary),Se=re?[...Ia,{hint:"忽然想起「"+re.title+"」了。",opening:"刚才翻着书，忽然想起「"+re.title+"」。那段经历里，你最想再聊聊哪一刻？"}]:Ia;U=Se[G++%Se.length],d.querySelector(".character-reaction-text").textContent=U.hint,oe=performance.now()+6500}}function ze(){if(f!=="chat"){Kl(u,n);return}const te=n.getBoundingClientRect();u.style.setProperty("--book-left",`${te.left}px`),u.style.setProperty("--book-top",`${te.top}px`),u.style.setProperty("--book-width",`${te.width}px`),u.style.setProperty("--book-height",`${te.height}px`)}function Z(){ze(),u.open||(S=performance.now(),s(!0),ze(),u.showModal()),ke()}function ee(){y==null||y.abort(),C==null||C.pause(),C=null,T&&URL.revokeObjectURL(T),T="",u.classList.remove("speaking")}function ve(){u.open&&(B(),O.leave(),M==null||M.abort(),ee(),w=!1,u.close(),f="",s(!1,performance.now()-S),ke())}u.addEventListener("cancel",te=>{te.preventDefault(),ve()}),window.addEventListener("resize",()=>{u.open&&ze()});function we(te){f="chat",N=!1,v="",P="";const xe=t(),re=e();h=te?structuredClone(te):{id:crypto.randomUUID(),title:Ll[Pe()],summary:"",activity:Pe(),day:re.day,slot:re.slot,kind:"branch",messages:[],createdAt:new Date().toISOString(),outfit:re.outfit},te&&(te.kind==="canon"||Zt(new Date(te.createdAt))!==Zt())&&(h.id=crypto.randomUUID(),h.kind="branch",h.createdAt=new Date().toISOString(),h.parentId=te.id,delete h.canonId),h.activity=Pe(),te||(h.messages=[{role:"assistant",content:h.activity==="home"?U.opening:a_[h.activity]}]),h.currentContext={...xe,activity:Pe()},Z(),Me(),me()}d.onclick=()=>we();function Me(){var A;const te=(A=u.querySelector(".stream-text-reveal"))==null?void 0:A.parentElement;Yl(te),u.className="companion-chat",u.style.setProperty("--chat-background",`url("${ns(is[h.activity]??"home-bg")}")`);const xe=h.messages.filter(x=>x.role==="assistant").at(-1),re=N?h.messages:w&&H?[{role:"assistant",content:H}]:xe?[xe]:[];u.innerHTML=`<button class="book-close" data-co="close" aria-label="结束对话">×</button><div class="chat-heading"><span>${Tt(Ll[h.activity])}</span></div><aside class="chat-tools"><button data-co="history" aria-pressed="${N}">${s_.history}${N?"收起":"记录"}</button></aside><span class="portrait-slot"></span><section class="chat-paper ${N?"history-open":""}" aria-label="角色对话"><div class="chat-scroll" aria-live="polite">${re.length?re.map(x=>`<div class="chat-line ${x.role}"><small>${x.role==="user"?"你":"松团子"}</small>${x.narration?`<p class="narration">${Tt(x.narration)}</p>`:""}<p>${Tt(x.content)}</p></div>`).join(""):'<div class="chat-line assistant"><small>松团子</small><p class="chat-invitation">${escape(reaction.opening)}</p></div>'}${w?'<p class="chat-status">松团子正在回应…</p>':""}</div><div class="voice-controls" ${m.voice?"":"hidden"}><button data-co="voice">${E?"♫ 配音开":"♫ 配音关"}</button>${xe&&m.voice?'<button data-co="replay">重听</button>':""}</div>${m.chat?"":'<p class="connection-note">豆包暂未连接，你可以先写下想法。</p>'}${v?`<p class="chat-error" role="alert">${Tt(v)}</p>`:""}<form id="chat-form"><label class="visually-hidden" for="chat-input">我想说的话或行动</label><textarea id="chat-input" maxlength="800" rows="1" placeholder="说说你的想法…">${Tt(P)}</textarea><button type="submit" aria-label="发送" ${w||!m.chat?"disabled":""}>${w?"…":"发送"}</button></form><div class="chat-footer"><button data-co="close">结束对话</button></div></section>`,I??(I=Q0(a(),e().outfit)),u.querySelector(".portrait-slot").replaceWith(I.canvas),L();const Se=u.querySelector(".chat-line.assistant p:not(.narration)");!N&&te&&Se&&te.textContent===Se.textContent&&Se.replaceWith(te);const Ae=u.querySelector("#chat-input");Ae.style.height="auto",Ae.style.height=Ae.scrollHeight+"px";const qe=u.querySelector(".chat-scroll");qe.scrollTop=qe.scrollHeight}async function Ge(te){if(ee(),!(!E||!m.voice)){y=new AbortController;try{const xe=await fetch(Da+"/voice",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:te}),signal:y.signal});if(!xe.ok)throw new Error("这次配音未能播放，可以稍后重听。");T=URL.createObjectURL(await xe.blob()),C=new Audio(T),C.volume=.8,C.onended=()=>u.classList.remove("speaking"),await C.play(),u.classList.add("speaking")}catch(xe){xe.name!=="AbortError"&&u.open&&(v="配音未播放，文字已保留；可以点击重听。",Me())}}}async function dt(){var re,Se;if(w||!m.chat||!P.trim())return;const te=P.trim(),xe=h.id;w=!0,H="",v="",ee(),M=new AbortController,Me();try{const Ae=e(),qe=await jl(await fetch(Da+"/chat",{method:"POST",headers:{"Content-Type":"application/json"},signal:M.signal,body:JSON.stringify({stream:!0,messages:[...h.messages.slice(-30).map(({role:W,content:J})=>({role:W,content:J})),{role:"user",content:te}],context:{...h.currentContext,day:Ae.day,slot:Ae.slot,mood:Ae.mood,energy:Ae.energy,outfit:Ae.outfit,inventory:Ae.inventory,memories:(Ae.memories??[]).slice(-12).map(({title:W,summary:J,event:ce})=>({title:W,summary:J,event:ce}))}})}),W=>{var ce;if(!u.open||f!=="chat"||h.id!==xe||M.signal.aborted)return;const J=!H;if(H=W,J&&(Me(),N||(ce=u.querySelector(".chat-line.assistant p"))==null||ce.replaceChildren()),!N){const Q=u.querySelector(".chat-line.assistant p");Q&&Xl(Q,W)}});if(!u.open||f!=="chat"||h.id!==xe)return;h.messages.push({role:"user",content:te},{role:"assistant",content:qe.dialogue,narration:qe.narration}),h.summary=((re=qe.event)==null?void 0:re.summary)||h.summary||qe.dialogue,h.title=((Se=qe.event)==null?void 0:Se.title)||h.title,qe.event&&(h.event=qe.event),h.updatedAt=new Date().toISOString();const A={...h};delete A.currentContext,Ae.memories??(Ae.memories=[]);const x=Ae.memories.findIndex(W=>W.id===h.id);x<0?Ae.memories.push(A):Ae.memories[x]=A,$l(Ae,"chat:"+Zt()),i(),P="",w=!1,Me(),u.dataset.emotion=qe.emotion,Ge(qe.dialogue)}catch(Ae){Ae.name!=="AbortError"&&(v=Ae.message,H="",w=!1,u.open&&Me())}}function D(){B(),M==null||M.abort(),ee(),w=!1,f="stories",R=null,Z(),O.open(),me()}function Qe(){B(),O.leave(),M==null||M.abort(),ee(),w=!1,f="book",g=new Date(new Date().getFullYear(),new Date().getMonth(),1),_=Zt(),p="",R=null,Z(),Ne(),me()}function Ne(){var Q,Ce,_e;u.className="memory-book";const te=e(),xe=Pn(te),re=Zt(),Se=g.getFullYear(),Ae=g.getMonth(),qe=new Date(Se,Ae+1,0).getDate(),A=(g.getDay()+6)%7,x=xe.filter(k=>!p||`${k.title} ${k.summary} ${JSON.stringify(k.event??{})}`.includes(p)),W=Array.from({length:A},()=>"<span></span>").concat(Array.from({length:qe},(k,le)=>{var he;const q=Zt(new Date(Se,Ae,le+1)),ne=xe.filter(de=>de.createdAt&&Zt(new Date(de.createdAt))===q),ye=ne[0];return`<button class="calendar-day ${q===re?"today":""} ${q===_?"selected":""} ${ye?"has-memory":""}" data-co="day" data-date="${q}" aria-label="${q}${ne.length?`，${ne.length}段经历`:""}" ${q===re?'aria-current="date"':""}>${ye?`<img src="${ns(is[ye.activity]??"home-bg")}" alt="">`:""}<span>${le+1}</span>${ne.length?`<small>${ne.length}段</small>`:""}${(he=te.memoryStamps)!=null&&he.includes(q)?"<i>✦</i>":""}</button>`})).join(""),J=p?x:xe.filter(k=>k.createdAt&&Zt(new Date(k.createdAt))===_),ce=xe.filter(k=>!k.createdAt);u.innerHTML=`${Ha("memories")}<div class="book-body"><div class="month-controls"><button data-co="prev" aria-label="上个月">‹</button><h3>${Se} 年 ${Ae+1} 月</h3><button data-co="next" aria-label="下个月">›</button></div><div class="calendar-week">${["一","二","三","四","五","六","日"].map(k=>`<span>${k}</span>`).join("")}</div><div class="calendar-grid">${W}</div><p class="calendar-legend">◎ 今天　✦ 已盖经历章　按现实日期记录</p><div class="memory-reward"><div><b>已陪伴 ${((Q=te.memoryStamps)==null?void 0:Q.length)??0} 天</b><small>${(Ce=te.memoryStamps)!=null&&Ce.includes(re)?"今天的经历章，已经收好。":"完成一次活动或留下一段剧情，即可盖章。"}</small></div><button class="button" data-co="claim" ${Iu(te)?"":"disabled"}>${(_e=te.memoryStamps)!=null&&_e.includes(re)?"今日已盖章":"盖章 · 领取 5 ◈"}</button></div><label class="memory-search">⌕ <input id="memory-search" value="${Tt(p)}" placeholder="找人物、地点、某段经历" aria-label="搜索回忆"></label><h3 class="day-heading">${p?"找到的回忆":_+" 的经历"}</h3><div class="memory-list">${J.map(k=>`<button class="memory-card" data-co="detail" data-id="${k.id}"><img src="${ns(is[k.activity]??"home-bg")}" alt=""><span><small>${k.kind==="life"?"日常经历":k.kind==="canon"?"已收录主线":"共创支线"} · 游戏第 ${k.day} 天</small><b>${Tt(k.title)}</b><em>${Tt(k.summary.slice(0,70))}</em></span></button>`).join("")||'<p class="empty-memory">这一天的纸页还空着。去过好今天，再回来留下一幅回忆。</p>'}</div>${ce.length?`<details><summary>以前的经历 · 未记录现实日期</summary>${ce.map(k=>`<p>第 ${k.day} 天 · ${Tt(k.title)}</p>`).join("")}</details>`:""}<details><summary>主人设定的主线 · 秋收祭前的七天</summary><p>通过课程、烘焙、森林采集与小铺营业成长，带着亲手制作的甜点参加第七天的秋收祭。</p>${m.canon.map(k=>`<article><b>${Tt(k.title)}</b><p>${Tt(k.summary)}</p><small>共创作者：${Tt(k.author)}</small></article>`).join("")}</details><button class="book-text-button" data-co="album">剧情与 CG 相册</button><button class="book-text-button" data-co="stats">查看成长数值</button></div>`}function Ue(te){const xe=Pn(e()).find(re=>re.id===te);xe&&(R=te,u.className="memory-book",u.innerHTML=`${Ha("memories")}<div class="book-body"><button class="book-text-button" data-co="book">‹ 回到月历</button><img class="memory-cover" src="${ns(is[xe.activity]??"home-bg")}" alt="故事发生的场景"><small>${xe.kind==="life"?"日常经历":xe.kind==="canon"?"已收录主线":"共创支线"} · 游戏第 ${xe.day} 天</small><h2>${Tt(xe.title)}</h2><p>${Tt(xe.summary)}</p>${xe.messages?`<button class="button wide" data-co="continue" data-id="${xe.id}">${xe.cg?"重温奇遇":"继续这段对话"}</button><details><summary>回看当时的对话</summary>${xe.messages.map(re=>`<p><b>${re.role==="user"?"你":"松团子"}：</b>${Tt(re.content)}</p>`).join("")}</details>`:""}${m.creator&&xe.kind==="branch"?`<details><summary>本机创作者 · 整理为主线</summary><p>确认后保存到本机主线库。公开共享需接入线上主线服务。</p><label>标题<input id="canon-title" maxlength="60" value="${Tt(xe.title)}"></label><label>确认生效的剧情<textarea id="canon-summary" maxlength="2000" rows="5">${Tt(xe.summary)}</textarea></label><label>共创作者<input id="canon-author" maxlength="60" placeholder="填写署名"></label><button class="button" data-co="canon">确认收录这个版本</button></details>`:""}<p class="chat-error" id="detail-error" role="alert"></p></div>`)}return u.addEventListener("input",te=>{if(te.target.id==="chat-input"&&(P=te.target.value,L(),te.target.style.height="auto",te.target.style.height=te.target.scrollHeight+"px"),te.target.id==="memory-search"){p=te.target.value;const xe=te.target.selectionStart;Ne();const re=u.querySelector("#memory-search");re.focus(),re.setSelectionRange(xe,xe)}}),u.addEventListener("submit",te=>{te.target.id==="chat-form"&&(te.preventDefault(),dt())}),u.addEventListener("click",async te=>{const xe=te.target.closest("[data-co]");if(!xe||xe.disabled)return;const re=xe.dataset.co;if(re==="album"&&(ve(),c()),re==="close"&&ve(),re==="history"&&(N=!N,Me()),re==="book"&&(O.leave(),R=null,f="book",Ne()),(re==="prev"||re==="next")&&(g=new Date(g.getFullYear(),g.getMonth()+(re==="next"?1:-1),1),Ne()),re==="day"&&(_=xe.dataset.date,Ne()),re==="detail"&&Ue(xe.dataset.id),re==="claim"&&n_(e())&&(i(),r(),Ne()),re==="voice"&&(E=!E,E||ee(),Me()),re==="replay"&&Ge(h.messages.filter(Se=>Se.role==="assistant").at(-1).content),re==="continue"){const Se=e().memories.find(Ae=>Ae.id===xe.dataset.id);Se!=null&&Se.cg?(ve(),l(Se.cg)):we(Se)}if(re==="stats"&&(ve(),o("stats")),re==="canon"){xe.disabled=!0;try{const Se=await fe("/canon",{title:u.querySelector("#canon-title").value,summary:u.querySelector("#canon-summary").value,author:u.querySelector("#canon-author").value}),Ae=e().memories.find(qe=>qe.id===R);Ae.kind="canon",Ae.canonId=Se.entry.id,i(),m.canon.push(Se.entry),Ue(R)}catch(Se){u.querySelector("#detail-error").textContent=Se.message,xe.disabled=!1}}}),me(),{openBook:Qe,openStories:D,openChat:we,updateEntry:ke,get opened(){return u.open},close:ve}}const vs=new Set,hs=new Map;function Ua(){const n=document.querySelector("#loading");if(!n||n.dataset.failed)return;let e=n.querySelector(".video-load-status");e||(e=document.createElement("small"),e.className="video-load-status",e.style.cssText="display:block;margin:12px 20px;font-size:12px;line-height:1.6",n.append(e)),e.textContent=[...hs.values()].filter(Boolean).join(" · ");let t=n.querySelector(".video-unlock");t||(t=document.createElement("button"),t.className="video-unlock",t.textContent="点此启用动画",t.style.cssText="margin-top:16px;padding:10px 20px;background:#f4e8cf;color:#365747;border:0;border-radius:6px",t.onclick=()=>{for(const i of vs)i.play().catch(()=>{})},n.append(t)),t.hidden=vs.size===0}async function Uu(n,e,t,i){hs.set(n,`${i}：下载中`),Ua();let r,s;try{if(r=await fetch(e,{signal:AbortSignal.timeout(9e4)}),!r.ok)throw new Error(`HTTP ${r.status}`);s=await r.blob()}catch(a){throw new Error(`${i}下载未完成，请切换 Wi-Fi / 移动网络后重试。`,{cause:a})}hs.set(n,`${i}：准备画面`),vs.add(n),Ua(),n.setAttribute("playsinline",""),n.setAttribute("muted",""),n.setAttribute("aria-hidden","true"),n.style.cssText="position:fixed;width:1px;height:1px;left:0;bottom:0;opacity:.001;pointer-events:none",document.body.append(n),await new Promise((a,o)=>{const c=["loadedmetadata","loadeddata","canplay","seeked"];let l=!1;const u=setTimeout(()=>d(new Error(`${i}未能准备画面，请刷新后点击「点此启用动画」。`)),3e4);function d(g){clearTimeout(u),c.forEach(_=>n.removeEventListener(_,m)),n.removeEventListener("error",f),vs.delete(n),n.pause(),hs.delete(n),Ua(),g?o(g):a()}function f(){var g;d(new Error(`${i}无法解码：${((g=n.error)==null?void 0:g.message)||"浏览器不支持此视频"}`))}function m(){if(!l&&n.readyState>=1&&(l=!0,Math.abs(n.currentTime-t)>.01)){n.currentTime=t;return}l&&n.readyState>=2&&!n.seeking&&Math.abs(n.currentTime-t)<.1&&d()}c.forEach(g=>n.addEventListener(g,m)),n.addEventListener("error",f),n.src=URL.createObjectURL(s),n.load()})}function c_(){const n=new Set(["berry","acorn","crouch","mushroom"]),e={},t=matchMedia("(prefers-reduced-motion: reduce)");let i="berry",r="berry",s=!1,a=!1,o=!1,c=!1,l=null,u=1,d=performance.now(),f=0;const m=Promise.all(["approach","berry","pick","acorn","crouch","jump","mushroom","harvest"].map(async p=>{const h=document.createElement("video");h.muted=!0,h.playsInline=!0,h.loop=n.has(p),h.playbackRate=p==="berry"?.1:1,h.preload="auto",await Uu(h,`/acorn-witch-atelier/assets/2d/gather/${p}.mp4?v=mobile-header-22`,0,"采集"+{approach:"走近",berry:"待机",pick:"摘果",acorn:"摇头",crouch:"蓄力",jump:"跳跃",mushroom:"蘑菇",harvest:"收获"}[p]);const w=new ls(h);w.colorSpace=xt,e[p]={video:h,texture:w},h.onended=()=>{i===p&&(p==="approach"?_("berry"):c=!0)}}));function g(){s&&!a&&!document.hidden&&!t.matches&&!c&&!o&&e[i].video.play().catch(p=>{p.name!=="AbortError"&&console.error(p)})}function _(p){const h=++f;r=p,c=!1,o=!0;const w=e[i],M=e[p];w.video.pause();const y=()=>{h!==f||!s||(l=i!==p?w.texture:null,i=p,u=l?0:1,d=performance.now(),o=!1,g())};M.video.currentTime>0?(M.video.addEventListener("seeked",y,{once:!0}),M.video.currentTime=0):y()}return document.addEventListener("visibilitychange",()=>{var p;document.hidden?(p=e[i])==null||p.video.pause():g()}),{ready:m,play:_,enter(){s=!0,_(t.matches?"berry":"approach")},leave(){s=!1,f++,o=!1;for(const p of Object.values(e))p.video.pause()},setPaused(p){var h;a=p,d=performance.now(),p?(h=e[i])==null||h.video.pause():g()},tick(){const p=performance.now();s&&!a&&!document.hidden&&(u=Math.min(1,u+(p-d)/160)),d=p},get texture(){var p;return(p=e[i])==null?void 0:p.texture},get previousTexture(){return l},get blend(){return 1-u},info(){var p,h;return{action:r,time:((p=e[i])==null?void 0:p.video.currentTime)??0,active:s,seeking:o,complete:c||t.matches,paused:((h=e[i])==null?void 0:h.video.paused)??!0,muted:!0,source:"reference-video",loop:n.has(i)}}}}function Na(n,e,t,i){const r=document.createElement("video");r.muted=!0,r.playsInline=!0,r.preload="auto";const s=matchMedia("(prefers-reduced-motion: reduce)");let a=!1,o=t,c=!1,l=!1;const u=Uu(r,n,e[t][0],i);function d(){a&&!l&&!c&&!document.hidden&&!s.matches&&r.play().catch(g=>{g.name!=="AbortError"&&console.error("参考动作无法播放",g)})}r.addEventListener("seeked",d);function f(g,_=!1){r.pause(),r.muted=!_,o=g,c=!1,r.currentTime=e[o][0]}function m(){if(!a||l||c||r.seeking||s.matches)return;const[g,_,p]=e[o];r.currentTime>=_-(p?0:.025)&&(p?r.currentTime=g:(r.pause(),c=!0))}return document.addEventListener("visibilitychange",()=>{document.hidden?r.pause():r.seeking||d()}),s.addEventListener("change",()=>{a&&f(o)}),{video:r,ready:u,tick:m,play:f,setPaused(g){l=g,g?r.pause():r.seeking||d()},enter(){a=!0,f(t)},leave(){a=!1,r.pause(),r.muted=!0},info(){return{action:o,time:r.currentTime,active:a,seeking:r.seeking,complete:c||s.matches,paused:r.paused,muted:r.muted,source:"reference-video"}}}}const sn=720,Lt=1280,l_=["standing","reading","cooking","tasting"],rs=["home-bg","home-arm-side","kitchen-bg","forest-bg","dressing-bg","school-bg","classroom-frame-v2","classroom-clean-top","feedback-plate",...qi.flatMap(n=>l_.map(e=>n.id==="acorn"?`girl-${e}`:`girl-${n.id}-${e}`)),"tart"],Fa={"girl-standing":[[.385,.378],[.565,.362]],"girl-reading":[[.474,.388],[.606,.386]],"girl-cooking":[[.43,.384],[.613,.369]]};function u_(n,e=()=>{}){const t=new Lu({canvas:n,antialias:!0,alpha:!1,preserveDrawingBuffer:!0});t.setPixelRatio(Math.min(devicePixelRatio,2)),t.setClearColor("#354b36");const i=new yu,r=new jo(-360,360,640,-640,.1,20);r.position.z=10;const s={},a={},o={},c={},l={},u={},d={};let f=null,m=null,g=!1,_=-1e3,p=-1e4,h="",w=!0,M="home",y="idle",C="acorn",T=!1,E=0,P=!1,v,S=0,R=performance.now();const N=Na("/acorn-witch-atelier/assets/2d/classroom-motion-v2.mp4",{listen:[4.95,5.2,!0],think:[5.15,6.25,!0],correct:[8.75,10.15,!1],retry:[7.1,8.42,!1],celebrate:[12.35,13.7,!1]},"listen","上课"),O=new ls(N.video);O.colorSpace=xt;const H=Na("/acorn-witch-atelier/assets/2d/baking-motion-v2.mp4",{prepare:[4.05,4.15,!1],ingredients:[4.18,6.02,!1],mix:[6.15,7.1,!0],mixed:[6.8,7.1,!1],bake:[8.75,9.85,!0],spell:[9.4,9.85,!0],taste:[10.1,13.72,!1]},"prepare","烘焙"),I=new ls(H.video);I.colorSpace=xt;const B=c_(),L=matchMedia("(prefers-reduced-motion: reduce)"),U=new vt(new It(sn,Lt),new $t({depthTest:!1}));i.add(U);const G=Na("/acorn-witch-atelier/assets/2d/shop-motion.mp4",{welcome:[.05,1.05,!0],child:[1.35,2.65,!0],queue:[4.18,5.85,!0],vip:[9.18,9.85,!0],positive:[7.58,8.35,!1],negative:[6.1,7,!1],summary:[12.85,14.02,!1],closing:[14.3,15.02,!1]},"welcome","小铺"),oe=new ls(G.video);oe.colorSpace=xt;const fe=new vt(new It(sn,Lt),new $t({transparent:!0,depthTest:!1,depthWrite:!1}));fe.renderOrder=1,fe.visible=!1,i.add(fe);const me=[],Pe=[];let ke,ze;const Z=new vt(new It(sn,Lt*(1-.716)),new $t({depthTest:!1,transparent:!0}));Z.position.y=-Lt*.716/2,Z.renderOrder=3,i.add(Z);const ee=new vt(new It(sn,Lt),new $t({transparent:!0,depthTest:!1,depthWrite:!1}));ee.renderOrder=4,i.add(ee);const ve=document.createElement("canvas");ve.width=256,ve.height=128;const we=ve.getContext("2d");we.scale(1,.5);const Me=we.createRadialGradient(128,128,20,128,128,128);Me.addColorStop(0,"#231a12aa"),Me.addColorStop(1,"#231a1200"),we.fillStyle=Me,we.fillRect(0,0,256,256);const Ge=new vt(new It(320,90),new $t({map:new hr(ve),transparent:!0,depthTest:!1,opacity:.62}));Ge.position.set(-10,-285,0),Ge.renderOrder=1,i.add(Ge);const dt=(k,le=2)=>{const q=new vt(new It(1,1,36,52),new $t({map:k,transparent:!0,depthTest:!1,depthWrite:!1}));return q.renderOrder=le,i.add(q),q};function D(k){var ye;const le=k.split("-").at(-1),q=((ye=Hi[k])==null?void 0:ye.eyes)??Fa[`girl-${le}`],ne=Du(dt(s[k]),k,q);return a[k]=ne,ne}const Qe=document.createElement("canvas");Qe.width=Qe.height=64;const Ne=Qe.getContext("2d"),Ue=Ne.createRadialGradient(32,32,0,32,32,32);Ue.addColorStop(0,"#fff7d7"),Ue.addColorStop(.15,"#ffe2a0cc"),Ue.addColorStop(1,"#ffe2a000"),Ne.fillStyle=Ue,Ne.fillRect(0,0,64,64);const te=new Fn,xe=new Float32Array(34*3);te.setAttribute("position",new un(xe,3));const re=new uf(te,new Mu({map:new hr(Qe),color:"#ffe5b0",size:10,transparent:!0,opacity:.45,depthTest:!1,depthWrite:!1,sizeAttenuation:!1}));re.renderOrder=5,i.add(re);function Se(k,le,q,ne){k.scale.set(ne*k.material.map.image.width/k.material.map.image.height,ne,1),k.position.set(le-360,640-q-ne/2,0)}function Ae(){if(!P)return;const k=M==="shop",le=M==="classroom",q=M==="school",ne=M==="kitchen",ye=M==="garden"||M==="festival",he=["wardrobe","portrait"].includes(M),de=ne&&H.info().active,Ie=M==="garden",F=he&&performance.now()-p<180?h:C;U.material.map=Ie?B.texture:k?oe:le?O:de?I:s[q?"school-bg":he?"dressing-bg":ne?"kitchen-bg":ye?"forest-bg":"home-bg"],U.material.needsUpdate=!0,Z.visible=ne&&!de,re.visible=!k&&!le&&!de&&!Ie;for(const ue of Pe)ue.visible=de;for(const ue of me)ue.visible=le;ee.visible=["home","story"].includes(M),Ge.visible=ee.visible||he,Ge.position.y=640-(he?1080:925),Ge.scale.set(he?.7:1,he?.5:1,1),ee.material.map=s["home-arm-side"],ee.material.needsUpdate=!0,ne&&(Z.material.map=s.counter,Z.material.needsUpdate=!0);for(const ue of Object.values(a))ue.visible=!1;let se="girl-standing";ne?se=y==="taste"?"girl-tasting":"girl-cooking":["home","story"].includes(M)&&(se="girl-reading"),F!=="acorn"&&(se=se.replace("girl-",`girl-${F}-`)),m&&!ne&&(se=`girl-custom-${m}-${se.endsWith("-reading")?"reading":"standing"}`);const pe=a[se];pe.visible=!k&&!q&&!le&&!de&&!Ie,ne?Se(pe,335,195,1110):se.endsWith("-reading")?Se(pe,345,245,930):he?Se(pe,355,M==="wardrobe"?175:152,M==="wardrobe"?730:940):Se(pe,350,235,ye?880:925),v.visible=M==="home"&&T,re.material.opacity=y==="bake"?.8:ye?.65:.32}const qe=new Tu;let A=0;const x=Promise.all(["ribbon","moon","leaf"].map(async k=>{const le=new Image;le.src=`/acorn-witch-atelier/assets/rewards/part-${k}.webp`,await le.decode(),u[k]=le})),W=Promise.all([x,B.ready,N.ready,H.ready,G.ready,...rs.map(async k=>{var q;let le=await qe.loadAsync((q=Hi[k])!=null&&q.source?`/acorn-witch-atelier/${Hi[k].source}`:k==="girl-standing"?"/acorn-witch-atelier/assets/2d/girl-original.webp":k.startsWith("girl-")&&k.split("-").length===3?`/acorn-witch-atelier/assets/2d/outfits/${k.slice(5)}.webp`:`/acorn-witch-atelier/assets/2d/${k}.webp`);if(k.startsWith("girl-")){const ne=le;le=Dl(ne.image,k),ne.dispose()}le.colorSpace=xt,le.anisotropy=Math.min(4,t.capabilities.getMaxAnisotropy()),s[k]=le,e(++A,rs.length)})]).then(()=>{for(const[he,de,Ie]of[["classroom-clean-top",[[0,.16]],me],["classroom-frame-v2",[[.775,1]],me]])for(const[F,se]of de){const pe=s[he].clone();pe.repeat.set(1,se-F),pe.offset.set(0,1-se),pe.needsUpdate=!0;const ue=new vt(new It(sn,Lt*(se-F)),new $t({map:pe,depthTest:!1}));ue.position.y=640-Lt*(F+se)/2,ue.renderOrder=1,he==="classroom-clean-top"&&(ue.material.transparent=!0,ue.material.onBeforeCompile=ie=>{ie.fragmentShader=ie.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
 diffuseColor.a *= smoothstep(0.84,0.85,vMapUv.y);`)}),i.add(ue),Ie.push(ue)}const k=document.createElement("canvas");k.width=G.video.videoWidth,k.height=G.video.videoHeight,k.getContext("2d").drawImage(G.video,0,0);const le=new hr(k);le.colorSpace=xt,le.repeat.set(1,.34),le.offset.set(0,.66),ze=new vt(new It(sn,Lt*.34),new $t({map:le,depthTest:!1})),ze.position.y=Lt*.33,ze.renderOrder=1,ze.visible=!1,i.add(ze);const q=s["feedback-plate"].clone();q.repeat.set(.238,.12),q.offset.set(.762,1-.505),q.needsUpdate=!0,ke=new vt(new It(sn*.238,Lt*.12),new $t({map:q,depthTest:!1})),ke.position.set(sn*(.881-.5),Lt*(.5-.445),0),ke.renderOrder=1,ke.visible=!1,i.add(ke);const ne=new vt(new It(sn,Lt*.04),new $t({color:"#513a27",depthTest:!1}));ne.position.y=-Lt*.48,ne.renderOrder=1,i.add(ne),Pe.push(ne);const ye=s["kitchen-bg"].clone();ye.repeat.set(1,1-.716),ye.offset.set(0,0),ye.needsUpdate=!0,s.counter=ye;for(const he of rs.filter(de=>de.startsWith("girl-"))){const de=document.createElement("canvas");de.width=s[he].image.width,de.height=s[he].image.height,de.getContext("2d").drawImage(s[he].image,0,0),l[he]=de,D(he)}J();for(const he of qi){const de=document.createElement("canvas");de.width=110,de.height=210;const Ie=s[he.id==="acorn"?"girl-standing":`girl-${he.id}-standing`].image,F=Math.min(110/Ie.width,210/Ie.height);de.getContext("2d").drawImage(Ie,(110-Ie.width*F)/2,0,Ie.width*F,Ie.height*F),o[he.id]=de.toDataURL()}v=dt(s.tart,1),Se(v,642,779,110),P=!0,Ae(),Ce()});function J(){var k;for(const[le,q]of Object.entries(l)){const ne=s[le].image,ye=ne.getContext("2d"),he=ne.width,de=ne.height,Ie=le.split("-").at(-1),F=((k=Hi[le])==null?void 0:k.eyes)??Fa["girl-"+Ie]??Fa["girl-standing"];if(ye.clearRect(0,0,he,de),ye.drawImage(q,0,0),delete c[le],f){const se=u[f],pe=F[1];if(f==="moon")for(const ue of F){const ie=se.width/2;ye.drawImage(se,ue===F[0]?0:ie,0,ie,se.height,he*(ue[0]+(ue===F[0]?-.12:.12))-.025*he,de*(ue[1]+.075),he*.05,he*.05*se.height/ie)}else{const ue=he*(f==="ribbon"?.14:.105);ye.drawImage(se,he*(pe[0]+.055),de*(pe[1]-.13),ue,ue*se.height/se.width)}}s[le].needsUpdate=!0}}function ce(){const{width:k,height:le}=n.getBoundingClientRect();t.setSize(k,le,!1);const q=Math.max(k/sn,le/Lt);n.parentElement.style.setProperty("--scene-width",`${sn*q}px`),n.parentElement.style.setProperty("--scene-height",`${Lt*q}px`),n.parentElement.style.setProperty("--scene-visible-width",`${k}px`),r.left=-k/q/2,r.right=k/q/2,r.top=le/q/2,r.bottom=-le/q/2,r.updateProjectionMatrix()}new ResizeObserver(ce).observe(n),ce();function Ce(){B.tick(),fe.visible=M==="garden"&&B.blend>0,M==="garden"&&(U.material.map=B.texture,fe.material.map=B.previousTexture,fe.material.opacity=B.blend),N.tick(),H.tick(),G.tick(),ze.visible=M==="shop"&&["summary","closing"].includes(y),ke.visible=M==="kitchen"&&y==="taste"&&H.info().time>=12.38;const k=L.matches?0:S,le=performance.now()<E?1:0,q=(performance.now()-p)/1e3,ne=["wardrobe","portrait"].includes(M),ye=S-_,he=(ue,ie)=>ye>ue&&ye<ie?Math.sin((ye-ue)/(ie-ue)*Math.PI):0,de=ye%12,Ie=de>7&&de<10?Math.sin((de-7)/3*Math.PI):0,F=ne&&!L.matches?he(.5,2.8)+Ie*.16:0,se=ne&&!L.matches?he(2,4.4)+Ie*.3:0,pe=ne&&!L.matches?he(.3,4.6)*Math.sin(ye*1.6)+Math.sin(k*.85)*.15:0;!w&&q>=.18&&(w=!0,Ae());for(const ue of Object.values(a))if(ue.visible){ue.material.opacity=!L.matches&&ne&&q<.45?1-Math.max(0,1-Math.abs(q-.18)/.18)*.92:1;const ie=ue.userData.uniforms;ie.showcase.value.set(F,se,pe),ie.time.value=k,ie.moving.value=y==="mix"&&!L.matches?1:0,ie.joy.value=le&&!L.matches?1:0;const ae=k%5.6;ie.blink.value=!L.matches&&ae>4.9&&ae<5.1?Math.sin((ae-4.9)/.2*Math.PI):0,ne&&!L.matches&&(ie.blink.value=Math.max(ie.blink.value,he(3.1,3.45)))}for(let ue=0;ue<34;ue++){const ie=ue*167.39%720-360;xe[ue*3]=ie+Math.sin(k*.3+ue)*14,xe[ue*3+1]=(ue*97+k*(y==="bake"?45:10))%1280-640,xe[ue*3+2]=1}if(ne&&q>=0&&q<.65&&!L.matches){for(let ue=0;ue<34;ue++){const ie=ue*2.399;xe[ue*3]=Math.cos(ie)*(70+ue*4+q*190),xe[ue*3+1]=80+Math.sin(ie)*(140+ue*9+q*120)}re.material.size=18*(1-q/.8),re.material.opacity=1-q/.7}else re.material.size=10,re.material.opacity=y==="bake"?.8:["garden","festival"].includes(M)?.65:.32;te.attributes.position.needsUpdate=!0,t.render(i,r)}function _e(k){!document.hidden&&!g&&(S+=Math.min((k-R)/1e3,.1),P&&Ce()),R=k,requestAnimationFrame(_e)}return requestAnimationFrame(_e),{ready:W,async prepareCustom(k){d[k.id]||(await Promise.all(["standing","reading"].map(async le=>{const q=new Image;q.src=k[le],await q.decode();const ne="girl-custom-"+k.id+"-"+le,ye=Dl(q,ne);ye.colorSpace=xt,s[ne]=ye;const he=document.createElement("canvas");he.width=ye.image.width,he.height=ye.image.height,he.getContext("2d").drawImage(ye.image,0,0),l[ne]=he,D(ne)})),d[k.id]=k,J(),Ae())},customPreview(k){var le;return((le=s["girl-custom-"+k+"-standing"])==null?void 0:le.image.toDataURL("image/png"))??""},setCustom(k){m=k&&d[k]?k:null,Ae()},setAccessory(k){f=k,J()},setPaused(k){g=k,N.setPaused(k),H.setPaused(k),G.setPaused(k),B.setPaused(k)},getDialoguePortrait(){if(m)return s["girl-custom-"+m+"-standing"].image.toDataURL("image/png");const k=C==="acorn"?"girl-standing":`girl-${C}-standing`;return c[k]??(c[k]=s[k].image.toDataURL("image/png"))},showcase(){_=S},setMode(k){["wardrobe","portrait"].includes(k)&&!["wardrobe","portrait"].includes(M)&&(_=S),B.leave(),H.leave(),M==="shop"&&k!=="shop"&&G.leave(),M==="classroom"&&k!=="classroom"&&N.leave(),M=k,y="idle",M==="garden"&&B.enter(),M==="classroom"&&N.enter(),M==="shop"&&G.enter(),Ae()},setAction(k){y=k,M==="garden"&&B.play(k),M==="shop"&&G.play(k),M==="classroom"&&N.play(k),M==="kitchen"&&(H.info().active||H.enter(),H.play(k,k==="taste")),Ae()},setOutfit(k){k!==C&&["wardrobe","portrait"].includes(M)&&!L.matches&&(_=S+.45,h=C,p=performance.now(),w=!1),C=k,Ae()},setDessert(k){T=k,P&&(v.visible=M==="home"&&T)},happy(){E=performance.now()+2600},capture(){return Ce(),n.toDataURL("image/png")},getOutfitPreview(k,le=!1){if(!le)return o[k]??"";const q=k==="acorn"?"girl-standing":`girl-${k}-standing`;return c[q]??(c[q]=s[q].image.toDataURL("image/png"))},getInfo(){var k;return{renderer:"2d-illustration",mode:M,action:y,outfit:C,accessory:f,customId:m,dessert:T,wardrobeMotion:{active:["wardrobe","portrait"].includes(M)&&!L.matches&&S-_<4.6,elapsed:S-_},gatherMotion:B.info(),shopMotion:G.info(),classroomMotion:N.info(),bakingMotion:H.info(),sprite:(k=Object.values(a).find(le=>le.visible))==null?void 0:k.userData.key,assets:P?rs.length:0,drawCalls:t.info.render.calls}}}}function Dl(n,e){var m;const t=document.createElement("canvas");t.width=n.width,t.height=n.height;const i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(n,0,0);const r=i.getImageData(0,0,t.width,t.height),s=r.data,a=t.width,o=t.height;if(s[3]<20)return new hr(t);const c=new Uint8Array(a*o),l=new Int32Array(a*o);let u=0,d=0;function f(g){if(g<0||g>=a*o||c[g])return;c[g]=1;const _=g*4,p=s[_],h=s[_+1],w=s[_+2];Math.min(p,h,w)<(e==="girl-standing"?242:225)||Math.max(p,h,w)-Math.min(p,h,w)>10||(l[d++]=g)}for(let g=0;g<a;g++)f(g),f((o-1)*a+g);for(let g=0;g<o;g++)f(g*a),f(g*a+a-1);for(const[g,_]of((m=Hi[e])==null?void 0:m.seeds)??[])f(Math.floor(_*o)*a+Math.floor(g*a));for(;u<d;){const g=l[u++];s[g*4+3]=0,g%a&&f(g-1),g%a<a-1&&f(g+1),f(g-a),f(g+a)}if(e==="girl-standing")for(let g=0;g<o;g++)for(let _=0;_<a;_++)(_<a*.22&&g<o*.075||_>a*.78&&g>o*.92)&&(s[(g*a+_)*4+3]=0);return i.putImageData(r,0,0),new hr(t)}const Uo=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Re=n=>document.querySelector(n);let K=Vl(),xs="";try{const n=localStorage.getItem(Hl);if(n){const e=JSON.parse(n);e.version===1&&e.stats&&e.inventory&&Array.isArray(e.records)?K=e:xs="旧存档无法读取，已开始新的故事。"}}catch{xs="浏览器存储不可用，本次进度暂不保存。"}yn(K);const Qt=id(Re("#game"));let Fe,Ut,ut,Wt;function nr(n,e){Dd(n,e);const t=e.name,i=/课程/.test(t)?"course":/小铺/.test(t)?"shop":/烘焙/.test(t)?"baking":/采集/.test(t)?"gather":/薄荷|约定/.test(t)?"story":null;return i&&Fd(n,i),n}try{Fe=u_(Re("#world"),(n,e)=>{const t=Re("#loading p");t&&!Re("#loading").dataset.failed&&(t.textContent=n===e?"正在准备上课、烘焙和小铺动画…":`正在布置小屋 · ${n} / ${e}`)}),Fe.ready.then(async()=>{var e;const n=K.collection.customOutfits.find(t=>t.id===K.collection.activeCustom);n&&(await Fe.prepareCustom(n),Fe.setCustom(n.id)),(e=Re("#loading"))==null||e.remove(),Qt==null||Qt.start()}).catch(n=>{Re("#loading").dataset.failed="true",Re("#loading").innerHTML="<span>✧</span><p></p>",Re("#loading p").textContent=n.message||"画面或动画载入失败，请刷新页面重试。",console.error(n)})}catch(n){throw Re("#loading").innerHTML="<span>✧</span><p>画面无法启动，请使用支持 WebGL 的浏览器打开。</p>",console.error(n),n}Fe.setOutfit(K.outfit);Fe.setDessert(K.desserts.length>0);let gn=null,wr="set",qt=structuredClone(K.collection.wear),Wn="home",dn="",z=null,hi=0,Qi=K.outfit,Il,Vi=!0,An=null,Ul=0;const en=document.createElement("audio");en.id="bgm";en.src="/acorn-witch-atelier/audio/barefoot-in-the-park.mp3";en.preload="none";en.loop=!0;en.volume=.3;document.body.append(en);let Wi=!0,bs=!1;function Es(){Wi&&(bs=!0,en.play().catch(()=>Nt("音乐暂未播放，请在设置中重新开启。")))}document.addEventListener("pointerdown",()=>{!(Qt!=null&&Qt.active)&&!bs&&Es()});document.addEventListener("keydown",()=>{!(Qt!=null&&Qt.active)&&!bs&&Es()});document.addEventListener("visibilitychange",()=>{document.hidden?en.pause():bs&&Wi&&Es()});const Zo=["早晨","午后","傍晚"],Nu={acorn:"◈",berry:"●",cream:"♧",herb:"❦",honey:"⬡"},Fu={baking:{name:"魔法烘焙",symbol:"♧",cost:18,note:"节奏 · 火候 · 魔法"},course:{name:"去学校上课",symbol:"✧",cost:16,note:"学习一门小小的魔法"},gather:{name:"森林采集",symbol:"❦",cost:12,note:"收集食材与灵感"},story:{name:"朋友来信",symbol:"✉",cost:8,note:"一份甜点，一段故事"},shop:{name:"烘焙小铺",symbol:"♜",cost:10,note:"出售甜点，赚取金币"},rest:{name:"窗边休息",symbol:"☕",cost:0,note:"体力 +32 · 心情 +8"}};function Et(){try{localStorage.setItem(Hl,JSON.stringify(K))}catch{Nt("存储空间不可用，当前进度仅保留在本页。")}}function Nn(n=600,e=.1){if(!Vi)return;An??(An=new AudioContext),An.resume();const t=An.createOscillator(),i=An.createGain();t.type="sine",t.frequency.setValueAtTime(n,An.currentTime),i.gain.setValueAtTime(.09,An.currentTime),i.gain.exponentialRampToValueAtTime(.001,An.currentTime+e),t.connect(i).connect(An.destination),t.start(),t.stop(An.currentTime+e)}function Nt(n){clearTimeout(Il),Re("#toast").textContent=n,Re("#toast").classList.add("show"),Il=setTimeout(()=>Re("#toast").classList.remove("show"),2600)}function Ts(n,e=""){Re("#speech").innerHTML=n?`${n}<small>${e}</small>`:""}function Ke(n,e,t="",i="button"){return`<button class="${i}" data-action="${e}" ${t}>${n}</button>`}function Rt(n,e,t,i="✧",r="",s=""){return`<button class="option" data-action="${t}" ${r}><span class="symbol">${i}</span><span><strong>${n}</strong><small>${e}</small></span>${s?`<span class="right">${s}</span>`:""}</button>`}function ot(n,e,t,i=!0,r=""){return`<section class="sheet ${r}" aria-label="${n}"><header><div><h2>${n}</h2><small>${e}</small></div>${i?'<button class="close" data-action="close" aria-label="关闭面板">×</button>':""}</header>${t}</section>`}function ws(n,e,t){return`<div class="paged-items" data-size="${e}"><div class="${t}">${n.map((i,r)=>`<div class="paged-item" ${r>=e?"hidden":""}>${i}</div>`).join("")}</div>${n.length>e?`<div class="list-pages"><button data-action="list-page" data-id="-1" aria-label="上一页" disabled>‹</button><span data-page="0">1 / ${Math.ceil(n.length/e)}</span><button data-action="list-page" data-id="1" aria-label="下一页">›</button></div>`:""}</div>`}function d_(n,e){const t=n.closest(".paged-items"),i=t.querySelector("[data-page]"),r=[...t.querySelectorAll(".paged-item")],s=Number(t.dataset.size),a=Math.ceil(r.length/s),o=Math.max(0,Math.min(a-1,Number(i.dataset.page)+e));r.forEach((c,l)=>c.hidden=l<o*s||l>=(o+1)*s),i.dataset.page=o,i.textContent=`${o+1} / ${a}`,t.querySelector('[data-id="-1"]').disabled=o===0,t.querySelector('[data-id="1"]').disabled=o===a-1}function et(n,e){dn=e,Re("#panel").dataset.panel=e,Re("#panel").innerHTML=n,Ts("")}function hn(n,e){if(["wardrobe","portrait"].includes(n)!==["wardrobe","portrait"].includes(Wn)||["school","classroom"].includes(n)&&n!==Wn||Wn==="classroom"&&n==="home"){const i=Re("#scene-curtain");i.classList.remove("reveal"),i.offsetWidth,i.classList.add("reveal")}Wn=n,Re("#game").dataset.scene=n,Fe.setMode(n);const t={garden:"adventure",school:"star",classroom:"star",kitchen:"acorn",shop:"acorn"}[n];t&&(Fe.setOutfit(t),Fe.setCustom(null),Fe.setAccessory(null)),Re("#scene-label").textContent=e,Re("#scene-actions").innerHTML="",Re("#scene-actions").className=""}function Xt(){Re("#hud").innerHTML=`<div class="date"><b>秋之月 · 第 ${K.day} 日</b><small>${K.slot===3?"庆典时刻":`${Zo[K.slot]} ${["07:45","13:20","17:30"][K.slot]}`}</small></div><div class="resources"><span><em>◈</em>${K.coins}</span><span><em>♡</em>${K.energy} <em>☀</em>${K.mood}</span></div>`,Re("#desktop-journal").innerHTML=`<span class="journal-caption">小魔女的成长手记</span><h2>今天，也长大了一点。</h2>${Object.entries(ps).map(([n,e])=>`<div class="statline"><span>${e}</span><b>${K.stats[n]}</b></div><div class="stat-track"><span style="width:${Math.min(100,K.stats[n])}%"></span></div>`).join("")}<div class="goal-note">${K.ending?`✦ ${K.ending.title}<br>秋收祭评分 ${K.ending.score} / 100`:`✦ 距离秋收祭还有 ${7-K.day} 天<br>准备甜点 · 挑选穿搭 · 结识朋友`}</div>`,Re("#nav").innerHTML=[["journal","手记","✧"],["bag","背包","♧"],["schedule","日程","▦"],["wardrobe","衣橱","♜"],["festival","庆典","✦"]].map(([n,e,t])=>`<button data-action="${n}" class="${n==="schedule"?"primary":""}" ${z?"disabled":""}><span>${t}</span>${e}</button>`).join("")}function xn(){qn==null||qn.dispose(),qn=null,ql(K,"home"),Et(),K.ending&&K.day<=7&&(K.day=8,K.slot=0,K.energy=Math.min(100,K.energy+25),Et()),z=null,dn="",Re("#panel").innerHTML="",hn("home","橡果小屋 · 窗边"),Fe.setOutfit(K.outfit),Fe.setCustom(K.collection.activeCustom),Fe.setAccessory(K.collection.wear.accessory),Fe.setDessert(K.desserts.length>0),Xt(),Ts(K.ending?"我们的故事，还会有下一个季节。":K.energy<25?"先泡杯茶，歇一会儿吧。":K.day===7?"今天是秋收祭。带上我们的得意之作吧！":"今天，想把时间花在什么美好的事上？","点击「日程」开始今天的生活"),Re("#scene-actions").innerHTML=Ke("◉ 幸运轮盘","wheel","","scene-button")+Ke("▣ 角色故事","stories","","scene-button")+Ke("✧ CG 相册","collection","","scene-button collection-entry")+Ke("▷ 重看片头","replay-intro","","scene-button")+Ke("♬ 设置","settings","","scene-button");const n=K.collection.cgs.find(e=>!K.collection.seen.includes(e));n&&(ut==null||ut.playCG(n,()=>{}))}function h_(n){const e=K.collection;return _n.some(t=>t.activity===n&&!e.seen.includes(t.id)&&(e.cgs.includes(t.id)||(!t.stat||K.stats[t.stat]>=t.threshold)&&(!t.visits||(e.visits[n]??0)+1>=t.visits)&&(!t.bond||e.bond>=t.bond)))}function f_(){hn("home","橡果小屋 · 今日日程"),et(ot("今日日程","A LITTLE PLAN FOR TODAY",`<div class="schedule-grid">${Zo.map((n,e)=>`<div class="time-slot ${e===K.slot?"current":""}">${n}<small>${e<K.slot?"已经度过":e===K.slot?"正在安排":"留给美好的事"}</small></div>`).join("")}</div>${K.day===7&&K.slot===3?`<p>准备已经完成。现在，带上你的甜点前往秋收祭。</p>${Ke("前往秋收祭","festival","","button wide")}`:`<div class="action-grid">${Object.entries(Fu).map(([n,e])=>Rt(`${e.name}${h_(n)?" · 新线索":""}`,e.note,"activity",e.symbol,`data-id="${n}" ${vi(K,e.cost)?"":"disabled"}`,e.cost?`−${e.cost}♡`:"+32♡")).join("")}</div><p class="mini-status">每次 1 时段 · 夜间体力 +25</p>`}`),"schedule")}function p_(n){const e=Fu[n];if(!vi(K,e.cost)){Nt("先安排休息，恢复一些体力吧。");return}n==="baking"&&Ou(),n==="course"&&S_(),n==="gather"&&T_(),n==="story"&&C_(),n==="shop"&&P_(),n==="rest"&&(nr(K,{name:"窗边休息",energy:32,mood:8}),Et(),xn(),Fe.happy(),Nt("热茶和一页好书。体力 +32，心情 +8"))}function Ou(){hn("kitchen","魔法烘焙坊 · 准备"),Fe.setAction("prepare"),hi=0,Bu()}function Bu(){const n=fr[hi];if(dn==="recipes"&&Re("#panel .recipe-note")){Re("#panel").querySelectorAll("[data-action=recipe]").forEach(t=>{const i=Number(t.dataset.id)===hi;t.classList.toggle("selected",i),t.setAttribute("aria-pressed",String(i))}),Re("#panel .recipe-note").textContent=n.note;const e=Re("#panel [data-action=cook]");e.disabled=!ur(K,n),e.textContent=ur(K,n)?"系好围裙，开始吧":"材料不足，先去森林看看";return}et(ot("今天，烤一点幸福","CHOOSE A RECIPE",`<div class="options">${fr.map((e,t)=>({r:e,i:t})).filter(({r:e})=>!e.unlock||K.collection.menus.includes(e.id)).map(({r:e,i:t})=>`<button class="option ${hi===t?"selected":""}" data-action="recipe" data-id="${t}" aria-pressed="${hi===t}"><span class="symbol">${["✦","❀","♧","❦","♡"][t]}</span><span><strong>${e.name}</strong></span><span class="right">${e.temp}°</span></button>`).join("")}</div><p class="recipe-note">${n.note}</p>${Ke(ur(K,n)?"系好围裙，开始吧":"材料不足，先去森林看看","cook",ur(K,n)?"":"disabled","button wide")}<div class="mini-status">消耗 18 体力 · 完成后消耗材料 · 一个时段</div>`),"recipes")}function m_(){const n=fr[hi];!kd(K).includes(n)||!ur(K,n)||!vi(K,18)||(Fe.setAction("ingredients"),z={type:"baking",phase:"ingredients",recipe:n,selected:[],hits:[],start:0,heat:0,temperature:n.temp-20,heatTotal:0,heatSamples:0,spell:"star"},Xt(),ku())}function ku(){const n=z.recipe;et(ot(n.name,"01 / 04 · INGREDIENTS",`<div class="phase-label">从篮子里挑出配方需要的材料</div><div class="recipe-mini">${Object.entries(n.need).map(([e,t])=>`<button class="ingredient ${z.selected.includes(e)?"selected":""}" data-action="ingredient" data-id="${e}" ${z.selected.includes(e)?"disabled":""}>${Nu[e]} ${Bo[e]} ×${t} ${z.selected.includes(e)?"✓":""}</button>`).join("")}</div><p>材料选齐后，开始轻轻搅拌。</p>${Ke("拿起木勺","mix",z.selected.length===Object.keys(n.need).length?"":"disabled","button wide")}`,!1),"ingredients")}function g_(){z.phase="mix",z.start=performance.now(),Fe.setAction("mix"),et(ot("让香气，慢慢混合","02 / 04 · STIR IN RHYTHM",`<p>光标进入绿色区域时，点击搅拌。靠近中心会更好。</p><div class="timing"><div class="target"></div><div class="needle" id="mix-needle"></div></div><div class="meter-meta"><span id="mix-feedback">跟着木勺的节奏</span><span id="mix-count">0 / 5</span></div>${Ke("轻轻搅拌 · 空格","tap","","button wide tap-button")}`,!1),"mix")}function zu(n){return(1-Math.cos((n-z.start)/1e3*Math.PI*1.15))/2}function Hu(){const n=performance.now();if(!z||z.phase!=="mix"||n-Ul<170)return;Ul=n;const e=Math.abs(zu(n)-.5),t=e<.055?1:e<.13?.8:e<.23?.5:.2;z.hits.push(t),Nn(t===1?880:t>=.8?660:380,.13),Re("#mix-feedback").textContent=t===1?"PERFECT · 刚刚好！":t>=.8?"GOOD · 香气出来了":t>=.5?"不错，再靠近中心一点":"慢慢来，等绿色区域",Re("#mix-count").textContent=`${z.hits.length} / 5`,t>=.8&&Fe.happy(),z.hits.length===5&&(z.phase="mixed",Fe.setAction("mixed"),et(ot("面糊准备好了","02 / 04 · NICELY MIXED",`<div class="stamp">${Math.round(z.hits.reduce((i,r)=>i+r,0)/5*100)}<small>搅拌表现 / 100</small></div><p>接下来交给火候。${z.recipe.name}适合 ${z.recipe.temp}°C。</p>${Ke("放进烤箱","heat","","button wide")}`,!1),"mixed"))}function __(){z.phase="heat",Fe.setAction("bake"),z.start=performance.now(),z.lastSample=performance.now(),et(ot("守住，刚好的温度","03 / 04 · A LITTLE PATIENCE",`<div class="temperature"><span id="temperature">${z.temperature}</span>°C<small>理想 ${z.recipe.temp}°C</small></div><label class="details" for="heat-slider">滑动调温，让温度保持在目标 ±8°C</label><input id="heat-slider" type="range" min="140" max="220" value="${z.temperature}" step="1" aria-label="烤箱温度"><div class="progress"><span id="heat-progress"></span></div><div class="meter-meta"><span id="heat-feedback">甜点正在慢慢膨胀</span><span id="heat-time">8 秒</span></div>`,!1),"heat")}function v_(){z.phase="spell",Fe.setAction("spell"),et(ot("最后，添一点魔法","04 / 04 · A PINCH OF MAGIC",`<p>食谱偏爱的魔法：<b>${{star:"星光",forest:"森林",heal:"治愈"}[z.recipe.spell]}</b>。魔法也会改变这次烘焙带来的成长。</p><div class="options">${[["star","星光","魔法 +3 · 适合星光橡果塔","✦"],["forest","森林","亲和 +3 · 适合莓果云朵派","❦"],["heal","治愈","体力 +8 · 适合蜂蜜布丁","♡"]].map(([n,e,t,i])=>Rt(e,t,"spell",i,`data-id="${n}"`)).join("")}</div>`,!1),"spell")}function x_(n){if(!z||z.phase!=="spell")return;const e=z.recipe,t=z.hits.reduce((o,c)=>o+c,0)/5,i=z.heatSamples?z.heatTotal/z.heatSamples:0,r=Ld(K,t,i,n,e),s={id:`${Date.now()}`,recipe:e.id,name:e.name,score:r,grade:Gl(r),spell:n},a={baking:3,...n==="star"?{magic:3}:n==="forest"?{charm:3}:{}};nr(K,{name:`烘焙 · ${e.name} ${s.grade}`,cost:18,mood:4,energy:n==="heal"?8:0,stats:a,ingredients:Object.fromEntries(Object.entries(e.need).map(([o,c])=>[o,-c])),dessert:s}),Et(),z={type:"tasting",dessert:s,mix:t,heat:i},Fe.setAction("taste"),Xt(),et("","tasting"),Ts("先尝一口，看看今天的味道。")}function y_(){const{dessert:n,mix:e,heat:t}=z;z={type:"result",dessert:n},Nn(1046,.4),et(ot("有你在，今天也很甜","FRESH FROM THE OVEN",`<div class="stamp">${n.grade}<small>${n.name} · 品质 ${n.score}</small></div><div class="reward-grid"><div><b>${Math.round(e*100)}</b>搅拌表现</div><div><b>${Math.round(t*100)}</b>火候表现</div><div><b>+3</b>烘焙成长</div></div><p>「唔…好好吃！」甜点已放入背包，可以留作参赛、送给朋友，或在小铺出售。</p>${Ke("把这份甜蜜带回家","home","","button wide")}`,!1),"cook-result")}function S_(){hn("school","魔女学院 · 到校"),et(ot("今天，想学哪一课？","LESSONS FOR A YOUNG WITCH",`<p>走进教室，完成三道练习 · 学费 12 ◈ · 体力 16 ♡</p><div class="options">${Rt("烘焙基础","辨认材料和温度 · 烘焙成长","course","♧",'data-id="baking"')}${Rt("星光魔法","记住符文顺序 · 魔法成长","course","✦",'data-id="magic"')}${Rt("色彩与设计","观察配色和标签 · 审美成长","course","❀",'data-id="style"')}</div>${K.coins<12?"<p>金币不足。可以先出售一份甜点。</p>":""}`),"courses")}const Vu={baking:[["想让塔皮酥脆，需要哪种原料？",["黄油与面粉","一整杯清水","只有莓果"],0],["星光橡果塔适合的温度是？",["140°C","180°C","220°C"],1],["面糊搅拌完成，接下来应该？",["直接装盘","再加一杯盐","放入预热的烤箱"],2]],magic:[["记住顺序：星 → 月 → 叶。中间是？",["月","叶","星"],0],["星光橡果塔偏爱哪种魔法？",["治愈","森林","星光"],2],["让魔法稳定的方法是？",["越快越好","跟随平稳的节奏","闭着眼随便念"],1]],style:[["「森林来信」的主要颜色是？",["草木绿","霓虹粉","纯黑"],0],["秋收祭的温暖配色是？",["湖蓝与银灰","橡果棕与奶油白","黑色与荧光绿"],1],["想突出金发，围裙可以搭配？",["相同的亮黄","透明色","较深的森林绿"],2]]};function M_(n){if(K.coins<12){Nt("还差一点学费，先去小铺赚些金币吧。");return}hn("classroom",`魔女学院 · ${{baking:"烘焙基础课",magic:"星光魔法课",style:"色彩与设计课"}[n]}`),z={type:"course",subject:n,q:0,correct:0},Xt(),Gu()}function Gu(){Fe.setAction("think");const n=Vu[z.subject][z.q];et(ot(`随堂练习 · ${z.q+1} / 3`,"LESSON",`<p class="dialog-text">${n[0]}</p><div class="options">${n[1].map((e,t)=>Rt(e,"","answer",["A","B","C"][t],`data-id="${t}"`)).join("")}</div>`,!1),"question")}function b_(n){if(!z||z.type!=="course"||z.feedback)return;const e=Vu[z.subject][z.q],t=n===e[2];z.feedback=!0,document.querySelectorAll('[data-action="answer"]').forEach(i=>i.disabled=!0),t?(z.correct++,Fe.setAction("correct"),Nn(780),Nt("答对了！原来是这样。")):(Fe.setAction("retry"),Nn(330),Nt(`再记一次：${e[1][e[2]]}`))}function E_(){const n=3+z.correct*2,e=z.subject,t=z.correct;nr(K,{name:`课程 · ${ps[e]}`,cost:16,coins:-12,stats:{[e]:n,knowledge:2},mood:t===3?3:1}),Et(),z={type:"result"},Fe.setAction("celebrate"),Xt(),et(ot("把新本领，收进口袋","A SMALL STEP FORWARD",`<div class="stamp">${t} / 3<small>今天的课堂练习</small></div><div class="reward-grid"><div><b>+${n}</b>${ps[e]}</div><div><b>+2</b>学识</div><div><b>−12</b>学费</div></div>${Ke("下课，回家吧","home","","button wide")}`,!1),"course-result")}let qn=null;function T_(){hn("garden","榛果林 · 轻风小径"),z={type:"gather"},dn="gather",Re("#panel").innerHTML="",Re("#scene-actions").className="gather",Ts(""),Xt(),qn=Pd({world:Fe,root:Re("#scene-actions"),onFinish:w_})}function w_(){const n=K.outfit==="forest"?1:0;nr(K,{name:"榛果林采集",cost:12,mood:4,stats:{charm:1},ingredients:{acorn:4+n,berry:3+n,herb:2+n,honey:2,cream:2}}),Et(),z={type:"result"},Xt(),et(ot("满满一篮，带回家","GIFTS FROM THE FOREST",`<p>小路尽头的奶农还送了两瓶奶油。</p><div class="backpack">${Object.entries({acorn:4+n,berry:3+n,herb:2+n,honey:2,cream:2}).map(([e,t])=>`<div class="item-cell">${Bo[e]}<b>+${t}</b></div>`).join("")}</div>${n?"<p>「森林小洋装」穿搭带来额外采集收获。</p>":""}${Ke("带着篮子回家","home","","button wide")}`,!1),"gather-result")}function $u(){z||(["wardrobe","portrait"].includes(Wn)||(gn=K.collection.activeCustom,Qi=K.outfit,qt=structuredClone(K.collection.wear),wr="set"),hn("wardrobe","卧室 · 橡果试衣间"),fs())}function fs(){if(Fe.setCustom(gn),wr!=="set"){qu();return}Fe.setAccessory(qt.accessory);const n=qi.find(t=>t.id===Qi),e=K.owned.includes(n.id);Fe.setOutfit(n.id),et(ot("衣橱","THE LITTLE WARDROBE",`${Wu()}${ws([...qi.map(t=>`<button class="outfit-card ${Qi===t.id?"selected":""}" aria-label="试穿${t.name}" data-action="outfit" data-id="${t.id}"><img src="${Fe.getOutfitPreview(t.id)}" alt="${t.name}全身搭配"><b>${t.short}</b><small>${K.owned.includes(t.id)?"已拥有":t.price+" ◈"}</small></button>`),...K.collection.customOutfits.map(t=>`<button class="outfit-card ${gn===t.id?"selected":""}" data-action="custom-outfit" data-id="${t.id}"><img src="${Fe.customPreview(t.id)||t.standing}" alt="共创穿搭"><b>${Uo(t.name)}</b><small>我的设计</small></button>`)],6,"wardrobe-preview")}<div class="recipe-name">${gn?Uo(K.collection.customOutfits.find(t=>t.id===gn).name):n.name}</div><div class="row">${Ke(gn||e?"就穿这套":"购买并穿上 · "+n.price+" ◈","wear",!e&&K.coins<n.price?"disabled":"","button")}${Ke("收起 · 看全身","portrait","","button subtle")}</div>`),"wardrobe")}function A_(){if(gn){K.collection.activeCustom=gn,K.collection.wear=structuredClone(qt),Et(),xn();return}if(K.collection.activeCustom=null,wr!=="set"){if(![...qt.accessory?[qt.accessory]:[]].every(e=>K.collection.parts.includes(e)))return;K.collection.wear=structuredClone(qt),Et(),xn(),Nt("搭配已保存。");return}const n=qi.find(e=>e.id===Qi);if(!K.owned.includes(n.id)){if(K.coins<n.price)return;K.coins-=n.price,K.owned.push(n.id)}K.outfit=n.id,K.collection.wear={...qt,mode:"set"},Et(),Fe.happy(),xn(),Nt("今天的你，也很可爱。")}function Wu(){return'<div class="wardrobe-tabs"><button data-action="design" class="under-construction" aria-disabled="true">✎ 设计新衣</button>'+[["set","套装"],["accessory","饰品"]].map(([n,e])=>'<button data-action="wardrobe-tab" data-id="'+n+'" aria-pressed="'+(wr===n)+'">'+e+"</button>").join("")+"</div>"}function qu(){Fe.setAccessory(qt.accessory),Fe.setOutfit(Qi);const n=!qt.accessory||K.collection.parts.includes(qt.accessory);et(ot("饰品","THE LITTLE ACCESSORIES",Wu()+'<div class="wardrobe-preview"><button class="outfit-card" data-action="part" data-id="none"><b>摘下饰品</b></button>'+ko.map(e=>'<button class="outfit-card part-card '+(qt.accessory===e.id?"selected":"")+'" data-action="part" data-id="'+e.id+'" aria-label="试戴'+e.name+'"><img src="/acorn-witch-atelier/assets/rewards/part-'+e.id+'.webp" alt="'+e.name+'"><b>'+e.name+"</b><small>"+(K.collection.parts.includes(e.id)?"已拥有":"轮盘获得")+"</small></button>").join("")+'</div><div class="row">'+Ke(n?"戴好了":"轮盘获得后可保存","wear",n?"":"disabled")+Ke("收起 · 看全身","portrait","","button subtle")+"</div>"),"wardrobe")}function C_(){hn("story","窗边来信 · 朋友的约定");const n=[["薄荷的第一封信","「秋收祭快到了，我总是担心自己的配方不够好。你也会紧张吗？」"],["一份甜蜜的邀请","「昨天闻到你家烤箱的香气，我练习到很晚。下次，可以一起做甜点吗？」"],["庆典之前","「无论评委给几分，我都会站在台下，给你最响亮的掌声。」"]],[e,t]=n[Math.min(2,K.story)];et(ot(e,"A LETTER FROM MINT",`<div class="dialog-name">薄荷 · 魔女学院的同学</div><p class="dialog-text">${t}</p><div class="options">${Rt("我们一起练习吧","亲和 +3 · 好感 +2","story-choice","♡",'data-id="talk"')}${Rt("送给她一份亲手做的甜点",K.desserts.length?"消耗背包第一份甜点 · 好感 +5":"背包里还没有甜点","story-choice","♧",`data-id="gift" ${K.desserts.length?"":"disabled"}`)}${Rt("把整理好的笔记分享给她","学识 +3 · 好感 +2","story-choice","✧",'data-id="notes"')}</div><div class="mini-status">消耗 8 体力 · 一个时段</div>`),"story")}function R_(n){vi(K,8)&&(n==="gift"&&!K.desserts.length||(nr(K,{name:n==="gift"?"送给薄荷的甜点":"与薄荷的约定",cost:8,stats:n==="notes"?{knowledge:3}:{charm:3},friendship:n==="gift"?5:2,mood:5}),n==="gift"&&K.desserts.shift(),K.story++,Et(),z={type:"result"},Fe.happy(),Xt(),et(ot("有人，记住了你的温柔","FRIENDSHIP GROWS",`<p class="dialog-text">${n==="gift"?"「这是给我的吗？我会把今天，写进最喜欢的那一页日记。」":"「原来不需要独自做好所有事情。有你在，感觉安心多了。」"}</p><div class="reward-grid"><div><b>+${n==="gift"?5:2}</b>薄荷好感</div><div><b>${K.friendship}</b>当前关系</div><div><b>+5</b>心情</div></div>${K.friendship>=6?"<p>约定达成：薄荷会在庆典为你应援，关系将计入比赛评分。</p>":""}${Ke("把信好好收起来","home","","button wide")}`,!1),"story-result")))}const No={tea:"热茶",cocoa:"热可可",honey:"蜂蜜茶"};function P_(){hn("shop","橡果烘焙坊 · 准备开店"),et(ot("今天，也把甜蜜分给小镇","OPEN THE LITTLE BAKERY",K.desserts.length?`<p>选甜点接待 3 组客人，按需配饮品。每轮 10 体力、1 时段。</p>${ws(K.desserts.map((n,e)=>Rt(n.name,`${n.grade} · ${n.score} 分`,"sell","♧",`data-id="${e}"`)),3,"dessert-options")}`:`<div class="empty">展示柜空空的，先烤一份甜点吧。</div>${Ke("选择食谱","recipes","","button wide")}`),"shop")}function L_(n){const e=K.desserts[n];!e||!vi(K,10)||z||(z={type:"shop",phase:"order",index:n,dessert:e,customer:0,results:[],elapsed:0,selection:null},Xt(),Xu())}function Xu(){z.phase="order",z.elapsed=0,z.selection=null;const n=Xi[z.customer];Fe.setAction(n.motion),Re("#scene-label").textContent=`今日营业 · 第 ${z.customer+1} / 3 组客人`,Re("#scene-actions").className="shop-sale",Re("#scene-actions").innerHTML=`<div class="shop-till">◈ ${K.coins}</div>`,Yu()}function Yu(){const n=Xi[z.customer];et(ot(n.guest,`${z.customer+1} / 3 · ${z.dessert.name}试吃套餐`,`<p>${n.request}</p><div class="shop-patience"><span id="shop-patience-fill" style="width:${100*(1-z.elapsed/ms)}%"></span></div><div class="shop-drinks">${Object.entries(No).map(([e,t])=>Ke(t,"shop-drink",`data-id="${e}" aria-pressed="${z.selection===e}"`,"button subtle")).join("")}</div>${Ke(z.selection?"递给客人":"先选一杯饮品","shop-serve",z.selection?"":"disabled","button wide")}`,!1),"shop-order")}function ju(n=!1){if((z==null?void 0:z.type)!=="shop"||z.phase!=="order"||!z.selection&&!n)return;const e=Xi[z.customer],t=!n&&z.selection===e.choice,i=t&&z.elapsed<ms*.5;z.results.push({correct:t,perfect:i,timedOut:n}),z.phase="feedback",Fe.setAction(t?"positive":"negative"),Nn(t?880:260,.2),et(ot(t?i?"PERFECT · 这份心意刚刚好":"GOOD · 客人很满意":n?"客人等了太久…":"不是这个呀…",`${z.customer+1} / 3 · ${e.guest}`,`<p>${t?`甜点搭配${No[e.choice]}，谢谢款待！${i?"获得 5 金币小费。":""}`:`客人想要的是${No[e.choice]}。这份订单未成交，下次留意需求。`}</p><div id="shop-next"><small>等客人回应…</small></div>`,!1),"shop-feedback"),Re("#panel").dataset.feedback=t?"positive":"negative"}function D_(){(z==null?void 0:z.type)!=="shop"||z.phase!=="feedback-ready"||(++z.customer<Xi.length?Xu():I_())}function I_(){const{dessert:n,index:e,results:t}=z,i=Ud(n.score,t);nr(K,{name:`小铺营业 · 接待 ${i.served}/3 组`,cost:10,coins:i.coins,stats:{charm:i.charm},mood:i.mood}),K.desserts.splice(e,1),Et(),z.phase="summary",z.reward=i,Fe.setAction("summary"),Xt(),Re("#scene-label").textContent="今日营业 · 翻开账本",et("","shop-summary"),Re("#scene-actions").innerHTML=`<section class="shop-ledger shop-ledger-bottom"><div>甜点收入 <b>+${i.sales} ◈</b></div><div>服务小费 <b>+${i.tips} ◈</b></div><div>亲和成长 <b>+${i.charm}</b></div><strong>本次收入 ${i.coins} 金币</strong>${Ke("正在整理账本…","shop-close","disabled","button wide")}</section>`}function U_(){(z==null?void 0:z.type)!=="shop"||z.phase!=="summary-ready"||(z.phase="closing",Re("#scene-label").textContent="今日营业 · 圆满收工",Fe.setAction("closing"),Re("#scene-actions").innerHTML="",et("","shop-closing"))}function N_(n){if((z==null?void 0:z.type)!=="shop")return;const e=Fe.getInfo().shopMotion,t=Re(".shop-till");if(t&&(t.hidden=e.action==="positive"&&e.time>=7.68),z.phase==="order"){if(e.seeking)return;z.elapsed+=n,Re("#shop-patience-fill").style.width=`${Math.max(0,100*(1-z.elapsed/ms))}%`,z.elapsed>=ms&&ju(!0)}else if(z.phase==="feedback"&&e.complete)z.phase="feedback-ready",Re("#shop-next").innerHTML=Ke(z.customer<2?"继续接待下一位":"结束接待，看看账本","shop-next","","button wide");else if(z.phase==="summary"&&e.complete){z.phase="summary-ready";const i=Re("[data-action=shop-close]");i.disabled=!1,i.textContent="看完账本，结束营业"}else z.phase==="closing"&&e.complete&&(z.phase="closed",et(ot("今天的甜蜜，圆满收工","BAKERY CLOSED",`<p>接待 3 组 · 成交 ${z.reward.served} 组 · 收入 ${z.reward.coins} 金币</p>${Ke("关好店门，回家吧","home","","button wide")}`,!1),"shop-result"))}function F_(){et(ot("背包","",`<div class="backpack">${Object.entries(K.inventory).map(([n,e])=>`<div class="item-cell">${Nu[n]} ${Bo[n]}<b>${e}</b></div>`).join("")}</div><div class="section-label">甜点 · ${K.desserts.length} 份</div>${K.desserts.length?ws(K.desserts.map(n=>`<div class="record"><b>${Uo(n.name)}</b><span>${n.grade} · ${n.score} 分</span></div>`),4,"dessert-grid"):'<p class="bag-empty">暂无甜点 · 去烘焙一份吧</p>'}`),"bag")}function O_(){et(ot("每一点成长，都算数","YOUR GROWING STORY",`<div class="book-stats">${Object.entries(ps).map(([n,e])=>`<div>${e}<b>${K.stats[n]}</b></div>`).join("")}<div>薄荷好感<b>${K.friendship}</b></div></div><div class="book-stats"><div>松团子好感<b>${K.collection.bond}</b></div></div>${Ke("剧情与 CG 相册","collection","","button wide")}<div class="section-label">最近的生活</div>${K.records.slice(0,6).map(n=>`<div class="record"><span>第 ${n.day} 日 · ${Zo[n.slot]}</span>${n.name}</div>`).join("")||"<p>第一页，留给今天。</p>"}${Ke("看看玩法手册","help","","button subtle wide")}`),"journal")}function B_(){if(K.ending){As();return}const n=K.day===7;et(ot("秋收祭，一起闪闪发光","THE HARVEST FESTIVAL",`<p>${n?"庆典已经开始！选择一份甜点，和薄荷一起前往广场。":`还有 ${7-K.day} 天。用剩下的时间学习、烘焙，准备你喜欢的穿搭。`}</p><p class="collection-hint">参加即得「把秋天送给你」祭典 CG · 庆典后生活继续</p><div class="score-lines"><div>甜点品质<b>50 分</b></div><div>烘焙 · 魔法 · 学识<b>25 分</b></div><div>服装与审美<b>20 分</b></div><div>朋友的应援<b>5 分</b></div></div>${n?K.desserts.length?`<div class="section-label">选择参赛作品</div>${ws(K.desserts.map((e,t)=>Rt(e.name,`${e.grade} · ${e.score} 分`,"compete","✦",`data-id="${t}"`)),3,"dessert-options")}`:`<p>还没有参赛甜点。${K.slot<3?"现在烤一份也来得及。":"这次先作为观众，为朋友们鼓掌吧。"}</p>${Ke(K.slot<3?"安排魔法烘焙":"以观众身份参加",K.slot<3?"recipes":"spectator","","button wide")}`:Ke("继续准备今天的生活","schedule","","button wide")}`),"festival")}function k_(n){if(K.ending||K.day!==7)return;const e=K.desserts[n];e&&(K.ending=Id(K,e),Et(),As(),Fe.happy(),Nn(1046,.5))}function As(){if(Wl(K,"festival")&&Et(),!K.collection.seen.includes("festival")){ut.playCG("festival",As);return}hn("festival","秋收祭 · 属于我们的舞台");const n=K.ending;n&&(et(ot(n.title,"A NEW CHAPTER BEGINS",`<div class="stamp">${n.grade}<small>秋收祭 · 综合评分 ${n.score} / 100</small></div><div class="score-lines"><div>甜点「${n.dessert}」<b>${n.taste} / 50</b></div><div>这一周的成长<b>${n.growth} / 25</b></div><div>今天的穿搭<b>${n.dress} / 20</b></div><div>朋友的应援<b>${n.bond} / 5</b></div></div><p>「原来那些认真度过的小日子，真的会变成闪闪发光的自己。」</p><div class="row">${Ke("保存纪念卡","share")}${Ke("回小屋看看","home","","button subtle")}</div>`,!0),"ending"),Xt())}function Ku(){et(ot("小屋里的生活手册","HOW TO SPEND A LOVELY WEEK",`<ul><li>每天 3 时段；夜间体力 +25。</li><li>上课加属性，采集得食材，休息回体力。</li><li>烘焙：选材 → 搅拌 5 次 → 控温 8 秒 → 魔法。</li><li>试穿免费；穿搭影响采集与比赛。</li><li>甜点可出售、赠送；留一份参赛。</li><li>第 7 天秋收祭：甜点、成长、穿搭与好感计分。</li></ul><p>点击或触屏操作 · 空格搅拌 · 行动结束自动保存</p>${Ke("知道了，继续生活","close","","button wide")}`,!0,"help"),"help")}function Oa(){et(ot("设置","A QUIET LITTLE MOMENT",`<div class="options">${Rt(Wi?"暂停背景音乐":"播放背景音乐","BAREFOOT IN THE PARK","music","♫")}${Rt(Vi?"关闭音效":"开启音效","操作与成功提示","sound","♫")}${Rt("重看片头","进入松团子的世界 · 保留当前进度","replay-intro","▷")}${Rt("玩法手册","课程、烘焙与庆典","help","✧")}${Rt("重新开始这一周","清除当前进度","reset-ask","↺")}</div><label for=music-volume>背景音乐音量 <output id=music-volume-value>${Math.round(en.volume*100)}%</output></label><input id=music-volume type=range min=0 max=100 value=${Math.round(en.volume*100)} aria-label=背景音乐音量>`),"settings")}async function z_(){const n=K.ending;if(!n)return;const e=document.createElement("canvas");e.width=900,e.height=1200;const t=e.getContext("2d");t.fillStyle="#f4e8cb",t.fillRect(0,0,900,1200),t.strokeStyle="#b38a49",t.lineWidth=3,t.strokeRect(28,28,844,1144);const i=new Image;i.src="/acorn-witch-atelier/assets/rewards/cg-festival.webp",await i.decode(),t.save(),t.beginPath(),t.rect(55,55,790,660),t.clip();const r=790,s=i.height/i.width*790;t.drawImage(i,55,55-(s-660)*.43,r,s),t.restore(),t.fillStyle="#493927",t.textAlign="center",t.font='28px "Songti SC", serif',t.fillText("橡果魔女 · 秋收祭纪念",450,765),t.font='48px "Songti SC", serif',t.fillText(n.title,450,842),t.font="70px Georgia",t.fillStyle="#a57437",t.fillText(`${n.grade}  /  ${n.score}`,450,940),t.font='23px "Songti SC", serif',t.fillStyle="#786445",t.fillText(n.dessert,450,1002),t.font='19px "Songti SC", serif',t.fillText("扫码来到橡果小屋",350,1090),await kl(t,690,1020,120);const a=document.createElement("a");a.download="橡果魔女-秋收祭纪念.png",a.href=e.toDataURL("image/png"),a.click(),Nt("纪念卡已生成，保存在浏览器下载中。")}function Jo(n,e,t){if(!(z&&!["ingredient","mix","tap","heat","spell","answer","pick","home","sound","music","shop-drink","shop-serve","shop-next","shop-close"].includes(n)))switch(n){case"list-page":d_(t,Number(e));break;case"custom-outfit":gn=e,Fe.prepareCustom(K.collection.customOutfits.find(i=>i.id===e)).then(fs).catch(()=>Nt("共创衣服暂未载入，请检查绘图服务。"));break;case"design":Nt("施工中，敬请期待");break;case"collection":ut.album();break;case"wheel":ut.wheel();break;case"pets":ut.pets();break;case"wardrobe-tab":wr=e,fs();break;case"part":e==="none"?qt.accessory=null:ko.find(r=>r.id===e)&&(qt.accessory=e),qu();break;case"home":xn();break;case"close":xn();break;case"schedule":f_();break;case"activity":p_(e);break;case"recipe":hi=Number(e),Bu();break;case"recipes":vi(K,18)?Ou():Nt("先恢复体力，或开始新的一周。");break;case"cook":m_();break;case"ingredient":(z==null?void 0:z.phase)==="ingredients"&&!z.selected.includes(e)&&(z.selected.push(e),Nn(520+z.selected.length*100),ku());break;case"mix":(z==null?void 0:z.phase)==="ingredients"&&g_();break;case"tap":Hu();break;case"heat":(z==null?void 0:z.phase)==="mixed"&&__();break;case"spell":x_(e);break;case"course":M_(e);break;case"answer":b_(Number(e));break;case"portrait":et("","portrait"),hn("portrait","卧室 · 镜前试衣"),Re("#scene-actions").innerHTML=Ke("打开衣橱","wardrobe","","scene-button")+Ke("展示动作","showcase","","scene-button");break;case"showcase":Fe.showcase();break;case"wardrobe":$u();break;case"outfit":gn=null,Qi=e,fs();break;case"wear":A_();break;case"story-choice":R_(e);break;case"sell":L_(Number(e));break;case"shop-drink":(z==null?void 0:z.type)==="shop"&&z.phase==="order"&&(z.selection=e,Yu());break;case"shop-serve":ju();break;case"shop-next":D_();break;case"shop-close":U_();break;case"bag":F_();break;case"journal":Ut.openBook();break;case"stories":Ut.openStories();break;case"festival":B_();break;case"compete":k_(Number(e));break;case"share":z_();break;case"help":Ku();break;case"settings":Oa();break;case"replay-intro":rd();break;case"music":Wi=!Wi,Wi?Es():en.pause(),dn==="settings"&&Oa();break;case"sound":Vi=!Vi,Re("#sound").textContent=Vi?"♫ 音效开":"♫ 音效关",Re("#sound").setAttribute("aria-label",Vi?"关闭音效":"开启音效"),Nn(660),dn==="settings"&&Oa();break;case"reset-ask":et(ot("翻开新的一页？","A FRESH START",`<p>将清除这次的金币、成长、甜点与庆典结果，从第一日重新开始。</p><div class="row">${Ke("重新开始","reset")}${Ke("继续这一周","close","","button subtle")}</div>`),"reset");break;case"reset":K=Vl(),yn(K),Et(),xn(),Nt("新的一周，新的可能。");break;case"spectator":K.ending={score:0,grade:"纪念",title:"自由自在的森林生活",taste:0,growth:0,dress:0,bond:0,dessert:"与朋友分享的掌声"},Et(),As();break}}Re("#game").addEventListener("click",n=>{const e=n.target.closest("[data-action]");e&&!e.disabled&&(Nn(),Jo(e.dataset.action,e.dataset.id,e))});Re("#game").addEventListener("input",n=>{n.target.id==="music-volume"&&(en.volume=Number(n.target.value)/100,Re("#music-volume-value").textContent=`${n.target.value}%`),n.target.id==="heat-slider"&&(z==null?void 0:z.phase)==="heat"&&(z.temperature=Number(n.target.value),Re("#temperature").textContent=z.temperature)});Re("#sound").onclick=()=>Jo("sound");Re("#help").onclick=()=>{z||Ku()};window.addEventListener("keydown",n=>{Qt!=null&&Qt.active||Ut!=null&&Ut.opened||ut!=null&&ut.opened||Wt!=null&&Wt.opened||n.target.matches("input,textarea")||(n.code==="Space"&&(z==null?void 0:z.phase)==="mix"?(n.preventDefault(),n.repeat||Hu()):n.key==="Escape"&&!z&&xn())});let Ba=performance.now();function Fo(n){if(Ut==null||Ut.updateEntry(),ut==null||ut.updatePet(Wn==="home"&&(!dn||dn==="bag"||dn==="schedule")&&!(Ut!=null&&Ut.opened)&&!(ut!=null&&ut.opened)&&!(Wt!=null&&Wt.opened)),Ut!=null&&Ut.opened||ut!=null&&ut.opened||Wt!=null&&Wt.opened){Ba=n,requestAnimationFrame(Fo);return}!document.hidden&&(z==null?void 0:z.type)==="course"&&z.feedback&&Fe.getInfo().classroomMotion.complete&&(z.feedback=!1,z.q++,z.q<3?Gu():E_()),!document.hidden&&(z==null?void 0:z.type)==="tasting"&&Fe.getInfo().bakingMotion.complete&&y_();const e=Math.min(n-Ba,100);if(Ba=n,document.hidden||(N_(e),(z==null?void 0:z.type)==="gather"&&(qn==null||qn.tick(e))),!document.hidden&&(z==null?void 0:z.phase)==="mix"){const t=Re("#mix-needle");t&&(t.style.left=`${zu(n)*100}%`)}if(!document.hidden&&(z==null?void 0:z.phase)==="heat"){z.elapsed=(z.elapsed||0)+e;const t=Math.abs(z.temperature-z.recipe.temp);z.heatTotal+=Math.max(0,1-Math.max(0,t-3)/32)*e,z.heatSamples+=e,Re("#heat-progress").style.width=`${Math.min(100,z.elapsed/80)}%`,Re("#heat-time").textContent=`${Math.max(0,Math.ceil(8-z.elapsed/1e3))} 秒`,Re("#heat-feedback").textContent=t<=8?"温度刚刚好，保持住。":z.temperature<z.recipe.temp?"还不够暖，再加一点火。":"有点烫，稍微降低温度。",z.elapsed>=8e3&&v_()}requestAnimationFrame(Fo)}Wt=zd({game:Re("#game"),getState:()=>K,save:Et,world:Fe,pause:n=>Fe.setPaused(n),onEquipped:xn});ut=$d({game:Re("#game"),getState:()=>K,save:Et,refresh:Xt,pause:n=>Fe.setPaused(n),world:Fe,onWear:$u,onRecipes:()=>Jo("recipes")});Ut=o_({game:Re("#game"),getState:()=>K,getContext:()=>{var n;return{view:Wn,panel:dn,collectionOpen:!!(ut!=null&&ut.opened)||!!(Wt!=null&&Wt.opened),phase:z==null?void 0:z.phase,activityName:Re("#scene-label").textContent,recipe:(n=z==null?void 0:z.recipe)==null?void 0:n.name}},save:Et,refresh:Xt,pause:(n,e=0)=>{Fe.setPaused(n),!n&&(z==null?void 0:z.phase)==="mix"&&(z.start+=e)},portrait:()=>Fe.getDialoguePortrait(),onAlbum:()=>ut.album(),onCG:n=>ut.playCG(n),onActivity:()=>O_()});requestAnimationFrame(Fo);xn();xs&&Nt(xs);window.__acorn={get state(){return structuredClone(K)},get view(){return Wn},get panel(){return dn},get round(){return z?structuredClone(z):null},renderer:()=>Fe.getInfo()};
