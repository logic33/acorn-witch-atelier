(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Zu(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var xi={},Cs,ec;function Ju(){return ec||(ec=1,Cs=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Cs}var Rs={},Un={},tc;function mi(){if(tc)return Un;tc=1;let n;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return Un.getSymbolSize=function(i){if(!i)throw new Error('"version" cannot be null or undefined');if(i<1||i>40)throw new Error('"version" should be in range from 1 to 40');return i*4+17},Un.getSymbolTotalCodewords=function(i){return e[i]},Un.getBCHDigit=function(t){let i=0;for(;t!==0;)i++,t>>>=1;return i},Un.setToSJISFunction=function(i){if(typeof i!="function")throw new Error('"toSJISFunc" is not a valid function.');n=i},Un.isKanjiModeEnabled=function(){return typeof n<"u"},Un.toSJIS=function(i){return n(i)},Un}var Ps={},nc;function Do(){return nc||(nc=1,function(n){n.L={bit:1},n.M={bit:0},n.Q={bit:3},n.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return n.L;case"m":case"medium":return n.M;case"q":case"quartile":return n.Q;case"h":case"high":return n.H;default:throw new Error("Unknown EC Level: "+t)}}n.isValid=function(i){return i&&typeof i.bit<"u"&&i.bit>=0&&i.bit<4},n.from=function(i,r){if(n.isValid(i))return i;try{return e(i)}catch{return r}}}(Ps)),Ps}var Ls,ic;function Qu(){if(ic)return Ls;ic=1;function n(){this.buffer=[],this.length=0}return n.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},Ls=n,Ls}var Ds,rc;function ed(){if(rc)return Ds;rc=1;function n(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return n.prototype.set=function(e,t,i,r){const s=e*this.size+t;this.data[s]=i,r&&(this.reservedBit[s]=!0)},n.prototype.get=function(e,t){return this.data[e*this.size+t]},n.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i},n.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},Ds=n,Ds}var Is={},sc;function td(){return sc||(sc=1,function(n){const e=mi().getSymbolSize;n.getRowColCoords=function(i){if(i===1)return[];const r=Math.floor(i/7)+2,s=e(i),a=s===145?26:Math.ceil((s-13)/(2*r-2))*2,o=[s-7];for(let c=1;c<r-1;c++)o[c]=o[c-1]-a;return o.push(6),o.reverse()},n.getPositions=function(i){const r=[],s=n.getRowColCoords(i),a=s.length;for(let o=0;o<a;o++)for(let c=0;c<a;c++)o===0&&c===0||o===0&&c===a-1||o===a-1&&c===0||r.push([s[o],s[c]]);return r}}(Is)),Is}var Us={},ac;function nd(){if(ac)return Us;ac=1;const n=mi().getSymbolSize,e=7;return Us.getPositions=function(i){const r=n(i);return[[0,0],[r-e,0],[0,r-e]]},Us}var Ns={},oc;function id(){return oc||(oc=1,function(n){n.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};n.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},n.from=function(r){return n.isValid(r)?parseInt(r,10):void 0},n.getPenaltyN1=function(r){const s=r.size;let a=0,o=0,c=0,l=null,u=null;for(let d=0;d<s;d++){o=c=0,l=u=null;for(let h=0;h<s;h++){let m=r.get(d,h);m===l?o++:(o>=5&&(a+=e.N1+(o-5)),l=m,o=1),m=r.get(h,d),m===u?c++:(c>=5&&(a+=e.N1+(c-5)),u=m,c=1)}o>=5&&(a+=e.N1+(o-5)),c>=5&&(a+=e.N1+(c-5))}return a},n.getPenaltyN2=function(r){const s=r.size;let a=0;for(let o=0;o<s-1;o++)for(let c=0;c<s-1;c++){const l=r.get(o,c)+r.get(o,c+1)+r.get(o+1,c)+r.get(o+1,c+1);(l===4||l===0)&&a++}return a*e.N2},n.getPenaltyN3=function(r){const s=r.size;let a=0,o=0,c=0;for(let l=0;l<s;l++){o=c=0;for(let u=0;u<s;u++)o=o<<1&2047|r.get(l,u),u>=10&&(o===1488||o===93)&&a++,c=c<<1&2047|r.get(u,l),u>=10&&(c===1488||c===93)&&a++}return a*e.N3},n.getPenaltyN4=function(r){let s=0;const a=r.data.length;for(let c=0;c<a;c++)s+=r.data[c];return Math.abs(Math.ceil(s*100/a/5)-10)*e.N4};function t(i,r,s){switch(i){case n.Patterns.PATTERN000:return(r+s)%2===0;case n.Patterns.PATTERN001:return r%2===0;case n.Patterns.PATTERN010:return s%3===0;case n.Patterns.PATTERN011:return(r+s)%3===0;case n.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(s/3))%2===0;case n.Patterns.PATTERN101:return r*s%2+r*s%3===0;case n.Patterns.PATTERN110:return(r*s%2+r*s%3)%2===0;case n.Patterns.PATTERN111:return(r*s%3+(r+s)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}n.applyMask=function(r,s){const a=s.size;for(let o=0;o<a;o++)for(let c=0;c<a;c++)s.isReserved(c,o)||s.xor(c,o,t(r,c,o))},n.getBestMask=function(r,s){const a=Object.keys(n.Patterns).length;let o=0,c=1/0;for(let l=0;l<a;l++){s(l),n.applyMask(l,r);const u=n.getPenaltyN1(r)+n.getPenaltyN2(r)+n.getPenaltyN3(r)+n.getPenaltyN4(r);n.applyMask(l,r),u<c&&(c=u,o=l)}return o}}(Ns)),Ns}var Cr={},cc;function Rl(){if(cc)return Cr;cc=1;const n=Do(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return Cr.getBlocksCount=function(r,s){switch(s){case n.L:return e[(r-1)*4+0];case n.M:return e[(r-1)*4+1];case n.Q:return e[(r-1)*4+2];case n.H:return e[(r-1)*4+3];default:return}},Cr.getTotalCodewordsCount=function(r,s){switch(s){case n.L:return t[(r-1)*4+0];case n.M:return t[(r-1)*4+1];case n.Q:return t[(r-1)*4+2];case n.H:return t[(r-1)*4+3];default:return}},Cr}var Fs={},ir={},lc;function rd(){if(lc)return ir;lc=1;const n=new Uint8Array(512),e=new Uint8Array(256);return function(){let i=1;for(let r=0;r<255;r++)n[r]=i,e[i]=r,i<<=1,i&256&&(i^=285);for(let r=255;r<512;r++)n[r]=n[r-255]}(),ir.log=function(i){if(i<1)throw new Error("log("+i+")");return e[i]},ir.exp=function(i){return n[i]},ir.mul=function(i,r){return i===0||r===0?0:n[e[i]+e[r]]},ir}var uc;function sd(){return uc||(uc=1,function(n){const e=rd();n.mul=function(i,r){const s=new Uint8Array(i.length+r.length-1);for(let a=0;a<i.length;a++)for(let o=0;o<r.length;o++)s[a+o]^=e.mul(i[a],r[o]);return s},n.mod=function(i,r){let s=new Uint8Array(i);for(;s.length-r.length>=0;){const a=s[0];for(let c=0;c<r.length;c++)s[c]^=e.mul(r[c],a);let o=0;for(;o<s.length&&s[o]===0;)o++;s=s.slice(o)}return s},n.generateECPolynomial=function(i){let r=new Uint8Array([1]);for(let s=0;s<i;s++)r=n.mul(r,new Uint8Array([1,e.exp(s)]));return r}}(Fs)),Fs}var Os,dc;function ad(){if(dc)return Os;dc=1;const n=sd();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(i){this.degree=i,this.genPoly=n.generateECPolynomial(this.degree)},e.prototype.encode=function(i){if(!this.genPoly)throw new Error("Encoder not initialized");const r=new Uint8Array(i.length+this.degree);r.set(i);const s=n.mod(r,this.genPoly),a=this.degree-s.length;if(a>0){const o=new Uint8Array(this.degree);return o.set(s,a),o}return s},Os=e,Os}var Bs={},ks={},zs={},fc;function Pl(){return fc||(fc=1,zs.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),zs}var hn={},hc;function Ll(){if(hc)return hn;hc=1;const n="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const i="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;hn.KANJI=new RegExp(t,"g"),hn.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),hn.BYTE=new RegExp(i,"g"),hn.NUMERIC=new RegExp(n,"g"),hn.ALPHANUMERIC=new RegExp(e,"g");const r=new RegExp("^"+t+"$"),s=new RegExp("^"+n+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return hn.testKanji=function(c){return r.test(c)},hn.testNumeric=function(c){return s.test(c)},hn.testAlphanumeric=function(c){return a.test(c)},hn}var pc;function gi(){return pc||(pc=1,function(n){const e=Pl(),t=Ll();n.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},n.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},n.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},n.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},n.MIXED={bit:-1},n.getCharCountIndicator=function(s,a){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?s.ccBits[0]:a<27?s.ccBits[1]:s.ccBits[2]},n.getBestModeForData=function(s){return t.testNumeric(s)?n.NUMERIC:t.testAlphanumeric(s)?n.ALPHANUMERIC:t.testKanji(s)?n.KANJI:n.BYTE},n.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},n.isValid=function(s){return s&&s.bit&&s.ccBits};function i(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return n.NUMERIC;case"alphanumeric":return n.ALPHANUMERIC;case"kanji":return n.KANJI;case"byte":return n.BYTE;default:throw new Error("Unknown mode: "+r)}}n.from=function(s,a){if(n.isValid(s))return s;try{return i(s)}catch{return a}}}(ks)),ks}var mc;function od(){return mc||(mc=1,function(n){const e=mi(),t=Rl(),i=Do(),r=gi(),s=Pl(),a=7973,o=e.getBCHDigit(a);function c(h,m,g){for(let _=1;_<=40;_++)if(m<=n.getCapacity(_,g,h))return _}function l(h,m){return r.getCharCountIndicator(h,m)+4}function u(h,m){let g=0;return h.forEach(function(_){const p=l(_.mode,m);g+=p+_.getBitsLength()}),g}function d(h,m){for(let g=1;g<=40;g++)if(u(h,g)<=n.getCapacity(g,m,r.MIXED))return g}n.from=function(m,g){return s.isValid(m)?parseInt(m,10):g},n.getCapacity=function(m,g,_){if(!s.isValid(m))throw new Error("Invalid QR Code version");typeof _>"u"&&(_=r.BYTE);const p=e.getSymbolTotalCodewords(m),f=t.getTotalCodewordsCount(m,g),w=(p-f)*8;if(_===r.MIXED)return w;const M=w-l(_,m);switch(_){case r.NUMERIC:return Math.floor(M/10*3);case r.ALPHANUMERIC:return Math.floor(M/11*2);case r.KANJI:return Math.floor(M/13);case r.BYTE:default:return Math.floor(M/8)}},n.getBestVersionForData=function(m,g){let _;const p=i.from(g,i.M);if(Array.isArray(m)){if(m.length>1)return d(m,p);if(m.length===0)return 1;_=m[0]}else _=m;return c(_.mode,_.getLength(),p)},n.getEncodedBits=function(m){if(!s.isValid(m)||m<7)throw new Error("Invalid QR Code version");let g=m<<12;for(;e.getBCHDigit(g)-o>=0;)g^=a<<e.getBCHDigit(g)-o;return m<<12|g}}(Bs)),Bs}var Hs={},gc;function cd(){if(gc)return Hs;gc=1;const n=mi(),e=1335,t=21522,i=n.getBCHDigit(e);return Hs.getEncodedBits=function(s,a){const o=s.bit<<3|a;let c=o<<10;for(;n.getBCHDigit(c)-i>=0;)c^=e<<n.getBCHDigit(c)-i;return(o<<10|c)^t},Hs}var Vs={},Gs,_c;function ld(){if(_c)return Gs;_c=1;const n=gi();function e(t){this.mode=n.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(i){return 10*Math.floor(i/3)+(i%3?i%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(i){let r,s,a;for(r=0;r+3<=this.data.length;r+=3)s=this.data.substr(r,3),a=parseInt(s,10),i.put(a,10);const o=this.data.length-r;o>0&&(s=this.data.substr(r),a=parseInt(s,10),i.put(a,o*3+1))},Gs=e,Gs}var $s,vc;function ud(){if(vc)return $s;vc=1;const n=gi(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(i){this.mode=n.ALPHANUMERIC,this.data=i}return t.getBitsLength=function(r){return 11*Math.floor(r/2)+6*(r%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(r){let s;for(s=0;s+2<=this.data.length;s+=2){let a=e.indexOf(this.data[s])*45;a+=e.indexOf(this.data[s+1]),r.put(a,11)}this.data.length%2&&r.put(e.indexOf(this.data[s]),6)},$s=t,$s}var Ws,xc;function dd(){if(xc)return Ws;xc=1;const n=gi();function e(t){this.mode=n.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(i){return i*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let i=0,r=this.data.length;i<r;i++)t.put(this.data[i],8)},Ws=e,Ws}var qs,yc;function fd(){if(yc)return qs;yc=1;const n=gi(),e=mi();function t(i){this.mode=n.KANJI,this.data=i}return t.getBitsLength=function(r){return r*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let r;for(r=0;r<this.data.length;r++){let s=e.toSJIS(this.data[r]);if(s>=33088&&s<=40956)s-=33088;else if(s>=57408&&s<=60351)s-=49472;else throw new Error("Invalid SJIS character: "+this.data[r]+`
Make sure your charset is UTF-8`);s=(s>>>8&255)*192+(s&255),i.put(s,13)}},qs=t,qs}var Xs={exports:{}},Sc;function hd(){return Sc||(Sc=1,function(n){var e={single_source_shortest_paths:function(t,i,r){var s={},a={};a[i]=0;var o=e.PriorityQueue.make();o.push(i,0);for(var c,l,u,d,h,m,g,_,p;!o.empty();){c=o.pop(),l=c.value,d=c.cost,h=t[l]||{};for(u in h)h.hasOwnProperty(u)&&(m=h[u],g=d+m,_=a[u],p=typeof a[u]>"u",(p||_>g)&&(a[u]=g,o.push(u,g),s[u]=l))}if(typeof r<"u"&&typeof a[r]>"u"){var f=["Could not find a path from ",i," to ",r,"."].join("");throw new Error(f)}return s},extract_shortest_path_from_predecessor_list:function(t,i){for(var r=[],s=i;s;)r.push(s),t[s],s=t[s];return r.reverse(),r},find_path:function(t,i,r){var s=e.single_source_shortest_paths(t,i,r);return e.extract_shortest_path_from_predecessor_list(s,r)},PriorityQueue:{make:function(t){var i=e.PriorityQueue,r={},s;t=t||{};for(s in i)i.hasOwnProperty(s)&&(r[s]=i[s]);return r.queue=[],r.sorter=t.sorter||i.default_sorter,r},default_sorter:function(t,i){return t.cost-i.cost},push:function(t,i){var r={value:t,cost:i};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};n.exports=e}(Xs)),Xs.exports}var Mc;function pd(){return Mc||(Mc=1,function(n){const e=gi(),t=ld(),i=ud(),r=dd(),s=fd(),a=Ll(),o=mi(),c=hd();function l(f){return unescape(encodeURIComponent(f)).length}function u(f,w,M){const y=[];let A;for(;(A=f.exec(M))!==null;)y.push({data:A[0],index:A.index,mode:w,length:A[0].length});return y}function d(f){const w=u(a.NUMERIC,e.NUMERIC,f),M=u(a.ALPHANUMERIC,e.ALPHANUMERIC,f);let y,A;return o.isKanjiModeEnabled()?(y=u(a.BYTE,e.BYTE,f),A=u(a.KANJI,e.KANJI,f)):(y=u(a.BYTE_KANJI,e.BYTE,f),A=[]),w.concat(M,y,A).sort(function(E,L){return E.index-L.index}).map(function(E){return{data:E.data,mode:E.mode,length:E.length}})}function h(f,w){switch(w){case e.NUMERIC:return t.getBitsLength(f);case e.ALPHANUMERIC:return i.getBitsLength(f);case e.KANJI:return s.getBitsLength(f);case e.BYTE:return r.getBitsLength(f)}}function m(f){return f.reduce(function(w,M){const y=w.length-1>=0?w[w.length-1]:null;return y&&y.mode===M.mode?(w[w.length-1].data+=M.data,w):(w.push(M),w)},[])}function g(f){const w=[];for(let M=0;M<f.length;M++){const y=f[M];switch(y.mode){case e.NUMERIC:w.push([y,{data:y.data,mode:e.ALPHANUMERIC,length:y.length},{data:y.data,mode:e.BYTE,length:y.length}]);break;case e.ALPHANUMERIC:w.push([y,{data:y.data,mode:e.BYTE,length:y.length}]);break;case e.KANJI:w.push([y,{data:y.data,mode:e.BYTE,length:l(y.data)}]);break;case e.BYTE:w.push([{data:y.data,mode:e.BYTE,length:l(y.data)}])}}return w}function _(f,w){const M={},y={start:{}};let A=["start"];for(let T=0;T<f.length;T++){const E=f[T],L=[];for(let v=0;v<E.length;v++){const S=E[v],C=""+T+v;L.push(C),M[C]={node:S,lastCount:0},y[C]={};for(let N=0;N<A.length;N++){const O=A[N];M[O]&&M[O].node.mode===S.mode?(y[O][C]=h(M[O].lastCount+S.length,S.mode)-h(M[O].lastCount,S.mode),M[O].lastCount+=S.length):(M[O]&&(M[O].lastCount=S.length),y[O][C]=h(S.length,S.mode)+4+e.getCharCountIndicator(S.mode,w))}}A=L}for(let T=0;T<A.length;T++)y[A[T]].end=0;return{map:y,table:M}}function p(f,w){let M;const y=e.getBestModeForData(f);if(M=e.from(w,y),M!==e.BYTE&&M.bit<y.bit)throw new Error('"'+f+'" cannot be encoded with mode '+e.toString(M)+`.
 Suggested mode is: `+e.toString(y));switch(M===e.KANJI&&!o.isKanjiModeEnabled()&&(M=e.BYTE),M){case e.NUMERIC:return new t(f);case e.ALPHANUMERIC:return new i(f);case e.KANJI:return new s(f);case e.BYTE:return new r(f)}}n.fromArray=function(w){return w.reduce(function(M,y){return typeof y=="string"?M.push(p(y,null)):y.data&&M.push(p(y.data,y.mode)),M},[])},n.fromString=function(w,M){const y=d(w,o.isKanjiModeEnabled()),A=g(y),T=_(A,M),E=c.find_path(T.map,"start","end"),L=[];for(let v=1;v<E.length-1;v++)L.push(T.table[E[v]].node);return n.fromArray(m(L))},n.rawSplit=function(w){return n.fromArray(d(w,o.isKanjiModeEnabled()))}}(Vs)),Vs}var bc;function md(){if(bc)return Rs;bc=1;const n=mi(),e=Do(),t=Qu(),i=ed(),r=td(),s=nd(),a=id(),o=Rl(),c=ad(),l=od(),u=cd(),d=gi(),h=pd();function m(T,E){const L=T.size,v=s.getPositions(E);for(let S=0;S<v.length;S++){const C=v[S][0],N=v[S][1];for(let O=-1;O<=7;O++)if(!(C+O<=-1||L<=C+O))for(let D=-1;D<=7;D++)N+D<=-1||L<=N+D||(O>=0&&O<=6&&(D===0||D===6)||D>=0&&D<=6&&(O===0||O===6)||O>=2&&O<=4&&D>=2&&D<=4?T.set(C+O,N+D,!0,!0):T.set(C+O,N+D,!1,!0))}}function g(T){const E=T.size;for(let L=8;L<E-8;L++){const v=L%2===0;T.set(L,6,v,!0),T.set(6,L,v,!0)}}function _(T,E){const L=r.getPositions(E);for(let v=0;v<L.length;v++){const S=L[v][0],C=L[v][1];for(let N=-2;N<=2;N++)for(let O=-2;O<=2;O++)N===-2||N===2||O===-2||O===2||N===0&&O===0?T.set(S+N,C+O,!0,!0):T.set(S+N,C+O,!1,!0)}}function p(T,E){const L=T.size,v=l.getEncodedBits(E);let S,C,N;for(let O=0;O<18;O++)S=Math.floor(O/3),C=O%3+L-8-3,N=(v>>O&1)===1,T.set(S,C,N,!0),T.set(C,S,N,!0)}function f(T,E,L){const v=T.size,S=u.getEncodedBits(E,L);let C,N;for(C=0;C<15;C++)N=(S>>C&1)===1,C<6?T.set(C,8,N,!0):C<8?T.set(C+1,8,N,!0):T.set(v-15+C,8,N,!0),C<8?T.set(8,v-C-1,N,!0):C<9?T.set(8,15-C-1+1,N,!0):T.set(8,15-C-1,N,!0);T.set(v-8,8,1,!0)}function w(T,E){const L=T.size;let v=-1,S=L-1,C=7,N=0;for(let O=L-1;O>0;O-=2)for(O===6&&O--;;){for(let D=0;D<2;D++)if(!T.isReserved(S,O-D)){let P=!1;N<E.length&&(P=(E[N]>>>C&1)===1),T.set(S,O-D,P),C--,C===-1&&(N++,C=7)}if(S+=v,S<0||L<=S){S-=v,v=-v;break}}}function M(T,E,L){const v=new t;L.forEach(function(D){v.put(D.mode.bit,4),v.put(D.getLength(),d.getCharCountIndicator(D.mode,T)),D.write(v)});const S=n.getSymbolTotalCodewords(T),C=o.getTotalCodewordsCount(T,E),N=(S-C)*8;for(v.getLengthInBits()+4<=N&&v.put(0,4);v.getLengthInBits()%8!==0;)v.putBit(0);const O=(N-v.getLengthInBits())/8;for(let D=0;D<O;D++)v.put(D%2?17:236,8);return y(v,T,E)}function y(T,E,L){const v=n.getSymbolTotalCodewords(E),S=o.getTotalCodewordsCount(E,L),C=v-S,N=o.getBlocksCount(E,L),O=v%N,D=N-O,P=Math.floor(v/N),I=Math.floor(C/N),B=I+1,k=P-I,W=new c(k);let fe=0;const xe=new Array(N),Ie=new Array(N);let He=0;const Xe=new Uint8Array(T.buffer);for(let Te=0;Te<N;Te++){const Me=Te<D?I:B;xe[Te]=Xe.slice(fe,fe+Me),Ie[Te]=W.encode(xe[Te]),fe+=Me,He=Math.max(He,Me)}const ke=new Uint8Array(v);let Q=0,ee,ge;for(ee=0;ee<He;ee++)for(ge=0;ge<N;ge++)ee<xe[ge].length&&(ke[Q++]=xe[ge][ee]);for(ee=0;ee<k;ee++)for(ge=0;ge<N;ge++)ke[Q++]=Ie[ge][ee];return ke}function A(T,E,L,v){let S;if(Array.isArray(T))S=h.fromArray(T);else if(typeof T=="string"){let P=E;if(!P){const I=h.rawSplit(T);P=l.getBestVersionForData(I,L)}S=h.fromString(T,P||40)}else throw new Error("Invalid data");const C=l.getBestVersionForData(S,L);if(!C)throw new Error("The amount of data is too big to be stored in a QR Code");if(!E)E=C;else if(E<C)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+C+`.
`);const N=M(E,L,S),O=n.getSymbolSize(E),D=new i(O);return m(D,E),g(D),_(D,E),f(D,L,0),E>=7&&p(D,E),w(D,N),isNaN(v)&&(v=a.getBestMask(D,f.bind(null,D,L))),a.applyMask(v,D),f(D,L,v),{modules:D,version:E,errorCorrectionLevel:L,maskPattern:v,segments:S}}return Rs.create=function(E,L){if(typeof E>"u"||E==="")throw new Error("No input text");let v=e.M,S,C;return typeof L<"u"&&(v=e.from(L.errorCorrectionLevel,e.M),S=l.from(L.version),C=a.from(L.maskPattern),L.toSJISFunc&&n.setToSJISFunction(L.toSJISFunc)),A(E,S,v,C)},Rs}var Ys={},js={},Ec;function Dl(){return Ec||(Ec=1,function(n){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let i=t.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+t);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(s){return[s,s]}))),i.length===6&&i.push("F","F");const r=parseInt(i.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+i.slice(0,6).join("")}}n.getOptions=function(i){i||(i={}),i.color||(i.color={});const r=typeof i.margin>"u"||i.margin===null||i.margin<0?4:i.margin,s=i.width&&i.width>=21?i.width:void 0,a=i.scale||4;return{width:s,scale:s?4:a,margin:r,color:{dark:e(i.color.dark||"#000000ff"),light:e(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},n.getScale=function(i,r){return r.width&&r.width>=i+r.margin*2?r.width/(i+r.margin*2):r.scale},n.getImageWidth=function(i,r){const s=n.getScale(i,r);return Math.floor((i+r.margin*2)*s)},n.qrToImageData=function(i,r,s){const a=r.modules.size,o=r.modules.data,c=n.getScale(a,s),l=Math.floor((a+s.margin*2)*c),u=s.margin*c,d=[s.color.light,s.color.dark];for(let h=0;h<l;h++)for(let m=0;m<l;m++){let g=(h*l+m)*4,_=s.color.light;if(h>=u&&m>=u&&h<l-u&&m<l-u){const p=Math.floor((h-u)/c),f=Math.floor((m-u)/c);_=d[o[p*a+f]?1:0]}i[g++]=_.r,i[g++]=_.g,i[g++]=_.b,i[g]=_.a}}}(js)),js}var Tc;function gd(){return Tc||(Tc=1,function(n){const e=Dl();function t(r,s,a){r.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=a,s.width=a,s.style.height=a+"px",s.style.width=a+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}n.render=function(s,a,o){let c=o,l=a;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),a||(l=i()),c=e.getOptions(c);const u=e.getImageWidth(s.modules.size,c),d=l.getContext("2d"),h=d.createImageData(u,u);return e.qrToImageData(h.data,s,c),t(d,l,u),d.putImageData(h,0,0),l},n.renderToDataURL=function(s,a,o){let c=o;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),c||(c={});const l=n.render(s,a,c),u=c.type||"image/png",d=c.rendererOpts||{};return l.toDataURL(u,d.quality)}}(Ys)),Ys}var Ks={},wc;function _d(){if(wc)return Ks;wc=1;const n=Dl();function e(r,s){const a=r.a/255,o=s+'="'+r.hex+'"';return a<1?o+" "+s+'-opacity="'+a.toFixed(2).slice(1)+'"':o}function t(r,s,a){let o=r+s;return typeof a<"u"&&(o+=" "+a),o}function i(r,s,a){let o="",c=0,l=!1,u=0;for(let d=0;d<r.length;d++){const h=Math.floor(d%s),m=Math.floor(d/s);!h&&!l&&(l=!0),r[d]?(u++,d>0&&h>0&&r[d-1]||(o+=l?t("M",h+a,.5+m+a):t("m",c,0),c=0,l=!1),h+1<s&&r[d+1]||(o+=t("h",u),u=0)):c++}return o}return Ks.render=function(s,a,o){const c=n.getOptions(a),l=s.modules.size,u=s.modules.data,d=l+c.margin*2,h=c.color.light.a?"<path "+e(c.color.light,"fill")+' d="M0 0h'+d+"v"+d+'H0z"/>':"",m="<path "+e(c.color.dark,"stroke")+' d="'+i(u,l,c.margin)+'"/>',g='viewBox="0 0 '+d+" "+d+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(c.width?'width="'+c.width+'" height="'+c.width+'" ':"")+g+' shape-rendering="crispEdges">'+h+m+`</svg>
`;return typeof o=="function"&&o(null,p),p},Ks}var Ac;function vd(){if(Ac)return xi;Ac=1;const n=Ju(),e=md(),t=gd(),i=_d();function r(s,a,o,c,l){const u=[].slice.call(arguments,1),d=u.length,h=typeof u[d-1]=="function";if(!h&&!n())throw new Error("Callback required as last argument");if(h){if(d<2)throw new Error("Too few arguments provided");d===2?(l=o,o=a,a=c=void 0):d===3&&(a.getContext&&typeof l>"u"?(l=c,c=void 0):(l=c,c=o,o=a,a=void 0))}else{if(d<1)throw new Error("Too few arguments provided");return d===1?(o=a,a=c=void 0):d===2&&!a.getContext&&(c=o,o=a,a=void 0),new Promise(function(m,g){try{const _=e.create(o,c);m(s(_,a,c))}catch(_){g(_)}})}try{const m=e.create(o,c);l(null,s(m,a,c))}catch(m){l(m)}}return xi.create=e.create,xi.toCanvas=r.bind(null,t.render),xi.toDataURL=r.bind(null,t.renderToDataURL),xi.toString=r.bind(null,function(s,a,o){return i.render(s,o)}),xi}var xd=vd();const yd=Zu(xd);async function Sd(n,e){var h,m,g;const t=new Image;t.src=`/acorn-witch-atelier/assets/rewards/cg-${n.id}.webp`,await t.decode();const i=document.createElement("canvas");i.width=900,i.height=1560;const r=i.getContext("2d");r.fillStyle="#f4e8cb",r.fillRect(0,0,900,1560),r.strokeStyle="#b38a49",r.lineWidth=3,r.strokeRect(28,28,844,1504),r.textBaseline="top",r.fillStyle="#725533",r.font='24px "Songti SC",serif',r.fillText("橡果魔女  /  与松团子的珍藏时刻",55,62);const s=Math.max(790/t.width,800/t.height),a=t.width*s,o=t.height*s;r.save(),r.beginPath(),r.rect(55,112,790,800),r.clip(),r.drawImage(t,55+(790-a)/2,112+(800-o)*.38,a,o),r.restore(),r.fillStyle="#493927",r.font='bold 42px "Songti SC",serif',r.fillText(n.name,55,948,790);const c=["松团子",...n.costume.split(" · ")];r.font='20px "Songti SC",serif';let l=55;for(const _ of c){const p=r.measureText(_).width+28;r.fillStyle="#365746",r.fillRect(l,1012,p,40),r.fillStyle="#fff0d1",r.fillText(_,l+14,1021),l+=p+12}r.fillStyle="#655039",r.font='25px "Songti SC",serif';let u="",d=1090;for(const _ of n.lines[0])r.measureText(u+_).width>790&&(r.fillText(u,55,d),d+=43,u=""),u+=_;return u&&r.fillText(u,55,d),r.strokeStyle="#b89b6666",r.beginPath(),r.moveTo(55,1260),r.lineTo(845,1260),r.stroke(),r.font='20px "Songti SC",serif',r.fillStyle="#786445",r.fillText(`收录条件 · ${n.condition}`,55,1284,790),r.fillText(`相伴第 ${e.day} 天   ·   好感 ${((h=e.collection)==null?void 0:h.bond)??0}   ·   CG 收藏 ${((g=(m=e.collection)==null?void 0:m.cgs)==null?void 0:g.length)??0} / 6`,55,1320,790),r.fillStyle="#365746",r.fillRect(55,1370,790,140),r.fillStyle="#fff0d1",r.font='25px "Songti SC",serif',r.fillText("来橡果小屋，写下你们的故事",78,1400),r.font='20px "Songti SC",serif',r.fillText("扫码开启与松团子的森林生活",78,1450),await Il(r,709,1380,120),new Promise(_=>i.toBlob(_,"image/png"))}async function Il(n,e,t,i){const r=document.createElement("canvas");await yd.toCanvas(r,"https://logic33.github.io/acorn-witch-atelier/",{width:i,margin:2,errorCorrectionLevel:"M",color:{dark:"#294735",light:"#fff8e7"}}),n.drawImage(r,e,t,i,i)}async function Ul(n,e){const t=document.createElement("dialog");t.className="cg-share-preview",t.setAttribute("aria-label","分享奇遇"),t.innerHTML='<header><h2>分享奇遇</h2><button class="share-close" aria-label="关闭分享">×</button></header><div class="share-preview-body"><p role="status">正在准备纪念卡…</p></div><footer><button data-share="save" disabled>保存图片</button><button data-share="douyin" disabled>分享剧情到抖音</button></footer>',document.body.append(t),t.showModal();let i;t.querySelector(".share-close").onclick=()=>t.close(),t.addEventListener("close",()=>{i&&URL.revokeObjectURL(i),t.remove()},{once:!0});try{const r=await Sd(n,e);if(!t.open)return;i=URL.createObjectURL(r);const s=t.querySelector(".share-preview-body"),a=new Image;a.src=i,a.alt=n.name+"纪念卡",s.replaceChildren(a),t.querySelectorAll("footer button").forEach(o=>o.disabled=!1),t.querySelector("[data-share=save]").onclick=()=>{const o=document.createElement("a");o.href=i,o.download=n.name+"-纪念卡.png",o.click()},t.querySelector("[data-share=douyin]").onclick=()=>{var l,u;s.innerHTML='<label>分享剧情到抖音<textarea aria-label="剧情文本" rows="10"></textarea></label><p class="share-note">创作预览，暂未连接抖音。</p><button class="share-back">返回图片预览</button>';const o=(l=e.memories)==null?void 0:l.filter(d=>d.cg===n.id).at(-1),c=((u=o==null?void 0:o.messages)==null?void 0:u.map(d=>d.content))||[];s.querySelector("textarea").value=["奇遇 · "+n.name,n.lines[0],...c].join(`

`),s.querySelector(".share-back").onclick=()=>s.replaceChildren(a),s.querySelector("textarea").focus()}}catch{t.open&&(t.querySelector(".share-preview-body").textContent="纪念卡生成失败，请关闭后重试。")}}function Md({world:n,root:e,onFinish:t}){let i=!0,r="berry",s=!1,a=!1,o=0,c=!1;function l(d=""){if(i){e.innerHTML='<div class="gather-guide"><b>01 · 摘莓果</b><span>走近莓果丛…</span></div>';return}const h={berry:"轻点莓果，装进篮子",acorn:"按住蓄力，亮起时松手",mushroom:"光点进入金色区域时采摘"};if(e.innerHTML=`<div class="gather-guide"><b>${{berry:"01 · 摘莓果",acorn:"02 · 够橡果",mushroom:"03 · 采蘑菇"}[r]}</b><span>${d||h[r]}</span></div>`,r==="berry"&&(e.insertAdjacentHTML("beforeend",'<button class="gather-berry" aria-label="采摘莓果">✦<small>采摘</small></button>'),e.querySelector("button").onclick=()=>u("pick")),r==="acorn"){e.insertAdjacentHTML("beforeend",'<button class="gather-hold" aria-label="按住蓄力，松手起跳"><span>按住蓄力</span><i><em></em></i></button>');const m=e.querySelector("button"),g=()=>{s||a||(a=!0,o=0,n.setAction("crouch"))},_=()=>{a&&(a=!1,o>=650&&o<=1450?u("jump"):(n.setAction("acorn"),l(o<650?"再蓄一点力，亮起时松手":"力气太大啦，再试一次")))};m.onpointerdown=p=>{m.setPointerCapture(p.pointerId),g()},m.onpointerup=_,m.onpointercancel=()=>{a=!1,n.setAction("acorn"),l()},m.onkeydown=p=>{["Space","Enter"].includes(p.code)&&(p.preventDefault(),g())},m.onkeyup=p=>{["Space","Enter"].includes(p.code)&&(p.preventDefault(),_())}}r==="mushroom"&&(e.insertAdjacentHTML("beforeend",'<button class="gather-timing" aria-label="把握时机采蘑菇"><i></i><span>采摘</span></button>'),e.querySelector("button").onclick=()=>{if(s)return;const m=o%1800/1800;m>=.35&&m<=.65?u("harvest"):(o=0,l("差一点，等光点进入金色区域"))})}function u(d){s||c||(s=!0,e.querySelectorAll("button").forEach(h=>h.disabled=!0),e.querySelector(".gather-guide span").textContent=d==="harvest"?"收好满满一篮，再带回家":"松团子正在采集…",n.setAction(d))}return l(),{tick(d){if(c)return;const h=n.getInfo().gatherMotion;if(!h.seeking){if(i){if(h.action!=="berry")return;i=!1,l()}if(s){if(!h.complete)return;if(s=!1,r==="mushroom"){c=!0,e.innerHTML="",t();return}r=r==="berry"?"acorn":"mushroom",o=0,n.setAction(r),l();return}if(a){o+=d;const m=e.querySelector(".gather-hold");m.classList.toggle("ready",o>=650&&o<=1450),m.querySelector("em").style.width=`${Math.min(100,o/18)}%`,m.querySelector("span").textContent=o>=650&&o<=1450?"松手起跳":"按住蓄力"}r==="mushroom"&&(o+=d,e.querySelector(".gather-timing").classList.toggle("ready",o%1800/1800>=.35&&o%1800/1800<=.65),e.querySelector(".gather-timing i").style.transform=`rotate(${o%1800/1800*360}deg)`)}},dispose(){c=!0,e.innerHTML=""}}}const Nl="acorn-witch-save-v1",fs={baking:"烘焙",magic:"魔法",style:"审美",knowledge:"学识",charm:"亲和"},Io={acorn:"橡果",berry:"莓果",cream:"奶油",herb:"香草",honey:"蜂蜜"},fr=[{id:"tart",name:"星光橡果塔",note:"酥脆塔皮，藏着一小片星空。",need:{acorn:2,berry:1,cream:1},temp:180,spell:"star",color:"#d9a050"},{id:"pie",name:"莓果云朵派",note:"把森林的清甜，叠进奶油云朵。",need:{berry:2,cream:1,herb:1},temp:170,spell:"forest",color:"#b54f65"},{id:"pudding",name:"蜂蜜布丁",note:"温柔的蜂蜜香，适合送给朋友。",need:{honey:2,cream:1},temp:160,spell:"heal",color:"#e3ba59"},{id:"maple",unlock:!0,name:"枫糖橡果饼",note:"轮盘新菜单 · 蜂蜜香裹住烤橡果。",need:{acorn:2,honey:1,cream:1},temp:175,spell:"forest",color:"#c69049"},{id:"berryroll",unlock:!0,name:"莓果奶油卷",note:"轮盘新菜单 · 把莓果卷进软软的奶油里。",need:{berry:2,cream:2,honey:1},temp:165,spell:"heal",color:"#dba3ad"}],Wi=[{id:"acorn",name:"橡果烘焙师",short:"烘焙师",description:"松鼠围裙 · 格纹口袋 · 软软堆堆袜",color:"#776044",tags:"甜美 · 温暖",bonus:8,price:0},{id:"tea",name:"莓果茶会",short:"洛丽塔",description:"层叠蕾丝蓬裙 · 缎带蝴蝶结 · 玛丽珍鞋",color:"#b87587",tags:"甜美 · 华丽",bonus:14,price:70},{id:"forest",name:"森林小洋装",short:"小洋装",description:"短斗篷外套 · 收腰裙 · 小挎包与短靴",color:"#436d58",tags:"森林 · 温暖",bonus:10,price:55},{id:"school",name:"橡果学院",short:"校服",description:"水手领 · 格纹百褶裙 · 书包与银色耳环",color:"#3d4e59",tags:"学院 · 清新",bonus:12,price:45},{id:"adventure",name:"森林探险家",short:"冒险装",description:"短披风 · 皮革护腰 · 工具腰包与叶片耳坠",color:"#6b744f",tags:"冒险 · 自然",bonus:18,price:100},{id:"star",name:"飞行小魔女",short:"小魔女",description:"深蓝宽松裙 · 红蝴蝶结 · 送信包与扫帚",color:"#3d405b",tags:"魔法 · 自由",bonus:16,price:85}];function Fl(){return{version:1,day:1,slot:0,energy:90,mood:75,coins:120,stats:{baking:12,magic:8,style:8,knowledge:8,charm:10},inventory:{acorn:6,berry:5,cream:5,herb:3,honey:4},desserts:[],outfit:"acorn",owned:["acorn"],friendship:0,story:0,records:[],memories:[],memoryStamps:[],ending:null}}function lr(n,e){return Object.entries(e.need).every(([t,i])=>n.inventory[t]>=i)}function bd(n,e,t,i,r){return Math.min(100,Math.round(20+e*30+t*25+(i===r.spell?12:5)+Math.min(13,n.stats.baking*.25+n.stats.magic*.15)))}function Ol(n){return n>=88?"S":n>=72?"A":n>=52?"B":"C"}function _i(n,e){return(!n.ending||n.day>7)&&n.energy>=e&&!(n.day===7&&n.slot===3)}function Ed(n,{name:e,cost:t=0,stats:i={},mood:r=0,coins:s=0,energy:a=0,ingredients:o={},dessert:c=null,friendship:l=0}){if(!_i(n,t))throw new Error("没有足够的体力或行动时段");if(n.coins+s<0)throw new Error("金币不足");for(const[u,d]of Object.entries(o))if(n.inventory[u]+d<0)throw new Error("材料不足");n.energy=Math.min(100,n.energy-t+a),n.mood=Math.max(0,Math.min(100,n.mood+r)),n.coins+=s;for(const[u,d]of Object.entries(i))n.stats[u]+=d;for(const[u,d]of Object.entries(o))n.inventory[u]+=d;return c&&n.desserts.push(c),n.friendship+=l,n.records.unshift({day:n.day,slot:n.slot,name:e,id:crypto.randomUUID(),createdAt:new Date().toISOString()}),n.slot++,n.slot===3&&n.day!==7&&(n.day++,n.slot=0,n.energy=Math.min(100,n.energy+25)),n}function Td(n,e){const t=Math.round(e.score*.5),i=Math.min(25,Math.round(n.stats.baking*.35+n.stats.magic*.25+n.stats.knowledge*.15)),r=Math.min(20,Wi.find(c=>c.id===n.outfit).bonus+Math.floor(n.stats.style*.2)),s=Math.min(5,Math.floor(n.friendship/2)),a=t+i+r+s,o=a>=88?"金色掌声之夜":n.friendship>=6?"有人为你而来":n.stats.magic>n.stats.baking?"秋叶与星光":"第一份秋日心意";return{score:a,grade:Ol(a),title:o,taste:t,growth:i,dress:r,bond:s,dessert:e.name}}const qi=[{guest:"放学的小客人",request:"甜点配一杯热茶，想暖暖手。",choice:"tea",motion:"child"},{guest:"结伴而来的街坊",request:"今天想喝热可可，搭配一小块甜点。",choice:"cocoa",motion:"queue"},{guest:"喜欢甜味的小姐",request:"今天想吃甜一点的，请加一杯蜂蜜茶。",choice:"honey",motion:"vip"}],hs=2e4;function wd(n,e){const t=e.filter(a=>a.correct).length,i=e.filter(a=>a.perfect).length,r=Math.round((Math.round(n*.6)+18)*t/qi.length),s=i*5;return{served:t,perfect:i,sales:r,tips:s,coins:r+s,satisfaction:Math.round(t/qi.length*100),charm:t,mood:t||-2}}const Ad=5,Bi=35,Uo=[{id:"ribbon",slot:"accessory",name:"秋色蝴蝶结"},{id:"moon",slot:"accessory",name:"琥珀月牙耳饰"},{id:"leaf",slot:"accessory",name:"秋叶橡果发夹"}],Fi=[{id:"orange",name:"橘猫",look:"橘色条纹 · 圆滚滚",line:"它把脑袋放在我的鞋上了……这是想跟我们回家吗？",action:"蹲下来摸摸它",reply:"咕噜噜……它眯着眼，把脑袋往你手心里送。"},{id:"calico",name:"三花猫",look:"橙黑花斑 · 爱扑落叶",line:"那片叶子是我变的。它追了这么久，我再变一片给它吧。",action:"陪它追落叶",reply:"它抬起爪子接住叶子，又轻轻推到了你面前。"},{id:"silver",name:"银渐层",look:"银白绒毛 · 圆脸",line:"像一小团落到地上的云。云也会呼噜吗？",action:"轻轻挠下巴",reply:"它仰起圆圆的脸，闭着眼睛蹭了蹭你的手。"},{id:"ragdoll",name:"布偶猫",look:"蓝眼睛 · 蓬松长毛",line:"它靠过来以后，我都舍不得翻书了。再坐一会儿吧。",action:"陪它打个盹",reply:"蓬松的尾巴轻轻一卷，它安心地靠着你睡着了。"},{id:"siamese",name:"暹罗猫",look:"蓝眼睛 · 深色脸爪",line:"我走到哪儿，它就跟到哪儿。你看，它又在问我们什么呢。",action:"轻声回应它",reply:"喵——它歪歪头，向你又迈近了一小步。"},{id:"black",name:"黑猫",look:"黑色短毛 · 金色眼睛",line:"我的帽子好像在动……原来你在这里！",action:"伸手打个招呼",reply:"黑色的小爪子伸过来，认真地碰了碰你的指尖。"},{id:"golden",name:"金渐层",look:"金色绒毛 · 圆脸绿眼",line:"它的毛和晒过太阳的秋叶一个颜色。我们叫它什么好呢？",action:"轻轻摸摸背",reply:"它舒舒服服地伸了个懒腰，又团成一小颗金色毛球。"},{id:"devon",name:"德文猫",look:"大耳朵 · 短卷毛",line:"它的耳朵也好大！是在偷偷听秋天说话吗？",action:"凑近悄悄说话",reply:"它竖起大耳朵，轻轻蹭了蹭你，像听懂了秘密。"},{id:"abyssinian",name:"阿比西尼亚猫",look:"暖棕短毛 · 修长灵巧",line:"刚才还在门边，一转眼就到椅背上了。真像一阵秋风。",action:"晃一晃秋叶",reply:"它轻巧地跃过去，停下时还回头等你跟上。"}],Vn=[{id:"magic",name:"第一片会飞的秋叶",activity:"course",stat:"magic",threshold:20,condition:"魔法达到 20 后完成一节课",costume:"魔女装 · 彩窗教室",lines:["同学们离开后，窗边那片秋叶仍悬在半空，怎么也落不下来。松团子收起笑容，重新翻开了课本。","「我只练过让它飞起来……书上怎么没写，它不肯下来怎么办？」","她试着把声音放轻，秋叶却绕着灯罩越转越快。叶柄碰到铜铃，清脆的一声响让她缩了缩耳朵。","她伸出的手停住了，转而把书合上。「也许它不是想听更多咒语。我先不催它了。」","铃声渐渐停了。她摊开空着的手，让叶子自己靠近；那点微光终于从灯罩旁慢慢降下来。","叶子在掌心上方摇了一下，安静地落下。她没有马上欢呼，而是认真看了看自己还在发抖的手。","「原来停下来也要练习。我以前总想让大家看看，我能把魔法变得多漂亮。」","她在课本空白处画下一片小叶子。「这一页先留着吧。你觉得刚才，是哪里开始不一样了？」"]},{id:"baking",name:"第一口，留给你",activity:"baking",stat:"baking",threshold:27,condition:"烘焙达到 27 后完成一次烘焙",costume:"围裙 · 小屋厨房",lines:["甜点已经出炉，松团子却拿着两只小盘子，在桌边站了很久。","「这一口本来想留给你……可是如果不合你的口味呢？」","她低头整理奶油，越想让它完美，叉尖越不听话。一小块莓果滑了下来，留下歪歪的缺口。","她的尾巴垂下来，伸手去拿备用的盘子，又停住了。「我是不是把分享，弄得像交作业一样？」","她放下装饰用的小匙，把那块不太整齐的甜点放到窗边，又给另一只盘子分了一小份。","「我可以先说实话：这里有点酸，边缘也烤得脆了。可是刚打开烤箱的时候，我第一个想到的是你。」","她把小叉子放在盘边，终于不再修补那个缺口。「不喜欢也可以告诉我，不用为了让我高兴说好吃。」","她坐到桌边，给你留出挑选的余地。「下一次，我们试着做一种你喜欢、我也想尝尝的味道，好吗？」"]},{id:"shop",name:"打烊后的掌声",activity:"shop",stat:"charm",threshold:16,condition:"亲和达到 16 后完成一次营业",costume:"围裙 · 烘焙小铺",lines:["最后一位客人离开后，松团子在桌脚旁发现了一张折起来的纸。","纸上画着一块甜点，下面只写着几个字：下次还想来，可是我不太敢开口。","她对着门外看了看，街上已经没有刚才那位小客人的身影。「我今天一直在忙，都没发现它想说话。」","她原本要擦掉柜台上的欢迎字样，手里的布停在半空。「是不是一定要会大声点单，才能被好好招待？」","她找来一张旧菜单，把饮品旁边画上杯子，又在角落留出一块空白。","「不会说的时候，可以指给我看。不知道想要什么，也可以慢慢选。」她把菜单放到更低、容易够到的地方。","门外传来轻轻的脚步，刚才的小客人探头看了看新菜单。松团子没有催促，只笑着把它往前推了一点。","小客人点了点那幅杯子。她回头轻声问你：「空白的这一角，还能写点什么，让它知道不着急呢？」"]},{id:"explore",name:"秋风知道的小路",activity:"gather",visits:3,condition:"完成三次森林采集",costume:"冒险装 · 榛果林",lines:["小路尽头，松团子在熟悉的苔草旁停下来。昨夜落下的树枝挡住了那条窄窄的路。","「我小时候总从这里过去。你听，树叶的声音……今天好像不太一样。」","灌木底下传来细小的摩擦声。一只刺猬拖着叶子绕来绕去，每次都被同一根横枝挡回来。","松团子刚要伸手抱它，刺猬就缩成了小球。她立刻退后，把自己的尾巴也收了起来。","「它不认识我。我以为帮忙就是把它带过去，可它可能只想自己走。」她蹲远了一点，耐心等那颗小球重新展开。","刺猬又试着往左钻。她顺着那个方向，轻轻拨开几片压低的蕨叶，让那条原本就有的小缝重新露出来。","小小的身影穿过缝隙消失了，灌木另一侧响起窸窣声。松团子躺回苔草上，长长地松了一口气。","「原来这条路不只属于我的回忆。」她侧过脸看你。「以后再来，我们怎么走，才不会挡住这些小邻居呢？」"]},{id:"bond",name:"再陪我读一页",activity:"home",bond:12,condition:"与松团子的好感达到 12，回到小屋",costume:"日常围裙装 · 窗边",lines:["松团子把书挪过来，却在同一页上停了很久。故事里的小旅人刚向朋友告别。","「它都说了会回来，为什么留下来的那个人还是难过呢？」","她往后翻了两页，又急忙翻回来。「我想先看看结局……这样就不用一直担心了吧。」","窗外传来风声，一张夹在书里的旧书签滑到桌上。上面是她刚学会写名字时，留下的歪歪扭扭的字。","她拾起书签，慢慢把书翻回原来的那页。「那个时候，我也不知道自己后来能把名字写好。」","她把想偷看的后半本合住，只留出眼前这一页。「也许不知道以后怎样的时候，现在的陪伴才会这么重要。」","她读完了小旅人出门的那一段，这次没有急着找结局，肩膀也渐渐放松下来。","「我还会担心的。」她把书签放在两页中间。「但今天可以先读到这里。你有没有一段舍不得翻过去的故事？」"]},{id:"festival",name:"把秋天送给你",activity:"festival",condition:"参加第七天的秋日祭",costume:"秋日盛装 · 祭典广场",lines:["广场上的灯亮起来时，松团子还攥着那片准备送出的秋叶，叶边已经被手心捂得微微卷起。","「大家的礼物都有漂亮的盒子。我找了很久，好像只找得到这种东西。」","一阵风吹过，叶片的微光暗了下来。她连忙用双手护住它，却越护越紧。","她看着路边孩子们捡起普通落叶，互相交换形状和颜色，慢慢松开了手指。","「它不一定要一直发光，才值得被留下吧？」她把叶子放平，让灯火照见叶面细细的脉络。","她指着其中一道纹路，说起第一次走进小屋时的紧张，又说到那些想问、却一直没敢问出口的问题。","「我原来想把整个秋天都送出去。现在想想，应该先问问你，愿不愿意留下我们一起过的这一小段。」","她伸出手，让叶子安静地躺在掌心。「不用现在就回答。灯还亮着，我们可以慢慢说。」"]}],Oi=[{id:"warm",name:"暖茸茸的初遇",cats:["golden","devon","orange"],part:"ribbon",menu:"maple"},{id:"forest",name:"林间小脚印",cats:["abyssinian","calico","black"],part:"moon",menu:"berryroll"},{id:"tea",name:"午后茶会",cats:["orange","silver","golden"],part:"leaf",menu:"maple"},{id:"moon",name:"月亮的来客",cats:["ragdoll","siamese","silver"],part:"ribbon",menu:"berryroll"},{id:"hat",name:"帽子里的秘密",cats:["black","devon","calico"],part:"moon",menu:"maple"}];function vn(n){n.collection??(n.collection={});const e=n.collection;return e.customOutfits??(e.customOutfits=[]),e.activeCustom??(e.activeCustom=null),e.cgs??(e.cgs=[]),e.seen??(e.seen=[]),e.pets??(e.pets=[]),e.petNames??(e.petNames={}),e.activePet??(e.activePet=null),e.petInteractions??(e.petInteractions={}),e.parts??(e.parts=[]),e.menus??(e.menus=[]),e.draws??(e.draws={}),e.bond??(e.bond=0),e.bondSources??(e.bondSources=[]),e.visits??(e.visits={}),e.wear??(e.wear={accessory:null}),e}function Bl(n,e){const t=vn(n);t.bondSources.includes(e)||(t.bondSources.push(e),t.bond=Math.min(100,t.bond+2))}function kl(n,e){const t=vn(n);if(t.cgs.includes(e))return!1;t.cgs.push(e),n.memories??(n.memories=[]);const i=Vn.find(r=>r.id===e);return n.memories.push({id:`cg-${e}`,title:i.name,summary:i.lines.at(-1),activity:i.activity,kind:"canon",cg:e,day:n.day,slot:n.slot,createdAt:new Date().toISOString()}),!0}function zl(n,e){const t=vn(n);for(const i of Vn)i.activity!==e||i.id==="festival"||i.stat&&n.stats[i.stat]<i.threshold||i.visits&&(t.visits[e]??0)<i.visits||i.bond&&t.bond<i.bond||kl(n,i.id)}function Cd(n,e){const t=vn(n);t.visits[e]=(t.visits[e]??0)+1,Bl(n,`${n.day}:${e}`),zl(n,e)}function Rd(n){return[...n.cats.map(e=>({id:`pet-${e}`,type:"pet",item:e,name:Fi.find(t=>t.id===e).name})),{id:`part-${n.part}`,type:"part",item:n.part,name:Uo.find(e=>e.id===n.part).name},{id:"outfit-tea",type:"outfit",item:"tea",name:"莓果茶会套装"},{id:`menu-${n.menu}`,type:"menu",item:n.menu,name:fr.find(e=>e.id===n.menu).name},{id:"coins-20",type:"coins",amount:20,name:"20 金币"}]}function Fa(n,e){const t=vn(n),i=Oi.find(r=>r.id===e);return i?Rd(i).filter(r=>!(t.draws[e]??[]).includes(r.id)&&!(r.type==="pet"&&t.pets.includes(r.item))&&!(r.type==="part"&&t.parts.includes(r.item))&&!(r.type==="menu"&&t.menus.includes(r.item))&&!(r.type==="outfit"&&n.owned.includes(r.item))):[]}function Pd(n,e,t=Math.random()){var a;const i=Fa(n,e);if(n.coins<Bi)throw new Error("金币不足，去小铺接待客人吧。");if(!i.length)throw new Error("这期已经收集齐啦。");if(!Number.isFinite(t)||t<0||t>=1)throw new Error("抽取值无效");const r=i[Math.floor(t*i.length)],s=n.collection;return n.coins-=Bi,(a=s.draws)[e]??(a[e]=[]),s.draws[e].push(r.id),r.type==="coins"&&(n.coins+=r.amount),r.type==="pet"&&(s.pets.push(r.item),s.activePet??(s.activePet=r.item)),r.type==="part"&&s.parts.push(r.item),r.type==="menu"&&s.menus.push(r.item),r.type==="outfit"&&n.owned.push(r.item),s.lastReward={...r,poolId:e},r}function Ld(n){return fr.filter(e=>!e.unlock||vn(n).menus.includes(e.id))}const yi=240,Rr=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Dd({game:n,getState:e,save:t,world:i,pause:r,onEquipped:s}){const a=document.createElement("dialog");a.id="atelier-dialog",n.append(a);let o=!1,c=null,l=!1,u=null,d="",h="",m="";const g=()=>vn(e());async function _(y,A){const T=await fetch("/api/wardrobe"+y,{...A?{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(A)}:{}}),E=await T.text();let L;try{L=JSON.parse(E)}catch{throw new Error("服装绘图服务尚未连接。")}if(!T.ok)throw new Error(L.error||"服装绘图请求未完成。");return L}function p(y=""){a.innerHTML=`<header class="collection-header"><div><small>为松团子设计一套新衣服</small><h2>小小裁缝铺</h2></div><button data-design="close" aria-label="关闭设计">×</button></header><div class="atelier-body">${(c==null?void 0:c.status)==="ready"?`<img class="atelier-preview" src="${y||i.customPreview(c.id)}" alt="新衣服站姿预览"><h3>${Rr(c.name||"我的新衣服")}</h3><p>这套衣服喜欢吗？穿回小屋，就能陪她继续读书。</p><button class="button wide" data-design="accept" ${e().coins<yi?"disabled":""}>收进衣柜 · ${yi} 金币</button><button class="button subtle wide" data-design="again">重新描述</button>`:`<p>可以写款式、颜色和配饰。她还是原来的松团子。</p><label>给这套衣服起名<input id="design-name" maxlength="20" value="${Rr(m)}" placeholder="例如：雨后的来信" ${l?"disabled":""}></label><label>你想让她穿什么？<textarea id="design-prompt" maxlength="600" rows="4" placeholder="浅蓝色水手领小洋装，白色蕾丝裙边，配一个红色小蝴蝶结……" ${l?"disabled":""}>${Rr(h)}</textarea></label><p class="collection-note">整套定制 ${yi} 金币 · 确认收进衣柜时扣除<br>可以保留描述，稍后回来继续。</p><button class="button wide" data-design="generate" ${l||!o||e().coins<yi?"disabled":""}>${l?"正在为她制作新衣服…":o?"开始设计":"绘图服务尚未配置"}</button>${l?'<p class="atelier-progress" role="status">正在绘制服装与配套动作，请稍等。可以先关闭，稍后回来查看。</p>':""}`}<p class="atelier-error" role="alert">${Rr(d)}</p><small>余额 ◈ ${e().coins}</small></div>`}async function f(){clearTimeout(u);try{c=await _("/jobs/"+g().pendingDesign),c.status==="ready"?(await i.prepareCustom(c),l=!1,a.open&&p()):c.status==="failed"?(l=!1,d=c.error,delete g().pendingDesign,t(),a.open&&p()):(l=!0,a.open&&p(),u=setTimeout(f,2200))}catch(y){l=!1,d=y.message,a.open&&p()}}async function w(){a.open||(a.showModal(),r(!0)),d="",h=g().designDraft??h,m=g().designName??m,p();try{o=(await _("/status")).available,g().pendingDesign?(l=!0,await f()):p()}catch(y){d=y.message,p()}}function M(){a.close(),r(!1)}return a.addEventListener("cancel",y=>{y.preventDefault(),M()}),a.addEventListener("input",y=>{y.target.id==="design-prompt"&&(h=y.target.value,g().designDraft=h),y.target.id==="design-name"&&(m=y.target.value,g().designName=m),t()}),a.addEventListener("click",async y=>{var E;const A=y.target.closest("[data-design]");if(!A||A.disabled)return;const T=A.dataset.design;if(T==="close"&&M(),T==="generate"){if(l)return;if(h.trim().length<4){d="再具体一点吧，至少写 4 个字。",p();return}l=!0,d="";const L=crypto.randomUUID();g().pendingDesign=L,t(),p();try{c=await _("/jobs",{id:L,prompt:h,name:m||"我的新衣服"}),await f()}catch(v){l=!1,d=v.message,delete g().pendingDesign,t(),p()}}if(T==="accept"&&(c==null?void 0:c.status)==="ready"){const L=e();if(L.coins<yi)return;(E=g()).customOutfits??(E.customOutfits=[]),g().customOutfits.some(v=>v.id===c.id)||(L.coins-=yi,g().customOutfits.push({id:c.id,name:c.name||"我的新衣服",prompt:c.prompt,standing:c.standing,reading:c.reading})),g().activeCustom=c.id,delete g().pendingDesign,t(),M(),s()}T==="again"&&(c=null,delete g().pendingDesign,t(),p())}),{open:w,get opened(){return a.open}}}function Hl(n,e){const t=n.textContent;e.startsWith(t)||n.replaceChildren();const i=e.slice(n.textContent.length),r=document.createDocumentFragment();for(const[s,a]of Array.from(i).entries()){const o=document.createElement("span");o.className="stream-text-reveal",o.textContent=a,o.style.animationDelay=Math.min(s*12,72)+"ms",r.append(o)}n.append(r)}function Vl(n){n==null||n.querySelectorAll(".stream-text-reveal").forEach(e=>{e.classList.remove("stream-text-reveal"),e.style.animationDelay=""})}async function*Id(n){const e=n.getReader(),t=new TextDecoder;let i="";try{for(;;){const{done:r,value:s}=await e.read();i+=t.decode(s,{stream:!r});let a;for(;(a=i.indexOf(`
`))>=0;)yield i.slice(0,a).replace(/\r$/,""),i=i.slice(a+1);if(r){i&&(yield i);break}}}finally{await e.cancel().catch(()=>{}),e.releaseLock()}}async function Gl(n,e){var t;if(!n.ok||!((t=n.headers.get("content-type"))!=null&&t.includes("application/x-ndjson"))){const i=await n.json();if(!n.ok)throw new Error(i.error||"连接没有完成，请重试。");return i}for await(const i of Id(n.body)){if(!i.trim())continue;const r=JSON.parse(i);if(r.type==="text"&&e(r.dialogue),r.type==="error")throw new Error(r.error);if(r.type==="done")return r.reply}throw new Error("回复中断了，请重试；输入内容已保留。")}const Ud="https://sjktg7i6ngh4etmcagt01.apigateway-cn-beijing.volceapi.com/api/companion";function Nd({dialog:n,getState:e,save:t,cg:i,onEnd:r}){const s=n.querySelector("#cg-chat-form"),a=n.querySelector("#cg-chat-input"),o=n.querySelector("#cg-chat-status"),c=n.querySelector("#cg-responses"),l=()=>{a.style.height="auto",a.style.height=a.scrollHeight+"px"};a.addEventListener("input",l);const u=e(),d={id:crypto.randomUUID(),title:i.name+" · 对话",activity:i.activity,kind:"branch",cg:i.id,day:u.day,slot:u.slot,createdAt:new Date().toISOString(),messages:[]};let h=null,m=!1;const g={magic:["先停下咒语，观察叶子的反应。","别着急，我们一起找找书里的办法。"],baking:["不必做得完美，我想听听你的心意。","我们一起看看，是哪里让你犹豫了？"],shop:["先看看纸上写了什么。","刚才的客人是不是落下什么了？"],explore:["先看看是什么挡住了路。","听听附近的动静，别急着过去。"],bond:["这一页，是有什么让你在意吗？","不用赶，我陪你慢慢读。"],festival:["你手里拿着的，是准备送人的礼物吗？","不着急，我们找个安静的地方说。"]},_={magic:"把今天学到的记好，我们回家吧。",baking:"把甜点装好，我们一起收拾厨房吧。",shop:"收好今天的心意，我们打烊回家吧。",explore:"记住这条小路，我们一起回家吧。",bond:"把这页夹好，我们休息一会儿吧。",festival:"把这片秋叶收好，我们一起回家吧。"};function p(M){c.replaceChildren();const y=d.messages.filter(T=>T.role==="user").length>=4;for(const T of[y?_[i.id]:M[0]]){const E=document.createElement("button");E.type="button",E.className="cg-response",E.textContent=T,E.setAttribute("aria-label",T),E.onclick=()=>{if(y){d.messages.push({role:"user",content:T}),d.ended=!0,d.updatedAt=new Date().toISOString();const L=e().memories.findIndex(v=>v.id===d.id);L>=0&&(e().memories[L]=structuredClone(d)),t(),r()}else w(null,T)},c.append(E)}const A=document.createElement("button");A.type="button",A.className="cg-custom-response",A.innerHTML='<svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true"><path d="M3 3.5h14v10H9l-4 3v-3H3z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M6 7h8M6 10h5" stroke="currentColor" stroke-width="1.2"/></svg><span>其他</span>',A.onclick=()=>{c.hidden=!0,s.hidden=!1,l(),a.focus()},c.append(A),c.hidden=!1,s.hidden=!0}function f(M,y){const A=n.querySelector("#cg-line");for(const T of[...A.childNodes])T.nodeType===3&&T.remove();for(const[T,E]of[["narration",M],["dialogue",y]]){let L=A.querySelector(".cg-"+T);if(!E){L==null||L.remove();continue}L||(L=document.createElement("span"),L.className="cg-"+T,T==="narration"?A.prepend(L):A.append(L)),L.textContent!==E&&(L.textContent=E)}}f(i.lines[0]),p(g[i.id]),n.querySelector("#cg-custom-cancel").onclick=()=>{s.hidden=!0,c.hidden=!1};async function w(M,y){var L;M==null||M.preventDefault();const A=y??a.value.trim();if(!A||h)return;const T=n.querySelector("#cg-line").innerHTML;let E=null;h=new AbortController,n.querySelectorAll("#cg-responses button,#cg-chat-form button").forEach(v=>v.disabled=!0),a.readOnly=!0,o.textContent="松团子正在回应…";try{const v=e(),S=await fetch(Ud+"/chat",{method:"POST",headers:{"Content-Type":"application/json"},signal:h.signal,body:JSON.stringify({stream:!0,messages:[...d.messages.slice(-30),{role:"user",content:A}],context:{activity:i.activity,day:v.day,slot:v.slot,cg:{id:i.id,title:i.name,costume:i.costume,lines:[i.lines[0]],outline:i.lines,currentLine:n.querySelector("#cg-line").textContent,interactive:!0},memories:(v.memories??[]).slice(-12).map(({title:O,summary:D})=>({title:O,summary:D}))}})}),C=await Gl(S,O=>{var D;!m&&!h.signal.aborted&&(E||(f((D=n.querySelector(".cg-narration"))==null?void 0:D.textContent," "),E=n.querySelector(".cg-dialogue"),E.replaceChildren()),Hl(E,O))});if(!S.ok)throw new Error(C.error||"暂时未能连接，请重试。");if(m)return;if(!Array.isArray(C.choices)||C.choices.length!==2)throw new Error("剧情反馈未完整生成，请重试。");d.messages.push({role:"user",content:A},{role:"assistant",content:[C.narration,C.dialogue].filter(Boolean).join(`
`)}),d.summary=((L=C.event)==null?void 0:L.summary)||[C.narration,C.dialogue].filter(Boolean).join(" "),d.updatedAt=new Date().toISOString(),C.event&&(d.event=C.event),v.memories??(v.memories=[]);const N=v.memories.findIndex(O=>O.id===d.id);N<0?v.memories.push(structuredClone(d)):v.memories[N]=structuredClone(d),t(),Vl(E),f(C.narration,C.dialogue),a.value="",p(C.choices),o.textContent="剧情已记入手记"}catch(v){v.name!=="AbortError"&&!m&&(n.querySelector("#cg-line").innerHTML=T,o.textContent=v.message)}finally{h=null,m||(n.querySelectorAll("#cg-responses button,#cg-chat-form button").forEach(v=>v.disabled=!1),a.readOnly=!1)}}return s.addEventListener("submit",w),{dispose(){m=!0,h==null||h.abort(),s.removeEventListener("submit",w)}}}function $l(n,e){const t=e.getBoundingClientRect(),i=Math.min(820,innerHeight-48),r=Math.min(500,innerWidth-32,i*.7);n.style.setProperty("--book-left",`${Math.max(16,Math.min(innerWidth-r-16,t.left+t.width/2-r/2))}px`),n.style.setProperty("--book-top",`${(innerHeight-i)/2}px`),n.style.setProperty("--book-width",`${r}px`),n.style.setProperty("--book-height",`${i}px`)}const Oa=n=>`<header class="storybook-heading"><small>与她一起生活的日子</small><h2>${n==="stories"?"角色故事":"手记"}</h2><button class="book-close" data-co="close" aria-label="${n==="stories"?"合上故事书":"合上手记"}">×</button></header>`,Wl={magic:"50% 44%",baking:"50% 38%",shop:"50% 37%",explore:"50% 45%",bond:"50% 35%",festival:"50% 37%"},Pr=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Jn=n=>`/acorn-witch-atelier/assets/rewards/${n}.webp`;function Fd({game:n,getState:e,save:t,refresh:i,pause:r,world:s,onWear:a,onRecipes:o}){const c=document.createElement("dialog");c.id="rewards-dialog",n.append(c);const l=document.createElement("button");l.id="home-pet",l.hidden=!0,l.type="button",n.append(l);let u=Oi[0].id,d="album",h=!1,m=null,g=null,_=null;const p=()=>vn(e());function f(){if(g){const P=n.getBoundingClientRect();for(const[I,B]of Object.entries({left:P.left,top:P.top,width:P.width,height:P.height}))c.style.setProperty(`--book-${I}`,`${B}px`)}else $l(c,n)}function w(){f(),c.open||(c.showModal(),r(!0)),n.dataset.collection="open"}function M(){if(h)return;_==null||_.dispose(),_=null,g&&p().cgs.includes(g)&&!p().seen.includes(g)&&(p().seen.push(g),t()),c.close(),delete n.dataset.collection,r(!1),g=null;const P=m;m=null,i(),P==null||P()}window.addEventListener("resize",()=>{c.open&&f()}),c.addEventListener("cancel",P=>{P.preventDefault(),M()});const y=(P,I,B="",k="")=>`<button class="button" data-reward="${I}" data-id="${B}" ${k}>${P}</button>`;function A(P,I){w(),c.className="collection-page",c.dataset.tab=d,c.innerHTML=`<header class="collection-header"><div><small>松团子的秋日收藏</small><h2>${P}</h2></div><button data-reward="close" aria-label="关闭收藏">×</button></header>${d==="wheel"?"":`<nav class="collection-tabs" aria-label="收藏分类">${[["album","剧情相册"],["pets","宠物册"]].map(([B,k])=>`<button data-reward="tab" data-id="${B}" aria-pressed="${d===B}">${k}</button>`).join("")}</nav>`}<div class="collection-body">${I}</div>`}function T(){d="album";const P=p().cgs;A("CG 相册",`<p class="collection-intro">学习与相处，会把新的故事带到身边。<br>松团子好感 <b>${p().bond}</b> · 已收录 ${P.length} / ${Vn.length}</p><div class="cg-grid">${Vn.map(I=>`<button class="cg-card ${P.includes(I.id)?"":"locked"}" data-reward="cg" data-id="${I.id}" style="--cg-focus:${Wl[I.id]}" ${P.includes(I.id)?"":"disabled"}><div><img src="${Jn("cg-"+I.id)}" alt="${P.includes(I.id)?I.name:"未解锁剧情剪影"}">${P.includes(I.id)?"<span>▷ 重温</span>":"<span>尚未遇见</span>"}</div><b>${I.name}</b><small>${P.includes(I.id)?I.costume:I.condition}</small></button>`).join("")}</div><p class="collection-note">参加秋日祭即可获得祭典 CG，庆典后生活继续。</p>`)}function E(P,I=!1){return P.type==="pet"?`<img src="${Jn("cat-"+P.item)}" alt="${P.name}">`:P.type==="part"?`<img src="${Jn("part-"+P.item)}" alt="${P.name}">`:P.type==="outfit"?`<img src="${s.getOutfitPreview(P.item,I)}" alt="${P.name}">`:`<span class="wheel-symbol">${P.type==="coins"?"◈":"♧"}</span>`}function L(){d="wheel";const P=e();Oi.find(B=>B.id===u);const I=Fa(P,u);A("秋日幸运轮盘",`<label class="pool-select">本期收藏<select id="wheel-pool" aria-label="选择轮盘主题">${Oi.map(B=>`<option value="${B.id}" ${B.id===u?"selected":""}>${B.name}</option>`).join("")}</select></label><div class="wheel-balance">◈ ${P.coins} <small>每次 ${Bi} 金币</small></div><div class="wheel-stage"><div class="wheel-pointer">▼</div><div class="reward-wheel" style="--count:${Math.max(I.length,1)}">${I.map((B,k)=>`<div class="wheel-prize" style="--angle:${k*360/I.length}deg"><div>${E(B)}<small>${B.name}</small></div></div>`).join("")}<div class="wheel-center">✦</div></div></div><p class="wheel-status" role="status">${I.length?`剩余 ${I.length} 件 · 每件概率 ${(100/I.length).toFixed(2)}%`:"这期收藏齐了，看看别的主题吧。"}</p><div class="wheel-cta">${y(`转一次 · ${Bi} ◈`,"spin","",!I.length||P.coins<Bi?"disabled":"")}</div><p class="collection-note">不重复获得 · 抽中即得<br>集齐本期最多还需 ${I.length*Bi} 金币</p>`)}function v(P){c.className="collection-page reward-reveal",c.innerHTML=`<header class="collection-header"><small>这份小惊喜，属于你了</small><button data-reward="close" aria-label="关闭奖励">×</button></header><div class="reveal-content"><span class="reveal-spark">✦</span><div class="reveal-art">${E(P,!0)}</div><h2>${P.name}</h2><p>${{pet:"一位新朋友，来小屋住下啦。",part:"已放进衣柜，可以自由搭配。",outfit:"整套穿搭已放进衣柜。",menu:"已经学会，可以去厨房制作，再到小铺售卖。",coins:"已放进你的钱袋。"}[P.type]}</p><div class="reveal-actions">${P.type==="pet"?y("认识它","pet",P.item):P.type==="part"||P.type==="outfit"?y("去试衣间","wear"):P.type==="menu"?y("看看新菜单","recipes"):""}${y("继续看轮盘","wheel")}</div></div>`}function S(){if(h)return;let P;const I=Fa(e(),u);try{P=Pd(e(),u,crypto.getRandomValues(new Uint32Array(1))[0]/4294967296)}catch(W){c.querySelector(".wheel-status").textContent=W.message;return}t(),i(),h=!0,c.querySelectorAll("button,select").forEach(W=>W.disabled=!0),c.querySelector(".wheel-status").textContent="指针慢慢停下来了…";const B=I.findIndex(W=>W.id===P.id),k=c.querySelector(".reward-wheel");k.style.transform=`rotate(${1800-B*360/I.length}deg)`,setTimeout(()=>{h=!1,v(P)},matchMedia("(prefers-reduced-motion: reduce)").matches?50:2400)}function C(){d="pets",A("小屋里的毛茸茸",`<p class="collection-intro">已结识 ${p().pets.length} / ${Fi.length} 位朋友<br>点击已拥有的猫咪，起名、互动或带回主页。</p><div class="pet-grid">${Fi.map(P=>`<button class="pet-card ${p().pets.includes(P.id)?"":"unowned"}" data-reward="pet" data-id="${P.id}"><img src="${Jn("cat-"+P.id)}" alt="${P.name}"><b>${Pr(p().petNames[P.id]||P.name)}</b><small>${p().activePet===P.id?"正在陪伴":p().pets.includes(P.id)?"已结识":"轮盘可获得"}</small></button>`).join("")}</div>`)}function N(P){const I=Fi.find(k=>k.id===P);if(!I)return;const B=p().pets.includes(P);d="pets",A(I.name,`<div class="pet-detail"><img class="pet-large" src="${Jn("cat-"+P)}" alt="${I.name}"><p>${I.look}</p><p class="pet-dialogue">松团子：「${I.line}」</p>${B?`<label>名字<input id="pet-name" maxlength="12" value="${Pr(p().petNames[P]||"")}" placeholder="${I.name}" autocomplete="off"></label><div class="pet-actions">${y("改名","pet-name",P)}${y(p().activePet===P?"休息":"带回",p().activePet===P?"pet-rest":"pet-equip",P)}${y("互动","pet-touch",P,`aria-label="${I.action}"`)}</div><p id="pet-reply" role="status"></p><small>已互动 ${p().petInteractions[P]??0} 次 · 不需要强制喂养</small>`:`<p>在「${Oi.find(k=>k.cats.includes(P)).name}」轮盘结识它。</p>${y("去看看轮盘","pet-pool",P)}`}</div>`)}function O(P,I=null){const B=Vn.find(k=>k.id===P);!B||!p().cgs.includes(P)||(m=I,g=P,w(),c.className="cg-player",c.innerHTML=`<img class="cg-full" src="${Jn("cg-"+P)}" alt="${Pr(B.name)}"><div class="cg-motes" aria-hidden="true">${Array.from({length:10},(k,W)=>`<i style="--i:${W}">✧</i>`).join("")}</div><header class="cg-heading"><span>奇遇 · ${Pr(B.name)}</span><div class="cg-share-tools"><button data-reward="cg-share" data-id="${B.id}" aria-label="分享奇遇"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16V3m-5 5 5-5 5 5M5 13v7h14v-7"/></svg></button><button data-reward="cg-exit" aria-label="稍后重看"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg></button></div></header><div class="cg-caption"><small>松团子 · ${B.costume}</small><p id="cg-line"></p><div id="cg-responses" aria-label="选择你的反馈"></div><form id="cg-chat-form" hidden><label class="cg-input-label" for="cg-chat-input">和松团子聊聊</label><textarea id="cg-chat-input" rows="1" maxlength="1000" autocomplete="off" placeholder="想对她说些什么…"></textarea><button type="submit">发送</button><button type="button" id="cg-custom-cancel">收起</button></form><p id="cg-chat-status" role="status"></p></div>`,c.querySelector("#cg-line").textContent=B.lines[0],_=Nd({dialog:c,getState:e,save:t,cg:B,onEnd:M}))}function D(P){const I=p().activePet;if(l.hidden=!P||!I,!I)return;const B=Fi.find(k=>k.id===I);B&&(l.dataset.id!==I&&(l.dataset.id=I,l.innerHTML=`<img src="${Jn("cat-"+I)}" alt="">`),l.setAttribute("aria-label",`和${p().petNames[I]||B.name}互动`))}return l.onclick=()=>N(p().activePet),c.addEventListener("change",P=>{P.target.id==="wheel-pool"&&(u=P.target.value,L())}),c.addEventListener("click",P=>{const I=P.target.closest("[data-reward]");if(!I||I.disabled||h)return;const B=I.dataset.reward,k=I.dataset.id;if(B==="cg-share"&&Ul(Vn.find(W=>W.id===k),e()).catch(W=>{c.querySelector("#cg-chat-status").textContent=W.message}),(B==="close"||B==="cg-exit")&&M(),B==="tab"&&{album:T,pets:C}[k](),B==="wheel"&&L(),B==="spin"&&S(),B==="cg"&&O(k),B==="pet"&&N(k),B==="pet-pool"&&(u=Oi.find(W=>W.cats.includes(k)).id,L()),B==="pet-rest"&&(p().activePet=null,t(),i(),N(k)),B==="pet-equip"&&p().pets.includes(k)&&(p().activePet=k,t(),M()),B==="pet-name"&&p().pets.includes(k)&&(p().petNames[k]=c.querySelector("#pet-name").value.trim().slice(0,12),t(),c.querySelector("#pet-reply").textContent="记住这个名字啦。"),B==="pet-touch"&&p().pets.includes(k)){p().petInteractions[k]=(p().petInteractions[k]??0)+1,t(),c.querySelector("#pet-reply").textContent=Fi.find(fe=>fe.id===k).reply;const W=c.querySelector(".pet-large");W.classList.remove("pet-nuzzle"),W.offsetWidth,W.classList.add("pet-nuzzle")}B==="wear"&&(M(),a()),B==="recipes"&&(M(),o())}),{album:T,wheel:L,pets:C,playCG:O,updatePet:D,get opened(){return c.open}}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const No="180",Od=0,Cc=1,Bd=2,ql=1,kd=2,wn=3,Yn=0,Bt=1,An=2,qn=0,Vi=1,Rc=2,Pc=3,Lc=4,zd=5,oi=100,Hd=101,Vd=102,Gd=103,$d=104,Wd=200,qd=201,Xd=202,Yd=203,Ba=204,ka=205,jd=206,Kd=207,Zd=208,Jd=209,Qd=210,ef=211,tf=212,nf=213,rf=214,za=0,Ha=1,Va=2,Xi=3,Ga=4,$a=5,Wa=6,qa=7,Xl=0,sf=1,af=2,Xn=0,of=1,cf=2,lf=3,uf=4,df=5,ff=6,hf=7,Yl=300,Yi=301,ji=302,Xa=303,Ya=304,vs=306,ja=1e3,li=1001,Ka=1002,cn=1003,pf=1004,Lr=1005,Jt=1006,Zs=1007,ui=1008,Pn=1009,jl=1010,Kl=1011,hr=1012,Fo=1013,hi=1014,Cn=1015,xr=1016,Oo=1017,Bo=1018,pr=1020,Zl=35902,Jl=35899,Ql=1021,eu=1022,on=1023,mr=1026,gr=1027,tu=1028,ko=1029,nu=1030,zo=1031,Ho=1033,rs=33776,ss=33777,as=33778,os=33779,Za=35840,Ja=35841,Qa=35842,eo=35843,to=36196,no=37492,io=37496,ro=37808,so=37809,ao=37810,oo=37811,co=37812,lo=37813,uo=37814,fo=37815,ho=37816,po=37817,mo=37818,go=37819,_o=37820,vo=37821,xo=36492,yo=36494,So=36495,Mo=36283,bo=36284,Eo=36285,To=36286,mf=3200,gf=3201,_f=0,vf=1,Hn="",vt="srgb",Ki="srgb-linear",ps="linear",st="srgb",Si=7680,Dc=519,xf=512,yf=513,Sf=514,iu=515,Mf=516,bf=517,Ef=518,Tf=519,Ic=35044,Uc="300 es",gn=2e3,ms=2001;class Qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Js=Math.PI/180,wo=180/Math.PI;function yr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function wf(n,e){return(n%e+e)%e}function Qs(n,e,t){return(1-t)*n+t*e}function rr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Sr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const h=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==h||l!==m||u!==g){let p=1-o;const f=c*h+l*m+u*g+d*_,w=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const A=Math.sqrt(M),T=Math.atan2(A,f*w);p=Math.sin(p*T)/A,o=Math.sin(o*T)/A}const y=o*w;if(c=c*p+h*y,l=l*p+m*y,u=u*p+g*y,d=d*p+_*y,p===1-o){const A=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=A,l*=A,u*=A,d*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[a],h=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*d+c*m-l*h,e[t+1]=c*g+u*h+l*d-o*m,e[t+2]=l*g+u*m+o*h-c*d,e[t+3]=u*g-o*d-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),d=o(s/2),h=c(i/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"YZX":this._x=h*u*d+l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d-h*m*g;break;case"XZY":this._x=h*u*d-l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+c*l+a*d-o*u,this.y=i+c*u+o*l-s*d,this.z=r+c*d+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ea.copy(this).projectOnVector(e),this.sub(ea)}reflect(e){return this.sub(ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ea=new X,Nc=new Sr;class $e{constructor(e,t,i,r,s,a,o,c,l){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],m=i[5],g=i[8],_=r[0],p=r[3],f=r[6],w=r[1],M=r[4],y=r[7],A=r[2],T=r[5],E=r[8];return s[0]=a*_+o*w+c*A,s[3]=a*p+o*M+c*T,s[6]=a*f+o*y+c*E,s[1]=l*_+u*w+d*A,s[4]=l*p+u*M+d*T,s[7]=l*f+u*y+d*E,s[2]=h*_+m*w+g*A,s[5]=h*p+m*M+g*T,s[8]=h*f+m*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,h=o*c-u*s,m=l*s-a*c,g=t*d+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*l-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=h*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=m*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ta.makeScale(e,t)),this}rotate(e){return this.premultiply(ta.makeRotation(-e)),this}translate(e,t){return this.premultiply(ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ta=new $e;function ru(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _r(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Af(){const n=_r("canvas");return n.style.display="block",n}const Fc={};function vr(n){n in Fc||(Fc[n]=!0,console.warn(n))}function Cf(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Oc=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bc=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rf(){const n={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=Rn(r.r),r.g=Rn(r.g),r.b=Rn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=Gi(r.r),r.g=Gi(r.g),r.b=Gi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Hn?ps:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return vr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return vr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ki]:{primaries:e,whitePoint:i,transfer:ps,toXYZ:Oc,fromXYZ:Bc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:i,transfer:st,toXYZ:Oc,fromXYZ:Bc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),n}const Je=Rf();function Rn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Gi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Mi;class Pf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Mi===void 0&&(Mi=_r("canvas")),Mi.width=e.width,Mi.height=e.height;const r=Mi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Mi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_r("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Rn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Rn(t[i]/255)*255):t[i]=Rn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lf=0;class Vo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=yr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(na(r[a].image)):s.push(na(r[a]))}else s=na(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function na(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Df=0;const ia=new X;class wt extends Qi{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,i=li,r=li,s=Jt,a=ui,o=on,c=Pn,l=wt.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=yr(),this.name="",this.source=new Vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ia).x}get height(){return this.source.getSize(ia).y}get depth(){return this.source.getSize(ia).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ja:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case Ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ja:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case Ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Yl;wt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,i=0,r=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],m=c[5],g=c[9],_=c[2],p=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,y=(m+1)/2,A=(f+1)/2,T=(u+h)/4,E=(d+_)/4,L=(g+p)/4;return M>y&&M>A?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=T/i,s=E/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=L/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=E/s,r=L/s),this.set(i,r,s,t),this}let w=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(d-_)/w,this.z=(h-u)/w,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class If extends Qi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new wt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Vo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends If{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class su extends wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uf extends wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,en):en.fromBufferAttribute(s,a),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dr.copy(i.boundingBox)),Dr.applyMatrix4(e.matrixWorld),this.union(Dr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),Ir.subVectors(this.max,sr),bi.subVectors(e.a,sr),Ei.subVectors(e.b,sr),Ti.subVectors(e.c,sr),Nn.subVectors(Ei,bi),Fn.subVectors(Ti,Ei),Qn.subVectors(bi,Ti);let t=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Qn.z,Qn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Qn.z,0,-Qn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Qn.y,Qn.x,0];return!ra(t,bi,Ei,Ti,Ir)||(t=[1,0,0,0,1,0,0,0,1],!ra(t,bi,Ei,Ti,Ir))?!1:(Ur.crossVectors(Nn,Fn),t=[Ur.x,Ur.y,Ur.z],ra(t,bi,Ei,Ti,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yn=[new X,new X,new X,new X,new X,new X,new X,new X],en=new X,Dr=new Mr,bi=new X,Ei=new X,Ti=new X,Nn=new X,Fn=new X,Qn=new X,sr=new X,Ir=new X,Ur=new X,ei=new X;function ra(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ei.fromArray(n,s);const o=r.x*Math.abs(ei.x)+r.y*Math.abs(ei.y)+r.z*Math.abs(ei.z),c=e.dot(ei),l=t.dot(ei),u=i.dot(ei);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Nf=new Mr,ar=new X,sa=new X;class xs{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Nf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);const t=ar.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ar,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(sa)),this.expandByPoint(ar.copy(e.center).sub(sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Sn=new X,aa=new X,Nr=new X,On=new X,oa=new X,Fr=new X,ca=new X;class au{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){aa.copy(e).add(t).multiplyScalar(.5),Nr.copy(t).sub(e).normalize(),On.copy(this.origin).sub(aa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Nr),o=On.dot(this.direction),c=-On.dot(Nr),l=On.lengthSq(),u=Math.abs(1-a*a);let d,h,m,g;if(u>0)if(d=a*c-o,h=a*o-c,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,m=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+h*(h+2*c)+l);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(aa).addScaledVector(Nr,h),m}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const i=Sn.dot(this.direction),r=Sn.dot(Sn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,i,r,s){oa.subVectors(t,e),Fr.subVectors(i,e),ca.crossVectors(oa,Fr);let a=this.direction.dot(ca),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;On.subVectors(this.origin,e);const c=o*this.direction.dot(Fr.crossVectors(On,Fr));if(c<0)return null;const l=o*this.direction.dot(oa.cross(On));if(l<0||c+l>a)return null;const u=-o*On.dot(ca);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,i,r,s,a,o,c,l,u,d,h,m,g,_,p){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,d,h,m,g,_,p)}set(e,t,i,r,s,a,o,c,l,u,d,h,m,g,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/wi.setFromMatrixColumn(e,0).length(),s=1/wi.setFromMatrixColumn(e,1).length(),a=1/wi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*d,g=o*u,_=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=h-_*l,t[9]=-o*c,t[2]=_-h*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,m=c*d,g=l*u,_=l*d;t[0]=h+_*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=_+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,m=c*d,g=l*u,_=l*d;t[0]=h-_*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,m=a*d,g=o*u,_=o*d;t[0]=c*u,t[4]=g*l-m,t[8]=h*l+_,t[1]=c*d,t[5]=_*l+h,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-h*d,t[8]=g*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+_,t[5]=a*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ff,e,Of)}lookAt(e,t,i){const r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Bn.crossVectors(i,Vt),Bn.lengthSq()===0&&(Math.abs(i.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Bn.crossVectors(i,Vt)),Bn.normalize(),Or.crossVectors(Vt,Bn),r[0]=Bn.x,r[4]=Or.x,r[8]=Vt.x,r[1]=Bn.y,r[5]=Or.y,r[9]=Vt.y,r[2]=Bn.z,r[6]=Or.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],m=i[13],g=i[2],_=i[6],p=i[10],f=i[14],w=i[3],M=i[7],y=i[11],A=i[15],T=r[0],E=r[4],L=r[8],v=r[12],S=r[1],C=r[5],N=r[9],O=r[13],D=r[2],P=r[6],I=r[10],B=r[14],k=r[3],W=r[7],fe=r[11],xe=r[15];return s[0]=a*T+o*S+c*D+l*k,s[4]=a*E+o*C+c*P+l*W,s[8]=a*L+o*N+c*I+l*fe,s[12]=a*v+o*O+c*B+l*xe,s[1]=u*T+d*S+h*D+m*k,s[5]=u*E+d*C+h*P+m*W,s[9]=u*L+d*N+h*I+m*fe,s[13]=u*v+d*O+h*B+m*xe,s[2]=g*T+_*S+p*D+f*k,s[6]=g*E+_*C+p*P+f*W,s[10]=g*L+_*N+p*I+f*fe,s[14]=g*v+_*O+p*B+f*xe,s[3]=w*T+M*S+y*D+A*k,s[7]=w*E+M*C+y*P+A*W,s[11]=w*L+M*N+y*I+A*fe,s[15]=w*v+M*O+y*B+A*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15];return g*(+s*c*d-r*l*d-s*o*h+i*l*h+r*o*m-i*c*m)+_*(+t*c*m-t*l*h+s*a*h-r*a*m+r*l*u-s*c*u)+p*(+t*l*d-t*o*m-s*a*d+i*a*m+s*o*u-i*l*u)+f*(-r*o*u-t*c*d+t*o*h+r*a*d-i*a*h+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],w=d*p*l-_*h*l+_*c*m-o*p*m-d*c*f+o*h*f,M=g*h*l-u*p*l-g*c*m+a*p*m+u*c*f-a*h*f,y=u*_*l-g*d*l+g*o*m-a*_*m-u*o*f+a*d*f,A=g*d*c-u*_*c-g*o*h+a*_*h+u*o*p-a*d*p,T=t*w+i*M+r*y+s*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=w*E,e[1]=(_*h*s-d*p*s-_*r*m+i*p*m+d*r*f-i*h*f)*E,e[2]=(o*p*s-_*c*s+_*r*l-i*p*l-o*r*f+i*c*f)*E,e[3]=(d*c*s-o*h*s-d*r*l+i*h*l+o*r*m-i*c*m)*E,e[4]=M*E,e[5]=(u*p*s-g*h*s+g*r*m-t*p*m-u*r*f+t*h*f)*E,e[6]=(g*c*s-a*p*s-g*r*l+t*p*l+a*r*f-t*c*f)*E,e[7]=(a*h*s-u*c*s+u*r*l-t*h*l-a*r*m+t*c*m)*E,e[8]=y*E,e[9]=(g*d*s-u*_*s-g*i*m+t*_*m+u*i*f-t*d*f)*E,e[10]=(a*_*s-g*o*s+g*i*l-t*_*l-a*i*f+t*o*f)*E,e[11]=(u*o*s-a*d*s-u*i*l+t*d*l+a*i*m-t*o*m)*E,e[12]=A*E,e[13]=(u*_*r-g*d*r+g*i*h-t*_*h-u*i*p+t*d*p)*E,e[14]=(g*o*r-a*_*r-g*i*c+t*_*c+a*i*p-t*o*p)*E,e[15]=(a*d*r-u*o*r+u*i*c-t*d*c-a*i*h+t*o*h)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,d=o+o,h=s*l,m=s*u,g=s*d,_=a*u,p=a*d,f=o*d,w=c*l,M=c*u,y=c*d,A=i.x,T=i.y,E=i.z;return r[0]=(1-(_+f))*A,r[1]=(m+y)*A,r[2]=(g-M)*A,r[3]=0,r[4]=(m-y)*T,r[5]=(1-(h+f))*T,r[6]=(p+w)*T,r[7]=0,r[8]=(g+M)*E,r[9]=(p-w)*E,r[10]=(1-(h+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=wi.set(r[0],r[1],r[2]).length();const a=wi.set(r[4],r[5],r[6]).length(),o=wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],tn.copy(this);const l=1/s,u=1/a,d=1/o;return tn.elements[0]*=l,tn.elements[1]*=l,tn.elements[2]*=l,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=d,tn.elements[9]*=d,tn.elements[10]*=d,t.setFromRotationMatrix(tn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=gn,c=!1){const l=this.elements,u=2*s/(t-e),d=2*s/(i-r),h=(t+e)/(t-e),m=(i+r)/(i-r);let g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===gn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ms)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=gn,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-r),h=-(t+e)/(t-e),m=-(i+r)/(i-r);let g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===gn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===ms)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const wi=new X,tn=new xt,Ff=new X(0,0,0),Of=new X(1,1,1),Bn=new X,Or=new X,Vt=new X,kc=new xt,zc=new Sr;class Ln{constructor(e=0,t=0,i=0,r=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return kc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zc.setFromEuler(this),this.setFromQuaternion(zc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class ou{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bf=0;const Hc=new X,Ai=new Sr,Mn=new xt,Br=new X,or=new X,kf=new X,zf=new Sr,Vc=new X(1,0,0),Gc=new X(0,1,0),$c=new X(0,0,1),Wc={type:"added"},Hf={type:"removed"},Ci={type:"childadded",child:null},la={type:"childremoved",child:null};class kt extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new X,t=new Ln,i=new Sr,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new $e}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(Vc,e)}rotateY(e){return this.rotateOnAxis(Gc,e)}rotateZ(e){return this.rotateOnAxis($c,e)}translateOnAxis(e,t){return Hc.copy(e).applyQuaternion(this.quaternion),this.position.add(Hc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vc,e)}translateY(e){return this.translateOnAxis(Gc,e)}translateZ(e){return this.translateOnAxis($c,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Br.copy(e):Br.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(or,Br,this.up):Mn.lookAt(Br,or,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),Ai.setFromRotationMatrix(Mn),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wc),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hf),la.child=e,this.dispatchEvent(la),la.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wc),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,kf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,zf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new X(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new X,bn=new X,ua=new X,En=new X,Ri=new X,Pi=new X,qc=new X,da=new X,fa=new X,ha=new X,pa=new mt,ma=new mt,ga=new mt;class an{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),nn.subVectors(e,t),r.cross(nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){nn.subVectors(r,t),bn.subVectors(i,t),ua.subVectors(e,t);const a=nn.dot(nn),o=nn.dot(bn),c=nn.dot(ua),l=bn.dot(bn),u=bn.dot(ua),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(l*c-o*u)*h,g=(a*u-o*c)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,En)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,En.x),c.addScaledVector(a,En.y),c.addScaledVector(o,En.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return pa.setScalar(0),ma.setScalar(0),ga.setScalar(0),pa.fromBufferAttribute(e,t),ma.fromBufferAttribute(e,i),ga.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(pa,s.x),a.addScaledVector(ma,s.y),a.addScaledVector(ga,s.z),a}static isFrontFacing(e,t,i,r){return nn.subVectors(i,t),bn.subVectors(e,t),nn.cross(bn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),nn.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return an.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ri.subVectors(r,i),Pi.subVectors(s,i),da.subVectors(e,i);const c=Ri.dot(da),l=Pi.dot(da);if(c<=0&&l<=0)return t.copy(i);fa.subVectors(e,r);const u=Ri.dot(fa),d=Pi.dot(fa);if(u>=0&&d<=u)return t.copy(r);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Ri,a);ha.subVectors(e,s);const m=Ri.dot(ha),g=Pi.dot(ha);if(g>=0&&m<=g)return t.copy(s);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Pi,o);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return qc.subVectors(s,r),o=(d-u)/(d-u+(m-g)),t.copy(r).addScaledVector(qc,o);const f=1/(p+_+h);return a=_*f,o=h*f,t.copy(i).addScaledVector(Ri,a).addScaledVector(Pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},kr={h:0,s:0,l:0};function _a(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class it{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=wf(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=_a(a,s,e+1/3),this.g=_a(a,s,e),this.b=_a(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=vt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const i=cu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rn(e.r),this.g=Rn(e.g),this.b=Rn(e.b),this}copyLinearToSRGB(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return Je.workingToColorSpace(Ct.copy(this),e),Math.round(je(Ct.r*255,0,255))*65536+Math.round(je(Ct.g*255,0,255))*256+Math.round(je(Ct.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Ct.copy(this),t);const i=Ct.r,r=Ct.g,s=Ct.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=vt){Je.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,r=Ct.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(kr);const i=Qs(kn.h,kr.h,t),r=Qs(kn.s,kr.s,t),s=Qs(kn.l,kr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new it;it.NAMES=cu;let Vf=0;class br extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=yr(),this.name="",this.type="Material",this.blending=Vi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ba,this.blendDst=ka,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(i.blending=this.blending),this.side!==Yn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ba&&(i.blendSrc=this.blendSrc),this.blendDst!==ka&&(i.blendDst=this.blendDst),this.blendEquation!==oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $t extends br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new X,zr=new nt;let Gf=0;class ln{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ic,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zr.fromBufferAttribute(this,t),zr.applyMatrix3(e),this.setXY(t,zr.x,zr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=rr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ic&&(e.usage=this.usage),e}}class lu extends ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class uu extends ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class fi extends ln{constructor(e,t,i){super(new Float32Array(e),t,i)}}let $f=0;const Kt=new xt,va=new kt,Li=new X,Gt=new Mr,cr=new Mr,Mt=new X;class In extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ru(e)?uu:lu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,i){return Kt.makeTranslation(e,t,i),this.applyMatrix4(Kt),this}scale(e,t,i){return Kt.makeScale(e,t,i),this.applyMatrix4(Kt),this}lookAt(e){return va.lookAt(e),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fi(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Gt.min,cr.min),Gt.expandByPoint(Mt),Mt.addVectors(Gt.max,cr.max),Gt.expandByPoint(Mt)):(Gt.expandByPoint(cr.min),Gt.expandByPoint(cr.max))}Gt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Mt.fromBufferAttribute(o,l),c&&(Li.fromBufferAttribute(e,l),Mt.add(Li)),r=Math.max(r,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<i.count;L++)o[L]=new X,c[L]=new X;const l=new X,u=new X,d=new X,h=new nt,m=new nt,g=new nt,_=new X,p=new X;function f(L,v,S){l.fromBufferAttribute(i,L),u.fromBufferAttribute(i,v),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,L),m.fromBufferAttribute(s,v),g.fromBufferAttribute(s,S),u.sub(l),d.sub(l),m.sub(h),g.sub(h);const C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(C),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(C),o[L].add(_),o[v].add(_),o[S].add(_),c[L].add(p),c[v].add(p),c[S].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,v=w.length;L<v;++L){const S=w[L],C=S.start,N=S.count;for(let O=C,D=C+N;O<D;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const M=new X,y=new X,A=new X,T=new X;function E(L){A.fromBufferAttribute(r,L),T.copy(A);const v=o[L];M.copy(v),M.sub(A.multiplyScalar(A.dot(v))).normalize(),y.crossVectors(T,v);const C=y.dot(c[L])<0?-1:1;a.setXYZW(L,M.x,M.y,M.z,C)}for(let L=0,v=w.length;L<v;++L){const S=w[L],C=S.start,N=S.count;for(let O=C,D=C+N;O<D;O+=3)E(e.getX(O+0)),E(e.getX(O+1)),E(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new X,s=new X,a=new X,o=new X,c=new X,l=new X,u=new X,d=new X;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*u;for(let f=0;f<u;f++)h[g++]=l[m++]}return new ln(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new In,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],m=e(h,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xc=new xt,ti=new au,Hr=new xs,Yc=new X,Vr=new X,Gr=new X,$r=new X,xa=new X,Wr=new X,jc=new X,qr=new X;class _t extends kt{constructor(e=new In,t=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Wr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],d=s[c];u!==0&&(xa.fromBufferAttribute(d,e),a?Wr.addScaledVector(xa,u):Wr.addScaledVector(xa.sub(t),u))}t.add(Wr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere),Hr.applyMatrix4(s),ti.copy(e.ray).recast(e.near),!(Hr.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Hr,Yc)===null||ti.origin.distanceToSquared(Yc)>(e.far-e.near)**2))&&(Xc.copy(s).invert(),ti.copy(e.ray).applyMatrix4(Xc),!(i.boundingBox!==null&&ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const p=h[g],f=a[p.materialIndex],w=Math.max(p.start,m.start),M=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=w,A=M;y<A;y+=3){const T=o.getX(y),E=o.getX(y+1),L=o.getX(y+2);r=Xr(this,f,e,i,l,u,d,T,E,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const w=o.getX(p),M=o.getX(p+1),y=o.getX(p+2);r=Xr(this,a,e,i,l,u,d,w,M,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const p=h[g],f=a[p.materialIndex],w=Math.max(p.start,m.start),M=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let y=w,A=M;y<A;y+=3){const T=y,E=y+1,L=y+2;r=Xr(this,f,e,i,l,u,d,T,E,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const w=p,M=p+1,y=p+2;r=Xr(this,a,e,i,l,u,d,w,M,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Wf(n,e,t,i,r,s,a,o){let c;if(e.side===Bt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Yn,o),c===null)return null;qr.copy(o),qr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(qr);return l<t.near||l>t.far?null:{distance:l,point:qr.clone(),object:n}}function Xr(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Vr),n.getVertexPosition(c,Gr),n.getVertexPosition(l,$r);const u=Wf(n,e,t,i,Vr,Gr,$r,jc);if(u){const d=new X;an.getBarycoord(jc,Vr,Gr,$r,d),r&&(u.uv=an.getInterpolatedAttribute(r,o,c,l,d,new nt)),s&&(u.uv1=an.getInterpolatedAttribute(s,o,c,l,d,new nt)),a&&(u.normal=an.getInterpolatedAttribute(a,o,c,l,d,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new X,materialIndex:0};an.getNormal(Vr,Gr,$r,h.normal),u.face=h,u.barycoord=d}return u}class Er extends In{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new fi(l,3)),this.setAttribute("normal",new fi(u,3)),this.setAttribute("uv",new fi(d,2));function g(_,p,f,w,M,y,A,T,E,L,v){const S=y/E,C=A/L,N=y/2,O=A/2,D=T/2,P=E+1,I=L+1;let B=0,k=0;const W=new X;for(let fe=0;fe<I;fe++){const xe=fe*C-O;for(let Ie=0;Ie<P;Ie++){const He=Ie*S-N;W[_]=He*w,W[p]=xe*M,W[f]=D,l.push(W.x,W.y,W.z),W[_]=0,W[p]=0,W[f]=T>0?1:-1,u.push(W.x,W.y,W.z),d.push(Ie/E),d.push(1-fe/L),B+=1}}for(let fe=0;fe<L;fe++)for(let xe=0;xe<E;xe++){const Ie=h+xe+P*fe,He=h+xe+P*(fe+1),Xe=h+(xe+1)+P*(fe+1),ke=h+(xe+1)+P*fe;c.push(Ie,He,ke),c.push(He,Xe,ke),k+=6}o.addGroup(m,k,v),m+=k,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Lt(n){const e={};for(let t=0;t<n.length;t++){const i=Zi(n[t]);for(const r in i)e[r]=i[r]}return e}function qf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function du(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Xf={clone:Zi,merge:Lt};var Yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yf,this.fragmentShader=jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zi(e.uniforms),this.uniformsGroups=qf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class fu extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new X,Kc=new nt,Zc=new nt;class sn extends fu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wo*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,Kc,Zc),t.subVectors(Zc,Kc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Js*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Di=-90,Ii=1;class Kf extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new sn(Di,Ii,e,t);r.layers=this.layers,this.add(r);const s=new sn(Di,Ii,e,t);s.layers=this.layers,this.add(s);const a=new sn(Di,Ii,e,t);a.layers=this.layers,this.add(a);const o=new sn(Di,Ii,e,t);o.layers=this.layers,this.add(o);const c=new sn(Di,Ii,e,t);c.layers=this.layers,this.add(c);const l=new sn(Di,Ii,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ms)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class hu extends wt{constructor(e=[],t=Yi,i,r,s,a,o,c,l,u){super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zf extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new hu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Er(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:Zi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:qn});s.uniforms.tEquirect.value=t;const a=new _t(r,s),o=t.minFilter;return t.minFilter===ui&&(t.minFilter=Jt),new Kf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Yr extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jf={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),f=this._getHandJoint(l,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jf)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Yr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class pu extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Sa=new X,Qf=new X,eh=new $e;class si{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Sa.subVectors(i,t).cross(Qf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Sa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||eh.getNormalMatrix(e),r=this.coplanarPoint(Sa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new xs,th=new nt(.5,.5),jr=new X;class mu{constructor(e=new si,t=new si,i=new si,r=new si,s=new si,a=new si){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],d=s[5],h=s[6],m=s[7],g=s[8],_=s[9],p=s[10],f=s[11],w=s[12],M=s[13],y=s[14],A=s[15];if(r[0].setComponents(l-a,m-u,f-g,A-w).normalize(),r[1].setComponents(l+a,m+u,f+g,A+w).normalize(),r[2].setComponents(l+o,m+d,f+_,A+M).normalize(),r[3].setComponents(l-o,m-d,f-_,A-M).normalize(),i)r[4].setComponents(c,h,p,y).normalize(),r[5].setComponents(l-c,m-h,f-p,A-y).normalize();else if(r[4].setComponents(l-c,m-h,f-p,A-y).normalize(),t===gn)r[5].setComponents(l+c,m+h,f+p,A+y).normalize();else if(t===ms)r[5].setComponents(c,h,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){ni.center.set(0,0,0);const t=th.distanceTo(e.center);return ni.radius=.7071067811865476+t,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(jr.x=r.normal.x>0?e.max.x:e.min.x,jr.y=r.normal.y>0?e.max.y:e.min.y,jr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gu extends br{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jc=new xt,Ao=new au,Kr=new xs,Zr=new X;class nh extends kt{constructor(e=new In,t=new gu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(r),Kr.radius+=s,e.ray.intersectsSphere(Kr)===!1)return;Jc.copy(r).invert(),Ao.copy(e.ray).applyMatrix4(Jc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,d=i.attributes.position;if(l!==null){const h=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=h,_=m;g<_;g++){const p=l.getX(g);Zr.fromBufferAttribute(d,p),Qc(Zr,p,c,r,e,t,this)}}else{const h=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=h,_=m;g<_;g++)Zr.fromBufferAttribute(d,g),Qc(Zr,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Qc(n,e,t,i,r,s,a){const o=Ao.distanceSqToPoint(n);if(o<t){const c=new X;Ao.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class cs extends wt{constructor(e,t,i,r,s=Jt,a=Jt,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function d(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),super.dispose()}}class dr extends wt{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _u extends wt{constructor(e,t,i=hi,r,s,a,o=cn,c=cn,l,u=mr,d=1){if(u!==mr&&u!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class vu extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Dt extends In{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,d=e/o,h=t/c,m=[],g=[],_=[],p=[];for(let f=0;f<u;f++){const w=f*h-a;for(let M=0;M<l;M++){const y=M*d-s;g.push(y,-w,0),_.push(0,0,1),p.push(M/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let w=0;w<o;w++){const M=w+l*f,y=w+l*(f+1),A=w+1+l*(f+1),T=w+1+l*f;m.push(M,y,T),m.push(y,A,T)}this.setIndex(m),this.setAttribute("position",new fi(g,3)),this.setAttribute("normal",new fi(_,3)),this.setAttribute("uv",new fi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dt(e.width,e.height,e.widthSegments,e.heightSegments)}}class ih extends br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rh extends br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ma={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class sh{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const m=l[d],g=l[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const ah=new sh;class Go{constructor(e){this.manager=e!==void 0?e:ah,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Go.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ui=new WeakMap;class oh extends Go{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ma.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=Ui.get(a);d===void 0&&(d=[],Ui.set(a,d)),d.push({onLoad:t,onError:r})}return a}const o=_r("img");function c(){u(),t&&t(this);const d=Ui.get(this)||[];for(let h=0;h<d.length;h++){const m=d[h];m.onLoad&&m.onLoad(this)}Ui.delete(this),s.manager.itemEnd(e)}function l(d){u(),r&&r(d),Ma.remove(`image:${e}`);const h=Ui.get(this)||[];for(let m=0;m<h.length;m++){const g=h[m];g.onError&&g.onError(d)}Ui.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ma.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class xu extends Go{constructor(e){super(e)}load(e,t,i,r){const s=new wt,a=new oh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class $o extends fu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ch extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function el(n,e,t,i){const r=lh(i);switch(t){case Ql:return n*e;case tu:return n*e/r.components*r.byteLength;case ko:return n*e/r.components*r.byteLength;case nu:return n*e*2/r.components*r.byteLength;case zo:return n*e*2/r.components*r.byteLength;case eu:return n*e*3/r.components*r.byteLength;case on:return n*e*4/r.components*r.byteLength;case Ho:return n*e*4/r.components*r.byteLength;case rs:case ss:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case as:case os:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ja:case eo:return Math.max(n,16)*Math.max(e,8)/4;case Za:case Qa:return Math.max(n,8)*Math.max(e,8)/2;case to:case no:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case so:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ao:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case oo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case co:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case lo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case uo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case fo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ho:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case po:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case mo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case go:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case _o:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case vo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case xo:case yo:case So:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Mo:case bo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Eo:case To:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lh(n){switch(n){case Pn:case jl:return{byteLength:1,components:1};case hr:case Kl:case xr:return{byteLength:2,components:1};case Oo:case Bo:return{byteLength:2,components:4};case hi:case Fo:case Cn:return{byteLength:4,components:1};case Zl:case Jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:No}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=No);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function uh(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,u);else{d.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<d.length;m++){const g=d[h],_=d[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let m=0,g=d.length;m<g;m++){const _=d[m];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var dh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fh=`#ifdef USE_ALPHAHASH
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
#endif`,hh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ph=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_h=`#ifdef USE_AOMAP
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
#endif`,vh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xh=`#ifdef USE_BATCHING
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
#endif`,yh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Eh=`#ifdef USE_IRIDESCENCE
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
#endif`,Th=`#ifdef USE_BUMPMAP
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
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Uh=`#define PI 3.141592653589793
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
} // validated`,Nh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fh=`vec3 transformedNormal = objectNormal;
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
#endif`,Oh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gh=`#ifdef USE_ENVMAP
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
#endif`,$h=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wh=`#ifdef USE_ENVMAP
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
#endif`,qh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xh=`#ifdef USE_ENVMAP
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
#endif`,Yh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jh=`#ifdef USE_GRADIENTMAP
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
}`,Qh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,np=`uniform bool receiveShadow;
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
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cp=`PhysicalMaterial material;
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
#endif`,lp=`struct PhysicalMaterial {
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
}`,up=`
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
#endif`,dp=`#if defined( RE_IndirectDiffuse )
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
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yp=`#if defined( USE_POINTS_UV )
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
#endif`,Sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ep=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ip=`#ifdef USE_NORMALMAP
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
#endif`,Up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jp=`float getShadowMask() {
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
}`,Kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zp=`#ifdef USE_SKINNING
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
#endif`,Jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,im=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rm=`#ifdef USE_TRANSMISSION
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
#endif`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dm=`uniform sampler2D t2D;
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`#include <common>
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
}`,_m=`#if DEPTH_PACKING == 3200
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
}`,vm=`#define DISTANCE
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
}`,xm=`#define DISTANCE
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`uniform float scale;
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
}`,bm=`uniform vec3 diffuse;
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
}`,Em=`#include <common>
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
}`,Tm=`uniform vec3 diffuse;
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
}`,wm=`#define LAMBERT
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
}`,Am=`#define LAMBERT
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
}`,Cm=`#define MATCAP
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
}`,Rm=`#define MATCAP
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
}`,Pm=`#define NORMAL
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
}`,Lm=`#define NORMAL
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
}`,Dm=`#define PHONG
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
}`,Im=`#define PHONG
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
}`,Um=`#define STANDARD
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
}`,Nm=`#define STANDARD
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
}`,Fm=`#define TOON
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
}`,Om=`#define TOON
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
}`,Bm=`uniform float size;
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
}`,km=`uniform vec3 diffuse;
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
}`,zm=`#include <common>
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
}`,Hm=`uniform vec3 color;
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
}`,Vm=`uniform float rotation;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:dh,alphahash_pars_fragment:fh,alphamap_fragment:hh,alphamap_pars_fragment:ph,alphatest_fragment:mh,alphatest_pars_fragment:gh,aomap_fragment:_h,aomap_pars_fragment:vh,batching_pars_vertex:xh,batching_vertex:yh,begin_vertex:Sh,beginnormal_vertex:Mh,bsdfs:bh,iridescence_fragment:Eh,bumpmap_pars_fragment:Th,clipping_planes_fragment:wh,clipping_planes_pars_fragment:Ah,clipping_planes_pars_vertex:Ch,clipping_planes_vertex:Rh,color_fragment:Ph,color_pars_fragment:Lh,color_pars_vertex:Dh,color_vertex:Ih,common:Uh,cube_uv_reflection_fragment:Nh,defaultnormal_vertex:Fh,displacementmap_pars_vertex:Oh,displacementmap_vertex:Bh,emissivemap_fragment:kh,emissivemap_pars_fragment:zh,colorspace_fragment:Hh,colorspace_pars_fragment:Vh,envmap_fragment:Gh,envmap_common_pars_fragment:$h,envmap_pars_fragment:Wh,envmap_pars_vertex:qh,envmap_physical_pars_fragment:ip,envmap_vertex:Xh,fog_vertex:Yh,fog_pars_vertex:jh,fog_fragment:Kh,fog_pars_fragment:Zh,gradientmap_pars_fragment:Jh,lightmap_pars_fragment:Qh,lights_lambert_fragment:ep,lights_lambert_pars_fragment:tp,lights_pars_begin:np,lights_toon_fragment:rp,lights_toon_pars_fragment:sp,lights_phong_fragment:ap,lights_phong_pars_fragment:op,lights_physical_fragment:cp,lights_physical_pars_fragment:lp,lights_fragment_begin:up,lights_fragment_maps:dp,lights_fragment_end:fp,logdepthbuf_fragment:hp,logdepthbuf_pars_fragment:pp,logdepthbuf_pars_vertex:mp,logdepthbuf_vertex:gp,map_fragment:_p,map_pars_fragment:vp,map_particle_fragment:xp,map_particle_pars_fragment:yp,metalnessmap_fragment:Sp,metalnessmap_pars_fragment:Mp,morphinstance_vertex:bp,morphcolor_vertex:Ep,morphnormal_vertex:Tp,morphtarget_pars_vertex:wp,morphtarget_vertex:Ap,normal_fragment_begin:Cp,normal_fragment_maps:Rp,normal_pars_fragment:Pp,normal_pars_vertex:Lp,normal_vertex:Dp,normalmap_pars_fragment:Ip,clearcoat_normal_fragment_begin:Up,clearcoat_normal_fragment_maps:Np,clearcoat_pars_fragment:Fp,iridescence_pars_fragment:Op,opaque_fragment:Bp,packing:kp,premultiplied_alpha_fragment:zp,project_vertex:Hp,dithering_fragment:Vp,dithering_pars_fragment:Gp,roughnessmap_fragment:$p,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:qp,shadowmap_pars_vertex:Xp,shadowmap_vertex:Yp,shadowmask_pars_fragment:jp,skinbase_vertex:Kp,skinning_pars_vertex:Zp,skinning_vertex:Jp,skinnormal_vertex:Qp,specularmap_fragment:em,specularmap_pars_fragment:tm,tonemapping_fragment:nm,tonemapping_pars_fragment:im,transmission_fragment:rm,transmission_pars_fragment:sm,uv_pars_fragment:am,uv_pars_vertex:om,uv_vertex:cm,worldpos_vertex:lm,background_vert:um,background_frag:dm,backgroundCube_vert:fm,backgroundCube_frag:hm,cube_vert:pm,cube_frag:mm,depth_vert:gm,depth_frag:_m,distanceRGBA_vert:vm,distanceRGBA_frag:xm,equirect_vert:ym,equirect_frag:Sm,linedashed_vert:Mm,linedashed_frag:bm,meshbasic_vert:Em,meshbasic_frag:Tm,meshlambert_vert:wm,meshlambert_frag:Am,meshmatcap_vert:Cm,meshmatcap_frag:Rm,meshnormal_vert:Pm,meshnormal_frag:Lm,meshphong_vert:Dm,meshphong_frag:Im,meshphysical_vert:Um,meshphysical_frag:Nm,meshtoon_vert:Fm,meshtoon_frag:Om,points_vert:Bm,points_frag:km,shadow_vert:zm,shadow_frag:Hm,sprite_vert:Vm,sprite_frag:Gm},Se={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},pn={basic:{uniforms:Lt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Lt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new it(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Lt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Lt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Lt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new it(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Lt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Lt([Se.points,Se.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Lt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Lt([Se.common,Se.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Lt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Lt([Se.sprite,Se.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Lt([Se.common,Se.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Lt([Se.lights,Se.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};pn.physical={uniforms:Lt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Jr={r:0,b:0,g:0},ii=new Ln,$m=new xt;function Wm(n,e,t,i,r,s,a){const o=new it(0);let c=s===!0?0:1,l,u,d=null,h=0,m=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function _(M){let y=!1;const A=g(M);A===null?f(o,c):A&&A.isColor&&(f(A,1),y=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(M,y){const A=g(y);A&&(A.isCubeTexture||A.mapping===vs)?(u===void 0&&(u=new _t(new Er(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Zi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ii.copy(y.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($m.makeRotationFromEuler(ii)),u.material.toneMapped=Je.getTransfer(A.colorSpace)!==st,(d!==A||h!==A.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=A,h=A.version,m=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new _t(new Dt(2,2),new jn({name:"BackgroundMaterial",uniforms:Zi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Je.getTransfer(A.colorSpace)!==st,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||h!==A.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=A,h=A.version,m=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,y){M.getRGB(Jr,du(n)),i.buffers.color.setClear(Jr.r,Jr.g,Jr.b,y,a)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,y=1){o.set(M),c=y,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(o,c)},render:_,addToRenderList:p,dispose:w}}function qm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(S,C,N,O,D){let P=!1;const I=d(O,N,C);s!==I&&(s=I,l(s.object)),P=m(S,O,N,D),P&&g(S,O,N,D),D!==null&&e.update(D,n.ELEMENT_ARRAY_BUFFER),(P||a)&&(a=!1,y(S,C,N,O),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function d(S,C,N){const O=N.wireframe===!0;let D=i[S.id];D===void 0&&(D={},i[S.id]=D);let P=D[C.id];P===void 0&&(P={},D[C.id]=P);let I=P[O];return I===void 0&&(I=h(c()),P[O]=I),I}function h(S){const C=[],N=[],O=[];for(let D=0;D<t;D++)C[D]=0,N[D]=0,O[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:O,object:S,attributes:{},index:null}}function m(S,C,N,O){const D=s.attributes,P=C.attributes;let I=0;const B=N.getAttributes();for(const k in B)if(B[k].location>=0){const fe=D[k];let xe=P[k];if(xe===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(xe=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(xe=S.instanceColor)),fe===void 0||fe.attribute!==xe||xe&&fe.data!==xe.data)return!0;I++}return s.attributesNum!==I||s.index!==O}function g(S,C,N,O){const D={},P=C.attributes;let I=0;const B=N.getAttributes();for(const k in B)if(B[k].location>=0){let fe=P[k];fe===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor));const xe={};xe.attribute=fe,fe&&fe.data&&(xe.data=fe.data),D[k]=xe,I++}s.attributes=D,s.attributesNum=I,s.index=O}function _(){const S=s.newAttributes;for(let C=0,N=S.length;C<N;C++)S[C]=0}function p(S){f(S,0)}function f(S,C){const N=s.newAttributes,O=s.enabledAttributes,D=s.attributeDivisors;N[S]=1,O[S]===0&&(n.enableVertexAttribArray(S),O[S]=1),D[S]!==C&&(n.vertexAttribDivisor(S,C),D[S]=C)}function w(){const S=s.newAttributes,C=s.enabledAttributes;for(let N=0,O=C.length;N<O;N++)C[N]!==S[N]&&(n.disableVertexAttribArray(N),C[N]=0)}function M(S,C,N,O,D,P,I){I===!0?n.vertexAttribIPointer(S,C,N,D,P):n.vertexAttribPointer(S,C,N,O,D,P)}function y(S,C,N,O){_();const D=O.attributes,P=N.getAttributes(),I=C.defaultAttributeValues;for(const B in P){const k=P[B];if(k.location>=0){let W=D[B];if(W===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(W=S.instanceColor)),W!==void 0){const fe=W.normalized,xe=W.itemSize,Ie=e.get(W);if(Ie===void 0)continue;const He=Ie.buffer,Xe=Ie.type,ke=Ie.bytesPerElement,Q=Xe===n.INT||Xe===n.UNSIGNED_INT||W.gpuType===Fo;if(W.isInterleavedBufferAttribute){const ee=W.data,ge=ee.stride,Te=W.offset;if(ee.isInstancedInterleavedBuffer){for(let Me=0;Me<k.locationSize;Me++)f(k.location+Me,ee.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Me=0;Me<k.locationSize;Me++)p(k.location+Me);n.bindBuffer(n.ARRAY_BUFFER,He);for(let Me=0;Me<k.locationSize;Me++)M(k.location+Me,xe/k.locationSize,Xe,fe,ge*ke,(Te+xe/k.locationSize*Me)*ke,Q)}else{if(W.isInstancedBufferAttribute){for(let ee=0;ee<k.locationSize;ee++)f(k.location+ee,W.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ee=0;ee<k.locationSize;ee++)p(k.location+ee);n.bindBuffer(n.ARRAY_BUFFER,He);for(let ee=0;ee<k.locationSize;ee++)M(k.location+ee,xe/k.locationSize,Xe,fe,xe*ke,xe/k.locationSize*ee*ke,Q)}}else if(I!==void 0){const fe=I[B];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(k.location,fe);break;case 3:n.vertexAttrib3fv(k.location,fe);break;case 4:n.vertexAttrib4fv(k.location,fe);break;default:n.vertexAttrib1fv(k.location,fe)}}}}w()}function A(){L();for(const S in i){const C=i[S];for(const N in C){const O=C[N];for(const D in O)u(O[D].object),delete O[D];delete C[N]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;const C=i[S.id];for(const N in C){const O=C[N];for(const D in O)u(O[D].object),delete O[D];delete C[N]}delete i[S.id]}function E(S){for(const C in i){const N=i[C];if(N[S.id]===void 0)continue;const O=N[S.id];for(const D in O)u(O[D].object),delete O[D];delete N[S.id]}}function L(){v(),a=!0,s!==r&&(s=r,l(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:v,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:w}}function Xm(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];t.update(m,i,1)}function c(l,u,d,h){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],u[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*h[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Ym(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(E){return!(E!==on&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const L=E===xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Pn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Cn&&!L)}function c(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:A,maxSamples:T}}function jm(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new si,o=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{const w=s?0:i,M=w*4;let y=f.clippingState||null;c.value=y,y=u(g,h,M,m);for(let A=0;A!==M;++A)y[A]=t[A];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const f=m+_*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<f)&&(p=new Float32Array(f));for(let M=0,y=m;M!==_;++M,y+=4)a.copy(d[M]).applyMatrix4(w,o),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Km(n){let e=new WeakMap;function t(a,o){return o===Xa?a.mapping=Yi:o===Ya&&(a.mapping=ji),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Xa||o===Ya)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Zf(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ki=4,tl=[.125,.215,.35,.446,.526,.582],ci=20,ba=new $o,nl=new it;let Ea=null,Ta=0,wa=0,Aa=!1;const ai=(1+Math.sqrt(5))/2,Ni=1/ai,il=[new X(-ai,Ni,0),new X(ai,Ni,0),new X(-Ni,0,ai),new X(Ni,0,ai),new X(0,ai,-Ni),new X(0,ai,Ni),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],Zm=new X;class rl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Zm}=s;Ea=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ea,Ta,wa),this._renderer.xr.enabled=Aa,e.scissorTest=!1,Qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yi||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ea=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:xr,format:on,colorSpace:Ki,depthBuffer:!1},r=sl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jm(s)),this._blurMaterial=Qm(s,e,t)}return r}_compileMaterial(e){const t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,ba)}_sceneToCubeUV(e,t,i,r,s){const c=new sn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,m=d.toneMapping;d.getClearColor(nl),d.toneMapping=Xn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const _=new $t({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),p=new _t(new Er,_);let f=!1;const w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,f=!0):(_.color.copy(nl),f=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[M],s.y,s.z)):y===1?(c.up.set(0,0,l[M]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[M],s.z)):(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[M]));const A=this._cubeSize;Qr(r,y*A,M>2?A:0,A,A),d.setRenderTarget(r),f&&d.render(p,c),d.render(e,c)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=m,d.autoClear=h,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Yi||e.mapping===ji;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=al());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new _t(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Qr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,ba)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=il[(r-s-1)%il.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new _t(this._lodPlanes[r],l),h=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ci-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):ci;p>ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ci}`);const f=[];let w=0;for(let E=0;E<ci;++E){const L=E/_,v=Math.exp(-L*L/2);f.push(v),E===0?w+=v:E<p&&(w+=2*v)}for(let E=0;E<f.length;E++)f[E]=f[E]/w;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;const y=this._sizeLods[r],A=3*y*(r>M-ki?r-M+ki:0),T=4*(this._cubeSize-y);Qr(t,A,T,3*y,2*y),c.setRenderTarget(t),c.render(d,ba)}}function Jm(n){const e=[],t=[],i=[];let r=n;const s=n-ki+1+tl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-ki?c=tl[a-n+ki-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,p=2,f=1,w=new Float32Array(_*g*m),M=new Float32Array(p*g*m),y=new Float32Array(f*g*m);for(let T=0;T<m;T++){const E=T%3*2/3-1,L=T>2?0:-1,v=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];w.set(v,_*g*T),M.set(h,p*g*T);const S=[T,T,T,T,T,T];y.set(S,f*g*T)}const A=new In;A.setAttribute("position",new ln(w,_)),A.setAttribute("uv",new ln(M,p)),A.setAttribute("faceIndex",new ln(y,f)),e.push(A),r>ki&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function sl(n,e,t){const i=new pi(n,e,t);return i.texture.mapping=vs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Qm(n,e,t){const i=new Float32Array(ci),r=new X(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function al(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ol(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Wo(){return`

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
	`}function eg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Xa||c===Ya,u=c===Yi||c===ji;if(l||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new rl(n)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return l&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new rl(n)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function tg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&vr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ng(n,e,t,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const m in h)e.update(h[m],n.ARRAY_BUFFER)}function l(d){const h=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const w=m.array;_=m.version;for(let M=0,y=w.length;M<y;M+=3){const A=w[M+0],T=w[M+1],E=w[M+2];h.push(A,T,T,E,E,A)}}else if(g!==void 0){const w=g.array;_=g.version;for(let M=0,y=w.length/3-1;M<y;M+=3){const A=M+0,T=M+1,E=M+2;h.push(A,T,T,E,E,A)}}else return;const p=new(ru(h)?uu:lu)(h,1);p.version=_;const f=s.get(d);f&&e.remove(f),s.set(d,p)}function u(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function ig(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,m){n.drawElements(i,m,s,h*a),t.update(m,i,1)}function l(h,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,h*a,g),t.update(m,i,g))}function u(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];t.update(p,i,1)}function d(h,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<h.length;f++)l(h[f]/a,m[f],_[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,_,0,g);let f=0;for(let w=0;w<g;w++)f+=m[w]*_[w];t.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function rg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function sg(n,e,t){const i=new WeakMap,r=new mt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let S=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var m=S;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),p===!0&&(y=3);let A=o.attributes.position.count*y,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const E=new Float32Array(A*T*4*d),L=new su(E,A,T,d);L.type=Cn,L.needsUpdate=!0;const v=y*4;for(let C=0;C<d;C++){const N=f[C],O=w[C],D=M[C],P=A*T*4*C;for(let I=0;I<N.count;I++){const B=I*v;g===!0&&(r.fromBufferAttribute(N,I),E[P+B+0]=r.x,E[P+B+1]=r.y,E[P+B+2]=r.z,E[P+B+3]=0),_===!0&&(r.fromBufferAttribute(O,I),E[P+B+4]=r.x,E[P+B+5]=r.y,E[P+B+6]=r.z,E[P+B+7]=0),p===!0&&(r.fromBufferAttribute(D,I),E[P+B+8]=r.x,E[P+B+9]=r.y,E[P+B+10]=r.z,E[P+B+11]=D.itemSize===4?r.w:1)}}h={count:d,texture:L,size:new nt(A,T)},i.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function ag(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Su=new wt,cl=new _u(1,1),Mu=new su,bu=new Uf,Eu=new hu,ll=[],ul=[],dl=new Float32Array(16),fl=new Float32Array(9),hl=new Float32Array(4);function er(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ll[r];if(s===void 0&&(s=new Float32Array(r),ll[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ys(n,e){let t=ul[e];t===void 0&&(t=new Int32Array(e),ul[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function og(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function dg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;hl.set(i),n.uniformMatrix2fv(this.addr,!1,hl),St(t,i)}}function fg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;fl.set(i),n.uniformMatrix3fv(this.addr,!1,fl),St(t,i)}}function hg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;dl.set(i),n.uniformMatrix4fv(this.addr,!1,dl),St(t,i)}}function pg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function _g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function vg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function Sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function Mg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(cl.compareFunction=iu,s=cl):s=Su,t.setTexture2D(e||s,r)}function bg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||bu,r)}function Eg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Eu,r)}function Tg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Mu,r)}function wg(n){switch(n){case 5126:return og;case 35664:return cg;case 35665:return lg;case 35666:return ug;case 35674:return dg;case 35675:return fg;case 35676:return hg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return _g;case 5125:return vg;case 36294:return xg;case 36295:return yg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Tg}}function Ag(n,e){n.uniform1fv(this.addr,e)}function Cg(n,e){const t=er(e,this.size,2);n.uniform2fv(this.addr,t)}function Rg(n,e){const t=er(e,this.size,3);n.uniform3fv(this.addr,t)}function Pg(n,e){const t=er(e,this.size,4);n.uniform4fv(this.addr,t)}function Lg(n,e){const t=er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Dg(n,e){const t=er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ig(n,e){const t=er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ug(n,e){n.uniform1iv(this.addr,e)}function Ng(n,e){n.uniform2iv(this.addr,e)}function Fg(n,e){n.uniform3iv(this.addr,e)}function Og(n,e){n.uniform4iv(this.addr,e)}function Bg(n,e){n.uniform1uiv(this.addr,e)}function kg(n,e){n.uniform2uiv(this.addr,e)}function zg(n,e){n.uniform3uiv(this.addr,e)}function Hg(n,e){n.uniform4uiv(this.addr,e)}function Vg(n,e,t){const i=this.cache,r=e.length,s=ys(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Su,s[a])}function Gg(n,e,t){const i=this.cache,r=e.length,s=ys(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||bu,s[a])}function $g(n,e,t){const i=this.cache,r=e.length,s=ys(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Eu,s[a])}function Wg(n,e,t){const i=this.cache,r=e.length,s=ys(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Mu,s[a])}function qg(n){switch(n){case 5126:return Ag;case 35664:return Cg;case 35665:return Rg;case 35666:return Pg;case 35674:return Lg;case 35675:return Dg;case 35676:return Ig;case 5124:case 35670:return Ug;case 35667:case 35671:return Ng;case 35668:case 35672:return Fg;case 35669:case 35673:return Og;case 5125:return Bg;case 36294:return kg;case 36295:return zg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35679:case 36299:case 36307:return Gg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return Wg}}class Xg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=wg(t.type)}}class Yg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qg(t.type)}}class jg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ca=/(\w+)(\])?(\[|\.)?/g;function pl(n,e){n.seq.push(e),n.map[e.id]=e}function Kg(n,e,t){const i=n.name,r=i.length;for(Ca.lastIndex=0;;){const s=Ca.exec(i),a=Ca.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){pl(t,l===void 0?new Xg(o,n,e):new Yg(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new jg(o),pl(t,d)),t=d}}}class ls{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Kg(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function ml(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Zg=37297;let Jg=0;function Qg(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const gl=new $e;function e0(n){Je._getMatrix(gl,Je.workingColorSpace,n);const e=`mat3( ${gl.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case ps:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function _l(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Qg(n.getShaderSource(e),o)}else return s}function t0(n,e){const t=e0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function n0(n,e){let t;switch(e){case of:t="Linear";break;case cf:t="Reinhard";break;case lf:t="Cineon";break;case uf:t="ACESFilmic";break;case ff:t="AgX";break;case hf:t="Neutral";break;case df:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const es=new X;function i0(){Je.getLuminanceCoefficients(es);const n=es.x.toFixed(4),e=es.y.toFixed(4),t=es.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function s0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function a0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ur(n){return n!==""}function vl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const o0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(n){return n.replace(o0,l0)}const c0=new Map;function l0(n,e){let t=qe[e];if(t===void 0){const i=c0.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Co(t)}const u0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yl(n){return n.replace(u0,d0)}function d0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sl(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function f0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ql?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===kd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===wn&&(e="SHADOWMAP_TYPE_VSM"),e}function h0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Yi:case ji:e="ENVMAP_TYPE_CUBE";break;case vs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function p0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ji:e="ENVMAP_MODE_REFRACTION";break}return e}function m0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xl:e="ENVMAP_BLENDING_MULTIPLY";break;case sf:e="ENVMAP_BLENDING_MIX";break;case af:e="ENVMAP_BLENDING_ADD";break}return e}function g0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function _0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=f0(t),l=h0(t),u=p0(t),d=m0(t),h=g0(t),m=r0(t),g=s0(s),_=r.createProgram();let p,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ur).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ur).join(`
`),f.length>0&&(f+=`
`)):(p=[Sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),f=[Sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?qe.tonemapping_pars_fragment:"",t.toneMapping!==Xn?n0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,t0("linearToOutputTexel",t.outputColorSpace),i0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),a=Co(a),a=vl(a,t),a=xl(a,t),o=Co(o),o=vl(o,t),o=xl(o,t),a=yl(a),o=yl(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=w+p+a,y=w+f+o,A=ml(r,r.VERTEX_SHADER,M),T=ml(r,r.FRAGMENT_SHADER,y);r.attachShader(_,A),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(C){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(_)||"",O=r.getShaderInfoLog(A)||"",D=r.getShaderInfoLog(T)||"",P=N.trim(),I=O.trim(),B=D.trim();let k=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,A,T);else{const fe=_l(r,A,"vertex"),xe=_l(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+fe+`
`+xe)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(I===""||B==="")&&(W=!1);W&&(C.diagnostics={runnable:k,programLog:P,vertexShader:{log:I,prefix:p},fragmentShader:{log:B,prefix:f}})}r.deleteShader(A),r.deleteShader(T),L=new ls(r,_),v=a0(r,_)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let v;this.getAttributes=function(){return v===void 0&&E(this),v};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,Zg)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let v0=0;class x0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new y0(e),t.set(e,i)),i}}class y0{constructor(e){this.id=v0++,this.code=e,this.usedTimes=0}}function S0(n,e,t,i,r,s,a){const o=new ou,c=new x0,l=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,S,C,N,O){const D=N.fog,P=O.geometry,I=v.isMeshStandardMaterial?N.environment:null,B=(v.isMeshStandardMaterial?t:e).get(v.envMap||I),k=B&&B.mapping===vs?B.image.height:null,W=g[v.type];v.precision!==null&&(m=r.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const fe=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,xe=fe!==void 0?fe.length:0;let Ie=0;P.morphAttributes.position!==void 0&&(Ie=1),P.morphAttributes.normal!==void 0&&(Ie=2),P.morphAttributes.color!==void 0&&(Ie=3);let He,Xe,ke,Q;if(W){const tt=pn[W];He=tt.vertexShader,Xe=tt.fragmentShader}else He=v.vertexShader,Xe=v.fragmentShader,c.update(v),ke=c.getVertexShaderID(v),Q=c.getFragmentShaderID(v);const ee=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),Te=O.isInstancedMesh===!0,Me=O.isBatchedMesh===!0,Ve=!!v.map,pt=!!v.matcap,U=!!B,Qe=!!v.aoMap,Ue=!!v.lightMap,De=!!v.bumpMap,te=!!v.normalMap,_e=!!v.displacementMap,re=!!v.emissiveMap,ye=!!v.metalnessMap,we=!!v.roughnessMap,We=v.anisotropy>0,R=v.clearcoat>0,x=v.dispersion>0,$=v.iridescence>0,Z=v.sheen>0,oe=v.transmission>0,J=We&&!!v.anisotropyMap,Ae=R&&!!v.clearcoatMap,me=R&&!!v.clearcoatNormalMap,z=R&&!!v.clearcoatRoughnessMap,ce=$&&!!v.iridescenceMap,q=$&&!!v.iridescenceThicknessMap,ne=Z&&!!v.sheenColorMap,ve=Z&&!!v.sheenRoughnessMap,de=!!v.specularMap,ue=!!v.specularColorMap,Le=!!v.specularIntensityMap,F=oe&&!!v.transmissionMap,se=oe&&!!v.thicknessMap,he=!!v.gradientMap,le=!!v.alphaMap,ie=v.alphaTest>0,ae=!!v.alphaHash,Pe=!!v.extensions;let Ge=Xn;v.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ge=n.toneMapping);const ct={shaderID:W,shaderType:v.type,shaderName:v.name,vertexShader:He,fragmentShader:Xe,defines:v.defines,customVertexShaderID:ke,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:Me,batchingColor:Me&&O._colorsTexture!==null,instancing:Te,instancingColor:Te&&O.instanceColor!==null,instancingMorph:Te&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ki,alphaToCoverage:!!v.alphaToCoverage,map:Ve,matcap:pt,envMap:U,envMapMode:U&&B.mapping,envMapCubeUVHeight:k,aoMap:Qe,lightMap:Ue,bumpMap:De,normalMap:te,displacementMap:h&&_e,emissiveMap:re,normalMapObjectSpace:te&&v.normalMapType===vf,normalMapTangentSpace:te&&v.normalMapType===_f,metalnessMap:ye,roughnessMap:we,anisotropy:We,anisotropyMap:J,clearcoat:R,clearcoatMap:Ae,clearcoatNormalMap:me,clearcoatRoughnessMap:z,dispersion:x,iridescence:$,iridescenceMap:ce,iridescenceThicknessMap:q,sheen:Z,sheenColorMap:ne,sheenRoughnessMap:ve,specularMap:de,specularColorMap:ue,specularIntensityMap:Le,transmission:oe,transmissionMap:F,thicknessMap:se,gradientMap:he,opaque:v.transparent===!1&&v.blending===Vi&&v.alphaToCoverage===!1,alphaMap:le,alphaTest:ie,alphaHash:ae,combine:v.combine,mapUv:Ve&&_(v.map.channel),aoMapUv:Qe&&_(v.aoMap.channel),lightMapUv:Ue&&_(v.lightMap.channel),bumpMapUv:De&&_(v.bumpMap.channel),normalMapUv:te&&_(v.normalMap.channel),displacementMapUv:_e&&_(v.displacementMap.channel),emissiveMapUv:re&&_(v.emissiveMap.channel),metalnessMapUv:ye&&_(v.metalnessMap.channel),roughnessMapUv:we&&_(v.roughnessMap.channel),anisotropyMapUv:J&&_(v.anisotropyMap.channel),clearcoatMapUv:Ae&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:me&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:q&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(v.sheenRoughnessMap.channel),specularMapUv:de&&_(v.specularMap.channel),specularColorMapUv:ue&&_(v.specularColorMap.channel),specularIntensityMapUv:Le&&_(v.specularIntensityMap.channel),transmissionMapUv:F&&_(v.transmissionMap.channel),thicknessMapUv:se&&_(v.thicknessMap.channel),alphaMapUv:le&&_(v.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(te||We),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!P.attributes.uv&&(Ve||le),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ge,skinning:O.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ie,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Ve&&v.map.isVideoTexture===!0&&Je.getTransfer(v.map.colorSpace)===st,decodeVideoTextureEmissive:re&&v.emissiveMap.isVideoTexture===!0&&Je.getTransfer(v.emissiveMap.colorSpace)===st,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===An,flipSided:v.side===Bt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Pe&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&v.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function f(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)S.push(C),S.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(w(S,v),M(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function w(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function M(v,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),v.push(o.mask)}function y(v){const S=g[v.type];let C;if(S){const N=pn[S];C=Xf.clone(N.uniforms)}else C=v.uniforms;return C}function A(v,S){let C;for(let N=0,O=u.length;N<O;N++){const D=u[N];if(D.cacheKey===S){C=D,++C.usedTimes;break}}return C===void 0&&(C=new _0(n,S,v,s),u.push(C)),C}function T(v){if(--v.usedTimes===0){const S=u.indexOf(v);u[S]=u[u.length-1],u.pop(),v.destroy()}}function E(v){c.remove(v)}function L(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:y,acquireProgram:A,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:L}}function M0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function b0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ml(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,h,m,g,_,p){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=p),e++,f}function o(d,h,m,g,_,p){const f=a(d,h,m,g,_,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function c(d,h,m,g,_,p){const f=a(d,h,m,g,_,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function l(d,h){t.length>1&&t.sort(d||b0),i.length>1&&i.sort(h||Ml),r.length>1&&r.sort(h||Ml)}function u(){for(let d=e,h=n.length;d<h;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function E0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new bl,n.set(i,[a])):r>=s.length?(a=new bl,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function T0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new it};break;case"SpotLight":t={position:new X,direction:new X,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function w0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let A0=0;function C0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function R0(n){const e=new T0,t=w0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new X);const r=new X,s=new xt,a=new xt;function o(l){let u=0,d=0,h=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let m=0,g=0,_=0,p=0,f=0,w=0,M=0,y=0,A=0,T=0,E=0;l.sort(C0);for(let v=0,S=l.length;v<S;v++){const C=l[v],N=C.color,O=C.intensity,D=C.distance,P=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=N.r*O,d+=N.g*O,h+=N.b*O;else if(C.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(C.sh.coefficients[I],O);E++}else if(C.isDirectionalLight){const I=e.get(C);if(I.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const B=C.shadow,k=t.get(C);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,i.directionalShadow[m]=k,i.directionalShadowMap[m]=P,i.directionalShadowMatrix[m]=C.shadow.matrix,w++}i.directional[m]=I,m++}else if(C.isSpotLight){const I=e.get(C);I.position.setFromMatrixPosition(C.matrixWorld),I.color.copy(N).multiplyScalar(O),I.distance=D,I.coneCos=Math.cos(C.angle),I.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),I.decay=C.decay,i.spot[_]=I;const B=C.shadow;if(C.map&&(i.spotLightMap[A]=C.map,A++,B.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[_]=B.matrix,C.castShadow){const k=t.get(C);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,i.spotShadow[_]=k,i.spotShadowMap[_]=P,y++}_++}else if(C.isRectAreaLight){const I=e.get(C);I.color.copy(N).multiplyScalar(O),I.halfWidth.set(C.width*.5,0,0),I.halfHeight.set(0,C.height*.5,0),i.rectArea[p]=I,p++}else if(C.isPointLight){const I=e.get(C);if(I.color.copy(C.color).multiplyScalar(C.intensity),I.distance=C.distance,I.decay=C.decay,C.castShadow){const B=C.shadow,k=t.get(C);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,k.shadowCameraNear=B.camera.near,k.shadowCameraFar=B.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=P,i.pointShadowMatrix[g]=C.shadow.matrix,M++}i.point[g]=I,g++}else if(C.isHemisphereLight){const I=e.get(C);I.skyColor.copy(C.color).multiplyScalar(O),I.groundColor.copy(C.groundColor).multiplyScalar(O),i.hemi[f]=I,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==m||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==p||L.hemiLength!==f||L.numDirectionalShadows!==w||L.numPointShadows!==M||L.numSpotShadows!==y||L.numSpotMaps!==A||L.numLightProbes!==E)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=E,L.directionalLength=m,L.pointLength=g,L.spotLength=_,L.rectAreaLength=p,L.hemiLength=f,L.numDirectionalShadows=w,L.numPointShadows=M,L.numSpotShadows=y,L.numSpotMaps=A,L.numLightProbes=E,i.version=A0++)}function c(l,u){let d=0,h=0,m=0,g=0,_=0;const p=u.matrixWorldInverse;for(let f=0,w=l.length;f<w;f++){const M=l[f];if(M.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),d++}else if(M.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),h++}else if(M.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:o,setupView:c,state:i}}function El(n){const e=new R0(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function P0(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new El(n),e.set(r,[o])):s>=a.length?(o=new El(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const L0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D0=`uniform sampler2D shadow_pass;
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
}`;function I0(n,e,t){let i=new mu;const r=new nt,s=new nt,a=new mt,o=new ih({depthPacking:gf}),c=new rh,l={},u=t.maxTextureSize,d={[Yn]:Bt,[Bt]:Yn,[An]:An},h=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:L0,fragmentShader:D0}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new In;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _t(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ql;let f=this.type;this.render=function(T,E,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const v=n.getRenderTarget(),S=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),N=n.state;N.setBlending(qn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=f!==wn&&this.type===wn,D=f===wn&&this.type!==wn;for(let P=0,I=T.length;P<I;P++){const B=T[P],k=B.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const W=k.getFrameExtents();if(r.multiply(W),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,k.mapSize.y=s.y)),k.map===null||O===!0||D===!0){const xe=this.type!==wn?{minFilter:cn,magFilter:cn}:{};k.map!==null&&k.map.dispose(),k.map=new pi(r.x,r.y,xe),k.map.texture.name=B.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const fe=k.getViewportCount();for(let xe=0;xe<fe;xe++){const Ie=k.getViewport(xe);a.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),N.viewport(a),k.updateMatrices(B,xe),i=k.getFrustum(),y(E,L,k.camera,B,this.type)}k.isPointLightShadow!==!0&&this.type===wn&&w(k,L),k.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(v,S,C)};function w(T,E){const L=e.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new pi(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(E,null,L,h,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(E,null,L,m,_,null)}function M(T,E,L,v){let S=null;const C=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)S=C;else if(S=L.isPointLight===!0?c:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const N=S.uuid,O=E.uuid;let D=l[N];D===void 0&&(D={},l[N]=D);let P=D[O];P===void 0&&(P=S.clone(),D[O]=P,E.addEventListener("dispose",A)),S=P}if(S.visible=E.visible,S.wireframe=E.wireframe,v===wn?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:d[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=n.properties.get(S);N.light=L}return S}function y(T,E,L,v,S){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===wn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const O=e.update(T),D=T.material;if(Array.isArray(D)){const P=O.groups;for(let I=0,B=P.length;I<B;I++){const k=P[I],W=D[k.materialIndex];if(W&&W.visible){const fe=M(T,W,v,S);T.onBeforeShadow(n,T,E,L,O,fe,k),n.renderBufferDirect(L,null,O,fe,T,k),T.onAfterShadow(n,T,E,L,O,fe,k)}}}else if(D.visible){const P=M(T,D,v,S);T.onBeforeShadow(n,T,E,L,O,P,null),n.renderBufferDirect(L,null,O,P,T,null),T.onAfterShadow(n,T,E,L,O,P,null)}}const N=T.children;for(let O=0,D=N.length;O<D;O++)y(N[O],E,L,v,S)}function A(T){T.target.removeEventListener("dispose",A);for(const L in l){const v=l[L],S=T.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}const U0={[za]:Ha,[Va]:Wa,[Ga]:qa,[Xi]:$a,[Ha]:za,[Wa]:Va,[qa]:Ga,[$a]:Xi};function N0(n,e){function t(){let F=!1;const se=new mt;let he=null;const le=new mt(0,0,0,0);return{setMask:function(ie){he!==ie&&!F&&(n.colorMask(ie,ie,ie,ie),he=ie)},setLocked:function(ie){F=ie},setClear:function(ie,ae,Pe,Ge,ct){ct===!0&&(ie*=Ge,ae*=Ge,Pe*=Ge),se.set(ie,ae,Pe,Ge),le.equals(se)===!1&&(n.clearColor(ie,ae,Pe,Ge),le.copy(se))},reset:function(){F=!1,he=null,le.set(-1,0,0,0)}}}function i(){let F=!1,se=!1,he=null,le=null,ie=null;return{setReversed:function(ae){if(se!==ae){const Pe=e.get("EXT_clip_control");ae?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),se=ae;const Ge=ie;ie=null,this.setClear(Ge)}},getReversed:function(){return se},setTest:function(ae){ae?ee(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(ae){he!==ae&&!F&&(n.depthMask(ae),he=ae)},setFunc:function(ae){if(se&&(ae=U0[ae]),le!==ae){switch(ae){case za:n.depthFunc(n.NEVER);break;case Ha:n.depthFunc(n.ALWAYS);break;case Va:n.depthFunc(n.LESS);break;case Xi:n.depthFunc(n.LEQUAL);break;case Ga:n.depthFunc(n.EQUAL);break;case $a:n.depthFunc(n.GEQUAL);break;case Wa:n.depthFunc(n.GREATER);break;case qa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=ae}},setLocked:function(ae){F=ae},setClear:function(ae){ie!==ae&&(se&&(ae=1-ae),n.clearDepth(ae),ie=ae)},reset:function(){F=!1,he=null,le=null,ie=null,se=!1}}}function r(){let F=!1,se=null,he=null,le=null,ie=null,ae=null,Pe=null,Ge=null,ct=null;return{setTest:function(tt){F||(tt?ee(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(tt){se!==tt&&!F&&(n.stencilMask(tt),se=tt)},setFunc:function(tt,xn,fn){(he!==tt||le!==xn||ie!==fn)&&(n.stencilFunc(tt,xn,fn),he=tt,le=xn,ie=fn)},setOp:function(tt,xn,fn){(ae!==tt||Pe!==xn||Ge!==fn)&&(n.stencilOp(tt,xn,fn),ae=tt,Pe=xn,Ge=fn)},setLocked:function(tt){F=tt},setClear:function(tt){ct!==tt&&(n.clearStencil(tt),ct=tt)},reset:function(){F=!1,se=null,he=null,le=null,ie=null,ae=null,Pe=null,Ge=null,ct=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,m=[],g=null,_=!1,p=null,f=null,w=null,M=null,y=null,A=null,T=null,E=new it(0,0,0),L=0,v=!1,S=null,C=null,N=null,O=null,D=null;const P=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,B=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(k)[1]),I=B>=1):k.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),I=B>=2);let W=null,fe={};const xe=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),He=new mt().fromArray(xe),Xe=new mt().fromArray(Ie);function ke(F,se,he,le){const ie=new Uint8Array(4),ae=n.createTexture();n.bindTexture(F,ae),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<he;Pe++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,ie):n.texImage2D(se+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ie);return ae}const Q={};Q[n.TEXTURE_2D]=ke(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=ke(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=ke(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=ke(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(n.DEPTH_TEST),a.setFunc(Xi),De(!1),te(Cc),ee(n.CULL_FACE),Qe(qn);function ee(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function ge(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Te(F,se){return d[F]!==se?(n.bindFramebuffer(F,se),d[F]=se,F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=se),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=se),!0):!1}function Me(F,se){let he=m,le=!1;if(F){he=h.get(se),he===void 0&&(he=[],h.set(se,he));const ie=F.textures;if(he.length!==ie.length||he[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,Pe=ie.length;ae<Pe;ae++)he[ae]=n.COLOR_ATTACHMENT0+ae;he.length=ie.length,le=!0}}else he[0]!==n.BACK&&(he[0]=n.BACK,le=!0);le&&n.drawBuffers(he)}function Ve(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const pt={[oi]:n.FUNC_ADD,[Hd]:n.FUNC_SUBTRACT,[Vd]:n.FUNC_REVERSE_SUBTRACT};pt[Gd]=n.MIN,pt[$d]=n.MAX;const U={[Wd]:n.ZERO,[qd]:n.ONE,[Xd]:n.SRC_COLOR,[Ba]:n.SRC_ALPHA,[Qd]:n.SRC_ALPHA_SATURATE,[Zd]:n.DST_COLOR,[jd]:n.DST_ALPHA,[Yd]:n.ONE_MINUS_SRC_COLOR,[ka]:n.ONE_MINUS_SRC_ALPHA,[Jd]:n.ONE_MINUS_DST_COLOR,[Kd]:n.ONE_MINUS_DST_ALPHA,[ef]:n.CONSTANT_COLOR,[tf]:n.ONE_MINUS_CONSTANT_COLOR,[nf]:n.CONSTANT_ALPHA,[rf]:n.ONE_MINUS_CONSTANT_ALPHA};function Qe(F,se,he,le,ie,ae,Pe,Ge,ct,tt){if(F===qn){_===!0&&(ge(n.BLEND),_=!1);return}if(_===!1&&(ee(n.BLEND),_=!0),F!==zd){if(F!==p||tt!==v){if((f!==oi||y!==oi)&&(n.blendEquation(n.FUNC_ADD),f=oi,y=oi),tt)switch(F){case Vi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rc:n.blendFunc(n.ONE,n.ONE);break;case Pc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Vi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Pc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,M=null,A=null,T=null,E.set(0,0,0),L=0,p=F,v=tt}return}ie=ie||se,ae=ae||he,Pe=Pe||le,(se!==f||ie!==y)&&(n.blendEquationSeparate(pt[se],pt[ie]),f=se,y=ie),(he!==w||le!==M||ae!==A||Pe!==T)&&(n.blendFuncSeparate(U[he],U[le],U[ae],U[Pe]),w=he,M=le,A=ae,T=Pe),(Ge.equals(E)===!1||ct!==L)&&(n.blendColor(Ge.r,Ge.g,Ge.b,ct),E.copy(Ge),L=ct),p=F,v=!1}function Ue(F,se){F.side===An?ge(n.CULL_FACE):ee(n.CULL_FACE);let he=F.side===Bt;se&&(he=!he),De(he),F.blending===Vi&&F.transparent===!1?Qe(qn):Qe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const le=F.stencilWrite;o.setTest(le),le&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),re(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function De(F){S!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),S=F)}function te(F){F!==Od?(ee(n.CULL_FACE),F!==C&&(F===Cc?n.cullFace(n.BACK):F===Bd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),C=F}function _e(F){F!==N&&(I&&n.lineWidth(F),N=F)}function re(F,se,he){F?(ee(n.POLYGON_OFFSET_FILL),(O!==se||D!==he)&&(n.polygonOffset(se,he),O=se,D=he)):ge(n.POLYGON_OFFSET_FILL)}function ye(F){F?ee(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function we(F){F===void 0&&(F=n.TEXTURE0+P-1),W!==F&&(n.activeTexture(F),W=F)}function We(F,se,he){he===void 0&&(W===null?he=n.TEXTURE0+P-1:he=W);let le=fe[he];le===void 0&&(le={type:void 0,texture:void 0},fe[he]=le),(le.type!==F||le.texture!==se)&&(W!==he&&(n.activeTexture(he),W=he),n.bindTexture(F,se||Q[F]),le.type=F,le.texture=se)}function R(){const F=fe[W];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function z(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(F){He.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),He.copy(F))}function ve(F){Xe.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Xe.copy(F))}function de(F,se){let he=l.get(se);he===void 0&&(he=new WeakMap,l.set(se,he));let le=he.get(F);le===void 0&&(le=n.getUniformBlockIndex(se,F.name),he.set(F,le))}function ue(F,se){const le=l.get(se).get(F);c.get(se)!==le&&(n.uniformBlockBinding(se,le,F.__bindingPointIndex),c.set(se,le))}function Le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},W=null,fe={},d={},h=new WeakMap,m=[],g=null,_=!1,p=null,f=null,w=null,M=null,y=null,A=null,T=null,E=new it(0,0,0),L=0,v=!1,S=null,C=null,N=null,O=null,D=null,He.set(0,0,n.canvas.width,n.canvas.height),Xe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:ge,bindFramebuffer:Te,drawBuffers:Me,useProgram:Ve,setBlending:Qe,setMaterial:Ue,setFlipSided:De,setCullFace:te,setLineWidth:_e,setPolygonOffset:re,setScissorTest:ye,activeTexture:we,bindTexture:We,unbindTexture:R,compressedTexImage2D:x,compressedTexImage3D:$,texImage2D:ce,texImage3D:q,updateUBOMapping:de,uniformBlockBinding:ue,texStorage2D:me,texStorage3D:z,texSubImage2D:Z,texSubImage3D:oe,compressedTexSubImage2D:J,compressedTexSubImage3D:Ae,scissor:ne,viewport:ve,reset:Le}}function F0(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,u=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,x){return m?new OffscreenCanvas(R,x):_r("canvas")}function _(R,x,$){let Z=1;const oe=We(R);if((oe.width>$||oe.height>$)&&(Z=$/Math.max(oe.width,oe.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(Z*oe.width),Ae=Math.floor(Z*oe.height);d===void 0&&(d=g(J,Ae));const me=x?g(J,Ae):d;return me.width=J,me.height=Ae,me.getContext("2d").drawImage(R,0,0,J,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+J+"x"+Ae+")."),me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),R;return R}function p(R){return R.generateMipmaps}function f(R){n.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(R,x,$,Z,oe=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=x;if(x===n.RED&&($===n.FLOAT&&(J=n.R32F),$===n.HALF_FLOAT&&(J=n.R16F),$===n.UNSIGNED_BYTE&&(J=n.R8)),x===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(J=n.R8UI),$===n.UNSIGNED_SHORT&&(J=n.R16UI),$===n.UNSIGNED_INT&&(J=n.R32UI),$===n.BYTE&&(J=n.R8I),$===n.SHORT&&(J=n.R16I),$===n.INT&&(J=n.R32I)),x===n.RG&&($===n.FLOAT&&(J=n.RG32F),$===n.HALF_FLOAT&&(J=n.RG16F),$===n.UNSIGNED_BYTE&&(J=n.RG8)),x===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(J=n.RG8UI),$===n.UNSIGNED_SHORT&&(J=n.RG16UI),$===n.UNSIGNED_INT&&(J=n.RG32UI),$===n.BYTE&&(J=n.RG8I),$===n.SHORT&&(J=n.RG16I),$===n.INT&&(J=n.RG32I)),x===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(J=n.RGB8UI),$===n.UNSIGNED_SHORT&&(J=n.RGB16UI),$===n.UNSIGNED_INT&&(J=n.RGB32UI),$===n.BYTE&&(J=n.RGB8I),$===n.SHORT&&(J=n.RGB16I),$===n.INT&&(J=n.RGB32I)),x===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),$===n.UNSIGNED_INT&&(J=n.RGBA32UI),$===n.BYTE&&(J=n.RGBA8I),$===n.SHORT&&(J=n.RGBA16I),$===n.INT&&(J=n.RGBA32I)),x===n.RGB&&($===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),$===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),x===n.RGBA){const Ae=oe?ps:Je.getTransfer(Z);$===n.FLOAT&&(J=n.RGBA32F),$===n.HALF_FLOAT&&(J=n.RGBA16F),$===n.UNSIGNED_BYTE&&(J=Ae===st?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(R,x){let $;return R?x===null||x===hi||x===pr?$=n.DEPTH24_STENCIL8:x===Cn?$=n.DEPTH32F_STENCIL8:x===hr&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===hi||x===pr?$=n.DEPTH_COMPONENT24:x===Cn?$=n.DEPTH_COMPONENT32F:x===hr&&($=n.DEPTH_COMPONENT16),$}function A(R,x){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==cn&&R.minFilter!==Jt?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function T(R){const x=R.target;x.removeEventListener("dispose",T),L(x),x.isVideoTexture&&u.delete(x)}function E(R){const x=R.target;x.removeEventListener("dispose",E),S(x)}function L(R){const x=i.get(R);if(x.__webglInit===void 0)return;const $=R.source,Z=h.get($);if(Z){const oe=Z[x.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&v(R),Object.keys(Z).length===0&&h.delete($)}i.remove(R)}function v(R){const x=i.get(R);n.deleteTexture(x.__webglTexture);const $=R.source,Z=h.get($);delete Z[x.__cacheKey],a.memory.textures--}function S(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let oe=0;oe<x.__webglFramebuffer[Z].length;oe++)n.deleteFramebuffer(x.__webglFramebuffer[Z][oe]);else n.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)n.deleteFramebuffer(x.__webglFramebuffer[Z]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const $=R.textures;for(let Z=0,oe=$.length;Z<oe;Z++){const J=i.get($[Z]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove($[Z])}i.remove(R)}let C=0;function N(){C=0}function O(){const R=C;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),C+=1,R}function D(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function P(R,x){const $=i.get(R);if(R.isVideoTexture&&ye(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&$.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q($,R,x);return}}else R.isExternalTexture&&($.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+x)}function I(R,x){const $=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){Q($,R,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+x)}function B(R,x){const $=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){Q($,R,x);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+x)}function k(R,x){const $=i.get(R);if(R.version>0&&$.__version!==R.version){ee($,R,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+x)}const W={[ja]:n.REPEAT,[li]:n.CLAMP_TO_EDGE,[Ka]:n.MIRRORED_REPEAT},fe={[cn]:n.NEAREST,[pf]:n.NEAREST_MIPMAP_NEAREST,[Lr]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[Zs]:n.LINEAR_MIPMAP_NEAREST,[ui]:n.LINEAR_MIPMAP_LINEAR},xe={[xf]:n.NEVER,[Tf]:n.ALWAYS,[yf]:n.LESS,[iu]:n.LEQUAL,[Sf]:n.EQUAL,[Ef]:n.GEQUAL,[Mf]:n.GREATER,[bf]:n.NOTEQUAL};function Ie(R,x){if(x.type===Cn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Jt||x.magFilter===Zs||x.magFilter===Lr||x.magFilter===ui||x.minFilter===Jt||x.minFilter===Zs||x.minFilter===Lr||x.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,W[x.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,W[x.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,W[x.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,fe[x.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,fe[x.minFilter]),x.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,xe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===cn||x.minFilter!==Lr&&x.minFilter!==ui||x.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function He(R,x){let $=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",T));const Z=x.source;let oe=h.get(Z);oe===void 0&&(oe={},h.set(Z,oe));const J=D(x);if(J!==R.__cacheKey){oe[J]===void 0&&(oe[J]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,$=!0),oe[J].usedTimes++;const Ae=oe[R.__cacheKey];Ae!==void 0&&(oe[R.__cacheKey].usedTimes--,Ae.usedTimes===0&&v(x)),R.__cacheKey=J,R.__webglTexture=oe[J].texture}return $}function Xe(R,x,$){return Math.floor(Math.floor(R/$)/x)}function ke(R,x,$,Z){const J=R.updateRanges;if(J.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,$,Z,x.data);else{J.sort((q,ne)=>q.start-ne.start);let Ae=0;for(let q=1;q<J.length;q++){const ne=J[Ae],ve=J[q],de=ne.start+ne.count,ue=Xe(ve.start,x.width,4),Le=Xe(ne.start,x.width,4);ve.start<=de+1&&ue===Le&&Xe(ve.start+ve.count-1,x.width,4)===ue?ne.count=Math.max(ne.count,ve.start+ve.count-ne.start):(++Ae,J[Ae]=ve)}J.length=Ae+1;const me=n.getParameter(n.UNPACK_ROW_LENGTH),z=n.getParameter(n.UNPACK_SKIP_PIXELS),ce=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let q=0,ne=J.length;q<ne;q++){const ve=J[q],de=Math.floor(ve.start/4),ue=Math.ceil(ve.count/4),Le=de%x.width,F=Math.floor(de/x.width),se=ue,he=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Le,F,se,he,$,Z,x.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,me),n.pixelStorei(n.UNPACK_SKIP_PIXELS,z),n.pixelStorei(n.UNPACK_SKIP_ROWS,ce)}}function Q(R,x,$){let Z=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=n.TEXTURE_3D);const oe=He(R,x),J=x.source;t.bindTexture(Z,R.__webglTexture,n.TEXTURE0+$);const Ae=i.get(J);if(J.version!==Ae.__version||oe===!0){t.activeTexture(n.TEXTURE0+$);const me=Je.getPrimaries(Je.workingColorSpace),z=x.colorSpace===Hn?null:Je.getPrimaries(x.colorSpace),ce=x.colorSpace===Hn||me===z?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let q=_(x.image,!1,r.maxTextureSize);q=we(x,q);const ne=s.convert(x.format,x.colorSpace),ve=s.convert(x.type);let de=M(x.internalFormat,ne,ve,x.colorSpace,x.isVideoTexture);Ie(Z,x);let ue;const Le=x.mipmaps,F=x.isVideoTexture!==!0,se=Ae.__version===void 0||oe===!0,he=J.dataReady,le=A(x,q);if(x.isDepthTexture)de=y(x.format===gr,x.type),se&&(F?t.texStorage2D(n.TEXTURE_2D,1,de,q.width,q.height):t.texImage2D(n.TEXTURE_2D,0,de,q.width,q.height,0,ne,ve,null));else if(x.isDataTexture)if(Le.length>0){F&&se&&t.texStorage2D(n.TEXTURE_2D,le,de,Le[0].width,Le[0].height);for(let ie=0,ae=Le.length;ie<ae;ie++)ue=Le[ie],F?he&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ue.width,ue.height,ne,ve,ue.data):t.texImage2D(n.TEXTURE_2D,ie,de,ue.width,ue.height,0,ne,ve,ue.data);x.generateMipmaps=!1}else F?(se&&t.texStorage2D(n.TEXTURE_2D,le,de,q.width,q.height),he&&ke(x,q,ne,ve)):t.texImage2D(n.TEXTURE_2D,0,de,q.width,q.height,0,ne,ve,q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){F&&se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,de,Le[0].width,Le[0].height,q.depth);for(let ie=0,ae=Le.length;ie<ae;ie++)if(ue=Le[ie],x.format!==on)if(ne!==null)if(F){if(he)if(x.layerUpdates.size>0){const Pe=el(ue.width,ue.height,x.format,x.type);for(const Ge of x.layerUpdates){const ct=ue.data.subarray(Ge*Pe/ue.data.BYTES_PER_ELEMENT,(Ge+1)*Pe/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,Ge,ue.width,ue.height,1,ne,ct)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ue.width,ue.height,q.depth,ne,ue.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,de,ue.width,ue.height,q.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?he&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ue.width,ue.height,q.depth,ne,ve,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,de,ue.width,ue.height,q.depth,0,ne,ve,ue.data)}else{F&&se&&t.texStorage2D(n.TEXTURE_2D,le,de,Le[0].width,Le[0].height);for(let ie=0,ae=Le.length;ie<ae;ie++)ue=Le[ie],x.format!==on?ne!==null?F?he&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,ue.width,ue.height,ne,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,de,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?he&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ue.width,ue.height,ne,ve,ue.data):t.texImage2D(n.TEXTURE_2D,ie,de,ue.width,ue.height,0,ne,ve,ue.data)}else if(x.isDataArrayTexture)if(F){if(se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,de,q.width,q.height,q.depth),he)if(x.layerUpdates.size>0){const ie=el(q.width,q.height,x.format,x.type);for(const ae of x.layerUpdates){const Pe=q.data.subarray(ae*ie/q.data.BYTES_PER_ELEMENT,(ae+1)*ie/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ae,q.width,q.height,1,ne,ve,Pe)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,ne,ve,q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,de,q.width,q.height,q.depth,0,ne,ve,q.data);else if(x.isData3DTexture)F?(se&&t.texStorage3D(n.TEXTURE_3D,le,de,q.width,q.height,q.depth),he&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,ne,ve,q.data)):t.texImage3D(n.TEXTURE_3D,0,de,q.width,q.height,q.depth,0,ne,ve,q.data);else if(x.isFramebufferTexture){if(se)if(F)t.texStorage2D(n.TEXTURE_2D,le,de,q.width,q.height);else{let ie=q.width,ae=q.height;for(let Pe=0;Pe<le;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,de,ie,ae,0,ne,ve,null),ie>>=1,ae>>=1}}else if(Le.length>0){if(F&&se){const ie=We(Le[0]);t.texStorage2D(n.TEXTURE_2D,le,de,ie.width,ie.height)}for(let ie=0,ae=Le.length;ie<ae;ie++)ue=Le[ie],F?he&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ne,ve,ue):t.texImage2D(n.TEXTURE_2D,ie,de,ne,ve,ue);x.generateMipmaps=!1}else if(F){if(se){const ie=We(q);t.texStorage2D(n.TEXTURE_2D,le,de,ie.width,ie.height)}he&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne,ve,q)}else t.texImage2D(n.TEXTURE_2D,0,de,ne,ve,q);p(x)&&f(Z),Ae.__version=J.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ee(R,x,$){if(x.image.length!==6)return;const Z=He(R,x),oe=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+$);const J=i.get(oe);if(oe.version!==J.__version||Z===!0){t.activeTexture(n.TEXTURE0+$);const Ae=Je.getPrimaries(Je.workingColorSpace),me=x.colorSpace===Hn?null:Je.getPrimaries(x.colorSpace),z=x.colorSpace===Hn||Ae===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,z);const ce=x.isCompressedTexture||x.image[0].isCompressedTexture,q=x.image[0]&&x.image[0].isDataTexture,ne=[];for(let ae=0;ae<6;ae++)!ce&&!q?ne[ae]=_(x.image[ae],!0,r.maxCubemapSize):ne[ae]=q?x.image[ae].image:x.image[ae],ne[ae]=we(x,ne[ae]);const ve=ne[0],de=s.convert(x.format,x.colorSpace),ue=s.convert(x.type),Le=M(x.internalFormat,de,ue,x.colorSpace),F=x.isVideoTexture!==!0,se=J.__version===void 0||Z===!0,he=oe.dataReady;let le=A(x,ve);Ie(n.TEXTURE_CUBE_MAP,x);let ie;if(ce){F&&se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,le,Le,ve.width,ve.height);for(let ae=0;ae<6;ae++){ie=ne[ae].mipmaps;for(let Pe=0;Pe<ie.length;Pe++){const Ge=ie[Pe];x.format!==on?de!==null?F?he&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe,0,0,Ge.width,Ge.height,de,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe,Le,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe,0,0,Ge.width,Ge.height,de,ue,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe,Le,Ge.width,Ge.height,0,de,ue,Ge.data)}}}else{if(ie=x.mipmaps,F&&se){ie.length>0&&le++;const ae=We(ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,le,Le,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(q){F?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ne[ae].width,ne[ae].height,de,ue,ne[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Le,ne[ae].width,ne[ae].height,0,de,ue,ne[ae].data);for(let Pe=0;Pe<ie.length;Pe++){const ct=ie[Pe].image[ae].image;F?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe+1,0,0,ct.width,ct.height,de,ue,ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe+1,Le,ct.width,ct.height,0,de,ue,ct.data)}}else{F?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,de,ue,ne[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Le,de,ue,ne[ae]);for(let Pe=0;Pe<ie.length;Pe++){const Ge=ie[Pe];F?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe+1,0,0,de,ue,Ge.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe+1,Le,de,ue,Ge.image[ae])}}}p(x)&&f(n.TEXTURE_CUBE_MAP),J.__version=oe.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ge(R,x,$,Z,oe,J){const Ae=s.convert($.format,$.colorSpace),me=s.convert($.type),z=M($.internalFormat,Ae,me,$.colorSpace),ce=i.get(x),q=i.get($);if(q.__renderTarget=x,!ce.__hasExternalTextures){const ne=Math.max(1,x.width>>J),ve=Math.max(1,x.height>>J);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,J,z,ne,ve,x.depth,0,Ae,me,null):t.texImage2D(oe,J,z,ne,ve,0,Ae,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),re(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,oe,q.__webglTexture,0,_e(x)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,oe,q.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(R,x,$){if(n.bindRenderbuffer(n.RENDERBUFFER,R),x.depthBuffer){const Z=x.depthTexture,oe=Z&&Z.isDepthTexture?Z.type:null,J=y(x.stencilBuffer,oe),Ae=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=_e(x);re(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,J,x.width,x.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,J,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,J,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,R)}else{const Z=x.textures;for(let oe=0;oe<Z.length;oe++){const J=Z[oe],Ae=s.convert(J.format,J.colorSpace),me=s.convert(J.type),z=M(J.internalFormat,Ae,me,J.colorSpace),ce=_e(x);$&&re(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,z,x.width,x.height):re(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,z,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,z,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Me(R,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(x.depthTexture);Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),P(x.depthTexture,0);const oe=Z.__webglTexture,J=_e(x);if(x.depthTexture.format===mr)re(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0);else if(x.depthTexture.format===gr)re(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Ve(R){const x=i.get(R),$=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const oe=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",oe)};Z.addEventListener("dispose",oe),x.__depthDisposeCallback=oe}x.__boundDepthTexture=Z}if(R.depthTexture&&!x.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const Z=R.texture.mipmaps;Z&&Z.length>0?Me(x.__webglFramebuffer[0],R):Me(x.__webglFramebuffer,R)}else if($){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=n.createRenderbuffer(),Te(x.__webglDepthbuffer[Z],R,!1);else{const oe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,J)}}else{const Z=R.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Te(x.__webglDepthbuffer,R,!1);else{const oe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,J)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(R,x,$){const Z=i.get(R);x!==void 0&&ge(Z.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&Ve(R)}function U(R){const x=R.texture,$=i.get(R),Z=i.get(x);R.addEventListener("dispose",E);const oe=R.textures,J=R.isWebGLCubeRenderTarget===!0,Ae=oe.length>1;if(Ae||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=x.version,a.memory.textures++),J){$.__webglFramebuffer=[];for(let me=0;me<6;me++)if(x.mipmaps&&x.mipmaps.length>0){$.__webglFramebuffer[me]=[];for(let z=0;z<x.mipmaps.length;z++)$.__webglFramebuffer[me][z]=n.createFramebuffer()}else $.__webglFramebuffer[me]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){$.__webglFramebuffer=[];for(let me=0;me<x.mipmaps.length;me++)$.__webglFramebuffer[me]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let me=0,z=oe.length;me<z;me++){const ce=i.get(oe[me]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&re(R)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let me=0;me<oe.length;me++){const z=oe[me];$.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[me]);const ce=s.convert(z.format,z.colorSpace),q=s.convert(z.type),ne=M(z.internalFormat,ce,q,z.colorSpace,R.isXRRenderTarget===!0),ve=_e(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,ne,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,$.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),Te($.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,x);for(let me=0;me<6;me++)if(x.mipmaps&&x.mipmaps.length>0)for(let z=0;z<x.mipmaps.length;z++)ge($.__webglFramebuffer[me][z],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,z);else ge($.__webglFramebuffer[me],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);p(x)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let me=0,z=oe.length;me<z;me++){const ce=oe[me],q=i.get(ce);let ne=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ne=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,q.__webglTexture),Ie(ne,ce),ge($.__webglFramebuffer,R,ce,n.COLOR_ATTACHMENT0+me,ne,0),p(ce)&&f(ne)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,Z.__webglTexture),Ie(me,x),x.mipmaps&&x.mipmaps.length>0)for(let z=0;z<x.mipmaps.length;z++)ge($.__webglFramebuffer[z],R,x,n.COLOR_ATTACHMENT0,me,z);else ge($.__webglFramebuffer,R,x,n.COLOR_ATTACHMENT0,me,0);p(x)&&f(me),t.unbindTexture()}R.depthBuffer&&Ve(R)}function Qe(R){const x=R.textures;for(let $=0,Z=x.length;$<Z;$++){const oe=x[$];if(p(oe)){const J=w(R),Ae=i.get(oe).__webglTexture;t.bindTexture(J,Ae),f(J),t.unbindTexture()}}}const Ue=[],De=[];function te(R){if(R.samples>0){if(re(R)===!1){const x=R.textures,$=R.width,Z=R.height;let oe=n.COLOR_BUFFER_BIT;const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(R),me=x.length>1;if(me)for(let ce=0;ce<x.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const z=R.texture.mipmaps;z&&z.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ce=0;ce<x.length;ce++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[ce]);const q=i.get(x[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,q,0)}n.blitFramebuffer(0,0,$,Z,0,0,$,Z,oe,n.NEAREST),c===!0&&(Ue.length=0,De.length=0,Ue.push(n.COLOR_ATTACHMENT0+ce),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ue.push(J),De.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,De)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let ce=0;ce<x.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[ce]);const q=i.get(x[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,q,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const x=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function _e(R){return Math.min(r.maxSamples,R.samples)}function re(R){const x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ye(R){const x=a.render.frame;u.get(R)!==x&&(u.set(R,x),R.update())}function we(R,x){const $=R.colorSpace,Z=R.format,oe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||$!==Ki&&$!==Hn&&(Je.getTransfer($)===st?(Z!==on||oe!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),x}function We(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=P,this.setTexture2DArray=I,this.setTexture3D=B,this.setTextureCube=k,this.rebindTextures=pt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=re}function O0(n,e){function t(i,r=Hn){let s;const a=Je.getTransfer(r);if(i===Pn)return n.UNSIGNED_BYTE;if(i===Oo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Bo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===jl)return n.BYTE;if(i===Kl)return n.SHORT;if(i===hr)return n.UNSIGNED_SHORT;if(i===Fo)return n.INT;if(i===hi)return n.UNSIGNED_INT;if(i===Cn)return n.FLOAT;if(i===xr)return n.HALF_FLOAT;if(i===Ql)return n.ALPHA;if(i===eu)return n.RGB;if(i===on)return n.RGBA;if(i===mr)return n.DEPTH_COMPONENT;if(i===gr)return n.DEPTH_STENCIL;if(i===tu)return n.RED;if(i===ko)return n.RED_INTEGER;if(i===nu)return n.RG;if(i===zo)return n.RG_INTEGER;if(i===Ho)return n.RGBA_INTEGER;if(i===rs||i===ss||i===as||i===os)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===rs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===as)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===rs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ss)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===as)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===os)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Za||i===Ja||i===Qa||i===eo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Za)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ja)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===eo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===to||i===no||i===io)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===to||i===no)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===io)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ro||i===so||i===ao||i===oo||i===co||i===lo||i===uo||i===fo||i===ho||i===po||i===mo||i===go||i===_o||i===vo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ro)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===so)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ao)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===co)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ho)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===po)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===go)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_o)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xo||i===yo||i===So)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===xo)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===So)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mo||i===bo||i===Eo||i===To)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Mo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===bo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Eo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===To)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===pr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const B0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k0=`
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

}`;class z0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new vu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new jn({vertexShader:B0,fragmentShader:k0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new Dt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H0 extends Qi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,m=null,g=null;const _=typeof XRWebGLBinding<"u",p=new z0,f={},w=t.getContextAttributes();let M=null,y=null;const A=[],T=[],E=new nt;let L=null;const v=new sn;v.viewport=new mt;const S=new sn;S.viewport=new mt;const C=[v,S],N=new ch;let O=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ee=A[Q];return ee===void 0&&(ee=new ya,A[Q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Q){let ee=A[Q];return ee===void 0&&(ee=new ya,A[Q]=ee),ee.getGripSpace()},this.getHand=function(Q){let ee=A[Q];return ee===void 0&&(ee=new ya,A[Q]=ee),ee.getHandSpace()};function P(Q){const ee=T.indexOf(Q.inputSource);if(ee===-1)return;const ge=A[ee];ge!==void 0&&(ge.update(Q.inputSource,Q.frame,l||a),ge.dispatchEvent({type:Q.type,data:Q.inputSource}))}function I(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",B);for(let Q=0;Q<A.length;Q++){const ee=T[Q];ee!==null&&(T[Q]=null,A[Q].disconnect(ee))}O=null,D=null,p.reset();for(const Q in f)delete f[Q];e.setRenderTarget(M),m=null,h=null,d=null,r=null,y=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",I),r.addEventListener("inputsourceschange",B),w.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Te=null,Me=null;w.depth&&(Me=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=w.stencil?gr:mr,Te=w.stencil?pr:hi);const Ve={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Ve),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new pi(h.textureWidth,h.textureHeight,{format:on,type:Pn,depthTexture:new _u(h.textureWidth,h.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ge={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new pi(m.framebufferWidth,m.framebufferHeight,{format:on,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function B(Q){for(let ee=0;ee<Q.removed.length;ee++){const ge=Q.removed[ee],Te=T.indexOf(ge);Te>=0&&(T[Te]=null,A[Te].disconnect(ge))}for(let ee=0;ee<Q.added.length;ee++){const ge=Q.added[ee];let Te=T.indexOf(ge);if(Te===-1){for(let Ve=0;Ve<A.length;Ve++)if(Ve>=T.length){T.push(ge),Te=Ve;break}else if(T[Ve]===null){T[Ve]=ge,Te=Ve;break}if(Te===-1)break}const Me=A[Te];Me&&Me.connect(ge)}}const k=new X,W=new X;function fe(Q,ee,ge){k.setFromMatrixPosition(ee.matrixWorld),W.setFromMatrixPosition(ge.matrixWorld);const Te=k.distanceTo(W),Me=ee.projectionMatrix.elements,Ve=ge.projectionMatrix.elements,pt=Me[14]/(Me[10]-1),U=Me[14]/(Me[10]+1),Qe=(Me[9]+1)/Me[5],Ue=(Me[9]-1)/Me[5],De=(Me[8]-1)/Me[0],te=(Ve[8]+1)/Ve[0],_e=pt*De,re=pt*te,ye=Te/(-De+te),we=ye*-De;if(ee.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(we),Q.translateZ(ye),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Me[10]===-1)Q.projectionMatrix.copy(ee.projectionMatrix),Q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const We=pt+ye,R=U+ye,x=_e-we,$=re+(Te-we),Z=Qe*U/R*We,oe=Ue*U/R*We;Q.projectionMatrix.makePerspective(x,$,Z,oe,We,R),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function xe(Q,ee){ee===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ee.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ee=Q.near,ge=Q.far;p.texture!==null&&(p.depthNear>0&&(ee=p.depthNear),p.depthFar>0&&(ge=p.depthFar)),N.near=S.near=v.near=ee,N.far=S.far=v.far=ge,(O!==N.near||D!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),O=N.near,D=N.far),N.layers.mask=Q.layers.mask|6,v.layers.mask=N.layers.mask&3,S.layers.mask=N.layers.mask&5;const Te=Q.parent,Me=N.cameras;xe(N,Te);for(let Ve=0;Ve<Me.length;Ve++)xe(Me[Ve],Te);Me.length===2?fe(N,v,S):N.projectionMatrix.copy(v.projectionMatrix),Ie(Q,N,Te)};function Ie(Q,ee,ge){ge===null?Q.matrix.copy(ee.matrixWorld):(Q.matrix.copy(ge.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ee.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ee.projectionMatrix),Q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=wo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(Q){c=Q,h!==null&&(h.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(Q){return f[Q]};let He=null;function Xe(Q,ee){if(u=ee.getViewerPose(l||a),g=ee,u!==null){const ge=u.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Te=!1;ge.length!==N.cameras.length&&(N.cameras.length=0,Te=!0);for(let U=0;U<ge.length;U++){const Qe=ge[U];let Ue=null;if(m!==null)Ue=m.getViewport(Qe);else{const te=d.getViewSubImage(h,Qe);Ue=te.viewport,U===0&&(e.setRenderTargetTextures(y,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(y))}let De=C[U];De===void 0&&(De=new sn,De.layers.enable(U),De.viewport=new mt,C[U]=De),De.matrix.fromArray(Qe.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Qe.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),U===0&&(N.matrix.copy(De.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Te===!0&&N.cameras.push(De)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const U=d.getDepthInformation(ge[0]);U&&U.isValid&&U.texture&&p.init(U,r.renderState)}if(Me&&Me.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let U=0;U<ge.length;U++){const Qe=ge[U].camera;if(Qe){let Ue=f[Qe];Ue||(Ue=new vu,f[Qe]=Ue);const De=d.getCameraImage(Qe);Ue.sourceTexture=De}}}}for(let ge=0;ge<A.length;ge++){const Te=T[ge],Me=A[ge];Te!==null&&Me!==void 0&&Me.update(Te,ee,l||a)}He&&He(Q,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const ke=new yu;ke.setAnimationLoop(Xe),this.setAnimationLoop=function(Q){He=Q},this.dispose=function(){}}}const ri=new Ln,V0=new xt;function G0(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,du(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,w,M,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,y)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),_(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,w,M):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Bt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Bt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const w=e.get(f),M=w.envMap,y=w.envMapRotation;M&&(p.envMap.value=M,ri.copy(y),ri.x*=-1,ri.y*=-1,ri.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),p.envMapRotation.value.setFromMatrix4(V0.makeRotationFromEuler(ri)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,w,M){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*w,p.scale.value=M*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,w){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Bt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const w=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $0(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,M){const y=M.program;i.uniformBlockBinding(w,y)}function l(w,M){let y=r[w.id];y===void 0&&(g(w),y=u(w),r[w.id]=y,w.addEventListener("dispose",p));const A=M.program;i.updateUBOMapping(w,A);const T=e.render.frame;s[w.id]!==T&&(h(w),s[w.id]=T)}function u(w){const M=d();w.__bindingPointIndex=M;const y=n.createBuffer(),A=w.__size,T=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,y),y}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const M=r[w.id],y=w.uniforms,A=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let T=0,E=y.length;T<E;T++){const L=Array.isArray(y[T])?y[T]:[y[T]];for(let v=0,S=L.length;v<S;v++){const C=L[v];if(m(C,T,v,A)===!0){const N=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let D=0;for(let P=0;P<O.length;P++){const I=O[P],B=_(I);typeof I=="number"||typeof I=="boolean"?(C.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,N+D,C.__data)):I.isMatrix3?(C.__data[0]=I.elements[0],C.__data[1]=I.elements[1],C.__data[2]=I.elements[2],C.__data[3]=0,C.__data[4]=I.elements[3],C.__data[5]=I.elements[4],C.__data[6]=I.elements[5],C.__data[7]=0,C.__data[8]=I.elements[6],C.__data[9]=I.elements[7],C.__data[10]=I.elements[8],C.__data[11]=0):(I.toArray(C.__data,D),D+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,M,y,A){const T=w.value,E=M+"_"+y;if(A[E]===void 0)return typeof T=="number"||typeof T=="boolean"?A[E]=T:A[E]=T.clone(),!0;{const L=A[E];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return A[E]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(w){const M=w.uniforms;let y=0;const A=16;for(let E=0,L=M.length;E<L;E++){const v=Array.isArray(M[E])?M[E]:[M[E]];for(let S=0,C=v.length;S<C;S++){const N=v[S],O=Array.isArray(N.value)?N.value:[N.value];for(let D=0,P=O.length;D<P;D++){const I=O[D],B=_(I),k=y%A,W=k%B.boundary,fe=k+W;y+=W,fe!==0&&A-fe<B.storage&&(y+=A-fe),N.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=B.storage}}}const T=y%A;return T>0&&(y+=A-T),w.__size=y,w.__cache={},this}function _(w){const M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function p(w){const M=w.target;M.removeEventListener("dispose",p);const y=a.indexOf(M.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function f(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:c,update:l,dispose:f}}class Tu{constructor(e={}){const{canvas:t=Af(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,f=null;const w=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let A=!1;this._outputColorSpace=vt;let T=0,E=0,L=null,v=-1,S=null;const C=new mt,N=new mt;let O=null;const D=new it(0);let P=0,I=t.width,B=t.height,k=1,W=null,fe=null;const xe=new mt(0,0,I,B),Ie=new mt(0,0,I,B);let He=!1;const Xe=new mu;let ke=!1,Q=!1;const ee=new xt,ge=new X,Te=new mt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function pt(){return L===null?k:1}let U=i;function Qe(b,V){return t.getContext(b,V)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${No}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ie,!1),U===null){const V="webgl2";if(U=Qe(V,b),U===null)throw Qe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ue,De,te,_e,re,ye,we,We,R,x,$,Z,oe,J,Ae,me,z,ce,q,ne,ve,de,ue,Le;function F(){Ue=new tg(U),Ue.init(),de=new O0(U,Ue),De=new Ym(U,Ue,e,de),te=new N0(U,Ue),De.reversedDepthBuffer&&h&&te.buffers.depth.setReversed(!0),_e=new rg(U),re=new M0,ye=new F0(U,Ue,te,re,De,de,_e),we=new Km(y),We=new eg(y),R=new uh(U),ue=new qm(U,R),x=new ng(U,R,_e,ue),$=new ag(U,x,R,_e),q=new sg(U,De,ye),me=new jm(re),Z=new S0(y,we,We,Ue,De,ue,me),oe=new G0(y,re),J=new E0,Ae=new P0(Ue),ce=new Wm(y,we,We,te,$,m,c),z=new I0(y,$,De),Le=new $0(U,_e,De,te),ne=new Xm(U,Ue,_e),ve=new ig(U,Ue,_e),_e.programs=Z.programs,y.capabilities=De,y.extensions=Ue,y.properties=re,y.renderLists=J,y.shadowMap=z,y.state=te,y.info=_e}F();const se=new H0(y,U);this.xr=se,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=Ue.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ue.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(I,B,!1))},this.getSize=function(b){return b.set(I,B)},this.setSize=function(b,V,Y=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=b,B=V,t.width=Math.floor(b*k),t.height=Math.floor(V*k),Y===!0&&(t.style.width=b+"px",t.style.height=V+"px"),this.setViewport(0,0,b,V)},this.getDrawingBufferSize=function(b){return b.set(I*k,B*k).floor()},this.setDrawingBufferSize=function(b,V,Y){I=b,B=V,k=Y,t.width=Math.floor(b*Y),t.height=Math.floor(V*Y),this.setViewport(0,0,b,V)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(xe)},this.setViewport=function(b,V,Y,j){b.isVector4?xe.set(b.x,b.y,b.z,b.w):xe.set(b,V,Y,j),te.viewport(C.copy(xe).multiplyScalar(k).round())},this.getScissor=function(b){return b.copy(Ie)},this.setScissor=function(b,V,Y,j){b.isVector4?Ie.set(b.x,b.y,b.z,b.w):Ie.set(b,V,Y,j),te.scissor(N.copy(Ie).multiplyScalar(k).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(b){te.setScissorTest(He=b)},this.setOpaqueSort=function(b){W=b},this.setTransparentSort=function(b){fe=b},this.getClearColor=function(b){return b.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(b=!0,V=!0,Y=!0){let j=0;if(b){let G=!1;if(L!==null){const pe=L.texture.format;G=pe===Ho||pe===zo||pe===ko}if(G){const pe=L.texture.type,be=pe===Pn||pe===hi||pe===hr||pe===pr||pe===Oo||pe===Bo,Re=ce.getClearColor(),Ee=ce.getClearAlpha(),Be=Re.r,ze=Re.g,Fe=Re.b;be?(g[0]=Be,g[1]=ze,g[2]=Fe,g[3]=Ee,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Be,_[1]=ze,_[2]=Fe,_[3]=Ee,U.clearBufferiv(U.COLOR,0,_))}else j|=U.COLOR_BUFFER_BIT}V&&(j|=U.DEPTH_BUFFER_BIT),Y&&(j|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),ce.dispose(),J.dispose(),Ae.dispose(),re.dispose(),we.dispose(),We.dispose(),$.dispose(),ue.dispose(),Le.dispose(),Z.dispose(),se.dispose(),se.removeEventListener("sessionstart",fn),se.removeEventListener("sessionend",Yo),Kn.stop()};function he(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const b=_e.autoReset,V=z.enabled,Y=z.autoUpdate,j=z.needsUpdate,G=z.type;F(),_e.autoReset=b,z.enabled=V,z.autoUpdate=Y,z.needsUpdate=j,z.type=G}function ie(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ae(b){const V=b.target;V.removeEventListener("dispose",ae),Pe(V)}function Pe(b){Ge(b),re.remove(b)}function Ge(b){const V=re.get(b).programs;V!==void 0&&(V.forEach(function(Y){Z.releaseProgram(Y)}),b.isShaderMaterial&&Z.releaseShaderCache(b))}this.renderBufferDirect=function(b,V,Y,j,G,pe){V===null&&(V=Me);const be=G.isMesh&&G.matrixWorld.determinant()<0,Re=Wu(b,V,Y,j,G);te.setMaterial(j,be);let Ee=Y.index,Be=1;if(j.wireframe===!0){if(Ee=x.getWireframeAttribute(Y),Ee===void 0)return;Be=2}const ze=Y.drawRange,Fe=Y.attributes.position;let Ye=ze.start*Be,rt=(ze.start+ze.count)*Be;pe!==null&&(Ye=Math.max(Ye,pe.start*Be),rt=Math.min(rt,(pe.start+pe.count)*Be)),Ee!==null?(Ye=Math.max(Ye,0),rt=Math.min(rt,Ee.count)):Fe!=null&&(Ye=Math.max(Ye,0),rt=Math.min(rt,Fe.count));const ht=rt-Ye;if(ht<0||ht===1/0)return;ue.setup(G,j,Re,Y,Ee);let lt,at=ne;if(Ee!==null&&(lt=R.get(Ee),at=ve,at.setIndex(lt)),G.isMesh)j.wireframe===!0?(te.setLineWidth(j.wireframeLinewidth*pt()),at.setMode(U.LINES)):at.setMode(U.TRIANGLES);else if(G.isLine){let Oe=j.linewidth;Oe===void 0&&(Oe=1),te.setLineWidth(Oe*pt()),G.isLineSegments?at.setMode(U.LINES):G.isLineLoop?at.setMode(U.LINE_LOOP):at.setMode(U.LINE_STRIP)}else G.isPoints?at.setMode(U.POINTS):G.isSprite&&at.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)vr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))at.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Oe=G._multiDrawStarts,dt=G._multiDrawCounts,Ze=G._multiDrawCount,zt=Ee?R.get(Ee).bytesPerElement:1,vi=re.get(j).currentProgram.getUniforms();for(let Ht=0;Ht<Ze;Ht++)vi.setValue(U,"_gl_DrawID",Ht),at.render(Oe[Ht]/zt,dt[Ht])}else if(G.isInstancedMesh)at.renderInstances(Ye,ht,G.count);else if(Y.isInstancedBufferGeometry){const Oe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,dt=Math.min(Y.instanceCount,Oe);at.renderInstances(Ye,ht,dt)}else at.render(Ye,ht)};function ct(b,V,Y){b.transparent===!0&&b.side===An&&b.forceSinglePass===!1?(b.side=Bt,b.needsUpdate=!0,Ar(b,V,Y),b.side=Yn,b.needsUpdate=!0,Ar(b,V,Y),b.side=An):Ar(b,V,Y)}this.compile=function(b,V,Y=null){Y===null&&(Y=b),f=Ae.get(Y),f.init(V),M.push(f),Y.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),b!==Y&&b.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights();const j=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pe=G.material;if(pe)if(Array.isArray(pe))for(let be=0;be<pe.length;be++){const Re=pe[be];ct(Re,Y,G),j.add(Re)}else ct(pe,Y,G),j.add(pe)}),f=M.pop(),j},this.compileAsync=function(b,V,Y=null){const j=this.compile(b,V,Y);return new Promise(G=>{function pe(){if(j.forEach(function(be){re.get(be).currentProgram.isReady()&&j.delete(be)}),j.size===0){G(b);return}setTimeout(pe,10)}Ue.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let tt=null;function xn(b){tt&&tt(b)}function fn(){Kn.stop()}function Yo(){Kn.start()}const Kn=new yu;Kn.setAnimationLoop(xn),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(b){tt=b,se.setAnimationLoop(b),b===null?Kn.stop():Kn.start()},se.addEventListener("sessionstart",fn),se.addEventListener("sessionend",Yo),this.render=function(b,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(V),V=se.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,V,L),f=Ae.get(b,M.length),f.init(V),M.push(f),ee.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Xe.setFromProjectionMatrix(ee,gn,V.reversedDepth),Q=this.localClippingEnabled,ke=me.init(this.clippingPlanes,Q),p=J.get(b,w.length),p.init(),w.push(p),se.enabled===!0&&se.isPresenting===!0){const pe=y.xr.getDepthSensingMesh();pe!==null&&ws(pe,V,-1/0,y.sortObjects)}ws(b,V,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(W,fe),Ve=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ve&&ce.addToRenderList(p,b),this.info.render.frame++,ke===!0&&me.beginShadows();const Y=f.state.shadowsArray;z.render(Y,b,V),ke===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=p.opaque,G=p.transmissive;if(f.setupLights(),V.isArrayCamera){const pe=V.cameras;if(G.length>0)for(let be=0,Re=pe.length;be<Re;be++){const Ee=pe[be];Ko(j,G,b,Ee)}Ve&&ce.render(b);for(let be=0,Re=pe.length;be<Re;be++){const Ee=pe[be];jo(p,b,Ee,Ee.viewport)}}else G.length>0&&Ko(j,G,b,V),Ve&&ce.render(b),jo(p,b,V);L!==null&&E===0&&(ye.updateMultisampleRenderTarget(L),ye.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(y,b,V),ue.resetDefaultState(),v=-1,S=null,M.pop(),M.length>0?(f=M[M.length-1],ke===!0&&me.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function ws(b,V,Y,j){if(b.visible===!1)return;if(b.layers.test(V.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(V);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Xe.intersectsSprite(b)){j&&Te.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ee);const be=$.update(b),Re=b.material;Re.visible&&p.push(b,be,Re,Y,Te.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Xe.intersectsObject(b))){const be=$.update(b),Re=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Te.copy(b.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Te.copy(be.boundingSphere.center)),Te.applyMatrix4(b.matrixWorld).applyMatrix4(ee)),Array.isArray(Re)){const Ee=be.groups;for(let Be=0,ze=Ee.length;Be<ze;Be++){const Fe=Ee[Be],Ye=Re[Fe.materialIndex];Ye&&Ye.visible&&p.push(b,be,Ye,Y,Te.z,Fe)}}else Re.visible&&p.push(b,be,Re,Y,Te.z,null)}}const pe=b.children;for(let be=0,Re=pe.length;be<Re;be++)ws(pe[be],V,Y,j)}function jo(b,V,Y,j){const G=b.opaque,pe=b.transmissive,be=b.transparent;f.setupLightsView(Y),ke===!0&&me.setGlobalState(y.clippingPlanes,Y),j&&te.viewport(C.copy(j)),G.length>0&&wr(G,V,Y),pe.length>0&&wr(pe,V,Y),be.length>0&&wr(be,V,Y),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function Ko(b,V,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[j.id]===void 0&&(f.state.transmissionRenderTarget[j.id]=new pi(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?xr:Pn,minFilter:ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const pe=f.state.transmissionRenderTarget[j.id],be=j.viewport||C;pe.setSize(be.z*y.transmissionResolutionScale,be.w*y.transmissionResolutionScale);const Re=y.getRenderTarget(),Ee=y.getActiveCubeFace(),Be=y.getActiveMipmapLevel();y.setRenderTarget(pe),y.getClearColor(D),P=y.getClearAlpha(),P<1&&y.setClearColor(16777215,.5),y.clear(),Ve&&ce.render(Y);const ze=y.toneMapping;y.toneMapping=Xn;const Fe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),f.setupLightsView(j),ke===!0&&me.setGlobalState(y.clippingPlanes,j),wr(b,Y,j),ye.updateMultisampleRenderTarget(pe),ye.updateRenderTargetMipmap(pe),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let rt=0,ht=V.length;rt<ht;rt++){const lt=V[rt],at=lt.object,Oe=lt.geometry,dt=lt.material,Ze=lt.group;if(dt.side===An&&at.layers.test(j.layers)){const zt=dt.side;dt.side=Bt,dt.needsUpdate=!0,Zo(at,Y,j,Oe,dt,Ze),dt.side=zt,dt.needsUpdate=!0,Ye=!0}}Ye===!0&&(ye.updateMultisampleRenderTarget(pe),ye.updateRenderTargetMipmap(pe))}y.setRenderTarget(Re,Ee,Be),y.setClearColor(D,P),Fe!==void 0&&(j.viewport=Fe),y.toneMapping=ze}function wr(b,V,Y){const j=V.isScene===!0?V.overrideMaterial:null;for(let G=0,pe=b.length;G<pe;G++){const be=b[G],Re=be.object,Ee=be.geometry,Be=be.group;let ze=be.material;ze.allowOverride===!0&&j!==null&&(ze=j),Re.layers.test(Y.layers)&&Zo(Re,V,Y,Ee,ze,Be)}}function Zo(b,V,Y,j,G,pe){b.onBeforeRender(y,V,Y,j,G,pe),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(y,V,Y,j,b,pe),G.transparent===!0&&G.side===An&&G.forceSinglePass===!1?(G.side=Bt,G.needsUpdate=!0,y.renderBufferDirect(Y,V,j,G,b,pe),G.side=Yn,G.needsUpdate=!0,y.renderBufferDirect(Y,V,j,G,b,pe),G.side=An):y.renderBufferDirect(Y,V,j,G,b,pe),b.onAfterRender(y,V,Y,j,G,pe)}function Ar(b,V,Y){V.isScene!==!0&&(V=Me);const j=re.get(b),G=f.state.lights,pe=f.state.shadowsArray,be=G.state.version,Re=Z.getParameters(b,G.state,pe,V,Y),Ee=Z.getProgramCacheKey(Re);let Be=j.programs;j.environment=b.isMeshStandardMaterial?V.environment:null,j.fog=V.fog,j.envMap=(b.isMeshStandardMaterial?We:we).get(b.envMap||j.environment),j.envMapRotation=j.environment!==null&&b.envMap===null?V.environmentRotation:b.envMapRotation,Be===void 0&&(b.addEventListener("dispose",ae),Be=new Map,j.programs=Be);let ze=Be.get(Ee);if(ze!==void 0){if(j.currentProgram===ze&&j.lightsStateVersion===be)return Qo(b,Re),ze}else Re.uniforms=Z.getUniforms(b),b.onBeforeCompile(Re,y),ze=Z.acquireProgram(Re,Ee),Be.set(Ee,ze),j.uniforms=Re.uniforms;const Fe=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=me.uniform),Qo(b,Re),j.needsLights=Xu(b),j.lightsStateVersion=be,j.needsLights&&(Fe.ambientLightColor.value=G.state.ambient,Fe.lightProbe.value=G.state.probe,Fe.directionalLights.value=G.state.directional,Fe.directionalLightShadows.value=G.state.directionalShadow,Fe.spotLights.value=G.state.spot,Fe.spotLightShadows.value=G.state.spotShadow,Fe.rectAreaLights.value=G.state.rectArea,Fe.ltc_1.value=G.state.rectAreaLTC1,Fe.ltc_2.value=G.state.rectAreaLTC2,Fe.pointLights.value=G.state.point,Fe.pointLightShadows.value=G.state.pointShadow,Fe.hemisphereLights.value=G.state.hemi,Fe.directionalShadowMap.value=G.state.directionalShadowMap,Fe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Fe.spotShadowMap.value=G.state.spotShadowMap,Fe.spotLightMatrix.value=G.state.spotLightMatrix,Fe.spotLightMap.value=G.state.spotLightMap,Fe.pointShadowMap.value=G.state.pointShadowMap,Fe.pointShadowMatrix.value=G.state.pointShadowMatrix),j.currentProgram=ze,j.uniformsList=null,ze}function Jo(b){if(b.uniformsList===null){const V=b.currentProgram.getUniforms();b.uniformsList=ls.seqWithValue(V.seq,b.uniforms)}return b.uniformsList}function Qo(b,V){const Y=re.get(b);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.batchingColor=V.batchingColor,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.instancingMorph=V.instancingMorph,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function Wu(b,V,Y,j,G){V.isScene!==!0&&(V=Me),ye.resetTextureUnits();const pe=V.fog,be=j.isMeshStandardMaterial?V.environment:null,Re=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ki,Ee=(j.isMeshStandardMaterial?We:we).get(j.envMap||be),Be=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ze=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Fe=!!Y.morphAttributes.position,Ye=!!Y.morphAttributes.normal,rt=!!Y.morphAttributes.color;let ht=Xn;j.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ht=y.toneMapping);const lt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,at=lt!==void 0?lt.length:0,Oe=re.get(j),dt=f.state.lights;if(ke===!0&&(Q===!0||b!==S)){const Rt=b===S&&j.id===v;me.setState(j,b,Rt)}let Ze=!1;j.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==dt.state.version||Oe.outputColorSpace!==Re||G.isBatchedMesh&&Oe.batching===!1||!G.isBatchedMesh&&Oe.batching===!0||G.isBatchedMesh&&Oe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Oe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Oe.instancing===!1||!G.isInstancedMesh&&Oe.instancing===!0||G.isSkinnedMesh&&Oe.skinning===!1||!G.isSkinnedMesh&&Oe.skinning===!0||G.isInstancedMesh&&Oe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Oe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Oe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Oe.instancingMorph===!1&&G.morphTexture!==null||Oe.envMap!==Ee||j.fog===!0&&Oe.fog!==pe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==me.numPlanes||Oe.numIntersection!==me.numIntersection)||Oe.vertexAlphas!==Be||Oe.vertexTangents!==ze||Oe.morphTargets!==Fe||Oe.morphNormals!==Ye||Oe.morphColors!==rt||Oe.toneMapping!==ht||Oe.morphTargetsCount!==at)&&(Ze=!0):(Ze=!0,Oe.__version=j.version);let zt=Oe.currentProgram;Ze===!0&&(zt=Ar(j,V,G));let vi=!1,Ht=!1,nr=!1;const ft=zt.getUniforms(),Yt=Oe.uniforms;if(te.useProgram(zt.program)&&(vi=!0,Ht=!0,nr=!0),j.id!==v&&(v=j.id,Ht=!0),vi||S!==b){te.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ft.setValue(U,"projectionMatrix",b.projectionMatrix),ft.setValue(U,"viewMatrix",b.matrixWorldInverse);const Ft=ft.map.cameraPosition;Ft!==void 0&&Ft.setValue(U,ge.setFromMatrixPosition(b.matrixWorld)),De.logarithmicDepthBuffer&&ft.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ft.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Ht=!0,nr=!0)}if(G.isSkinnedMesh){ft.setOptional(U,G,"bindMatrix"),ft.setOptional(U,G,"bindMatrixInverse");const Rt=G.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),ft.setValue(U,"boneTexture",Rt.boneTexture,ye))}G.isBatchedMesh&&(ft.setOptional(U,G,"batchingTexture"),ft.setValue(U,"batchingTexture",G._matricesTexture,ye),ft.setOptional(U,G,"batchingIdTexture"),ft.setValue(U,"batchingIdTexture",G._indirectTexture,ye),ft.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&ft.setValue(U,"batchingColorTexture",G._colorsTexture,ye));const jt=Y.morphAttributes;if((jt.position!==void 0||jt.normal!==void 0||jt.color!==void 0)&&q.update(G,Y,zt),(Ht||Oe.receiveShadow!==G.receiveShadow)&&(Oe.receiveShadow=G.receiveShadow,ft.setValue(U,"receiveShadow",G.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Yt.envMap.value=Ee,Yt.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&V.environment!==null&&(Yt.envMapIntensity.value=V.environmentIntensity),Ht&&(ft.setValue(U,"toneMappingExposure",y.toneMappingExposure),Oe.needsLights&&qu(Yt,nr),pe&&j.fog===!0&&oe.refreshFogUniforms(Yt,pe),oe.refreshMaterialUniforms(Yt,j,k,B,f.state.transmissionRenderTarget[b.id]),ls.upload(U,Jo(Oe),Yt,ye)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ls.upload(U,Jo(Oe),Yt,ye),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ft.setValue(U,"center",G.center),ft.setValue(U,"modelViewMatrix",G.modelViewMatrix),ft.setValue(U,"normalMatrix",G.normalMatrix),ft.setValue(U,"modelMatrix",G.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Rt=j.uniformsGroups;for(let Ft=0,As=Rt.length;Ft<As;Ft++){const Zn=Rt[Ft];Le.update(Zn,zt),Le.bind(Zn,zt)}}return zt}function qu(b,V){b.ambientLightColor.needsUpdate=V,b.lightProbe.needsUpdate=V,b.directionalLights.needsUpdate=V,b.directionalLightShadows.needsUpdate=V,b.pointLights.needsUpdate=V,b.pointLightShadows.needsUpdate=V,b.spotLights.needsUpdate=V,b.spotLightShadows.needsUpdate=V,b.rectAreaLights.needsUpdate=V,b.hemisphereLights.needsUpdate=V}function Xu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,V,Y){const j=re.get(b);j.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),re.get(b.texture).__webglTexture=V,re.get(b.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Y,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,V){const Y=re.get(b);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0};const Yu=U.createFramebuffer();this.setRenderTarget=function(b,V=0,Y=0){L=b,T=V,E=Y;let j=!0,G=null,pe=!1,be=!1;if(b){const Ee=re.get(b);if(Ee.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(U.FRAMEBUFFER,null),j=!1;else if(Ee.__webglFramebuffer===void 0)ye.setupRenderTarget(b);else if(Ee.__hasExternalTextures)ye.rebindTextures(b,re.get(b.texture).__webglTexture,re.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Fe=b.depthTexture;if(Ee.__boundDepthTexture!==Fe){if(Fe!==null&&re.has(Fe)&&(b.width!==Fe.image.width||b.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ye.setupDepthRenderbuffer(b)}}const Be=b.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(be=!0);const ze=re.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ze[V])?G=ze[V][Y]:G=ze[V],pe=!0):b.samples>0&&ye.useMultisampledRTT(b)===!1?G=re.get(b).__webglMultisampledFramebuffer:Array.isArray(ze)?G=ze[Y]:G=ze,C.copy(b.viewport),N.copy(b.scissor),O=b.scissorTest}else C.copy(xe).multiplyScalar(k).floor(),N.copy(Ie).multiplyScalar(k).floor(),O=He;if(Y!==0&&(G=Yu),te.bindFramebuffer(U.FRAMEBUFFER,G)&&j&&te.drawBuffers(b,G),te.viewport(C),te.scissor(N),te.setScissorTest(O),pe){const Ee=re.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ee.__webglTexture,Y)}else if(be){const Ee=V;for(let Be=0;Be<b.textures.length;Be++){const ze=re.get(b.textures[Be]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Be,ze.__webglTexture,Y,Ee)}}else if(b!==null&&Y!==0){const Ee=re.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ee.__webglTexture,Y)}v=-1},this.readRenderTargetPixels=function(b,V,Y,j,G,pe,be,Re=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Ee=Ee[be]),Ee){te.bindFramebuffer(U.FRAMEBUFFER,Ee);try{const Be=b.textures[Re],ze=Be.format,Fe=Be.type;if(!De.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=b.width-j&&Y>=0&&Y<=b.height-G&&(b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Re),U.readPixels(V,Y,j,G,de.convert(ze),de.convert(Fe),pe))}finally{const Be=L!==null?re.get(L).__webglFramebuffer:null;te.bindFramebuffer(U.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(b,V,Y,j,G,pe,be,Re=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Ee=Ee[be]),Ee)if(V>=0&&V<=b.width-j&&Y>=0&&Y<=b.height-G){te.bindFramebuffer(U.FRAMEBUFFER,Ee);const Be=b.textures[Re],ze=Be.format,Fe=Be.type;if(!De.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ye),U.bufferData(U.PIXEL_PACK_BUFFER,pe.byteLength,U.STREAM_READ),b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Re),U.readPixels(V,Y,j,G,de.convert(ze),de.convert(Fe),0);const rt=L!==null?re.get(L).__webglFramebuffer:null;te.bindFramebuffer(U.FRAMEBUFFER,rt);const ht=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Cf(U,ht,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ye),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,pe),U.deleteBuffer(Ye),U.deleteSync(ht),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,V=null,Y=0){const j=Math.pow(2,-Y),G=Math.floor(b.image.width*j),pe=Math.floor(b.image.height*j),be=V!==null?V.x:0,Re=V!==null?V.y:0;ye.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,be,Re,G,pe),te.unbindTexture()};const ju=U.createFramebuffer(),Ku=U.createFramebuffer();this.copyTextureToTexture=function(b,V,Y=null,j=null,G=0,pe=null){pe===null&&(G!==0?(vr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=G,G=0):pe=0);let be,Re,Ee,Be,ze,Fe,Ye,rt,ht;const lt=b.isCompressedTexture?b.mipmaps[pe]:b.image;if(Y!==null)be=Y.max.x-Y.min.x,Re=Y.max.y-Y.min.y,Ee=Y.isBox3?Y.max.z-Y.min.z:1,Be=Y.min.x,ze=Y.min.y,Fe=Y.isBox3?Y.min.z:0;else{const jt=Math.pow(2,-G);be=Math.floor(lt.width*jt),Re=Math.floor(lt.height*jt),b.isDataArrayTexture?Ee=lt.depth:b.isData3DTexture?Ee=Math.floor(lt.depth*jt):Ee=1,Be=0,ze=0,Fe=0}j!==null?(Ye=j.x,rt=j.y,ht=j.z):(Ye=0,rt=0,ht=0);const at=de.convert(V.format),Oe=de.convert(V.type);let dt;V.isData3DTexture?(ye.setTexture3D(V,0),dt=U.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(ye.setTexture2DArray(V,0),dt=U.TEXTURE_2D_ARRAY):(ye.setTexture2D(V,0),dt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const Ze=U.getParameter(U.UNPACK_ROW_LENGTH),zt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),vi=U.getParameter(U.UNPACK_SKIP_PIXELS),Ht=U.getParameter(U.UNPACK_SKIP_ROWS),nr=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,lt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,lt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Be),U.pixelStorei(U.UNPACK_SKIP_ROWS,ze),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Fe);const ft=b.isDataArrayTexture||b.isData3DTexture,Yt=V.isDataArrayTexture||V.isData3DTexture;if(b.isDepthTexture){const jt=re.get(b),Rt=re.get(V),Ft=re.get(jt.__renderTarget),As=re.get(Rt.__renderTarget);te.bindFramebuffer(U.READ_FRAMEBUFFER,Ft.__webglFramebuffer),te.bindFramebuffer(U.DRAW_FRAMEBUFFER,As.__webglFramebuffer);for(let Zn=0;Zn<Ee;Zn++)ft&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,re.get(b).__webglTexture,G,Fe+Zn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,re.get(V).__webglTexture,pe,ht+Zn)),U.blitFramebuffer(Be,ze,be,Re,Ye,rt,be,Re,U.DEPTH_BUFFER_BIT,U.NEAREST);te.bindFramebuffer(U.READ_FRAMEBUFFER,null),te.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||re.has(b)){const jt=re.get(b),Rt=re.get(V);te.bindFramebuffer(U.READ_FRAMEBUFFER,ju),te.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ku);for(let Ft=0;Ft<Ee;Ft++)ft?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,jt.__webglTexture,G,Fe+Ft):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,jt.__webglTexture,G),Yt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Rt.__webglTexture,pe,ht+Ft):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Rt.__webglTexture,pe),G!==0?U.blitFramebuffer(Be,ze,be,Re,Ye,rt,be,Re,U.COLOR_BUFFER_BIT,U.NEAREST):Yt?U.copyTexSubImage3D(dt,pe,Ye,rt,ht+Ft,Be,ze,be,Re):U.copyTexSubImage2D(dt,pe,Ye,rt,Be,ze,be,Re);te.bindFramebuffer(U.READ_FRAMEBUFFER,null),te.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Yt?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(dt,pe,Ye,rt,ht,be,Re,Ee,at,Oe,lt.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(dt,pe,Ye,rt,ht,be,Re,Ee,at,lt.data):U.texSubImage3D(dt,pe,Ye,rt,ht,be,Re,Ee,at,Oe,lt):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,pe,Ye,rt,be,Re,at,Oe,lt.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,pe,Ye,rt,lt.width,lt.height,at,lt.data):U.texSubImage2D(U.TEXTURE_2D,pe,Ye,rt,be,Re,at,Oe,lt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ze),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,zt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,vi),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ht),U.pixelStorei(U.UNPACK_SKIP_IMAGES,nr),pe===0&&V.generateMipmaps&&U.generateMipmap(dt),te.unbindTexture()},this.initRenderTarget=function(b){re.get(b).__webglFramebuffer===void 0&&ye.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ye.setTextureCube(b,0):b.isData3DTexture?ye.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ye.setTexture2DArray(b,0):ye.setTexture2D(b,0),te.unbindTexture()},this.resetState=function(){T=0,E=0,L=null,te.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const zi={"girl-standing":{eyes:[[.385,.378],[.565,.362]],seeds:[[.714,.432],[.225,.449]]},"girl-reading":{eyes:[[.474,.388],[.606,.386]],seeds:[]},"girl-cooking":{eyes:[[.43,.384],[.613,.369]],seeds:[[.7612,.4402],[.2712,.4562],[.72768,.44305],[.24554,.45957]]},"girl-tasting":{seeds:[]},"girl-adventure-cooking":{seeds:[[.7855,.4368],[.2615,.4516],[.77542,.43736],[.24246,.45501]],eyes:[[.4307,.3847],[.614,.3696]]},"girl-adventure-reading":{seeds:[[.2393,.3958],[.25781,.39974],[.6748,.44596],[.7168,.84375]],eyes:[[.4819,.3818],[.6138,.3799]]},"girl-adventure-standing":{seeds:[[.7528,.4369],[.2071,.4386],[.76281,.44089],[.1637,.43918]],eyes:[[.4003,.3669],[.5802,.3535]]},"girl-adventure-tasting":{seeds:[]},"girl-forest-cooking":{seeds:[[.743,.436],[.2771,.4496],[.7743,.43825],[.23128,.45134]],eyes:[[.424,.3785],[.6,.3654]]},"girl-forest-reading":{seeds:[[.2471,.416],[.23438,.41732],[.61328,.45117],[.71387,.85221]],eyes:[[.4722,.3857],[.6045,.3848]]},"girl-forest-standing":{seeds:[[.7272,.4415],[.2372,.4529],[.67372,.44032],[.20824,.45174]],eyes:[[.3925,.3775],[.5757,.3621]]},"girl-forest-tasting":{seeds:[[.2831,.5087],[.25026,.50929]]},"girl-school-cooking":{seeds:[[.7553,.43],[.2715,.4368],[.1933,.4795],[.77654,.43109],[.2581,.44077]],eyes:[[.4274,.3693],[.6056,.3554]]},"girl-school-reading":{seeds:[[.2646,.4121],[.29688,.41667],[.64746,.45182]],eyes:[[.4722,.3861],[.6045,.3844]]},"girl-school-standing":{seeds:[[.235,.45],[.22272,.44832]],eyes:[[.3859,.3775],[.5674,.3626]]},"girl-school-tasting":{seeds:[[.7395,.4808],[.2728,.505],[.73436,.48637],[.37949,.5062]]},"girl-star-cooking":{seeds:[[.7341,.4394],[.2816,.4502],[.1944,.4883],[.79106,.44109],[.2324,.45191]],eyes:[[.4212,.3768],[.6,.3628]]},"girl-star-reading":{seeds:[[.67676,.45573],[.33301,.4401]],eyes:[[.5034,.3857],[.635,.384]]},"girl-star-standing":{seeds:[[.2,.42],[.76,.43]],eyes:[[.389,.355],[.573,.342]],source:"assets/2d/outfits/star-standing-hat.png"},"girl-star-tasting":{seeds:[[.2813,.4919],[.7392,.4969],[.37269,.49442],[.74846,.49752]]},"girl-tea-cooking":{seeds:[[.7598,.4339],[.267,.4505],[.79888,.43793],[.2648,.4533]],eyes:[[.4296,.3813],[.6134,.367]]},"girl-tea-reading":{seeds:[[.2568,.416],[.20996,.41927],[.64062,.44401],[.68262,.85026]],eyes:[[.4697,.3831],[.6021,.3809]]},"girl-tea-standing":{seeds:[[.7397,.4469],[.2436,.4509],[.7842,.44286],[.22247,.45029]],eyes:[[.4032,.3786],[.5868,.3631]]},"girl-tea-tasting":{seeds:[[.2841,.4944],[.27282,.49628]]}};function wu(n,e,t){n.userData.key=e;const i={time:{value:0},moving:{value:0},joy:{value:0},blink:{value:0},showcase:{value:new X},headScale:{value:e.endsWith("-reading")?1.12:1},eyeA:{value:new nt(...(t==null?void 0:t[0])??[-2,-2])},eyeB:{value:new nt(...(t==null?void 0:t[1])??[-2,-2])}};return n.material.onBeforeCompile=r=>{Object.assign(r.uniforms,i),r.vertexShader=`uniform float time; uniform float moving; uniform float joy; uniform float headScale; uniform vec3 showcase;
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
   `)},n.material.customProgramCacheKey=()=>e,n.userData.uniforms=i,n}function W0(n,e){var y;const t=document.createElement("canvas");t.className="companion-portrait",t.setAttribute("role","img"),t.setAttribute("aria-label","面向你的松团子");const i=new Tu({canvas:t,alpha:!0,antialias:!0});i.setPixelRatio(Math.min(devicePixelRatio,2)),i.setClearColor(0,0);const r=new pu,s=new $o(-.5,.5,.5,-.5,.1,10);s.position.z=2;const a=new xu().load(n,()=>{if(u)return;const A=a.image.width/a.image.height;c.scale.x=A,s.left=-A/2,s.right=A/2,s.updateProjectionMatrix(),t.style.aspectRatio=String(A),f(),t.dataset.ready="true"});a.colorSpace=vt;const o=e==="acorn"?"girl-standing":`girl-${e}-standing`,c=wu(new _t(new Dt(1,1,36,52),new $t({map:a,transparent:!0})),o,(y=zi[o])==null?void 0:y.eyes);r.add(c);const l=matchMedia("(prefers-reduced-motion: reduce)");let u=!1,d=0,h=0,m=performance.now(),g="idle",_=0,p=0;function f(){const A=t.getBoundingClientRect();A.width&&A.height&&i.setSize(A.width,A.height,!1)}const w=new ResizeObserver(f);w.observe(t);function M(A){const T=Math.min((A-m)/1e3,.1);if(m=A,t.isConnected&&!document.hidden){l.matches||(h+=T),_+=(+(g==="replying")-_)*Math.min(1,T*5);const E=l.matches?0:h,L=c.userData.uniforms,v=E%5.7,S=v>4.9&&v<5.13?Math.sin((v-4.9)/.23*Math.PI):0,C=g==="thinking"?.25+Math.sin(E*.7)*.2:g==="listening"?.25:0;p+=(C-p)*Math.min(1,T*4),L.time.value=E,L.blink.value=S,L.joy.value=0,L.moving.value=0,L.showcase.value.set(l.matches?0:_*(.2+.1*Math.sin(E*2)),l.matches?0:p+_*Math.sin(E*2.4)*.22,l.matches?0:Math.sin(E*.8)*.12),i.render(r,s)}d=requestAnimationFrame(M)}return d=requestAnimationFrame(M),{canvas:t,setState(A){g=A,t.dataset.motion=A},dispose(){u=!0,cancelAnimationFrame(d),w.disconnect(),a.dispose(),c.geometry.dispose(),c.material.dispose(),i.dispose()}}}function q0({dialog:n,isOpen:e,getText:t}){let i=null,r="";function s(){i==null||i.remove(),i=null}function a(c=!1,l=null){if(s(),i=document.createElement("div"),i.className="story-creation-menu"+(c?" selection-menu":""),i.setAttribute("role","dialog"),i.setAttribute("aria-label",c?"选中文字操作":"选择创作方式"),i.innerHTML=`${c?"":"<strong>选择创作方式</strong>"}<div class="creation-options">${c?'<button data-create="copy">复制</button>':""}<button data-create="video">视频创作</button><button data-create="comic">漫画创作</button>${c?"":'<button data-create="text">文字发布</button>'}</div><p class="creation-message" role="status" hidden></p>${c?"":'<button class="creation-cancel" data-create="close">取消</button>'}`,i.addEventListener("pointerdown",u=>{i.classList.contains("selection-menu")&&u.preventDefault()}),i.addEventListener("click",async u=>{var g;const d=(g=u.target.closest("[data-create]"))==null?void 0:g.dataset.create;if(!d)return;if(d==="close"){s();return}const h=i.querySelector(".creation-message");if(d==="copy"){try{await navigator.clipboard.writeText(r),h.textContent="已复制"}catch{h.textContent="复制未完成，请使用系统复制菜单。"}h.hidden=!1;return}const m={video:"视频创作",comic:"漫画创作",text:"文字发布"}[d];i.className="story-creation-menu",i.style.left="",i.style.top="",i.setAttribute("aria-label",m),i.innerHTML=`<strong>${m}</strong><label class="creation-text-label">创作文本<textarea rows="5" aria-label="创作文本"></textarea></label><button class="creation-cancel" data-create="close">关闭</button>`,i.querySelector("textarea").value=r}),n.append(i),c&&l){const u=n.getBoundingClientRect(),d=i.offsetWidth,h=i.offsetHeight;i.style.left=Math.max(8,Math.min(u.width-d-8,l.left-u.left+l.width/2-d/2))+"px",i.style.top=Math.max(8,l.top-u.top-h-12)+"px"}}function o(){if(!e()||i&&!i.classList.contains("selection-menu"))return;const c=window.getSelection(),l=n.querySelector(".story-prose");if(!(c!=null&&c.rangeCount)||c.isCollapsed||!(l!=null&&l.contains(c.anchorNode))||!l.contains(c.focusNode)){i!=null&&i.classList.contains("selection-menu")&&s();return}const u=c.toString().trim();u===r&&i||(r=u,r&&a(!0,c.getRangeAt(0).getBoundingClientRect()))}return document.addEventListener("selectionchange",o),n.addEventListener("pointerdown",c=>{i&&!i.contains(c.target)&&s()}),n.addEventListener("keydown",c=>{c.key==="Escape"&&i&&(c.preventDefault(),c.stopPropagation(),s())}),{open(){r=t(),a()},close:s}}function Zt(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function Gn(n){return[...n.memories??[],...n.records.map((e,t)=>({id:e.id??`old-${t}`,title:e.name,summary:e.name,day:e.day,slot:e.slot,createdAt:e.createdAt,kind:"life",activity:X0(e.name)}))].sort((e,t)=>(t.createdAt??"").localeCompare(e.createdAt??""))}function X0(n){return/烘焙/.test(n)?"baking":/课程/.test(n)?"course":/采集/.test(n)?"gather":/小铺/.test(n)?"shop":/薄荷|约定|甜点/.test(n)?"story":"home"}function Au(n,e=Zt()){return!(n.memoryStamps??[]).includes(e)&&Gn(n).some(t=>t.createdAt&&Zt(new Date(t.createdAt))===e&&(t.kind==="life"||t.event))}function Y0(n,e=Zt()){return Au(n,e)?(n.memoryStamps??(n.memoryStamps=[]),n.memoryStamps.push(e),n.coins+=Ad,!0):!1}const j0={id:"main-prologue",kind:"prologue",title:"序章 · 橡果小屋的来信",summary:"秋天精灵松团子住进橡果小屋，开始学习人类的生活，并期待七日后的秋收祭。",chapters:[{title:"秋天，推开了小屋的门",cgId:null,paragraphs:["榛果林的秋天，总比镇上来得早一些。风拂过树梢，松团子竖起橙棕色的松鼠耳朵，听见橡果落在苔藓上的轻响。金色的双麻花辫垂在肩头，蓬松的尾巴替她拢住了清晨的凉意。","森林的季节，她再熟悉不过。可人类为什么要把果实烤成甜点，为什么把喜欢的东西分给别人，又为什么会在一盏灯下等另一个人回来？这些问题，书里似乎没有一句就能说清的答案。","于是，她来到林边的橡果小屋。窗边有一把阅读椅，厨房里有一只安静的烤箱，门外的小路通向魔女学院，也通向小镇和烘焙小铺。她的学院朋友薄荷，也在为即将到来的秋收祭做准备。","再过七天，镇上的人们就会聚在一起庆祝丰收。松团子还不知道自己会带去什么，也没有急着给未来写下答案。她想先读懂一页书，学会一道配方，再认真认识一个人。","你推开门时，她正把一枚秋叶夹进书里。粉色星形的眼睛从书页上抬起来，先是好奇，随后露出一点笑意。她把身旁的位置让出来，像是为一段还没开始的故事留下一页空白。",`「今天，想把时间花在什么美好的事上？」
窗外的风吹动了花帘。你们的日子，就从这里开始。`]}]},bt=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),K0=n=>`/acorn-witch-atelier/assets/2d/${n}.webp`;function Z0({dialog:n,getState:e,save:t,api:i,getStatus:r,isOpen:s}){let a="main",o=null,c=0,l=0,u=[],d=!1,h=[],m=!1,g="",_="",p=null;const f=()=>d?h:a==="mine"?e().characterStories??[]:[j0,...(r().canon??[]).map(D=>({id:D.id,kind:"canon",title:D.title,summary:D.summary,chapters:[{title:D.title,paragraphs:D.summary.split(/\n+/).filter(Boolean)}]}))],w=()=>f().find(D=>D.id===o)??f().at(-1),M=q0({dialog:n,isOpen:s,getText:()=>{var D;return((D=w())==null?void 0:D.chapters.map(P=>P.paragraphs.join(`
`)).join(`

`))??""}}),y=()=>Vn.filter(D=>{var P;return(((P=e().collection)==null?void 0:P.cgs)??[]).includes(D.id)}),A=(D,P,I="")=>`<button data-story="${P}" ${I}>${D}</button>`;function T(D){n.className="story-book",n.innerHTML=`${Oa("stories")}${D}`}function E(){if(!s())return;const D=w(),P=r();if(_){N();return}T(`${d?"":`<nav class="story-branches" aria-label="故事分支">${A("主线","branch",`data-branch="main" aria-pressed="${a==="main"}"`)}${A("我的支线","branch",`data-branch="mine" aria-pressed="${a==="mine"}"`)}</nav>`}<div class="story-tools">${f().length?`<select id="story-volume" aria-label="选择故事">${f().map(I=>`<option value="${bt(I.id)}" ${I.id===(D==null?void 0:D.id)?"selected":""}>${bt(I.title)}</option>`).join("")}</select>`:`<span>${d?"作者稿箱":"属于你的篇章"}</span>`}${D?A("分享","share"):""}${A(d?"我的故事":"编成新篇",d?"mine":"compose",m?"disabled":"")}${P.creator?A(d?"刷新稿箱":"作者稿箱","inbox",m?"disabled":""):""}</div>${m?'<p class="novel-message" role="status">正在把经历编成故事，请稍等…</p>':""}${g?`<p class="novel-message novel-error" role="alert">${bt(g)}</p>`:""}${D?v(D):L()}`),D&&(S(),C())}function L(){return`<div class="novel-empty"><span class="novel-kicker">序 · 还未落笔</span><h1>${d?"等待一封来稿":"把日子，写成故事"}</h1><img src="${K0("forest-bg")}" alt="榛果林中的小路"><p>${d?"玩家交来的故事会留在这里。你可以阅读、改写，再收录为主线。":"松团子在小屋、学院和森林里的经历，<br>会成为这本书的章节。"}</p>${d?"":A("用已有经历写第一篇","compose",m?"disabled":"")}</div>`}function v(D){c=Math.min(c,D.chapters.length-1);const P=D.kind==="prologue",I=P||D.kind==="canon",B=D.chapters[c],k=y().find(W=>W.id===B.cgId);return`<nav class="chapter-tabs" aria-label="故事章节">${D.chapters.map((W,fe)=>A(["I","II","III","IV","V","VI"][fe],"chapter",`data-index="${fe}" aria-label="第 ${fe+1} 章：${bt(W.title)}" aria-current="${fe===c?"page":"false"}"`)).join("")}</nav><article class="novel-page"><header><small>${P?"主线序章":"第 "+(c+1)+" 章"}</small><h1>${bt(B.title)}</h1></header>${k?`<figure class="novel-illustration" style="--cg-focus:${Wl[k.id]}"><button data-story="art" aria-label="查看完整插图"><img class="novel-art" src="/acorn-witch-atelier/assets/rewards/cg-${k.id}.webp" alt="${bt(k.name)}"></button><figcaption>${bt(k.name)} · 查看完整插图</figcaption></figure>`:""}<div class="story-prose" aria-label="小说正文" aria-live="polite"></div></article><footer class="novel-footer"><div class="novel-paging">${A("‹ 上一页","prev")}<span id="story-page-label"></span>${A("下一页 ›","next")}</div>${!I&&!d&&y().length?`<label class="story-art-picker">章节插图<select id="story-illustration" aria-label="章节插图" ${D.submissionId?"disabled":""}><option value="">纯文字</option>${y().map(W=>`<option value="${W.id}" ${(k==null?void 0:k.id)===W.id?"selected":""}>${bt(W.name)}</option>`).join("")}</select></label>`:""}<div class="novel-actions"><span>${I?P?"主线 · 故事的起点":"主线 · 已收录剧情":d?bt(D.author)+" · "+(D.canonId?"已收录主线":"待作者整理"):"AI 编写 · "+(D.submissionId?"已交稿":"个人故事")}</span>${I?"":d?A(D.canonId?"已收录":"整理为主线","review",D.canonId?"disabled":""):A(D.submissionId?"已交给作者":"交给作者","submit",D.submissionId?"disabled":"")}</div></footer>`}function S(){const D=n.querySelector(".story-prose");if(!D)return;const P=w().chapters[c].paragraphs;u=[];let I=[];const B=k=>(D.innerHTML=k.map(W=>`<p>${bt(W)}</p>`).join(""),D.scrollHeight<=D.clientHeight);for(const k of P){let W=Array.from(k);for(;W.length;){if(B([...I,W.join("")])){I.push(W.join(""));break}let fe=0,xe=W.length;for(;fe<xe;){const He=Math.ceil((fe+xe)/2);B([...I,W.slice(0,He).join("")])?fe=He:xe=He-1}if(fe===0&&I.length){u.push(I),I=[];continue}const Ie=Math.max(1,fe);I.push(W.splice(0,Ie).join("")),u.push(I),I=[]}}I.length&&u.push(I),l=Math.min(l,Math.max(0,u.length-1))}function C(){const D=n.querySelector(".story-prose");D&&(D.innerHTML=(u[l]??[]).map(P=>`<p>${bt(P)}</p>`).join(""),n.querySelector("#story-page-label").textContent=`第 ${l+1} 页 / 共 ${u.length} 页`,n.querySelector("[data-story=prev]").disabled=l===0&&c===0,n.querySelector("[data-story=next]").disabled=l===u.length-1&&c===w().chapters.length-1)}function N(){const D=w(),P=_==="compose",I=_==="review";if(_==="art"){const B=y().find(k=>k.id===D.chapters[c].cgId);T(`<figure class="story-full-art"><img src="/acorn-witch-atelier/assets/rewards/cg-${B.id}.webp" alt="${bt(B.name)}"><figcaption>${bt(B.name)}</figcaption></figure><div class="full-art-back">${A("返回阅读","cancel")}${A("分享插图","share-art")}</div>`);return}T(`<form class="story-editor" id="story-editor"><small>${P?"让经历成为篇章":I?"作者工作台":"故事来稿"}</small><h1>${P?"编成自己的故事":I?"发展为主线剧情":"交给故事的作者"}</h1><p>${P?"融合最近 40 段经历与已确认主线。生成后另存为新篇，原有故事保留。":I?"以这篇故事为素材，确认你要采用的主线版本。收录后，AI 会读取这段主线。":"发送当前故事的固定版本到本机作者稿箱，由作者阅读、改写与收录。"}</p>${P?'<label>想突出什么？<textarea name="preference" maxlength="300" rows="3" placeholder="例如：松团子第一次学会分享的心情（选填）"></textarea></label>':I?`<label>主线标题<input name="title" maxlength="60" value="${bt(D.title)}" required></label><label>确认后的主线剧情<textarea name="summary" maxlength="2000" required>${bt(D.summary)}</textarea></label><label>共创作者<input name="author" maxlength="60" value="${bt(D.author)}"></label>`:`<h2>${bt(D.title)}</h2><label>你的署名<input name="author" maxlength="60" placeholder="共创玩家"></label><p>当前仅支持本机收稿，尚未开放跨玩家投稿。</p>`}<p class="editor-error" role="alert">${bt(g)}</p><div class="story-editor-actions">${A("返回阅读","cancel",m?"disabled":"")}<button type="submit" ${m||P&&(!r().chat||!Gn(e()).length)?"disabled":""}>${m?"正在处理…":P?"开始编写":I?"确认收录主线":"确认交稿"}</button></div>${P?`<p class="story-connection-note" ${r().chat?"hidden":""}>豆包尚未连接，已有故事仍可阅读。</p>`:""}${P&&!Gn(e()).length?"<p>先完成一次活动或留下一段对话。</p>":""}</form>`)}async function O(D){var k;if(D.target.id!=="story-editor"||(D.preventDefault(),m))return;const P=Object.fromEntries(new FormData(D.target)),I=_,B=w();m=!0,g="",p=new AbortController,D.target.querySelectorAll("button").forEach(W=>W.disabled=!0),D.target.querySelector("button[type=submit]").textContent=I==="compose"?"正在编写…":"正在处理…";try{if(I==="compose"){const W=e(),fe=Gn(W).slice(0,40).reverse().map(({id:He,title:Xe,summary:ke,day:Q,slot:ee,kind:ge,event:Te})=>({id:He,title:Xe,summary:ke,day:Q,slot:ee,kind:ge,event:Te})),xe=await i("/stories/generate",{memories:fe,preference:P.preference,cgIds:((k=W.collection)==null?void 0:k.cgs)??[],progress:{day:W.day,slot:W.slot,story:W.story,ending:W.ending}},p.signal);if(!s())return;const Ie={...xe.story,id:crypto.randomUUID(),createdAt:new Date().toISOString(),sourceIds:fe.map(He=>He.id)};W.characterStories??(W.characterStories=[]),W.characterStories.push(Ie),t(),a="mine",o=Ie.id,c=0,l=0,d=!1}else if(I==="submit"){const W=await i("/stories/submit",{storyId:B.id,story:{title:B.title,summary:B.summary,chapters:B.chapters},author:P.author},p.signal);B.submissionId=W.entry.id,t()}else{const W=await i("/canon",{...P,submissionId:B.id},p.signal);B.canonId=W.entry.id,r().canon.push(W.entry)}_="",m=!1,E()}catch(W){if(W.name==="AbortError")return;if(m=!1,g=W.message,s()){const fe=n.querySelector(".editor-error");fe&&(fe.textContent=g,n.querySelectorAll(".story-editor button").forEach(xe=>xe.disabled=!1),n.querySelector("button[type=submit]").textContent="重试")}}}return n.addEventListener("submit",O),n.addEventListener("change",D=>{if(D.target.id==="story-illustration"&&!d&&w().kind!=="prologue"&&!w().submissionId){const P=D.target.value;w().chapters[c].cgId=y().some(I=>I.id===P)?P:null,t(),l=0,E()}D.target.id==="story-volume"&&(o=D.target.value,c=0,l=0,E())}),n.addEventListener("click",async D=>{const P=D.target.closest("[data-story]");if(!P||P.disabled||m)return;const I=P.dataset.story;if(g="",I==="share"){M.open();return}if(I==="share-art"){P.disabled=!0;try{await Ul(y().find(B=>B.id===w().chapters[c].cgId),e())}catch(B){g=B.message,_="",E()}finally{P.disabled=!1}return}if((I==="compose"||I==="submit"||I==="review"||I==="art")&&(_=I,E()),I==="cancel"&&(_="",E()),I==="branch"&&(M.close(),a=P.dataset.branch,o=null,c=0,l=0,E()),I==="chapter"&&(c=Number(P.dataset.index),l=0,E()),I==="prev"&&(l>0?(l--,C()):c>0&&(c--,l=0,E(),l=u.length-1,C())),I==="next"&&(l<u.length-1?(l++,C()):c<w().chapters.length-1&&(c++,l=0,E())),I==="mine"&&(a="mine",d=!1,o=null,c=0,l=0,E()),I==="inbox"){m=!0,p=new AbortController;try{const B=await i("/stories/submissions",void 0,p.signal);if(!s())return;h=B.entries,d=!0,o=null,c=0,l=0}catch(B){B.name!=="AbortError"&&(g=B.message)}finally{m=!1,E()}}}),new ResizeObserver(()=>{s()&&!_&&w()&&(S(),C())}).observe(n),{open(){_="",g="",E()},refresh(){if(!_&&!m)E();else if(_==="compose"&&!m){const D=n.querySelector("button[type=submit]");D&&(D.disabled=!r().chat||!Gn(e()).length);const P=n.querySelector(".story-connection-note");P&&(P.hidden=r().chat)}},leave(){M.close(),p==null||p.abort(),m=!1,_=""}}}const Tt=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Ra="https://sjktg7i6ngh4etmcagt01.apigateway-cn-beijing.volceapi.com/api/companion",ts=n=>`/acorn-witch-atelier/assets/2d/${n}.webp`,Tl={home:"窗边闲聊",baking:"一起烘焙",course:"学院生活",gather:"榛果林探索",shop:"小铺营业",story:"朋友来信"},ns={home:"home-bg",baking:"kitchen-bg",course:"school-bg",gather:"forest-bg",shop:"kitchen-bg",story:"home-bg"},J0={history:'<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M3 5q7-2 12 2v23q-5-4-12-2zm26 0q-7-2-12 2v23q5-4 12-2z"/><path d="m6 11 6 1m-6 4 6 1m8-5 6-1m-6 6 6-1" fill="none" stroke="#fff2d7" stroke-width="1.5"/></svg>'},Pa=[{hint:"咦，这一页还夹着片叶子。",opening:"咦，这一页还夹着片叶子。叶脉像一张小地图……你觉得它通向哪里？"},{hint:"唔……这段我读了两遍。",opening:"书里说，烤甜点时的心情也会藏进味道里。那今天，你想尝到什么样的味道？"},{hint:"看到这里，忽然有点饿了。",opening:"刚读到一块还冒着热气的小蛋糕，我的肚子就响了……你现在最想吃什么？"},{hint:"要是我们也去走走呢……",opening:"书里的小路一直伸进森林深处。如果我们去散步，你想沿着溪水走，还是找一块树荫坐坐？"}],Q0={baking:"闻起来已经有点香了。你想在今天的甜点里藏一点什么小惊喜？",course:"刚才那段我还在琢磨……你觉得魔法最有意思的地方是什么？",gather:"嘘，叶子底下好像有动静。我们先蹲下来看看？",shop:"你说，客人推开门时，最先注意到的是香味，还是柜台里的甜点？",story:"读到这里，我有点想知道你的看法。要是你来回这封信，会先写什么？"};function e_({game:n,getState:e,getContext:t,save:i,refresh:r,pause:s,portrait:a,onActivity:o,onAlbum:c,onCG:l}){const u=document.createElement("dialog");u.id="memory-dialog",n.append(u);const d=document.createElement("button");d.id="character-talk",d.type="button",d.setAttribute("aria-label","和松团子聊天"),d.innerHTML='<span class=character-reaction><span class=character-reaction-text></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v12H10l-5 4v-4H4z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M8 8h8M8 12h5" stroke="currentColor" stroke-width="1.5"/></svg></span>',n.append(d);let h="",m={chat:!1,voice:!1,creator:!1,canon:[]},g=new Date(new Date().getFullYear(),new Date().getMonth(),1),_=Zt(),p="",f=null,w=!1,M=null,y=null,A=null,T="",E=!0,L="",v="",S=0,C=null,N=!1;const O=Z0({dialog:u,getState:e,save:i,api:xe,getStatus:()=>m,isOpen:()=>u.open&&h==="stories"});let D="",P=null;function I(){P==null||P.dispose(),P=null}function B(){P==null||P.setState(w?D?"replying":"thinking":L?"listening":"idle")}let k=Pa[0],W=0,fe=0;async function xe(te,_e,re){const ye=await fetch(Ra+te,{method:_e?"POST":"GET",headers:_e?{"Content-Type":"application/json"}:void 0,body:_e?JSON.stringify(_e):void 0,signal:re}),we=await ye.json();if(!ye.ok)throw new Error(we.error||"连接没有完成，请稍后再试。");return we}async function Ie(){try{m=await xe("/status")}catch{m={chat:!1,voice:!1,creator:!1,canon:[]}}u.open&&h==="chat"?Me():u.open&&h==="book"&&!C?Ue():u.open&&h==="stories"&&O.refresh()}const He=()=>({kitchen:"baking",school:"course",classroom:"course",garden:"gather",shop:"shop",story:"story"})[t().view]??"home";function Xe(){const te=t(),_e=te.collectionOpen||u.open||!!n.querySelector("#loading");if(d.hidden=_e||te.view!=="home"||!!te.panel,!d.hidden&&performance.now()>=fe){const re=Gn(e()).find(we=>we.title&&we.summary),ye=re?[...Pa,{hint:"忽然想起「"+re.title+"」了。",opening:"刚才翻着书，忽然想起「"+re.title+"」。那段经历里，你最想再聊聊哪一刻？"}]:Pa;k=ye[W++%ye.length],d.querySelector(".character-reaction-text").textContent=k.hint,fe=performance.now()+6500}}function ke(){if(h!=="chat"){$l(u,n);return}const te=n.getBoundingClientRect();u.style.setProperty("--book-left",`${te.left}px`),u.style.setProperty("--book-top",`${te.top}px`),u.style.setProperty("--book-width",`${te.width}px`),u.style.setProperty("--book-height",`${te.height}px`)}function Q(){ke(),u.open||(S=performance.now(),s(!0),ke(),u.showModal()),Xe()}function ee(){y==null||y.abort(),A==null||A.pause(),A=null,T&&URL.revokeObjectURL(T),T="",u.classList.remove("speaking")}function ge(){u.open&&(I(),O.leave(),M==null||M.abort(),ee(),w=!1,u.close(),h="",s(!1,performance.now()-S),Xe())}u.addEventListener("cancel",te=>{te.preventDefault(),ge()}),window.addEventListener("resize",()=>{u.open&&ke()});function Te(te){h="chat",N=!1,v="",L="";const _e=t(),re=e();f=te?structuredClone(te):{id:crypto.randomUUID(),title:Tl[He()],summary:"",activity:He(),day:re.day,slot:re.slot,kind:"branch",messages:[],createdAt:new Date().toISOString(),outfit:re.outfit},te&&(te.kind==="canon"||Zt(new Date(te.createdAt))!==Zt())&&(f.id=crypto.randomUUID(),f.kind="branch",f.createdAt=new Date().toISOString(),f.parentId=te.id,delete f.canonId),f.activity=He(),te||(f.messages=[{role:"assistant",content:f.activity==="home"?k.opening:Q0[f.activity]}]),f.currentContext={..._e,activity:He()},Q(),Me(),Ie()}d.onclick=()=>Te();function Me(){var R;const te=(R=u.querySelector(".stream-text-reveal"))==null?void 0:R.parentElement;Vl(te),u.className="companion-chat",u.style.setProperty("--chat-background",`url("${ts(ns[f.activity]??"home-bg")}")`);const _e=f.messages.filter(x=>x.role==="assistant").at(-1),re=N?f.messages:w&&D?[{role:"assistant",content:D}]:_e?[_e]:[];u.innerHTML=`<button class="book-close" data-co="close" aria-label="结束对话">×</button><div class="chat-heading"><span>${Tt(Tl[f.activity])}</span></div><aside class="chat-tools"><button data-co="history" aria-pressed="${N}">${J0.history}${N?"收起":"记录"}</button></aside><span class="portrait-slot"></span><section class="chat-paper ${N?"history-open":""}" aria-label="角色对话"><div class="chat-scroll" aria-live="polite">${re.length?re.map(x=>`<div class="chat-line ${x.role}"><small>${x.role==="user"?"你":"松团子"}</small>${x.narration?`<p class="narration">${Tt(x.narration)}</p>`:""}<p>${Tt(x.content)}</p></div>`).join(""):'<div class="chat-line assistant"><small>松团子</small><p class="chat-invitation">${escape(reaction.opening)}</p></div>'}${w?'<p class="chat-status">松团子正在回应…</p>':""}</div><div class="voice-controls" ${m.voice?"":"hidden"}><button data-co="voice">${E?"♫ 配音开":"♫ 配音关"}</button>${_e&&m.voice?'<button data-co="replay">重听</button>':""}</div>${m.chat?"":'<p class="connection-note">豆包暂未连接，你可以先写下想法。</p>'}${v?`<p class="chat-error" role="alert">${Tt(v)}</p>`:""}<form id="chat-form"><label class="visually-hidden" for="chat-input">我想说的话或行动</label><textarea id="chat-input" maxlength="800" rows="1" placeholder="说说你的想法…">${Tt(L)}</textarea><button type="submit" aria-label="发送" ${w||!m.chat?"disabled":""}>${w?"…":"发送"}</button></form><div class="chat-footer"><button data-co="close">结束对话</button></div></section>`,P??(P=W0(a(),e().outfit)),u.querySelector(".portrait-slot").replaceWith(P.canvas),B();const ye=u.querySelector(".chat-line.assistant p:not(.narration)");!N&&te&&ye&&te.textContent===ye.textContent&&ye.replaceWith(te);const we=u.querySelector("#chat-input");we.style.height="auto",we.style.height=we.scrollHeight+"px";const We=u.querySelector(".chat-scroll");We.scrollTop=We.scrollHeight}async function Ve(te){if(ee(),!(!E||!m.voice)){y=new AbortController;try{const _e=await fetch(Ra+"/voice",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:te}),signal:y.signal});if(!_e.ok)throw new Error("这次配音未能播放，可以稍后重听。");T=URL.createObjectURL(await _e.blob()),A=new Audio(T),A.volume=.8,A.onended=()=>u.classList.remove("speaking"),await A.play(),u.classList.add("speaking")}catch(_e){_e.name!=="AbortError"&&u.open&&(v="配音未播放，文字已保留；可以点击重听。",Me())}}}async function pt(){var re,ye;if(w||!m.chat||!L.trim())return;const te=L.trim(),_e=f.id;w=!0,D="",v="",ee(),M=new AbortController,Me();try{const we=e(),We=await Gl(await fetch(Ra+"/chat",{method:"POST",headers:{"Content-Type":"application/json"},signal:M.signal,body:JSON.stringify({stream:!0,messages:[...f.messages.slice(-30).map(({role:$,content:Z})=>({role:$,content:Z})),{role:"user",content:te}],context:{...f.currentContext,day:we.day,slot:we.slot,mood:we.mood,energy:we.energy,outfit:we.outfit,inventory:we.inventory,memories:(we.memories??[]).slice(-12).map(({title:$,summary:Z,event:oe})=>({title:$,summary:Z,event:oe}))}})}),$=>{var oe;if(!u.open||h!=="chat"||f.id!==_e||M.signal.aborted)return;const Z=!D;if(D=$,Z&&(Me(),N||(oe=u.querySelector(".chat-line.assistant p"))==null||oe.replaceChildren()),!N){const J=u.querySelector(".chat-line.assistant p");J&&Hl(J,$)}});if(!u.open||h!=="chat"||f.id!==_e)return;f.messages.push({role:"user",content:te},{role:"assistant",content:We.dialogue,narration:We.narration}),f.summary=((re=We.event)==null?void 0:re.summary)||f.summary||We.dialogue,f.title=((ye=We.event)==null?void 0:ye.title)||f.title,We.event&&(f.event=We.event),f.updatedAt=new Date().toISOString();const R={...f};delete R.currentContext,we.memories??(we.memories=[]);const x=we.memories.findIndex($=>$.id===f.id);x<0?we.memories.push(R):we.memories[x]=R,Bl(we,"chat:"+Zt()),i(),L="",w=!1,Me(),u.dataset.emotion=We.emotion,Ve(We.dialogue)}catch(we){we.name!=="AbortError"&&(v=we.message,D="",w=!1,u.open&&Me())}}function U(){I(),M==null||M.abort(),ee(),w=!1,h="stories",C=null,Q(),O.open(),Ie()}function Qe(){I(),O.leave(),M==null||M.abort(),ee(),w=!1,h="book",g=new Date(new Date().getFullYear(),new Date().getMonth(),1),_=Zt(),p="",C=null,Q(),Ue(),Ie()}function Ue(){var J,Ae,me;u.className="memory-book";const te=e(),_e=Gn(te),re=Zt(),ye=g.getFullYear(),we=g.getMonth(),We=new Date(ye,we+1,0).getDate(),R=(g.getDay()+6)%7,x=_e.filter(z=>!p||`${z.title} ${z.summary} ${JSON.stringify(z.event??{})}`.includes(p)),$=Array.from({length:R},()=>"<span></span>").concat(Array.from({length:We},(z,ce)=>{var de;const q=Zt(new Date(ye,we,ce+1)),ne=_e.filter(ue=>ue.createdAt&&Zt(new Date(ue.createdAt))===q),ve=ne[0];return`<button class="calendar-day ${q===re?"today":""} ${q===_?"selected":""} ${ve?"has-memory":""}" data-co="day" data-date="${q}" aria-label="${q}${ne.length?`，${ne.length}段经历`:""}" ${q===re?'aria-current="date"':""}>${ve?`<img src="${ts(ns[ve.activity]??"home-bg")}" alt="">`:""}<span>${ce+1}</span>${ne.length?`<small>${ne.length}段</small>`:""}${(de=te.memoryStamps)!=null&&de.includes(q)?"<i>✦</i>":""}</button>`})).join(""),Z=p?x:_e.filter(z=>z.createdAt&&Zt(new Date(z.createdAt))===_),oe=_e.filter(z=>!z.createdAt);u.innerHTML=`${Oa("memories")}<div class="book-body"><div class="month-controls"><button data-co="prev" aria-label="上个月">‹</button><h3>${ye} 年 ${we+1} 月</h3><button data-co="next" aria-label="下个月">›</button></div><div class="calendar-week">${["一","二","三","四","五","六","日"].map(z=>`<span>${z}</span>`).join("")}</div><div class="calendar-grid">${$}</div><p class="calendar-legend">◎ 今天　✦ 已盖经历章　按现实日期记录</p><div class="memory-reward"><div><b>已陪伴 ${((J=te.memoryStamps)==null?void 0:J.length)??0} 天</b><small>${(Ae=te.memoryStamps)!=null&&Ae.includes(re)?"今天的经历章，已经收好。":"完成一次活动或留下一段剧情，即可盖章。"}</small></div><button class="button" data-co="claim" ${Au(te)?"":"disabled"}>${(me=te.memoryStamps)!=null&&me.includes(re)?"今日已盖章":"盖章 · 领取 5 ◈"}</button></div><label class="memory-search">⌕ <input id="memory-search" value="${Tt(p)}" placeholder="找人物、地点、某段经历" aria-label="搜索回忆"></label><h3 class="day-heading">${p?"找到的回忆":_+" 的经历"}</h3><div class="memory-list">${Z.map(z=>`<button class="memory-card" data-co="detail" data-id="${z.id}"><img src="${ts(ns[z.activity]??"home-bg")}" alt=""><span><small>${z.kind==="life"?"日常经历":z.kind==="canon"?"已收录主线":"共创支线"} · 游戏第 ${z.day} 天</small><b>${Tt(z.title)}</b><em>${Tt(z.summary.slice(0,70))}</em></span></button>`).join("")||'<p class="empty-memory">这一天的纸页还空着。去过好今天，再回来留下一幅回忆。</p>'}</div>${oe.length?`<details><summary>以前的经历 · 未记录现实日期</summary>${oe.map(z=>`<p>第 ${z.day} 天 · ${Tt(z.title)}</p>`).join("")}</details>`:""}<details><summary>主人设定的主线 · 秋收祭前的七天</summary><p>通过课程、烘焙、森林采集与小铺营业成长，带着亲手制作的甜点参加第七天的秋收祭。</p>${m.canon.map(z=>`<article><b>${Tt(z.title)}</b><p>${Tt(z.summary)}</p><small>共创作者：${Tt(z.author)}</small></article>`).join("")}</details><button class="book-text-button" data-co="album">剧情与 CG 相册</button><button class="book-text-button" data-co="stats">查看成长数值</button></div>`}function De(te){const _e=Gn(e()).find(re=>re.id===te);_e&&(C=te,u.className="memory-book",u.innerHTML=`${Oa("memories")}<div class="book-body"><button class="book-text-button" data-co="book">‹ 回到月历</button><img class="memory-cover" src="${ts(ns[_e.activity]??"home-bg")}" alt="故事发生的场景"><small>${_e.kind==="life"?"日常经历":_e.kind==="canon"?"已收录主线":"共创支线"} · 游戏第 ${_e.day} 天</small><h2>${Tt(_e.title)}</h2><p>${Tt(_e.summary)}</p>${_e.messages?`<button class="button wide" data-co="continue" data-id="${_e.id}">${_e.cg?"重温奇遇":"继续这段对话"}</button><details><summary>回看当时的对话</summary>${_e.messages.map(re=>`<p><b>${re.role==="user"?"你":"松团子"}：</b>${Tt(re.content)}</p>`).join("")}</details>`:""}${m.creator&&_e.kind==="branch"?`<details><summary>本机创作者 · 整理为主线</summary><p>确认后保存到本机主线库。公开共享需接入线上主线服务。</p><label>标题<input id="canon-title" maxlength="60" value="${Tt(_e.title)}"></label><label>确认生效的剧情<textarea id="canon-summary" maxlength="2000" rows="5">${Tt(_e.summary)}</textarea></label><label>共创作者<input id="canon-author" maxlength="60" placeholder="填写署名"></label><button class="button" data-co="canon">确认收录这个版本</button></details>`:""}<p class="chat-error" id="detail-error" role="alert"></p></div>`)}return u.addEventListener("input",te=>{if(te.target.id==="chat-input"&&(L=te.target.value,B(),te.target.style.height="auto",te.target.style.height=te.target.scrollHeight+"px"),te.target.id==="memory-search"){p=te.target.value;const _e=te.target.selectionStart;Ue();const re=u.querySelector("#memory-search");re.focus(),re.setSelectionRange(_e,_e)}}),u.addEventListener("submit",te=>{te.target.id==="chat-form"&&(te.preventDefault(),pt())}),u.addEventListener("click",async te=>{const _e=te.target.closest("[data-co]");if(!_e||_e.disabled)return;const re=_e.dataset.co;if(re==="album"&&(ge(),c()),re==="close"&&ge(),re==="history"&&(N=!N,Me()),re==="book"&&(O.leave(),C=null,h="book",Ue()),(re==="prev"||re==="next")&&(g=new Date(g.getFullYear(),g.getMonth()+(re==="next"?1:-1),1),Ue()),re==="day"&&(_=_e.dataset.date,Ue()),re==="detail"&&De(_e.dataset.id),re==="claim"&&Y0(e())&&(i(),r(),Ue()),re==="voice"&&(E=!E,E||ee(),Me()),re==="replay"&&Ve(f.messages.filter(ye=>ye.role==="assistant").at(-1).content),re==="continue"){const ye=e().memories.find(we=>we.id===_e.dataset.id);ye!=null&&ye.cg?(ge(),l(ye.cg)):Te(ye)}if(re==="stats"&&(ge(),o("stats")),re==="canon"){_e.disabled=!0;try{const ye=await xe("/canon",{title:u.querySelector("#canon-title").value,summary:u.querySelector("#canon-summary").value,author:u.querySelector("#canon-author").value}),we=e().memories.find(We=>We.id===C);we.kind="canon",we.canonId=ye.entry.id,i(),m.canon.push(ye.entry),De(C)}catch(ye){u.querySelector("#detail-error").textContent=ye.message,_e.disabled=!1}}}),Ie(),{openBook:Qe,openStories:U,openChat:Te,updateEntry:Xe,get opened(){return u.open},close:ge}}const gs=new Set,us=new Map;function La(){const n=document.querySelector("#loading");if(!n||n.dataset.failed)return;let e=n.querySelector(".video-load-status");e||(e=document.createElement("small"),e.className="video-load-status",e.style.cssText="display:block;margin:12px 20px;font-size:12px;line-height:1.6",n.append(e)),e.textContent=[...us.values()].filter(Boolean).join(" · ");let t=n.querySelector(".video-unlock");t||(t=document.createElement("button"),t.className="video-unlock",t.textContent="点此启用动画",t.style.cssText="margin-top:16px;padding:10px 20px;background:#f4e8cf;color:#365747;border:0;border-radius:6px",t.onclick=()=>{for(const i of gs)i.play().catch(()=>{})},n.append(t)),t.hidden=gs.size===0}async function Cu(n,e,t,i){us.set(n,`${i}：下载中`),La();let r,s;try{if(r=await fetch(e,{signal:AbortSignal.timeout(9e4)}),!r.ok)throw new Error(`HTTP ${r.status}`);s=await r.blob()}catch(a){throw new Error(`${i}下载未完成，请切换 Wi-Fi / 移动网络后重试。`,{cause:a})}us.set(n,`${i}：准备画面`),gs.add(n),La(),n.setAttribute("playsinline",""),n.setAttribute("muted",""),n.setAttribute("aria-hidden","true"),n.style.cssText="position:fixed;width:1px;height:1px;left:0;bottom:0;opacity:.001;pointer-events:none",document.body.append(n),await new Promise((a,o)=>{const c=["loadedmetadata","loadeddata","canplay","seeked"];let l=!1;const u=setTimeout(()=>d(new Error(`${i}未能准备画面，请刷新后点击「点此启用动画」。`)),3e4);function d(g){clearTimeout(u),c.forEach(_=>n.removeEventListener(_,m)),n.removeEventListener("error",h),gs.delete(n),n.pause(),us.delete(n),La(),g?o(g):a()}function h(){var g;d(new Error(`${i}无法解码：${((g=n.error)==null?void 0:g.message)||"浏览器不支持此视频"}`))}function m(){if(!l&&n.readyState>=1&&(l=!0,Math.abs(n.currentTime-t)>.01)){n.currentTime=t;return}l&&n.readyState>=2&&!n.seeking&&Math.abs(n.currentTime-t)<.1&&d()}c.forEach(g=>n.addEventListener(g,m)),n.addEventListener("error",h),n.src=URL.createObjectURL(s),n.load()})}function t_(){const n=new Set(["berry","acorn","crouch","mushroom"]),e={},t=matchMedia("(prefers-reduced-motion: reduce)");let i="berry",r="berry",s=!1,a=!1,o=!1,c=!1,l=null,u=1,d=performance.now(),h=0;const m=Promise.all(["approach","berry","pick","acorn","crouch","jump","mushroom","harvest"].map(async p=>{const f=document.createElement("video");f.muted=!0,f.playsInline=!0,f.loop=n.has(p),f.playbackRate=p==="berry"?.1:1,f.preload="auto",await Cu(f,`/acorn-witch-atelier/assets/2d/gather/${p}.mp4?v=mobile-header-22`,0,"采集"+{approach:"走近",berry:"待机",pick:"摘果",acorn:"摇头",crouch:"蓄力",jump:"跳跃",mushroom:"蘑菇",harvest:"收获"}[p]);const w=new cs(f);w.colorSpace=vt,e[p]={video:f,texture:w},f.onended=()=>{i===p&&(p==="approach"?_("berry"):c=!0)}}));function g(){s&&!a&&!document.hidden&&!t.matches&&!c&&!o&&e[i].video.play().catch(p=>{p.name!=="AbortError"&&console.error(p)})}function _(p){const f=++h;r=p,c=!1,o=!0;const w=e[i],M=e[p];w.video.pause();const y=()=>{f!==h||!s||(l=i!==p?w.texture:null,i=p,u=l?0:1,d=performance.now(),o=!1,g())};M.video.currentTime>0?(M.video.addEventListener("seeked",y,{once:!0}),M.video.currentTime=0):y()}return document.addEventListener("visibilitychange",()=>{var p;document.hidden?(p=e[i])==null||p.video.pause():g()}),{ready:m,play:_,enter(){s=!0,_(t.matches?"berry":"approach")},leave(){s=!1,h++,o=!1;for(const p of Object.values(e))p.video.pause()},setPaused(p){var f;a=p,d=performance.now(),p?(f=e[i])==null||f.video.pause():g()},tick(){const p=performance.now();s&&!a&&!document.hidden&&(u=Math.min(1,u+(p-d)/160)),d=p},get texture(){var p;return(p=e[i])==null?void 0:p.texture},get previousTexture(){return l},get blend(){return 1-u},info(){var p,f;return{action:r,time:((p=e[i])==null?void 0:p.video.currentTime)??0,active:s,seeking:o,complete:c||t.matches,paused:((f=e[i])==null?void 0:f.video.paused)??!0,muted:!0,source:"reference-video",loop:n.has(i)}}}}function Da(n,e,t,i){const r=document.createElement("video");r.muted=!0,r.playsInline=!0,r.preload="auto";const s=matchMedia("(prefers-reduced-motion: reduce)");let a=!1,o=t,c=!1,l=!1;const u=Cu(r,n,e[t][0],i);function d(){a&&!l&&!c&&!document.hidden&&!s.matches&&r.play().catch(g=>{g.name!=="AbortError"&&console.error("参考动作无法播放",g)})}r.addEventListener("seeked",d);function h(g,_=!1){r.pause(),r.muted=!_,o=g,c=!1,r.currentTime=e[o][0]}function m(){if(!a||l||c||r.seeking||s.matches)return;const[g,_,p]=e[o];r.currentTime>=_-(p?0:.025)&&(p?r.currentTime=g:(r.pause(),c=!0))}return document.addEventListener("visibilitychange",()=>{document.hidden?r.pause():r.seeking||d()}),s.addEventListener("change",()=>{a&&h(o)}),{video:r,ready:u,tick:m,play:h,setPaused(g){l=g,g?r.pause():r.seeking||d()},enter(){a=!0,h(t)},leave(){a=!1,r.pause(),r.muted=!0},info(){return{action:o,time:r.currentTime,active:a,seeking:r.seeking,complete:c||s.matches,paused:r.paused,muted:r.muted,source:"reference-video"}}}}const rn=720,Pt=1280,n_=["standing","reading","cooking","tasting"],is=["home-bg","home-arm-side","kitchen-bg","forest-bg","dressing-bg","school-bg","classroom-frame-v2","classroom-clean-top","feedback-plate",...Wi.flatMap(n=>n_.map(e=>n.id==="acorn"?`girl-${e}`:`girl-${n.id}-${e}`)),"tart"],Ia={"girl-standing":[[.385,.378],[.565,.362]],"girl-reading":[[.474,.388],[.606,.386]],"girl-cooking":[[.43,.384],[.613,.369]]};function i_(n,e=()=>{}){const t=new Tu({canvas:n,antialias:!0,alpha:!1,preserveDrawingBuffer:!0});t.setPixelRatio(Math.min(devicePixelRatio,2)),t.setClearColor("#354b36");const i=new pu,r=new $o(-360,360,640,-640,.1,20);r.position.z=10;const s={},a={},o={},c={},l={},u={},d={};let h=null,m=null,g=!1,_=-1e3,p=-1e4,f="",w=!0,M="home",y="idle",A="acorn",T=!1,E=0,L=!1,v,S=0,C=performance.now();const N=Da("/acorn-witch-atelier/assets/2d/classroom-motion-v2.mp4",{listen:[4.95,5.2,!0],think:[5.15,6.25,!0],correct:[8.75,10.15,!1],retry:[7.1,8.42,!1],celebrate:[12.35,13.7,!1]},"listen","上课"),O=new cs(N.video);O.colorSpace=vt;const D=Da("/acorn-witch-atelier/assets/2d/baking-motion-v2.mp4",{prepare:[4.05,4.15,!1],ingredients:[4.18,6.02,!1],mix:[6.15,7.1,!0],mixed:[6.8,7.1,!1],bake:[8.75,9.85,!0],spell:[9.4,9.85,!0],taste:[10.1,13.72,!1]},"prepare","烘焙"),P=new cs(D.video);P.colorSpace=vt;const I=t_(),B=matchMedia("(prefers-reduced-motion: reduce)"),k=new _t(new Dt(rn,Pt),new $t({depthTest:!1}));i.add(k);const W=Da("/acorn-witch-atelier/assets/2d/shop-motion.mp4",{welcome:[.05,1.05,!0],child:[1.35,2.65,!0],queue:[4.18,5.85,!0],vip:[9.18,9.85,!0],positive:[7.58,8.35,!1],negative:[6.1,7,!1],summary:[12.85,14.02,!1],closing:[14.3,15.02,!1]},"welcome","小铺"),fe=new cs(W.video);fe.colorSpace=vt;const xe=new _t(new Dt(rn,Pt),new $t({transparent:!0,depthTest:!1,depthWrite:!1}));xe.renderOrder=1,xe.visible=!1,i.add(xe);const Ie=[],He=[];let Xe,ke;const Q=new _t(new Dt(rn,Pt*(1-.716)),new $t({depthTest:!1,transparent:!0}));Q.position.y=-Pt*.716/2,Q.renderOrder=3,i.add(Q);const ee=new _t(new Dt(rn,Pt),new $t({transparent:!0,depthTest:!1,depthWrite:!1}));ee.renderOrder=4,i.add(ee);const ge=document.createElement("canvas");ge.width=256,ge.height=128;const Te=ge.getContext("2d");Te.scale(1,.5);const Me=Te.createRadialGradient(128,128,20,128,128,128);Me.addColorStop(0,"#231a12aa"),Me.addColorStop(1,"#231a1200"),Te.fillStyle=Me,Te.fillRect(0,0,256,256);const Ve=new _t(new Dt(320,90),new $t({map:new dr(ge),transparent:!0,depthTest:!1,opacity:.62}));Ve.position.set(-10,-285,0),Ve.renderOrder=1,i.add(Ve);const pt=(z,ce=2)=>{const q=new _t(new Dt(1,1,36,52),new $t({map:z,transparent:!0,depthTest:!1,depthWrite:!1}));return q.renderOrder=ce,i.add(q),q};function U(z){var ve;const ce=z.split("-").at(-1),q=((ve=zi[z])==null?void 0:ve.eyes)??Ia[`girl-${ce}`],ne=wu(pt(s[z]),z,q);return a[z]=ne,ne}const Qe=document.createElement("canvas");Qe.width=Qe.height=64;const Ue=Qe.getContext("2d"),De=Ue.createRadialGradient(32,32,0,32,32,32);De.addColorStop(0,"#fff7d7"),De.addColorStop(.15,"#ffe2a0cc"),De.addColorStop(1,"#ffe2a000"),Ue.fillStyle=De,Ue.fillRect(0,0,64,64);const te=new In,_e=new Float32Array(34*3);te.setAttribute("position",new ln(_e,3));const re=new nh(te,new gu({map:new dr(Qe),color:"#ffe5b0",size:10,transparent:!0,opacity:.45,depthTest:!1,depthWrite:!1,sizeAttenuation:!1}));re.renderOrder=5,i.add(re);function ye(z,ce,q,ne){z.scale.set(ne*z.material.map.image.width/z.material.map.image.height,ne,1),z.position.set(ce-360,640-q-ne/2,0)}function we(){if(!L)return;const z=M==="shop",ce=M==="classroom",q=M==="school",ne=M==="kitchen",ve=M==="garden"||M==="festival",de=["wardrobe","portrait"].includes(M),ue=ne&&D.info().active,Le=M==="garden",F=de&&performance.now()-p<180?f:A;k.material.map=Le?I.texture:z?fe:ce?O:ue?P:s[q?"school-bg":de?"dressing-bg":ne?"kitchen-bg":ve?"forest-bg":"home-bg"],k.material.needsUpdate=!0,Q.visible=ne&&!ue,re.visible=!z&&!ce&&!ue&&!Le;for(const le of He)le.visible=ue;for(const le of Ie)le.visible=ce;ee.visible=["home","story"].includes(M),Ve.visible=ee.visible||de,Ve.position.y=640-(de?1080:925),Ve.scale.set(de?.7:1,de?.5:1,1),ee.material.map=s["home-arm-side"],ee.material.needsUpdate=!0,ne&&(Q.material.map=s.counter,Q.material.needsUpdate=!0);for(const le of Object.values(a))le.visible=!1;let se="girl-standing";ne?se=y==="taste"?"girl-tasting":"girl-cooking":["home","story"].includes(M)&&(se="girl-reading"),F!=="acorn"&&(se=se.replace("girl-",`girl-${F}-`)),m&&!ne&&(se=`girl-custom-${m}-${se.endsWith("-reading")?"reading":"standing"}`);const he=a[se];he.visible=!z&&!q&&!ce&&!ue&&!Le,ne?ye(he,335,195,1110):se.endsWith("-reading")?ye(he,345,245,930):de?ye(he,355,M==="wardrobe"?175:152,M==="wardrobe"?730:940):ye(he,350,235,ve?880:925),v.visible=M==="home"&&T,re.material.opacity=y==="bake"?.8:ve?.65:.32}const We=new xu;let R=0;const x=Promise.all(["ribbon","moon","leaf"].map(async z=>{const ce=new Image;ce.src=`/acorn-witch-atelier/assets/rewards/part-${z}.webp`,await ce.decode(),u[z]=ce})),$=Promise.all([x,I.ready,N.ready,D.ready,W.ready,...is.map(async z=>{var q;let ce=await We.loadAsync((q=zi[z])!=null&&q.source?`/acorn-witch-atelier/${zi[z].source}`:z==="girl-standing"?"/acorn-witch-atelier/assets/2d/girl-original.webp":z.startsWith("girl-")&&z.split("-").length===3?`/acorn-witch-atelier/assets/2d/outfits/${z.slice(5)}.webp`:`/acorn-witch-atelier/assets/2d/${z}.webp`);if(z.startsWith("girl-")){const ne=ce;ce=wl(ne.image,z),ne.dispose()}ce.colorSpace=vt,ce.anisotropy=Math.min(4,t.capabilities.getMaxAnisotropy()),s[z]=ce,e(++R,is.length)})]).then(()=>{for(const[de,ue,Le]of[["classroom-clean-top",[[0,.16]],Ie],["classroom-frame-v2",[[.775,1]],Ie]])for(const[F,se]of ue){const he=s[de].clone();he.repeat.set(1,se-F),he.offset.set(0,1-se),he.needsUpdate=!0;const le=new _t(new Dt(rn,Pt*(se-F)),new $t({map:he,depthTest:!1}));le.position.y=640-Pt*(F+se)/2,le.renderOrder=1,de==="classroom-clean-top"&&(le.material.transparent=!0,le.material.onBeforeCompile=ie=>{ie.fragmentShader=ie.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
 diffuseColor.a *= smoothstep(0.84,0.85,vMapUv.y);`)}),i.add(le),Le.push(le)}const z=document.createElement("canvas");z.width=W.video.videoWidth,z.height=W.video.videoHeight,z.getContext("2d").drawImage(W.video,0,0);const ce=new dr(z);ce.colorSpace=vt,ce.repeat.set(1,.34),ce.offset.set(0,.66),ke=new _t(new Dt(rn,Pt*.34),new $t({map:ce,depthTest:!1})),ke.position.y=Pt*.33,ke.renderOrder=1,ke.visible=!1,i.add(ke);const q=s["feedback-plate"].clone();q.repeat.set(.238,.12),q.offset.set(.762,1-.505),q.needsUpdate=!0,Xe=new _t(new Dt(rn*.238,Pt*.12),new $t({map:q,depthTest:!1})),Xe.position.set(rn*(.881-.5),Pt*(.5-.445),0),Xe.renderOrder=1,Xe.visible=!1,i.add(Xe);const ne=new _t(new Dt(rn,Pt*.04),new $t({color:"#513a27",depthTest:!1}));ne.position.y=-Pt*.48,ne.renderOrder=1,i.add(ne),He.push(ne);const ve=s["kitchen-bg"].clone();ve.repeat.set(1,1-.716),ve.offset.set(0,0),ve.needsUpdate=!0,s.counter=ve;for(const de of is.filter(ue=>ue.startsWith("girl-"))){const ue=document.createElement("canvas");ue.width=s[de].image.width,ue.height=s[de].image.height,ue.getContext("2d").drawImage(s[de].image,0,0),l[de]=ue,U(de)}Z();for(const de of Wi){const ue=document.createElement("canvas");ue.width=110,ue.height=210;const Le=s[de.id==="acorn"?"girl-standing":`girl-${de.id}-standing`].image,F=Math.min(110/Le.width,210/Le.height);ue.getContext("2d").drawImage(Le,(110-Le.width*F)/2,0,Le.width*F,Le.height*F),o[de.id]=ue.toDataURL()}v=pt(s.tart,1),ye(v,642,779,110),L=!0,we(),Ae()});function Z(){var z;for(const[ce,q]of Object.entries(l)){const ne=s[ce].image,ve=ne.getContext("2d"),de=ne.width,ue=ne.height,Le=ce.split("-").at(-1),F=((z=zi[ce])==null?void 0:z.eyes)??Ia["girl-"+Le]??Ia["girl-standing"];if(ve.clearRect(0,0,de,ue),ve.drawImage(q,0,0),delete c[ce],h){const se=u[h],he=F[1];if(h==="moon")for(const le of F){const ie=se.width/2;ve.drawImage(se,le===F[0]?0:ie,0,ie,se.height,de*(le[0]+(le===F[0]?-.12:.12))-.025*de,ue*(le[1]+.075),de*.05,de*.05*se.height/ie)}else{const le=de*(h==="ribbon"?.14:.105);ve.drawImage(se,de*(he[0]+.055),ue*(he[1]-.13),le,le*se.height/se.width)}}s[ce].needsUpdate=!0}}function oe(){const{width:z,height:ce}=n.getBoundingClientRect();t.setSize(z,ce,!1);const q=Math.max(z/rn,ce/Pt);n.parentElement.style.setProperty("--scene-width",`${rn*q}px`),n.parentElement.style.setProperty("--scene-height",`${Pt*q}px`),n.parentElement.style.setProperty("--scene-visible-width",`${z}px`),r.left=-z/q/2,r.right=z/q/2,r.top=ce/q/2,r.bottom=-ce/q/2,r.updateProjectionMatrix()}new ResizeObserver(oe).observe(n),oe();function Ae(){I.tick(),xe.visible=M==="garden"&&I.blend>0,M==="garden"&&(k.material.map=I.texture,xe.material.map=I.previousTexture,xe.material.opacity=I.blend),N.tick(),D.tick(),W.tick(),ke.visible=M==="shop"&&["summary","closing"].includes(y),Xe.visible=M==="kitchen"&&y==="taste"&&D.info().time>=12.38;const z=B.matches?0:S,ce=performance.now()<E?1:0,q=(performance.now()-p)/1e3,ne=["wardrobe","portrait"].includes(M),ve=S-_,de=(le,ie)=>ve>le&&ve<ie?Math.sin((ve-le)/(ie-le)*Math.PI):0,ue=ve%12,Le=ue>7&&ue<10?Math.sin((ue-7)/3*Math.PI):0,F=ne&&!B.matches?de(.5,2.8)+Le*.16:0,se=ne&&!B.matches?de(2,4.4)+Le*.3:0,he=ne&&!B.matches?de(.3,4.6)*Math.sin(ve*1.6)+Math.sin(z*.85)*.15:0;!w&&q>=.18&&(w=!0,we());for(const le of Object.values(a))if(le.visible){le.material.opacity=!B.matches&&ne&&q<.45?1-Math.max(0,1-Math.abs(q-.18)/.18)*.92:1;const ie=le.userData.uniforms;ie.showcase.value.set(F,se,he),ie.time.value=z,ie.moving.value=y==="mix"&&!B.matches?1:0,ie.joy.value=ce&&!B.matches?1:0;const ae=z%5.6;ie.blink.value=!B.matches&&ae>4.9&&ae<5.1?Math.sin((ae-4.9)/.2*Math.PI):0,ne&&!B.matches&&(ie.blink.value=Math.max(ie.blink.value,de(3.1,3.45)))}for(let le=0;le<34;le++){const ie=le*167.39%720-360;_e[le*3]=ie+Math.sin(z*.3+le)*14,_e[le*3+1]=(le*97+z*(y==="bake"?45:10))%1280-640,_e[le*3+2]=1}if(ne&&q>=0&&q<.65&&!B.matches){for(let le=0;le<34;le++){const ie=le*2.399;_e[le*3]=Math.cos(ie)*(70+le*4+q*190),_e[le*3+1]=80+Math.sin(ie)*(140+le*9+q*120)}re.material.size=18*(1-q/.8),re.material.opacity=1-q/.7}else re.material.size=10,re.material.opacity=y==="bake"?.8:["garden","festival"].includes(M)?.65:.32;te.attributes.position.needsUpdate=!0,t.render(i,r)}function me(z){!document.hidden&&!g&&(S+=Math.min((z-C)/1e3,.1),L&&Ae()),C=z,requestAnimationFrame(me)}return requestAnimationFrame(me),{ready:$,async prepareCustom(z){d[z.id]||(await Promise.all(["standing","reading"].map(async ce=>{const q=new Image;q.src=z[ce],await q.decode();const ne="girl-custom-"+z.id+"-"+ce,ve=wl(q,ne);ve.colorSpace=vt,s[ne]=ve;const de=document.createElement("canvas");de.width=ve.image.width,de.height=ve.image.height,de.getContext("2d").drawImage(ve.image,0,0),l[ne]=de,U(ne)})),d[z.id]=z,Z(),we())},customPreview(z){var ce;return((ce=s["girl-custom-"+z+"-standing"])==null?void 0:ce.image.toDataURL("image/png"))??""},setCustom(z){m=z&&d[z]?z:null,we()},setAccessory(z){h=z,Z()},setPaused(z){g=z,N.setPaused(z),D.setPaused(z),W.setPaused(z),I.setPaused(z)},getDialoguePortrait(){if(m)return s["girl-custom-"+m+"-standing"].image.toDataURL("image/png");const z=A==="acorn"?"girl-standing":`girl-${A}-standing`;return c[z]??(c[z]=s[z].image.toDataURL("image/png"))},showcase(){_=S},setMode(z){["wardrobe","portrait"].includes(z)&&!["wardrobe","portrait"].includes(M)&&(_=S),I.leave(),D.leave(),M==="shop"&&z!=="shop"&&W.leave(),M==="classroom"&&z!=="classroom"&&N.leave(),M=z,y="idle",M==="garden"&&I.enter(),M==="classroom"&&N.enter(),M==="shop"&&W.enter(),we()},setAction(z){y=z,M==="garden"&&I.play(z),M==="shop"&&W.play(z),M==="classroom"&&N.play(z),M==="kitchen"&&(D.info().active||D.enter(),D.play(z,z==="taste")),we()},setOutfit(z){z!==A&&["wardrobe","portrait"].includes(M)&&!B.matches&&(_=S+.45,f=A,p=performance.now(),w=!1),A=z,we()},setDessert(z){T=z,L&&(v.visible=M==="home"&&T)},happy(){E=performance.now()+2600},capture(){return Ae(),n.toDataURL("image/png")},getOutfitPreview(z,ce=!1){if(!ce)return o[z]??"";const q=z==="acorn"?"girl-standing":`girl-${z}-standing`;return c[q]??(c[q]=s[q].image.toDataURL("image/png"))},getInfo(){var z;return{renderer:"2d-illustration",mode:M,action:y,outfit:A,accessory:h,customId:m,dessert:T,wardrobeMotion:{active:["wardrobe","portrait"].includes(M)&&!B.matches&&S-_<4.6,elapsed:S-_},gatherMotion:I.info(),shopMotion:W.info(),classroomMotion:N.info(),bakingMotion:D.info(),sprite:(z=Object.values(a).find(ce=>ce.visible))==null?void 0:z.userData.key,assets:L?is.length:0,drawCalls:t.info.render.calls}}}}function wl(n,e){var m;const t=document.createElement("canvas");t.width=n.width,t.height=n.height;const i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(n,0,0);const r=i.getImageData(0,0,t.width,t.height),s=r.data,a=t.width,o=t.height;if(s[3]<20)return new dr(t);const c=new Uint8Array(a*o),l=new Int32Array(a*o);let u=0,d=0;function h(g){if(g<0||g>=a*o||c[g])return;c[g]=1;const _=g*4,p=s[_],f=s[_+1],w=s[_+2];Math.min(p,f,w)<(e==="girl-standing"?242:225)||Math.max(p,f,w)-Math.min(p,f,w)>10||(l[d++]=g)}for(let g=0;g<a;g++)h(g),h((o-1)*a+g);for(let g=0;g<o;g++)h(g*a),h(g*a+a-1);for(const[g,_]of((m=zi[e])==null?void 0:m.seeds)??[])h(Math.floor(_*o)*a+Math.floor(g*a));for(;u<d;){const g=l[u++];s[g*4+3]=0,g%a&&h(g-1),g%a<a-1&&h(g+1),h(g-a),h(g+a)}if(e==="girl-standing")for(let g=0;g<o;g++)for(let _=0;_<a;_++)(_<a*.22&&g<o*.075||_>a*.78&&g>o*.92)&&(s[(g*a+_)*4+3]=0);return i.putImageData(r,0,0),new dr(t)}const Ro=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Ce=n=>document.querySelector(n);let K=Fl(),_s="";try{const n=localStorage.getItem(Nl);if(n){const e=JSON.parse(n);e.version===1&&e.stats&&e.inventory&&Array.isArray(e.records)?K=e:_s="旧存档无法读取，已开始新的故事。"}}catch{_s="浏览器存储不可用，本次进度暂不保存。"}vn(K);let Ne,It,ut,Wt;function tr(n,e){Ed(n,e);const t=e.name,i=/课程/.test(t)?"course":/小铺/.test(t)?"shop":/烘焙/.test(t)?"baking":/采集/.test(t)?"gather":/薄荷|约定/.test(t)?"story":null;return i&&Cd(n,i),n}try{Ne=i_(Ce("#world"),(n,e)=>{const t=Ce("#loading p");t&&!Ce("#loading").dataset.failed&&(t.textContent=n===e?"正在准备上课、烘焙和小铺动画…":`正在布置小屋 · ${n} / ${e}`)}),Ne.ready.then(async()=>{var e;const n=K.collection.customOutfits.find(t=>t.id===K.collection.activeCustom);n&&(await Ne.prepareCustom(n),Ne.setCustom(n.id)),(e=Ce("#loading"))==null||e.remove()}).catch(n=>{Ce("#loading").dataset.failed="true",Ce("#loading").innerHTML="<span>✧</span><p></p>",Ce("#loading p").textContent=n.message||"画面或动画载入失败，请刷新页面重试。",console.error(n)})}catch(n){throw Ce("#loading").innerHTML="<span>✧</span><p>画面无法启动，请使用支持 WebGL 的浏览器打开。</p>",console.error(n),n}Ne.setOutfit(K.outfit);Ne.setDessert(K.desserts.length>0);let mn=null,Tr="set",qt=structuredClone(K.collection.wear),$n="home",un="",H=null,di=0,Ji=K.outfit,Al,Hi=!0,Tn=null,Cl=0;const Qt=document.createElement("audio");Qt.id="bgm";Qt.src="/acorn-witch-atelier/audio/barefoot-in-the-park.mp3";Qt.preload="none";Qt.loop=!0;Qt.volume=.3;document.body.append(Qt);let $i=!0,Ss=!1;function Ms(){$i&&(Ss=!0,Qt.play().catch(()=>Ut("音乐暂未播放，请在设置中重新开启。")))}document.addEventListener("pointerdown",()=>{Ss||Ms()},{once:!0});document.addEventListener("keydown",()=>{Ss||Ms()},{once:!0});document.addEventListener("visibilitychange",()=>{document.hidden?Qt.pause():Ss&&$i&&Ms()});const qo=["早晨","午后","傍晚"],Ru={acorn:"◈",berry:"●",cream:"♧",herb:"❦",honey:"⬡"},Pu={baking:{name:"魔法烘焙",symbol:"♧",cost:18,note:"节奏 · 火候 · 魔法"},course:{name:"去学校上课",symbol:"✧",cost:16,note:"学习一门小小的魔法"},gather:{name:"森林采集",symbol:"❦",cost:12,note:"收集食材与灵感"},story:{name:"朋友来信",symbol:"✉",cost:8,note:"一份甜点，一段故事"},shop:{name:"烘焙小铺",symbol:"♜",cost:10,note:"出售甜点，赚取金币"},rest:{name:"窗边休息",symbol:"☕",cost:0,note:"体力 +32 · 心情 +8"}};function Et(){try{localStorage.setItem(Nl,JSON.stringify(K))}catch{Ut("存储空间不可用，当前进度仅保留在本页。")}}function Dn(n=600,e=.1){if(!Hi)return;Tn??(Tn=new AudioContext),Tn.resume();const t=Tn.createOscillator(),i=Tn.createGain();t.type="sine",t.frequency.setValueAtTime(n,Tn.currentTime),i.gain.setValueAtTime(.09,Tn.currentTime),i.gain.exponentialRampToValueAtTime(.001,Tn.currentTime+e),t.connect(i).connect(Tn.destination),t.start(),t.stop(Tn.currentTime+e)}function Ut(n){clearTimeout(Al),Ce("#toast").textContent=n,Ce("#toast").classList.add("show"),Al=setTimeout(()=>Ce("#toast").classList.remove("show"),2600)}function bs(n,e=""){Ce("#speech").innerHTML=n?`${n}<small>${e}</small>`:""}function Ke(n,e,t="",i="button"){return`<button class="${i}" data-action="${e}" ${t}>${n}</button>`}function Nt(n,e,t,i="✧",r="",s=""){return`<button class="option" data-action="${t}" ${r}><span class="symbol">${i}</span><span><strong>${n}</strong><small>${e}</small></span>${s?`<span class="right">${s}</span>`:""}</button>`}function ot(n,e,t,i=!0,r=""){return`<section class="sheet ${r}" aria-label="${n}"><header><div><h2>${n}</h2><small>${e}</small></div>${i?'<button class="close" data-action="close" aria-label="关闭面板">×</button>':""}</header>${t}</section>`}function Es(n,e,t){return`<div class="paged-items" data-size="${e}"><div class="${t}">${n.map((i,r)=>`<div class="paged-item" ${r>=e?"hidden":""}>${i}</div>`).join("")}</div>${n.length>e?`<div class="list-pages"><button data-action="list-page" data-id="-1" aria-label="上一页" disabled>‹</button><span data-page="0">1 / ${Math.ceil(n.length/e)}</span><button data-action="list-page" data-id="1" aria-label="下一页">›</button></div>`:""}</div>`}function r_(n,e){const t=n.closest(".paged-items"),i=t.querySelector("[data-page]"),r=[...t.querySelectorAll(".paged-item")],s=Number(t.dataset.size),a=Math.ceil(r.length/s),o=Math.max(0,Math.min(a-1,Number(i.dataset.page)+e));r.forEach((c,l)=>c.hidden=l<o*s||l>=(o+1)*s),i.dataset.page=o,i.textContent=`${o+1} / ${a}`,t.querySelector('[data-id="-1"]').disabled=o===0,t.querySelector('[data-id="1"]').disabled=o===a-1}function et(n,e){un=e,Ce("#panel").dataset.panel=e,Ce("#panel").innerHTML=n,bs("")}function dn(n,e){if(["wardrobe","portrait"].includes(n)!==["wardrobe","portrait"].includes($n)||["school","classroom"].includes(n)&&n!==$n||$n==="classroom"&&n==="home"){const i=Ce("#scene-curtain");i.classList.remove("reveal"),i.offsetWidth,i.classList.add("reveal")}$n=n,Ce("#game").dataset.scene=n,Ne.setMode(n);const t={garden:"adventure",school:"star",classroom:"star",kitchen:"acorn",shop:"acorn"}[n];t&&(Ne.setOutfit(t),Ne.setCustom(null),Ne.setAccessory(null)),Ce("#scene-label").textContent=e,Ce("#scene-actions").innerHTML="",Ce("#scene-actions").className=""}function Xt(){Ce("#hud").innerHTML=`<div class="date"><b>秋之月 · 第 ${K.day} 日</b><small>${K.slot===3?"庆典时刻":`${qo[K.slot]} ${["07:45","13:20","17:30"][K.slot]}`}</small></div><div class="resources"><span><em>◈</em>${K.coins}</span><span><em>♡</em>${K.energy} <em>☀</em>${K.mood}</span></div>`,Ce("#desktop-journal").innerHTML=`<span class="journal-caption">小魔女的成长手记</span><h2>今天，也长大了一点。</h2>${Object.entries(fs).map(([n,e])=>`<div class="statline"><span>${e}</span><b>${K.stats[n]}</b></div><div class="stat-track"><span style="width:${Math.min(100,K.stats[n])}%"></span></div>`).join("")}<div class="goal-note">${K.ending?`✦ ${K.ending.title}<br>秋收祭评分 ${K.ending.score} / 100`:`✦ 距离秋收祭还有 ${7-K.day} 天<br>准备甜点 · 挑选穿搭 · 结识朋友`}</div>`,Ce("#nav").innerHTML=[["journal","手记","✧"],["bag","背包","♧"],["schedule","日程","▦"],["wardrobe","衣橱","♜"],["festival","庆典","✦"]].map(([n,e,t])=>`<button data-action="${n}" class="${n==="schedule"?"primary":""}" ${H?"disabled":""}><span>${t}</span>${e}</button>`).join("")}function _n(){Wn==null||Wn.dispose(),Wn=null,zl(K,"home"),Et(),K.ending&&K.day<=7&&(K.day=8,K.slot=0,K.energy=Math.min(100,K.energy+25),Et()),H=null,un="",Ce("#panel").innerHTML="",dn("home","橡果小屋 · 窗边"),Ne.setOutfit(K.outfit),Ne.setCustom(K.collection.activeCustom),Ne.setAccessory(K.collection.wear.accessory),Ne.setDessert(K.desserts.length>0),Xt(),bs(K.ending?"我们的故事，还会有下一个季节。":K.energy<25?"先泡杯茶，歇一会儿吧。":K.day===7?"今天是秋收祭。带上我们的得意之作吧！":"今天，想把时间花在什么美好的事上？","点击「日程」开始今天的生活"),Ce("#scene-actions").innerHTML=Ke("◉ 幸运轮盘","wheel","","scene-button")+Ke("▣ 角色故事","stories","","scene-button")+Ke("✧ CG 相册","collection","","scene-button collection-entry")+Ke("♬ 设置","settings","","scene-button");const n=K.collection.cgs.find(e=>!K.collection.seen.includes(e));n&&(ut==null||ut.playCG(n,()=>{}))}function s_(n){const e=K.collection;return Vn.some(t=>t.activity===n&&!e.seen.includes(t.id)&&(e.cgs.includes(t.id)||(!t.stat||K.stats[t.stat]>=t.threshold)&&(!t.visits||(e.visits[n]??0)+1>=t.visits)&&(!t.bond||e.bond>=t.bond)))}function a_(){dn("home","橡果小屋 · 今日日程"),et(ot("今日日程","A LITTLE PLAN FOR TODAY",`<div class="schedule-grid">${qo.map((n,e)=>`<div class="time-slot ${e===K.slot?"current":""}">${n}<small>${e<K.slot?"已经度过":e===K.slot?"正在安排":"留给美好的事"}</small></div>`).join("")}</div>${K.day===7&&K.slot===3?`<p>准备已经完成。现在，带上你的甜点前往秋收祭。</p>${Ke("前往秋收祭","festival","","button wide")}`:`<div class="action-grid">${Object.entries(Pu).map(([n,e])=>Nt(`${e.name}${s_(n)?" · 新线索":""}`,e.note,"activity",e.symbol,`data-id="${n}" ${_i(K,e.cost)?"":"disabled"}`,e.cost?`−${e.cost}♡`:"+32♡")).join("")}</div><p class="mini-status">每次 1 时段 · 夜间体力 +25</p>`}`),"schedule")}function o_(n){const e=Pu[n];if(!_i(K,e.cost)){Ut("先安排休息，恢复一些体力吧。");return}n==="baking"&&Lu(),n==="course"&&p_(),n==="gather"&&v_(),n==="story"&&S_(),n==="shop"&&b_(),n==="rest"&&(tr(K,{name:"窗边休息",energy:32,mood:8}),Et(),_n(),Ne.happy(),Ut("热茶和一页好书。体力 +32，心情 +8"))}function Lu(){dn("kitchen","魔法烘焙坊 · 准备"),Ne.setAction("prepare"),di=0,Du()}function Du(){const n=fr[di];if(un==="recipes"&&Ce("#panel .recipe-note")){Ce("#panel").querySelectorAll("[data-action=recipe]").forEach(t=>{const i=Number(t.dataset.id)===di;t.classList.toggle("selected",i),t.setAttribute("aria-pressed",String(i))}),Ce("#panel .recipe-note").textContent=n.note;const e=Ce("#panel [data-action=cook]");e.disabled=!lr(K,n),e.textContent=lr(K,n)?"系好围裙，开始吧":"材料不足，先去森林看看";return}et(ot("今天，烤一点幸福","CHOOSE A RECIPE",`<div class="options">${fr.map((e,t)=>({r:e,i:t})).filter(({r:e})=>!e.unlock||K.collection.menus.includes(e.id)).map(({r:e,i:t})=>`<button class="option ${di===t?"selected":""}" data-action="recipe" data-id="${t}" aria-pressed="${di===t}"><span class="symbol">${["✦","❀","♧","❦","♡"][t]}</span><span><strong>${e.name}</strong></span><span class="right">${e.temp}°</span></button>`).join("")}</div><p class="recipe-note">${n.note}</p>${Ke(lr(K,n)?"系好围裙，开始吧":"材料不足，先去森林看看","cook",lr(K,n)?"":"disabled","button wide")}<div class="mini-status">消耗 18 体力 · 完成后消耗材料 · 一个时段</div>`),"recipes")}function c_(){const n=fr[di];!Ld(K).includes(n)||!lr(K,n)||!_i(K,18)||(Ne.setAction("ingredients"),H={type:"baking",phase:"ingredients",recipe:n,selected:[],hits:[],start:0,heat:0,temperature:n.temp-20,heatTotal:0,heatSamples:0,spell:"star"},Xt(),Iu())}function Iu(){const n=H.recipe;et(ot(n.name,"01 / 04 · INGREDIENTS",`<div class="phase-label">从篮子里挑出配方需要的材料</div><div class="recipe-mini">${Object.entries(n.need).map(([e,t])=>`<button class="ingredient ${H.selected.includes(e)?"selected":""}" data-action="ingredient" data-id="${e}" ${H.selected.includes(e)?"disabled":""}>${Ru[e]} ${Io[e]} ×${t} ${H.selected.includes(e)?"✓":""}</button>`).join("")}</div><p>材料选齐后，开始轻轻搅拌。</p>${Ke("拿起木勺","mix",H.selected.length===Object.keys(n.need).length?"":"disabled","button wide")}`,!1),"ingredients")}function l_(){H.phase="mix",H.start=performance.now(),Ne.setAction("mix"),et(ot("让香气，慢慢混合","02 / 04 · STIR IN RHYTHM",`<p>光标进入绿色区域时，点击搅拌。靠近中心会更好。</p><div class="timing"><div class="target"></div><div class="needle" id="mix-needle"></div></div><div class="meter-meta"><span id="mix-feedback">跟着木勺的节奏</span><span id="mix-count">0 / 5</span></div>${Ke("轻轻搅拌 · 空格","tap","","button wide tap-button")}`,!1),"mix")}function Uu(n){return(1-Math.cos((n-H.start)/1e3*Math.PI*1.15))/2}function Nu(){const n=performance.now();if(!H||H.phase!=="mix"||n-Cl<170)return;Cl=n;const e=Math.abs(Uu(n)-.5),t=e<.055?1:e<.13?.8:e<.23?.5:.2;H.hits.push(t),Dn(t===1?880:t>=.8?660:380,.13),Ce("#mix-feedback").textContent=t===1?"PERFECT · 刚刚好！":t>=.8?"GOOD · 香气出来了":t>=.5?"不错，再靠近中心一点":"慢慢来，等绿色区域",Ce("#mix-count").textContent=`${H.hits.length} / 5`,t>=.8&&Ne.happy(),H.hits.length===5&&(H.phase="mixed",Ne.setAction("mixed"),et(ot("面糊准备好了","02 / 04 · NICELY MIXED",`<div class="stamp">${Math.round(H.hits.reduce((i,r)=>i+r,0)/5*100)}<small>搅拌表现 / 100</small></div><p>接下来交给火候。${H.recipe.name}适合 ${H.recipe.temp}°C。</p>${Ke("放进烤箱","heat","","button wide")}`,!1),"mixed"))}function u_(){H.phase="heat",Ne.setAction("bake"),H.start=performance.now(),H.lastSample=performance.now(),et(ot("守住，刚好的温度","03 / 04 · A LITTLE PATIENCE",`<div class="temperature"><span id="temperature">${H.temperature}</span>°C<small>理想 ${H.recipe.temp}°C</small></div><label class="details" for="heat-slider">滑动调温，让温度保持在目标 ±8°C</label><input id="heat-slider" type="range" min="140" max="220" value="${H.temperature}" step="1" aria-label="烤箱温度"><div class="progress"><span id="heat-progress"></span></div><div class="meter-meta"><span id="heat-feedback">甜点正在慢慢膨胀</span><span id="heat-time">8 秒</span></div>`,!1),"heat")}function d_(){H.phase="spell",Ne.setAction("spell"),et(ot("最后，添一点魔法","04 / 04 · A PINCH OF MAGIC",`<p>食谱偏爱的魔法：<b>${{star:"星光",forest:"森林",heal:"治愈"}[H.recipe.spell]}</b>。魔法也会改变这次烘焙带来的成长。</p><div class="options">${[["star","星光","魔法 +3 · 适合星光橡果塔","✦"],["forest","森林","亲和 +3 · 适合莓果云朵派","❦"],["heal","治愈","体力 +8 · 适合蜂蜜布丁","♡"]].map(([n,e,t,i])=>Nt(e,t,"spell",i,`data-id="${n}"`)).join("")}</div>`,!1),"spell")}function f_(n){if(!H||H.phase!=="spell")return;const e=H.recipe,t=H.hits.reduce((o,c)=>o+c,0)/5,i=H.heatSamples?H.heatTotal/H.heatSamples:0,r=bd(K,t,i,n,e),s={id:`${Date.now()}`,recipe:e.id,name:e.name,score:r,grade:Ol(r),spell:n},a={baking:3,...n==="star"?{magic:3}:n==="forest"?{charm:3}:{}};tr(K,{name:`烘焙 · ${e.name} ${s.grade}`,cost:18,mood:4,energy:n==="heal"?8:0,stats:a,ingredients:Object.fromEntries(Object.entries(e.need).map(([o,c])=>[o,-c])),dessert:s}),Et(),H={type:"tasting",dessert:s,mix:t,heat:i},Ne.setAction("taste"),Xt(),et("","tasting"),bs("先尝一口，看看今天的味道。")}function h_(){const{dessert:n,mix:e,heat:t}=H;H={type:"result",dessert:n},Dn(1046,.4),et(ot("有你在，今天也很甜","FRESH FROM THE OVEN",`<div class="stamp">${n.grade}<small>${n.name} · 品质 ${n.score}</small></div><div class="reward-grid"><div><b>${Math.round(e*100)}</b>搅拌表现</div><div><b>${Math.round(t*100)}</b>火候表现</div><div><b>+3</b>烘焙成长</div></div><p>「唔…好好吃！」甜点已放入背包，可以留作参赛、送给朋友，或在小铺出售。</p>${Ke("把这份甜蜜带回家","home","","button wide")}`,!1),"cook-result")}function p_(){dn("school","魔女学院 · 到校"),et(ot("今天，想学哪一课？","LESSONS FOR A YOUNG WITCH",`<p>走进教室，完成三道练习 · 学费 12 ◈ · 体力 16 ♡</p><div class="options">${Nt("烘焙基础","辨认材料和温度 · 烘焙成长","course","♧",'data-id="baking"')}${Nt("星光魔法","记住符文顺序 · 魔法成长","course","✦",'data-id="magic"')}${Nt("色彩与设计","观察配色和标签 · 审美成长","course","❀",'data-id="style"')}</div>${K.coins<12?"<p>金币不足。可以先出售一份甜点。</p>":""}`),"courses")}const Fu={baking:[["想让塔皮酥脆，需要哪种原料？",["黄油与面粉","一整杯清水","只有莓果"],0],["星光橡果塔适合的温度是？",["140°C","180°C","220°C"],1],["面糊搅拌完成，接下来应该？",["直接装盘","再加一杯盐","放入预热的烤箱"],2]],magic:[["记住顺序：星 → 月 → 叶。中间是？",["月","叶","星"],0],["星光橡果塔偏爱哪种魔法？",["治愈","森林","星光"],2],["让魔法稳定的方法是？",["越快越好","跟随平稳的节奏","闭着眼随便念"],1]],style:[["「森林来信」的主要颜色是？",["草木绿","霓虹粉","纯黑"],0],["秋收祭的温暖配色是？",["湖蓝与银灰","橡果棕与奶油白","黑色与荧光绿"],1],["想突出金发，围裙可以搭配？",["相同的亮黄","透明色","较深的森林绿"],2]]};function m_(n){if(K.coins<12){Ut("还差一点学费，先去小铺赚些金币吧。");return}dn("classroom",`魔女学院 · ${{baking:"烘焙基础课",magic:"星光魔法课",style:"色彩与设计课"}[n]}`),H={type:"course",subject:n,q:0,correct:0},Xt(),Ou()}function Ou(){Ne.setAction("think");const n=Fu[H.subject][H.q];et(ot(`随堂练习 · ${H.q+1} / 3`,"LESSON",`<p class="dialog-text">${n[0]}</p><div class="options">${n[1].map((e,t)=>Nt(e,"","answer",["A","B","C"][t],`data-id="${t}"`)).join("")}</div>`,!1),"question")}function g_(n){if(!H||H.type!=="course"||H.feedback)return;const e=Fu[H.subject][H.q],t=n===e[2];H.feedback=!0,document.querySelectorAll('[data-action="answer"]').forEach(i=>i.disabled=!0),t?(H.correct++,Ne.setAction("correct"),Dn(780),Ut("答对了！原来是这样。")):(Ne.setAction("retry"),Dn(330),Ut(`再记一次：${e[1][e[2]]}`))}function __(){const n=3+H.correct*2,e=H.subject,t=H.correct;tr(K,{name:`课程 · ${fs[e]}`,cost:16,coins:-12,stats:{[e]:n,knowledge:2},mood:t===3?3:1}),Et(),H={type:"result"},Ne.setAction("celebrate"),Xt(),et(ot("把新本领，收进口袋","A SMALL STEP FORWARD",`<div class="stamp">${t} / 3<small>今天的课堂练习</small></div><div class="reward-grid"><div><b>+${n}</b>${fs[e]}</div><div><b>+2</b>学识</div><div><b>−12</b>学费</div></div>${Ke("下课，回家吧","home","","button wide")}`,!1),"course-result")}let Wn=null;function v_(){dn("garden","榛果林 · 轻风小径"),H={type:"gather"},un="gather",Ce("#panel").innerHTML="",Ce("#scene-actions").className="gather",bs(""),Xt(),Wn=Md({world:Ne,root:Ce("#scene-actions"),onFinish:x_})}function x_(){const n=K.outfit==="forest"?1:0;tr(K,{name:"榛果林采集",cost:12,mood:4,stats:{charm:1},ingredients:{acorn:4+n,berry:3+n,herb:2+n,honey:2,cream:2}}),Et(),H={type:"result"},Xt(),et(ot("满满一篮，带回家","GIFTS FROM THE FOREST",`<p>小路尽头的奶农还送了两瓶奶油。</p><div class="backpack">${Object.entries({acorn:4+n,berry:3+n,herb:2+n,honey:2,cream:2}).map(([e,t])=>`<div class="item-cell">${Io[e]}<b>+${t}</b></div>`).join("")}</div>${n?"<p>「森林小洋装」穿搭带来额外采集收获。</p>":""}${Ke("带着篮子回家","home","","button wide")}`,!1),"gather-result")}function Bu(){H||(["wardrobe","portrait"].includes($n)||(mn=K.collection.activeCustom,Ji=K.outfit,qt=structuredClone(K.collection.wear),Tr="set"),dn("wardrobe","卧室 · 橡果试衣间"),ds())}function ds(){if(Ne.setCustom(mn),Tr!=="set"){zu();return}Ne.setAccessory(qt.accessory);const n=Wi.find(t=>t.id===Ji),e=K.owned.includes(n.id);Ne.setOutfit(n.id),et(ot("衣橱","THE LITTLE WARDROBE",`${ku()}${Es([...Wi.map(t=>`<button class="outfit-card ${Ji===t.id?"selected":""}" aria-label="试穿${t.name}" data-action="outfit" data-id="${t.id}"><img src="${Ne.getOutfitPreview(t.id)}" alt="${t.name}全身搭配"><b>${t.short}</b><small>${K.owned.includes(t.id)?"已拥有":t.price+" ◈"}</small></button>`),...K.collection.customOutfits.map(t=>`<button class="outfit-card ${mn===t.id?"selected":""}" data-action="custom-outfit" data-id="${t.id}"><img src="${Ne.customPreview(t.id)||t.standing}" alt="共创穿搭"><b>${Ro(t.name)}</b><small>我的设计</small></button>`)],6,"wardrobe-preview")}<div class="recipe-name">${mn?Ro(K.collection.customOutfits.find(t=>t.id===mn).name):n.name}</div><div class="row">${Ke(mn||e?"就穿这套":"购买并穿上 · "+n.price+" ◈","wear",!e&&K.coins<n.price?"disabled":"","button")}${Ke("收起 · 看全身","portrait","","button subtle")}</div>`),"wardrobe")}function y_(){if(mn){K.collection.activeCustom=mn,K.collection.wear=structuredClone(qt),Et(),_n();return}if(K.collection.activeCustom=null,Tr!=="set"){if(![...qt.accessory?[qt.accessory]:[]].every(e=>K.collection.parts.includes(e)))return;K.collection.wear=structuredClone(qt),Et(),_n(),Ut("搭配已保存。");return}const n=Wi.find(e=>e.id===Ji);if(!K.owned.includes(n.id)){if(K.coins<n.price)return;K.coins-=n.price,K.owned.push(n.id)}K.outfit=n.id,K.collection.wear={...qt,mode:"set"},Et(),Ne.happy(),_n(),Ut("今天的你，也很可爱。")}function ku(){return'<div class="wardrobe-tabs"><button data-action="design" class="under-construction" aria-disabled="true">✎ 设计新衣</button>'+[["set","套装"],["accessory","饰品"]].map(([n,e])=>'<button data-action="wardrobe-tab" data-id="'+n+'" aria-pressed="'+(Tr===n)+'">'+e+"</button>").join("")+"</div>"}function zu(){Ne.setAccessory(qt.accessory),Ne.setOutfit(Ji);const n=!qt.accessory||K.collection.parts.includes(qt.accessory);et(ot("饰品","THE LITTLE ACCESSORIES",ku()+'<div class="wardrobe-preview"><button class="outfit-card" data-action="part" data-id="none"><b>摘下饰品</b></button>'+Uo.map(e=>'<button class="outfit-card part-card '+(qt.accessory===e.id?"selected":"")+'" data-action="part" data-id="'+e.id+'" aria-label="试戴'+e.name+'"><img src="/acorn-witch-atelier/assets/rewards/part-'+e.id+'.webp" alt="'+e.name+'"><b>'+e.name+"</b><small>"+(K.collection.parts.includes(e.id)?"已拥有":"轮盘获得")+"</small></button>").join("")+'</div><div class="row">'+Ke(n?"戴好了":"轮盘获得后可保存","wear",n?"":"disabled")+Ke("收起 · 看全身","portrait","","button subtle")+"</div>"),"wardrobe")}function S_(){dn("story","窗边来信 · 朋友的约定");const n=[["薄荷的第一封信","「秋收祭快到了，我总是担心自己的配方不够好。你也会紧张吗？」"],["一份甜蜜的邀请","「昨天闻到你家烤箱的香气，我练习到很晚。下次，可以一起做甜点吗？」"],["庆典之前","「无论评委给几分，我都会站在台下，给你最响亮的掌声。」"]],[e,t]=n[Math.min(2,K.story)];et(ot(e,"A LETTER FROM MINT",`<div class="dialog-name">薄荷 · 魔女学院的同学</div><p class="dialog-text">${t}</p><div class="options">${Nt("我们一起练习吧","亲和 +3 · 好感 +2","story-choice","♡",'data-id="talk"')}${Nt("送给她一份亲手做的甜点",K.desserts.length?"消耗背包第一份甜点 · 好感 +5":"背包里还没有甜点","story-choice","♧",`data-id="gift" ${K.desserts.length?"":"disabled"}`)}${Nt("把整理好的笔记分享给她","学识 +3 · 好感 +2","story-choice","✧",'data-id="notes"')}</div><div class="mini-status">消耗 8 体力 · 一个时段</div>`),"story")}function M_(n){_i(K,8)&&(n==="gift"&&!K.desserts.length||(tr(K,{name:n==="gift"?"送给薄荷的甜点":"与薄荷的约定",cost:8,stats:n==="notes"?{knowledge:3}:{charm:3},friendship:n==="gift"?5:2,mood:5}),n==="gift"&&K.desserts.shift(),K.story++,Et(),H={type:"result"},Ne.happy(),Xt(),et(ot("有人，记住了你的温柔","FRIENDSHIP GROWS",`<p class="dialog-text">${n==="gift"?"「这是给我的吗？我会把今天，写进最喜欢的那一页日记。」":"「原来不需要独自做好所有事情。有你在，感觉安心多了。」"}</p><div class="reward-grid"><div><b>+${n==="gift"?5:2}</b>薄荷好感</div><div><b>${K.friendship}</b>当前关系</div><div><b>+5</b>心情</div></div>${K.friendship>=6?"<p>约定达成：薄荷会在庆典为你应援，关系将计入比赛评分。</p>":""}${Ke("把信好好收起来","home","","button wide")}`,!1),"story-result")))}const Po={tea:"热茶",cocoa:"热可可",honey:"蜂蜜茶"};function b_(){dn("shop","橡果烘焙坊 · 准备开店"),et(ot("今天，也把甜蜜分给小镇","OPEN THE LITTLE BAKERY",K.desserts.length?`<p>选甜点接待 3 组客人，按需配饮品。每轮 10 体力、1 时段。</p>${Es(K.desserts.map((n,e)=>Nt(n.name,`${n.grade} · ${n.score} 分`,"sell","♧",`data-id="${e}"`)),3,"dessert-options")}`:`<div class="empty">展示柜空空的，先烤一份甜点吧。</div>${Ke("选择食谱","recipes","","button wide")}`),"shop")}function E_(n){const e=K.desserts[n];!e||!_i(K,10)||H||(H={type:"shop",phase:"order",index:n,dessert:e,customer:0,results:[],elapsed:0,selection:null},Xt(),Hu())}function Hu(){H.phase="order",H.elapsed=0,H.selection=null;const n=qi[H.customer];Ne.setAction(n.motion),Ce("#scene-label").textContent=`今日营业 · 第 ${H.customer+1} / 3 组客人`,Ce("#scene-actions").className="shop-sale",Ce("#scene-actions").innerHTML=`<div class="shop-till">◈ ${K.coins}</div>`,Vu()}function Vu(){const n=qi[H.customer];et(ot(n.guest,`${H.customer+1} / 3 · ${H.dessert.name}试吃套餐`,`<p>${n.request}</p><div class="shop-patience"><span id="shop-patience-fill" style="width:${100*(1-H.elapsed/hs)}%"></span></div><div class="shop-drinks">${Object.entries(Po).map(([e,t])=>Ke(t,"shop-drink",`data-id="${e}" aria-pressed="${H.selection===e}"`,"button subtle")).join("")}</div>${Ke(H.selection?"递给客人":"先选一杯饮品","shop-serve",H.selection?"":"disabled","button wide")}`,!1),"shop-order")}function Gu(n=!1){if((H==null?void 0:H.type)!=="shop"||H.phase!=="order"||!H.selection&&!n)return;const e=qi[H.customer],t=!n&&H.selection===e.choice,i=t&&H.elapsed<hs*.5;H.results.push({correct:t,perfect:i,timedOut:n}),H.phase="feedback",Ne.setAction(t?"positive":"negative"),Dn(t?880:260,.2),et(ot(t?i?"PERFECT · 这份心意刚刚好":"GOOD · 客人很满意":n?"客人等了太久…":"不是这个呀…",`${H.customer+1} / 3 · ${e.guest}`,`<p>${t?`甜点搭配${Po[e.choice]}，谢谢款待！${i?"获得 5 金币小费。":""}`:`客人想要的是${Po[e.choice]}。这份订单未成交，下次留意需求。`}</p><div id="shop-next"><small>等客人回应…</small></div>`,!1),"shop-feedback"),Ce("#panel").dataset.feedback=t?"positive":"negative"}function T_(){(H==null?void 0:H.type)!=="shop"||H.phase!=="feedback-ready"||(++H.customer<qi.length?Hu():w_())}function w_(){const{dessert:n,index:e,results:t}=H,i=wd(n.score,t);tr(K,{name:`小铺营业 · 接待 ${i.served}/3 组`,cost:10,coins:i.coins,stats:{charm:i.charm},mood:i.mood}),K.desserts.splice(e,1),Et(),H.phase="summary",H.reward=i,Ne.setAction("summary"),Xt(),Ce("#scene-label").textContent="今日营业 · 翻开账本",et("","shop-summary"),Ce("#scene-actions").innerHTML=`<section class="shop-ledger shop-ledger-bottom"><div>甜点收入 <b>+${i.sales} ◈</b></div><div>服务小费 <b>+${i.tips} ◈</b></div><div>亲和成长 <b>+${i.charm}</b></div><strong>本次收入 ${i.coins} 金币</strong>${Ke("正在整理账本…","shop-close","disabled","button wide")}</section>`}function A_(){(H==null?void 0:H.type)!=="shop"||H.phase!=="summary-ready"||(H.phase="closing",Ce("#scene-label").textContent="今日营业 · 圆满收工",Ne.setAction("closing"),Ce("#scene-actions").innerHTML="",et("","shop-closing"))}function C_(n){if((H==null?void 0:H.type)!=="shop")return;const e=Ne.getInfo().shopMotion,t=Ce(".shop-till");if(t&&(t.hidden=e.action==="positive"&&e.time>=7.68),H.phase==="order"){if(e.seeking)return;H.elapsed+=n,Ce("#shop-patience-fill").style.width=`${Math.max(0,100*(1-H.elapsed/hs))}%`,H.elapsed>=hs&&Gu(!0)}else if(H.phase==="feedback"&&e.complete)H.phase="feedback-ready",Ce("#shop-next").innerHTML=Ke(H.customer<2?"继续接待下一位":"结束接待，看看账本","shop-next","","button wide");else if(H.phase==="summary"&&e.complete){H.phase="summary-ready";const i=Ce("[data-action=shop-close]");i.disabled=!1,i.textContent="看完账本，结束营业"}else H.phase==="closing"&&e.complete&&(H.phase="closed",et(ot("今天的甜蜜，圆满收工","BAKERY CLOSED",`<p>接待 3 组 · 成交 ${H.reward.served} 组 · 收入 ${H.reward.coins} 金币</p>${Ke("关好店门，回家吧","home","","button wide")}`,!1),"shop-result"))}function R_(){et(ot("背包","",`<div class="backpack">${Object.entries(K.inventory).map(([n,e])=>`<div class="item-cell">${Ru[n]} ${Io[n]}<b>${e}</b></div>`).join("")}</div><div class="section-label">甜点 · ${K.desserts.length} 份</div>${K.desserts.length?Es(K.desserts.map(n=>`<div class="record"><b>${Ro(n.name)}</b><span>${n.grade} · ${n.score} 分</span></div>`),4,"dessert-grid"):'<p class="bag-empty">暂无甜点 · 去烘焙一份吧</p>'}`),"bag")}function P_(){et(ot("每一点成长，都算数","YOUR GROWING STORY",`<div class="book-stats">${Object.entries(fs).map(([n,e])=>`<div>${e}<b>${K.stats[n]}</b></div>`).join("")}<div>薄荷好感<b>${K.friendship}</b></div></div><div class="book-stats"><div>松团子好感<b>${K.collection.bond}</b></div></div>${Ke("剧情与 CG 相册","collection","","button wide")}<div class="section-label">最近的生活</div>${K.records.slice(0,6).map(n=>`<div class="record"><span>第 ${n.day} 日 · ${qo[n.slot]}</span>${n.name}</div>`).join("")||"<p>第一页，留给今天。</p>"}${Ke("看看玩法手册","help","","button subtle wide")}`),"journal")}function L_(){if(K.ending){Ts();return}const n=K.day===7;et(ot("秋收祭，一起闪闪发光","THE HARVEST FESTIVAL",`<p>${n?"庆典已经开始！选择一份甜点，和薄荷一起前往广场。":`还有 ${7-K.day} 天。用剩下的时间学习、烘焙，准备你喜欢的穿搭。`}</p><p class="collection-hint">参加即得「把秋天送给你」祭典 CG · 庆典后生活继续</p><div class="score-lines"><div>甜点品质<b>50 分</b></div><div>烘焙 · 魔法 · 学识<b>25 分</b></div><div>服装与审美<b>20 分</b></div><div>朋友的应援<b>5 分</b></div></div>${n?K.desserts.length?`<div class="section-label">选择参赛作品</div>${Es(K.desserts.map((e,t)=>Nt(e.name,`${e.grade} · ${e.score} 分`,"compete","✦",`data-id="${t}"`)),3,"dessert-options")}`:`<p>还没有参赛甜点。${K.slot<3?"现在烤一份也来得及。":"这次先作为观众，为朋友们鼓掌吧。"}</p>${Ke(K.slot<3?"安排魔法烘焙":"以观众身份参加",K.slot<3?"recipes":"spectator","","button wide")}`:Ke("继续准备今天的生活","schedule","","button wide")}`),"festival")}function D_(n){if(K.ending||K.day!==7)return;const e=K.desserts[n];e&&(K.ending=Td(K,e),Et(),Ts(),Ne.happy(),Dn(1046,.5))}function Ts(){if(kl(K,"festival")&&Et(),!K.collection.seen.includes("festival")){ut.playCG("festival",Ts);return}dn("festival","秋收祭 · 属于我们的舞台");const n=K.ending;n&&(et(ot(n.title,"A NEW CHAPTER BEGINS",`<div class="stamp">${n.grade}<small>秋收祭 · 综合评分 ${n.score} / 100</small></div><div class="score-lines"><div>甜点「${n.dessert}」<b>${n.taste} / 50</b></div><div>这一周的成长<b>${n.growth} / 25</b></div><div>今天的穿搭<b>${n.dress} / 20</b></div><div>朋友的应援<b>${n.bond} / 5</b></div></div><p>「原来那些认真度过的小日子，真的会变成闪闪发光的自己。」</p><div class="row">${Ke("保存纪念卡","share")}${Ke("回小屋看看","home","","button subtle")}</div>`,!0),"ending"),Xt())}function $u(){et(ot("小屋里的生活手册","HOW TO SPEND A LOVELY WEEK",`<ul><li>每天 3 时段；夜间体力 +25。</li><li>上课加属性，采集得食材，休息回体力。</li><li>烘焙：选材 → 搅拌 5 次 → 控温 8 秒 → 魔法。</li><li>试穿免费；穿搭影响采集与比赛。</li><li>甜点可出售、赠送；留一份参赛。</li><li>第 7 天秋收祭：甜点、成长、穿搭与好感计分。</li></ul><p>点击或触屏操作 · 空格搅拌 · 行动结束自动保存</p>${Ke("知道了，继续生活","close","","button wide")}`,!0,"help"),"help")}function Ua(){et(ot("设置","A QUIET LITTLE MOMENT",`<div class="options">${Nt($i?"暂停背景音乐":"播放背景音乐","BAREFOOT IN THE PARK","music","♫")}${Nt(Hi?"关闭音效":"开启音效","操作与成功提示","sound","♫")}${Nt("玩法手册","课程、烘焙与庆典","help","✧")}${Nt("重新开始这一周","清除当前进度","reset-ask","↺")}</div><label for=music-volume>背景音乐音量 <output id=music-volume-value>${Math.round(Qt.volume*100)}%</output></label><input id=music-volume type=range min=0 max=100 value=${Math.round(Qt.volume*100)} aria-label=背景音乐音量>`),"settings")}async function I_(){const n=K.ending;if(!n)return;const e=document.createElement("canvas");e.width=900,e.height=1200;const t=e.getContext("2d");t.fillStyle="#f4e8cb",t.fillRect(0,0,900,1200),t.strokeStyle="#b38a49",t.lineWidth=3,t.strokeRect(28,28,844,1144);const i=new Image;i.src="/acorn-witch-atelier/assets/rewards/cg-festival.webp",await i.decode(),t.save(),t.beginPath(),t.rect(55,55,790,660),t.clip();const r=790,s=i.height/i.width*790;t.drawImage(i,55,55-(s-660)*.43,r,s),t.restore(),t.fillStyle="#493927",t.textAlign="center",t.font='28px "Songti SC", serif',t.fillText("橡果魔女 · 秋收祭纪念",450,765),t.font='48px "Songti SC", serif',t.fillText(n.title,450,842),t.font="70px Georgia",t.fillStyle="#a57437",t.fillText(`${n.grade}  /  ${n.score}`,450,940),t.font='23px "Songti SC", serif',t.fillStyle="#786445",t.fillText(n.dessert,450,1002),t.font='19px "Songti SC", serif',t.fillText("扫码来到橡果小屋",350,1090),await Il(t,690,1020,120);const a=document.createElement("a");a.download="橡果魔女-秋收祭纪念.png",a.href=e.toDataURL("image/png"),a.click(),Ut("纪念卡已生成，保存在浏览器下载中。")}function Xo(n,e,t){if(!(H&&!["ingredient","mix","tap","heat","spell","answer","pick","home","sound","music","shop-drink","shop-serve","shop-next","shop-close"].includes(n)))switch(n){case"list-page":r_(t,Number(e));break;case"custom-outfit":mn=e,Ne.prepareCustom(K.collection.customOutfits.find(i=>i.id===e)).then(ds).catch(()=>Ut("共创衣服暂未载入，请检查绘图服务。"));break;case"design":Ut("施工中，敬请期待");break;case"collection":ut.album();break;case"wheel":ut.wheel();break;case"pets":ut.pets();break;case"wardrobe-tab":Tr=e,ds();break;case"part":e==="none"?qt.accessory=null:Uo.find(r=>r.id===e)&&(qt.accessory=e),zu();break;case"home":_n();break;case"close":_n();break;case"schedule":a_();break;case"activity":o_(e);break;case"recipe":di=Number(e),Du();break;case"recipes":_i(K,18)?Lu():Ut("先恢复体力，或开始新的一周。");break;case"cook":c_();break;case"ingredient":(H==null?void 0:H.phase)==="ingredients"&&!H.selected.includes(e)&&(H.selected.push(e),Dn(520+H.selected.length*100),Iu());break;case"mix":(H==null?void 0:H.phase)==="ingredients"&&l_();break;case"tap":Nu();break;case"heat":(H==null?void 0:H.phase)==="mixed"&&u_();break;case"spell":f_(e);break;case"course":m_(e);break;case"answer":g_(Number(e));break;case"portrait":et("","portrait"),dn("portrait","卧室 · 镜前试衣"),Ce("#scene-actions").innerHTML=Ke("打开衣橱","wardrobe","","scene-button")+Ke("展示动作","showcase","","scene-button");break;case"showcase":Ne.showcase();break;case"wardrobe":Bu();break;case"outfit":mn=null,Ji=e,ds();break;case"wear":y_();break;case"story-choice":M_(e);break;case"sell":E_(Number(e));break;case"shop-drink":(H==null?void 0:H.type)==="shop"&&H.phase==="order"&&(H.selection=e,Vu());break;case"shop-serve":Gu();break;case"shop-next":T_();break;case"shop-close":A_();break;case"bag":R_();break;case"journal":It.openBook();break;case"stories":It.openStories();break;case"festival":L_();break;case"compete":D_(Number(e));break;case"share":I_();break;case"help":$u();break;case"settings":Ua();break;case"music":$i=!$i,$i?Ms():Qt.pause(),un==="settings"&&Ua();break;case"sound":Hi=!Hi,Ce("#sound").textContent=Hi?"♫ 音效开":"♫ 音效关",Ce("#sound").setAttribute("aria-label",Hi?"关闭音效":"开启音效"),Dn(660),un==="settings"&&Ua();break;case"reset-ask":et(ot("翻开新的一页？","A FRESH START",`<p>将清除这次的金币、成长、甜点与庆典结果，从第一日重新开始。</p><div class="row">${Ke("重新开始","reset")}${Ke("继续这一周","close","","button subtle")}</div>`),"reset");break;case"reset":K=Fl(),vn(K),Et(),_n(),Ut("新的一周，新的可能。");break;case"spectator":K.ending={score:0,grade:"纪念",title:"自由自在的森林生活",taste:0,growth:0,dress:0,bond:0,dessert:"与朋友分享的掌声"},Et(),Ts();break}}Ce("#game").addEventListener("click",n=>{const e=n.target.closest("[data-action]");e&&!e.disabled&&(Dn(),Xo(e.dataset.action,e.dataset.id,e))});Ce("#game").addEventListener("input",n=>{n.target.id==="music-volume"&&(Qt.volume=Number(n.target.value)/100,Ce("#music-volume-value").textContent=`${n.target.value}%`),n.target.id==="heat-slider"&&(H==null?void 0:H.phase)==="heat"&&(H.temperature=Number(n.target.value),Ce("#temperature").textContent=H.temperature)});Ce("#sound").onclick=()=>Xo("sound");Ce("#help").onclick=()=>{H||$u()};window.addEventListener("keydown",n=>{It!=null&&It.opened||ut!=null&&ut.opened||Wt!=null&&Wt.opened||n.target.matches("input,textarea")||(n.code==="Space"&&(H==null?void 0:H.phase)==="mix"?(n.preventDefault(),n.repeat||Nu()):n.key==="Escape"&&!H&&_n())});let Na=performance.now();function Lo(n){if(It==null||It.updateEntry(),ut==null||ut.updatePet($n==="home"&&(!un||un==="bag"||un==="schedule")&&!(It!=null&&It.opened)&&!(ut!=null&&ut.opened)&&!(Wt!=null&&Wt.opened)),It!=null&&It.opened||ut!=null&&ut.opened||Wt!=null&&Wt.opened){Na=n,requestAnimationFrame(Lo);return}!document.hidden&&(H==null?void 0:H.type)==="course"&&H.feedback&&Ne.getInfo().classroomMotion.complete&&(H.feedback=!1,H.q++,H.q<3?Ou():__()),!document.hidden&&(H==null?void 0:H.type)==="tasting"&&Ne.getInfo().bakingMotion.complete&&h_();const e=Math.min(n-Na,100);if(Na=n,document.hidden||(C_(e),(H==null?void 0:H.type)==="gather"&&(Wn==null||Wn.tick(e))),!document.hidden&&(H==null?void 0:H.phase)==="mix"){const t=Ce("#mix-needle");t&&(t.style.left=`${Uu(n)*100}%`)}if(!document.hidden&&(H==null?void 0:H.phase)==="heat"){H.elapsed=(H.elapsed||0)+e;const t=Math.abs(H.temperature-H.recipe.temp);H.heatTotal+=Math.max(0,1-Math.max(0,t-3)/32)*e,H.heatSamples+=e,Ce("#heat-progress").style.width=`${Math.min(100,H.elapsed/80)}%`,Ce("#heat-time").textContent=`${Math.max(0,Math.ceil(8-H.elapsed/1e3))} 秒`,Ce("#heat-feedback").textContent=t<=8?"温度刚刚好，保持住。":H.temperature<H.recipe.temp?"还不够暖，再加一点火。":"有点烫，稍微降低温度。",H.elapsed>=8e3&&d_()}requestAnimationFrame(Lo)}Wt=Dd({game:Ce("#game"),getState:()=>K,save:Et,world:Ne,pause:n=>Ne.setPaused(n),onEquipped:_n});ut=Fd({game:Ce("#game"),getState:()=>K,save:Et,refresh:Xt,pause:n=>Ne.setPaused(n),world:Ne,onWear:Bu,onRecipes:()=>Xo("recipes")});It=e_({game:Ce("#game"),getState:()=>K,getContext:()=>{var n;return{view:$n,panel:un,collectionOpen:!!(ut!=null&&ut.opened)||!!(Wt!=null&&Wt.opened),phase:H==null?void 0:H.phase,activityName:Ce("#scene-label").textContent,recipe:(n=H==null?void 0:H.recipe)==null?void 0:n.name}},save:Et,refresh:Xt,pause:(n,e=0)=>{Ne.setPaused(n),!n&&(H==null?void 0:H.phase)==="mix"&&(H.start+=e)},portrait:()=>Ne.getDialoguePortrait(),onAlbum:()=>ut.album(),onCG:n=>ut.playCG(n),onActivity:()=>P_()});requestAnimationFrame(Lo);_n();_s&&Ut(_s);window.__acorn={get state(){return structuredClone(K)},get view(){return $n},get panel(){return un},get round(){return H?structuredClone(H):null},renderer:()=>Ne.getInfo()};
