(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Hu(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var xi={},ws,Ko;function Vu(){return Ko||(Ko=1,ws=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),ws}var As={},Un={},Zo;function mi(){if(Zo)return Un;Zo=1;let n;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return Un.getSymbolSize=function(i){if(!i)throw new Error('"version" cannot be null or undefined');if(i<1||i>40)throw new Error('"version" should be in range from 1 to 40');return i*4+17},Un.getSymbolTotalCodewords=function(i){return e[i]},Un.getBCHDigit=function(t){let i=0;for(;t!==0;)i++,t>>>=1;return i},Un.setToSJISFunction=function(i){if(typeof i!="function")throw new Error('"toSJISFunc" is not a valid function.');n=i},Un.isKanjiModeEnabled=function(){return typeof n<"u"},Un.toSJIS=function(i){return n(i)},Un}var Rs={},Jo;function Ro(){return Jo||(Jo=1,function(n){n.L={bit:1},n.M={bit:0},n.Q={bit:3},n.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return n.L;case"m":case"medium":return n.M;case"q":case"quartile":return n.Q;case"h":case"high":return n.H;default:throw new Error("Unknown EC Level: "+t)}}n.isValid=function(i){return i&&typeof i.bit<"u"&&i.bit>=0&&i.bit<4},n.from=function(i,r){if(n.isValid(i))return i;try{return e(i)}catch{return r}}}(Rs)),Rs}var Cs,Qo;function Gu(){if(Qo)return Cs;Qo=1;function n(){this.buffer=[],this.length=0}return n.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},Cs=n,Cs}var Ps,el;function $u(){if(el)return Ps;el=1;function n(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return n.prototype.set=function(e,t,i,r){const s=e*this.size+t;this.data[s]=i,r&&(this.reservedBit[s]=!0)},n.prototype.get=function(e,t){return this.data[e*this.size+t]},n.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i},n.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},Ps=n,Ps}var Ls={},tl;function Wu(){return tl||(tl=1,function(n){const e=mi().getSymbolSize;n.getRowColCoords=function(i){if(i===1)return[];const r=Math.floor(i/7)+2,s=e(i),a=s===145?26:Math.ceil((s-13)/(2*r-2))*2,o=[s-7];for(let l=1;l<r-1;l++)o[l]=o[l-1]-a;return o.push(6),o.reverse()},n.getPositions=function(i){const r=[],s=n.getRowColCoords(i),a=s.length;for(let o=0;o<a;o++)for(let l=0;l<a;l++)o===0&&l===0||o===0&&l===a-1||o===a-1&&l===0||r.push([s[o],s[l]]);return r}}(Ls)),Ls}var Ds={},nl;function Xu(){if(nl)return Ds;nl=1;const n=mi().getSymbolSize,e=7;return Ds.getPositions=function(i){const r=n(i);return[[0,0],[r-e,0],[0,r-e]]},Ds}var Is={},il;function qu(){return il||(il=1,function(n){n.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};n.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},n.from=function(r){return n.isValid(r)?parseInt(r,10):void 0},n.getPenaltyN1=function(r){const s=r.size;let a=0,o=0,l=0,c=null,u=null;for(let d=0;d<s;d++){o=l=0,c=u=null;for(let p=0;p<s;p++){let m=r.get(d,p);m===c?o++:(o>=5&&(a+=e.N1+(o-5)),c=m,o=1),m=r.get(p,d),m===u?l++:(l>=5&&(a+=e.N1+(l-5)),u=m,l=1)}o>=5&&(a+=e.N1+(o-5)),l>=5&&(a+=e.N1+(l-5))}return a},n.getPenaltyN2=function(r){const s=r.size;let a=0;for(let o=0;o<s-1;o++)for(let l=0;l<s-1;l++){const c=r.get(o,l)+r.get(o,l+1)+r.get(o+1,l)+r.get(o+1,l+1);(c===4||c===0)&&a++}return a*e.N2},n.getPenaltyN3=function(r){const s=r.size;let a=0,o=0,l=0;for(let c=0;c<s;c++){o=l=0;for(let u=0;u<s;u++)o=o<<1&2047|r.get(c,u),u>=10&&(o===1488||o===93)&&a++,l=l<<1&2047|r.get(u,c),u>=10&&(l===1488||l===93)&&a++}return a*e.N3},n.getPenaltyN4=function(r){let s=0;const a=r.data.length;for(let l=0;l<a;l++)s+=r.data[l];return Math.abs(Math.ceil(s*100/a/5)-10)*e.N4};function t(i,r,s){switch(i){case n.Patterns.PATTERN000:return(r+s)%2===0;case n.Patterns.PATTERN001:return r%2===0;case n.Patterns.PATTERN010:return s%3===0;case n.Patterns.PATTERN011:return(r+s)%3===0;case n.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(s/3))%2===0;case n.Patterns.PATTERN101:return r*s%2+r*s%3===0;case n.Patterns.PATTERN110:return(r*s%2+r*s%3)%2===0;case n.Patterns.PATTERN111:return(r*s%3+(r+s)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}n.applyMask=function(r,s){const a=s.size;for(let o=0;o<a;o++)for(let l=0;l<a;l++)s.isReserved(l,o)||s.xor(l,o,t(r,l,o))},n.getBestMask=function(r,s){const a=Object.keys(n.Patterns).length;let o=0,l=1/0;for(let c=0;c<a;c++){s(c),n.applyMask(c,r);const u=n.getPenaltyN1(r)+n.getPenaltyN2(r)+n.getPenaltyN3(r)+n.getPenaltyN4(r);n.applyMask(c,r),u<l&&(l=u,o=c)}return o}}(Is)),Is}var Rr={},rl;function wc(){if(rl)return Rr;rl=1;const n=Ro(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return Rr.getBlocksCount=function(r,s){switch(s){case n.L:return e[(r-1)*4+0];case n.M:return e[(r-1)*4+1];case n.Q:return e[(r-1)*4+2];case n.H:return e[(r-1)*4+3];default:return}},Rr.getTotalCodewordsCount=function(r,s){switch(s){case n.L:return t[(r-1)*4+0];case n.M:return t[(r-1)*4+1];case n.Q:return t[(r-1)*4+2];case n.H:return t[(r-1)*4+3];default:return}},Rr}var Us={},nr={},sl;function Yu(){if(sl)return nr;sl=1;const n=new Uint8Array(512),e=new Uint8Array(256);return function(){let i=1;for(let r=0;r<255;r++)n[r]=i,e[i]=r,i<<=1,i&256&&(i^=285);for(let r=255;r<512;r++)n[r]=n[r-255]}(),nr.log=function(i){if(i<1)throw new Error("log("+i+")");return e[i]},nr.exp=function(i){return n[i]},nr.mul=function(i,r){return i===0||r===0?0:n[e[i]+e[r]]},nr}var al;function ju(){return al||(al=1,function(n){const e=Yu();n.mul=function(i,r){const s=new Uint8Array(i.length+r.length-1);for(let a=0;a<i.length;a++)for(let o=0;o<r.length;o++)s[a+o]^=e.mul(i[a],r[o]);return s},n.mod=function(i,r){let s=new Uint8Array(i);for(;s.length-r.length>=0;){const a=s[0];for(let l=0;l<r.length;l++)s[l]^=e.mul(r[l],a);let o=0;for(;o<s.length&&s[o]===0;)o++;s=s.slice(o)}return s},n.generateECPolynomial=function(i){let r=new Uint8Array([1]);for(let s=0;s<i;s++)r=n.mul(r,new Uint8Array([1,e.exp(s)]));return r}}(Us)),Us}var Ns,ol;function Ku(){if(ol)return Ns;ol=1;const n=ju();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(i){this.degree=i,this.genPoly=n.generateECPolynomial(this.degree)},e.prototype.encode=function(i){if(!this.genPoly)throw new Error("Encoder not initialized");const r=new Uint8Array(i.length+this.degree);r.set(i);const s=n.mod(r,this.genPoly),a=this.degree-s.length;if(a>0){const o=new Uint8Array(this.degree);return o.set(s,a),o}return s},Ns=e,Ns}var Fs={},Os={},Bs={},ll;function Ac(){return ll||(ll=1,Bs.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),Bs}var fn={},cl;function Rc(){if(cl)return fn;cl=1;const n="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const i="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;fn.KANJI=new RegExp(t,"g"),fn.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),fn.BYTE=new RegExp(i,"g"),fn.NUMERIC=new RegExp(n,"g"),fn.ALPHANUMERIC=new RegExp(e,"g");const r=new RegExp("^"+t+"$"),s=new RegExp("^"+n+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return fn.testKanji=function(l){return r.test(l)},fn.testNumeric=function(l){return s.test(l)},fn.testAlphanumeric=function(l){return a.test(l)},fn}var ul;function gi(){return ul||(ul=1,function(n){const e=Ac(),t=Rc();n.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},n.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},n.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},n.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},n.MIXED={bit:-1},n.getCharCountIndicator=function(s,a){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?s.ccBits[0]:a<27?s.ccBits[1]:s.ccBits[2]},n.getBestModeForData=function(s){return t.testNumeric(s)?n.NUMERIC:t.testAlphanumeric(s)?n.ALPHANUMERIC:t.testKanji(s)?n.KANJI:n.BYTE},n.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},n.isValid=function(s){return s&&s.bit&&s.ccBits};function i(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return n.NUMERIC;case"alphanumeric":return n.ALPHANUMERIC;case"kanji":return n.KANJI;case"byte":return n.BYTE;default:throw new Error("Unknown mode: "+r)}}n.from=function(s,a){if(n.isValid(s))return s;try{return i(s)}catch{return a}}}(Os)),Os}var dl;function Zu(){return dl||(dl=1,function(n){const e=mi(),t=wc(),i=Ro(),r=gi(),s=Ac(),a=7973,o=e.getBCHDigit(a);function l(p,m,g){for(let _=1;_<=40;_++)if(m<=n.getCapacity(_,g,p))return _}function c(p,m){return r.getCharCountIndicator(p,m)+4}function u(p,m){let g=0;return p.forEach(function(_){const h=c(_.mode,m);g+=h+_.getBitsLength()}),g}function d(p,m){for(let g=1;g<=40;g++)if(u(p,g)<=n.getCapacity(g,m,r.MIXED))return g}n.from=function(m,g){return s.isValid(m)?parseInt(m,10):g},n.getCapacity=function(m,g,_){if(!s.isValid(m))throw new Error("Invalid QR Code version");typeof _>"u"&&(_=r.BYTE);const h=e.getSymbolTotalCodewords(m),f=t.getTotalCodewordsCount(m,g),E=(h-f)*8;if(_===r.MIXED)return E;const y=E-c(_,m);switch(_){case r.NUMERIC:return Math.floor(y/10*3);case r.ALPHANUMERIC:return Math.floor(y/11*2);case r.KANJI:return Math.floor(y/13);case r.BYTE:default:return Math.floor(y/8)}},n.getBestVersionForData=function(m,g){let _;const h=i.from(g,i.M);if(Array.isArray(m)){if(m.length>1)return d(m,h);if(m.length===0)return 1;_=m[0]}else _=m;return l(_.mode,_.getLength(),h)},n.getEncodedBits=function(m){if(!s.isValid(m)||m<7)throw new Error("Invalid QR Code version");let g=m<<12;for(;e.getBCHDigit(g)-o>=0;)g^=a<<e.getBCHDigit(g)-o;return m<<12|g}}(Fs)),Fs}var ks={},fl;function Ju(){if(fl)return ks;fl=1;const n=mi(),e=1335,t=21522,i=n.getBCHDigit(e);return ks.getEncodedBits=function(s,a){const o=s.bit<<3|a;let l=o<<10;for(;n.getBCHDigit(l)-i>=0;)l^=e<<n.getBCHDigit(l)-i;return(o<<10|l)^t},ks}var zs={},Hs,hl;function Qu(){if(hl)return Hs;hl=1;const n=gi();function e(t){this.mode=n.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(i){return 10*Math.floor(i/3)+(i%3?i%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(i){let r,s,a;for(r=0;r+3<=this.data.length;r+=3)s=this.data.substr(r,3),a=parseInt(s,10),i.put(a,10);const o=this.data.length-r;o>0&&(s=this.data.substr(r),a=parseInt(s,10),i.put(a,o*3+1))},Hs=e,Hs}var Vs,pl;function ed(){if(pl)return Vs;pl=1;const n=gi(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(i){this.mode=n.ALPHANUMERIC,this.data=i}return t.getBitsLength=function(r){return 11*Math.floor(r/2)+6*(r%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(r){let s;for(s=0;s+2<=this.data.length;s+=2){let a=e.indexOf(this.data[s])*45;a+=e.indexOf(this.data[s+1]),r.put(a,11)}this.data.length%2&&r.put(e.indexOf(this.data[s]),6)},Vs=t,Vs}var Gs,ml;function td(){if(ml)return Gs;ml=1;const n=gi();function e(t){this.mode=n.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(i){return i*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let i=0,r=this.data.length;i<r;i++)t.put(this.data[i],8)},Gs=e,Gs}var $s,gl;function nd(){if(gl)return $s;gl=1;const n=gi(),e=mi();function t(i){this.mode=n.KANJI,this.data=i}return t.getBitsLength=function(r){return r*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let r;for(r=0;r<this.data.length;r++){let s=e.toSJIS(this.data[r]);if(s>=33088&&s<=40956)s-=33088;else if(s>=57408&&s<=60351)s-=49472;else throw new Error("Invalid SJIS character: "+this.data[r]+`
Make sure your charset is UTF-8`);s=(s>>>8&255)*192+(s&255),i.put(s,13)}},$s=t,$s}var Ws={exports:{}},_l;function id(){return _l||(_l=1,function(n){var e={single_source_shortest_paths:function(t,i,r){var s={},a={};a[i]=0;var o=e.PriorityQueue.make();o.push(i,0);for(var l,c,u,d,p,m,g,_,h;!o.empty();){l=o.pop(),c=l.value,d=l.cost,p=t[c]||{};for(u in p)p.hasOwnProperty(u)&&(m=p[u],g=d+m,_=a[u],h=typeof a[u]>"u",(h||_>g)&&(a[u]=g,o.push(u,g),s[u]=c))}if(typeof r<"u"&&typeof a[r]>"u"){var f=["Could not find a path from ",i," to ",r,"."].join("");throw new Error(f)}return s},extract_shortest_path_from_predecessor_list:function(t,i){for(var r=[],s=i;s;)r.push(s),t[s],s=t[s];return r.reverse(),r},find_path:function(t,i,r){var s=e.single_source_shortest_paths(t,i,r);return e.extract_shortest_path_from_predecessor_list(s,r)},PriorityQueue:{make:function(t){var i=e.PriorityQueue,r={},s;t=t||{};for(s in i)i.hasOwnProperty(s)&&(r[s]=i[s]);return r.queue=[],r.sorter=t.sorter||i.default_sorter,r},default_sorter:function(t,i){return t.cost-i.cost},push:function(t,i){var r={value:t,cost:i};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};n.exports=e}(Ws)),Ws.exports}var vl;function rd(){return vl||(vl=1,function(n){const e=gi(),t=Qu(),i=ed(),r=td(),s=nd(),a=Rc(),o=mi(),l=id();function c(f){return unescape(encodeURIComponent(f)).length}function u(f,E,y){const v=[];let C;for(;(C=f.exec(y))!==null;)v.push({data:C[0],index:C.index,mode:E,length:C[0].length});return v}function d(f){const E=u(a.NUMERIC,e.NUMERIC,f),y=u(a.ALPHANUMERIC,e.ALPHANUMERIC,f);let v,C;return o.isKanjiModeEnabled()?(v=u(a.BYTE,e.BYTE,f),C=u(a.KANJI,e.KANJI,f)):(v=u(a.BYTE_KANJI,e.BYTE,f),C=[]),E.concat(y,v,C).sort(function(A,I){return A.index-I.index}).map(function(A){return{data:A.data,mode:A.mode,length:A.length}})}function p(f,E){switch(E){case e.NUMERIC:return t.getBitsLength(f);case e.ALPHANUMERIC:return i.getBitsLength(f);case e.KANJI:return s.getBitsLength(f);case e.BYTE:return r.getBitsLength(f)}}function m(f){return f.reduce(function(E,y){const v=E.length-1>=0?E[E.length-1]:null;return v&&v.mode===y.mode?(E[E.length-1].data+=y.data,E):(E.push(y),E)},[])}function g(f){const E=[];for(let y=0;y<f.length;y++){const v=f[y];switch(v.mode){case e.NUMERIC:E.push([v,{data:v.data,mode:e.ALPHANUMERIC,length:v.length},{data:v.data,mode:e.BYTE,length:v.length}]);break;case e.ALPHANUMERIC:E.push([v,{data:v.data,mode:e.BYTE,length:v.length}]);break;case e.KANJI:E.push([v,{data:v.data,mode:e.BYTE,length:c(v.data)}]);break;case e.BYTE:E.push([{data:v.data,mode:e.BYTE,length:c(v.data)}])}}return E}function _(f,E){const y={},v={start:{}};let C=["start"];for(let w=0;w<f.length;w++){const A=f[w],I=[];for(let S=0;S<A.length;S++){const M=A[S],L=""+w+S;I.push(L),y[L]={node:M,lastCount:0},v[L]={};for(let P=0;P<C.length;P++){const U=C[P];y[U]&&y[U].node.mode===M.mode?(v[U][L]=p(y[U].lastCount+M.length,M.mode)-p(y[U].lastCount,M.mode),y[U].lastCount+=M.length):(y[U]&&(y[U].lastCount=M.length),v[U][L]=p(M.length,M.mode)+4+e.getCharCountIndicator(M.mode,E))}}C=I}for(let w=0;w<C.length;w++)v[C[w]].end=0;return{map:v,table:y}}function h(f,E){let y;const v=e.getBestModeForData(f);if(y=e.from(E,v),y!==e.BYTE&&y.bit<v.bit)throw new Error('"'+f+'" cannot be encoded with mode '+e.toString(y)+`.
 Suggested mode is: `+e.toString(v));switch(y===e.KANJI&&!o.isKanjiModeEnabled()&&(y=e.BYTE),y){case e.NUMERIC:return new t(f);case e.ALPHANUMERIC:return new i(f);case e.KANJI:return new s(f);case e.BYTE:return new r(f)}}n.fromArray=function(E){return E.reduce(function(y,v){return typeof v=="string"?y.push(h(v,null)):v.data&&y.push(h(v.data,v.mode)),y},[])},n.fromString=function(E,y){const v=d(E,o.isKanjiModeEnabled()),C=g(v),w=_(C,y),A=l.find_path(w.map,"start","end"),I=[];for(let S=1;S<A.length-1;S++)I.push(w.table[A[S]].node);return n.fromArray(m(I))},n.rawSplit=function(E){return n.fromArray(d(E,o.isKanjiModeEnabled()))}}(zs)),zs}var xl;function sd(){if(xl)return As;xl=1;const n=mi(),e=Ro(),t=Gu(),i=$u(),r=Wu(),s=Xu(),a=qu(),o=wc(),l=Ku(),c=Zu(),u=Ju(),d=gi(),p=rd();function m(w,A){const I=w.size,S=s.getPositions(A);for(let M=0;M<S.length;M++){const L=S[M][0],P=S[M][1];for(let U=-1;U<=7;U++)if(!(L+U<=-1||I<=L+U))for(let O=-1;O<=7;O++)P+O<=-1||I<=P+O||(U>=0&&U<=6&&(O===0||O===6)||O>=0&&O<=6&&(U===0||U===6)||U>=2&&U<=4&&O>=2&&O<=4?w.set(L+U,P+O,!0,!0):w.set(L+U,P+O,!1,!0))}}function g(w){const A=w.size;for(let I=8;I<A-8;I++){const S=I%2===0;w.set(I,6,S,!0),w.set(6,I,S,!0)}}function _(w,A){const I=r.getPositions(A);for(let S=0;S<I.length;S++){const M=I[S][0],L=I[S][1];for(let P=-2;P<=2;P++)for(let U=-2;U<=2;U++)P===-2||P===2||U===-2||U===2||P===0&&U===0?w.set(M+P,L+U,!0,!0):w.set(M+P,L+U,!1,!0)}}function h(w,A){const I=w.size,S=c.getEncodedBits(A);let M,L,P;for(let U=0;U<18;U++)M=Math.floor(U/3),L=U%3+I-8-3,P=(S>>U&1)===1,w.set(M,L,P,!0),w.set(L,M,P,!0)}function f(w,A,I){const S=w.size,M=u.getEncodedBits(A,I);let L,P;for(L=0;L<15;L++)P=(M>>L&1)===1,L<6?w.set(L,8,P,!0):L<8?w.set(L+1,8,P,!0):w.set(S-15+L,8,P,!0),L<8?w.set(8,S-L-1,P,!0):L<9?w.set(8,15-L-1+1,P,!0):w.set(8,15-L-1,P,!0);w.set(S-8,8,1,!0)}function E(w,A){const I=w.size;let S=-1,M=I-1,L=7,P=0;for(let U=I-1;U>0;U-=2)for(U===6&&U--;;){for(let O=0;O<2;O++)if(!w.isReserved(M,U-O)){let D=!1;P<A.length&&(D=(A[P]>>>L&1)===1),w.set(M,U-O,D),L--,L===-1&&(P++,L=7)}if(M+=S,M<0||I<=M){M-=S,S=-S;break}}}function y(w,A,I){const S=new t;I.forEach(function(O){S.put(O.mode.bit,4),S.put(O.getLength(),d.getCharCountIndicator(O.mode,w)),O.write(S)});const M=n.getSymbolTotalCodewords(w),L=o.getTotalCodewordsCount(w,A),P=(M-L)*8;for(S.getLengthInBits()+4<=P&&S.put(0,4);S.getLengthInBits()%8!==0;)S.putBit(0);const U=(P-S.getLengthInBits())/8;for(let O=0;O<U;O++)S.put(O%2?17:236,8);return v(S,w,A)}function v(w,A,I){const S=n.getSymbolTotalCodewords(A),M=o.getTotalCodewordsCount(A,I),L=S-M,P=o.getBlocksCount(A,I),U=S%P,O=P-U,D=Math.floor(S/P),N=Math.floor(L/P),B=N+1,k=D-N,te=new l(k);let pe=0;const _e=new Array(P),Ne=new Array(P);let Ge=0;const Xe=new Uint8Array(w.buffer);for(let Pe=0;Pe<P;Pe++){const Ee=Pe<O?N:B;_e[Pe]=Xe.slice(pe,pe+Ee),Ne[Pe]=te.encode(_e[Pe]),pe+=Ee,Ge=Math.max(Ge,Ee)}const Oe=new Uint8Array(S);let Q=0,ee,ve;for(ee=0;ee<Ge;ee++)for(ve=0;ve<P;ve++)ee<_e[ve].length&&(Oe[Q++]=_e[ve][ee]);for(ee=0;ee<k;ee++)for(ve=0;ve<P;ve++)Oe[Q++]=Ne[ve][ee];return Oe}function C(w,A,I,S){let M;if(Array.isArray(w))M=p.fromArray(w);else if(typeof w=="string"){let D=A;if(!D){const N=p.rawSplit(w);D=c.getBestVersionForData(N,I)}M=p.fromString(w,D||40)}else throw new Error("Invalid data");const L=c.getBestVersionForData(M,I);if(!L)throw new Error("The amount of data is too big to be stored in a QR Code");if(!A)A=L;else if(A<L)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+L+`.
`);const P=y(A,I,M),U=n.getSymbolSize(A),O=new i(U);return m(O,A),g(O),_(O,A),f(O,I,0),A>=7&&h(O,A),E(O,P),isNaN(S)&&(S=a.getBestMask(O,f.bind(null,O,I))),a.applyMask(S,O),f(O,I,S),{modules:O,version:A,errorCorrectionLevel:I,maskPattern:S,segments:M}}return As.create=function(A,I){if(typeof A>"u"||A==="")throw new Error("No input text");let S=e.M,M,L;return typeof I<"u"&&(S=e.from(I.errorCorrectionLevel,e.M),M=c.from(I.version),L=a.from(I.maskPattern),I.toSJISFunc&&n.setToSJISFunction(I.toSJISFunc)),C(A,M,S,L)},As}var Xs={},qs={},Sl;function Cc(){return Sl||(Sl=1,function(n){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let i=t.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+t);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(s){return[s,s]}))),i.length===6&&i.push("F","F");const r=parseInt(i.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+i.slice(0,6).join("")}}n.getOptions=function(i){i||(i={}),i.color||(i.color={});const r=typeof i.margin>"u"||i.margin===null||i.margin<0?4:i.margin,s=i.width&&i.width>=21?i.width:void 0,a=i.scale||4;return{width:s,scale:s?4:a,margin:r,color:{dark:e(i.color.dark||"#000000ff"),light:e(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},n.getScale=function(i,r){return r.width&&r.width>=i+r.margin*2?r.width/(i+r.margin*2):r.scale},n.getImageWidth=function(i,r){const s=n.getScale(i,r);return Math.floor((i+r.margin*2)*s)},n.qrToImageData=function(i,r,s){const a=r.modules.size,o=r.modules.data,l=n.getScale(a,s),c=Math.floor((a+s.margin*2)*l),u=s.margin*l,d=[s.color.light,s.color.dark];for(let p=0;p<c;p++)for(let m=0;m<c;m++){let g=(p*c+m)*4,_=s.color.light;if(p>=u&&m>=u&&p<c-u&&m<c-u){const h=Math.floor((p-u)/l),f=Math.floor((m-u)/l);_=d[o[h*a+f]?1:0]}i[g++]=_.r,i[g++]=_.g,i[g++]=_.b,i[g]=_.a}}}(qs)),qs}var Ml;function ad(){return Ml||(Ml=1,function(n){const e=Cc();function t(r,s,a){r.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=a,s.width=a,s.style.height=a+"px",s.style.width=a+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}n.render=function(s,a,o){let l=o,c=a;typeof l>"u"&&(!a||!a.getContext)&&(l=a,a=void 0),a||(c=i()),l=e.getOptions(l);const u=e.getImageWidth(s.modules.size,l),d=c.getContext("2d"),p=d.createImageData(u,u);return e.qrToImageData(p.data,s,l),t(d,c,u),d.putImageData(p,0,0),c},n.renderToDataURL=function(s,a,o){let l=o;typeof l>"u"&&(!a||!a.getContext)&&(l=a,a=void 0),l||(l={});const c=n.render(s,a,l),u=l.type||"image/png",d=l.rendererOpts||{};return c.toDataURL(u,d.quality)}}(Xs)),Xs}var Ys={},yl;function od(){if(yl)return Ys;yl=1;const n=Cc();function e(r,s){const a=r.a/255,o=s+'="'+r.hex+'"';return a<1?o+" "+s+'-opacity="'+a.toFixed(2).slice(1)+'"':o}function t(r,s,a){let o=r+s;return typeof a<"u"&&(o+=" "+a),o}function i(r,s,a){let o="",l=0,c=!1,u=0;for(let d=0;d<r.length;d++){const p=Math.floor(d%s),m=Math.floor(d/s);!p&&!c&&(c=!0),r[d]?(u++,d>0&&p>0&&r[d-1]||(o+=c?t("M",p+a,.5+m+a):t("m",l,0),l=0,c=!1),p+1<s&&r[d+1]||(o+=t("h",u),u=0)):l++}return o}return Ys.render=function(s,a,o){const l=n.getOptions(a),c=s.modules.size,u=s.modules.data,d=c+l.margin*2,p=l.color.light.a?"<path "+e(l.color.light,"fill")+' d="M0 0h'+d+"v"+d+'H0z"/>':"",m="<path "+e(l.color.dark,"stroke")+' d="'+i(u,c,l.margin)+'"/>',g='viewBox="0 0 '+d+" "+d+'"',h='<svg xmlns="http://www.w3.org/2000/svg" '+(l.width?'width="'+l.width+'" height="'+l.width+'" ':"")+g+' shape-rendering="crispEdges">'+p+m+`</svg>
`;return typeof o=="function"&&o(null,h),h},Ys}var bl;function ld(){if(bl)return xi;bl=1;const n=Vu(),e=sd(),t=ad(),i=od();function r(s,a,o,l,c){const u=[].slice.call(arguments,1),d=u.length,p=typeof u[d-1]=="function";if(!p&&!n())throw new Error("Callback required as last argument");if(p){if(d<2)throw new Error("Too few arguments provided");d===2?(c=o,o=a,a=l=void 0):d===3&&(a.getContext&&typeof c>"u"?(c=l,l=void 0):(c=l,l=o,o=a,a=void 0))}else{if(d<1)throw new Error("Too few arguments provided");return d===1?(o=a,a=l=void 0):d===2&&!a.getContext&&(l=o,o=a,a=void 0),new Promise(function(m,g){try{const _=e.create(o,l);m(s(_,a,l))}catch(_){g(_)}})}try{const m=e.create(o,l);c(null,s(m,a,l))}catch(m){c(m)}}return xi.create=e.create,xi.toCanvas=r.bind(null,t.render),xi.toDataURL=r.bind(null,t.renderToDataURL),xi.toString=r.bind(null,function(s,a,o){return i.render(s,o)}),xi}var cd=ld();const ud=Hu(cd);async function Pc(n,e,t){var a;const i=new File([n],e,{type:n.type});if((a=navigator.canShare)!=null&&a.call(navigator,{files:[i]})){try{await navigator.share({files:[i],title:t})}catch(o){if(o.name!=="AbortError")throw o}return}const r=URL.createObjectURL(i),s=document.createElement("a");s.href=r,s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}async function Lc(n,e){var m,g,_;const t=new Image;t.src=`/acorn-witch-atelier/assets/rewards/cg-${n.id}.webp`,await t.decode();const i=document.createElement("canvas");i.width=900,i.height=1560;const r=i.getContext("2d");r.fillStyle="#f4e8cb",r.fillRect(0,0,900,1560),r.strokeStyle="#b38a49",r.lineWidth=3,r.strokeRect(28,28,844,1504),r.textBaseline="top",r.fillStyle="#725533",r.font='24px "Songti SC",serif',r.fillText("橡果魔女  /  与松团子的珍藏时刻",55,62);const s=Math.max(790/t.width,800/t.height),a=t.width*s,o=t.height*s;r.save(),r.beginPath(),r.rect(55,112,790,800),r.clip(),r.drawImage(t,55+(790-a)/2,112+(800-o)*.38,a,o),r.restore(),r.fillStyle="#493927",r.font='bold 42px "Songti SC",serif',r.fillText(n.name,55,948,790);const l=["松团子",...n.costume.split(" · ")];r.font='20px "Songti SC",serif';let c=55;for(const h of l){const f=r.measureText(h).width+28;r.fillStyle="#365746",r.fillRect(c,1012,f,40),r.fillStyle="#fff0d1",r.fillText(h,c+14,1021),c+=f+12}r.fillStyle="#655039",r.font='25px "Songti SC",serif';let u="",d=1090;for(const h of n.lines[0])r.measureText(u+h).width>790&&(r.fillText(u,55,d),d+=43,u=""),u+=h;u&&r.fillText(u,55,d),r.strokeStyle="#b89b6666",r.beginPath(),r.moveTo(55,1260),r.lineTo(845,1260),r.stroke(),r.font='20px "Songti SC",serif',r.fillStyle="#786445",r.fillText(`收录条件 · ${n.condition}`,55,1284,790),r.fillText(`相伴第 ${e.day} 天   ·   好感 ${((m=e.collection)==null?void 0:m.bond)??0}   ·   CG 收藏 ${((_=(g=e.collection)==null?void 0:g.cgs)==null?void 0:_.length)??0} / 6`,55,1320,790),r.fillStyle="#365746",r.fillRect(55,1370,790,140),r.fillStyle="#fff0d1",r.font='25px "Songti SC",serif',r.fillText("来橡果小屋，写下你们的故事",78,1400),r.font='20px "Songti SC",serif',r.fillText("扫码开启与松团子的森林生活",78,1450),await Co(r,709,1380,120);const p=await new Promise(h=>i.toBlob(h,"image/png"));await Pc(p,`${n.name}-纪念卡.png`,n.name)}async function dd(n,e){const t=document.createElement("canvas"),i=t.getContext("2d"),r=[];let s=70;const a=(l,c,u="#493927")=>{i.font=`${c}px "Songti SC",serif`;let d="";for(const p of l)i.measureText(d+p).width>760&&(r.push({line:d,size:c,color:u,y:s}),s+=c*1.8,d=""),d+=p;d&&(r.push({line:d,size:c,color:u,y:s}),s+=c*1.8)};a(n.title,36),s+=20;for(const l of n.chapters){if(a(l.title,28),s+=12,l.cgId&&e.includes(l.cgId)){const c=new Image;c.src=`/acorn-witch-atelier/assets/rewards/cg-${l.cgId}.webp`,await c.decode();const u=Math.min(620,760*c.height/c.width),d=u*c.width/c.height;r.push({image:c,width:d,height:u,y:s}),s+=u+30}for(const c of l.paragraphs)a(c,24),s+=16;s+=30}t.width=900,t.height=Math.ceil(s+210),i.fillStyle="#f5ecd9",i.fillRect(0,0,t.width,t.height),i.textBaseline="top";for(const l of r)l.image?i.drawImage(l.image,(900-l.width)/2,l.y,l.width,l.height):(i.font=`${l.size}px "Songti SC",serif`,i.fillStyle=l.color,i.fillText(l.line,70,l.y));i.fillStyle="#365746",i.font='24px "Songti SC",serif',i.fillText("扫码开启与松团子的森林生活",70,s+70),await Co(i,680,s+25,140);const o=await new Promise(l=>t.toBlob(l,"image/png"));await Pc(o,`${n.title}.png`,n.title)}async function Co(n,e,t,i){const r=document.createElement("canvas");await ud.toCanvas(r,"https://logic33.github.io/acorn-witch-atelier/",{width:i,margin:2,errorCorrectionLevel:"M",color:{dark:"#294735",light:"#fff8e7"}}),n.drawImage(r,e,t,i,i)}function fd({world:n,root:e,onFinish:t}){let i=!0,r="berry",s=!1,a=!1,o=0,l=!1;function c(d=""){if(i){e.innerHTML='<div class="gather-guide"><b>01 · 摘莓果</b><span>走近莓果丛…</span></div>';return}const p={berry:"轻点莓果，装进篮子",acorn:"按住蓄力，亮起时松手",mushroom:"光点进入金色区域时采摘"};if(e.innerHTML=`<div class="gather-guide"><b>${{berry:"01 · 摘莓果",acorn:"02 · 够橡果",mushroom:"03 · 采蘑菇"}[r]}</b><span>${d||p[r]}</span></div>`,r==="berry"&&(e.insertAdjacentHTML("beforeend",'<button class="gather-berry" aria-label="采摘莓果">✦<small>采摘</small></button>'),e.querySelector("button").onclick=()=>u("pick")),r==="acorn"){e.insertAdjacentHTML("beforeend",'<button class="gather-hold" aria-label="按住蓄力，松手起跳"><span>按住蓄力</span><i><em></em></i></button>');const m=e.querySelector("button"),g=()=>{s||a||(a=!0,o=0,n.setAction("crouch"))},_=()=>{a&&(a=!1,o>=650&&o<=1450?u("jump"):(n.setAction("acorn"),c(o<650?"再蓄一点力，亮起时松手":"力气太大啦，再试一次")))};m.onpointerdown=h=>{m.setPointerCapture(h.pointerId),g()},m.onpointerup=_,m.onpointercancel=()=>{a=!1,n.setAction("acorn"),c()},m.onkeydown=h=>{["Space","Enter"].includes(h.code)&&(h.preventDefault(),g())},m.onkeyup=h=>{["Space","Enter"].includes(h.code)&&(h.preventDefault(),_())}}r==="mushroom"&&(e.insertAdjacentHTML("beforeend",'<button class="gather-timing" aria-label="把握时机采蘑菇"><i></i><span>采摘</span></button>'),e.querySelector("button").onclick=()=>{if(s)return;const m=o%1800/1800;m>=.35&&m<=.65?u("harvest"):(o=0,c("差一点，等光点进入金色区域"))})}function u(d){s||l||(s=!0,e.querySelectorAll("button").forEach(p=>p.disabled=!0),e.querySelector(".gather-guide span").textContent=d==="harvest"?"收好满满一篮，再带回家":"松团子正在采集…",n.setAction(d))}return c(),{tick(d){if(l)return;const p=n.getInfo().gatherMotion;if(!p.seeking){if(i){if(p.action!=="berry")return;i=!1,c()}if(s){if(!p.complete)return;if(s=!1,r==="mushroom"){l=!0,e.innerHTML="",t();return}r=r==="berry"?"acorn":"mushroom",o=0,n.setAction(r),c();return}if(a){o+=d;const m=e.querySelector(".gather-hold");m.classList.toggle("ready",o>=650&&o<=1450),m.querySelector("em").style.width=`${Math.min(100,o/18)}%`,m.querySelector("span").textContent=o>=650&&o<=1450?"松手起跳":"按住蓄力"}r==="mushroom"&&(o+=d,e.querySelector(".gather-timing").classList.toggle("ready",o%1800/1800>=.35&&o%1800/1800<=.65),e.querySelector(".gather-timing i").style.transform=`rotate(${o%1800/1800*360}deg)`)}},dispose(){l=!0,e.innerHTML=""}}}const Dc="acorn-witch-save-v1",ds={baking:"烘焙",magic:"魔法",style:"审美",knowledge:"学识",charm:"亲和"},Po={acorn:"橡果",berry:"莓果",cream:"奶油",herb:"香草",honey:"蜂蜜"},fr=[{id:"tart",name:"星光橡果塔",note:"酥脆塔皮，藏着一小片星空。",need:{acorn:2,berry:1,cream:1},temp:180,spell:"star",color:"#d9a050"},{id:"pie",name:"莓果云朵派",note:"把森林的清甜，叠进奶油云朵。",need:{berry:2,cream:1,herb:1},temp:170,spell:"forest",color:"#b54f65"},{id:"pudding",name:"蜂蜜布丁",note:"温柔的蜂蜜香，适合送给朋友。",need:{honey:2,cream:1},temp:160,spell:"heal",color:"#e3ba59"},{id:"maple",unlock:!0,name:"枫糖橡果饼",note:"轮盘新菜单 · 蜂蜜香裹住烤橡果。",need:{acorn:2,honey:1,cream:1},temp:175,spell:"forest",color:"#c69049"},{id:"berryroll",unlock:!0,name:"莓果奶油卷",note:"轮盘新菜单 · 把莓果卷进软软的奶油里。",need:{berry:2,cream:2,honey:1},temp:165,spell:"heal",color:"#dba3ad"}],$i=[{id:"acorn",name:"橡果烘焙师",short:"烘焙师",description:"松鼠围裙 · 格纹口袋 · 软软堆堆袜",color:"#776044",tags:"甜美 · 温暖",bonus:8,price:0},{id:"tea",name:"莓果茶会",short:"洛丽塔",description:"层叠蕾丝蓬裙 · 缎带蝴蝶结 · 玛丽珍鞋",color:"#b87587",tags:"甜美 · 华丽",bonus:14,price:70},{id:"forest",name:"森林小洋装",short:"小洋装",description:"短斗篷外套 · 收腰裙 · 小挎包与短靴",color:"#436d58",tags:"森林 · 温暖",bonus:10,price:55},{id:"school",name:"橡果学院",short:"校服",description:"水手领 · 格纹百褶裙 · 书包与银色耳环",color:"#3d4e59",tags:"学院 · 清新",bonus:12,price:45},{id:"adventure",name:"森林探险家",short:"冒险装",description:"短披风 · 皮革护腰 · 工具腰包与叶片耳坠",color:"#6b744f",tags:"冒险 · 自然",bonus:18,price:100},{id:"star",name:"飞行小魔女",short:"小魔女",description:"深蓝宽松裙 · 红蝴蝶结 · 送信包与扫帚",color:"#3d405b",tags:"魔法 · 自由",bonus:16,price:85}];function Ic(){return{version:1,day:1,slot:0,energy:90,mood:75,coins:120,stats:{baking:12,magic:8,style:8,knowledge:8,charm:10},inventory:{acorn:6,berry:5,cream:5,herb:3,honey:4},desserts:[],outfit:"acorn",owned:["acorn"],friendship:0,story:0,records:[],memories:[],memoryStamps:[],ending:null}}function lr(n,e){return Object.entries(e.need).every(([t,i])=>n.inventory[t]>=i)}function hd(n,e,t,i,r){return Math.min(100,Math.round(20+e*30+t*25+(i===r.spell?12:5)+Math.min(13,n.stats.baking*.25+n.stats.magic*.15)))}function Uc(n){return n>=88?"S":n>=72?"A":n>=52?"B":"C"}function _i(n,e){return(!n.ending||n.day>7)&&n.energy>=e&&!(n.day===7&&n.slot===3)}function pd(n,{name:e,cost:t=0,stats:i={},mood:r=0,coins:s=0,energy:a=0,ingredients:o={},dessert:l=null,friendship:c=0}){if(!_i(n,t))throw new Error("没有足够的体力或行动时段");if(n.coins+s<0)throw new Error("金币不足");for(const[u,d]of Object.entries(o))if(n.inventory[u]+d<0)throw new Error("材料不足");n.energy=Math.min(100,n.energy-t+a),n.mood=Math.max(0,Math.min(100,n.mood+r)),n.coins+=s;for(const[u,d]of Object.entries(i))n.stats[u]+=d;for(const[u,d]of Object.entries(o))n.inventory[u]+=d;return l&&n.desserts.push(l),n.friendship+=c,n.records.unshift({day:n.day,slot:n.slot,name:e,id:crypto.randomUUID(),createdAt:new Date().toISOString()}),n.slot++,n.slot===3&&n.day!==7&&(n.day++,n.slot=0,n.energy=Math.min(100,n.energy+25)),n}function md(n,e){const t=Math.round(e.score*.5),i=Math.min(25,Math.round(n.stats.baking*.35+n.stats.magic*.25+n.stats.knowledge*.15)),r=Math.min(20,$i.find(l=>l.id===n.outfit).bonus+Math.floor(n.stats.style*.2)),s=Math.min(5,Math.floor(n.friendship/2)),a=t+i+r+s,o=a>=88?"金色掌声之夜":n.friendship>=6?"有人为你而来":n.stats.magic>n.stats.baking?"秋叶与星光":"第一份秋日心意";return{score:a,grade:Uc(a),title:o,taste:t,growth:i,dress:r,bond:s,dessert:e.name}}const Wi=[{guest:"放学的小客人",request:"甜点配一杯热茶，想暖暖手。",choice:"tea",motion:"child"},{guest:"结伴而来的街坊",request:"今天想喝热可可，搭配一小块甜点。",choice:"cocoa",motion:"queue"},{guest:"喜欢甜味的小姐",request:"今天想吃甜一点的，请加一杯蜂蜜茶。",choice:"honey",motion:"vip"}],fs=2e4;function gd(n,e){const t=e.filter(a=>a.correct).length,i=e.filter(a=>a.perfect).length,r=Math.round((Math.round(n*.6)+18)*t/Wi.length),s=i*5;return{served:t,perfect:i,sales:r,tips:s,coins:r+s,satisfaction:Math.round(t/Wi.length*100),charm:t,mood:t||-2}}const _d=5,Bi=35,Lo=[{id:"ribbon",slot:"accessory",name:"秋色蝴蝶结"},{id:"moon",slot:"accessory",name:"琥珀月牙耳饰"},{id:"leaf",slot:"accessory",name:"秋叶橡果发夹"}],Fi=[{id:"orange",name:"橘猫",look:"橘色条纹 · 圆滚滚",line:"它把脑袋放在我的鞋上了……这是想跟我们回家吗？",action:"蹲下来摸摸它",reply:"咕噜噜……它眯着眼，把脑袋往你手心里送。"},{id:"calico",name:"三花猫",look:"橙黑花斑 · 爱扑落叶",line:"那片叶子是我变的。它追了这么久，我再变一片给它吧。",action:"陪它追落叶",reply:"它抬起爪子接住叶子，又轻轻推到了你面前。"},{id:"silver",name:"银渐层",look:"银白绒毛 · 圆脸",line:"像一小团落到地上的云。云也会呼噜吗？",action:"轻轻挠下巴",reply:"它仰起圆圆的脸，闭着眼睛蹭了蹭你的手。"},{id:"ragdoll",name:"布偶猫",look:"蓝眼睛 · 蓬松长毛",line:"它靠过来以后，我都舍不得翻书了。再坐一会儿吧。",action:"陪它打个盹",reply:"蓬松的尾巴轻轻一卷，它安心地靠着你睡着了。"},{id:"siamese",name:"暹罗猫",look:"蓝眼睛 · 深色脸爪",line:"我走到哪儿，它就跟到哪儿。你看，它又在问我们什么呢。",action:"轻声回应它",reply:"喵——它歪歪头，向你又迈近了一小步。"},{id:"black",name:"黑猫",look:"黑色短毛 · 金色眼睛",line:"我的帽子好像在动……原来你在这里！",action:"伸手打个招呼",reply:"黑色的小爪子伸过来，认真地碰了碰你的指尖。"},{id:"golden",name:"金渐层",look:"金色绒毛 · 圆脸绿眼",line:"它的毛和晒过太阳的秋叶一个颜色。我们叫它什么好呢？",action:"轻轻摸摸背",reply:"它舒舒服服地伸了个懒腰，又团成一小颗金色毛球。"},{id:"devon",name:"德文猫",look:"大耳朵 · 短卷毛",line:"它的耳朵也好大！是在偷偷听秋天说话吗？",action:"凑近悄悄说话",reply:"它竖起大耳朵，轻轻蹭了蹭你，像听懂了秘密。"},{id:"abyssinian",name:"阿比西尼亚猫",look:"暖棕短毛 · 修长灵巧",line:"刚才还在门边，一转眼就到椅背上了。真像一阵秋风。",action:"晃一晃秋叶",reply:"它轻巧地跃过去，停下时还回头等你跟上。"}],li=[{id:"magic",name:"第一片会飞的秋叶",activity:"course",stat:"magic",threshold:20,condition:"魔法达到 20 后完成一节课",costume:"魔女装 · 彩窗教室",lines:["同学们离开后，窗边那片秋叶仍悬在半空，怎么也落不下来。松团子收起笑容，重新翻开了课本。","「我只练过让它飞起来……书上怎么没写，它不肯下来怎么办？」","她试着把声音放轻，秋叶却绕着灯罩越转越快。叶柄碰到铜铃，清脆的一声响让她缩了缩耳朵。","她伸出的手停住了，转而把书合上。「也许它不是想听更多咒语。我先不催它了。」","铃声渐渐停了。她摊开空着的手，让叶子自己靠近；那点微光终于从灯罩旁慢慢降下来。","叶子在掌心上方摇了一下，安静地落下。她没有马上欢呼，而是认真看了看自己还在发抖的手。","「原来停下来也要练习。我以前总想让大家看看，我能把魔法变得多漂亮。」","她在课本空白处画下一片小叶子。「这一页先留着吧。你觉得刚才，是哪里开始不一样了？」"]},{id:"baking",name:"第一口，留给你",activity:"baking",stat:"baking",threshold:27,condition:"烘焙达到 27 后完成一次烘焙",costume:"围裙 · 小屋厨房",lines:["甜点已经出炉，松团子却拿着两只小盘子，在桌边站了很久。","「这一口本来想留给你……可是如果不合你的口味呢？」","她低头整理奶油，越想让它完美，叉尖越不听话。一小块莓果滑了下来，留下歪歪的缺口。","她的尾巴垂下来，伸手去拿备用的盘子，又停住了。「我是不是把分享，弄得像交作业一样？」","她放下装饰用的小匙，把那块不太整齐的甜点放到窗边，又给另一只盘子分了一小份。","「我可以先说实话：这里有点酸，边缘也烤得脆了。可是刚打开烤箱的时候，我第一个想到的是你。」","她把小叉子放在盘边，终于不再修补那个缺口。「不喜欢也可以告诉我，不用为了让我高兴说好吃。」","她坐到桌边，给你留出挑选的余地。「下一次，我们试着做一种你喜欢、我也想尝尝的味道，好吗？」"]},{id:"shop",name:"打烊后的掌声",activity:"shop",stat:"charm",threshold:16,condition:"亲和达到 16 后完成一次营业",costume:"围裙 · 烘焙小铺",lines:["最后一位客人离开后，松团子在桌脚旁发现了一张折起来的纸。","纸上画着一块甜点，下面只写着几个字：下次还想来，可是我不太敢开口。","她对着门外看了看，街上已经没有刚才那位小客人的身影。「我今天一直在忙，都没发现它想说话。」","她原本要擦掉柜台上的欢迎字样，手里的布停在半空。「是不是一定要会大声点单，才能被好好招待？」","她找来一张旧菜单，把饮品旁边画上杯子，又在角落留出一块空白。","「不会说的时候，可以指给我看。不知道想要什么，也可以慢慢选。」她把菜单放到更低、容易够到的地方。","门外传来轻轻的脚步，刚才的小客人探头看了看新菜单。松团子没有催促，只笑着把它往前推了一点。","小客人点了点那幅杯子。她回头轻声问你：「空白的这一角，还能写点什么，让它知道不着急呢？」"]},{id:"explore",name:"秋风知道的小路",activity:"gather",visits:3,condition:"完成三次森林采集",costume:"冒险装 · 榛果林",lines:["小路尽头，松团子在熟悉的苔草旁停下来。昨夜落下的树枝挡住了那条窄窄的路。","「我小时候总从这里过去。你听，树叶的声音……今天好像不太一样。」","灌木底下传来细小的摩擦声。一只刺猬拖着叶子绕来绕去，每次都被同一根横枝挡回来。","松团子刚要伸手抱它，刺猬就缩成了小球。她立刻退后，把自己的尾巴也收了起来。","「它不认识我。我以为帮忙就是把它带过去，可它可能只想自己走。」她蹲远了一点，耐心等那颗小球重新展开。","刺猬又试着往左钻。她顺着那个方向，轻轻拨开几片压低的蕨叶，让那条原本就有的小缝重新露出来。","小小的身影穿过缝隙消失了，灌木另一侧响起窸窣声。松团子躺回苔草上，长长地松了一口气。","「原来这条路不只属于我的回忆。」她侧过脸看你。「以后再来，我们怎么走，才不会挡住这些小邻居呢？」"]},{id:"bond",name:"再陪我读一页",activity:"home",bond:12,condition:"与松团子的好感达到 12，回到小屋",costume:"日常围裙装 · 窗边",lines:["松团子把书挪过来，却在同一页上停了很久。故事里的小旅人刚向朋友告别。","「它都说了会回来，为什么留下来的那个人还是难过呢？」","她往后翻了两页，又急忙翻回来。「我想先看看结局……这样就不用一直担心了吧。」","窗外传来风声，一张夹在书里的旧书签滑到桌上。上面是她刚学会写名字时，留下的歪歪扭扭的字。","她拾起书签，慢慢把书翻回原来的那页。「那个时候，我也不知道自己后来能把名字写好。」","她把想偷看的后半本合住，只留出眼前这一页。「也许不知道以后怎样的时候，现在的陪伴才会这么重要。」","她读完了小旅人出门的那一段，这次没有急着找结局，肩膀也渐渐放松下来。","「我还会担心的。」她把书签放在两页中间。「但今天可以先读到这里。你有没有一段舍不得翻过去的故事？」"]},{id:"festival",name:"把秋天送给你",activity:"festival",condition:"参加第七天的秋日祭",costume:"秋日盛装 · 祭典广场",lines:["广场上的灯亮起来时，松团子还攥着那片准备送出的秋叶，叶边已经被手心捂得微微卷起。","「大家的礼物都有漂亮的盒子。我找了很久，好像只找得到这种东西。」","一阵风吹过，叶片的微光暗了下来。她连忙用双手护住它，却越护越紧。","她看着路边孩子们捡起普通落叶，互相交换形状和颜色，慢慢松开了手指。","「它不一定要一直发光，才值得被留下吧？」她把叶子放平，让灯火照见叶面细细的脉络。","她指着其中一道纹路，说起第一次走进小屋时的紧张，又说到那些想问、却一直没敢问出口的问题。","「我原来想把整个秋天都送出去。现在想想，应该先问问你，愿不愿意留下我们一起过的这一小段。」","她伸出手，让叶子安静地躺在掌心。「不用现在就回答。灯还亮着，我们可以慢慢说。」"]}],Oi=[{id:"warm",name:"暖茸茸的初遇",cats:["golden","devon","orange"],part:"ribbon",menu:"maple"},{id:"forest",name:"林间小脚印",cats:["abyssinian","calico","black"],part:"moon",menu:"berryroll"},{id:"tea",name:"午后茶会",cats:["orange","silver","golden"],part:"leaf",menu:"maple"},{id:"moon",name:"月亮的来客",cats:["ragdoll","siamese","silver"],part:"ribbon",menu:"berryroll"},{id:"hat",name:"帽子里的秘密",cats:["black","devon","calico"],part:"moon",menu:"maple"}];function vn(n){n.collection??(n.collection={});const e=n.collection;return e.customOutfits??(e.customOutfits=[]),e.activeCustom??(e.activeCustom=null),e.cgs??(e.cgs=[]),e.seen??(e.seen=[]),e.pets??(e.pets=[]),e.petNames??(e.petNames={}),e.activePet??(e.activePet=null),e.petInteractions??(e.petInteractions={}),e.parts??(e.parts=[]),e.menus??(e.menus=[]),e.draws??(e.draws={}),e.bond??(e.bond=0),e.bondSources??(e.bondSources=[]),e.visits??(e.visits={}),e.wear??(e.wear={accessory:null}),e}function Nc(n,e){const t=vn(n);t.bondSources.includes(e)||(t.bondSources.push(e),t.bond=Math.min(100,t.bond+2))}function Fc(n,e){const t=vn(n);if(t.cgs.includes(e))return!1;t.cgs.push(e),n.memories??(n.memories=[]);const i=li.find(r=>r.id===e);return n.memories.push({id:`cg-${e}`,title:i.name,summary:i.lines.at(-1),activity:i.activity,kind:"canon",cg:e,day:n.day,slot:n.slot,createdAt:new Date().toISOString()}),!0}function Oc(n,e){const t=vn(n);for(const i of li)i.activity!==e||i.id==="festival"||i.stat&&n.stats[i.stat]<i.threshold||i.visits&&(t.visits[e]??0)<i.visits||i.bond&&t.bond<i.bond||Fc(n,i.id)}function vd(n,e){const t=vn(n);t.visits[e]=(t.visits[e]??0)+1,Nc(n,`${n.day}:${e}`),Oc(n,e)}function xd(n){return[...n.cats.map(e=>({id:`pet-${e}`,type:"pet",item:e,name:Fi.find(t=>t.id===e).name})),{id:`part-${n.part}`,type:"part",item:n.part,name:Lo.find(e=>e.id===n.part).name},{id:"outfit-tea",type:"outfit",item:"tea",name:"莓果茶会套装"},{id:`menu-${n.menu}`,type:"menu",item:n.menu,name:fr.find(e=>e.id===n.menu).name},{id:"coins-20",type:"coins",amount:20,name:"20 金币"}]}function Da(n,e){const t=vn(n),i=Oi.find(r=>r.id===e);return i?xd(i).filter(r=>!(t.draws[e]??[]).includes(r.id)&&!(r.type==="pet"&&t.pets.includes(r.item))&&!(r.type==="part"&&t.parts.includes(r.item))&&!(r.type==="menu"&&t.menus.includes(r.item))&&!(r.type==="outfit"&&n.owned.includes(r.item))):[]}function Sd(n,e,t=Math.random()){var a;const i=Da(n,e);if(n.coins<Bi)throw new Error("金币不足，去小铺接待客人吧。");if(!i.length)throw new Error("这期已经收集齐啦。");if(!Number.isFinite(t)||t<0||t>=1)throw new Error("抽取值无效");const r=i[Math.floor(t*i.length)],s=n.collection;return n.coins-=Bi,(a=s.draws)[e]??(a[e]=[]),s.draws[e].push(r.id),r.type==="coins"&&(n.coins+=r.amount),r.type==="pet"&&(s.pets.push(r.item),s.activePet??(s.activePet=r.item)),r.type==="part"&&s.parts.push(r.item),r.type==="menu"&&s.menus.push(r.item),r.type==="outfit"&&n.owned.push(r.item),s.lastReward={...r,poolId:e},r}function Md(n){return fr.filter(e=>!e.unlock||vn(n).menus.includes(e.id))}const Si=240,Cr=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function yd({game:n,getState:e,save:t,world:i,pause:r,onEquipped:s}){const a=document.createElement("dialog");a.id="atelier-dialog",n.append(a);let o=!1,l=null,c=!1,u=null,d="",p="",m="";const g=()=>vn(e());async function _(v,C){const w=await fetch("/api/wardrobe"+v,{...C?{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(C)}:{}}),A=await w.text();let I;try{I=JSON.parse(A)}catch{throw new Error("服装绘图服务尚未连接。")}if(!w.ok)throw new Error(I.error||"服装绘图请求未完成。");return I}function h(v=""){a.innerHTML=`<header class="collection-header"><div><small>为松团子设计一套新衣服</small><h2>小小裁缝铺</h2></div><button data-design="close" aria-label="关闭设计">×</button></header><div class="atelier-body">${(l==null?void 0:l.status)==="ready"?`<img class="atelier-preview" src="${v||i.customPreview(l.id)}" alt="新衣服站姿预览"><h3>${Cr(l.name||"我的新衣服")}</h3><p>这套衣服喜欢吗？穿回小屋，就能陪她继续读书。</p><button class="button wide" data-design="accept" ${e().coins<Si?"disabled":""}>收进衣柜 · ${Si} 金币</button><button class="button subtle wide" data-design="again">重新描述</button>`:`<p>可以写款式、颜色和配饰。她还是原来的松团子。</p><label>给这套衣服起名<input id="design-name" maxlength="20" value="${Cr(m)}" placeholder="例如：雨后的来信" ${c?"disabled":""}></label><label>你想让她穿什么？<textarea id="design-prompt" maxlength="600" rows="4" placeholder="浅蓝色水手领小洋装，白色蕾丝裙边，配一个红色小蝴蝶结……" ${c?"disabled":""}>${Cr(p)}</textarea></label><p class="collection-note">整套定制 ${Si} 金币 · 确认收进衣柜时扣除<br>可以保留描述，稍后回来继续。</p><button class="button wide" data-design="generate" ${c||!o||e().coins<Si?"disabled":""}>${c?"正在为她制作新衣服…":o?"开始设计":"绘图服务尚未配置"}</button>${c?'<p class="atelier-progress" role="status">正在绘制服装与配套动作，请稍等。可以先关闭，稍后回来查看。</p>':""}`}<p class="atelier-error" role="alert">${Cr(d)}</p><small>余额 ◈ ${e().coins}</small></div>`}async function f(){clearTimeout(u);try{l=await _("/jobs/"+g().pendingDesign),l.status==="ready"?(await i.prepareCustom(l),c=!1,a.open&&h()):l.status==="failed"?(c=!1,d=l.error,delete g().pendingDesign,t(),a.open&&h()):(c=!0,a.open&&h(),u=setTimeout(f,2200))}catch(v){c=!1,d=v.message,a.open&&h()}}async function E(){a.open||(a.showModal(),r(!0)),d="",p=g().designDraft??p,m=g().designName??m,h();try{o=(await _("/status")).available,g().pendingDesign?(c=!0,await f()):h()}catch(v){d=v.message,h()}}function y(){a.close(),r(!1)}return a.addEventListener("cancel",v=>{v.preventDefault(),y()}),a.addEventListener("input",v=>{v.target.id==="design-prompt"&&(p=v.target.value,g().designDraft=p),v.target.id==="design-name"&&(m=v.target.value,g().designName=m),t()}),a.addEventListener("click",async v=>{var A;const C=v.target.closest("[data-design]");if(!C||C.disabled)return;const w=C.dataset.design;if(w==="close"&&y(),w==="generate"){if(c)return;if(p.trim().length<4){d="再具体一点吧，至少写 4 个字。",h();return}c=!0,d="";const I=crypto.randomUUID();g().pendingDesign=I,t(),h();try{l=await _("/jobs",{id:I,prompt:p,name:m||"我的新衣服"}),await f()}catch(S){c=!1,d=S.message,delete g().pendingDesign,t(),h()}}if(w==="accept"&&(l==null?void 0:l.status)==="ready"){const I=e();if(I.coins<Si)return;(A=g()).customOutfits??(A.customOutfits=[]),g().customOutfits.some(S=>S.id===l.id)||(I.coins-=Si,g().customOutfits.push({id:l.id,name:l.name||"我的新衣服",prompt:l.prompt,standing:l.standing,reading:l.reading})),g().activeCustom=l.id,delete g().pendingDesign,t(),y(),s()}w==="again"&&(l=null,delete g().pendingDesign,t(),h())}),{open:E,get opened(){return a.open}}}const bd="/api/companion";function Ed({dialog:n,getState:e,save:t,cg:i}){const r=n.querySelector("#cg-chat-form"),s=n.querySelector("#cg-chat-input"),a=n.querySelector("#cg-chat-status"),o=n.querySelector("#cg-responses"),l=()=>{s.style.height="auto",s.style.height=s.scrollHeight+"px"};s.addEventListener("input",l);const c=e(),u={id:crypto.randomUUID(),title:i.name+" · 对话",activity:i.activity,kind:"branch",cg:i.id,day:c.day,slot:c.slot,createdAt:new Date().toISOString(),messages:[]};let d=null,p=!1;const m={magic:["先停下咒语，观察叶子的反应。","别着急，我们一起找找书里的办法。"],baking:["不必做得完美，我想听听你的心意。","我们一起看看，是哪里让你犹豫了？"],shop:["先看看纸上写了什么。","刚才的客人是不是落下什么了？"],explore:["先看看是什么挡住了路。","听听附近的动静，别急着过去。"],bond:["这一页，是有什么让你在意吗？","不用赶，我陪你慢慢读。"],festival:["你手里拿着的，是准备送人的礼物吗？","不着急，我们找个安静的地方说。"]};function g(f){o.replaceChildren();for(const y of f){const v=document.createElement("button");v.type="button",v.className="cg-response",v.textContent=y,v.setAttribute("aria-label",y),v.onclick=()=>void h(null,y),o.append(v)}const E=document.createElement("button");E.type="button",E.className="cg-custom-response",E.innerHTML='<svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true"><path d="M3 3.5h14v10H9l-4 3v-3H3z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M6 7h8M6 10h5" stroke="currentColor" stroke-width="1.2"/></svg><span>其他</span>',E.onclick=()=>{o.hidden=!0,r.hidden=!1,l(),s.focus()},o.append(E),o.hidden=!1,r.hidden=!0}function _(f,E){const y=n.querySelector("#cg-line");y.replaceChildren();for(const[v,C]of[["narration",f],["dialogue",E]]){if(!C)continue;y.childNodes.length&&y.append(`
`);const w=document.createElement("span");w.className="cg-"+v,w.textContent=C,y.append(w)}}_(i.lines[0]),g(m[i.id]),n.querySelector("#cg-custom-cancel").onclick=()=>{r.hidden=!0,o.hidden=!1};async function h(f,E){var v;f==null||f.preventDefault();const y=E??s.value.trim();if(!(!y||d)){d=new AbortController,n.querySelectorAll("#cg-responses button,#cg-chat-form button").forEach(C=>C.disabled=!0),s.readOnly=!0,a.textContent="松团子正在回应…";try{const C=e(),w=await fetch(bd+"/chat",{method:"POST",headers:{"Content-Type":"application/json"},signal:d.signal,body:JSON.stringify({messages:[...u.messages.slice(-30),{role:"user",content:y}],context:{activity:i.activity,day:C.day,slot:C.slot,cg:{id:i.id,title:i.name,costume:i.costume,lines:[i.lines[0]],outline:i.lines,currentLine:n.querySelector("#cg-line").textContent,interactive:!0},memories:(C.memories??[]).slice(-12).map(({title:S,summary:M})=>({title:S,summary:M}))}})}),A=await w.json();if(!w.ok)throw new Error(A.error||"暂时未能连接，请重试。");if(p)return;if(!Array.isArray(A.choices)||A.choices.length!==2)throw new Error("剧情反馈未完整生成，请重试。");u.messages.push({role:"user",content:y},{role:"assistant",content:[A.narration,A.dialogue].filter(Boolean).join(`
`)}),u.summary=((v=A.event)==null?void 0:v.summary)||[A.narration,A.dialogue].filter(Boolean).join(" "),u.updatedAt=new Date().toISOString(),A.event&&(u.event=A.event),C.memories??(C.memories=[]);const I=C.memories.findIndex(S=>S.id===u.id);I<0?C.memories.push(structuredClone(u)):C.memories[I]=structuredClone(u),t(),_(A.narration,A.dialogue),s.value="",g(A.choices),a.textContent="剧情已记入手记"}catch(C){C.name!=="AbortError"&&!p&&(a.textContent=C.message)}finally{d=null,p||(n.querySelectorAll("#cg-responses button,#cg-chat-form button").forEach(C=>C.disabled=!1),s.readOnly=!1)}}}return r.addEventListener("submit",h),{dispose(){p=!0,d==null||d.abort(),r.removeEventListener("submit",h)}}}function Bc(n,e){const t=e.getBoundingClientRect(),i=Math.min(820,innerHeight-48),r=Math.min(500,innerWidth-32,i*.7);n.style.setProperty("--book-left",`${Math.max(16,Math.min(innerWidth-r-16,t.left+t.width/2-r/2))}px`),n.style.setProperty("--book-top",`${(innerHeight-i)/2}px`),n.style.setProperty("--book-width",`${r}px`),n.style.setProperty("--book-height",`${i}px`)}const Ia=n=>`<header class="storybook-heading"><small>与她一起生活的日子</small><h2>${n==="stories"?"角色故事":"手记"}</h2><button class="book-close" data-co="close" aria-label="${n==="stories"?"合上故事书":"合上手记"}">×</button></header>`,kc={magic:"50% 44%",baking:"50% 38%",shop:"50% 37%",explore:"50% 45%",bond:"50% 35%",festival:"50% 37%"},El=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Zn=n=>`/acorn-witch-atelier/assets/rewards/${n}.webp`;function Td({game:n,getState:e,save:t,refresh:i,pause:r,world:s,onWear:a,onRecipes:o}){const l=document.createElement("dialog");l.id="rewards-dialog",n.append(l);const c=document.createElement("button");c.id="home-pet",c.hidden=!0,c.type="button",n.append(c);let u=Oi[0].id,d="album",p=!1,m=null,g=null,_=null;const h=()=>vn(e());function f(){if(g){const D=n.getBoundingClientRect();for(const[N,B]of Object.entries({left:D.left,top:D.top,width:D.width,height:D.height}))l.style.setProperty(`--book-${N}`,`${B}px`)}else Bc(l,n)}function E(){f(),l.open||(l.showModal(),r(!0)),n.dataset.collection="open"}function y(){if(p)return;_==null||_.dispose(),_=null,g&&!h().seen.includes(g)&&(h().seen.push(g),t()),l.close(),delete n.dataset.collection,r(!1),g=null;const D=m;m=null,i(),D==null||D()}window.addEventListener("resize",()=>{l.open&&f()}),l.addEventListener("cancel",D=>{D.preventDefault(),y()});const v=(D,N,B="",k="")=>`<button class="button" data-reward="${N}" data-id="${B}" ${k}>${D}</button>`;function C(D,N){E(),l.className="collection-page",l.dataset.tab=d,l.innerHTML=`<header class="collection-header"><div><small>松团子的秋日收藏</small><h2>${D}</h2></div><button data-reward="close" aria-label="关闭收藏">×</button></header>${d==="wheel"?"":`<nav class="collection-tabs" aria-label="收藏分类">${[["album","剧情相册"],["pets","宠物册"]].map(([B,k])=>`<button data-reward="tab" data-id="${B}" aria-pressed="${d===B}">${k}</button>`).join("")}</nav>`}<div class="collection-body">${N}</div>`}function w(){d="album";const D=h().cgs;C("CG 相册",`<p class="collection-intro">学习与相处，会把新的故事带到身边。<br>松团子好感 <b>${h().bond}</b> · 已收录 ${D.length} / ${li.length}</p><div class="cg-grid">${li.map(N=>`<button class="cg-card ${D.includes(N.id)?"":"locked"}" data-reward="cg" data-id="${N.id}" style="--cg-focus:${kc[N.id]}" ${D.includes(N.id)?"":"disabled"}><div><img src="${Zn("cg-"+N.id)}" alt="${D.includes(N.id)?N.name:"未解锁剧情剪影"}">${D.includes(N.id)?"<span>▷ 重温</span>":"<span>尚未遇见</span>"}</div><b>${N.name}</b><small>${D.includes(N.id)?N.costume:N.condition}</small></button>`).join("")}</div><p class="collection-note">参加秋日祭即可获得祭典 CG，庆典后生活继续。</p>`)}function A(D,N=!1){return D.type==="pet"?`<img src="${Zn("cat-"+D.item)}" alt="${D.name}">`:D.type==="part"?`<img src="${Zn("part-"+D.item)}" alt="${D.name}">`:D.type==="outfit"?`<img src="${s.getOutfitPreview(D.item,N)}" alt="${D.name}">`:`<span class="wheel-symbol">${D.type==="coins"?"◈":"♧"}</span>`}function I(){d="wheel";const D=e();Oi.find(B=>B.id===u);const N=Da(D,u);C("秋日幸运轮盘",`<label class="pool-select">本期收藏<select id="wheel-pool" aria-label="选择轮盘主题">${Oi.map(B=>`<option value="${B.id}" ${B.id===u?"selected":""}>${B.name}</option>`).join("")}</select></label><div class="wheel-balance">◈ ${D.coins} <small>每次 ${Bi} 金币</small></div><div class="wheel-stage"><div class="wheel-pointer">▼</div><div class="reward-wheel" style="--count:${Math.max(N.length,1)}">${N.map((B,k)=>`<div class="wheel-prize" style="--angle:${k*360/N.length}deg"><div>${A(B)}<small>${B.name}</small></div></div>`).join("")}<div class="wheel-center">✦</div></div></div><p class="wheel-status" role="status">${N.length?`剩余 ${N.length} 件 · 每件概率 ${(100/N.length).toFixed(2)}%`:"这期收藏齐了，看看别的主题吧。"}</p><div class="wheel-cta">${v(`转一次 · ${Bi} ◈`,"spin","",!N.length||D.coins<Bi?"disabled":"")}</div><p class="collection-note">不重复获得 · 抽中即得<br>集齐本期最多还需 ${N.length*Bi} 金币</p>`)}function S(D){l.className="collection-page reward-reveal",l.innerHTML=`<header class="collection-header"><small>这份小惊喜，属于你了</small><button data-reward="close" aria-label="关闭奖励">×</button></header><div class="reveal-content"><span class="reveal-spark">✦</span><div class="reveal-art">${A(D,!0)}</div><h2>${D.name}</h2><p>${{pet:"一位新朋友，来小屋住下啦。",part:"已放进衣柜，可以自由搭配。",outfit:"整套穿搭已放进衣柜。",menu:"已经学会，可以去厨房制作，再到小铺售卖。",coins:"已放进你的钱袋。"}[D.type]}</p><div class="reveal-actions">${D.type==="pet"?v("认识它","pet",D.item):D.type==="part"||D.type==="outfit"?v("去试衣间","wear"):D.type==="menu"?v("看看新菜单","recipes"):""}${v("继续看轮盘","wheel")}</div></div>`}function M(){if(p)return;let D;const N=Da(e(),u);try{D=Sd(e(),u,crypto.getRandomValues(new Uint32Array(1))[0]/4294967296)}catch(te){l.querySelector(".wheel-status").textContent=te.message;return}t(),i(),p=!0,l.querySelectorAll("button,select").forEach(te=>te.disabled=!0),l.querySelector(".wheel-status").textContent="指针慢慢停下来了…";const B=N.findIndex(te=>te.id===D.id),k=l.querySelector(".reward-wheel");k.style.transform=`rotate(${1800-B*360/N.length}deg)`,setTimeout(()=>{p=!1,S(D)},matchMedia("(prefers-reduced-motion: reduce)").matches?50:2400)}function L(){d="pets",C("小屋里的毛茸茸",`<p class="collection-intro">已结识 ${h().pets.length} / ${Fi.length} 位朋友<br>点击已拥有的猫咪，起名、互动或带回主页。</p><div class="pet-grid">${Fi.map(D=>`<button class="pet-card ${h().pets.includes(D.id)?"":"unowned"}" data-reward="pet" data-id="${D.id}"><img src="${Zn("cat-"+D.id)}" alt="${D.name}"><b>${El(h().petNames[D.id]||D.name)}</b><small>${h().activePet===D.id?"正在陪伴":h().pets.includes(D.id)?"已结识":"轮盘可获得"}</small></button>`).join("")}</div>`)}function P(D){const N=Fi.find(k=>k.id===D);if(!N)return;const B=h().pets.includes(D);d="pets",C(N.name,`<div class="pet-detail"><img class="pet-large" src="${Zn("cat-"+D)}" alt="${N.name}"><p>${N.look}</p><p class="pet-dialogue">松团子：「${N.line}」</p>${B?`<label>名字<input id="pet-name" maxlength="12" value="${El(h().petNames[D]||"")}" placeholder="${N.name}" autocomplete="off"></label><div class="pet-actions">${v("改名","pet-name",D)}${v(h().activePet===D?"休息":"带回",h().activePet===D?"pet-rest":"pet-equip",D)}${v("互动","pet-touch",D,`aria-label="${N.action}"`)}</div><p id="pet-reply" role="status"></p><small>已互动 ${h().petInteractions[D]??0} 次 · 不需要强制喂养</small>`:`<p>在「${Oi.find(k=>k.cats.includes(D)).name}」轮盘结识它。</p>${v("去看看轮盘","pet-pool",D)}`}</div>`)}function U(D,N=null){const B=li.find(k=>k.id===D);!B||!h().cgs.includes(D)||(m=N,g=D,E(),l.className="cg-player",l.innerHTML=`<img class="cg-full" src="${Zn("cg-"+D)}" alt="${B.name}"><div class="cg-motes" aria-hidden="true">${Array.from({length:10},(k,te)=>`<i style="--i:${te}">✧</i>`).join("")}</div><header class="cg-heading"><span>${B.name}</span><div class="cg-share-tools"><button data-reward="cg-share" data-id="${B.id}">分享</button></div><button data-reward="cg-exit" aria-label="稍后重看">×</button></header><div class="cg-caption"><small>松团子 · ${B.costume}</small><p id="cg-line"></p><div id="cg-responses" aria-label="选择你的反馈"></div><form id="cg-chat-form" hidden><label class="cg-input-label" for="cg-chat-input">和松团子聊聊</label><textarea id="cg-chat-input" rows="1" maxlength="1000" autocomplete="off" placeholder="想对她说些什么…"></textarea><button type="submit">发送</button><button type="button" id="cg-custom-cancel">收起</button></form><p id="cg-chat-status" role="status"></p></div>`,l.querySelector("#cg-line").textContent=B.lines[0],_=Ed({dialog:l,getState:e,save:t,cg:B}))}function O(D){const N=h().activePet;if(c.hidden=!D||!N,!N)return;const B=Fi.find(k=>k.id===N);B&&(c.dataset.id!==N&&(c.dataset.id=N,c.innerHTML=`<img src="${Zn("cat-"+N)}" alt="">`),c.setAttribute("aria-label",`和${h().petNames[N]||B.name}互动`))}return c.onclick=()=>P(h().activePet),l.addEventListener("change",D=>{D.target.id==="wheel-pool"&&(u=D.target.value,I())}),l.addEventListener("click",D=>{const N=D.target.closest("[data-reward]");if(!N||N.disabled||p)return;const B=N.dataset.reward,k=N.dataset.id;if(B==="cg-share"&&Lc(li.find(te=>te.id===k),e()).catch(te=>{l.querySelector("#cg-chat-status").textContent=te.message}),(B==="close"||B==="cg-exit")&&y(),B==="tab"&&{album:w,pets:L}[k](),B==="wheel"&&I(),B==="spin"&&M(),B==="cg"&&U(k),B==="pet"&&P(k),B==="pet-pool"&&(u=Oi.find(te=>te.cats.includes(k)).id,I()),B==="pet-rest"&&(h().activePet=null,t(),i(),P(k)),B==="pet-equip"&&h().pets.includes(k)&&(h().activePet=k,t(),y()),B==="pet-name"&&h().pets.includes(k)&&(h().petNames[k]=l.querySelector("#pet-name").value.trim().slice(0,12),t(),l.querySelector("#pet-reply").textContent="记住这个名字啦。"),B==="pet-touch"&&h().pets.includes(k)){h().petInteractions[k]=(h().petInteractions[k]??0)+1,t(),l.querySelector("#pet-reply").textContent=Fi.find(pe=>pe.id===k).reply;const te=l.querySelector(".pet-large");te.classList.remove("pet-nuzzle"),te.offsetWidth,te.classList.add("pet-nuzzle")}B==="wear"&&(y(),a()),B==="recipes"&&(y(),o())}),{album:w,wheel:I,pets:L,playCG:U,updatePet:O,get opened(){return l.open}}}function Zt(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function Vn(n){return[...n.memories??[],...n.records.map((e,t)=>({id:e.id??`old-${t}`,title:e.name,summary:e.name,day:e.day,slot:e.slot,createdAt:e.createdAt,kind:"life",activity:wd(e.name)}))].sort((e,t)=>(t.createdAt??"").localeCompare(e.createdAt??""))}function wd(n){return/烘焙/.test(n)?"baking":/课程/.test(n)?"course":/采集/.test(n)?"gather":/小铺/.test(n)?"shop":/薄荷|约定|甜点/.test(n)?"story":"home"}function zc(n,e=Zt()){return!(n.memoryStamps??[]).includes(e)&&Vn(n).some(t=>t.createdAt&&Zt(new Date(t.createdAt))===e&&(t.kind==="life"||t.event))}function Ad(n,e=Zt()){return zc(n,e)?(n.memoryStamps??(n.memoryStamps=[]),n.memoryStamps.push(e),n.coins+=_d,!0):!1}function Rd(n,e){return(n.memories??[]).filter(t=>{var i,r;return((r=(i=t.event)==null?void 0:i.clue)==null?void 0:r.activity)===e&&!t.clueResolved})}const Cd={id:"main-prologue",kind:"prologue",title:"序章 · 橡果小屋的来信",summary:"秋天精灵松团子住进橡果小屋，开始学习人类的生活，并期待七日后的秋收祭。",chapters:[{title:"秋天，推开了小屋的门",cgId:null,paragraphs:["榛果林的秋天，总比镇上来得早一些。风拂过树梢，松团子竖起橙棕色的松鼠耳朵，听见橡果落在苔藓上的轻响。金色的双麻花辫垂在肩头，蓬松的尾巴替她拢住了清晨的凉意。","森林的季节，她再熟悉不过。可人类为什么要把果实烤成甜点，为什么把喜欢的东西分给别人，又为什么会在一盏灯下等另一个人回来？这些问题，书里似乎没有一句就能说清的答案。","于是，她来到林边的橡果小屋。窗边有一把阅读椅，厨房里有一只安静的烤箱，门外的小路通向魔女学院，也通向小镇和烘焙小铺。她的学院朋友薄荷，也在为即将到来的秋收祭做准备。","再过七天，镇上的人们就会聚在一起庆祝丰收。松团子还不知道自己会带去什么，也没有急着给未来写下答案。她想先读懂一页书，学会一道配方，再认真认识一个人。","你推开门时，她正把一枚秋叶夹进书里。粉色星形的眼睛从书页上抬起来，先是好奇，随后露出一点笑意。她把身旁的位置让出来，像是为一段还没开始的故事留下一页空白。",`「今天，想把时间花在什么美好的事上？」
窗外的风吹动了花帘。你们的日子，就从这里开始。`]}]},Et=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Pd=n=>`/acorn-witch-atelier/assets/2d/${n}.webp`;function Ld({dialog:n,getState:e,save:t,api:i,getStatus:r,isOpen:s}){let a=null,o=0,l=0,c=[],u=!1,d=[],p=!1,m="",g="",_=null;const h=()=>u?d:[Cd,...e().characterStories??[]],f=()=>h().find(P=>P.id===a)??h().at(-1),E=()=>li.filter(P=>{var U;return(((U=e().collection)==null?void 0:U.cgs)??[]).includes(P.id)}),y=(P,U,O="")=>`<button data-story="${U}" ${O}>${P}</button>`;function v(P){n.className="story-book",n.innerHTML=`${Ia("stories")}${P}`}function C(){if(!s())return;const P=f(),U=r();if(g){M();return}v(`<div class="story-tools">${h().length?`<select id="story-volume" aria-label="选择故事">${h().map(O=>`<option value="${Et(O.id)}" ${O.id===(P==null?void 0:P.id)?"selected":""}>${Et(O.title)}</option>`).join("")}</select>`:`<span>${u?"作者稿箱":"属于你的篇章"}</span>`}${P?y("分享","share"):""}${y(u?"我的故事":"编成新篇",u?"mine":"compose",p?"disabled":"")}${U.creator?y(u?"刷新稿箱":"作者稿箱","inbox",p?"disabled":""):""}</div>${p?'<p class="novel-message" role="status">正在把经历编成故事，请稍等…</p>':""}${m?`<p class="novel-message novel-error" role="alert">${Et(m)}</p>`:""}${P?A(P):w()}`),P&&(I(),S())}function w(){return`<div class="novel-empty"><span class="novel-kicker">序 · 还未落笔</span><h1>${u?"等待一封来稿":"把日子，写成故事"}</h1><img src="${Pd("forest-bg")}" alt="榛果林中的小路"><p>${u?"玩家交来的故事会留在这里。你可以阅读、改写，再收录为主线。":"松团子在小屋、学院和森林里的经历，<br>会成为这本书的章节。"}</p>${u?"":y("用已有经历写第一篇","compose",p?"disabled":"")}</div>`}function A(P){o=Math.min(o,P.chapters.length-1);const U=P.kind==="prologue",O=P.chapters[o],D=E().find(N=>N.id===O.cgId);return`<nav class="chapter-tabs" aria-label="故事章节">${P.chapters.map((N,B)=>y(["I","II","III","IV","V","VI"][B],"chapter",`data-index="${B}" aria-label="第 ${B+1} 章：${Et(N.title)}" aria-current="${B===o?"page":"false"}"`)).join("")}</nav><article class="novel-page"><header><small>${U?"主线序章":"第 "+(o+1)+" 章"}</small><h1>${Et(O.title)}</h1></header>${D?`<figure class="novel-illustration" style="--cg-focus:${kc[D.id]}"><button data-story="art" aria-label="查看完整插图"><img class="novel-art" src="/acorn-witch-atelier/assets/rewards/cg-${D.id}.webp" alt="${Et(D.name)}"></button><figcaption>${Et(D.name)} · 查看完整插图</figcaption></figure>`:""}<div class="story-prose" aria-label="小说正文" aria-live="polite"></div></article><footer class="novel-footer"><div class="novel-paging">${y("‹ 上一页","prev")}<span id="story-page-label"></span>${y("下一页 ›","next")}</div>${!U&&!u&&E().length?`<label class="story-art-picker">章节插图<select id="story-illustration" aria-label="章节插图" ${P.submissionId?"disabled":""}><option value="">纯文字</option>${E().map(N=>`<option value="${N.id}" ${(D==null?void 0:D.id)===N.id?"selected":""}>${Et(N.name)}</option>`).join("")}</select></label>`:""}<div class="novel-actions"><span>${U?"主线 · 故事的起点":u?Et(P.author)+" · "+(P.canonId?"已收录主线":"待作者整理"):"AI 编写 · "+(P.submissionId?"已交稿":"个人故事")}</span>${U?"":u?y(P.canonId?"已收录":"整理为主线","review",P.canonId?"disabled":""):y(P.submissionId?"已交给作者":"交给作者","submit",P.submissionId?"disabled":"")}</div></footer>`}function I(){const P=n.querySelector(".story-prose");if(!P)return;const U=f().chapters[o].paragraphs;c=[];let O=[];const D=N=>(P.innerHTML=N.map(B=>`<p>${Et(B)}</p>`).join(""),P.scrollHeight<=P.clientHeight);for(const N of U){let B=Array.from(N);for(;B.length;){if(D([...O,B.join("")])){O.push(B.join(""));break}let k=0,te=B.length;for(;k<te;){const _e=Math.ceil((k+te)/2);D([...O,B.slice(0,_e).join("")])?k=_e:te=_e-1}if(k===0&&O.length){c.push(O),O=[];continue}const pe=Math.max(1,k);O.push(B.splice(0,pe).join("")),c.push(O),O=[]}}O.length&&c.push(O),l=Math.min(l,Math.max(0,c.length-1))}function S(){const P=n.querySelector(".story-prose");P&&(P.innerHTML=(c[l]??[]).map(U=>`<p>${Et(U)}</p>`).join(""),n.querySelector("#story-page-label").textContent=`第 ${l+1} 页 / 共 ${c.length} 页`,n.querySelector("[data-story=prev]").disabled=l===0&&o===0,n.querySelector("[data-story=next]").disabled=l===c.length-1&&o===f().chapters.length-1)}function M(){const P=f(),U=g==="compose",O=g==="review";if(g==="art"){const D=E().find(N=>N.id===P.chapters[o].cgId);v(`<figure class="story-full-art"><img src="/acorn-witch-atelier/assets/rewards/cg-${D.id}.webp" alt="${Et(D.name)}"><figcaption>${Et(D.name)}</figcaption></figure><div class="full-art-back">${y("返回阅读","cancel")}${y("分享插图","share-art")}</div>`);return}v(`<form class="story-editor" id="story-editor"><small>${U?"让经历成为篇章":O?"作者工作台":"故事来稿"}</small><h1>${U?"编成自己的故事":O?"发展为主线剧情":"交给故事的作者"}</h1><p>${U?"融合最近 40 段经历与已确认主线。生成后另存为新篇，原有故事保留。":O?"以这篇故事为素材，确认你要采用的主线版本。收录后，AI 会读取这段主线。":"发送当前故事的固定版本到本机作者稿箱，由作者阅读、改写与收录。"}</p>${U?'<label>想突出什么？<textarea name="preference" maxlength="300" rows="3" placeholder="例如：松团子第一次学会分享的心情（选填）"></textarea></label>':O?`<label>主线标题<input name="title" maxlength="60" value="${Et(P.title)}" required></label><label>确认后的主线剧情<textarea name="summary" maxlength="2000" required>${Et(P.summary)}</textarea></label><label>共创作者<input name="author" maxlength="60" value="${Et(P.author)}"></label>`:`<h2>${Et(P.title)}</h2><label>你的署名<input name="author" maxlength="60" placeholder="共创玩家"></label><p>当前仅支持本机收稿，尚未开放跨玩家投稿。</p>`}<p class="editor-error" role="alert">${Et(m)}</p><div class="story-editor-actions">${y("返回阅读","cancel",p?"disabled":"")}<button type="submit" ${p||U&&(!r().chat||!Vn(e()).length)?"disabled":""}>${p?"正在处理…":U?"开始编写":O?"确认收录主线":"确认交稿"}</button></div>${U?`<p class="story-connection-note" ${r().chat?"hidden":""}>豆包尚未连接，已有故事仍可阅读。</p>`:""}${U&&!Vn(e()).length?"<p>先完成一次活动或留下一段对话。</p>":""}</form>`)}async function L(P){var N;if(P.target.id!=="story-editor"||(P.preventDefault(),p))return;const U=Object.fromEntries(new FormData(P.target)),O=g,D=f();p=!0,m="",_=new AbortController,P.target.querySelectorAll("button").forEach(B=>B.disabled=!0),P.target.querySelector("button[type=submit]").textContent=O==="compose"?"正在编写…":"正在处理…";try{if(O==="compose"){const B=e(),k=Vn(B).slice(0,40).reverse().map(({id:_e,title:Ne,summary:Ge,day:Xe,slot:Oe,kind:Q,event:ee})=>({id:_e,title:Ne,summary:Ge,day:Xe,slot:Oe,kind:Q,event:ee})),te=await i("/stories/generate",{memories:k,preference:U.preference,cgIds:((N=B.collection)==null?void 0:N.cgs)??[],progress:{day:B.day,slot:B.slot,story:B.story,ending:B.ending}},_.signal);if(!s())return;const pe={...te.story,id:crypto.randomUUID(),createdAt:new Date().toISOString(),sourceIds:k.map(_e=>_e.id)};B.characterStories??(B.characterStories=[]),B.characterStories.push(pe),t(),a=pe.id,o=0,l=0,u=!1}else if(O==="submit"){const B=await i("/stories/submit",{storyId:D.id,story:{title:D.title,summary:D.summary,chapters:D.chapters},author:U.author},_.signal);D.submissionId=B.entry.id,t()}else{const B=await i("/canon",{...U,submissionId:D.id},_.signal);D.canonId=B.entry.id,r().canon.push(B.entry)}g="",p=!1,C()}catch(B){if(B.name==="AbortError")return;if(p=!1,m=B.message,s()){const k=n.querySelector(".editor-error");k&&(k.textContent=m,n.querySelectorAll(".story-editor button").forEach(te=>te.disabled=!1),n.querySelector("button[type=submit]").textContent="重试")}}}return n.addEventListener("submit",L),n.addEventListener("change",P=>{if(P.target.id==="story-illustration"&&!u&&f().kind!=="prologue"&&!f().submissionId){const U=P.target.value;f().chapters[o].cgId=E().some(O=>O.id===U)?U:null,t(),l=0,C()}P.target.id==="story-volume"&&(a=P.target.value,o=0,l=0,C())}),n.addEventListener("click",async P=>{var D;const U=P.target.closest("[data-story]");if(!U||U.disabled||p)return;const O=U.dataset.story;if(m="",O==="share"||O==="share-art"){U.disabled=!0;try{O==="share"?await dd(f(),((D=e().collection)==null?void 0:D.cgs)??[]):await Lc(E().find(N=>N.id===f().chapters[o].cgId),e())}catch(N){m=N.message,g="",C()}finally{U.disabled=!1}return}if((O==="compose"||O==="submit"||O==="review"||O==="art")&&(g=O,C()),O==="cancel"&&(g="",C()),O==="chapter"&&(o=Number(U.dataset.index),l=0,C()),O==="prev"&&(l>0?(l--,S()):o>0&&(o--,l=0,C(),l=c.length-1,S())),O==="next"&&(l<c.length-1?(l++,S()):o<f().chapters.length-1&&(o++,l=0,C())),O==="mine"&&(u=!1,a=null,o=0,l=0,C()),O==="inbox"){p=!0,_=new AbortController;try{const N=await i("/stories/submissions",void 0,_.signal);if(!s())return;d=N.entries,u=!0,a=null,o=0,l=0}catch(N){N.name!=="AbortError"&&(m=N.message)}finally{p=!1,C()}}}),new ResizeObserver(()=>{s()&&!g&&f()&&(I(),S())}).observe(n),{open(){g="",m="",C()},refresh(){if(!g&&!p)C();else if(g==="compose"&&!p){const P=n.querySelector("button[type=submit]");P&&(P.disabled=!r().chat||!Vn(e()).length);const U=n.querySelector(".story-connection-note");U&&(U.hidden=r().chat)}},leave(){_==null||_.abort(),p=!1,g=""}}}const xt=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Tl="/api/companion",Pr=n=>`/acorn-witch-atelier/assets/2d/${n}.webp`,Lr={home:"窗边闲聊",baking:"一起烘焙",course:"学院生活",gather:"榛果林探索",shop:"小铺营业",story:"朋友来信"},Dr={home:"home-bg",baking:"kitchen-bg",course:"school-bg",gather:"forest-bg",shop:"kitchen-bg",story:"home-bg"},Dd={history:'<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M3 5q7-2 12 2v23q-5-4-12-2zm26 0q-7-2-12 2v23q5-4 12-2z"/><path d="m6 11 6 1m-6 4 6 1m8-5 6-1m-6 6 6-1" fill="none" stroke="#fff2d7" stroke-width="1.5"/></svg>'},js=[{hint:"咦，这一页还夹着片叶子。",opening:"咦，这一页还夹着片叶子。叶脉像一张小地图……你觉得它通向哪里？"},{hint:"唔……这段我读了两遍。",opening:"书里说，烤甜点时的心情也会藏进味道里。那今天，你想尝到什么样的味道？"},{hint:"看到这里，忽然有点饿了。",opening:"刚读到一块还冒着热气的小蛋糕，我的肚子就响了……你现在最想吃什么？"},{hint:"要是我们也去走走呢……",opening:"书里的小路一直伸进森林深处。如果我们去散步，你想沿着溪水走，还是找一块树荫坐坐？"}],Id={baking:"闻起来已经有点香了。你想在今天的甜点里藏一点什么小惊喜？",course:"刚才那段我还在琢磨……你觉得魔法最有意思的地方是什么？",gather:"嘘，叶子底下好像有动静。我们先蹲下来看看？",shop:"你说，客人推开门时，最先注意到的是香味，还是柜台里的甜点？",story:"读到这里，我有点想知道你的看法。要是你来回这封信，会先写什么？"};function Ud({game:n,getState:e,getContext:t,save:i,refresh:r,pause:s,portrait:a,onActivity:o,onAlbum:l}){const c=document.createElement("dialog");c.id="memory-dialog",n.append(c);const u=document.createElement("button");u.id="character-talk",u.type="button",u.setAttribute("aria-label","和松团子聊天"),u.innerHTML='<span class=character-reaction><span class=character-reaction-text></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v12H10l-5 4v-4H4z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M8 8h8M8 12h5" stroke="currentColor" stroke-width="1.5"/></svg></span>',n.append(u);let d="",p={chat:!1,voice:!1,creator:!1,canon:[]},m=new Date(new Date().getFullYear(),new Date().getMonth(),1),g=Zt(),_="",h=null,f=!1,E=null,y=null,v=null,C="",w=!0,A="",I="",S=0,M=null,L=!1;const P=Ld({dialog:c,getState:e,save:i,api:N,getStatus:()=>p,isOpen:()=>c.open&&d==="stories"});let U=js[0],O=0,D=0;async function N(ge,T,Te){const me=await fetch(Tl+ge,{method:T?"POST":"GET",headers:T?{"Content-Type":"application/json"}:void 0,body:T?JSON.stringify(T):void 0,signal:Te}),xe=await me.json();if(!me.ok)throw new Error(xe.error||"连接没有完成，请稍后再试。");return xe}async function B(){try{p=await N("/status")}catch{p={chat:!1,voice:!1,creator:!1,canon:[]}}c.open&&d==="chat"?Oe():c.open&&d==="book"&&!M?Ee():c.open&&d==="stories"&&P.refresh()}const k=()=>({kitchen:"baking",school:"course",classroom:"course",garden:"gather",shop:"shop",story:"story"})[t().view]??"home";function te(){const ge=t(),T=ge.collectionOpen||c.open||!!n.querySelector("#loading");if(u.hidden=T||ge.view!=="home"||!!ge.panel,!u.hidden&&performance.now()>=D){const Te=Vn(e()).find(xe=>xe.title&&xe.summary),me=Te?[...js,{hint:"忽然想起「"+Te.title+"」了。",opening:"刚才翻着书，忽然想起「"+Te.title+"」。那段经历里，你最想再聊聊哪一刻？"}]:js;U=me[O++%me.length],u.querySelector(".character-reaction-text").textContent=U.hint,D=performance.now()+6500}}function pe(){if(d!=="chat"){Bc(c,n);return}const ge=n.getBoundingClientRect();c.style.setProperty("--book-left",`${ge.left}px`),c.style.setProperty("--book-top",`${ge.top}px`),c.style.setProperty("--book-width",`${ge.width}px`),c.style.setProperty("--book-height",`${ge.height}px`)}function _e(){pe(),c.open||(S=performance.now(),s(!0),pe(),c.showModal()),te()}function Ne(){y==null||y.abort(),v==null||v.pause(),v=null,C&&URL.revokeObjectURL(C),C="",c.classList.remove("speaking")}function Ge(){c.open&&(P.leave(),E==null||E.abort(),Ne(),f=!1,c.close(),d="",s(!1,performance.now()-S),te())}c.addEventListener("cancel",ge=>{ge.preventDefault(),Ge()}),window.addEventListener("resize",()=>{c.open&&pe()});function Xe(ge,T=!1){var ye;d="chat",L=!1,I="",A="";const Te=t(),me=e();h=ge?structuredClone(ge):{id:crypto.randomUUID(),title:Lr[k()],summary:"",activity:k(),day:me.day,slot:me.slot,kind:"branch",messages:[],createdAt:new Date().toISOString(),outfit:me.outfit},ge&&(ge.kind==="canon"||Zt(new Date(ge.createdAt))!==Zt())&&(h.id=crypto.randomUUID(),h.kind="branch",h.createdAt=new Date().toISOString(),h.parentId=ge.id,delete h.canonId),h.activity=k(),ge||(h.messages=[{role:"assistant",content:h.activity==="home"?U.opening:Id[h.activity]}]),h.currentContext={...Te,activity:k(),followingClue:T?(ye=ge==null?void 0:ge.event)==null?void 0:ye.clue:null},h.arriving=T,T&&(A=`我选择了${Lr[h.activity]}，我们来看看之前提到的：${ge.event.clue.text}`),_e(),Oe();const xe=h.id;B().then(()=>{T&&c.open&&d==="chat"&&h.id===xe&&ee()})}u.onclick=()=>Xe();function Oe(){c.className="companion-chat",c.style.setProperty("--chat-background",`url("${Pr(Dr[h.activity]??"home-bg")}")`);const ge=h.messages.filter(xe=>xe.role==="assistant").at(-1),T=L?h.messages:ge?[ge]:[];c.innerHTML=`<button class="book-close" data-co="close" aria-label="结束对话">×</button><div class="chat-heading"><span>${xt(Lr[h.activity])}</span></div><aside class="chat-tools"><button data-co="history" aria-pressed="${L}">${Dd.history}${L?"收起":"记录"}</button></aside><img class="companion-portrait" src="${a()}" alt="面向你的松团子"><section class="chat-paper ${L?"history-open":""}" aria-label="角色对话"><div class="chat-scroll" aria-live="polite">${T.length?T.map(xe=>`<div class="chat-line ${xe.role}"><small>${xe.role==="user"?"你":"松团子"}</small>${xe.narration?`<p class="narration">${xt(xe.narration)}</p>`:""}<p>${xt(xe.content)}</p></div>`).join(""):'<div class="chat-line assistant"><small>松团子</small><p class="chat-invitation">${escape(reaction.opening)}</p></div>'}${f?'<p class="chat-status">她正在想怎么回应…</p>':""}</div><div class="voice-controls" ${p.voice?"":"hidden"}><button data-co="voice">${w?"♫ 配音开":"♫ 配音关"}</button>${ge&&p.voice?'<button data-co="replay">重听</button>':""}</div>${p.chat?"":'<p class="connection-note">豆包暂未连接，你可以先写下想法。</p>'}${I?`<p class="chat-error" role="alert">${xt(I)}</p>`:""}<form id="chat-form"><label class="visually-hidden" for="chat-input">我想说的话或行动</label><textarea id="chat-input" maxlength="800" rows="1" placeholder="说说你的想法…">${xt(A)}</textarea><button type="submit" aria-label="发送" ${f||!p.chat?"disabled":""}>${f?"…":"发送"}</button></form><div class="chat-footer"><button data-co="close">结束对话</button></div></section>`;const Te=c.querySelector("#chat-input");Te.style.height="auto",Te.style.height=Te.scrollHeight+"px";const me=c.querySelector(".chat-scroll");me.scrollTop=me.scrollHeight}async function Q(ge){if(Ne(),!(!w||!p.voice)){y=new AbortController;try{const T=await fetch(Tl+"/voice",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:ge}),signal:y.signal});if(!T.ok)throw new Error("这次配音未能播放，可以稍后重听。");C=URL.createObjectURL(await T.blob()),v=new Audio(C),v.volume=.8,v.onended=()=>c.classList.remove("speaking"),await v.play(),c.classList.add("speaking")}catch(T){T.name!=="AbortError"&&c.open&&(I="配音未播放，文字已保留；可以点击重听。",Oe())}}}async function ee(){var Te,me,xe,ye,qe;if(f||!p.chat||!A.trim())return;const ge=A.trim(),T=h.id;f=!0,I="",Ne(),E=new AbortController,Oe();try{const fe=e(),Le=await N("/chat",{messages:[...h.messages.slice(-30).map(({role:R,content:x})=>({role:R,content:x})),{role:"user",content:ge}],context:{...h.currentContext,day:fe.day,slot:fe.slot,mood:fe.mood,energy:fe.energy,outfit:fe.outfit,inventory:fe.inventory,memories:(fe.memories??[]).slice(-12).map(({title:R,summary:x,event:$})=>({title:R,summary:x,event:$}))}},E.signal);if(!c.open||d!=="chat"||h.id!==T)return;h.messages.push({role:"user",content:ge},{role:"assistant",content:Le.dialogue,narration:Le.narration}),h.summary=((Te=Le.event)==null?void 0:Te.summary)||h.summary||Le.dialogue,h.title=((me=Le.event)==null?void 0:me.title)||h.title,h.arriving&&(h.clueResolved=!0),Le.event&&(((xe=Le.event.clue)==null?void 0:xe.text)!==((qe=(ye=h.event)==null?void 0:ye.clue)==null?void 0:qe.text)&&(h.clueResolved=!1),h.event=Le.event),h.updatedAt=new Date().toISOString();const Ze={...h};delete Ze.currentContext,delete Ze.arriving,fe.memories??(fe.memories=[]);const it=fe.memories.findIndex(R=>R.id===h.id);it<0?fe.memories.push(Ze):fe.memories[it]=Ze,Nc(fe,"chat:"+Zt()),i(),A="",f=!1,Oe(),c.dataset.emotion=Le.emotion,Q(Le.dialogue)}catch(fe){fe.name!=="AbortError"&&(I=fe.message,f=!1,c.open&&Oe())}}function ve(){E==null||E.abort(),Ne(),f=!1,d="stories",M=null,_e(),P.open(),B()}function Pe(){P.leave(),E==null||E.abort(),Ne(),f=!1,d="book",m=new Date(new Date().getFullYear(),new Date().getMonth(),1),g=Zt(),_="",M=null,_e(),Ee(),B()}function Ee(){var R,x,$;c.className="memory-book";const ge=e(),T=Vn(ge),Te=Zt(),me=m.getFullYear(),xe=m.getMonth(),ye=new Date(me,xe+1,0).getDate(),qe=(m.getDay()+6)%7,fe=T.filter(W=>!_||`${W.title} ${W.summary} ${JSON.stringify(W.event??{})}`.includes(_)),Le=Array.from({length:qe},()=>"<span></span>").concat(Array.from({length:ye},(W,oe)=>{var G;const J=Zt(new Date(me,xe,oe+1)),we=T.filter(se=>se.createdAt&&Zt(new Date(se.createdAt))===J),de=we[0];return`<button class="calendar-day ${J===Te?"today":""} ${J===g?"selected":""} ${de?"has-memory":""}" data-co="day" data-date="${J}" aria-label="${J}${we.length?`，${we.length}段经历`:""}" ${J===Te?'aria-current="date"':""}>${de?`<img src="${Pr(Dr[de.activity]??"home-bg")}" alt="">`:""}<span>${oe+1}</span>${we.length?`<small>${we.length}段</small>`:""}${(G=ge.memoryStamps)!=null&&G.includes(J)?"<i>✦</i>":""}</button>`})).join(""),Ze=_?fe:T.filter(W=>W.createdAt&&Zt(new Date(W.createdAt))===g),it=T.filter(W=>!W.createdAt);c.innerHTML=`${Ia("memories")}<div class="book-body"><div class="month-controls"><button data-co="prev" aria-label="上个月">‹</button><h3>${me} 年 ${xe+1} 月</h3><button data-co="next" aria-label="下个月">›</button></div><div class="calendar-week">${["一","二","三","四","五","六","日"].map(W=>`<span>${W}</span>`).join("")}</div><div class="calendar-grid">${Le}</div><p class="calendar-legend">◎ 今天　✦ 已盖经历章　按现实日期记录</p><div class="memory-reward"><div><b>已陪伴 ${((R=ge.memoryStamps)==null?void 0:R.length)??0} 天</b><small>${(x=ge.memoryStamps)!=null&&x.includes(Te)?"今天的经历章，已经收好。":"完成一次活动或留下一段剧情，即可盖章。"}</small></div><button class="button" data-co="claim" ${zc(ge)?"":"disabled"}>${($=ge.memoryStamps)!=null&&$.includes(Te)?"今日已盖章":"盖章 · 领取 5 ◈"}</button></div><label class="memory-search">⌕ <input id="memory-search" value="${xt(_)}" placeholder="找人物、地点、某段经历" aria-label="搜索回忆"></label><h3 class="day-heading">${_?"找到的回忆":g+" 的经历"}</h3><div class="memory-list">${Ze.map(W=>`<button class="memory-card" data-co="detail" data-id="${W.id}"><img src="${Pr(Dr[W.activity]??"home-bg")}" alt=""><span><small>${W.kind==="life"?"日常经历":W.kind==="canon"?"已收录主线":"共创支线"} · 游戏第 ${W.day} 天</small><b>${xt(W.title)}</b><em>${xt(W.summary.slice(0,70))}</em></span></button>`).join("")||'<p class="empty-memory">这一天的纸页还空着。去过好今天，再回来留下一幅回忆。</p>'}</div>${it.length?`<details><summary>以前的经历 · 未记录现实日期</summary>${it.map(W=>`<p>第 ${W.day} 天 · ${xt(W.title)}</p>`).join("")}</details>`:""}<details><summary>主人设定的主线 · 秋收祭前的七天</summary><p>通过课程、烘焙、森林采集与小铺营业成长，带着亲手制作的甜点参加第七天的秋收祭。</p>${p.canon.map(W=>`<article><b>${xt(W.title)}</b><p>${xt(W.summary)}</p><small>共创作者：${xt(W.author)}</small></article>`).join("")}</details><button class="book-text-button" data-co="album">剧情与 CG 相册</button><button class="book-text-button" data-co="stats">查看成长数值</button></div>`}function He(ge){var Te;const T=Vn(e()).find(me=>me.id===ge);T&&(M=ge,c.className="memory-book",c.innerHTML=`${Ia("memories")}<div class="book-body"><button class="book-text-button" data-co="book">‹ 回到月历</button><img class="memory-cover" src="${Pr(Dr[T.activity]??"home-bg")}" alt="故事发生的场景"><small>${T.kind==="life"?"日常经历":T.kind==="canon"?"已收录主线":"共创支线"} · 游戏第 ${T.day} 天</small><h2>${xt(T.title)}</h2><p>${xt(T.summary)}</p>${(Te=T.event)!=null&&Te.clue?`<div class="story-clue"><b>尚未展开的线索</b><p>${xt(T.event.clue.text)}</p><small>在「${xt(Lr[T.event.clue.activity])}」日程中继续</small></div>`:""}${T.messages?`<button class="button wide" data-co="continue" data-id="${T.id}">继续这段对话</button><details><summary>回看当时的对话</summary>${T.messages.map(me=>`<p><b>${me.role==="user"?"你":"松团子"}：</b>${xt(me.content)}</p>`).join("")}</details>`:""}${p.creator&&T.kind==="branch"?`<details><summary>本机创作者 · 整理为主线</summary><p>确认后保存到本机主线库。公开共享需接入线上主线服务。</p><label>标题<input id="canon-title" maxlength="60" value="${xt(T.title)}"></label><label>确认生效的剧情<textarea id="canon-summary" maxlength="2000" rows="5">${xt(T.summary)}</textarea></label><label>共创作者<input id="canon-author" maxlength="60" placeholder="填写署名"></label><button class="button" data-co="canon">确认收录这个版本</button></details>`:""}<p class="chat-error" id="detail-error" role="alert"></p></div>`)}return c.addEventListener("input",ge=>{if(ge.target.id==="chat-input"&&(A=ge.target.value,ge.target.style.height="auto",ge.target.style.height=ge.target.scrollHeight+"px"),ge.target.id==="memory-search"){_=ge.target.value;const T=ge.target.selectionStart;Ee();const Te=c.querySelector("#memory-search");Te.focus(),Te.setSelectionRange(T,T)}}),c.addEventListener("submit",ge=>{ge.target.id==="chat-form"&&(ge.preventDefault(),ee())}),c.addEventListener("click",async ge=>{const T=ge.target.closest("[data-co]");if(!T||T.disabled)return;const Te=T.dataset.co;if(Te==="album"&&(Ge(),l()),Te==="close"&&Ge(),Te==="history"&&(L=!L,Oe()),Te==="book"&&(P.leave(),M=null,d="book",Ee()),(Te==="prev"||Te==="next")&&(m=new Date(m.getFullYear(),m.getMonth()+(Te==="next"?1:-1),1),Ee()),Te==="day"&&(g=T.dataset.date,Ee()),Te==="detail"&&He(T.dataset.id),Te==="claim"&&Ad(e())&&(i(),r(),Ee()),Te==="voice"&&(w=!w,w||Ne(),Oe()),Te==="replay"&&Q(h.messages.filter(me=>me.role==="assistant").at(-1).content),Te==="continue"&&Xe(e().memories.find(me=>me.id===T.dataset.id)),Te==="stats"&&(Ge(),o("stats")),Te==="canon"){T.disabled=!0;try{const me=await N("/canon",{title:c.querySelector("#canon-title").value,summary:c.querySelector("#canon-summary").value,author:c.querySelector("#canon-author").value}),xe=e().memories.find(ye=>ye.id===M);xe.kind="canon",xe.canonId=me.entry.id,i(),p.canon.push(me.entry),He(M)}catch(me){c.querySelector("#detail-error").textContent=me.message,T.disabled=!1}}}),B(),{openBook:Pe,openStories:ve,openChat:Xe,updateEntry:te,get opened(){return c.open},clues:ge=>Rd(e(),ge),close:Ge}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Do="180",Nd=0,wl=1,Fd=2,Hc=1,Od=2,wn=3,qn=0,Bt=1,An=2,Wn=0,Hi=1,Al=2,Rl=3,Cl=4,Bd=5,ai=100,kd=101,zd=102,Hd=103,Vd=104,Gd=200,$d=201,Wd=202,Xd=203,Ua=204,Na=205,qd=206,Yd=207,jd=208,Kd=209,Zd=210,Jd=211,Qd=212,ef=213,tf=214,Fa=0,Oa=1,Ba=2,Xi=3,ka=4,za=5,Ha=6,Va=7,Vc=0,nf=1,rf=2,Xn=0,sf=1,af=2,of=3,lf=4,cf=5,uf=6,df=7,Gc=300,qi=301,Yi=302,Ga=303,$a=304,gs=306,Wa=1e3,ci=1001,Xa=1002,on=1003,ff=1004,Ir=1005,Jt=1006,Ks=1007,ui=1008,Pn=1009,$c=1010,Wc=1011,hr=1012,Io=1013,hi=1014,Rn=1015,xr=1016,Uo=1017,No=1018,pr=1020,Xc=35902,qc=35899,Yc=1021,jc=1022,an=1023,mr=1026,gr=1027,Kc=1028,Fo=1029,Zc=1030,Oo=1031,Bo=1033,rs=33776,ss=33777,as=33778,os=33779,qa=35840,Ya=35841,ja=35842,Ka=35843,Za=36196,Ja=37492,Qa=37496,eo=37808,to=37809,no=37810,io=37811,ro=37812,so=37813,ao=37814,oo=37815,lo=37816,co=37817,uo=37818,fo=37819,ho=37820,po=37821,mo=36492,go=36494,_o=36495,vo=36283,xo=36284,So=36285,Mo=36286,hf=3200,pf=3201,mf=0,gf=1,Hn="",Mt="srgb",ji="srgb-linear",hs="linear",at="srgb",Mi=7680,Pl=519,_f=512,vf=513,xf=514,Jc=515,Sf=516,Mf=517,yf=518,bf=519,Ll=35044,Dl="300 es",gn=2e3,ps=2001;class Ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zs=Math.PI/180,yo=180/Math.PI;function Sr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function Ef(n,e){return(n%e+e)%e}function Js(n,e,t){return(1-t)*n+t*e}function ir(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const p=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==p||c!==m||u!==g){let h=1-o;const f=l*p+c*m+u*g+d*_,E=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const C=Math.sqrt(y),w=Math.atan2(C,f*E);h=Math.sin(h*w)/C,o=Math.sin(o*w)/C}const v=o*E;if(l=l*h+p*v,c=c*h+m*v,u=u*h+g*v,d=d*h+_*v,h===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],p=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*d+l*m-c*p,e[t+1]=l*g+u*p+c*d-o*m,e[t+2]=c*g+u*m+o*p-l*d,e[t+3]=u*g-o*d-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),p=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=p*u*d+c*m*g,this._y=c*m*d-p*u*g,this._z=c*u*g+p*m*d,this._w=c*u*d-p*m*g;break;case"YXZ":this._x=p*u*d+c*m*g,this._y=c*m*d-p*u*g,this._z=c*u*g-p*m*d,this._w=c*u*d+p*m*g;break;case"ZXY":this._x=p*u*d-c*m*g,this._y=c*m*d+p*u*g,this._z=c*u*g+p*m*d,this._w=c*u*d-p*m*g;break;case"ZYX":this._x=p*u*d-c*m*g,this._y=c*m*d+p*u*g,this._z=c*u*g-p*m*d,this._w=c*u*d+p*m*g;break;case"YZX":this._x=p*u*d+c*m*g,this._y=c*m*d+p*u*g,this._z=c*u*g-p*m*d,this._w=c*u*d-p*m*g;break;case"XZY":this._x=p*u*d-c*m*g,this._y=c*m*d-p*u*g,this._z=c*u*g+p*m*d,this._w=c*u*d+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],p=i+o+d;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=a*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Il.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Il.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qs.copy(this).projectOnVector(e),this.sub(Qs)}reflect(e){return this.sub(Qs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qs=new X,Il=new Mr;class $e{constructor(e,t,i,r,s,a,o,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],p=i[2],m=i[5],g=i[8],_=r[0],h=r[3],f=r[6],E=r[1],y=r[4],v=r[7],C=r[2],w=r[5],A=r[8];return s[0]=a*_+o*E+l*C,s[3]=a*h+o*y+l*w,s[6]=a*f+o*v+l*A,s[1]=c*_+u*E+d*C,s[4]=c*h+u*y+d*w,s[7]=c*f+u*v+d*A,s[2]=p*_+m*E+g*C,s[5]=p*h+m*y+g*w,s[8]=p*f+m*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,p=o*l-u*s,m=c*s-a*l,g=t*d+i*p+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=p*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ea.makeScale(e,t)),this}rotate(e){return this.premultiply(ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ea=new $e;function Qc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _r(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Tf(){const n=_r("canvas");return n.style.display="block",n}const Ul={};function vr(n){n in Ul||(Ul[n]=!0,console.warn(n))}function wf(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Nl=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fl=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Af(){const n={enabled:!0,workingColorSpace:ji,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(r.r=Cn(r.r),r.g=Cn(r.g),r.b=Cn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=Vi(r.r),r.g=Vi(r.g),r.b=Vi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Hn?hs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return vr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return vr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ji]:{primaries:e,whitePoint:i,transfer:hs,toXYZ:Nl,fromXYZ:Fl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Nl,fromXYZ:Fl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),n}const Qe=Af();function Cn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let yi;class Rf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{yi===void 0&&(yi=_r("canvas")),yi.width=e.width,yi.height=e.height;const r=yi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=yi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_r("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Cn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Cn(t[i]/255)*255):t[i]=Cn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cf=0;class ko{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Sr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ta(r[a].image)):s.push(ta(r[a]))}else s=ta(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ta(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pf=0;const na=new X;class At extends Ji{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,i=ci,r=ci,s=Jt,a=ui,o=an,l=Pn,c=At.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Sr(),this.name="",this.source=new ko(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(na).x}get height(){return this.source.getSize(na).y}get depth(){return this.source.getSize(na).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wa:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case Xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wa:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case Xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=Gc;At.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],p=l[1],m=l[5],g=l[9],_=l[2],h=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-_)<.01&&Math.abs(g-h)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+_)<.1&&Math.abs(g+h)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(m+1)/2,C=(f+1)/2,w=(u+p)/4,A=(d+_)/4,I=(g+h)/4;return y>v&&y>C?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=w/i,s=A/i):v>C?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=w/r,s=I/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=I/s),this.set(i,r,s,t),this}let E=Math.sqrt((h-g)*(h-g)+(d-_)*(d-_)+(p-u)*(p-u));return Math.abs(E)<.001&&(E=1),this.x=(h-g)/E,this.y=(d-_)/E,this.z=(p-u)/E,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lf extends Ji{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new At(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ko(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends Lf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class eu extends At{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Df extends At{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yr{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,en):en.fromBufferAttribute(s,a),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ur.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ur.copy(i.boundingBox)),Ur.applyMatrix4(e.matrixWorld),this.union(Ur)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),Nr.subVectors(this.max,rr),bi.subVectors(e.a,rr),Ei.subVectors(e.b,rr),Ti.subVectors(e.c,rr),Nn.subVectors(Ei,bi),Fn.subVectors(Ti,Ei),Jn.subVectors(bi,Ti);let t=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Jn.z,Jn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Jn.z,0,-Jn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Jn.y,Jn.x,0];return!ia(t,bi,Ei,Ti,Nr)||(t=[1,0,0,0,1,0,0,0,1],!ia(t,bi,Ei,Ti,Nr))?!1:(Fr.crossVectors(Nn,Fn),t=[Fr.x,Fr.y,Fr.z],ia(t,bi,Ei,Ti,Nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sn=[new X,new X,new X,new X,new X,new X,new X,new X],en=new X,Ur=new yr,bi=new X,Ei=new X,Ti=new X,Nn=new X,Fn=new X,Jn=new X,rr=new X,Nr=new X,Fr=new X,Qn=new X;function ia(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Qn.fromArray(n,s);const o=r.x*Math.abs(Qn.x)+r.y*Math.abs(Qn.y)+r.z*Math.abs(Qn.z),l=e.dot(Qn),c=t.dot(Qn),u=i.dot(Qn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const If=new yr,sr=new X,ra=new X;class _s{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):If.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const t=sr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(sr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(ra)),this.expandByPoint(sr.copy(e.center).sub(ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Mn=new X,sa=new X,Or=new X,On=new X,aa=new X,Br=new X,oa=new X;class tu{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){sa.copy(e).add(t).multiplyScalar(.5),Or.copy(t).sub(e).normalize(),On.copy(this.origin).sub(sa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Or),o=On.dot(this.direction),l=-On.dot(Or),c=On.lengthSq(),u=Math.abs(1-a*a);let d,p,m,g;if(u>0)if(d=a*l-o,p=a*o-l,g=s*u,d>=0)if(p>=-g)if(p<=g){const _=1/u;d*=_,p*=_,m=d*(d+a*p+2*o)+p*(a*d+p+2*l)+c}else p=s,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*l)+c;else p=-s,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*l)+c;else p<=-g?(d=Math.max(0,-(-a*s+o)),p=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+p*(p+2*l)+c):p<=g?(d=0,p=Math.min(Math.max(-s,-l),s),m=p*(p+2*l)+c):(d=Math.max(0,-(a*s+o)),p=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+p*(p+2*l)+c);else p=a>0?-s:s,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(sa).addScaledVector(Or,p),m}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const i=Mn.dot(this.direction),r=Mn.dot(Mn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(s=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,i,r,s){aa.subVectors(t,e),Br.subVectors(i,e),oa.crossVectors(aa,Br);let a=this.direction.dot(oa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;On.subVectors(this.origin,e);const l=o*this.direction.dot(Br.crossVectors(On,Br));if(l<0)return null;const c=o*this.direction.dot(aa.cross(On));if(c<0||l+c>a)return null;const u=-o*On.dot(oa);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,i,r,s,a,o,l,c,u,d,p,m,g,_,h){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,d,p,m,g,_,h)}set(e,t,i,r,s,a,o,l,c,u,d,p,m,g,_,h){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=p,f[3]=m,f[7]=g,f[11]=_,f[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/wi.setFromMatrixColumn(e,0).length(),s=1/wi.setFromMatrixColumn(e,1).length(),a=1/wi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=a*u,m=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=p-_*c,t[9]=-o*l,t[2]=_-p*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const p=l*u,m=l*d,g=c*u,_=c*d;t[0]=p+_*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=_+p*o,t[10]=a*l}else if(e.order==="ZXY"){const p=l*u,m=l*d,g=c*u,_=c*d;t[0]=p-_*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=_-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const p=a*u,m=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=g*c-m,t[8]=p*c+_,t[1]=l*d,t[5]=_*c+p,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const p=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-p*d,t[8]=g*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*d+g,t[10]=p-_*d}else if(e.order==="XZY"){const p=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=p*d+_,t[5]=a*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*u,t[10]=_*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uf,e,Nf)}lookAt(e,t,i){const r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Bn.crossVectors(i,Vt),Bn.lengthSq()===0&&(Math.abs(i.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Bn.crossVectors(i,Vt)),Bn.normalize(),kr.crossVectors(Vt,Bn),r[0]=Bn.x,r[4]=kr.x,r[8]=Vt.x,r[1]=Bn.y,r[5]=kr.y,r[9]=Vt.y,r[2]=Bn.z,r[6]=kr.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],p=i[9],m=i[13],g=i[2],_=i[6],h=i[10],f=i[14],E=i[3],y=i[7],v=i[11],C=i[15],w=r[0],A=r[4],I=r[8],S=r[12],M=r[1],L=r[5],P=r[9],U=r[13],O=r[2],D=r[6],N=r[10],B=r[14],k=r[3],te=r[7],pe=r[11],_e=r[15];return s[0]=a*w+o*M+l*O+c*k,s[4]=a*A+o*L+l*D+c*te,s[8]=a*I+o*P+l*N+c*pe,s[12]=a*S+o*U+l*B+c*_e,s[1]=u*w+d*M+p*O+m*k,s[5]=u*A+d*L+p*D+m*te,s[9]=u*I+d*P+p*N+m*pe,s[13]=u*S+d*U+p*B+m*_e,s[2]=g*w+_*M+h*O+f*k,s[6]=g*A+_*L+h*D+f*te,s[10]=g*I+_*P+h*N+f*pe,s[14]=g*S+_*U+h*B+f*_e,s[3]=E*w+y*M+v*O+C*k,s[7]=E*A+y*L+v*D+C*te,s[11]=E*I+y*P+v*N+C*pe,s[15]=E*S+y*U+v*B+C*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],p=e[10],m=e[14],g=e[3],_=e[7],h=e[11],f=e[15];return g*(+s*l*d-r*c*d-s*o*p+i*c*p+r*o*m-i*l*m)+_*(+t*l*m-t*c*p+s*a*p-r*a*m+r*c*u-s*l*u)+h*(+t*c*d-t*o*m-s*a*d+i*a*m+s*o*u-i*c*u)+f*(-r*o*u-t*l*d+t*o*p+r*a*d-i*a*p+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],p=e[10],m=e[11],g=e[12],_=e[13],h=e[14],f=e[15],E=d*h*c-_*p*c+_*l*m-o*h*m-d*l*f+o*p*f,y=g*p*c-u*h*c-g*l*m+a*h*m+u*l*f-a*p*f,v=u*_*c-g*d*c+g*o*m-a*_*m-u*o*f+a*d*f,C=g*d*l-u*_*l-g*o*p+a*_*p+u*o*h-a*d*h,w=t*E+i*y+r*v+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=E*A,e[1]=(_*p*s-d*h*s-_*r*m+i*h*m+d*r*f-i*p*f)*A,e[2]=(o*h*s-_*l*s+_*r*c-i*h*c-o*r*f+i*l*f)*A,e[3]=(d*l*s-o*p*s-d*r*c+i*p*c+o*r*m-i*l*m)*A,e[4]=y*A,e[5]=(u*h*s-g*p*s+g*r*m-t*h*m-u*r*f+t*p*f)*A,e[6]=(g*l*s-a*h*s-g*r*c+t*h*c+a*r*f-t*l*f)*A,e[7]=(a*p*s-u*l*s+u*r*c-t*p*c-a*r*m+t*l*m)*A,e[8]=v*A,e[9]=(g*d*s-u*_*s-g*i*m+t*_*m+u*i*f-t*d*f)*A,e[10]=(a*_*s-g*o*s+g*i*c-t*_*c-a*i*f+t*o*f)*A,e[11]=(u*o*s-a*d*s-u*i*c+t*d*c+a*i*m-t*o*m)*A,e[12]=C*A,e[13]=(u*_*r-g*d*r+g*i*p-t*_*p-u*i*h+t*d*h)*A,e[14]=(g*o*r-a*_*r-g*i*l+t*_*l+a*i*h-t*o*h)*A,e[15]=(a*d*r-u*o*r+u*i*l-t*d*l-a*i*p+t*o*p)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,p=s*c,m=s*u,g=s*d,_=a*u,h=a*d,f=o*d,E=l*c,y=l*u,v=l*d,C=i.x,w=i.y,A=i.z;return r[0]=(1-(_+f))*C,r[1]=(m+v)*C,r[2]=(g-y)*C,r[3]=0,r[4]=(m-v)*w,r[5]=(1-(p+f))*w,r[6]=(h+E)*w,r[7]=0,r[8]=(g+y)*A,r[9]=(h-E)*A,r[10]=(1-(p+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=wi.set(r[0],r[1],r[2]).length();const a=wi.set(r[4],r[5],r[6]).length(),o=wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],tn.copy(this);const c=1/s,u=1/a,d=1/o;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=d,tn.elements[9]*=d,tn.elements[10]*=d,t.setFromRotationMatrix(tn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=gn,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),p=(t+e)/(t-e),m=(i+r)/(i-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===gn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ps)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=gn,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),p=-(t+e)/(t-e),m=-(i+r)/(i-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===gn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===ps)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const wi=new X,tn=new vt,Uf=new X(0,0,0),Nf=new X(1,1,1),Bn=new X,kr=new X,Vt=new X,Ol=new vt,Bl=new Mr;class Ln{constructor(e=0,t=0,i=0,r=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ol.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ol,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bl.setFromEuler(this),this.setFromQuaternion(Bl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class nu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ff=0;const kl=new X,Ai=new Mr,yn=new vt,zr=new X,ar=new X,Of=new X,Bf=new Mr,zl=new X(1,0,0),Hl=new X(0,1,0),Vl=new X(0,0,1),Gl={type:"added"},kf={type:"removed"},Ri={type:"childadded",child:null},la={type:"childremoved",child:null};class kt extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new X,t=new Ln,i=new Mr,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new $e}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(zl,e)}rotateY(e){return this.rotateOnAxis(Hl,e)}rotateZ(e){return this.rotateOnAxis(Vl,e)}translateOnAxis(e,t){return kl.copy(e).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zl,e)}translateY(e){return this.translateOnAxis(Hl,e)}translateZ(e){return this.translateOnAxis(Vl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zr.copy(e):zr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(ar,zr,this.up):yn.lookAt(zr,ar,this.up),this.quaternion.setFromRotationMatrix(yn),r&&(yn.extractRotation(r.matrixWorld),Ai.setFromRotationMatrix(yn),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gl),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kf),la.child=e,this.dispatchEvent(la),la.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gl),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,Of),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,Bf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),p=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new X(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new X,bn=new X,ca=new X,En=new X,Ci=new X,Pi=new X,$l=new X,ua=new X,da=new X,fa=new X,ha=new gt,pa=new gt,ma=new gt;class sn{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),nn.subVectors(e,t),r.cross(nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){nn.subVectors(r,t),bn.subVectors(i,t),ca.subVectors(e,t);const a=nn.dot(nn),o=nn.dot(bn),l=nn.dot(ca),c=bn.dot(bn),u=bn.dot(ca),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const p=1/d,m=(c*l-o*u)*p,g=(a*u-o*l)*p;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,En.x),l.addScaledVector(a,En.y),l.addScaledVector(o,En.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return ha.setScalar(0),pa.setScalar(0),ma.setScalar(0),ha.fromBufferAttribute(e,t),pa.fromBufferAttribute(e,i),ma.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ha,s.x),a.addScaledVector(pa,s.y),a.addScaledVector(ma,s.z),a}static isFrontFacing(e,t,i,r){return nn.subVectors(i,t),bn.subVectors(e,t),nn.cross(bn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),nn.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return sn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ci.subVectors(r,i),Pi.subVectors(s,i),ua.subVectors(e,i);const l=Ci.dot(ua),c=Pi.dot(ua);if(l<=0&&c<=0)return t.copy(i);da.subVectors(e,r);const u=Ci.dot(da),d=Pi.dot(da);if(u>=0&&d<=u)return t.copy(r);const p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ci,a);fa.subVectors(e,s);const m=Ci.dot(fa),g=Pi.dot(fa);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Pi,o);const h=u*g-m*d;if(h<=0&&d-u>=0&&m-g>=0)return $l.subVectors(s,r),o=(d-u)/(d-u+(m-g)),t.copy(r).addScaledVector($l,o);const f=1/(h+_+p);return a=_*f,o=p*f,t.copy(i).addScaledVector(Ci,a).addScaledVector(Pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function ga(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class rt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=Ef(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ga(a,s,e+1/3),this.g=ga(a,s,e),this.b=ga(a,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,t=Mt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const i=iu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cn(e.r),this.g=Cn(e.g),this.b=Cn(e.b),this}copyLinearToSRGB(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Qe.workingToColorSpace(Ct.copy(this),e),Math.round(je(Ct.r*255,0,255))*65536+Math.round(je(Ct.g*255,0,255))*256+Math.round(je(Ct.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Ct.copy(this),t);const i=Ct.r,r=Ct.g,s=Ct.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Mt){Qe.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,r=Ct.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(Hr);const i=Js(kn.h,Hr.h,t),r=Js(kn.s,Hr.s,t),s=Js(kn.l,Hr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new rt;rt.NAMES=iu;let zf=0;class br extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=Hi,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Na,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(i.blending=this.blending),this.side!==qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ua&&(i.blendSrc=this.blendSrc),this.blendDst!==Na&&(i.blendDst=this.blendDst),this.blendEquation!==ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kt extends br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new X,Vr=new nt;let Hf=0;class ln{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ll,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix3(e),this.setXY(t,Vr.x,Vr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ir(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ll&&(e.usage=this.usage),e}}class ru extends ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class su extends ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class fi extends ln{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Vf=0;const jt=new vt,_a=new kt,Li=new X,Gt=new yr,or=new yr,Tt=new X;class In extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qc(e)?su:ru)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,i){return jt.makeTranslation(e,t,i),this.applyMatrix4(jt),this}scale(e,t,i){return jt.makeScale(e,t,i),this.applyMatrix4(jt),this}lookAt(e){return _a.lookAt(e),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fi(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];or.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Gt.min,or.min),Gt.expandByPoint(Tt),Tt.addVectors(Gt.max,or.max),Gt.expandByPoint(Tt)):(Gt.expandByPoint(or.min),Gt.expandByPoint(or.max))}Gt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Tt.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(e,c),Tt.add(Li)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<i.count;I++)o[I]=new X,l[I]=new X;const c=new X,u=new X,d=new X,p=new nt,m=new nt,g=new nt,_=new X,h=new X;function f(I,S,M){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,M),p.fromBufferAttribute(s,I),m.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),u.sub(c),d.sub(c),m.sub(p),g.sub(p);const L=1/(m.x*g.y-g.x*m.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(L),h.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(L),o[I].add(_),o[S].add(_),o[M].add(_),l[I].add(h),l[S].add(h),l[M].add(h))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let I=0,S=E.length;I<S;++I){const M=E[I],L=M.start,P=M.count;for(let U=L,O=L+P;U<O;U+=3)f(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const y=new X,v=new X,C=new X,w=new X;function A(I){C.fromBufferAttribute(r,I),w.copy(C);const S=o[I];y.copy(S),y.sub(C.multiplyScalar(C.dot(S))).normalize(),v.crossVectors(w,S);const L=v.dot(l[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,L)}for(let I=0,S=E.length;I<S;++I){const M=E[I],L=M.start,P=M.count;for(let U=L,O=L+P;U<O;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new X,s=new X,a=new X,o=new X,l=new X,c=new X,u=new X,d=new X;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),_=e.getX(p+1),h=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,h),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,h),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(h,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,p=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,h=l.length;_<h;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let f=0;f<u;f++)p[g++]=c[m++]}return new ln(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new In,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const p=c[u],m=e(p,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let p=0,m=d.length;p<m;p++)u.push(d[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wl=new vt,ei=new tu,Gr=new _s,Xl=new X,$r=new X,Wr=new X,Xr=new X,va=new X,qr=new X,ql=new X,Yr=new X;class St extends kt{constructor(e=new In,t=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){qr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(va.fromBufferAttribute(d,e),a?qr.addScaledVector(va,u):qr.addScaledVector(va.sub(t),u))}t.add(qr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(s),ei.copy(e.ray).recast(e.near),!(Gr.containsPoint(ei.origin)===!1&&(ei.intersectSphere(Gr,Xl)===null||ei.origin.distanceToSquared(Xl)>(e.far-e.near)**2))&&(Wl.copy(s).invert(),ei.copy(e.ray).applyMatrix4(Wl),!(i.boundingBox!==null&&ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ei)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,p=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){const h=p[g],f=a[h.materialIndex],E=Math.max(h.start,m.start),y=Math.min(o.count,Math.min(h.start+h.count,m.start+m.count));for(let v=E,C=y;v<C;v+=3){const w=o.getX(v),A=o.getX(v+1),I=o.getX(v+2);r=jr(this,f,e,i,c,u,d,w,A,I),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let h=g,f=_;h<f;h+=3){const E=o.getX(h),y=o.getX(h+1),v=o.getX(h+2);r=jr(this,a,e,i,c,u,d,E,y,v),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){const h=p[g],f=a[h.materialIndex],E=Math.max(h.start,m.start),y=Math.min(l.count,Math.min(h.start+h.count,m.start+m.count));for(let v=E,C=y;v<C;v+=3){const w=v,A=v+1,I=v+2;r=jr(this,f,e,i,c,u,d,w,A,I),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let h=g,f=_;h<f;h+=3){const E=h,y=h+1,v=h+2;r=jr(this,a,e,i,c,u,d,E,y,v),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}}}function Gf(n,e,t,i,r,s,a,o){let l;if(e.side===Bt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===qn,o),l===null)return null;Yr.copy(o),Yr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Yr);return c<t.near||c>t.far?null:{distance:c,point:Yr.clone(),object:n}}function jr(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,$r),n.getVertexPosition(l,Wr),n.getVertexPosition(c,Xr);const u=Gf(n,e,t,i,$r,Wr,Xr,ql);if(u){const d=new X;sn.getBarycoord(ql,$r,Wr,Xr,d),r&&(u.uv=sn.getInterpolatedAttribute(r,o,l,c,d,new nt)),s&&(u.uv1=sn.getInterpolatedAttribute(s,o,l,c,d,new nt)),a&&(u.normal=sn.getInterpolatedAttribute(a,o,l,c,d,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new X,materialIndex:0};sn.getNormal($r,Wr,Xr,p.normal),u.face=p,u.barycoord=d}return u}class Er extends In{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let p=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new fi(c,3)),this.setAttribute("normal",new fi(u,3)),this.setAttribute("uv",new fi(d,2));function g(_,h,f,E,y,v,C,w,A,I,S){const M=v/A,L=C/I,P=v/2,U=C/2,O=w/2,D=A+1,N=I+1;let B=0,k=0;const te=new X;for(let pe=0;pe<N;pe++){const _e=pe*L-U;for(let Ne=0;Ne<D;Ne++){const Ge=Ne*M-P;te[_]=Ge*E,te[h]=_e*y,te[f]=O,c.push(te.x,te.y,te.z),te[_]=0,te[h]=0,te[f]=w>0?1:-1,u.push(te.x,te.y,te.z),d.push(Ne/A),d.push(1-pe/I),B+=1}}for(let pe=0;pe<I;pe++)for(let _e=0;_e<A;_e++){const Ne=p+_e+D*pe,Ge=p+_e+D*(pe+1),Xe=p+(_e+1)+D*(pe+1),Oe=p+(_e+1)+D*pe;l.push(Ne,Ge,Oe),l.push(Ge,Xe,Oe),k+=6}o.addGroup(m,k,S),m+=k,p+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ki(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function It(n){const e={};for(let t=0;t<n.length;t++){const i=Ki(n[t]);for(const r in i)e[r]=i[r]}return e}function $f(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function au(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Wf={clone:Ki,merge:It};var Xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xf,this.fragmentShader=qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ki(e.uniforms),this.uniformsGroups=$f(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ou extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new X,Yl=new nt,jl=new nt;class rn extends ou{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,Yl,jl),t.subVectors(jl,Yl)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Di=-90,Ii=1;class Yf extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new rn(Di,Ii,e,t);r.layers=this.layers,this.add(r);const s=new rn(Di,Ii,e,t);s.layers=this.layers,this.add(s);const a=new rn(Di,Ii,e,t);a.layers=this.layers,this.add(a);const o=new rn(Di,Ii,e,t);o.layers=this.layers,this.add(o);const l=new rn(Di,Ii,e,t);l.layers=this.layers,this.add(l);const c=new rn(Di,Ii,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ps)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,p,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class lu extends At{constructor(e=[],t=qi,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jf extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new lu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Er(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:Ki(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:Wn});s.uniforms.tEquirect.value=t;const a=new St(r,s),o=t.minFilter;return t.minFilter===ui&&(t.minFilter=Jt),new Yf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Kr extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kf={type:"move"};class xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const h=t.getJointPose(_,i),f=this._getHandJoint(c,_);h!==null&&(f.matrix.fromArray(h.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=h.radius),f.visible=h!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kf)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Kr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Zf extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Sa=new X,Jf=new X,Qf=new $e;class ri{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Sa.subVectors(i,t).cross(Jf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Sa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Qf.getNormalMatrix(e),r=this.coplanarPoint(Sa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new _s,eh=new nt(.5,.5),Zr=new X;class cu{constructor(e=new ri,t=new ri,i=new ri,r=new ri,s=new ri,a=new ri){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],p=s[6],m=s[7],g=s[8],_=s[9],h=s[10],f=s[11],E=s[12],y=s[13],v=s[14],C=s[15];if(r[0].setComponents(c-a,m-u,f-g,C-E).normalize(),r[1].setComponents(c+a,m+u,f+g,C+E).normalize(),r[2].setComponents(c+o,m+d,f+_,C+y).normalize(),r[3].setComponents(c-o,m-d,f-_,C-y).normalize(),i)r[4].setComponents(l,p,h,v).normalize(),r[5].setComponents(c-l,m-p,f-h,C-v).normalize();else if(r[4].setComponents(c-l,m-p,f-h,C-v).normalize(),t===gn)r[5].setComponents(c+l,m+p,f+h,C+v).normalize();else if(t===ps)r[5].setComponents(l,p,h,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(e){ti.center.set(0,0,0);const t=eh.distanceTo(e.center);return ti.radius=.7071067811865476+t,ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Zr.x=r.normal.x>0?e.max.x:e.min.x,Zr.y=r.normal.y>0?e.max.y:e.min.y,Zr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uu extends br{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kl=new vt,bo=new tu,Jr=new _s,Qr=new X;class th extends kt{constructor(e=new In,t=new uu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jr.copy(i.boundingSphere),Jr.applyMatrix4(r),Jr.radius+=s,e.ray.intersectsSphere(Jr)===!1)return;Kl.copy(r).invert(),bo.copy(e.ray).applyMatrix4(Kl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const p=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=p,_=m;g<_;g++){const h=c.getX(g);Qr.fromBufferAttribute(d,h),Zl(Qr,h,l,r,e,t,this)}}else{const p=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=p,_=m;g<_;g++)Qr.fromBufferAttribute(d,g),Zl(Qr,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Zl(n,e,t,i,r,s,a){const o=bo.distanceSqToPoint(n);if(o<t){const l=new X;bo.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ls extends At{constructor(e,t,i,r,s=Jt,a=Jt,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function d(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),super.dispose()}}class dr extends At{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class du extends At{constructor(e,t,i=hi,r,s,a,o=on,l=on,c,u=mr,d=1){if(u!==mr&&u!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:d};super(p,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ko(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class fu extends At{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ot extends In{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,p=t/l,m=[],g=[],_=[],h=[];for(let f=0;f<u;f++){const E=f*p-a;for(let y=0;y<c;y++){const v=y*d-s;g.push(v,-E,0),_.push(0,0,1),h.push(y/o),h.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){const y=E+c*f,v=E+c*(f+1),C=E+1+c*(f+1),w=E+1+c*f;m.push(y,v,w),m.push(v,C,w)}this.setIndex(m),this.setAttribute("position",new fi(g,3)),this.setAttribute("normal",new fi(_,3)),this.setAttribute("uv",new fi(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ot(e.width,e.height,e.widthSegments,e.heightSegments)}}class nh extends br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ih extends br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ma={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class rh{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=c.length;d<p;d+=2){const m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const sh=new rh;class zo{constructor(e){this.manager=e!==void 0?e:sh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}zo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ui=new WeakMap;class ah extends zo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ma.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=Ui.get(a);d===void 0&&(d=[],Ui.set(a,d)),d.push({onLoad:t,onError:r})}return a}const o=_r("img");function l(){u(),t&&t(this);const d=Ui.get(this)||[];for(let p=0;p<d.length;p++){const m=d[p];m.onLoad&&m.onLoad(this)}Ui.delete(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),Ma.remove(`image:${e}`);const p=Ui.get(this)||[];for(let m=0;m<p.length;m++){const g=p[m];g.onError&&g.onError(d)}Ui.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ma.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class oh extends zo{constructor(e){super(e)}load(e,t,i,r){const s=new At,a=new ah(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class hu extends ou{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class lh extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Jl(n,e,t,i){const r=ch(i);switch(t){case Yc:return n*e;case Kc:return n*e/r.components*r.byteLength;case Fo:return n*e/r.components*r.byteLength;case Zc:return n*e*2/r.components*r.byteLength;case Oo:return n*e*2/r.components*r.byteLength;case jc:return n*e*3/r.components*r.byteLength;case an:return n*e*4/r.components*r.byteLength;case Bo:return n*e*4/r.components*r.byteLength;case rs:case ss:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case as:case os:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ya:case Ka:return Math.max(n,16)*Math.max(e,8)/4;case qa:case ja:return Math.max(n,8)*Math.max(e,8)/2;case Za:case Ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case to:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case no:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case io:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ro:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case so:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ao:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case oo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case lo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case co:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case uo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case fo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ho:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case po:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case mo:case go:case _o:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vo:case xo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case So:case Mo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ch(n){switch(n){case Pn:case $c:return{byteLength:1,components:1};case hr:case Wc:case xr:return{byteLength:2,components:1};case Uo:case No:return{byteLength:2,components:4};case hi:case Io:case Rn:return{byteLength:4,components:1};case Xc:case qc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Do}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Do);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function uh(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<d.length;m++){const g=d[p],_=d[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,d[p]=_)}d.length=p+1;for(let m=0,g=d.length;m<g;m++){const _=d[m];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var dh=`#ifdef USE_ALPHAHASH
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
#endif`,Sh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yh=`vec3 objectNormal = vec3( normal );
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
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qh=`#ifdef USE_ENVMAP
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lp=`PhysicalMaterial material;
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
#endif`,cp=`struct PhysicalMaterial {
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
#endif`,Sp=`#if defined( USE_POINTS_UV )
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
#endif`,Mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yp=`#ifdef USE_METALNESSMAP
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
#endif`,Rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`uniform float scale;
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
}`,Rm=`#define MATCAP
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
}`,Cm=`#define MATCAP
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
}`,We={alphahash_fragment:dh,alphahash_pars_fragment:fh,alphamap_fragment:hh,alphamap_pars_fragment:ph,alphatest_fragment:mh,alphatest_pars_fragment:gh,aomap_fragment:_h,aomap_pars_fragment:vh,batching_pars_vertex:xh,batching_vertex:Sh,begin_vertex:Mh,beginnormal_vertex:yh,bsdfs:bh,iridescence_fragment:Eh,bumpmap_pars_fragment:Th,clipping_planes_fragment:wh,clipping_planes_pars_fragment:Ah,clipping_planes_pars_vertex:Rh,clipping_planes_vertex:Ch,color_fragment:Ph,color_pars_fragment:Lh,color_pars_vertex:Dh,color_vertex:Ih,common:Uh,cube_uv_reflection_fragment:Nh,defaultnormal_vertex:Fh,displacementmap_pars_vertex:Oh,displacementmap_vertex:Bh,emissivemap_fragment:kh,emissivemap_pars_fragment:zh,colorspace_fragment:Hh,colorspace_pars_fragment:Vh,envmap_fragment:Gh,envmap_common_pars_fragment:$h,envmap_pars_fragment:Wh,envmap_pars_vertex:Xh,envmap_physical_pars_fragment:ip,envmap_vertex:qh,fog_vertex:Yh,fog_pars_vertex:jh,fog_fragment:Kh,fog_pars_fragment:Zh,gradientmap_pars_fragment:Jh,lightmap_pars_fragment:Qh,lights_lambert_fragment:ep,lights_lambert_pars_fragment:tp,lights_pars_begin:np,lights_toon_fragment:rp,lights_toon_pars_fragment:sp,lights_phong_fragment:ap,lights_phong_pars_fragment:op,lights_physical_fragment:lp,lights_physical_pars_fragment:cp,lights_fragment_begin:up,lights_fragment_maps:dp,lights_fragment_end:fp,logdepthbuf_fragment:hp,logdepthbuf_pars_fragment:pp,logdepthbuf_pars_vertex:mp,logdepthbuf_vertex:gp,map_fragment:_p,map_pars_fragment:vp,map_particle_fragment:xp,map_particle_pars_fragment:Sp,metalnessmap_fragment:Mp,metalnessmap_pars_fragment:yp,morphinstance_vertex:bp,morphcolor_vertex:Ep,morphnormal_vertex:Tp,morphtarget_pars_vertex:wp,morphtarget_vertex:Ap,normal_fragment_begin:Rp,normal_fragment_maps:Cp,normal_pars_fragment:Pp,normal_pars_vertex:Lp,normal_vertex:Dp,normalmap_pars_fragment:Ip,clearcoat_normal_fragment_begin:Up,clearcoat_normal_fragment_maps:Np,clearcoat_pars_fragment:Fp,iridescence_pars_fragment:Op,opaque_fragment:Bp,packing:kp,premultiplied_alpha_fragment:zp,project_vertex:Hp,dithering_fragment:Vp,dithering_pars_fragment:Gp,roughnessmap_fragment:$p,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:Xp,shadowmap_pars_vertex:qp,shadowmap_vertex:Yp,shadowmask_pars_fragment:jp,skinbase_vertex:Kp,skinning_pars_vertex:Zp,skinning_vertex:Jp,skinnormal_vertex:Qp,specularmap_fragment:em,specularmap_pars_fragment:tm,tonemapping_fragment:nm,tonemapping_pars_fragment:im,transmission_fragment:rm,transmission_pars_fragment:sm,uv_pars_fragment:am,uv_pars_vertex:om,uv_vertex:lm,worldpos_vertex:cm,background_vert:um,background_frag:dm,backgroundCube_vert:fm,backgroundCube_frag:hm,cube_vert:pm,cube_frag:mm,depth_vert:gm,depth_frag:_m,distanceRGBA_vert:vm,distanceRGBA_frag:xm,equirect_vert:Sm,equirect_frag:Mm,linedashed_vert:ym,linedashed_frag:bm,meshbasic_vert:Em,meshbasic_frag:Tm,meshlambert_vert:wm,meshlambert_frag:Am,meshmatcap_vert:Rm,meshmatcap_frag:Cm,meshnormal_vert:Pm,meshnormal_frag:Lm,meshphong_vert:Dm,meshphong_frag:Im,meshphysical_vert:Um,meshphysical_frag:Nm,meshtoon_vert:Fm,meshtoon_frag:Om,points_vert:Bm,points_frag:km,shadow_vert:zm,shadow_frag:Hm,sprite_vert:Vm,sprite_frag:Gm},Me={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},pn={basic:{uniforms:It([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:It([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new rt(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:It([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:It([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:It([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new rt(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:It([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:It([Me.points,Me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:It([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:It([Me.common,Me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:It([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:It([Me.sprite,Me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:It([Me.common,Me.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:It([Me.lights,Me.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};pn.physical={uniforms:It([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const es={r:0,b:0,g:0},ni=new Ln,$m=new vt;function Wm(n,e,t,i,r,s,a){const o=new rt(0);let l=s===!0?0:1,c,u,d=null,p=0,m=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const C=g(y);C===null?f(o,l):C&&C.isColor&&(f(C,1),v=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function h(y,v){const C=g(v);C&&(C.isCubeTexture||C.mapping===gs)?(u===void 0&&(u=new St(new Er(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Ki(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ni.copy(v.backgroundRotation),ni.x*=-1,ni.y*=-1,ni.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($m.makeRotationFromEuler(ni)),u.material.toneMapped=Qe.getTransfer(C.colorSpace)!==at,(d!==C||p!==C.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=C,p=C.version,m=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new St(new Ot(2,2),new Yn({name:"BackgroundMaterial",uniforms:Ki(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(C.colorSpace)!==at,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||p!==C.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=C,p=C.version,m=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,v){y.getRGB(es,au(n)),i.buffers.color.setClear(es.r,es.g,es.b,v,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:_,addToRenderList:h,dispose:E}}function Xm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,a=!1;function o(M,L,P,U,O){let D=!1;const N=d(U,P,L);s!==N&&(s=N,c(s.object)),D=m(M,U,P,O),D&&g(M,U,P,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,v(M,L,P,U),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function d(M,L,P){const U=P.wireframe===!0;let O=i[M.id];O===void 0&&(O={},i[M.id]=O);let D=O[L.id];D===void 0&&(D={},O[L.id]=D);let N=D[U];return N===void 0&&(N=p(l()),D[U]=N),N}function p(M){const L=[],P=[],U=[];for(let O=0;O<t;O++)L[O]=0,P[O]=0,U[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:P,attributeDivisors:U,object:M,attributes:{},index:null}}function m(M,L,P,U){const O=s.attributes,D=L.attributes;let N=0;const B=P.getAttributes();for(const k in B)if(B[k].location>=0){const pe=O[k];let _e=D[k];if(_e===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor)),pe===void 0||pe.attribute!==_e||_e&&pe.data!==_e.data)return!0;N++}return s.attributesNum!==N||s.index!==U}function g(M,L,P,U){const O={},D=L.attributes;let N=0;const B=P.getAttributes();for(const k in B)if(B[k].location>=0){let pe=D[k];pe===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor));const _e={};_e.attribute=pe,pe&&pe.data&&(_e.data=pe.data),O[k]=_e,N++}s.attributes=O,s.attributesNum=N,s.index=U}function _(){const M=s.newAttributes;for(let L=0,P=M.length;L<P;L++)M[L]=0}function h(M){f(M,0)}function f(M,L){const P=s.newAttributes,U=s.enabledAttributes,O=s.attributeDivisors;P[M]=1,U[M]===0&&(n.enableVertexAttribArray(M),U[M]=1),O[M]!==L&&(n.vertexAttribDivisor(M,L),O[M]=L)}function E(){const M=s.newAttributes,L=s.enabledAttributes;for(let P=0,U=L.length;P<U;P++)L[P]!==M[P]&&(n.disableVertexAttribArray(P),L[P]=0)}function y(M,L,P,U,O,D,N){N===!0?n.vertexAttribIPointer(M,L,P,O,D):n.vertexAttribPointer(M,L,P,U,O,D)}function v(M,L,P,U){_();const O=U.attributes,D=P.getAttributes(),N=L.defaultAttributeValues;for(const B in D){const k=D[B];if(k.location>=0){let te=O[B];if(te===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),te!==void 0){const pe=te.normalized,_e=te.itemSize,Ne=e.get(te);if(Ne===void 0)continue;const Ge=Ne.buffer,Xe=Ne.type,Oe=Ne.bytesPerElement,Q=Xe===n.INT||Xe===n.UNSIGNED_INT||te.gpuType===Io;if(te.isInterleavedBufferAttribute){const ee=te.data,ve=ee.stride,Pe=te.offset;if(ee.isInstancedInterleavedBuffer){for(let Ee=0;Ee<k.locationSize;Ee++)f(k.location+Ee,ee.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ee=0;Ee<k.locationSize;Ee++)h(k.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let Ee=0;Ee<k.locationSize;Ee++)y(k.location+Ee,_e/k.locationSize,Xe,pe,ve*Oe,(Pe+_e/k.locationSize*Ee)*Oe,Q)}else{if(te.isInstancedBufferAttribute){for(let ee=0;ee<k.locationSize;ee++)f(k.location+ee,te.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ee=0;ee<k.locationSize;ee++)h(k.location+ee);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let ee=0;ee<k.locationSize;ee++)y(k.location+ee,_e/k.locationSize,Xe,pe,_e*Oe,_e/k.locationSize*ee*Oe,Q)}}else if(N!==void 0){const pe=N[B];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(k.location,pe);break;case 3:n.vertexAttrib3fv(k.location,pe);break;case 4:n.vertexAttrib4fv(k.location,pe);break;default:n.vertexAttrib1fv(k.location,pe)}}}}E()}function C(){I();for(const M in i){const L=i[M];for(const P in L){const U=L[P];for(const O in U)u(U[O].object),delete U[O];delete L[P]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const P in L){const U=L[P];for(const O in U)u(U[O].object),delete U[O];delete L[P]}delete i[M.id]}function A(M){for(const L in i){const P=i[L];if(P[M.id]===void 0)continue;const U=P[M.id];for(const O in U)u(U[O].object),delete U[O];delete P[M.id]}}function I(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:h,disableUnusedAttributes:E}}function qm(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];t.update(m,i,1)}function l(c,u,d,p){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,p,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*p[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ym(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==an&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const I=A===xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Pn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Rn&&!I)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),h=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:h,maxAttributes:f,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:C,maxSamples:w}}function jm(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ri,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const m=d.length!==0||p||i!==0||r;return r=p,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,m){const g=d.clippingPlanes,_=d.clipIntersection,h=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||s&&!h)s?u(null):c();else{const E=s?0:i,y=E*4;let v=f.clippingState||null;l.value=v,v=u(g,p,y,m);for(let C=0;C!==y;++C)v[C]=t[C];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,p,m,g){const _=d!==null?d.length:0;let h=null;if(_!==0){if(h=l.value,g!==!0||h===null){const f=m+_*4,E=p.matrixWorldInverse;o.getNormalMatrix(E),(h===null||h.length<f)&&(h=new Float32Array(f));for(let y=0,v=m;y!==_;++y,v+=4)a.copy(d[y]).applyMatrix4(E,o),a.normal.toArray(h,v),h[v+3]=a.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,h}}function Km(n){let e=new WeakMap;function t(a,o){return o===Ga?a.mapping=qi:o===$a&&(a.mapping=Yi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ga||o===$a)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new jf(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ki=4,Ql=[.125,.215,.35,.446,.526,.582],oi=20,ya=new hu,ec=new rt;let ba=null,Ea=0,Ta=0,wa=!1;const si=(1+Math.sqrt(5))/2,Ni=1/si,tc=[new X(-si,Ni,0),new X(si,Ni,0),new X(-Ni,0,si),new X(Ni,0,si),new X(0,si,-Ni),new X(0,si,Ni),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],Zm=new X;class nc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Zm}=s;ba=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ba,Ea,Ta),this._renderer.xr.enabled=wa,e.scissorTest=!1,ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===Yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ba=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:xr,format:an,colorSpace:ji,depthBuffer:!1},r=ic(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ic(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jm(s)),this._blurMaterial=Qm(s,e,t)}return r}_compileMaterial(e){const t=new St(this._lodPlanes[0],e);this._renderer.compile(t,ya)}_sceneToCubeUV(e,t,i,r,s){const l=new rn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(ec),d.toneMapping=Xn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const _=new Kt({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),h=new St(new Er,_);let f=!1;const E=e.background;E?E.isColor&&(_.color.copy(E),e.background=null,f=!0):(_.color.copy(ec),f=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const C=this._cubeSize;ts(r,v*C,y>2?C:0,C,C),d.setRenderTarget(r),f&&d.render(h,l),d.render(e,l)}h.geometry.dispose(),h.material.dispose(),d.toneMapping=m,d.autoClear=p,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===qi||e.mapping===Yi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new St(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ts(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ya)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=tc[(r-s-1)%tc.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new St(this._lodPlanes[r],c),p=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*oi-1),_=s/g,h=isFinite(s)?1+Math.floor(u*_):oi;h>oi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${oi}`);const f=[];let E=0;for(let A=0;A<oi;++A){const I=A/_,S=Math.exp(-I*I/2);f.push(S),A===0?E+=S:A<h&&(E+=2*S)}for(let A=0;A<f.length;A++)f[A]=f[A]/E;p.envMap.value=e.texture,p.samples.value=h,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:y}=this;p.dTheta.value=g,p.mipInt.value=y-i;const v=this._sizeLods[r],C=3*v*(r>y-ki?r-y+ki:0),w=4*(this._cubeSize-v);ts(t,C,w,3*v,2*v),l.setRenderTarget(t),l.render(d,ya)}}function Jm(n){const e=[],t=[],i=[];let r=n;const s=n-ki+1+Ql.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-ki?l=Ql[a-n+ki-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,h=2,f=1,E=new Float32Array(_*g*m),y=new Float32Array(h*g*m),v=new Float32Array(f*g*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,I=w>2?0:-1,S=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];E.set(S,_*g*w),y.set(p,h*g*w);const M=[w,w,w,w,w,w];v.set(M,f*g*w)}const C=new In;C.setAttribute("position",new ln(E,_)),C.setAttribute("uv",new ln(y,h)),C.setAttribute("faceIndex",new ln(v,f)),e.push(C),r>ki&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ic(n,e,t){const i=new pi(n,e,t);return i.texture.mapping=gs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ts(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Qm(n,e,t){const i=new Float32Array(oi),r=new X(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function rc(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function sc(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Ho(){return`

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
	`}function eg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ga||l===$a,u=l===qi||l===Yi;if(c||u){let d=e.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new nc(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new nc(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function tg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&vr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ng(n,e,t,i){const r={},s=new WeakMap;function a(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,t.memory.geometries++),p}function l(d){const p=d.attributes;for(const m in p)e.update(p[m],n.ARRAY_BUFFER)}function c(d){const p=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let y=0,v=E.length;y<v;y+=3){const C=E[y+0],w=E[y+1],A=E[y+2];p.push(C,w,w,A,A,C)}}else if(g!==void 0){const E=g.array;_=g.version;for(let y=0,v=E.length/3-1;y<v;y+=3){const C=y+0,w=y+1,A=y+2;p.push(C,w,w,A,A,C)}}else return;const h=new(Qc(p)?su:ru)(p,1);h.version=_;const f=s.get(d);f&&e.remove(f),s.set(d,h)}function u(d){const p=s.get(d);if(p){const m=d.index;m!==null&&p.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function ig(n,e,t){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,m){n.drawElements(i,m,s,p*a),t.update(m,i,1)}function c(p,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,p*a,g),t.update(m,i,g))}function u(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,p,0,g);let h=0;for(let f=0;f<g;f++)h+=m[f];t.update(h,i,1)}function d(p,m,g,_){if(g===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<p.length;f++)c(p[f]/a,m[f],_[f]);else{h.multiDrawElementsInstancedWEBGL(i,m,0,s,p,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=m[E]*_[E];t.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function rg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function sg(n,e,t){const i=new WeakMap,r=new gt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let p=i.get(o);if(p===void 0||p.count!==d){let M=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var m=M;p!==void 0&&p.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,h=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),h===!0&&(v=3);let C=o.attributes.position.count*v,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*w*4*d),I=new eu(A,C,w,d);I.type=Rn,I.needsUpdate=!0;const S=v*4;for(let L=0;L<d;L++){const P=f[L],U=E[L],O=y[L],D=C*w*4*L;for(let N=0;N<P.count;N++){const B=N*S;g===!0&&(r.fromBufferAttribute(P,N),A[D+B+0]=r.x,A[D+B+1]=r.y,A[D+B+2]=r.z,A[D+B+3]=0),_===!0&&(r.fromBufferAttribute(U,N),A[D+B+4]=r.x,A[D+B+5]=r.y,A[D+B+6]=r.z,A[D+B+7]=0),h===!0&&(r.fromBufferAttribute(O,N),A[D+B+8]=r.x,A[D+B+9]=r.y,A[D+B+10]=r.z,A[D+B+11]=O.itemSize===4?r.w:1)}}p={count:d,texture:I,size:new nt(C,w)},i.set(o,p),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let h=0;h<c.length;h++)g+=c[h];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function ag(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const mu=new At,ac=new du(1,1),gu=new eu,_u=new Df,vu=new lu,oc=[],lc=[],cc=new Float32Array(16),uc=new Float32Array(9),dc=new Float32Array(4);function Qi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=oc[r];if(s===void 0&&(s=new Float32Array(r),oc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function vs(n,e){let t=lc[e];t===void 0&&(t=new Int32Array(e),lc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function og(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function dg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,i))return;dc.set(i),n.uniformMatrix2fv(this.addr,!1,dc),bt(t,i)}}function fg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,i))return;uc.set(i),n.uniformMatrix3fv(this.addr,!1,uc),bt(t,i)}}function hg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,i))return;cc.set(i),n.uniformMatrix4fv(this.addr,!1,cc),bt(t,i)}}function pg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),bt(t,e)}}function gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),bt(t,e)}}function _g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),bt(t,e)}}function vg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),bt(t,e)}}function Sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),bt(t,e)}}function Mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),bt(t,e)}}function yg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ac.compareFunction=Jc,s=ac):s=mu,t.setTexture2D(e||s,r)}function bg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||_u,r)}function Eg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||vu,r)}function Tg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||gu,r)}function wg(n){switch(n){case 5126:return og;case 35664:return lg;case 35665:return cg;case 35666:return ug;case 35674:return dg;case 35675:return fg;case 35676:return hg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return _g;case 5125:return vg;case 36294:return xg;case 36295:return Sg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Tg}}function Ag(n,e){n.uniform1fv(this.addr,e)}function Rg(n,e){const t=Qi(e,this.size,2);n.uniform2fv(this.addr,t)}function Cg(n,e){const t=Qi(e,this.size,3);n.uniform3fv(this.addr,t)}function Pg(n,e){const t=Qi(e,this.size,4);n.uniform4fv(this.addr,t)}function Lg(n,e){const t=Qi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Dg(n,e){const t=Qi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ig(n,e){const t=Qi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ug(n,e){n.uniform1iv(this.addr,e)}function Ng(n,e){n.uniform2iv(this.addr,e)}function Fg(n,e){n.uniform3iv(this.addr,e)}function Og(n,e){n.uniform4iv(this.addr,e)}function Bg(n,e){n.uniform1uiv(this.addr,e)}function kg(n,e){n.uniform2uiv(this.addr,e)}function zg(n,e){n.uniform3uiv(this.addr,e)}function Hg(n,e){n.uniform4uiv(this.addr,e)}function Vg(n,e,t){const i=this.cache,r=e.length,s=vs(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||mu,s[a])}function Gg(n,e,t){const i=this.cache,r=e.length,s=vs(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||_u,s[a])}function $g(n,e,t){const i=this.cache,r=e.length,s=vs(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||vu,s[a])}function Wg(n,e,t){const i=this.cache,r=e.length,s=vs(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||gu,s[a])}function Xg(n){switch(n){case 5126:return Ag;case 35664:return Rg;case 35665:return Cg;case 35666:return Pg;case 35674:return Lg;case 35675:return Dg;case 35676:return Ig;case 5124:case 35670:return Ug;case 35667:case 35671:return Ng;case 35668:case 35672:return Fg;case 35669:case 35673:return Og;case 5125:return Bg;case 36294:return kg;case 36295:return zg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35679:case 36299:case 36307:return Gg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return Wg}}class qg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=wg(t.type)}}class Yg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xg(t.type)}}class jg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Aa=/(\w+)(\])?(\[|\.)?/g;function fc(n,e){n.seq.push(e),n.map[e.id]=e}function Kg(n,e,t){const i=n.name,r=i.length;for(Aa.lastIndex=0;;){const s=Aa.exec(i),a=Aa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){fc(t,c===void 0?new qg(o,n,e):new Yg(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new jg(o),fc(t,d)),t=d}}}class cs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Kg(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function hc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Zg=37297;let Jg=0;function Qg(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const pc=new $e;function e_(n){Qe._getMatrix(pc,Qe.workingColorSpace,n);const e=`mat3( ${pc.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case hs:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function mc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Qg(n.getShaderSource(e),o)}else return s}function t_(n,e){const t=e_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function n_(n,e){let t;switch(e){case sf:t="Linear";break;case af:t="Reinhard";break;case of:t="Cineon";break;case lf:t="ACESFilmic";break;case uf:t="AgX";break;case df:t="Neutral";break;case cf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ns=new X;function i_(){Qe.getLuminanceCoefficients(ns);const n=ns.x.toFixed(4),e=ns.y.toFixed(4),t=ns.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function s_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function a_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function cr(n){return n!==""}function gc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _c(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const o_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eo(n){return n.replace(o_,c_)}const l_=new Map;function c_(n,e){let t=We[e];if(t===void 0){const i=l_.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Eo(t)}const u_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vc(n){return n.replace(u_,d_)}function d_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function f_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Od?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===wn&&(e="SHADOWMAP_TYPE_VSM"),e}function h_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qi:case Yi:e="ENVMAP_TYPE_CUBE";break;case gs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function p_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Yi:e="ENVMAP_MODE_REFRACTION";break}return e}function m_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vc:e="ENVMAP_BLENDING_MULTIPLY";break;case nf:e="ENVMAP_BLENDING_MIX";break;case rf:e="ENVMAP_BLENDING_ADD";break}return e}function g_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function __(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=f_(t),c=h_(t),u=p_(t),d=m_(t),p=g_(t),m=r_(t),g=s_(s),_=r.createProgram();let h,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(cr).join(`
`),h.length>0&&(h+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(cr).join(`
`),f.length>0&&(f+=`
`)):(h=[xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),f=[xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?We.tonemapping_pars_fragment:"",t.toneMapping!==Xn?n_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,t_("linearToOutputTexel",t.outputColorSpace),i_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cr).join(`
`)),a=Eo(a),a=gc(a,t),a=_c(a,t),o=Eo(o),o=gc(o,t),o=_c(o,t),a=vc(a),o=vc(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,h=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,f=["#define varying in",t.glslVersion===Dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=E+h+a,v=E+f+o,C=hc(r,r.VERTEX_SHADER,y),w=hc(r,r.FRAGMENT_SHADER,v);r.attachShader(_,C),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(L){if(n.debug.checkShaderErrors){const P=r.getProgramInfoLog(_)||"",U=r.getShaderInfoLog(C)||"",O=r.getShaderInfoLog(w)||"",D=P.trim(),N=U.trim(),B=O.trim();let k=!0,te=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,w);else{const pe=mc(r,C,"vertex"),_e=mc(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+D+`
`+pe+`
`+_e)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(N===""||B==="")&&(te=!1);te&&(L.diagnostics={runnable:k,programLog:D,vertexShader:{log:N,prefix:h},fragmentShader:{log:B,prefix:f}})}r.deleteShader(C),r.deleteShader(w),I=new cs(r,_),S=a_(r,_)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,Zg)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}let v_=0;class x_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new S_(e),t.set(e,i)),i}}class S_{constructor(e){this.id=v_++,this.code=e,this.usedTimes=0}}function M_(n,e,t,i,r,s,a){const o=new nu,l=new x_,c=new Set,u=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function h(S,M,L,P,U){const O=P.fog,D=U.geometry,N=S.isMeshStandardMaterial?P.environment:null,B=(S.isMeshStandardMaterial?t:e).get(S.envMap||N),k=B&&B.mapping===gs?B.image.height:null,te=g[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const pe=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,_e=pe!==void 0?pe.length:0;let Ne=0;D.morphAttributes.position!==void 0&&(Ne=1),D.morphAttributes.normal!==void 0&&(Ne=2),D.morphAttributes.color!==void 0&&(Ne=3);let Ge,Xe,Oe,Q;if(te){const tt=pn[te];Ge=tt.vertexShader,Xe=tt.fragmentShader}else Ge=S.vertexShader,Xe=S.fragmentShader,l.update(S),Oe=l.getVertexShaderID(S),Q=l.getFragmentShaderID(S);const ee=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),Pe=U.isInstancedMesh===!0,Ee=U.isBatchedMesh===!0,He=!!S.map,ge=!!S.matcap,T=!!B,Te=!!S.aoMap,me=!!S.lightMap,xe=!!S.bumpMap,ye=!!S.normalMap,qe=!!S.displacementMap,fe=!!S.emissiveMap,Le=!!S.metalnessMap,Ze=!!S.roughnessMap,it=S.anisotropy>0,R=S.clearcoat>0,x=S.dispersion>0,$=S.iridescence>0,W=S.sheen>0,oe=S.transmission>0,J=it&&!!S.anisotropyMap,we=R&&!!S.clearcoatMap,de=R&&!!S.clearcoatNormalMap,G=R&&!!S.clearcoatRoughnessMap,se=$&&!!S.iridescenceMap,j=$&&!!S.iridescenceThicknessMap,ne=W&&!!S.sheenColorMap,Se=W&&!!S.sheenRoughnessMap,le=!!S.specularMap,ie=!!S.specularColorMap,Ie=!!S.specularIntensityMap,F=oe&&!!S.transmissionMap,K=oe&&!!S.thicknessMap,re=!!S.gradientMap,he=!!S.alphaMap,ce=S.alphaTest>0,ae=!!S.alphaHash,Ce=!!S.extensions;let Ve=Xn;S.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ve=n.toneMapping);const ct={shaderID:te,shaderType:S.type,shaderName:S.name,vertexShader:Ge,fragmentShader:Xe,defines:S.defines,customVertexShaderID:Oe,customFragmentShaderID:Q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ee,batchingColor:Ee&&U._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&U.instanceColor!==null,instancingMorph:Pe&&U.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ji,alphaToCoverage:!!S.alphaToCoverage,map:He,matcap:ge,envMap:T,envMapMode:T&&B.mapping,envMapCubeUVHeight:k,aoMap:Te,lightMap:me,bumpMap:xe,normalMap:ye,displacementMap:p&&qe,emissiveMap:fe,normalMapObjectSpace:ye&&S.normalMapType===gf,normalMapTangentSpace:ye&&S.normalMapType===mf,metalnessMap:Le,roughnessMap:Ze,anisotropy:it,anisotropyMap:J,clearcoat:R,clearcoatMap:we,clearcoatNormalMap:de,clearcoatRoughnessMap:G,dispersion:x,iridescence:$,iridescenceMap:se,iridescenceThicknessMap:j,sheen:W,sheenColorMap:ne,sheenRoughnessMap:Se,specularMap:le,specularColorMap:ie,specularIntensityMap:Ie,transmission:oe,transmissionMap:F,thicknessMap:K,gradientMap:re,opaque:S.transparent===!1&&S.blending===Hi&&S.alphaToCoverage===!1,alphaMap:he,alphaTest:ce,alphaHash:ae,combine:S.combine,mapUv:He&&_(S.map.channel),aoMapUv:Te&&_(S.aoMap.channel),lightMapUv:me&&_(S.lightMap.channel),bumpMapUv:xe&&_(S.bumpMap.channel),normalMapUv:ye&&_(S.normalMap.channel),displacementMapUv:qe&&_(S.displacementMap.channel),emissiveMapUv:fe&&_(S.emissiveMap.channel),metalnessMapUv:Le&&_(S.metalnessMap.channel),roughnessMapUv:Ze&&_(S.roughnessMap.channel),anisotropyMapUv:J&&_(S.anisotropyMap.channel),clearcoatMapUv:we&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:j&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(S.sheenRoughnessMap.channel),specularMapUv:le&&_(S.specularMap.channel),specularColorMapUv:ie&&_(S.specularColorMap.channel),specularIntensityMapUv:Ie&&_(S.specularIntensityMap.channel),transmissionMapUv:F&&_(S.transmissionMap.channel),thicknessMapUv:K&&_(S.thicknessMap.channel),alphaMapUv:he&&_(S.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ye||it),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&(He||he),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:U.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ve,decodeVideoTexture:He&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===at,decodeVideoTextureEmissive:fe&&S.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(S.emissiveMap.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===An,flipSided:S.side===Bt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ce&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&S.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(E(M,S),y(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function E(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const M=g[S.type];let L;if(M){const P=pn[M];L=Wf.clone(P.uniforms)}else L=S.uniforms;return L}function C(S,M){let L;for(let P=0,U=u.length;P<U;P++){const O=u[P];if(O.cacheKey===M){L=O,++L.usedTimes;break}}return L===void 0&&(L=new __(n,M,S,s),u.push(L)),L}function w(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function A(S){l.remove(S)}function I(){l.dispose()}return{getParameters:h,getProgramCacheKey:f,getUniforms:v,acquireProgram:C,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:I}}function y_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function b_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Sc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Mc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,p,m,g,_,h){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:p,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:h},n[e]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=h),e++,f}function o(d,p,m,g,_,h){const f=a(d,p,m,g,_,h);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function l(d,p,m,g,_,h){const f=a(d,p,m,g,_,h);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function c(d,p){t.length>1&&t.sort(d||b_),i.length>1&&i.sort(p||Sc),r.length>1&&r.sort(p||Sc)}function u(){for(let d=e,p=n.length;d<p;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function E_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Mc,n.set(i,[a])):r>=s.length?(a=new Mc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function T_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new rt};break;case"SpotLight":t={position:new X,direction:new X,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function w_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let A_=0;function R_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function C_(n){const e=new T_,t=w_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const r=new X,s=new vt,a=new vt;function o(c){let u=0,d=0,p=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let m=0,g=0,_=0,h=0,f=0,E=0,y=0,v=0,C=0,w=0,A=0;c.sort(R_);for(let S=0,M=c.length;S<M;S++){const L=c[S],P=L.color,U=L.intensity,O=L.distance,D=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=P.r*U,d+=P.g*U,p+=P.b*U;else if(L.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(L.sh.coefficients[N],U);A++}else if(L.isDirectionalLight){const N=e.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const B=L.shadow,k=t.get(L);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,i.directionalShadow[m]=k,i.directionalShadowMap[m]=D,i.directionalShadowMatrix[m]=L.shadow.matrix,E++}i.directional[m]=N,m++}else if(L.isSpotLight){const N=e.get(L);N.position.setFromMatrixPosition(L.matrixWorld),N.color.copy(P).multiplyScalar(U),N.distance=O,N.coneCos=Math.cos(L.angle),N.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),N.decay=L.decay,i.spot[_]=N;const B=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,B.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[_]=B.matrix,L.castShadow){const k=t.get(L);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,i.spotShadow[_]=k,i.spotShadowMap[_]=D,v++}_++}else if(L.isRectAreaLight){const N=e.get(L);N.color.copy(P).multiplyScalar(U),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),i.rectArea[h]=N,h++}else if(L.isPointLight){const N=e.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),N.distance=L.distance,N.decay=L.decay,L.castShadow){const B=L.shadow,k=t.get(L);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,k.shadowCameraNear=B.camera.near,k.shadowCameraFar=B.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=D,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=N,g++}else if(L.isHemisphereLight){const N=e.get(L);N.skyColor.copy(L.color).multiplyScalar(U),N.groundColor.copy(L.groundColor).multiplyScalar(U),i.hemi[f]=N,f++}}h>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=p;const I=i.hash;(I.directionalLength!==m||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==h||I.hemiLength!==f||I.numDirectionalShadows!==E||I.numPointShadows!==y||I.numSpotShadows!==v||I.numSpotMaps!==C||I.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=h,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,I.directionalLength=m,I.pointLength=g,I.spotLength=_,I.rectAreaLength=h,I.hemiLength=f,I.numDirectionalShadows=E,I.numPointShadows=y,I.numSpotShadows=v,I.numSpotMaps=C,I.numLightProbes=A,i.version=A_++)}function l(c,u){let d=0,p=0,m=0,g=0,_=0;const h=u.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const y=c[f];if(y.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(h),d++}else if(y.isSpotLight){const v=i.spot[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(h),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(h),m++}else if(y.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(h),a.identity(),s.copy(y.matrixWorld),s.premultiply(h),a.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const v=i.point[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(h),_++}}}return{setup:o,setupView:l,state:i}}function yc(n){const e=new C_(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function P_(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new yc(n),e.set(r,[o])):s>=a.length?(o=new yc(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const L_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D_=`uniform sampler2D shadow_pass;
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
}`;function I_(n,e,t){let i=new cu;const r=new nt,s=new nt,a=new gt,o=new nh({depthPacking:pf}),l=new ih,c={},u=t.maxTextureSize,d={[qn]:Bt,[Bt]:qn,[An]:An},p=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:L_,fragmentShader:D_}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new In;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new St(g,p),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hc;let f=this.type;this.render=function(w,A,I){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||w.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),P=n.state;P.setBlending(Wn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const U=f!==wn&&this.type===wn,O=f===wn&&this.type!==wn;for(let D=0,N=w.length;D<N;D++){const B=w[D],k=B.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const te=k.getFrameExtents();if(r.multiply(te),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/te.x),r.x=s.x*te.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/te.y),r.y=s.y*te.y,k.mapSize.y=s.y)),k.map===null||U===!0||O===!0){const _e=this.type!==wn?{minFilter:on,magFilter:on}:{};k.map!==null&&k.map.dispose(),k.map=new pi(r.x,r.y,_e),k.map.texture.name=B.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const pe=k.getViewportCount();for(let _e=0;_e<pe;_e++){const Ne=k.getViewport(_e);a.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),P.viewport(a),k.updateMatrices(B,_e),i=k.getFrustum(),v(A,I,k.camera,B,this.type)}k.isPointLightShadow!==!0&&this.type===wn&&E(k,I),k.needsUpdate=!1}f=this.type,h.needsUpdate=!1,n.setRenderTarget(S,M,L)};function E(w,A){const I=e.update(_);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new pi(r.x,r.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,I,p,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,I,m,_,null)}function y(w,A,I,S){let M=null;const L=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)M=L;else if(M=I.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const P=M.uuid,U=A.uuid;let O=c[P];O===void 0&&(O={},c[P]=O);let D=O[U];D===void 0&&(D=M.clone(),O[U]=D,A.addEventListener("dispose",C)),M=D}if(M.visible=A.visible,M.wireframe=A.wireframe,S===wn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const P=n.properties.get(M);P.light=I}return M}function v(w,A,I,S,M){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===wn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const U=e.update(w),O=w.material;if(Array.isArray(O)){const D=U.groups;for(let N=0,B=D.length;N<B;N++){const k=D[N],te=O[k.materialIndex];if(te&&te.visible){const pe=y(w,te,S,M);w.onBeforeShadow(n,w,A,I,U,pe,k),n.renderBufferDirect(I,null,U,pe,w,k),w.onAfterShadow(n,w,A,I,U,pe,k)}}}else if(O.visible){const D=y(w,O,S,M);w.onBeforeShadow(n,w,A,I,U,D,null),n.renderBufferDirect(I,null,U,D,w,null),w.onAfterShadow(n,w,A,I,U,D,null)}}const P=w.children;for(let U=0,O=P.length;U<O;U++)v(P[U],A,I,S,M)}function C(w){w.target.removeEventListener("dispose",C);for(const I in c){const S=c[I],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const U_={[Fa]:Oa,[Ba]:Ha,[ka]:Va,[Xi]:za,[Oa]:Fa,[Ha]:Ba,[Va]:ka,[za]:Xi};function N_(n,e){function t(){let F=!1;const K=new gt;let re=null;const he=new gt(0,0,0,0);return{setMask:function(ce){re!==ce&&!F&&(n.colorMask(ce,ce,ce,ce),re=ce)},setLocked:function(ce){F=ce},setClear:function(ce,ae,Ce,Ve,ct){ct===!0&&(ce*=Ve,ae*=Ve,Ce*=Ve),K.set(ce,ae,Ce,Ve),he.equals(K)===!1&&(n.clearColor(ce,ae,Ce,Ve),he.copy(K))},reset:function(){F=!1,re=null,he.set(-1,0,0,0)}}}function i(){let F=!1,K=!1,re=null,he=null,ce=null;return{setReversed:function(ae){if(K!==ae){const Ce=e.get("EXT_clip_control");ae?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),K=ae;const Ve=ce;ce=null,this.setClear(Ve)}},getReversed:function(){return K},setTest:function(ae){ae?ee(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(ae){re!==ae&&!F&&(n.depthMask(ae),re=ae)},setFunc:function(ae){if(K&&(ae=U_[ae]),he!==ae){switch(ae){case Fa:n.depthFunc(n.NEVER);break;case Oa:n.depthFunc(n.ALWAYS);break;case Ba:n.depthFunc(n.LESS);break;case Xi:n.depthFunc(n.LEQUAL);break;case ka:n.depthFunc(n.EQUAL);break;case za:n.depthFunc(n.GEQUAL);break;case Ha:n.depthFunc(n.GREATER);break;case Va:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=ae}},setLocked:function(ae){F=ae},setClear:function(ae){ce!==ae&&(K&&(ae=1-ae),n.clearDepth(ae),ce=ae)},reset:function(){F=!1,re=null,he=null,ce=null,K=!1}}}function r(){let F=!1,K=null,re=null,he=null,ce=null,ae=null,Ce=null,Ve=null,ct=null;return{setTest:function(tt){F||(tt?ee(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(tt){K!==tt&&!F&&(n.stencilMask(tt),K=tt)},setFunc:function(tt,xn,dn){(re!==tt||he!==xn||ce!==dn)&&(n.stencilFunc(tt,xn,dn),re=tt,he=xn,ce=dn)},setOp:function(tt,xn,dn){(ae!==tt||Ce!==xn||Ve!==dn)&&(n.stencilOp(tt,xn,dn),ae=tt,Ce=xn,Ve=dn)},setLocked:function(tt){F=tt},setClear:function(tt){ct!==tt&&(n.clearStencil(tt),ct=tt)},reset:function(){F=!1,K=null,re=null,he=null,ce=null,ae=null,Ce=null,Ve=null,ct=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},p=new WeakMap,m=[],g=null,_=!1,h=null,f=null,E=null,y=null,v=null,C=null,w=null,A=new rt(0,0,0),I=0,S=!1,M=null,L=null,P=null,U=null,O=null;const D=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,B=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=B>=1):k.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=B>=2);let te=null,pe={};const _e=n.getParameter(n.SCISSOR_BOX),Ne=n.getParameter(n.VIEWPORT),Ge=new gt().fromArray(_e),Xe=new gt().fromArray(Ne);function Oe(F,K,re,he){const ce=new Uint8Array(4),ae=n.createTexture();n.bindTexture(F,ae),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<re;Ce++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(K,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(K+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return ae}const Q={};Q[n.TEXTURE_2D]=Oe(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=Oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=Oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=Oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(n.DEPTH_TEST),a.setFunc(Xi),xe(!1),ye(wl),ee(n.CULL_FACE),Te(Wn);function ee(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function ve(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Pe(F,K){return d[F]!==K?(n.bindFramebuffer(F,K),d[F]=K,F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=K),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=K),!0):!1}function Ee(F,K){let re=m,he=!1;if(F){re=p.get(K),re===void 0&&(re=[],p.set(K,re));const ce=F.textures;if(re.length!==ce.length||re[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,Ce=ce.length;ae<Ce;ae++)re[ae]=n.COLOR_ATTACHMENT0+ae;re.length=ce.length,he=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,he=!0);he&&n.drawBuffers(re)}function He(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const ge={[ai]:n.FUNC_ADD,[kd]:n.FUNC_SUBTRACT,[zd]:n.FUNC_REVERSE_SUBTRACT};ge[Hd]=n.MIN,ge[Vd]=n.MAX;const T={[Gd]:n.ZERO,[$d]:n.ONE,[Wd]:n.SRC_COLOR,[Ua]:n.SRC_ALPHA,[Zd]:n.SRC_ALPHA_SATURATE,[jd]:n.DST_COLOR,[qd]:n.DST_ALPHA,[Xd]:n.ONE_MINUS_SRC_COLOR,[Na]:n.ONE_MINUS_SRC_ALPHA,[Kd]:n.ONE_MINUS_DST_COLOR,[Yd]:n.ONE_MINUS_DST_ALPHA,[Jd]:n.CONSTANT_COLOR,[Qd]:n.ONE_MINUS_CONSTANT_COLOR,[ef]:n.CONSTANT_ALPHA,[tf]:n.ONE_MINUS_CONSTANT_ALPHA};function Te(F,K,re,he,ce,ae,Ce,Ve,ct,tt){if(F===Wn){_===!0&&(ve(n.BLEND),_=!1);return}if(_===!1&&(ee(n.BLEND),_=!0),F!==Bd){if(F!==h||tt!==S){if((f!==ai||v!==ai)&&(n.blendEquation(n.FUNC_ADD),f=ai,v=ai),tt)switch(F){case Hi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Al:n.blendFunc(n.ONE,n.ONE);break;case Rl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Hi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Al:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Rl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,y=null,C=null,w=null,A.set(0,0,0),I=0,h=F,S=tt}return}ce=ce||K,ae=ae||re,Ce=Ce||he,(K!==f||ce!==v)&&(n.blendEquationSeparate(ge[K],ge[ce]),f=K,v=ce),(re!==E||he!==y||ae!==C||Ce!==w)&&(n.blendFuncSeparate(T[re],T[he],T[ae],T[Ce]),E=re,y=he,C=ae,w=Ce),(Ve.equals(A)===!1||ct!==I)&&(n.blendColor(Ve.r,Ve.g,Ve.b,ct),A.copy(Ve),I=ct),h=F,S=!1}function me(F,K){F.side===An?ve(n.CULL_FACE):ee(n.CULL_FACE);let re=F.side===Bt;K&&(re=!re),xe(re),F.blending===Hi&&F.transparent===!1?Te(Wn):Te(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const he=F.stencilWrite;o.setTest(he),he&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),fe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function xe(F){M!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),M=F)}function ye(F){F!==Nd?(ee(n.CULL_FACE),F!==L&&(F===wl?n.cullFace(n.BACK):F===Fd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),L=F}function qe(F){F!==P&&(N&&n.lineWidth(F),P=F)}function fe(F,K,re){F?(ee(n.POLYGON_OFFSET_FILL),(U!==K||O!==re)&&(n.polygonOffset(K,re),U=K,O=re)):ve(n.POLYGON_OFFSET_FILL)}function Le(F){F?ee(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function Ze(F){F===void 0&&(F=n.TEXTURE0+D-1),te!==F&&(n.activeTexture(F),te=F)}function it(F,K,re){re===void 0&&(te===null?re=n.TEXTURE0+D-1:re=te);let he=pe[re];he===void 0&&(he={type:void 0,texture:void 0},pe[re]=he),(he.type!==F||he.texture!==K)&&(te!==re&&(n.activeTexture(re),te=re),n.bindTexture(F,K||Q[F]),he.type=F,he.texture=K)}function R(){const F=pe[te];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function W(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(F){Ge.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Ge.copy(F))}function Se(F){Xe.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Xe.copy(F))}function le(F,K){let re=c.get(K);re===void 0&&(re=new WeakMap,c.set(K,re));let he=re.get(F);he===void 0&&(he=n.getUniformBlockIndex(K,F.name),re.set(F,he))}function ie(F,K){const he=c.get(K).get(F);l.get(K)!==he&&(n.uniformBlockBinding(K,he,F.__bindingPointIndex),l.set(K,he))}function Ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},te=null,pe={},d={},p=new WeakMap,m=[],g=null,_=!1,h=null,f=null,E=null,y=null,v=null,C=null,w=null,A=new rt(0,0,0),I=0,S=!1,M=null,L=null,P=null,U=null,O=null,Ge.set(0,0,n.canvas.width,n.canvas.height),Xe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:ve,bindFramebuffer:Pe,drawBuffers:Ee,useProgram:He,setBlending:Te,setMaterial:me,setFlipSided:xe,setCullFace:ye,setLineWidth:qe,setPolygonOffset:fe,setScissorTest:Le,activeTexture:Ze,bindTexture:it,unbindTexture:R,compressedTexImage2D:x,compressedTexImage3D:$,texImage2D:se,texImage3D:j,updateUBOMapping:le,uniformBlockBinding:ie,texStorage2D:de,texStorage3D:G,texSubImage2D:W,texSubImage3D:oe,compressedTexSubImage2D:J,compressedTexSubImage3D:we,scissor:ne,viewport:Se,reset:Ie}}function F_(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,x){return m?new OffscreenCanvas(R,x):_r("canvas")}function _(R,x,$){let W=1;const oe=it(R);if((oe.width>$||oe.height>$)&&(W=$/Math.max(oe.width,oe.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(W*oe.width),we=Math.floor(W*oe.height);d===void 0&&(d=g(J,we));const de=x?g(J,we):d;return de.width=J,de.height=we,de.getContext("2d").drawImage(R,0,0,J,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+J+"x"+we+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),R;return R}function h(R){return R.generateMipmaps}function f(R){n.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(R,x,$,W,oe=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=x;if(x===n.RED&&($===n.FLOAT&&(J=n.R32F),$===n.HALF_FLOAT&&(J=n.R16F),$===n.UNSIGNED_BYTE&&(J=n.R8)),x===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(J=n.R8UI),$===n.UNSIGNED_SHORT&&(J=n.R16UI),$===n.UNSIGNED_INT&&(J=n.R32UI),$===n.BYTE&&(J=n.R8I),$===n.SHORT&&(J=n.R16I),$===n.INT&&(J=n.R32I)),x===n.RG&&($===n.FLOAT&&(J=n.RG32F),$===n.HALF_FLOAT&&(J=n.RG16F),$===n.UNSIGNED_BYTE&&(J=n.RG8)),x===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(J=n.RG8UI),$===n.UNSIGNED_SHORT&&(J=n.RG16UI),$===n.UNSIGNED_INT&&(J=n.RG32UI),$===n.BYTE&&(J=n.RG8I),$===n.SHORT&&(J=n.RG16I),$===n.INT&&(J=n.RG32I)),x===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(J=n.RGB8UI),$===n.UNSIGNED_SHORT&&(J=n.RGB16UI),$===n.UNSIGNED_INT&&(J=n.RGB32UI),$===n.BYTE&&(J=n.RGB8I),$===n.SHORT&&(J=n.RGB16I),$===n.INT&&(J=n.RGB32I)),x===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),$===n.UNSIGNED_INT&&(J=n.RGBA32UI),$===n.BYTE&&(J=n.RGBA8I),$===n.SHORT&&(J=n.RGBA16I),$===n.INT&&(J=n.RGBA32I)),x===n.RGB&&($===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),$===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),x===n.RGBA){const we=oe?hs:Qe.getTransfer(W);$===n.FLOAT&&(J=n.RGBA32F),$===n.HALF_FLOAT&&(J=n.RGBA16F),$===n.UNSIGNED_BYTE&&(J=we===at?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(R,x){let $;return R?x===null||x===hi||x===pr?$=n.DEPTH24_STENCIL8:x===Rn?$=n.DEPTH32F_STENCIL8:x===hr&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===hi||x===pr?$=n.DEPTH_COMPONENT24:x===Rn?$=n.DEPTH_COMPONENT32F:x===hr&&($=n.DEPTH_COMPONENT16),$}function C(R,x){return h(R)===!0||R.isFramebufferTexture&&R.minFilter!==on&&R.minFilter!==Jt?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function w(R){const x=R.target;x.removeEventListener("dispose",w),I(x),x.isVideoTexture&&u.delete(x)}function A(R){const x=R.target;x.removeEventListener("dispose",A),M(x)}function I(R){const x=i.get(R);if(x.__webglInit===void 0)return;const $=R.source,W=p.get($);if(W){const oe=W[x.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&S(R),Object.keys(W).length===0&&p.delete($)}i.remove(R)}function S(R){const x=i.get(R);n.deleteTexture(x.__webglTexture);const $=R.source,W=p.get($);delete W[x.__cacheKey],a.memory.textures--}function M(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let oe=0;oe<x.__webglFramebuffer[W].length;oe++)n.deleteFramebuffer(x.__webglFramebuffer[W][oe]);else n.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)n.deleteFramebuffer(x.__webglFramebuffer[W]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const $=R.textures;for(let W=0,oe=$.length;W<oe;W++){const J=i.get($[W]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove($[W])}i.remove(R)}let L=0;function P(){L=0}function U(){const R=L;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),L+=1,R}function O(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function D(R,x){const $=i.get(R);if(R.isVideoTexture&&Le(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&$.__version!==R.version){const W=R.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q($,R,x);return}}else R.isExternalTexture&&($.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+x)}function N(R,x){const $=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){Q($,R,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+x)}function B(R,x){const $=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){Q($,R,x);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+x)}function k(R,x){const $=i.get(R);if(R.version>0&&$.__version!==R.version){ee($,R,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+x)}const te={[Wa]:n.REPEAT,[ci]:n.CLAMP_TO_EDGE,[Xa]:n.MIRRORED_REPEAT},pe={[on]:n.NEAREST,[ff]:n.NEAREST_MIPMAP_NEAREST,[Ir]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[Ks]:n.LINEAR_MIPMAP_NEAREST,[ui]:n.LINEAR_MIPMAP_LINEAR},_e={[_f]:n.NEVER,[bf]:n.ALWAYS,[vf]:n.LESS,[Jc]:n.LEQUAL,[xf]:n.EQUAL,[yf]:n.GEQUAL,[Sf]:n.GREATER,[Mf]:n.NOTEQUAL};function Ne(R,x){if(x.type===Rn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Jt||x.magFilter===Ks||x.magFilter===Ir||x.magFilter===ui||x.minFilter===Jt||x.minFilter===Ks||x.minFilter===Ir||x.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,te[x.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,te[x.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,te[x.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,pe[x.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,pe[x.minFilter]),x.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,_e[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===on||x.minFilter!==Ir&&x.minFilter!==ui||x.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ge(R,x){let $=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",w));const W=x.source;let oe=p.get(W);oe===void 0&&(oe={},p.set(W,oe));const J=O(x);if(J!==R.__cacheKey){oe[J]===void 0&&(oe[J]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,$=!0),oe[J].usedTimes++;const we=oe[R.__cacheKey];we!==void 0&&(oe[R.__cacheKey].usedTimes--,we.usedTimes===0&&S(x)),R.__cacheKey=J,R.__webglTexture=oe[J].texture}return $}function Xe(R,x,$){return Math.floor(Math.floor(R/$)/x)}function Oe(R,x,$,W){const J=R.updateRanges;if(J.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,$,W,x.data);else{J.sort((j,ne)=>j.start-ne.start);let we=0;for(let j=1;j<J.length;j++){const ne=J[we],Se=J[j],le=ne.start+ne.count,ie=Xe(Se.start,x.width,4),Ie=Xe(ne.start,x.width,4);Se.start<=le+1&&ie===Ie&&Xe(Se.start+Se.count-1,x.width,4)===ie?ne.count=Math.max(ne.count,Se.start+Se.count-ne.start):(++we,J[we]=Se)}J.length=we+1;const de=n.getParameter(n.UNPACK_ROW_LENGTH),G=n.getParameter(n.UNPACK_SKIP_PIXELS),se=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let j=0,ne=J.length;j<ne;j++){const Se=J[j],le=Math.floor(Se.start/4),ie=Math.ceil(Se.count/4),Ie=le%x.width,F=Math.floor(le/x.width),K=ie,re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ie),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Ie,F,K,re,$,W,x.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,de),n.pixelStorei(n.UNPACK_SKIP_PIXELS,G),n.pixelStorei(n.UNPACK_SKIP_ROWS,se)}}function Q(R,x,$){let W=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=n.TEXTURE_3D);const oe=Ge(R,x),J=x.source;t.bindTexture(W,R.__webglTexture,n.TEXTURE0+$);const we=i.get(J);if(J.version!==we.__version||oe===!0){t.activeTexture(n.TEXTURE0+$);const de=Qe.getPrimaries(Qe.workingColorSpace),G=x.colorSpace===Hn?null:Qe.getPrimaries(x.colorSpace),se=x.colorSpace===Hn||de===G?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let j=_(x.image,!1,r.maxTextureSize);j=Ze(x,j);const ne=s.convert(x.format,x.colorSpace),Se=s.convert(x.type);let le=y(x.internalFormat,ne,Se,x.colorSpace,x.isVideoTexture);Ne(W,x);let ie;const Ie=x.mipmaps,F=x.isVideoTexture!==!0,K=we.__version===void 0||oe===!0,re=J.dataReady,he=C(x,j);if(x.isDepthTexture)le=v(x.format===gr,x.type),K&&(F?t.texStorage2D(n.TEXTURE_2D,1,le,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,le,j.width,j.height,0,ne,Se,null));else if(x.isDataTexture)if(Ie.length>0){F&&K&&t.texStorage2D(n.TEXTURE_2D,he,le,Ie[0].width,Ie[0].height);for(let ce=0,ae=Ie.length;ce<ae;ce++)ie=Ie[ce],F?re&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,ie.width,ie.height,ne,Se,ie.data):t.texImage2D(n.TEXTURE_2D,ce,le,ie.width,ie.height,0,ne,Se,ie.data);x.generateMipmaps=!1}else F?(K&&t.texStorage2D(n.TEXTURE_2D,he,le,j.width,j.height),re&&Oe(x,j,ne,Se)):t.texImage2D(n.TEXTURE_2D,0,le,j.width,j.height,0,ne,Se,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){F&&K&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,le,Ie[0].width,Ie[0].height,j.depth);for(let ce=0,ae=Ie.length;ce<ae;ce++)if(ie=Ie[ce],x.format!==an)if(ne!==null)if(F){if(re)if(x.layerUpdates.size>0){const Ce=Jl(ie.width,ie.height,x.format,x.type);for(const Ve of x.layerUpdates){const ct=ie.data.subarray(Ve*Ce/ie.data.BYTES_PER_ELEMENT,(Ve+1)*Ce/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,Ve,ie.width,ie.height,1,ne,ct)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,ie.width,ie.height,j.depth,ne,ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,le,ie.width,ie.height,j.depth,0,ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,ie.width,ie.height,j.depth,ne,Se,ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,le,ie.width,ie.height,j.depth,0,ne,Se,ie.data)}else{F&&K&&t.texStorage2D(n.TEXTURE_2D,he,le,Ie[0].width,Ie[0].height);for(let ce=0,ae=Ie.length;ce<ae;ce++)ie=Ie[ce],x.format!==an?ne!==null?F?re&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,ie.width,ie.height,ne,ie.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,le,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?re&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,ie.width,ie.height,ne,Se,ie.data):t.texImage2D(n.TEXTURE_2D,ce,le,ie.width,ie.height,0,ne,Se,ie.data)}else if(x.isDataArrayTexture)if(F){if(K&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,le,j.width,j.height,j.depth),re)if(x.layerUpdates.size>0){const ce=Jl(j.width,j.height,x.format,x.type);for(const ae of x.layerUpdates){const Ce=j.data.subarray(ae*ce/j.data.BYTES_PER_ELEMENT,(ae+1)*ce/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ae,j.width,j.height,1,ne,Se,Ce)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ne,Se,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,le,j.width,j.height,j.depth,0,ne,Se,j.data);else if(x.isData3DTexture)F?(K&&t.texStorage3D(n.TEXTURE_3D,he,le,j.width,j.height,j.depth),re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ne,Se,j.data)):t.texImage3D(n.TEXTURE_3D,0,le,j.width,j.height,j.depth,0,ne,Se,j.data);else if(x.isFramebufferTexture){if(K)if(F)t.texStorage2D(n.TEXTURE_2D,he,le,j.width,j.height);else{let ce=j.width,ae=j.height;for(let Ce=0;Ce<he;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,le,ce,ae,0,ne,Se,null),ce>>=1,ae>>=1}}else if(Ie.length>0){if(F&&K){const ce=it(Ie[0]);t.texStorage2D(n.TEXTURE_2D,he,le,ce.width,ce.height)}for(let ce=0,ae=Ie.length;ce<ae;ce++)ie=Ie[ce],F?re&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,ne,Se,ie):t.texImage2D(n.TEXTURE_2D,ce,le,ne,Se,ie);x.generateMipmaps=!1}else if(F){if(K){const ce=it(j);t.texStorage2D(n.TEXTURE_2D,he,le,ce.width,ce.height)}re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne,Se,j)}else t.texImage2D(n.TEXTURE_2D,0,le,ne,Se,j);h(x)&&f(W),we.__version=J.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ee(R,x,$){if(x.image.length!==6)return;const W=Ge(R,x),oe=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+$);const J=i.get(oe);if(oe.version!==J.__version||W===!0){t.activeTexture(n.TEXTURE0+$);const we=Qe.getPrimaries(Qe.workingColorSpace),de=x.colorSpace===Hn?null:Qe.getPrimaries(x.colorSpace),G=x.colorSpace===Hn||we===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,G);const se=x.isCompressedTexture||x.image[0].isCompressedTexture,j=x.image[0]&&x.image[0].isDataTexture,ne=[];for(let ae=0;ae<6;ae++)!se&&!j?ne[ae]=_(x.image[ae],!0,r.maxCubemapSize):ne[ae]=j?x.image[ae].image:x.image[ae],ne[ae]=Ze(x,ne[ae]);const Se=ne[0],le=s.convert(x.format,x.colorSpace),ie=s.convert(x.type),Ie=y(x.internalFormat,le,ie,x.colorSpace),F=x.isVideoTexture!==!0,K=J.__version===void 0||W===!0,re=oe.dataReady;let he=C(x,Se);Ne(n.TEXTURE_CUBE_MAP,x);let ce;if(se){F&&K&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ie,Se.width,Se.height);for(let ae=0;ae<6;ae++){ce=ne[ae].mipmaps;for(let Ce=0;Ce<ce.length;Ce++){const Ve=ce[Ce];x.format!==an?le!==null?F?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce,0,0,Ve.width,Ve.height,le,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce,Ie,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce,0,0,Ve.width,Ve.height,le,ie,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce,Ie,Ve.width,Ve.height,0,le,ie,Ve.data)}}}else{if(ce=x.mipmaps,F&&K){ce.length>0&&he++;const ae=it(ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ie,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(j){F?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ne[ae].width,ne[ae].height,le,ie,ne[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ie,ne[ae].width,ne[ae].height,0,le,ie,ne[ae].data);for(let Ce=0;Ce<ce.length;Ce++){const ct=ce[Ce].image[ae].image;F?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce+1,0,0,ct.width,ct.height,le,ie,ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce+1,Ie,ct.width,ct.height,0,le,ie,ct.data)}}else{F?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,le,ie,ne[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ie,le,ie,ne[ae]);for(let Ce=0;Ce<ce.length;Ce++){const Ve=ce[Ce];F?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce+1,0,0,le,ie,Ve.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce+1,Ie,le,ie,Ve.image[ae])}}}h(x)&&f(n.TEXTURE_CUBE_MAP),J.__version=oe.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ve(R,x,$,W,oe,J){const we=s.convert($.format,$.colorSpace),de=s.convert($.type),G=y($.internalFormat,we,de,$.colorSpace),se=i.get(x),j=i.get($);if(j.__renderTarget=x,!se.__hasExternalTextures){const ne=Math.max(1,x.width>>J),Se=Math.max(1,x.height>>J);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,J,G,ne,Se,x.depth,0,we,de,null):t.texImage2D(oe,J,G,ne,Se,0,we,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),fe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,oe,j.__webglTexture,0,qe(x)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,oe,j.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(R,x,$){if(n.bindRenderbuffer(n.RENDERBUFFER,R),x.depthBuffer){const W=x.depthTexture,oe=W&&W.isDepthTexture?W.type:null,J=v(x.stencilBuffer,oe),we=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=qe(x);fe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,J,x.width,x.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,J,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,J,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,R)}else{const W=x.textures;for(let oe=0;oe<W.length;oe++){const J=W[oe],we=s.convert(J.format,J.colorSpace),de=s.convert(J.type),G=y(J.internalFormat,we,de,J.colorSpace),se=qe(x);$&&fe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,G,x.width,x.height):fe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,G,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,G,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ee(R,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(x.depthTexture);W.__renderTarget=x,(!W.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),D(x.depthTexture,0);const oe=W.__webglTexture,J=qe(x);if(x.depthTexture.format===mr)fe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0);else if(x.depthTexture.format===gr)fe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function He(R){const x=i.get(R),$=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const W=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){const oe=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",oe)};W.addEventListener("dispose",oe),x.__depthDisposeCallback=oe}x.__boundDepthTexture=W}if(R.depthTexture&&!x.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const W=R.texture.mipmaps;W&&W.length>0?Ee(x.__webglFramebuffer[0],R):Ee(x.__webglFramebuffer,R)}else if($){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=n.createRenderbuffer(),Pe(x.__webglDepthbuffer[W],R,!1);else{const oe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,J)}}else{const W=R.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Pe(x.__webglDepthbuffer,R,!1);else{const oe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,J)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(R,x,$){const W=i.get(R);x!==void 0&&ve(W.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&He(R)}function T(R){const x=R.texture,$=i.get(R),W=i.get(x);R.addEventListener("dispose",A);const oe=R.textures,J=R.isWebGLCubeRenderTarget===!0,we=oe.length>1;if(we||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=x.version,a.memory.textures++),J){$.__webglFramebuffer=[];for(let de=0;de<6;de++)if(x.mipmaps&&x.mipmaps.length>0){$.__webglFramebuffer[de]=[];for(let G=0;G<x.mipmaps.length;G++)$.__webglFramebuffer[de][G]=n.createFramebuffer()}else $.__webglFramebuffer[de]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){$.__webglFramebuffer=[];for(let de=0;de<x.mipmaps.length;de++)$.__webglFramebuffer[de]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(we)for(let de=0,G=oe.length;de<G;de++){const se=i.get(oe[de]);se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&fe(R)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let de=0;de<oe.length;de++){const G=oe[de];$.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[de]);const se=s.convert(G.format,G.colorSpace),j=s.convert(G.type),ne=y(G.internalFormat,se,j,G.colorSpace,R.isXRRenderTarget===!0),Se=qe(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,ne,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,$.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe($.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,x);for(let de=0;de<6;de++)if(x.mipmaps&&x.mipmaps.length>0)for(let G=0;G<x.mipmaps.length;G++)ve($.__webglFramebuffer[de][G],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,G);else ve($.__webglFramebuffer[de],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);h(x)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let de=0,G=oe.length;de<G;de++){const se=oe[de],j=i.get(se);let ne=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ne=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,j.__webglTexture),Ne(ne,se),ve($.__webglFramebuffer,R,se,n.COLOR_ATTACHMENT0+de,ne,0),h(se)&&f(ne)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,W.__webglTexture),Ne(de,x),x.mipmaps&&x.mipmaps.length>0)for(let G=0;G<x.mipmaps.length;G++)ve($.__webglFramebuffer[G],R,x,n.COLOR_ATTACHMENT0,de,G);else ve($.__webglFramebuffer,R,x,n.COLOR_ATTACHMENT0,de,0);h(x)&&f(de),t.unbindTexture()}R.depthBuffer&&He(R)}function Te(R){const x=R.textures;for(let $=0,W=x.length;$<W;$++){const oe=x[$];if(h(oe)){const J=E(R),we=i.get(oe).__webglTexture;t.bindTexture(J,we),f(J),t.unbindTexture()}}}const me=[],xe=[];function ye(R){if(R.samples>0){if(fe(R)===!1){const x=R.textures,$=R.width,W=R.height;let oe=n.COLOR_BUFFER_BIT;const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(R),de=x.length>1;if(de)for(let se=0;se<x.length;se++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const G=R.texture.mipmaps;G&&G.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let se=0;se<x.length;se++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[se]);const j=i.get(x[se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,j,0)}n.blitFramebuffer(0,0,$,W,0,0,$,W,oe,n.NEAREST),l===!0&&(me.length=0,xe.length=0,me.push(n.COLOR_ATTACHMENT0+se),R.depthBuffer&&R.resolveDepthBuffer===!1&&(me.push(J),xe.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,xe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let se=0;se<x.length;se++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,we.__webglColorRenderbuffer[se]);const j=i.get(x[se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,j,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const x=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function qe(R){return Math.min(r.maxSamples,R.samples)}function fe(R){const x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Le(R){const x=a.render.frame;u.get(R)!==x&&(u.set(R,x),R.update())}function Ze(R,x){const $=R.colorSpace,W=R.format,oe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||$!==ji&&$!==Hn&&(Qe.getTransfer($)===at?(W!==an||oe!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),x}function it(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.setTexture2D=D,this.setTexture2DArray=N,this.setTexture3D=B,this.setTextureCube=k,this.rebindTextures=ge,this.setupRenderTarget=T,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=fe}function O_(n,e){function t(i,r=Hn){let s;const a=Qe.getTransfer(r);if(i===Pn)return n.UNSIGNED_BYTE;if(i===Uo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===No)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===qc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===$c)return n.BYTE;if(i===Wc)return n.SHORT;if(i===hr)return n.UNSIGNED_SHORT;if(i===Io)return n.INT;if(i===hi)return n.UNSIGNED_INT;if(i===Rn)return n.FLOAT;if(i===xr)return n.HALF_FLOAT;if(i===Yc)return n.ALPHA;if(i===jc)return n.RGB;if(i===an)return n.RGBA;if(i===mr)return n.DEPTH_COMPONENT;if(i===gr)return n.DEPTH_STENCIL;if(i===Kc)return n.RED;if(i===Fo)return n.RED_INTEGER;if(i===Zc)return n.RG;if(i===Oo)return n.RG_INTEGER;if(i===Bo)return n.RGBA_INTEGER;if(i===rs||i===ss||i===as||i===os)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===rs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===as)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===rs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ss)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===as)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===os)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qa||i===Ya||i===ja||i===Ka)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===qa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ya)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ja)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ka)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Za||i===Ja||i===Qa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Za||i===Ja)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Qa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===eo||i===to||i===no||i===io||i===ro||i===so||i===ao||i===oo||i===lo||i===co||i===uo||i===fo||i===ho||i===po)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===eo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===to)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===no)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===io)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ro)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===so)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ao)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===oo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===co)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ho)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===po)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mo||i===go||i===_o)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===mo)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===go)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_o)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vo||i===xo||i===So||i===Mo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===vo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===xo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===So)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===pr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const B_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k_=`
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

}`;class z_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new fu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Yn({vertexShader:B_,fragmentShader:k_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new Ot(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H_ extends Ji{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,p=null,m=null,g=null;const _=typeof XRWebGLBinding<"u",h=new z_,f={},E=t.getContextAttributes();let y=null,v=null;const C=[],w=[],A=new nt;let I=null;const S=new rn;S.viewport=new gt;const M=new rn;M.viewport=new gt;const L=[S,M],P=new lh;let U=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ee=C[Q];return ee===void 0&&(ee=new xa,C[Q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Q){let ee=C[Q];return ee===void 0&&(ee=new xa,C[Q]=ee),ee.getGripSpace()},this.getHand=function(Q){let ee=C[Q];return ee===void 0&&(ee=new xa,C[Q]=ee),ee.getHandSpace()};function D(Q){const ee=w.indexOf(Q.inputSource);if(ee===-1)return;const ve=C[ee];ve!==void 0&&(ve.update(Q.inputSource,Q.frame,c||a),ve.dispatchEvent({type:Q.type,data:Q.inputSource}))}function N(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",B);for(let Q=0;Q<C.length;Q++){const ee=w[Q];ee!==null&&(w[Q]=null,C[Q].disconnect(ee))}U=null,O=null,h.reset();for(const Q in f)delete f[Q];e.setRenderTarget(y),m=null,p=null,d=null,r=null,v=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",N),r.addEventListener("inputsourceschange",B),E.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Pe=null,Ee=null;E.depth&&(Ee=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=E.stencil?gr:mr,Pe=E.stencil?pr:hi);const He={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};d=this.getBinding(),p=d.createProjectionLayer(He),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),v=new pi(p.textureWidth,p.textureHeight,{format:an,type:Pn,depthTexture:new du(p.textureWidth,p.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ve={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new pi(m.framebufferWidth,m.framebufferHeight,{format:an,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function B(Q){for(let ee=0;ee<Q.removed.length;ee++){const ve=Q.removed[ee],Pe=w.indexOf(ve);Pe>=0&&(w[Pe]=null,C[Pe].disconnect(ve))}for(let ee=0;ee<Q.added.length;ee++){const ve=Q.added[ee];let Pe=w.indexOf(ve);if(Pe===-1){for(let He=0;He<C.length;He++)if(He>=w.length){w.push(ve),Pe=He;break}else if(w[He]===null){w[He]=ve,Pe=He;break}if(Pe===-1)break}const Ee=C[Pe];Ee&&Ee.connect(ve)}}const k=new X,te=new X;function pe(Q,ee,ve){k.setFromMatrixPosition(ee.matrixWorld),te.setFromMatrixPosition(ve.matrixWorld);const Pe=k.distanceTo(te),Ee=ee.projectionMatrix.elements,He=ve.projectionMatrix.elements,ge=Ee[14]/(Ee[10]-1),T=Ee[14]/(Ee[10]+1),Te=(Ee[9]+1)/Ee[5],me=(Ee[9]-1)/Ee[5],xe=(Ee[8]-1)/Ee[0],ye=(He[8]+1)/He[0],qe=ge*xe,fe=ge*ye,Le=Pe/(-xe+ye),Ze=Le*-xe;if(ee.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ze),Q.translateZ(Le),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ee[10]===-1)Q.projectionMatrix.copy(ee.projectionMatrix),Q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const it=ge+Le,R=T+Le,x=qe-Ze,$=fe+(Pe-Ze),W=Te*T/R*it,oe=me*T/R*it;Q.projectionMatrix.makePerspective(x,$,W,oe,it,R),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function _e(Q,ee){ee===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ee.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ee=Q.near,ve=Q.far;h.texture!==null&&(h.depthNear>0&&(ee=h.depthNear),h.depthFar>0&&(ve=h.depthFar)),P.near=M.near=S.near=ee,P.far=M.far=S.far=ve,(U!==P.near||O!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),U=P.near,O=P.far),P.layers.mask=Q.layers.mask|6,S.layers.mask=P.layers.mask&3,M.layers.mask=P.layers.mask&5;const Pe=Q.parent,Ee=P.cameras;_e(P,Pe);for(let He=0;He<Ee.length;He++)_e(Ee[He],Pe);Ee.length===2?pe(P,S,M):P.projectionMatrix.copy(S.projectionMatrix),Ne(Q,P,Pe)};function Ne(Q,ee,ve){ve===null?Q.matrix.copy(ee.matrixWorld):(Q.matrix.copy(ve.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ee.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ee.projectionMatrix),Q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=yo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(Q){l=Q,p!==null&&(p.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(P)},this.getCameraTexture=function(Q){return f[Q]};let Ge=null;function Xe(Q,ee){if(u=ee.getViewerPose(c||a),g=ee,u!==null){const ve=u.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let Pe=!1;ve.length!==P.cameras.length&&(P.cameras.length=0,Pe=!0);for(let T=0;T<ve.length;T++){const Te=ve[T];let me=null;if(m!==null)me=m.getViewport(Te);else{const ye=d.getViewSubImage(p,Te);me=ye.viewport,T===0&&(e.setRenderTargetTextures(v,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(v))}let xe=L[T];xe===void 0&&(xe=new rn,xe.layers.enable(T),xe.viewport=new gt,L[T]=xe),xe.matrix.fromArray(Te.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(Te.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(me.x,me.y,me.width,me.height),T===0&&(P.matrix.copy(xe.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Pe===!0&&P.cameras.push(xe)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const T=d.getDepthInformation(ve[0]);T&&T.isValid&&T.texture&&h.init(T,r.renderState)}if(Ee&&Ee.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let T=0;T<ve.length;T++){const Te=ve[T].camera;if(Te){let me=f[Te];me||(me=new fu,f[Te]=me);const xe=d.getCameraImage(Te);me.sourceTexture=xe}}}}for(let ve=0;ve<C.length;ve++){const Pe=w[ve],Ee=C[ve];Pe!==null&&Ee!==void 0&&Ee.update(Pe,ee,c||a)}Ge&&Ge(Q,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Oe=new pu;Oe.setAnimationLoop(Xe),this.setAnimationLoop=function(Q){Ge=Q},this.dispose=function(){}}}const ii=new Ln,V_=new vt;function G_(n,e){function t(h,f){h.matrixAutoUpdate===!0&&h.updateMatrix(),f.value.copy(h.matrix)}function i(h,f){f.color.getRGB(h.fogColor.value,au(n)),f.isFog?(h.fogNear.value=f.near,h.fogFar.value=f.far):f.isFogExp2&&(h.fogDensity.value=f.density)}function r(h,f,E,y,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(h,f):f.isMeshToonMaterial?(s(h,f),d(h,f)):f.isMeshPhongMaterial?(s(h,f),u(h,f)):f.isMeshStandardMaterial?(s(h,f),p(h,f),f.isMeshPhysicalMaterial&&m(h,f,v)):f.isMeshMatcapMaterial?(s(h,f),g(h,f)):f.isMeshDepthMaterial?s(h,f):f.isMeshDistanceMaterial?(s(h,f),_(h,f)):f.isMeshNormalMaterial?s(h,f):f.isLineBasicMaterial?(a(h,f),f.isLineDashedMaterial&&o(h,f)):f.isPointsMaterial?l(h,f,E,y):f.isSpriteMaterial?c(h,f):f.isShadowMaterial?(h.color.value.copy(f.color),h.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(h,f){h.opacity.value=f.opacity,f.color&&h.diffuse.value.copy(f.color),f.emissive&&h.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(h.map.value=f.map,t(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.bumpMap&&(h.bumpMap.value=f.bumpMap,t(f.bumpMap,h.bumpMapTransform),h.bumpScale.value=f.bumpScale,f.side===Bt&&(h.bumpScale.value*=-1)),f.normalMap&&(h.normalMap.value=f.normalMap,t(f.normalMap,h.normalMapTransform),h.normalScale.value.copy(f.normalScale),f.side===Bt&&h.normalScale.value.negate()),f.displacementMap&&(h.displacementMap.value=f.displacementMap,t(f.displacementMap,h.displacementMapTransform),h.displacementScale.value=f.displacementScale,h.displacementBias.value=f.displacementBias),f.emissiveMap&&(h.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,h.emissiveMapTransform)),f.specularMap&&(h.specularMap.value=f.specularMap,t(f.specularMap,h.specularMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest);const E=e.get(f),y=E.envMap,v=E.envMapRotation;y&&(h.envMap.value=y,ii.copy(v),ii.x*=-1,ii.y*=-1,ii.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),h.envMapRotation.value.setFromMatrix4(V_.makeRotationFromEuler(ii)),h.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=f.reflectivity,h.ior.value=f.ior,h.refractionRatio.value=f.refractionRatio),f.lightMap&&(h.lightMap.value=f.lightMap,h.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,h.lightMapTransform)),f.aoMap&&(h.aoMap.value=f.aoMap,h.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,h.aoMapTransform))}function a(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,f.map&&(h.map.value=f.map,t(f.map,h.mapTransform))}function o(h,f){h.dashSize.value=f.dashSize,h.totalSize.value=f.dashSize+f.gapSize,h.scale.value=f.scale}function l(h,f,E,y){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.size.value=f.size*E,h.scale.value=y*.5,f.map&&(h.map.value=f.map,t(f.map,h.uvTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function c(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.rotation.value=f.rotation,f.map&&(h.map.value=f.map,t(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function u(h,f){h.specular.value.copy(f.specular),h.shininess.value=Math.max(f.shininess,1e-4)}function d(h,f){f.gradientMap&&(h.gradientMap.value=f.gradientMap)}function p(h,f){h.metalness.value=f.metalness,f.metalnessMap&&(h.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,h.metalnessMapTransform)),h.roughness.value=f.roughness,f.roughnessMap&&(h.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,h.roughnessMapTransform)),f.envMap&&(h.envMapIntensity.value=f.envMapIntensity)}function m(h,f,E){h.ior.value=f.ior,f.sheen>0&&(h.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),h.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(h.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,h.sheenColorMapTransform)),f.sheenRoughnessMap&&(h.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,h.sheenRoughnessMapTransform))),f.clearcoat>0&&(h.clearcoat.value=f.clearcoat,h.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(h.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,h.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(h.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Bt&&h.clearcoatNormalScale.value.negate())),f.dispersion>0&&(h.dispersion.value=f.dispersion),f.iridescence>0&&(h.iridescence.value=f.iridescence,h.iridescenceIOR.value=f.iridescenceIOR,h.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(h.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,h.iridescenceMapTransform)),f.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),f.transmission>0&&(h.transmission.value=f.transmission,h.transmissionSamplerMap.value=E.texture,h.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(h.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,h.transmissionMapTransform)),h.thickness.value=f.thickness,f.thicknessMap&&(h.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=f.attenuationDistance,h.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(h.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(h.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=f.specularIntensity,h.specularColor.value.copy(f.specularColor),f.specularColorMap&&(h.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,h.specularColorMapTransform)),f.specularIntensityMap&&(h.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,h.specularIntensityMapTransform))}function g(h,f){f.matcap&&(h.matcap.value=f.matcap)}function _(h,f){const E=e.get(f).light;h.referencePosition.value.setFromMatrixPosition(E.matrixWorld),h.nearDistance.value=E.shadow.camera.near,h.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $_(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){const v=y.program;i.uniformBlockBinding(E,v)}function c(E,y){let v=r[E.id];v===void 0&&(g(E),v=u(E),r[E.id]=v,E.addEventListener("dispose",h));const C=y.program;i.updateUBOMapping(E,C);const w=e.render.frame;s[E.id]!==w&&(p(E),s[E.id]=w)}function u(E){const y=d();E.__bindingPointIndex=y;const v=n.createBuffer(),C=E.__size,w=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const y=r[E.id],v=E.uniforms,C=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let w=0,A=v.length;w<A;w++){const I=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,M=I.length;S<M;S++){const L=I[S];if(m(L,w,S,C)===!0){const P=L.__offset,U=Array.isArray(L.value)?L.value:[L.value];let O=0;for(let D=0;D<U.length;D++){const N=U[D],B=_(N);typeof N=="number"||typeof N=="boolean"?(L.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,P+O,L.__data)):N.isMatrix3?(L.__data[0]=N.elements[0],L.__data[1]=N.elements[1],L.__data[2]=N.elements[2],L.__data[3]=0,L.__data[4]=N.elements[3],L.__data[5]=N.elements[4],L.__data[6]=N.elements[5],L.__data[7]=0,L.__data[8]=N.elements[6],L.__data[9]=N.elements[7],L.__data[10]=N.elements[8],L.__data[11]=0):(N.toArray(L.__data,O),O+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,y,v,C){const w=E.value,A=y+"_"+v;if(C[A]===void 0)return typeof w=="number"||typeof w=="boolean"?C[A]=w:C[A]=w.clone(),!0;{const I=C[A];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return C[A]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(E){const y=E.uniforms;let v=0;const C=16;for(let A=0,I=y.length;A<I;A++){const S=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,L=S.length;M<L;M++){const P=S[M],U=Array.isArray(P.value)?P.value:[P.value];for(let O=0,D=U.length;O<D;O++){const N=U[O],B=_(N),k=v%C,te=k%B.boundary,pe=k+te;v+=te,pe!==0&&C-pe<B.storage&&(v+=C-pe),P.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=v,v+=B.storage}}}const w=v%C;return w>0&&(v+=C-w),E.__size=v,E.__cache={},this}function _(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function h(E){const y=E.target;y.removeEventListener("dispose",h);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class W_{constructor(e={}){const{canvas:t=Tf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),_=new Int32Array(4);let h=null,f=null;const E=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let C=!1;this._outputColorSpace=Mt;let w=0,A=0,I=null,S=-1,M=null;const L=new gt,P=new gt;let U=null;const O=new rt(0);let D=0,N=t.width,B=t.height,k=1,te=null,pe=null;const _e=new gt(0,0,N,B),Ne=new gt(0,0,N,B);let Ge=!1;const Xe=new cu;let Oe=!1,Q=!1;const ee=new vt,ve=new X,Pe=new gt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function ge(){return I===null?k:1}let T=i;function Te(b,H){return t.getContext(b,H)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Do}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",ce,!1),T===null){const H="webgl2";if(T=Te(H,b),T===null)throw Te(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let me,xe,ye,qe,fe,Le,Ze,it,R,x,$,W,oe,J,we,de,G,se,j,ne,Se,le,ie,Ie;function F(){me=new tg(T),me.init(),le=new O_(T,me),xe=new Ym(T,me,e,le),ye=new N_(T,me),xe.reversedDepthBuffer&&p&&ye.buffers.depth.setReversed(!0),qe=new rg(T),fe=new y_,Le=new F_(T,me,ye,fe,xe,le,qe),Ze=new Km(v),it=new eg(v),R=new uh(T),ie=new Xm(T,R),x=new ng(T,R,qe,ie),$=new ag(T,x,R,qe),j=new sg(T,xe,Le),de=new jm(fe),W=new M_(v,Ze,it,me,xe,ie,de),oe=new G_(v,fe),J=new E_,we=new P_(me),se=new Wm(v,Ze,it,ye,$,m,l),G=new I_(v,$,xe),Ie=new $_(T,qe,xe,ye),ne=new qm(T,me,qe),Se=new ig(T,me,qe),qe.programs=W.programs,v.capabilities=xe,v.extensions=me,v.properties=fe,v.renderLists=J,v.shadowMap=G,v.state=ye,v.info=qe}F();const K=new H_(v,T);this.xr=K,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const b=me.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=me.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(N,B,!1))},this.getSize=function(b){return b.set(N,B)},this.setSize=function(b,H,q=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=b,B=H,t.width=Math.floor(b*k),t.height=Math.floor(H*k),q===!0&&(t.style.width=b+"px",t.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(N*k,B*k).floor()},this.setDrawingBufferSize=function(b,H,q){N=b,B=H,k=q,t.width=Math.floor(b*q),t.height=Math.floor(H*q),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(_e)},this.setViewport=function(b,H,q,Y){b.isVector4?_e.set(b.x,b.y,b.z,b.w):_e.set(b,H,q,Y),ye.viewport(L.copy(_e).multiplyScalar(k).round())},this.getScissor=function(b){return b.copy(Ne)},this.setScissor=function(b,H,q,Y){b.isVector4?Ne.set(b.x,b.y,b.z,b.w):Ne.set(b,H,q,Y),ye.scissor(P.copy(Ne).multiplyScalar(k).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(b){ye.setScissorTest(Ge=b)},this.setOpaqueSort=function(b){te=b},this.setTransparentSort=function(b){pe=b},this.getClearColor=function(b){return b.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(b=!0,H=!0,q=!0){let Y=0;if(b){let V=!1;if(I!==null){const ue=I.texture.format;V=ue===Bo||ue===Oo||ue===Fo}if(V){const ue=I.texture.type,be=ue===Pn||ue===hi||ue===hr||ue===pr||ue===Uo||ue===No,Re=se.getClearColor(),Ae=se.getClearAlpha(),ke=Re.r,ze=Re.g,Fe=Re.b;be?(g[0]=ke,g[1]=ze,g[2]=Fe,g[3]=Ae,T.clearBufferuiv(T.COLOR,0,g)):(_[0]=ke,_[1]=ze,_[2]=Fe,_[3]=Ae,T.clearBufferiv(T.COLOR,0,_))}else Y|=T.COLOR_BUFFER_BIT}H&&(Y|=T.DEPTH_BUFFER_BIT),q&&(Y|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),se.dispose(),J.dispose(),we.dispose(),fe.dispose(),Ze.dispose(),it.dispose(),$.dispose(),ie.dispose(),Ie.dispose(),W.dispose(),K.dispose(),K.removeEventListener("sessionstart",dn),K.removeEventListener("sessionend",$o),jn.stop()};function re(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const b=qe.autoReset,H=G.enabled,q=G.autoUpdate,Y=G.needsUpdate,V=G.type;F(),qe.autoReset=b,G.enabled=H,G.autoUpdate=q,G.needsUpdate=Y,G.type=V}function ce(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ae(b){const H=b.target;H.removeEventListener("dispose",ae),Ce(H)}function Ce(b){Ve(b),fe.remove(b)}function Ve(b){const H=fe.get(b).programs;H!==void 0&&(H.forEach(function(q){W.releaseProgram(q)}),b.isShaderMaterial&&W.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,q,Y,V,ue){H===null&&(H=Ee);const be=V.isMesh&&V.matrixWorld.determinant()<0,Re=Nu(b,H,q,Y,V);ye.setMaterial(Y,be);let Ae=q.index,ke=1;if(Y.wireframe===!0){if(Ae=x.getWireframeAttribute(q),Ae===void 0)return;ke=2}const ze=q.drawRange,Fe=q.attributes.position;let Ye=ze.start*ke,st=(ze.start+ze.count)*ke;ue!==null&&(Ye=Math.max(Ye,ue.start*ke),st=Math.min(st,(ue.start+ue.count)*ke)),Ae!==null?(Ye=Math.max(Ye,0),st=Math.min(st,Ae.count)):Fe!=null&&(Ye=Math.max(Ye,0),st=Math.min(st,Fe.count));const pt=st-Ye;if(pt<0||pt===1/0)return;ie.setup(V,Y,Re,q,Ae);let ut,ot=ne;if(Ae!==null&&(ut=R.get(Ae),ot=Se,ot.setIndex(ut)),V.isMesh)Y.wireframe===!0?(ye.setLineWidth(Y.wireframeLinewidth*ge()),ot.setMode(T.LINES)):ot.setMode(T.TRIANGLES);else if(V.isLine){let Be=Y.linewidth;Be===void 0&&(Be=1),ye.setLineWidth(Be*ge()),V.isLineSegments?ot.setMode(T.LINES):V.isLineLoop?ot.setMode(T.LINE_LOOP):ot.setMode(T.LINE_STRIP)}else V.isPoints?ot.setMode(T.POINTS):V.isSprite&&ot.setMode(T.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)vr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))ot.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Be=V._multiDrawStarts,ft=V._multiDrawCounts,Je=V._multiDrawCount,zt=Ae?R.get(Ae).bytesPerElement:1,vi=fe.get(Y).currentProgram.getUniforms();for(let Ht=0;Ht<Je;Ht++)vi.setValue(T,"_gl_DrawID",Ht),ot.render(Be[Ht]/zt,ft[Ht])}else if(V.isInstancedMesh)ot.renderInstances(Ye,pt,V.count);else if(q.isInstancedBufferGeometry){const Be=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ft=Math.min(q.instanceCount,Be);ot.renderInstances(Ye,pt,ft)}else ot.render(Ye,pt)};function ct(b,H,q){b.transparent===!0&&b.side===An&&b.forceSinglePass===!1?(b.side=Bt,b.needsUpdate=!0,Ar(b,H,q),b.side=qn,b.needsUpdate=!0,Ar(b,H,q),b.side=An):Ar(b,H,q)}this.compile=function(b,H,q=null){q===null&&(q=b),f=we.get(q),f.init(H),y.push(f),q.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),b!==q&&b.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights();const Y=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ue=V.material;if(ue)if(Array.isArray(ue))for(let be=0;be<ue.length;be++){const Re=ue[be];ct(Re,q,V),Y.add(Re)}else ct(ue,q,V),Y.add(ue)}),f=y.pop(),Y},this.compileAsync=function(b,H,q=null){const Y=this.compile(b,H,q);return new Promise(V=>{function ue(){if(Y.forEach(function(be){fe.get(be).currentProgram.isReady()&&Y.delete(be)}),Y.size===0){V(b);return}setTimeout(ue,10)}me.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let tt=null;function xn(b){tt&&tt(b)}function dn(){jn.stop()}function $o(){jn.start()}const jn=new pu;jn.setAnimationLoop(xn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(b){tt=b,K.setAnimationLoop(b),b===null?jn.stop():jn.start()},K.addEventListener("sessionstart",dn),K.addEventListener("sessionend",$o),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(H),H=K.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,H,I),f=we.get(b,y.length),f.init(H),y.push(f),ee.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Xe.setFromProjectionMatrix(ee,gn,H.reversedDepth),Q=this.localClippingEnabled,Oe=de.init(this.clippingPlanes,Q),h=J.get(b,E.length),h.init(),E.push(h),K.enabled===!0&&K.isPresenting===!0){const ue=v.xr.getDepthSensingMesh();ue!==null&&Es(ue,H,-1/0,v.sortObjects)}Es(b,H,0,v.sortObjects),h.finish(),v.sortObjects===!0&&h.sort(te,pe),He=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,He&&se.addToRenderList(h,b),this.info.render.frame++,Oe===!0&&de.beginShadows();const q=f.state.shadowsArray;G.render(q,b,H),Oe===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=h.opaque,V=h.transmissive;if(f.setupLights(),H.isArrayCamera){const ue=H.cameras;if(V.length>0)for(let be=0,Re=ue.length;be<Re;be++){const Ae=ue[be];Xo(Y,V,b,Ae)}He&&se.render(b);for(let be=0,Re=ue.length;be<Re;be++){const Ae=ue[be];Wo(h,b,Ae,Ae.viewport)}}else V.length>0&&Xo(Y,V,b,H),He&&se.render(b),Wo(h,b,H);I!==null&&A===0&&(Le.updateMultisampleRenderTarget(I),Le.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(v,b,H),ie.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(f=y[y.length-1],Oe===!0&&de.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?h=E[E.length-1]:h=null};function Es(b,H,q,Y){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Xe.intersectsSprite(b)){Y&&Pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ee);const be=$.update(b),Re=b.material;Re.visible&&h.push(b,be,Re,q,Pe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Xe.intersectsObject(b))){const be=$.update(b),Re=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Pe.copy(b.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Pe.copy(be.boundingSphere.center)),Pe.applyMatrix4(b.matrixWorld).applyMatrix4(ee)),Array.isArray(Re)){const Ae=be.groups;for(let ke=0,ze=Ae.length;ke<ze;ke++){const Fe=Ae[ke],Ye=Re[Fe.materialIndex];Ye&&Ye.visible&&h.push(b,be,Ye,q,Pe.z,Fe)}}else Re.visible&&h.push(b,be,Re,q,Pe.z,null)}}const ue=b.children;for(let be=0,Re=ue.length;be<Re;be++)Es(ue[be],H,q,Y)}function Wo(b,H,q,Y){const V=b.opaque,ue=b.transmissive,be=b.transparent;f.setupLightsView(q),Oe===!0&&de.setGlobalState(v.clippingPlanes,q),Y&&ye.viewport(L.copy(Y)),V.length>0&&wr(V,H,q),ue.length>0&&wr(ue,H,q),be.length>0&&wr(be,H,q),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Xo(b,H,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Y.id]===void 0&&(f.state.transmissionRenderTarget[Y.id]=new pi(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?xr:Pn,minFilter:ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ue=f.state.transmissionRenderTarget[Y.id],be=Y.viewport||L;ue.setSize(be.z*v.transmissionResolutionScale,be.w*v.transmissionResolutionScale);const Re=v.getRenderTarget(),Ae=v.getActiveCubeFace(),ke=v.getActiveMipmapLevel();v.setRenderTarget(ue),v.getClearColor(O),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear(),He&&se.render(q);const ze=v.toneMapping;v.toneMapping=Xn;const Fe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),f.setupLightsView(Y),Oe===!0&&de.setGlobalState(v.clippingPlanes,Y),wr(b,q,Y),Le.updateMultisampleRenderTarget(ue),Le.updateRenderTargetMipmap(ue),me.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let st=0,pt=H.length;st<pt;st++){const ut=H[st],ot=ut.object,Be=ut.geometry,ft=ut.material,Je=ut.group;if(ft.side===An&&ot.layers.test(Y.layers)){const zt=ft.side;ft.side=Bt,ft.needsUpdate=!0,qo(ot,q,Y,Be,ft,Je),ft.side=zt,ft.needsUpdate=!0,Ye=!0}}Ye===!0&&(Le.updateMultisampleRenderTarget(ue),Le.updateRenderTargetMipmap(ue))}v.setRenderTarget(Re,Ae,ke),v.setClearColor(O,D),Fe!==void 0&&(Y.viewport=Fe),v.toneMapping=ze}function wr(b,H,q){const Y=H.isScene===!0?H.overrideMaterial:null;for(let V=0,ue=b.length;V<ue;V++){const be=b[V],Re=be.object,Ae=be.geometry,ke=be.group;let ze=be.material;ze.allowOverride===!0&&Y!==null&&(ze=Y),Re.layers.test(q.layers)&&qo(Re,H,q,Ae,ze,ke)}}function qo(b,H,q,Y,V,ue){b.onBeforeRender(v,H,q,Y,V,ue),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(v,H,q,Y,b,ue),V.transparent===!0&&V.side===An&&V.forceSinglePass===!1?(V.side=Bt,V.needsUpdate=!0,v.renderBufferDirect(q,H,Y,V,b,ue),V.side=qn,V.needsUpdate=!0,v.renderBufferDirect(q,H,Y,V,b,ue),V.side=An):v.renderBufferDirect(q,H,Y,V,b,ue),b.onAfterRender(v,H,q,Y,V,ue)}function Ar(b,H,q){H.isScene!==!0&&(H=Ee);const Y=fe.get(b),V=f.state.lights,ue=f.state.shadowsArray,be=V.state.version,Re=W.getParameters(b,V.state,ue,H,q),Ae=W.getProgramCacheKey(Re);let ke=Y.programs;Y.environment=b.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(b.isMeshStandardMaterial?it:Ze).get(b.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,ke===void 0&&(b.addEventListener("dispose",ae),ke=new Map,Y.programs=ke);let ze=ke.get(Ae);if(ze!==void 0){if(Y.currentProgram===ze&&Y.lightsStateVersion===be)return jo(b,Re),ze}else Re.uniforms=W.getUniforms(b),b.onBeforeCompile(Re,v),ze=W.acquireProgram(Re,Ae),ke.set(Ae,ze),Y.uniforms=Re.uniforms;const Fe=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=de.uniform),jo(b,Re),Y.needsLights=Ou(b),Y.lightsStateVersion=be,Y.needsLights&&(Fe.ambientLightColor.value=V.state.ambient,Fe.lightProbe.value=V.state.probe,Fe.directionalLights.value=V.state.directional,Fe.directionalLightShadows.value=V.state.directionalShadow,Fe.spotLights.value=V.state.spot,Fe.spotLightShadows.value=V.state.spotShadow,Fe.rectAreaLights.value=V.state.rectArea,Fe.ltc_1.value=V.state.rectAreaLTC1,Fe.ltc_2.value=V.state.rectAreaLTC2,Fe.pointLights.value=V.state.point,Fe.pointLightShadows.value=V.state.pointShadow,Fe.hemisphereLights.value=V.state.hemi,Fe.directionalShadowMap.value=V.state.directionalShadowMap,Fe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Fe.spotShadowMap.value=V.state.spotShadowMap,Fe.spotLightMatrix.value=V.state.spotLightMatrix,Fe.spotLightMap.value=V.state.spotLightMap,Fe.pointShadowMap.value=V.state.pointShadowMap,Fe.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=ze,Y.uniformsList=null,ze}function Yo(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=cs.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function jo(b,H){const q=fe.get(b);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function Nu(b,H,q,Y,V){H.isScene!==!0&&(H=Ee),Le.resetTextureUnits();const ue=H.fog,be=Y.isMeshStandardMaterial?H.environment:null,Re=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ji,Ae=(Y.isMeshStandardMaterial?it:Ze).get(Y.envMap||be),ke=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ze=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Fe=!!q.morphAttributes.position,Ye=!!q.morphAttributes.normal,st=!!q.morphAttributes.color;let pt=Xn;Y.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(pt=v.toneMapping);const ut=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ot=ut!==void 0?ut.length:0,Be=fe.get(Y),ft=f.state.lights;if(Oe===!0&&(Q===!0||b!==M)){const Lt=b===M&&Y.id===S;de.setState(Y,b,Lt)}let Je=!1;Y.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==ft.state.version||Be.outputColorSpace!==Re||V.isBatchedMesh&&Be.batching===!1||!V.isBatchedMesh&&Be.batching===!0||V.isBatchedMesh&&Be.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Be.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Be.instancing===!1||!V.isInstancedMesh&&Be.instancing===!0||V.isSkinnedMesh&&Be.skinning===!1||!V.isSkinnedMesh&&Be.skinning===!0||V.isInstancedMesh&&Be.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Be.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Be.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Be.instancingMorph===!1&&V.morphTexture!==null||Be.envMap!==Ae||Y.fog===!0&&Be.fog!==ue||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==de.numPlanes||Be.numIntersection!==de.numIntersection)||Be.vertexAlphas!==ke||Be.vertexTangents!==ze||Be.morphTargets!==Fe||Be.morphNormals!==Ye||Be.morphColors!==st||Be.toneMapping!==pt||Be.morphTargetsCount!==ot)&&(Je=!0):(Je=!0,Be.__version=Y.version);let zt=Be.currentProgram;Je===!0&&(zt=Ar(Y,H,V));let vi=!1,Ht=!1,tr=!1;const ht=zt.getUniforms(),qt=Be.uniforms;if(ye.useProgram(zt.program)&&(vi=!0,Ht=!0,tr=!0),Y.id!==S&&(S=Y.id,Ht=!0),vi||M!==b){ye.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ht.setValue(T,"projectionMatrix",b.projectionMatrix),ht.setValue(T,"viewMatrix",b.matrixWorldInverse);const Nt=ht.map.cameraPosition;Nt!==void 0&&Nt.setValue(T,ve.setFromMatrixPosition(b.matrixWorld)),xe.logarithmicDepthBuffer&&ht.setValue(T,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ht.setValue(T,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Ht=!0,tr=!0)}if(V.isSkinnedMesh){ht.setOptional(T,V,"bindMatrix"),ht.setOptional(T,V,"bindMatrixInverse");const Lt=V.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),ht.setValue(T,"boneTexture",Lt.boneTexture,Le))}V.isBatchedMesh&&(ht.setOptional(T,V,"batchingTexture"),ht.setValue(T,"batchingTexture",V._matricesTexture,Le),ht.setOptional(T,V,"batchingIdTexture"),ht.setValue(T,"batchingIdTexture",V._indirectTexture,Le),ht.setOptional(T,V,"batchingColorTexture"),V._colorsTexture!==null&&ht.setValue(T,"batchingColorTexture",V._colorsTexture,Le));const Yt=q.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&j.update(V,q,zt),(Ht||Be.receiveShadow!==V.receiveShadow)&&(Be.receiveShadow=V.receiveShadow,ht.setValue(T,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(qt.envMap.value=Ae,qt.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&H.environment!==null&&(qt.envMapIntensity.value=H.environmentIntensity),Ht&&(ht.setValue(T,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&Fu(qt,tr),ue&&Y.fog===!0&&oe.refreshFogUniforms(qt,ue),oe.refreshMaterialUniforms(qt,Y,k,B,f.state.transmissionRenderTarget[b.id]),cs.upload(T,Yo(Be),qt,Le)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(cs.upload(T,Yo(Be),qt,Le),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ht.setValue(T,"center",V.center),ht.setValue(T,"modelViewMatrix",V.modelViewMatrix),ht.setValue(T,"normalMatrix",V.normalMatrix),ht.setValue(T,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Lt=Y.uniformsGroups;for(let Nt=0,Ts=Lt.length;Nt<Ts;Nt++){const Kn=Lt[Nt];Ie.update(Kn,zt),Ie.bind(Kn,zt)}}return zt}function Fu(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function Ou(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,H,q){const Y=fe.get(b);Y.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),fe.get(b.texture).__webglTexture=H,fe.get(b.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,H){const q=fe.get(b);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0};const Bu=T.createFramebuffer();this.setRenderTarget=function(b,H=0,q=0){I=b,w=H,A=q;let Y=!0,V=null,ue=!1,be=!1;if(b){const Ae=fe.get(b);if(Ae.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(T.FRAMEBUFFER,null),Y=!1;else if(Ae.__webglFramebuffer===void 0)Le.setupRenderTarget(b);else if(Ae.__hasExternalTextures)Le.rebindTextures(b,fe.get(b.texture).__webglTexture,fe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Fe=b.depthTexture;if(Ae.__boundDepthTexture!==Fe){if(Fe!==null&&fe.has(Fe)&&(b.width!==Fe.image.width||b.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Le.setupDepthRenderbuffer(b)}}const ke=b.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(be=!0);const ze=fe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ze[H])?V=ze[H][q]:V=ze[H],ue=!0):b.samples>0&&Le.useMultisampledRTT(b)===!1?V=fe.get(b).__webglMultisampledFramebuffer:Array.isArray(ze)?V=ze[q]:V=ze,L.copy(b.viewport),P.copy(b.scissor),U=b.scissorTest}else L.copy(_e).multiplyScalar(k).floor(),P.copy(Ne).multiplyScalar(k).floor(),U=Ge;if(q!==0&&(V=Bu),ye.bindFramebuffer(T.FRAMEBUFFER,V)&&Y&&ye.drawBuffers(b,V),ye.viewport(L),ye.scissor(P),ye.setScissorTest(U),ue){const Ae=fe.get(b.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ae.__webglTexture,q)}else if(be){const Ae=H;for(let ke=0;ke<b.textures.length;ke++){const ze=fe.get(b.textures[ke]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+ke,ze.__webglTexture,q,Ae)}}else if(b!==null&&q!==0){const Ae=fe.get(b.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ae.__webglTexture,q)}S=-1},this.readRenderTargetPixels=function(b,H,q,Y,V,ue,be,Re=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=fe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Ae=Ae[be]),Ae){ye.bindFramebuffer(T.FRAMEBUFFER,Ae);try{const ke=b.textures[Re],ze=ke.format,Fe=ke.type;if(!xe.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-Y&&q>=0&&q<=b.height-V&&(b.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Re),T.readPixels(H,q,Y,V,le.convert(ze),le.convert(Fe),ue))}finally{const ke=I!==null?fe.get(I).__webglFramebuffer:null;ye.bindFramebuffer(T.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(b,H,q,Y,V,ue,be,Re=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=fe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Ae=Ae[be]),Ae)if(H>=0&&H<=b.width-Y&&q>=0&&q<=b.height-V){ye.bindFramebuffer(T.FRAMEBUFFER,Ae);const ke=b.textures[Re],ze=ke.format,Fe=ke.type;if(!xe.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ye),T.bufferData(T.PIXEL_PACK_BUFFER,ue.byteLength,T.STREAM_READ),b.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Re),T.readPixels(H,q,Y,V,le.convert(ze),le.convert(Fe),0);const st=I!==null?fe.get(I).__webglFramebuffer:null;ye.bindFramebuffer(T.FRAMEBUFFER,st);const pt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await wf(T,pt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ye),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ue),T.deleteBuffer(Ye),T.deleteSync(pt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,H=null,q=0){const Y=Math.pow(2,-q),V=Math.floor(b.image.width*Y),ue=Math.floor(b.image.height*Y),be=H!==null?H.x:0,Re=H!==null?H.y:0;Le.setTexture2D(b,0),T.copyTexSubImage2D(T.TEXTURE_2D,q,0,0,be,Re,V,ue),ye.unbindTexture()};const ku=T.createFramebuffer(),zu=T.createFramebuffer();this.copyTextureToTexture=function(b,H,q=null,Y=null,V=0,ue=null){ue===null&&(V!==0?(vr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=V,V=0):ue=0);let be,Re,Ae,ke,ze,Fe,Ye,st,pt;const ut=b.isCompressedTexture?b.mipmaps[ue]:b.image;if(q!==null)be=q.max.x-q.min.x,Re=q.max.y-q.min.y,Ae=q.isBox3?q.max.z-q.min.z:1,ke=q.min.x,ze=q.min.y,Fe=q.isBox3?q.min.z:0;else{const Yt=Math.pow(2,-V);be=Math.floor(ut.width*Yt),Re=Math.floor(ut.height*Yt),b.isDataArrayTexture?Ae=ut.depth:b.isData3DTexture?Ae=Math.floor(ut.depth*Yt):Ae=1,ke=0,ze=0,Fe=0}Y!==null?(Ye=Y.x,st=Y.y,pt=Y.z):(Ye=0,st=0,pt=0);const ot=le.convert(H.format),Be=le.convert(H.type);let ft;H.isData3DTexture?(Le.setTexture3D(H,0),ft=T.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Le.setTexture2DArray(H,0),ft=T.TEXTURE_2D_ARRAY):(Le.setTexture2D(H,0),ft=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,H.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,H.unpackAlignment);const Je=T.getParameter(T.UNPACK_ROW_LENGTH),zt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),vi=T.getParameter(T.UNPACK_SKIP_PIXELS),Ht=T.getParameter(T.UNPACK_SKIP_ROWS),tr=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ut.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ut.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ke),T.pixelStorei(T.UNPACK_SKIP_ROWS,ze),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Fe);const ht=b.isDataArrayTexture||b.isData3DTexture,qt=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){const Yt=fe.get(b),Lt=fe.get(H),Nt=fe.get(Yt.__renderTarget),Ts=fe.get(Lt.__renderTarget);ye.bindFramebuffer(T.READ_FRAMEBUFFER,Nt.__webglFramebuffer),ye.bindFramebuffer(T.DRAW_FRAMEBUFFER,Ts.__webglFramebuffer);for(let Kn=0;Kn<Ae;Kn++)ht&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,fe.get(b).__webglTexture,V,Fe+Kn),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,fe.get(H).__webglTexture,ue,pt+Kn)),T.blitFramebuffer(ke,ze,be,Re,Ye,st,be,Re,T.DEPTH_BUFFER_BIT,T.NEAREST);ye.bindFramebuffer(T.READ_FRAMEBUFFER,null),ye.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||fe.has(b)){const Yt=fe.get(b),Lt=fe.get(H);ye.bindFramebuffer(T.READ_FRAMEBUFFER,ku),ye.bindFramebuffer(T.DRAW_FRAMEBUFFER,zu);for(let Nt=0;Nt<Ae;Nt++)ht?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Yt.__webglTexture,V,Fe+Nt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Yt.__webglTexture,V),qt?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Lt.__webglTexture,ue,pt+Nt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Lt.__webglTexture,ue),V!==0?T.blitFramebuffer(ke,ze,be,Re,Ye,st,be,Re,T.COLOR_BUFFER_BIT,T.NEAREST):qt?T.copyTexSubImage3D(ft,ue,Ye,st,pt+Nt,ke,ze,be,Re):T.copyTexSubImage2D(ft,ue,Ye,st,ke,ze,be,Re);ye.bindFramebuffer(T.READ_FRAMEBUFFER,null),ye.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else qt?b.isDataTexture||b.isData3DTexture?T.texSubImage3D(ft,ue,Ye,st,pt,be,Re,Ae,ot,Be,ut.data):H.isCompressedArrayTexture?T.compressedTexSubImage3D(ft,ue,Ye,st,pt,be,Re,Ae,ot,ut.data):T.texSubImage3D(ft,ue,Ye,st,pt,be,Re,Ae,ot,Be,ut):b.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,ue,Ye,st,be,Re,ot,Be,ut.data):b.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,ue,Ye,st,ut.width,ut.height,ot,ut.data):T.texSubImage2D(T.TEXTURE_2D,ue,Ye,st,be,Re,ot,Be,ut);T.pixelStorei(T.UNPACK_ROW_LENGTH,Je),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,zt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,vi),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ht),T.pixelStorei(T.UNPACK_SKIP_IMAGES,tr),ue===0&&H.generateMipmaps&&T.generateMipmap(ft),ye.unbindTexture()},this.initRenderTarget=function(b){fe.get(b).__webglFramebuffer===void 0&&Le.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Le.setTextureCube(b,0):b.isData3DTexture?Le.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Le.setTexture2DArray(b,0):Le.setTexture2D(b,0),ye.unbindTexture()},this.resetState=function(){w=0,A=0,I=null,ye.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function X_(){const n=new Set(["berry","acorn","crouch","mushroom"]),e={},t=matchMedia("(prefers-reduced-motion: reduce)");let i="berry",r="berry",s=!1,a=!1,o=!1,l=!1,c=null,u=1,d=performance.now(),p=0;const m=Promise.all(["approach","berry","pick","acorn","crouch","jump","mushroom","harvest"].map(async h=>{const f=await fetch(`/acorn-witch-atelier/assets/2d/gather/${h}.mp4?v=original-tenth-21`);if(!f.ok)throw new Error("森林采集动作载入失败");const E=document.createElement("video");E.muted=!0,E.playsInline=!0,E.loop=n.has(h),E.playbackRate=h==="berry"?.1:1,E.preload="auto";const y=URL.createObjectURL(await f.blob());await new Promise((C,w)=>{E.onloadeddata=C,E.onerror=()=>w(new Error("森林采集动作解码失败")),E.src=y,E.load()});const v=new ls(E);v.colorSpace=Mt,e[h]={video:E,texture:v},E.onended=()=>{i===h&&(h==="approach"?_("berry"):l=!0)}}));function g(){s&&!a&&!document.hidden&&!t.matches&&!l&&!o&&e[i].video.play().catch(h=>{h.name!=="AbortError"&&console.error(h)})}function _(h){const f=++p;r=h,l=!1,o=!0;const E=e[i],y=e[h];E.video.pause();const v=()=>{f!==p||!s||(c=i!==h?E.texture:null,i=h,u=c?0:1,d=performance.now(),o=!1,g())};y.video.currentTime>0?(y.video.addEventListener("seeked",v,{once:!0}),y.video.currentTime=0):v()}return document.addEventListener("visibilitychange",()=>{var h;document.hidden?(h=e[i])==null||h.video.pause():g()}),{ready:m,play:_,enter(){s=!0,_(t.matches?"berry":"approach")},leave(){s=!1,p++,o=!1;for(const h of Object.values(e))h.video.pause()},setPaused(h){var f;a=h,d=performance.now(),h?(f=e[i])==null||f.video.pause():g()},tick(){const h=performance.now();s&&!a&&!document.hidden&&(u=Math.min(1,u+(h-d)/160)),d=h},get texture(){var h;return(h=e[i])==null?void 0:h.texture},get previousTexture(){return c},get blend(){return 1-u},info(){var h,f;return{action:r,time:((h=e[i])==null?void 0:h.video.currentTime)??0,active:s,seeking:o,complete:l||t.matches,paused:((f=e[i])==null?void 0:f.video.paused)??!0,muted:!0,source:"reference-video",loop:n.has(i)}}}}const ur={"girl-standing":{eyes:[[.385,.378],[.565,.362]],seeds:[[.714,.432],[.225,.449]]},"girl-reading":{eyes:[[.474,.388],[.606,.386]],seeds:[]},"girl-cooking":{eyes:[[.43,.384],[.613,.369]],seeds:[[.7612,.4402],[.2712,.4562],[.72768,.44305],[.24554,.45957]]},"girl-tasting":{seeds:[]},"girl-adventure-cooking":{seeds:[[.7855,.4368],[.2615,.4516],[.77542,.43736],[.24246,.45501]],eyes:[[.4307,.3847],[.614,.3696]]},"girl-adventure-reading":{seeds:[[.2393,.3958],[.25781,.39974],[.6748,.44596],[.7168,.84375]],eyes:[[.4819,.3818],[.6138,.3799]]},"girl-adventure-standing":{seeds:[[.7528,.4369],[.2071,.4386],[.76281,.44089],[.1637,.43918]],eyes:[[.4003,.3669],[.5802,.3535]]},"girl-adventure-tasting":{seeds:[]},"girl-forest-cooking":{seeds:[[.743,.436],[.2771,.4496],[.7743,.43825],[.23128,.45134]],eyes:[[.424,.3785],[.6,.3654]]},"girl-forest-reading":{seeds:[[.2471,.416],[.23438,.41732],[.61328,.45117],[.71387,.85221]],eyes:[[.4722,.3857],[.6045,.3848]]},"girl-forest-standing":{seeds:[[.7272,.4415],[.2372,.4529],[.67372,.44032],[.20824,.45174]],eyes:[[.3925,.3775],[.5757,.3621]]},"girl-forest-tasting":{seeds:[[.2831,.5087],[.25026,.50929]]},"girl-school-cooking":{seeds:[[.7553,.43],[.2715,.4368],[.1933,.4795],[.77654,.43109],[.2581,.44077]],eyes:[[.4274,.3693],[.6056,.3554]]},"girl-school-reading":{seeds:[[.2646,.4121],[.29688,.41667],[.64746,.45182]],eyes:[[.4722,.3861],[.6045,.3844]]},"girl-school-standing":{seeds:[[.235,.45],[.22272,.44832]],eyes:[[.3859,.3775],[.5674,.3626]]},"girl-school-tasting":{seeds:[[.7395,.4808],[.2728,.505],[.73436,.48637],[.37949,.5062]]},"girl-star-cooking":{seeds:[[.7341,.4394],[.2816,.4502],[.1944,.4883],[.79106,.44109],[.2324,.45191]],eyes:[[.4212,.3768],[.6,.3628]]},"girl-star-reading":{seeds:[[.67676,.45573],[.33301,.4401]],eyes:[[.5034,.3857],[.635,.384]]},"girl-star-standing":{seeds:[[.2,.42],[.76,.43]],eyes:[[.389,.355],[.573,.342]],source:"assets/2d/outfits/star-standing-hat.png"},"girl-star-tasting":{seeds:[[.2813,.4919],[.7392,.4969],[.37269,.49442],[.74846,.49752]]},"girl-tea-cooking":{seeds:[[.7598,.4339],[.267,.4505],[.79888,.43793],[.2648,.4533]],eyes:[[.4296,.3813],[.6134,.367]]},"girl-tea-reading":{seeds:[[.2568,.416],[.20996,.41927],[.64062,.44401],[.68262,.85026]],eyes:[[.4697,.3831],[.6021,.3809]]},"girl-tea-standing":{seeds:[[.7397,.4469],[.2436,.4509],[.7842,.44286],[.22247,.45029]],eyes:[[.4032,.3786],[.5868,.3631]]},"girl-tea-tasting":{seeds:[[.2841,.4944],[.27282,.49628]]}};function Ra(n,e,t){const i=document.createElement("video");i.muted=!0,i.playsInline=!0,i.preload="auto";const r=matchMedia("(prefers-reduced-motion: reduce)");let s=!1,a=t,o=!1,l=!1;const c=(async()=>{const m=await fetch(n);if(!m.ok)throw new Error(`参考动作视频载入失败：${m.status}`);const g=URL.createObjectURL(await m.blob());await new Promise((_,h)=>{i.addEventListener("loadeddata",()=>{i.currentTime=e[t][0]},{once:!0}),i.addEventListener("seeked",_,{once:!0}),i.addEventListener("error",()=>h(new Error("参考动作视频解码失败")),{once:!0}),i.src=g,i.load()})})();function u(){s&&!l&&!o&&!document.hidden&&!r.matches&&i.play().catch(m=>{m.name!=="AbortError"&&console.error("参考动作无法播放",m)})}i.addEventListener("seeked",u);function d(m,g=!1){i.pause(),i.muted=!g,a=m,o=!1,i.currentTime=e[a][0]}function p(){if(!s||l||o||i.seeking||r.matches)return;const[m,g,_]=e[a];i.currentTime>=g-(_?0:.025)&&(_?i.currentTime=m:(i.pause(),o=!0))}return document.addEventListener("visibilitychange",()=>{document.hidden?i.pause():i.seeking||u()}),r.addEventListener("change",()=>{s&&d(a)}),{video:i,ready:c,tick:p,play:d,setPaused(m){l=m,m?i.pause():i.seeking||u()},enter(){s=!0,d(t)},leave(){s=!1,i.pause(),i.muted=!0},info(){return{action:a,time:i.currentTime,active:s,seeking:i.seeking,complete:o||r.matches,paused:i.paused,muted:i.muted,source:"reference-video"}}}}const hn=720,Dt=1280,q_=["standing","reading","cooking","tasting"],is=["home-bg","home-arm-side","kitchen-bg","forest-bg","dressing-bg","school-bg","classroom-frame-v2","classroom-clean-top","feedback-plate",...$i.flatMap(n=>q_.map(e=>n.id==="acorn"?`girl-${e}`:`girl-${n.id}-${e}`)),"tart"],Ca={"girl-standing":[[.385,.378],[.565,.362]],"girl-reading":[[.474,.388],[.606,.386]],"girl-cooking":[[.43,.384],[.613,.369]]};function Y_(n,e=()=>{}){const t=new W_({canvas:n,antialias:!0,alpha:!1,preserveDrawingBuffer:!0});t.setPixelRatio(Math.min(devicePixelRatio,2)),t.setClearColor("#354b36");const i=new Zf,r=new hu(-360,360,640,-640,.1,20);r.position.z=10;const s={},a={},o={},l={},c={},u={},d={};let p=null,m=null,g=!1,_=-1e3,h=-1e4,f="",E=!0,y="home",v="idle",C="acorn",w=!1,A=0,I=!1,S,M=0,L=performance.now();const P=Ra("/acorn-witch-atelier/assets/2d/classroom-motion-v2.mp4",{listen:[4.95,5.2,!0],think:[5.15,6.25,!0],correct:[8.75,10.15,!1],retry:[7.1,8.42,!1],celebrate:[12.35,13.7,!1]},"listen"),U=new ls(P.video);U.colorSpace=Mt;const O=Ra("/acorn-witch-atelier/assets/2d/baking-motion-v2.mp4",{prepare:[4.05,4.15,!1],ingredients:[4.18,6.02,!1],mix:[6.15,7.1,!0],mixed:[6.8,7.1,!1],bake:[8.75,9.85,!0],spell:[9.4,9.85,!0],taste:[10.1,13.72,!1]},"prepare"),D=new ls(O.video);D.colorSpace=Mt;const N=X_(),B=matchMedia("(prefers-reduced-motion: reduce)"),k=new St(new Ot(hn,Dt),new Kt({depthTest:!1}));i.add(k);const te=Ra("/acorn-witch-atelier/assets/2d/shop-motion.mp4",{welcome:[.05,1.05,!0],child:[1.35,2.65,!0],queue:[4.18,5.85,!0],vip:[9.18,9.85,!0],positive:[7.58,8.35,!1],negative:[6.1,7,!1],summary:[12.85,14.02,!1],closing:[14.3,15.02,!1]},"welcome"),pe=new ls(te.video);pe.colorSpace=Mt;const _e=new St(new Ot(hn,Dt),new Kt({transparent:!0,depthTest:!1,depthWrite:!1}));_e.renderOrder=1,_e.visible=!1,i.add(_e);const Ne=[],Ge=[];let Xe,Oe;const Q=new St(new Ot(hn,Dt*(1-.716)),new Kt({depthTest:!1,transparent:!0}));Q.position.y=-Dt*.716/2,Q.renderOrder=3,i.add(Q);const ee=new St(new Ot(hn,Dt),new Kt({transparent:!0,depthTest:!1,depthWrite:!1}));ee.renderOrder=4,i.add(ee);const ve=document.createElement("canvas");ve.width=256,ve.height=128;const Pe=ve.getContext("2d");Pe.scale(1,.5);const Ee=Pe.createRadialGradient(128,128,20,128,128,128);Ee.addColorStop(0,"#231a12aa"),Ee.addColorStop(1,"#231a1200"),Pe.fillStyle=Ee,Pe.fillRect(0,0,256,256);const He=new St(new Ot(320,90),new Kt({map:new dr(ve),transparent:!0,depthTest:!1,opacity:.62}));He.position.set(-10,-285,0),He.renderOrder=1,i.add(He);const ge=(G,se=2)=>{const j=new St(new Ot(1,1,36,52),new Kt({map:G,transparent:!0,depthTest:!1,depthWrite:!1}));return j.renderOrder=se,i.add(j),j};function T(G){var le;const se=G.split("-").at(-1),j=((le=ur[G])==null?void 0:le.eyes)??Ca[`girl-${se}`],ne=ge(s[G]);ne.userData.key=G;const Se={time:{value:0},moving:{value:0},joy:{value:0},blink:{value:0},showcase:{value:new X},headScale:{value:G.endsWith("-reading")?1.12:1},eyeA:{value:new nt(...(j==null?void 0:j[0])??[-2,-2])},eyeB:{value:new nt(...(j==null?void 0:j[1])??[-2,-2])}};return ne.material.onBeforeCompile=ie=>{Object.assign(ie.uniforms,Se),ie.vertexShader=`uniform float time; uniform float moving; uniform float joy; uniform float headScale; uniform vec3 showcase;
`+ie.vertexShader,ie.vertexShader=ie.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
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
   `),ie.fragmentShader=`uniform float blink; uniform vec2 eyeA; uniform vec2 eyeB; 
`+ie.fragmentShader,ie.fragmentShader=ie.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
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
   `)},ne.material.customProgramCacheKey=()=>G,ne.userData.uniforms=Se,a[G]=ne,ne}const Te=document.createElement("canvas");Te.width=Te.height=64;const me=Te.getContext("2d"),xe=me.createRadialGradient(32,32,0,32,32,32);xe.addColorStop(0,"#fff7d7"),xe.addColorStop(.15,"#ffe2a0cc"),xe.addColorStop(1,"#ffe2a000"),me.fillStyle=xe,me.fillRect(0,0,64,64);const ye=new In,qe=new Float32Array(34*3);ye.setAttribute("position",new ln(qe,3));const fe=new th(ye,new uu({map:new dr(Te),color:"#ffe5b0",size:10,transparent:!0,opacity:.45,depthTest:!1,depthWrite:!1,sizeAttenuation:!1}));fe.renderOrder=5,i.add(fe);function Le(G,se,j,ne){G.scale.set(ne*G.material.map.image.width/G.material.map.image.height,ne,1),G.position.set(se-360,640-j-ne/2,0)}function Ze(){if(!I)return;const G=y==="shop",se=y==="classroom",j=y==="school",ne=y==="kitchen",Se=y==="garden"||y==="festival",le=["wardrobe","portrait"].includes(y),ie=ne&&O.info().active,Ie=y==="garden",F=le&&performance.now()-h<180?f:C;k.material.map=Ie?N.texture:G?pe:se?U:ie?D:s[j?"school-bg":le?"dressing-bg":ne?"kitchen-bg":Se?"forest-bg":"home-bg"],k.material.needsUpdate=!0,Q.visible=ne&&!ie,fe.visible=!G&&!se&&!ie&&!Ie;for(const he of Ge)he.visible=ie;for(const he of Ne)he.visible=se;ee.visible=["home","story"].includes(y),He.visible=ee.visible||le,He.position.y=640-(le?1080:925),He.scale.set(le?.7:1,le?.5:1,1),ee.material.map=s["home-arm-side"],ee.material.needsUpdate=!0,ne&&(Q.material.map=s.counter,Q.material.needsUpdate=!0);for(const he of Object.values(a))he.visible=!1;let K="girl-standing";ne?K=v==="taste"?"girl-tasting":"girl-cooking":["home","story"].includes(y)&&(K="girl-reading"),F!=="acorn"&&(K=K.replace("girl-",`girl-${F}-`)),m&&!ne&&(K=`girl-custom-${m}-${K.endsWith("-reading")?"reading":"standing"}`);const re=a[K];re.visible=!G&&!j&&!se&&!ie&&!Ie,ne?Le(re,335,195,1110):K.endsWith("-reading")?Le(re,345,245,930):le?Le(re,355,y==="wardrobe"?175:152,y==="wardrobe"?730:940):Le(re,350,235,Se?880:925),S.visible=y==="home"&&w,fe.material.opacity=v==="bake"?.8:Se?.65:.32}const it=new oh;let R=0;const x=Promise.all(["ribbon","moon","leaf"].map(async G=>{const se=new Image;se.src=`/acorn-witch-atelier/assets/rewards/part-${G}.webp`,await se.decode(),u[G]=se})),$=Promise.all([x,N.ready,P.ready,O.ready,te.ready,...is.map(async G=>{var j;let se=await it.loadAsync((j=ur[G])!=null&&j.source?`/acorn-witch-atelier/${ur[G].source}`:G==="girl-standing"?"/acorn-witch-atelier/assets/2d/girl-original.webp":G.startsWith("girl-")&&G.split("-").length===3?`/acorn-witch-atelier/assets/2d/outfits/${G.slice(5)}.webp`:`/acorn-witch-atelier/assets/2d/${G}.webp`);if(G.startsWith("girl-")){const ne=se;se=bc(ne.image,G),ne.dispose()}se.colorSpace=Mt,se.anisotropy=Math.min(4,t.capabilities.getMaxAnisotropy()),s[G]=se,e(++R,is.length)})]).then(()=>{for(const[le,ie,Ie]of[["classroom-clean-top",[[0,.16]],Ne],["classroom-frame-v2",[[.775,1]],Ne]])for(const[F,K]of ie){const re=s[le].clone();re.repeat.set(1,K-F),re.offset.set(0,1-K),re.needsUpdate=!0;const he=new St(new Ot(hn,Dt*(K-F)),new Kt({map:re,depthTest:!1}));he.position.y=640-Dt*(F+K)/2,he.renderOrder=1,le==="classroom-clean-top"&&(he.material.transparent=!0,he.material.onBeforeCompile=ce=>{ce.fragmentShader=ce.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
 diffuseColor.a *= smoothstep(0.84,0.85,vMapUv.y);`)}),i.add(he),Ie.push(he)}const G=document.createElement("canvas");G.width=te.video.videoWidth,G.height=te.video.videoHeight,G.getContext("2d").drawImage(te.video,0,0);const se=new dr(G);se.colorSpace=Mt,se.repeat.set(1,.34),se.offset.set(0,.66),Oe=new St(new Ot(hn,Dt*.34),new Kt({map:se,depthTest:!1})),Oe.position.y=Dt*.33,Oe.renderOrder=1,Oe.visible=!1,i.add(Oe);const j=s["feedback-plate"].clone();j.repeat.set(.238,.12),j.offset.set(.762,1-.505),j.needsUpdate=!0,Xe=new St(new Ot(hn*.238,Dt*.12),new Kt({map:j,depthTest:!1})),Xe.position.set(hn*(.881-.5),Dt*(.5-.445),0),Xe.renderOrder=1,Xe.visible=!1,i.add(Xe);const ne=new St(new Ot(hn,Dt*.04),new Kt({color:"#513a27",depthTest:!1}));ne.position.y=-Dt*.48,ne.renderOrder=1,i.add(ne),Ge.push(ne);const Se=s["kitchen-bg"].clone();Se.repeat.set(1,1-.716),Se.offset.set(0,0),Se.needsUpdate=!0,s.counter=Se;for(const le of is.filter(ie=>ie.startsWith("girl-"))){const ie=document.createElement("canvas");ie.width=s[le].image.width,ie.height=s[le].image.height,ie.getContext("2d").drawImage(s[le].image,0,0),c[le]=ie,T(le)}W();for(const le of $i){const ie=document.createElement("canvas");ie.width=110,ie.height=210;const Ie=s[le.id==="acorn"?"girl-standing":`girl-${le.id}-standing`].image,F=Math.min(110/Ie.width,210/Ie.height);ie.getContext("2d").drawImage(Ie,(110-Ie.width*F)/2,0,Ie.width*F,Ie.height*F),o[le.id]=ie.toDataURL()}S=ge(s.tart,1),Le(S,642,779,110),I=!0,Ze(),we()});function W(){var G;for(const[se,j]of Object.entries(c)){const ne=s[se].image,Se=ne.getContext("2d"),le=ne.width,ie=ne.height,Ie=se.split("-").at(-1),F=((G=ur[se])==null?void 0:G.eyes)??Ca["girl-"+Ie]??Ca["girl-standing"];if(Se.clearRect(0,0,le,ie),Se.drawImage(j,0,0),delete l[se],p){const K=u[p],re=F[1];if(p==="moon")for(const he of F){const ce=K.width/2;Se.drawImage(K,he===F[0]?0:ce,0,ce,K.height,le*(he[0]+(he===F[0]?-.12:.12))-.025*le,ie*(he[1]+.075),le*.05,le*.05*K.height/ce)}else{const he=le*(p==="ribbon"?.14:.105);Se.drawImage(K,le*(re[0]+.055),ie*(re[1]-.13),he,he*K.height/K.width)}}s[se].needsUpdate=!0}}function oe(){const{width:G,height:se}=n.getBoundingClientRect();t.setSize(G,se,!1),n.parentElement.style.setProperty("--scene-width",`${se*hn/Dt}px`),n.parentElement.style.setProperty("--scene-visible-width",`${G}px`);const j=Dt*G/se/2;r.left=-j,r.right=j,r.updateProjectionMatrix()}new ResizeObserver(oe).observe(n),oe();function we(){N.tick(),_e.visible=y==="garden"&&N.blend>0,y==="garden"&&(k.material.map=N.texture,_e.material.map=N.previousTexture,_e.material.opacity=N.blend),P.tick(),O.tick(),te.tick(),Oe.visible=y==="shop"&&["summary","closing"].includes(v),Xe.visible=y==="kitchen"&&v==="taste"&&O.info().time>=12.38;const G=B.matches?0:M,se=performance.now()<A?1:0,j=(performance.now()-h)/1e3,ne=["wardrobe","portrait"].includes(y),Se=M-_,le=(K,re)=>Se>K&&Se<re?Math.sin((Se-K)/(re-K)*Math.PI):0,ie=ne&&!B.matches?le(.5,2.8):0,Ie=ne&&!B.matches?le(2,4.4):0,F=ne&&!B.matches?le(.3,4.6)*Math.sin(Se*1.6):0;!E&&j>=.18&&(E=!0,Ze());for(const K of Object.values(a))if(K.visible){K.material.opacity=!B.matches&&ne&&j<.45?1-Math.max(0,1-Math.abs(j-.18)/.18)*.92:1;const re=K.userData.uniforms;re.showcase.value.set(ie,Ie,F),re.time.value=G,re.moving.value=v==="mix"&&!B.matches?1:0,re.joy.value=se&&!B.matches?1:0;const he=G%5.6;re.blink.value=!B.matches&&he>4.9&&he<5.1?Math.sin((he-4.9)/.2*Math.PI):0,ne&&!B.matches&&(re.blink.value=Math.max(re.blink.value,le(3.1,3.45)))}for(let K=0;K<34;K++){const re=K*167.39%720-360;qe[K*3]=re+Math.sin(G*.3+K)*14,qe[K*3+1]=(K*97+G*(v==="bake"?45:10))%1280-640,qe[K*3+2]=1}if(ne&&j>=0&&j<.65&&!B.matches){for(let K=0;K<34;K++){const re=K*2.399;qe[K*3]=Math.cos(re)*(70+K*4+j*190),qe[K*3+1]=80+Math.sin(re)*(140+K*9+j*120)}fe.material.size=18*(1-j/.8),fe.material.opacity=1-j/.7}else fe.material.size=10,fe.material.opacity=v==="bake"?.8:["garden","festival"].includes(y)?.65:.32;ye.attributes.position.needsUpdate=!0,t.render(i,r)}function de(G){!document.hidden&&!g&&(M+=Math.min((G-L)/1e3,.1),I&&we()),L=G,requestAnimationFrame(de)}return requestAnimationFrame(de),{ready:$,async prepareCustom(G){d[G.id]||(await Promise.all(["standing","reading"].map(async se=>{const j=new Image;j.src=G[se],await j.decode();const ne="girl-custom-"+G.id+"-"+se,Se=bc(j,ne);Se.colorSpace=Mt,s[ne]=Se;const le=document.createElement("canvas");le.width=Se.image.width,le.height=Se.image.height,le.getContext("2d").drawImage(Se.image,0,0),c[ne]=le,T(ne)})),d[G.id]=G,W(),Ze())},customPreview(G){var se;return((se=s["girl-custom-"+G+"-standing"])==null?void 0:se.image.toDataURL("image/png"))??""},setCustom(G){m=G&&d[G]?G:null,Ze()},setAccessory(G){p=G,W()},setPaused(G){g=G,P.setPaused(G),O.setPaused(G),te.setPaused(G),N.setPaused(G)},getDialoguePortrait(){if(m)return s["girl-custom-"+m+"-standing"].image.toDataURL("image/png");const G=C==="acorn"?"girl-standing":`girl-${C}-standing`;return l[G]??(l[G]=s[G].image.toDataURL("image/png"))},showcase(){_=M},setMode(G){["wardrobe","portrait"].includes(G)&&!["wardrobe","portrait"].includes(y)&&(_=M),N.leave(),O.leave(),y==="shop"&&G!=="shop"&&te.leave(),y==="classroom"&&G!=="classroom"&&P.leave(),y=G,v="idle",y==="garden"&&N.enter(),y==="classroom"&&P.enter(),y==="shop"&&te.enter(),Ze()},setAction(G){v=G,y==="garden"&&N.play(G),y==="shop"&&te.play(G),y==="classroom"&&P.play(G),y==="kitchen"&&(O.info().active||O.enter(),O.play(G,G==="taste")),Ze()},setOutfit(G){G!==C&&["wardrobe","portrait"].includes(y)&&!B.matches&&(_=M+.45,f=C,h=performance.now(),E=!1),C=G,Ze()},setDessert(G){w=G,I&&(S.visible=y==="home"&&w)},happy(){A=performance.now()+2600},capture(){return we(),n.toDataURL("image/png")},getOutfitPreview(G,se=!1){if(!se)return o[G]??"";const j=G==="acorn"?"girl-standing":`girl-${G}-standing`;return l[j]??(l[j]=s[j].image.toDataURL("image/png"))},getInfo(){var G;return{renderer:"2d-illustration",mode:y,action:v,outfit:C,accessory:p,customId:m,dessert:w,wardrobeMotion:{active:["wardrobe","portrait"].includes(y)&&!B.matches&&M-_<4.6,elapsed:M-_},gatherMotion:N.info(),shopMotion:te.info(),classroomMotion:P.info(),bakingMotion:O.info(),sprite:(G=Object.values(a).find(se=>se.visible))==null?void 0:G.userData.key,assets:I?is.length:0,drawCalls:t.info.render.calls}}}}function bc(n,e){var m;const t=document.createElement("canvas");t.width=n.width,t.height=n.height;const i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(n,0,0);const r=i.getImageData(0,0,t.width,t.height),s=r.data,a=t.width,o=t.height;if(s[3]<20)return new dr(t);const l=new Uint8Array(a*o),c=new Int32Array(a*o);let u=0,d=0;function p(g){if(g<0||g>=a*o||l[g])return;l[g]=1;const _=g*4,h=s[_],f=s[_+1],E=s[_+2];Math.min(h,f,E)<(e==="girl-standing"?242:225)||Math.max(h,f,E)-Math.min(h,f,E)>10||(c[d++]=g)}for(let g=0;g<a;g++)p(g),p((o-1)*a+g);for(let g=0;g<o;g++)p(g*a),p(g*a+a-1);for(const[g,_]of((m=ur[e])==null?void 0:m.seeds)??[])p(Math.floor(_*o)*a+Math.floor(g*a));for(;u<d;){const g=c[u++];s[g*4+3]=0,g%a&&p(g-1),g%a<a-1&&p(g+1),p(g-a),p(g+a)}if(e==="girl-standing")for(let g=0;g<o;g++)for(let _=0;_<a;_++)(_<a*.22&&g<o*.075||_>a*.78&&g>o*.92)&&(s[(g*a+_)*4+3]=0);return i.putImageData(r,0,0),new dr(t)}const To=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),De=n=>document.querySelector(n);let Z=Ic(),ms="";try{const n=localStorage.getItem(Dc);if(n){const e=JSON.parse(n);e.version===1&&e.stats&&e.inventory&&Array.isArray(e.records)?Z=e:ms="旧存档无法读取，已开始新的故事。"}}catch{ms="浏览器存储不可用，本次进度暂不保存。"}vn(Z);let Ue,mt,dt,$t;function er(n,e){pd(n,e);const t=e.name,i=/课程/.test(t)?"course":/小铺/.test(t)?"shop":/烘焙/.test(t)?"baking":/采集/.test(t)?"gather":/薄荷|约定/.test(t)?"story":null;return i&&vd(n,i),n}try{Ue=Y_(De("#world"),(n,e)=>{const t=De("#loading p");t&&(t.textContent=n===e?"正在准备上课、烘焙和小铺动画…":`正在布置小屋 · ${n} / ${e}`)}),Ue.ready.then(async()=>{var e;const n=Z.collection.customOutfits.find(t=>t.id===Z.collection.activeCustom);n&&(await Ue.prepareCustom(n),Ue.setCustom(n.id)),(e=De("#loading"))==null||e.remove()}).catch(n=>{De("#loading").innerHTML="<span>✧</span><p>画面或动画载入失败，请刷新页面重试。</p>",console.error(n)})}catch(n){throw De("#loading").innerHTML="<span>✧</span><p>画面无法启动，请使用支持 WebGL 的浏览器打开。</p>",console.error(n),n}Ue.setOutfit(Z.outfit);Ue.setDessert(Z.desserts.length>0);let mn=null,Tr="set",Wt=structuredClone(Z.collection.wear),Gn="home",cn="",z=null,di=0,Zi=Z.outfit,Ec,zi=!0,Tn=null,Tc=0;const Qt=document.createElement("audio");Qt.id="bgm";Qt.src="/acorn-witch-atelier/audio/barefoot-in-the-park.mp3";Qt.preload="none";Qt.loop=!0;Qt.volume=.3;document.body.append(Qt);let Gi=!0,xs=!1;function Ss(){Gi&&(xs=!0,Qt.play().catch(()=>Pt("音乐暂未播放，请在设置中重新开启。")))}document.addEventListener("pointerdown",()=>{xs||Ss()},{once:!0});document.addEventListener("keydown",()=>{xs||Ss()},{once:!0});document.addEventListener("visibilitychange",()=>{document.hidden?Qt.pause():xs&&Gi&&Ss()});const Vo=["早晨","午后","傍晚"],xu={acorn:"◈",berry:"●",cream:"♧",herb:"❦",honey:"⬡"},Su={baking:{name:"魔法烘焙",symbol:"♧",cost:18,note:"节奏 · 火候 · 魔法"},course:{name:"去学校上课",symbol:"✧",cost:16,note:"学习一门小小的魔法"},gather:{name:"森林采集",symbol:"❦",cost:12,note:"收集食材与灵感"},story:{name:"朋友来信",symbol:"✉",cost:8,note:"一份甜点，一段故事"},shop:{name:"烘焙小铺",symbol:"♜",cost:10,note:"出售甜点，赚取金币"},rest:{name:"窗边休息",symbol:"☕",cost:0,note:"体力 +32 · 心情 +8"}};function wt(){try{localStorage.setItem(Dc,JSON.stringify(Z))}catch{Pt("存储空间不可用，当前进度仅保留在本页。")}}function Dn(n=600,e=.1){if(!zi)return;Tn??(Tn=new AudioContext),Tn.resume();const t=Tn.createOscillator(),i=Tn.createGain();t.type="sine",t.frequency.setValueAtTime(n,Tn.currentTime),i.gain.setValueAtTime(.09,Tn.currentTime),i.gain.exponentialRampToValueAtTime(.001,Tn.currentTime+e),t.connect(i).connect(Tn.destination),t.start(),t.stop(Tn.currentTime+e)}function Pt(n){clearTimeout(Ec),De("#toast").textContent=n,De("#toast").classList.add("show"),Ec=setTimeout(()=>De("#toast").classList.remove("show"),2600)}function Ms(n,e=""){De("#speech").innerHTML=n?`${n}<small>${e}</small>`:""}function Ke(n,e,t="",i="button"){return`<button class="${i}" data-action="${e}" ${t}>${n}</button>`}function Ut(n,e,t,i="✧",r="",s=""){return`<button class="option" data-action="${t}" ${r}><span class="symbol">${i}</span><span><strong>${n}</strong><small>${e}</small></span>${s?`<span class="right">${s}</span>`:""}</button>`}function lt(n,e,t,i=!0,r=""){return`<section class="sheet ${r}" aria-label="${n}"><header><div><h2>${n}</h2><small>${e}</small></div>${i?'<button class="close" data-action="close" aria-label="关闭面板">×</button>':""}</header>${t}</section>`}function ys(n,e,t){return`<div class="paged-items" data-size="${e}"><div class="${t}">${n.map((i,r)=>`<div class="paged-item" ${r>=e?"hidden":""}>${i}</div>`).join("")}</div>${n.length>e?`<div class="list-pages"><button data-action="list-page" data-id="-1" aria-label="上一页" disabled>‹</button><span data-page="0">1 / ${Math.ceil(n.length/e)}</span><button data-action="list-page" data-id="1" aria-label="下一页">›</button></div>`:""}</div>`}function j_(n,e){const t=n.closest(".paged-items"),i=t.querySelector("[data-page]"),r=[...t.querySelectorAll(".paged-item")],s=Number(t.dataset.size),a=Math.ceil(r.length/s),o=Math.max(0,Math.min(a-1,Number(i.dataset.page)+e));r.forEach((l,c)=>l.hidden=c<o*s||c>=(o+1)*s),i.dataset.page=o,i.textContent=`${o+1} / ${a}`,t.querySelector('[data-id="-1"]').disabled=o===0,t.querySelector('[data-id="1"]').disabled=o===a-1}function et(n,e){cn=e,De("#panel").dataset.panel=e,De("#panel").innerHTML=n,Ms("")}function un(n,e){if(["wardrobe","portrait"].includes(n)!==["wardrobe","portrait"].includes(Gn)||["school","classroom"].includes(n)&&n!==Gn||Gn==="classroom"&&n==="home"){const i=De("#scene-curtain");i.classList.remove("reveal"),i.offsetWidth,i.classList.add("reveal")}Gn=n,De("#game").dataset.scene=n,Ue.setMode(n);const t={garden:"adventure",school:"star",classroom:"star",kitchen:"acorn",shop:"acorn"}[n];t&&(Ue.setOutfit(t),Ue.setCustom(null),Ue.setAccessory(null)),De("#scene-label").textContent=e,De("#scene-actions").innerHTML="",De("#scene-actions").className=""}function Xt(){De("#hud").innerHTML=`<div class="date"><b>秋之月 · 第 ${Z.day} 日</b><small>${Z.slot===3?"庆典时刻":`${Vo[Z.slot]} ${["07:45","13:20","17:30"][Z.slot]}`}</small></div><div class="resources"><span><em>◈</em>${Z.coins}</span><span><em>♡</em>${Z.energy} <em>☀</em>${Z.mood}</span></div>`,De("#desktop-journal").innerHTML=`<span class="journal-caption">小魔女的成长手记</span><h2>今天，也长大了一点。</h2>${Object.entries(ds).map(([n,e])=>`<div class="statline"><span>${e}</span><b>${Z.stats[n]}</b></div><div class="stat-track"><span style="width:${Math.min(100,Z.stats[n])}%"></span></div>`).join("")}<div class="goal-note">${Z.ending?`✦ ${Z.ending.title}<br>秋收祭评分 ${Z.ending.score} / 100`:`✦ 距离秋收祭还有 ${7-Z.day} 天<br>准备甜点 · 挑选穿搭 · 结识朋友`}</div>`,De("#nav").innerHTML=[["journal","手记","✧"],["bag","背包","♧"],["schedule","日程","▦"],["wardrobe","衣橱","♜"],["festival","庆典","✦"]].map(([n,e,t])=>`<button data-action="${n}" class="${n==="schedule"?"primary":""}" ${z?"disabled":""}><span>${t}</span>${e}</button>`).join("")}function _n(){$n==null||$n.dispose(),$n=null,Oc(Z,"home"),wt(),Z.ending&&Z.day<=7&&(Z.day=8,Z.slot=0,Z.energy=Math.min(100,Z.energy+25),wt()),z=null,cn="",De("#panel").innerHTML="",un("home","橡果小屋 · 窗边"),Ue.setOutfit(Z.outfit),Ue.setCustom(Z.collection.activeCustom),Ue.setAccessory(Z.collection.wear.accessory),Ue.setDessert(Z.desserts.length>0),Xt(),Ms(Z.ending?"我们的故事，还会有下一个季节。":Z.energy<25?"先泡杯茶，歇一会儿吧。":Z.day===7?"今天是秋收祭。带上我们的得意之作吧！":"今天，想把时间花在什么美好的事上？","点击「日程」开始今天的生活"),De("#scene-actions").innerHTML=Ke("◉ 幸运轮盘","wheel","","scene-button")+Ke("▣ 角色故事","stories","","scene-button")+Ke("✧ CG 相册","collection","","scene-button collection-entry")+Ke("♬ 设置","settings","","scene-button");const n=Z.collection.cgs.find(e=>!Z.collection.seen.includes(e));n&&(dt==null||dt.playCG(n,()=>{}))}function K_(){un("home","橡果小屋 · 今日日程"),et(lt("今日日程","A LITTLE PLAN FOR TODAY",`<div class="schedule-grid">${Vo.map((n,e)=>`<div class="time-slot ${e===Z.slot?"current":""}">${n}<small>${e<Z.slot?"已经度过":e===Z.slot?"正在安排":"留给美好的事"}</small></div>`).join("")}</div>${Z.day===7&&Z.slot===3?`<p>准备已经完成。现在，带上你的甜点前往秋收祭。</p>${Ke("前往秋收祭","festival","","button wide")}`:`<div class="action-grid">${Object.entries(Su).map(([n,e])=>Ut(e.name+(mt!=null&&mt.clues(n).length?" · 新线索":""),e.note,"activity",e.symbol,`data-id="${n}" ${_i(Z,e.cost)?"":"disabled"}`,e.cost?`−${e.cost}♡`:"+32♡")).join("")}</div><p class="mini-status">每次 1 时段 · 夜间体力 +25</p>`}`),"schedule")}function Z_(n){const e=Su[n];if(!_i(Z,e.cost)){Pt("先安排休息，恢复一些体力吧。");return}const t=(mt==null?void 0:mt.clues(n))??[];t.length&&Pt(t.at(-1).event.clue.text),n==="baking"&&Mu(),n==="course"&&r0(),n==="gather"&&l0(),n==="story"&&d0(),n==="shop"&&h0(),n==="rest"&&(er(Z,{name:"窗边休息",energy:32,mood:8}),wt(),_n(),Ue.happy(),Pt("热茶和一页好书。体力 +32，心情 +8")),t.length&&mt.openChat(t.at(-1),!0)}function Mu(){un("kitchen","魔法烘焙坊 · 准备"),Ue.setAction("prepare"),di=0,yu()}function yu(){const n=fr[di];if(cn==="recipes"&&De("#panel .recipe-note")){De("#panel").querySelectorAll("[data-action=recipe]").forEach(t=>{const i=Number(t.dataset.id)===di;t.classList.toggle("selected",i),t.setAttribute("aria-pressed",String(i))}),De("#panel .recipe-note").textContent=n.note;const e=De("#panel [data-action=cook]");e.disabled=!lr(Z,n),e.textContent=lr(Z,n)?"系好围裙，开始吧":"材料不足，先去森林看看";return}et(lt("今天，烤一点幸福","CHOOSE A RECIPE",`<div class="options">${fr.map((e,t)=>({r:e,i:t})).filter(({r:e})=>!e.unlock||Z.collection.menus.includes(e.id)).map(({r:e,i:t})=>`<button class="option ${di===t?"selected":""}" data-action="recipe" data-id="${t}" aria-pressed="${di===t}"><span class="symbol">${["✦","❀","♧","❦","♡"][t]}</span><span><strong>${e.name}</strong></span><span class="right">${e.temp}°</span></button>`).join("")}</div><p class="recipe-note">${n.note}</p>${Ke(lr(Z,n)?"系好围裙，开始吧":"材料不足，先去森林看看","cook",lr(Z,n)?"":"disabled","button wide")}<div class="mini-status">消耗 18 体力 · 完成后消耗材料 · 一个时段</div>`),"recipes")}function J_(){const n=fr[di];!Md(Z).includes(n)||!lr(Z,n)||!_i(Z,18)||(Ue.setAction("ingredients"),z={type:"baking",phase:"ingredients",recipe:n,selected:[],hits:[],start:0,heat:0,temperature:n.temp-20,heatTotal:0,heatSamples:0,spell:"star"},Xt(),bu())}function bu(){const n=z.recipe;et(lt(n.name,"01 / 04 · INGREDIENTS",`<div class="phase-label">从篮子里挑出配方需要的材料</div><div class="recipe-mini">${Object.entries(n.need).map(([e,t])=>`<button class="ingredient ${z.selected.includes(e)?"selected":""}" data-action="ingredient" data-id="${e}" ${z.selected.includes(e)?"disabled":""}>${xu[e]} ${Po[e]} ×${t} ${z.selected.includes(e)?"✓":""}</button>`).join("")}</div><p>材料选齐后，开始轻轻搅拌。</p>${Ke("拿起木勺","mix",z.selected.length===Object.keys(n.need).length?"":"disabled","button wide")}`,!1),"ingredients")}function Q_(){z.phase="mix",z.start=performance.now(),Ue.setAction("mix"),et(lt("让香气，慢慢混合","02 / 04 · STIR IN RHYTHM",`<p>光标进入绿色区域时，点击搅拌。靠近中心会更好。</p><div class="timing"><div class="target"></div><div class="needle" id="mix-needle"></div></div><div class="meter-meta"><span id="mix-feedback">跟着木勺的节奏</span><span id="mix-count">0 / 5</span></div>${Ke("轻轻搅拌 · 空格","tap","","button wide tap-button")}`,!1),"mix")}function Eu(n){return(1-Math.cos((n-z.start)/1e3*Math.PI*1.15))/2}function Tu(){const n=performance.now();if(!z||z.phase!=="mix"||n-Tc<170)return;Tc=n;const e=Math.abs(Eu(n)-.5),t=e<.055?1:e<.13?.8:e<.23?.5:.2;z.hits.push(t),Dn(t===1?880:t>=.8?660:380,.13),De("#mix-feedback").textContent=t===1?"PERFECT · 刚刚好！":t>=.8?"GOOD · 香气出来了":t>=.5?"不错，再靠近中心一点":"慢慢来，等绿色区域",De("#mix-count").textContent=`${z.hits.length} / 5`,t>=.8&&Ue.happy(),z.hits.length===5&&(z.phase="mixed",Ue.setAction("mixed"),et(lt("面糊准备好了","02 / 04 · NICELY MIXED",`<div class="stamp">${Math.round(z.hits.reduce((i,r)=>i+r,0)/5*100)}<small>搅拌表现 / 100</small></div><p>接下来交给火候。${z.recipe.name}适合 ${z.recipe.temp}°C。</p>${Ke("放进烤箱","heat","","button wide")}`,!1),"mixed"))}function e0(){z.phase="heat",Ue.setAction("bake"),z.start=performance.now(),z.lastSample=performance.now(),et(lt("守住，刚好的温度","03 / 04 · A LITTLE PATIENCE",`<div class="temperature"><span id="temperature">${z.temperature}</span>°C<small>理想 ${z.recipe.temp}°C</small></div><label class="details" for="heat-slider">滑动调温，让温度保持在目标 ±8°C</label><input id="heat-slider" type="range" min="140" max="220" value="${z.temperature}" step="1" aria-label="烤箱温度"><div class="progress"><span id="heat-progress"></span></div><div class="meter-meta"><span id="heat-feedback">甜点正在慢慢膨胀</span><span id="heat-time">8 秒</span></div>`,!1),"heat")}function t0(){z.phase="spell",Ue.setAction("spell"),et(lt("最后，添一点魔法","04 / 04 · A PINCH OF MAGIC",`<p>食谱偏爱的魔法：<b>${{star:"星光",forest:"森林",heal:"治愈"}[z.recipe.spell]}</b>。魔法也会改变这次烘焙带来的成长。</p><div class="options">${[["star","星光","魔法 +3 · 适合星光橡果塔","✦"],["forest","森林","亲和 +3 · 适合莓果云朵派","❦"],["heal","治愈","体力 +8 · 适合蜂蜜布丁","♡"]].map(([n,e,t,i])=>Ut(e,t,"spell",i,`data-id="${n}"`)).join("")}</div>`,!1),"spell")}function n0(n){if(!z||z.phase!=="spell")return;const e=z.recipe,t=z.hits.reduce((o,l)=>o+l,0)/5,i=z.heatSamples?z.heatTotal/z.heatSamples:0,r=hd(Z,t,i,n,e),s={id:`${Date.now()}`,recipe:e.id,name:e.name,score:r,grade:Uc(r),spell:n},a={baking:3,...n==="star"?{magic:3}:n==="forest"?{charm:3}:{}};er(Z,{name:`烘焙 · ${e.name} ${s.grade}`,cost:18,mood:4,energy:n==="heal"?8:0,stats:a,ingredients:Object.fromEntries(Object.entries(e.need).map(([o,l])=>[o,-l])),dessert:s}),wt(),z={type:"tasting",dessert:s,mix:t,heat:i},Ue.setAction("taste"),Xt(),et("","tasting"),Ms("先尝一口，看看今天的味道。")}function i0(){const{dessert:n,mix:e,heat:t}=z;z={type:"result",dessert:n},Dn(1046,.4),et(lt("有你在，今天也很甜","FRESH FROM THE OVEN",`<div class="stamp">${n.grade}<small>${n.name} · 品质 ${n.score}</small></div><div class="reward-grid"><div><b>${Math.round(e*100)}</b>搅拌表现</div><div><b>${Math.round(t*100)}</b>火候表现</div><div><b>+3</b>烘焙成长</div></div><p>「唔…好好吃！」甜点已放入背包，可以留作参赛、送给朋友，或在小铺出售。</p>${Ke("把这份甜蜜带回家","home","","button wide")}`,!1),"cook-result")}function r0(){un("school","魔女学院 · 到校"),et(lt("今天，想学哪一课？","LESSONS FOR A YOUNG WITCH",`<p>走进教室，完成三道练习 · 学费 12 ◈ · 体力 16 ♡</p><div class="options">${Ut("烘焙基础","辨认材料和温度 · 烘焙成长","course","♧",'data-id="baking"')}${Ut("星光魔法","记住符文顺序 · 魔法成长","course","✦",'data-id="magic"')}${Ut("色彩与设计","观察配色和标签 · 审美成长","course","❀",'data-id="style"')}</div>${Z.coins<12?"<p>金币不足。可以先出售一份甜点。</p>":""}`),"courses")}const wu={baking:[["想让塔皮酥脆，需要哪种原料？",["黄油与面粉","一整杯清水","只有莓果"],0],["星光橡果塔适合的温度是？",["140°C","180°C","220°C"],1],["面糊搅拌完成，接下来应该？",["直接装盘","再加一杯盐","放入预热的烤箱"],2]],magic:[["记住顺序：星 → 月 → 叶。中间是？",["月","叶","星"],0],["星光橡果塔偏爱哪种魔法？",["治愈","森林","星光"],2],["让魔法稳定的方法是？",["越快越好","跟随平稳的节奏","闭着眼随便念"],1]],style:[["「森林来信」的主要颜色是？",["草木绿","霓虹粉","纯黑"],0],["秋收祭的温暖配色是？",["湖蓝与银灰","橡果棕与奶油白","黑色与荧光绿"],1],["想突出金发，围裙可以搭配？",["相同的亮黄","透明色","较深的森林绿"],2]]};function s0(n){if(Z.coins<12){Pt("还差一点学费，先去小铺赚些金币吧。");return}un("classroom",`魔女学院 · ${{baking:"烘焙基础课",magic:"星光魔法课",style:"色彩与设计课"}[n]}`),z={type:"course",subject:n,q:0,correct:0},Xt(),Au()}function Au(){Ue.setAction("think");const n=wu[z.subject][z.q];et(lt(`随堂练习 · ${z.q+1} / 3`,"LESSON",`<p class="dialog-text">${n[0]}</p><div class="options">${n[1].map((e,t)=>Ut(e,"","answer",["A","B","C"][t],`data-id="${t}"`)).join("")}</div>`,!1),"question")}function a0(n){if(!z||z.type!=="course"||z.feedback)return;const e=wu[z.subject][z.q],t=n===e[2];z.feedback=!0,document.querySelectorAll('[data-action="answer"]').forEach(i=>i.disabled=!0),t?(z.correct++,Ue.setAction("correct"),Dn(780),Pt("答对了！原来是这样。")):(Ue.setAction("retry"),Dn(330),Pt(`再记一次：${e[1][e[2]]}`))}function o0(){const n=3+z.correct*2,e=z.subject,t=z.correct;er(Z,{name:`课程 · ${ds[e]}`,cost:16,coins:-12,stats:{[e]:n,knowledge:2},mood:t===3?3:1}),wt(),z={type:"result"},Ue.setAction("celebrate"),Xt(),et(lt("把新本领，收进口袋","A SMALL STEP FORWARD",`<div class="stamp">${t} / 3<small>今天的课堂练习</small></div><div class="reward-grid"><div><b>+${n}</b>${ds[e]}</div><div><b>+2</b>学识</div><div><b>−12</b>学费</div></div>${Ke("下课，回家吧","home","","button wide")}`,!1),"course-result")}let $n=null;function l0(){un("garden","榛果林 · 轻风小径"),z={type:"gather"},cn="gather",De("#panel").innerHTML="",De("#scene-actions").className="gather",Ms(""),Xt(),$n=fd({world:Ue,root:De("#scene-actions"),onFinish:c0})}function c0(){const n=Z.outfit==="forest"?1:0;er(Z,{name:"榛果林采集",cost:12,mood:4,stats:{charm:1},ingredients:{acorn:4+n,berry:3+n,herb:2+n,honey:2,cream:2}}),wt(),z={type:"result"},Xt(),et(lt("满满一篮，带回家","GIFTS FROM THE FOREST",`<p>小路尽头的奶农还送了两瓶奶油。</p><div class="backpack">${Object.entries({acorn:4+n,berry:3+n,herb:2+n,honey:2,cream:2}).map(([e,t])=>`<div class="item-cell">${Po[e]}<b>+${t}</b></div>`).join("")}</div>${n?"<p>「森林小洋装」穿搭带来额外采集收获。</p>":""}${Ke("带着篮子回家","home","","button wide")}`,!1),"gather-result")}function Ru(){z||(["wardrobe","portrait"].includes(Gn)||(mn=Z.collection.activeCustom,Zi=Z.outfit,Wt=structuredClone(Z.collection.wear),Tr="set"),un("wardrobe","卧室 · 橡果试衣间"),us())}function us(){if(Ue.setCustom(mn),Tr!=="set"){Pu();return}Ue.setAccessory(Wt.accessory);const n=$i.find(t=>t.id===Zi),e=Z.owned.includes(n.id);Ue.setOutfit(n.id),et(lt("衣橱","THE LITTLE WARDROBE",`${Cu()}${ys([...$i.map(t=>`<button class="outfit-card ${Zi===t.id?"selected":""}" aria-label="试穿${t.name}" data-action="outfit" data-id="${t.id}"><img src="${Ue.getOutfitPreview(t.id)}" alt="${t.name}全身搭配"><b>${t.short}</b><small>${Z.owned.includes(t.id)?"已拥有":t.price+" ◈"}</small></button>`),...Z.collection.customOutfits.map(t=>`<button class="outfit-card ${mn===t.id?"selected":""}" data-action="custom-outfit" data-id="${t.id}"><img src="${Ue.customPreview(t.id)||t.standing}" alt="共创穿搭"><b>${To(t.name)}</b><small>我的设计</small></button>`)],6,"wardrobe-preview")}<div class="recipe-name">${mn?To(Z.collection.customOutfits.find(t=>t.id===mn).name):n.name}</div><div class="row">${Ke(mn||e?"就穿这套":"购买并穿上 · "+n.price+" ◈","wear",!e&&Z.coins<n.price?"disabled":"","button")}${Ke("收起 · 看全身","portrait","","button subtle")}</div>`),"wardrobe")}function u0(){if(mn){Z.collection.activeCustom=mn,Z.collection.wear=structuredClone(Wt),wt(),_n();return}if(Z.collection.activeCustom=null,Tr!=="set"){if(![...Wt.accessory?[Wt.accessory]:[]].every(e=>Z.collection.parts.includes(e)))return;Z.collection.wear=structuredClone(Wt),wt(),_n(),Pt("搭配已保存。");return}const n=$i.find(e=>e.id===Zi);if(!Z.owned.includes(n.id)){if(Z.coins<n.price)return;Z.coins-=n.price,Z.owned.push(n.id)}Z.outfit=n.id,Z.collection.wear={...Wt,mode:"set"},wt(),Ue.happy(),_n(),Pt("今天的你，也很可爱。")}function Cu(){return'<div class="wardrobe-tabs"><button data-action="design" class="under-construction" aria-disabled="true">✎ 设计新衣</button>'+[["set","套装"],["accessory","饰品"]].map(([n,e])=>'<button data-action="wardrobe-tab" data-id="'+n+'" aria-pressed="'+(Tr===n)+'">'+e+"</button>").join("")+"</div>"}function Pu(){Ue.setAccessory(Wt.accessory),Ue.setOutfit(Zi);const n=!Wt.accessory||Z.collection.parts.includes(Wt.accessory);et(lt("饰品","THE LITTLE ACCESSORIES",Cu()+'<div class="wardrobe-preview"><button class="outfit-card" data-action="part" data-id="none"><b>摘下饰品</b></button>'+Lo.map(e=>'<button class="outfit-card part-card '+(Wt.accessory===e.id?"selected":"")+'" data-action="part" data-id="'+e.id+'" aria-label="试戴'+e.name+'"><img src="/acorn-witch-atelier/assets/rewards/part-'+e.id+'.webp" alt="'+e.name+'"><b>'+e.name+"</b><small>"+(Z.collection.parts.includes(e.id)?"已拥有":"轮盘获得")+"</small></button>").join("")+'</div><div class="row">'+Ke(n?"戴好了":"轮盘获得后可保存","wear",n?"":"disabled")+Ke("收起 · 看全身","portrait","","button subtle")+"</div>"),"wardrobe")}function d0(){un("story","窗边来信 · 朋友的约定");const n=[["薄荷的第一封信","「秋收祭快到了，我总是担心自己的配方不够好。你也会紧张吗？」"],["一份甜蜜的邀请","「昨天闻到你家烤箱的香气，我练习到很晚。下次，可以一起做甜点吗？」"],["庆典之前","「无论评委给几分，我都会站在台下，给你最响亮的掌声。」"]],[e,t]=n[Math.min(2,Z.story)];et(lt(e,"A LETTER FROM MINT",`<div class="dialog-name">薄荷 · 魔女学院的同学</div><p class="dialog-text">${t}</p><div class="options">${Ut("我们一起练习吧","亲和 +3 · 好感 +2","story-choice","♡",'data-id="talk"')}${Ut("送给她一份亲手做的甜点",Z.desserts.length?"消耗背包第一份甜点 · 好感 +5":"背包里还没有甜点","story-choice","♧",`data-id="gift" ${Z.desserts.length?"":"disabled"}`)}${Ut("把整理好的笔记分享给她","学识 +3 · 好感 +2","story-choice","✧",'data-id="notes"')}</div><div class="mini-status">消耗 8 体力 · 一个时段</div>`),"story")}function f0(n){_i(Z,8)&&(n==="gift"&&!Z.desserts.length||(er(Z,{name:n==="gift"?"送给薄荷的甜点":"与薄荷的约定",cost:8,stats:n==="notes"?{knowledge:3}:{charm:3},friendship:n==="gift"?5:2,mood:5}),n==="gift"&&Z.desserts.shift(),Z.story++,wt(),z={type:"result"},Ue.happy(),Xt(),et(lt("有人，记住了你的温柔","FRIENDSHIP GROWS",`<p class="dialog-text">${n==="gift"?"「这是给我的吗？我会把今天，写进最喜欢的那一页日记。」":"「原来不需要独自做好所有事情。有你在，感觉安心多了。」"}</p><div class="reward-grid"><div><b>+${n==="gift"?5:2}</b>薄荷好感</div><div><b>${Z.friendship}</b>当前关系</div><div><b>+5</b>心情</div></div>${Z.friendship>=6?"<p>约定达成：薄荷会在庆典为你应援，关系将计入比赛评分。</p>":""}${Ke("把信好好收起来","home","","button wide")}`,!1),"story-result")))}const wo={tea:"热茶",cocoa:"热可可",honey:"蜂蜜茶"};function h0(){un("shop","橡果烘焙坊 · 准备开店"),et(lt("今天，也把甜蜜分给小镇","OPEN THE LITTLE BAKERY",Z.desserts.length?`<p>选甜点接待 3 组客人，按需配饮品。每轮 10 体力、1 时段。</p>${ys(Z.desserts.map((n,e)=>Ut(n.name,`${n.grade} · ${n.score} 分`,"sell","♧",`data-id="${e}"`)),3,"dessert-options")}`:`<div class="empty">展示柜空空的，先烤一份甜点吧。</div>${Ke("选择食谱","recipes","","button wide")}`),"shop")}function p0(n){const e=Z.desserts[n];!e||!_i(Z,10)||z||(z={type:"shop",phase:"order",index:n,dessert:e,customer:0,results:[],elapsed:0,selection:null},Xt(),Lu())}function Lu(){z.phase="order",z.elapsed=0,z.selection=null;const n=Wi[z.customer];Ue.setAction(n.motion),De("#scene-label").textContent=`今日营业 · 第 ${z.customer+1} / 3 组客人`,De("#scene-actions").className="shop-sale",De("#scene-actions").innerHTML=`<div class="shop-till">◈ ${Z.coins}</div>`,Du()}function Du(){const n=Wi[z.customer];et(lt(n.guest,`${z.customer+1} / 3 · ${z.dessert.name}试吃套餐`,`<p>${n.request}</p><div class="shop-patience"><span id="shop-patience-fill" style="width:${100*(1-z.elapsed/fs)}%"></span></div><div class="shop-drinks">${Object.entries(wo).map(([e,t])=>Ke(t,"shop-drink",`data-id="${e}" aria-pressed="${z.selection===e}"`,"button subtle")).join("")}</div>${Ke(z.selection?"递给客人":"先选一杯饮品","shop-serve",z.selection?"":"disabled","button wide")}`,!1),"shop-order")}function Iu(n=!1){if((z==null?void 0:z.type)!=="shop"||z.phase!=="order"||!z.selection&&!n)return;const e=Wi[z.customer],t=!n&&z.selection===e.choice,i=t&&z.elapsed<fs*.5;z.results.push({correct:t,perfect:i,timedOut:n}),z.phase="feedback",Ue.setAction(t?"positive":"negative"),Dn(t?880:260,.2),et(lt(t?i?"PERFECT · 这份心意刚刚好":"GOOD · 客人很满意":n?"客人等了太久…":"不是这个呀…",`${z.customer+1} / 3 · ${e.guest}`,`<p>${t?`甜点搭配${wo[e.choice]}，谢谢款待！${i?"获得 5 金币小费。":""}`:`客人想要的是${wo[e.choice]}。这份订单未成交，下次留意需求。`}</p><div id="shop-next"><small>等客人回应…</small></div>`,!1),"shop-feedback"),De("#panel").dataset.feedback=t?"positive":"negative"}function m0(){(z==null?void 0:z.type)!=="shop"||z.phase!=="feedback-ready"||(++z.customer<Wi.length?Lu():g0())}function g0(){const{dessert:n,index:e,results:t}=z,i=gd(n.score,t);er(Z,{name:`小铺营业 · 接待 ${i.served}/3 组`,cost:10,coins:i.coins,stats:{charm:i.charm},mood:i.mood}),Z.desserts.splice(e,1),wt(),z.phase="summary",z.reward=i,Ue.setAction("summary"),Xt(),De("#scene-label").textContent="今日营业 · 翻开账本",et("","shop-summary"),De("#scene-actions").innerHTML=`<section class="shop-ledger shop-ledger-bottom"><div>甜点收入 <b>+${i.sales} ◈</b></div><div>服务小费 <b>+${i.tips} ◈</b></div><div>亲和成长 <b>+${i.charm}</b></div><strong>本次收入 ${i.coins} 金币</strong>${Ke("正在整理账本…","shop-close","disabled","button wide")}</section>`}function _0(){(z==null?void 0:z.type)!=="shop"||z.phase!=="summary-ready"||(z.phase="closing",De("#scene-label").textContent="今日营业 · 圆满收工",Ue.setAction("closing"),De("#scene-actions").innerHTML="",et("","shop-closing"))}function v0(n){if((z==null?void 0:z.type)!=="shop")return;const e=Ue.getInfo().shopMotion,t=De(".shop-till");if(t&&(t.hidden=e.action==="positive"&&e.time>=7.68),z.phase==="order"){if(e.seeking)return;z.elapsed+=n,De("#shop-patience-fill").style.width=`${Math.max(0,100*(1-z.elapsed/fs))}%`,z.elapsed>=fs&&Iu(!0)}else if(z.phase==="feedback"&&e.complete)z.phase="feedback-ready",De("#shop-next").innerHTML=Ke(z.customer<2?"继续接待下一位":"结束接待，看看账本","shop-next","","button wide");else if(z.phase==="summary"&&e.complete){z.phase="summary-ready";const i=De("[data-action=shop-close]");i.disabled=!1,i.textContent="看完账本，结束营业"}else z.phase==="closing"&&e.complete&&(z.phase="closed",et(lt("今天的甜蜜，圆满收工","BAKERY CLOSED",`<p>接待 3 组 · 成交 ${z.reward.served} 组 · 收入 ${z.reward.coins} 金币</p>${Ke("关好店门，回家吧","home","","button wide")}`,!1),"shop-result"))}function x0(){et(lt("背包","",`<div class="backpack">${Object.entries(Z.inventory).map(([n,e])=>`<div class="item-cell">${xu[n]} ${Po[n]}<b>${e}</b></div>`).join("")}</div><div class="section-label">甜点 · ${Z.desserts.length} 份</div>${Z.desserts.length?ys(Z.desserts.map(n=>`<div class="record"><b>${To(n.name)}</b><span>${n.grade} · ${n.score} 分</span></div>`),4,"dessert-grid"):'<p class="bag-empty">暂无甜点 · 去烘焙一份吧</p>'}`),"bag")}function S0(){et(lt("每一点成长，都算数","YOUR GROWING STORY",`<div class="book-stats">${Object.entries(ds).map(([n,e])=>`<div>${e}<b>${Z.stats[n]}</b></div>`).join("")}<div>薄荷好感<b>${Z.friendship}</b></div></div><div class="book-stats"><div>松团子好感<b>${Z.collection.bond}</b></div></div>${Ke("剧情与 CG 相册","collection","","button wide")}<div class="section-label">最近的生活</div>${Z.records.slice(0,6).map(n=>`<div class="record"><span>第 ${n.day} 日 · ${Vo[n.slot]}</span>${n.name}</div>`).join("")||"<p>第一页，留给今天。</p>"}${Ke("看看玩法手册","help","","button subtle wide")}`),"journal")}function M0(){if(Z.ending){bs();return}const n=Z.day===7;et(lt("秋收祭，一起闪闪发光","THE HARVEST FESTIVAL",`<p>${n?"庆典已经开始！选择一份甜点，和薄荷一起前往广场。":`还有 ${7-Z.day} 天。用剩下的时间学习、烘焙，准备你喜欢的穿搭。`}</p><p class="collection-hint">参加即得「把秋天送给你」祭典 CG · 庆典后生活继续</p><div class="score-lines"><div>甜点品质<b>50 分</b></div><div>烘焙 · 魔法 · 学识<b>25 分</b></div><div>服装与审美<b>20 分</b></div><div>朋友的应援<b>5 分</b></div></div>${n?Z.desserts.length?`<div class="section-label">选择参赛作品</div>${ys(Z.desserts.map((e,t)=>Ut(e.name,`${e.grade} · ${e.score} 分`,"compete","✦",`data-id="${t}"`)),3,"dessert-options")}`:`<p>还没有参赛甜点。${Z.slot<3?"现在烤一份也来得及。":"这次先作为观众，为朋友们鼓掌吧。"}</p>${Ke(Z.slot<3?"安排魔法烘焙":"以观众身份参加",Z.slot<3?"recipes":"spectator","","button wide")}`:Ke("继续准备今天的生活","schedule","","button wide")}`),"festival")}function y0(n){if(Z.ending||Z.day!==7)return;const e=Z.desserts[n];e&&(Z.ending=md(Z,e),wt(),bs(),Ue.happy(),Dn(1046,.5))}function bs(){if(Fc(Z,"festival")&&wt(),!Z.collection.seen.includes("festival")){dt.playCG("festival",bs);return}un("festival","秋收祭 · 属于我们的舞台");const n=Z.ending;n&&(et(lt(n.title,"A NEW CHAPTER BEGINS",`<div class="stamp">${n.grade}<small>秋收祭 · 综合评分 ${n.score} / 100</small></div><div class="score-lines"><div>甜点「${n.dessert}」<b>${n.taste} / 50</b></div><div>这一周的成长<b>${n.growth} / 25</b></div><div>今天的穿搭<b>${n.dress} / 20</b></div><div>朋友的应援<b>${n.bond} / 5</b></div></div><p>「原来那些认真度过的小日子，真的会变成闪闪发光的自己。」</p><div class="row">${Ke("保存纪念卡","share")}${Ke("回小屋看看","home","","button subtle")}</div>`,!0),"ending"),Xt())}function Uu(){et(lt("小屋里的生活手册","HOW TO SPEND A LOVELY WEEK",`<ul><li>每天 3 时段；夜间体力 +25。</li><li>上课加属性，采集得食材，休息回体力。</li><li>烘焙：选材 → 搅拌 5 次 → 控温 8 秒 → 魔法。</li><li>试穿免费；穿搭影响采集与比赛。</li><li>甜点可出售、赠送；留一份参赛。</li><li>第 7 天秋收祭：甜点、成长、穿搭与好感计分。</li></ul><p>点击或触屏操作 · 空格搅拌 · 行动结束自动保存</p>${Ke("知道了，继续生活","close","","button wide")}`,!0,"help"),"help")}function Pa(){et(lt("设置","A QUIET LITTLE MOMENT",`<div class="options">${Ut(Gi?"暂停背景音乐":"播放背景音乐","BAREFOOT IN THE PARK","music","♫")}${Ut(zi?"关闭音效":"开启音效","操作与成功提示","sound","♫")}${Ut("玩法手册","课程、烘焙与庆典","help","✧")}${Ut("重新开始这一周","清除当前进度","reset-ask","↺")}</div><label for=music-volume>背景音乐音量 <output id=music-volume-value>${Math.round(Qt.volume*100)}%</output></label><input id=music-volume type=range min=0 max=100 value=${Math.round(Qt.volume*100)} aria-label=背景音乐音量>`),"settings")}async function b0(){const n=Z.ending;if(!n)return;const e=document.createElement("canvas");e.width=900,e.height=1200;const t=e.getContext("2d");t.fillStyle="#f4e8cb",t.fillRect(0,0,900,1200),t.strokeStyle="#b38a49",t.lineWidth=3,t.strokeRect(28,28,844,1144);const i=new Image;i.src="/acorn-witch-atelier/assets/rewards/cg-festival.webp",await i.decode(),t.save(),t.beginPath(),t.rect(55,55,790,660),t.clip();const r=790,s=i.height/i.width*790;t.drawImage(i,55,55-(s-660)*.43,r,s),t.restore(),t.fillStyle="#493927",t.textAlign="center",t.font='28px "Songti SC", serif',t.fillText("橡果魔女 · 秋收祭纪念",450,765),t.font='48px "Songti SC", serif',t.fillText(n.title,450,842),t.font="70px Georgia",t.fillStyle="#a57437",t.fillText(`${n.grade}  /  ${n.score}`,450,940),t.font='23px "Songti SC", serif',t.fillStyle="#786445",t.fillText(n.dessert,450,1002),t.font='19px "Songti SC", serif',t.fillText("扫码来到橡果小屋",350,1090),await Co(t,690,1020,120);const a=document.createElement("a");a.download="橡果魔女-秋收祭纪念.png",a.href=e.toDataURL("image/png"),a.click(),Pt("纪念卡已生成，保存在浏览器下载中。")}function Go(n,e,t){if(!(z&&!["ingredient","mix","tap","heat","spell","answer","pick","home","sound","music","shop-drink","shop-serve","shop-next","shop-close"].includes(n)))switch(n){case"list-page":j_(t,Number(e));break;case"custom-outfit":mn=e,Ue.prepareCustom(Z.collection.customOutfits.find(i=>i.id===e)).then(us).catch(()=>Pt("共创衣服暂未载入，请检查绘图服务。"));break;case"design":Pt("施工中，敬请期待");break;case"collection":dt.album();break;case"wheel":dt.wheel();break;case"pets":dt.pets();break;case"wardrobe-tab":Tr=e,us();break;case"part":e==="none"?Wt.accessory=null:Lo.find(r=>r.id===e)&&(Wt.accessory=e),Pu();break;case"home":_n();break;case"close":_n();break;case"schedule":K_();break;case"activity":Z_(e);break;case"recipe":di=Number(e),yu();break;case"recipes":_i(Z,18)?Mu():Pt("先恢复体力，或开始新的一周。");break;case"cook":J_();break;case"ingredient":(z==null?void 0:z.phase)==="ingredients"&&!z.selected.includes(e)&&(z.selected.push(e),Dn(520+z.selected.length*100),bu());break;case"mix":(z==null?void 0:z.phase)==="ingredients"&&Q_();break;case"tap":Tu();break;case"heat":(z==null?void 0:z.phase)==="mixed"&&e0();break;case"spell":n0(e);break;case"course":s0(e);break;case"answer":a0(Number(e));break;case"portrait":et("","portrait"),un("portrait","卧室 · 镜前试衣"),De("#scene-actions").innerHTML=Ke("打开衣橱","wardrobe","","scene-button")+Ke("展示动作","showcase","","scene-button");break;case"showcase":Ue.showcase();break;case"wardrobe":Ru();break;case"outfit":mn=null,Zi=e,us();break;case"wear":u0();break;case"story-choice":f0(e);break;case"sell":p0(Number(e));break;case"shop-drink":(z==null?void 0:z.type)==="shop"&&z.phase==="order"&&(z.selection=e,Du());break;case"shop-serve":Iu();break;case"shop-next":m0();break;case"shop-close":_0();break;case"bag":x0();break;case"journal":mt.openBook();break;case"stories":mt.openStories();break;case"festival":M0();break;case"compete":y0(Number(e));break;case"share":b0();break;case"help":Uu();break;case"settings":Pa();break;case"music":Gi=!Gi,Gi?Ss():Qt.pause(),cn==="settings"&&Pa();break;case"sound":zi=!zi,De("#sound").textContent=zi?"♫ 音效开":"♫ 音效关",De("#sound").setAttribute("aria-label",zi?"关闭音效":"开启音效"),Dn(660),cn==="settings"&&Pa();break;case"reset-ask":et(lt("翻开新的一页？","A FRESH START",`<p>将清除这次的金币、成长、甜点与庆典结果，从第一日重新开始。</p><div class="row">${Ke("重新开始","reset")}${Ke("继续这一周","close","","button subtle")}</div>`),"reset");break;case"reset":Z=Ic(),vn(Z),wt(),_n(),Pt("新的一周，新的可能。");break;case"spectator":Z.ending={score:0,grade:"纪念",title:"自由自在的森林生活",taste:0,growth:0,dress:0,bond:0,dessert:"与朋友分享的掌声"},wt(),bs();break}}De("#game").addEventListener("click",n=>{const e=n.target.closest("[data-action]");e&&!e.disabled&&(Dn(),Go(e.dataset.action,e.dataset.id,e))});De("#game").addEventListener("input",n=>{n.target.id==="music-volume"&&(Qt.volume=Number(n.target.value)/100,De("#music-volume-value").textContent=`${n.target.value}%`),n.target.id==="heat-slider"&&(z==null?void 0:z.phase)==="heat"&&(z.temperature=Number(n.target.value),De("#temperature").textContent=z.temperature)});De("#sound").onclick=()=>Go("sound");De("#help").onclick=()=>{z||Uu()};window.addEventListener("keydown",n=>{mt!=null&&mt.opened||dt!=null&&dt.opened||$t!=null&&$t.opened||n.target.matches("input,textarea")||(n.code==="Space"&&(z==null?void 0:z.phase)==="mix"?(n.preventDefault(),n.repeat||Tu()):n.key==="Escape"&&!z&&_n())});let La=performance.now();function Ao(n){if(mt==null||mt.updateEntry(),dt==null||dt.updatePet(Gn==="home"&&(!cn||cn==="bag"||cn==="schedule")&&!(mt!=null&&mt.opened)&&!(dt!=null&&dt.opened)&&!($t!=null&&$t.opened)),mt!=null&&mt.opened||dt!=null&&dt.opened||$t!=null&&$t.opened){La=n,requestAnimationFrame(Ao);return}!document.hidden&&(z==null?void 0:z.type)==="course"&&z.feedback&&Ue.getInfo().classroomMotion.complete&&(z.feedback=!1,z.q++,z.q<3?Au():o0()),!document.hidden&&(z==null?void 0:z.type)==="tasting"&&Ue.getInfo().bakingMotion.complete&&i0();const e=Math.min(n-La,100);if(La=n,document.hidden||(v0(e),(z==null?void 0:z.type)==="gather"&&($n==null||$n.tick(e))),!document.hidden&&(z==null?void 0:z.phase)==="mix"){const t=De("#mix-needle");t&&(t.style.left=`${Eu(n)*100}%`)}if(!document.hidden&&(z==null?void 0:z.phase)==="heat"){z.elapsed=(z.elapsed||0)+e;const t=Math.abs(z.temperature-z.recipe.temp);z.heatTotal+=Math.max(0,1-Math.max(0,t-3)/32)*e,z.heatSamples+=e,De("#heat-progress").style.width=`${Math.min(100,z.elapsed/80)}%`,De("#heat-time").textContent=`${Math.max(0,Math.ceil(8-z.elapsed/1e3))} 秒`,De("#heat-feedback").textContent=t<=8?"温度刚刚好，保持住。":z.temperature<z.recipe.temp?"还不够暖，再加一点火。":"有点烫，稍微降低温度。",z.elapsed>=8e3&&t0()}requestAnimationFrame(Ao)}$t=yd({game:De("#game"),getState:()=>Z,save:wt,world:Ue,pause:n=>Ue.setPaused(n),onEquipped:_n});dt=Td({game:De("#game"),getState:()=>Z,save:wt,refresh:Xt,pause:n=>Ue.setPaused(n),world:Ue,onWear:Ru,onRecipes:()=>Go("recipes")});mt=Ud({game:De("#game"),getState:()=>Z,getContext:()=>{var n;return{view:Gn,panel:cn,collectionOpen:!!(dt!=null&&dt.opened)||!!($t!=null&&$t.opened),phase:z==null?void 0:z.phase,activityName:De("#scene-label").textContent,recipe:(n=z==null?void 0:z.recipe)==null?void 0:n.name}},save:wt,refresh:Xt,pause:(n,e=0)=>{Ue.setPaused(n),!n&&(z==null?void 0:z.phase)==="mix"&&(z.start+=e)},portrait:()=>Ue.getDialoguePortrait(),onAlbum:()=>dt.album(),onActivity:()=>S0()});requestAnimationFrame(Ao);_n();ms&&Pt(ms);window.__acorn={get state(){return structuredClone(Z)},get view(){return Gn},get panel(){return cn},get round(){return z?structuredClone(z):null},renderer:()=>Ue.getInfo()};
