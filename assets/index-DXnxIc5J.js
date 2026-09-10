(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const $a="acorn-intro-seen-morning-v1";function dd(n,e=()=>{}){try{if(localStorage.getItem($a))return null}catch{}n.classList.add("intro-active");const t=document.createElement("div");t.className="intro-layer",t.hidden=!0,t.innerHTML='<video playsinline muted preload="auto"></video><p class="intro-status" role="status">正在准备片头…</p><button class="intro-enter">进入松团子的世界</button>';const i=t.querySelector("video"),r=t.querySelector(".intro-enter"),s=t.querySelector(".intro-status"),a=new AbortController;let o;i.poster="/acorn-witch-atelier/assets/intro/arrival-morning-poster.png",i.muted=!0,n.append(t);let l=!1;function c(){if(!l){l=!0,a.abort(),i.pause();try{localStorage.setItem($a,"1")}catch{}n.classList.add("intro-leaving"),setTimeout(()=>{t.remove(),i.removeAttribute("src"),i.load(),o&&URL.revokeObjectURL(o),n.classList.remove("intro-active","intro-leaving"),e()},2200)}}return r.onclick=c,i.onended=c,i.onerror=()=>{s.textContent="片头暂时无法播放，可以直接进入小屋。"},{async start(){t.hidden=!1;try{const u=await fetch("/acorn-witch-atelier/assets/intro/arrival-morning.mp4",{signal:a.signal});if(!u.ok)throw new Error("片头下载失败");const d=await u.blob();if(l)return;o=URL.createObjectURL(d),i.src=o;try{await i.play(),s.hidden=!0}catch{s.textContent="点击画面播放片头，或直接进入小屋。",i.onclick=()=>i.play().then(()=>{s.hidden=!0}).catch(()=>{})}}catch(u){u.name!=="AbortError"&&(s.textContent="片头暂时无法载入，可以直接进入小屋。")}},get active(){return!l}}}function hd(){try{localStorage.removeItem($a)}catch{}location.reload()}const Gc="acorn-witch-save-v1",pr={baking:"烘焙",magic:"魔法",style:"审美",knowledge:"学识",charm:"亲和"},Vo={acorn:"橡果",berry:"莓果",cream:"奶油",herb:"香草",honey:"蜂蜜"},mr=[{id:"tart",name:"星光橡果塔",note:"酥脆塔皮，藏着一小片星空。",need:{acorn:2,berry:1,cream:1},temp:180,spell:"star",color:"#d9a050"},{id:"pie",name:"莓果云朵派",note:"把森林的清甜，叠进奶油云朵。",need:{berry:2,cream:1,herb:1},temp:170,spell:"forest",color:"#b54f65"},{id:"pudding",name:"蜂蜜布丁",note:"温柔的蜂蜜香，适合送给朋友。",need:{honey:2,cream:1},temp:160,spell:"heal",color:"#e3ba59"},{id:"maple",unlock:!0,name:"枫糖橡果饼",note:"轮盘新菜单 · 蜂蜜香裹住烤橡果。",need:{acorn:2,honey:1,cream:1},temp:175,spell:"forest",color:"#c69049"},{id:"berryroll",unlock:!0,name:"莓果奶油卷",note:"轮盘新菜单 · 把莓果卷进软软的奶油里。",need:{berry:2,cream:2,honey:1},temp:165,spell:"heal",color:"#dba3ad"}],qi=[{id:"acorn",name:"橡果烘焙师",short:"烘焙师",description:"松鼠围裙 · 格纹口袋 · 软软堆堆袜",color:"#776044",tags:"甜美 · 温暖",bonus:8,price:0},{id:"tea",name:"莓果茶会",short:"洛丽塔",description:"层叠蕾丝蓬裙 · 缎带蝴蝶结 · 玛丽珍鞋",color:"#b87587",tags:"甜美 · 华丽",bonus:14,price:70},{id:"forest",name:"森林小洋装",short:"小洋装",description:"短斗篷外套 · 收腰裙 · 小挎包与短靴",color:"#436d58",tags:"森林 · 温暖",bonus:10,price:55},{id:"school",name:"橡果学院",short:"校服",description:"水手领 · 格纹百褶裙 · 书包与银色耳环",color:"#3d4e59",tags:"学院 · 清新",bonus:12,price:45},{id:"adventure",name:"森林探险家",short:"冒险装",description:"短披风 · 皮革护腰 · 工具腰包与叶片耳坠",color:"#6b744f",tags:"冒险 · 自然",bonus:18,price:100},{id:"star",name:"飞行小魔女",short:"小魔女",description:"深蓝宽松裙 · 红蝴蝶结 · 送信包与扫帚",color:"#3d405b",tags:"魔法 · 自由",bonus:16,price:85}];function $c(){return{version:1,day:1,slot:0,energy:90,mood:75,coins:300,stats:{baking:12,magic:8,style:8,knowledge:8,charm:10},inventory:{acorn:6,berry:5,cream:5,herb:3,honey:4},desserts:[],outfit:"acorn",owned:["acorn"],friendship:0,story:0,records:[],memories:[],memoryStamps:[],ending:null}}function ur(n,e){return Object.entries(e.need).every(([t,i])=>n.inventory[t]>=i)}function fd(n,e,t,i,r){return Math.min(100,Math.round(20+e*30+t*25+(i===r.spell?12:5)+Math.min(13,n.stats.baking*.25+n.stats.magic*.15)))}function Wc(n){return n>=88?"S":n>=72?"A":n>=52?"B":"C"}function _i(n,e){return(!n.ending||n.day>7)&&n.energy>=e&&!(n.day===7&&n.slot===3)}function pd(n,{name:e,cost:t=0,stats:i={},mood:r=0,coins:s=0,energy:a=0,ingredients:o={},dessert:l=null,friendship:c=0}){if(!_i(n,t))throw new Error("没有足够的体力或行动时段");if(n.coins+s<0)throw new Error("金币不足");for(const[u,d]of Object.entries(o))if(n.inventory[u]+d<0)throw new Error("材料不足");n.energy=Math.min(100,n.energy-t+a),n.mood=Math.max(0,Math.min(100,n.mood+r)),n.coins+=s;for(const[u,d]of Object.entries(i))n.stats[u]+=d;for(const[u,d]of Object.entries(o))n.inventory[u]+=d;return l&&n.desserts.push(l),n.friendship+=c,n.records.unshift({day:n.day,slot:n.slot,name:e,id:crypto.randomUUID(),createdAt:new Date().toISOString()}),n.slot++,n.slot===3&&n.day!==7&&(n.day++,n.slot=0,n.energy=Math.min(100,n.energy+25)),n}function md(n,e){const t=Math.round(e.score*.5),i=Math.min(25,Math.round(n.stats.baking*.35+n.stats.magic*.25+n.stats.knowledge*.15)),r=Math.min(20,qi.find(l=>l.id===n.outfit).bonus+Math.floor(n.stats.style*.2)),s=Math.min(5,Math.floor(n.friendship/2)),a=t+i+r+s,o=a>=88?"金色掌声之夜":n.friendship>=6?"有人为你而来":n.stats.magic>n.stats.baking?"秋叶与星光":"第一份秋日心意";return{score:a,grade:Wc(a),title:o,taste:t,growth:i,dress:r,bond:s,dessert:e.name}}const Xi=[{guest:"放学的小客人",request:"甜点配一杯热茶，想暖暖手。",choice:"tea",motion:"child"},{guest:"结伴而来的街坊",request:"今天想喝热可可，搭配一小块甜点。",choice:"cocoa",motion:"queue"},{guest:"喜欢甜味的小姐",request:"今天想吃甜一点的，请加一杯蜂蜜茶。",choice:"honey",motion:"vip"}],_s=2e4;function gd(n,e){const t=e.filter(a=>a.correct).length,i=e.filter(a=>a.perfect).length,r=Math.round((Math.round(n*.6)+18)*t/Xi.length),s=i*5;return{served:t,perfect:i,sales:r,tips:s,coins:r+s,satisfaction:Math.round(t/Xi.length*100),charm:t,mood:t||-2}}const _d=5,vs=35,Go=[{id:"ribbon",slot:"accessory",name:"秋色蝴蝶结"},{id:"moon",slot:"accessory",name:"琥珀月牙耳饰"},{id:"leaf",slot:"accessory",name:"秋叶橡果发夹"}],ki=[{id:"orange",name:"橘猫",look:"橘色条纹 · 圆滚滚",line:"它把脑袋放在我的鞋上了……这是想跟我们回家吗？",action:"蹲下来摸摸它",reply:"咕噜噜……它眯着眼，把脑袋往你手心里送。"},{id:"calico",name:"三花猫",look:"橙黑花斑 · 爱扑落叶",line:"那片叶子是我变的。它追了这么久，我再变一片给它吧。",action:"陪它追落叶",reply:"它抬起爪子接住叶子，又轻轻推到了你面前。"},{id:"silver",name:"银渐层",look:"银白绒毛 · 圆脸",line:"像一小团落到地上的云。云也会呼噜吗？",action:"轻轻挠下巴",reply:"它仰起圆圆的脸，闭着眼睛蹭了蹭你的手。"},{id:"ragdoll",name:"布偶猫",look:"蓝眼睛 · 蓬松长毛",line:"它靠过来以后，我都舍不得翻书了。再坐一会儿吧。",action:"陪它打个盹",reply:"蓬松的尾巴轻轻一卷，它安心地靠着你睡着了。"},{id:"siamese",name:"暹罗猫",look:"蓝眼睛 · 深色脸爪",line:"我走到哪儿，它就跟到哪儿。你看，它又在问我们什么呢。",action:"轻声回应它",reply:"喵——它歪歪头，向你又迈近了一小步。"},{id:"black",name:"黑猫",look:"黑色短毛 · 金色眼睛",line:"我的帽子好像在动……原来你在这里！",action:"伸手打个招呼",reply:"黑色的小爪子伸过来，认真地碰了碰你的指尖。"},{id:"golden",name:"金渐层",look:"金色绒毛 · 圆脸绿眼",line:"它的毛和晒过太阳的秋叶一个颜色。我们叫它什么好呢？",action:"轻轻摸摸背",reply:"它舒舒服服地伸了个懒腰，又团成一小颗金色毛球。"},{id:"devon",name:"德文猫",look:"大耳朵 · 短卷毛",line:"它的耳朵也好大！是在偷偷听秋天说话吗？",action:"凑近悄悄说话",reply:"它竖起大耳朵，轻轻蹭了蹭你，像听懂了秘密。"},{id:"abyssinian",name:"阿比西尼亚猫",look:"暖棕短毛 · 修长灵巧",line:"刚才还在门边，一转眼就到椅背上了。真像一阵秋风。",action:"晃一晃秋叶",reply:"它轻巧地跃过去，停下时还回头等你跟上。"}],Bt=[{id:"magic",name:"第一片会飞的秋叶",activity:"course",stat:"magic",threshold:20,condition:"魔法达到 20 后完成一节课",costume:"魔女装 · 彩窗教室",lines:["同学们离开后，窗边那片秋叶仍悬在半空，怎么也落不下来。松团子收起笑容，重新翻开了课本。","「我只练过让它飞起来……书上怎么没写，它不肯下来怎么办？」","她试着把声音放轻，秋叶却绕着灯罩越转越快。叶柄碰到铜铃，清脆的一声响让她缩了缩耳朵。","她伸出的手停住了，转而把书合上。「也许它不是想听更多咒语。我先不催它了。」","铃声渐渐停了。她摊开空着的手，让叶子自己靠近；那点微光终于从灯罩旁慢慢降下来。","叶子在掌心上方摇了一下，安静地落下。她没有马上欢呼，而是认真看了看自己还在发抖的手。","「原来停下来也要练习。我以前总想让大家看看，我能把魔法变得多漂亮。」","她在课本空白处画下一片小叶子。「这一页先留着吧。你觉得刚才，是哪里开始不一样了？」"]},{id:"baking",name:"第一口，留给你",activity:"baking",stat:"baking",threshold:27,condition:"烘焙达到 27 后完成一次烘焙",costume:"围裙 · 小屋厨房",lines:["甜点已经出炉，松团子却拿着两只小盘子，在桌边站了很久。","「这一口本来想留给你……可是如果不合你的口味呢？」","她低头整理奶油，越想让它完美，叉尖越不听话。一小块莓果滑了下来，留下歪歪的缺口。","她的尾巴垂下来，伸手去拿备用的盘子，又停住了。「我是不是把分享，弄得像交作业一样？」","她放下装饰用的小匙，把那块不太整齐的甜点放到窗边，又给另一只盘子分了一小份。","「我可以先说实话：这里有点酸，边缘也烤得脆了。可是刚打开烤箱的时候，我第一个想到的是你。」","她把小叉子放在盘边，终于不再修补那个缺口。「不喜欢也可以告诉我，不用为了让我高兴说好吃。」","她坐到桌边，给你留出挑选的余地。「下一次，我们试着做一种你喜欢、我也想尝尝的味道，好吗？」"]},{id:"shop",name:"打烊后的掌声",activity:"shop",stat:"charm",threshold:16,condition:"亲和达到 16 后完成一次营业",costume:"围裙 · 烘焙小铺",lines:["最后一位客人离开后，松团子在桌脚旁发现了一张折起来的纸。","纸上画着一块甜点，下面只写着几个字：下次还想来，可是我不太敢开口。","她对着门外看了看，街上已经没有刚才那位小客人的身影。「我今天一直在忙，都没发现它想说话。」","她原本要擦掉柜台上的欢迎字样，手里的布停在半空。「是不是一定要会大声点单，才能被好好招待？」","她找来一张旧菜单，把饮品旁边画上杯子，又在角落留出一块空白。","「不会说的时候，可以指给我看。不知道想要什么，也可以慢慢选。」她把菜单放到更低、容易够到的地方。","门外传来轻轻的脚步，刚才的小客人探头看了看新菜单。松团子没有催促，只笑着把它往前推了一点。","小客人点了点那幅杯子。她回头轻声问你：「空白的这一角，还能写点什么，让它知道不着急呢？」"]},{id:"explore",name:"秋风知道的小路",activity:"gather",visits:3,condition:"完成三次森林采集",costume:"冒险装 · 榛果林",lines:["小路尽头，松团子在熟悉的苔草旁停下来。昨夜落下的树枝挡住了那条窄窄的路。","「我小时候总从这里过去。你听，树叶的声音……今天好像不太一样。」","灌木底下传来细小的摩擦声。一只刺猬拖着叶子绕来绕去，每次都被同一根横枝挡回来。","松团子刚要伸手抱它，刺猬就缩成了小球。她立刻退后，把自己的尾巴也收了起来。","「它不认识我。我以为帮忙就是把它带过去，可它可能只想自己走。」她蹲远了一点，耐心等那颗小球重新展开。","刺猬又试着往左钻。她顺着那个方向，轻轻拨开几片压低的蕨叶，让那条原本就有的小缝重新露出来。","小小的身影穿过缝隙消失了，灌木另一侧响起窸窣声。松团子躺回苔草上，长长地松了一口气。","「原来这条路不只属于我的回忆。」她侧过脸看你。「以后再来，我们怎么走，才不会挡住这些小邻居呢？」"]},{id:"bond",name:"再陪我读一页",activity:"home",bond:12,condition:"与松团子的好感达到 12，回到小屋",costume:"日常围裙装 · 窗边",lines:["松团子把书挪过来，却在同一页上停了很久。故事里的小旅人刚向朋友告别。","「它都说了会回来，为什么留下来的那个人还是难过呢？」","她往后翻了两页，又急忙翻回来。「我想先看看结局……这样就不用一直担心了吧。」","窗外传来风声，一张夹在书里的旧书签滑到桌上。上面是她刚学会写名字时，留下的歪歪扭扭的字。","她拾起书签，慢慢把书翻回原来的那页。「那个时候，我也不知道自己后来能把名字写好。」","她把想偷看的后半本合住，只留出眼前这一页。「也许不知道以后怎样的时候，现在的陪伴才会这么重要。」","她读完了小旅人出门的那一段，这次没有急着找结局，肩膀也渐渐放松下来。","「我还会担心的。」她把书签放在两页中间。「但今天可以先读到这里。你有没有一段舍不得翻过去的故事？」"]},{id:"festival",name:"把秋天送给你",activity:"festival",condition:"参加第七天的秋日祭",costume:"秋日盛装 · 祭典广场",lines:["广场上的灯亮起来时，松团子还攥着那片准备送出的秋叶，叶边已经被手心捂得微微卷起。","「大家的礼物都有漂亮的盒子。我找了很久，好像只找得到这种东西。」","一阵风吹过，叶片的微光暗了下来。她连忙用双手护住它，却越护越紧。","她看着路边孩子们捡起普通落叶，互相交换形状和颜色，慢慢松开了手指。","「它不一定要一直发光，才值得被留下吧？」她把叶子放平，让灯火照见叶面细细的脉络。","她指着其中一道纹路，说起第一次走进小屋时的紧张，又说到那些想问、却一直没敢问出口的问题。","「我原来想把整个秋天都送出去。现在想想，应该先问问你，愿不愿意留下我们一起过的这一小段。」","她伸出手，让叶子安静地躺在掌心。「不用现在就回答。灯还亮着，我们可以慢慢说。」"]}],dr=[{id:"warm",name:"暖茸茸的初遇",cats:["golden","devon","orange"],part:"ribbon",menu:"maple"},{id:"forest",name:"林间小脚印",cats:["abyssinian","calico","black"],part:"moon",menu:"berryroll"},{id:"tea",name:"午后茶会",cats:["orange","silver","golden"],part:"leaf",menu:"maple"},{id:"moon",name:"月亮的来客",cats:["ragdoll","siamese","silver"],part:"ribbon",menu:"berryroll"},{id:"hat",name:"帽子里的秘密",cats:["black","devon","calico"],part:"moon",menu:"maple"}];function At(n){var t;n.collection??(n.collection={});const e=n.collection;return e.community??(e.community={calls:[],works:[],reads:[],collabs:[],recruitments:[],startRecords:((t=n.records)==null?void 0:t.length)??0}),e.customOutfits??(e.customOutfits=[]),e.activeCustom??(e.activeCustom=null),e.cgs??(e.cgs=[]),e.seen??(e.seen=[]),e.pets??(e.pets=[]),e.petNames??(e.petNames={}),e.activePet??(e.activePet=null),e.petInteractions??(e.petInteractions={}),e.parts??(e.parts=[]),e.menus??(e.menus=[]),e.draws??(e.draws={}),e.bond??(e.bond=0),e.bondSources??(e.bondSources=[]),e.visits??(e.visits={}),e.wear??(e.wear={accessory:null}),e}function qc(n,e){const t=At(n);t.bondSources.includes(e)||(t.bondSources.push(e),t.bond=Math.min(100,t.bond+2))}function Xc(n,e){const t=At(n);if(t.cgs.includes(e))return!1;t.cgs.push(e),n.memories??(n.memories=[]);const i=Bt.find(r=>r.id===e);return n.memories.push({id:`cg-${e}`,title:i.name,summary:i.lines.at(-1),activity:i.activity,kind:"canon",cg:e,day:n.day,slot:n.slot,createdAt:new Date().toISOString()}),!0}function Yc(n,e){const t=At(n);for(const i of Bt)i.activity!==e||i.id==="festival"||i.stat&&n.stats[i.stat]<i.threshold||i.visits&&(t.visits[e]??0)<i.visits||i.bond&&t.bond<i.bond||Xc(n,i.id)}function vd(n,e){const t=At(n);t.visits[e]=(t.visits[e]??0)+1,qc(n,`${n.day}:${e}`),Yc(n,e)}function xd(n){return[...n.cats.map(e=>({id:`pet-${e}`,type:"pet",item:e,name:ki.find(t=>t.id===e).name})),{id:`part-${n.part}`,type:"part",item:n.part,name:Go.find(e=>e.id===n.part).name},{id:"outfit-tea",type:"outfit",item:"tea",name:"莓果茶会套装"},{id:`menu-${n.menu}`,type:"menu",item:n.menu,name:mr.find(e=>e.id===n.menu).name},{id:"coins-20",type:"coins",amount:20,name:"20 金币"}]}function Wa(n,e){const t=At(n),i=dr.find(r=>r.id===e);return i?xd(i).filter(r=>!(t.draws[e]??[]).includes(r.id)&&!(r.type==="pet"&&t.pets.includes(r.item))&&!(r.type==="part"&&t.parts.includes(r.item))&&!(r.type==="menu"&&t.menus.includes(r.item))&&!(r.type==="outfit"&&n.owned.includes(r.item))):[]}function yd(n,e,t=Math.random()){var a;const i=Wa(n,e);if(n.coins<vs)throw new Error("金币不足，去小铺接待客人吧。");if(!i.length)throw new Error("这期已经收集齐啦。");if(!Number.isFinite(t)||t<0||t>=1)throw new Error("抽取值无效");const r=i[Math.floor(t*i.length)],s=n.collection;return n.coins-=vs,(a=s.draws)[e]??(a[e]=[]),s.draws[e].push(r.id),r.type==="coins"&&(n.coins+=r.amount),r.type==="pet"&&(s.pets.push(r.item),s.activePet??(s.activePet=r.item)),r.type==="part"&&s.parts.push(r.item),r.type==="menu"&&s.menus.push(r.item),r.type==="outfit"&&n.owned.push(r.item),s.lastReward={...r,poolId:e},r}function bd(n){return mr.filter(e=>!e.unlock||At(n).menus.includes(e.id))}const bi=240;function Sd(n){var i;const e=new Set(((i=n.collection)==null?void 0:i.cgs)??[]);return{level:2,percent:20,count:Bt.filter(r=>e.has(r.id)).length,total:Bt.length,next:Bt.find(r=>!e.has(r.id))}}function jc(n){var a;const e=At(n).community,t=e.works.length+(((a=n.characterStories)==null?void 0:a.length)??0),i=60+t*20+e.collabs.length*15,r=60+e.calls.length*5+Math.max(0,n.records.length-e.startRecords)*2+e.reads.length*2,s=i+r;return{level:1+Math.floor(s/100),percent:s%100,richness:i,popularity:r,works:t,experience:s}}function Md(n,e=new Date){const t=[e.getFullYear(),e.getMonth()+1,e.getDate()].join("-"),i=At(n).community;return i.calls.includes(t)?!1:(i.calls.push(t),!0)}function Ed(n,e){const t=At(n).community;return!["story","image","video","remix"].includes(e)||t.works.includes(e)?!1:(t.works.push(e),!0)}function ul(n,e){const t=At(n).community;return t.collabs.includes(e)?!1:(t.collabs.push(e),!0)}function Td(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Si={},Us,dl;function wd(){return dl||(dl=1,Us=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Us}var Ns={},kn={},hl;function vi(){if(hl)return kn;hl=1;let n;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return kn.getSymbolSize=function(i){if(!i)throw new Error('"version" cannot be null or undefined');if(i<1||i>40)throw new Error('"version" should be in range from 1 to 40');return i*4+17},kn.getSymbolTotalCodewords=function(i){return e[i]},kn.getBCHDigit=function(t){let i=0;for(;t!==0;)i++,t>>>=1;return i},kn.setToSJISFunction=function(i){if(typeof i!="function")throw new Error('"toSJISFunc" is not a valid function.');n=i},kn.isKanjiModeEnabled=function(){return typeof n<"u"},kn.toSJIS=function(i){return n(i)},kn}var Fs={},fl;function $o(){return fl||(fl=1,function(n){n.L={bit:1},n.M={bit:0},n.Q={bit:3},n.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return n.L;case"m":case"medium":return n.M;case"q":case"quartile":return n.Q;case"h":case"high":return n.H;default:throw new Error("Unknown EC Level: "+t)}}n.isValid=function(i){return i&&typeof i.bit<"u"&&i.bit>=0&&i.bit<4},n.from=function(i,r){if(n.isValid(i))return i;try{return e(i)}catch{return r}}}(Fs)),Fs}var Os,pl;function Ad(){if(pl)return Os;pl=1;function n(){this.buffer=[],this.length=0}return n.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},Os=n,Os}var Bs,ml;function Cd(){if(ml)return Bs;ml=1;function n(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return n.prototype.set=function(e,t,i,r){const s=e*this.size+t;this.data[s]=i,r&&(this.reservedBit[s]=!0)},n.prototype.get=function(e,t){return this.data[e*this.size+t]},n.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i},n.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},Bs=n,Bs}var ks={},gl;function Rd(){return gl||(gl=1,function(n){const e=vi().getSymbolSize;n.getRowColCoords=function(i){if(i===1)return[];const r=Math.floor(i/7)+2,s=e(i),a=s===145?26:Math.ceil((s-13)/(2*r-2))*2,o=[s-7];for(let l=1;l<r-1;l++)o[l]=o[l-1]-a;return o.push(6),o.reverse()},n.getPositions=function(i){const r=[],s=n.getRowColCoords(i),a=s.length;for(let o=0;o<a;o++)for(let l=0;l<a;l++)o===0&&l===0||o===0&&l===a-1||o===a-1&&l===0||r.push([s[o],s[l]]);return r}}(ks)),ks}var zs={},_l;function Pd(){if(_l)return zs;_l=1;const n=vi().getSymbolSize,e=7;return zs.getPositions=function(i){const r=n(i);return[[0,0],[r-e,0],[0,r-e]]},zs}var Hs={},vl;function Ld(){return vl||(vl=1,function(n){n.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};n.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},n.from=function(r){return n.isValid(r)?parseInt(r,10):void 0},n.getPenaltyN1=function(r){const s=r.size;let a=0,o=0,l=0,c=null,u=null;for(let d=0;d<s;d++){o=l=0,c=u=null;for(let f=0;f<s;f++){let p=r.get(d,f);p===c?o++:(o>=5&&(a+=e.N1+(o-5)),c=p,o=1),p=r.get(f,d),p===u?l++:(l>=5&&(a+=e.N1+(l-5)),u=p,l=1)}o>=5&&(a+=e.N1+(o-5)),l>=5&&(a+=e.N1+(l-5))}return a},n.getPenaltyN2=function(r){const s=r.size;let a=0;for(let o=0;o<s-1;o++)for(let l=0;l<s-1;l++){const c=r.get(o,l)+r.get(o,l+1)+r.get(o+1,l)+r.get(o+1,l+1);(c===4||c===0)&&a++}return a*e.N2},n.getPenaltyN3=function(r){const s=r.size;let a=0,o=0,l=0;for(let c=0;c<s;c++){o=l=0;for(let u=0;u<s;u++)o=o<<1&2047|r.get(c,u),u>=10&&(o===1488||o===93)&&a++,l=l<<1&2047|r.get(u,c),u>=10&&(l===1488||l===93)&&a++}return a*e.N3},n.getPenaltyN4=function(r){let s=0;const a=r.data.length;for(let l=0;l<a;l++)s+=r.data[l];return Math.abs(Math.ceil(s*100/a/5)-10)*e.N4};function t(i,r,s){switch(i){case n.Patterns.PATTERN000:return(r+s)%2===0;case n.Patterns.PATTERN001:return r%2===0;case n.Patterns.PATTERN010:return s%3===0;case n.Patterns.PATTERN011:return(r+s)%3===0;case n.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(s/3))%2===0;case n.Patterns.PATTERN101:return r*s%2+r*s%3===0;case n.Patterns.PATTERN110:return(r*s%2+r*s%3)%2===0;case n.Patterns.PATTERN111:return(r*s%3+(r+s)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}n.applyMask=function(r,s){const a=s.size;for(let o=0;o<a;o++)for(let l=0;l<a;l++)s.isReserved(l,o)||s.xor(l,o,t(r,l,o))},n.getBestMask=function(r,s){const a=Object.keys(n.Patterns).length;let o=0,l=1/0;for(let c=0;c<a;c++){s(c),n.applyMask(c,r);const u=n.getPenaltyN1(r)+n.getPenaltyN2(r)+n.getPenaltyN3(r)+n.getPenaltyN4(r);n.applyMask(c,r),u<l&&(l=u,o=c)}return o}}(Hs)),Hs}var Dr={},xl;function Kc(){if(xl)return Dr;xl=1;const n=$o(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return Dr.getBlocksCount=function(r,s){switch(s){case n.L:return e[(r-1)*4+0];case n.M:return e[(r-1)*4+1];case n.Q:return e[(r-1)*4+2];case n.H:return e[(r-1)*4+3];default:return}},Dr.getTotalCodewordsCount=function(r,s){switch(s){case n.L:return t[(r-1)*4+0];case n.M:return t[(r-1)*4+1];case n.Q:return t[(r-1)*4+2];case n.H:return t[(r-1)*4+3];default:return}},Dr}var Vs={},rr={},yl;function Dd(){if(yl)return rr;yl=1;const n=new Uint8Array(512),e=new Uint8Array(256);return function(){let i=1;for(let r=0;r<255;r++)n[r]=i,e[i]=r,i<<=1,i&256&&(i^=285);for(let r=255;r<512;r++)n[r]=n[r-255]}(),rr.log=function(i){if(i<1)throw new Error("log("+i+")");return e[i]},rr.exp=function(i){return n[i]},rr.mul=function(i,r){return i===0||r===0?0:n[e[i]+e[r]]},rr}var bl;function Id(){return bl||(bl=1,function(n){const e=Dd();n.mul=function(i,r){const s=new Uint8Array(i.length+r.length-1);for(let a=0;a<i.length;a++)for(let o=0;o<r.length;o++)s[a+o]^=e.mul(i[a],r[o]);return s},n.mod=function(i,r){let s=new Uint8Array(i);for(;s.length-r.length>=0;){const a=s[0];for(let l=0;l<r.length;l++)s[l]^=e.mul(r[l],a);let o=0;for(;o<s.length&&s[o]===0;)o++;s=s.slice(o)}return s},n.generateECPolynomial=function(i){let r=new Uint8Array([1]);for(let s=0;s<i;s++)r=n.mul(r,new Uint8Array([1,e.exp(s)]));return r}}(Vs)),Vs}var Gs,Sl;function Ud(){if(Sl)return Gs;Sl=1;const n=Id();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(i){this.degree=i,this.genPoly=n.generateECPolynomial(this.degree)},e.prototype.encode=function(i){if(!this.genPoly)throw new Error("Encoder not initialized");const r=new Uint8Array(i.length+this.degree);r.set(i);const s=n.mod(r,this.genPoly),a=this.degree-s.length;if(a>0){const o=new Uint8Array(this.degree);return o.set(s,a),o}return s},Gs=e,Gs}var $s={},Ws={},qs={},Ml;function Zc(){return Ml||(Ml=1,qs.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),qs}var _n={},El;function Jc(){if(El)return _n;El=1;const n="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const i="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;_n.KANJI=new RegExp(t,"g"),_n.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),_n.BYTE=new RegExp(i,"g"),_n.NUMERIC=new RegExp(n,"g"),_n.ALPHANUMERIC=new RegExp(e,"g");const r=new RegExp("^"+t+"$"),s=new RegExp("^"+n+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return _n.testKanji=function(l){return r.test(l)},_n.testNumeric=function(l){return s.test(l)},_n.testAlphanumeric=function(l){return a.test(l)},_n}var Tl;function xi(){return Tl||(Tl=1,function(n){const e=Zc(),t=Jc();n.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},n.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},n.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},n.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},n.MIXED={bit:-1},n.getCharCountIndicator=function(s,a){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?s.ccBits[0]:a<27?s.ccBits[1]:s.ccBits[2]},n.getBestModeForData=function(s){return t.testNumeric(s)?n.NUMERIC:t.testAlphanumeric(s)?n.ALPHANUMERIC:t.testKanji(s)?n.KANJI:n.BYTE},n.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},n.isValid=function(s){return s&&s.bit&&s.ccBits};function i(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return n.NUMERIC;case"alphanumeric":return n.ALPHANUMERIC;case"kanji":return n.KANJI;case"byte":return n.BYTE;default:throw new Error("Unknown mode: "+r)}}n.from=function(s,a){if(n.isValid(s))return s;try{return i(s)}catch{return a}}}(Ws)),Ws}var wl;function Nd(){return wl||(wl=1,function(n){const e=vi(),t=Kc(),i=$o(),r=xi(),s=Zc(),a=7973,o=e.getBCHDigit(a);function l(f,p,g){for(let _=1;_<=40;_++)if(p<=n.getCapacity(_,g,f))return _}function c(f,p){return r.getCharCountIndicator(f,p)+4}function u(f,p){let g=0;return f.forEach(function(_){const m=c(_.mode,p);g+=m+_.getBitsLength()}),g}function d(f,p){for(let g=1;g<=40;g++)if(u(f,g)<=n.getCapacity(g,p,r.MIXED))return g}n.from=function(p,g){return s.isValid(p)?parseInt(p,10):g},n.getCapacity=function(p,g,_){if(!s.isValid(p))throw new Error("Invalid QR Code version");typeof _>"u"&&(_=r.BYTE);const m=e.getSymbolTotalCodewords(p),h=t.getTotalCodewordsCount(p,g),E=(m-h)*8;if(_===r.MIXED)return E;const b=E-c(_,p);switch(_){case r.NUMERIC:return Math.floor(b/10*3);case r.ALPHANUMERIC:return Math.floor(b/11*2);case r.KANJI:return Math.floor(b/13);case r.BYTE:default:return Math.floor(b/8)}},n.getBestVersionForData=function(p,g){let _;const m=i.from(g,i.M);if(Array.isArray(p)){if(p.length>1)return d(p,m);if(p.length===0)return 1;_=p[0]}else _=p;return l(_.mode,_.getLength(),m)},n.getEncodedBits=function(p){if(!s.isValid(p)||p<7)throw new Error("Invalid QR Code version");let g=p<<12;for(;e.getBCHDigit(g)-o>=0;)g^=a<<e.getBCHDigit(g)-o;return p<<12|g}}($s)),$s}var Xs={},Al;function Fd(){if(Al)return Xs;Al=1;const n=vi(),e=1335,t=21522,i=n.getBCHDigit(e);return Xs.getEncodedBits=function(s,a){const o=s.bit<<3|a;let l=o<<10;for(;n.getBCHDigit(l)-i>=0;)l^=e<<n.getBCHDigit(l)-i;return(o<<10|l)^t},Xs}var Ys={},js,Cl;function Od(){if(Cl)return js;Cl=1;const n=xi();function e(t){this.mode=n.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(i){return 10*Math.floor(i/3)+(i%3?i%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(i){let r,s,a;for(r=0;r+3<=this.data.length;r+=3)s=this.data.substr(r,3),a=parseInt(s,10),i.put(a,10);const o=this.data.length-r;o>0&&(s=this.data.substr(r),a=parseInt(s,10),i.put(a,o*3+1))},js=e,js}var Ks,Rl;function Bd(){if(Rl)return Ks;Rl=1;const n=xi(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(i){this.mode=n.ALPHANUMERIC,this.data=i}return t.getBitsLength=function(r){return 11*Math.floor(r/2)+6*(r%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(r){let s;for(s=0;s+2<=this.data.length;s+=2){let a=e.indexOf(this.data[s])*45;a+=e.indexOf(this.data[s+1]),r.put(a,11)}this.data.length%2&&r.put(e.indexOf(this.data[s]),6)},Ks=t,Ks}var Zs,Pl;function kd(){if(Pl)return Zs;Pl=1;const n=xi();function e(t){this.mode=n.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(i){return i*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let i=0,r=this.data.length;i<r;i++)t.put(this.data[i],8)},Zs=e,Zs}var Js,Ll;function zd(){if(Ll)return Js;Ll=1;const n=xi(),e=vi();function t(i){this.mode=n.KANJI,this.data=i}return t.getBitsLength=function(r){return r*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let r;for(r=0;r<this.data.length;r++){let s=e.toSJIS(this.data[r]);if(s>=33088&&s<=40956)s-=33088;else if(s>=57408&&s<=60351)s-=49472;else throw new Error("Invalid SJIS character: "+this.data[r]+`
Make sure your charset is UTF-8`);s=(s>>>8&255)*192+(s&255),i.put(s,13)}},Js=t,Js}var Qs={exports:{}},Dl;function Hd(){return Dl||(Dl=1,function(n){var e={single_source_shortest_paths:function(t,i,r){var s={},a={};a[i]=0;var o=e.PriorityQueue.make();o.push(i,0);for(var l,c,u,d,f,p,g,_,m;!o.empty();){l=o.pop(),c=l.value,d=l.cost,f=t[c]||{};for(u in f)f.hasOwnProperty(u)&&(p=f[u],g=d+p,_=a[u],m=typeof a[u]>"u",(m||_>g)&&(a[u]=g,o.push(u,g),s[u]=c))}if(typeof r<"u"&&typeof a[r]>"u"){var h=["Could not find a path from ",i," to ",r,"."].join("");throw new Error(h)}return s},extract_shortest_path_from_predecessor_list:function(t,i){for(var r=[],s=i;s;)r.push(s),t[s],s=t[s];return r.reverse(),r},find_path:function(t,i,r){var s=e.single_source_shortest_paths(t,i,r);return e.extract_shortest_path_from_predecessor_list(s,r)},PriorityQueue:{make:function(t){var i=e.PriorityQueue,r={},s;t=t||{};for(s in i)i.hasOwnProperty(s)&&(r[s]=i[s]);return r.queue=[],r.sorter=t.sorter||i.default_sorter,r},default_sorter:function(t,i){return t.cost-i.cost},push:function(t,i){var r={value:t,cost:i};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};n.exports=e}(Qs)),Qs.exports}var Il;function Vd(){return Il||(Il=1,function(n){const e=xi(),t=Od(),i=Bd(),r=kd(),s=zd(),a=Jc(),o=vi(),l=Hd();function c(h){return unescape(encodeURIComponent(h)).length}function u(h,E,b){const y=[];let A;for(;(A=h.exec(b))!==null;)y.push({data:A[0],index:A.index,mode:E,length:A[0].length});return y}function d(h){const E=u(a.NUMERIC,e.NUMERIC,h),b=u(a.ALPHANUMERIC,e.ALPHANUMERIC,h);let y,A;return o.isKanjiModeEnabled()?(y=u(a.BYTE,e.BYTE,h),A=u(a.KANJI,e.KANJI,h)):(y=u(a.BYTE_KANJI,e.BYTE,h),A=[]),E.concat(b,y,A).sort(function(w,P){return w.index-P.index}).map(function(w){return{data:w.data,mode:w.mode,length:w.length}})}function f(h,E){switch(E){case e.NUMERIC:return t.getBitsLength(h);case e.ALPHANUMERIC:return i.getBitsLength(h);case e.KANJI:return s.getBitsLength(h);case e.BYTE:return r.getBitsLength(h)}}function p(h){return h.reduce(function(E,b){const y=E.length-1>=0?E[E.length-1]:null;return y&&y.mode===b.mode?(E[E.length-1].data+=b.data,E):(E.push(b),E)},[])}function g(h){const E=[];for(let b=0;b<h.length;b++){const y=h[b];switch(y.mode){case e.NUMERIC:E.push([y,{data:y.data,mode:e.ALPHANUMERIC,length:y.length},{data:y.data,mode:e.BYTE,length:y.length}]);break;case e.ALPHANUMERIC:E.push([y,{data:y.data,mode:e.BYTE,length:y.length}]);break;case e.KANJI:E.push([y,{data:y.data,mode:e.BYTE,length:c(y.data)}]);break;case e.BYTE:E.push([{data:y.data,mode:e.BYTE,length:c(y.data)}])}}return E}function _(h,E){const b={},y={start:{}};let A=["start"];for(let T=0;T<h.length;T++){const w=h[T],P=[];for(let v=0;v<w.length;v++){const S=w[v],C=""+T+v;P.push(C),b[C]={node:S,lastCount:0},y[C]={};for(let I=0;I<A.length;I++){const F=A[I];b[F]&&b[F].node.mode===S.mode?(y[F][C]=f(b[F].lastCount+S.length,S.mode)-f(b[F].lastCount,S.mode),b[F].lastCount+=S.length):(b[F]&&(b[F].lastCount=S.length),y[F][C]=f(S.length,S.mode)+4+e.getCharCountIndicator(S.mode,E))}}A=P}for(let T=0;T<A.length;T++)y[A[T]].end=0;return{map:y,table:b}}function m(h,E){let b;const y=e.getBestModeForData(h);if(b=e.from(E,y),b!==e.BYTE&&b.bit<y.bit)throw new Error('"'+h+'" cannot be encoded with mode '+e.toString(b)+`.
 Suggested mode is: `+e.toString(y));switch(b===e.KANJI&&!o.isKanjiModeEnabled()&&(b=e.BYTE),b){case e.NUMERIC:return new t(h);case e.ALPHANUMERIC:return new i(h);case e.KANJI:return new s(h);case e.BYTE:return new r(h)}}n.fromArray=function(E){return E.reduce(function(b,y){return typeof y=="string"?b.push(m(y,null)):y.data&&b.push(m(y.data,y.mode)),b},[])},n.fromString=function(E,b){const y=d(E,o.isKanjiModeEnabled()),A=g(y),T=_(A,b),w=l.find_path(T.map,"start","end"),P=[];for(let v=1;v<w.length-1;v++)P.push(T.table[w[v]].node);return n.fromArray(p(P))},n.rawSplit=function(E){return n.fromArray(d(E,o.isKanjiModeEnabled()))}}(Ys)),Ys}var Ul;function Gd(){if(Ul)return Ns;Ul=1;const n=vi(),e=$o(),t=Ad(),i=Cd(),r=Rd(),s=Pd(),a=Ld(),o=Kc(),l=Ud(),c=Nd(),u=Fd(),d=xi(),f=Vd();function p(T,w){const P=T.size,v=s.getPositions(w);for(let S=0;S<v.length;S++){const C=v[S][0],I=v[S][1];for(let F=-1;F<=7;F++)if(!(C+F<=-1||P<=C+F))for(let z=-1;z<=7;z++)I+z<=-1||P<=I+z||(F>=0&&F<=6&&(z===0||z===6)||z>=0&&z<=6&&(F===0||F===6)||F>=2&&F<=4&&z>=2&&z<=4?T.set(C+F,I+z,!0,!0):T.set(C+F,I+z,!1,!0))}}function g(T){const w=T.size;for(let P=8;P<w-8;P++){const v=P%2===0;T.set(P,6,v,!0),T.set(6,P,v,!0)}}function _(T,w){const P=r.getPositions(w);for(let v=0;v<P.length;v++){const S=P[v][0],C=P[v][1];for(let I=-2;I<=2;I++)for(let F=-2;F<=2;F++)I===-2||I===2||F===-2||F===2||I===0&&F===0?T.set(S+I,C+F,!0,!0):T.set(S+I,C+F,!1,!0)}}function m(T,w){const P=T.size,v=c.getEncodedBits(w);let S,C,I;for(let F=0;F<18;F++)S=Math.floor(F/3),C=F%3+P-8-3,I=(v>>F&1)===1,T.set(S,C,I,!0),T.set(C,S,I,!0)}function h(T,w,P){const v=T.size,S=u.getEncodedBits(w,P);let C,I;for(C=0;C<15;C++)I=(S>>C&1)===1,C<6?T.set(C,8,I,!0):C<8?T.set(C+1,8,I,!0):T.set(v-15+C,8,I,!0),C<8?T.set(8,v-C-1,I,!0):C<9?T.set(8,15-C-1+1,I,!0):T.set(8,15-C-1,I,!0);T.set(v-8,8,1,!0)}function E(T,w){const P=T.size;let v=-1,S=P-1,C=7,I=0;for(let F=P-1;F>0;F-=2)for(F===6&&F--;;){for(let z=0;z<2;z++)if(!T.isReserved(S,F-z)){let X=!1;I<w.length&&(X=(w[I]>>>C&1)===1),T.set(S,F-z,X),C--,C===-1&&(I++,C=7)}if(S+=v,S<0||P<=S){S-=v,v=-v;break}}}function b(T,w,P){const v=new t;P.forEach(function(z){v.put(z.mode.bit,4),v.put(z.getLength(),d.getCharCountIndicator(z.mode,T)),z.write(v)});const S=n.getSymbolTotalCodewords(T),C=o.getTotalCodewordsCount(T,w),I=(S-C)*8;for(v.getLengthInBits()+4<=I&&v.put(0,4);v.getLengthInBits()%8!==0;)v.putBit(0);const F=(I-v.getLengthInBits())/8;for(let z=0;z<F;z++)v.put(z%2?17:236,8);return y(v,T,w)}function y(T,w,P){const v=n.getSymbolTotalCodewords(w),S=o.getTotalCodewordsCount(w,P),C=v-S,I=o.getBlocksCount(w,P),F=v%I,z=I-F,X=Math.floor(v/I),Y=Math.floor(C/I),N=Y+1,B=X-Y,W=new l(B);let D=0;const V=new Array(I),q=new Array(I);let ue=0;const Se=new Uint8Array(T.buffer);for(let Re=0;Re<I;Re++){const Ee=Re<z?Y:N;V[Re]=Se.slice(D,D+Ee),q[Re]=W.encode(V[Re]),D+=Ee,ue=Math.max(ue,Ee)}const Ne=new Uint8Array(v);let ee=0,ie,xe;for(ie=0;ie<ue;ie++)for(xe=0;xe<I;xe++)ie<V[xe].length&&(Ne[ee++]=V[xe][ie]);for(ie=0;ie<B;ie++)for(xe=0;xe<I;xe++)Ne[ee++]=q[xe][ie];return Ne}function A(T,w,P,v){let S;if(Array.isArray(T))S=f.fromArray(T);else if(typeof T=="string"){let X=w;if(!X){const Y=f.rawSplit(T);X=c.getBestVersionForData(Y,P)}S=f.fromString(T,X||40)}else throw new Error("Invalid data");const C=c.getBestVersionForData(S,P);if(!C)throw new Error("The amount of data is too big to be stored in a QR Code");if(!w)w=C;else if(w<C)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+C+`.
`);const I=b(w,P,S),F=n.getSymbolSize(w),z=new i(F);return p(z,w),g(z),_(z,w),h(z,P,0),w>=7&&m(z,w),E(z,I),isNaN(v)&&(v=a.getBestMask(z,h.bind(null,z,P))),a.applyMask(v,z),h(z,P,v),{modules:z,version:w,errorCorrectionLevel:P,maskPattern:v,segments:S}}return Ns.create=function(w,P){if(typeof w>"u"||w==="")throw new Error("No input text");let v=e.M,S,C;return typeof P<"u"&&(v=e.from(P.errorCorrectionLevel,e.M),S=c.from(P.version),C=a.from(P.maskPattern),P.toSJISFunc&&n.setToSJISFunction(P.toSJISFunc)),A(w,S,v,C)},Ns}var ea={},ta={},Nl;function Qc(){return Nl||(Nl=1,function(n){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let i=t.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+t);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(s){return[s,s]}))),i.length===6&&i.push("F","F");const r=parseInt(i.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+i.slice(0,6).join("")}}n.getOptions=function(i){i||(i={}),i.color||(i.color={});const r=typeof i.margin>"u"||i.margin===null||i.margin<0?4:i.margin,s=i.width&&i.width>=21?i.width:void 0,a=i.scale||4;return{width:s,scale:s?4:a,margin:r,color:{dark:e(i.color.dark||"#000000ff"),light:e(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},n.getScale=function(i,r){return r.width&&r.width>=i+r.margin*2?r.width/(i+r.margin*2):r.scale},n.getImageWidth=function(i,r){const s=n.getScale(i,r);return Math.floor((i+r.margin*2)*s)},n.qrToImageData=function(i,r,s){const a=r.modules.size,o=r.modules.data,l=n.getScale(a,s),c=Math.floor((a+s.margin*2)*l),u=s.margin*l,d=[s.color.light,s.color.dark];for(let f=0;f<c;f++)for(let p=0;p<c;p++){let g=(f*c+p)*4,_=s.color.light;if(f>=u&&p>=u&&f<c-u&&p<c-u){const m=Math.floor((f-u)/l),h=Math.floor((p-u)/l);_=d[o[m*a+h]?1:0]}i[g++]=_.r,i[g++]=_.g,i[g++]=_.b,i[g]=_.a}}}(ta)),ta}var Fl;function $d(){return Fl||(Fl=1,function(n){const e=Qc();function t(r,s,a){r.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=a,s.width=a,s.style.height=a+"px",s.style.width=a+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}n.render=function(s,a,o){let l=o,c=a;typeof l>"u"&&(!a||!a.getContext)&&(l=a,a=void 0),a||(c=i()),l=e.getOptions(l);const u=e.getImageWidth(s.modules.size,l),d=c.getContext("2d"),f=d.createImageData(u,u);return e.qrToImageData(f.data,s,l),t(d,c,u),d.putImageData(f,0,0),c},n.renderToDataURL=function(s,a,o){let l=o;typeof l>"u"&&(!a||!a.getContext)&&(l=a,a=void 0),l||(l={});const c=n.render(s,a,l),u=l.type||"image/png",d=l.rendererOpts||{};return c.toDataURL(u,d.quality)}}(ea)),ea}var na={},Ol;function Wd(){if(Ol)return na;Ol=1;const n=Qc();function e(r,s){const a=r.a/255,o=s+'="'+r.hex+'"';return a<1?o+" "+s+'-opacity="'+a.toFixed(2).slice(1)+'"':o}function t(r,s,a){let o=r+s;return typeof a<"u"&&(o+=" "+a),o}function i(r,s,a){let o="",l=0,c=!1,u=0;for(let d=0;d<r.length;d++){const f=Math.floor(d%s),p=Math.floor(d/s);!f&&!c&&(c=!0),r[d]?(u++,d>0&&f>0&&r[d-1]||(o+=c?t("M",f+a,.5+p+a):t("m",l,0),l=0,c=!1),f+1<s&&r[d+1]||(o+=t("h",u),u=0)):l++}return o}return na.render=function(s,a,o){const l=n.getOptions(a),c=s.modules.size,u=s.modules.data,d=c+l.margin*2,f=l.color.light.a?"<path "+e(l.color.light,"fill")+' d="M0 0h'+d+"v"+d+'H0z"/>':"",p="<path "+e(l.color.dark,"stroke")+' d="'+i(u,c,l.margin)+'"/>',g='viewBox="0 0 '+d+" "+d+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(l.width?'width="'+l.width+'" height="'+l.width+'" ':"")+g+' shape-rendering="crispEdges">'+f+p+`</svg>
`;return typeof o=="function"&&o(null,m),m},na}var Bl;function qd(){if(Bl)return Si;Bl=1;const n=wd(),e=Gd(),t=$d(),i=Wd();function r(s,a,o,l,c){const u=[].slice.call(arguments,1),d=u.length,f=typeof u[d-1]=="function";if(!f&&!n())throw new Error("Callback required as last argument");if(f){if(d<2)throw new Error("Too few arguments provided");d===2?(c=o,o=a,a=l=void 0):d===3&&(a.getContext&&typeof c>"u"?(c=l,l=void 0):(c=l,l=o,o=a,a=void 0))}else{if(d<1)throw new Error("Too few arguments provided");return d===1?(o=a,a=l=void 0):d===2&&!a.getContext&&(l=o,o=a,a=void 0),new Promise(function(p,g){try{const _=e.create(o,l);p(s(_,a,l))}catch(_){g(_)}})}try{const p=e.create(o,l);c(null,s(p,a,l))}catch(p){c(p)}}return Si.create=e.create,Si.toCanvas=r.bind(null,t.render),Si.toDataURL=r.bind(null,t.renderToDataURL),Si.toString=r.bind(null,function(s,a,o){return i.render(s,o)}),Si}var Xd=qd();const Yd=Td(Xd);async function jd(n,e){var f,p,g;const t=new Image;t.src=n.image||`/acorn-witch-atelier/assets/rewards/cg-${n.id}.webp`,await t.decode();const i=document.createElement("canvas");i.width=900,i.height=1560;const r=i.getContext("2d");r.fillStyle="#f4e8cb",r.fillRect(0,0,900,1560),r.strokeStyle="#b38a49",r.lineWidth=3,r.strokeRect(28,28,844,1504),r.textBaseline="top",r.fillStyle="#725533",r.font='24px "Songti SC",serif',r.fillText("橡果魔女  /  与松团子的珍藏时刻",55,62);const s=Math.max(790/t.width,800/t.height),a=t.width*s,o=t.height*s;r.save(),r.beginPath(),r.rect(55,112,790,800),r.clip(),r.drawImage(t,55+(790-a)/2,112+(800-o)*.38,a,o),r.restore(),r.fillStyle="#493927",r.font='bold 42px "Songti SC",serif',r.fillText(n.name,55,948,790);const l=["松团子",...n.costume.split(" · ")];r.font='20px "Songti SC",serif';let c=55;for(const _ of l){const m=r.measureText(_).width+28;r.fillStyle="#365746",r.fillRect(c,1012,m,40),r.fillStyle="#fff0d1",r.fillText(_,c+14,1021),c+=m+12}r.fillStyle="#655039",r.font='25px "Songti SC",serif';let u="",d=1090;for(const _ of n.lines[0])r.measureText(u+_).width>790&&(r.fillText(u,55,d),d+=43,u=""),u+=_;return u&&r.fillText(u,55,d),r.strokeStyle="#b89b6666",r.beginPath(),r.moveTo(55,1260),r.lineTo(845,1260),r.stroke(),r.font='20px "Songti SC",serif',r.fillStyle="#786445",r.fillText(`收录条件 · ${n.condition}`,55,1284,790),r.fillText(`相伴第 ${e.day} 天   ·   好感 ${((f=e.collection)==null?void 0:f.bond)??0}   ·   CG 收藏 ${((g=(p=e.collection)==null?void 0:p.cgs)==null?void 0:g.length)??0} / 6`,55,1320,790),r.fillStyle="#365746",r.fillRect(55,1370,790,140),r.fillStyle="#fff0d1",r.font='25px "Songti SC",serif',r.fillText("来橡果小屋，写下你们的故事",78,1400),r.font='20px "Songti SC",serif',r.fillText("扫码开启与松团子的森林生活",78,1450),await eu(r,709,1380,120),new Promise(_=>i.toBlob(_,"image/png"))}async function eu(n,e,t,i){const r=document.createElement("canvas");await Yd.toCanvas(r,"https://logic33.github.io/acorn-witch-atelier/",{width:i,margin:2,errorCorrectionLevel:"M",color:{dark:"#294735",light:"#fff8e7"}}),n.drawImage(r,e,t,i,i)}async function qa(n,e){const t=document.createElement("dialog");t.className="cg-share-preview",t.setAttribute("aria-label","分享奇遇"),t.innerHTML='<header><h2>分享奇遇</h2><button class="share-close" aria-label="关闭分享">×</button></header><div class="share-preview-body"><p role="status">正在准备纪念卡…</p></div><footer><button data-share="save" disabled>保存图片</button><button data-share="douyin" disabled>分享剧情到抖音</button></footer>',document.querySelector("#game").append(t),t.showModal();let i;t.querySelector(".share-close").onclick=()=>t.close(),t.addEventListener("close",()=>{i&&URL.revokeObjectURL(i),t.remove()},{once:!0});try{const r=await jd(n,e);if(!t.open)return;i=URL.createObjectURL(r);const s=t.querySelector(".share-preview-body"),a=new Image;a.src=i,a.alt=n.name+"纪念卡",s.replaceChildren(a),t.querySelectorAll("footer button").forEach(o=>o.disabled=!1),t.querySelector("[data-share=save]").onclick=()=>{const o=document.createElement("a");o.href=i,o.download=n.name+"-纪念卡.png",o.click()},t.querySelector("[data-share=douyin]").onclick=()=>{var c,u;s.innerHTML='<label>分享剧情到抖音<textarea aria-label="剧情文本" rows="10"></textarea></label><p class="share-note">创作预览，暂未连接抖音。</p><button class="share-back">返回图片预览</button>';const o=(c=e.memories)==null?void 0:c.filter(d=>d.cg===n.id).at(-1),l=((u=o==null?void 0:o.messages)==null?void 0:u.map(d=>d.content))||[];s.querySelector("textarea").value=["奇遇探索 · "+n.name,n.lines[0],...l].join(`

`),s.querySelector(".share-back").onclick=()=>s.replaceChildren(a),s.querySelector("textarea").focus()}}catch{t.open&&(t.querySelector(".share-preview-body").textContent="纪念卡生成失败，请关闭后重试。")}}function Kd({world:n,root:e,onFinish:t}){let i=!0,r="berry",s=!1,a=!1,o=0,l=!1;function c(d=""){if(i){e.innerHTML='<div class="gather-guide"><b>01 · 摘莓果</b><span>走近莓果丛…</span></div>';return}const f={berry:"轻点莓果，装进篮子",acorn:"按住蓄力，亮起时松手",mushroom:"光点进入金色区域时采摘"};if(e.innerHTML=`<div class="gather-guide"><b>${{berry:"01 · 摘莓果",acorn:"02 · 够橡果",mushroom:"03 · 采蘑菇"}[r]}</b><span>${d||f[r]}</span></div>`,r==="berry"&&(e.insertAdjacentHTML("beforeend",'<button class="gather-berry" aria-label="采摘莓果">✦<small>采摘</small></button>'),e.querySelector("button").onclick=()=>u("pick")),r==="acorn"){e.insertAdjacentHTML("beforeend",'<button class="gather-hold" aria-label="按住蓄力，松手起跳"><span>按住蓄力</span><i><em></em></i></button>');const p=e.querySelector("button"),g=()=>{s||a||(a=!0,o=0,n.setAction("crouch"))},_=()=>{a&&(a=!1,o>=650&&o<=1450?u("jump"):(n.setAction("acorn"),c(o<650?"再蓄一点力，亮起时松手":"力气太大啦，再试一次")))};p.onpointerdown=m=>{p.setPointerCapture(m.pointerId),g()},p.onpointerup=_,p.onpointercancel=()=>{a=!1,n.setAction("acorn"),c()},p.onkeydown=m=>{["Space","Enter"].includes(m.code)&&(m.preventDefault(),g())},p.onkeyup=m=>{["Space","Enter"].includes(m.code)&&(m.preventDefault(),_())}}r==="mushroom"&&(e.insertAdjacentHTML("beforeend",'<button class="gather-timing" aria-label="把握时机采蘑菇"><i></i><span>采摘</span></button>'),e.querySelector("button").onclick=()=>{if(s)return;const p=o%1800/1800;p>=.35&&p<=.65?u("harvest"):(o=0,c("差一点，等光点进入金色区域"))})}function u(d){s||l||(s=!0,e.querySelectorAll("button").forEach(f=>f.disabled=!0),e.querySelector(".gather-guide span").textContent=d==="harvest"?"收好满满一篮，再带回家":"松团子正在采集…",n.setAction(d))}return c(),{tick(d){if(l)return;const f=n.getInfo().gatherMotion;if(!f.seeking){if(i){if(f.action!=="berry")return;i=!1,c()}if(s){if(!f.complete)return;if(s=!1,r==="mushroom"){l=!0,e.innerHTML="",t();return}r=r==="berry"?"acorn":"mushroom",o=0,n.setAction(r),c();return}if(a){o+=d;const p=e.querySelector(".gather-hold");p.classList.toggle("ready",o>=650&&o<=1450),p.querySelector("em").style.width=`${Math.min(100,o/18)}%`,p.querySelector("span").textContent=o>=650&&o<=1450?"松手起跳":"按住蓄力"}r==="mushroom"&&(o+=d,e.querySelector(".gather-timing").classList.toggle("ready",o%1800/1800>=.35&&o%1800/1800<=.65),e.querySelector(".gather-timing i").style.transform=`rotate(${o%1800/1800*360}deg)`)}},dispose(){l=!0,e.innerHTML=""}}}const Ir=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Zd({game:n,getState:e,save:t,world:i,pause:r,onEquipped:s}){const a=document.createElement("dialog");a.id="atelier-dialog",n.append(a);let o=!1,l=null,c=!1,u=null,d="",f="",p="";const g=()=>At(e());async function _(y,A){const T=await fetch("/api/wardrobe"+y,{...A?{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(A)}:{}}),w=await T.text();let P;try{P=JSON.parse(w)}catch{throw new Error("服装绘图服务尚未连接。")}if(!T.ok)throw new Error(P.error||"服装绘图请求未完成。");return P}function m(y=""){a.innerHTML=`<header class="collection-header"><div><small>为松团子设计一套新衣服</small><h2>小小裁缝铺</h2></div><button data-design="close" aria-label="关闭设计">×</button></header><div class="atelier-body">${(l==null?void 0:l.status)==="ready"?`<img class="atelier-preview" src="${y||i.customPreview(l.id)}" alt="新衣服站姿预览"><h3>${Ir(l.name||"我的新衣服")}</h3><p>这套衣服喜欢吗？穿回小屋，就能陪她继续读书。</p><button class="button wide" data-design="accept" ${e().coins<bi?"disabled":""}>收进衣柜 · ${bi} 金币</button><button class="button subtle wide" data-design="again">重新描述</button>`:`<p>可以写款式、颜色和配饰。她还是原来的松团子。</p><label>给这套衣服起名<input id="design-name" maxlength="20" value="${Ir(p)}" placeholder="例如：雨后的来信" ${c?"disabled":""}></label><label>你想让她穿什么？<textarea id="design-prompt" maxlength="600" rows="4" placeholder="浅蓝色水手领小洋装，白色蕾丝裙边，配一个红色小蝴蝶结……" ${c?"disabled":""}>${Ir(f)}</textarea></label><p class="collection-note">整套定制 ${bi} 金币 · 确认收进衣柜时扣除<br>可以保留描述，稍后回来继续。</p><button class="button wide" data-design="generate" ${c||!o||e().coins<bi?"disabled":""}>${c?"正在为她制作新衣服…":o?"开始设计":"绘图服务尚未配置"}</button>${c?'<p class="atelier-progress" role="status">正在绘制服装与配套动作，请稍等。可以先关闭，稍后回来查看。</p>':""}`}<p class="atelier-error" role="alert">${Ir(d)}</p><small>余额 ◈ ${e().coins}</small></div>`}async function h(){clearTimeout(u);try{l=await _("/jobs/"+g().pendingDesign),l.status==="ready"?(await i.prepareCustom(l),c=!1,a.open&&m()):l.status==="failed"?(c=!1,d=l.error,delete g().pendingDesign,t(),a.open&&m()):(c=!0,a.open&&m(),u=setTimeout(h,2200))}catch(y){c=!1,d=y.message,a.open&&m()}}async function E(){a.open||(a.showModal(),r(!0)),d="",f=g().designDraft??f,p=g().designName??p,m();try{o=(await _("/status")).available,g().pendingDesign?(c=!0,await h()):m()}catch(y){d=y.message,m()}}function b(){a.close(),r(!1)}return a.addEventListener("cancel",y=>{y.preventDefault(),b()}),a.addEventListener("input",y=>{y.target.id==="design-prompt"&&(f=y.target.value,g().designDraft=f),y.target.id==="design-name"&&(p=y.target.value,g().designName=p),t()}),a.addEventListener("click",async y=>{var w;const A=y.target.closest("[data-design]");if(!A||A.disabled)return;const T=A.dataset.design;if(T==="close"&&b(),T==="generate"){if(c)return;if(f.trim().length<4){d="再具体一点吧，至少写 4 个字。",m();return}c=!0,d="";const P=crypto.randomUUID();g().pendingDesign=P,t(),m();try{l=await _("/jobs",{id:P,prompt:f,name:p||"我的新衣服"}),await h()}catch(v){c=!1,d=v.message,delete g().pendingDesign,t(),m()}}if(T==="accept"&&(l==null?void 0:l.status)==="ready"){const P=e();if(P.coins<bi)return;(w=g()).customOutfits??(w.customOutfits=[]),g().customOutfits.some(v=>v.id===l.id)||(P.coins-=bi,g().customOutfits.push({id:l.id,name:l.name||"我的新衣服",prompt:l.prompt,standing:l.standing,reading:l.reading})),g().activeCustom=l.id,delete g().pendingDesign,t(),b(),s()}T==="again"&&(l=null,delete g().pendingDesign,t(),m())}),{open:E,get opened(){return a.open}}}const Jd=()=>new Date().toLocaleDateString("sv-SE"),kl=[["橡果 · 小小收获","今天适合完成一件小事。把想法告诉愿意倾听的人，也许会收到温柔的回应。","先完成一件小作品，再向朋友分享。","一声主动的问候，会让距离更近。","蜂蜜金"],["枫叶 · 新的相遇","给偶然留一点空位吧。一次问候、一条没走过的小路，都可能成为故事的开头。","尝试新的表达，把灵感记下来。","和兴趣相投的人聊聊，会有新发现。","枫叶橙"],["月亮 · 慢慢生长","不必急着证明自己。给喜欢的事一点时间，也给自己一次安心休息的机会。","整理已有的想法，让作品慢慢成形。","认真听一位朋友说话，也照顾自己的心情。","森林绿"]];function tu(n,{daily:e=!1,state:t,save:i,topic:r="daily"}={}){const s=Jd();if(e&&localStorage.getItem("acorn-fortune-day")===s)return;const a=document.createElement("dialog");a.className="fortune-dialog",a.setAttribute("aria-label","松团子的魔法占卜");const o=r==="heart"?"心动指引":r==="future"?"未来启示":"今日运势",l="fortune-"+(r==="daily"?"":r+"-")+s,c=r==="heart"?["星桥 · 真诚靠近","你不必猜中对方的所有心思。把关心说得具体一点，让温柔落在一件小事上。","邀请在意的人一起完成一件喜欢的事。","尊重彼此的节奏，舒服的陪伴比急着得到答案更珍贵。","蔷薇粉"]:r==="future"?["灯火 · 迈出一步","你正在等待的清晰方向，可能藏在一次小小的尝试里。先做能完成的部分，答案会随着行动慢慢显现。","把大计划拆成今天就能开始的一步。","找愿意交流的人聊聊，也保留自己的判断。","琥珀金"]:kl[[...s].reduce((p,g)=>p+g.charCodeAt(0),0)%kl.length];a.innerHTML=`<button class="fortune-close" aria-label="关闭占卜">×</button><button class="fortune-card" aria-label="翻开${o}"><span class="fortune-flipper"><span class="fortune-back"><span class="fortune-seal">✧</span><strong>森林的来信</strong><span>松团子为你揭晓${o}</span><small>轻点翻牌，收下今天的祝福</small></span><span class="fortune-front"><img src="/acorn-witch-atelier/assets/ui/fortune-tarot.png" alt="手持金色月亮的魔女塔罗牌"><span class="fortune-reading"><small>松团子的魔法占卜技能 · ${s}</small><strong>${o}：${c[0]}</strong><span class="fortune-analysis">${c[1]}${c[2]}${c[3]}</span><small>幸运色：${c[4]}</small></span></span></span></button><p class="fortune-note" role="status">「我把森林的祝福藏在牌里了，这一张送给你。」</p>`;let u=!1;const d=()=>{a.isConnected&&(a.querySelector(".fortune-front").removeAttribute("aria-hidden"),a.querySelector(".fortune-back").setAttribute("aria-hidden","true"),a.querySelector(".fortune-card").setAttribute("aria-label",o),r==="daily"&&localStorage.setItem("acorn-fortune-day",s),t.memories??(t.memories=[]),t.memories.some(p=>p.id===l)||(t.memories.push({id:l,title:o+" · "+c[0],kind:"fortune",day:t.day,slot:t.slot,createdAt:new Date().toISOString(),summary:o+"："+c[1]+" 创作灵感："+c[2]+" 相遇与陪伴："+c[3]+" 幸运色："+c[4],messages:[{role:"assistant",content:o+"："+c[0]+"。"+c[1]+" 创作灵感："+c[2]+" 相遇与陪伴："+c[3]+" 幸运色："+c[4]}]}),i()),a.querySelector(".fortune-note").textContent=o+"已记入手记")};a.querySelector(".fortune-front").setAttribute("aria-hidden","true"),a.querySelector(".fortune-card").onclick=()=>{u||(u=!0,a.querySelector(".fortune-card").classList.add("revealed"),matchMedia("(prefers-reduced-motion: reduce)").matches?d():a.querySelector(".fortune-flipper").addEventListener("transitionend",d,{once:!0}))},a.querySelector(".fortune-close").onclick=()=>a.close(),a.addEventListener("close",()=>{r==="daily"&&localStorage.setItem("acorn-fortune-day",s),window.removeEventListener("resize",f),a.remove()});const f=()=>{const p=n.getBoundingClientRect(),g=Math.min(360,p.width-38,(p.height-76)*2/3),_=g*1.5+26;Object.assign(a.style,{width:g+"px",left:p.left+(p.width-g)/2+"px",top:p.top+(p.height-_)/2+"px"})};n.append(a),f(),window.addEventListener("resize",f),a.showModal()}function Ms(n,e){const t=e.getBoundingClientRect(),i=t.width-28,r=t.height<560?t.height*.82:Math.min(t.height*.76,i*1.72);n.style.setProperty("--book-left",`${t.left+14}px`),n.style.setProperty("--book-top",`${t.top+(t.height-r)/2}px`),n.style.setProperty("--book-width",`${i}px`),n.style.setProperty("--book-height",`${r}px`)}const gr=n=>`<header class="storybook-heading"><small>与她一起生活的日子</small><h2>${n==="stories"?"角色故事":n==="profile"?"角色属性":"手记"}</h2><button class="book-close" data-co="close" aria-label="${n==="stories"?"合上故事书":n==="profile"?"关闭角色属性":"合上手记"}">×</button></header>`,nu={magic:"50% 44%",baking:"50% 38%",shop:"50% 37%",explore:"50% 45%",bond:"50% 35%",festival:"50% 37%"},Ft={id:"collab-demo",name:"我们的第一支森林短片",image:"/acorn-witch-atelier/assets/rewards/cg-collab-demo.png",costume:"合拍 · 粉发来访者",condition:"完成共创支线 · Demo 预制示例",lines:["镜头里留下的，是松团子和来访角色第一次一起创作的笑容。"]},ia=[{id:"film",title:"森林短片，缺一位搭档",kind:"视频共创",text:"一起把「第一次森林采集」拍成一支温暖短片。招募出镜角色、摄影与剪辑伙伴。",role:"出镜搭档"},{id:"band",title:"森林乐队 · 成员招募中",kind:"组乐队",text:"用木勺打节拍，用落叶写旋律。招募主唱、吉他手和会发出好听声音的朋友。",role:"乐队伙伴"},{id:"friends",title:"交换一页故事，认识新朋友",kind:"扩列交友",text:"带着你的角色来喝杯茶，交换世界观与创作灵感。可以从一次合拍开始认识彼此。",role:"故事笔友"}];function Qd(n,e,t){const i=document.createElement("dialog");i.className="character-profile book-panel",i.setAttribute("aria-label","招募看板");let r;const s=()=>{i.innerHTML=gr("profile").replace("角色属性","招募看板")+`<div class="book-body profile-body"><p class="profile-tags">松团子的作者发起 · 一起创作，一起交朋友</p><p>带上你的角色，参与下一部作品。</p>${[ia[1],ia[0],ia[2]].map(o=>`<section><small>${o.kind}</small><h3>${o.title}</h3><p>${o.text}</p><p>你的角色：粉发来访者 · Demo 预置角色</p><button class="button" data-join="${o.id}">以我的角色报名 · 出镜合拍</button></section>`).join("")}<p class="community-note" role="status"></p></div>`,i.querySelector(".book-close").onclick=()=>i.close()};i.onclick=o=>{if(!o.target.closest("[data-join]"))return;const l=i.querySelector("[role=status]");l.className="recruit-toast",l.textContent="正在进入抖音AI创作合拍",clearTimeout(r),r=setTimeout(()=>l.textContent="",2600)},n.append(i),s();const a=()=>Ms(i,n);a(),window.addEventListener("resize",a),i.onclose=()=>{window.removeEventListener("resize",a),i.remove()},i.showModal()}const os=[{lines:[["松团子","你来得正好！我想拍一支森林短片，可是一看到镜头，就不知道该说什么了。"],["你 · 粉发来访者","那就别背台词。你带我走一遍今天的小路，我来拍你最熟悉的事情。"]],choice:"我来打板，你带路"},{lines:[["松团子","第一幕拍这篮莓果吧。刚才采的时候，我还偷偷尝了一颗，酸得耳朵都竖起来了。"],["你 · 粉发来访者","这句就很好呀！等会儿看着我说，就当镜头是个来做客的朋友。"]],choice:"举起场记板：森林短片，第一镜！"},{lines:[["松团子","欢迎来到榛果林！今天的莓果有一点酸，不过……哎呀，刚刚那句是不是说错了？"],["你 · 粉发来访者","没说错。你笑起来的时候，阳光刚好落在篮子上。这一段我想留下。"]],choice:"给她看看刚拍好的镜头"},{lines:[["松团子","原来镜头里的我，是这个样子的。可是短片里怎么一直只有我？你也应该在里面。"],["你 · 粉发来访者","那把相机放到树桩上，设好倒计时。最后一幕，我们一起拍。"]],choice:"架好相机，走到她身边"},{lines:[["松团子","站近一点点。来，这颗最红的莓果给你——就当今天的出镜报酬！"],["你 · 粉发来访者","那下次我还来。三、二、一……别看镜头，看我！"]],choice:"接过莓果，一起笑起来"},{lines:[["松团子","拍到了！这张照片，我要夹在故事的第一页。片名就叫《在森林里认识你》，好吗？"],["你 · 粉发来访者","好。你写故事，我剪短片。等做好了，我们一起分享给来看望你的朋友。"]],choice:"为短片收尾，收藏我们的合拍"}];function iu(n,e){const t=n.textContent;e.startsWith(t)||n.replaceChildren();const i=e.slice(n.textContent.length),r=document.createDocumentFragment();for(const[s,a]of Array.from(i).entries()){const o=document.createElement("span");o.className="stream-text-reveal",o.textContent=a,o.style.animationDelay=Math.min(s*18,180)+"ms",o.addEventListener("animationend",()=>{o.classList.remove("stream-text-reveal"),o.style.animationDelay=""},{once:!0}),r.append(o)}n.append(r)}function ru(n){matchMedia("(prefers-reduced-motion: reduce)").matches&&(n==null||n.querySelectorAll(".stream-text-reveal").forEach(e=>{e.classList.remove("stream-text-reveal"),e.style.animationDelay=""}))}async function*eh(n){const e=n.getReader(),t=new TextDecoder;let i="";try{for(;;){const{done:r,value:s}=await e.read();i+=t.decode(s,{stream:!r});let a;for(;(a=i.indexOf(`
`))>=0;)yield i.slice(0,a).replace(/\r$/,""),i=i.slice(a+1);if(r){i&&(yield i);break}}}finally{await e.cancel().catch(()=>{}),e.releaseLock()}}async function su(n,e){var t;if(!n.ok||!((t=n.headers.get("content-type"))!=null&&t.includes("application/x-ndjson"))){const i=await n.json();if(!n.ok)throw new Error(i.error||"连接没有完成，请重试。");return i}for await(const i of eh(n.body)){if(!i.trim())continue;const r=JSON.parse(i);if(r.type==="text"&&e(r.dialogue),r.type==="error")throw new Error(r.error);if(r.type==="done")return r.reply}throw new Error("回复中断了，请重试；输入内容已保留。")}const th="https://sjktg7i6ngh4etmcagt01.apigateway-cn-beijing.volceapi.com/api/companion";function nh({dialog:n,getState:e,save:t,cg:i,onEnd:r}){const s=n.querySelector("#cg-chat-form"),a=n.querySelector("#cg-chat-input"),o=n.querySelector("#cg-chat-status"),l=n.querySelector("#cg-responses"),c=()=>{a.style.height="auto",a.style.height=a.scrollHeight+"px"};a.addEventListener("input",c);const u=e(),d={id:crypto.randomUUID(),title:i.name+" · 对话",activity:i.activity,kind:"branch",cg:i.id,day:u.day,slot:u.slot,createdAt:new Date().toISOString(),messages:[]};let f=null,p=!1;const g={magic:["先停下咒语，观察叶子的反应。","别着急，我们一起找找书里的办法。"],baking:["不必做得完美，我想听听你的心意。","我们一起看看，是哪里让你犹豫了？"],shop:["先看看纸上写了什么。","刚才的客人是不是落下什么了？"],explore:["先看看是什么挡住了路。","听听附近的动静，别急着过去。"],bond:["这一页，是有什么让你在意吗？","不用赶，我陪你慢慢读。"],festival:["你手里拿着的，是准备送人的礼物吗？","不着急，我们找个安静的地方说。"]},_={magic:"把今天学到的记好，我们回家吧。",baking:"把甜点装好，我们一起收拾厨房吧。",shop:"收好今天的心意，我们打烊回家吧。",explore:"记住这条小路，我们一起回家吧。",bond:"把这页夹好，我们休息一会儿吧。",festival:"把这片秋叶收好，我们一起回家吧。"};function m(b){l.replaceChildren();const y=d.messages.filter(T=>T.role==="user").length>=4;for(const T of[y?_[i.id]:b[0]]){const w=document.createElement("button");w.type="button",w.className="cg-response",w.textContent=T,w.setAttribute("aria-label",T),w.onclick=()=>{if(y){d.messages.push({role:"user",content:T}),d.ended=!0,d.updatedAt=new Date().toISOString();const P=e().memories.findIndex(v=>v.id===d.id);P>=0&&(e().memories[P]=structuredClone(d)),t(),r(d)}else E(null,T)},l.append(w)}const A=document.createElement("button");A.type="button",A.className="cg-custom-response",A.innerHTML='<svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true"><path d="M3 3.5h14v10H9l-4 3v-3H3z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M6 7h8M6 10h5" stroke="currentColor" stroke-width="1.2"/></svg><span>写下我的支线</span>',A.onclick=()=>{l.hidden=!0,s.hidden=!1,c(),a.focus()},l.append(A),l.hidden=!1,s.hidden=!0}function h(b,y){const A=n.querySelector("#cg-line");for(const T of[...A.childNodes])T.nodeType===3&&T.remove();for(const[T,w]of[["narration",b],["dialogue",y]]){let P=A.querySelector(".cg-"+T);if(!w){P==null||P.remove();continue}P||(P=document.createElement("span"),P.className="cg-"+T,T==="narration"?A.prepend(P):A.append(P)),P.textContent!==w&&(P.textContent=w)}}h(i.lines[0]),m(g[i.id]),n.querySelector("#cg-custom-cancel").onclick=()=>{s.hidden=!0,l.hidden=!1};async function E(b,y){var P,v,S;b==null||b.preventDefault();const A=y??a.value.trim();if(!A||f)return;const T=n.querySelector("#cg-line").innerHTML;let w=null;f=new AbortController,n.querySelectorAll("#cg-responses button,#cg-chat-form button").forEach(C=>C.disabled=!0),a.readOnly=!0,o.textContent="松团子正在回应…";try{const C=e(),I=await fetch(th+"/chat",{method:"POST",headers:{"Content-Type":"application/json"},signal:f.signal,body:JSON.stringify({stream:!0,messages:[...d.messages.slice(-30),{role:"user",content:A}],context:{activity:i.activity,day:C.day,slot:C.slot,cg:{id:i.id,title:i.name,costume:i.costume,lines:[i.lines[0]],outline:i.lines,currentLine:n.querySelector("#cg-line").textContent,interactive:!0,guestCharacter:(P=n.querySelector("#cg-with-guest"))!=null&&P.checked?"粉发来访者：粉色侧马尾、金色眼睛、深蓝校服，和松团子一起创作短片":null},memories:(C.memories??[]).slice(-12).map(({title:X,summary:Y})=>({title:X,summary:Y}))}})}),F=await su(I,X=>{var Y;!p&&!f.signal.aborted&&(w||(h((Y=n.querySelector(".cg-narration"))==null?void 0:Y.textContent," "),w=n.querySelector(".cg-dialogue"),w.replaceChildren()),iu(w,X))});if(!I.ok)throw new Error(F.error||"暂时未能连接，请重试。");if(p)return;if(!Array.isArray(F.choices)||F.choices.length!==2)throw new Error("剧情反馈未完整生成，请重试。");b&&(d.custom=!0,d.withGuest=((v=n.querySelector("#cg-with-guest"))==null?void 0:v.checked)??!1),d.messages.push({role:"user",content:A},{role:"assistant",content:[F.narration,F.dialogue].filter(Boolean).join(`
`)}),d.summary=((S=F.event)==null?void 0:S.summary)||[F.narration,F.dialogue].filter(Boolean).join(" "),d.updatedAt=new Date().toISOString(),F.event&&(d.event=F.event),C.memories??(C.memories=[]);const z=C.memories.findIndex(X=>X.id===d.id);z<0?C.memories.push(structuredClone(d)):C.memories[z]=structuredClone(d),t(),ru(w),h(F.narration,F.dialogue),a.value="",m(F.choices),o.textContent="剧情已记入手记"}catch(C){C.name!=="AbortError"&&!p&&(n.querySelector("#cg-line").innerHTML=T,o.textContent=C.message)}finally{f=null,p||(n.querySelectorAll("#cg-responses button,#cg-chat-form button").forEach(C=>C.disabled=!1),a.readOnly=!1)}}return s.addEventListener("submit",E),{dispose(){p=!0,f==null||f.abort(),s.removeEventListener("submit",E)}}}const Mi=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Mn=n=>`/acorn-witch-atelier/assets/rewards/${n}.webp`;function ih({game:n,getState:e,save:t,refresh:i,pause:r,world:s,onWear:a,onRecipes:o}){const l=document.createElement("dialog");l.id="rewards-dialog",n.append(l);let c;const u=document.createElement("button");u.id="home-pet",u.hidden=!0,u.type="button",n.append(u);let d="heart",f=dr[0].id,p="album",g=!1,_=null,m=null,h=null;const E=()=>At(e());function b(){if(m){const D=n.getBoundingClientRect();for(const[V,q]of Object.entries({left:D.left,top:D.top,width:D.width,height:D.height}))l.style.setProperty(`--book-${V}`,`${q}px`)}else Ms(l,n)}function y(){b(),l.open||(l.showModal(),r(!0)),n.dataset.collection="open"}function A(){if(g)return;h==null||h.dispose(),h=null,m&&E().cgs.includes(m)&&!E().seen.includes(m)&&(E().seen.push(m),t()),l.close(),delete n.dataset.collection,r(!1),m=null;const D=_;_=null,i(),D==null||D()}window.addEventListener("resize",()=>{l.open&&b()}),l.addEventListener("cancel",D=>{D.preventDefault(),A()});const T=(D,V,q="",ue="")=>`<button class="button" data-reward="${V}" data-id="${q}" ${ue}>${D}</button>`;function w(D,V){m=null,y(),l.className="collection-page",l.dataset.tab=p,l.innerHTML=`<header class="collection-header"><div><small>松团子的秋日收藏</small><h2>${D}</h2></div><button data-reward="close" aria-label="关闭收藏">×</button></header>${p==="wheel"?"":`<nav class="collection-tabs" aria-label="收藏分类">${[["album","剧情相册"],["pets","宠物册"]].map(([q,ue])=>`<button data-reward="tab" data-id="${q}" aria-pressed="${p===q}">${ue}</button>`).join("")}</nav>`}<div class="collection-body">${V}</div>`}function P(){p="album";const D=E().cgs;w("相册",`<p class="collection-intro">学习与相处，会把新的故事带到身边。<br>松团子好感 <b>${E().bond}</b> · 已收录 ${D.length} / ${Bt.length}</p><div class="cg-grid"><button class="cg-card" data-reward="collab"><div><img src="${Ft.image}" alt="松团子与粉发来访者的合拍 CG"><span>✦ 合拍已点亮 · 示例</span></div><b>${Ft.name}</b><small>带上你的角色，写支线、得合拍 CG</small></button>${Bt.map(V=>`<button class="cg-card ${D.includes(V.id)?"":"locked"}" data-reward="cg" data-id="${V.id}" style="--cg-focus:${nu[V.id]}" ${D.includes(V.id)?"":"disabled"}><div><img src="${Mn("cg-"+V.id)}" alt="${D.includes(V.id)?V.name:"未解锁剧情剪影"}">${D.includes(V.id)?"<span>▷ 重温</span>":"<span>尚未遇见</span>"}</div><b>${V.name}</b><small>${D.includes(V.id)?V.costume:V.condition}</small></button>`).join("")}</div><section class="branch-cg-list"><h3>我的支线纪念 · ${E().community.collabs.length}</h3>${(e().memories??[]).filter(V=>E().community.collabs.includes(V.id)).map(V=>`<button class="cg-card" data-reward="branch-cg" data-id="${Mi(V.id)}"><div><img src="${V.withGuest===!1?Mn("cg-explore"):Ft.image}" alt="支线纪念"><span>已收录 · Demo 预制</span></div><b>${Mi(V.title.replace(" · 对话"," · 支线纪念"))}</b></button>`).join("")}</section><p class="collection-note">参加秋日祭即可获得祭典 CG，庆典后生活继续。</p>`)}function v(D,V=!1){return D.type==="pet"?`<img src="${Mn("cat-"+D.item)}" alt="${D.name}">`:D.type==="part"?`<img src="${Mn("part-"+D.item)}" alt="${D.name}">`:D.type==="outfit"?`<img src="${s.getOutfitPreview(D.item,V)}" alt="${D.name}">`:`<span class="wheel-symbol">${D.type==="coins"?"◈":"♧"}</span>`}function S(){p="wheel",m="divination";const D=e(),V=Wa(D,f);y(),l.className="cg-player divination-player",l.innerHTML=`<img class="cg-full" src="/acorn-witch-atelier/assets/ui/divination-room.png" alt="松团子在星月占卜室里等待你"><header class="cg-heading"><span>松团子的魔法占卜</span><button data-reward="close" aria-label="离开魔法占卜">×</button></header><section class="sheet divination-controls"><h2>今夜星运</h2><div class="divination-tabs">${[["heart","♡ 心动指引"],["future","✧ 未来启示"],["gifts","☆ 幸运物"]].map(([q,ue])=>T(ue,"divination-mode",q,`aria-pressed="${q===d}"`)).join("")}</div>${d!=="gifts"?`<p>${d==="heart"?"想一想在意的人，听听关于相遇与陪伴的指引。":"想一想正在犹豫的方向，让星月带来下一步的启示。"}</p>${T("抽取命运之牌","fortune-draw")}<small>星月指引 · 免费 · 揭晓后记入手记</small>`:`<div class="divination-pool"><select id="wheel-pool" aria-label="选择幸运物主题">${dr.map(q=>`<option value="${q.id}" ${q.id===f?"selected":""}>${q.name}</option>`).join("")}</select><span>◈ ${D.coins}</span></div><div class="lucky-cards" aria-hidden="true"><i>✧</i><i>☾</i><i>✦</i></div><p class="wheel-status" role="status">${V.length?`剩余 ${V.length} 件 · 每件概率 ${(100/V.length).toFixed(2)}%`:"这期幸运物已收齐，换个主题看看吧。"}</p>${T(`翻开幸运物 · ${vs} ◈`,"spin","",!V.length||D.coins<vs?"disabled":"")}<details><summary>本期幸运物</summary><div class="lucky-list">${V.map(q=>`<span>${q.name}</span>`).join("")}</div></details>`}</section>`}function C(D){m="divination",b(),l.className="cg-player divination-player lucky-reveal",l.innerHTML=`<img class="cg-full" src="/acorn-witch-atelier/assets/ui/divination-room.png" alt="星月占卜室"><header class="cg-heading"><span>命运之牌 · 幸运物</span><button data-reward="close" aria-label="关闭奖励">×</button></header><div class="lucky-result"><small>✧ 星月赠礼 ✧</small><h2>${D.name}</h2><div class="lucky-result-art">${v(D,!0)}</div><p>${{pet:"一位新朋友，来小屋住下啦。",part:"已放进衣柜，可以自由搭配。",outfit:"整套穿搭已放进衣柜。",menu:"已经学会，可以去厨房制作。",coins:"已放进你的钱袋。"}[D.type]}</p><small>幸运物已收下</small><div class="lucky-result-actions">${D.type==="pet"?T("认识它","pet",D.item):D.type==="part"||D.type==="outfit"?T("去试衣间","wear"):D.type==="menu"?T("看看新菜单","recipes"):""}${T("继续抽卡","wheel")}</div></div>`}function I(){if(g)return;let D;Wa(e(),f);try{D=yd(e(),f,crypto.getRandomValues(new Uint32Array(1))[0]/4294967296)}catch(V){l.querySelector(".wheel-status").textContent=V.message;return}t(),i(),g=!0,l.querySelectorAll("button,select").forEach(V=>V.disabled=!0),l.querySelector(".wheel-status").textContent="星月正在揭晓你的幸运物…",l.querySelector(".lucky-cards").classList.add("drawing"),setTimeout(()=>{g=!1,C(D)},matchMedia("(prefers-reduced-motion: reduce)").matches?50:1600)}function F(){p="pets",w("小屋里的毛茸茸",`<p class="collection-intro">已结识 ${E().pets.length} / ${ki.length} 位朋友<br>点击已拥有的猫咪，起名、互动或带回主页。</p><div class="pet-grid">${ki.map(D=>`<button class="pet-card ${E().pets.includes(D.id)?"":"unowned"}" data-reward="pet" data-id="${D.id}"><img src="${Mn("cat-"+D.id)}" alt="${D.name}"><b>${Mi(E().petNames[D.id]||D.name)}</b><small>${E().activePet===D.id?"正在陪伴":E().pets.includes(D.id)?"已结识":"占卜幸运物可获得"}</small></button>`).join("")}</div>`)}function z(D){const V=ki.find(ue=>ue.id===D);if(!V)return;const q=E().pets.includes(D);p="pets",w(V.name,`<div class="pet-detail"><img class="pet-large" src="${Mn("cat-"+D)}" alt="${V.name}"><p>${V.look}</p><p class="pet-dialogue">松团子：「${V.line}」</p>${q?`<label>名字<input id="pet-name" maxlength="12" value="${Mi(E().petNames[D]||"")}" placeholder="${V.name}" autocomplete="off"></label><div class="pet-actions">${T("改名","pet-name",D)}${T(E().activePet===D?"休息":"带回",E().activePet===D?"pet-rest":"pet-equip",D)}${T("互动","pet-touch",D,`aria-label="${V.action}"`)}</div><p id="pet-reply" role="status"></p><small>已互动 ${E().petInteractions[D]??0} 次 · 不需要强制喂养</small>`:`<p>在「${dr.find(ue=>ue.cats.includes(D)).name}」轮盘结识它。</p>${T("去看看轮盘","pet-pool",D)}`}</div>`)}function X(D,V=null){if(D==="collab-demo"){Y();return}const q=Bt.find(ue=>ue.id===D);!q||!E().cgs.includes(D)||(_=V,m=D,y(),l.className="cg-player",l.innerHTML=`<img class="cg-full" src="${Mn("cg-"+D)}" alt="${Mi(q.name)}"><div class="cg-motes" aria-hidden="true">${Array.from({length:10},(ue,Se)=>`<i style="--i:${Se}">✧</i>`).join("")}</div><header class="cg-heading"><span>奇遇探索 · ${Mi(q.name)}</span><div class="cg-share-tools"><button data-reward="cg-share" data-id="${q.id}" aria-label="分享奇遇"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16V3m-5 5 5-5 5 5M5 13v7h14v-7"/></svg></button><button data-reward="cg-exit" aria-label="稍后重看"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg></button></div></header><div class="cg-caption"><small>松团子 · ${q.costume}</small><p id="cg-line"></p><div id="cg-responses" aria-label="选择你的反馈"></div><form id="cg-chat-form" hidden><label class="cg-input-label" for="cg-chat-input">和松团子聊聊</label><textarea id="cg-chat-input" rows="1" maxlength="1000" autocomplete="off" placeholder="想对她说些什么…"></textarea><button type="submit">发送</button><button type="button" id="cg-custom-cancel">收起</button><label class="cg-guest-choice"><input type="checkbox" id="cg-with-guest" checked>以粉发来访者的身份参与</label><button type="button" data-reward="collab-demo">体验预置合拍支线</button><small>支线结束后收录纪念 CG · Demo 使用预制画面</small></form><p id="cg-chat-status" role="status"></p></div>`,l.querySelector("#cg-line").textContent=q.lines[0],h=nh({dialog:l,getState:e,save:t,cg:q,onEnd:ue=>{ue!=null&&ue.custom?(ul(e(),ue.id),t(),A(),Y(!0,ue.withGuest)):A()}}))}function Y(D=!1,V=!0){h==null||h.dispose(),h=null,m="collab-demo",y(),l.className="cg-player";const q=V?Ft:Bt.find(ue=>ue.id==="explore");l.innerHTML=`<img class="cg-full" src="${V?Ft.image:Mn("cg-explore")}" alt="${q.name}"><header class="cg-heading"><span>${V?"合拍纪念":"支线纪念"} · ${D?"已收录":"Demo 示例"}</span><button data-reward="cg-exit" aria-label="关闭合拍">×</button></header><div class="cg-caption"><small>${D?"成就达成 · 一起写下新故事":"默认点亮 · 合拍功能体验"}</small><h2>${V?Ft.name:"留住这一段奇遇"}</h2><p class="collab-description">${D?"支线已记入手记，纪念画面已收进相册。":"你就是画面中的粉发来访者。与松团子一起拍完这支短片，留下你们的合拍纪念。"}</p><small>Demo 预制画面 · 正式版将根据本次剧情生成</small><div class="collab-actions">${T("分享纪念画面",V?"collab-share":"cg-share",q.id)}${T("剧情创作视频","collab-video")}${T("回放剧情","collab-demo")}</div><p id="cg-chat-status" role="status"></p></div>`}function N(D=0){h==null||h.dispose(),h=null,m="collab-demo",y(),l.className="cg-player";const V=os.flatMap(Se=>Se.lines),[q,ue]=V[D];l.innerHTML=`<img class="cg-full" src="${Ft.image}" alt="合拍支线"><header class="cg-heading"><span>我的支线 · 森林合拍</span><button data-reward="cg-exit" aria-label="离开支线">×</button></header><div class="cg-caption demo-conversation"><small>你正在扮演粉发来访者 · ${D+1} / ${V.length}</small><button class="replay-dialogue" data-reward="demo-step" data-id="${D}" aria-label="${D===V.length-1?"结束回放":"下一句"}"><span class="replay-speaker">${q}</span><span class="replay-line">「${ue}」<span class="replay-cue" aria-hidden="true">▾</span></span></button></div>`}function B(){const D=e(),V="forest-film-demo";ul(D,V),D.memories??(D.memories=[]);const q={id:V,title:Ft.name,kind:"branch",cg:"collab-demo",withGuest:!0,day:D.day,slot:D.slot,createdAt:new Date().toISOString(),summary:"松团子与粉发来访者从练习面对镜头，到一起出镜，完成了森林短片《在森林里认识你》。",ended:!0,messages:os.flatMap(Se=>Se.lines.map(([Ne,ee])=>({role:Ne==="松团子"?"assistant":"user",content:ee})))},ue=D.memories.findIndex(Se=>Se.id===V);ue>=0?D.memories[ue]={...q,createdAt:D.memories[ue].createdAt}:D.memories.push(q),t(),Y(!0)}function W(D){const V=E().activePet;if(u.hidden=!D||!V,!V)return;const q=ki.find(ue=>ue.id===V);q&&(u.dataset.id!==V&&(u.dataset.id=V,u.innerHTML=`<img src="${Mn("cat-"+V)}" alt="">`),u.setAttribute("aria-label",`和${E().petNames[V]||q.name}互动`))}return u.onclick=()=>z(E().activePet),l.addEventListener("change",D=>{D.target.id==="wheel-pool"&&(f=D.target.value,S())}),l.addEventListener("click",D=>{const V=D.target.closest("[data-reward]");if(!V||V.disabled||g)return;const q=V.dataset.reward,ue=V.dataset.id;if(q==="branch-cg"){const Se=e().memories.find(Ne=>Ne.id===ue);Se&&Y(!0,Se.withGuest!==!1)}if(q==="collab"&&Y(),q==="collab-demo"&&N(),q==="demo-step"&&(Number(ue)<os.flatMap(Se=>Se.lines).length-1?N(Number(ue)+1):B()),q==="collab-video"){const Se=l.querySelector("#cg-chat-status");Se.className="collab-toast",Se.textContent="正在跳转到抖音ai创作",clearTimeout(c),c=setTimeout(()=>{Se.textContent=""},2600)}if(q==="collab-share"&&qa(Ft,e()),q==="cg-share"&&qa(Bt.find(Se=>Se.id===ue),e()).catch(Se=>{l.querySelector("#cg-chat-status").textContent=Se.message}),(q==="close"||q==="cg-exit")&&A(),q==="tab"&&{album:P,pets:F}[ue](),q==="divination-mode"&&(d=ue,S()),q==="fortune-draw"&&tu(n,{state:e(),save:t,topic:d}),q==="wheel"&&S(),q==="spin"&&I(),q==="cg"&&X(ue),q==="pet"&&z(ue),q==="pet-pool"&&(f=dr.find(Se=>Se.cats.includes(ue)).id,d="gifts",S()),q==="pet-rest"&&(E().activePet=null,t(),i(),z(ue)),q==="pet-equip"&&E().pets.includes(ue)&&(E().activePet=ue,t(),A()),q==="pet-name"&&E().pets.includes(ue)&&(E().petNames[ue]=l.querySelector("#pet-name").value.trim().slice(0,12),t(),l.querySelector("#pet-reply").textContent="记住这个名字啦。"),q==="pet-touch"&&E().pets.includes(ue)){E().petInteractions[ue]=(E().petInteractions[ue]??0)+1,t(),l.querySelector("#pet-reply").textContent=ki.find(Ne=>Ne.id===ue).reply;const Se=l.querySelector(".pet-large");Se.classList.remove("pet-nuzzle"),Se.offsetWidth,Se.classList.add("pet-nuzzle")}q==="wear"&&(A(),a()),q==="recipes"&&(A(),o())}),{album:P,wheel:S,pets:F,playCG:X,updatePet:W,get opened(){return l.open}}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wo="180",rh=0,zl=1,sh=2,au=1,ah=2,Pn=3,Zn=0,Ht=1,Ln=2,jn=0,Gi=1,Hl=2,Vl=3,Gl=4,oh=5,ci=100,lh=101,ch=102,uh=103,dh=104,hh=200,fh=201,ph=202,mh=203,Xa=204,Ya=205,gh=206,_h=207,vh=208,xh=209,yh=210,bh=211,Sh=212,Mh=213,Eh=214,ja=0,Ka=1,Za=2,Yi=3,Ja=4,Qa=5,eo=6,to=7,ou=0,Th=1,wh=2,Kn=0,Ah=1,Ch=2,Rh=3,Ph=4,Lh=5,Dh=6,Ih=7,lu=300,ji=301,Ki=302,no=303,io=304,Es=306,ro=1e3,di=1001,so=1002,dn=1003,Uh=1004,Ur=1005,tn=1006,ra=1007,hi=1008,Nn=1009,cu=1010,uu=1011,_r=1012,qo=1013,mi=1014,In=1015,Mr=1016,Xo=1017,Yo=1018,vr=1020,du=35902,hu=35899,fu=1021,pu=1022,un=1023,xr=1026,yr=1027,mu=1028,jo=1029,gu=1030,Ko=1031,Zo=1033,ls=33776,cs=33777,us=33778,ds=33779,ao=35840,oo=35841,lo=35842,co=35843,uo=36196,ho=37492,fo=37496,po=37808,mo=37809,go=37810,_o=37811,vo=37812,xo=37813,yo=37814,bo=37815,So=37816,Mo=37817,Eo=37818,To=37819,wo=37820,Ao=37821,Co=36492,Ro=36494,Po=36495,Lo=36283,Do=36284,Io=36285,Uo=36286,Nh=3200,Fh=3201,Oh=0,Bh=1,qn="",xt="srgb",Zi="srgb-linear",xs="linear",at="srgb",Ei=7680,$l=519,kh=512,zh=513,Hh=514,_u=515,Vh=516,Gh=517,$h=518,Wh=519,Wl=35044,ql="300 es",yn=2e3,ys=2001;class er{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sa=Math.PI/180,No=180/Math.PI;function Er(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function qh(n,e){return(n%e+e)%e}function aa(n,e,t){return(1-t)*n+t*e}function sr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==p||u!==g){let m=1-o;const h=l*f+c*p+u*g+d*_,E=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const A=Math.sqrt(b),T=Math.atan2(A,h*E);m=Math.sin(m*T)/A,o=Math.sin(o*T)/A}const y=o*E;if(l=l*m+f*y,c=c*m+p*y,u=u*m+g*y,d=d*m+_*y,m===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*d+l*p-c*f,e[t+1]=l*g+u*f+c*d-o*p,e[t+2]=c*g+u*p+o*f-l*d,e[t+3]=u*g-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"YZX":this._x=f*u*d+c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d-f*p*g;break;case"XZY":this._x=f*u*d-c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return oa.copy(this).projectOnVector(e),this.sub(oa)}reflect(e){return this.sub(oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oa=new K,Xl=new Tr;class We{constructor(e,t,i,r,s,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],E=r[1],b=r[4],y=r[7],A=r[2],T=r[5],w=r[8];return s[0]=a*_+o*E+l*A,s[3]=a*m+o*b+l*T,s[6]=a*h+o*y+l*w,s[1]=c*_+u*E+d*A,s[4]=c*m+u*b+d*T,s[7]=c*h+u*y+d*w,s[2]=f*_+p*E+g*A,s[5]=f*m+p*b+g*T,s[8]=f*h+p*y+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,p=c*s-a*l,g=t*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(la.makeScale(e,t)),this}rotate(e){return this.premultiply(la.makeRotation(-e)),this}translate(e,t){return this.premultiply(la.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const la=new We;function vu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function br(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xh(){const n=br("canvas");return n.style.display="block",n}const Yl={};function Sr(n){n in Yl||(Yl[n]=!0,console.warn(n))}function Yh(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const jl=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kl=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jh(){const n={enabled:!0,workingColorSpace:Zi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(r.r=Un(r.r),r.g=Un(r.g),r.b=Un(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=$i(r.r),r.g=$i(r.g),r.b=$i(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===qn?xs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Sr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Sr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Zi]:{primaries:e,whitePoint:i,transfer:xs,toXYZ:jl,fromXYZ:Kl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:i,transfer:at,toXYZ:jl,fromXYZ:Kl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),n}const Je=jh();function Un(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $i(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ti;class Kh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ti===void 0&&(Ti=br("canvas")),Ti.width=e.width,Ti.height=e.height;const r=Ti.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ti}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=br("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Un(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Un(t[i]/255)*255):t[i]=Un(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zh=0;class Jo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Er(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ca(r[a].image)):s.push(ca(r[a]))}else s=ca(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ca(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Kh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jh=0;const ua=new K;class wt extends er{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,i=di,r=di,s=tn,a=hi,o=un,l=Nn,c=wt.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Er(),this.name="",this.source=new Jo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ua).x}get height(){return this.source.getSize(ua).y}get depth(){return this.source.getSize(ua).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ro:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case so:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ro:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case so:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=lu;wt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,i=0,r=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(p+1)/2,A=(h+1)/2,T=(u+f)/4,w=(d+_)/4,P=(g+m)/4;return b>y&&b>A?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=T/i,s=w/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=P/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=w/s,r=P/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-_)/E,this.z=(f-u)/E,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qh extends er{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new wt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Jo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends Qh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class xu extends wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ef extends wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wr{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,rn):rn.fromBufferAttribute(s,a),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nr.copy(i.boundingBox)),Nr.applyMatrix4(e.matrixWorld),this.union(Nr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),Fr.subVectors(this.max,ar),wi.subVectors(e.a,ar),Ai.subVectors(e.b,ar),Ci.subVectors(e.c,ar),zn.subVectors(Ai,wi),Hn.subVectors(Ci,Ai),ti.subVectors(wi,Ci);let t=[0,-zn.z,zn.y,0,-Hn.z,Hn.y,0,-ti.z,ti.y,zn.z,0,-zn.x,Hn.z,0,-Hn.x,ti.z,0,-ti.x,-zn.y,zn.x,0,-Hn.y,Hn.x,0,-ti.y,ti.x,0];return!da(t,wi,Ai,Ci,Fr)||(t=[1,0,0,0,1,0,0,0,1],!da(t,wi,Ai,Ci,Fr))?!1:(Or.crossVectors(zn,Hn),t=[Or.x,Or.y,Or.z],da(t,wi,Ai,Ci,Fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const En=[new K,new K,new K,new K,new K,new K,new K,new K],rn=new K,Nr=new wr,wi=new K,Ai=new K,Ci=new K,zn=new K,Hn=new K,ti=new K,ar=new K,Fr=new K,Or=new K,ni=new K;function da(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ni.fromArray(n,s);const o=r.x*Math.abs(ni.x)+r.y*Math.abs(ni.y)+r.z*Math.abs(ni.z),l=e.dot(ni),c=t.dot(ni),u=i.dot(ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const tf=new wr,or=new K,ha=new K;class Ts{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):tf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);const t=or.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(or,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(ha)),this.expandByPoint(or.copy(e.center).sub(ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Tn=new K,fa=new K,Br=new K,Vn=new K,pa=new K,kr=new K,ma=new K;class yu{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){fa.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(fa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Br),o=Vn.dot(this.direction),l=-Vn.dot(Br),c=Vn.lengthSq(),u=Math.abs(1-a*a);let d,f,p,g;if(u>0)if(d=a*l-o,f=a*o-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(fa).addScaledVector(Br,f),p}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const i=Tn.dot(this.direction),r=Tn.dot(Tn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,i,r,s){pa.subVectors(t,e),kr.subVectors(i,e),ma.crossVectors(pa,kr);let a=this.direction.dot(ma),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,e);const l=o*this.direction.dot(kr.crossVectors(Vn,kr));if(l<0)return null;const c=o*this.direction.dot(pa.cross(Vn));if(c<0||l+c>a)return null;const u=-o*Vn.dot(ma);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,i,r,s,a,o,l,c,u,d,f,p,g,_,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,d,f,p,g,_,m)}set(e,t,i,r,s,a,o,l,c,u,d,f,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ri.setFromMatrixColumn(e,0).length(),s=1/Ri.setFromMatrixColumn(e,1).length(),a=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,g=c*u,_=c*d;t[0]=f+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,g=c*u,_=c*d;t[0]=f-_*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*d,t[8]=g*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+_,t[5]=a*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nf,e,rf)}lookAt(e,t,i){const r=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Gn.crossVectors(i,qt),Gn.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Gn.crossVectors(i,qt)),Gn.normalize(),zr.crossVectors(qt,Gn),r[0]=Gn.x,r[4]=zr.x,r[8]=qt.x,r[1]=Gn.y,r[5]=zr.y,r[9]=qt.y,r[2]=Gn.z,r[6]=zr.z,r[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],E=i[3],b=i[7],y=i[11],A=i[15],T=r[0],w=r[4],P=r[8],v=r[12],S=r[1],C=r[5],I=r[9],F=r[13],z=r[2],X=r[6],Y=r[10],N=r[14],B=r[3],W=r[7],D=r[11],V=r[15];return s[0]=a*T+o*S+l*z+c*B,s[4]=a*w+o*C+l*X+c*W,s[8]=a*P+o*I+l*Y+c*D,s[12]=a*v+o*F+l*N+c*V,s[1]=u*T+d*S+f*z+p*B,s[5]=u*w+d*C+f*X+p*W,s[9]=u*P+d*I+f*Y+p*D,s[13]=u*v+d*F+f*N+p*V,s[2]=g*T+_*S+m*z+h*B,s[6]=g*w+_*C+m*X+h*W,s[10]=g*P+_*I+m*Y+h*D,s[14]=g*v+_*F+m*N+h*V,s[3]=E*T+b*S+y*z+A*B,s[7]=E*w+b*C+y*X+A*W,s[11]=E*P+b*I+y*Y+A*D,s[15]=E*v+b*F+y*N+A*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*l*d-r*c*d-s*o*f+i*c*f+r*o*p-i*l*p)+_*(+t*l*p-t*c*f+s*a*f-r*a*p+r*c*u-s*l*u)+m*(+t*c*d-t*o*p-s*a*d+i*a*p+s*o*u-i*c*u)+h*(-r*o*u-t*l*d+t*o*f+r*a*d-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],E=d*m*c-_*f*c+_*l*p-o*m*p-d*l*h+o*f*h,b=g*f*c-u*m*c-g*l*p+a*m*p+u*l*h-a*f*h,y=u*_*c-g*d*c+g*o*p-a*_*p-u*o*h+a*d*h,A=g*d*l-u*_*l-g*o*f+a*_*f+u*o*m-a*d*m,T=t*E+i*b+r*y+s*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=E*w,e[1]=(_*f*s-d*m*s-_*r*p+i*m*p+d*r*h-i*f*h)*w,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*h+i*l*h)*w,e[3]=(d*l*s-o*f*s-d*r*c+i*f*c+o*r*p-i*l*p)*w,e[4]=b*w,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*h+t*f*h)*w,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*h-t*l*h)*w,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*p+t*l*p)*w,e[8]=y*w,e[9]=(g*d*s-u*_*s-g*i*p+t*_*p+u*i*h-t*d*h)*w,e[10]=(a*_*s-g*o*s+g*i*c-t*_*c-a*i*h+t*o*h)*w,e[11]=(u*o*s-a*d*s-u*i*c+t*d*c+a*i*p-t*o*p)*w,e[12]=A*w,e[13]=(u*_*r-g*d*r+g*i*f-t*_*f-u*i*m+t*d*m)*w,e[14]=(g*o*r-a*_*r-g*i*l+t*_*l+a*i*m-t*o*m)*w,e[15]=(a*d*r-u*o*r+u*i*l-t*d*l-a*i*f+t*o*f)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,p=s*u,g=s*d,_=a*u,m=a*d,h=o*d,E=l*c,b=l*u,y=l*d,A=i.x,T=i.y,w=i.z;return r[0]=(1-(_+h))*A,r[1]=(p+y)*A,r[2]=(g-b)*A,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(f+h))*T,r[6]=(m+E)*T,r[7]=0,r[8]=(g+b)*w,r[9]=(m-E)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ri.set(r[0],r[1],r[2]).length();const a=Ri.set(r[4],r[5],r[6]).length(),o=Ri.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],sn.copy(this);const c=1/s,u=1/a,d=1/o;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=d,sn.elements[9]*=d,sn.elements[10]*=d,t.setFromRotationMatrix(sn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=yn,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===yn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ys)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=yn,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===yn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===ys)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ri=new K,sn=new yt,nf=new K(0,0,0),rf=new K(1,1,1),Gn=new K,zr=new K,qt=new K,Zl=new yt,Jl=new Tr;class Fn{constructor(e=0,t=0,i=0,r=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jl.setFromEuler(this),this.setFromQuaternion(Jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class bu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sf=0;const Ql=new K,Pi=new Tr,wn=new yt,Hr=new K,lr=new K,af=new K,of=new Tr,ec=new K(1,0,0),tc=new K(0,1,0),nc=new K(0,0,1),ic={type:"added"},lf={type:"removed"},Li={type:"childadded",child:null},ga={type:"childremoved",child:null};class Vt extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new K,t=new Fn,i=new Tr,r=new K(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new We}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(ec,e)}rotateY(e){return this.rotateOnAxis(tc,e)}rotateZ(e){return this.rotateOnAxis(nc,e)}translateOnAxis(e,t){return Ql.copy(e).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ec,e)}translateY(e){return this.translateOnAxis(tc,e)}translateZ(e){return this.translateOnAxis(nc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hr.copy(e):Hr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(lr,Hr,this.up):wn.lookAt(Hr,lr,this.up),this.quaternion.setFromRotationMatrix(wn),r&&(wn.extractRotation(r.matrixWorld),Pi.setFromRotationMatrix(wn),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ic),Li.child=e,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lf),ga.child=e,this.dispatchEvent(ga),ga.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ic),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,af),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,of,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new K(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new K,An=new K,_a=new K,Cn=new K,Di=new K,Ii=new K,rc=new K,va=new K,xa=new K,ya=new K,ba=new mt,Sa=new mt,Ma=new mt;class cn{constructor(e=new K,t=new K,i=new K){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),an.subVectors(e,t),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){an.subVectors(r,t),An.subVectors(i,t),_a.subVectors(e,t);const a=an.dot(an),o=an.dot(An),l=an.dot(_a),c=An.dot(An),u=An.dot(_a),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return ba.setScalar(0),Sa.setScalar(0),Ma.setScalar(0),ba.fromBufferAttribute(e,t),Sa.fromBufferAttribute(e,i),Ma.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ba,s.x),a.addScaledVector(Sa,s.y),a.addScaledVector(Ma,s.z),a}static isFrontFacing(e,t,i,r){return an.subVectors(i,t),An.subVectors(e,t),an.cross(An).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),An.subVectors(this.a,this.b),an.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return cn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Di.subVectors(r,i),Ii.subVectors(s,i),va.subVectors(e,i);const l=Di.dot(va),c=Ii.dot(va);if(l<=0&&c<=0)return t.copy(i);xa.subVectors(e,r);const u=Di.dot(xa),d=Ii.dot(xa);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Di,a);ya.subVectors(e,s);const p=Di.dot(ya),g=Ii.dot(ya);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ii,o);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return rc.subVectors(s,r),o=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(rc,o);const h=1/(m+_+f);return a=_*h,o=f*h,t.copy(i).addScaledVector(Di,a).addScaledVector(Ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function Ea(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class it{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=qh(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ea(a,s,e+1/3),this.g=Ea(a,s,e),this.b=Ea(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=xt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){const i=Su[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return Je.workingToColorSpace(Rt.copy(this),e),Math.round(Ke(Rt.r*255,0,255))*65536+Math.round(Ke(Rt.g*255,0,255))*256+Math.round(Ke(Rt.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Rt.copy(this),t);const i=Rt.r,r=Rt.g,s=Rt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=xt){Je.workingToColorSpace(Rt.copy(this),e);const t=Rt.r,i=Rt.g,r=Rt.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(Vr);const i=aa($n.h,Vr.h,t),r=aa($n.s,Vr.s,t),s=aa($n.l,Vr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new it;it.NAMES=Su;let cf=0;class Ar extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Er(),this.name="",this.type="Material",this.blending=Gi,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xa,this.blendDst=Ya,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(i.blending=this.blending),this.side!==Zn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ya&&(i.blendDst=this.blendDst),this.blendEquation!==ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$l&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Yt extends Ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new K,Gr=new nt;let uf=0;class hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wl,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gr.fromBufferAttribute(this,t),Gr.applyMatrix3(e),this.setXY(t,Gr.x,Gr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=sr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wl&&(e.usage=this.usage),e}}class Mu extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Eu extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pi extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let df=0;const Qt=new yt,Ta=new Vt,Ui=new K,Xt=new wr,cr=new wr,Et=new K;class Bn extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vu(e)?Eu:Mu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,i){return Qt.makeTranslation(e,t,i),this.applyMatrix4(Qt),this}scale(e,t,i){return Qt.makeScale(e,t,i),this.applyMatrix4(Qt),this}lookAt(e){return Ta.lookAt(e),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pi(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Xt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Xt.min,cr.min),Xt.expandByPoint(Et),Et.addVectors(Xt.max,cr.max),Xt.expandByPoint(Et)):(Xt.expandByPoint(cr.min),Xt.expandByPoint(cr.max))}Xt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Et.fromBufferAttribute(o,c),l&&(Ui.fromBufferAttribute(e,c),Et.add(Ui)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new K,l[P]=new K;const c=new K,u=new K,d=new K,f=new nt,p=new nt,g=new nt,_=new K,m=new K;function h(P,v,S){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,v),d.fromBufferAttribute(i,S),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,v),g.fromBufferAttribute(s,S),u.sub(c),d.sub(c),p.sub(f),g.sub(f);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),o[P].add(_),o[v].add(_),o[S].add(_),l[P].add(m),l[v].add(m),l[S].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,v=E.length;P<v;++P){const S=E[P],C=S.start,I=S.count;for(let F=C,z=C+I;F<z;F+=3)h(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const b=new K,y=new K,A=new K,T=new K;function w(P){A.fromBufferAttribute(r,P),T.copy(A);const v=o[P];b.copy(v),b.sub(A.multiplyScalar(A.dot(v))).normalize(),y.crossVectors(T,v);const C=y.dot(l[P])<0?-1:1;a.setXYZW(P,b.x,b.y,b.z,C)}for(let P=0,v=E.length;P<v;++P){const S=E[P],C=S.start,I=S.count;for(let F=C,z=C+I;F<z;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new K,s=new K,a=new K,o=new K,l=new K,c=new K,u=new K,d=new K;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let h=0;h<u;h++)f[g++]=c[p++]}return new hn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sc=new yt,ii=new yu,$r=new Ts,ac=new K,Wr=new K,qr=new K,Xr=new K,wa=new K,Yr=new K,oc=new K,jr=new K;class vt extends Vt{constructor(e=new Bn,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Yr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(wa.fromBufferAttribute(d,e),a?Yr.addScaledVector(wa,u):Yr.addScaledVector(wa.sub(t),u))}t.add(Yr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(s),ii.copy(e.ray).recast(e.near),!($r.containsPoint(ii.origin)===!1&&(ii.intersectSphere($r,ac)===null||ii.origin.distanceToSquared(ac)>(e.far-e.near)**2))&&(sc.copy(s).invert(),ii.copy(e.ray).applyMatrix4(sc),!(i.boundingBox!==null&&ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ii)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=a[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=E,A=b;y<A;y+=3){const T=o.getX(y),w=o.getX(y+1),P=o.getX(y+2);r=Kr(this,h,e,i,c,u,d,T,w,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const E=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);r=Kr(this,a,e,i,c,u,d,E,b,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=a[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=E,A=b;y<A;y+=3){const T=y,w=y+1,P=y+2;r=Kr(this,h,e,i,c,u,d,T,w,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const E=m,b=m+1,y=m+2;r=Kr(this,a,e,i,c,u,d,E,b,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function hf(n,e,t,i,r,s,a,o){let l;if(e.side===Ht?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Zn,o),l===null)return null;jr.copy(o),jr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(jr);return c<t.near||c>t.far?null:{distance:c,point:jr.clone(),object:n}}function Kr(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Wr),n.getVertexPosition(l,qr),n.getVertexPosition(c,Xr);const u=hf(n,e,t,i,Wr,qr,Xr,oc);if(u){const d=new K;cn.getBarycoord(oc,Wr,qr,Xr,d),r&&(u.uv=cn.getInterpolatedAttribute(r,o,l,c,d,new nt)),s&&(u.uv1=cn.getInterpolatedAttribute(s,o,l,c,d,new nt)),a&&(u.normal=cn.getInterpolatedAttribute(a,o,l,c,d,new K),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new K,materialIndex:0};cn.getNormal(Wr,qr,Xr,f.normal),u.face=f,u.barycoord=d}return u}class Cr extends Bn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new pi(c,3)),this.setAttribute("normal",new pi(u,3)),this.setAttribute("uv",new pi(d,2));function g(_,m,h,E,b,y,A,T,w,P,v){const S=y/w,C=A/P,I=y/2,F=A/2,z=T/2,X=w+1,Y=P+1;let N=0,B=0;const W=new K;for(let D=0;D<Y;D++){const V=D*C-F;for(let q=0;q<X;q++){const ue=q*S-I;W[_]=ue*E,W[m]=V*b,W[h]=z,c.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[h]=T>0?1:-1,u.push(W.x,W.y,W.z),d.push(q/w),d.push(1-D/P),N+=1}}for(let D=0;D<P;D++)for(let V=0;V<w;V++){const q=f+V+X*D,ue=f+V+X*(D+1),Se=f+(V+1)+X*(D+1),Ne=f+(V+1)+X*D;l.push(q,ue,Ne),l.push(ue,Se,Ne),B+=6}o.addGroup(p,B,v),p+=B,f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ji(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ut(n){const e={};for(let t=0;t<n.length;t++){const i=Ji(n[t]);for(const r in i)e[r]=i[r]}return e}function ff(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Tu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const pf={clone:Ji,merge:Ut};var mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends Ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mf,this.fragmentShader=gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=ff(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class wu extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new K,lc=new nt,cc=new nt;class ln extends wu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=No*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return No*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z)}getViewSize(e,t){return this.getViewBounds(e,lc,cc),t.subVectors(cc,lc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ni=-90,Fi=1;class _f extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ln(Ni,Fi,e,t);r.layers=this.layers,this.add(r);const s=new ln(Ni,Fi,e,t);s.layers=this.layers,this.add(s);const a=new ln(Ni,Fi,e,t);a.layers=this.layers,this.add(a);const o=new ln(Ni,Fi,e,t);o.layers=this.layers,this.add(o);const l=new ln(Ni,Fi,e,t);l.layers=this.layers,this.add(l);const c=new ln(Ni,Fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===yn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ys)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Au extends wt{constructor(e=[],t=ji,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vf extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Au(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cr(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:Ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:jn});s.uniforms.tEquirect.value=t;const a=new vt(r,s),o=t.minFilter;return t.minFilter===hi&&(t.minFilter=tn),new _f(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Zr extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xf={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xf)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Zr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Cu extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ca=new K,yf=new K,bf=new We;class oi{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ca.subVectors(i,t).cross(yf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ca),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||bf.getNormalMatrix(e),r=this.coplanarPoint(Ca).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new Ts,Sf=new nt(.5,.5),Jr=new K;class Ru{constructor(e=new oi,t=new oi,i=new oi,r=new oi,s=new oi,a=new oi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],p=s[7],g=s[8],_=s[9],m=s[10],h=s[11],E=s[12],b=s[13],y=s[14],A=s[15];if(r[0].setComponents(c-a,p-u,h-g,A-E).normalize(),r[1].setComponents(c+a,p+u,h+g,A+E).normalize(),r[2].setComponents(c+o,p+d,h+_,A+b).normalize(),r[3].setComponents(c-o,p-d,h-_,A-b).normalize(),i)r[4].setComponents(l,f,m,y).normalize(),r[5].setComponents(c-l,p-f,h-m,A-y).normalize();else if(r[4].setComponents(c-l,p-f,h-m,A-y).normalize(),t===yn)r[5].setComponents(c+l,p+f,h+m,A+y).normalize();else if(t===ys)r[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){ri.center.set(0,0,0);const t=Sf.distanceTo(e.center);return ri.radius=.7071067811865476+t,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Jr.x=r.normal.x>0?e.max.x:e.min.x,Jr.y=r.normal.y>0?e.max.y:e.min.y,Jr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pu extends Ar{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const uc=new yt,Fo=new yu,Qr=new Ts,es=new K;class Mf extends Vt{constructor(e=new Bn,t=new Pu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(r),Qr.radius+=s,e.ray.intersectsSphere(Qr)===!1)return;uc.copy(r).invert(),Fo.copy(e.ray).applyMatrix4(uc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);es.fromBufferAttribute(d,m),dc(es,m,l,r,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=f,_=p;g<_;g++)es.fromBufferAttribute(d,g),dc(es,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function dc(n,e,t,i,r,s,a){const o=Fo.distanceSqToPoint(n);if(o<t){const l=new K;Fo.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class hs extends wt{constructor(e,t,i,r,s=tn,a=tn,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function d(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),super.dispose()}}class fr extends wt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Lu extends wt{constructor(e,t,i=mi,r,s,a,o=dn,l=dn,c,u=xr,d=1){if(u!==xr&&u!==yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Du extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nt extends Bn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=t/l,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){const E=h*f-a;for(let b=0;b<c;b++){const y=b*d-s;g.push(y,-E,0),_.push(0,0,1),m.push(b/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<o;E++){const b=E+c*h,y=E+c*(h+1),A=E+1+c*(h+1),T=E+1+c*h;p.push(b,y,T),p.push(y,A,T)}this.setIndex(p),this.setAttribute("position",new pi(g,3)),this.setAttribute("normal",new pi(_,3)),this.setAttribute("uv",new pi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nt(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ef extends Ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tf extends Ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ra={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class wf{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Af=new wf;class Qo{constructor(e){this.manager=e!==void 0?e:Af,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Qo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Oi=new WeakMap;class Cf extends Qo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ra.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=Oi.get(a);d===void 0&&(d=[],Oi.set(a,d)),d.push({onLoad:t,onError:r})}return a}const o=br("img");function l(){u(),t&&t(this);const d=Oi.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onLoad&&p.onLoad(this)}Oi.delete(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),Ra.remove(`image:${e}`);const f=Oi.get(this)||[];for(let p=0;p<f.length;p++){const g=f[p];g.onError&&g.onError(d)}Oi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ra.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Iu extends Qo{constructor(e){super(e)}load(e,t,i,r){const s=new wt,a=new Cf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class el extends wu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Rf extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function hc(n,e,t,i){const r=Pf(i);switch(t){case fu:return n*e;case mu:return n*e/r.components*r.byteLength;case jo:return n*e/r.components*r.byteLength;case gu:return n*e*2/r.components*r.byteLength;case Ko:return n*e*2/r.components*r.byteLength;case pu:return n*e*3/r.components*r.byteLength;case un:return n*e*4/r.components*r.byteLength;case Zo:return n*e*4/r.components*r.byteLength;case ls:case cs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case us:case ds:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case oo:case co:return Math.max(n,16)*Math.max(e,8)/4;case ao:case lo:return Math.max(n,8)*Math.max(e,8)/2;case uo:case ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case go:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case _o:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case vo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case xo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case yo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case bo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case So:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case To:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case wo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ao:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Co:case Ro:case Po:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Lo:case Do:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Io:case Uo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Pf(n){switch(n){case Nn:case cu:return{byteLength:1,components:1};case _r:case uu:case Mr:return{byteLength:2,components:1};case Xo:case Yo:return{byteLength:2,components:4};case mi:case qo:case In:return{byteLength:4,components:1};case du:case hu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Uu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Lf(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,If=`#ifdef USE_ALPHAHASH
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
#endif`,Uf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ff=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bf=`#ifdef USE_AOMAP
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
#endif`,kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zf=`#ifdef USE_BATCHING
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
#endif`,Hf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$f=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wf=`#ifdef USE_IRIDESCENCE
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
#endif`,qf=`#ifdef USE_BUMPMAP
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
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tp=`#define PI 3.141592653589793
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
} // validated`,np=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ip=`vec3 transformedNormal = objectNormal;
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
#endif`,rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",cp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,up=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hp=`#ifdef USE_ENVMAP
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
#endif`,fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_p=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xp=`#ifdef USE_GRADIENTMAP
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
}`,yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mp=`uniform bool receiveShadow;
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
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rp=`PhysicalMaterial material;
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
#endif`,Pp=`struct PhysicalMaterial {
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
}`,Lp=`
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
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ip=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Np=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Op=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hp=`#if defined( USE_POINTS_UV )
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
#endif`,Vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xp=`#ifdef USE_MORPHTARGETS
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
#endif`,Yp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,em=`#ifdef USE_NORMALMAP
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
#endif`,tm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,am=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gm=`float getShadowMask() {
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
}`,_m=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vm=`#ifdef USE_SKINNING
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
#endif`,xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ym=`#ifdef USE_SKINNING
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
#endif`,bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Em=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tm=`#ifdef USE_TRANSMISSION
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
#endif`,wm=`#ifdef USE_TRANSMISSION
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dm=`uniform sampler2D t2D;
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Um=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`#include <common>
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
}`,Bm=`#if DEPTH_PACKING == 3200
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
}`,km=`#define DISTANCE
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
}`,zm=`#define DISTANCE
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`uniform float scale;
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
}`,$m=`uniform vec3 diffuse;
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
}`,Wm=`#include <common>
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
}`,qm=`uniform vec3 diffuse;
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
}`,Xm=`#define LAMBERT
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
}`,Ym=`#define LAMBERT
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
}`,jm=`#define MATCAP
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
}`,Km=`#define MATCAP
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
}`,Zm=`#define NORMAL
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
}`,Jm=`#define NORMAL
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
}`,Qm=`#define PHONG
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
}`,eg=`#define PHONG
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
}`,tg=`#define STANDARD
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
}`,ng=`#define STANDARD
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
}`,ig=`#define TOON
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
}`,rg=`#define TOON
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
}`,sg=`uniform float size;
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
}`,ag=`uniform vec3 diffuse;
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
}`,og=`#include <common>
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
}`,lg=`uniform vec3 color;
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
}`,cg=`uniform float rotation;
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
}`,ug=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Df,alphahash_pars_fragment:If,alphamap_fragment:Uf,alphamap_pars_fragment:Nf,alphatest_fragment:Ff,alphatest_pars_fragment:Of,aomap_fragment:Bf,aomap_pars_fragment:kf,batching_pars_vertex:zf,batching_vertex:Hf,begin_vertex:Vf,beginnormal_vertex:Gf,bsdfs:$f,iridescence_fragment:Wf,bumpmap_pars_fragment:qf,clipping_planes_fragment:Xf,clipping_planes_pars_fragment:Yf,clipping_planes_pars_vertex:jf,clipping_planes_vertex:Kf,color_fragment:Zf,color_pars_fragment:Jf,color_pars_vertex:Qf,color_vertex:ep,common:tp,cube_uv_reflection_fragment:np,defaultnormal_vertex:ip,displacementmap_pars_vertex:rp,displacementmap_vertex:sp,emissivemap_fragment:ap,emissivemap_pars_fragment:op,colorspace_fragment:lp,colorspace_pars_fragment:cp,envmap_fragment:up,envmap_common_pars_fragment:dp,envmap_pars_fragment:hp,envmap_pars_vertex:fp,envmap_physical_pars_fragment:Ep,envmap_vertex:pp,fog_vertex:mp,fog_pars_vertex:gp,fog_fragment:_p,fog_pars_fragment:vp,gradientmap_pars_fragment:xp,lightmap_pars_fragment:yp,lights_lambert_fragment:bp,lights_lambert_pars_fragment:Sp,lights_pars_begin:Mp,lights_toon_fragment:Tp,lights_toon_pars_fragment:wp,lights_phong_fragment:Ap,lights_phong_pars_fragment:Cp,lights_physical_fragment:Rp,lights_physical_pars_fragment:Pp,lights_fragment_begin:Lp,lights_fragment_maps:Dp,lights_fragment_end:Ip,logdepthbuf_fragment:Up,logdepthbuf_pars_fragment:Np,logdepthbuf_pars_vertex:Fp,logdepthbuf_vertex:Op,map_fragment:Bp,map_pars_fragment:kp,map_particle_fragment:zp,map_particle_pars_fragment:Hp,metalnessmap_fragment:Vp,metalnessmap_pars_fragment:Gp,morphinstance_vertex:$p,morphcolor_vertex:Wp,morphnormal_vertex:qp,morphtarget_pars_vertex:Xp,morphtarget_vertex:Yp,normal_fragment_begin:jp,normal_fragment_maps:Kp,normal_pars_fragment:Zp,normal_pars_vertex:Jp,normal_vertex:Qp,normalmap_pars_fragment:em,clearcoat_normal_fragment_begin:tm,clearcoat_normal_fragment_maps:nm,clearcoat_pars_fragment:im,iridescence_pars_fragment:rm,opaque_fragment:sm,packing:am,premultiplied_alpha_fragment:om,project_vertex:lm,dithering_fragment:cm,dithering_pars_fragment:um,roughnessmap_fragment:dm,roughnessmap_pars_fragment:hm,shadowmap_pars_fragment:fm,shadowmap_pars_vertex:pm,shadowmap_vertex:mm,shadowmask_pars_fragment:gm,skinbase_vertex:_m,skinning_pars_vertex:vm,skinning_vertex:xm,skinnormal_vertex:ym,specularmap_fragment:bm,specularmap_pars_fragment:Sm,tonemapping_fragment:Mm,tonemapping_pars_fragment:Em,transmission_fragment:Tm,transmission_pars_fragment:wm,uv_pars_fragment:Am,uv_pars_vertex:Cm,uv_vertex:Rm,worldpos_vertex:Pm,background_vert:Lm,background_frag:Dm,backgroundCube_vert:Im,backgroundCube_frag:Um,cube_vert:Nm,cube_frag:Fm,depth_vert:Om,depth_frag:Bm,distanceRGBA_vert:km,distanceRGBA_frag:zm,equirect_vert:Hm,equirect_frag:Vm,linedashed_vert:Gm,linedashed_frag:$m,meshbasic_vert:Wm,meshbasic_frag:qm,meshlambert_vert:Xm,meshlambert_frag:Ym,meshmatcap_vert:jm,meshmatcap_frag:Km,meshnormal_vert:Zm,meshnormal_frag:Jm,meshphong_vert:Qm,meshphong_frag:eg,meshphysical_vert:tg,meshphysical_frag:ng,meshtoon_vert:ig,meshtoon_frag:rg,points_vert:sg,points_frag:ag,shadow_vert:og,shadow_frag:lg,sprite_vert:cg,sprite_frag:ug},Te={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},vn={basic:{uniforms:Ut([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Ut([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new it(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Ut([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Ut([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Ut([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new it(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Ut([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Ut([Te.points,Te.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Ut([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Ut([Te.common,Te.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Ut([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Ut([Te.sprite,Te.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Ut([Te.common,Te.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Ut([Te.lights,Te.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};vn.physical={uniforms:Ut([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const ts={r:0,b:0,g:0},si=new Fn,dg=new yt;function hg(n,e,t,i,r,s,a){const o=new it(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function _(b){let y=!1;const A=g(b);A===null?h(o,l):A&&A.isColor&&(h(A,1),y=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,y){const A=g(y);A&&(A.isCubeTexture||A.mapping===Es)?(u===void 0&&(u=new vt(new Cr(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Ji(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),si.copy(y.backgroundRotation),si.x*=-1,si.y*=-1,si.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dg.makeRotationFromEuler(si)),u.material.toneMapped=Je.getTransfer(A.colorSpace)!==at,(d!==A||f!==A.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=A,f=A.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new vt(new Nt(2,2),new Jn({name:"BackgroundMaterial",uniforms:Ji(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Je.getTransfer(A.colorSpace)!==at,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||f!==A.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=A,f=A.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function h(b,y){b.getRGB(ts,Tu(n)),i.buffers.color.setClear(ts.r,ts.g,ts.b,y,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),l=y,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,h(o,l)},render:_,addToRenderList:m,dispose:E}}function fg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(S,C,I,F,z){let X=!1;const Y=d(F,I,C);s!==Y&&(s=Y,c(s.object)),X=p(S,F,I,z),X&&g(S,F,I,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(S,C,I,F),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function d(S,C,I){const F=I.wireframe===!0;let z=i[S.id];z===void 0&&(z={},i[S.id]=z);let X=z[C.id];X===void 0&&(X={},z[C.id]=X);let Y=X[F];return Y===void 0&&(Y=f(l()),X[F]=Y),Y}function f(S){const C=[],I=[],F=[];for(let z=0;z<t;z++)C[z]=0,I[z]=0,F[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:F,object:S,attributes:{},index:null}}function p(S,C,I,F){const z=s.attributes,X=C.attributes;let Y=0;const N=I.getAttributes();for(const B in N)if(N[B].location>=0){const D=z[B];let V=X[B];if(V===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(V=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(V=S.instanceColor)),D===void 0||D.attribute!==V||V&&D.data!==V.data)return!0;Y++}return s.attributesNum!==Y||s.index!==F}function g(S,C,I,F){const z={},X=C.attributes;let Y=0;const N=I.getAttributes();for(const B in N)if(N[B].location>=0){let D=X[B];D===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(D=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(D=S.instanceColor));const V={};V.attribute=D,D&&D.data&&(V.data=D.data),z[B]=V,Y++}s.attributes=z,s.attributesNum=Y,s.index=F}function _(){const S=s.newAttributes;for(let C=0,I=S.length;C<I;C++)S[C]=0}function m(S){h(S,0)}function h(S,C){const I=s.newAttributes,F=s.enabledAttributes,z=s.attributeDivisors;I[S]=1,F[S]===0&&(n.enableVertexAttribArray(S),F[S]=1),z[S]!==C&&(n.vertexAttribDivisor(S,C),z[S]=C)}function E(){const S=s.newAttributes,C=s.enabledAttributes;for(let I=0,F=C.length;I<F;I++)C[I]!==S[I]&&(n.disableVertexAttribArray(I),C[I]=0)}function b(S,C,I,F,z,X,Y){Y===!0?n.vertexAttribIPointer(S,C,I,z,X):n.vertexAttribPointer(S,C,I,F,z,X)}function y(S,C,I,F){_();const z=F.attributes,X=I.getAttributes(),Y=C.defaultAttributeValues;for(const N in X){const B=X[N];if(B.location>=0){let W=z[N];if(W===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(W=S.instanceColor)),W!==void 0){const D=W.normalized,V=W.itemSize,q=e.get(W);if(q===void 0)continue;const ue=q.buffer,Se=q.type,Ne=q.bytesPerElement,ee=Se===n.INT||Se===n.UNSIGNED_INT||W.gpuType===qo;if(W.isInterleavedBufferAttribute){const ie=W.data,xe=ie.stride,Re=W.offset;if(ie.isInstancedInterleavedBuffer){for(let Ee=0;Ee<B.locationSize;Ee++)h(B.location+Ee,ie.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ee=0;Ee<B.locationSize;Ee++)m(B.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let Ee=0;Ee<B.locationSize;Ee++)b(B.location+Ee,V/B.locationSize,Se,D,xe*Ne,(Re+V/B.locationSize*Ee)*Ne,ee)}else{if(W.isInstancedBufferAttribute){for(let ie=0;ie<B.locationSize;ie++)h(B.location+ie,W.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ie=0;ie<B.locationSize;ie++)m(B.location+ie);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let ie=0;ie<B.locationSize;ie++)b(B.location+ie,V/B.locationSize,Se,D,V*Ne,V/B.locationSize*ie*Ne,ee)}}else if(Y!==void 0){const D=Y[N];if(D!==void 0)switch(D.length){case 2:n.vertexAttrib2fv(B.location,D);break;case 3:n.vertexAttrib3fv(B.location,D);break;case 4:n.vertexAttrib4fv(B.location,D);break;default:n.vertexAttrib1fv(B.location,D)}}}}E()}function A(){P();for(const S in i){const C=i[S];for(const I in C){const F=C[I];for(const z in F)u(F[z].object),delete F[z];delete C[I]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;const C=i[S.id];for(const I in C){const F=C[I];for(const z in F)u(F[z].object),delete F[z];delete C[I]}delete i[S.id]}function w(S){for(const C in i){const I=i[C];if(I[S.id]===void 0)continue;const F=I[S.id];for(const z in F)u(F[z].object),delete F[z];delete I[S.id]}}function P(){v(),a=!0,s!==r&&(s=r,c(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:v,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function pg(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function mg(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==un&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const P=w===Mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Nn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==In&&!P)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:A,maxSamples:T}}function gg(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new oi,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const E=s?0:i,b=E*4;let y=h.clippingState||null;l.value=y,y=u(g,f,b,p);for(let A=0;A!==b;++A)y[A]=t[A];h.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<h)&&(m=new Float32Array(h));for(let b=0,y=p;b!==_;++b,y+=4)a.copy(d[b]).applyMatrix4(E,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function _g(n){let e=new WeakMap;function t(a,o){return o===no?a.mapping=ji:o===io&&(a.mapping=Ki),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===no||o===io)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new vf(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const zi=4,fc=[.125,.215,.35,.446,.526,.582],ui=20,Pa=new el,pc=new it;let La=null,Da=0,Ia=0,Ua=!1;const li=(1+Math.sqrt(5))/2,Bi=1/li,mc=[new K(-li,Bi,0),new K(li,Bi,0),new K(-Bi,0,li),new K(Bi,0,li),new K(0,li,-Bi),new K(0,li,Bi),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],vg=new K;class gc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=vg}=s;La=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(La,Da,Ia),this._renderer.xr.enabled=Ua,e.scissorTest=!1,ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ji||e.mapping===Ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),La=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Mr,format:un,colorSpace:Zi,depthBuffer:!1},r=_c(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_c(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xg(s)),this._blurMaterial=yg(s,e,t)}return r}_compileMaterial(e){const t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,Pa)}_sceneToCubeUV(e,t,i,r,s){const l=new ln(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(pc),d.toneMapping=Kn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const _=new Yt({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),m=new vt(new Cr,_);let h=!1;const E=e.background;E?E.isColor&&(_.color.copy(E),e.background=null,h=!0):(_.color.copy(pc),h=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));const A=this._cubeSize;ns(r,y*A,b>2?A:0,A,A),d.setRenderTarget(r),h&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ji||e.mapping===Ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new vt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ns(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Pa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=mc[(r-s-1)%mc.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new vt(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ui-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):ui;m>ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);const h=[];let E=0;for(let w=0;w<ui;++w){const P=w/_,v=Math.exp(-P*P/2);h.push(v),w===0?E+=v:w<m&&(E+=2*v)}for(let w=0;w<h.length;w++)h[w]=h[w]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;const y=this._sizeLods[r],A=3*y*(r>b-zi?r-b+zi:0),T=4*(this._cubeSize-y);ns(t,A,T,3*y,2*y),l.setRenderTarget(t),l.render(d,Pa)}}function xg(n){const e=[],t=[],i=[];let r=n;const s=n-zi+1+fc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-zi?l=fc[a-n+zi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,m=2,h=1,E=new Float32Array(_*g*p),b=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let T=0;T<p;T++){const w=T%3*2/3-1,P=T>2?0:-1,v=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];E.set(v,_*g*T),b.set(f,m*g*T);const S=[T,T,T,T,T,T];y.set(S,h*g*T)}const A=new Bn;A.setAttribute("position",new hn(E,_)),A.setAttribute("uv",new hn(b,m)),A.setAttribute("faceIndex",new hn(y,h)),e.push(A),r>zi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _c(n,e,t){const i=new gi(n,e,t);return i.texture.mapping=Es,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ns(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function yg(n,e,t){const i=new Float32Array(ui),r=new K(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tl(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function vc(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tl(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function xc(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function tl(){return`

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
	`}function bg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===no||l===io,u=l===ji||l===Ki;if(c||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new gc(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new gc(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Sg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Sr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Mg(n,e,t,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let b=0,y=E.length;b<y;b+=3){const A=E[b+0],T=E[b+1],w=E[b+2];f.push(A,T,T,w,w,A)}}else if(g!==void 0){const E=g.array;_=g.version;for(let b=0,y=E.length/3-1;b<y;b+=3){const A=b+0,T=b+1,w=b+2;f.push(A,T,T,w,w,A)}}else return;const m=new(vu(f)?Eu:Mu)(f,1);m.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Eg(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*a),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*a,g),t.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function d(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/a,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,g);let h=0;for(let E=0;E<g;E++)h+=p[E]*_[E];t.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Tg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function wg(n,e,t){const i=new WeakMap,r=new mt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let S=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let A=o.attributes.position.count*y,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const w=new Float32Array(A*T*4*d),P=new xu(w,A,T,d);P.type=In,P.needsUpdate=!0;const v=y*4;for(let C=0;C<d;C++){const I=h[C],F=E[C],z=b[C],X=A*T*4*C;for(let Y=0;Y<I.count;Y++){const N=Y*v;g===!0&&(r.fromBufferAttribute(I,Y),w[X+N+0]=r.x,w[X+N+1]=r.y,w[X+N+2]=r.z,w[X+N+3]=0),_===!0&&(r.fromBufferAttribute(F,Y),w[X+N+4]=r.x,w[X+N+5]=r.y,w[X+N+6]=r.z,w[X+N+7]=0),m===!0&&(r.fromBufferAttribute(z,Y),w[X+N+8]=r.x,w[X+N+9]=r.y,w[X+N+10]=r.z,w[X+N+11]=z.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new nt(A,T)},i.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Ag(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Nu=new wt,yc=new Lu(1,1),Fu=new xu,Ou=new ef,Bu=new Au,bc=[],Sc=[],Mc=new Float32Array(16),Ec=new Float32Array(9),Tc=new Float32Array(4);function tr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=bc[r];if(s===void 0&&(s=new Float32Array(r),bc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ws(n,e){let t=Sc[e];t===void 0&&(t=new Int32Array(e),Sc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Cg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function Pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function Lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function Dg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Tc.set(i),n.uniformMatrix2fv(this.addr,!1,Tc),Mt(t,i)}}function Ig(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Ec.set(i),n.uniformMatrix3fv(this.addr,!1,Ec),Mt(t,i)}}function Ug(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Mc.set(i),n.uniformMatrix4fv(this.addr,!1,Mc),Mt(t,i)}}function Ng(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Fg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function Og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function Bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function kg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function Hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function Vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function Gg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(yc.compareFunction=_u,s=yc):s=Nu,t.setTexture2D(e||s,r)}function $g(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ou,r)}function Wg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Bu,r)}function qg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Fu,r)}function Xg(n){switch(n){case 5126:return Cg;case 35664:return Rg;case 35665:return Pg;case 35666:return Lg;case 35674:return Dg;case 35675:return Ig;case 35676:return Ug;case 5124:case 35670:return Ng;case 35667:case 35671:return Fg;case 35668:case 35672:return Og;case 35669:case 35673:return Bg;case 5125:return kg;case 36294:return zg;case 36295:return Hg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return qg}}function Yg(n,e){n.uniform1fv(this.addr,e)}function jg(n,e){const t=tr(e,this.size,2);n.uniform2fv(this.addr,t)}function Kg(n,e){const t=tr(e,this.size,3);n.uniform3fv(this.addr,t)}function Zg(n,e){const t=tr(e,this.size,4);n.uniform4fv(this.addr,t)}function Jg(n,e){const t=tr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Qg(n,e){const t=tr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function e0(n,e){const t=tr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function t0(n,e){n.uniform1iv(this.addr,e)}function n0(n,e){n.uniform2iv(this.addr,e)}function i0(n,e){n.uniform3iv(this.addr,e)}function r0(n,e){n.uniform4iv(this.addr,e)}function s0(n,e){n.uniform1uiv(this.addr,e)}function a0(n,e){n.uniform2uiv(this.addr,e)}function o0(n,e){n.uniform3uiv(this.addr,e)}function l0(n,e){n.uniform4uiv(this.addr,e)}function c0(n,e,t){const i=this.cache,r=e.length,s=ws(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Nu,s[a])}function u0(n,e,t){const i=this.cache,r=e.length,s=ws(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ou,s[a])}function d0(n,e,t){const i=this.cache,r=e.length,s=ws(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Bu,s[a])}function h0(n,e,t){const i=this.cache,r=e.length,s=ws(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Fu,s[a])}function f0(n){switch(n){case 5126:return Yg;case 35664:return jg;case 35665:return Kg;case 35666:return Zg;case 35674:return Jg;case 35675:return Qg;case 35676:return e0;case 5124:case 35670:return t0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return r0;case 5125:return s0;case 36294:return a0;case 36295:return o0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return h0}}class p0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Xg(t.type)}}class m0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=f0(t.type)}}class g0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Na=/(\w+)(\])?(\[|\.)?/g;function wc(n,e){n.seq.push(e),n.map[e.id]=e}function _0(n,e,t){const i=n.name,r=i.length;for(Na.lastIndex=0;;){const s=Na.exec(i),a=Na.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){wc(t,c===void 0?new p0(o,n,e):new m0(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new g0(o),wc(t,d)),t=d}}}class fs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);_0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Ac(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const v0=37297;let x0=0;function y0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Cc=new We;function b0(n){Je._getMatrix(Cc,Je.workingColorSpace,n);const e=`mat3( ${Cc.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case xs:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Rc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+y0(n.getShaderSource(e),o)}else return s}function S0(n,e){const t=b0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function M0(n,e){let t;switch(e){case Ah:t="Linear";break;case Ch:t="Reinhard";break;case Rh:t="Cineon";break;case Ph:t="ACESFilmic";break;case Dh:t="AgX";break;case Ih:t="Neutral";break;case Lh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const is=new K;function E0(){Je.getLuminanceCoefficients(is);const n=is.x.toFixed(4),e=is.y.toFixed(4),t=is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function w0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function A0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function hr(n){return n!==""}function Pc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const C0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oo(n){return n.replace(C0,P0)}const R0=new Map;function P0(n,e){let t=Xe[e];if(t===void 0){const i=R0.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Oo(t)}const L0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dc(n){return n.replace(L0,D0)}function D0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ic(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function I0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===au?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ah?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pn&&(e="SHADOWMAP_TYPE_VSM"),e}function U0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ji:case Ki:e="ENVMAP_TYPE_CUBE";break;case Es:e="ENVMAP_TYPE_CUBE_UV";break}return e}function N0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ki:e="ENVMAP_MODE_REFRACTION";break}return e}function F0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ou:e="ENVMAP_BLENDING_MULTIPLY";break;case Th:e="ENVMAP_BLENDING_MIX";break;case wh:e="ENVMAP_BLENDING_ADD";break}return e}function O0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function B0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=I0(t),c=U0(t),u=N0(t),d=F0(t),f=O0(t),p=T0(t),g=w0(s),_=r.createProgram();let m,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hr).join(`
`),h.length>0&&(h+=`
`)):(m=[Ic(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),h=[Ic(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Kn?M0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,S0("linearToOutputTexel",t.outputColorSpace),E0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hr).join(`
`)),a=Oo(a),a=Pc(a,t),a=Lc(a,t),o=Oo(o),o=Pc(o,t),o=Lc(o,t),a=Dc(a),o=Dc(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=E+m+a,y=E+h+o,A=Ac(r,r.VERTEX_SHADER,b),T=Ac(r,r.FRAGMENT_SHADER,y);r.attachShader(_,A),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(C){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(_)||"",F=r.getShaderInfoLog(A)||"",z=r.getShaderInfoLog(T)||"",X=I.trim(),Y=F.trim(),N=z.trim();let B=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,A,T);else{const D=Rc(r,A,"vertex"),V=Rc(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+X+`
`+D+`
`+V)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(Y===""||N==="")&&(W=!1);W&&(C.diagnostics={runnable:B,programLog:X,vertexShader:{log:Y,prefix:m},fragmentShader:{log:N,prefix:h}})}r.deleteShader(A),r.deleteShader(T),P=new fs(r,_),v=A0(r,_)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let v;this.getAttributes=function(){return v===void 0&&w(this),v};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,v0)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=x0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let k0=0;class z0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new H0(e),t.set(e,i)),i}}class H0{constructor(e){this.id=k0++,this.code=e,this.usedTimes=0}}function V0(n,e,t,i,r,s,a){const o=new bu,l=new z0,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,S,C,I,F){const z=I.fog,X=F.geometry,Y=v.isMeshStandardMaterial?I.environment:null,N=(v.isMeshStandardMaterial?t:e).get(v.envMap||Y),B=N&&N.mapping===Es?N.image.height:null,W=g[v.type];v.precision!==null&&(p=r.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const D=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,V=D!==void 0?D.length:0;let q=0;X.morphAttributes.position!==void 0&&(q=1),X.morphAttributes.normal!==void 0&&(q=2),X.morphAttributes.color!==void 0&&(q=3);let ue,Se,Ne,ee;if(W){const tt=vn[W];ue=tt.vertexShader,Se=tt.fragmentShader}else ue=v.vertexShader,Se=v.fragmentShader,l.update(v),Ne=l.getVertexShaderID(v),ee=l.getFragmentShaderID(v);const ie=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),Re=F.isInstancedMesh===!0,Ee=F.isBatchedMesh===!0,Ge=!!v.map,dt=!!v.matcap,L=!!N,et=!!v.aoMap,Be=!!v.lightMap,Fe=!!v.bumpMap,re=!!v.normalMap,ye=!!v.displacementMap,oe=!!v.emissiveMap,Me=!!v.metalnessMap,Pe=!!v.roughnessMap,qe=v.anisotropy>0,R=v.clearcoat>0,x=v.dispersion>0,$=v.iridescence>0,te=v.sheen>0,de=v.transmission>0,ne=qe&&!!v.anisotropyMap,Le=R&&!!v.clearcoatMap,ve=R&&!!v.clearcoatNormalMap,O=R&&!!v.clearcoatRoughnessMap,he=$&&!!v.iridescenceMap,j=$&&!!v.iridescenceThicknessMap,se=te&&!!v.sheenColorMap,be=te&&!!v.sheenRoughnessMap,me=!!v.specularMap,pe=!!v.specularColorMap,Ue=!!v.specularIntensityMap,U=de&&!!v.transmissionMap,le=de&&!!v.thicknessMap,ge=!!v.gradientMap,fe=!!v.alphaMap,ae=v.alphaTest>0,ce=!!v.alphaHash,Ie=!!v.extensions;let $e=Kn;v.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&($e=n.toneMapping);const lt={shaderID:W,shaderType:v.type,shaderName:v.name,vertexShader:ue,fragmentShader:Se,defines:v.defines,customVertexShaderID:Ne,customFragmentShaderID:ee,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Ee,batchingColor:Ee&&F._colorsTexture!==null,instancing:Re,instancingColor:Re&&F.instanceColor!==null,instancingMorph:Re&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Zi,alphaToCoverage:!!v.alphaToCoverage,map:Ge,matcap:dt,envMap:L,envMapMode:L&&N.mapping,envMapCubeUVHeight:B,aoMap:et,lightMap:Be,bumpMap:Fe,normalMap:re,displacementMap:f&&ye,emissiveMap:oe,normalMapObjectSpace:re&&v.normalMapType===Bh,normalMapTangentSpace:re&&v.normalMapType===Oh,metalnessMap:Me,roughnessMap:Pe,anisotropy:qe,anisotropyMap:ne,clearcoat:R,clearcoatMap:Le,clearcoatNormalMap:ve,clearcoatRoughnessMap:O,dispersion:x,iridescence:$,iridescenceMap:he,iridescenceThicknessMap:j,sheen:te,sheenColorMap:se,sheenRoughnessMap:be,specularMap:me,specularColorMap:pe,specularIntensityMap:Ue,transmission:de,transmissionMap:U,thicknessMap:le,gradientMap:ge,opaque:v.transparent===!1&&v.blending===Gi&&v.alphaToCoverage===!1,alphaMap:fe,alphaTest:ae,alphaHash:ce,combine:v.combine,mapUv:Ge&&_(v.map.channel),aoMapUv:et&&_(v.aoMap.channel),lightMapUv:Be&&_(v.lightMap.channel),bumpMapUv:Fe&&_(v.bumpMap.channel),normalMapUv:re&&_(v.normalMap.channel),displacementMapUv:ye&&_(v.displacementMap.channel),emissiveMapUv:oe&&_(v.emissiveMap.channel),metalnessMapUv:Me&&_(v.metalnessMap.channel),roughnessMapUv:Pe&&_(v.roughnessMap.channel),anisotropyMapUv:ne&&_(v.anisotropyMap.channel),clearcoatMapUv:Le&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ve&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:j&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:se&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(v.sheenRoughnessMap.channel),specularMapUv:me&&_(v.specularMap.channel),specularColorMapUv:pe&&_(v.specularColorMap.channel),specularIntensityMapUv:Ue&&_(v.specularIntensityMap.channel),transmissionMapUv:U&&_(v.transmissionMap.channel),thicknessMapUv:le&&_(v.thicknessMap.channel),alphaMapUv:fe&&_(v.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(re||qe),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(Ge||fe),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xe,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:q,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:Ge&&v.map.isVideoTexture===!0&&Je.getTransfer(v.map.colorSpace)===at,decodeVideoTextureEmissive:oe&&v.emissiveMap.isVideoTexture===!0&&Je.getTransfer(v.emissiveMap.colorSpace)===at,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ln,flipSided:v.side===Ht,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ie&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&v.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function h(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)S.push(C),S.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(E(S,v),b(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function E(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function b(v,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),v.push(o.mask)}function y(v){const S=g[v.type];let C;if(S){const I=vn[S];C=pf.clone(I.uniforms)}else C=v.uniforms;return C}function A(v,S){let C;for(let I=0,F=u.length;I<F;I++){const z=u[I];if(z.cacheKey===S){C=z,++C.usedTimes;break}}return C===void 0&&(C=new B0(n,S,v,s),u.push(C)),C}function T(v){if(--v.usedTimes===0){const S=u.indexOf(v);u[S]=u[u.length-1],u.pop(),v.destroy()}}function w(v){l.remove(v)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:A,releaseProgram:T,releaseShaderCache:w,programs:u,dispose:P}}function G0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function $0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Uc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Nc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,f,p,g,_,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=m),e++,h}function o(d,f,p,g,_,m){const h=a(d,f,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(d,f,p,g,_,m){const h=a(d,f,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||$0),i.length>1&&i.sort(f||Uc),r.length>1&&r.sort(f||Uc)}function u(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function W0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Nc,n.set(i,[a])):r>=s.length?(a=new Nc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function q0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new it};break;case"SpotLight":t={position:new K,direction:new K,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new K,halfWidth:new K,halfHeight:new K};break}return n[e.id]=t,t}}}function X0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Y0=0;function j0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function K0(n){const e=new q0,t=X0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new K);const r=new K,s=new yt,a=new yt;function o(c){let u=0,d=0,f=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,E=0,b=0,y=0,A=0,T=0,w=0;c.sort(j0);for(let v=0,S=c.length;v<S;v++){const C=c[v],I=C.color,F=C.intensity,z=C.distance,X=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=I.r*F,d+=I.g*F,f+=I.b*F;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(C.sh.coefficients[Y],F);w++}else if(C.isDirectionalLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const N=C.shadow,B=t.get(C);B.shadowIntensity=N.intensity,B.shadowBias=N.bias,B.shadowNormalBias=N.normalBias,B.shadowRadius=N.radius,B.shadowMapSize=N.mapSize,i.directionalShadow[p]=B,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=C.shadow.matrix,E++}i.directional[p]=Y,p++}else if(C.isSpotLight){const Y=e.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(I).multiplyScalar(F),Y.distance=z,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,i.spot[_]=Y;const N=C.shadow;if(C.map&&(i.spotLightMap[A]=C.map,A++,N.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[_]=N.matrix,C.castShadow){const B=t.get(C);B.shadowIntensity=N.intensity,B.shadowBias=N.bias,B.shadowNormalBias=N.normalBias,B.shadowRadius=N.radius,B.shadowMapSize=N.mapSize,i.spotShadow[_]=B,i.spotShadowMap[_]=X,y++}_++}else if(C.isRectAreaLight){const Y=e.get(C);Y.color.copy(I).multiplyScalar(F),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=Y,m++}else if(C.isPointLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){const N=C.shadow,B=t.get(C);B.shadowIntensity=N.intensity,B.shadowBias=N.bias,B.shadowNormalBias=N.normalBias,B.shadowRadius=N.radius,B.shadowMapSize=N.mapSize,B.shadowCameraNear=N.camera.near,B.shadowCameraFar=N.camera.far,i.pointShadow[g]=B,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=C.shadow.matrix,b++}i.point[g]=Y,g++}else if(C.isHemisphereLight){const Y=e.get(C);Y.skyColor.copy(C.color).multiplyScalar(F),Y.groundColor.copy(C.groundColor).multiplyScalar(F),i.hemi[h]=Y,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==h||P.numDirectionalShadows!==E||P.numPointShadows!==b||P.numSpotShadows!==y||P.numSpotMaps!==A||P.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=h,P.numDirectionalShadows=E,P.numPointShadows=b,P.numSpotShadows=y,P.numSpotMaps=A,P.numLightProbes=w,i.version=Y0++)}function l(c,u){let d=0,f=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let h=0,E=c.length;h<E;h++){const b=c[h];if(b.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(b.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Fc(n){const e=new K0(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Z0(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Fc(n),e.set(r,[o])):s>=a.length?(o=new Fc(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const J0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q0=`uniform sampler2D shadow_pass;
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
}`;function e_(n,e,t){let i=new Ru;const r=new nt,s=new nt,a=new mt,o=new Ef({depthPacking:Fh}),l=new Tf,c={},u=t.maxTextureSize,d={[Zn]:Ht,[Ht]:Zn,[Ln]:Ln},f=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:J0,fragmentShader:Q0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Bn;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new vt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=au;let h=this.type;this.render=function(T,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const v=n.getRenderTarget(),S=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),I=n.state;I.setBlending(jn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=h!==Pn&&this.type===Pn,z=h===Pn&&this.type!==Pn;for(let X=0,Y=T.length;X<Y;X++){const N=T[X],B=N.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const W=B.getFrameExtents();if(r.multiply(W),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,B.mapSize.y=s.y)),B.map===null||F===!0||z===!0){const V=this.type!==Pn?{minFilter:dn,magFilter:dn}:{};B.map!==null&&B.map.dispose(),B.map=new gi(r.x,r.y,V),B.map.texture.name=N.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const D=B.getViewportCount();for(let V=0;V<D;V++){const q=B.getViewport(V);a.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),I.viewport(a),B.updateMatrices(N,V),i=B.getFrustum(),y(w,P,B.camera,N,this.type)}B.isPointLightShadow!==!0&&this.type===Pn&&E(B,P),B.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(v,S,C)};function E(T,w){const P=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new gi(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(w,null,P,f,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(w,null,P,p,_,null)}function b(T,w,P,v){let S=null;const C=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)S=C;else if(S=P.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const I=S.uuid,F=w.uuid;let z=c[I];z===void 0&&(z={},c[I]=z);let X=z[F];X===void 0&&(X=S.clone(),z[F]=X,w.addEventListener("dispose",A)),S=X}if(S.visible=w.visible,S.wireframe=w.wireframe,v===Pn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:d[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=n.properties.get(S);I.light=P}return S}function y(T,w,P,v,S){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Pn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const F=e.update(T),z=T.material;if(Array.isArray(z)){const X=F.groups;for(let Y=0,N=X.length;Y<N;Y++){const B=X[Y],W=z[B.materialIndex];if(W&&W.visible){const D=b(T,W,v,S);T.onBeforeShadow(n,T,w,P,F,D,B),n.renderBufferDirect(P,null,F,D,T,B),T.onAfterShadow(n,T,w,P,F,D,B)}}}else if(z.visible){const X=b(T,z,v,S);T.onBeforeShadow(n,T,w,P,F,X,null),n.renderBufferDirect(P,null,F,X,T,null),T.onAfterShadow(n,T,w,P,F,X,null)}}const I=T.children;for(let F=0,z=I.length;F<z;F++)y(I[F],w,P,v,S)}function A(T){T.target.removeEventListener("dispose",A);for(const P in c){const v=c[P],S=T.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}const t_={[ja]:Ka,[Za]:eo,[Ja]:to,[Yi]:Qa,[Ka]:ja,[eo]:Za,[to]:Ja,[Qa]:Yi};function n_(n,e){function t(){let U=!1;const le=new mt;let ge=null;const fe=new mt(0,0,0,0);return{setMask:function(ae){ge!==ae&&!U&&(n.colorMask(ae,ae,ae,ae),ge=ae)},setLocked:function(ae){U=ae},setClear:function(ae,ce,Ie,$e,lt){lt===!0&&(ae*=$e,ce*=$e,Ie*=$e),le.set(ae,ce,Ie,$e),fe.equals(le)===!1&&(n.clearColor(ae,ce,Ie,$e),fe.copy(le))},reset:function(){U=!1,ge=null,fe.set(-1,0,0,0)}}}function i(){let U=!1,le=!1,ge=null,fe=null,ae=null;return{setReversed:function(ce){if(le!==ce){const Ie=e.get("EXT_clip_control");ce?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),le=ce;const $e=ae;ae=null,this.setClear($e)}},getReversed:function(){return le},setTest:function(ce){ce?ie(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(ce){ge!==ce&&!U&&(n.depthMask(ce),ge=ce)},setFunc:function(ce){if(le&&(ce=t_[ce]),fe!==ce){switch(ce){case ja:n.depthFunc(n.NEVER);break;case Ka:n.depthFunc(n.ALWAYS);break;case Za:n.depthFunc(n.LESS);break;case Yi:n.depthFunc(n.LEQUAL);break;case Ja:n.depthFunc(n.EQUAL);break;case Qa:n.depthFunc(n.GEQUAL);break;case eo:n.depthFunc(n.GREATER);break;case to:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=ce}},setLocked:function(ce){U=ce},setClear:function(ce){ae!==ce&&(le&&(ce=1-ce),n.clearDepth(ce),ae=ce)},reset:function(){U=!1,ge=null,fe=null,ae=null,le=!1}}}function r(){let U=!1,le=null,ge=null,fe=null,ae=null,ce=null,Ie=null,$e=null,lt=null;return{setTest:function(tt){U||(tt?ie(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(tt){le!==tt&&!U&&(n.stencilMask(tt),le=tt)},setFunc:function(tt,Sn,gn){(ge!==tt||fe!==Sn||ae!==gn)&&(n.stencilFunc(tt,Sn,gn),ge=tt,fe=Sn,ae=gn)},setOp:function(tt,Sn,gn){(ce!==tt||Ie!==Sn||$e!==gn)&&(n.stencilOp(tt,Sn,gn),ce=tt,Ie=Sn,$e=gn)},setLocked:function(tt){U=tt},setClear:function(tt){lt!==tt&&(n.clearStencil(tt),lt=tt)},reset:function(){U=!1,le=null,ge=null,fe=null,ae=null,ce=null,Ie=null,$e=null,lt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,h=null,E=null,b=null,y=null,A=null,T=null,w=new it(0,0,0),P=0,v=!1,S=null,C=null,I=null,F=null,z=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,N=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(B)[1]),Y=N>=1):B.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),Y=N>=2);let W=null,D={};const V=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),ue=new mt().fromArray(V),Se=new mt().fromArray(q);function Ne(U,le,ge,fe){const ae=new Uint8Array(4),ce=n.createTexture();n.bindTexture(U,ce),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ie=0;Ie<ge;Ie++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(le+Ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return ce}const ee={};ee[n.TEXTURE_2D]=Ne(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=Ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=Ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=Ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(Yi),Fe(!1),re(zl),ie(n.CULL_FACE),et(jn);function ie(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function xe(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Re(U,le){return d[U]!==le?(n.bindFramebuffer(U,le),d[U]=le,U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=le),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=le),!0):!1}function Ee(U,le){let ge=p,fe=!1;if(U){ge=f.get(le),ge===void 0&&(ge=[],f.set(le,ge));const ae=U.textures;if(ge.length!==ae.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Ie=ae.length;ce<Ie;ce++)ge[ce]=n.COLOR_ATTACHMENT0+ce;ge.length=ae.length,fe=!0}}else ge[0]!==n.BACK&&(ge[0]=n.BACK,fe=!0);fe&&n.drawBuffers(ge)}function Ge(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const dt={[ci]:n.FUNC_ADD,[lh]:n.FUNC_SUBTRACT,[ch]:n.FUNC_REVERSE_SUBTRACT};dt[uh]=n.MIN,dt[dh]=n.MAX;const L={[hh]:n.ZERO,[fh]:n.ONE,[ph]:n.SRC_COLOR,[Xa]:n.SRC_ALPHA,[yh]:n.SRC_ALPHA_SATURATE,[vh]:n.DST_COLOR,[gh]:n.DST_ALPHA,[mh]:n.ONE_MINUS_SRC_COLOR,[Ya]:n.ONE_MINUS_SRC_ALPHA,[xh]:n.ONE_MINUS_DST_COLOR,[_h]:n.ONE_MINUS_DST_ALPHA,[bh]:n.CONSTANT_COLOR,[Sh]:n.ONE_MINUS_CONSTANT_COLOR,[Mh]:n.CONSTANT_ALPHA,[Eh]:n.ONE_MINUS_CONSTANT_ALPHA};function et(U,le,ge,fe,ae,ce,Ie,$e,lt,tt){if(U===jn){_===!0&&(xe(n.BLEND),_=!1);return}if(_===!1&&(ie(n.BLEND),_=!0),U!==oh){if(U!==m||tt!==v){if((h!==ci||y!==ci)&&(n.blendEquation(n.FUNC_ADD),h=ci,y=ci),tt)switch(U){case Gi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hl:n.blendFunc(n.ONE,n.ONE);break;case Vl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Gi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Vl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,b=null,A=null,T=null,w.set(0,0,0),P=0,m=U,v=tt}return}ae=ae||le,ce=ce||ge,Ie=Ie||fe,(le!==h||ae!==y)&&(n.blendEquationSeparate(dt[le],dt[ae]),h=le,y=ae),(ge!==E||fe!==b||ce!==A||Ie!==T)&&(n.blendFuncSeparate(L[ge],L[fe],L[ce],L[Ie]),E=ge,b=fe,A=ce,T=Ie),($e.equals(w)===!1||lt!==P)&&(n.blendColor($e.r,$e.g,$e.b,lt),w.copy($e),P=lt),m=U,v=!1}function Be(U,le){U.side===Ln?xe(n.CULL_FACE):ie(n.CULL_FACE);let ge=U.side===Ht;le&&(ge=!ge),Fe(ge),U.blending===Gi&&U.transparent===!1?et(jn):et(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const fe=U.stencilWrite;o.setTest(fe),fe&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),oe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(U){S!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),S=U)}function re(U){U!==rh?(ie(n.CULL_FACE),U!==C&&(U===zl?n.cullFace(n.BACK):U===sh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),C=U}function ye(U){U!==I&&(Y&&n.lineWidth(U),I=U)}function oe(U,le,ge){U?(ie(n.POLYGON_OFFSET_FILL),(F!==le||z!==ge)&&(n.polygonOffset(le,ge),F=le,z=ge)):xe(n.POLYGON_OFFSET_FILL)}function Me(U){U?ie(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function Pe(U){U===void 0&&(U=n.TEXTURE0+X-1),W!==U&&(n.activeTexture(U),W=U)}function qe(U,le,ge){ge===void 0&&(W===null?ge=n.TEXTURE0+X-1:ge=W);let fe=D[ge];fe===void 0&&(fe={type:void 0,texture:void 0},D[ge]=fe),(fe.type!==U||fe.texture!==le)&&(W!==ge&&(n.activeTexture(ge),W=ge),n.bindTexture(U,le||ee[U]),fe.type=U,fe.texture=le)}function R(){const U=D[W];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(U){ue.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ue.copy(U))}function be(U){Se.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Se.copy(U))}function me(U,le){let ge=c.get(le);ge===void 0&&(ge=new WeakMap,c.set(le,ge));let fe=ge.get(U);fe===void 0&&(fe=n.getUniformBlockIndex(le,U.name),ge.set(U,fe))}function pe(U,le){const fe=c.get(le).get(U);l.get(le)!==fe&&(n.uniformBlockBinding(le,fe,U.__bindingPointIndex),l.set(le,fe))}function Ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},W=null,D={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,h=null,E=null,b=null,y=null,A=null,T=null,w=new it(0,0,0),P=0,v=!1,S=null,C=null,I=null,F=null,z=null,ue.set(0,0,n.canvas.width,n.canvas.height),Se.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:xe,bindFramebuffer:Re,drawBuffers:Ee,useProgram:Ge,setBlending:et,setMaterial:Be,setFlipSided:Fe,setCullFace:re,setLineWidth:ye,setPolygonOffset:oe,setScissorTest:Me,activeTexture:Pe,bindTexture:qe,unbindTexture:R,compressedTexImage2D:x,compressedTexImage3D:$,texImage2D:he,texImage3D:j,updateUBOMapping:me,uniformBlockBinding:pe,texStorage2D:ve,texStorage3D:O,texSubImage2D:te,texSubImage3D:de,compressedTexSubImage2D:ne,compressedTexSubImage3D:Le,scissor:se,viewport:be,reset:Ue}}function i_(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,x){return p?new OffscreenCanvas(R,x):br("canvas")}function _(R,x,$){let te=1;const de=qe(R);if((de.width>$||de.height>$)&&(te=$/Math.max(de.width,de.height)),te<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ne=Math.floor(te*de.width),Le=Math.floor(te*de.height);d===void 0&&(d=g(ne,Le));const ve=x?g(ne,Le):d;return ve.width=ne,ve.height=Le,ve.getContext("2d").drawImage(R,0,0,ne,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ne+"x"+Le+")."),ve}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),R;return R}function m(R){return R.generateMipmaps}function h(R){n.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(R,x,$,te,de=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ne=x;if(x===n.RED&&($===n.FLOAT&&(ne=n.R32F),$===n.HALF_FLOAT&&(ne=n.R16F),$===n.UNSIGNED_BYTE&&(ne=n.R8)),x===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(ne=n.R8UI),$===n.UNSIGNED_SHORT&&(ne=n.R16UI),$===n.UNSIGNED_INT&&(ne=n.R32UI),$===n.BYTE&&(ne=n.R8I),$===n.SHORT&&(ne=n.R16I),$===n.INT&&(ne=n.R32I)),x===n.RG&&($===n.FLOAT&&(ne=n.RG32F),$===n.HALF_FLOAT&&(ne=n.RG16F),$===n.UNSIGNED_BYTE&&(ne=n.RG8)),x===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(ne=n.RG8UI),$===n.UNSIGNED_SHORT&&(ne=n.RG16UI),$===n.UNSIGNED_INT&&(ne=n.RG32UI),$===n.BYTE&&(ne=n.RG8I),$===n.SHORT&&(ne=n.RG16I),$===n.INT&&(ne=n.RG32I)),x===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),$===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),$===n.UNSIGNED_INT&&(ne=n.RGB32UI),$===n.BYTE&&(ne=n.RGB8I),$===n.SHORT&&(ne=n.RGB16I),$===n.INT&&(ne=n.RGB32I)),x===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),$===n.UNSIGNED_INT&&(ne=n.RGBA32UI),$===n.BYTE&&(ne=n.RGBA8I),$===n.SHORT&&(ne=n.RGBA16I),$===n.INT&&(ne=n.RGBA32I)),x===n.RGB&&($===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),$===n.UNSIGNED_INT_10F_11F_11F_REV&&(ne=n.R11F_G11F_B10F)),x===n.RGBA){const Le=de?xs:Je.getTransfer(te);$===n.FLOAT&&(ne=n.RGBA32F),$===n.HALF_FLOAT&&(ne=n.RGBA16F),$===n.UNSIGNED_BYTE&&(ne=Le===at?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function y(R,x){let $;return R?x===null||x===mi||x===vr?$=n.DEPTH24_STENCIL8:x===In?$=n.DEPTH32F_STENCIL8:x===_r&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===mi||x===vr?$=n.DEPTH_COMPONENT24:x===In?$=n.DEPTH_COMPONENT32F:x===_r&&($=n.DEPTH_COMPONENT16),$}function A(R,x){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==dn&&R.minFilter!==tn?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function T(R){const x=R.target;x.removeEventListener("dispose",T),P(x),x.isVideoTexture&&u.delete(x)}function w(R){const x=R.target;x.removeEventListener("dispose",w),S(x)}function P(R){const x=i.get(R);if(x.__webglInit===void 0)return;const $=R.source,te=f.get($);if(te){const de=te[x.__cacheKey];de.usedTimes--,de.usedTimes===0&&v(R),Object.keys(te).length===0&&f.delete($)}i.remove(R)}function v(R){const x=i.get(R);n.deleteTexture(x.__webglTexture);const $=R.source,te=f.get($);delete te[x.__cacheKey],a.memory.textures--}function S(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(x.__webglFramebuffer[te]))for(let de=0;de<x.__webglFramebuffer[te].length;de++)n.deleteFramebuffer(x.__webglFramebuffer[te][de]);else n.deleteFramebuffer(x.__webglFramebuffer[te]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[te])}else{if(Array.isArray(x.__webglFramebuffer))for(let te=0;te<x.__webglFramebuffer.length;te++)n.deleteFramebuffer(x.__webglFramebuffer[te]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let te=0;te<x.__webglColorRenderbuffer.length;te++)x.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[te]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const $=R.textures;for(let te=0,de=$.length;te<de;te++){const ne=i.get($[te]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),a.memory.textures--),i.remove($[te])}i.remove(R)}let C=0;function I(){C=0}function F(){const R=C;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),C+=1,R}function z(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function X(R,x){const $=i.get(R);if(R.isVideoTexture&&Me(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&$.__version!==R.version){const te=R.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee($,R,x);return}}else R.isExternalTexture&&($.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+x)}function Y(R,x){const $=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){ee($,R,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+x)}function N(R,x){const $=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){ee($,R,x);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+x)}function B(R,x){const $=i.get(R);if(R.version>0&&$.__version!==R.version){ie($,R,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+x)}const W={[ro]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[so]:n.MIRRORED_REPEAT},D={[dn]:n.NEAREST,[Uh]:n.NEAREST_MIPMAP_NEAREST,[Ur]:n.NEAREST_MIPMAP_LINEAR,[tn]:n.LINEAR,[ra]:n.LINEAR_MIPMAP_NEAREST,[hi]:n.LINEAR_MIPMAP_LINEAR},V={[kh]:n.NEVER,[Wh]:n.ALWAYS,[zh]:n.LESS,[_u]:n.LEQUAL,[Hh]:n.EQUAL,[$h]:n.GEQUAL,[Vh]:n.GREATER,[Gh]:n.NOTEQUAL};function q(R,x){if(x.type===In&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===tn||x.magFilter===ra||x.magFilter===Ur||x.magFilter===hi||x.minFilter===tn||x.minFilter===ra||x.minFilter===Ur||x.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,W[x.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,W[x.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,W[x.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,D[x.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,D[x.minFilter]),x.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,V[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===dn||x.minFilter!==Ur&&x.minFilter!==hi||x.type===In&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ue(R,x){let $=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",T));const te=x.source;let de=f.get(te);de===void 0&&(de={},f.set(te,de));const ne=z(x);if(ne!==R.__cacheKey){de[ne]===void 0&&(de[ne]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,$=!0),de[ne].usedTimes++;const Le=de[R.__cacheKey];Le!==void 0&&(de[R.__cacheKey].usedTimes--,Le.usedTimes===0&&v(x)),R.__cacheKey=ne,R.__webglTexture=de[ne].texture}return $}function Se(R,x,$){return Math.floor(Math.floor(R/$)/x)}function Ne(R,x,$,te){const ne=R.updateRanges;if(ne.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,$,te,x.data);else{ne.sort((j,se)=>j.start-se.start);let Le=0;for(let j=1;j<ne.length;j++){const se=ne[Le],be=ne[j],me=se.start+se.count,pe=Se(be.start,x.width,4),Ue=Se(se.start,x.width,4);be.start<=me+1&&pe===Ue&&Se(be.start+be.count-1,x.width,4)===pe?se.count=Math.max(se.count,be.start+be.count-se.start):(++Le,ne[Le]=be)}ne.length=Le+1;const ve=n.getParameter(n.UNPACK_ROW_LENGTH),O=n.getParameter(n.UNPACK_SKIP_PIXELS),he=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let j=0,se=ne.length;j<se;j++){const be=ne[j],me=Math.floor(be.start/4),pe=Math.ceil(be.count/4),Ue=me%x.width,U=Math.floor(me/x.width),le=pe,ge=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Ue,U,le,ge,$,te,x.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ve),n.pixelStorei(n.UNPACK_SKIP_PIXELS,O),n.pixelStorei(n.UNPACK_SKIP_ROWS,he)}}function ee(R,x,$){let te=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(te=n.TEXTURE_3D);const de=ue(R,x),ne=x.source;t.bindTexture(te,R.__webglTexture,n.TEXTURE0+$);const Le=i.get(ne);if(ne.version!==Le.__version||de===!0){t.activeTexture(n.TEXTURE0+$);const ve=Je.getPrimaries(Je.workingColorSpace),O=x.colorSpace===qn?null:Je.getPrimaries(x.colorSpace),he=x.colorSpace===qn||ve===O?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let j=_(x.image,!1,r.maxTextureSize);j=Pe(x,j);const se=s.convert(x.format,x.colorSpace),be=s.convert(x.type);let me=b(x.internalFormat,se,be,x.colorSpace,x.isVideoTexture);q(te,x);let pe;const Ue=x.mipmaps,U=x.isVideoTexture!==!0,le=Le.__version===void 0||de===!0,ge=ne.dataReady,fe=A(x,j);if(x.isDepthTexture)me=y(x.format===yr,x.type),le&&(U?t.texStorage2D(n.TEXTURE_2D,1,me,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,me,j.width,j.height,0,se,be,null));else if(x.isDataTexture)if(Ue.length>0){U&&le&&t.texStorage2D(n.TEXTURE_2D,fe,me,Ue[0].width,Ue[0].height);for(let ae=0,ce=Ue.length;ae<ce;ae++)pe=Ue[ae],U?ge&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,pe.width,pe.height,se,be,pe.data):t.texImage2D(n.TEXTURE_2D,ae,me,pe.width,pe.height,0,se,be,pe.data);x.generateMipmaps=!1}else U?(le&&t.texStorage2D(n.TEXTURE_2D,fe,me,j.width,j.height),ge&&Ne(x,j,se,be)):t.texImage2D(n.TEXTURE_2D,0,me,j.width,j.height,0,se,be,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){U&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,me,Ue[0].width,Ue[0].height,j.depth);for(let ae=0,ce=Ue.length;ae<ce;ae++)if(pe=Ue[ae],x.format!==un)if(se!==null)if(U){if(ge)if(x.layerUpdates.size>0){const Ie=hc(pe.width,pe.height,x.format,x.type);for(const $e of x.layerUpdates){const lt=pe.data.subarray($e*Ie/pe.data.BYTES_PER_ELEMENT,($e+1)*Ie/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,$e,pe.width,pe.height,1,se,lt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,pe.width,pe.height,j.depth,se,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,me,pe.width,pe.height,j.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ge&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,pe.width,pe.height,j.depth,se,be,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,me,pe.width,pe.height,j.depth,0,se,be,pe.data)}else{U&&le&&t.texStorage2D(n.TEXTURE_2D,fe,me,Ue[0].width,Ue[0].height);for(let ae=0,ce=Ue.length;ae<ce;ae++)pe=Ue[ae],x.format!==un?se!==null?U?ge&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,pe.width,pe.height,se,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,me,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ge&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,pe.width,pe.height,se,be,pe.data):t.texImage2D(n.TEXTURE_2D,ae,me,pe.width,pe.height,0,se,be,pe.data)}else if(x.isDataArrayTexture)if(U){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,me,j.width,j.height,j.depth),ge)if(x.layerUpdates.size>0){const ae=hc(j.width,j.height,x.format,x.type);for(const ce of x.layerUpdates){const Ie=j.data.subarray(ce*ae/j.data.BYTES_PER_ELEMENT,(ce+1)*ae/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,j.width,j.height,1,se,be,Ie)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,se,be,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,me,j.width,j.height,j.depth,0,se,be,j.data);else if(x.isData3DTexture)U?(le&&t.texStorage3D(n.TEXTURE_3D,fe,me,j.width,j.height,j.depth),ge&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,se,be,j.data)):t.texImage3D(n.TEXTURE_3D,0,me,j.width,j.height,j.depth,0,se,be,j.data);else if(x.isFramebufferTexture){if(le)if(U)t.texStorage2D(n.TEXTURE_2D,fe,me,j.width,j.height);else{let ae=j.width,ce=j.height;for(let Ie=0;Ie<fe;Ie++)t.texImage2D(n.TEXTURE_2D,Ie,me,ae,ce,0,se,be,null),ae>>=1,ce>>=1}}else if(Ue.length>0){if(U&&le){const ae=qe(Ue[0]);t.texStorage2D(n.TEXTURE_2D,fe,me,ae.width,ae.height)}for(let ae=0,ce=Ue.length;ae<ce;ae++)pe=Ue[ae],U?ge&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,se,be,pe):t.texImage2D(n.TEXTURE_2D,ae,me,se,be,pe);x.generateMipmaps=!1}else if(U){if(le){const ae=qe(j);t.texStorage2D(n.TEXTURE_2D,fe,me,ae.width,ae.height)}ge&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se,be,j)}else t.texImage2D(n.TEXTURE_2D,0,me,se,be,j);m(x)&&h(te),Le.__version=ne.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ie(R,x,$){if(x.image.length!==6)return;const te=ue(R,x),de=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+$);const ne=i.get(de);if(de.version!==ne.__version||te===!0){t.activeTexture(n.TEXTURE0+$);const Le=Je.getPrimaries(Je.workingColorSpace),ve=x.colorSpace===qn?null:Je.getPrimaries(x.colorSpace),O=x.colorSpace===qn||Le===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,O);const he=x.isCompressedTexture||x.image[0].isCompressedTexture,j=x.image[0]&&x.image[0].isDataTexture,se=[];for(let ce=0;ce<6;ce++)!he&&!j?se[ce]=_(x.image[ce],!0,r.maxCubemapSize):se[ce]=j?x.image[ce].image:x.image[ce],se[ce]=Pe(x,se[ce]);const be=se[0],me=s.convert(x.format,x.colorSpace),pe=s.convert(x.type),Ue=b(x.internalFormat,me,pe,x.colorSpace),U=x.isVideoTexture!==!0,le=ne.__version===void 0||te===!0,ge=de.dataReady;let fe=A(x,be);q(n.TEXTURE_CUBE_MAP,x);let ae;if(he){U&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,Ue,be.width,be.height);for(let ce=0;ce<6;ce++){ae=se[ce].mipmaps;for(let Ie=0;Ie<ae.length;Ie++){const $e=ae[Ie];x.format!==un?me!==null?U?ge&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,0,0,$e.width,$e.height,me,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,Ue,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,0,0,$e.width,$e.height,me,pe,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,Ue,$e.width,$e.height,0,me,pe,$e.data)}}}else{if(ae=x.mipmaps,U&&le){ae.length>0&&fe++;const ce=qe(se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,Ue,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(j){U?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,se[ce].width,se[ce].height,me,pe,se[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ue,se[ce].width,se[ce].height,0,me,pe,se[ce].data);for(let Ie=0;Ie<ae.length;Ie++){const lt=ae[Ie].image[ce].image;U?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,0,0,lt.width,lt.height,me,pe,lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,Ue,lt.width,lt.height,0,me,pe,lt.data)}}else{U?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,me,pe,se[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ue,me,pe,se[ce]);for(let Ie=0;Ie<ae.length;Ie++){const $e=ae[Ie];U?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,0,0,me,pe,$e.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,Ue,me,pe,$e.image[ce])}}}m(x)&&h(n.TEXTURE_CUBE_MAP),ne.__version=de.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function xe(R,x,$,te,de,ne){const Le=s.convert($.format,$.colorSpace),ve=s.convert($.type),O=b($.internalFormat,Le,ve,$.colorSpace),he=i.get(x),j=i.get($);if(j.__renderTarget=x,!he.__hasExternalTextures){const se=Math.max(1,x.width>>ne),be=Math.max(1,x.height>>ne);de===n.TEXTURE_3D||de===n.TEXTURE_2D_ARRAY?t.texImage3D(de,ne,O,se,be,x.depth,0,Le,ve,null):t.texImage2D(de,ne,O,se,be,0,Le,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),oe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,de,j.__webglTexture,0,ye(x)):(de===n.TEXTURE_2D||de>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,de,j.__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(R,x,$){if(n.bindRenderbuffer(n.RENDERBUFFER,R),x.depthBuffer){const te=x.depthTexture,de=te&&te.isDepthTexture?te.type:null,ne=y(x.stencilBuffer,de),Le=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=ye(x);oe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,ne,x.width,x.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,ne,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ne,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Le,n.RENDERBUFFER,R)}else{const te=x.textures;for(let de=0;de<te.length;de++){const ne=te[de],Le=s.convert(ne.format,ne.colorSpace),ve=s.convert(ne.type),O=b(ne.internalFormat,Le,ve,ne.colorSpace),he=ye(x);$&&oe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,O,x.width,x.height):oe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,O,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,O,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ee(R,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(x.depthTexture);te.__renderTarget=x,(!te.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);const de=te.__webglTexture,ne=ye(x);if(x.depthTexture.format===xr)oe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,de,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,de,0);else if(x.depthTexture.format===yr)oe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,de,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function Ge(R){const x=i.get(R),$=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const te=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),te){const de=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,te.removeEventListener("dispose",de)};te.addEventListener("dispose",de),x.__depthDisposeCallback=de}x.__boundDepthTexture=te}if(R.depthTexture&&!x.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const te=R.texture.mipmaps;te&&te.length>0?Ee(x.__webglFramebuffer[0],R):Ee(x.__webglFramebuffer,R)}else if($){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]===void 0)x.__webglDepthbuffer[te]=n.createRenderbuffer(),Re(x.__webglDepthbuffer[te],R,!1);else{const de=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=x.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,ne)}}else{const te=R.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Re(x.__webglDepthbuffer,R,!1);else{const de=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,ne)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(R,x,$){const te=i.get(R);x!==void 0&&xe(te.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&Ge(R)}function L(R){const x=R.texture,$=i.get(R),te=i.get(x);R.addEventListener("dispose",w);const de=R.textures,ne=R.isWebGLCubeRenderTarget===!0,Le=de.length>1;if(Le||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=x.version,a.memory.textures++),ne){$.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0){$.__webglFramebuffer[ve]=[];for(let O=0;O<x.mipmaps.length;O++)$.__webglFramebuffer[ve][O]=n.createFramebuffer()}else $.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){$.__webglFramebuffer=[];for(let ve=0;ve<x.mipmaps.length;ve++)$.__webglFramebuffer[ve]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(Le)for(let ve=0,O=de.length;ve<O;ve++){const he=i.get(de[ve]);he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&oe(R)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ve=0;ve<de.length;ve++){const O=de[ve];$.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[ve]);const he=s.convert(O.format,O.colorSpace),j=s.convert(O.type),se=b(O.internalFormat,he,j,O.colorSpace,R.isXRRenderTarget===!0),be=ye(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,se,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,$.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),Re($.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),q(n.TEXTURE_CUBE_MAP,x);for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0)for(let O=0;O<x.mipmaps.length;O++)xe($.__webglFramebuffer[ve][O],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,O);else xe($.__webglFramebuffer[ve],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(x)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let ve=0,O=de.length;ve<O;ve++){const he=de[ve],j=i.get(he);let se=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,j.__webglTexture),q(se,he),xe($.__webglFramebuffer,R,he,n.COLOR_ATTACHMENT0+ve,se,0),m(he)&&h(se)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ve=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,te.__webglTexture),q(ve,x),x.mipmaps&&x.mipmaps.length>0)for(let O=0;O<x.mipmaps.length;O++)xe($.__webglFramebuffer[O],R,x,n.COLOR_ATTACHMENT0,ve,O);else xe($.__webglFramebuffer,R,x,n.COLOR_ATTACHMENT0,ve,0);m(x)&&h(ve),t.unbindTexture()}R.depthBuffer&&Ge(R)}function et(R){const x=R.textures;for(let $=0,te=x.length;$<te;$++){const de=x[$];if(m(de)){const ne=E(R),Le=i.get(de).__webglTexture;t.bindTexture(ne,Le),h(ne),t.unbindTexture()}}}const Be=[],Fe=[];function re(R){if(R.samples>0){if(oe(R)===!1){const x=R.textures,$=R.width,te=R.height;let de=n.COLOR_BUFFER_BIT;const ne=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Le=i.get(R),ve=x.length>1;if(ve)for(let he=0;he<x.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const O=R.texture.mipmaps;O&&O.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let he=0;he<x.length;he++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(de|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(de|=n.STENCIL_BUFFER_BIT)),ve){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Le.__webglColorRenderbuffer[he]);const j=i.get(x[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,j,0)}n.blitFramebuffer(0,0,$,te,0,0,$,te,de,n.NEAREST),l===!0&&(Be.length=0,Fe.length=0,Be.push(n.COLOR_ATTACHMENT0+he),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Be.push(ne),Fe.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Fe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Be))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let he=0;he<x.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,Le.__webglColorRenderbuffer[he]);const j=i.get(x[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,j,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const x=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ye(R){return Math.min(r.maxSamples,R.samples)}function oe(R){const x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Me(R){const x=a.render.frame;u.get(R)!==x&&(u.set(R,x),R.update())}function Pe(R,x){const $=R.colorSpace,te=R.format,de=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||$!==Zi&&$!==qn&&(Je.getTransfer($)===at?(te!==un||de!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),x}function qe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=N,this.setTextureCube=B,this.rebindTextures=dt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=oe}function r_(n,e){function t(i,r=qn){let s;const a=Je.getTransfer(r);if(i===Nn)return n.UNSIGNED_BYTE;if(i===Xo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===du)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===cu)return n.BYTE;if(i===uu)return n.SHORT;if(i===_r)return n.UNSIGNED_SHORT;if(i===qo)return n.INT;if(i===mi)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===Mr)return n.HALF_FLOAT;if(i===fu)return n.ALPHA;if(i===pu)return n.RGB;if(i===un)return n.RGBA;if(i===xr)return n.DEPTH_COMPONENT;if(i===yr)return n.DEPTH_STENCIL;if(i===mu)return n.RED;if(i===jo)return n.RED_INTEGER;if(i===gu)return n.RG;if(i===Ko)return n.RG_INTEGER;if(i===Zo)return n.RGBA_INTEGER;if(i===ls||i===cs||i===us||i===ds)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ls)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ls)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===us)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ds)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ao||i===oo||i===lo||i===co)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ao)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===oo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===co)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===uo||i===ho||i===fo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===uo||i===ho)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===fo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===po||i===mo||i===go||i===_o||i===vo||i===xo||i===yo||i===bo||i===So||i===Mo||i===Eo||i===To||i===wo||i===Ao)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===po)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===go)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_o)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===So)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Eo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===To)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ao)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Co||i===Ro||i===Po)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Co)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ro)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Po)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lo||i===Do||i===Io||i===Uo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Lo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Do)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Io)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const s_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a_=`
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

}`;class o_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Du(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Jn({vertexShader:s_,fragmentShader:a_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new Nt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class l_ extends er{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new o_,h={},E=t.getContextAttributes();let b=null,y=null;const A=[],T=[],w=new nt;let P=null;const v=new ln;v.viewport=new mt;const S=new ln;S.viewport=new mt;const C=[v,S],I=new Rf;let F=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ie=A[ee];return ie===void 0&&(ie=new Aa,A[ee]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(ee){let ie=A[ee];return ie===void 0&&(ie=new Aa,A[ee]=ie),ie.getGripSpace()},this.getHand=function(ee){let ie=A[ee];return ie===void 0&&(ie=new Aa,A[ee]=ie),ie.getHandSpace()};function X(ee){const ie=T.indexOf(ee.inputSource);if(ie===-1)return;const xe=A[ie];xe!==void 0&&(xe.update(ee.inputSource,ee.frame,c||a),xe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function Y(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",N);for(let ee=0;ee<A.length;ee++){const ie=T[ee];ie!==null&&(T[ee]=null,A[ee].disconnect(ie))}F=null,z=null,m.reset();for(const ee in h)delete h[ee];e.setRenderTarget(b),p=null,f=null,d=null,r=null,y=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",N),E.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Re=null,Ee=null;E.depth&&(Ee=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=E.stencil?yr:xr,Re=E.stencil?vr:mi);const Ge={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ge),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new gi(f.textureWidth,f.textureHeight,{format:un,type:Nn,depthTexture:new Lu(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const xe={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new gi(p.framebufferWidth,p.framebufferHeight,{format:un,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N(ee){for(let ie=0;ie<ee.removed.length;ie++){const xe=ee.removed[ie],Re=T.indexOf(xe);Re>=0&&(T[Re]=null,A[Re].disconnect(xe))}for(let ie=0;ie<ee.added.length;ie++){const xe=ee.added[ie];let Re=T.indexOf(xe);if(Re===-1){for(let Ge=0;Ge<A.length;Ge++)if(Ge>=T.length){T.push(xe),Re=Ge;break}else if(T[Ge]===null){T[Ge]=xe,Re=Ge;break}if(Re===-1)break}const Ee=A[Re];Ee&&Ee.connect(xe)}}const B=new K,W=new K;function D(ee,ie,xe){B.setFromMatrixPosition(ie.matrixWorld),W.setFromMatrixPosition(xe.matrixWorld);const Re=B.distanceTo(W),Ee=ie.projectionMatrix.elements,Ge=xe.projectionMatrix.elements,dt=Ee[14]/(Ee[10]-1),L=Ee[14]/(Ee[10]+1),et=(Ee[9]+1)/Ee[5],Be=(Ee[9]-1)/Ee[5],Fe=(Ee[8]-1)/Ee[0],re=(Ge[8]+1)/Ge[0],ye=dt*Fe,oe=dt*re,Me=Re/(-Fe+re),Pe=Me*-Fe;if(ie.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Pe),ee.translateZ(Me),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ee[10]===-1)ee.projectionMatrix.copy(ie.projectionMatrix),ee.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const qe=dt+Me,R=L+Me,x=ye-Pe,$=oe+(Re-Pe),te=et*L/R*qe,de=Be*L/R*qe;ee.projectionMatrix.makePerspective(x,$,te,de,qe,R),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function V(ee,ie){ie===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ie.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let ie=ee.near,xe=ee.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),I.near=S.near=v.near=ie,I.far=S.far=v.far=xe,(F!==I.near||z!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),F=I.near,z=I.far),I.layers.mask=ee.layers.mask|6,v.layers.mask=I.layers.mask&3,S.layers.mask=I.layers.mask&5;const Re=ee.parent,Ee=I.cameras;V(I,Re);for(let Ge=0;Ge<Ee.length;Ge++)V(Ee[Ge],Re);Ee.length===2?D(I,v,S):I.projectionMatrix.copy(v.projectionMatrix),q(ee,I,Re)};function q(ee,ie,xe){xe===null?ee.matrix.copy(ie.matrixWorld):(ee.matrix.copy(xe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ie.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ie.projectionMatrix),ee.projectionMatrixInverse.copy(ie.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=No*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ee){l=ee,f!==null&&(f.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(ee){return h[ee]};let ue=null;function Se(ee,ie){if(u=ie.getViewerPose(c||a),g=ie,u!==null){const xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Re=!1;xe.length!==I.cameras.length&&(I.cameras.length=0,Re=!0);for(let L=0;L<xe.length;L++){const et=xe[L];let Be=null;if(p!==null)Be=p.getViewport(et);else{const re=d.getViewSubImage(f,et);Be=re.viewport,L===0&&(e.setRenderTargetTextures(y,re.colorTexture,re.depthStencilTexture),e.setRenderTarget(y))}let Fe=C[L];Fe===void 0&&(Fe=new ln,Fe.layers.enable(L),Fe.viewport=new mt,C[L]=Fe),Fe.matrix.fromArray(et.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(et.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Be.x,Be.y,Be.width,Be.height),L===0&&(I.matrix.copy(Fe.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Re===!0&&I.cameras.push(Fe)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const L=d.getDepthInformation(xe[0]);L&&L.isValid&&L.texture&&m.init(L,r.renderState)}if(Ee&&Ee.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let L=0;L<xe.length;L++){const et=xe[L].camera;if(et){let Be=h[et];Be||(Be=new Du,h[et]=Be);const Fe=d.getCameraImage(et);Be.sourceTexture=Fe}}}}for(let xe=0;xe<A.length;xe++){const Re=T[xe],Ee=A[xe];Re!==null&&Ee!==void 0&&Ee.update(Re,ie,c||a)}ue&&ue(ee,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Ne=new Uu;Ne.setAnimationLoop(Se),this.setAnimationLoop=function(ee){ue=ee},this.dispose=function(){}}}const ai=new Fn,c_=new yt;function u_(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Tu(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,E,b,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,E,b):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ht&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ht&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const E=e.get(h),b=E.envMap,y=E.envMapRotation;b&&(m.envMap.value=b,ai.copy(y),ai.x*=-1,ai.y*=-1,ai.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),m.envMapRotation.value.setFromMatrix4(c_.makeRotationFromEuler(ai)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,E,b){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*E,m.scale.value=b*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,E){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ht&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const E=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function d_(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){const y=b.program;i.uniformBlockBinding(E,y)}function c(E,b){let y=r[E.id];y===void 0&&(g(E),y=u(E),r[E.id]=y,E.addEventListener("dispose",m));const A=b.program;i.updateUBOMapping(E,A);const T=e.render.frame;s[E.id]!==T&&(f(E),s[E.id]=T)}function u(E){const b=d();E.__bindingPointIndex=b;const y=n.createBuffer(),A=E.__size,T=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,y),y}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const b=r[E.id],y=E.uniforms,A=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,w=y.length;T<w;T++){const P=Array.isArray(y[T])?y[T]:[y[T]];for(let v=0,S=P.length;v<S;v++){const C=P[v];if(p(C,T,v,A)===!0){const I=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let X=0;X<F.length;X++){const Y=F[X],N=_(Y);typeof Y=="number"||typeof Y=="boolean"?(C.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,I+z,C.__data)):Y.isMatrix3?(C.__data[0]=Y.elements[0],C.__data[1]=Y.elements[1],C.__data[2]=Y.elements[2],C.__data[3]=0,C.__data[4]=Y.elements[3],C.__data[5]=Y.elements[4],C.__data[6]=Y.elements[5],C.__data[7]=0,C.__data[8]=Y.elements[6],C.__data[9]=Y.elements[7],C.__data[10]=Y.elements[8],C.__data[11]=0):(Y.toArray(C.__data,z),z+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,b,y,A){const T=E.value,w=b+"_"+y;if(A[w]===void 0)return typeof T=="number"||typeof T=="boolean"?A[w]=T:A[w]=T.clone(),!0;{const P=A[w];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return A[w]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(E){const b=E.uniforms;let y=0;const A=16;for(let w=0,P=b.length;w<P;w++){const v=Array.isArray(b[w])?b[w]:[b[w]];for(let S=0,C=v.length;S<C;S++){const I=v[S],F=Array.isArray(I.value)?I.value:[I.value];for(let z=0,X=F.length;z<X;z++){const Y=F[z],N=_(Y),B=y%A,W=B%N.boundary,D=B+W;y+=W,D!==0&&A-D<N.storage&&(y+=A-D),I.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=N.storage}}}const T=y%A;return T>0&&(y+=A-T),E.__size=y,E.__cache={},this}function _(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function h(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class ku{constructor(e={}){const{canvas:t=Xh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,h=null;const E=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let A=!1;this._outputColorSpace=xt;let T=0,w=0,P=null,v=-1,S=null;const C=new mt,I=new mt;let F=null;const z=new it(0);let X=0,Y=t.width,N=t.height,B=1,W=null,D=null;const V=new mt(0,0,Y,N),q=new mt(0,0,Y,N);let ue=!1;const Se=new Ru;let Ne=!1,ee=!1;const ie=new yt,xe=new K,Re=new mt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function dt(){return P===null?B:1}let L=i;function et(M,H){return t.getContext(M,H)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wo}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",ae,!1),L===null){const H="webgl2";if(L=et(H,M),L===null)throw et(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Be,Fe,re,ye,oe,Me,Pe,qe,R,x,$,te,de,ne,Le,ve,O,he,j,se,be,me,pe,Ue;function U(){Be=new Sg(L),Be.init(),me=new r_(L,Be),Fe=new mg(L,Be,e,me),re=new n_(L,Be),Fe.reversedDepthBuffer&&f&&re.buffers.depth.setReversed(!0),ye=new Tg(L),oe=new G0,Me=new i_(L,Be,re,oe,Fe,me,ye),Pe=new _g(y),qe=new bg(y),R=new Lf(L),pe=new fg(L,R),x=new Mg(L,R,ye,pe),$=new Ag(L,x,R,ye),j=new wg(L,Fe,Me),ve=new gg(oe),te=new V0(y,Pe,qe,Be,Fe,pe,ve),de=new u_(y,oe),ne=new W0,Le=new Z0(Be),he=new hg(y,Pe,qe,re,$,p,l),O=new e_(y,$,Fe),Ue=new d_(L,ye,Fe,re),se=new pg(L,Be,ye),be=new Eg(L,Be,ye),ye.programs=te.programs,y.capabilities=Fe,y.extensions=Be,y.properties=oe,y.renderLists=ne,y.shadowMap=O,y.state=re,y.info=ye}U();const le=new l_(y,L);this.xr=le,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=Be.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Be.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(M){M!==void 0&&(B=M,this.setSize(Y,N,!1))},this.getSize=function(M){return M.set(Y,N)},this.setSize=function(M,H,Z=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=M,N=H,t.width=Math.floor(M*B),t.height=Math.floor(H*B),Z===!0&&(t.style.width=M+"px",t.style.height=H+"px"),this.setViewport(0,0,M,H)},this.getDrawingBufferSize=function(M){return M.set(Y*B,N*B).floor()},this.setDrawingBufferSize=function(M,H,Z){Y=M,N=H,B=Z,t.width=Math.floor(M*Z),t.height=Math.floor(H*Z),this.setViewport(0,0,M,H)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(V)},this.setViewport=function(M,H,Z,J){M.isVector4?V.set(M.x,M.y,M.z,M.w):V.set(M,H,Z,J),re.viewport(C.copy(V).multiplyScalar(B).round())},this.getScissor=function(M){return M.copy(q)},this.setScissor=function(M,H,Z,J){M.isVector4?q.set(M.x,M.y,M.z,M.w):q.set(M,H,Z,J),re.scissor(I.copy(q).multiplyScalar(B).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(M){re.setScissorTest(ue=M)},this.setOpaqueSort=function(M){W=M},this.setTransparentSort=function(M){D=M},this.getClearColor=function(M){return M.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(M=!0,H=!0,Z=!0){let J=0;if(M){let G=!1;if(P!==null){const _e=P.texture.format;G=_e===Zo||_e===Ko||_e===jo}if(G){const _e=P.texture.type,Ae=_e===Nn||_e===mi||_e===_r||_e===vr||_e===Xo||_e===Yo,De=he.getClearColor(),Ce=he.getClearAlpha(),He=De.r,Ve=De.g,ke=De.b;Ae?(g[0]=He,g[1]=Ve,g[2]=ke,g[3]=Ce,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=He,_[1]=Ve,_[2]=ke,_[3]=Ce,L.clearBufferiv(L.COLOR,0,_))}else J|=L.COLOR_BUFFER_BIT}H&&(J|=L.DEPTH_BUFFER_BIT),Z&&(J|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),he.dispose(),ne.dispose(),Le.dispose(),oe.dispose(),Pe.dispose(),qe.dispose(),$.dispose(),pe.dispose(),Ue.dispose(),te.dispose(),le.dispose(),le.removeEventListener("sessionstart",gn),le.removeEventListener("sessionend",rl),Qn.stop()};function ge(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=ye.autoReset,H=O.enabled,Z=O.autoUpdate,J=O.needsUpdate,G=O.type;U(),ye.autoReset=M,O.enabled=H,O.autoUpdate=Z,O.needsUpdate=J,O.type=G}function ae(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ce(M){const H=M.target;H.removeEventListener("dispose",ce),Ie(H)}function Ie(M){$e(M),oe.remove(M)}function $e(M){const H=oe.get(M).programs;H!==void 0&&(H.forEach(function(Z){te.releaseProgram(Z)}),M.isShaderMaterial&&te.releaseShaderCache(M))}this.renderBufferDirect=function(M,H,Z,J,G,_e){H===null&&(H=Ee);const Ae=G.isMesh&&G.matrixWorld.determinant()<0,De=sd(M,H,Z,J,G);re.setMaterial(J,Ae);let Ce=Z.index,He=1;if(J.wireframe===!0){if(Ce=x.getWireframeAttribute(Z),Ce===void 0)return;He=2}const Ve=Z.drawRange,ke=Z.attributes.position;let je=Ve.start*He,st=(Ve.start+Ve.count)*He;_e!==null&&(je=Math.max(je,_e.start*He),st=Math.min(st,(_e.start+_e.count)*He)),Ce!==null?(je=Math.max(je,0),st=Math.min(st,Ce.count)):ke!=null&&(je=Math.max(je,0),st=Math.min(st,ke.count));const pt=st-je;if(pt<0||pt===1/0)return;pe.setup(G,J,De,Z,Ce);let ct,ot=se;if(Ce!==null&&(ct=R.get(Ce),ot=be,ot.setIndex(ct)),G.isMesh)J.wireframe===!0?(re.setLineWidth(J.wireframeLinewidth*dt()),ot.setMode(L.LINES)):ot.setMode(L.TRIANGLES);else if(G.isLine){let ze=J.linewidth;ze===void 0&&(ze=1),re.setLineWidth(ze*dt()),G.isLineSegments?ot.setMode(L.LINES):G.isLineLoop?ot.setMode(L.LINE_LOOP):ot.setMode(L.LINE_STRIP)}else G.isPoints?ot.setMode(L.POINTS):G.isSprite&&ot.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Sr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))ot.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const ze=G._multiDrawStarts,ht=G._multiDrawCounts,Ze=G._multiDrawCount,$t=Ce?R.get(Ce).bytesPerElement:1,yi=oe.get(J).currentProgram.getUniforms();for(let Wt=0;Wt<Ze;Wt++)yi.setValue(L,"_gl_DrawID",Wt),ot.render(ze[Wt]/$t,ht[Wt])}else if(G.isInstancedMesh)ot.renderInstances(je,pt,G.count);else if(Z.isInstancedBufferGeometry){const ze=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ht=Math.min(Z.instanceCount,ze);ot.renderInstances(je,pt,ht)}else ot.render(je,pt)};function lt(M,H,Z){M.transparent===!0&&M.side===Ln&&M.forceSinglePass===!1?(M.side=Ht,M.needsUpdate=!0,Lr(M,H,Z),M.side=Zn,M.needsUpdate=!0,Lr(M,H,Z),M.side=Ln):Lr(M,H,Z)}this.compile=function(M,H,Z=null){Z===null&&(Z=M),h=Le.get(Z),h.init(H),b.push(h),Z.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(h.pushLight(G),G.castShadow&&h.pushShadow(G))}),M!==Z&&M.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(h.pushLight(G),G.castShadow&&h.pushShadow(G))}),h.setupLights();const J=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const _e=G.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){const De=_e[Ae];lt(De,Z,G),J.add(De)}else lt(_e,Z,G),J.add(_e)}),h=b.pop(),J},this.compileAsync=function(M,H,Z=null){const J=this.compile(M,H,Z);return new Promise(G=>{function _e(){if(J.forEach(function(Ae){oe.get(Ae).currentProgram.isReady()&&J.delete(Ae)}),J.size===0){G(M);return}setTimeout(_e,10)}Be.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let tt=null;function Sn(M){tt&&tt(M)}function gn(){Qn.stop()}function rl(){Qn.start()}const Qn=new Uu;Qn.setAnimationLoop(Sn),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(M){tt=M,le.setAnimationLoop(M),M===null?Qn.stop():Qn.start()},le.addEventListener("sessionstart",gn),le.addEventListener("sessionend",rl),this.render=function(M,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(H),H=le.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,H,P),h=Le.get(M,b.length),h.init(H),b.push(h),ie.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Se.setFromProjectionMatrix(ie,yn,H.reversedDepth),ee=this.localClippingEnabled,Ne=ve.init(this.clippingPlanes,ee),m=ne.get(M,E.length),m.init(),E.push(m),le.enabled===!0&&le.isPresenting===!0){const _e=y.xr.getDepthSensingMesh();_e!==null&&Ds(_e,H,-1/0,y.sortObjects)}Ds(M,H,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(W,D),Ge=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Ge&&he.addToRenderList(m,M),this.info.render.frame++,Ne===!0&&ve.beginShadows();const Z=h.state.shadowsArray;O.render(Z,M,H),Ne===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,G=m.transmissive;if(h.setupLights(),H.isArrayCamera){const _e=H.cameras;if(G.length>0)for(let Ae=0,De=_e.length;Ae<De;Ae++){const Ce=_e[Ae];al(J,G,M,Ce)}Ge&&he.render(M);for(let Ae=0,De=_e.length;Ae<De;Ae++){const Ce=_e[Ae];sl(m,M,Ce,Ce.viewport)}}else G.length>0&&al(J,G,M,H),Ge&&he.render(M),sl(m,M,H);P!==null&&w===0&&(Me.updateMultisampleRenderTarget(P),Me.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(y,M,H),pe.resetDefaultState(),v=-1,S=null,b.pop(),b.length>0?(h=b[b.length-1],Ne===!0&&ve.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Ds(M,H,Z,J){if(M.visible===!1)return;if(M.layers.test(H.layers)){if(M.isGroup)Z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(H);else if(M.isLight)h.pushLight(M),M.castShadow&&h.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Se.intersectsSprite(M)){J&&Re.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ie);const Ae=$.update(M),De=M.material;De.visible&&m.push(M,Ae,De,Z,Re.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Se.intersectsObject(M))){const Ae=$.update(M),De=M.material;if(J&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Re.copy(M.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Re.copy(Ae.boundingSphere.center)),Re.applyMatrix4(M.matrixWorld).applyMatrix4(ie)),Array.isArray(De)){const Ce=Ae.groups;for(let He=0,Ve=Ce.length;He<Ve;He++){const ke=Ce[He],je=De[ke.materialIndex];je&&je.visible&&m.push(M,Ae,je,Z,Re.z,ke)}}else De.visible&&m.push(M,Ae,De,Z,Re.z,null)}}const _e=M.children;for(let Ae=0,De=_e.length;Ae<De;Ae++)Ds(_e[Ae],H,Z,J)}function sl(M,H,Z,J){const G=M.opaque,_e=M.transmissive,Ae=M.transparent;h.setupLightsView(Z),Ne===!0&&ve.setGlobalState(y.clippingPlanes,Z),J&&re.viewport(C.copy(J)),G.length>0&&Pr(G,H,Z),_e.length>0&&Pr(_e,H,Z),Ae.length>0&&Pr(Ae,H,Z),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function al(M,H,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[J.id]===void 0&&(h.state.transmissionRenderTarget[J.id]=new gi(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Mr:Nn,minFilter:hi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const _e=h.state.transmissionRenderTarget[J.id],Ae=J.viewport||C;_e.setSize(Ae.z*y.transmissionResolutionScale,Ae.w*y.transmissionResolutionScale);const De=y.getRenderTarget(),Ce=y.getActiveCubeFace(),He=y.getActiveMipmapLevel();y.setRenderTarget(_e),y.getClearColor(z),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),Ge&&he.render(Z);const Ve=y.toneMapping;y.toneMapping=Kn;const ke=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),h.setupLightsView(J),Ne===!0&&ve.setGlobalState(y.clippingPlanes,J),Pr(M,Z,J),Me.updateMultisampleRenderTarget(_e),Me.updateRenderTargetMipmap(_e),Be.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let st=0,pt=H.length;st<pt;st++){const ct=H[st],ot=ct.object,ze=ct.geometry,ht=ct.material,Ze=ct.group;if(ht.side===Ln&&ot.layers.test(J.layers)){const $t=ht.side;ht.side=Ht,ht.needsUpdate=!0,ol(ot,Z,J,ze,ht,Ze),ht.side=$t,ht.needsUpdate=!0,je=!0}}je===!0&&(Me.updateMultisampleRenderTarget(_e),Me.updateRenderTargetMipmap(_e))}y.setRenderTarget(De,Ce,He),y.setClearColor(z,X),ke!==void 0&&(J.viewport=ke),y.toneMapping=Ve}function Pr(M,H,Z){const J=H.isScene===!0?H.overrideMaterial:null;for(let G=0,_e=M.length;G<_e;G++){const Ae=M[G],De=Ae.object,Ce=Ae.geometry,He=Ae.group;let Ve=Ae.material;Ve.allowOverride===!0&&J!==null&&(Ve=J),De.layers.test(Z.layers)&&ol(De,H,Z,Ce,Ve,He)}}function ol(M,H,Z,J,G,_e){M.onBeforeRender(y,H,Z,J,G,_e),M.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(y,H,Z,J,M,_e),G.transparent===!0&&G.side===Ln&&G.forceSinglePass===!1?(G.side=Ht,G.needsUpdate=!0,y.renderBufferDirect(Z,H,J,G,M,_e),G.side=Zn,G.needsUpdate=!0,y.renderBufferDirect(Z,H,J,G,M,_e),G.side=Ln):y.renderBufferDirect(Z,H,J,G,M,_e),M.onAfterRender(y,H,Z,J,G,_e)}function Lr(M,H,Z){H.isScene!==!0&&(H=Ee);const J=oe.get(M),G=h.state.lights,_e=h.state.shadowsArray,Ae=G.state.version,De=te.getParameters(M,G.state,_e,H,Z),Ce=te.getProgramCacheKey(De);let He=J.programs;J.environment=M.isMeshStandardMaterial?H.environment:null,J.fog=H.fog,J.envMap=(M.isMeshStandardMaterial?qe:Pe).get(M.envMap||J.environment),J.envMapRotation=J.environment!==null&&M.envMap===null?H.environmentRotation:M.envMapRotation,He===void 0&&(M.addEventListener("dispose",ce),He=new Map,J.programs=He);let Ve=He.get(Ce);if(Ve!==void 0){if(J.currentProgram===Ve&&J.lightsStateVersion===Ae)return cl(M,De),Ve}else De.uniforms=te.getUniforms(M),M.onBeforeCompile(De,y),Ve=te.acquireProgram(De,Ce),He.set(Ce,Ve),J.uniforms=De.uniforms;const ke=J.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ke.clippingPlanes=ve.uniform),cl(M,De),J.needsLights=od(M),J.lightsStateVersion=Ae,J.needsLights&&(ke.ambientLightColor.value=G.state.ambient,ke.lightProbe.value=G.state.probe,ke.directionalLights.value=G.state.directional,ke.directionalLightShadows.value=G.state.directionalShadow,ke.spotLights.value=G.state.spot,ke.spotLightShadows.value=G.state.spotShadow,ke.rectAreaLights.value=G.state.rectArea,ke.ltc_1.value=G.state.rectAreaLTC1,ke.ltc_2.value=G.state.rectAreaLTC2,ke.pointLights.value=G.state.point,ke.pointLightShadows.value=G.state.pointShadow,ke.hemisphereLights.value=G.state.hemi,ke.directionalShadowMap.value=G.state.directionalShadowMap,ke.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ke.spotShadowMap.value=G.state.spotShadowMap,ke.spotLightMatrix.value=G.state.spotLightMatrix,ke.spotLightMap.value=G.state.spotLightMap,ke.pointShadowMap.value=G.state.pointShadowMap,ke.pointShadowMatrix.value=G.state.pointShadowMatrix),J.currentProgram=Ve,J.uniformsList=null,Ve}function ll(M){if(M.uniformsList===null){const H=M.currentProgram.getUniforms();M.uniformsList=fs.seqWithValue(H.seq,M.uniforms)}return M.uniformsList}function cl(M,H){const Z=oe.get(M);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function sd(M,H,Z,J,G){H.isScene!==!0&&(H=Ee),Me.resetTextureUnits();const _e=H.fog,Ae=J.isMeshStandardMaterial?H.environment:null,De=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Zi,Ce=(J.isMeshStandardMaterial?qe:Pe).get(J.envMap||Ae),He=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ve=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ke=!!Z.morphAttributes.position,je=!!Z.morphAttributes.normal,st=!!Z.morphAttributes.color;let pt=Kn;J.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(pt=y.toneMapping);const ct=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ot=ct!==void 0?ct.length:0,ze=oe.get(J),ht=h.state.lights;if(Ne===!0&&(ee===!0||M!==S)){const Dt=M===S&&J.id===v;ve.setState(J,M,Dt)}let Ze=!1;J.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==ht.state.version||ze.outputColorSpace!==De||G.isBatchedMesh&&ze.batching===!1||!G.isBatchedMesh&&ze.batching===!0||G.isBatchedMesh&&ze.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ze.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ze.instancing===!1||!G.isInstancedMesh&&ze.instancing===!0||G.isSkinnedMesh&&ze.skinning===!1||!G.isSkinnedMesh&&ze.skinning===!0||G.isInstancedMesh&&ze.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ze.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ze.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ze.instancingMorph===!1&&G.morphTexture!==null||ze.envMap!==Ce||J.fog===!0&&ze.fog!==_e||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ve.numPlanes||ze.numIntersection!==ve.numIntersection)||ze.vertexAlphas!==He||ze.vertexTangents!==Ve||ze.morphTargets!==ke||ze.morphNormals!==je||ze.morphColors!==st||ze.toneMapping!==pt||ze.morphTargetsCount!==ot)&&(Ze=!0):(Ze=!0,ze.__version=J.version);let $t=ze.currentProgram;Ze===!0&&($t=Lr(J,H,G));let yi=!1,Wt=!1,ir=!1;const ft=$t.getUniforms(),Zt=ze.uniforms;if(re.useProgram($t.program)&&(yi=!0,Wt=!0,ir=!0),J.id!==v&&(v=J.id,Wt=!0),yi||S!==M){re.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ft.setValue(L,"projectionMatrix",M.projectionMatrix),ft.setValue(L,"viewMatrix",M.matrixWorldInverse);const kt=ft.map.cameraPosition;kt!==void 0&&kt.setValue(L,xe.setFromMatrixPosition(M.matrixWorld)),Fe.logarithmicDepthBuffer&&ft.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ft.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Wt=!0,ir=!0)}if(G.isSkinnedMesh){ft.setOptional(L,G,"bindMatrix"),ft.setOptional(L,G,"bindMatrixInverse");const Dt=G.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),ft.setValue(L,"boneTexture",Dt.boneTexture,Me))}G.isBatchedMesh&&(ft.setOptional(L,G,"batchingTexture"),ft.setValue(L,"batchingTexture",G._matricesTexture,Me),ft.setOptional(L,G,"batchingIdTexture"),ft.setValue(L,"batchingIdTexture",G._indirectTexture,Me),ft.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&ft.setValue(L,"batchingColorTexture",G._colorsTexture,Me));const Jt=Z.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&j.update(G,Z,$t),(Wt||ze.receiveShadow!==G.receiveShadow)&&(ze.receiveShadow=G.receiveShadow,ft.setValue(L,"receiveShadow",G.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Zt.envMap.value=Ce,Zt.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&H.environment!==null&&(Zt.envMapIntensity.value=H.environmentIntensity),Wt&&(ft.setValue(L,"toneMappingExposure",y.toneMappingExposure),ze.needsLights&&ad(Zt,ir),_e&&J.fog===!0&&de.refreshFogUniforms(Zt,_e),de.refreshMaterialUniforms(Zt,J,B,N,h.state.transmissionRenderTarget[M.id]),fs.upload(L,ll(ze),Zt,Me)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(fs.upload(L,ll(ze),Zt,Me),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ft.setValue(L,"center",G.center),ft.setValue(L,"modelViewMatrix",G.modelViewMatrix),ft.setValue(L,"normalMatrix",G.normalMatrix),ft.setValue(L,"modelMatrix",G.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Dt=J.uniformsGroups;for(let kt=0,Is=Dt.length;kt<Is;kt++){const ei=Dt[kt];Ue.update(ei,$t),Ue.bind(ei,$t)}}return $t}function ad(M,H){M.ambientLightColor.needsUpdate=H,M.lightProbe.needsUpdate=H,M.directionalLights.needsUpdate=H,M.directionalLightShadows.needsUpdate=H,M.pointLights.needsUpdate=H,M.pointLightShadows.needsUpdate=H,M.spotLights.needsUpdate=H,M.spotLightShadows.needsUpdate=H,M.rectAreaLights.needsUpdate=H,M.hemisphereLights.needsUpdate=H}function od(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,H,Z){const J=oe.get(M);J.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),oe.get(M.texture).__webglTexture=H,oe.get(M.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Z,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,H){const Z=oe.get(M);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0};const ld=L.createFramebuffer();this.setRenderTarget=function(M,H=0,Z=0){P=M,T=H,w=Z;let J=!0,G=null,_e=!1,Ae=!1;if(M){const Ce=oe.get(M);if(Ce.__useDefaultFramebuffer!==void 0)re.bindFramebuffer(L.FRAMEBUFFER,null),J=!1;else if(Ce.__webglFramebuffer===void 0)Me.setupRenderTarget(M);else if(Ce.__hasExternalTextures)Me.rebindTextures(M,oe.get(M.texture).__webglTexture,oe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const ke=M.depthTexture;if(Ce.__boundDepthTexture!==ke){if(ke!==null&&oe.has(ke)&&(M.width!==ke.image.width||M.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Me.setupDepthRenderbuffer(M)}}const He=M.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ae=!0);const Ve=oe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ve[H])?G=Ve[H][Z]:G=Ve[H],_e=!0):M.samples>0&&Me.useMultisampledRTT(M)===!1?G=oe.get(M).__webglMultisampledFramebuffer:Array.isArray(Ve)?G=Ve[Z]:G=Ve,C.copy(M.viewport),I.copy(M.scissor),F=M.scissorTest}else C.copy(V).multiplyScalar(B).floor(),I.copy(q).multiplyScalar(B).floor(),F=ue;if(Z!==0&&(G=ld),re.bindFramebuffer(L.FRAMEBUFFER,G)&&J&&re.drawBuffers(M,G),re.viewport(C),re.scissor(I),re.setScissorTest(F),_e){const Ce=oe.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ce.__webglTexture,Z)}else if(Ae){const Ce=H;for(let He=0;He<M.textures.length;He++){const Ve=oe.get(M.textures[He]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+He,Ve.__webglTexture,Z,Ce)}}else if(M!==null&&Z!==0){const Ce=oe.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ce.__webglTexture,Z)}v=-1},this.readRenderTargetPixels=function(M,H,Z,J,G,_e,Ae,De=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=oe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ce=Ce[Ae]),Ce){re.bindFramebuffer(L.FRAMEBUFFER,Ce);try{const He=M.textures[De],Ve=He.format,ke=He.type;if(!Fe.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=M.width-J&&Z>=0&&Z<=M.height-G&&(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+De),L.readPixels(H,Z,J,G,me.convert(Ve),me.convert(ke),_e))}finally{const He=P!==null?oe.get(P).__webglFramebuffer:null;re.bindFramebuffer(L.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(M,H,Z,J,G,_e,Ae,De=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=oe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ce=Ce[Ae]),Ce)if(H>=0&&H<=M.width-J&&Z>=0&&Z<=M.height-G){re.bindFramebuffer(L.FRAMEBUFFER,Ce);const He=M.textures[De],Ve=He.format,ke=He.type;if(!Fe.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,je),L.bufferData(L.PIXEL_PACK_BUFFER,_e.byteLength,L.STREAM_READ),M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+De),L.readPixels(H,Z,J,G,me.convert(Ve),me.convert(ke),0);const st=P!==null?oe.get(P).__webglFramebuffer:null;re.bindFramebuffer(L.FRAMEBUFFER,st);const pt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Yh(L,pt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,je),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,_e),L.deleteBuffer(je),L.deleteSync(pt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,H=null,Z=0){const J=Math.pow(2,-Z),G=Math.floor(M.image.width*J),_e=Math.floor(M.image.height*J),Ae=H!==null?H.x:0,De=H!==null?H.y:0;Me.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,Z,0,0,Ae,De,G,_e),re.unbindTexture()};const cd=L.createFramebuffer(),ud=L.createFramebuffer();this.copyTextureToTexture=function(M,H,Z=null,J=null,G=0,_e=null){_e===null&&(G!==0?(Sr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=G,G=0):_e=0);let Ae,De,Ce,He,Ve,ke,je,st,pt;const ct=M.isCompressedTexture?M.mipmaps[_e]:M.image;if(Z!==null)Ae=Z.max.x-Z.min.x,De=Z.max.y-Z.min.y,Ce=Z.isBox3?Z.max.z-Z.min.z:1,He=Z.min.x,Ve=Z.min.y,ke=Z.isBox3?Z.min.z:0;else{const Jt=Math.pow(2,-G);Ae=Math.floor(ct.width*Jt),De=Math.floor(ct.height*Jt),M.isDataArrayTexture?Ce=ct.depth:M.isData3DTexture?Ce=Math.floor(ct.depth*Jt):Ce=1,He=0,Ve=0,ke=0}J!==null?(je=J.x,st=J.y,pt=J.z):(je=0,st=0,pt=0);const ot=me.convert(H.format),ze=me.convert(H.type);let ht;H.isData3DTexture?(Me.setTexture3D(H,0),ht=L.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Me.setTexture2DArray(H,0),ht=L.TEXTURE_2D_ARRAY):(Me.setTexture2D(H,0),ht=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);const Ze=L.getParameter(L.UNPACK_ROW_LENGTH),$t=L.getParameter(L.UNPACK_IMAGE_HEIGHT),yi=L.getParameter(L.UNPACK_SKIP_PIXELS),Wt=L.getParameter(L.UNPACK_SKIP_ROWS),ir=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ct.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ct.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,He),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ve),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ke);const ft=M.isDataArrayTexture||M.isData3DTexture,Zt=H.isDataArrayTexture||H.isData3DTexture;if(M.isDepthTexture){const Jt=oe.get(M),Dt=oe.get(H),kt=oe.get(Jt.__renderTarget),Is=oe.get(Dt.__renderTarget);re.bindFramebuffer(L.READ_FRAMEBUFFER,kt.__webglFramebuffer),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,Is.__webglFramebuffer);for(let ei=0;ei<Ce;ei++)ft&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,oe.get(M).__webglTexture,G,ke+ei),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,oe.get(H).__webglTexture,_e,pt+ei)),L.blitFramebuffer(He,Ve,Ae,De,je,st,Ae,De,L.DEPTH_BUFFER_BIT,L.NEAREST);re.bindFramebuffer(L.READ_FRAMEBUFFER,null),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||oe.has(M)){const Jt=oe.get(M),Dt=oe.get(H);re.bindFramebuffer(L.READ_FRAMEBUFFER,cd),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,ud);for(let kt=0;kt<Ce;kt++)ft?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Jt.__webglTexture,G,ke+kt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Jt.__webglTexture,G),Zt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Dt.__webglTexture,_e,pt+kt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Dt.__webglTexture,_e),G!==0?L.blitFramebuffer(He,Ve,Ae,De,je,st,Ae,De,L.COLOR_BUFFER_BIT,L.NEAREST):Zt?L.copyTexSubImage3D(ht,_e,je,st,pt+kt,He,Ve,Ae,De):L.copyTexSubImage2D(ht,_e,je,st,He,Ve,Ae,De);re.bindFramebuffer(L.READ_FRAMEBUFFER,null),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Zt?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(ht,_e,je,st,pt,Ae,De,Ce,ot,ze,ct.data):H.isCompressedArrayTexture?L.compressedTexSubImage3D(ht,_e,je,st,pt,Ae,De,Ce,ot,ct.data):L.texSubImage3D(ht,_e,je,st,pt,Ae,De,Ce,ot,ze,ct):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,_e,je,st,Ae,De,ot,ze,ct.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,_e,je,st,ct.width,ct.height,ot,ct.data):L.texSubImage2D(L.TEXTURE_2D,_e,je,st,Ae,De,ot,ze,ct);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ze),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,$t),L.pixelStorei(L.UNPACK_SKIP_PIXELS,yi),L.pixelStorei(L.UNPACK_SKIP_ROWS,Wt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ir),_e===0&&H.generateMipmaps&&L.generateMipmap(ht),re.unbindTexture()},this.initRenderTarget=function(M){oe.get(M).__webglFramebuffer===void 0&&Me.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Me.setTextureCube(M,0):M.isData3DTexture?Me.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Me.setTexture2DArray(M,0):Me.setTexture2D(M,0),re.unbindTexture()},this.resetState=function(){T=0,w=0,P=null,re.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const Hi={"girl-standing":{eyes:[[.385,.378],[.565,.362]],seeds:[[.714,.432],[.225,.449]]},"girl-reading":{eyes:[[.474,.388],[.606,.386]],seeds:[]},"girl-cooking":{eyes:[[.43,.384],[.613,.369]],seeds:[[.7612,.4402],[.2712,.4562],[.72768,.44305],[.24554,.45957]]},"girl-tasting":{seeds:[]},"girl-adventure-cooking":{seeds:[[.7855,.4368],[.2615,.4516],[.77542,.43736],[.24246,.45501]],eyes:[[.4307,.3847],[.614,.3696]]},"girl-adventure-reading":{seeds:[[.2393,.3958],[.25781,.39974],[.6748,.44596],[.7168,.84375]],eyes:[[.4819,.3818],[.6138,.3799]]},"girl-adventure-standing":{seeds:[[.7528,.4369],[.2071,.4386],[.76281,.44089],[.1637,.43918]],eyes:[[.4003,.3669],[.5802,.3535]]},"girl-adventure-tasting":{seeds:[]},"girl-forest-cooking":{seeds:[[.743,.436],[.2771,.4496],[.7743,.43825],[.23128,.45134]],eyes:[[.424,.3785],[.6,.3654]]},"girl-forest-reading":{seeds:[[.2471,.416],[.23438,.41732],[.61328,.45117],[.71387,.85221]],eyes:[[.4722,.3857],[.6045,.3848]]},"girl-forest-standing":{seeds:[[.7272,.4415],[.2372,.4529],[.67372,.44032],[.20824,.45174]],eyes:[[.3925,.3775],[.5757,.3621]]},"girl-forest-tasting":{seeds:[[.2831,.5087],[.25026,.50929]]},"girl-school-cooking":{seeds:[[.7553,.43],[.2715,.4368],[.1933,.4795],[.77654,.43109],[.2581,.44077]],eyes:[[.4274,.3693],[.6056,.3554]]},"girl-school-reading":{seeds:[[.2646,.4121],[.29688,.41667],[.64746,.45182]],eyes:[[.4722,.3861],[.6045,.3844]]},"girl-school-standing":{seeds:[[.235,.45],[.22272,.44832]],eyes:[[.3859,.3775],[.5674,.3626]]},"girl-school-tasting":{seeds:[[.7395,.4808],[.2728,.505],[.73436,.48637],[.37949,.5062]]},"girl-star-cooking":{seeds:[[.7341,.4394],[.2816,.4502],[.1944,.4883],[.79106,.44109],[.2324,.45191]],eyes:[[.4212,.3768],[.6,.3628]]},"girl-star-reading":{seeds:[[.67676,.45573],[.33301,.4401]],eyes:[[.5034,.3857],[.635,.384]]},"girl-star-standing":{seeds:[[.2,.42],[.76,.43]],eyes:[[.389,.355],[.573,.342]],source:"assets/2d/outfits/star-standing-hat.png"},"girl-star-tasting":{seeds:[[.2813,.4919],[.7392,.4969],[.37269,.49442],[.74846,.49752]]},"girl-tea-cooking":{seeds:[[.7598,.4339],[.267,.4505],[.79888,.43793],[.2648,.4533]],eyes:[[.4296,.3813],[.6134,.367]]},"girl-tea-reading":{seeds:[[.2568,.416],[.20996,.41927],[.64062,.44401],[.68262,.85026]],eyes:[[.4697,.3831],[.6021,.3809]]},"girl-tea-standing":{seeds:[[.7397,.4469],[.2436,.4509],[.7842,.44286],[.22247,.45029]],eyes:[[.4032,.3786],[.5868,.3631]]},"girl-tea-tasting":{seeds:[[.2841,.4944],[.27282,.49628]]}};function zu(n,e,t){n.userData.key=e;const i={time:{value:0},moving:{value:0},joy:{value:0},blink:{value:0},showcase:{value:new K},headScale:{value:e.endsWith("-reading")?1.12:1},eyeA:{value:new nt(...(t==null?void 0:t[0])??[-2,-2])},eyeB:{value:new nt(...(t==null?void 0:t[1])??[-2,-2])}};return n.material.onBeforeCompile=r=>{Object.assign(r.uniforms,i),r.vertexShader=`uniform float time; uniform float moving; uniform float joy; uniform float headScale; uniform vec3 showcase;
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
   `)},n.material.customProgramCacheKey=()=>e,n.userData.uniforms=i,n}function h_(n,e){var y;const t=document.createElement("canvas");t.className="companion-portrait",t.setAttribute("role","img"),t.setAttribute("aria-label","面向你的松团子");const i=new ku({canvas:t,alpha:!0,antialias:!0});i.setPixelRatio(Math.min(devicePixelRatio,2)),i.setClearColor(0,0);const r=new Cu,s=new el(-.5,.5,.5,-.5,.1,10);s.position.z=2;const a=new Iu().load(n,()=>{if(u)return;const A=a.image.width/a.image.height;l.scale.x=A,s.left=-A/2,s.right=A/2,s.updateProjectionMatrix(),t.style.aspectRatio=String(A),h(),t.dataset.ready="true"});a.colorSpace=xt;const o=e==="acorn"?"girl-standing":`girl-${e}-standing`,l=zu(new vt(new Nt(1,1,36,52),new Yt({map:a,transparent:!0})),o,(y=Hi[o])==null?void 0:y.eyes);r.add(l);const c=matchMedia("(prefers-reduced-motion: reduce)");let u=!1,d=0,f=0,p=performance.now(),g="idle",_=0,m=0;function h(){const A=t.getBoundingClientRect();A.width&&A.height&&i.setSize(A.width,A.height,!1)}const E=new ResizeObserver(h);E.observe(t);function b(A){const T=Math.min((A-p)/1e3,.1);if(p=A,t.isConnected&&!document.hidden){c.matches||(f+=T),_+=(+(g==="replying")-_)*Math.min(1,T*5);const w=c.matches?0:f,P=l.userData.uniforms,v=w%5.7,S=v>4.9&&v<5.13?Math.sin((v-4.9)/.23*Math.PI):0,C=g==="thinking"?.25+Math.sin(w*.7)*.2:g==="listening"?.25:0;m+=(C-m)*Math.min(1,T*4),P.time.value=w,P.blink.value=S,P.joy.value=0,P.moving.value=0,P.showcase.value.set(c.matches?0:_*(.2+.1*Math.sin(w*2)),c.matches?0:m+_*Math.sin(w*2.4)*.22,c.matches?0:Math.sin(w*.8)*.12),i.render(r,s)}d=requestAnimationFrame(b)}return d=requestAnimationFrame(b),{canvas:t,setState(A){g=A,t.dataset.motion=A},dispose(){u=!0,cancelAnimationFrame(d),E.disconnect(),a.dispose(),l.geometry.dispose(),l.material.dispose(),i.dispose()}}}function f_({dialog:n,isOpen:e,getText:t}){let i=null,r="";function s(){i==null||i.remove(),i=null}function a(l=!1,c=null){if(s(),i=document.createElement("div"),i.className="story-creation-menu"+(l?" selection-menu":""),i.setAttribute("role","dialog"),i.setAttribute("aria-label",l?"选中文字操作":"选择创作方式"),i.innerHTML=`${l?"":"<strong>选择创作方式</strong>"}<div class="creation-options">${l?'<button data-create="copy">复制</button>':""}<button data-create="video">视频创作</button><button data-create="comic">漫画创作</button>${l?"":'<button data-create="text">文字发布</button>'}</div><p class="creation-message" role="status" hidden></p>${l?"":'<button class="creation-cancel" data-create="close">取消</button>'}`,i.addEventListener("pointerdown",u=>{i.classList.contains("selection-menu")&&u.preventDefault()}),i.addEventListener("click",async u=>{var g;const d=(g=u.target.closest("[data-create]"))==null?void 0:g.dataset.create;if(!d)return;if(d==="close"){s();return}const f=i.querySelector(".creation-message");if(d==="copy"){try{await navigator.clipboard.writeText(r),f.textContent="已复制"}catch{f.textContent="复制未完成，请使用系统复制菜单。"}f.hidden=!1;return}const p={video:"视频创作",comic:"漫画创作",text:"文字发布"}[d];i.className="story-creation-menu",i.style.left="",i.style.top="",i.setAttribute("aria-label",p),i.innerHTML=`<strong>${p}</strong><label class="creation-text-label">创作文本<textarea rows="5" aria-label="创作文本"></textarea></label><button class="creation-cancel" data-create="close">关闭</button>`,i.querySelector("textarea").value=r}),n.append(i),l&&c){const u=n.getBoundingClientRect(),d=i.offsetWidth,f=i.offsetHeight;i.style.left=Math.max(8,Math.min(u.width-d-8,c.left-u.left+c.width/2-d/2))+"px",i.style.top=Math.max(8,c.top-u.top-f-12)+"px"}}function o(){if(!e()||i&&!i.classList.contains("selection-menu"))return;const l=window.getSelection(),c=n.querySelector(".story-prose");if(!(l!=null&&l.rangeCount)||l.isCollapsed||!(c!=null&&c.contains(l.anchorNode))||!c.contains(l.focusNode)){i!=null&&i.classList.contains("selection-menu")&&s();return}const u=l.toString().trim();u===r&&i||(r=u,r&&a(!0,l.getRangeAt(0).getBoundingClientRect()))}return document.addEventListener("selectionchange",o),n.addEventListener("pointerdown",l=>{i&&!i.contains(l.target)&&s()}),n.addEventListener("keydown",l=>{l.key==="Escape"&&i&&(l.preventDefault(),l.stopPropagation(),s())}),{open(){r=t(),a()},close:s}}function en(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function Dn(n){return[...n.memories??[],...n.records.map((e,t)=>({id:e.id??`old-${t}`,title:e.name,summary:e.name,day:e.day,slot:e.slot,createdAt:e.createdAt,kind:"life",activity:p_(e.name)}))].sort((e,t)=>(t.createdAt??"").localeCompare(e.createdAt??""))}function p_(n){return/烘焙/.test(n)?"baking":/课程/.test(n)?"course":/采集/.test(n)?"gather":/小铺/.test(n)?"shop":/薄荷|约定|甜点/.test(n)?"story":"home"}function Hu(n,e=en()){return!(n.memoryStamps??[]).includes(e)&&Dn(n).some(t=>t.createdAt&&en(new Date(t.createdAt))===e&&(t.kind==="life"||t.event))}function m_(n,e=en()){return Hu(n,e)?(n.memoryStamps??(n.memoryStamps=[]),n.memoryStamps.push(e),n.coins+=_d,!0):!1}const Bo=[{id:"demo-collab",kind:"demo",title:Ft.name,chapters:[{title:Ft.name,cgId:Ft.id,paragraphs:["秋日的榛果林里，你——粉发的来访者——带着相机，遇见了提着莓果篮的松团子。你们决定一起拍下第一支森林短片。",...os.map(n=>n.lines.map(([e,t])=>`${e}说：「${t}」`).join("")),"相机留下了你们并肩的笑容。短片还等着剪辑，而这段一起创作的日子，已经成为故事的一页。"]}]},{id:"demo-baking",kind:"demo",title:"示例支线 · 第一口，留给你",chapters:[{title:"不太完美的那一口",cgId:"baking",paragraphs:["甜点出炉以后，松团子没有立刻端来。她站在窗边，把两只小盘子换了好几次位置。一颗莓果从奶油上滑下来，在盘沿留下浅红色的痕迹。","「这一块本来想留给你。」她用叉子指了指那个缺口，「可是它好像没有我想的那么漂亮。」","你说，先尝尝再决定。她终于坐下来，却还是紧张地看着你的叉子。第一口有一点酸，边缘也比中间更脆。你把这些都告诉了她。","松团子的耳朵先垂了一下，随后又慢慢竖起来。「那下一次，莓果少放一点。边缘……如果你喜欢，我们就留着。」她翻开小本子，没有写下“失败”，只画了两只并排的小盘子。","窗外的光落在剩下的甜点上。她把有缺口的那一块分成两半，推来其中一半。「这一口，我们一起吃吧。」"]}]},{id:"demo-magic",kind:"demo",title:"示例支线 · 第一片会飞的秋叶",chapters:[{title:"让秋叶自己落下来",cgId:"magic",paragraphs:["放学的钟声已经停了，彩窗前却还悬着一片秋叶。松团子举着魔杖，嘴里的咒语越来越轻。叶子绕过灯罩，又绕回来，仿佛没有听见。","「书里只教了怎么让它飞。」她翻过一页，又翻回来，「没有说，它不想下来怎么办。」","你提议先停下咒语。教室安静下来，只有窗缝里的风。她放下魔杖，叶子也不再急着打转，只在半空慢慢摇晃。","松团子试着伸出手，没有去抓。过了一会儿，秋叶落在她掌心里。她看着那片叶子笑了，却没有马上把成功的咒语记进书里。","她写下的是：“先等一等。”旁边留着一块空白。「这还是我们的办法，」她说，「等下次遇见不肯落下来的东西，再来补这一页。」"]}]}],ps=[{id:"preset-bookmark",kind:"demo",title:"体验新篇 · 留给明天的书签",scenes:["松团子发现书签不见了。","你们用一片落叶做了新的书签。","她在叶背写下明天一起读书的约定。"],chapters:[{title:"留给明天的书签",cgId:"bond",paragraphs:["松团子把书翻来翻去，又低头看了看椅子下面。「昨天明明夹在这里的。」她的耳朵随着叹气轻轻落下来。没有书签，她忽然不知道该从哪里继续。","你从窗台捡起一片干净的落叶，放在摊开的书旁。她用指尖沿着叶脉画了一圈。「这个可以。不过，风会不会又把它借走？」","你们给叶柄系了一小段棉线。松团子拿来铅笔，在叶背写下几个很小的字：明天，一起读到这里。","她把叶子夹好，合上书，又忍不住打开确认了一次。这一次她笑了。「原来书签不只是记住读到了哪里，也可以记住下一次想和谁一起读。」"]}]},{id:"preset-bag",kind:"demo",title:"体验新篇 · 纸袋上的小太阳",scenes:["打烊前，一只没有署名的纸袋被留在柜台。","松团子发现纸袋上画着感谢的小太阳。","她把画贴在门边，给明天的客人留一份温暖。"],chapters:[{title:"纸袋上的小太阳",cgId:"shop",paragraphs:["打烊时，柜台上还放着一只折好的纸袋。松团子打开看，里面没有甜点，也没有零钱，只有一张画着小太阳的纸。","「会不会是谁忘记的？」她把纸转过来，背面写着：今天的热可可很好喝。字挤在一起，最后一笔还画成了卷卷的尾巴。","你说，也许这就是特意留给她的。松团子站在灯下看了很久，小心地把纸角抚平。她原本正在想今天有哪里做得不够好，现在那些问题暂时安静了。","她把小太阳贴在门边，旁边添了一句话：明天也有热可可。「这样，第一个进来的人就能看见。」她关好灯，回头望了一眼，又把纸贴正了一点。"]}]}],Oc={id:"main-prologue",kind:"prologue",title:"序章 · 橡果小屋的来信",summary:"秋天精灵松团子住进橡果小屋，开始学习人类的生活，并期待七日后的秋收祭。",chapters:[{title:"秋天，推开了小屋的门",cgId:null,paragraphs:["榛果林的秋天，总比镇上来得早一些。风拂过树梢，松团子竖起橙棕色的松鼠耳朵，听见橡果落在苔藓上的轻响。金色的双麻花辫垂在肩头，蓬松的尾巴替她拢住了清晨的凉意。","森林的季节，她再熟悉不过。可人类为什么要把果实烤成甜点，为什么把喜欢的东西分给别人，又为什么会在一盏灯下等另一个人回来？这些问题，书里似乎没有一句就能说清的答案。","于是，她来到林边的橡果小屋。窗边有一把阅读椅，厨房里有一只安静的烤箱，门外的小路通向魔女学院，也通向小镇和烘焙小铺。她的学院朋友薄荷，也在为即将到来的秋收祭做准备。","再过七天，镇上的人们就会聚在一起庆祝丰收。松团子还不知道自己会带去什么，也没有急着给未来写下答案。她想先读懂一页书，学会一道配方，再认真认识一个人。","你推开门时，她正把一枚秋叶夹进书里。粉色星形的眼睛从书页上抬起来，先是好奇，随后露出一点笑意。她把身旁的位置让出来，像是为一段还没开始的故事留下一页空白。",`「今天，想把时间花在什么美好的事上？」
窗外的风吹动了花帘。你们的日子，就从这里开始。`]}]},_t=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Fa=n=>Bo.includes(n)||[...Bo,...ps].some(e=>e.id===n.demoSourceId),g_=n=>`/acorn-witch-atelier/assets/2d/${n}.webp`;function __({dialog:n,getState:e,save:t,api:i,getStatus:r,isOpen:s}){let a="main",o=null,l=0,c=0,u=[],d=!1,f=[],p=!1,g="",_="",m=null,h="preset-bookmark";const E=()=>d?f:a==="mine"?[...Bo,...e().characterStories??[]]:[Oc,...(r().canon??[]).map(N=>({id:N.id,kind:"canon",title:N.title,summary:N.summary,chapters:[{title:N.title,paragraphs:N.summary.split(/\n+/).filter(Boolean)}]}))],b=()=>E().find(N=>N.id===o)??E().at(-1),y=f_({dialog:n,isOpen:s,getText:()=>{var N;return((N=b())==null?void 0:N.chapters.map(B=>B.paragraphs.join(`
`)).join(`

`))??""}}),A=()=>Bt.filter(N=>{var B;return(((B=e().collection)==null?void 0:B.cgs)??[]).includes(N.id)}),T=N=>{const B=N.chapters[l];if(B.cgId===Ft.id)return{src:Ft.image,name:Ft.name,focus:"50% 40%"};if(N===Oc)return{src:"/acorn-witch-atelier/assets/intro/story-city-landscape.png",name:"秋日小镇",focus:"50%"};const W=(Fa(N)?Bt:A()).find(D=>D.id===B.cgId);return W?{src:`/acorn-witch-atelier/assets/rewards/cg-${W.id}.webp`,name:W.name,focus:nu[W.id]}:null},w=(N,B,W="")=>`<button data-story="${B}" ${W}>${N}</button>`;function P(N){n.className="story-book book-panel",n.innerHTML=`${gr("stories")}${N}`}function v(){if(!s())return;const N=b(),B=r();if(_){X();return}if(P(`${d?"":`<nav class="story-branches" aria-label="故事分支">${w("主线","branch",`data-branch="main" aria-pressed="${a==="main"}"`)}${w("我的支线","branch",`data-branch="mine" aria-pressed="${a==="mine"}"`)}</nav>`}<div class="story-tools">${E().length?`<select id="story-volume" aria-label="选择故事">${E().map(W=>`<option value="${_t(W.id)}" ${W.id===(N==null?void 0:N.id)?"selected":""}>${_t(W.title)}</option>`).join("")}</select>`:`<span>${d?"作者稿箱":"属于你的篇章"}</span>`}${N?w("分享","share"):""}${w(d?"我的故事":"编成新篇",d?"mine":"compose",p?"disabled":"")}${B.creator?w(d?"刷新稿箱":"作者稿箱","inbox",p?"disabled":""):""}</div>${p?'<p class="novel-message" role="status">正在把经历编成故事，请稍等…</p>':""}${g?`<p class="novel-message novel-error" role="alert">${_t(g)}</p>`:""}${N?C(N):S()}`),N){const W=At(e()).community.reads;!d&&!W.includes(N.id)&&(W.push(N.id),t()),F(),z()}}function S(){return`<div class="novel-empty"><span class="novel-kicker">序 · 还未落笔</span><h1>${d?"等待一封来稿":"把日子，写成故事"}</h1><img src="${g_("forest-bg")}" alt="榛果林中的小路"><p>${d?"玩家交来的故事会留在这里。你可以阅读、改写，再收录为主线。":"松团子在小屋、学院和森林里的经历，<br>会成为这本书的章节。"}</p>${d?"":w("用已有经历写第一篇","compose",p?"disabled":"")}</div>`}function C(N){l=Math.min(l,N.chapters.length-1);const B=Fa(N),W=N.kind==="prologue",D=W||N.kind==="canon",V=N.chapters[l],q=A().find(ue=>ue.id===V.cgId);return T(N),`<nav class="chapter-tabs" aria-label="故事章节" ${N.chapters.length===1?"hidden":""}>${N.chapters.map((ue,Se)=>w(["I","II","III","IV","V","VI"][Se],"chapter",`data-index="${Se}" aria-label="第 ${Se+1} 章：${_t(ue.title)}" aria-current="${Se===l?"page":"false"}"`)).join("")}</nav><article class="novel-page"><header><small>${W?"主线序章":"第 "+(l+1)+" 章"}</small><h1>${_t(V.title)}</h1></header><div class="story-prose" aria-label="小说正文" aria-live="polite"></div></article><footer class="novel-footer"><div class="novel-paging">${w("‹ 上一页","prev")}<span id="story-page-label"></span>${w("下一页 ›","next")}</div>${!B&&!D&&!d&&A().length?`<label class="story-art-picker">章节插图<select id="story-illustration" aria-label="章节插图" ${N.submissionId?"disabled":""}><option value="">纯文字</option>${A().map(ue=>`<option value="${ue.id}" ${(q==null?void 0:q.id)===ue.id?"selected":""}>${_t(ue.name)}</option>`).join("")}</select></label>`:""}<div class="novel-actions"><span>${B?"示例支线 · 不计入游玩经历":D?W?"主线 · 故事的起点":"主线 · 已收录剧情":d?_t(N.author)+" · "+(N.canonId?"已收录主线":"待作者整理"):"AI 编写 · "+(N.submissionId?"已交稿":"个人故事")}</span>${D||B?"":d?w(N.canonId?"已收录":"整理为主线","review",N.canonId?"disabled":""):w(N.submissionId?"已交给作者":"交给作者","submit",N.submissionId?"disabled":"")}</div></footer>`}function I(N,B){const W=B===0?T(b()):null;return(W?`<figure class="novel-illustration" style="--cg-focus:${W.focus}"><button data-story="art" aria-label="查看完整插图"><img class="novel-art" src="${W.src}" alt="${_t(W.name)}"></button></figure>`:"")+N.map(D=>`<p>${_t(D)}</p>`).join("")}function F(){const N=n.querySelector(".story-prose");if(!N)return;const B=b().chapters[l].paragraphs;u=[];let W=[];const D=V=>(n.querySelector(".novel-page header").hidden=u.length>0,N.innerHTML=I(V,u.length),N.scrollHeight<=N.clientHeight);for(const V of B){let q=Array.from(V);for(;q.length;){if(D([...W,q.join("")])){W.push(q.join(""));break}let ue=0,Se=q.length;for(;ue<Se;){const ee=Math.ceil((ue+Se)/2);D([...W,q.slice(0,ee).join("")])?ue=ee:Se=ee-1}if(ue===0&&W.length){u.push(W),W=[];continue}const Ne=Math.max(1,ue);W.push(q.splice(0,Ne).join("")),u.push(W),W=[]}}W.length&&u.push(W),c=Math.min(c,Math.max(0,u.length-1))}function z(){const N=n.querySelector(".story-prose");N&&(n.querySelector(".novel-page header").hidden=c>0,N.innerHTML=I(u[c]??[],c),n.querySelector("#story-page-label").textContent=`第 ${c+1} 页 / 共 ${u.length} 页`,n.querySelector("[data-story=prev]").disabled=c===0&&l===0,n.querySelector("[data-story=next]").disabled=c===u.length-1&&l===b().chapters.length-1)}function X(){const N=b(),B=_==="compose",W=_==="review";if(_==="demo-source"||_==="demo-outline"){const D=ps.find(q=>q.id===h),V=D.scenes;P(`<section class="story-editor"><small>预制剧情体验 · ${_==="demo-source"?"1 / 2 选择素材":"2 / 2 整理成篇"}</small><h1>${_==="demo-source"?"把这一幕，编成故事":"故事已经有了模样"}</h1>${_==="demo-source"?`<label>选择一段剧情<select id="demo-source">${ps.map(q=>`<option value="${q.id}" ${q.id===h?"selected":""}>${_t(q.chapters[0].title)}</option>`).join("")}</select></label><p>${V.map((q,ue)=>`${ue+1}. ${q}`).join("<br>")}</p><p>这些是预制素材，可以先体验从剧情到故事的过程。</p>`:`<h2>${_t(D.chapters[0].title)}</h2><p>开头：${V[0]}<br>转折：${V[1]}<br>结尾：${V[2]}</p><p>故事节选</p><p>${_t(D.chapters[0].paragraphs[0])}</p><p>配图：${_t(Bt.find(q=>q.id===D.chapters[0].cgId).name)}</p>`}<div class="story-editor-actions">${w("返回",_==="demo-source"?"cancel":"demo-back")}${w(_==="demo-source"?"整理成故事":"保存并阅读新篇",_==="demo-source"?"demo-outline":"demo-save")}</div></section>`);return}if(_==="art"){const D=T(N);P(`<figure class="story-full-art"><img src="${D.src}" alt="${_t(D.name)}"><figcaption>${_t(D.name)}</figcaption></figure><div class="full-art-back">${w("返回阅读","cancel")}${N.kind==="prologue"||Fa(N)?"":w("分享插图","share-art")}</div>`);return}P(`<form class="story-editor" id="story-editor"><small>${B?"让经历成为篇章":W?"作者工作台":"故事来稿"}</small><h1>${B?"编成自己的故事":W?"发展为主线剧情":"交给故事的作者"}</h1><p>${B?"融合最近 40 段经历与已确认主线。生成后另存为新篇，原有故事保留。":W?"以这篇故事为素材，确认你要采用的主线版本。收录后，AI 会读取这段主线。":"发送当前故事的固定版本到本机作者稿箱，由作者阅读、改写与收录。"}</p>${B?`${w("用预制剧情体验","demo-start")}<label>想突出什么？<textarea name="preference" maxlength="300" rows="3" placeholder="例如：松团子第一次学会分享的心情（选填）"></textarea></label>`:W?`<label>主线标题<input name="title" maxlength="60" value="${_t(N.title)}" required></label><label>确认后的主线剧情<textarea name="summary" maxlength="2000" required>${_t(N.summary)}</textarea></label><label>共创作者<input name="author" maxlength="60" value="${_t(N.author)}"></label>`:`<h2>${_t(N.title)}</h2><label>你的署名<input name="author" maxlength="60" placeholder="共创玩家"></label><p>当前仅支持本机收稿，尚未开放跨玩家投稿。</p>`}<p class="editor-error" role="alert">${_t(g)}</p><div class="story-editor-actions">${w("返回阅读","cancel",p?"disabled":"")}<button type="submit" ${p||B&&(!r().chat||!Dn(e()).length)?"disabled":""}>${p?"正在处理…":B?"开始编写":W?"确认收录主线":"确认交稿"}</button></div>${B?`<p class="story-connection-note" ${r().chat?"hidden":""}>豆包尚未连接，已有故事仍可阅读。</p>`:""}${B&&!Dn(e()).length?"<p>先完成一次活动或留下一段对话。</p>":""}</form>`)}async function Y(N){var V;if(N.target.id!=="story-editor"||(N.preventDefault(),p))return;const B=Object.fromEntries(new FormData(N.target)),W=_,D=b();p=!0,g="",m=new AbortController,N.target.querySelectorAll("button").forEach(q=>q.disabled=!0),N.target.querySelector("button[type=submit]").textContent=W==="compose"?"正在编写…":"正在处理…";try{if(W==="compose"){const q=e(),ue=Dn(q).slice(0,40).reverse().map(({id:ee,title:ie,summary:xe,day:Re,slot:Ee,kind:Ge,event:dt})=>({id:ee,title:ie,summary:xe,day:Re,slot:Ee,kind:Ge,event:dt})),Se=await i("/stories/generate",{memories:ue,preference:B.preference,cgIds:((V=q.collection)==null?void 0:V.cgs)??[],progress:{day:q.day,slot:q.slot,story:q.story,ending:q.ending}},m.signal);if(!s())return;const Ne={...Se.story,id:crypto.randomUUID(),createdAt:new Date().toISOString(),sourceIds:ue.map(ee=>ee.id)};q.characterStories??(q.characterStories=[]),q.characterStories.push(Ne),t(),a="mine",o=Ne.id,l=0,c=0,d=!1}else if(W==="submit"){const q=await i("/stories/submit",{storyId:D.id,story:{title:D.title,summary:D.summary,chapters:D.chapters},author:B.author},m.signal);D.submissionId=q.entry.id,t()}else{const q=await i("/canon",{...B,submissionId:D.id},m.signal);D.canonId=q.entry.id,r().canon.push(q.entry)}_="",p=!1,v()}catch(q){if(q.name==="AbortError")return;if(p=!1,g=q.message,s()){const ue=n.querySelector(".editor-error");ue&&(ue.textContent=g,n.querySelectorAll(".story-editor button").forEach(Se=>Se.disabled=!1),n.querySelector("button[type=submit]").textContent="重试")}}}return n.addEventListener("submit",Y),n.addEventListener("change",N=>{if(N.target.id==="demo-source"){h=N.target.value,v();return}if(N.target.id==="story-illustration"&&!d&&b().kind!=="prologue"&&!b().submissionId){const B=N.target.value;b().chapters[l].cgId=A().some(W=>W.id===B)?B:null,t(),c=0,v()}N.target.id==="story-volume"&&(o=N.target.value,l=0,c=0,v())}),n.addEventListener("click",async N=>{var D;const B=N.target.closest("[data-story]");if(!B||B.disabled||p)return;const W=B.dataset.story;if(g="",W==="share"){y.open();return}if(W==="share-art"){B.disabled=!0;try{await qa(A().find(V=>V.id===b().chapters[l].cgId),e())}catch(V){g=V.message,_="",v()}finally{B.disabled=!1}return}if(W==="compose"&&!Dn(e()).length){_="demo-source",v();return}if(W==="demo-start"||W==="demo-back"){_="demo-source",v();return}if(W==="demo-outline"){_="demo-outline",v();return}if(W==="demo-save"){const V=ps.find(ue=>ue.id===h),q={...structuredClone(V),id:crypto.randomUUID(),demoSourceId:V.id,title:V.title.replace("示例支线","体验新篇"),createdAt:new Date().toISOString()};(D=e()).characterStories??(D.characterStories=[]),e().characterStories.push(q),t(),a="mine",o=q.id,l=0,c=0,d=!1,_="",v();return}if((W==="compose"||W==="submit"||W==="review"||W==="art")&&(_=W,v()),W==="cancel"&&(_="",v()),W==="branch"&&(y.close(),a=B.dataset.branch,o=null,l=0,c=0,v()),W==="chapter"&&(l=Number(B.dataset.index),c=0,v()),W==="prev"&&(c>0?(c--,z()):l>0&&(l--,c=0,v(),c=u.length-1,z())),W==="next"&&(c<u.length-1?(c++,z()):l<b().chapters.length-1&&(l++,c=0,v())),W==="mine"&&(a="mine",d=!1,o=null,l=0,c=0,v()),W==="inbox"){p=!0,m=new AbortController;try{const V=await i("/stories/submissions",void 0,m.signal);if(!s())return;f=V.entries,d=!0,o=null,l=0,c=0}catch(V){V.name!=="AbortError"&&(g=V.message)}finally{p=!1,v()}}}),new ResizeObserver(()=>{s()&&!_&&b()&&(F(),z())}).observe(n),{open(){_="",g="",v()},refresh(){if(!_&&!p)v();else if(_==="compose"&&!p){const N=n.querySelector("button[type=submit]");N&&(N.disabled=!r().chat||!Dn(e()).length);const B=n.querySelector(".story-connection-note");B&&(B.hidden=r().chat)}},leave(){y.close(),m==null||m.abort(),p=!1,_=""}}}const Tt=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Oa="https://sjktg7i6ngh4etmcagt01.apigateway-cn-beijing.volceapi.com/api/companion",rs=n=>`/acorn-witch-atelier/assets/2d/${n}.webp`,Bc={home:"窗边闲聊",baking:"一起烘焙",course:"学院生活",gather:"榛果林探索",shop:"小铺营业",story:"朋友来信"},ss={home:"home-bg",baking:"kitchen-bg",course:"school-bg",gather:"forest-bg",shop:"kitchen-bg",story:"home-bg"},v_={history:'<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M3 5q7-2 12 2v23q-5-4-12-2zm26 0q-7-2-12 2v23q5-4 12-2z"/><path d="m6 11 6 1m-6 4 6 1m8-5 6-1m-6 6 6-1" fill="none" stroke="#fff2d7" stroke-width="1.5"/></svg>'},Ba=[{hint:"咦，这一页还夹着片叶子。",opening:"咦，这一页还夹着片叶子。叶脉像一张小地图……你觉得它通向哪里？"},{hint:"唔……这段我读了两遍。",opening:"书里说，烤甜点时的心情也会藏进味道里。那今天，你想尝到什么样的味道？"},{hint:"看到这里，忽然有点饿了。",opening:"刚读到一块还冒着热气的小蛋糕，我的肚子就响了……你现在最想吃什么？"},{hint:"要是我们也去走走呢……",opening:"书里的小路一直伸进森林深处。如果我们去散步，你想沿着溪水走，还是找一块树荫坐坐？"}],x_={baking:"闻起来已经有点香了。你想在今天的甜点里藏一点什么小惊喜？",course:"刚才那段我还在琢磨……你觉得魔法最有意思的地方是什么？",gather:"嘘，叶子底下好像有动静。我们先蹲下来看看？",shop:"你说，客人推开门时，最先注意到的是香味，还是柜台里的甜点？",story:"读到这里，我有点想知道你的看法。要是你来回这封信，会先写什么？"};function y_({game:n,getState:e,getContext:t,save:i,refresh:r,pause:s,portrait:a,onActivity:o,onAlbum:l,onCG:c}){const u=document.createElement("dialog");u.id="memory-dialog",n.append(u);const d=document.createElement("button");d.id="character-talk",d.type="button",d.setAttribute("aria-label","和松团子聊天"),d.innerHTML='<span class=character-reaction><span class=character-reaction-text></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v12H10l-5 4v-4H4z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M8 8h8M8 12h5" stroke="currentColor" stroke-width="1.5"/></svg></span>',n.append(d);let f="",p={chat:!1,voice:!1,creator:!1,canon:[]},g=new Date(new Date().getFullYear(),new Date().getMonth(),1),_=en(),m="",h=null,E=!1,b=null,y=null,A=null,T="",w=!0,P="",v="",S=0,C=null,I=!1;const F=__({dialog:u,getState:e,save:i,api:V,getStatus:()=>p,isOpen:()=>u.open&&f==="stories"});let z="",X=null;function Y(){X==null||X.dispose(),X=null}function N(){X==null||X.setState(E?z?"replying":"thinking":P?"listening":"idle")}let B=Ba[0],W=0,D=0;async function V(re,ye,oe){const Me=await fetch(Oa+re,{method:ye?"POST":"GET",headers:ye?{"Content-Type":"application/json"}:void 0,body:ye?JSON.stringify(ye):void 0,signal:oe}),Pe=await Me.json();if(!Me.ok)throw new Error(Pe.error||"连接没有完成，请稍后再试。");return Pe}async function q(){try{p=await V("/status")}catch{p={chat:!1,voice:!1,creator:!1,canon:[]}}u.open&&f==="chat"?Ee():u.open&&f==="book"&&!C?Be():u.open&&f==="stories"&&F.refresh()}const ue=()=>({kitchen:"baking",school:"course",classroom:"course",garden:"gather",shop:"shop",story:"story"})[t().view]??"home";function Se(){const re=t(),ye=re.collectionOpen||u.open||!!n.querySelector("#loading");if(d.hidden=ye||re.view!=="home"||!!re.panel,!d.hidden&&performance.now()>=D){const oe=Dn(e()).find(Pe=>Pe.title&&Pe.summary),Me=oe?[...Ba,{hint:"忽然想起「"+oe.title+"」了。",opening:"刚才翻着书，忽然想起「"+oe.title+"」。那段经历里，你最想再聊聊哪一刻？"}]:Ba;B=Me[W++%Me.length],d.querySelector(".character-reaction-text").textContent=B.hint,D=performance.now()+6500}}function Ne(){if(f!=="chat"){Ms(u,n);return}const re=n.getBoundingClientRect();u.style.setProperty("--book-left",`${re.left}px`),u.style.setProperty("--book-top",`${re.top}px`),u.style.setProperty("--book-width",`${re.width}px`),u.style.setProperty("--book-height",`${re.height}px`)}function ee(){Ne(),u.open||(S=performance.now(),s(!0),Ne(),u.showModal()),Se()}function ie(){y==null||y.abort(),A==null||A.pause(),A=null,T&&URL.revokeObjectURL(T),T="",u.classList.remove("speaking")}function xe(){u.open&&(Y(),F.leave(),b==null||b.abort(),ie(),E=!1,u.close(),f="",s(!1,performance.now()-S),Se())}u.addEventListener("cancel",re=>{re.preventDefault(),xe()}),window.addEventListener("resize",()=>{u.open&&Ne()});function Re(re){f="chat",I=!1,v="",P="";const ye=t(),oe=e();h=re?structuredClone(re):{id:crypto.randomUUID(),title:Bc[ue()],summary:"",activity:ue(),day:oe.day,slot:oe.slot,kind:"branch",messages:[],createdAt:new Date().toISOString(),outfit:oe.outfit},re&&(re.kind==="canon"||en(new Date(re.createdAt))!==en())&&(h.id=crypto.randomUUID(),h.kind="branch",h.createdAt=new Date().toISOString(),h.parentId=re.id,delete h.canonId),h.activity=ue(),re||(h.messages=[{role:"assistant",content:h.activity==="home"?B.opening:x_[h.activity]}]),h.currentContext={...ye,activity:ue()},ee(),Ee(),q()}d.onclick=()=>Re();function Ee(){var R;const re=(R=u.querySelector(".stream-text-reveal"))==null?void 0:R.parentElement;ru(re),u.className="companion-chat",u.style.setProperty("--chat-background",`url("${rs(ss[h.activity]??"home-bg")}")`);const ye=h.messages.filter(x=>x.role==="assistant").at(-1),oe=I?h.messages:E&&z?[{role:"assistant",content:z}]:ye?[ye]:[];u.innerHTML=`<button class="book-close" data-co="close" aria-label="结束对话">×</button><div class="chat-heading"><span>${Tt(Bc[h.activity])}</span></div><aside class="chat-tools"><button data-co="history" aria-pressed="${I}">${v_.history}${I?"收起":"记录"}</button></aside><span class="portrait-slot"></span><section class="chat-paper ${I?"history-open":""}" aria-label="角色对话"><div class="chat-scroll" aria-live="polite">${oe.length?oe.map(x=>`<div class="chat-line ${x.role}"><small>${x.role==="user"?"你":"松团子"}</small>${x.narration?`<p class="narration">${Tt(x.narration)}</p>`:""}<p>${Tt(x.content)}</p></div>`).join(""):'<div class="chat-line assistant"><small>松团子</small><p class="chat-invitation">${escape(reaction.opening)}</p></div>'}${E?'<p class="chat-status">松团子正在回应…</p>':""}</div><div class="voice-controls" ${p.voice?"":"hidden"}><button data-co="voice">${w?"♫ 配音开":"♫ 配音关"}</button>${ye&&p.voice?'<button data-co="replay">重听</button>':""}</div>${p.chat?"":'<p class="connection-note">豆包暂未连接，你可以先写下想法。</p>'}${v?`<p class="chat-error" role="alert">${Tt(v)}</p>`:""}<form id="chat-form"><label class="visually-hidden" for="chat-input">我想说的话或行动</label><textarea id="chat-input" maxlength="800" rows="1" placeholder="说说你的想法…">${Tt(P)}</textarea><button type="submit" aria-label="发送" ${E||!p.chat?"disabled":""}>${E?"…":"发送"}</button></form><div class="chat-footer"><button data-co="close">结束对话</button></div></section>`,X??(X=h_(a(),e().outfit)),u.querySelector(".portrait-slot").replaceWith(X.canvas),N();const Me=u.querySelector(".chat-line.assistant p:not(.narration)");!I&&re&&Me&&re.textContent===Me.textContent&&Me.replaceWith(re);const Pe=u.querySelector("#chat-input");Pe.style.height="auto",Pe.style.height=Pe.scrollHeight+"px";const qe=u.querySelector(".chat-scroll");qe.scrollTop=qe.scrollHeight}async function Ge(re){if(ie(),!(!w||!p.voice)){y=new AbortController;try{const ye=await fetch(Oa+"/voice",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:re}),signal:y.signal});if(!ye.ok)throw new Error("这次配音未能播放，可以稍后重听。");T=URL.createObjectURL(await ye.blob()),A=new Audio(T),A.volume=.8,A.onended=()=>u.classList.remove("speaking"),await A.play(),u.classList.add("speaking")}catch(ye){ye.name!=="AbortError"&&u.open&&(v="配音未播放，文字已保留；可以点击重听。",Ee())}}}async function dt(){var oe,Me;if(E||!p.chat||!P.trim())return;const re=P.trim(),ye=h.id;E=!0,z="",v="",ie(),b=new AbortController,Ee();try{const Pe=e(),qe=await su(await fetch(Oa+"/chat",{method:"POST",headers:{"Content-Type":"application/json"},signal:b.signal,body:JSON.stringify({stream:!0,messages:[...h.messages.slice(-30).map(({role:$,content:te})=>({role:$,content:te})),{role:"user",content:re}],context:{...h.currentContext,day:Pe.day,slot:Pe.slot,mood:Pe.mood,energy:Pe.energy,outfit:Pe.outfit,inventory:Pe.inventory,memories:(Pe.memories??[]).slice(-12).map(({title:$,summary:te,event:de})=>({title:$,summary:te,event:de}))}})}),$=>{var de;if(!u.open||f!=="chat"||h.id!==ye||b.signal.aborted)return;const te=!z;if(z=$,te&&(Ee(),I||(de=u.querySelector(".chat-line.assistant p"))==null||de.replaceChildren()),!I){const ne=u.querySelector(".chat-line.assistant p");ne&&iu(ne,$)}});if(!u.open||f!=="chat"||h.id!==ye)return;h.messages.push({role:"user",content:re},{role:"assistant",content:qe.dialogue,narration:qe.narration}),h.summary=((oe=qe.event)==null?void 0:oe.summary)||h.summary||qe.dialogue,h.title=((Me=qe.event)==null?void 0:Me.title)||h.title,qe.event&&(h.event=qe.event),h.updatedAt=new Date().toISOString();const R={...h};delete R.currentContext,Pe.memories??(Pe.memories=[]);const x=Pe.memories.findIndex($=>$.id===h.id);x<0?Pe.memories.push(R):Pe.memories[x]=R,qc(Pe,"chat:"+en()),i(),P="",E=!1,Ee(),u.dataset.emotion=qe.emotion,Ge(qe.dialogue)}catch(Pe){Pe.name!=="AbortError"&&(v=Pe.message,z="",E=!1,u.open&&Ee())}}function L(){Y(),b==null||b.abort(),ie(),E=!1,f="stories",C=null,ee(),F.open(),q()}function et(){Y(),F.leave(),b==null||b.abort(),ie(),E=!1,f="book",g=new Date(new Date().getFullYear(),new Date().getMonth(),1),_=en(),m="",C=null,ee(),Be(),q()}function Be(){var ne,Le,ve;u.className="memory-book book-panel";const re=e(),ye=Dn(re),oe=en(),Me=g.getFullYear(),Pe=g.getMonth(),qe=new Date(Me,Pe+1,0).getDate(),R=(g.getDay()+6)%7,x=ye.filter(O=>!m||`${O.title} ${O.summary} ${JSON.stringify(O.event??{})}`.includes(m)),$=Array.from({length:R},()=>"<span></span>").concat(Array.from({length:qe},(O,he)=>{var me;const j=en(new Date(Me,Pe,he+1)),se=ye.filter(pe=>pe.createdAt&&en(new Date(pe.createdAt))===j),be=se[0];return`<button class="calendar-day ${j===oe?"today":""} ${j===_?"selected":""} ${be?"has-memory":""}" data-co="day" data-date="${j}" aria-label="${j}${se.length?`，${se.length}段经历`:""}" ${j===oe?'aria-current="date"':""}>${be?`<img src="${rs(ss[be.activity]??"home-bg")}" alt="">`:""}<span>${he+1}</span>${se.length?`<small>${se.length}段</small>`:""}${(me=re.memoryStamps)!=null&&me.includes(j)?"<i>✦</i>":""}</button>`})).join(""),te=m?x:ye.filter(O=>O.createdAt&&en(new Date(O.createdAt))===_),de=ye.filter(O=>!O.createdAt);u.innerHTML=`${gr("memories")}<div class="book-body"><div class="month-controls"><button data-co="prev" aria-label="上个月">‹</button><h3>${Me} 年 ${Pe+1} 月</h3><button data-co="next" aria-label="下个月">›</button></div><div class="calendar-week">${["一","二","三","四","五","六","日"].map(O=>`<span>${O}</span>`).join("")}</div><div class="calendar-grid">${$}</div><p class="calendar-legend">◎ 今天　✦ 已盖经历章　按现实日期记录</p><div class="memory-reward"><div><b>已陪伴 ${((ne=re.memoryStamps)==null?void 0:ne.length)??0} 天</b><small>${(Le=re.memoryStamps)!=null&&Le.includes(oe)?"今天的经历章，已经收好。":"完成一次活动或留下一段剧情，即可盖章。"}</small></div><button class="button" data-co="claim" ${Hu(re)?"":"disabled"}>${(ve=re.memoryStamps)!=null&&ve.includes(oe)?"今日已盖章":"盖章 · 领取 5 ◈"}</button></div><label class="memory-search">⌕ <input id="memory-search" value="${Tt(m)}" placeholder="找人物、地点、某段经历" aria-label="搜索回忆"></label><h3 class="day-heading">${m?"找到的回忆":_+" 的经历"}</h3><div class="memory-list">${te.map(O=>`<button class="memory-card" data-co="detail" data-id="${O.id}"><img src="${rs(ss[O.activity]??"home-bg")}" alt=""><span><small>${O.kind==="life"?"日常经历":O.kind==="canon"?"已收录主线":"共创支线"} · 游戏第 ${O.day} 天</small><b>${Tt(O.title)}</b><em>${Tt(O.summary.slice(0,70))}</em></span></button>`).join("")||'<p class="empty-memory">这一天的纸页还空着。去过好今天，再回来留下一幅回忆。</p>'}</div>${de.length?`<details><summary>以前的经历 · 未记录现实日期</summary>${de.map(O=>`<p>第 ${O.day} 天 · ${Tt(O.title)}</p>`).join("")}</details>`:""}<details><summary>主人设定的主线 · 秋收祭前的七天</summary><p>通过课程、烘焙、森林采集与小铺营业成长，带着亲手制作的甜点参加第七天的秋收祭。</p>${p.canon.map(O=>`<article><b>${Tt(O.title)}</b><p>${Tt(O.summary)}</p><small>共创作者：${Tt(O.author)}</small></article>`).join("")}</details><button class="book-text-button" data-co="album">剧情与 奇遇探索</button><button class="book-text-button" data-co="stats">查看成长数值</button></div>`}function Fe(re){const ye=Dn(e()).find(oe=>oe.id===re);ye&&(C=re,u.className="memory-book book-panel",u.innerHTML=`${gr("memories")}<div class="book-body"><button class="book-text-button" data-co="book">‹ 回到月历</button><img class="memory-cover" src="${rs(ss[ye.activity]??"home-bg")}" alt="故事发生的场景"><small>${ye.kind==="life"?"日常经历":ye.kind==="canon"?"已收录主线":"共创支线"} · 游戏第 ${ye.day} 天</small><h2>${Tt(ye.title)}</h2><p>${Tt(ye.summary)}</p>${ye.messages?`<button class="button wide" data-co="continue" data-id="${ye.id}">${ye.cg?"重温奇遇":"继续这段对话"}</button><details><summary>回看当时的对话</summary>${ye.messages.map(oe=>`<p><b>${oe.role==="user"?"你":"松团子"}：</b>${Tt(oe.content)}</p>`).join("")}</details>`:""}${p.creator&&ye.kind==="branch"?`<details><summary>本机创作者 · 整理为主线</summary><p>确认后保存到本机主线库。公开共享需接入线上主线服务。</p><label>标题<input id="canon-title" maxlength="60" value="${Tt(ye.title)}"></label><label>确认生效的剧情<textarea id="canon-summary" maxlength="2000" rows="5">${Tt(ye.summary)}</textarea></label><label>共创作者<input id="canon-author" maxlength="60" placeholder="填写署名"></label><button class="button" data-co="canon">确认收录这个版本</button></details>`:""}<p class="chat-error" id="detail-error" role="alert"></p></div>`)}return u.addEventListener("input",re=>{if(re.target.id==="chat-input"&&(P=re.target.value,N(),re.target.style.height="auto",re.target.style.height=re.target.scrollHeight+"px"),re.target.id==="memory-search"){m=re.target.value;const ye=re.target.selectionStart;Be();const oe=u.querySelector("#memory-search");oe.focus(),oe.setSelectionRange(ye,ye)}}),u.addEventListener("submit",re=>{re.target.id==="chat-form"&&(re.preventDefault(),dt())}),u.addEventListener("click",async re=>{const ye=re.target.closest("[data-co]");if(!ye||ye.disabled)return;const oe=ye.dataset.co;if(oe==="album"&&(xe(),l()),oe==="close"&&xe(),oe==="history"&&(I=!I,Ee()),oe==="book"&&(F.leave(),C=null,f="book",Be()),(oe==="prev"||oe==="next")&&(g=new Date(g.getFullYear(),g.getMonth()+(oe==="next"?1:-1),1),Be()),oe==="day"&&(_=ye.dataset.date,Be()),oe==="detail"&&Fe(ye.dataset.id),oe==="claim"&&m_(e())&&(i(),r(),Be()),oe==="voice"&&(w=!w,w||ie(),Ee()),oe==="replay"&&Ge(h.messages.filter(Me=>Me.role==="assistant").at(-1).content),oe==="continue"){const Me=e().memories.find(Pe=>Pe.id===ye.dataset.id);Me!=null&&Me.cg?(xe(),c(Me.cg)):Re(Me)}if(oe==="stats"&&(xe(),o("stats")),oe==="canon"){ye.disabled=!0;try{const Me=await V("/canon",{title:u.querySelector("#canon-title").value,summary:u.querySelector("#canon-summary").value,author:u.querySelector("#canon-author").value}),Pe=e().memories.find(qe=>qe.id===C);Pe.kind="canon",Pe.canonId=Me.entry.id,i(),p.canon.push(Me.entry),Fe(C)}catch(Me){u.querySelector("#detail-error").textContent=Me.message,ye.disabled=!1}}}),q(),{openBook:et,openStories:L,openChat:Re,updateEntry:Se,get opened(){return u.open},close:xe}}const bs=new Set,ms=new Map;function ka(){const n=document.querySelector("#loading");if(!n||n.dataset.failed)return;let e=n.querySelector(".video-load-status");e||(e=document.createElement("small"),e.className="video-load-status",e.style.cssText="display:block;margin:12px 20px;font-size:12px;line-height:1.6",n.append(e)),e.textContent=[...ms.values()].filter(Boolean).join(" · ");let t=n.querySelector(".video-unlock");t||(t=document.createElement("button"),t.className="video-unlock",t.textContent="点此启用动画",t.style.cssText="margin-top:16px;padding:10px 20px;background:#f4e8cf;color:#365747;border:0;border-radius:6px",t.onclick=()=>{for(const i of bs)i.play().catch(()=>{})},n.append(t)),t.hidden=bs.size===0}async function Vu(n,e,t,i){ms.set(n,`${i}：下载中`),ka();let r,s;try{if(r=await fetch(e,{signal:AbortSignal.timeout(9e4)}),!r.ok)throw new Error(`HTTP ${r.status}`);s=await r.blob()}catch(a){throw new Error(`${i}下载未完成，请切换 Wi-Fi / 移动网络后重试。`,{cause:a})}ms.set(n,`${i}：准备画面`),bs.add(n),ka(),n.setAttribute("playsinline",""),n.setAttribute("muted",""),n.setAttribute("aria-hidden","true"),n.style.cssText="position:fixed;width:1px;height:1px;left:0;bottom:0;opacity:.001;pointer-events:none",document.body.append(n),await new Promise((a,o)=>{const l=["loadedmetadata","loadeddata","canplay","seeked"];let c=!1;const u=setTimeout(()=>d(new Error(`${i}未能准备画面，请刷新后点击「点此启用动画」。`)),3e4);function d(g){clearTimeout(u),l.forEach(_=>n.removeEventListener(_,p)),n.removeEventListener("error",f),bs.delete(n),n.pause(),ms.delete(n),ka(),g?o(g):a()}function f(){var g;d(new Error(`${i}无法解码：${((g=n.error)==null?void 0:g.message)||"浏览器不支持此视频"}`))}function p(){if(!c&&n.readyState>=1&&(c=!0,Math.abs(n.currentTime-t)>.01)){n.currentTime=t;return}c&&n.readyState>=2&&!n.seeking&&Math.abs(n.currentTime-t)<.1&&d()}l.forEach(g=>n.addEventListener(g,p)),n.addEventListener("error",f),n.src=URL.createObjectURL(s),n.load()})}function b_(){const n=new Set(["berry","acorn","crouch","mushroom"]),e={},t=matchMedia("(prefers-reduced-motion: reduce)");let i="berry",r="berry",s=!1,a=!1,o=!1,l=!1,c=null,u=1,d=performance.now(),f=0;const p=Promise.all(["approach","berry","pick","acorn","crouch","jump","mushroom","harvest"].map(async m=>{const h=document.createElement("video");h.muted=!0,h.playsInline=!0,h.loop=n.has(m),h.playbackRate=m==="berry"?.1:1,h.preload="auto",await Vu(h,`/acorn-witch-atelier/assets/2d/gather/${m}.mp4?v=mobile-header-22`,0,"采集"+{approach:"走近",berry:"待机",pick:"摘果",acorn:"摇头",crouch:"蓄力",jump:"跳跃",mushroom:"蘑菇",harvest:"收获"}[m]);const E=new hs(h);E.colorSpace=xt,e[m]={video:h,texture:E},h.onended=()=>{i===m&&(m==="approach"?_("berry"):l=!0)}}));function g(){s&&!a&&!document.hidden&&!t.matches&&!l&&!o&&e[i].video.play().catch(m=>{m.name!=="AbortError"&&console.error(m)})}function _(m){const h=++f;r=m,l=!1,o=!0;const E=e[i],b=e[m];E.video.pause();const y=()=>{h!==f||!s||(c=i!==m?E.texture:null,i=m,u=c?0:1,d=performance.now(),o=!1,g())};b.video.currentTime>0?(b.video.addEventListener("seeked",y,{once:!0}),b.video.currentTime=0):y()}return document.addEventListener("visibilitychange",()=>{var m;document.hidden?(m=e[i])==null||m.video.pause():g()}),{ready:p,play:_,enter(){s=!0,_(t.matches?"berry":"approach")},leave(){s=!1,f++,o=!1;for(const m of Object.values(e))m.video.pause()},setPaused(m){var h;a=m,d=performance.now(),m?(h=e[i])==null||h.video.pause():g()},tick(){const m=performance.now();s&&!a&&!document.hidden&&(u=Math.min(1,u+(m-d)/160)),d=m},get texture(){var m;return(m=e[i])==null?void 0:m.texture},get previousTexture(){return c},get blend(){return 1-u},info(){var m,h;return{action:r,time:((m=e[i])==null?void 0:m.video.currentTime)??0,active:s,seeking:o,complete:l||t.matches,paused:((h=e[i])==null?void 0:h.video.paused)??!0,muted:!0,source:"reference-video",loop:n.has(i)}}}}function za(n,e,t,i){const r=document.createElement("video");r.muted=!0,r.playsInline=!0,r.preload="auto";const s=matchMedia("(prefers-reduced-motion: reduce)");let a=!1,o=t,l=!1,c=!1;const u=Vu(r,n,e[t][0],i);function d(){a&&!c&&!l&&!document.hidden&&!s.matches&&r.play().catch(g=>{g.name!=="AbortError"&&console.error("参考动作无法播放",g)})}r.addEventListener("seeked",d);function f(g,_=!1){r.pause(),r.muted=!_,o=g,l=!1,r.currentTime=e[o][0]}function p(){if(!a||c||l||r.seeking||s.matches)return;const[g,_,m]=e[o];r.currentTime>=_-(m?0:.025)&&(m?r.currentTime=g:(r.pause(),l=!0))}return document.addEventListener("visibilitychange",()=>{document.hidden?r.pause():r.seeking||d()}),s.addEventListener("change",()=>{a&&f(o)}),{video:r,ready:u,tick:p,play:f,setPaused(g){c=g,g?r.pause():r.seeking||d()},enter(){a=!0,f(t)},leave(){a=!1,r.pause(),r.muted=!0},info(){return{action:o,time:r.currentTime,active:a,seeking:r.seeking,complete:l||s.matches,paused:r.paused,muted:r.muted,source:"reference-video"}}}}const on=720,It=1280,S_=["standing","reading","cooking","tasting"],as=["home-bg","home-arm-side","kitchen-bg","forest-bg","dressing-bg","school-bg","classroom-frame-v2","classroom-clean-top","feedback-plate",...qi.flatMap(n=>S_.map(e=>n.id==="acorn"?`girl-${e}`:`girl-${n.id}-${e}`)),"tart"],Ha={"girl-standing":[[.385,.378],[.565,.362]],"girl-reading":[[.474,.388],[.606,.386]],"girl-cooking":[[.43,.384],[.613,.369]]};function M_(n,e=()=>{}){const t=new ku({canvas:n,antialias:!0,alpha:!1,preserveDrawingBuffer:!0});t.setPixelRatio(Math.min(devicePixelRatio,2)),t.setClearColor("#354b36");const i=new Cu,r=new el(-360,360,640,-640,.1,20);r.position.z=10;const s={},a={},o={},l={},c={},u={},d={};let f=null,p=null,g=!1,_=-1e3,m=-1e4,h="",E=!0,b="home",y="idle",A="acorn",T=!1,w=0,P=!1,v,S=0,C=performance.now();const I=za("/acorn-witch-atelier/assets/2d/classroom-motion-v2.mp4",{listen:[4.95,5.2,!0],think:[5.15,6.25,!0],correct:[8.75,10.15,!1],retry:[7.1,8.42,!1],celebrate:[12.35,13.7,!1]},"listen","上课"),F=new hs(I.video);F.colorSpace=xt;const z=za("/acorn-witch-atelier/assets/2d/baking-motion-v2.mp4",{prepare:[4.05,4.15,!1],ingredients:[4.18,6.02,!1],mix:[6.15,7.1,!0],mixed:[6.8,7.1,!1],bake:[8.75,9.85,!0],spell:[9.4,9.85,!0],taste:[10.1,13.72,!1]},"prepare","烘焙"),X=new hs(z.video);X.colorSpace=xt;const Y=b_(),N=matchMedia("(prefers-reduced-motion: reduce)"),B=new vt(new Nt(on,It),new Yt({depthTest:!1}));i.add(B);const W=za("/acorn-witch-atelier/assets/2d/shop-motion.mp4",{welcome:[.05,1.05,!0],child:[1.35,2.65,!0],queue:[4.18,5.85,!0],vip:[9.18,9.85,!0],positive:[7.58,8.35,!1],negative:[6.1,7,!1],summary:[12.85,14.02,!1],closing:[14.3,15.02,!1]},"welcome","小铺"),D=new hs(W.video);D.colorSpace=xt;const V=new vt(new Nt(on,It),new Yt({transparent:!0,depthTest:!1,depthWrite:!1}));V.renderOrder=1,V.visible=!1,i.add(V);const q=[],ue=[];let Se,Ne;const ee=new vt(new Nt(on,It*(1-.716)),new Yt({depthTest:!1,transparent:!0}));ee.position.y=-It*.716/2,ee.renderOrder=3,i.add(ee);const ie=new vt(new Nt(on,It),new Yt({transparent:!0,depthTest:!1,depthWrite:!1}));ie.renderOrder=4,i.add(ie);const xe=document.createElement("canvas");xe.width=256,xe.height=128;const Re=xe.getContext("2d");Re.scale(1,.5);const Ee=Re.createRadialGradient(128,128,20,128,128,128);Ee.addColorStop(0,"#231a12aa"),Ee.addColorStop(1,"#231a1200"),Re.fillStyle=Ee,Re.fillRect(0,0,256,256);const Ge=new vt(new Nt(320,90),new Yt({map:new fr(xe),transparent:!0,depthTest:!1,opacity:.62}));Ge.position.set(-10,-285,0),Ge.renderOrder=1,i.add(Ge);const dt=(O,he=2)=>{const j=new vt(new Nt(1,1,36,52),new Yt({map:O,transparent:!0,depthTest:!1,depthWrite:!1}));return j.renderOrder=he,i.add(j),j};function L(O){var be;const he=O.split("-").at(-1),j=((be=Hi[O])==null?void 0:be.eyes)??Ha[`girl-${he}`],se=zu(dt(s[O]),O,j);return a[O]=se,se}const et=document.createElement("canvas");et.width=et.height=64;const Be=et.getContext("2d"),Fe=Be.createRadialGradient(32,32,0,32,32,32);Fe.addColorStop(0,"#fff7d7"),Fe.addColorStop(.15,"#ffe2a0cc"),Fe.addColorStop(1,"#ffe2a000"),Be.fillStyle=Fe,Be.fillRect(0,0,64,64);const re=new Bn,ye=new Float32Array(34*3);re.setAttribute("position",new hn(ye,3));const oe=new Mf(re,new Pu({map:new fr(et),color:"#ffe5b0",size:10,transparent:!0,opacity:.45,depthTest:!1,depthWrite:!1,sizeAttenuation:!1}));oe.renderOrder=5,i.add(oe);function Me(O,he,j,se){O.scale.set(se*O.material.map.image.width/O.material.map.image.height,se,1),O.position.set(he-360,640-j-se/2,0)}function Pe(){if(!P)return;const O=b==="shop",he=b==="classroom",j=b==="school",se=b==="kitchen",be=b==="garden"||b==="festival",me=["wardrobe","portrait"].includes(b),pe=se&&z.info().active,Ue=b==="garden",U=me&&performance.now()-m<180?h:A;B.material.map=Ue?Y.texture:O?D:he?F:pe?X:s[j?"school-bg":me?"dressing-bg":se?"kitchen-bg":be?"forest-bg":"home-bg"],B.material.needsUpdate=!0,ee.visible=se&&!pe,oe.visible=!O&&!he&&!pe&&!Ue;for(const fe of ue)fe.visible=pe;for(const fe of q)fe.visible=he;ie.visible=["home","story"].includes(b),Ge.visible=ie.visible||me,Ge.position.y=640-(me?1080:925),Ge.scale.set(me?.7:1,me?.5:1,1),ie.material.map=s["home-arm-side"],ie.material.needsUpdate=!0,se&&(ee.material.map=s.counter,ee.material.needsUpdate=!0);for(const fe of Object.values(a))fe.visible=!1;let le="girl-standing";se?le=y==="taste"?"girl-tasting":"girl-cooking":["home","story"].includes(b)&&(le="girl-reading"),U!=="acorn"&&(le=le.replace("girl-",`girl-${U}-`)),p&&!se&&(le=`girl-custom-${p}-${le.endsWith("-reading")?"reading":"standing"}`);const ge=a[le];ge.visible=!O&&!j&&!he&&!pe&&!Ue,se?Me(ge,335,195,1110):le.endsWith("-reading")?Me(ge,345,245,930):me?Me(ge,355,b==="wardrobe"?175:152,b==="wardrobe"?730:940):Me(ge,350,235,be?880:925),v.visible=b==="home"&&T,oe.material.opacity=y==="bake"?.8:be?.65:.32}const qe=new Iu;let R=0;const x=Promise.all(["ribbon","moon","leaf"].map(async O=>{const he=new Image;he.src=`/acorn-witch-atelier/assets/rewards/part-${O}.webp`,await he.decode(),u[O]=he})),$=Promise.all([x,Y.ready,I.ready,z.ready,W.ready,...as.map(async O=>{var j;let he=await qe.loadAsync((j=Hi[O])!=null&&j.source?`/acorn-witch-atelier/${Hi[O].source}`:O==="girl-standing"?"/acorn-witch-atelier/assets/2d/girl-original.webp":O.startsWith("girl-")&&O.split("-").length===3?`/acorn-witch-atelier/assets/2d/outfits/${O.slice(5)}.webp`:`/acorn-witch-atelier/assets/2d/${O}.webp`);if(O.startsWith("girl-")){const se=he;he=kc(se.image,O),se.dispose()}he.colorSpace=xt,he.anisotropy=Math.min(4,t.capabilities.getMaxAnisotropy()),s[O]=he,e(++R,as.length)})]).then(()=>{for(const[me,pe,Ue]of[["classroom-clean-top",[[0,.16]],q],["classroom-frame-v2",[[.775,1]],q]])for(const[U,le]of pe){const ge=s[me].clone();ge.repeat.set(1,le-U),ge.offset.set(0,1-le),ge.needsUpdate=!0;const fe=new vt(new Nt(on,It*(le-U)),new Yt({map:ge,depthTest:!1}));fe.position.y=640-It*(U+le)/2,fe.renderOrder=1,me==="classroom-clean-top"&&(fe.material.transparent=!0,fe.material.onBeforeCompile=ae=>{ae.fragmentShader=ae.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
 diffuseColor.a *= smoothstep(0.84,0.85,vMapUv.y);`)}),i.add(fe),Ue.push(fe)}const O=document.createElement("canvas");O.width=W.video.videoWidth,O.height=W.video.videoHeight,O.getContext("2d").drawImage(W.video,0,0);const he=new fr(O);he.colorSpace=xt,he.repeat.set(1,.34),he.offset.set(0,.66),Ne=new vt(new Nt(on,It*.34),new Yt({map:he,depthTest:!1})),Ne.position.y=It*.33,Ne.renderOrder=1,Ne.visible=!1,i.add(Ne);const j=s["feedback-plate"].clone();j.repeat.set(.238,.12),j.offset.set(.762,1-.505),j.needsUpdate=!0,Se=new vt(new Nt(on*.238,It*.12),new Yt({map:j,depthTest:!1})),Se.position.set(on*(.881-.5),It*(.5-.445),0),Se.renderOrder=1,Se.visible=!1,i.add(Se);const se=new vt(new Nt(on,It*.04),new Yt({color:"#513a27",depthTest:!1}));se.position.y=-It*.48,se.renderOrder=1,i.add(se),ue.push(se);const be=s["kitchen-bg"].clone();be.repeat.set(1,1-.716),be.offset.set(0,0),be.needsUpdate=!0,s.counter=be;for(const me of as.filter(pe=>pe.startsWith("girl-"))){const pe=document.createElement("canvas");pe.width=s[me].image.width,pe.height=s[me].image.height,pe.getContext("2d").drawImage(s[me].image,0,0),c[me]=pe,L(me)}te();for(const me of qi){const pe=document.createElement("canvas");pe.width=110,pe.height=210;const Ue=s[me.id==="acorn"?"girl-standing":`girl-${me.id}-standing`].image,U=Math.min(110/Ue.width,210/Ue.height);pe.getContext("2d").drawImage(Ue,(110-Ue.width*U)/2,0,Ue.width*U,Ue.height*U),o[me.id]=pe.toDataURL()}v=dt(s.tart,1),Me(v,642,779,110),P=!0,Pe(),Le()});function te(){var O;for(const[he,j]of Object.entries(c)){const se=s[he].image,be=se.getContext("2d"),me=se.width,pe=se.height,Ue=he.split("-").at(-1),U=((O=Hi[he])==null?void 0:O.eyes)??Ha["girl-"+Ue]??Ha["girl-standing"];if(be.clearRect(0,0,me,pe),be.drawImage(j,0,0),delete l[he],f){const le=u[f],ge=U[1];if(f==="moon")for(const fe of U){const ae=le.width/2;be.drawImage(le,fe===U[0]?0:ae,0,ae,le.height,me*(fe[0]+(fe===U[0]?-.12:.12))-.025*me,pe*(fe[1]+.075),me*.05,me*.05*le.height/ae)}else{const fe=me*(f==="ribbon"?.14:.105);be.drawImage(le,me*(ge[0]+.055),pe*(ge[1]-.13),fe,fe*le.height/le.width)}}s[he].needsUpdate=!0}}function de(){const{width:O,height:he}=n.getBoundingClientRect();t.setSize(O,he,!1);const j=Math.max(O/on,he/It);n.parentElement.style.setProperty("--scene-width",`${on*j}px`),n.parentElement.style.setProperty("--scene-height",`${It*j}px`),n.parentElement.style.setProperty("--scene-visible-width",`${O}px`),r.left=-O/j/2,r.right=O/j/2,r.top=he/j/2,r.bottom=-he/j/2,r.updateProjectionMatrix()}new ResizeObserver(de).observe(n),de();function Le(){Y.tick(),V.visible=b==="garden"&&Y.blend>0,b==="garden"&&(B.material.map=Y.texture,V.material.map=Y.previousTexture,V.material.opacity=Y.blend),I.tick(),z.tick(),W.tick(),Ne.visible=b==="shop"&&["summary","closing"].includes(y),Se.visible=b==="kitchen"&&y==="taste"&&z.info().time>=12.38;const O=N.matches?0:S,he=performance.now()<w?1:0,j=(performance.now()-m)/1e3,se=["wardrobe","portrait"].includes(b),be=S-_,me=(fe,ae)=>be>fe&&be<ae?Math.sin((be-fe)/(ae-fe)*Math.PI):0,pe=be%12,Ue=pe>7&&pe<10?Math.sin((pe-7)/3*Math.PI):0,U=se&&!N.matches?me(.5,2.8)+Ue*.16:0,le=se&&!N.matches?me(2,4.4)+Ue*.3:0,ge=se&&!N.matches?me(.3,4.6)*Math.sin(be*1.6)+Math.sin(O*.85)*.15:0;!E&&j>=.18&&(E=!0,Pe());for(const fe of Object.values(a))if(fe.visible){fe.material.opacity=!N.matches&&se&&j<.45?1-Math.max(0,1-Math.abs(j-.18)/.18)*.92:1;const ae=fe.userData.uniforms;ae.showcase.value.set(U,le,ge),ae.time.value=O,ae.moving.value=y==="mix"&&!N.matches?1:0,ae.joy.value=he&&!N.matches?1:0;const ce=O%5.6;ae.blink.value=!N.matches&&ce>4.9&&ce<5.1?Math.sin((ce-4.9)/.2*Math.PI):0,se&&!N.matches&&(ae.blink.value=Math.max(ae.blink.value,me(3.1,3.45)))}for(let fe=0;fe<34;fe++){const ae=fe*167.39%720-360;ye[fe*3]=ae+Math.sin(O*.3+fe)*14,ye[fe*3+1]=(fe*97+O*(y==="bake"?45:10))%1280-640,ye[fe*3+2]=1}if(se&&j>=0&&j<.65&&!N.matches){for(let fe=0;fe<34;fe++){const ae=fe*2.399;ye[fe*3]=Math.cos(ae)*(70+fe*4+j*190),ye[fe*3+1]=80+Math.sin(ae)*(140+fe*9+j*120)}oe.material.size=18*(1-j/.8),oe.material.opacity=1-j/.7}else oe.material.size=10,oe.material.opacity=y==="bake"?.8:["garden","festival"].includes(b)?.65:.32;re.attributes.position.needsUpdate=!0,t.render(i,r)}function ve(O){!document.hidden&&!g&&(S+=Math.min((O-C)/1e3,.1),P&&Le()),C=O,requestAnimationFrame(ve)}return requestAnimationFrame(ve),{ready:$,async prepareCustom(O){d[O.id]||(await Promise.all(["standing","reading"].map(async he=>{const j=new Image;j.src=O[he],await j.decode();const se="girl-custom-"+O.id+"-"+he,be=kc(j,se);be.colorSpace=xt,s[se]=be;const me=document.createElement("canvas");me.width=be.image.width,me.height=be.image.height,me.getContext("2d").drawImage(be.image,0,0),c[se]=me,L(se)})),d[O.id]=O,te(),Pe())},customPreview(O){var he;return((he=s["girl-custom-"+O+"-standing"])==null?void 0:he.image.toDataURL("image/png"))??""},setCustom(O){p=O&&d[O]?O:null,Pe()},setAccessory(O){f=O,te()},setPaused(O){g=O,I.setPaused(O),z.setPaused(O),W.setPaused(O),Y.setPaused(O)},getDialoguePortrait(){if(p)return s["girl-custom-"+p+"-standing"].image.toDataURL("image/png");const O=A==="acorn"?"girl-standing":`girl-${A}-standing`;return l[O]??(l[O]=s[O].image.toDataURL("image/png"))},showcase(){_=S},setMode(O){["wardrobe","portrait"].includes(O)&&!["wardrobe","portrait"].includes(b)&&(_=S),Y.leave(),z.leave(),b==="shop"&&O!=="shop"&&W.leave(),b==="classroom"&&O!=="classroom"&&I.leave(),b=O,y="idle",b==="garden"&&Y.enter(),b==="classroom"&&I.enter(),b==="shop"&&W.enter(),Pe()},setAction(O){y=O,b==="garden"&&Y.play(O),b==="shop"&&W.play(O),b==="classroom"&&I.play(O),b==="kitchen"&&(z.info().active||z.enter(),z.play(O,O==="taste")),Pe()},setOutfit(O){O!==A&&["wardrobe","portrait"].includes(b)&&!N.matches&&(_=S+.45,h=A,m=performance.now(),E=!1),A=O,Pe()},setDessert(O){T=O,P&&(v.visible=b==="home"&&T)},happy(){w=performance.now()+2600},capture(){return Le(),n.toDataURL("image/png")},getOutfitPreview(O,he=!1){if(!he)return o[O]??"";const j=O==="acorn"?"girl-standing":`girl-${O}-standing`;return l[j]??(l[j]=s[j].image.toDataURL("image/png"))},getInfo(){var O;return{renderer:"2d-illustration",mode:b,action:y,outfit:A,accessory:f,customId:p,dessert:T,wardrobeMotion:{active:["wardrobe","portrait"].includes(b)&&!N.matches&&S-_<4.6,elapsed:S-_},gatherMotion:Y.info(),shopMotion:W.info(),classroomMotion:I.info(),bakingMotion:z.info(),sprite:(O=Object.values(a).find(he=>he.visible))==null?void 0:O.userData.key,assets:P?as.length:0,drawCalls:t.info.render.calls}}}}function kc(n,e){var p;const t=document.createElement("canvas");t.width=n.width,t.height=n.height;const i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(n,0,0);const r=i.getImageData(0,0,t.width,t.height),s=r.data,a=t.width,o=t.height;if(s[3]<20)return new fr(t);const l=new Uint8Array(a*o),c=new Int32Array(a*o);let u=0,d=0;function f(g){if(g<0||g>=a*o||l[g])return;l[g]=1;const _=g*4,m=s[_],h=s[_+1],E=s[_+2];Math.min(m,h,E)<(e==="girl-standing"?242:225)||Math.max(m,h,E)-Math.min(m,h,E)>10||(c[d++]=g)}for(let g=0;g<a;g++)f(g),f((o-1)*a+g);for(let g=0;g<o;g++)f(g*a),f(g*a+a-1);for(const[g,_]of((p=Hi[e])==null?void 0:p.seeds)??[])f(Math.floor(_*o)*a+Math.floor(g*a));for(;u<d;){const g=c[u++];s[g*4+3]=0,g%a&&f(g-1),g%a<a-1&&f(g+1),f(g-a),f(g+a)}if(e==="girl-standing")for(let g=0;g<o;g++)for(let _=0;_<a;_++)(_<a*.22&&g<o*.075||_>a*.78&&g>o*.92)&&(s[(g*a+_)*4+3]=0);return i.putImageData(r,0,0),new fr(t)}function E_(n,e,t,i=()=>{}){const r=Sd(e),s=document.createElement("dialog");s.className="character-profile book-panel",s.setAttribute("aria-label","松团子的角色属性");let a;const o=()=>{var d;const c=jc(e),u=At(e).community.calls.includes([new Date().getFullYear(),new Date().getMonth()+1,new Date().getDate()].join("-"));s.innerHTML=`${gr("profile")}<div class="book-body profile-body"><section class="profile-identity"><img src="${t}" alt="松团子"><div><small>橡果小屋的主人</small><h2>松团子</h2><div class="character-level"><div class="level-heading"><span>角色等级 <b>Lv.${c.level}</b></span><button class="button" data-profile="call" ${u?"disabled":""}>${u?"已打call":"♡ 打 call"}</button></div><progress value="${c.percent}" max="100" aria-label="角色等级进度"></progress><p class="level-progress">${c.percent} / 100</p></div><p>来自森林的松鼠女孩，正在学习人类的生活。想把平凡的日子，烤成可以分享的甜蜜。</p></div></section><section class="level-details"><div class="level-sources"><div>作品丰富度 <strong>${c.richness}</strong></div><div>人气值 <strong>${c.popularity}</strong></div></div><details><summary>查看成长来源与作品体验</summary><p>每次发布或收录作品：丰富度 +20；合拍支线：+15；每次游玩：人气 +2；阅读作品：+2；每天打 call：+5。每累计 100 点提升一级。</p><p>预置内容：故事《橡果小屋的来信》、图像《森林合拍》、视频《清晨来到小镇》、二创《我们的第一支森林短片》。</p><div class="work-demo-actions">${[["story","发布故事"],["image","发布图像"],["video","发布视频"],["remix","收录二创"]].map(([f,p])=>`<button class="button subtle" data-publish="${f}" ${At(e).community.works.includes(f)?"disabled":""}>${p} · 体验</button>`).join("")}</div><p>Demo 使用预置作品，仅保存本机体验记录；正式版按作品发布、作者确认收录及跨用户互动统计。</p></details></section><section><h3>一点点长大 <small>当前属性</small></h3><div class="profile-skill"><div class="skill-progress"><span>擅长技能 · 魔法占卜</span><strong>${e.stats.magic}</strong><meter min="0" max="100" value="${e.stats.magic}" aria-label="魔法占卜"></meter></div><button class="button subtle" data-profile="fortune">为我占卜</button></div><div class="profile-stats">${Object.entries(pr).filter(([f])=>f!=="magic").map(([f,p])=>`<div><span>${p}</span><strong>${e.stats[f]}</strong><meter min="0" max="100" value="${e.stats[f]}" aria-label="${p}"></meter></div>`).join("")}</div><p class="profile-bond">好感 ${((d=e.collection)==null?void 0:d.bond)??0} · 体力 ${e.energy} · 心情 ${e.mood}</p></section><section class="profile-story"><h3>认识她</h3><h4>关键转折</h4><p>本该在树洞里睡到入秋的松团子，被森林砍伐声提前唤醒。熟悉的金色林道只剩树桩；她必须在入秋前攒够能量，让秋天重新回来。</p><h4>内核</h4><p>她想让森林再次长满秋木，让秋风带着桂香和烤栗子的甜味。为了留住熟悉的风景与同行的伙伴，她愿意拿出珍藏多年的橡果。</p><h4>日常</h4><p>随身带着三颗橡果，收集枫叶、热饮与点心里的细碎秋意。遇见愿意帮忙的新朋友，会晃着大尾巴靠近；收集到能量时，眼睛像落满星星。</p><h4>身份</h4><p>守护森林的秋天精灵，以橡果储存的秋日能量维持生命。如今住进橡果小屋，学习烘焙与魔法占卜，寻找让森林复苏的方法。</p></section><section><h3>奇遇探索 <small>已收录 ${r.count} / ${r.total}</small></h3><p class="profile-tip">${r.next?`下一段奇遇：${r.next.name}<br>${r.next.condition}`:"全部奇遇已探索，继续创造自己的故事吧。"}</p><ol>${Bt.map(f=>{var p;return`<li><b>${(p=e.collection)!=null&&p.cgs.includes(f.id)?"✓":"◇"} ${f.name}</b><span>${f.condition}</span></li>`}).join("")}</ol></section></div>`,s.querySelector(".book-close").onclick=()=>s.close()};o(),s.addEventListener("click",c=>{const u=c.target.closest("[data-profile],[data-publish]");if(!u||u.disabled)return;if(u.dataset.profile==="fortune"){tu(n,{state:e,save:i});return}const d=u.dataset.profile==="call"?Md(e):Ed(e,u.dataset.publish);i(),o();const f=document.createElement("p");f.className="profile-toast",f.setAttribute("role","status"),f.textContent=u.dataset.profile?"今天打Call已加入人气！":d?"预置作品已收录，丰富度 +20。":"这份作品已经收录。",s.append(f),clearTimeout(a),a=setTimeout(()=>f.remove(),2600)}),n.append(s);const l=()=>Ms(s,n);l(),window.addEventListener("resize",l),s.addEventListener("close",()=>{window.removeEventListener("resize",l),s.remove()}),s.showModal()}const T_="modulepreload",w_=function(n){return"/acorn-witch-atelier/"+n},zc={},A_=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=w_(l),l in zc)return;zc[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":T_,c||(d.as="script"),d.crossOrigin="",d.href=l,o&&d.setAttribute("nonce",o),document.head.appendChild(d),c)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};function C_(n,e){const t=()=>{const s=n.getBoundingClientRect(),a=document.documentElement.style;for(const[o,l]of Object.entries({left:s.left,top:s.top,right:innerWidth-s.right,bottom:innerHeight-s.bottom,width:s.width,height:s.height}))a.setProperty("--game-"+o,l+"px")};t(),window.addEventListener("resize",t),window.addEventListener("scroll",t,{passive:!0}),new ResizeObserver(t).observe(n);const i=n.querySelector("#phone-status");for(const s of[i,e])s.setAttribute("popover","manual");const r=()=>{t();const s=[...n.querySelectorAll("dialog[open]")].at(-1)??document.body;e.parentElement!==s&&s.append(e);for(const a of[i,e])a.matches(":popover-open")&&a.hidePopover(),a.showPopover()};r(),new MutationObserver(s=>{s.some(a=>a.type==="attributes"&&a.target.tagName==="DIALOG"||[...a.addedNodes,...a.removedNodes].some(o=>o.nodeType===1&&o.matches("dialog")))&&r()}).observe(n,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["open"]})}async function R_(n){const{default:e}=await A_(async()=>{const{default:d}=await import("./html2canvas.esm-CBrSDip1.js");return{default:d}},[]),t=n.getBoundingClientRect(),i=[...n.querySelectorAll("dialog[open]")].map(d=>({id:d.id,cls:d.className,display:getComputedStyle(d).display,rect:d.getBoundingClientRect()})),r=new Image;r.src=new URL("assets/ui/storybook-frame.png",document.baseURI).href,await r.decode();const s=i.map(({rect:d})=>{const f=document.createElement("canvas");f.width=Math.round(d.width*2),f.height=Math.round(d.height*2);const p=f.getContext("2d"),g=[0,256,r.width-256,r.width],_=[0,328,r.height-410,r.height],m=[0,f.width*.25,f.width*.75,f.width],h=[0,f.width*.32,f.height-f.width*.40039,f.height];for(let E=0;E<3;E++)for(let b=0;b<3;b++)p.drawImage(r,g[b],_[E],g[b+1]-g[b],_[E+1]-_[E],m[b],h[E],m[b+1]-m[b],h[E+1]-h[E]);return f.toDataURL()}),a=[...n.querySelectorAll("video")].map(d=>{if(!d.videoWidth)return null;const f=document.createElement("canvas");return f.width=d.videoWidth,f.height=d.videoHeight,f.getContext("2d").drawImage(d,0,0),f.toDataURL()}),o=await e(n,{backgroundColor:null,scale:2,useCORS:!0,logging:!1,width:t.width,height:t.height,onclone(d){var g;(g=d.querySelector("#save-game-screen"))==null||g.remove();const f=d.querySelector("#game"),p=f.querySelector("#phone-status");p.removeAttribute("popover"),Object.assign(p.style,{display:"block",position:"absolute",left:"0",top:"0",width:"100%",zIndex:"10000"}),f.querySelectorAll("video").forEach((_,m)=>{if(!a[m])return;const h=d.createElement("img");h.src=a[m],h.className=_.className,h.style.cssText=_.style.cssText,h.style.width="100%",h.style.height="100%",h.style.objectFit="cover",_.replaceWith(h)}),f.querySelectorAll("progress,meter").forEach(_=>{const m=d.createElement("div");m.className=_.className,m.style.cssText=_.style.cssText,Object.assign(m.style,{height:"3px",borderRadius:"2px",background:"#d7d7d7",overflow:"hidden"});const h=d.createElement("div");Object.assign(h.style,{height:"100%",width:Math.min(100,_.value/_.max*100)+"%",background:"#527159"}),m.append(h),_.replaceWith(m)}),f.querySelectorAll("dialog[open]").forEach((_,m)=>{const h=i[m].rect;Object.assign(_.style,{position:"fixed",left:h.left+"px",top:h.top+"px",right:"auto",bottom:"auto",width:h.width+"px",height:h.height+"px",margin:"0",transform:"none",zIndex:String(100+m),display:i[m].display}),_.matches(".book-panel,#rewards-dialog:not(.cg-player)")&&(_.style.backgroundImage=`url(${s[m]})`,_.style.backgroundSize="100% 100%"),_.querySelectorAll("details:not([open])>:not(summary)").forEach(E=>E.style.display="none")})}}),l=await new Promise(d=>o.toBlob(d,"image/png"));if(!l)throw new Error("No screenshot");const c=URL.createObjectURL(l),u=document.createElement("a");u.href=c,u.download=`松团子-${new Date().toISOString().replace(/[:.]/g,"-")}.png`,u.click(),setTimeout(()=>URL.revokeObjectURL(c),1e3)}const ko=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),we=n=>document.querySelector(n);let Q=$c(),Ss="";try{const n=localStorage.getItem(Gc);if(n){const e=JSON.parse(n);e.version===1&&e.stats&&e.inventory&&Array.isArray(e.records)?Q=e:Ss="旧存档无法读取，已开始新的故事。"}}catch{Ss="浏览器存储不可用，本次进度暂不保存。"}At(Q);const fn=dd(we("#game"));let Oe,Ot,ut,jt;function nr(n,e){pd(n,e);const t=e.name,i=/课程/.test(t)?"course":/小铺/.test(t)?"shop":/烘焙/.test(t)?"baking":/采集/.test(t)?"gather":/薄荷|约定/.test(t)?"story":null;return i&&vd(n,i),n}try{Oe=M_(we("#world"),(n,e)=>{const t=we("#loading p");t&&!we("#loading").dataset.failed&&(t.textContent=n===e?"正在准备上课、烘焙和小铺动画…":`正在布置小屋 · ${n} / ${e}`)}),Oe.ready.then(async()=>{var e;const n=Q.collection.customOutfits.find(t=>t.id===Q.collection.activeCustom);n&&(await Oe.prepareCustom(n),Oe.setCustom(n.id)),(e=we("#loading"))==null||e.remove(),fn&&fn.start()}).catch(n=>{we("#loading").dataset.failed="true",we("#loading").innerHTML="<span>✧</span><p></p>",we("#loading p").textContent=n.message||"画面或动画载入失败，请刷新页面重试。",console.error(n)})}catch(n){throw we("#loading").innerHTML="<span>✧</span><p>画面无法启动，请使用支持 WebGL 的浏览器打开。</p>",console.error(n),n}Oe.setOutfit(Q.outfit);Oe.setDessert(Q.desserts.length>0);let xn=null,Rr="set",Kt=structuredClone(Q.collection.wear),Xn="home",pn="",k=null,fi=0,Qi=Q.outfit,Hc,Vi=!0,Rn=null,Vc=0;const nn=document.createElement("audio");nn.id="bgm";nn.src="/acorn-witch-atelier/audio/barefoot-in-the-park.mp3";nn.preload="none";nn.loop=!0;nn.volume=.3;document.body.append(nn);let Wi=!0,As=!1;function Cs(){Wi&&(As=!0,nn.play().catch(()=>Pt("音乐暂未播放，请在设置中重新开启。")))}document.addEventListener("pointerdown",()=>{!(fn!=null&&fn.active)&&!As&&Cs()});document.addEventListener("keydown",()=>{!(fn!=null&&fn.active)&&!As&&Cs()});document.addEventListener("visibilitychange",()=>{document.hidden?nn.pause():As&&Wi&&Cs()});const nl=["早晨","午后","傍晚"],Gu={acorn:"◈",berry:"●",cream:"♧",herb:"❦",honey:"⬡"},$u={baking:{name:"魔法烘焙",symbol:"♧",cost:18,note:"节奏 · 火候 · 魔法"},course:{name:"去学校上课",symbol:"✧",cost:16,note:"学习一门小小的魔法"},gather:{name:"森林采集",symbol:"❦",cost:12,note:"收集食材与灵感"},story:{name:"朋友来信",symbol:"✉",cost:8,note:"一份甜点，一段故事"},shop:{name:"烘焙小铺",symbol:"♜",cost:10,note:"出售甜点，赚取金币"},rest:{name:"窗边休息",symbol:"☕",cost:0,note:"体力 +32 · 心情 +8"}};function bt(){try{localStorage.setItem(Gc,JSON.stringify(Q))}catch{Pt("存储空间不可用，当前进度仅保留在本页。")}}function On(n=600,e=.1){if(!Vi)return;Rn??(Rn=new AudioContext),Rn.resume();const t=Rn.createOscillator(),i=Rn.createGain();t.type="sine",t.frequency.setValueAtTime(n,Rn.currentTime),i.gain.setValueAtTime(.09,Rn.currentTime),i.gain.exponentialRampToValueAtTime(.001,Rn.currentTime+e),t.connect(i).connect(Rn.destination),t.start(),t.stop(Rn.currentTime+e)}function Pt(n){clearTimeout(Hc),we("#toast").textContent=n,we("#toast").classList.add("show"),Hc=setTimeout(()=>we("#toast").classList.remove("show"),2600)}function Rs(n,e=""){we("#speech").innerHTML=n?`${n}<small>${e}</small>`:""}function Ye(n,e,t="",i="button"){return`<button class="${i}" data-action="${e}" ${t}>${n}</button>`}function Lt(n,e,t,i="✧",r="",s=""){return`<button class="option" data-action="${t}" ${r}><span class="symbol">${i}</span><span><strong>${n}</strong><small>${e}</small></span>${s?`<span class="right">${s}</span>`:""}</button>`}function rt(n,e,t,i=!0,r=""){return`<section class="sheet ${r}" aria-label="${n}"><header><div><h2>${n}</h2><small>${e}</small></div>${i?'<button class="close" data-action="close" aria-label="关闭面板">×</button>':""}</header>${t}</section>`}function Ps(n,e,t){return`<div class="paged-items" data-size="${e}"><div class="${t}">${n.map((i,r)=>`<div class="paged-item" ${r>=e?"hidden":""}>${i}</div>`).join("")}</div>${n.length>e?`<div class="list-pages"><button data-action="list-page" data-id="-1" aria-label="上一页" disabled>‹</button><span data-page="0">1 / ${Math.ceil(n.length/e)}</span><button data-action="list-page" data-id="1" aria-label="下一页">›</button></div>`:""}</div>`}function P_(n,e){const t=n.closest(".paged-items"),i=t.querySelector("[data-page]"),r=[...t.querySelectorAll(".paged-item")],s=Number(t.dataset.size),a=Math.ceil(r.length/s),o=Math.max(0,Math.min(a-1,Number(i.dataset.page)+e));r.forEach((l,c)=>l.hidden=c<o*s||c>=(o+1)*s),i.dataset.page=o,i.textContent=`${o+1} / ${a}`,t.querySelector('[data-id="-1"]').disabled=o===0,t.querySelector('[data-id="1"]').disabled=o===a-1}function Qe(n,e){if(pn=e,we("#panel").dataset.panel=e,we("#panel").innerHTML=n,["cook-result","course-result","gather-result","story-result","shop-result","rest-result","ending"].includes(e)){const t=we("#panel [data-action=home]");if(t){const i=document.createElement("div");i.className="result-actions",t.before(i),i.append(t),i.insertAdjacentHTML("beforeend",Ye("分享录屏到抖音","share-recording","","button subtle"))}}Rs("")}function mn(n,e){if(["wardrobe","portrait"].includes(n)!==["wardrobe","portrait"].includes(Xn)||["school","classroom"].includes(n)&&n!==Xn||Xn==="classroom"&&n==="home"){const i=we("#scene-curtain");i.classList.remove("reveal"),i.offsetWidth,i.classList.add("reveal")}Xn=n,we("#game").dataset.scene=n,Oe.setMode(n);const t={garden:"adventure",school:"star",classroom:"star",kitchen:"acorn",shop:"acorn"}[n];t&&(Oe.setOutfit(t),Oe.setCustom(null),Oe.setAccessory(null)),we("#scene-label").textContent=e,we("#scene-actions").innerHTML="",we("#scene-actions").className=""}function Gt(){const n=jc(Q);we("#hud").innerHTML=`<div class="hud-identity"><button class="profile-entry" data-action="profile" aria-label="角色属性"><svg class="profile-frame" viewBox="0 0 1942 809" aria-hidden="true"><defs><filter id="profile-matte" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 -1 2 -1 0 1"/><feComponentTransfer><feFuncA type="discrete" tableValues="0 1 1 1 1"/></feComponentTransfer><feComposite in2="SourceGraphic" operator="in"/></filter></defs><image href="/acorn-witch-atelier/assets/ui/profile-hud-round-cap.png" width="1942" height="809" filter="url(#profile-matte)"/></svg><span class="profile-avatar"><img src="/acorn-witch-atelier/assets/ui/songtuanzi-avatar.png" alt="松团子头像"></span><svg class="exploration-ring" viewBox="0 0 100 100" role="progressbar" aria-label="角色等级进度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${n.percent}"><circle cx="50" cy="50" r="46" pathLength="100"/><circle cx="50" cy="50" r="46" pathLength="100" stroke-dasharray="${n.percent} 100"/></svg><span class="profile-summary"><b>松团子</b><span class="profile-level">角色等级 <strong>Lv.${n.level}</strong></span></span><small class="profile-link">角色属性 ›</small></button><div class="date"><b>秋之月 · 第 ${Q.day} 日</b><small>${Q.slot===3?"庆典时刻":`${nl[Q.slot]} ${["07:45","13:20","17:30"][Q.slot]}`}</small></div></div><div class="resources"><span><em>◈</em>${Q.coins}</span><span><em>♡</em>${Q.energy} <em>☀</em>${Q.mood}</span></div>`,we("#desktop-journal").innerHTML=`<span class="journal-caption">小魔女的成长手记</span><h2>今天，也长大了一点。</h2>${Object.entries(pr).map(([e,t])=>`<div class="statline"><span>${t}</span><b>${Q.stats[e]}</b></div><div class="stat-track"><span style="width:${Math.min(100,Q.stats[e])}%"></span></div>`).join("")}<div class="goal-note">${Q.ending?`✦ ${Q.ending.title}<br>秋收祭评分 ${Q.ending.score} / 100`:`✦ 距离秋收祭还有 ${7-Q.day} 天<br>准备甜点 · 挑选穿搭 · 结识朋友`}</div>`,we("#nav").innerHTML=[["journal","手记","✧"],["bag","背包","♧"],["schedule","日程","▦"],["wardrobe","衣橱","♜"],["festival","庆典","✦"]].map(([e,t,i])=>`<button data-action="${e}" class="${e==="schedule"?"schedule-entry":""}" ${k?"disabled":""}><span>${e==="schedule"?'<img src="/acorn-witch-atelier/assets/ui/schedule-book.png" alt="日程">':i}</span>${e==="schedule"?"":t}</button>`).join("")}function bn(){var e;Yn==null||Yn.dispose(),Yn=null,Yc(Q,"home"),bt(),Q.ending&&Q.day<=7&&(Q.day=8,Q.slot=0,Q.energy=Math.min(100,Q.energy+25),bt()),k=null,pn="",we("#panel").innerHTML="",mn("home","橡果小屋 · 窗边"),Oe.setOutfit(Q.outfit),Oe.setCustom(Q.collection.activeCustom),Oe.setAccessory(Q.collection.wear.accessory),Oe.setDessert(Q.desserts.length>0),Gt(),Rs(Q.ending?"我们的故事，还会有下一个季节。":Q.energy<25?"先泡杯茶，歇一会儿吧。":Q.day===7?"今天是秋收祭。带上我们的得意之作吧！":"今天，想把时间花在什么美好的事上？","点击「日程」开始今天的生活"),we("#scene-actions").innerHTML=Ye("✧ 魔法占卜","wheel","","scene-button")+Ye("▣ 角色故事","stories","","scene-button")+Ye("✧ 相册","collection","","scene-button collection-entry")+Ye("▷ 重看片头","replay-intro","","scene-button")+Ye("♬ 设置","settings","","scene-button"),(e=we("#recruit-banner"))==null||e.remove(),we("#game").insertAdjacentHTML("beforeend",'<button id="recruit-banner" data-action="recruitment" aria-label="森林乐队成员招募"><img src="/acorn-witch-atelier/assets/ui/recruit-forest-band-q.png" alt="森林乐队 · 乐队成员招募中"></button>');const n=Q.collection.cgs.find(t=>!Q.collection.seen.includes(t));n&&(ut==null||ut.playCG(n,()=>{}))}function L_(n){const e=Q.collection;return Bt.some(t=>t.activity===n&&!e.seen.includes(t.id)&&(e.cgs.includes(t.id)||(!t.stat||Q.stats[t.stat]>=t.threshold)&&(!t.visits||(e.visits[n]??0)+1>=t.visits)&&(!t.bond||e.bond>=t.bond)))}function D_(){mn("home","橡果小屋 · 今日日程"),Qe(rt("今日日程","A LITTLE PLAN FOR TODAY",`<div class="schedule-grid">${nl.map((n,e)=>`<div class="time-slot ${e===Q.slot?"current":""}">${n}<small>${e<Q.slot?"已经度过":e===Q.slot?"正在安排":"留给美好的事"}</small></div>`).join("")}</div>${Q.day===7&&Q.slot===3?`<p>准备已经完成。现在，带上你的甜点前往秋收祭。</p>${Ye("前往秋收祭","festival","","button wide")}`:`<div class="action-grid">${Object.entries($u).map(([n,e])=>Lt(`${e.name}${L_(n)?" · 新线索":""}`,e.note,"activity",e.symbol,`data-id="${n}" ${_i(Q,e.cost)?"":"disabled"}`,e.cost?`−${e.cost}♡`:"+32♡")).join("")}</div><p class="mini-status">每次 1 时段 · 夜间体力 +25</p>`}`),"schedule")}function I_(n){const e=$u[n];if(!_i(Q,e.cost)){Pt("先安排休息，恢复一些体力吧。");return}n==="baking"&&Wu(),n==="course"&&z_(),n==="gather"&&$_(),n==="story"&&X_(),n==="shop"&&j_(),n==="rest"&&(nr(Q,{name:"窗边休息",energy:32,mood:8}),bt(),bn(),Oe.happy(),Qe(rt("热茶和一页好书","",`<p>体力 +32 · 心情 +8</p>${Ye("休息好了，回家吧","home","","button wide")}`,!1),"rest-result"))}function Wu(){mn("kitchen","魔法烘焙坊 · 准备"),Oe.setAction("prepare"),fi=0,qu()}function qu(){const n=mr[fi];if(pn==="recipes"&&we("#panel .recipe-note")){we("#panel").querySelectorAll("[data-action=recipe]").forEach(t=>{const i=Number(t.dataset.id)===fi;t.classList.toggle("selected",i),t.setAttribute("aria-pressed",String(i))}),we("#panel .recipe-note").textContent=n.note;const e=we("#panel [data-action=cook]");e.disabled=!ur(Q,n),e.textContent=ur(Q,n)?"系好围裙，开始吧":"材料不足，先去森林看看";return}Qe(rt("今天，烤一点幸福","CHOOSE A RECIPE",`<div class="options">${mr.map((e,t)=>({r:e,i:t})).filter(({r:e})=>!e.unlock||Q.collection.menus.includes(e.id)).map(({r:e,i:t})=>`<button class="option ${fi===t?"selected":""}" data-action="recipe" data-id="${t}" aria-pressed="${fi===t}"><span class="symbol">${["✦","❀","♧","❦","♡"][t]}</span><span><strong>${e.name}</strong></span><span class="right">${e.temp}°</span></button>`).join("")}</div><p class="recipe-note">${n.note}</p>${Ye(ur(Q,n)?"系好围裙，开始吧":"材料不足，先去森林看看","cook",ur(Q,n)?"":"disabled","button wide")}<div class="mini-status">消耗 18 体力 · 完成后消耗材料 · 一个时段</div>`),"recipes")}function U_(){const n=mr[fi];!bd(Q).includes(n)||!ur(Q,n)||!_i(Q,18)||(Oe.setAction("ingredients"),k={type:"baking",phase:"ingredients",recipe:n,selected:[],hits:[],start:0,heat:0,temperature:n.temp-20,heatTotal:0,heatSamples:0,spell:"star"},Gt(),Xu())}function Xu(){const n=k.recipe;Qe(rt(n.name,"01 / 04 · INGREDIENTS",`<div class="phase-label">从篮子里挑出配方需要的材料</div><div class="recipe-mini">${Object.entries(n.need).map(([e,t])=>`<button class="ingredient ${k.selected.includes(e)?"selected":""}" data-action="ingredient" data-id="${e}" ${k.selected.includes(e)?"disabled":""}>${Gu[e]} ${Vo[e]} ×${t} ${k.selected.includes(e)?"✓":""}</button>`).join("")}</div><p>材料选齐后，开始轻轻搅拌。</p>${Ye("拿起木勺","mix",k.selected.length===Object.keys(n.need).length?"":"disabled","button wide")}`,!1),"ingredients")}function N_(){k.phase="mix",k.start=performance.now(),Oe.setAction("mix"),Qe(rt("让香气，慢慢混合","02 / 04 · STIR IN RHYTHM",`<p>光标进入绿色区域时，点击搅拌。靠近中心会更好。</p><div class="timing"><div class="target"></div><div class="needle" id="mix-needle"></div></div><div class="meter-meta"><span id="mix-feedback">跟着木勺的节奏</span><span id="mix-count">0 / 5</span></div>${Ye("轻轻搅拌 · 空格","tap","","button wide tap-button")}`,!1),"mix")}function Yu(n){return(1-Math.cos((n-k.start)/1e3*Math.PI*1.15))/2}function ju(){const n=performance.now();if(!k||k.phase!=="mix"||n-Vc<170)return;Vc=n;const e=Math.abs(Yu(n)-.5),t=e<.055?1:e<.13?.8:e<.23?.5:.2;k.hits.push(t),On(t===1?880:t>=.8?660:380,.13),we("#mix-feedback").textContent=t===1?"PERFECT · 刚刚好！":t>=.8?"GOOD · 香气出来了":t>=.5?"不错，再靠近中心一点":"慢慢来，等绿色区域",we("#mix-count").textContent=`${k.hits.length} / 5`,t>=.8&&Oe.happy(),k.hits.length===5&&(k.phase="mixed",Oe.setAction("mixed"),Qe(rt("面糊准备好了","02 / 04 · NICELY MIXED",`<div class="stamp">${Math.round(k.hits.reduce((i,r)=>i+r,0)/5*100)}<small>搅拌表现 / 100</small></div><p>接下来交给火候。${k.recipe.name}适合 ${k.recipe.temp}°C。</p>${Ye("放进烤箱","heat","","button wide")}`,!1),"mixed"))}function F_(){k.phase="heat",Oe.setAction("bake"),k.start=performance.now(),k.lastSample=performance.now(),Qe(rt("守住，刚好的温度","03 / 04 · A LITTLE PATIENCE",`<div class="temperature"><span id="temperature">${k.temperature}</span>°C<small>理想 ${k.recipe.temp}°C</small></div><label class="details" for="heat-slider">滑动调温，让温度保持在目标 ±8°C</label><input id="heat-slider" type="range" min="140" max="220" value="${k.temperature}" step="1" aria-label="烤箱温度"><div class="progress"><span id="heat-progress"></span></div><div class="meter-meta"><span id="heat-feedback">甜点正在慢慢膨胀</span><span id="heat-time">8 秒</span></div>`,!1),"heat")}function O_(){k.phase="spell",Oe.setAction("spell"),Qe(rt("最后，添一点魔法","04 / 04 · A PINCH OF MAGIC",`<p>食谱偏爱的魔法：<b>${{star:"星光",forest:"森林",heal:"治愈"}[k.recipe.spell]}</b>。魔法也会改变这次烘焙带来的成长。</p><div class="options">${[["star","星光","魔法 +3 · 适合星光橡果塔","✦"],["forest","森林","亲和 +3 · 适合莓果云朵派","❦"],["heal","治愈","体力 +8 · 适合蜂蜜布丁","♡"]].map(([n,e,t,i])=>Lt(e,t,"spell",i,`data-id="${n}"`)).join("")}</div>`,!1),"spell")}function B_(n){if(!k||k.phase!=="spell")return;const e=k.recipe,t=k.hits.reduce((o,l)=>o+l,0)/5,i=k.heatSamples?k.heatTotal/k.heatSamples:0,r=fd(Q,t,i,n,e),s={id:`${Date.now()}`,recipe:e.id,name:e.name,score:r,grade:Wc(r),spell:n},a={baking:3,...n==="star"?{magic:3}:n==="forest"?{charm:3}:{}};nr(Q,{name:`烘焙 · ${e.name} ${s.grade}`,cost:18,mood:4,energy:n==="heal"?8:0,stats:a,ingredients:Object.fromEntries(Object.entries(e.need).map(([o,l])=>[o,-l])),dessert:s}),bt(),k={type:"tasting",dessert:s,mix:t,heat:i},Oe.setAction("taste"),Gt(),Qe("","tasting"),Rs("先尝一口，看看今天的味道。")}function k_(){const{dessert:n,mix:e,heat:t}=k;k={type:"result",dessert:n},On(1046,.4),Qe(rt("有你在，今天也很甜","FRESH FROM THE OVEN",`<div class="stamp">${n.grade}<small>${n.name} · 品质 ${n.score}</small></div><div class="reward-grid"><div><b>${Math.round(e*100)}</b>搅拌表现</div><div><b>${Math.round(t*100)}</b>火候表现</div><div><b>+3</b>烘焙成长</div></div><p>「唔…好好吃！」甜点已放入背包，可以留作参赛、送给朋友，或在小铺出售。</p>${Ye("把这份甜蜜带回家","home","","button wide")}`,!1),"cook-result")}function z_(){mn("school","魔女学院 · 到校"),Qe(rt("今天，想学哪一课？","LESSONS FOR A YOUNG WITCH",`<p>走进教室，完成三道练习 · 学费 12 ◈ · 体力 16 ♡</p><div class="options">${Lt("烘焙基础","辨认材料和温度 · 烘焙成长","course","♧",'data-id="baking"')}${Lt("星光魔法","记住符文顺序 · 魔法成长","course","✦",'data-id="magic"')}${Lt("色彩与设计","观察配色和标签 · 审美成长","course","❀",'data-id="style"')}</div>${Q.coins<12?"<p>金币不足。可以先出售一份甜点。</p>":""}`),"courses")}const Ku={baking:[["想让塔皮酥脆，需要哪种原料？",["黄油与面粉","一整杯清水","只有莓果"],0],["星光橡果塔适合的温度是？",["140°C","180°C","220°C"],1],["面糊搅拌完成，接下来应该？",["直接装盘","再加一杯盐","放入预热的烤箱"],2]],magic:[["记住顺序：星 → 月 → 叶。中间是？",["月","叶","星"],0],["星光橡果塔偏爱哪种魔法？",["治愈","森林","星光"],2],["让魔法稳定的方法是？",["越快越好","跟随平稳的节奏","闭着眼随便念"],1]],style:[["「森林来信」的主要颜色是？",["草木绿","霓虹粉","纯黑"],0],["秋收祭的温暖配色是？",["湖蓝与银灰","橡果棕与奶油白","黑色与荧光绿"],1],["想突出金发，围裙可以搭配？",["相同的亮黄","透明色","较深的森林绿"],2]]};function H_(n){if(Q.coins<12){Pt("还差一点学费，先去小铺赚些金币吧。");return}mn("classroom",`魔女学院 · ${{baking:"烘焙基础课",magic:"星光魔法课",style:"色彩与设计课"}[n]}`),k={type:"course",subject:n,q:0,correct:0},Gt(),Zu()}function Zu(){Oe.setAction("think");const n=Ku[k.subject][k.q];Qe(rt(`随堂练习 · ${k.q+1} / 3`,"LESSON",`<p class="dialog-text">${n[0]}</p><div class="options">${n[1].map((e,t)=>Lt(e,"","answer",["A","B","C"][t],`data-id="${t}"`)).join("")}</div>`,!1),"question")}function V_(n){if(!k||k.type!=="course"||k.feedback)return;const e=Ku[k.subject][k.q],t=n===e[2];k.feedback=!0,document.querySelectorAll('[data-action="answer"]').forEach(i=>i.disabled=!0),t?(k.correct++,Oe.setAction("correct"),On(780),Pt("答对了！原来是这样。")):(Oe.setAction("retry"),On(330),Pt(`再记一次：${e[1][e[2]]}`))}function G_(){const n=3+k.correct*2,e=k.subject,t=k.correct;nr(Q,{name:`课程 · ${pr[e]}`,cost:16,coins:-12,stats:{[e]:n,knowledge:2},mood:t===3?3:1}),bt(),k={type:"result"},Oe.setAction("celebrate"),Gt(),Qe(rt("把新本领，收进口袋","A SMALL STEP FORWARD",`<div class="stamp">${t} / 3<small>今天的课堂练习</small></div><div class="reward-grid"><div><b>+${n}</b>${pr[e]}</div><div><b>+2</b>学识</div><div><b>−12</b>学费</div></div>${Ye("下课，回家吧","home","","button wide")}`,!1),"course-result")}let Yn=null;function $_(){mn("garden","榛果林 · 轻风小径"),k={type:"gather"},pn="gather",we("#panel").innerHTML="",we("#scene-actions").className="gather",Rs(""),Gt(),Yn=Kd({world:Oe,root:we("#scene-actions"),onFinish:W_})}function W_(){const n=Q.outfit==="forest"?1:0;nr(Q,{name:"榛果林采集",cost:12,mood:4,stats:{charm:1},ingredients:{acorn:4+n,berry:3+n,herb:2+n,honey:2,cream:2}}),bt(),k={type:"result"},Gt(),Qe(rt("满满一篮，带回家","GIFTS FROM THE FOREST",`<p>小路尽头的奶农还送了两瓶奶油。</p><div class="backpack">${Object.entries({acorn:4+n,berry:3+n,herb:2+n,honey:2,cream:2}).map(([e,t])=>`<div class="item-cell">${Vo[e]}<b>+${t}</b></div>`).join("")}</div>${n?"<p>「森林小洋装」穿搭带来额外采集收获。</p>":""}${Ye("带着篮子回家","home","","button wide")}`,!1),"gather-result")}function Ju(){k||(["wardrobe","portrait"].includes(Xn)||(xn=Q.collection.activeCustom,Qi=Q.outfit,Kt=structuredClone(Q.collection.wear),Rr="set"),mn("wardrobe","卧室 · 橡果试衣间"),gs())}function gs(){if(Oe.setCustom(xn),Rr!=="set"){ed();return}Oe.setAccessory(Kt.accessory);const n=qi.find(t=>t.id===Qi),e=Q.owned.includes(n.id);Oe.setOutfit(n.id),Qe(rt("衣橱","THE LITTLE WARDROBE",`${Qu()}${Ps([...qi.map(t=>`<button class="outfit-card ${Qi===t.id?"selected":""}" aria-label="试穿${t.name}" data-action="outfit" data-id="${t.id}"><img src="${Oe.getOutfitPreview(t.id)}" alt="${t.name}全身搭配"><b>${t.short}</b><small>${Q.owned.includes(t.id)?"已拥有":t.price+" ◈"}</small></button>`),...Q.collection.customOutfits.map(t=>`<button class="outfit-card ${xn===t.id?"selected":""}" data-action="custom-outfit" data-id="${t.id}"><img src="${Oe.customPreview(t.id)||t.standing}" alt="共创穿搭"><b>${ko(t.name)}</b><small>我的设计</small></button>`)],6,"wardrobe-preview")}<div class="recipe-name">${xn?ko(Q.collection.customOutfits.find(t=>t.id===xn).name):n.name}</div><div class="row">${Ye(xn||e?"就穿这套":"购买并穿上 · "+n.price+" ◈","wear",!e&&Q.coins<n.price?"disabled":"","button")}${Ye("收起 · 看全身","portrait","","button subtle")}</div>`),"wardrobe")}function q_(){if(xn){Q.collection.activeCustom=xn,Q.collection.wear=structuredClone(Kt),bt(),bn();return}if(Q.collection.activeCustom=null,Rr!=="set"){if(![...Kt.accessory?[Kt.accessory]:[]].every(e=>Q.collection.parts.includes(e)))return;Q.collection.wear=structuredClone(Kt),bt(),bn(),Pt("搭配已保存。");return}const n=qi.find(e=>e.id===Qi);if(!Q.owned.includes(n.id)){if(Q.coins<n.price)return;Q.coins-=n.price,Q.owned.push(n.id)}Q.outfit=n.id,Q.collection.wear={...Kt,mode:"set"},bt(),Oe.happy(),bn(),Pt("今天的你，也很可爱。")}function Qu(){return'<div class="wardrobe-tabs"><button data-action="design" class="under-construction" aria-disabled="true">✎ 设计新衣</button>'+[["set","套装"],["accessory","饰品"]].map(([n,e])=>'<button data-action="wardrobe-tab" data-id="'+n+'" aria-pressed="'+(Rr===n)+'">'+e+"</button>").join("")+"</div>"}function ed(){Oe.setAccessory(Kt.accessory),Oe.setOutfit(Qi);const n=!Kt.accessory||Q.collection.parts.includes(Kt.accessory);Qe(rt("饰品","THE LITTLE ACCESSORIES",Qu()+'<div class="wardrobe-preview"><button class="outfit-card" data-action="part" data-id="none"><b>摘下饰品</b></button>'+Go.map(e=>'<button class="outfit-card part-card '+(Kt.accessory===e.id?"selected":"")+'" data-action="part" data-id="'+e.id+'" aria-label="试戴'+e.name+'"><img src="/acorn-witch-atelier/assets/rewards/part-'+e.id+'.webp" alt="'+e.name+'"><b>'+e.name+"</b><small>"+(Q.collection.parts.includes(e.id)?"已拥有":"轮盘获得")+"</small></button>").join("")+'</div><div class="row">'+Ye(n?"戴好了":"轮盘获得后可保存","wear",n?"":"disabled")+Ye("收起 · 看全身","portrait","","button subtle")+"</div>"),"wardrobe")}function X_(){mn("story","窗边来信 · 朋友的约定");const n=[["薄荷的第一封信","「秋收祭快到了，我总是担心自己的配方不够好。你也会紧张吗？」"],["一份甜蜜的邀请","「昨天闻到你家烤箱的香气，我练习到很晚。下次，可以一起做甜点吗？」"],["庆典之前","「无论评委给几分，我都会站在台下，给你最响亮的掌声。」"]],[e,t]=n[Math.min(2,Q.story)];Qe(rt(e,"A LETTER FROM MINT",`<div class="dialog-name">薄荷 · 魔女学院的同学</div><p class="dialog-text">${t}</p><div class="options">${Lt("我们一起练习吧","亲和 +3 · 好感 +2","story-choice","♡",'data-id="talk"')}${Lt("送给她一份亲手做的甜点",Q.desserts.length?"消耗背包第一份甜点 · 好感 +5":"背包里还没有甜点","story-choice","♧",`data-id="gift" ${Q.desserts.length?"":"disabled"}`)}${Lt("把整理好的笔记分享给她","学识 +3 · 好感 +2","story-choice","✧",'data-id="notes"')}</div><div class="mini-status">消耗 8 体力 · 一个时段</div>`),"story")}function Y_(n){_i(Q,8)&&(n==="gift"&&!Q.desserts.length||(nr(Q,{name:n==="gift"?"送给薄荷的甜点":"与薄荷的约定",cost:8,stats:n==="notes"?{knowledge:3}:{charm:3},friendship:n==="gift"?5:2,mood:5}),n==="gift"&&Q.desserts.shift(),Q.story++,bt(),k={type:"result"},Oe.happy(),Gt(),Qe(rt("有人，记住了你的温柔","FRIENDSHIP GROWS",`<p class="dialog-text">${n==="gift"?"「这是给我的吗？我会把今天，写进最喜欢的那一页日记。」":"「原来不需要独自做好所有事情。有你在，感觉安心多了。」"}</p><div class="reward-grid"><div><b>+${n==="gift"?5:2}</b>薄荷好感</div><div><b>${Q.friendship}</b>当前关系</div><div><b>+5</b>心情</div></div>${Q.friendship>=6?"<p>约定达成：薄荷会在庆典为你应援，关系将计入比赛评分。</p>":""}${Ye("把信好好收起来","home","","button wide")}`,!1),"story-result")))}const zo={tea:"热茶",cocoa:"热可可",honey:"蜂蜜茶"};function j_(){mn("shop","橡果烘焙坊 · 准备开店"),Qe(rt("今天，也把甜蜜分给小镇","OPEN THE LITTLE BAKERY",Q.desserts.length?`<p>选甜点接待 3 组客人，按需配饮品。每轮 10 体力、1 时段。</p>${Ps(Q.desserts.map((n,e)=>Lt(n.name,`${n.grade} · ${n.score} 分`,"sell","♧",`data-id="${e}"`)),3,"dessert-options")}`:`<div class="empty">展示柜空空的，先烤一份甜点吧。</div>${Ye("选择食谱","recipes","","button wide")}`),"shop")}function K_(n){const e=Q.desserts[n];!e||!_i(Q,10)||k||(k={type:"shop",phase:"order",index:n,dessert:e,customer:0,results:[],elapsed:0,selection:null},Gt(),td())}function td(){k.phase="order",k.elapsed=0,k.selection=null;const n=Xi[k.customer];Oe.setAction(n.motion),we("#scene-label").textContent=`今日营业 · 第 ${k.customer+1} / 3 组客人`,we("#scene-actions").className="shop-sale",we("#scene-actions").innerHTML=`<div class="shop-till">◈ ${Q.coins}</div>`,nd()}function nd(){const n=Xi[k.customer];Qe(rt(n.guest,`${k.customer+1} / 3 · ${k.dessert.name}试吃套餐`,`<p>${n.request}</p><div class="shop-patience"><span id="shop-patience-fill" style="width:${100*(1-k.elapsed/_s)}%"></span></div><div class="shop-drinks">${Object.entries(zo).map(([e,t])=>Ye(t,"shop-drink",`data-id="${e}" aria-pressed="${k.selection===e}"`,"button subtle")).join("")}</div>${Ye(k.selection?"递给客人":"先选一杯饮品","shop-serve",k.selection?"":"disabled","button wide")}`,!1),"shop-order")}function id(n=!1){if((k==null?void 0:k.type)!=="shop"||k.phase!=="order"||!k.selection&&!n)return;const e=Xi[k.customer],t=!n&&k.selection===e.choice,i=t&&k.elapsed<_s*.5;k.results.push({correct:t,perfect:i,timedOut:n}),k.phase="feedback",Oe.setAction(t?"positive":"negative"),On(t?880:260,.2),Qe(rt(t?i?"PERFECT · 这份心意刚刚好":"GOOD · 客人很满意":n?"客人等了太久…":"不是这个呀…",`${k.customer+1} / 3 · ${e.guest}`,`<p>${t?`甜点搭配${zo[e.choice]}，谢谢款待！${i?"获得 5 金币小费。":""}`:`客人想要的是${zo[e.choice]}。这份订单未成交，下次留意需求。`}</p><div id="shop-next"><small>等客人回应…</small></div>`,!1),"shop-feedback"),we("#panel").dataset.feedback=t?"positive":"negative"}function Z_(){(k==null?void 0:k.type)!=="shop"||k.phase!=="feedback-ready"||(++k.customer<Xi.length?td():J_())}function J_(){const{dessert:n,index:e,results:t}=k,i=gd(n.score,t);nr(Q,{name:`小铺营业 · 接待 ${i.served}/3 组`,cost:10,coins:i.coins,stats:{charm:i.charm},mood:i.mood}),Q.desserts.splice(e,1),bt(),k.phase="summary",k.reward=i,Oe.setAction("summary"),Gt(),we("#scene-label").textContent="今日营业 · 翻开账本",we("#scene-actions").innerHTML="",Qe(rt("今日营业账本","",`<div class="ledger-rows"><div>甜点收入 <b>+${i.sales} ◈</b></div><div>服务小费 <b>+${i.tips} ◈</b></div><div>亲和成长 <b>+${i.charm}</b></div></div><strong>本次收入 ${i.coins} 金币</strong><div class="result-actions">${Ye("正在整理账本…","shop-close","disabled","button wide")}${Ye("分享录屏到抖音","share-recording","","button subtle")}</div>`,!1,"shop-ledger-bottom"),"shop-summary")}function Q_(){(k==null?void 0:k.type)!=="shop"||k.phase!=="summary-ready"||(k.phase="closing",we("#scene-label").textContent="今日营业 · 圆满收工",Oe.setAction("closing"),we("#scene-actions").innerHTML="",Qe("","shop-closing"))}function ev(n){if((k==null?void 0:k.type)!=="shop")return;const e=Oe.getInfo().shopMotion,t=we(".shop-till");if(t&&(t.hidden=e.action==="positive"&&e.time>=7.68),k.phase==="order"){if(e.seeking)return;k.elapsed+=n,we("#shop-patience-fill").style.width=`${Math.max(0,100*(1-k.elapsed/_s))}%`,k.elapsed>=_s&&id(!0)}else if(k.phase==="feedback"&&e.complete)k.phase="feedback-ready",we("#shop-next").innerHTML=Ye(k.customer<2?"继续接待下一位":"结束接待，看看账本","shop-next","","button wide");else if(k.phase==="summary"&&e.complete){k.phase="summary-ready";const i=we("[data-action=shop-close]");i.disabled=!1,i.textContent="看完账本，结束营业"}else k.phase==="closing"&&e.complete&&(k.phase="closed",Qe(rt("今天的甜蜜，圆满收工","BAKERY CLOSED",`<p>接待 3 组 · 成交 ${k.reward.served} 组 · 收入 ${k.reward.coins} 金币</p>${Ye("关好店门，回家吧","home","","button wide")}`,!1),"shop-result"))}function tv(){Qe(rt("背包","",`<div class="backpack">${Object.entries(Q.inventory).map(([n,e])=>`<div class="item-cell">${Gu[n]} ${Vo[n]}<b>${e}</b></div>`).join("")}</div><div class="section-label">甜点 · ${Q.desserts.length} 份</div>${Q.desserts.length?Ps(Q.desserts.map(n=>`<div class="record"><b>${ko(n.name)}</b><span>${n.grade} · ${n.score} 分</span></div>`),4,"dessert-grid"):'<p class="bag-empty">暂无甜点 · 去烘焙一份吧</p>'}`),"bag")}function nv(){Qe(rt("每一点成长，都算数","YOUR GROWING STORY",`<div class="book-stats">${Object.entries(pr).map(([n,e])=>`<div>${e}<b>${Q.stats[n]}</b></div>`).join("")}<div>薄荷好感<b>${Q.friendship}</b></div></div><div class="book-stats"><div>松团子好感<b>${Q.collection.bond}</b></div></div>${Ye("相册","collection","","button wide")}<div class="section-label">最近的生活</div>${Q.records.slice(0,6).map(n=>`<div class="record"><span>第 ${n.day} 日 · ${nl[n.slot]}</span>${n.name}</div>`).join("")||"<p>第一页，留给今天。</p>"}${Ye("看看玩法手册","help","","button subtle wide")}`),"journal")}function iv(){if(Q.ending){Ls();return}const n=Q.day===7;Qe(rt("秋收祭，一起闪闪发光","THE HARVEST FESTIVAL",`<p>${n?"庆典已经开始！选择一份甜点，和薄荷一起前往广场。":`还有 ${7-Q.day} 天。用剩下的时间学习、烘焙，准备你喜欢的穿搭。`}</p><p class="collection-hint">参加即得「把秋天送给你」祭典 CG · 庆典后生活继续</p><div class="score-lines"><div>甜点品质<b>50 分</b></div><div>烘焙 · 魔法 · 学识<b>25 分</b></div><div>服装与审美<b>20 分</b></div><div>朋友的应援<b>5 分</b></div></div>${n?Q.desserts.length?`<div class="section-label">选择参赛作品</div>${Ps(Q.desserts.map((e,t)=>Lt(e.name,`${e.grade} · ${e.score} 分`,"compete","✦",`data-id="${t}"`)),3,"dessert-options")}`:`<p>还没有参赛甜点。${Q.slot<3?"现在烤一份也来得及。":"这次先作为观众，为朋友们鼓掌吧。"}</p>${Ye(Q.slot<3?"安排魔法烘焙":"以观众身份参加",Q.slot<3?"recipes":"spectator","","button wide")}`:Ye("继续准备今天的生活","schedule","","button wide")}`),"festival")}function rv(n){if(Q.ending||Q.day!==7)return;const e=Q.desserts[n];e&&(Q.ending=md(Q,e),bt(),Ls(),Oe.happy(),On(1046,.5))}function Ls(){if(Xc(Q,"festival")&&bt(),!Q.collection.seen.includes("festival")){ut.playCG("festival",Ls);return}mn("festival","秋收祭 · 属于我们的舞台");const n=Q.ending;n&&(Qe(rt(n.title,"A NEW CHAPTER BEGINS",`<div class="stamp">${n.grade}<small>秋收祭 · 综合评分 ${n.score} / 100</small></div><div class="score-lines"><div>甜点「${n.dessert}」<b>${n.taste} / 50</b></div><div>这一周的成长<b>${n.growth} / 25</b></div><div>今天的穿搭<b>${n.dress} / 20</b></div><div>朋友的应援<b>${n.bond} / 5</b></div></div><p>「原来那些认真度过的小日子，真的会变成闪闪发光的自己。」</p><div class="row">${Ye("保存纪念卡","share")}${Ye("回小屋看看","home","","button subtle")}</div>`,!0),"ending"),Gt())}function rd(){Qe(rt("小屋里的生活手册","HOW TO SPEND A LOVELY WEEK",`<ul><li>每天 3 时段；夜间体力 +25。</li><li>上课加属性，采集得食材，休息回体力。</li><li>烘焙：选材 → 搅拌 5 次 → 控温 8 秒 → 魔法。</li><li>试穿免费；穿搭影响采集与比赛。</li><li>甜点可出售、赠送；留一份参赛。</li><li>第 7 天秋收祭：甜点、成长、穿搭与好感计分。</li></ul><p>点击或触屏操作 · 空格搅拌 · 行动结束自动保存</p>${Ye("知道了，继续生活","close","","button wide")}`,!0,"help"),"help")}function Va(){Qe(rt("设置","A QUIET LITTLE MOMENT",`<div class="options">${Lt(Wi?"暂停背景音乐":"播放背景音乐","BAREFOOT IN THE PARK","music","♫")}${Lt(Vi?"关闭音效":"开启音效","操作与成功提示","sound","♫")}${Lt("重看片头","进入松团子的世界 · 保留当前进度","replay-intro","▷")}${Lt("玩法手册","课程、烘焙与庆典","help","✧")}${Lt("重新开始这一周","清除当前进度","reset-ask","↺")}</div><label for=music-volume>背景音乐音量 <output id=music-volume-value>${Math.round(nn.volume*100)}%</output></label><input id=music-volume type=range min=0 max=100 value=${Math.round(nn.volume*100)} aria-label=背景音乐音量>`),"settings")}async function sv(){const n=Q.ending;if(!n)return;const e=document.createElement("canvas");e.width=900,e.height=1200;const t=e.getContext("2d");t.fillStyle="#f4e8cb",t.fillRect(0,0,900,1200),t.strokeStyle="#b38a49",t.lineWidth=3,t.strokeRect(28,28,844,1144);const i=new Image;i.src="/acorn-witch-atelier/assets/rewards/cg-festival.webp",await i.decode(),t.save(),t.beginPath(),t.rect(55,55,790,660),t.clip();const r=790,s=i.height/i.width*790;t.drawImage(i,55,55-(s-660)*.43,r,s),t.restore(),t.fillStyle="#493927",t.textAlign="center",t.font='28px "Songti SC", serif',t.fillText("橡果魔女 · 秋收祭纪念",450,765),t.font='48px "Songti SC", serif',t.fillText(n.title,450,842),t.font="70px Georgia",t.fillStyle="#a57437",t.fillText(`${n.grade}  /  ${n.score}`,450,940),t.font='23px "Songti SC", serif',t.fillStyle="#786445",t.fillText(n.dessert,450,1002),t.font='19px "Songti SC", serif',t.fillText("扫码来到橡果小屋",350,1090),await eu(t,690,1020,120);const a=document.createElement("a");a.download="橡果魔女-秋收祭纪念.png",a.href=e.toDataURL("image/png"),a.click(),Pt("纪念卡已生成，保存在浏览器下载中。")}function il(n,e,t){if(!(k&&!["ingredient","mix","tap","heat","spell","answer","pick","home","sound","music","shop-drink","shop-serve","shop-next","shop-close","share-recording"].includes(n)))switch(n){case"share-recording":Pt("施工中，敬请期待");break;case"recruitment":Qd(we("#game"));break;case"list-page":P_(t,Number(e));break;case"custom-outfit":xn=e,Oe.prepareCustom(Q.collection.customOutfits.find(i=>i.id===e)).then(gs).catch(()=>Pt("共创衣服暂未载入，请检查绘图服务。"));break;case"design":Pt("施工中，敬请期待");break;case"collection":ut.album();break;case"wheel":ut.wheel();break;case"pets":ut.pets();break;case"wardrobe-tab":Rr=e,gs();break;case"part":e==="none"?Kt.accessory=null:Go.find(r=>r.id===e)&&(Kt.accessory=e),ed();break;case"home":bn();break;case"close":bn();break;case"schedule":D_();break;case"activity":I_(e);break;case"recipe":fi=Number(e),qu();break;case"recipes":_i(Q,18)?Wu():Pt("先恢复体力，或开始新的一周。");break;case"cook":U_();break;case"ingredient":(k==null?void 0:k.phase)==="ingredients"&&!k.selected.includes(e)&&(k.selected.push(e),On(520+k.selected.length*100),Xu());break;case"mix":(k==null?void 0:k.phase)==="ingredients"&&N_();break;case"tap":ju();break;case"heat":(k==null?void 0:k.phase)==="mixed"&&F_();break;case"spell":B_(e);break;case"course":H_(e);break;case"answer":V_(Number(e));break;case"portrait":Qe("","portrait"),mn("portrait","卧室 · 镜前试衣"),we("#scene-actions").innerHTML=Ye("打开衣橱","wardrobe","","scene-button")+Ye("展示动作","showcase","","scene-button");break;case"showcase":Oe.showcase();break;case"wardrobe":Ju();break;case"outfit":xn=null,Qi=e,gs();break;case"wear":q_();break;case"story-choice":Y_(e);break;case"sell":K_(Number(e));break;case"shop-drink":(k==null?void 0:k.type)==="shop"&&k.phase==="order"&&(k.selection=e,nd());break;case"shop-serve":id();break;case"shop-next":Z_();break;case"shop-close":Q_();break;case"bag":tv();break;case"journal":Ot.openBook();break;case"stories":Ot.openStories();break;case"festival":iv();break;case"compete":rv(Number(e));break;case"share":sv();break;case"help":rd();break;case"profile":E_(we("#game"),Q,Oe.getOutfitPreview("acorn",!0),()=>{bt(),Gt()});break;case"settings":Va();break;case"replay-intro":hd();break;case"music":Wi=!Wi,Wi?Cs():nn.pause(),pn==="settings"&&Va();break;case"sound":Vi=!Vi,we("#sound").textContent=Vi?"♫ 音效开":"♫ 音效关",we("#sound").setAttribute("aria-label",Vi?"关闭音效":"开启音效"),On(660),pn==="settings"&&Va();break;case"reset-ask":Qe(rt("翻开新的一页？","A FRESH START",`<p>将清除这次的金币、成长、甜点与庆典结果，从第一日重新开始。</p><div class="row">${Ye("重新开始","reset")}${Ye("继续这一周","close","","button subtle")}</div>`),"reset");break;case"reset":Q=$c(),At(Q),bt(),bn(),Pt("新的一周，新的可能。");break;case"spectator":Q.ending={score:0,grade:"纪念",title:"自由自在的森林生活",taste:0,growth:0,dress:0,bond:0,dessert:"与朋友分享的掌声"},bt(),Ls();break}}we("#game").addEventListener("click",n=>{const e=n.target.closest("[data-action]");e&&!e.disabled&&(On(),il(e.dataset.action,e.dataset.id,e))});we("#game").addEventListener("input",n=>{n.target.id==="music-volume"&&(nn.volume=Number(n.target.value)/100,we("#music-volume-value").textContent=`${n.target.value}%`),n.target.id==="heat-slider"&&(k==null?void 0:k.phase)==="heat"&&(k.temperature=Number(n.target.value),we("#temperature").textContent=k.temperature)});we("#sound").onclick=()=>il("sound");we("#help").onclick=()=>{k||rd()};window.addEventListener("keydown",n=>{fn!=null&&fn.active||Ot!=null&&Ot.opened||ut!=null&&ut.opened||jt!=null&&jt.opened||n.target.matches("input,textarea")||(n.code==="Space"&&(k==null?void 0:k.phase)==="mix"?(n.preventDefault(),n.repeat||ju()):n.key==="Escape"&&!k&&bn())});let Ga=performance.now();function Ho(n){if(Ot==null||Ot.updateEntry(),ut==null||ut.updatePet(Xn==="home"&&(!pn||pn==="bag"||pn==="schedule")&&!(Ot!=null&&Ot.opened)&&!(ut!=null&&ut.opened)&&!(jt!=null&&jt.opened)),Ot!=null&&Ot.opened||ut!=null&&ut.opened||jt!=null&&jt.opened){Ga=n,requestAnimationFrame(Ho);return}!document.hidden&&(k==null?void 0:k.type)==="course"&&k.feedback&&Oe.getInfo().classroomMotion.complete&&(k.feedback=!1,k.q++,k.q<3?Zu():G_()),!document.hidden&&(k==null?void 0:k.type)==="tasting"&&Oe.getInfo().bakingMotion.complete&&k_();const e=Math.min(n-Ga,100);if(Ga=n,document.hidden||(ev(e),(k==null?void 0:k.type)==="gather"&&(Yn==null||Yn.tick(e))),!document.hidden&&(k==null?void 0:k.phase)==="mix"){const t=we("#mix-needle");t&&(t.style.left=`${Yu(n)*100}%`)}if(!document.hidden&&(k==null?void 0:k.phase)==="heat"){k.elapsed=(k.elapsed||0)+e;const t=Math.abs(k.temperature-k.recipe.temp);k.heatTotal+=Math.max(0,1-Math.max(0,t-3)/32)*e,k.heatSamples+=e,we("#heat-progress").style.width=`${Math.min(100,k.elapsed/80)}%`,we("#heat-time").textContent=`${Math.max(0,Math.ceil(8-k.elapsed/1e3))} 秒`,we("#heat-feedback").textContent=t<=8?"温度刚刚好，保持住。":k.temperature<k.recipe.temp?"还不够暖，再加一点火。":"有点烫，稍微降低温度。",k.elapsed>=8e3&&O_()}requestAnimationFrame(Ho)}jt=Zd({game:we("#game"),getState:()=>Q,save:bt,world:Oe,pause:n=>Oe.setPaused(n),onEquipped:bn});ut=ih({game:we("#game"),getState:()=>Q,save:bt,refresh:Gt,pause:n=>Oe.setPaused(n),world:Oe,onWear:Ju,onRecipes:()=>il("recipes")});Ot=y_({game:we("#game"),getState:()=>Q,getContext:()=>{var n;return{view:Xn,panel:pn,collectionOpen:!!(ut!=null&&ut.opened)||!!(jt!=null&&jt.opened),phase:k==null?void 0:k.phase,activityName:we("#scene-label").textContent,recipe:(n=k==null?void 0:k.recipe)==null?void 0:n.name}},save:bt,refresh:Gt,pause:(n,e=0)=>{Oe.setPaused(n),!n&&(k==null?void 0:k.phase)==="mix"&&(k.start+=e)},portrait:()=>Oe.getDialoguePortrait(),onAlbum:()=>ut.album(),onCG:n=>ut.playCG(n),onActivity:()=>nv()});C_(we("#game"),we("#save-game-screen"));we("#save-game-screen").onclick=async()=>{const n=we("#save-game-screen");n.disabled=!0;try{await R_(we("#game"))}catch(e){Pt("截图未能保存，请重试。"),console.error(e)}finally{n.disabled=!1}};requestAnimationFrame(Ho);bn();Ss&&Pt(Ss);window.__acorn={get state(){return structuredClone(Q)},get view(){return Xn},get panel(){return pn},get round(){return k?structuredClone(k):null},renderer:()=>Oe.getInfo()};
