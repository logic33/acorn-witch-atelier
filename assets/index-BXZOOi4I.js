(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const $a="acorn-intro-seen-morning-v1";function ld(n){try{if(localStorage.getItem($a))return null}catch{}n.classList.add("intro-active");const e=document.createElement("div");e.className="intro-layer",e.hidden=!0,e.innerHTML='<video playsinline muted preload="auto"></video><p class="intro-status" role="status">正在准备片头…</p><button class="intro-enter">进入松团子的世界</button>';const t=e.querySelector("video"),i=e.querySelector(".intro-enter"),r=e.querySelector(".intro-status"),s=new AbortController;let a;t.poster="/acorn-witch-atelier/assets/intro/arrival-morning-poster.png",t.muted=!0,n.append(e);let o=!1;function l(){if(!o){o=!0,s.abort(),t.pause();try{localStorage.setItem($a,"1")}catch{}n.classList.add("intro-leaving"),setTimeout(()=>{e.remove(),t.removeAttribute("src"),t.load(),a&&URL.revokeObjectURL(a),n.classList.remove("intro-active","intro-leaving")},2200)}}return i.onclick=l,t.onended=l,t.onerror=()=>{r.textContent="片头暂时无法播放，可以直接进入小屋。"},{async start(){e.hidden=!1;try{const c=await fetch("/acorn-witch-atelier/assets/intro/arrival-morning.mp4",{signal:s.signal});if(!c.ok)throw new Error("片头下载失败");const u=await c.blob();if(o)return;a=URL.createObjectURL(u),t.src=a;try{await t.play(),r.hidden=!0}catch{r.textContent="点击画面播放片头，或直接进入小屋。",t.onclick=()=>t.play().then(()=>{r.hidden=!0}).catch(()=>{})}}catch(c){c.name!=="AbortError"&&(r.textContent="片头暂时无法载入，可以直接进入小屋。")}},get active(){return!o}}}function cd(){try{localStorage.removeItem($a)}catch{}location.reload()}const Hc="acorn-witch-save-v1",mr={baking:"烘焙",magic:"魔法",style:"审美",knowledge:"学识",charm:"亲和"},Vo={acorn:"橡果",berry:"莓果",cream:"奶油",herb:"香草",honey:"蜂蜜"},gr=[{id:"tart",name:"星光橡果塔",note:"酥脆塔皮，藏着一小片星空。",need:{acorn:2,berry:1,cream:1},temp:180,spell:"star",color:"#d9a050"},{id:"pie",name:"莓果云朵派",note:"把森林的清甜，叠进奶油云朵。",need:{berry:2,cream:1,herb:1},temp:170,spell:"forest",color:"#b54f65"},{id:"pudding",name:"蜂蜜布丁",note:"温柔的蜂蜜香，适合送给朋友。",need:{honey:2,cream:1},temp:160,spell:"heal",color:"#e3ba59"},{id:"maple",unlock:!0,name:"枫糖橡果饼",note:"轮盘新菜单 · 蜂蜜香裹住烤橡果。",need:{acorn:2,honey:1,cream:1},temp:175,spell:"forest",color:"#c69049"},{id:"berryroll",unlock:!0,name:"莓果奶油卷",note:"轮盘新菜单 · 把莓果卷进软软的奶油里。",need:{berry:2,cream:2,honey:1},temp:165,spell:"heal",color:"#dba3ad"}],mi=[{id:"acorn",name:"橡果烘焙师",short:"烘焙师",description:"松鼠围裙 · 格纹口袋 · 软软堆堆袜",color:"#776044",tags:"甜美 · 温暖",bonus:8,price:0},{id:"tea",name:"莓果茶会",short:"洛丽塔",description:"层叠蕾丝蓬裙 · 缎带蝴蝶结 · 玛丽珍鞋",color:"#b87587",tags:"甜美 · 华丽",bonus:14,price:70},{id:"forest",name:"森林小洋装",short:"小洋装",description:"短斗篷外套 · 收腰裙 · 小挎包与短靴",color:"#436d58",tags:"森林 · 温暖",bonus:10,price:55},{id:"school",name:"橡果学院",short:"校服",description:"水手领 · 格纹百褶裙 · 书包与银色耳环",color:"#3d4e59",tags:"学院 · 清新",bonus:12,price:45},{id:"adventure",name:"森林探险家",short:"冒险装",description:"短披风 · 皮革护腰 · 工具腰包与叶片耳坠",color:"#6b744f",tags:"冒险 · 自然",bonus:18,price:100},{id:"star",name:"飞行小魔女",short:"小魔女",description:"深蓝宽松裙 · 红蝴蝶结 · 送信包与扫帚",color:"#3d405b",tags:"魔法 · 自由",bonus:16,price:85}];function Vc(){return{version:1,day:1,slot:0,energy:90,mood:75,coins:120,stats:{baking:12,magic:8,style:8,knowledge:8,charm:10},inventory:{acorn:6,berry:5,cream:5,herb:3,honey:4},desserts:[],outfit:"acorn",owned:["acorn"],friendship:0,story:0,records:[],memories:[],memoryStamps:[],ending:null}}function hr(n,e){return Object.entries(e.need).every(([t,i])=>n.inventory[t]>=i)}function ud(n,e,t,i,r){return Math.min(100,Math.round(20+e*30+t*25+(i===r.spell?12:5)+Math.min(13,n.stats.baking*.25+n.stats.magic*.15)))}function Gc(n){return n>=88?"S":n>=72?"A":n>=52?"B":"C"}function vi(n,e){return(!n.ending||n.day>7)&&n.energy>=e&&!(n.day===7&&n.slot===3)}function dd(n,{name:e,cost:t=0,stats:i={},mood:r=0,coins:s=0,energy:a=0,ingredients:o={},dessert:l=null,friendship:c=0}){if(!vi(n,t))throw new Error("没有足够的体力或行动时段");if(n.coins+s<0)throw new Error("金币不足");for(const[u,d]of Object.entries(o))if(n.inventory[u]+d<0)throw new Error("材料不足");n.energy=Math.min(100,n.energy-t+a),n.mood=Math.max(0,Math.min(100,n.mood+r)),n.coins+=s;for(const[u,d]of Object.entries(i))n.stats[u]+=d;for(const[u,d]of Object.entries(o))n.inventory[u]+=d;return l&&n.desserts.push(l),n.friendship+=c,n.records.unshift({day:n.day,slot:n.slot,name:e,id:crypto.randomUUID(),createdAt:new Date().toISOString()}),n.slot++,n.slot===3&&n.day!==7&&(n.day++,n.slot=0,n.energy=Math.min(100,n.energy+25)),n}function hd(n,e){const t=Math.round(e.score*.5),i=Math.min(25,Math.round(n.stats.baking*.35+n.stats.magic*.25+n.stats.knowledge*.15)),r=Math.min(20,mi.find(l=>l.id===n.outfit).bonus+Math.floor(n.stats.style*.2)),s=Math.min(5,Math.floor(n.friendship/2)),a=t+i+r+s,o=a>=88?"金色掌声之夜":n.friendship>=6?"有人为你而来":n.stats.magic>n.stats.baking?"秋叶与星光":"第一份秋日心意";return{score:a,grade:Gc(a),title:o,taste:t,growth:i,dress:r,bond:s,dessert:e.name}}const ji=[{guest:"放学的小客人",request:"甜点配一杯热茶，想暖暖手。",choice:"tea",motion:"child"},{guest:"结伴而来的街坊",request:"今天想喝热可可，搭配一小块甜点。",choice:"cocoa",motion:"queue"},{guest:"喜欢甜味的小姐",request:"今天想吃甜一点的，请加一杯蜂蜜茶。",choice:"honey",motion:"vip"}],vs=2e4;function fd(n,e){const t=e.filter(a=>a.correct).length,i=e.filter(a=>a.perfect).length,r=Math.round((Math.round(n*.6)+18)*t/ji.length),s=i*5;return{served:t,perfect:i,sales:r,tips:s,coins:r+s,satisfaction:Math.round(t/ji.length*100),charm:t,mood:t||-2}}const pd=5,Vi=35,Go=[{id:"ribbon",slot:"accessory",name:"秋色蝴蝶结"},{id:"moon",slot:"accessory",name:"琥珀月牙耳饰"},{id:"leaf",slot:"accessory",name:"秋叶橡果发夹"}],zi=[{id:"orange",name:"橘猫",look:"橘色条纹 · 圆滚滚",line:"它把脑袋放在我的鞋上了……这是想跟我们回家吗？",action:"蹲下来摸摸它",reply:"咕噜噜……它眯着眼，把脑袋往你手心里送。"},{id:"calico",name:"三花猫",look:"橙黑花斑 · 爱扑落叶",line:"那片叶子是我变的。它追了这么久，我再变一片给它吧。",action:"陪它追落叶",reply:"它抬起爪子接住叶子，又轻轻推到了你面前。"},{id:"silver",name:"银渐层",look:"银白绒毛 · 圆脸",line:"像一小团落到地上的云。云也会呼噜吗？",action:"轻轻挠下巴",reply:"它仰起圆圆的脸，闭着眼睛蹭了蹭你的手。"},{id:"ragdoll",name:"布偶猫",look:"蓝眼睛 · 蓬松长毛",line:"它靠过来以后，我都舍不得翻书了。再坐一会儿吧。",action:"陪它打个盹",reply:"蓬松的尾巴轻轻一卷，它安心地靠着你睡着了。"},{id:"siamese",name:"暹罗猫",look:"蓝眼睛 · 深色脸爪",line:"我走到哪儿，它就跟到哪儿。你看，它又在问我们什么呢。",action:"轻声回应它",reply:"喵——它歪歪头，向你又迈近了一小步。"},{id:"black",name:"黑猫",look:"黑色短毛 · 金色眼睛",line:"我的帽子好像在动……原来你在这里！",action:"伸手打个招呼",reply:"黑色的小爪子伸过来，认真地碰了碰你的指尖。"},{id:"golden",name:"金渐层",look:"金色绒毛 · 圆脸绿眼",line:"它的毛和晒过太阳的秋叶一个颜色。我们叫它什么好呢？",action:"轻轻摸摸背",reply:"它舒舒服服地伸了个懒腰，又团成一小颗金色毛球。"},{id:"devon",name:"德文猫",look:"大耳朵 · 短卷毛",line:"它的耳朵也好大！是在偷偷听秋天说话吗？",action:"凑近悄悄说话",reply:"它竖起大耳朵，轻轻蹭了蹭你，像听懂了秘密。"},{id:"abyssinian",name:"阿比西尼亚猫",look:"暖棕短毛 · 修长灵巧",line:"刚才还在门边，一转眼就到椅背上了。真像一阵秋风。",action:"晃一晃秋叶",reply:"它轻巧地跃过去，停下时还回头等你跟上。"}],Ft=[{id:"magic",name:"第一片会飞的秋叶",activity:"course",stat:"magic",threshold:20,condition:"魔法达到 20 后完成一节课",costume:"魔女装 · 彩窗教室",lines:["同学们离开后，窗边那片秋叶仍悬在半空，怎么也落不下来。松团子收起笑容，重新翻开了课本。","「我只练过让它飞起来……书上怎么没写，它不肯下来怎么办？」","她试着把声音放轻，秋叶却绕着灯罩越转越快。叶柄碰到铜铃，清脆的一声响让她缩了缩耳朵。","她伸出的手停住了，转而把书合上。「也许它不是想听更多咒语。我先不催它了。」","铃声渐渐停了。她摊开空着的手，让叶子自己靠近；那点微光终于从灯罩旁慢慢降下来。","叶子在掌心上方摇了一下，安静地落下。她没有马上欢呼，而是认真看了看自己还在发抖的手。","「原来停下来也要练习。我以前总想让大家看看，我能把魔法变得多漂亮。」","她在课本空白处画下一片小叶子。「这一页先留着吧。你觉得刚才，是哪里开始不一样了？」"]},{id:"baking",name:"第一口，留给你",activity:"baking",stat:"baking",threshold:27,condition:"烘焙达到 27 后完成一次烘焙",costume:"围裙 · 小屋厨房",lines:["甜点已经出炉，松团子却拿着两只小盘子，在桌边站了很久。","「这一口本来想留给你……可是如果不合你的口味呢？」","她低头整理奶油，越想让它完美，叉尖越不听话。一小块莓果滑了下来，留下歪歪的缺口。","她的尾巴垂下来，伸手去拿备用的盘子，又停住了。「我是不是把分享，弄得像交作业一样？」","她放下装饰用的小匙，把那块不太整齐的甜点放到窗边，又给另一只盘子分了一小份。","「我可以先说实话：这里有点酸，边缘也烤得脆了。可是刚打开烤箱的时候，我第一个想到的是你。」","她把小叉子放在盘边，终于不再修补那个缺口。「不喜欢也可以告诉我，不用为了让我高兴说好吃。」","她坐到桌边，给你留出挑选的余地。「下一次，我们试着做一种你喜欢、我也想尝尝的味道，好吗？」"]},{id:"shop",name:"打烊后的掌声",activity:"shop",stat:"charm",threshold:16,condition:"亲和达到 16 后完成一次营业",costume:"围裙 · 烘焙小铺",lines:["最后一位客人离开后，松团子在桌脚旁发现了一张折起来的纸。","纸上画着一块甜点，下面只写着几个字：下次还想来，可是我不太敢开口。","她对着门外看了看，街上已经没有刚才那位小客人的身影。「我今天一直在忙，都没发现它想说话。」","她原本要擦掉柜台上的欢迎字样，手里的布停在半空。「是不是一定要会大声点单，才能被好好招待？」","她找来一张旧菜单，把饮品旁边画上杯子，又在角落留出一块空白。","「不会说的时候，可以指给我看。不知道想要什么，也可以慢慢选。」她把菜单放到更低、容易够到的地方。","门外传来轻轻的脚步，刚才的小客人探头看了看新菜单。松团子没有催促，只笑着把它往前推了一点。","小客人点了点那幅杯子。她回头轻声问你：「空白的这一角，还能写点什么，让它知道不着急呢？」"]},{id:"explore",name:"秋风知道的小路",activity:"gather",visits:3,condition:"完成三次森林采集",costume:"冒险装 · 榛果林",lines:["小路尽头，松团子在熟悉的苔草旁停下来。昨夜落下的树枝挡住了那条窄窄的路。","「我小时候总从这里过去。你听，树叶的声音……今天好像不太一样。」","灌木底下传来细小的摩擦声。一只刺猬拖着叶子绕来绕去，每次都被同一根横枝挡回来。","松团子刚要伸手抱它，刺猬就缩成了小球。她立刻退后，把自己的尾巴也收了起来。","「它不认识我。我以为帮忙就是把它带过去，可它可能只想自己走。」她蹲远了一点，耐心等那颗小球重新展开。","刺猬又试着往左钻。她顺着那个方向，轻轻拨开几片压低的蕨叶，让那条原本就有的小缝重新露出来。","小小的身影穿过缝隙消失了，灌木另一侧响起窸窣声。松团子躺回苔草上，长长地松了一口气。","「原来这条路不只属于我的回忆。」她侧过脸看你。「以后再来，我们怎么走，才不会挡住这些小邻居呢？」"]},{id:"bond",name:"再陪我读一页",activity:"home",bond:12,condition:"与松团子的好感达到 12，回到小屋",costume:"日常围裙装 · 窗边",lines:["松团子把书挪过来，却在同一页上停了很久。故事里的小旅人刚向朋友告别。","「它都说了会回来，为什么留下来的那个人还是难过呢？」","她往后翻了两页，又急忙翻回来。「我想先看看结局……这样就不用一直担心了吧。」","窗外传来风声，一张夹在书里的旧书签滑到桌上。上面是她刚学会写名字时，留下的歪歪扭扭的字。","她拾起书签，慢慢把书翻回原来的那页。「那个时候，我也不知道自己后来能把名字写好。」","她把想偷看的后半本合住，只留出眼前这一页。「也许不知道以后怎样的时候，现在的陪伴才会这么重要。」","她读完了小旅人出门的那一段，这次没有急着找结局，肩膀也渐渐放松下来。","「我还会担心的。」她把书签放在两页中间。「但今天可以先读到这里。你有没有一段舍不得翻过去的故事？」"]},{id:"festival",name:"把秋天送给你",activity:"festival",condition:"参加第七天的秋日祭",costume:"秋日盛装 · 祭典广场",lines:["广场上的灯亮起来时，松团子还攥着那片准备送出的秋叶，叶边已经被手心捂得微微卷起。","「大家的礼物都有漂亮的盒子。我找了很久，好像只找得到这种东西。」","一阵风吹过，叶片的微光暗了下来。她连忙用双手护住它，却越护越紧。","她看着路边孩子们捡起普通落叶，互相交换形状和颜色，慢慢松开了手指。","「它不一定要一直发光，才值得被留下吧？」她把叶子放平，让灯火照见叶面细细的脉络。","她指着其中一道纹路，说起第一次走进小屋时的紧张，又说到那些想问、却一直没敢问出口的问题。","「我原来想把整个秋天都送出去。现在想想，应该先问问你，愿不愿意留下我们一起过的这一小段。」","她伸出手，让叶子安静地躺在掌心。「不用现在就回答。灯还亮着，我们可以慢慢说。」"]}],Hi=[{id:"warm",name:"暖茸茸的初遇",cats:["golden","devon","orange"],part:"ribbon",menu:"maple"},{id:"forest",name:"林间小脚印",cats:["abyssinian","calico","black"],part:"moon",menu:"berryroll"},{id:"tea",name:"午后茶会",cats:["orange","silver","golden"],part:"leaf",menu:"maple"},{id:"moon",name:"月亮的来客",cats:["ragdoll","siamese","silver"],part:"ribbon",menu:"berryroll"},{id:"hat",name:"帽子里的秘密",cats:["black","devon","calico"],part:"moon",menu:"maple"}];function At(n){var t;n.collection??(n.collection={});const e=n.collection;return e.community??(e.community={calls:[],works:[],reads:[],collabs:[],recruitments:[],startRecords:((t=n.records)==null?void 0:t.length)??0}),e.customOutfits??(e.customOutfits=[]),e.activeCustom??(e.activeCustom=null),e.cgs??(e.cgs=[]),e.seen??(e.seen=[]),e.pets??(e.pets=[]),e.petNames??(e.petNames={}),e.activePet??(e.activePet=null),e.petInteractions??(e.petInteractions={}),e.parts??(e.parts=[]),e.menus??(e.menus=[]),e.draws??(e.draws={}),e.bond??(e.bond=0),e.bondSources??(e.bondSources=[]),e.visits??(e.visits={}),e.wear??(e.wear={accessory:null}),e}function $c(n,e){const t=At(n);t.bondSources.includes(e)||(t.bondSources.push(e),t.bond=Math.min(100,t.bond+2))}function Wc(n,e){const t=At(n);if(t.cgs.includes(e))return!1;t.cgs.push(e),n.memories??(n.memories=[]);const i=Ft.find(r=>r.id===e);return n.memories.push({id:`cg-${e}`,title:i.name,summary:i.lines.at(-1),activity:i.activity,kind:"canon",cg:e,day:n.day,slot:n.slot,createdAt:new Date().toISOString()}),!0}function qc(n,e){const t=At(n);for(const i of Ft)i.activity!==e||i.id==="festival"||i.stat&&n.stats[i.stat]<i.threshold||i.visits&&(t.visits[e]??0)<i.visits||i.bond&&t.bond<i.bond||Wc(n,i.id)}function md(n,e){const t=At(n);t.visits[e]=(t.visits[e]??0)+1,$c(n,`${n.day}:${e}`),qc(n,e)}function gd(n){return[...n.cats.map(e=>({id:`pet-${e}`,type:"pet",item:e,name:zi.find(t=>t.id===e).name})),{id:`part-${n.part}`,type:"part",item:n.part,name:Go.find(e=>e.id===n.part).name},{id:"outfit-tea",type:"outfit",item:"tea",name:"莓果茶会套装"},{id:`menu-${n.menu}`,type:"menu",item:n.menu,name:gr.find(e=>e.id===n.menu).name},{id:"coins-20",type:"coins",amount:20,name:"20 金币"}]}function Wa(n,e){const t=At(n),i=Hi.find(r=>r.id===e);return i?gd(i).filter(r=>!(t.draws[e]??[]).includes(r.id)&&!(r.type==="pet"&&t.pets.includes(r.item))&&!(r.type==="part"&&t.parts.includes(r.item))&&!(r.type==="menu"&&t.menus.includes(r.item))&&!(r.type==="outfit"&&n.owned.includes(r.item))):[]}function _d(n,e,t=Math.random()){var a;const i=Wa(n,e);if(n.coins<Vi)throw new Error("金币不足，去小铺接待客人吧。");if(!i.length)throw new Error("这期已经收集齐啦。");if(!Number.isFinite(t)||t<0||t>=1)throw new Error("抽取值无效");const r=i[Math.floor(t*i.length)],s=n.collection;return n.coins-=Vi,(a=s.draws)[e]??(a[e]=[]),s.draws[e].push(r.id),r.type==="coins"&&(n.coins+=r.amount),r.type==="pet"&&(s.pets.push(r.item),s.activePet??(s.activePet=r.item)),r.type==="part"&&s.parts.push(r.item),r.type==="menu"&&s.menus.push(r.item),r.type==="outfit"&&n.owned.push(r.item),s.lastReward={...r,poolId:e},r}function vd(n){return gr.filter(e=>!e.unlock||At(n).menus.includes(e.id))}const Si=240;function xd(n){var i;const e=new Set(((i=n.collection)==null?void 0:i.cgs)??[]);return{level:2,percent:20,count:Ft.filter(r=>e.has(r.id)).length,total:Ft.length,next:Ft.find(r=>!e.has(r.id))}}function Xc(n){var a;const e=At(n).community,t=e.works.length+(((a=n.characterStories)==null?void 0:a.length)??0),i=60+t*20+e.collabs.length*15,r=60+e.calls.length*5+Math.max(0,n.records.length-e.startRecords)*2+e.reads.length*2,s=i+r;return{level:1+Math.floor(s/100),percent:s%100,richness:i,popularity:r,works:t,experience:s}}function yd(n,e=new Date){const t=[e.getFullYear(),e.getMonth()+1,e.getDate()].join("-"),i=At(n).community;return i.calls.includes(t)?!1:(i.calls.push(t),!0)}function bd(n,e){const t=At(n).community;return!["story","image","video","remix"].includes(e)||t.works.includes(e)?!1:(t.works.push(e),!0)}function ul(n,e){const t=At(n).community;return t.collabs.includes(e)?!1:(t.collabs.push(e),!0)}function Sd(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Mi={},Us,dl;function Md(){return dl||(dl=1,Us=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Us}var Ns={},kn={},hl;function xi(){if(hl)return kn;hl=1;let n;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return kn.getSymbolSize=function(i){if(!i)throw new Error('"version" cannot be null or undefined');if(i<1||i>40)throw new Error('"version" should be in range from 1 to 40');return i*4+17},kn.getSymbolTotalCodewords=function(i){return e[i]},kn.getBCHDigit=function(t){let i=0;for(;t!==0;)i++,t>>>=1;return i},kn.setToSJISFunction=function(i){if(typeof i!="function")throw new Error('"toSJISFunc" is not a valid function.');n=i},kn.isKanjiModeEnabled=function(){return typeof n<"u"},kn.toSJIS=function(i){return n(i)},kn}var Fs={},fl;function $o(){return fl||(fl=1,function(n){n.L={bit:1},n.M={bit:0},n.Q={bit:3},n.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return n.L;case"m":case"medium":return n.M;case"q":case"quartile":return n.Q;case"h":case"high":return n.H;default:throw new Error("Unknown EC Level: "+t)}}n.isValid=function(i){return i&&typeof i.bit<"u"&&i.bit>=0&&i.bit<4},n.from=function(i,r){if(n.isValid(i))return i;try{return e(i)}catch{return r}}}(Fs)),Fs}var Os,pl;function Ed(){if(pl)return Os;pl=1;function n(){this.buffer=[],this.length=0}return n.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},Os=n,Os}var Bs,ml;function Td(){if(ml)return Bs;ml=1;function n(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return n.prototype.set=function(e,t,i,r){const s=e*this.size+t;this.data[s]=i,r&&(this.reservedBit[s]=!0)},n.prototype.get=function(e,t){return this.data[e*this.size+t]},n.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i},n.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},Bs=n,Bs}var ks={},gl;function wd(){return gl||(gl=1,function(n){const e=xi().getSymbolSize;n.getRowColCoords=function(i){if(i===1)return[];const r=Math.floor(i/7)+2,s=e(i),a=s===145?26:Math.ceil((s-13)/(2*r-2))*2,o=[s-7];for(let l=1;l<r-1;l++)o[l]=o[l-1]-a;return o.push(6),o.reverse()},n.getPositions=function(i){const r=[],s=n.getRowColCoords(i),a=s.length;for(let o=0;o<a;o++)for(let l=0;l<a;l++)o===0&&l===0||o===0&&l===a-1||o===a-1&&l===0||r.push([s[o],s[l]]);return r}}(ks)),ks}var zs={},_l;function Ad(){if(_l)return zs;_l=1;const n=xi().getSymbolSize,e=7;return zs.getPositions=function(i){const r=n(i);return[[0,0],[r-e,0],[0,r-e]]},zs}var Hs={},vl;function Cd(){return vl||(vl=1,function(n){n.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};n.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},n.from=function(r){return n.isValid(r)?parseInt(r,10):void 0},n.getPenaltyN1=function(r){const s=r.size;let a=0,o=0,l=0,c=null,u=null;for(let d=0;d<s;d++){o=l=0,c=u=null;for(let f=0;f<s;f++){let m=r.get(d,f);m===c?o++:(o>=5&&(a+=e.N1+(o-5)),c=m,o=1),m=r.get(f,d),m===u?l++:(l>=5&&(a+=e.N1+(l-5)),u=m,l=1)}o>=5&&(a+=e.N1+(o-5)),l>=5&&(a+=e.N1+(l-5))}return a},n.getPenaltyN2=function(r){const s=r.size;let a=0;for(let o=0;o<s-1;o++)for(let l=0;l<s-1;l++){const c=r.get(o,l)+r.get(o,l+1)+r.get(o+1,l)+r.get(o+1,l+1);(c===4||c===0)&&a++}return a*e.N2},n.getPenaltyN3=function(r){const s=r.size;let a=0,o=0,l=0;for(let c=0;c<s;c++){o=l=0;for(let u=0;u<s;u++)o=o<<1&2047|r.get(c,u),u>=10&&(o===1488||o===93)&&a++,l=l<<1&2047|r.get(u,c),u>=10&&(l===1488||l===93)&&a++}return a*e.N3},n.getPenaltyN4=function(r){let s=0;const a=r.data.length;for(let l=0;l<a;l++)s+=r.data[l];return Math.abs(Math.ceil(s*100/a/5)-10)*e.N4};function t(i,r,s){switch(i){case n.Patterns.PATTERN000:return(r+s)%2===0;case n.Patterns.PATTERN001:return r%2===0;case n.Patterns.PATTERN010:return s%3===0;case n.Patterns.PATTERN011:return(r+s)%3===0;case n.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(s/3))%2===0;case n.Patterns.PATTERN101:return r*s%2+r*s%3===0;case n.Patterns.PATTERN110:return(r*s%2+r*s%3)%2===0;case n.Patterns.PATTERN111:return(r*s%3+(r+s)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}n.applyMask=function(r,s){const a=s.size;for(let o=0;o<a;o++)for(let l=0;l<a;l++)s.isReserved(l,o)||s.xor(l,o,t(r,l,o))},n.getBestMask=function(r,s){const a=Object.keys(n.Patterns).length;let o=0,l=1/0;for(let c=0;c<a;c++){s(c),n.applyMask(c,r);const u=n.getPenaltyN1(r)+n.getPenaltyN2(r)+n.getPenaltyN3(r)+n.getPenaltyN4(r);n.applyMask(c,r),u<l&&(l=u,o=c)}return o}}(Hs)),Hs}var Ir={},xl;function Yc(){if(xl)return Ir;xl=1;const n=$o(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return Ir.getBlocksCount=function(r,s){switch(s){case n.L:return e[(r-1)*4+0];case n.M:return e[(r-1)*4+1];case n.Q:return e[(r-1)*4+2];case n.H:return e[(r-1)*4+3];default:return}},Ir.getTotalCodewordsCount=function(r,s){switch(s){case n.L:return t[(r-1)*4+0];case n.M:return t[(r-1)*4+1];case n.Q:return t[(r-1)*4+2];case n.H:return t[(r-1)*4+3];default:return}},Ir}var Vs={},ar={},yl;function Rd(){if(yl)return ar;yl=1;const n=new Uint8Array(512),e=new Uint8Array(256);return function(){let i=1;for(let r=0;r<255;r++)n[r]=i,e[i]=r,i<<=1,i&256&&(i^=285);for(let r=255;r<512;r++)n[r]=n[r-255]}(),ar.log=function(i){if(i<1)throw new Error("log("+i+")");return e[i]},ar.exp=function(i){return n[i]},ar.mul=function(i,r){return i===0||r===0?0:n[e[i]+e[r]]},ar}var bl;function Pd(){return bl||(bl=1,function(n){const e=Rd();n.mul=function(i,r){const s=new Uint8Array(i.length+r.length-1);for(let a=0;a<i.length;a++)for(let o=0;o<r.length;o++)s[a+o]^=e.mul(i[a],r[o]);return s},n.mod=function(i,r){let s=new Uint8Array(i);for(;s.length-r.length>=0;){const a=s[0];for(let l=0;l<r.length;l++)s[l]^=e.mul(r[l],a);let o=0;for(;o<s.length&&s[o]===0;)o++;s=s.slice(o)}return s},n.generateECPolynomial=function(i){let r=new Uint8Array([1]);for(let s=0;s<i;s++)r=n.mul(r,new Uint8Array([1,e.exp(s)]));return r}}(Vs)),Vs}var Gs,Sl;function Ld(){if(Sl)return Gs;Sl=1;const n=Pd();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(i){this.degree=i,this.genPoly=n.generateECPolynomial(this.degree)},e.prototype.encode=function(i){if(!this.genPoly)throw new Error("Encoder not initialized");const r=new Uint8Array(i.length+this.degree);r.set(i);const s=n.mod(r,this.genPoly),a=this.degree-s.length;if(a>0){const o=new Uint8Array(this.degree);return o.set(s,a),o}return s},Gs=e,Gs}var $s={},Ws={},qs={},Ml;function jc(){return Ml||(Ml=1,qs.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),qs}var gn={},El;function Kc(){if(El)return gn;El=1;const n="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const i="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;gn.KANJI=new RegExp(t,"g"),gn.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),gn.BYTE=new RegExp(i,"g"),gn.NUMERIC=new RegExp(n,"g"),gn.ALPHANUMERIC=new RegExp(e,"g");const r=new RegExp("^"+t+"$"),s=new RegExp("^"+n+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return gn.testKanji=function(l){return r.test(l)},gn.testNumeric=function(l){return s.test(l)},gn.testAlphanumeric=function(l){return a.test(l)},gn}var Tl;function yi(){return Tl||(Tl=1,function(n){const e=jc(),t=Kc();n.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},n.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},n.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},n.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},n.MIXED={bit:-1},n.getCharCountIndicator=function(s,a){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?s.ccBits[0]:a<27?s.ccBits[1]:s.ccBits[2]},n.getBestModeForData=function(s){return t.testNumeric(s)?n.NUMERIC:t.testAlphanumeric(s)?n.ALPHANUMERIC:t.testKanji(s)?n.KANJI:n.BYTE},n.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},n.isValid=function(s){return s&&s.bit&&s.ccBits};function i(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return n.NUMERIC;case"alphanumeric":return n.ALPHANUMERIC;case"kanji":return n.KANJI;case"byte":return n.BYTE;default:throw new Error("Unknown mode: "+r)}}n.from=function(s,a){if(n.isValid(s))return s;try{return i(s)}catch{return a}}}(Ws)),Ws}var wl;function Dd(){return wl||(wl=1,function(n){const e=xi(),t=Yc(),i=$o(),r=yi(),s=jc(),a=7973,o=e.getBCHDigit(a);function l(f,m,g){for(let _=1;_<=40;_++)if(m<=n.getCapacity(_,g,f))return _}function c(f,m){return r.getCharCountIndicator(f,m)+4}function u(f,m){let g=0;return f.forEach(function(_){const p=c(_.mode,m);g+=p+_.getBitsLength()}),g}function d(f,m){for(let g=1;g<=40;g++)if(u(f,g)<=n.getCapacity(g,m,r.MIXED))return g}n.from=function(m,g){return s.isValid(m)?parseInt(m,10):g},n.getCapacity=function(m,g,_){if(!s.isValid(m))throw new Error("Invalid QR Code version");typeof _>"u"&&(_=r.BYTE);const p=e.getSymbolTotalCodewords(m),h=t.getTotalCodewordsCount(m,g),A=(p-h)*8;if(_===r.MIXED)return A;const S=A-c(_,m);switch(_){case r.NUMERIC:return Math.floor(S/10*3);case r.ALPHANUMERIC:return Math.floor(S/11*2);case r.KANJI:return Math.floor(S/13);case r.BYTE:default:return Math.floor(S/8)}},n.getBestVersionForData=function(m,g){let _;const p=i.from(g,i.M);if(Array.isArray(m)){if(m.length>1)return d(m,p);if(m.length===0)return 1;_=m[0]}else _=m;return l(_.mode,_.getLength(),p)},n.getEncodedBits=function(m){if(!s.isValid(m)||m<7)throw new Error("Invalid QR Code version");let g=m<<12;for(;e.getBCHDigit(g)-o>=0;)g^=a<<e.getBCHDigit(g)-o;return m<<12|g}}($s)),$s}var Xs={},Al;function Id(){if(Al)return Xs;Al=1;const n=xi(),e=1335,t=21522,i=n.getBCHDigit(e);return Xs.getEncodedBits=function(s,a){const o=s.bit<<3|a;let l=o<<10;for(;n.getBCHDigit(l)-i>=0;)l^=e<<n.getBCHDigit(l)-i;return(o<<10|l)^t},Xs}var Ys={},js,Cl;function Ud(){if(Cl)return js;Cl=1;const n=yi();function e(t){this.mode=n.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(i){return 10*Math.floor(i/3)+(i%3?i%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(i){let r,s,a;for(r=0;r+3<=this.data.length;r+=3)s=this.data.substr(r,3),a=parseInt(s,10),i.put(a,10);const o=this.data.length-r;o>0&&(s=this.data.substr(r),a=parseInt(s,10),i.put(a,o*3+1))},js=e,js}var Ks,Rl;function Nd(){if(Rl)return Ks;Rl=1;const n=yi(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(i){this.mode=n.ALPHANUMERIC,this.data=i}return t.getBitsLength=function(r){return 11*Math.floor(r/2)+6*(r%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(r){let s;for(s=0;s+2<=this.data.length;s+=2){let a=e.indexOf(this.data[s])*45;a+=e.indexOf(this.data[s+1]),r.put(a,11)}this.data.length%2&&r.put(e.indexOf(this.data[s]),6)},Ks=t,Ks}var Zs,Pl;function Fd(){if(Pl)return Zs;Pl=1;const n=yi();function e(t){this.mode=n.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(i){return i*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let i=0,r=this.data.length;i<r;i++)t.put(this.data[i],8)},Zs=e,Zs}var Js,Ll;function Od(){if(Ll)return Js;Ll=1;const n=yi(),e=xi();function t(i){this.mode=n.KANJI,this.data=i}return t.getBitsLength=function(r){return r*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let r;for(r=0;r<this.data.length;r++){let s=e.toSJIS(this.data[r]);if(s>=33088&&s<=40956)s-=33088;else if(s>=57408&&s<=60351)s-=49472;else throw new Error("Invalid SJIS character: "+this.data[r]+`
Make sure your charset is UTF-8`);s=(s>>>8&255)*192+(s&255),i.put(s,13)}},Js=t,Js}var Qs={exports:{}},Dl;function Bd(){return Dl||(Dl=1,function(n){var e={single_source_shortest_paths:function(t,i,r){var s={},a={};a[i]=0;var o=e.PriorityQueue.make();o.push(i,0);for(var l,c,u,d,f,m,g,_,p;!o.empty();){l=o.pop(),c=l.value,d=l.cost,f=t[c]||{};for(u in f)f.hasOwnProperty(u)&&(m=f[u],g=d+m,_=a[u],p=typeof a[u]>"u",(p||_>g)&&(a[u]=g,o.push(u,g),s[u]=c))}if(typeof r<"u"&&typeof a[r]>"u"){var h=["Could not find a path from ",i," to ",r,"."].join("");throw new Error(h)}return s},extract_shortest_path_from_predecessor_list:function(t,i){for(var r=[],s=i;s;)r.push(s),t[s],s=t[s];return r.reverse(),r},find_path:function(t,i,r){var s=e.single_source_shortest_paths(t,i,r);return e.extract_shortest_path_from_predecessor_list(s,r)},PriorityQueue:{make:function(t){var i=e.PriorityQueue,r={},s;t=t||{};for(s in i)i.hasOwnProperty(s)&&(r[s]=i[s]);return r.queue=[],r.sorter=t.sorter||i.default_sorter,r},default_sorter:function(t,i){return t.cost-i.cost},push:function(t,i){var r={value:t,cost:i};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};n.exports=e}(Qs)),Qs.exports}var Il;function kd(){return Il||(Il=1,function(n){const e=yi(),t=Ud(),i=Nd(),r=Fd(),s=Od(),a=Kc(),o=xi(),l=Bd();function c(h){return unescape(encodeURIComponent(h)).length}function u(h,A,S){const y=[];let P;for(;(P=h.exec(S))!==null;)y.push({data:P[0],index:P.index,mode:A,length:P[0].length});return y}function d(h){const A=u(a.NUMERIC,e.NUMERIC,h),S=u(a.ALPHANUMERIC,e.ALPHANUMERIC,h);let y,P;return o.isKanjiModeEnabled()?(y=u(a.BYTE,e.BYTE,h),P=u(a.KANJI,e.KANJI,h)):(y=u(a.BYTE_KANJI,e.BYTE,h),P=[]),A.concat(S,y,P).sort(function(E,L){return E.index-L.index}).map(function(E){return{data:E.data,mode:E.mode,length:E.length}})}function f(h,A){switch(A){case e.NUMERIC:return t.getBitsLength(h);case e.ALPHANUMERIC:return i.getBitsLength(h);case e.KANJI:return s.getBitsLength(h);case e.BYTE:return r.getBitsLength(h)}}function m(h){return h.reduce(function(A,S){const y=A.length-1>=0?A[A.length-1]:null;return y&&y.mode===S.mode?(A[A.length-1].data+=S.data,A):(A.push(S),A)},[])}function g(h){const A=[];for(let S=0;S<h.length;S++){const y=h[S];switch(y.mode){case e.NUMERIC:A.push([y,{data:y.data,mode:e.ALPHANUMERIC,length:y.length},{data:y.data,mode:e.BYTE,length:y.length}]);break;case e.ALPHANUMERIC:A.push([y,{data:y.data,mode:e.BYTE,length:y.length}]);break;case e.KANJI:A.push([y,{data:y.data,mode:e.BYTE,length:c(y.data)}]);break;case e.BYTE:A.push([{data:y.data,mode:e.BYTE,length:c(y.data)}])}}return A}function _(h,A){const S={},y={start:{}};let P=["start"];for(let w=0;w<h.length;w++){const E=h[w],L=[];for(let v=0;v<E.length;v++){const b=E[v],C=""+w+v;L.push(C),S[C]={node:b,lastCount:0},y[C]={};for(let U=0;U<P.length;U++){const O=P[U];S[O]&&S[O].node.mode===b.mode?(y[O][C]=f(S[O].lastCount+b.length,b.mode)-f(S[O].lastCount,b.mode),S[O].lastCount+=b.length):(S[O]&&(S[O].lastCount=b.length),y[O][C]=f(b.length,b.mode)+4+e.getCharCountIndicator(b.mode,A))}}P=L}for(let w=0;w<P.length;w++)y[P[w]].end=0;return{map:y,table:S}}function p(h,A){let S;const y=e.getBestModeForData(h);if(S=e.from(A,y),S!==e.BYTE&&S.bit<y.bit)throw new Error('"'+h+'" cannot be encoded with mode '+e.toString(S)+`.
 Suggested mode is: `+e.toString(y));switch(S===e.KANJI&&!o.isKanjiModeEnabled()&&(S=e.BYTE),S){case e.NUMERIC:return new t(h);case e.ALPHANUMERIC:return new i(h);case e.KANJI:return new s(h);case e.BYTE:return new r(h)}}n.fromArray=function(A){return A.reduce(function(S,y){return typeof y=="string"?S.push(p(y,null)):y.data&&S.push(p(y.data,y.mode)),S},[])},n.fromString=function(A,S){const y=d(A,o.isKanjiModeEnabled()),P=g(y),w=_(P,S),E=l.find_path(w.map,"start","end"),L=[];for(let v=1;v<E.length-1;v++)L.push(w.table[E[v]].node);return n.fromArray(m(L))},n.rawSplit=function(A){return n.fromArray(d(A,o.isKanjiModeEnabled()))}}(Ys)),Ys}var Ul;function zd(){if(Ul)return Ns;Ul=1;const n=xi(),e=$o(),t=Ed(),i=Td(),r=wd(),s=Ad(),a=Cd(),o=Yc(),l=Ld(),c=Dd(),u=Id(),d=yi(),f=kd();function m(w,E){const L=w.size,v=s.getPositions(E);for(let b=0;b<v.length;b++){const C=v[b][0],U=v[b][1];for(let O=-1;O<=7;O++)if(!(C+O<=-1||L<=C+O))for(let z=-1;z<=7;z++)U+z<=-1||L<=U+z||(O>=0&&O<=6&&(z===0||z===6)||z>=0&&z<=6&&(O===0||O===6)||O>=2&&O<=4&&z>=2&&z<=4?w.set(C+O,U+z,!0,!0):w.set(C+O,U+z,!1,!0))}}function g(w){const E=w.size;for(let L=8;L<E-8;L++){const v=L%2===0;w.set(L,6,v,!0),w.set(6,L,v,!0)}}function _(w,E){const L=r.getPositions(E);for(let v=0;v<L.length;v++){const b=L[v][0],C=L[v][1];for(let U=-2;U<=2;U++)for(let O=-2;O<=2;O++)U===-2||U===2||O===-2||O===2||U===0&&O===0?w.set(b+U,C+O,!0,!0):w.set(b+U,C+O,!1,!0)}}function p(w,E){const L=w.size,v=c.getEncodedBits(E);let b,C,U;for(let O=0;O<18;O++)b=Math.floor(O/3),C=O%3+L-8-3,U=(v>>O&1)===1,w.set(b,C,U,!0),w.set(C,b,U,!0)}function h(w,E,L){const v=w.size,b=u.getEncodedBits(E,L);let C,U;for(C=0;C<15;C++)U=(b>>C&1)===1,C<6?w.set(C,8,U,!0):C<8?w.set(C+1,8,U,!0):w.set(v-15+C,8,U,!0),C<8?w.set(8,v-C-1,U,!0):C<9?w.set(8,15-C-1+1,U,!0):w.set(8,15-C-1,U,!0);w.set(v-8,8,1,!0)}function A(w,E){const L=w.size;let v=-1,b=L-1,C=7,U=0;for(let O=L-1;O>0;O-=2)for(O===6&&O--;;){for(let z=0;z<2;z++)if(!w.isReserved(b,O-z)){let q=!1;U<E.length&&(q=(E[U]>>>C&1)===1),w.set(b,O-z,q),C--,C===-1&&(U++,C=7)}if(b+=v,b<0||L<=b){b-=v,v=-v;break}}}function S(w,E,L){const v=new t;L.forEach(function(z){v.put(z.mode.bit,4),v.put(z.getLength(),d.getCharCountIndicator(z.mode,w)),z.write(v)});const b=n.getSymbolTotalCodewords(w),C=o.getTotalCodewordsCount(w,E),U=(b-C)*8;for(v.getLengthInBits()+4<=U&&v.put(0,4);v.getLengthInBits()%8!==0;)v.putBit(0);const O=(U-v.getLengthInBits())/8;for(let z=0;z<O;z++)v.put(z%2?17:236,8);return y(v,w,E)}function y(w,E,L){const v=n.getSymbolTotalCodewords(E),b=o.getTotalCodewordsCount(E,L),C=v-b,U=o.getBlocksCount(E,L),O=v%U,z=U-O,q=Math.floor(v/U),j=Math.floor(C/U),F=j+1,T=q-j,D=new l(T);let $=0;const W=new Array(U),ie=new Array(U);let Te=0;const Be=new Uint8Array(w.buffer);for(let Ce=0;Ce<U;Ce++){const Se=Ce<z?j:F;W[Ce]=Be.slice($,$+Se),ie[Ce]=D.encode(W[Ce]),$+=Se,Te=Math.max(Te,Se)}const ze=new Uint8Array(v);let Q=0,ne,ve;for(ne=0;ne<Te;ne++)for(ve=0;ve<U;ve++)ne<W[ve].length&&(ze[Q++]=W[ve][ne]);for(ne=0;ne<T;ne++)for(ve=0;ve<U;ve++)ze[Q++]=ie[ve][ne];return ze}function P(w,E,L,v){let b;if(Array.isArray(w))b=f.fromArray(w);else if(typeof w=="string"){let q=E;if(!q){const j=f.rawSplit(w);q=c.getBestVersionForData(j,L)}b=f.fromString(w,q||40)}else throw new Error("Invalid data");const C=c.getBestVersionForData(b,L);if(!C)throw new Error("The amount of data is too big to be stored in a QR Code");if(!E)E=C;else if(E<C)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+C+`.
`);const U=S(E,L,b),O=n.getSymbolSize(E),z=new i(O);return m(z,E),g(z),_(z,E),h(z,L,0),E>=7&&p(z,E),A(z,U),isNaN(v)&&(v=a.getBestMask(z,h.bind(null,z,L))),a.applyMask(v,z),h(z,L,v),{modules:z,version:E,errorCorrectionLevel:L,maskPattern:v,segments:b}}return Ns.create=function(E,L){if(typeof E>"u"||E==="")throw new Error("No input text");let v=e.M,b,C;return typeof L<"u"&&(v=e.from(L.errorCorrectionLevel,e.M),b=c.from(L.version),C=a.from(L.maskPattern),L.toSJISFunc&&n.setToSJISFunction(L.toSJISFunc)),P(E,b,v,C)},Ns}var ea={},ta={},Nl;function Zc(){return Nl||(Nl=1,function(n){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let i=t.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+t);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(s){return[s,s]}))),i.length===6&&i.push("F","F");const r=parseInt(i.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+i.slice(0,6).join("")}}n.getOptions=function(i){i||(i={}),i.color||(i.color={});const r=typeof i.margin>"u"||i.margin===null||i.margin<0?4:i.margin,s=i.width&&i.width>=21?i.width:void 0,a=i.scale||4;return{width:s,scale:s?4:a,margin:r,color:{dark:e(i.color.dark||"#000000ff"),light:e(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},n.getScale=function(i,r){return r.width&&r.width>=i+r.margin*2?r.width/(i+r.margin*2):r.scale},n.getImageWidth=function(i,r){const s=n.getScale(i,r);return Math.floor((i+r.margin*2)*s)},n.qrToImageData=function(i,r,s){const a=r.modules.size,o=r.modules.data,l=n.getScale(a,s),c=Math.floor((a+s.margin*2)*l),u=s.margin*l,d=[s.color.light,s.color.dark];for(let f=0;f<c;f++)for(let m=0;m<c;m++){let g=(f*c+m)*4,_=s.color.light;if(f>=u&&m>=u&&f<c-u&&m<c-u){const p=Math.floor((f-u)/l),h=Math.floor((m-u)/l);_=d[o[p*a+h]?1:0]}i[g++]=_.r,i[g++]=_.g,i[g++]=_.b,i[g]=_.a}}}(ta)),ta}var Fl;function Hd(){return Fl||(Fl=1,function(n){const e=Zc();function t(r,s,a){r.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=a,s.width=a,s.style.height=a+"px",s.style.width=a+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}n.render=function(s,a,o){let l=o,c=a;typeof l>"u"&&(!a||!a.getContext)&&(l=a,a=void 0),a||(c=i()),l=e.getOptions(l);const u=e.getImageWidth(s.modules.size,l),d=c.getContext("2d"),f=d.createImageData(u,u);return e.qrToImageData(f.data,s,l),t(d,c,u),d.putImageData(f,0,0),c},n.renderToDataURL=function(s,a,o){let l=o;typeof l>"u"&&(!a||!a.getContext)&&(l=a,a=void 0),l||(l={});const c=n.render(s,a,l),u=l.type||"image/png",d=l.rendererOpts||{};return c.toDataURL(u,d.quality)}}(ea)),ea}var na={},Ol;function Vd(){if(Ol)return na;Ol=1;const n=Zc();function e(r,s){const a=r.a/255,o=s+'="'+r.hex+'"';return a<1?o+" "+s+'-opacity="'+a.toFixed(2).slice(1)+'"':o}function t(r,s,a){let o=r+s;return typeof a<"u"&&(o+=" "+a),o}function i(r,s,a){let o="",l=0,c=!1,u=0;for(let d=0;d<r.length;d++){const f=Math.floor(d%s),m=Math.floor(d/s);!f&&!c&&(c=!0),r[d]?(u++,d>0&&f>0&&r[d-1]||(o+=c?t("M",f+a,.5+m+a):t("m",l,0),l=0,c=!1),f+1<s&&r[d+1]||(o+=t("h",u),u=0)):l++}return o}return na.render=function(s,a,o){const l=n.getOptions(a),c=s.modules.size,u=s.modules.data,d=c+l.margin*2,f=l.color.light.a?"<path "+e(l.color.light,"fill")+' d="M0 0h'+d+"v"+d+'H0z"/>':"",m="<path "+e(l.color.dark,"stroke")+' d="'+i(u,c,l.margin)+'"/>',g='viewBox="0 0 '+d+" "+d+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(l.width?'width="'+l.width+'" height="'+l.width+'" ':"")+g+' shape-rendering="crispEdges">'+f+m+`</svg>
`;return typeof o=="function"&&o(null,p),p},na}var Bl;function Gd(){if(Bl)return Mi;Bl=1;const n=Md(),e=zd(),t=Hd(),i=Vd();function r(s,a,o,l,c){const u=[].slice.call(arguments,1),d=u.length,f=typeof u[d-1]=="function";if(!f&&!n())throw new Error("Callback required as last argument");if(f){if(d<2)throw new Error("Too few arguments provided");d===2?(c=o,o=a,a=l=void 0):d===3&&(a.getContext&&typeof c>"u"?(c=l,l=void 0):(c=l,l=o,o=a,a=void 0))}else{if(d<1)throw new Error("Too few arguments provided");return d===1?(o=a,a=l=void 0):d===2&&!a.getContext&&(l=o,o=a,a=void 0),new Promise(function(m,g){try{const _=e.create(o,l);m(s(_,a,l))}catch(_){g(_)}})}try{const m=e.create(o,l);c(null,s(m,a,l))}catch(m){c(m)}}return Mi.create=e.create,Mi.toCanvas=r.bind(null,t.render),Mi.toDataURL=r.bind(null,t.renderToDataURL),Mi.toString=r.bind(null,function(s,a,o){return i.render(s,o)}),Mi}var $d=Gd();const Wd=Sd($d);async function qd(n,e){var f,m,g;const t=new Image;t.src=n.image||`/acorn-witch-atelier/assets/rewards/cg-${n.id}.webp`,await t.decode();const i=document.createElement("canvas");i.width=900,i.height=1560;const r=i.getContext("2d");r.fillStyle="#f4e8cb",r.fillRect(0,0,900,1560),r.strokeStyle="#b38a49",r.lineWidth=3,r.strokeRect(28,28,844,1504),r.textBaseline="top",r.fillStyle="#725533",r.font='24px "Songti SC",serif',r.fillText("橡果魔女  /  与松团子的珍藏时刻",55,62);const s=Math.max(790/t.width,800/t.height),a=t.width*s,o=t.height*s;r.save(),r.beginPath(),r.rect(55,112,790,800),r.clip(),r.drawImage(t,55+(790-a)/2,112+(800-o)*.38,a,o),r.restore(),r.fillStyle="#493927",r.font='bold 42px "Songti SC",serif',r.fillText(n.name,55,948,790);const l=["松团子",...n.costume.split(" · ")];r.font='20px "Songti SC",serif';let c=55;for(const _ of l){const p=r.measureText(_).width+28;r.fillStyle="#365746",r.fillRect(c,1012,p,40),r.fillStyle="#fff0d1",r.fillText(_,c+14,1021),c+=p+12}r.fillStyle="#655039",r.font='25px "Songti SC",serif';let u="",d=1090;for(const _ of n.lines[0])r.measureText(u+_).width>790&&(r.fillText(u,55,d),d+=43,u=""),u+=_;return u&&r.fillText(u,55,d),r.strokeStyle="#b89b6666",r.beginPath(),r.moveTo(55,1260),r.lineTo(845,1260),r.stroke(),r.font='20px "Songti SC",serif',r.fillStyle="#786445",r.fillText(`收录条件 · ${n.condition}`,55,1284,790),r.fillText(`相伴第 ${e.day} 天   ·   好感 ${((f=e.collection)==null?void 0:f.bond)??0}   ·   CG 收藏 ${((g=(m=e.collection)==null?void 0:m.cgs)==null?void 0:g.length)??0} / 6`,55,1320,790),r.fillStyle="#365746",r.fillRect(55,1370,790,140),r.fillStyle="#fff0d1",r.font='25px "Songti SC",serif',r.fillText("来橡果小屋，写下你们的故事",78,1400),r.font='20px "Songti SC",serif',r.fillText("扫码开启与松团子的森林生活",78,1450),await Jc(r,709,1380,120),new Promise(_=>i.toBlob(_,"image/png"))}async function Jc(n,e,t,i){const r=document.createElement("canvas");await Wd.toCanvas(r,"https://logic33.github.io/acorn-witch-atelier/",{width:i,margin:2,errorCorrectionLevel:"M",color:{dark:"#294735",light:"#fff8e7"}}),n.drawImage(r,e,t,i,i)}async function qa(n,e){const t=document.createElement("dialog");t.className="cg-share-preview",t.setAttribute("aria-label","分享奇遇"),t.innerHTML='<header><h2>分享奇遇</h2><button class="share-close" aria-label="关闭分享">×</button></header><div class="share-preview-body"><p role="status">正在准备纪念卡…</p></div><footer><button data-share="save" disabled>保存图片</button><button data-share="douyin" disabled>分享剧情到抖音</button></footer>',document.body.append(t),t.showModal();let i;t.querySelector(".share-close").onclick=()=>t.close(),t.addEventListener("close",()=>{i&&URL.revokeObjectURL(i),t.remove()},{once:!0});try{const r=await qd(n,e);if(!t.open)return;i=URL.createObjectURL(r);const s=t.querySelector(".share-preview-body"),a=new Image;a.src=i,a.alt=n.name+"纪念卡",s.replaceChildren(a),t.querySelectorAll("footer button").forEach(o=>o.disabled=!1),t.querySelector("[data-share=save]").onclick=()=>{const o=document.createElement("a");o.href=i,o.download=n.name+"-纪念卡.png",o.click()},t.querySelector("[data-share=douyin]").onclick=()=>{var c,u;s.innerHTML='<label>分享剧情到抖音<textarea aria-label="剧情文本" rows="10"></textarea></label><p class="share-note">创作预览，暂未连接抖音。</p><button class="share-back">返回图片预览</button>';const o=(c=e.memories)==null?void 0:c.filter(d=>d.cg===n.id).at(-1),l=((u=o==null?void 0:o.messages)==null?void 0:u.map(d=>d.content))||[];s.querySelector("textarea").value=["奇遇探索 · "+n.name,n.lines[0],...l].join(`

`),s.querySelector(".share-back").onclick=()=>s.replaceChildren(a),s.querySelector("textarea").focus()}}catch{t.open&&(t.querySelector(".share-preview-body").textContent="纪念卡生成失败，请关闭后重试。")}}function Xd({world:n,root:e,onFinish:t}){let i=!0,r="berry",s=!1,a=!1,o=0,l=!1;function c(d=""){if(i){e.innerHTML='<div class="gather-guide"><b>01 · 摘莓果</b><span>走近莓果丛…</span></div>';return}const f={berry:"轻点莓果，装进篮子",acorn:"按住蓄力，亮起时松手",mushroom:"光点进入金色区域时采摘"};if(e.innerHTML=`<div class="gather-guide"><b>${{berry:"01 · 摘莓果",acorn:"02 · 够橡果",mushroom:"03 · 采蘑菇"}[r]}</b><span>${d||f[r]}</span></div>`,r==="berry"&&(e.insertAdjacentHTML("beforeend",'<button class="gather-berry" aria-label="采摘莓果">✦<small>采摘</small></button>'),e.querySelector("button").onclick=()=>u("pick")),r==="acorn"){e.insertAdjacentHTML("beforeend",'<button class="gather-hold" aria-label="按住蓄力，松手起跳"><span>按住蓄力</span><i><em></em></i></button>');const m=e.querySelector("button"),g=()=>{s||a||(a=!0,o=0,n.setAction("crouch"))},_=()=>{a&&(a=!1,o>=650&&o<=1450?u("jump"):(n.setAction("acorn"),c(o<650?"再蓄一点力，亮起时松手":"力气太大啦，再试一次")))};m.onpointerdown=p=>{m.setPointerCapture(p.pointerId),g()},m.onpointerup=_,m.onpointercancel=()=>{a=!1,n.setAction("acorn"),c()},m.onkeydown=p=>{["Space","Enter"].includes(p.code)&&(p.preventDefault(),g())},m.onkeyup=p=>{["Space","Enter"].includes(p.code)&&(p.preventDefault(),_())}}r==="mushroom"&&(e.insertAdjacentHTML("beforeend",'<button class="gather-timing" aria-label="把握时机采蘑菇"><i></i><span>采摘</span></button>'),e.querySelector("button").onclick=()=>{if(s)return;const m=o%1800/1800;m>=.35&&m<=.65?u("harvest"):(o=0,c("差一点，等光点进入金色区域"))})}function u(d){s||l||(s=!0,e.querySelectorAll("button").forEach(f=>f.disabled=!0),e.querySelector(".gather-guide span").textContent=d==="harvest"?"收好满满一篮，再带回家":"松团子正在采集…",n.setAction(d))}return c(),{tick(d){if(l)return;const f=n.getInfo().gatherMotion;if(!f.seeking){if(i){if(f.action!=="berry")return;i=!1,c()}if(s){if(!f.complete)return;if(s=!1,r==="mushroom"){l=!0,e.innerHTML="",t();return}r=r==="berry"?"acorn":"mushroom",o=0,n.setAction(r),c();return}if(a){o+=d;const m=e.querySelector(".gather-hold");m.classList.toggle("ready",o>=650&&o<=1450),m.querySelector("em").style.width=`${Math.min(100,o/18)}%`,m.querySelector("span").textContent=o>=650&&o<=1450?"松手起跳":"按住蓄力"}r==="mushroom"&&(o+=d,e.querySelector(".gather-timing").classList.toggle("ready",o%1800/1800>=.35&&o%1800/1800<=.65),e.querySelector(".gather-timing i").style.transform=`rotate(${o%1800/1800*360}deg)`)}},dispose(){l=!0,e.innerHTML=""}}}const Ur=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Yd({game:n,getState:e,save:t,world:i,pause:r,onEquipped:s}){const a=document.createElement("dialog");a.id="atelier-dialog",n.append(a);let o=!1,l=null,c=!1,u=null,d="",f="",m="";const g=()=>At(e());async function _(y,P){const w=await fetch("/api/wardrobe"+y,{...P?{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(P)}:{}}),E=await w.text();let L;try{L=JSON.parse(E)}catch{throw new Error("服装绘图服务尚未连接。")}if(!w.ok)throw new Error(L.error||"服装绘图请求未完成。");return L}function p(y=""){a.innerHTML=`<header class="collection-header"><div><small>为松团子设计一套新衣服</small><h2>小小裁缝铺</h2></div><button data-design="close" aria-label="关闭设计">×</button></header><div class="atelier-body">${(l==null?void 0:l.status)==="ready"?`<img class="atelier-preview" src="${y||i.customPreview(l.id)}" alt="新衣服站姿预览"><h3>${Ur(l.name||"我的新衣服")}</h3><p>这套衣服喜欢吗？穿回小屋，就能陪她继续读书。</p><button class="button wide" data-design="accept" ${e().coins<Si?"disabled":""}>收进衣柜 · ${Si} 金币</button><button class="button subtle wide" data-design="again">重新描述</button>`:`<p>可以写款式、颜色和配饰。她还是原来的松团子。</p><label>给这套衣服起名<input id="design-name" maxlength="20" value="${Ur(m)}" placeholder="例如：雨后的来信" ${c?"disabled":""}></label><label>你想让她穿什么？<textarea id="design-prompt" maxlength="600" rows="4" placeholder="浅蓝色水手领小洋装，白色蕾丝裙边，配一个红色小蝴蝶结……" ${c?"disabled":""}>${Ur(f)}</textarea></label><p class="collection-note">整套定制 ${Si} 金币 · 确认收进衣柜时扣除<br>可以保留描述，稍后回来继续。</p><button class="button wide" data-design="generate" ${c||!o||e().coins<Si?"disabled":""}>${c?"正在为她制作新衣服…":o?"开始设计":"绘图服务尚未配置"}</button>${c?'<p class="atelier-progress" role="status">正在绘制服装与配套动作，请稍等。可以先关闭，稍后回来查看。</p>':""}`}<p class="atelier-error" role="alert">${Ur(d)}</p><small>余额 ◈ ${e().coins}</small></div>`}async function h(){clearTimeout(u);try{l=await _("/jobs/"+g().pendingDesign),l.status==="ready"?(await i.prepareCustom(l),c=!1,a.open&&p()):l.status==="failed"?(c=!1,d=l.error,delete g().pendingDesign,t(),a.open&&p()):(c=!0,a.open&&p(),u=setTimeout(h,2200))}catch(y){c=!1,d=y.message,a.open&&p()}}async function A(){a.open||(a.showModal(),r(!0)),d="",f=g().designDraft??f,m=g().designName??m,p();try{o=(await _("/status")).available,g().pendingDesign?(c=!0,await h()):p()}catch(y){d=y.message,p()}}function S(){a.close(),r(!1)}return a.addEventListener("cancel",y=>{y.preventDefault(),S()}),a.addEventListener("input",y=>{y.target.id==="design-prompt"&&(f=y.target.value,g().designDraft=f),y.target.id==="design-name"&&(m=y.target.value,g().designName=m),t()}),a.addEventListener("click",async y=>{var E;const P=y.target.closest("[data-design]");if(!P||P.disabled)return;const w=P.dataset.design;if(w==="close"&&S(),w==="generate"){if(c)return;if(f.trim().length<4){d="再具体一点吧，至少写 4 个字。",p();return}c=!0,d="";const L=crypto.randomUUID();g().pendingDesign=L,t(),p();try{l=await _("/jobs",{id:L,prompt:f,name:m||"我的新衣服"}),await h()}catch(v){c=!1,d=v.message,delete g().pendingDesign,t(),p()}}if(w==="accept"&&(l==null?void 0:l.status)==="ready"){const L=e();if(L.coins<Si)return;(E=g()).customOutfits??(E.customOutfits=[]),g().customOutfits.some(v=>v.id===l.id)||(L.coins-=Si,g().customOutfits.push({id:l.id,name:l.name||"我的新衣服",prompt:l.prompt,standing:l.standing,reading:l.reading})),g().activeCustom=l.id,delete g().pendingDesign,t(),S(),s()}w==="again"&&(l=null,delete g().pendingDesign,t(),p())}),{open:A,get opened(){return a.open}}}function Ms(n,e){const t=e.getBoundingClientRect(),i=Math.min(820,innerHeight-48),r=Math.min(500,innerWidth-32,i*.7);n.style.setProperty("--book-left",`${Math.max(16,Math.min(innerWidth-r-16,t.left+t.width/2-r/2))}px`),n.style.setProperty("--book-top",`${(innerHeight-i)/2}px`),n.style.setProperty("--book-width",`${r}px`),n.style.setProperty("--book-height",`${i}px`)}const _r=n=>`<header class="storybook-heading"><small>与她一起生活的日子</small><h2>${n==="stories"?"角色故事":n==="profile"?"角色属性":"手记"}</h2><button class="book-close" data-co="close" aria-label="${n==="stories"?"合上故事书":n==="profile"?"关闭角色属性":"合上手记"}">×</button></header>`,Qc={magic:"50% 44%",baking:"50% 38%",shop:"50% 37%",explore:"50% 45%",bond:"50% 35%",festival:"50% 37%"},Sn={id:"collab-demo",name:"我们的第一支森林短片",image:"/acorn-witch-atelier/assets/rewards/cg-collab-demo.png",costume:"合拍 · 粉发来访者",condition:"完成共创支线 · Demo 预制示例",lines:["镜头里留下的，是松团子和来访角色第一次一起创作的笑容。"]},ia=[{id:"film",title:"森林短片，缺一位搭档",kind:"视频共创",text:"一起把「第一次森林采集」拍成一支温暖短片。招募出镜角色、摄影与剪辑伙伴。",role:"出镜搭档"},{id:"band",title:"森林乐队 · 成员招募中",kind:"组乐队",text:"用木勺打节拍，用落叶写旋律。招募主唱、吉他手和会发出好听声音的朋友。",role:"乐队伙伴"},{id:"friends",title:"交换一页故事，认识新朋友",kind:"扩列交友",text:"带着你的角色来喝杯茶，交换世界观与创作灵感。可以从一次合拍开始认识彼此。",role:"故事笔友"}];function jd(n,e,t){const i=document.createElement("dialog");i.className="character-profile book-panel",i.setAttribute("aria-label","招募看板");const r=At(e).community,s=()=>{i.innerHTML=_r("profile").replace("角色属性","招募看板")+`<div class="book-body profile-body"><p class="profile-tags">松团子的作者发起 · 一起创作，一起交朋友</p><p>带上你的角色，参与下一部作品。</p>${[ia[1],ia[0],ia[2]].map(o=>`<section><small>${o.kind}</small><h3>${o.title}</h3><p>${o.text}</p><p>你的角色：粉发来访者 · Demo 预置角色</p><button class="button" data-join="${o.id}" ${r.recruitments.includes(o.id)?"disabled":""}>${r.recruitments.includes(o.id)?"已加入体验名单":"以我的角色报名 · "+o.role}</button></section>`).join("")}<p class="community-note" role="status">Demo 报名保存在本机，尚未向其他作者发送邀请。</p></div>`,i.querySelector(".book-close").onclick=()=>i.close()};i.onclick=o=>{var c;const l=(c=o.target.closest("[data-join]"))==null?void 0:c.dataset.join;!l||r.recruitments.includes(l)||(r.recruitments.push(l),t(),s(),i.querySelector("[role=status]").textContent="已加入体验名单！正式版将由作者确认后开启共创与好友联系。")},n.append(i),s();const a=()=>Ms(i,n);a(),window.addEventListener("resize",a),i.onclose=()=>{window.removeEventListener("resize",a),i.remove()},i.showModal()}const Nr=[{lines:[["松团子","你来得正好！我想拍一支森林短片，可是一看到镜头，就不知道该说什么了。"],["你 · 粉发来访者","那就别背台词。你带我走一遍今天的小路，我来拍你最熟悉的事情。"]],choice:"我来打板，你带路"},{lines:[["松团子","第一幕拍这篮莓果吧。刚才采的时候，我还偷偷尝了一颗，酸得耳朵都竖起来了。"],["你 · 粉发来访者","这句就很好呀！等会儿看着我说，就当镜头是个来做客的朋友。"]],choice:"举起场记板：森林短片，第一镜！"},{lines:[["松团子","欢迎来到榛果林！今天的莓果有一点酸，不过……哎呀，刚刚那句是不是说错了？"],["你 · 粉发来访者","没说错。你笑起来的时候，阳光刚好落在篮子上。这一段我想留下。"]],choice:"给她看看刚拍好的镜头"},{lines:[["松团子","原来镜头里的我，是这个样子的。可是短片里怎么一直只有我？你也应该在里面。"],["你 · 粉发来访者","那把相机放到树桩上，设好倒计时。最后一幕，我们一起拍。"]],choice:"架好相机，走到她身边"},{lines:[["松团子","站近一点点。来，这颗最红的莓果给你——就当今天的出镜报酬！"],["你 · 粉发来访者","那下次我还来。三、二、一……别看镜头，看我！"]],choice:"接过莓果，一起笑起来"},{lines:[["松团子","拍到了！这张照片，我要夹在故事的第一页。片名就叫《在森林里认识你》，好吗？"],["你 · 粉发来访者","好。你写故事，我剪短片。等做好了，我们一起分享给来看望你的朋友。"]],choice:"为短片收尾，收藏我们的合拍"}];function eu(n,e){const t=n.textContent;e.startsWith(t)||n.replaceChildren();const i=e.slice(n.textContent.length),r=document.createDocumentFragment();for(const[s,a]of Array.from(i).entries()){const o=document.createElement("span");o.className="stream-text-reveal",o.textContent=a,o.style.animationDelay=Math.min(s*18,180)+"ms",o.addEventListener("animationend",()=>{o.classList.remove("stream-text-reveal"),o.style.animationDelay=""},{once:!0}),r.append(o)}n.append(r)}function tu(n){matchMedia("(prefers-reduced-motion: reduce)").matches&&(n==null||n.querySelectorAll(".stream-text-reveal").forEach(e=>{e.classList.remove("stream-text-reveal"),e.style.animationDelay=""}))}async function*Kd(n){const e=n.getReader(),t=new TextDecoder;let i="";try{for(;;){const{done:r,value:s}=await e.read();i+=t.decode(s,{stream:!r});let a;for(;(a=i.indexOf(`
`))>=0;)yield i.slice(0,a).replace(/\r$/,""),i=i.slice(a+1);if(r){i&&(yield i);break}}}finally{await e.cancel().catch(()=>{}),e.releaseLock()}}async function nu(n,e){var t;if(!n.ok||!((t=n.headers.get("content-type"))!=null&&t.includes("application/x-ndjson"))){const i=await n.json();if(!n.ok)throw new Error(i.error||"连接没有完成，请重试。");return i}for await(const i of Kd(n.body)){if(!i.trim())continue;const r=JSON.parse(i);if(r.type==="text"&&e(r.dialogue),r.type==="error")throw new Error(r.error);if(r.type==="done")return r.reply}throw new Error("回复中断了，请重试；输入内容已保留。")}const Zd="https://sjktg7i6ngh4etmcagt01.apigateway-cn-beijing.volceapi.com/api/companion";function Jd({dialog:n,getState:e,save:t,cg:i,onEnd:r}){const s=n.querySelector("#cg-chat-form"),a=n.querySelector("#cg-chat-input"),o=n.querySelector("#cg-chat-status"),l=n.querySelector("#cg-responses"),c=()=>{a.style.height="auto",a.style.height=a.scrollHeight+"px"};a.addEventListener("input",c);const u=e(),d={id:crypto.randomUUID(),title:i.name+" · 对话",activity:i.activity,kind:"branch",cg:i.id,day:u.day,slot:u.slot,createdAt:new Date().toISOString(),messages:[]};let f=null,m=!1;const g={magic:["先停下咒语，观察叶子的反应。","别着急，我们一起找找书里的办法。"],baking:["不必做得完美，我想听听你的心意。","我们一起看看，是哪里让你犹豫了？"],shop:["先看看纸上写了什么。","刚才的客人是不是落下什么了？"],explore:["先看看是什么挡住了路。","听听附近的动静，别急着过去。"],bond:["这一页，是有什么让你在意吗？","不用赶，我陪你慢慢读。"],festival:["你手里拿着的，是准备送人的礼物吗？","不着急，我们找个安静的地方说。"]},_={magic:"把今天学到的记好，我们回家吧。",baking:"把甜点装好，我们一起收拾厨房吧。",shop:"收好今天的心意，我们打烊回家吧。",explore:"记住这条小路，我们一起回家吧。",bond:"把这页夹好，我们休息一会儿吧。",festival:"把这片秋叶收好，我们一起回家吧。"};function p(S){l.replaceChildren();const y=d.messages.filter(w=>w.role==="user").length>=4;for(const w of[y?_[i.id]:S[0]]){const E=document.createElement("button");E.type="button",E.className="cg-response",E.textContent=w,E.setAttribute("aria-label",w),E.onclick=()=>{if(y){d.messages.push({role:"user",content:w}),d.ended=!0,d.updatedAt=new Date().toISOString();const L=e().memories.findIndex(v=>v.id===d.id);L>=0&&(e().memories[L]=structuredClone(d)),t(),r(d)}else A(null,w)},l.append(E)}const P=document.createElement("button");P.type="button",P.className="cg-custom-response",P.innerHTML='<svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true"><path d="M3 3.5h14v10H9l-4 3v-3H3z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M6 7h8M6 10h5" stroke="currentColor" stroke-width="1.2"/></svg><span>写下我的支线</span>',P.onclick=()=>{l.hidden=!0,s.hidden=!1,c(),a.focus()},l.append(P),l.hidden=!1,s.hidden=!0}function h(S,y){const P=n.querySelector("#cg-line");for(const w of[...P.childNodes])w.nodeType===3&&w.remove();for(const[w,E]of[["narration",S],["dialogue",y]]){let L=P.querySelector(".cg-"+w);if(!E){L==null||L.remove();continue}L||(L=document.createElement("span"),L.className="cg-"+w,w==="narration"?P.prepend(L):P.append(L)),L.textContent!==E&&(L.textContent=E)}}h(i.lines[0]),p(g[i.id]),n.querySelector("#cg-custom-cancel").onclick=()=>{s.hidden=!0,l.hidden=!1};async function A(S,y){var L,v,b;S==null||S.preventDefault();const P=y??a.value.trim();if(!P||f)return;const w=n.querySelector("#cg-line").innerHTML;let E=null;f=new AbortController,n.querySelectorAll("#cg-responses button,#cg-chat-form button").forEach(C=>C.disabled=!0),a.readOnly=!0,o.textContent="松团子正在回应…";try{const C=e(),U=await fetch(Zd+"/chat",{method:"POST",headers:{"Content-Type":"application/json"},signal:f.signal,body:JSON.stringify({stream:!0,messages:[...d.messages.slice(-30),{role:"user",content:P}],context:{activity:i.activity,day:C.day,slot:C.slot,cg:{id:i.id,title:i.name,costume:i.costume,lines:[i.lines[0]],outline:i.lines,currentLine:n.querySelector("#cg-line").textContent,interactive:!0,guestCharacter:(L=n.querySelector("#cg-with-guest"))!=null&&L.checked?"粉发来访者：粉色侧马尾、金色眼睛、深蓝校服，和松团子一起创作短片":null},memories:(C.memories??[]).slice(-12).map(({title:q,summary:j})=>({title:q,summary:j}))}})}),O=await nu(U,q=>{var j;!m&&!f.signal.aborted&&(E||(h((j=n.querySelector(".cg-narration"))==null?void 0:j.textContent," "),E=n.querySelector(".cg-dialogue"),E.replaceChildren()),eu(E,q))});if(!U.ok)throw new Error(O.error||"暂时未能连接，请重试。");if(m)return;if(!Array.isArray(O.choices)||O.choices.length!==2)throw new Error("剧情反馈未完整生成，请重试。");S&&(d.custom=!0,d.withGuest=((v=n.querySelector("#cg-with-guest"))==null?void 0:v.checked)??!1),d.messages.push({role:"user",content:P},{role:"assistant",content:[O.narration,O.dialogue].filter(Boolean).join(`
`)}),d.summary=((b=O.event)==null?void 0:b.summary)||[O.narration,O.dialogue].filter(Boolean).join(" "),d.updatedAt=new Date().toISOString(),O.event&&(d.event=O.event),C.memories??(C.memories=[]);const z=C.memories.findIndex(q=>q.id===d.id);z<0?C.memories.push(structuredClone(d)):C.memories[z]=structuredClone(d),t(),tu(E),h(O.narration,O.dialogue),a.value="",p(O.choices),o.textContent="剧情已记入手记"}catch(C){C.name!=="AbortError"&&!m&&(n.querySelector("#cg-line").innerHTML=w,o.textContent=C.message)}finally{f=null,m||(n.querySelectorAll("#cg-responses button,#cg-chat-form button").forEach(C=>C.disabled=!1),a.readOnly=!1)}}return s.addEventListener("submit",A),{dispose(){m=!0,f==null||f.abort(),s.removeEventListener("submit",A)}}}const Ei=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Mn=n=>`/acorn-witch-atelier/assets/rewards/${n}.webp`;function Qd({game:n,getState:e,save:t,refresh:i,pause:r,world:s,onWear:a,onRecipes:o}){const l=document.createElement("dialog");l.id="rewards-dialog",n.append(l);const c=document.createElement("button");c.id="home-pet",c.hidden=!0,c.type="button",n.append(c);let u=Hi[0].id,d="album",f=!1,m=null,g=null,_=null;const p=()=>At(e());function h(){if(g){const T=n.getBoundingClientRect();for(const[D,$]of Object.entries({left:T.left,top:T.top,width:T.width,height:T.height}))l.style.setProperty(`--book-${D}`,`${$}px`)}else Ms(l,n)}function A(){h(),l.open||(l.showModal(),r(!0)),n.dataset.collection="open"}function S(){if(f)return;_==null||_.dispose(),_=null,g&&p().cgs.includes(g)&&!p().seen.includes(g)&&(p().seen.push(g),t()),l.close(),delete n.dataset.collection,r(!1),g=null;const T=m;m=null,i(),T==null||T()}window.addEventListener("resize",()=>{l.open&&h()}),l.addEventListener("cancel",T=>{T.preventDefault(),S()});const y=(T,D,$="",W="")=>`<button class="button" data-reward="${D}" data-id="${$}" ${W}>${T}</button>`;function P(T,D){A(),l.className="collection-page",l.dataset.tab=d,l.innerHTML=`<header class="collection-header"><div><small>松团子的秋日收藏</small><h2>${T}</h2></div><button data-reward="close" aria-label="关闭收藏">×</button></header>${d==="wheel"?"":`<nav class="collection-tabs" aria-label="收藏分类">${[["album","剧情相册"],["pets","宠物册"]].map(([$,W])=>`<button data-reward="tab" data-id="${$}" aria-pressed="${d===$}">${W}</button>`).join("")}</nav>`}<div class="collection-body">${D}</div>`}function w(){d="album";const T=p().cgs;P("相册",`<p class="collection-intro">学习与相处，会把新的故事带到身边。<br>松团子好感 <b>${p().bond}</b> · 已收录 ${T.length} / ${Ft.length}</p><div class="cg-grid"><button class="cg-card" data-reward="collab"><div><img src="${Sn.image}" alt="松团子与粉发来访者的合拍 CG"><span>✦ 合拍已点亮 · 示例</span></div><b>${Sn.name}</b><small>带上你的角色，写支线、得合拍 CG</small></button>${Ft.map(D=>`<button class="cg-card ${T.includes(D.id)?"":"locked"}" data-reward="cg" data-id="${D.id}" style="--cg-focus:${Qc[D.id]}" ${T.includes(D.id)?"":"disabled"}><div><img src="${Mn("cg-"+D.id)}" alt="${T.includes(D.id)?D.name:"未解锁剧情剪影"}">${T.includes(D.id)?"<span>▷ 重温</span>":"<span>尚未遇见</span>"}</div><b>${D.name}</b><small>${T.includes(D.id)?D.costume:D.condition}</small></button>`).join("")}</div><section class="branch-cg-list"><h3>我的支线纪念 · ${p().community.collabs.length}</h3>${(e().memories??[]).filter(D=>p().community.collabs.includes(D.id)).map(D=>`<button class="cg-card" data-reward="branch-cg" data-id="${Ei(D.id)}"><div><img src="${D.withGuest===!1?Mn("cg-explore"):Sn.image}" alt="支线纪念"><span>已收录 · Demo 预制</span></div><b>${Ei(D.title.replace(" · 对话"," · 支线纪念"))}</b></button>`).join("")}</section><p class="collection-note">参加秋日祭即可获得祭典 CG，庆典后生活继续。</p>`)}function E(T,D=!1){return T.type==="pet"?`<img src="${Mn("cat-"+T.item)}" alt="${T.name}">`:T.type==="part"?`<img src="${Mn("part-"+T.item)}" alt="${T.name}">`:T.type==="outfit"?`<img src="${s.getOutfitPreview(T.item,D)}" alt="${T.name}">`:`<span class="wheel-symbol">${T.type==="coins"?"◈":"♧"}</span>`}function L(){d="wheel";const T=e();Hi.find($=>$.id===u);const D=Wa(T,u);P("秋日幸运轮盘",`<label class="pool-select">本期收藏<select id="wheel-pool" aria-label="选择轮盘主题">${Hi.map($=>`<option value="${$.id}" ${$.id===u?"selected":""}>${$.name}</option>`).join("")}</select></label><div class="wheel-balance">◈ ${T.coins} <small>每次 ${Vi} 金币</small></div><div class="wheel-stage"><div class="wheel-pointer">▼</div><div class="reward-wheel" style="--count:${Math.max(D.length,1)}">${D.map(($,W)=>`<div class="wheel-prize" style="--angle:${W*360/D.length}deg"><div>${E($)}<small>${$.name}</small></div></div>`).join("")}<div class="wheel-center">✦</div></div></div><p class="wheel-status" role="status">${D.length?`剩余 ${D.length} 件 · 每件概率 ${(100/D.length).toFixed(2)}%`:"这期收藏齐了，看看别的主题吧。"}</p><div class="wheel-cta">${y(`转一次 · ${Vi} ◈`,"spin","",!D.length||T.coins<Vi?"disabled":"")}</div><p class="collection-note">不重复获得 · 抽中即得<br>集齐本期最多还需 ${D.length*Vi} 金币</p>`)}function v(T){l.className="collection-page reward-reveal",l.innerHTML=`<header class="collection-header"><small>这份小惊喜，属于你了</small><button data-reward="close" aria-label="关闭奖励">×</button></header><div class="reveal-content"><span class="reveal-spark">✦</span><div class="reveal-art">${E(T,!0)}</div><h2>${T.name}</h2><p>${{pet:"一位新朋友，来小屋住下啦。",part:"已放进衣柜，可以自由搭配。",outfit:"整套穿搭已放进衣柜。",menu:"已经学会，可以去厨房制作，再到小铺售卖。",coins:"已放进你的钱袋。"}[T.type]}</p><div class="reveal-actions">${T.type==="pet"?y("认识它","pet",T.item):T.type==="part"||T.type==="outfit"?y("去试衣间","wear"):T.type==="menu"?y("看看新菜单","recipes"):""}${y("继续看轮盘","wheel")}</div></div>`}function b(){if(f)return;let T;const D=Wa(e(),u);try{T=_d(e(),u,crypto.getRandomValues(new Uint32Array(1))[0]/4294967296)}catch(ie){l.querySelector(".wheel-status").textContent=ie.message;return}t(),i(),f=!0,l.querySelectorAll("button,select").forEach(ie=>ie.disabled=!0),l.querySelector(".wheel-status").textContent="指针慢慢停下来了…";const $=D.findIndex(ie=>ie.id===T.id),W=l.querySelector(".reward-wheel");W.style.transform=`rotate(${1800-$*360/D.length}deg)`,setTimeout(()=>{f=!1,v(T)},matchMedia("(prefers-reduced-motion: reduce)").matches?50:2400)}function C(){d="pets",P("小屋里的毛茸茸",`<p class="collection-intro">已结识 ${p().pets.length} / ${zi.length} 位朋友<br>点击已拥有的猫咪，起名、互动或带回主页。</p><div class="pet-grid">${zi.map(T=>`<button class="pet-card ${p().pets.includes(T.id)?"":"unowned"}" data-reward="pet" data-id="${T.id}"><img src="${Mn("cat-"+T.id)}" alt="${T.name}"><b>${Ei(p().petNames[T.id]||T.name)}</b><small>${p().activePet===T.id?"正在陪伴":p().pets.includes(T.id)?"已结识":"轮盘可获得"}</small></button>`).join("")}</div>`)}function U(T){const D=zi.find(W=>W.id===T);if(!D)return;const $=p().pets.includes(T);d="pets",P(D.name,`<div class="pet-detail"><img class="pet-large" src="${Mn("cat-"+T)}" alt="${D.name}"><p>${D.look}</p><p class="pet-dialogue">松团子：「${D.line}」</p>${$?`<label>名字<input id="pet-name" maxlength="12" value="${Ei(p().petNames[T]||"")}" placeholder="${D.name}" autocomplete="off"></label><div class="pet-actions">${y("改名","pet-name",T)}${y(p().activePet===T?"休息":"带回",p().activePet===T?"pet-rest":"pet-equip",T)}${y("互动","pet-touch",T,`aria-label="${D.action}"`)}</div><p id="pet-reply" role="status"></p><small>已互动 ${p().petInteractions[T]??0} 次 · 不需要强制喂养</small>`:`<p>在「${Hi.find(W=>W.cats.includes(T)).name}」轮盘结识它。</p>${y("去看看轮盘","pet-pool",T)}`}</div>`)}function O(T,D=null){if(T==="collab-demo"){z();return}const $=Ft.find(W=>W.id===T);!$||!p().cgs.includes(T)||(m=D,g=T,A(),l.className="cg-player",l.innerHTML=`<img class="cg-full" src="${Mn("cg-"+T)}" alt="${Ei($.name)}"><div class="cg-motes" aria-hidden="true">${Array.from({length:10},(W,ie)=>`<i style="--i:${ie}">✧</i>`).join("")}</div><header class="cg-heading"><span>奇遇探索 · ${Ei($.name)}</span><div class="cg-share-tools"><button data-reward="cg-share" data-id="${$.id}" aria-label="分享奇遇"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16V3m-5 5 5-5 5 5M5 13v7h14v-7"/></svg></button><button data-reward="cg-exit" aria-label="稍后重看"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg></button></div></header><div class="cg-caption"><small>松团子 · ${$.costume}</small><p id="cg-line"></p><div id="cg-responses" aria-label="选择你的反馈"></div><form id="cg-chat-form" hidden><label class="cg-input-label" for="cg-chat-input">和松团子聊聊</label><textarea id="cg-chat-input" rows="1" maxlength="1000" autocomplete="off" placeholder="想对她说些什么…"></textarea><button type="submit">发送</button><button type="button" id="cg-custom-cancel">收起</button><label class="cg-guest-choice"><input type="checkbox" id="cg-with-guest" checked>以粉发来访者的身份参与</label><button type="button" data-reward="collab-demo">体验预置合拍支线</button><small>支线结束后收录纪念 CG · Demo 使用预制画面</small></form><p id="cg-chat-status" role="status"></p></div>`,l.querySelector("#cg-line").textContent=$.lines[0],_=Jd({dialog:l,getState:e,save:t,cg:$,onEnd:W=>{W!=null&&W.custom?(ul(e(),W.id),t(),S(),z(!0,W.withGuest)):S()}}))}function z(T=!1,D=!0){_==null||_.dispose(),_=null,g="collab-demo",A(),l.className="cg-player";const $=D?Sn:Ft.find(W=>W.id==="explore");l.innerHTML=`<img class="cg-full" src="${D?Sn.image:Mn("cg-explore")}" alt="${$.name}"><header class="cg-heading"><span>${D?"合拍纪念":"支线纪念"} · ${T?"已收录":"Demo 示例"}</span><button data-reward="cg-exit" aria-label="关闭合拍">×</button></header><div class="cg-caption"><small>${T?"成就达成 · 一起写下新故事":"默认点亮 · 合拍功能体验"}</small><h2>${D?Sn.name:"留住这一段奇遇"}</h2><p class="collab-description">${T?"支线已记入手记，纪念画面已收进相册。":"你就是画面中的粉发来访者。与松团子一起拍完这支短片，留下你们的合拍纪念。"}</p><small>Demo 预制画面 · 正式版将根据本次剧情生成</small><div class="collab-actions">${y("分享纪念画面",D?"collab-share":"cg-share",$.id)}${y("体验合拍支线","collab-demo")}</div><p id="cg-chat-status" role="status"></p></div>`}function q(T=0){_==null||_.dispose(),_=null,g="collab-demo",A(),l.className="cg-player";const D=Nr[T];l.innerHTML=`<img class="cg-full" src="${Sn.image}" alt="合拍支线"><header class="cg-heading"><span>我的支线 · 森林合拍</span><button data-reward="cg-exit" aria-label="离开支线">×</button></header><div class="cg-caption demo-conversation"><small>你正在扮演粉发来访者 · ${T+1} / ${Nr.length}</small><div class="duo-dialogue">${D.lines.map(([$,W])=>`<div><b>${$}</b><p>「${W}」</p></div>`).join("")}</div><div class="demo-choice">${y(D.choice,"demo-step",String(T))}</div><p id="cg-chat-status" role="status"></p></div>`}function j(){const T=e(),D="forest-film-demo";ul(T,D),T.memories??(T.memories=[]);const $={id:D,title:Sn.name,kind:"branch",cg:"collab-demo",withGuest:!0,day:T.day,slot:T.slot,createdAt:new Date().toISOString(),summary:"松团子与粉发来访者从练习面对镜头，到一起出镜，完成了森林短片《在森林里认识你》。",ended:!0,messages:Nr.flatMap(ie=>ie.lines.map(([Te,Be])=>({role:Te==="松团子"?"assistant":"user",content:Be})))},W=T.memories.findIndex(ie=>ie.id===D);W>=0?T.memories[W]={...$,createdAt:T.memories[W].createdAt}:T.memories.push($),t(),z(!0)}function F(T){const D=p().activePet;if(c.hidden=!T||!D,!D)return;const $=zi.find(W=>W.id===D);$&&(c.dataset.id!==D&&(c.dataset.id=D,c.innerHTML=`<img src="${Mn("cat-"+D)}" alt="">`),c.setAttribute("aria-label",`和${p().petNames[D]||$.name}互动`))}return c.onclick=()=>U(p().activePet),l.addEventListener("change",T=>{T.target.id==="wheel-pool"&&(u=T.target.value,L())}),l.addEventListener("click",T=>{const D=T.target.closest("[data-reward]");if(!D||D.disabled||f)return;const $=D.dataset.reward,W=D.dataset.id;if($==="branch-cg"){const ie=e().memories.find(Te=>Te.id===W);ie&&z(!0,ie.withGuest!==!1)}if($==="collab"&&z(),$==="collab-demo"&&q(),$==="demo-step"&&(Number(W)<Nr.length-1?q(Number(W)+1):j()),$==="collab-share"&&qa(Sn,e()),$==="cg-share"&&qa(Ft.find(ie=>ie.id===W),e()).catch(ie=>{l.querySelector("#cg-chat-status").textContent=ie.message}),($==="close"||$==="cg-exit")&&S(),$==="tab"&&{album:w,pets:C}[W](),$==="wheel"&&L(),$==="spin"&&b(),$==="cg"&&O(W),$==="pet"&&U(W),$==="pet-pool"&&(u=Hi.find(ie=>ie.cats.includes(W)).id,L()),$==="pet-rest"&&(p().activePet=null,t(),i(),U(W)),$==="pet-equip"&&p().pets.includes(W)&&(p().activePet=W,t(),S()),$==="pet-name"&&p().pets.includes(W)&&(p().petNames[W]=l.querySelector("#pet-name").value.trim().slice(0,12),t(),l.querySelector("#pet-reply").textContent="记住这个名字啦。"),$==="pet-touch"&&p().pets.includes(W)){p().petInteractions[W]=(p().petInteractions[W]??0)+1,t(),l.querySelector("#pet-reply").textContent=zi.find(Te=>Te.id===W).reply;const ie=l.querySelector(".pet-large");ie.classList.remove("pet-nuzzle"),ie.offsetWidth,ie.classList.add("pet-nuzzle")}$==="wear"&&(S(),a()),$==="recipes"&&(S(),o())}),{album:w,wheel:L,pets:C,playCG:O,updatePet:F,get opened(){return l.open}}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wo="180",eh=0,kl=1,th=2,iu=1,nh=2,Pn=3,Zn=0,zt=1,Ln=2,jn=0,qi=1,zl=2,Hl=3,Vl=4,ih=5,ci=100,rh=101,sh=102,ah=103,oh=104,lh=200,ch=201,uh=202,dh=203,Xa=204,Ya=205,hh=206,fh=207,ph=208,mh=209,gh=210,_h=211,vh=212,xh=213,yh=214,ja=0,Ka=1,Za=2,Ki=3,Ja=4,Qa=5,eo=6,to=7,ru=0,bh=1,Sh=2,Kn=0,Mh=1,Eh=2,Th=3,wh=4,Ah=5,Ch=6,Rh=7,su=300,Zi=301,Ji=302,no=303,io=304,Es=306,ro=1e3,di=1001,so=1002,dn=1003,Ph=1004,Fr=1005,en=1006,ra=1007,hi=1008,Nn=1009,au=1010,ou=1011,vr=1012,qo=1013,gi=1014,In=1015,Er=1016,Xo=1017,Yo=1018,xr=1020,lu=35902,cu=35899,uu=1021,du=1022,un=1023,yr=1026,br=1027,hu=1028,jo=1029,fu=1030,Ko=1031,Zo=1033,cs=33776,us=33777,ds=33778,hs=33779,ao=35840,oo=35841,lo=35842,co=35843,uo=36196,ho=37492,fo=37496,po=37808,mo=37809,go=37810,_o=37811,vo=37812,xo=37813,yo=37814,bo=37815,So=37816,Mo=37817,Eo=37818,To=37819,wo=37820,Ao=37821,Co=36492,Ro=36494,Po=36495,Lo=36283,Do=36284,Io=36285,Uo=36286,Lh=3200,Dh=3201,Ih=0,Uh=1,qn="",xt="srgb",Qi="srgb-linear",xs="linear",at="srgb",Ti=7680,Gl=519,Nh=512,Fh=513,Oh=514,pu=515,Bh=516,kh=517,zh=518,Hh=519,$l=35044,Wl="300 es",xn=2e3,ys=2001;class nr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sa=Math.PI/180,No=180/Math.PI;function Tr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function Vh(n,e){return(n%e+e)%e}function aa(n,e,t){return(1-t)*n+t*e}function or(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==m||u!==g){let p=1-o;const h=l*f+c*m+u*g+d*_,A=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const P=Math.sqrt(S),w=Math.atan2(P,h*A);p=Math.sin(p*w)/P,o=Math.sin(o*w)/P}const y=o*A;if(l=l*p+f*y,c=c*p+m*y,u=u*p+g*y,d=d*p+_*y,p===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*d+l*m-c*f,e[t+1]=l*g+u*f+c*d-o*m,e[t+2]=c*g+u*m+o*f-l*d,e[t+3]=u*g-o*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),f=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"YZX":this._x=f*u*d+c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d-f*m*g;break;case"XZY":this._x=f*u*d-c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ql.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return oa.copy(this).projectOnVector(e),this.sub(oa)}reflect(e){return this.sub(oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oa=new Y,ql=new wr;class We{constructor(e,t,i,r,s,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],m=i[5],g=i[8],_=r[0],p=r[3],h=r[6],A=r[1],S=r[4],y=r[7],P=r[2],w=r[5],E=r[8];return s[0]=a*_+o*A+l*P,s[3]=a*p+o*S+l*w,s[6]=a*h+o*y+l*E,s[1]=c*_+u*A+d*P,s[4]=c*p+u*S+d*w,s[7]=c*h+u*y+d*E,s[2]=f*_+m*A+g*P,s[5]=f*p+m*S+g*w,s[8]=f*h+m*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,m=c*s-a*l,g=t*d+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(la.makeScale(e,t)),this}rotate(e){return this.premultiply(la.makeRotation(-e)),this}translate(e,t){return this.premultiply(la.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const la=new We;function mu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Sr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gh(){const n=Sr("canvas");return n.style.display="block",n}const Xl={};function Mr(n){n in Xl||(Xl[n]=!0,console.warn(n))}function $h(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Yl=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jl=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wh(){const n={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(r.r=Un(r.r),r.g=Un(r.g),r.b=Un(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=Xi(r.r),r.g=Xi(r.g),r.b=Xi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===qn?xs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Mr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Mr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Qi]:{primaries:e,whitePoint:i,transfer:xs,toXYZ:Yl,fromXYZ:jl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Yl,fromXYZ:jl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),n}const Je=Wh();function Un(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let wi;class qh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{wi===void 0&&(wi=Sr("canvas")),wi.width=e.width,wi.height=e.height;const r=wi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=wi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Un(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Un(t[i]/255)*255):t[i]=Un(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xh=0;class Jo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=Tr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ca(r[a].image)):s.push(ca(r[a]))}else s=ca(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ca(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yh=0;const ua=new Y;class wt extends nr{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,i=di,r=di,s=en,a=hi,o=un,l=Nn,c=wt.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Tr(),this.name="",this.source=new Jo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ua).x}get height(){return this.source.getSize(ua).y}get depth(){return this.source.getSize(ua).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ro:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case so:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ro:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case so:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=su;wt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,i=0,r=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,y=(m+1)/2,P=(h+1)/2,w=(u+f)/4,E=(d+_)/4,L=(g+p)/4;return S>y&&S>P?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=w/i,s=E/i):y>P?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=L/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=E/s,r=L/s),this.set(i,r,s,t),this}let A=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(p-g)/A,this.y=(d-_)/A,this.z=(f-u)/A,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jh extends nr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new wt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Jo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends jh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class gu extends wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kh extends wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ar{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,rn):rn.fromBufferAttribute(s,a),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Or.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Or.copy(i.boundingBox)),Or.applyMatrix4(e.matrixWorld),this.union(Or)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),Br.subVectors(this.max,lr),Ai.subVectors(e.a,lr),Ci.subVectors(e.b,lr),Ri.subVectors(e.c,lr),zn.subVectors(Ci,Ai),Hn.subVectors(Ri,Ci),ti.subVectors(Ai,Ri);let t=[0,-zn.z,zn.y,0,-Hn.z,Hn.y,0,-ti.z,ti.y,zn.z,0,-zn.x,Hn.z,0,-Hn.x,ti.z,0,-ti.x,-zn.y,zn.x,0,-Hn.y,Hn.x,0,-ti.y,ti.x,0];return!da(t,Ai,Ci,Ri,Br)||(t=[1,0,0,0,1,0,0,0,1],!da(t,Ai,Ci,Ri,Br))?!1:(kr.crossVectors(zn,Hn),t=[kr.x,kr.y,kr.z],da(t,Ai,Ci,Ri,Br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const En=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],rn=new Y,Or=new Ar,Ai=new Y,Ci=new Y,Ri=new Y,zn=new Y,Hn=new Y,ti=new Y,lr=new Y,Br=new Y,kr=new Y,ni=new Y;function da(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ni.fromArray(n,s);const o=r.x*Math.abs(ni.x)+r.y*Math.abs(ni.y)+r.z*Math.abs(ni.z),l=e.dot(ni),c=t.dot(ni),u=i.dot(ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Zh=new Ar,cr=new Y,ha=new Y;class Ts{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Zh.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);const t=cr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(cr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(ha)),this.expandByPoint(cr.copy(e.center).sub(ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Tn=new Y,fa=new Y,zr=new Y,Vn=new Y,pa=new Y,Hr=new Y,ma=new Y;class _u{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){fa.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(fa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(zr),o=Vn.dot(this.direction),l=-Vn.dot(zr),c=Vn.lengthSq(),u=Math.abs(1-a*a);let d,f,m,g;if(u>0)if(d=a*l-o,f=a*o-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(fa).addScaledVector(zr,f),m}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const i=Tn.dot(this.direction),r=Tn.dot(Tn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,i,r,s){pa.subVectors(t,e),Hr.subVectors(i,e),ma.crossVectors(pa,Hr);let a=this.direction.dot(ma),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,e);const l=o*this.direction.dot(Hr.crossVectors(Vn,Hr));if(l<0)return null;const c=o*this.direction.dot(pa.cross(Vn));if(c<0||l+c>a)return null;const u=-o*Vn.dot(ma);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,t,i,r,s,a,o,l,c,u,d,f,m,g,_,p){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,d,f,m,g,_,p)}set(e,t,i,r,s,a,o,l,c,u,d,f,m,g,_,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Pi.setFromMatrixColumn(e,0).length(),s=1/Pi.setFromMatrixColumn(e,1).length(),a=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,m=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,g=c*u,_=c*d;t[0]=f+_*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,g=c*u,_=c*d;t[0]=f-_*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,m=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*d,t[8]=g*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+_,t[5]=a*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jh,e,Qh)}lookAt(e,t,i){const r=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Gn.crossVectors(i,Wt),Gn.lengthSq()===0&&(Math.abs(i.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Gn.crossVectors(i,Wt)),Gn.normalize(),Vr.crossVectors(Wt,Gn),r[0]=Gn.x,r[4]=Vr.x,r[8]=Wt.x,r[1]=Gn.y,r[5]=Vr.y,r[9]=Wt.y,r[2]=Gn.z,r[6]=Vr.z,r[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],h=i[14],A=i[3],S=i[7],y=i[11],P=i[15],w=r[0],E=r[4],L=r[8],v=r[12],b=r[1],C=r[5],U=r[9],O=r[13],z=r[2],q=r[6],j=r[10],F=r[14],T=r[3],D=r[7],$=r[11],W=r[15];return s[0]=a*w+o*b+l*z+c*T,s[4]=a*E+o*C+l*q+c*D,s[8]=a*L+o*U+l*j+c*$,s[12]=a*v+o*O+l*F+c*W,s[1]=u*w+d*b+f*z+m*T,s[5]=u*E+d*C+f*q+m*D,s[9]=u*L+d*U+f*j+m*$,s[13]=u*v+d*O+f*F+m*W,s[2]=g*w+_*b+p*z+h*T,s[6]=g*E+_*C+p*q+h*D,s[10]=g*L+_*U+p*j+h*$,s[14]=g*v+_*O+p*F+h*W,s[3]=A*w+S*b+y*z+P*T,s[7]=A*E+S*C+y*q+P*D,s[11]=A*L+S*U+y*j+P*$,s[15]=A*v+S*O+y*F+P*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],h=e[15];return g*(+s*l*d-r*c*d-s*o*f+i*c*f+r*o*m-i*l*m)+_*(+t*l*m-t*c*f+s*a*f-r*a*m+r*c*u-s*l*u)+p*(+t*c*d-t*o*m-s*a*d+i*a*m+s*o*u-i*c*u)+h*(-r*o*u-t*l*d+t*o*f+r*a*d-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],h=e[15],A=d*p*c-_*f*c+_*l*m-o*p*m-d*l*h+o*f*h,S=g*f*c-u*p*c-g*l*m+a*p*m+u*l*h-a*f*h,y=u*_*c-g*d*c+g*o*m-a*_*m-u*o*h+a*d*h,P=g*d*l-u*_*l-g*o*f+a*_*f+u*o*p-a*d*p,w=t*A+i*S+r*y+s*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=A*E,e[1]=(_*f*s-d*p*s-_*r*m+i*p*m+d*r*h-i*f*h)*E,e[2]=(o*p*s-_*l*s+_*r*c-i*p*c-o*r*h+i*l*h)*E,e[3]=(d*l*s-o*f*s-d*r*c+i*f*c+o*r*m-i*l*m)*E,e[4]=S*E,e[5]=(u*p*s-g*f*s+g*r*m-t*p*m-u*r*h+t*f*h)*E,e[6]=(g*l*s-a*p*s-g*r*c+t*p*c+a*r*h-t*l*h)*E,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*m+t*l*m)*E,e[8]=y*E,e[9]=(g*d*s-u*_*s-g*i*m+t*_*m+u*i*h-t*d*h)*E,e[10]=(a*_*s-g*o*s+g*i*c-t*_*c-a*i*h+t*o*h)*E,e[11]=(u*o*s-a*d*s-u*i*c+t*d*c+a*i*m-t*o*m)*E,e[12]=P*E,e[13]=(u*_*r-g*d*r+g*i*f-t*_*f-u*i*p+t*d*p)*E,e[14]=(g*o*r-a*_*r-g*i*l+t*_*l+a*i*p-t*o*p)*E,e[15]=(a*d*r-u*o*r+u*i*l-t*d*l-a*i*f+t*o*f)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,m=s*u,g=s*d,_=a*u,p=a*d,h=o*d,A=l*c,S=l*u,y=l*d,P=i.x,w=i.y,E=i.z;return r[0]=(1-(_+h))*P,r[1]=(m+y)*P,r[2]=(g-S)*P,r[3]=0,r[4]=(m-y)*w,r[5]=(1-(f+h))*w,r[6]=(p+A)*w,r[7]=0,r[8]=(g+S)*E,r[9]=(p-A)*E,r[10]=(1-(f+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Pi.set(r[0],r[1],r[2]).length();const a=Pi.set(r[4],r[5],r[6]).length(),o=Pi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],sn.copy(this);const c=1/s,u=1/a,d=1/o;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=d,sn.elements[9]*=d,sn.elements[10]*=d,t.setFromRotationMatrix(sn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=xn,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),m=(i+r)/(i-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===xn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ys)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=xn,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),m=-(i+r)/(i-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===xn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===ys)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Pi=new Y,sn=new bt,Jh=new Y(0,0,0),Qh=new Y(1,1,1),Gn=new Y,Vr=new Y,Wt=new Y,Kl=new bt,Zl=new wr;class Fn{constructor(e=0,t=0,i=0,r=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Kl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zl.setFromEuler(this),this.setFromQuaternion(Zl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class vu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ef=0;const Jl=new Y,Li=new wr,wn=new bt,Gr=new Y,ur=new Y,tf=new Y,nf=new wr,Ql=new Y(1,0,0),ec=new Y(0,1,0),tc=new Y(0,0,1),nc={type:"added"},rf={type:"removed"},Di={type:"childadded",child:null},ga={type:"childremoved",child:null};class Ht extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new Y,t=new Fn,i=new wr,r=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new We}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.multiply(Li),this}rotateOnWorldAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.premultiply(Li),this}rotateX(e){return this.rotateOnAxis(Ql,e)}rotateY(e){return this.rotateOnAxis(ec,e)}rotateZ(e){return this.rotateOnAxis(tc,e)}translateOnAxis(e,t){return Jl.copy(e).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ql,e)}translateY(e){return this.translateOnAxis(ec,e)}translateZ(e){return this.translateOnAxis(tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Gr.copy(e):Gr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(ur,Gr,this.up):wn.lookAt(Gr,ur,this.up),this.quaternion.setFromRotationMatrix(wn),r&&(wn.extractRotation(r.matrixWorld),Li.setFromRotationMatrix(wn),this.quaternion.premultiply(Li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nc),Di.child=e,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rf),ga.child=e,this.dispatchEvent(ga),ga.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nc),Di.child=e,this.dispatchEvent(Di),Di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,tf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,nf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new Y(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new Y,An=new Y,_a=new Y,Cn=new Y,Ii=new Y,Ui=new Y,ic=new Y,va=new Y,xa=new Y,ya=new Y,ba=new mt,Sa=new mt,Ma=new mt;class cn{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),an.subVectors(e,t),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){an.subVectors(r,t),An.subVectors(i,t),_a.subVectors(e,t);const a=an.dot(an),o=an.dot(An),l=an.dot(_a),c=An.dot(An),u=An.dot(_a),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return ba.setScalar(0),Sa.setScalar(0),Ma.setScalar(0),ba.fromBufferAttribute(e,t),Sa.fromBufferAttribute(e,i),Ma.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ba,s.x),a.addScaledVector(Sa,s.y),a.addScaledVector(Ma,s.z),a}static isFrontFacing(e,t,i,r){return an.subVectors(i,t),An.subVectors(e,t),an.cross(An).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),An.subVectors(this.a,this.b),an.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return cn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ii.subVectors(r,i),Ui.subVectors(s,i),va.subVectors(e,i);const l=Ii.dot(va),c=Ui.dot(va);if(l<=0&&c<=0)return t.copy(i);xa.subVectors(e,r);const u=Ii.dot(xa),d=Ui.dot(xa);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ii,a);ya.subVectors(e,s);const m=Ii.dot(ya),g=Ui.dot(ya);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ui,o);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return ic.subVectors(s,r),o=(d-u)/(d-u+(m-g)),t.copy(r).addScaledVector(ic,o);const h=1/(p+_+f);return a=_*h,o=f*h,t.copy(i).addScaledVector(Ii,a).addScaledVector(Ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},$r={h:0,s:0,l:0};function Ea(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class it{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=Vh(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ea(a,s,e+1/3),this.g=Ea(a,s,e),this.b=Ea(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=xt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){const i=xu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return Je.workingToColorSpace(Rt.copy(this),e),Math.round(Ke(Rt.r*255,0,255))*65536+Math.round(Ke(Rt.g*255,0,255))*256+Math.round(Ke(Rt.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Rt.copy(this),t);const i=Rt.r,r=Rt.g,s=Rt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=xt){Je.workingToColorSpace(Rt.copy(this),e);const t=Rt.r,i=Rt.g,r=Rt.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($n),e.getHSL($r);const i=aa($n.h,$r.h,t),r=aa($n.s,$r.s,t),s=aa($n.l,$r.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new it;it.NAMES=xu;let sf=0;class Cr extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Tr(),this.name="",this.type="Material",this.blending=qi,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xa,this.blendDst=Ya,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(i.blending=this.blending),this.side!==Zn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ya&&(i.blendDst=this.blendDst),this.blendEquation!==ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xt extends Cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new Y,Wr=new nt;let af=0;class hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:af++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=$l,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Wr.fromBufferAttribute(this,t),Wr.applyMatrix3(e),this.setXY(t,Wr.x,Wr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=or(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=or(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=or(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=or(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=or(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),r=kt(r,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$l&&(e.usage=this.usage),e}}class yu extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class bu extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pi extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let of=0;const Jt=new bt,Ta=new Ht,Ni=new Y,qt=new Ar,dr=new Ar,Et=new Y;class Bn extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=Tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mu(e)?bu:yu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,i){return Jt.makeTranslation(e,t,i),this.applyMatrix4(Jt),this}scale(e,t,i){return Jt.makeScale(e,t,i),this.applyMatrix4(Jt),this}lookAt(e){return Ta.lookAt(e),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pi(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];dr.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(qt.min,dr.min),qt.expandByPoint(Et),Et.addVectors(qt.max,dr.max),qt.expandByPoint(Et)):(qt.expandByPoint(dr.min),qt.expandByPoint(dr.max))}qt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Et.fromBufferAttribute(o,c),l&&(Ni.fromBufferAttribute(e,c),Et.add(Ni)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new Y,l[L]=new Y;const c=new Y,u=new Y,d=new Y,f=new nt,m=new nt,g=new nt,_=new Y,p=new Y;function h(L,v,b){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,v),d.fromBufferAttribute(i,b),f.fromBufferAttribute(s,L),m.fromBufferAttribute(s,v),g.fromBufferAttribute(s,b),u.sub(c),d.sub(c),m.sub(f),g.sub(f);const C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(C),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(C),o[L].add(_),o[v].add(_),o[b].add(_),l[L].add(p),l[v].add(p),l[b].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let L=0,v=A.length;L<v;++L){const b=A[L],C=b.start,U=b.count;for(let O=C,z=C+U;O<z;O+=3)h(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const S=new Y,y=new Y,P=new Y,w=new Y;function E(L){P.fromBufferAttribute(r,L),w.copy(P);const v=o[L];S.copy(v),S.sub(P.multiplyScalar(P.dot(v))).normalize(),y.crossVectors(w,v);const C=y.dot(l[L])<0?-1:1;a.setXYZW(L,S.x,S.y,S.z,C)}for(let L=0,v=A.length;L<v;++L){const b=A[L],C=b.start,U=b.count;for(let O=C,z=C+U;O<z;O+=3)E(e.getX(O+0)),E(e.getX(O+1)),E(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new Y,s=new Y,a=new Y,o=new Y,l=new Y,c=new Y,u=new Y,d=new Y;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let h=0;h<u;h++)f[g++]=c[m++]}return new hn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rc=new bt,ii=new _u,qr=new Ts,sc=new Y,Xr=new Y,Yr=new Y,jr=new Y,wa=new Y,Kr=new Y,ac=new Y,Zr=new Y;class vt extends Ht{constructor(e=new Bn,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Kr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(wa.fromBufferAttribute(d,e),a?Kr.addScaledVector(wa,u):Kr.addScaledVector(wa.sub(t),u))}t.add(Kr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere),qr.applyMatrix4(s),ii.copy(e.ray).recast(e.near),!(qr.containsPoint(ii.origin)===!1&&(ii.intersectSphere(qr,sc)===null||ii.origin.distanceToSquared(sc)>(e.far-e.near)**2))&&(rc.copy(s).invert(),ii.copy(e.ray).applyMatrix4(rc),!(i.boundingBox!==null&&ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ii)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],h=a[p.materialIndex],A=Math.max(p.start,m.start),S=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=A,P=S;y<P;y+=3){const w=o.getX(y),E=o.getX(y+1),L=o.getX(y+2);r=Jr(this,h,e,i,c,u,d,w,E,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const A=o.getX(p),S=o.getX(p+1),y=o.getX(p+2);r=Jr(this,a,e,i,c,u,d,A,S,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],h=a[p.materialIndex],A=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=A,P=S;y<P;y+=3){const w=y,E=y+1,L=y+2;r=Jr(this,h,e,i,c,u,d,w,E,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const A=p,S=p+1,y=p+2;r=Jr(this,a,e,i,c,u,d,A,S,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function lf(n,e,t,i,r,s,a,o){let l;if(e.side===zt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Zn,o),l===null)return null;Zr.copy(o),Zr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Zr);return c<t.near||c>t.far?null:{distance:c,point:Zr.clone(),object:n}}function Jr(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Xr),n.getVertexPosition(l,Yr),n.getVertexPosition(c,jr);const u=lf(n,e,t,i,Xr,Yr,jr,ac);if(u){const d=new Y;cn.getBarycoord(ac,Xr,Yr,jr,d),r&&(u.uv=cn.getInterpolatedAttribute(r,o,l,c,d,new nt)),s&&(u.uv1=cn.getInterpolatedAttribute(s,o,l,c,d,new nt)),a&&(u.normal=cn.getInterpolatedAttribute(a,o,l,c,d,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new Y,materialIndex:0};cn.getNormal(Xr,Yr,jr,f.normal),u.face=f,u.barycoord=d}return u}class Rr extends Bn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new pi(c,3)),this.setAttribute("normal",new pi(u,3)),this.setAttribute("uv",new pi(d,2));function g(_,p,h,A,S,y,P,w,E,L,v){const b=y/E,C=P/L,U=y/2,O=P/2,z=w/2,q=E+1,j=L+1;let F=0,T=0;const D=new Y;for(let $=0;$<j;$++){const W=$*C-O;for(let ie=0;ie<q;ie++){const Te=ie*b-U;D[_]=Te*A,D[p]=W*S,D[h]=z,c.push(D.x,D.y,D.z),D[_]=0,D[p]=0,D[h]=w>0?1:-1,u.push(D.x,D.y,D.z),d.push(ie/E),d.push(1-$/L),F+=1}}for(let $=0;$<L;$++)for(let W=0;W<E;W++){const ie=f+W+q*$,Te=f+W+q*($+1),Be=f+(W+1)+q*($+1),ze=f+(W+1)+q*$;l.push(ie,Te,ze),l.push(Te,Be,ze),T+=6}o.addGroup(m,T,v),m+=T,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function er(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function It(n){const e={};for(let t=0;t<n.length;t++){const i=er(n[t]);for(const r in i)e[r]=i[r]}return e}function cf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Su(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const uf={clone:er,merge:It};var df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends Cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=df,this.fragmentShader=hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=cf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Mu extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new Y,oc=new nt,lc=new nt;class ln extends Mu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=No*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return No*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z)}getViewSize(e,t){return this.getViewBounds(e,oc,lc),t.subVectors(lc,oc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fi=-90,Oi=1;class ff extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ln(Fi,Oi,e,t);r.layers=this.layers,this.add(r);const s=new ln(Fi,Oi,e,t);s.layers=this.layers,this.add(s);const a=new ln(Fi,Oi,e,t);a.layers=this.layers,this.add(a);const o=new ln(Fi,Oi,e,t);o.layers=this.layers,this.add(o);const l=new ln(Fi,Oi,e,t);l.layers=this.layers,this.add(l);const c=new ln(Fi,Oi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===xn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ys)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Eu extends wt{constructor(e=[],t=Zi,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pf extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Eu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Rr(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:jn});s.uniforms.tEquirect.value=t;const a=new vt(r,s),o=t.minFilter;return t.minFilter===hi&&(t.minFilter=en),new ff(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Qr extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mf={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),h=this._getHandJoint(c,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mf)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Tu extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ca=new Y,gf=new Y,_f=new We;class oi{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ca.subVectors(i,t).cross(gf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ca),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_f.getNormalMatrix(e),r=this.coplanarPoint(Ca).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new Ts,vf=new nt(.5,.5),es=new Y;class wu{constructor(e=new oi,t=new oi,i=new oi,r=new oi,s=new oi,a=new oi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],m=s[7],g=s[8],_=s[9],p=s[10],h=s[11],A=s[12],S=s[13],y=s[14],P=s[15];if(r[0].setComponents(c-a,m-u,h-g,P-A).normalize(),r[1].setComponents(c+a,m+u,h+g,P+A).normalize(),r[2].setComponents(c+o,m+d,h+_,P+S).normalize(),r[3].setComponents(c-o,m-d,h-_,P-S).normalize(),i)r[4].setComponents(l,f,p,y).normalize(),r[5].setComponents(c-l,m-f,h-p,P-y).normalize();else if(r[4].setComponents(c-l,m-f,h-p,P-y).normalize(),t===xn)r[5].setComponents(c+l,m+f,h+p,P+y).normalize();else if(t===ys)r[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){ri.center.set(0,0,0);const t=vf.distanceTo(e.center);return ri.radius=.7071067811865476+t,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(es.x=r.normal.x>0?e.max.x:e.min.x,es.y=r.normal.y>0?e.max.y:e.min.y,es.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Au extends Cr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cc=new bt,Fo=new _u,ts=new Ts,ns=new Y;class xf extends Ht{constructor(e=new Bn,t=new Au){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ts.copy(i.boundingSphere),ts.applyMatrix4(r),ts.radius+=s,e.ray.intersectsSphere(ts)===!1)return;cc.copy(r).invert(),Fo.copy(e.ray).applyMatrix4(cc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=f,_=m;g<_;g++){const p=c.getX(g);ns.fromBufferAttribute(d,p),uc(ns,p,l,r,e,t,this)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=f,_=m;g<_;g++)ns.fromBufferAttribute(d,g),uc(ns,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function uc(n,e,t,i,r,s,a){const o=Fo.distanceSqToPoint(n);if(o<t){const l=new Y;Fo.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class fs extends wt{constructor(e,t,i,r,s=en,a=en,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function d(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),super.dispose()}}class pr extends wt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cu extends wt{constructor(e,t,i=gi,r,s,a,o=dn,l=dn,c,u=yr,d=1){if(u!==yr&&u!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ru extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ut extends Bn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=t/l,m=[],g=[],_=[],p=[];for(let h=0;h<u;h++){const A=h*f-a;for(let S=0;S<c;S++){const y=S*d-s;g.push(y,-A,0),_.push(0,0,1),p.push(S/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let A=0;A<o;A++){const S=A+c*h,y=A+c*(h+1),P=A+1+c*(h+1),w=A+1+c*h;m.push(S,y,w),m.push(y,P,w)}this.setIndex(m),this.setAttribute("position",new pi(g,3)),this.setAttribute("normal",new pi(_,3)),this.setAttribute("uv",new pi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ut(e.width,e.height,e.widthSegments,e.heightSegments)}}class yf extends Cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bf extends Cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ra={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Sf{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Mf=new Sf;class Qo{constructor(e){this.manager=e!==void 0?e:Mf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Qo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bi=new WeakMap;class Ef extends Qo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ra.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=Bi.get(a);d===void 0&&(d=[],Bi.set(a,d)),d.push({onLoad:t,onError:r})}return a}const o=Sr("img");function l(){u(),t&&t(this);const d=Bi.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onLoad&&m.onLoad(this)}Bi.delete(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),Ra.remove(`image:${e}`);const f=Bi.get(this)||[];for(let m=0;m<f.length;m++){const g=f[m];g.onError&&g.onError(d)}Bi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ra.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Pu extends Qo{constructor(e){super(e)}load(e,t,i,r){const s=new wt,a=new Ef(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class el extends Mu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Tf extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function dc(n,e,t,i){const r=wf(i);switch(t){case uu:return n*e;case hu:return n*e/r.components*r.byteLength;case jo:return n*e/r.components*r.byteLength;case fu:return n*e*2/r.components*r.byteLength;case Ko:return n*e*2/r.components*r.byteLength;case du:return n*e*3/r.components*r.byteLength;case un:return n*e*4/r.components*r.byteLength;case Zo:return n*e*4/r.components*r.byteLength;case cs:case us:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ds:case hs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case oo:case co:return Math.max(n,16)*Math.max(e,8)/4;case ao:case lo:return Math.max(n,8)*Math.max(e,8)/2;case uo:case ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case go:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case _o:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case vo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case xo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case yo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case bo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case So:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case To:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case wo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ao:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Co:case Ro:case Po:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Lo:case Do:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Io:case Uo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wf(n){switch(n){case Nn:case au:return{byteLength:1,components:1};case vr:case ou:case Er:return{byteLength:2,components:1};case Xo:case Yo:return{byteLength:2,components:4};case gi:case qo:case In:return{byteLength:4,components:1};case lu:case cu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Lu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Af(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],_=d[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const _=d[m];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rf=`#ifdef USE_ALPHAHASH
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
#endif`,Pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,If=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uf=`#ifdef USE_AOMAP
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
#endif`,Nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ff=`#ifdef USE_BATCHING
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
#endif`,Of=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hf=`#ifdef USE_IRIDESCENCE
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
#endif`,Vf=`#ifdef USE_BUMPMAP
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
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zf=`#define PI 3.141592653589793
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
} // validated`,Jf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qf=`vec3 transformedNormal = objectNormal;
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
#endif`,ep=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ip=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",sp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ap=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lp=`#ifdef USE_ENVMAP
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
#endif`,cp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,up=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mp=`#ifdef USE_GRADIENTMAP
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
}`,gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xp=`uniform bool receiveShadow;
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
#endif`,yp=`#ifdef USE_ENVMAP
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
#endif`,bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tp=`PhysicalMaterial material;
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
#endif`,wp=`struct PhysicalMaterial {
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
}`,Ap=`
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
#endif`,Cp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Up=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Np=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Op=`#if defined( USE_POINTS_UV )
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
#endif`,Bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gp=`#ifdef USE_MORPHTARGETS
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
#endif`,$p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kp=`#ifdef USE_NORMALMAP
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
#endif`,Zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,am=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hm=`float getShadowMask() {
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
}`,fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pm=`#ifdef USE_SKINNING
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
#endif`,mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gm=`#ifdef USE_SKINNING
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
#endif`,_m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ym=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bm=`#ifdef USE_TRANSMISSION
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
#endif`,Sm=`#ifdef USE_TRANSMISSION
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Am=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cm=`uniform sampler2D t2D;
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`#include <common>
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
}`,Um=`#if DEPTH_PACKING == 3200
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
}`,Nm=`#define DISTANCE
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
}`,Fm=`#define DISTANCE
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`uniform float scale;
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
}`,zm=`uniform vec3 diffuse;
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
}`,Hm=`#include <common>
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Gm=`#define LAMBERT
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
}`,$m=`#define LAMBERT
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
}`,Wm=`#define MATCAP
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
}`,qm=`#define MATCAP
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
}`,Xm=`#define NORMAL
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
}`,Ym=`#define NORMAL
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
}`,jm=`#define PHONG
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
}`,Km=`#define PHONG
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
}`,Zm=`#define STANDARD
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
}`,Jm=`#define STANDARD
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
}`,Qm=`#define TOON
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
}`,eg=`#define TOON
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
}`,tg=`uniform float size;
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#include <common>
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
}`,rg=`uniform vec3 color;
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
}`,sg=`uniform float rotation;
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
}`,ag=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Cf,alphahash_pars_fragment:Rf,alphamap_fragment:Pf,alphamap_pars_fragment:Lf,alphatest_fragment:Df,alphatest_pars_fragment:If,aomap_fragment:Uf,aomap_pars_fragment:Nf,batching_pars_vertex:Ff,batching_vertex:Of,begin_vertex:Bf,beginnormal_vertex:kf,bsdfs:zf,iridescence_fragment:Hf,bumpmap_pars_fragment:Vf,clipping_planes_fragment:Gf,clipping_planes_pars_fragment:$f,clipping_planes_pars_vertex:Wf,clipping_planes_vertex:qf,color_fragment:Xf,color_pars_fragment:Yf,color_pars_vertex:jf,color_vertex:Kf,common:Zf,cube_uv_reflection_fragment:Jf,defaultnormal_vertex:Qf,displacementmap_pars_vertex:ep,displacementmap_vertex:tp,emissivemap_fragment:np,emissivemap_pars_fragment:ip,colorspace_fragment:rp,colorspace_pars_fragment:sp,envmap_fragment:ap,envmap_common_pars_fragment:op,envmap_pars_fragment:lp,envmap_pars_vertex:cp,envmap_physical_pars_fragment:yp,envmap_vertex:up,fog_vertex:dp,fog_pars_vertex:hp,fog_fragment:fp,fog_pars_fragment:pp,gradientmap_pars_fragment:mp,lightmap_pars_fragment:gp,lights_lambert_fragment:_p,lights_lambert_pars_fragment:vp,lights_pars_begin:xp,lights_toon_fragment:bp,lights_toon_pars_fragment:Sp,lights_phong_fragment:Mp,lights_phong_pars_fragment:Ep,lights_physical_fragment:Tp,lights_physical_pars_fragment:wp,lights_fragment_begin:Ap,lights_fragment_maps:Cp,lights_fragment_end:Rp,logdepthbuf_fragment:Pp,logdepthbuf_pars_fragment:Lp,logdepthbuf_pars_vertex:Dp,logdepthbuf_vertex:Ip,map_fragment:Up,map_pars_fragment:Np,map_particle_fragment:Fp,map_particle_pars_fragment:Op,metalnessmap_fragment:Bp,metalnessmap_pars_fragment:kp,morphinstance_vertex:zp,morphcolor_vertex:Hp,morphnormal_vertex:Vp,morphtarget_pars_vertex:Gp,morphtarget_vertex:$p,normal_fragment_begin:Wp,normal_fragment_maps:qp,normal_pars_fragment:Xp,normal_pars_vertex:Yp,normal_vertex:jp,normalmap_pars_fragment:Kp,clearcoat_normal_fragment_begin:Zp,clearcoat_normal_fragment_maps:Jp,clearcoat_pars_fragment:Qp,iridescence_pars_fragment:em,opaque_fragment:tm,packing:nm,premultiplied_alpha_fragment:im,project_vertex:rm,dithering_fragment:sm,dithering_pars_fragment:am,roughnessmap_fragment:om,roughnessmap_pars_fragment:lm,shadowmap_pars_fragment:cm,shadowmap_pars_vertex:um,shadowmap_vertex:dm,shadowmask_pars_fragment:hm,skinbase_vertex:fm,skinning_pars_vertex:pm,skinning_vertex:mm,skinnormal_vertex:gm,specularmap_fragment:_m,specularmap_pars_fragment:vm,tonemapping_fragment:xm,tonemapping_pars_fragment:ym,transmission_fragment:bm,transmission_pars_fragment:Sm,uv_pars_fragment:Mm,uv_pars_vertex:Em,uv_vertex:Tm,worldpos_vertex:wm,background_vert:Am,background_frag:Cm,backgroundCube_vert:Rm,backgroundCube_frag:Pm,cube_vert:Lm,cube_frag:Dm,depth_vert:Im,depth_frag:Um,distanceRGBA_vert:Nm,distanceRGBA_frag:Fm,equirect_vert:Om,equirect_frag:Bm,linedashed_vert:km,linedashed_frag:zm,meshbasic_vert:Hm,meshbasic_frag:Vm,meshlambert_vert:Gm,meshlambert_frag:$m,meshmatcap_vert:Wm,meshmatcap_frag:qm,meshnormal_vert:Xm,meshnormal_frag:Ym,meshphong_vert:jm,meshphong_frag:Km,meshphysical_vert:Zm,meshphysical_frag:Jm,meshtoon_vert:Qm,meshtoon_frag:eg,points_vert:tg,points_frag:ng,shadow_vert:ig,shadow_frag:rg,sprite_vert:sg,sprite_frag:ag},Me={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},_n={basic:{uniforms:It([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:It([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new it(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:It([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:It([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:It([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new it(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:It([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:It([Me.points,Me.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:It([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:It([Me.common,Me.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:It([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:It([Me.sprite,Me.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:It([Me.common,Me.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:It([Me.lights,Me.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};_n.physical={uniforms:It([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const is={r:0,b:0,g:0},si=new Fn,og=new bt;function lg(n,e,t,i,r,s,a){const o=new it(0);let l=s===!0?0:1,c,u,d=null,f=0,m=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?t:e).get(y)),y}function _(S){let y=!1;const P=g(S);P===null?h(o,l):P&&P.isColor&&(h(P,1),y=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(S,y){const P=g(y);P&&(P.isCubeTexture||P.mapping===Es)?(u===void 0&&(u=new vt(new Rr(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:er(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,E,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),si.copy(y.backgroundRotation),si.x*=-1,si.y*=-1,si.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(og.makeRotationFromEuler(si)),u.material.toneMapped=Je.getTransfer(P.colorSpace)!==at,(d!==P||f!==P.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=P,f=P.version,m=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new vt(new Ut(2,2),new Jn({name:"BackgroundMaterial",uniforms:er(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Je.getTransfer(P.colorSpace)!==at,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||f!==P.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=P,f=P.version,m=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function h(S,y){S.getRGB(is,Su(n)),i.buffers.color.setClear(is.r,is.g,is.b,y,a)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,y=1){o.set(S),l=y,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,h(o,l)},render:_,addToRenderList:p,dispose:A}}function cg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(b,C,U,O,z){let q=!1;const j=d(O,U,C);s!==j&&(s=j,c(s.object)),q=m(b,O,U,z),q&&g(b,O,U,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(b,C,U,O),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function d(b,C,U){const O=U.wireframe===!0;let z=i[b.id];z===void 0&&(z={},i[b.id]=z);let q=z[C.id];q===void 0&&(q={},z[C.id]=q);let j=q[O];return j===void 0&&(j=f(l()),q[O]=j),j}function f(b){const C=[],U=[],O=[];for(let z=0;z<t;z++)C[z]=0,U[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:O,object:b,attributes:{},index:null}}function m(b,C,U,O){const z=s.attributes,q=C.attributes;let j=0;const F=U.getAttributes();for(const T in F)if(F[T].location>=0){const $=z[T];let W=q[T];if(W===void 0&&(T==="instanceMatrix"&&b.instanceMatrix&&(W=b.instanceMatrix),T==="instanceColor"&&b.instanceColor&&(W=b.instanceColor)),$===void 0||$.attribute!==W||W&&$.data!==W.data)return!0;j++}return s.attributesNum!==j||s.index!==O}function g(b,C,U,O){const z={},q=C.attributes;let j=0;const F=U.getAttributes();for(const T in F)if(F[T].location>=0){let $=q[T];$===void 0&&(T==="instanceMatrix"&&b.instanceMatrix&&($=b.instanceMatrix),T==="instanceColor"&&b.instanceColor&&($=b.instanceColor));const W={};W.attribute=$,$&&$.data&&(W.data=$.data),z[T]=W,j++}s.attributes=z,s.attributesNum=j,s.index=O}function _(){const b=s.newAttributes;for(let C=0,U=b.length;C<U;C++)b[C]=0}function p(b){h(b,0)}function h(b,C){const U=s.newAttributes,O=s.enabledAttributes,z=s.attributeDivisors;U[b]=1,O[b]===0&&(n.enableVertexAttribArray(b),O[b]=1),z[b]!==C&&(n.vertexAttribDivisor(b,C),z[b]=C)}function A(){const b=s.newAttributes,C=s.enabledAttributes;for(let U=0,O=C.length;U<O;U++)C[U]!==b[U]&&(n.disableVertexAttribArray(U),C[U]=0)}function S(b,C,U,O,z,q,j){j===!0?n.vertexAttribIPointer(b,C,U,z,q):n.vertexAttribPointer(b,C,U,O,z,q)}function y(b,C,U,O){_();const z=O.attributes,q=U.getAttributes(),j=C.defaultAttributeValues;for(const F in q){const T=q[F];if(T.location>=0){let D=z[F];if(D===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(D=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(D=b.instanceColor)),D!==void 0){const $=D.normalized,W=D.itemSize,ie=e.get(D);if(ie===void 0)continue;const Te=ie.buffer,Be=ie.type,ze=ie.bytesPerElement,Q=Be===n.INT||Be===n.UNSIGNED_INT||D.gpuType===qo;if(D.isInterleavedBufferAttribute){const ne=D.data,ve=ne.stride,Ce=D.offset;if(ne.isInstancedInterleavedBuffer){for(let Se=0;Se<T.locationSize;Se++)h(T.location+Se,ne.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Se=0;Se<T.locationSize;Se++)p(T.location+Se);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let Se=0;Se<T.locationSize;Se++)S(T.location+Se,W/T.locationSize,Be,$,ve*ze,(Ce+W/T.locationSize*Se)*ze,Q)}else{if(D.isInstancedBufferAttribute){for(let ne=0;ne<T.locationSize;ne++)h(T.location+ne,D.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let ne=0;ne<T.locationSize;ne++)p(T.location+ne);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let ne=0;ne<T.locationSize;ne++)S(T.location+ne,W/T.locationSize,Be,$,W*ze,W/T.locationSize*ne*ze,Q)}}else if(j!==void 0){const $=j[F];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(T.location,$);break;case 3:n.vertexAttrib3fv(T.location,$);break;case 4:n.vertexAttrib4fv(T.location,$);break;default:n.vertexAttrib1fv(T.location,$)}}}}A()}function P(){L();for(const b in i){const C=i[b];for(const U in C){const O=C[U];for(const z in O)u(O[z].object),delete O[z];delete C[U]}delete i[b]}}function w(b){if(i[b.id]===void 0)return;const C=i[b.id];for(const U in C){const O=C[U];for(const z in O)u(O[z].object),delete O[z];delete C[U]}delete i[b.id]}function E(b){for(const C in i){const U=i[C];if(U[b.id]===void 0)continue;const O=U[b.id];for(const z in O)u(O[z].object),delete O[z];delete U[b.id]}}function L(){v(),a=!0,s!==r&&(s=r,c(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:v,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:A}}function ug(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];t.update(m,i,1)}function l(c,u,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function dg(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(E){return!(E!==un&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const L=E===Er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Nn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==In&&!L)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:A,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:P,maxSamples:w}}function hg(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new oi,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const A=s?0:i,S=A*4;let y=h.clippingState||null;l.value=y,y=u(g,f,S,m);for(let P=0;P!==S;++P)y[P]=t[P];h.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const h=m+_*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<h)&&(p=new Float32Array(h));for(let S=0,y=m;S!==_;++S,y+=4)a.copy(d[S]).applyMatrix4(A,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function fg(n){let e=new WeakMap;function t(a,o){return o===no?a.mapping=Zi:o===io&&(a.mapping=Ji),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===no||o===io)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new pf(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Gi=4,hc=[.125,.215,.35,.446,.526,.582],ui=20,Pa=new el,fc=new it;let La=null,Da=0,Ia=0,Ua=!1;const li=(1+Math.sqrt(5))/2,ki=1/li,pc=[new Y(-li,ki,0),new Y(li,ki,0),new Y(-ki,0,li),new Y(ki,0,li),new Y(0,li,-ki),new Y(0,li,ki),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],pg=new Y;class mc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=pg}=s;La=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(La,Da,Ia),this._renderer.xr.enabled=Ua,e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===Ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),La=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:Er,format:un,colorSpace:Qi,depthBuffer:!1},r=gc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mg(s)),this._blurMaterial=gg(s,e,t)}return r}_compileMaterial(e){const t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,Pa)}_sceneToCubeUV(e,t,i,r,s){const l=new ln(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(fc),d.toneMapping=Kn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const _=new Xt({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),p=new vt(new Rr,_);let h=!1;const A=e.background;A?A.isColor&&(_.color.copy(A),e.background=null,h=!0):(_.color.copy(fc),h=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const P=this._cubeSize;rs(r,y*P,S>2?P:0,P,P),d.setRenderTarget(r),h&&d.render(p,l),d.render(e,l)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=m,d.autoClear=f,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Zi||e.mapping===Ji;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_c());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new vt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;rs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Pa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=pc[(r-s-1)%pc.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new vt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ui-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):ui;p>ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ui}`);const h=[];let A=0;for(let E=0;E<ui;++E){const L=E/_,v=Math.exp(-L*L/2);h.push(v),E===0?A+=v:E<p&&(A+=2*v)}for(let E=0;E<h.length;E++)h[E]=h[E]/A;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;const y=this._sizeLods[r],P=3*y*(r>S-Gi?r-S+Gi:0),w=4*(this._cubeSize-y);rs(t,P,w,3*y,2*y),l.setRenderTarget(t),l.render(d,Pa)}}function mg(n){const e=[],t=[],i=[];let r=n;const s=n-Gi+1+hc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Gi?l=hc[a-n+Gi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,p=2,h=1,A=new Float32Array(_*g*m),S=new Float32Array(p*g*m),y=new Float32Array(h*g*m);for(let w=0;w<m;w++){const E=w%3*2/3-1,L=w>2?0:-1,v=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];A.set(v,_*g*w),S.set(f,p*g*w);const b=[w,w,w,w,w,w];y.set(b,h*g*w)}const P=new Bn;P.setAttribute("position",new hn(A,_)),P.setAttribute("uv",new hn(S,p)),P.setAttribute("faceIndex",new hn(y,h)),e.push(P),r>Gi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function gc(n,e,t){const i=new _i(n,e,t);return i.texture.mapping=Es,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function gg(n,e,t){const i=new Float32Array(ui),r=new Y(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tl(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function _c(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tl(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function vc(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tl(),fragmentShader:`

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
	`}function _g(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===no||l===io,u=l===Zi||l===Ji;if(c||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new mc(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new mc(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function vg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Mr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function xg(n,e,t,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const m in f)e.update(f[m],n.ARRAY_BUFFER)}function c(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const A=m.array;_=m.version;for(let S=0,y=A.length;S<y;S+=3){const P=A[S+0],w=A[S+1],E=A[S+2];f.push(P,w,w,E,E,P)}}else if(g!==void 0){const A=g.array;_=g.version;for(let S=0,y=A.length/3-1;S<y;S+=3){const P=S+0,w=S+1,E=S+2;f.push(P,w,w,E,E,P)}}else return;const p=new(mu(f)?bu:yu)(f,1);p.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,p)}function u(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function yg(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){n.drawElements(i,m,s,f*a),t.update(m,i,1)}function c(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,f*a,g),t.update(m,i,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];t.update(p,i,1)}function d(f,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)c(f[h]/a,m[h],_[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,_,0,g);let h=0;for(let A=0;A<g;A++)h+=m[A]*_[A];t.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function bg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Sg(n,e,t){const i=new WeakMap,r=new mt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let b=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var m=b;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),p===!0&&(y=3);let P=o.attributes.position.count*y,w=1;P>e.maxTextureSize&&(w=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const E=new Float32Array(P*w*4*d),L=new gu(E,P,w,d);L.type=In,L.needsUpdate=!0;const v=y*4;for(let C=0;C<d;C++){const U=h[C],O=A[C],z=S[C],q=P*w*4*C;for(let j=0;j<U.count;j++){const F=j*v;g===!0&&(r.fromBufferAttribute(U,j),E[q+F+0]=r.x,E[q+F+1]=r.y,E[q+F+2]=r.z,E[q+F+3]=0),_===!0&&(r.fromBufferAttribute(O,j),E[q+F+4]=r.x,E[q+F+5]=r.y,E[q+F+6]=r.z,E[q+F+7]=0),p===!0&&(r.fromBufferAttribute(z,j),E[q+F+8]=r.x,E[q+F+9]=r.y,E[q+F+10]=r.z,E[q+F+11]=z.itemSize===4?r.w:1)}}f={count:d,texture:L,size:new nt(P,w)},i.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Mg(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Du=new wt,xc=new Cu(1,1),Iu=new gu,Uu=new Kh,Nu=new Eu,yc=[],bc=[],Sc=new Float32Array(16),Mc=new Float32Array(9),Ec=new Float32Array(4);function ir(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=yc[r];if(s===void 0&&(s=new Float32Array(r),yc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ws(n,e){let t=bc[e];t===void 0&&(t=new Int32Array(e),bc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Eg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function Ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function Cg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Ec.set(i),n.uniformMatrix2fv(this.addr,!1,Ec),Mt(t,i)}}function Rg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Mc.set(i),n.uniformMatrix3fv(this.addr,!1,Mc),Mt(t,i)}}function Pg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Sc.set(i),n.uniformMatrix4fv(this.addr,!1,Sc),Mt(t,i)}}function Lg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function Ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function Ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function Ng(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Fg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function Og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function Bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function kg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(xc.compareFunction=pu,s=xc):s=Du,t.setTexture2D(e||s,r)}function zg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Uu,r)}function Hg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Nu,r)}function Vg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Iu,r)}function Gg(n){switch(n){case 5126:return Eg;case 35664:return Tg;case 35665:return wg;case 35666:return Ag;case 35674:return Cg;case 35675:return Rg;case 35676:return Pg;case 5124:case 35670:return Lg;case 35667:case 35671:return Dg;case 35668:case 35672:return Ig;case 35669:case 35673:return Ug;case 5125:return Ng;case 36294:return Fg;case 36295:return Og;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Vg}}function $g(n,e){n.uniform1fv(this.addr,e)}function Wg(n,e){const t=ir(e,this.size,2);n.uniform2fv(this.addr,t)}function qg(n,e){const t=ir(e,this.size,3);n.uniform3fv(this.addr,t)}function Xg(n,e){const t=ir(e,this.size,4);n.uniform4fv(this.addr,t)}function Yg(n,e){const t=ir(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function jg(n,e){const t=ir(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Kg(n,e){const t=ir(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Zg(n,e){n.uniform1iv(this.addr,e)}function Jg(n,e){n.uniform2iv(this.addr,e)}function Qg(n,e){n.uniform3iv(this.addr,e)}function e0(n,e){n.uniform4iv(this.addr,e)}function t0(n,e){n.uniform1uiv(this.addr,e)}function n0(n,e){n.uniform2uiv(this.addr,e)}function i0(n,e){n.uniform3uiv(this.addr,e)}function r0(n,e){n.uniform4uiv(this.addr,e)}function s0(n,e,t){const i=this.cache,r=e.length,s=ws(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Du,s[a])}function a0(n,e,t){const i=this.cache,r=e.length,s=ws(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Uu,s[a])}function o0(n,e,t){const i=this.cache,r=e.length,s=ws(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Nu,s[a])}function l0(n,e,t){const i=this.cache,r=e.length,s=ws(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Iu,s[a])}function c0(n){switch(n){case 5126:return $g;case 35664:return Wg;case 35665:return qg;case 35666:return Xg;case 35674:return Yg;case 35675:return jg;case 35676:return Kg;case 5124:case 35670:return Zg;case 35667:case 35671:return Jg;case 35668:case 35672:return Qg;case 35669:case 35673:return e0;case 5125:return t0;case 36294:return n0;case 36295:return i0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return l0}}class u0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Gg(t.type)}}class d0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=c0(t.type)}}class h0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Na=/(\w+)(\])?(\[|\.)?/g;function Tc(n,e){n.seq.push(e),n.map[e.id]=e}function f0(n,e,t){const i=n.name,r=i.length;for(Na.lastIndex=0;;){const s=Na.exec(i),a=Na.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Tc(t,c===void 0?new u0(o,n,e):new d0(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new h0(o),Tc(t,d)),t=d}}}class ps{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);f0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function wc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const p0=37297;let m0=0;function g0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Ac=new We;function _0(n){Je._getMatrix(Ac,Je.workingColorSpace,n);const e=`mat3( ${Ac.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case xs:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Cc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+g0(n.getShaderSource(e),o)}else return s}function v0(n,e){const t=_0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function x0(n,e){let t;switch(e){case Mh:t="Linear";break;case Eh:t="Reinhard";break;case Th:t="Cineon";break;case wh:t="ACESFilmic";break;case Ch:t="AgX";break;case Rh:t="Neutral";break;case Ah:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ss=new Y;function y0(){Je.getLuminanceCoefficients(ss);const n=ss.x.toFixed(4),e=ss.y.toFixed(4),t=ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function S0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function M0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function fr(n){return n!==""}function Rc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oo(n){return n.replace(E0,w0)}const T0=new Map;function w0(n,e){let t=Xe[e];if(t===void 0){const i=T0.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Oo(t)}const A0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lc(n){return n.replace(A0,C0)}function C0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function R0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===iu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===nh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pn&&(e="SHADOWMAP_TYPE_VSM"),e}function P0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Zi:case Ji:e="ENVMAP_TYPE_CUBE";break;case Es:e="ENVMAP_TYPE_CUBE_UV";break}return e}function L0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ji:e="ENVMAP_MODE_REFRACTION";break}return e}function D0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ru:e="ENVMAP_BLENDING_MULTIPLY";break;case bh:e="ENVMAP_BLENDING_MIX";break;case Sh:e="ENVMAP_BLENDING_ADD";break}return e}function I0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function U0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=R0(t),c=P0(t),u=L0(t),d=D0(t),f=I0(t),m=b0(t),g=S0(s),_=r.createProgram();let p,h,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fr).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fr).join(`
`),h.length>0&&(h+=`
`)):(p=[Dc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),h=[Dc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Kn?x0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,v0("linearToOutputTexel",t.outputColorSpace),y0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),a=Oo(a),a=Rc(a,t),a=Pc(a,t),o=Oo(o),o=Rc(o,t),o=Pc(o,t),a=Lc(a),o=Lc(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=A+p+a,y=A+h+o,P=wc(r,r.VERTEX_SHADER,S),w=wc(r,r.FRAGMENT_SHADER,y);r.attachShader(_,P),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(C){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(_)||"",O=r.getShaderInfoLog(P)||"",z=r.getShaderInfoLog(w)||"",q=U.trim(),j=O.trim(),F=z.trim();let T=!0,D=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(T=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,P,w);else{const $=Cc(r,P,"vertex"),W=Cc(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+q+`
`+$+`
`+W)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(j===""||F==="")&&(D=!1);D&&(C.diagnostics={runnable:T,programLog:q,vertexShader:{log:j,prefix:p},fragmentShader:{log:F,prefix:h}})}r.deleteShader(P),r.deleteShader(w),L=new ps(r,_),v=M0(r,_)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let v;this.getAttributes=function(){return v===void 0&&E(this),v};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,p0)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=w,this}let N0=0;class F0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new O0(e),t.set(e,i)),i}}class O0{constructor(e){this.id=N0++,this.code=e,this.usedTimes=0}}function B0(n,e,t,i,r,s,a){const o=new vu,l=new F0,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,b,C,U,O){const z=U.fog,q=O.geometry,j=v.isMeshStandardMaterial?U.environment:null,F=(v.isMeshStandardMaterial?t:e).get(v.envMap||j),T=F&&F.mapping===Es?F.image.height:null,D=g[v.type];v.precision!==null&&(m=r.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const $=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,W=$!==void 0?$.length:0;let ie=0;q.morphAttributes.position!==void 0&&(ie=1),q.morphAttributes.normal!==void 0&&(ie=2),q.morphAttributes.color!==void 0&&(ie=3);let Te,Be,ze,Q;if(D){const tt=_n[D];Te=tt.vertexShader,Be=tt.fragmentShader}else Te=v.vertexShader,Be=v.fragmentShader,l.update(v),ze=l.getVertexShaderID(v),Q=l.getFragmentShaderID(v);const ne=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),Ce=O.isInstancedMesh===!0,Se=O.isBatchedMesh===!0,Ge=!!v.map,dt=!!v.matcap,I=!!F,et=!!v.aoMap,Fe=!!v.lightMap,Ue=!!v.bumpMap,re=!!v.normalMap,xe=!!v.displacementMap,oe=!!v.emissiveMap,be=!!v.metalnessMap,Re=!!v.roughnessMap,qe=v.anisotropy>0,R=v.clearcoat>0,x=v.dispersion>0,G=v.iridescence>0,ee=v.sheen>0,ue=v.transmission>0,te=qe&&!!v.anisotropyMap,Pe=R&&!!v.clearcoatMap,_e=R&&!!v.clearcoatNormalMap,B=R&&!!v.clearcoatRoughnessMap,de=G&&!!v.iridescenceMap,X=G&&!!v.iridescenceThicknessMap,se=ee&&!!v.sheenColorMap,ye=ee&&!!v.sheenRoughnessMap,pe=!!v.specularMap,fe=!!v.specularColorMap,Ie=!!v.specularIntensityMap,N=ue&&!!v.transmissionMap,le=ue&&!!v.thicknessMap,me=!!v.gradientMap,he=!!v.alphaMap,ae=v.alphaTest>0,ce=!!v.alphaHash,De=!!v.extensions;let $e=Kn;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&($e=n.toneMapping);const lt={shaderID:D,shaderType:v.type,shaderName:v.name,vertexShader:Te,fragmentShader:Be,defines:v.defines,customVertexShaderID:ze,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:Se,batchingColor:Se&&O._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&O.instanceColor!==null,instancingMorph:Ce&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Qi,alphaToCoverage:!!v.alphaToCoverage,map:Ge,matcap:dt,envMap:I,envMapMode:I&&F.mapping,envMapCubeUVHeight:T,aoMap:et,lightMap:Fe,bumpMap:Ue,normalMap:re,displacementMap:f&&xe,emissiveMap:oe,normalMapObjectSpace:re&&v.normalMapType===Uh,normalMapTangentSpace:re&&v.normalMapType===Ih,metalnessMap:be,roughnessMap:Re,anisotropy:qe,anisotropyMap:te,clearcoat:R,clearcoatMap:Pe,clearcoatNormalMap:_e,clearcoatRoughnessMap:B,dispersion:x,iridescence:G,iridescenceMap:de,iridescenceThicknessMap:X,sheen:ee,sheenColorMap:se,sheenRoughnessMap:ye,specularMap:pe,specularColorMap:fe,specularIntensityMap:Ie,transmission:ue,transmissionMap:N,thicknessMap:le,gradientMap:me,opaque:v.transparent===!1&&v.blending===qi&&v.alphaToCoverage===!1,alphaMap:he,alphaTest:ae,alphaHash:ce,combine:v.combine,mapUv:Ge&&_(v.map.channel),aoMapUv:et&&_(v.aoMap.channel),lightMapUv:Fe&&_(v.lightMap.channel),bumpMapUv:Ue&&_(v.bumpMap.channel),normalMapUv:re&&_(v.normalMap.channel),displacementMapUv:xe&&_(v.displacementMap.channel),emissiveMapUv:oe&&_(v.emissiveMap.channel),metalnessMapUv:be&&_(v.metalnessMap.channel),roughnessMapUv:Re&&_(v.roughnessMap.channel),anisotropyMapUv:te&&_(v.anisotropyMap.channel),clearcoatMapUv:Pe&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:_e&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:X&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:se&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(v.sheenRoughnessMap.channel),specularMapUv:pe&&_(v.specularMap.channel),specularColorMapUv:fe&&_(v.specularColorMap.channel),specularIntensityMapUv:Ie&&_(v.specularIntensityMap.channel),transmissionMapUv:N&&_(v.transmissionMap.channel),thicknessMapUv:le&&_(v.thicknessMap.channel),alphaMapUv:he&&_(v.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(re||qe),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(Ge||he),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:ie,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:Ge&&v.map.isVideoTexture===!0&&Je.getTransfer(v.map.colorSpace)===at,decodeVideoTextureEmissive:oe&&v.emissiveMap.isVideoTexture===!0&&Je.getTransfer(v.emissiveMap.colorSpace)===at,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ln,flipSided:v.side===zt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:De&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&v.extensions.multiDraw===!0||Se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function h(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)b.push(C),b.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(A(b,v),S(b,v),b.push(n.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function A(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function S(v,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),v.push(o.mask)}function y(v){const b=g[v.type];let C;if(b){const U=_n[b];C=uf.clone(U.uniforms)}else C=v.uniforms;return C}function P(v,b){let C;for(let U=0,O=u.length;U<O;U++){const z=u[U];if(z.cacheKey===b){C=z,++C.usedTimes;break}}return C===void 0&&(C=new U0(n,b,v,s),u.push(C)),C}function w(v){if(--v.usedTimes===0){const b=u.indexOf(v);u[b]=u[u.length-1],u.pop(),v.destroy()}}function E(v){l.remove(v)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:y,acquireProgram:P,releaseProgram:w,releaseShaderCache:E,programs:u,dispose:L}}function k0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function z0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ic(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Uc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,f,m,g,_,p){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=p),e++,h}function o(d,f,m,g,_,p){const h=a(d,f,m,g,_,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(d,f,m,g,_,p){const h=a(d,f,m,g,_,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||z0),i.length>1&&i.sort(f||Ic),r.length>1&&r.sort(f||Ic)}function u(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function H0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Uc,n.set(i,[a])):r>=s.length?(a=new Uc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function V0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new it};break;case"SpotLight":t={position:new Y,direction:new Y,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function G0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $0=0;function W0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function q0(n){const e=new V0,t=G0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const r=new Y,s=new bt,a=new bt;function o(c){let u=0,d=0,f=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let m=0,g=0,_=0,p=0,h=0,A=0,S=0,y=0,P=0,w=0,E=0;c.sort(W0);for(let v=0,b=c.length;v<b;v++){const C=c[v],U=C.color,O=C.intensity,z=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=U.r*O,d+=U.g*O,f+=U.b*O;else if(C.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(C.sh.coefficients[j],O);E++}else if(C.isDirectionalLight){const j=e.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const F=C.shadow,T=t.get(C);T.shadowIntensity=F.intensity,T.shadowBias=F.bias,T.shadowNormalBias=F.normalBias,T.shadowRadius=F.radius,T.shadowMapSize=F.mapSize,i.directionalShadow[m]=T,i.directionalShadowMap[m]=q,i.directionalShadowMatrix[m]=C.shadow.matrix,A++}i.directional[m]=j,m++}else if(C.isSpotLight){const j=e.get(C);j.position.setFromMatrixPosition(C.matrixWorld),j.color.copy(U).multiplyScalar(O),j.distance=z,j.coneCos=Math.cos(C.angle),j.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),j.decay=C.decay,i.spot[_]=j;const F=C.shadow;if(C.map&&(i.spotLightMap[P]=C.map,P++,F.updateMatrices(C),C.castShadow&&w++),i.spotLightMatrix[_]=F.matrix,C.castShadow){const T=t.get(C);T.shadowIntensity=F.intensity,T.shadowBias=F.bias,T.shadowNormalBias=F.normalBias,T.shadowRadius=F.radius,T.shadowMapSize=F.mapSize,i.spotShadow[_]=T,i.spotShadowMap[_]=q,y++}_++}else if(C.isRectAreaLight){const j=e.get(C);j.color.copy(U).multiplyScalar(O),j.halfWidth.set(C.width*.5,0,0),j.halfHeight.set(0,C.height*.5,0),i.rectArea[p]=j,p++}else if(C.isPointLight){const j=e.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),j.distance=C.distance,j.decay=C.decay,C.castShadow){const F=C.shadow,T=t.get(C);T.shadowIntensity=F.intensity,T.shadowBias=F.bias,T.shadowNormalBias=F.normalBias,T.shadowRadius=F.radius,T.shadowMapSize=F.mapSize,T.shadowCameraNear=F.camera.near,T.shadowCameraFar=F.camera.far,i.pointShadow[g]=T,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=C.shadow.matrix,S++}i.point[g]=j,g++}else if(C.isHemisphereLight){const j=e.get(C);j.skyColor.copy(C.color).multiplyScalar(O),j.groundColor.copy(C.groundColor).multiplyScalar(O),i.hemi[h]=j,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==m||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==p||L.hemiLength!==h||L.numDirectionalShadows!==A||L.numPointShadows!==S||L.numSpotShadows!==y||L.numSpotMaps!==P||L.numLightProbes!==E)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=y+P-w,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,L.directionalLength=m,L.pointLength=g,L.spotLength=_,L.rectAreaLength=p,L.hemiLength=h,L.numDirectionalShadows=A,L.numPointShadows=S,L.numSpotShadows=y,L.numSpotMaps=P,L.numLightProbes=E,i.version=$0++)}function l(c,u){let d=0,f=0,m=0,g=0,_=0;const p=u.matrixWorldInverse;for(let h=0,A=c.length;h<A;h++){const S=c[h];if(S.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),d++}else if(S.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),a.identity(),s.copy(S.matrixWorld),s.premultiply(p),a.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:i}}function Nc(n){const e=new q0(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function X0(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Nc(n),e.set(r,[o])):s>=a.length?(o=new Nc(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j0=`uniform sampler2D shadow_pass;
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
}`;function K0(n,e,t){let i=new wu;const r=new nt,s=new nt,a=new mt,o=new yf({depthPacking:Dh}),l=new bf,c={},u=t.maxTextureSize,d={[Zn]:zt,[zt]:Zn,[Ln]:Ln},f=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Y0,fragmentShader:j0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Bn;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new vt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let h=this.type;this.render=function(w,E,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const v=n.getRenderTarget(),b=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),U=n.state;U.setBlending(jn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=h!==Pn&&this.type===Pn,z=h===Pn&&this.type!==Pn;for(let q=0,j=w.length;q<j;q++){const F=w[q],T=F.shadow;if(T===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(T.autoUpdate===!1&&T.needsUpdate===!1)continue;r.copy(T.mapSize);const D=T.getFrameExtents();if(r.multiply(D),s.copy(T.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/D.x),r.x=s.x*D.x,T.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/D.y),r.y=s.y*D.y,T.mapSize.y=s.y)),T.map===null||O===!0||z===!0){const W=this.type!==Pn?{minFilter:dn,magFilter:dn}:{};T.map!==null&&T.map.dispose(),T.map=new _i(r.x,r.y,W),T.map.texture.name=F.name+".shadowMap",T.camera.updateProjectionMatrix()}n.setRenderTarget(T.map),n.clear();const $=T.getViewportCount();for(let W=0;W<$;W++){const ie=T.getViewport(W);a.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),U.viewport(a),T.updateMatrices(F,W),i=T.getFrustum(),y(E,L,T.camera,F,this.type)}T.isPointLightShadow!==!0&&this.type===Pn&&A(T,L),T.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(v,b,C)};function A(w,E){const L=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new _i(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(E,null,L,f,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(E,null,L,m,_,null)}function S(w,E,L,v){let b=null;const C=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)b=C;else if(b=L.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const U=b.uuid,O=E.uuid;let z=c[U];z===void 0&&(z={},c[U]=z);let q=z[O];q===void 0&&(q=b.clone(),z[O]=q,E.addEventListener("dispose",P)),b=q}if(b.visible=E.visible,b.wireframe=E.wireframe,v===Pn?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:d[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const U=n.properties.get(b);U.light=L}return b}function y(w,E,L,v,b){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Pn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const O=e.update(w),z=w.material;if(Array.isArray(z)){const q=O.groups;for(let j=0,F=q.length;j<F;j++){const T=q[j],D=z[T.materialIndex];if(D&&D.visible){const $=S(w,D,v,b);w.onBeforeShadow(n,w,E,L,O,$,T),n.renderBufferDirect(L,null,O,$,w,T),w.onAfterShadow(n,w,E,L,O,$,T)}}}else if(z.visible){const q=S(w,z,v,b);w.onBeforeShadow(n,w,E,L,O,q,null),n.renderBufferDirect(L,null,O,q,w,null),w.onAfterShadow(n,w,E,L,O,q,null)}}const U=w.children;for(let O=0,z=U.length;O<z;O++)y(U[O],E,L,v,b)}function P(w){w.target.removeEventListener("dispose",P);for(const L in c){const v=c[L],b=w.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}const Z0={[ja]:Ka,[Za]:eo,[Ja]:to,[Ki]:Qa,[Ka]:ja,[eo]:Za,[to]:Ja,[Qa]:Ki};function J0(n,e){function t(){let N=!1;const le=new mt;let me=null;const he=new mt(0,0,0,0);return{setMask:function(ae){me!==ae&&!N&&(n.colorMask(ae,ae,ae,ae),me=ae)},setLocked:function(ae){N=ae},setClear:function(ae,ce,De,$e,lt){lt===!0&&(ae*=$e,ce*=$e,De*=$e),le.set(ae,ce,De,$e),he.equals(le)===!1&&(n.clearColor(ae,ce,De,$e),he.copy(le))},reset:function(){N=!1,me=null,he.set(-1,0,0,0)}}}function i(){let N=!1,le=!1,me=null,he=null,ae=null;return{setReversed:function(ce){if(le!==ce){const De=e.get("EXT_clip_control");ce?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),le=ce;const $e=ae;ae=null,this.setClear($e)}},getReversed:function(){return le},setTest:function(ce){ce?ne(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(ce){me!==ce&&!N&&(n.depthMask(ce),me=ce)},setFunc:function(ce){if(le&&(ce=Z0[ce]),he!==ce){switch(ce){case ja:n.depthFunc(n.NEVER);break;case Ka:n.depthFunc(n.ALWAYS);break;case Za:n.depthFunc(n.LESS);break;case Ki:n.depthFunc(n.LEQUAL);break;case Ja:n.depthFunc(n.EQUAL);break;case Qa:n.depthFunc(n.GEQUAL);break;case eo:n.depthFunc(n.GREATER);break;case to:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=ce}},setLocked:function(ce){N=ce},setClear:function(ce){ae!==ce&&(le&&(ce=1-ce),n.clearDepth(ce),ae=ce)},reset:function(){N=!1,me=null,he=null,ae=null,le=!1}}}function r(){let N=!1,le=null,me=null,he=null,ae=null,ce=null,De=null,$e=null,lt=null;return{setTest:function(tt){N||(tt?ne(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(tt){le!==tt&&!N&&(n.stencilMask(tt),le=tt)},setFunc:function(tt,bn,mn){(me!==tt||he!==bn||ae!==mn)&&(n.stencilFunc(tt,bn,mn),me=tt,he=bn,ae=mn)},setOp:function(tt,bn,mn){(ce!==tt||De!==bn||$e!==mn)&&(n.stencilOp(tt,bn,mn),ce=tt,De=bn,$e=mn)},setLocked:function(tt){N=tt},setClear:function(tt){lt!==tt&&(n.clearStencil(tt),lt=tt)},reset:function(){N=!1,le=null,me=null,he=null,ae=null,ce=null,De=null,$e=null,lt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,h=null,A=null,S=null,y=null,P=null,w=null,E=new it(0,0,0),L=0,v=!1,b=null,C=null,U=null,O=null,z=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,F=0;const T=n.getParameter(n.VERSION);T.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(T)[1]),j=F>=1):T.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(T)[1]),j=F>=2);let D=null,$={};const W=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),Te=new mt().fromArray(W),Be=new mt().fromArray(ie);function ze(N,le,me,he){const ae=new Uint8Array(4),ce=n.createTexture();n.bindTexture(N,ce),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<me;De++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(le+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return ce}const Q={};Q[n.TEXTURE_2D]=ze(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(n.DEPTH_TEST),a.setFunc(Ki),Ue(!1),re(kl),ne(n.CULL_FACE),et(jn);function ne(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function ve(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Ce(N,le){return d[N]!==le?(n.bindFramebuffer(N,le),d[N]=le,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=le),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=le),!0):!1}function Se(N,le){let me=m,he=!1;if(N){me=f.get(le),me===void 0&&(me=[],f.set(le,me));const ae=N.textures;if(me.length!==ae.length||me[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,De=ae.length;ce<De;ce++)me[ce]=n.COLOR_ATTACHMENT0+ce;me.length=ae.length,he=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,he=!0);he&&n.drawBuffers(me)}function Ge(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const dt={[ci]:n.FUNC_ADD,[rh]:n.FUNC_SUBTRACT,[sh]:n.FUNC_REVERSE_SUBTRACT};dt[ah]=n.MIN,dt[oh]=n.MAX;const I={[lh]:n.ZERO,[ch]:n.ONE,[uh]:n.SRC_COLOR,[Xa]:n.SRC_ALPHA,[gh]:n.SRC_ALPHA_SATURATE,[ph]:n.DST_COLOR,[hh]:n.DST_ALPHA,[dh]:n.ONE_MINUS_SRC_COLOR,[Ya]:n.ONE_MINUS_SRC_ALPHA,[mh]:n.ONE_MINUS_DST_COLOR,[fh]:n.ONE_MINUS_DST_ALPHA,[_h]:n.CONSTANT_COLOR,[vh]:n.ONE_MINUS_CONSTANT_COLOR,[xh]:n.CONSTANT_ALPHA,[yh]:n.ONE_MINUS_CONSTANT_ALPHA};function et(N,le,me,he,ae,ce,De,$e,lt,tt){if(N===jn){_===!0&&(ve(n.BLEND),_=!1);return}if(_===!1&&(ne(n.BLEND),_=!0),N!==ih){if(N!==p||tt!==v){if((h!==ci||y!==ci)&&(n.blendEquation(n.FUNC_ADD),h=ci,y=ci),tt)switch(N){case qi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zl:n.blendFunc(n.ONE,n.ONE);break;case Hl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Hl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,S=null,P=null,w=null,E.set(0,0,0),L=0,p=N,v=tt}return}ae=ae||le,ce=ce||me,De=De||he,(le!==h||ae!==y)&&(n.blendEquationSeparate(dt[le],dt[ae]),h=le,y=ae),(me!==A||he!==S||ce!==P||De!==w)&&(n.blendFuncSeparate(I[me],I[he],I[ce],I[De]),A=me,S=he,P=ce,w=De),($e.equals(E)===!1||lt!==L)&&(n.blendColor($e.r,$e.g,$e.b,lt),E.copy($e),L=lt),p=N,v=!1}function Fe(N,le){N.side===Ln?ve(n.CULL_FACE):ne(n.CULL_FACE);let me=N.side===zt;le&&(me=!me),Ue(me),N.blending===qi&&N.transparent===!1?et(jn):et(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const he=N.stencilWrite;o.setTest(he),he&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),oe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(N){b!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),b=N)}function re(N){N!==eh?(ne(n.CULL_FACE),N!==C&&(N===kl?n.cullFace(n.BACK):N===th?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),C=N}function xe(N){N!==U&&(j&&n.lineWidth(N),U=N)}function oe(N,le,me){N?(ne(n.POLYGON_OFFSET_FILL),(O!==le||z!==me)&&(n.polygonOffset(le,me),O=le,z=me)):ve(n.POLYGON_OFFSET_FILL)}function be(N){N?ne(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function Re(N){N===void 0&&(N=n.TEXTURE0+q-1),D!==N&&(n.activeTexture(N),D=N)}function qe(N,le,me){me===void 0&&(D===null?me=n.TEXTURE0+q-1:me=D);let he=$[me];he===void 0&&(he={type:void 0,texture:void 0},$[me]=he),(he.type!==N||he.texture!==le)&&(D!==me&&(n.activeTexture(me),D=me),n.bindTexture(N,le||Q[N]),he.type=N,he.texture=le)}function R(){const N=$[D];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{n.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{n.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{n.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{n.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{n.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function B(){try{n.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{n.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function X(){try{n.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(N){Te.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Te.copy(N))}function ye(N){Be.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Be.copy(N))}function pe(N,le){let me=c.get(le);me===void 0&&(me=new WeakMap,c.set(le,me));let he=me.get(N);he===void 0&&(he=n.getUniformBlockIndex(le,N.name),me.set(N,he))}function fe(N,le){const he=c.get(le).get(N);l.get(le)!==he&&(n.uniformBlockBinding(le,he,N.__bindingPointIndex),l.set(le,he))}function Ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},D=null,$={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,h=null,A=null,S=null,y=null,P=null,w=null,E=new it(0,0,0),L=0,v=!1,b=null,C=null,U=null,O=null,z=null,Te.set(0,0,n.canvas.width,n.canvas.height),Be.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:ve,bindFramebuffer:Ce,drawBuffers:Se,useProgram:Ge,setBlending:et,setMaterial:Fe,setFlipSided:Ue,setCullFace:re,setLineWidth:xe,setPolygonOffset:oe,setScissorTest:be,activeTexture:Re,bindTexture:qe,unbindTexture:R,compressedTexImage2D:x,compressedTexImage3D:G,texImage2D:de,texImage3D:X,updateUBOMapping:pe,uniformBlockBinding:fe,texStorage2D:_e,texStorage3D:B,texSubImage2D:ee,texSubImage3D:ue,compressedTexSubImage2D:te,compressedTexSubImage3D:Pe,scissor:se,viewport:ye,reset:Ie}}function Q0(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,x){return m?new OffscreenCanvas(R,x):Sr("canvas")}function _(R,x,G){let ee=1;const ue=qe(R);if((ue.width>G||ue.height>G)&&(ee=G/Math.max(ue.width,ue.height)),ee<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const te=Math.floor(ee*ue.width),Pe=Math.floor(ee*ue.height);d===void 0&&(d=g(te,Pe));const _e=x?g(te,Pe):d;return _e.width=te,_e.height=Pe,_e.getContext("2d").drawImage(R,0,0,te,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+te+"x"+Pe+")."),_e}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),R;return R}function p(R){return R.generateMipmaps}function h(R){n.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(R,x,G,ee,ue=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let te=x;if(x===n.RED&&(G===n.FLOAT&&(te=n.R32F),G===n.HALF_FLOAT&&(te=n.R16F),G===n.UNSIGNED_BYTE&&(te=n.R8)),x===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(te=n.R8UI),G===n.UNSIGNED_SHORT&&(te=n.R16UI),G===n.UNSIGNED_INT&&(te=n.R32UI),G===n.BYTE&&(te=n.R8I),G===n.SHORT&&(te=n.R16I),G===n.INT&&(te=n.R32I)),x===n.RG&&(G===n.FLOAT&&(te=n.RG32F),G===n.HALF_FLOAT&&(te=n.RG16F),G===n.UNSIGNED_BYTE&&(te=n.RG8)),x===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(te=n.RG8UI),G===n.UNSIGNED_SHORT&&(te=n.RG16UI),G===n.UNSIGNED_INT&&(te=n.RG32UI),G===n.BYTE&&(te=n.RG8I),G===n.SHORT&&(te=n.RG16I),G===n.INT&&(te=n.RG32I)),x===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(te=n.RGB8UI),G===n.UNSIGNED_SHORT&&(te=n.RGB16UI),G===n.UNSIGNED_INT&&(te=n.RGB32UI),G===n.BYTE&&(te=n.RGB8I),G===n.SHORT&&(te=n.RGB16I),G===n.INT&&(te=n.RGB32I)),x===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(te=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(te=n.RGBA16UI),G===n.UNSIGNED_INT&&(te=n.RGBA32UI),G===n.BYTE&&(te=n.RGBA8I),G===n.SHORT&&(te=n.RGBA16I),G===n.INT&&(te=n.RGBA32I)),x===n.RGB&&(G===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(te=n.R11F_G11F_B10F)),x===n.RGBA){const Pe=ue?xs:Je.getTransfer(ee);G===n.FLOAT&&(te=n.RGBA32F),G===n.HALF_FLOAT&&(te=n.RGBA16F),G===n.UNSIGNED_BYTE&&(te=Pe===at?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function y(R,x){let G;return R?x===null||x===gi||x===xr?G=n.DEPTH24_STENCIL8:x===In?G=n.DEPTH32F_STENCIL8:x===vr&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===gi||x===xr?G=n.DEPTH_COMPONENT24:x===In?G=n.DEPTH_COMPONENT32F:x===vr&&(G=n.DEPTH_COMPONENT16),G}function P(R,x){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==dn&&R.minFilter!==en?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function w(R){const x=R.target;x.removeEventListener("dispose",w),L(x),x.isVideoTexture&&u.delete(x)}function E(R){const x=R.target;x.removeEventListener("dispose",E),b(x)}function L(R){const x=i.get(R);if(x.__webglInit===void 0)return;const G=R.source,ee=f.get(G);if(ee){const ue=ee[x.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&v(R),Object.keys(ee).length===0&&f.delete(G)}i.remove(R)}function v(R){const x=i.get(R);n.deleteTexture(x.__webglTexture);const G=R.source,ee=f.get(G);delete ee[x.__cacheKey],a.memory.textures--}function b(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(x.__webglFramebuffer[ee]))for(let ue=0;ue<x.__webglFramebuffer[ee].length;ue++)n.deleteFramebuffer(x.__webglFramebuffer[ee][ue]);else n.deleteFramebuffer(x.__webglFramebuffer[ee]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[ee])}else{if(Array.isArray(x.__webglFramebuffer))for(let ee=0;ee<x.__webglFramebuffer.length;ee++)n.deleteFramebuffer(x.__webglFramebuffer[ee]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ee=0;ee<x.__webglColorRenderbuffer.length;ee++)x.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[ee]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=R.textures;for(let ee=0,ue=G.length;ee<ue;ee++){const te=i.get(G[ee]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),a.memory.textures--),i.remove(G[ee])}i.remove(R)}let C=0;function U(){C=0}function O(){const R=C;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),C+=1,R}function z(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function q(R,x){const G=i.get(R);if(R.isVideoTexture&&be(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(G,R,x);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+x)}function j(R,x){const G=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){Q(G,R,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+x)}function F(R,x){const G=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){Q(G,R,x);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+x)}function T(R,x){const G=i.get(R);if(R.version>0&&G.__version!==R.version){ne(G,R,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+x)}const D={[ro]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[so]:n.MIRRORED_REPEAT},$={[dn]:n.NEAREST,[Ph]:n.NEAREST_MIPMAP_NEAREST,[Fr]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[ra]:n.LINEAR_MIPMAP_NEAREST,[hi]:n.LINEAR_MIPMAP_LINEAR},W={[Nh]:n.NEVER,[Hh]:n.ALWAYS,[Fh]:n.LESS,[pu]:n.LEQUAL,[Oh]:n.EQUAL,[zh]:n.GEQUAL,[Bh]:n.GREATER,[kh]:n.NOTEQUAL};function ie(R,x){if(x.type===In&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===en||x.magFilter===ra||x.magFilter===Fr||x.magFilter===hi||x.minFilter===en||x.minFilter===ra||x.minFilter===Fr||x.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,D[x.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,D[x.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,D[x.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,$[x.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,$[x.minFilter]),x.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,W[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===dn||x.minFilter!==Fr&&x.minFilter!==hi||x.type===In&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Te(R,x){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",w));const ee=x.source;let ue=f.get(ee);ue===void 0&&(ue={},f.set(ee,ue));const te=z(x);if(te!==R.__cacheKey){ue[te]===void 0&&(ue[te]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ue[te].usedTimes++;const Pe=ue[R.__cacheKey];Pe!==void 0&&(ue[R.__cacheKey].usedTimes--,Pe.usedTimes===0&&v(x)),R.__cacheKey=te,R.__webglTexture=ue[te].texture}return G}function Be(R,x,G){return Math.floor(Math.floor(R/G)/x)}function ze(R,x,G,ee){const te=R.updateRanges;if(te.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,G,ee,x.data);else{te.sort((X,se)=>X.start-se.start);let Pe=0;for(let X=1;X<te.length;X++){const se=te[Pe],ye=te[X],pe=se.start+se.count,fe=Be(ye.start,x.width,4),Ie=Be(se.start,x.width,4);ye.start<=pe+1&&fe===Ie&&Be(ye.start+ye.count-1,x.width,4)===fe?se.count=Math.max(se.count,ye.start+ye.count-se.start):(++Pe,te[Pe]=ye)}te.length=Pe+1;const _e=n.getParameter(n.UNPACK_ROW_LENGTH),B=n.getParameter(n.UNPACK_SKIP_PIXELS),de=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let X=0,se=te.length;X<se;X++){const ye=te[X],pe=Math.floor(ye.start/4),fe=Math.ceil(ye.count/4),Ie=pe%x.width,N=Math.floor(pe/x.width),le=fe,me=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ie),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,Ie,N,le,me,G,ee,x.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,_e),n.pixelStorei(n.UNPACK_SKIP_PIXELS,B),n.pixelStorei(n.UNPACK_SKIP_ROWS,de)}}function Q(R,x,G){let ee=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ee=n.TEXTURE_3D);const ue=Te(R,x),te=x.source;t.bindTexture(ee,R.__webglTexture,n.TEXTURE0+G);const Pe=i.get(te);if(te.version!==Pe.__version||ue===!0){t.activeTexture(n.TEXTURE0+G);const _e=Je.getPrimaries(Je.workingColorSpace),B=x.colorSpace===qn?null:Je.getPrimaries(x.colorSpace),de=x.colorSpace===qn||_e===B?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let X=_(x.image,!1,r.maxTextureSize);X=Re(x,X);const se=s.convert(x.format,x.colorSpace),ye=s.convert(x.type);let pe=S(x.internalFormat,se,ye,x.colorSpace,x.isVideoTexture);ie(ee,x);let fe;const Ie=x.mipmaps,N=x.isVideoTexture!==!0,le=Pe.__version===void 0||ue===!0,me=te.dataReady,he=P(x,X);if(x.isDepthTexture)pe=y(x.format===br,x.type),le&&(N?t.texStorage2D(n.TEXTURE_2D,1,pe,X.width,X.height):t.texImage2D(n.TEXTURE_2D,0,pe,X.width,X.height,0,se,ye,null));else if(x.isDataTexture)if(Ie.length>0){N&&le&&t.texStorage2D(n.TEXTURE_2D,he,pe,Ie[0].width,Ie[0].height);for(let ae=0,ce=Ie.length;ae<ce;ae++)fe=Ie[ae],N?me&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,fe.width,fe.height,se,ye,fe.data):t.texImage2D(n.TEXTURE_2D,ae,pe,fe.width,fe.height,0,se,ye,fe.data);x.generateMipmaps=!1}else N?(le&&t.texStorage2D(n.TEXTURE_2D,he,pe,X.width,X.height),me&&ze(x,X,se,ye)):t.texImage2D(n.TEXTURE_2D,0,pe,X.width,X.height,0,se,ye,X.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){N&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,pe,Ie[0].width,Ie[0].height,X.depth);for(let ae=0,ce=Ie.length;ae<ce;ae++)if(fe=Ie[ae],x.format!==un)if(se!==null)if(N){if(me)if(x.layerUpdates.size>0){const De=dc(fe.width,fe.height,x.format,x.type);for(const $e of x.layerUpdates){const lt=fe.data.subarray($e*De/fe.data.BYTES_PER_ELEMENT,($e+1)*De/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,$e,fe.width,fe.height,1,se,lt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,fe.width,fe.height,X.depth,se,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,pe,fe.width,fe.height,X.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,fe.width,fe.height,X.depth,se,ye,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,pe,fe.width,fe.height,X.depth,0,se,ye,fe.data)}else{N&&le&&t.texStorage2D(n.TEXTURE_2D,he,pe,Ie[0].width,Ie[0].height);for(let ae=0,ce=Ie.length;ae<ce;ae++)fe=Ie[ae],x.format!==un?se!==null?N?me&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,fe.width,fe.height,se,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,pe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?me&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,fe.width,fe.height,se,ye,fe.data):t.texImage2D(n.TEXTURE_2D,ae,pe,fe.width,fe.height,0,se,ye,fe.data)}else if(x.isDataArrayTexture)if(N){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,pe,X.width,X.height,X.depth),me)if(x.layerUpdates.size>0){const ae=dc(X.width,X.height,x.format,x.type);for(const ce of x.layerUpdates){const De=X.data.subarray(ce*ae/X.data.BYTES_PER_ELEMENT,(ce+1)*ae/X.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,X.width,X.height,1,se,ye,De)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,se,ye,X.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,pe,X.width,X.height,X.depth,0,se,ye,X.data);else if(x.isData3DTexture)N?(le&&t.texStorage3D(n.TEXTURE_3D,he,pe,X.width,X.height,X.depth),me&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,se,ye,X.data)):t.texImage3D(n.TEXTURE_3D,0,pe,X.width,X.height,X.depth,0,se,ye,X.data);else if(x.isFramebufferTexture){if(le)if(N)t.texStorage2D(n.TEXTURE_2D,he,pe,X.width,X.height);else{let ae=X.width,ce=X.height;for(let De=0;De<he;De++)t.texImage2D(n.TEXTURE_2D,De,pe,ae,ce,0,se,ye,null),ae>>=1,ce>>=1}}else if(Ie.length>0){if(N&&le){const ae=qe(Ie[0]);t.texStorage2D(n.TEXTURE_2D,he,pe,ae.width,ae.height)}for(let ae=0,ce=Ie.length;ae<ce;ae++)fe=Ie[ae],N?me&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,se,ye,fe):t.texImage2D(n.TEXTURE_2D,ae,pe,se,ye,fe);x.generateMipmaps=!1}else if(N){if(le){const ae=qe(X);t.texStorage2D(n.TEXTURE_2D,he,pe,ae.width,ae.height)}me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se,ye,X)}else t.texImage2D(n.TEXTURE_2D,0,pe,se,ye,X);p(x)&&h(ee),Pe.__version=te.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ne(R,x,G){if(x.image.length!==6)return;const ee=Te(R,x),ue=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+G);const te=i.get(ue);if(ue.version!==te.__version||ee===!0){t.activeTexture(n.TEXTURE0+G);const Pe=Je.getPrimaries(Je.workingColorSpace),_e=x.colorSpace===qn?null:Je.getPrimaries(x.colorSpace),B=x.colorSpace===qn||Pe===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);const de=x.isCompressedTexture||x.image[0].isCompressedTexture,X=x.image[0]&&x.image[0].isDataTexture,se=[];for(let ce=0;ce<6;ce++)!de&&!X?se[ce]=_(x.image[ce],!0,r.maxCubemapSize):se[ce]=X?x.image[ce].image:x.image[ce],se[ce]=Re(x,se[ce]);const ye=se[0],pe=s.convert(x.format,x.colorSpace),fe=s.convert(x.type),Ie=S(x.internalFormat,pe,fe,x.colorSpace),N=x.isVideoTexture!==!0,le=te.__version===void 0||ee===!0,me=ue.dataReady;let he=P(x,ye);ie(n.TEXTURE_CUBE_MAP,x);let ae;if(de){N&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ie,ye.width,ye.height);for(let ce=0;ce<6;ce++){ae=se[ce].mipmaps;for(let De=0;De<ae.length;De++){const $e=ae[De];x.format!==un?pe!==null?N?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De,0,0,$e.width,$e.height,pe,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De,Ie,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De,0,0,$e.width,$e.height,pe,fe,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De,Ie,$e.width,$e.height,0,pe,fe,$e.data)}}}else{if(ae=x.mipmaps,N&&le){ae.length>0&&he++;const ce=qe(se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ie,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(X){N?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,se[ce].width,se[ce].height,pe,fe,se[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ie,se[ce].width,se[ce].height,0,pe,fe,se[ce].data);for(let De=0;De<ae.length;De++){const lt=ae[De].image[ce].image;N?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De+1,0,0,lt.width,lt.height,pe,fe,lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De+1,Ie,lt.width,lt.height,0,pe,fe,lt.data)}}else{N?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,pe,fe,se[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ie,pe,fe,se[ce]);for(let De=0;De<ae.length;De++){const $e=ae[De];N?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De+1,0,0,pe,fe,$e.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De+1,Ie,pe,fe,$e.image[ce])}}}p(x)&&h(n.TEXTURE_CUBE_MAP),te.__version=ue.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ve(R,x,G,ee,ue,te){const Pe=s.convert(G.format,G.colorSpace),_e=s.convert(G.type),B=S(G.internalFormat,Pe,_e,G.colorSpace),de=i.get(x),X=i.get(G);if(X.__renderTarget=x,!de.__hasExternalTextures){const se=Math.max(1,x.width>>te),ye=Math.max(1,x.height>>te);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,te,B,se,ye,x.depth,0,Pe,_e,null):t.texImage2D(ue,te,B,se,ye,0,Pe,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),oe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,ue,X.__webglTexture,0,xe(x)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,ue,X.__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(R,x,G){if(n.bindRenderbuffer(n.RENDERBUFFER,R),x.depthBuffer){const ee=x.depthTexture,ue=ee&&ee.isDepthTexture?ee.type:null,te=y(x.stencilBuffer,ue),Pe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=xe(x);oe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,te,x.width,x.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,te,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,te,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,R)}else{const ee=x.textures;for(let ue=0;ue<ee.length;ue++){const te=ee[ue],Pe=s.convert(te.format,te.colorSpace),_e=s.convert(te.type),B=S(te.internalFormat,Pe,_e,te.colorSpace),de=xe(x);G&&oe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,B,x.width,x.height):oe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,B,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,B,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(R,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(x.depthTexture);ee.__renderTarget=x,(!ee.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q(x.depthTexture,0);const ue=ee.__webglTexture,te=xe(x);if(x.depthTexture.format===yr)oe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0);else if(x.depthTexture.format===br)oe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Ge(R){const x=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const ee=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ee){const ue=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ee.removeEventListener("dispose",ue)};ee.addEventListener("dispose",ue),x.__depthDisposeCallback=ue}x.__boundDepthTexture=ee}if(R.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const ee=R.texture.mipmaps;ee&&ee.length>0?Se(x.__webglFramebuffer[0],R):Se(x.__webglFramebuffer,R)}else if(G){x.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[ee]),x.__webglDepthbuffer[ee]===void 0)x.__webglDepthbuffer[ee]=n.createRenderbuffer(),Ce(x.__webglDepthbuffer[ee],R,!1);else{const ue=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=x.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,te)}}else{const ee=R.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ce(x.__webglDepthbuffer,R,!1);else{const ue=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,te)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(R,x,G){const ee=i.get(R);x!==void 0&&ve(ee.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Ge(R)}function I(R){const x=R.texture,G=i.get(R),ee=i.get(x);R.addEventListener("dispose",E);const ue=R.textures,te=R.isWebGLCubeRenderTarget===!0,Pe=ue.length>1;if(Pe||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=x.version,a.memory.textures++),te){G.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[_e]=[];for(let B=0;B<x.mipmaps.length;B++)G.__webglFramebuffer[_e][B]=n.createFramebuffer()}else G.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let _e=0;_e<x.mipmaps.length;_e++)G.__webglFramebuffer[_e]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let _e=0,B=ue.length;_e<B;_e++){const de=i.get(ue[_e]);de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&oe(R)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let _e=0;_e<ue.length;_e++){const B=ue[_e];G.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[_e]);const de=s.convert(B.format,B.colorSpace),X=s.convert(B.type),se=S(B.internalFormat,de,X,B.colorSpace,R.isXRRenderTarget===!0),ye=xe(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,se,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,G.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),ie(n.TEXTURE_CUBE_MAP,x);for(let _e=0;_e<6;_e++)if(x.mipmaps&&x.mipmaps.length>0)for(let B=0;B<x.mipmaps.length;B++)ve(G.__webglFramebuffer[_e][B],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,B);else ve(G.__webglFramebuffer[_e],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);p(x)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let _e=0,B=ue.length;_e<B;_e++){const de=ue[_e],X=i.get(de);let se=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,X.__webglTexture),ie(se,de),ve(G.__webglFramebuffer,R,de,n.COLOR_ATTACHMENT0+_e,se,0),p(de)&&h(se)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,ee.__webglTexture),ie(_e,x),x.mipmaps&&x.mipmaps.length>0)for(let B=0;B<x.mipmaps.length;B++)ve(G.__webglFramebuffer[B],R,x,n.COLOR_ATTACHMENT0,_e,B);else ve(G.__webglFramebuffer,R,x,n.COLOR_ATTACHMENT0,_e,0);p(x)&&h(_e),t.unbindTexture()}R.depthBuffer&&Ge(R)}function et(R){const x=R.textures;for(let G=0,ee=x.length;G<ee;G++){const ue=x[G];if(p(ue)){const te=A(R),Pe=i.get(ue).__webglTexture;t.bindTexture(te,Pe),h(te),t.unbindTexture()}}}const Fe=[],Ue=[];function re(R){if(R.samples>0){if(oe(R)===!1){const x=R.textures,G=R.width,ee=R.height;let ue=n.COLOR_BUFFER_BIT;const te=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=i.get(R),_e=x.length>1;if(_e)for(let de=0;de<x.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const B=R.texture.mipmaps;B&&B.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let de=0;de<x.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[de]);const X=i.get(x[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,X,0)}n.blitFramebuffer(0,0,G,ee,0,0,G,ee,ue,n.NEAREST),l===!0&&(Fe.length=0,Ue.length=0,Fe.push(n.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Fe.push(te),Ue.push(te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ue)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let de=0;de<x.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[de]);const X=i.get(x[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,X,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const x=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function xe(R){return Math.min(r.maxSamples,R.samples)}function oe(R){const x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function be(R){const x=a.render.frame;u.get(R)!==x&&(u.set(R,x),R.update())}function Re(R,x){const G=R.colorSpace,ee=R.format,ue=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Qi&&G!==qn&&(Je.getTransfer(G)===at?(ee!==un||ue!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),x}function qe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=q,this.setTexture2DArray=j,this.setTexture3D=F,this.setTextureCube=T,this.rebindTextures=dt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=oe}function e_(n,e){function t(i,r=qn){let s;const a=Je.getTransfer(r);if(i===Nn)return n.UNSIGNED_BYTE;if(i===Xo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===au)return n.BYTE;if(i===ou)return n.SHORT;if(i===vr)return n.UNSIGNED_SHORT;if(i===qo)return n.INT;if(i===gi)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===Er)return n.HALF_FLOAT;if(i===uu)return n.ALPHA;if(i===du)return n.RGB;if(i===un)return n.RGBA;if(i===yr)return n.DEPTH_COMPONENT;if(i===br)return n.DEPTH_STENCIL;if(i===hu)return n.RED;if(i===jo)return n.RED_INTEGER;if(i===fu)return n.RG;if(i===Ko)return n.RG_INTEGER;if(i===Zo)return n.RGBA_INTEGER;if(i===cs||i===us||i===ds||i===hs)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===cs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===cs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===us)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ds)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ao||i===oo||i===lo||i===co)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ao)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===oo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===co)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===uo||i===ho||i===fo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===uo||i===ho)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===fo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===po||i===mo||i===go||i===_o||i===vo||i===xo||i===yo||i===bo||i===So||i===Mo||i===Eo||i===To||i===wo||i===Ao)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===po)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===go)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_o)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===So)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Eo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===To)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ao)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Co||i===Ro||i===Po)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Co)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ro)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Po)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lo||i===Do||i===Io||i===Uo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Lo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Do)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Io)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const t_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n_=`
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

}`;class i_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ru(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Jn({vertexShader:t_,fragmentShader:n_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new Ut(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r_ extends nr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,g=null;const _=typeof XRWebGLBinding<"u",p=new i_,h={},A=t.getContextAttributes();let S=null,y=null;const P=[],w=[],E=new nt;let L=null;const v=new ln;v.viewport=new mt;const b=new ln;b.viewport=new mt;const C=[v,b],U=new Tf;let O=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ne=P[Q];return ne===void 0&&(ne=new Aa,P[Q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Q){let ne=P[Q];return ne===void 0&&(ne=new Aa,P[Q]=ne),ne.getGripSpace()},this.getHand=function(Q){let ne=P[Q];return ne===void 0&&(ne=new Aa,P[Q]=ne),ne.getHandSpace()};function q(Q){const ne=w.indexOf(Q.inputSource);if(ne===-1)return;const ve=P[ne];ve!==void 0&&(ve.update(Q.inputSource,Q.frame,c||a),ve.dispatchEvent({type:Q.type,data:Q.inputSource}))}function j(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",F);for(let Q=0;Q<P.length;Q++){const ne=w[Q];ne!==null&&(w[Q]=null,P[Q].disconnect(ne))}O=null,z=null,p.reset();for(const Q in h)delete h[Q];e.setRenderTarget(S),m=null,f=null,d=null,r=null,y=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",j),r.addEventListener("inputsourceschange",F),A.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ce=null,Se=null;A.depth&&(Se=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=A.stencil?br:yr,Ce=A.stencil?xr:gi);const Ge={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ge),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new _i(f.textureWidth,f.textureHeight,{format:un,type:Nn,depthTexture:new Cu(f.textureWidth,f.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ve={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new _i(m.framebufferWidth,m.framebufferHeight,{format:un,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function F(Q){for(let ne=0;ne<Q.removed.length;ne++){const ve=Q.removed[ne],Ce=w.indexOf(ve);Ce>=0&&(w[Ce]=null,P[Ce].disconnect(ve))}for(let ne=0;ne<Q.added.length;ne++){const ve=Q.added[ne];let Ce=w.indexOf(ve);if(Ce===-1){for(let Ge=0;Ge<P.length;Ge++)if(Ge>=w.length){w.push(ve),Ce=Ge;break}else if(w[Ge]===null){w[Ge]=ve,Ce=Ge;break}if(Ce===-1)break}const Se=P[Ce];Se&&Se.connect(ve)}}const T=new Y,D=new Y;function $(Q,ne,ve){T.setFromMatrixPosition(ne.matrixWorld),D.setFromMatrixPosition(ve.matrixWorld);const Ce=T.distanceTo(D),Se=ne.projectionMatrix.elements,Ge=ve.projectionMatrix.elements,dt=Se[14]/(Se[10]-1),I=Se[14]/(Se[10]+1),et=(Se[9]+1)/Se[5],Fe=(Se[9]-1)/Se[5],Ue=(Se[8]-1)/Se[0],re=(Ge[8]+1)/Ge[0],xe=dt*Ue,oe=dt*re,be=Ce/(-Ue+re),Re=be*-Ue;if(ne.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Re),Q.translateZ(be),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Se[10]===-1)Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const qe=dt+be,R=I+be,x=xe-Re,G=oe+(Ce-Re),ee=et*I/R*qe,ue=Fe*I/R*qe;Q.projectionMatrix.makePerspective(x,G,ee,ue,qe,R),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function W(Q,ne){ne===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ne.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ne=Q.near,ve=Q.far;p.texture!==null&&(p.depthNear>0&&(ne=p.depthNear),p.depthFar>0&&(ve=p.depthFar)),U.near=b.near=v.near=ne,U.far=b.far=v.far=ve,(O!==U.near||z!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),O=U.near,z=U.far),U.layers.mask=Q.layers.mask|6,v.layers.mask=U.layers.mask&3,b.layers.mask=U.layers.mask&5;const Ce=Q.parent,Se=U.cameras;W(U,Ce);for(let Ge=0;Ge<Se.length;Ge++)W(Se[Ge],Ce);Se.length===2?$(U,v,b):U.projectionMatrix.copy(v.projectionMatrix),ie(Q,U,Ce)};function ie(Q,ne,ve){ve===null?Q.matrix.copy(ne.matrixWorld):(Q.matrix.copy(ve.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ne.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=No*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(U)},this.getCameraTexture=function(Q){return h[Q]};let Te=null;function Be(Q,ne){if(u=ne.getViewerPose(c||a),g=ne,u!==null){const ve=u.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Ce=!1;ve.length!==U.cameras.length&&(U.cameras.length=0,Ce=!0);for(let I=0;I<ve.length;I++){const et=ve[I];let Fe=null;if(m!==null)Fe=m.getViewport(et);else{const re=d.getViewSubImage(f,et);Fe=re.viewport,I===0&&(e.setRenderTargetTextures(y,re.colorTexture,re.depthStencilTexture),e.setRenderTarget(y))}let Ue=C[I];Ue===void 0&&(Ue=new ln,Ue.layers.enable(I),Ue.viewport=new mt,C[I]=Ue),Ue.matrix.fromArray(et.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(et.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),I===0&&(U.matrix.copy(Ue.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ce===!0&&U.cameras.push(Ue)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const I=d.getDepthInformation(ve[0]);I&&I.isValid&&I.texture&&p.init(I,r.renderState)}if(Se&&Se.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let I=0;I<ve.length;I++){const et=ve[I].camera;if(et){let Fe=h[et];Fe||(Fe=new Ru,h[et]=Fe);const Ue=d.getCameraImage(et);Fe.sourceTexture=Ue}}}}for(let ve=0;ve<P.length;ve++){const Ce=w[ve],Se=P[ve];Ce!==null&&Se!==void 0&&Se.update(Ce,ne,c||a)}Te&&Te(Q,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const ze=new Lu;ze.setAnimationLoop(Be),this.setAnimationLoop=function(Q){Te=Q},this.dispose=function(){}}}const ai=new Fn,s_=new bt;function a_(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Su(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,A,S,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),d(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,y)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),_(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,A,S):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===zt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===zt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const A=e.get(h),S=A.envMap,y=A.envMapRotation;S&&(p.envMap.value=S,ai.copy(y),ai.x*=-1,ai.y*=-1,ai.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),p.envMapRotation.value.setFromMatrix4(s_.makeRotationFromEuler(ai)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,A,S){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*A,p.scale.value=S*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,A){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===zt&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const A=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function o_(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,S){const y=S.program;i.uniformBlockBinding(A,y)}function c(A,S){let y=r[A.id];y===void 0&&(g(A),y=u(A),r[A.id]=y,A.addEventListener("dispose",p));const P=S.program;i.updateUBOMapping(A,P);const w=e.render.frame;s[A.id]!==w&&(f(A),s[A.id]=w)}function u(A){const S=d();A.__bindingPointIndex=S;const y=n.createBuffer(),P=A.__size,w=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,P,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,y),y}function d(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const S=r[A.id],y=A.uniforms,P=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let w=0,E=y.length;w<E;w++){const L=Array.isArray(y[w])?y[w]:[y[w]];for(let v=0,b=L.length;v<b;v++){const C=L[v];if(m(C,w,v,P)===!0){const U=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let q=0;q<O.length;q++){const j=O[q],F=_(j);typeof j=="number"||typeof j=="boolean"?(C.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,U+z,C.__data)):j.isMatrix3?(C.__data[0]=j.elements[0],C.__data[1]=j.elements[1],C.__data[2]=j.elements[2],C.__data[3]=0,C.__data[4]=j.elements[3],C.__data[5]=j.elements[4],C.__data[6]=j.elements[5],C.__data[7]=0,C.__data[8]=j.elements[6],C.__data[9]=j.elements[7],C.__data[10]=j.elements[8],C.__data[11]=0):(j.toArray(C.__data,z),z+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(A,S,y,P){const w=A.value,E=S+"_"+y;if(P[E]===void 0)return typeof w=="number"||typeof w=="boolean"?P[E]=w:P[E]=w.clone(),!0;{const L=P[E];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return P[E]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(A){const S=A.uniforms;let y=0;const P=16;for(let E=0,L=S.length;E<L;E++){const v=Array.isArray(S[E])?S[E]:[S[E]];for(let b=0,C=v.length;b<C;b++){const U=v[b],O=Array.isArray(U.value)?U.value:[U.value];for(let z=0,q=O.length;z<q;z++){const j=O[z],F=_(j),T=y%P,D=T%F.boundary,$=T+D;y+=D,$!==0&&P-$<F.storage&&(y+=P-$),U.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=F.storage}}}const w=y%P;return w>0&&(y+=P-w),A.__size=y,A.__cache={},this}function _(A){const S={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(S.boundary=4,S.storage=4):A.isVector2?(S.boundary=8,S.storage=8):A.isVector3||A.isColor?(S.boundary=16,S.storage=12):A.isVector4?(S.boundary=16,S.storage=16):A.isMatrix3?(S.boundary=48,S.storage=48):A.isMatrix4?(S.boundary=64,S.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),S}function p(A){const S=A.target;S.removeEventListener("dispose",p);const y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function h(){for(const A in r)n.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Fu{constructor(e={}){const{canvas:t=Gh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,h=null;const A=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let P=!1;this._outputColorSpace=xt;let w=0,E=0,L=null,v=-1,b=null;const C=new mt,U=new mt;let O=null;const z=new it(0);let q=0,j=t.width,F=t.height,T=1,D=null,$=null;const W=new mt(0,0,j,F),ie=new mt(0,0,j,F);let Te=!1;const Be=new wu;let ze=!1,Q=!1;const ne=new bt,ve=new Y,Ce=new mt,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function dt(){return L===null?T:1}let I=i;function et(M,H){return t.getContext(M,H)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wo}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",ae,!1),I===null){const H="webgl2";if(I=et(H,M),I===null)throw et(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Fe,Ue,re,xe,oe,be,Re,qe,R,x,G,ee,ue,te,Pe,_e,B,de,X,se,ye,pe,fe,Ie;function N(){Fe=new vg(I),Fe.init(),pe=new e_(I,Fe),Ue=new dg(I,Fe,e,pe),re=new J0(I,Fe),Ue.reversedDepthBuffer&&f&&re.buffers.depth.setReversed(!0),xe=new bg(I),oe=new k0,be=new Q0(I,Fe,re,oe,Ue,pe,xe),Re=new fg(y),qe=new _g(y),R=new Af(I),fe=new cg(I,R),x=new xg(I,R,xe,fe),G=new Mg(I,x,R,xe),X=new Sg(I,Ue,be),_e=new hg(oe),ee=new B0(y,Re,qe,Fe,Ue,fe,_e),ue=new a_(y,oe),te=new H0,Pe=new X0(Fe),de=new lg(y,Re,qe,re,G,m,l),B=new K0(y,G,Ue),Ie=new o_(I,xe,Ue,re),se=new ug(I,Fe,xe),ye=new yg(I,Fe,xe),xe.programs=ee.programs,y.capabilities=Ue,y.extensions=Fe,y.properties=oe,y.renderLists=te,y.shadowMap=B,y.state=re,y.info=xe}N();const le=new r_(y,I);this.xr=le,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=Fe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Fe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return T},this.setPixelRatio=function(M){M!==void 0&&(T=M,this.setSize(j,F,!1))},this.getSize=function(M){return M.set(j,F)},this.setSize=function(M,H,K=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,F=H,t.width=Math.floor(M*T),t.height=Math.floor(H*T),K===!0&&(t.style.width=M+"px",t.style.height=H+"px"),this.setViewport(0,0,M,H)},this.getDrawingBufferSize=function(M){return M.set(j*T,F*T).floor()},this.setDrawingBufferSize=function(M,H,K){j=M,F=H,T=K,t.width=Math.floor(M*K),t.height=Math.floor(H*K),this.setViewport(0,0,M,H)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(W)},this.setViewport=function(M,H,K,Z){M.isVector4?W.set(M.x,M.y,M.z,M.w):W.set(M,H,K,Z),re.viewport(C.copy(W).multiplyScalar(T).round())},this.getScissor=function(M){return M.copy(ie)},this.setScissor=function(M,H,K,Z){M.isVector4?ie.set(M.x,M.y,M.z,M.w):ie.set(M,H,K,Z),re.scissor(U.copy(ie).multiplyScalar(T).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(M){re.setScissorTest(Te=M)},this.setOpaqueSort=function(M){D=M},this.setTransparentSort=function(M){$=M},this.getClearColor=function(M){return M.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(M=!0,H=!0,K=!0){let Z=0;if(M){let V=!1;if(L!==null){const ge=L.texture.format;V=ge===Zo||ge===Ko||ge===jo}if(V){const ge=L.texture.type,Ee=ge===Nn||ge===gi||ge===vr||ge===xr||ge===Xo||ge===Yo,Le=de.getClearColor(),Ae=de.getClearAlpha(),He=Le.r,Ve=Le.g,Oe=Le.b;Ee?(g[0]=He,g[1]=Ve,g[2]=Oe,g[3]=Ae,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=He,_[1]=Ve,_[2]=Oe,_[3]=Ae,I.clearBufferiv(I.COLOR,0,_))}else Z|=I.COLOR_BUFFER_BIT}H&&(Z|=I.DEPTH_BUFFER_BIT),K&&(Z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),de.dispose(),te.dispose(),Pe.dispose(),oe.dispose(),Re.dispose(),qe.dispose(),G.dispose(),fe.dispose(),Ie.dispose(),ee.dispose(),le.dispose(),le.removeEventListener("sessionstart",mn),le.removeEventListener("sessionend",rl),Qn.stop()};function me(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const M=xe.autoReset,H=B.enabled,K=B.autoUpdate,Z=B.needsUpdate,V=B.type;N(),xe.autoReset=M,B.enabled=H,B.autoUpdate=K,B.needsUpdate=Z,B.type=V}function ae(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ce(M){const H=M.target;H.removeEventListener("dispose",ce),De(H)}function De(M){$e(M),oe.remove(M)}function $e(M){const H=oe.get(M).programs;H!==void 0&&(H.forEach(function(K){ee.releaseProgram(K)}),M.isShaderMaterial&&ee.releaseShaderCache(M))}this.renderBufferDirect=function(M,H,K,Z,V,ge){H===null&&(H=Se);const Ee=V.isMesh&&V.matrixWorld.determinant()<0,Le=nd(M,H,K,Z,V);re.setMaterial(Z,Ee);let Ae=K.index,He=1;if(Z.wireframe===!0){if(Ae=x.getWireframeAttribute(K),Ae===void 0)return;He=2}const Ve=K.drawRange,Oe=K.attributes.position;let je=Ve.start*He,st=(Ve.start+Ve.count)*He;ge!==null&&(je=Math.max(je,ge.start*He),st=Math.min(st,(ge.start+ge.count)*He)),Ae!==null?(je=Math.max(je,0),st=Math.min(st,Ae.count)):Oe!=null&&(je=Math.max(je,0),st=Math.min(st,Oe.count));const pt=st-je;if(pt<0||pt===1/0)return;fe.setup(V,Z,Le,K,Ae);let ct,ot=se;if(Ae!==null&&(ct=R.get(Ae),ot=ye,ot.setIndex(ct)),V.isMesh)Z.wireframe===!0?(re.setLineWidth(Z.wireframeLinewidth*dt()),ot.setMode(I.LINES)):ot.setMode(I.TRIANGLES);else if(V.isLine){let ke=Z.linewidth;ke===void 0&&(ke=1),re.setLineWidth(ke*dt()),V.isLineSegments?ot.setMode(I.LINES):V.isLineLoop?ot.setMode(I.LINE_LOOP):ot.setMode(I.LINE_STRIP)}else V.isPoints?ot.setMode(I.POINTS):V.isSprite&&ot.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Mr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))ot.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const ke=V._multiDrawStarts,ht=V._multiDrawCounts,Ze=V._multiDrawCount,Gt=Ae?R.get(Ae).bytesPerElement:1,bi=oe.get(Z).currentProgram.getUniforms();for(let $t=0;$t<Ze;$t++)bi.setValue(I,"_gl_DrawID",$t),ot.render(ke[$t]/Gt,ht[$t])}else if(V.isInstancedMesh)ot.renderInstances(je,pt,V.count);else if(K.isInstancedBufferGeometry){const ke=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ht=Math.min(K.instanceCount,ke);ot.renderInstances(je,pt,ht)}else ot.render(je,pt)};function lt(M,H,K){M.transparent===!0&&M.side===Ln&&M.forceSinglePass===!1?(M.side=zt,M.needsUpdate=!0,Dr(M,H,K),M.side=Zn,M.needsUpdate=!0,Dr(M,H,K),M.side=Ln):Dr(M,H,K)}this.compile=function(M,H,K=null){K===null&&(K=M),h=Pe.get(K),h.init(H),S.push(h),K.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(h.pushLight(V),V.castShadow&&h.pushShadow(V))}),M!==K&&M.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(h.pushLight(V),V.castShadow&&h.pushShadow(V))}),h.setupLights();const Z=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ge=V.material;if(ge)if(Array.isArray(ge))for(let Ee=0;Ee<ge.length;Ee++){const Le=ge[Ee];lt(Le,K,V),Z.add(Le)}else lt(ge,K,V),Z.add(ge)}),h=S.pop(),Z},this.compileAsync=function(M,H,K=null){const Z=this.compile(M,H,K);return new Promise(V=>{function ge(){if(Z.forEach(function(Ee){oe.get(Ee).currentProgram.isReady()&&Z.delete(Ee)}),Z.size===0){V(M);return}setTimeout(ge,10)}Fe.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let tt=null;function bn(M){tt&&tt(M)}function mn(){Qn.stop()}function rl(){Qn.start()}const Qn=new Lu;Qn.setAnimationLoop(bn),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(M){tt=M,le.setAnimationLoop(M),M===null?Qn.stop():Qn.start()},le.addEventListener("sessionstart",mn),le.addEventListener("sessionend",rl),this.render=function(M,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(H),H=le.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,H,L),h=Pe.get(M,S.length),h.init(H),S.push(h),ne.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Be.setFromProjectionMatrix(ne,xn,H.reversedDepth),Q=this.localClippingEnabled,ze=_e.init(this.clippingPlanes,Q),p=te.get(M,A.length),p.init(),A.push(p),le.enabled===!0&&le.isPresenting===!0){const ge=y.xr.getDepthSensingMesh();ge!==null&&Ds(ge,H,-1/0,y.sortObjects)}Ds(M,H,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(D,$),Ge=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Ge&&de.addToRenderList(p,M),this.info.render.frame++,ze===!0&&_e.beginShadows();const K=h.state.shadowsArray;B.render(K,M,H),ze===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=p.opaque,V=p.transmissive;if(h.setupLights(),H.isArrayCamera){const ge=H.cameras;if(V.length>0)for(let Ee=0,Le=ge.length;Ee<Le;Ee++){const Ae=ge[Ee];al(Z,V,M,Ae)}Ge&&de.render(M);for(let Ee=0,Le=ge.length;Ee<Le;Ee++){const Ae=ge[Ee];sl(p,M,Ae,Ae.viewport)}}else V.length>0&&al(Z,V,M,H),Ge&&de.render(M),sl(p,M,H);L!==null&&E===0&&(be.updateMultisampleRenderTarget(L),be.updateRenderTargetMipmap(L)),M.isScene===!0&&M.onAfterRender(y,M,H),fe.resetDefaultState(),v=-1,b=null,S.pop(),S.length>0?(h=S[S.length-1],ze===!0&&_e.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,A.pop(),A.length>0?p=A[A.length-1]:p=null};function Ds(M,H,K,Z){if(M.visible===!1)return;if(M.layers.test(H.layers)){if(M.isGroup)K=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(H);else if(M.isLight)h.pushLight(M),M.castShadow&&h.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Be.intersectsSprite(M)){Z&&Ce.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ne);const Ee=G.update(M),Le=M.material;Le.visible&&p.push(M,Ee,Le,K,Ce.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Be.intersectsObject(M))){const Ee=G.update(M),Le=M.material;if(Z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ce.copy(M.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ce.copy(Ee.boundingSphere.center)),Ce.applyMatrix4(M.matrixWorld).applyMatrix4(ne)),Array.isArray(Le)){const Ae=Ee.groups;for(let He=0,Ve=Ae.length;He<Ve;He++){const Oe=Ae[He],je=Le[Oe.materialIndex];je&&je.visible&&p.push(M,Ee,je,K,Ce.z,Oe)}}else Le.visible&&p.push(M,Ee,Le,K,Ce.z,null)}}const ge=M.children;for(let Ee=0,Le=ge.length;Ee<Le;Ee++)Ds(ge[Ee],H,K,Z)}function sl(M,H,K,Z){const V=M.opaque,ge=M.transmissive,Ee=M.transparent;h.setupLightsView(K),ze===!0&&_e.setGlobalState(y.clippingPlanes,K),Z&&re.viewport(C.copy(Z)),V.length>0&&Lr(V,H,K),ge.length>0&&Lr(ge,H,K),Ee.length>0&&Lr(Ee,H,K),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function al(M,H,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[Z.id]===void 0&&(h.state.transmissionRenderTarget[Z.id]=new _i(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Er:Nn,minFilter:hi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ge=h.state.transmissionRenderTarget[Z.id],Ee=Z.viewport||C;ge.setSize(Ee.z*y.transmissionResolutionScale,Ee.w*y.transmissionResolutionScale);const Le=y.getRenderTarget(),Ae=y.getActiveCubeFace(),He=y.getActiveMipmapLevel();y.setRenderTarget(ge),y.getClearColor(z),q=y.getClearAlpha(),q<1&&y.setClearColor(16777215,.5),y.clear(),Ge&&de.render(K);const Ve=y.toneMapping;y.toneMapping=Kn;const Oe=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),h.setupLightsView(Z),ze===!0&&_e.setGlobalState(y.clippingPlanes,Z),Lr(M,K,Z),be.updateMultisampleRenderTarget(ge),be.updateRenderTargetMipmap(ge),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let st=0,pt=H.length;st<pt;st++){const ct=H[st],ot=ct.object,ke=ct.geometry,ht=ct.material,Ze=ct.group;if(ht.side===Ln&&ot.layers.test(Z.layers)){const Gt=ht.side;ht.side=zt,ht.needsUpdate=!0,ol(ot,K,Z,ke,ht,Ze),ht.side=Gt,ht.needsUpdate=!0,je=!0}}je===!0&&(be.updateMultisampleRenderTarget(ge),be.updateRenderTargetMipmap(ge))}y.setRenderTarget(Le,Ae,He),y.setClearColor(z,q),Oe!==void 0&&(Z.viewport=Oe),y.toneMapping=Ve}function Lr(M,H,K){const Z=H.isScene===!0?H.overrideMaterial:null;for(let V=0,ge=M.length;V<ge;V++){const Ee=M[V],Le=Ee.object,Ae=Ee.geometry,He=Ee.group;let Ve=Ee.material;Ve.allowOverride===!0&&Z!==null&&(Ve=Z),Le.layers.test(K.layers)&&ol(Le,H,K,Ae,Ve,He)}}function ol(M,H,K,Z,V,ge){M.onBeforeRender(y,H,K,Z,V,ge),M.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(y,H,K,Z,M,ge),V.transparent===!0&&V.side===Ln&&V.forceSinglePass===!1?(V.side=zt,V.needsUpdate=!0,y.renderBufferDirect(K,H,Z,V,M,ge),V.side=Zn,V.needsUpdate=!0,y.renderBufferDirect(K,H,Z,V,M,ge),V.side=Ln):y.renderBufferDirect(K,H,Z,V,M,ge),M.onAfterRender(y,H,K,Z,V,ge)}function Dr(M,H,K){H.isScene!==!0&&(H=Se);const Z=oe.get(M),V=h.state.lights,ge=h.state.shadowsArray,Ee=V.state.version,Le=ee.getParameters(M,V.state,ge,H,K),Ae=ee.getProgramCacheKey(Le);let He=Z.programs;Z.environment=M.isMeshStandardMaterial?H.environment:null,Z.fog=H.fog,Z.envMap=(M.isMeshStandardMaterial?qe:Re).get(M.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&M.envMap===null?H.environmentRotation:M.envMapRotation,He===void 0&&(M.addEventListener("dispose",ce),He=new Map,Z.programs=He);let Ve=He.get(Ae);if(Ve!==void 0){if(Z.currentProgram===Ve&&Z.lightsStateVersion===Ee)return cl(M,Le),Ve}else Le.uniforms=ee.getUniforms(M),M.onBeforeCompile(Le,y),Ve=ee.acquireProgram(Le,Ae),He.set(Ae,Ve),Z.uniforms=Le.uniforms;const Oe=Z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Oe.clippingPlanes=_e.uniform),cl(M,Le),Z.needsLights=rd(M),Z.lightsStateVersion=Ee,Z.needsLights&&(Oe.ambientLightColor.value=V.state.ambient,Oe.lightProbe.value=V.state.probe,Oe.directionalLights.value=V.state.directional,Oe.directionalLightShadows.value=V.state.directionalShadow,Oe.spotLights.value=V.state.spot,Oe.spotLightShadows.value=V.state.spotShadow,Oe.rectAreaLights.value=V.state.rectArea,Oe.ltc_1.value=V.state.rectAreaLTC1,Oe.ltc_2.value=V.state.rectAreaLTC2,Oe.pointLights.value=V.state.point,Oe.pointLightShadows.value=V.state.pointShadow,Oe.hemisphereLights.value=V.state.hemi,Oe.directionalShadowMap.value=V.state.directionalShadowMap,Oe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Oe.spotShadowMap.value=V.state.spotShadowMap,Oe.spotLightMatrix.value=V.state.spotLightMatrix,Oe.spotLightMap.value=V.state.spotLightMap,Oe.pointShadowMap.value=V.state.pointShadowMap,Oe.pointShadowMatrix.value=V.state.pointShadowMatrix),Z.currentProgram=Ve,Z.uniformsList=null,Ve}function ll(M){if(M.uniformsList===null){const H=M.currentProgram.getUniforms();M.uniformsList=ps.seqWithValue(H.seq,M.uniforms)}return M.uniformsList}function cl(M,H){const K=oe.get(M);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function nd(M,H,K,Z,V){H.isScene!==!0&&(H=Se),be.resetTextureUnits();const ge=H.fog,Ee=Z.isMeshStandardMaterial?H.environment:null,Le=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Qi,Ae=(Z.isMeshStandardMaterial?qe:Re).get(Z.envMap||Ee),He=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ve=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Oe=!!K.morphAttributes.position,je=!!K.morphAttributes.normal,st=!!K.morphAttributes.color;let pt=Kn;Z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(pt=y.toneMapping);const ct=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ot=ct!==void 0?ct.length:0,ke=oe.get(Z),ht=h.state.lights;if(ze===!0&&(Q===!0||M!==b)){const Lt=M===b&&Z.id===v;_e.setState(Z,M,Lt)}let Ze=!1;Z.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ht.state.version||ke.outputColorSpace!==Le||V.isBatchedMesh&&ke.batching===!1||!V.isBatchedMesh&&ke.batching===!0||V.isBatchedMesh&&ke.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&ke.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&ke.instancing===!1||!V.isInstancedMesh&&ke.instancing===!0||V.isSkinnedMesh&&ke.skinning===!1||!V.isSkinnedMesh&&ke.skinning===!0||V.isInstancedMesh&&ke.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ke.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ke.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ke.instancingMorph===!1&&V.morphTexture!==null||ke.envMap!==Ae||Z.fog===!0&&ke.fog!==ge||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==_e.numPlanes||ke.numIntersection!==_e.numIntersection)||ke.vertexAlphas!==He||ke.vertexTangents!==Ve||ke.morphTargets!==Oe||ke.morphNormals!==je||ke.morphColors!==st||ke.toneMapping!==pt||ke.morphTargetsCount!==ot)&&(Ze=!0):(Ze=!0,ke.__version=Z.version);let Gt=ke.currentProgram;Ze===!0&&(Gt=Dr(Z,H,V));let bi=!1,$t=!1,sr=!1;const ft=Gt.getUniforms(),Kt=ke.uniforms;if(re.useProgram(Gt.program)&&(bi=!0,$t=!0,sr=!0),Z.id!==v&&(v=Z.id,$t=!0),bi||b!==M){re.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ft.setValue(I,"projectionMatrix",M.projectionMatrix),ft.setValue(I,"viewMatrix",M.matrixWorldInverse);const Bt=ft.map.cameraPosition;Bt!==void 0&&Bt.setValue(I,ve.setFromMatrixPosition(M.matrixWorld)),Ue.logarithmicDepthBuffer&&ft.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ft.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,$t=!0,sr=!0)}if(V.isSkinnedMesh){ft.setOptional(I,V,"bindMatrix"),ft.setOptional(I,V,"bindMatrixInverse");const Lt=V.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),ft.setValue(I,"boneTexture",Lt.boneTexture,be))}V.isBatchedMesh&&(ft.setOptional(I,V,"batchingTexture"),ft.setValue(I,"batchingTexture",V._matricesTexture,be),ft.setOptional(I,V,"batchingIdTexture"),ft.setValue(I,"batchingIdTexture",V._indirectTexture,be),ft.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&ft.setValue(I,"batchingColorTexture",V._colorsTexture,be));const Zt=K.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&X.update(V,K,Gt),($t||ke.receiveShadow!==V.receiveShadow)&&(ke.receiveShadow=V.receiveShadow,ft.setValue(I,"receiveShadow",V.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Kt.envMap.value=Ae,Kt.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&H.environment!==null&&(Kt.envMapIntensity.value=H.environmentIntensity),$t&&(ft.setValue(I,"toneMappingExposure",y.toneMappingExposure),ke.needsLights&&id(Kt,sr),ge&&Z.fog===!0&&ue.refreshFogUniforms(Kt,ge),ue.refreshMaterialUniforms(Kt,Z,T,F,h.state.transmissionRenderTarget[M.id]),ps.upload(I,ll(ke),Kt,be)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ps.upload(I,ll(ke),Kt,be),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ft.setValue(I,"center",V.center),ft.setValue(I,"modelViewMatrix",V.modelViewMatrix),ft.setValue(I,"normalMatrix",V.normalMatrix),ft.setValue(I,"modelMatrix",V.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Lt=Z.uniformsGroups;for(let Bt=0,Is=Lt.length;Bt<Is;Bt++){const ei=Lt[Bt];Ie.update(ei,Gt),Ie.bind(ei,Gt)}}return Gt}function id(M,H){M.ambientLightColor.needsUpdate=H,M.lightProbe.needsUpdate=H,M.directionalLights.needsUpdate=H,M.directionalLightShadows.needsUpdate=H,M.pointLights.needsUpdate=H,M.pointLightShadows.needsUpdate=H,M.spotLights.needsUpdate=H,M.spotLightShadows.needsUpdate=H,M.rectAreaLights.needsUpdate=H,M.hemisphereLights.needsUpdate=H}function rd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,H,K){const Z=oe.get(M);Z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),oe.get(M.texture).__webglTexture=H,oe.get(M.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:K,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,H){const K=oe.get(M);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0};const sd=I.createFramebuffer();this.setRenderTarget=function(M,H=0,K=0){L=M,w=H,E=K;let Z=!0,V=null,ge=!1,Ee=!1;if(M){const Ae=oe.get(M);if(Ae.__useDefaultFramebuffer!==void 0)re.bindFramebuffer(I.FRAMEBUFFER,null),Z=!1;else if(Ae.__webglFramebuffer===void 0)be.setupRenderTarget(M);else if(Ae.__hasExternalTextures)be.rebindTextures(M,oe.get(M.texture).__webglTexture,oe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Oe=M.depthTexture;if(Ae.__boundDepthTexture!==Oe){if(Oe!==null&&oe.has(Oe)&&(M.width!==Oe.image.width||M.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(M)}}const He=M.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ee=!0);const Ve=oe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ve[H])?V=Ve[H][K]:V=Ve[H],ge=!0):M.samples>0&&be.useMultisampledRTT(M)===!1?V=oe.get(M).__webglMultisampledFramebuffer:Array.isArray(Ve)?V=Ve[K]:V=Ve,C.copy(M.viewport),U.copy(M.scissor),O=M.scissorTest}else C.copy(W).multiplyScalar(T).floor(),U.copy(ie).multiplyScalar(T).floor(),O=Te;if(K!==0&&(V=sd),re.bindFramebuffer(I.FRAMEBUFFER,V)&&Z&&re.drawBuffers(M,V),re.viewport(C),re.scissor(U),re.setScissorTest(O),ge){const Ae=oe.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ae.__webglTexture,K)}else if(Ee){const Ae=H;for(let He=0;He<M.textures.length;He++){const Ve=oe.get(M.textures[He]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+He,Ve.__webglTexture,K,Ae)}}else if(M!==null&&K!==0){const Ae=oe.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ae.__webglTexture,K)}v=-1},this.readRenderTargetPixels=function(M,H,K,Z,V,ge,Ee,Le=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=oe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae){re.bindFramebuffer(I.FRAMEBUFFER,Ae);try{const He=M.textures[Le],Ve=He.format,Oe=He.type;if(!Ue.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=M.width-Z&&K>=0&&K<=M.height-V&&(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Le),I.readPixels(H,K,Z,V,pe.convert(Ve),pe.convert(Oe),ge))}finally{const He=L!==null?oe.get(L).__webglFramebuffer:null;re.bindFramebuffer(I.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(M,H,K,Z,V,ge,Ee,Le=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=oe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae)if(H>=0&&H<=M.width-Z&&K>=0&&K<=M.height-V){re.bindFramebuffer(I.FRAMEBUFFER,Ae);const He=M.textures[Le],Ve=He.format,Oe=He.type;if(!Ue.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,je),I.bufferData(I.PIXEL_PACK_BUFFER,ge.byteLength,I.STREAM_READ),M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Le),I.readPixels(H,K,Z,V,pe.convert(Ve),pe.convert(Oe),0);const st=L!==null?oe.get(L).__webglFramebuffer:null;re.bindFramebuffer(I.FRAMEBUFFER,st);const pt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await $h(I,pt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,je),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ge),I.deleteBuffer(je),I.deleteSync(pt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,H=null,K=0){const Z=Math.pow(2,-K),V=Math.floor(M.image.width*Z),ge=Math.floor(M.image.height*Z),Ee=H!==null?H.x:0,Le=H!==null?H.y:0;be.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,K,0,0,Ee,Le,V,ge),re.unbindTexture()};const ad=I.createFramebuffer(),od=I.createFramebuffer();this.copyTextureToTexture=function(M,H,K=null,Z=null,V=0,ge=null){ge===null&&(V!==0?(Mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=V,V=0):ge=0);let Ee,Le,Ae,He,Ve,Oe,je,st,pt;const ct=M.isCompressedTexture?M.mipmaps[ge]:M.image;if(K!==null)Ee=K.max.x-K.min.x,Le=K.max.y-K.min.y,Ae=K.isBox3?K.max.z-K.min.z:1,He=K.min.x,Ve=K.min.y,Oe=K.isBox3?K.min.z:0;else{const Zt=Math.pow(2,-V);Ee=Math.floor(ct.width*Zt),Le=Math.floor(ct.height*Zt),M.isDataArrayTexture?Ae=ct.depth:M.isData3DTexture?Ae=Math.floor(ct.depth*Zt):Ae=1,He=0,Ve=0,Oe=0}Z!==null?(je=Z.x,st=Z.y,pt=Z.z):(je=0,st=0,pt=0);const ot=pe.convert(H.format),ke=pe.convert(H.type);let ht;H.isData3DTexture?(be.setTexture3D(H,0),ht=I.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(be.setTexture2DArray(H,0),ht=I.TEXTURE_2D_ARRAY):(be.setTexture2D(H,0),ht=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment);const Ze=I.getParameter(I.UNPACK_ROW_LENGTH),Gt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),bi=I.getParameter(I.UNPACK_SKIP_PIXELS),$t=I.getParameter(I.UNPACK_SKIP_ROWS),sr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ct.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ct.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,He),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ve),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Oe);const ft=M.isDataArrayTexture||M.isData3DTexture,Kt=H.isDataArrayTexture||H.isData3DTexture;if(M.isDepthTexture){const Zt=oe.get(M),Lt=oe.get(H),Bt=oe.get(Zt.__renderTarget),Is=oe.get(Lt.__renderTarget);re.bindFramebuffer(I.READ_FRAMEBUFFER,Bt.__webglFramebuffer),re.bindFramebuffer(I.DRAW_FRAMEBUFFER,Is.__webglFramebuffer);for(let ei=0;ei<Ae;ei++)ft&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,oe.get(M).__webglTexture,V,Oe+ei),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,oe.get(H).__webglTexture,ge,pt+ei)),I.blitFramebuffer(He,Ve,Ee,Le,je,st,Ee,Le,I.DEPTH_BUFFER_BIT,I.NEAREST);re.bindFramebuffer(I.READ_FRAMEBUFFER,null),re.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||oe.has(M)){const Zt=oe.get(M),Lt=oe.get(H);re.bindFramebuffer(I.READ_FRAMEBUFFER,ad),re.bindFramebuffer(I.DRAW_FRAMEBUFFER,od);for(let Bt=0;Bt<Ae;Bt++)ft?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Zt.__webglTexture,V,Oe+Bt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Zt.__webglTexture,V),Kt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Lt.__webglTexture,ge,pt+Bt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Lt.__webglTexture,ge),V!==0?I.blitFramebuffer(He,Ve,Ee,Le,je,st,Ee,Le,I.COLOR_BUFFER_BIT,I.NEAREST):Kt?I.copyTexSubImage3D(ht,ge,je,st,pt+Bt,He,Ve,Ee,Le):I.copyTexSubImage2D(ht,ge,je,st,He,Ve,Ee,Le);re.bindFramebuffer(I.READ_FRAMEBUFFER,null),re.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Kt?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(ht,ge,je,st,pt,Ee,Le,Ae,ot,ke,ct.data):H.isCompressedArrayTexture?I.compressedTexSubImage3D(ht,ge,je,st,pt,Ee,Le,Ae,ot,ct.data):I.texSubImage3D(ht,ge,je,st,pt,Ee,Le,Ae,ot,ke,ct):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ge,je,st,Ee,Le,ot,ke,ct.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ge,je,st,ct.width,ct.height,ot,ct.data):I.texSubImage2D(I.TEXTURE_2D,ge,je,st,Ee,Le,ot,ke,ct);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ze),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Gt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,bi),I.pixelStorei(I.UNPACK_SKIP_ROWS,$t),I.pixelStorei(I.UNPACK_SKIP_IMAGES,sr),ge===0&&H.generateMipmaps&&I.generateMipmap(ht),re.unbindTexture()},this.initRenderTarget=function(M){oe.get(M).__webglFramebuffer===void 0&&be.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?be.setTextureCube(M,0):M.isData3DTexture?be.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?be.setTexture2DArray(M,0):be.setTexture2D(M,0),re.unbindTexture()},this.resetState=function(){w=0,E=0,L=null,re.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const $i={"girl-standing":{eyes:[[.385,.378],[.565,.362]],seeds:[[.714,.432],[.225,.449]]},"girl-reading":{eyes:[[.474,.388],[.606,.386]],seeds:[]},"girl-cooking":{eyes:[[.43,.384],[.613,.369]],seeds:[[.7612,.4402],[.2712,.4562],[.72768,.44305],[.24554,.45957]]},"girl-tasting":{seeds:[]},"girl-adventure-cooking":{seeds:[[.7855,.4368],[.2615,.4516],[.77542,.43736],[.24246,.45501]],eyes:[[.4307,.3847],[.614,.3696]]},"girl-adventure-reading":{seeds:[[.2393,.3958],[.25781,.39974],[.6748,.44596],[.7168,.84375]],eyes:[[.4819,.3818],[.6138,.3799]]},"girl-adventure-standing":{seeds:[[.7528,.4369],[.2071,.4386],[.76281,.44089],[.1637,.43918]],eyes:[[.4003,.3669],[.5802,.3535]]},"girl-adventure-tasting":{seeds:[]},"girl-forest-cooking":{seeds:[[.743,.436],[.2771,.4496],[.7743,.43825],[.23128,.45134]],eyes:[[.424,.3785],[.6,.3654]]},"girl-forest-reading":{seeds:[[.2471,.416],[.23438,.41732],[.61328,.45117],[.71387,.85221]],eyes:[[.4722,.3857],[.6045,.3848]]},"girl-forest-standing":{seeds:[[.7272,.4415],[.2372,.4529],[.67372,.44032],[.20824,.45174]],eyes:[[.3925,.3775],[.5757,.3621]]},"girl-forest-tasting":{seeds:[[.2831,.5087],[.25026,.50929]]},"girl-school-cooking":{seeds:[[.7553,.43],[.2715,.4368],[.1933,.4795],[.77654,.43109],[.2581,.44077]],eyes:[[.4274,.3693],[.6056,.3554]]},"girl-school-reading":{seeds:[[.2646,.4121],[.29688,.41667],[.64746,.45182]],eyes:[[.4722,.3861],[.6045,.3844]]},"girl-school-standing":{seeds:[[.235,.45],[.22272,.44832]],eyes:[[.3859,.3775],[.5674,.3626]]},"girl-school-tasting":{seeds:[[.7395,.4808],[.2728,.505],[.73436,.48637],[.37949,.5062]]},"girl-star-cooking":{seeds:[[.7341,.4394],[.2816,.4502],[.1944,.4883],[.79106,.44109],[.2324,.45191]],eyes:[[.4212,.3768],[.6,.3628]]},"girl-star-reading":{seeds:[[.67676,.45573],[.33301,.4401]],eyes:[[.5034,.3857],[.635,.384]]},"girl-star-standing":{seeds:[[.2,.42],[.76,.43]],eyes:[[.389,.355],[.573,.342]],source:"assets/2d/outfits/star-standing-hat.png"},"girl-star-tasting":{seeds:[[.2813,.4919],[.7392,.4969],[.37269,.49442],[.74846,.49752]]},"girl-tea-cooking":{seeds:[[.7598,.4339],[.267,.4505],[.79888,.43793],[.2648,.4533]],eyes:[[.4296,.3813],[.6134,.367]]},"girl-tea-reading":{seeds:[[.2568,.416],[.20996,.41927],[.64062,.44401],[.68262,.85026]],eyes:[[.4697,.3831],[.6021,.3809]]},"girl-tea-standing":{seeds:[[.7397,.4469],[.2436,.4509],[.7842,.44286],[.22247,.45029]],eyes:[[.4032,.3786],[.5868,.3631]]},"girl-tea-tasting":{seeds:[[.2841,.4944],[.27282,.49628]]}};function Ou(n,e,t){n.userData.key=e;const i={time:{value:0},moving:{value:0},joy:{value:0},blink:{value:0},showcase:{value:new Y},headScale:{value:e.endsWith("-reading")?1.12:1},eyeA:{value:new nt(...(t==null?void 0:t[0])??[-2,-2])},eyeB:{value:new nt(...(t==null?void 0:t[1])??[-2,-2])}};return n.material.onBeforeCompile=r=>{Object.assign(r.uniforms,i),r.vertexShader=`uniform float time; uniform float moving; uniform float joy; uniform float headScale; uniform vec3 showcase;
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
   `)},n.material.customProgramCacheKey=()=>e,n.userData.uniforms=i,n}function l_(n,e){var y;const t=document.createElement("canvas");t.className="companion-portrait",t.setAttribute("role","img"),t.setAttribute("aria-label","面向你的松团子");const i=new Fu({canvas:t,alpha:!0,antialias:!0});i.setPixelRatio(Math.min(devicePixelRatio,2)),i.setClearColor(0,0);const r=new Tu,s=new el(-.5,.5,.5,-.5,.1,10);s.position.z=2;const a=new Pu().load(n,()=>{if(u)return;const P=a.image.width/a.image.height;l.scale.x=P,s.left=-P/2,s.right=P/2,s.updateProjectionMatrix(),t.style.aspectRatio=String(P),h(),t.dataset.ready="true"});a.colorSpace=xt;const o=e==="acorn"?"girl-standing":`girl-${e}-standing`,l=Ou(new vt(new Ut(1,1,36,52),new Xt({map:a,transparent:!0})),o,(y=$i[o])==null?void 0:y.eyes);r.add(l);const c=matchMedia("(prefers-reduced-motion: reduce)");let u=!1,d=0,f=0,m=performance.now(),g="idle",_=0,p=0;function h(){const P=t.getBoundingClientRect();P.width&&P.height&&i.setSize(P.width,P.height,!1)}const A=new ResizeObserver(h);A.observe(t);function S(P){const w=Math.min((P-m)/1e3,.1);if(m=P,t.isConnected&&!document.hidden){c.matches||(f+=w),_+=(+(g==="replying")-_)*Math.min(1,w*5);const E=c.matches?0:f,L=l.userData.uniforms,v=E%5.7,b=v>4.9&&v<5.13?Math.sin((v-4.9)/.23*Math.PI):0,C=g==="thinking"?.25+Math.sin(E*.7)*.2:g==="listening"?.25:0;p+=(C-p)*Math.min(1,w*4),L.time.value=E,L.blink.value=b,L.joy.value=0,L.moving.value=0,L.showcase.value.set(c.matches?0:_*(.2+.1*Math.sin(E*2)),c.matches?0:p+_*Math.sin(E*2.4)*.22,c.matches?0:Math.sin(E*.8)*.12),i.render(r,s)}d=requestAnimationFrame(S)}return d=requestAnimationFrame(S),{canvas:t,setState(P){g=P,t.dataset.motion=P},dispose(){u=!0,cancelAnimationFrame(d),A.disconnect(),a.dispose(),l.geometry.dispose(),l.material.dispose(),i.dispose()}}}function c_({dialog:n,isOpen:e,getText:t}){let i=null,r="";function s(){i==null||i.remove(),i=null}function a(l=!1,c=null){if(s(),i=document.createElement("div"),i.className="story-creation-menu"+(l?" selection-menu":""),i.setAttribute("role","dialog"),i.setAttribute("aria-label",l?"选中文字操作":"选择创作方式"),i.innerHTML=`${l?"":"<strong>选择创作方式</strong>"}<div class="creation-options">${l?'<button data-create="copy">复制</button>':""}<button data-create="video">视频创作</button><button data-create="comic">漫画创作</button>${l?"":'<button data-create="text">文字发布</button>'}</div><p class="creation-message" role="status" hidden></p>${l?"":'<button class="creation-cancel" data-create="close">取消</button>'}`,i.addEventListener("pointerdown",u=>{i.classList.contains("selection-menu")&&u.preventDefault()}),i.addEventListener("click",async u=>{var g;const d=(g=u.target.closest("[data-create]"))==null?void 0:g.dataset.create;if(!d)return;if(d==="close"){s();return}const f=i.querySelector(".creation-message");if(d==="copy"){try{await navigator.clipboard.writeText(r),f.textContent="已复制"}catch{f.textContent="复制未完成，请使用系统复制菜单。"}f.hidden=!1;return}const m={video:"视频创作",comic:"漫画创作",text:"文字发布"}[d];i.className="story-creation-menu",i.style.left="",i.style.top="",i.setAttribute("aria-label",m),i.innerHTML=`<strong>${m}</strong><label class="creation-text-label">创作文本<textarea rows="5" aria-label="创作文本"></textarea></label><button class="creation-cancel" data-create="close">关闭</button>`,i.querySelector("textarea").value=r}),n.append(i),l&&c){const u=n.getBoundingClientRect(),d=i.offsetWidth,f=i.offsetHeight;i.style.left=Math.max(8,Math.min(u.width-d-8,c.left-u.left+c.width/2-d/2))+"px",i.style.top=Math.max(8,c.top-u.top-f-12)+"px"}}function o(){if(!e()||i&&!i.classList.contains("selection-menu"))return;const l=window.getSelection(),c=n.querySelector(".story-prose");if(!(l!=null&&l.rangeCount)||l.isCollapsed||!(c!=null&&c.contains(l.anchorNode))||!c.contains(l.focusNode)){i!=null&&i.classList.contains("selection-menu")&&s();return}const u=l.toString().trim();u===r&&i||(r=u,r&&a(!0,l.getRangeAt(0).getBoundingClientRect()))}return document.addEventListener("selectionchange",o),n.addEventListener("pointerdown",l=>{i&&!i.contains(l.target)&&s()}),n.addEventListener("keydown",l=>{l.key==="Escape"&&i&&(l.preventDefault(),l.stopPropagation(),s())}),{open(){r=t(),a()},close:s}}function Qt(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function Dn(n){return[...n.memories??[],...n.records.map((e,t)=>({id:e.id??`old-${t}`,title:e.name,summary:e.name,day:e.day,slot:e.slot,createdAt:e.createdAt,kind:"life",activity:u_(e.name)}))].sort((e,t)=>(t.createdAt??"").localeCompare(e.createdAt??""))}function u_(n){return/烘焙/.test(n)?"baking":/课程/.test(n)?"course":/采集/.test(n)?"gather":/小铺/.test(n)?"shop":/薄荷|约定|甜点/.test(n)?"story":"home"}function Bu(n,e=Qt()){return!(n.memoryStamps??[]).includes(e)&&Dn(n).some(t=>t.createdAt&&Qt(new Date(t.createdAt))===e&&(t.kind==="life"||t.event))}function d_(n,e=Qt()){return Bu(n,e)?(n.memoryStamps??(n.memoryStamps=[]),n.memoryStamps.push(e),n.coins+=pd,!0):!1}const Bo=[{id:"demo-baking",kind:"demo",title:"示例支线 · 第一口，留给你",chapters:[{title:"不太完美的那一口",cgId:"baking",paragraphs:["甜点出炉以后，松团子没有立刻端来。她站在窗边，把两只小盘子换了好几次位置。一颗莓果从奶油上滑下来，在盘沿留下浅红色的痕迹。","「这一块本来想留给你。」她用叉子指了指那个缺口，「可是它好像没有我想的那么漂亮。」","你说，先尝尝再决定。她终于坐下来，却还是紧张地看着你的叉子。第一口有一点酸，边缘也比中间更脆。你把这些都告诉了她。","松团子的耳朵先垂了一下，随后又慢慢竖起来。「那下一次，莓果少放一点。边缘……如果你喜欢，我们就留着。」她翻开小本子，没有写下“失败”，只画了两只并排的小盘子。","窗外的光落在剩下的甜点上。她把有缺口的那一块分成两半，推来其中一半。「这一口，我们一起吃吧。」"]}]},{id:"demo-magic",kind:"demo",title:"示例支线 · 第一片会飞的秋叶",chapters:[{title:"让秋叶自己落下来",cgId:"magic",paragraphs:["放学的钟声已经停了，彩窗前却还悬着一片秋叶。松团子举着魔杖，嘴里的咒语越来越轻。叶子绕过灯罩，又绕回来，仿佛没有听见。","「书里只教了怎么让它飞。」她翻过一页，又翻回来，「没有说，它不想下来怎么办。」","你提议先停下咒语。教室安静下来，只有窗缝里的风。她放下魔杖，叶子也不再急着打转，只在半空慢慢摇晃。","松团子试着伸出手，没有去抓。过了一会儿，秋叶落在她掌心里。她看着那片叶子笑了，却没有马上把成功的咒语记进书里。","她写下的是：“先等一等。”旁边留着一块空白。「这还是我们的办法，」她说，「等下次遇见不肯落下来的东西，再来补这一页。」"]}]}],ms=[{id:"preset-bookmark",kind:"demo",title:"体验新篇 · 留给明天的书签",scenes:["松团子发现书签不见了。","你们用一片落叶做了新的书签。","她在叶背写下明天一起读书的约定。"],chapters:[{title:"留给明天的书签",cgId:"bond",paragraphs:["松团子把书翻来翻去，又低头看了看椅子下面。「昨天明明夹在这里的。」她的耳朵随着叹气轻轻落下来。没有书签，她忽然不知道该从哪里继续。","你从窗台捡起一片干净的落叶，放在摊开的书旁。她用指尖沿着叶脉画了一圈。「这个可以。不过，风会不会又把它借走？」","你们给叶柄系了一小段棉线。松团子拿来铅笔，在叶背写下几个很小的字：明天，一起读到这里。","她把叶子夹好，合上书，又忍不住打开确认了一次。这一次她笑了。「原来书签不只是记住读到了哪里，也可以记住下一次想和谁一起读。」"]}]},{id:"preset-bag",kind:"demo",title:"体验新篇 · 纸袋上的小太阳",scenes:["打烊前，一只没有署名的纸袋被留在柜台。","松团子发现纸袋上画着感谢的小太阳。","她把画贴在门边，给明天的客人留一份温暖。"],chapters:[{title:"纸袋上的小太阳",cgId:"shop",paragraphs:["打烊时，柜台上还放着一只折好的纸袋。松团子打开看，里面没有甜点，也没有零钱，只有一张画着小太阳的纸。","「会不会是谁忘记的？」她把纸转过来，背面写着：今天的热可可很好喝。字挤在一起，最后一笔还画成了卷卷的尾巴。","你说，也许这就是特意留给她的。松团子站在灯下看了很久，小心地把纸角抚平。她原本正在想今天有哪里做得不够好，现在那些问题暂时安静了。","她把小太阳贴在门边，旁边添了一句话：明天也有热可可。「这样，第一个进来的人就能看见。」她关好灯，回头望了一眼，又把纸贴正了一点。"]}]}],Fc={id:"main-prologue",kind:"prologue",title:"序章 · 橡果小屋的来信",summary:"秋天精灵松团子住进橡果小屋，开始学习人类的生活，并期待七日后的秋收祭。",chapters:[{title:"秋天，推开了小屋的门",cgId:null,paragraphs:["榛果林的秋天，总比镇上来得早一些。风拂过树梢，松团子竖起橙棕色的松鼠耳朵，听见橡果落在苔藓上的轻响。金色的双麻花辫垂在肩头，蓬松的尾巴替她拢住了清晨的凉意。","森林的季节，她再熟悉不过。可人类为什么要把果实烤成甜点，为什么把喜欢的东西分给别人，又为什么会在一盏灯下等另一个人回来？这些问题，书里似乎没有一句就能说清的答案。","于是，她来到林边的橡果小屋。窗边有一把阅读椅，厨房里有一只安静的烤箱，门外的小路通向魔女学院，也通向小镇和烘焙小铺。她的学院朋友薄荷，也在为即将到来的秋收祭做准备。","再过七天，镇上的人们就会聚在一起庆祝丰收。松团子还不知道自己会带去什么，也没有急着给未来写下答案。她想先读懂一页书，学会一道配方，再认真认识一个人。","你推开门时，她正把一枚秋叶夹进书里。粉色星形的眼睛从书页上抬起来，先是好奇，随后露出一点笑意。她把身旁的位置让出来，像是为一段还没开始的故事留下一页空白。",`「今天，想把时间花在什么美好的事上？」
窗外的风吹动了花帘。你们的日子，就从这里开始。`]}]},_t=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Fa=n=>Bo.includes(n)||[...Bo,...ms].some(e=>e.id===n.demoSourceId),h_=n=>`/acorn-witch-atelier/assets/2d/${n}.webp`;function f_({dialog:n,getState:e,save:t,api:i,getStatus:r,isOpen:s}){let a="main",o=null,l=0,c=0,u=[],d=!1,f=[],m=!1,g="",_="",p=null,h="preset-bookmark";const A=()=>d?f:a==="mine"?[...Bo,...e().characterStories??[]]:[Fc,...(r().canon??[]).map(F=>({id:F.id,kind:"canon",title:F.title,summary:F.summary,chapters:[{title:F.title,paragraphs:F.summary.split(/\n+/).filter(Boolean)}]}))],S=()=>A().find(F=>F.id===o)??A().at(-1),y=c_({dialog:n,isOpen:s,getText:()=>{var F;return((F=S())==null?void 0:F.chapters.map(T=>T.paragraphs.join(`
`)).join(`

`))??""}}),P=()=>Ft.filter(F=>{var T;return(((T=e().collection)==null?void 0:T.cgs)??[]).includes(F.id)}),w=F=>{const T=F.chapters[l];if(F===Fc)return{src:"/acorn-witch-atelier/assets/intro/story-city-landscape.png",name:"秋日小镇",focus:"50%"};const D=(Fa(F)?Ft:P()).find($=>$.id===T.cgId);return D?{src:`/acorn-witch-atelier/assets/rewards/cg-${D.id}.webp`,name:D.name,focus:Qc[D.id]}:null},E=(F,T,D="")=>`<button data-story="${T}" ${D}>${F}</button>`;function L(F){n.className="story-book book-panel",n.innerHTML=`${_r("stories")}${F}`}function v(){if(!s())return;const F=S(),T=r();if(_){q();return}if(L(`${d?"":`<nav class="story-branches" aria-label="故事分支">${E("主线","branch",`data-branch="main" aria-pressed="${a==="main"}"`)}${E("我的支线","branch",`data-branch="mine" aria-pressed="${a==="mine"}"`)}</nav>`}<div class="story-tools">${A().length?`<select id="story-volume" aria-label="选择故事">${A().map(D=>`<option value="${_t(D.id)}" ${D.id===(F==null?void 0:F.id)?"selected":""}>${_t(D.title)}</option>`).join("")}</select>`:`<span>${d?"作者稿箱":"属于你的篇章"}</span>`}${F?E("分享","share"):""}${E(d?"我的故事":"编成新篇",d?"mine":"compose",m?"disabled":"")}${T.creator?E(d?"刷新稿箱":"作者稿箱","inbox",m?"disabled":""):""}</div>${m?'<p class="novel-message" role="status">正在把经历编成故事，请稍等…</p>':""}${g?`<p class="novel-message novel-error" role="alert">${_t(g)}</p>`:""}${F?C(F):b()}`),F){const D=At(e()).community.reads;!d&&!D.includes(F.id)&&(D.push(F.id),t()),O(),z()}}function b(){return`<div class="novel-empty"><span class="novel-kicker">序 · 还未落笔</span><h1>${d?"等待一封来稿":"把日子，写成故事"}</h1><img src="${h_("forest-bg")}" alt="榛果林中的小路"><p>${d?"玩家交来的故事会留在这里。你可以阅读、改写，再收录为主线。":"松团子在小屋、学院和森林里的经历，<br>会成为这本书的章节。"}</p>${d?"":E("用已有经历写第一篇","compose",m?"disabled":"")}</div>`}function C(F){l=Math.min(l,F.chapters.length-1);const T=Fa(F),D=F.kind==="prologue",$=D||F.kind==="canon",W=F.chapters[l],ie=P().find(Te=>Te.id===W.cgId);return w(F),`<nav class="chapter-tabs" aria-label="故事章节" ${F.chapters.length===1?"hidden":""}>${F.chapters.map((Te,Be)=>E(["I","II","III","IV","V","VI"][Be],"chapter",`data-index="${Be}" aria-label="第 ${Be+1} 章：${_t(Te.title)}" aria-current="${Be===l?"page":"false"}"`)).join("")}</nav><article class="novel-page"><header><small>${D?"主线序章":"第 "+(l+1)+" 章"}</small><h1>${_t(W.title)}</h1></header><div class="story-prose" aria-label="小说正文" aria-live="polite"></div></article><footer class="novel-footer"><div class="novel-paging">${E("‹ 上一页","prev")}<span id="story-page-label"></span>${E("下一页 ›","next")}</div>${!T&&!$&&!d&&P().length?`<label class="story-art-picker">章节插图<select id="story-illustration" aria-label="章节插图" ${F.submissionId?"disabled":""}><option value="">纯文字</option>${P().map(Te=>`<option value="${Te.id}" ${(ie==null?void 0:ie.id)===Te.id?"selected":""}>${_t(Te.name)}</option>`).join("")}</select></label>`:""}<div class="novel-actions"><span>${T?"示例支线 · 不计入游玩经历":$?D?"主线 · 故事的起点":"主线 · 已收录剧情":d?_t(F.author)+" · "+(F.canonId?"已收录主线":"待作者整理"):"AI 编写 · "+(F.submissionId?"已交稿":"个人故事")}</span>${$||T?"":d?E(F.canonId?"已收录":"整理为主线","review",F.canonId?"disabled":""):E(F.submissionId?"已交给作者":"交给作者","submit",F.submissionId?"disabled":"")}</div></footer>`}function U(F,T){const D=T===0?w(S()):null;return(D?`<figure class="novel-illustration" style="--cg-focus:${D.focus}"><button data-story="art" aria-label="查看完整插图"><img class="novel-art" src="${D.src}" alt="${_t(D.name)}"></button></figure>`:"")+F.map($=>`<p>${_t($)}</p>`).join("")}function O(){const F=n.querySelector(".story-prose");if(!F)return;const T=S().chapters[l].paragraphs;u=[];let D=[];const $=W=>(n.querySelector(".novel-page header").hidden=u.length>0,F.innerHTML=U(W,u.length),F.scrollHeight<=F.clientHeight);for(const W of T){let ie=Array.from(W);for(;ie.length;){if($([...D,ie.join("")])){D.push(ie.join(""));break}let Te=0,Be=ie.length;for(;Te<Be;){const Q=Math.ceil((Te+Be)/2);$([...D,ie.slice(0,Q).join("")])?Te=Q:Be=Q-1}if(Te===0&&D.length){u.push(D),D=[];continue}const ze=Math.max(1,Te);D.push(ie.splice(0,ze).join("")),u.push(D),D=[]}}D.length&&u.push(D),c=Math.min(c,Math.max(0,u.length-1))}function z(){const F=n.querySelector(".story-prose");F&&(n.querySelector(".novel-page header").hidden=c>0,F.innerHTML=U(u[c]??[],c),n.querySelector("#story-page-label").textContent=`第 ${c+1} 页 / 共 ${u.length} 页`,n.querySelector("[data-story=prev]").disabled=c===0&&l===0,n.querySelector("[data-story=next]").disabled=c===u.length-1&&l===S().chapters.length-1)}function q(){const F=S(),T=_==="compose",D=_==="review";if(_==="demo-source"||_==="demo-outline"){const $=ms.find(ie=>ie.id===h),W=$.scenes;L(`<section class="story-editor"><small>预制剧情体验 · ${_==="demo-source"?"1 / 2 选择素材":"2 / 2 整理成篇"}</small><h1>${_==="demo-source"?"把这一幕，编成故事":"故事已经有了模样"}</h1>${_==="demo-source"?`<label>选择一段剧情<select id="demo-source">${ms.map(ie=>`<option value="${ie.id}" ${ie.id===h?"selected":""}>${_t(ie.chapters[0].title)}</option>`).join("")}</select></label><p>${W.map((ie,Te)=>`${Te+1}. ${ie}`).join("<br>")}</p><p>这些是预制素材，可以先体验从剧情到故事的过程。</p>`:`<h2>${_t($.chapters[0].title)}</h2><p>开头：${W[0]}<br>转折：${W[1]}<br>结尾：${W[2]}</p><p>故事节选</p><p>${_t($.chapters[0].paragraphs[0])}</p><p>配图：${_t(Ft.find(ie=>ie.id===$.chapters[0].cgId).name)}</p>`}<div class="story-editor-actions">${E("返回",_==="demo-source"?"cancel":"demo-back")}${E(_==="demo-source"?"整理成故事":"保存并阅读新篇",_==="demo-source"?"demo-outline":"demo-save")}</div></section>`);return}if(_==="art"){const $=w(F);L(`<figure class="story-full-art"><img src="${$.src}" alt="${_t($.name)}"><figcaption>${_t($.name)}</figcaption></figure><div class="full-art-back">${E("返回阅读","cancel")}${F.kind==="prologue"||Fa(F)?"":E("分享插图","share-art")}</div>`);return}L(`<form class="story-editor" id="story-editor"><small>${T?"让经历成为篇章":D?"作者工作台":"故事来稿"}</small><h1>${T?"编成自己的故事":D?"发展为主线剧情":"交给故事的作者"}</h1><p>${T?"融合最近 40 段经历与已确认主线。生成后另存为新篇，原有故事保留。":D?"以这篇故事为素材，确认你要采用的主线版本。收录后，AI 会读取这段主线。":"发送当前故事的固定版本到本机作者稿箱，由作者阅读、改写与收录。"}</p>${T?`${E("用预制剧情体验","demo-start")}<label>想突出什么？<textarea name="preference" maxlength="300" rows="3" placeholder="例如：松团子第一次学会分享的心情（选填）"></textarea></label>`:D?`<label>主线标题<input name="title" maxlength="60" value="${_t(F.title)}" required></label><label>确认后的主线剧情<textarea name="summary" maxlength="2000" required>${_t(F.summary)}</textarea></label><label>共创作者<input name="author" maxlength="60" value="${_t(F.author)}"></label>`:`<h2>${_t(F.title)}</h2><label>你的署名<input name="author" maxlength="60" placeholder="共创玩家"></label><p>当前仅支持本机收稿，尚未开放跨玩家投稿。</p>`}<p class="editor-error" role="alert">${_t(g)}</p><div class="story-editor-actions">${E("返回阅读","cancel",m?"disabled":"")}<button type="submit" ${m||T&&(!r().chat||!Dn(e()).length)?"disabled":""}>${m?"正在处理…":T?"开始编写":D?"确认收录主线":"确认交稿"}</button></div>${T?`<p class="story-connection-note" ${r().chat?"hidden":""}>豆包尚未连接，已有故事仍可阅读。</p>`:""}${T&&!Dn(e()).length?"<p>先完成一次活动或留下一段对话。</p>":""}</form>`)}async function j(F){var W;if(F.target.id!=="story-editor"||(F.preventDefault(),m))return;const T=Object.fromEntries(new FormData(F.target)),D=_,$=S();m=!0,g="",p=new AbortController,F.target.querySelectorAll("button").forEach(ie=>ie.disabled=!0),F.target.querySelector("button[type=submit]").textContent=D==="compose"?"正在编写…":"正在处理…";try{if(D==="compose"){const ie=e(),Te=Dn(ie).slice(0,40).reverse().map(({id:Q,title:ne,summary:ve,day:Ce,slot:Se,kind:Ge,event:dt})=>({id:Q,title:ne,summary:ve,day:Ce,slot:Se,kind:Ge,event:dt})),Be=await i("/stories/generate",{memories:Te,preference:T.preference,cgIds:((W=ie.collection)==null?void 0:W.cgs)??[],progress:{day:ie.day,slot:ie.slot,story:ie.story,ending:ie.ending}},p.signal);if(!s())return;const ze={...Be.story,id:crypto.randomUUID(),createdAt:new Date().toISOString(),sourceIds:Te.map(Q=>Q.id)};ie.characterStories??(ie.characterStories=[]),ie.characterStories.push(ze),t(),a="mine",o=ze.id,l=0,c=0,d=!1}else if(D==="submit"){const ie=await i("/stories/submit",{storyId:$.id,story:{title:$.title,summary:$.summary,chapters:$.chapters},author:T.author},p.signal);$.submissionId=ie.entry.id,t()}else{const ie=await i("/canon",{...T,submissionId:$.id},p.signal);$.canonId=ie.entry.id,r().canon.push(ie.entry)}_="",m=!1,v()}catch(ie){if(ie.name==="AbortError")return;if(m=!1,g=ie.message,s()){const Te=n.querySelector(".editor-error");Te&&(Te.textContent=g,n.querySelectorAll(".story-editor button").forEach(Be=>Be.disabled=!1),n.querySelector("button[type=submit]").textContent="重试")}}}return n.addEventListener("submit",j),n.addEventListener("change",F=>{if(F.target.id==="demo-source"){h=F.target.value,v();return}if(F.target.id==="story-illustration"&&!d&&S().kind!=="prologue"&&!S().submissionId){const T=F.target.value;S().chapters[l].cgId=P().some(D=>D.id===T)?T:null,t(),c=0,v()}F.target.id==="story-volume"&&(o=F.target.value,l=0,c=0,v())}),n.addEventListener("click",async F=>{var $;const T=F.target.closest("[data-story]");if(!T||T.disabled||m)return;const D=T.dataset.story;if(g="",D==="share"){y.open();return}if(D==="share-art"){T.disabled=!0;try{await qa(P().find(W=>W.id===S().chapters[l].cgId),e())}catch(W){g=W.message,_="",v()}finally{T.disabled=!1}return}if(D==="compose"&&!Dn(e()).length){_="demo-source",v();return}if(D==="demo-start"||D==="demo-back"){_="demo-source",v();return}if(D==="demo-outline"){_="demo-outline",v();return}if(D==="demo-save"){const W=ms.find(Te=>Te.id===h),ie={...structuredClone(W),id:crypto.randomUUID(),demoSourceId:W.id,title:W.title.replace("示例支线","体验新篇"),createdAt:new Date().toISOString()};($=e()).characterStories??($.characterStories=[]),e().characterStories.push(ie),t(),a="mine",o=ie.id,l=0,c=0,d=!1,_="",v();return}if((D==="compose"||D==="submit"||D==="review"||D==="art")&&(_=D,v()),D==="cancel"&&(_="",v()),D==="branch"&&(y.close(),a=T.dataset.branch,o=null,l=0,c=0,v()),D==="chapter"&&(l=Number(T.dataset.index),c=0,v()),D==="prev"&&(c>0?(c--,z()):l>0&&(l--,c=0,v(),c=u.length-1,z())),D==="next"&&(c<u.length-1?(c++,z()):l<S().chapters.length-1&&(l++,c=0,v())),D==="mine"&&(a="mine",d=!1,o=null,l=0,c=0,v()),D==="inbox"){m=!0,p=new AbortController;try{const W=await i("/stories/submissions",void 0,p.signal);if(!s())return;f=W.entries,d=!0,o=null,l=0,c=0}catch(W){W.name!=="AbortError"&&(g=W.message)}finally{m=!1,v()}}}),new ResizeObserver(()=>{s()&&!_&&S()&&(O(),z())}).observe(n),{open(){_="",g="",v()},refresh(){if(!_&&!m)v();else if(_==="compose"&&!m){const F=n.querySelector("button[type=submit]");F&&(F.disabled=!r().chat||!Dn(e()).length);const T=n.querySelector(".story-connection-note");T&&(T.hidden=r().chat)}},leave(){y.close(),p==null||p.abort(),m=!1,_=""}}}const Tt=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Oa="https://sjktg7i6ngh4etmcagt01.apigateway-cn-beijing.volceapi.com/api/companion",as=n=>`/acorn-witch-atelier/assets/2d/${n}.webp`,Oc={home:"窗边闲聊",baking:"一起烘焙",course:"学院生活",gather:"榛果林探索",shop:"小铺营业",story:"朋友来信"},os={home:"home-bg",baking:"kitchen-bg",course:"school-bg",gather:"forest-bg",shop:"kitchen-bg",story:"home-bg"},p_={history:'<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M3 5q7-2 12 2v23q-5-4-12-2zm26 0q-7-2-12 2v23q5-4 12-2z"/><path d="m6 11 6 1m-6 4 6 1m8-5 6-1m-6 6 6-1" fill="none" stroke="#fff2d7" stroke-width="1.5"/></svg>'},Ba=[{hint:"咦，这一页还夹着片叶子。",opening:"咦，这一页还夹着片叶子。叶脉像一张小地图……你觉得它通向哪里？"},{hint:"唔……这段我读了两遍。",opening:"书里说，烤甜点时的心情也会藏进味道里。那今天，你想尝到什么样的味道？"},{hint:"看到这里，忽然有点饿了。",opening:"刚读到一块还冒着热气的小蛋糕，我的肚子就响了……你现在最想吃什么？"},{hint:"要是我们也去走走呢……",opening:"书里的小路一直伸进森林深处。如果我们去散步，你想沿着溪水走，还是找一块树荫坐坐？"}],m_={baking:"闻起来已经有点香了。你想在今天的甜点里藏一点什么小惊喜？",course:"刚才那段我还在琢磨……你觉得魔法最有意思的地方是什么？",gather:"嘘，叶子底下好像有动静。我们先蹲下来看看？",shop:"你说，客人推开门时，最先注意到的是香味，还是柜台里的甜点？",story:"读到这里，我有点想知道你的看法。要是你来回这封信，会先写什么？"};function g_({game:n,getState:e,getContext:t,save:i,refresh:r,pause:s,portrait:a,onActivity:o,onAlbum:l,onCG:c}){const u=document.createElement("dialog");u.id="memory-dialog",n.append(u);const d=document.createElement("button");d.id="character-talk",d.type="button",d.setAttribute("aria-label","和松团子聊天"),d.innerHTML='<span class=character-reaction><span class=character-reaction-text></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v12H10l-5 4v-4H4z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M8 8h8M8 12h5" stroke="currentColor" stroke-width="1.5"/></svg></span>',n.append(d);let f="",m={chat:!1,voice:!1,creator:!1,canon:[]},g=new Date(new Date().getFullYear(),new Date().getMonth(),1),_=Qt(),p="",h=null,A=!1,S=null,y=null,P=null,w="",E=!0,L="",v="",b=0,C=null,U=!1;const O=f_({dialog:u,getState:e,save:i,api:W,getStatus:()=>m,isOpen:()=>u.open&&f==="stories"});let z="",q=null;function j(){q==null||q.dispose(),q=null}function F(){q==null||q.setState(A?z?"replying":"thinking":L?"listening":"idle")}let T=Ba[0],D=0,$=0;async function W(re,xe,oe){const be=await fetch(Oa+re,{method:xe?"POST":"GET",headers:xe?{"Content-Type":"application/json"}:void 0,body:xe?JSON.stringify(xe):void 0,signal:oe}),Re=await be.json();if(!be.ok)throw new Error(Re.error||"连接没有完成，请稍后再试。");return Re}async function ie(){try{m=await W("/status")}catch{m={chat:!1,voice:!1,creator:!1,canon:[]}}u.open&&f==="chat"?Se():u.open&&f==="book"&&!C?Fe():u.open&&f==="stories"&&O.refresh()}const Te=()=>({kitchen:"baking",school:"course",classroom:"course",garden:"gather",shop:"shop",story:"story"})[t().view]??"home";function Be(){const re=t(),xe=re.collectionOpen||u.open||!!n.querySelector("#loading");if(d.hidden=xe||re.view!=="home"||!!re.panel,!d.hidden&&performance.now()>=$){const oe=Dn(e()).find(Re=>Re.title&&Re.summary),be=oe?[...Ba,{hint:"忽然想起「"+oe.title+"」了。",opening:"刚才翻着书，忽然想起「"+oe.title+"」。那段经历里，你最想再聊聊哪一刻？"}]:Ba;T=be[D++%be.length],d.querySelector(".character-reaction-text").textContent=T.hint,$=performance.now()+6500}}function ze(){if(f!=="chat"){Ms(u,n);return}const re=n.getBoundingClientRect();u.style.setProperty("--book-left",`${re.left}px`),u.style.setProperty("--book-top",`${re.top}px`),u.style.setProperty("--book-width",`${re.width}px`),u.style.setProperty("--book-height",`${re.height}px`)}function Q(){ze(),u.open||(b=performance.now(),s(!0),ze(),u.showModal()),Be()}function ne(){y==null||y.abort(),P==null||P.pause(),P=null,w&&URL.revokeObjectURL(w),w="",u.classList.remove("speaking")}function ve(){u.open&&(j(),O.leave(),S==null||S.abort(),ne(),A=!1,u.close(),f="",s(!1,performance.now()-b),Be())}u.addEventListener("cancel",re=>{re.preventDefault(),ve()}),window.addEventListener("resize",()=>{u.open&&ze()});function Ce(re){f="chat",U=!1,v="",L="";const xe=t(),oe=e();h=re?structuredClone(re):{id:crypto.randomUUID(),title:Oc[Te()],summary:"",activity:Te(),day:oe.day,slot:oe.slot,kind:"branch",messages:[],createdAt:new Date().toISOString(),outfit:oe.outfit},re&&(re.kind==="canon"||Qt(new Date(re.createdAt))!==Qt())&&(h.id=crypto.randomUUID(),h.kind="branch",h.createdAt=new Date().toISOString(),h.parentId=re.id,delete h.canonId),h.activity=Te(),re||(h.messages=[{role:"assistant",content:h.activity==="home"?T.opening:m_[h.activity]}]),h.currentContext={...xe,activity:Te()},Q(),Se(),ie()}d.onclick=()=>Ce();function Se(){var R;const re=(R=u.querySelector(".stream-text-reveal"))==null?void 0:R.parentElement;tu(re),u.className="companion-chat",u.style.setProperty("--chat-background",`url("${as(os[h.activity]??"home-bg")}")`);const xe=h.messages.filter(x=>x.role==="assistant").at(-1),oe=U?h.messages:A&&z?[{role:"assistant",content:z}]:xe?[xe]:[];u.innerHTML=`<button class="book-close" data-co="close" aria-label="结束对话">×</button><div class="chat-heading"><span>${Tt(Oc[h.activity])}</span></div><aside class="chat-tools"><button data-co="history" aria-pressed="${U}">${p_.history}${U?"收起":"记录"}</button></aside><span class="portrait-slot"></span><section class="chat-paper ${U?"history-open":""}" aria-label="角色对话"><div class="chat-scroll" aria-live="polite">${oe.length?oe.map(x=>`<div class="chat-line ${x.role}"><small>${x.role==="user"?"你":"松团子"}</small>${x.narration?`<p class="narration">${Tt(x.narration)}</p>`:""}<p>${Tt(x.content)}</p></div>`).join(""):'<div class="chat-line assistant"><small>松团子</small><p class="chat-invitation">${escape(reaction.opening)}</p></div>'}${A?'<p class="chat-status">松团子正在回应…</p>':""}</div><div class="voice-controls" ${m.voice?"":"hidden"}><button data-co="voice">${E?"♫ 配音开":"♫ 配音关"}</button>${xe&&m.voice?'<button data-co="replay">重听</button>':""}</div>${m.chat?"":'<p class="connection-note">豆包暂未连接，你可以先写下想法。</p>'}${v?`<p class="chat-error" role="alert">${Tt(v)}</p>`:""}<form id="chat-form"><label class="visually-hidden" for="chat-input">我想说的话或行动</label><textarea id="chat-input" maxlength="800" rows="1" placeholder="说说你的想法…">${Tt(L)}</textarea><button type="submit" aria-label="发送" ${A||!m.chat?"disabled":""}>${A?"…":"发送"}</button></form><div class="chat-footer"><button data-co="close">结束对话</button></div></section>`,q??(q=l_(a(),e().outfit)),u.querySelector(".portrait-slot").replaceWith(q.canvas),F();const be=u.querySelector(".chat-line.assistant p:not(.narration)");!U&&re&&be&&re.textContent===be.textContent&&be.replaceWith(re);const Re=u.querySelector("#chat-input");Re.style.height="auto",Re.style.height=Re.scrollHeight+"px";const qe=u.querySelector(".chat-scroll");qe.scrollTop=qe.scrollHeight}async function Ge(re){if(ne(),!(!E||!m.voice)){y=new AbortController;try{const xe=await fetch(Oa+"/voice",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:re}),signal:y.signal});if(!xe.ok)throw new Error("这次配音未能播放，可以稍后重听。");w=URL.createObjectURL(await xe.blob()),P=new Audio(w),P.volume=.8,P.onended=()=>u.classList.remove("speaking"),await P.play(),u.classList.add("speaking")}catch(xe){xe.name!=="AbortError"&&u.open&&(v="配音未播放，文字已保留；可以点击重听。",Se())}}}async function dt(){var oe,be;if(A||!m.chat||!L.trim())return;const re=L.trim(),xe=h.id;A=!0,z="",v="",ne(),S=new AbortController,Se();try{const Re=e(),qe=await nu(await fetch(Oa+"/chat",{method:"POST",headers:{"Content-Type":"application/json"},signal:S.signal,body:JSON.stringify({stream:!0,messages:[...h.messages.slice(-30).map(({role:G,content:ee})=>({role:G,content:ee})),{role:"user",content:re}],context:{...h.currentContext,day:Re.day,slot:Re.slot,mood:Re.mood,energy:Re.energy,outfit:Re.outfit,inventory:Re.inventory,memories:(Re.memories??[]).slice(-12).map(({title:G,summary:ee,event:ue})=>({title:G,summary:ee,event:ue}))}})}),G=>{var ue;if(!u.open||f!=="chat"||h.id!==xe||S.signal.aborted)return;const ee=!z;if(z=G,ee&&(Se(),U||(ue=u.querySelector(".chat-line.assistant p"))==null||ue.replaceChildren()),!U){const te=u.querySelector(".chat-line.assistant p");te&&eu(te,G)}});if(!u.open||f!=="chat"||h.id!==xe)return;h.messages.push({role:"user",content:re},{role:"assistant",content:qe.dialogue,narration:qe.narration}),h.summary=((oe=qe.event)==null?void 0:oe.summary)||h.summary||qe.dialogue,h.title=((be=qe.event)==null?void 0:be.title)||h.title,qe.event&&(h.event=qe.event),h.updatedAt=new Date().toISOString();const R={...h};delete R.currentContext,Re.memories??(Re.memories=[]);const x=Re.memories.findIndex(G=>G.id===h.id);x<0?Re.memories.push(R):Re.memories[x]=R,$c(Re,"chat:"+Qt()),i(),L="",A=!1,Se(),u.dataset.emotion=qe.emotion,Ge(qe.dialogue)}catch(Re){Re.name!=="AbortError"&&(v=Re.message,z="",A=!1,u.open&&Se())}}function I(){j(),S==null||S.abort(),ne(),A=!1,f="stories",C=null,Q(),O.open(),ie()}function et(){j(),O.leave(),S==null||S.abort(),ne(),A=!1,f="book",g=new Date(new Date().getFullYear(),new Date().getMonth(),1),_=Qt(),p="",C=null,Q(),Fe(),ie()}function Fe(){var te,Pe,_e;u.className="memory-book book-panel";const re=e(),xe=Dn(re),oe=Qt(),be=g.getFullYear(),Re=g.getMonth(),qe=new Date(be,Re+1,0).getDate(),R=(g.getDay()+6)%7,x=xe.filter(B=>!p||`${B.title} ${B.summary} ${JSON.stringify(B.event??{})}`.includes(p)),G=Array.from({length:R},()=>"<span></span>").concat(Array.from({length:qe},(B,de)=>{var pe;const X=Qt(new Date(be,Re,de+1)),se=xe.filter(fe=>fe.createdAt&&Qt(new Date(fe.createdAt))===X),ye=se[0];return`<button class="calendar-day ${X===oe?"today":""} ${X===_?"selected":""} ${ye?"has-memory":""}" data-co="day" data-date="${X}" aria-label="${X}${se.length?`，${se.length}段经历`:""}" ${X===oe?'aria-current="date"':""}>${ye?`<img src="${as(os[ye.activity]??"home-bg")}" alt="">`:""}<span>${de+1}</span>${se.length?`<small>${se.length}段</small>`:""}${(pe=re.memoryStamps)!=null&&pe.includes(X)?"<i>✦</i>":""}</button>`})).join(""),ee=p?x:xe.filter(B=>B.createdAt&&Qt(new Date(B.createdAt))===_),ue=xe.filter(B=>!B.createdAt);u.innerHTML=`${_r("memories")}<div class="book-body"><div class="month-controls"><button data-co="prev" aria-label="上个月">‹</button><h3>${be} 年 ${Re+1} 月</h3><button data-co="next" aria-label="下个月">›</button></div><div class="calendar-week">${["一","二","三","四","五","六","日"].map(B=>`<span>${B}</span>`).join("")}</div><div class="calendar-grid">${G}</div><p class="calendar-legend">◎ 今天　✦ 已盖经历章　按现实日期记录</p><div class="memory-reward"><div><b>已陪伴 ${((te=re.memoryStamps)==null?void 0:te.length)??0} 天</b><small>${(Pe=re.memoryStamps)!=null&&Pe.includes(oe)?"今天的经历章，已经收好。":"完成一次活动或留下一段剧情，即可盖章。"}</small></div><button class="button" data-co="claim" ${Bu(re)?"":"disabled"}>${(_e=re.memoryStamps)!=null&&_e.includes(oe)?"今日已盖章":"盖章 · 领取 5 ◈"}</button></div><label class="memory-search">⌕ <input id="memory-search" value="${Tt(p)}" placeholder="找人物、地点、某段经历" aria-label="搜索回忆"></label><h3 class="day-heading">${p?"找到的回忆":_+" 的经历"}</h3><div class="memory-list">${ee.map(B=>`<button class="memory-card" data-co="detail" data-id="${B.id}"><img src="${as(os[B.activity]??"home-bg")}" alt=""><span><small>${B.kind==="life"?"日常经历":B.kind==="canon"?"已收录主线":"共创支线"} · 游戏第 ${B.day} 天</small><b>${Tt(B.title)}</b><em>${Tt(B.summary.slice(0,70))}</em></span></button>`).join("")||'<p class="empty-memory">这一天的纸页还空着。去过好今天，再回来留下一幅回忆。</p>'}</div>${ue.length?`<details><summary>以前的经历 · 未记录现实日期</summary>${ue.map(B=>`<p>第 ${B.day} 天 · ${Tt(B.title)}</p>`).join("")}</details>`:""}<details><summary>主人设定的主线 · 秋收祭前的七天</summary><p>通过课程、烘焙、森林采集与小铺营业成长，带着亲手制作的甜点参加第七天的秋收祭。</p>${m.canon.map(B=>`<article><b>${Tt(B.title)}</b><p>${Tt(B.summary)}</p><small>共创作者：${Tt(B.author)}</small></article>`).join("")}</details><button class="book-text-button" data-co="album">剧情与 奇遇探索</button><button class="book-text-button" data-co="stats">查看成长数值</button></div>`}function Ue(re){const xe=Dn(e()).find(oe=>oe.id===re);xe&&(C=re,u.className="memory-book book-panel",u.innerHTML=`${_r("memories")}<div class="book-body"><button class="book-text-button" data-co="book">‹ 回到月历</button><img class="memory-cover" src="${as(os[xe.activity]??"home-bg")}" alt="故事发生的场景"><small>${xe.kind==="life"?"日常经历":xe.kind==="canon"?"已收录主线":"共创支线"} · 游戏第 ${xe.day} 天</small><h2>${Tt(xe.title)}</h2><p>${Tt(xe.summary)}</p>${xe.messages?`<button class="button wide" data-co="continue" data-id="${xe.id}">${xe.cg?"重温奇遇":"继续这段对话"}</button><details><summary>回看当时的对话</summary>${xe.messages.map(oe=>`<p><b>${oe.role==="user"?"你":"松团子"}：</b>${Tt(oe.content)}</p>`).join("")}</details>`:""}${m.creator&&xe.kind==="branch"?`<details><summary>本机创作者 · 整理为主线</summary><p>确认后保存到本机主线库。公开共享需接入线上主线服务。</p><label>标题<input id="canon-title" maxlength="60" value="${Tt(xe.title)}"></label><label>确认生效的剧情<textarea id="canon-summary" maxlength="2000" rows="5">${Tt(xe.summary)}</textarea></label><label>共创作者<input id="canon-author" maxlength="60" placeholder="填写署名"></label><button class="button" data-co="canon">确认收录这个版本</button></details>`:""}<p class="chat-error" id="detail-error" role="alert"></p></div>`)}return u.addEventListener("input",re=>{if(re.target.id==="chat-input"&&(L=re.target.value,F(),re.target.style.height="auto",re.target.style.height=re.target.scrollHeight+"px"),re.target.id==="memory-search"){p=re.target.value;const xe=re.target.selectionStart;Fe();const oe=u.querySelector("#memory-search");oe.focus(),oe.setSelectionRange(xe,xe)}}),u.addEventListener("submit",re=>{re.target.id==="chat-form"&&(re.preventDefault(),dt())}),u.addEventListener("click",async re=>{const xe=re.target.closest("[data-co]");if(!xe||xe.disabled)return;const oe=xe.dataset.co;if(oe==="album"&&(ve(),l()),oe==="close"&&ve(),oe==="history"&&(U=!U,Se()),oe==="book"&&(O.leave(),C=null,f="book",Fe()),(oe==="prev"||oe==="next")&&(g=new Date(g.getFullYear(),g.getMonth()+(oe==="next"?1:-1),1),Fe()),oe==="day"&&(_=xe.dataset.date,Fe()),oe==="detail"&&Ue(xe.dataset.id),oe==="claim"&&d_(e())&&(i(),r(),Fe()),oe==="voice"&&(E=!E,E||ne(),Se()),oe==="replay"&&Ge(h.messages.filter(be=>be.role==="assistant").at(-1).content),oe==="continue"){const be=e().memories.find(Re=>Re.id===xe.dataset.id);be!=null&&be.cg?(ve(),c(be.cg)):Ce(be)}if(oe==="stats"&&(ve(),o("stats")),oe==="canon"){xe.disabled=!0;try{const be=await W("/canon",{title:u.querySelector("#canon-title").value,summary:u.querySelector("#canon-summary").value,author:u.querySelector("#canon-author").value}),Re=e().memories.find(qe=>qe.id===C);Re.kind="canon",Re.canonId=be.entry.id,i(),m.canon.push(be.entry),Ue(C)}catch(be){u.querySelector("#detail-error").textContent=be.message,xe.disabled=!1}}}),ie(),{openBook:et,openStories:I,openChat:Ce,updateEntry:Be,get opened(){return u.open},close:ve}}const bs=new Set,gs=new Map;function ka(){const n=document.querySelector("#loading");if(!n||n.dataset.failed)return;let e=n.querySelector(".video-load-status");e||(e=document.createElement("small"),e.className="video-load-status",e.style.cssText="display:block;margin:12px 20px;font-size:12px;line-height:1.6",n.append(e)),e.textContent=[...gs.values()].filter(Boolean).join(" · ");let t=n.querySelector(".video-unlock");t||(t=document.createElement("button"),t.className="video-unlock",t.textContent="点此启用动画",t.style.cssText="margin-top:16px;padding:10px 20px;background:#f4e8cf;color:#365747;border:0;border-radius:6px",t.onclick=()=>{for(const i of bs)i.play().catch(()=>{})},n.append(t)),t.hidden=bs.size===0}async function ku(n,e,t,i){gs.set(n,`${i}：下载中`),ka();let r,s;try{if(r=await fetch(e,{signal:AbortSignal.timeout(9e4)}),!r.ok)throw new Error(`HTTP ${r.status}`);s=await r.blob()}catch(a){throw new Error(`${i}下载未完成，请切换 Wi-Fi / 移动网络后重试。`,{cause:a})}gs.set(n,`${i}：准备画面`),bs.add(n),ka(),n.setAttribute("playsinline",""),n.setAttribute("muted",""),n.setAttribute("aria-hidden","true"),n.style.cssText="position:fixed;width:1px;height:1px;left:0;bottom:0;opacity:.001;pointer-events:none",document.body.append(n),await new Promise((a,o)=>{const l=["loadedmetadata","loadeddata","canplay","seeked"];let c=!1;const u=setTimeout(()=>d(new Error(`${i}未能准备画面，请刷新后点击「点此启用动画」。`)),3e4);function d(g){clearTimeout(u),l.forEach(_=>n.removeEventListener(_,m)),n.removeEventListener("error",f),bs.delete(n),n.pause(),gs.delete(n),ka(),g?o(g):a()}function f(){var g;d(new Error(`${i}无法解码：${((g=n.error)==null?void 0:g.message)||"浏览器不支持此视频"}`))}function m(){if(!c&&n.readyState>=1&&(c=!0,Math.abs(n.currentTime-t)>.01)){n.currentTime=t;return}c&&n.readyState>=2&&!n.seeking&&Math.abs(n.currentTime-t)<.1&&d()}l.forEach(g=>n.addEventListener(g,m)),n.addEventListener("error",f),n.src=URL.createObjectURL(s),n.load()})}function __(){const n=new Set(["berry","acorn","crouch","mushroom"]),e={},t=matchMedia("(prefers-reduced-motion: reduce)");let i="berry",r="berry",s=!1,a=!1,o=!1,l=!1,c=null,u=1,d=performance.now(),f=0;const m=Promise.all(["approach","berry","pick","acorn","crouch","jump","mushroom","harvest"].map(async p=>{const h=document.createElement("video");h.muted=!0,h.playsInline=!0,h.loop=n.has(p),h.playbackRate=p==="berry"?.1:1,h.preload="auto",await ku(h,`/acorn-witch-atelier/assets/2d/gather/${p}.mp4?v=mobile-header-22`,0,"采集"+{approach:"走近",berry:"待机",pick:"摘果",acorn:"摇头",crouch:"蓄力",jump:"跳跃",mushroom:"蘑菇",harvest:"收获"}[p]);const A=new fs(h);A.colorSpace=xt,e[p]={video:h,texture:A},h.onended=()=>{i===p&&(p==="approach"?_("berry"):l=!0)}}));function g(){s&&!a&&!document.hidden&&!t.matches&&!l&&!o&&e[i].video.play().catch(p=>{p.name!=="AbortError"&&console.error(p)})}function _(p){const h=++f;r=p,l=!1,o=!0;const A=e[i],S=e[p];A.video.pause();const y=()=>{h!==f||!s||(c=i!==p?A.texture:null,i=p,u=c?0:1,d=performance.now(),o=!1,g())};S.video.currentTime>0?(S.video.addEventListener("seeked",y,{once:!0}),S.video.currentTime=0):y()}return document.addEventListener("visibilitychange",()=>{var p;document.hidden?(p=e[i])==null||p.video.pause():g()}),{ready:m,play:_,enter(){s=!0,_(t.matches?"berry":"approach")},leave(){s=!1,f++,o=!1;for(const p of Object.values(e))p.video.pause()},setPaused(p){var h;a=p,d=performance.now(),p?(h=e[i])==null||h.video.pause():g()},tick(){const p=performance.now();s&&!a&&!document.hidden&&(u=Math.min(1,u+(p-d)/160)),d=p},get texture(){var p;return(p=e[i])==null?void 0:p.texture},get previousTexture(){return c},get blend(){return 1-u},info(){var p,h;return{action:r,time:((p=e[i])==null?void 0:p.video.currentTime)??0,active:s,seeking:o,complete:l||t.matches,paused:((h=e[i])==null?void 0:h.video.paused)??!0,muted:!0,source:"reference-video",loop:n.has(i)}}}}function za(n,e,t,i){const r=document.createElement("video");r.muted=!0,r.playsInline=!0,r.preload="auto";const s=matchMedia("(prefers-reduced-motion: reduce)");let a=!1,o=t,l=!1,c=!1;const u=ku(r,n,e[t][0],i);function d(){a&&!c&&!l&&!document.hidden&&!s.matches&&r.play().catch(g=>{g.name!=="AbortError"&&console.error("参考动作无法播放",g)})}r.addEventListener("seeked",d);function f(g,_=!1){r.pause(),r.muted=!_,o=g,l=!1,r.currentTime=e[o][0]}function m(){if(!a||c||l||r.seeking||s.matches)return;const[g,_,p]=e[o];r.currentTime>=_-(p?0:.025)&&(p?r.currentTime=g:(r.pause(),l=!0))}return document.addEventListener("visibilitychange",()=>{document.hidden?r.pause():r.seeking||d()}),s.addEventListener("change",()=>{a&&f(o)}),{video:r,ready:u,tick:m,play:f,setPaused(g){c=g,g?r.pause():r.seeking||d()},enter(){a=!0,f(t)},leave(){a=!1,r.pause(),r.muted=!0},info(){return{action:o,time:r.currentTime,active:a,seeking:r.seeking,complete:l||s.matches,paused:r.paused,muted:r.muted,source:"reference-video"}}}}const on=720,Dt=1280,v_=["standing","reading","cooking","tasting"],ls=["home-bg","home-arm-side","kitchen-bg","forest-bg","dressing-bg","school-bg","classroom-frame-v2","classroom-clean-top","feedback-plate",...mi.flatMap(n=>v_.map(e=>n.id==="acorn"?`girl-${e}`:`girl-${n.id}-${e}`)),"tart"],Ha={"girl-standing":[[.385,.378],[.565,.362]],"girl-reading":[[.474,.388],[.606,.386]],"girl-cooking":[[.43,.384],[.613,.369]]};function x_(n,e=()=>{}){const t=new Fu({canvas:n,antialias:!0,alpha:!1,preserveDrawingBuffer:!0});t.setPixelRatio(Math.min(devicePixelRatio,2)),t.setClearColor("#354b36");const i=new Tu,r=new el(-360,360,640,-640,.1,20);r.position.z=10;const s={},a={},o={},l={},c={},u={},d={};let f=null,m=null,g=!1,_=-1e3,p=-1e4,h="",A=!0,S="home",y="idle",P="acorn",w=!1,E=0,L=!1,v,b=0,C=performance.now();const U=za("/acorn-witch-atelier/assets/2d/classroom-motion-v2.mp4",{listen:[4.95,5.2,!0],think:[5.15,6.25,!0],correct:[8.75,10.15,!1],retry:[7.1,8.42,!1],celebrate:[12.35,13.7,!1]},"listen","上课"),O=new fs(U.video);O.colorSpace=xt;const z=za("/acorn-witch-atelier/assets/2d/baking-motion-v2.mp4",{prepare:[4.05,4.15,!1],ingredients:[4.18,6.02,!1],mix:[6.15,7.1,!0],mixed:[6.8,7.1,!1],bake:[8.75,9.85,!0],spell:[9.4,9.85,!0],taste:[10.1,13.72,!1]},"prepare","烘焙"),q=new fs(z.video);q.colorSpace=xt;const j=__(),F=matchMedia("(prefers-reduced-motion: reduce)"),T=new vt(new Ut(on,Dt),new Xt({depthTest:!1}));i.add(T);const D=za("/acorn-witch-atelier/assets/2d/shop-motion.mp4",{welcome:[.05,1.05,!0],child:[1.35,2.65,!0],queue:[4.18,5.85,!0],vip:[9.18,9.85,!0],positive:[7.58,8.35,!1],negative:[6.1,7,!1],summary:[12.85,14.02,!1],closing:[14.3,15.02,!1]},"welcome","小铺"),$=new fs(D.video);$.colorSpace=xt;const W=new vt(new Ut(on,Dt),new Xt({transparent:!0,depthTest:!1,depthWrite:!1}));W.renderOrder=1,W.visible=!1,i.add(W);const ie=[],Te=[];let Be,ze;const Q=new vt(new Ut(on,Dt*(1-.716)),new Xt({depthTest:!1,transparent:!0}));Q.position.y=-Dt*.716/2,Q.renderOrder=3,i.add(Q);const ne=new vt(new Ut(on,Dt),new Xt({transparent:!0,depthTest:!1,depthWrite:!1}));ne.renderOrder=4,i.add(ne);const ve=document.createElement("canvas");ve.width=256,ve.height=128;const Ce=ve.getContext("2d");Ce.scale(1,.5);const Se=Ce.createRadialGradient(128,128,20,128,128,128);Se.addColorStop(0,"#231a12aa"),Se.addColorStop(1,"#231a1200"),Ce.fillStyle=Se,Ce.fillRect(0,0,256,256);const Ge=new vt(new Ut(320,90),new Xt({map:new pr(ve),transparent:!0,depthTest:!1,opacity:.62}));Ge.position.set(-10,-285,0),Ge.renderOrder=1,i.add(Ge);const dt=(B,de=2)=>{const X=new vt(new Ut(1,1,36,52),new Xt({map:B,transparent:!0,depthTest:!1,depthWrite:!1}));return X.renderOrder=de,i.add(X),X};function I(B){var ye;const de=B.split("-").at(-1),X=((ye=$i[B])==null?void 0:ye.eyes)??Ha[`girl-${de}`],se=Ou(dt(s[B]),B,X);return a[B]=se,se}const et=document.createElement("canvas");et.width=et.height=64;const Fe=et.getContext("2d"),Ue=Fe.createRadialGradient(32,32,0,32,32,32);Ue.addColorStop(0,"#fff7d7"),Ue.addColorStop(.15,"#ffe2a0cc"),Ue.addColorStop(1,"#ffe2a000"),Fe.fillStyle=Ue,Fe.fillRect(0,0,64,64);const re=new Bn,xe=new Float32Array(34*3);re.setAttribute("position",new hn(xe,3));const oe=new xf(re,new Au({map:new pr(et),color:"#ffe5b0",size:10,transparent:!0,opacity:.45,depthTest:!1,depthWrite:!1,sizeAttenuation:!1}));oe.renderOrder=5,i.add(oe);function be(B,de,X,se){B.scale.set(se*B.material.map.image.width/B.material.map.image.height,se,1),B.position.set(de-360,640-X-se/2,0)}function Re(){if(!L)return;const B=S==="shop",de=S==="classroom",X=S==="school",se=S==="kitchen",ye=S==="garden"||S==="festival",pe=["wardrobe","portrait"].includes(S),fe=se&&z.info().active,Ie=S==="garden",N=pe&&performance.now()-p<180?h:P;T.material.map=Ie?j.texture:B?$:de?O:fe?q:s[X?"school-bg":pe?"dressing-bg":se?"kitchen-bg":ye?"forest-bg":"home-bg"],T.material.needsUpdate=!0,Q.visible=se&&!fe,oe.visible=!B&&!de&&!fe&&!Ie;for(const he of Te)he.visible=fe;for(const he of ie)he.visible=de;ne.visible=["home","story"].includes(S),Ge.visible=ne.visible||pe,Ge.position.y=640-(pe?1080:925),Ge.scale.set(pe?.7:1,pe?.5:1,1),ne.material.map=s["home-arm-side"],ne.material.needsUpdate=!0,se&&(Q.material.map=s.counter,Q.material.needsUpdate=!0);for(const he of Object.values(a))he.visible=!1;let le="girl-standing";se?le=y==="taste"?"girl-tasting":"girl-cooking":["home","story"].includes(S)&&(le="girl-reading"),N!=="acorn"&&(le=le.replace("girl-",`girl-${N}-`)),m&&!se&&(le=`girl-custom-${m}-${le.endsWith("-reading")?"reading":"standing"}`);const me=a[le];me.visible=!B&&!X&&!de&&!fe&&!Ie,se?be(me,335,195,1110):le.endsWith("-reading")?be(me,345,245,930):pe?be(me,355,S==="wardrobe"?175:152,S==="wardrobe"?730:940):be(me,350,235,ye?880:925),v.visible=S==="home"&&w,oe.material.opacity=y==="bake"?.8:ye?.65:.32}const qe=new Pu;let R=0;const x=Promise.all(["ribbon","moon","leaf"].map(async B=>{const de=new Image;de.src=`/acorn-witch-atelier/assets/rewards/part-${B}.webp`,await de.decode(),u[B]=de})),G=Promise.all([x,j.ready,U.ready,z.ready,D.ready,...ls.map(async B=>{var X;let de=await qe.loadAsync((X=$i[B])!=null&&X.source?`/acorn-witch-atelier/${$i[B].source}`:B==="girl-standing"?"/acorn-witch-atelier/assets/2d/girl-original.webp":B.startsWith("girl-")&&B.split("-").length===3?`/acorn-witch-atelier/assets/2d/outfits/${B.slice(5)}.webp`:`/acorn-witch-atelier/assets/2d/${B}.webp`);if(B.startsWith("girl-")){const se=de;de=Bc(se.image,B),se.dispose()}de.colorSpace=xt,de.anisotropy=Math.min(4,t.capabilities.getMaxAnisotropy()),s[B]=de,e(++R,ls.length)})]).then(()=>{for(const[pe,fe,Ie]of[["classroom-clean-top",[[0,.16]],ie],["classroom-frame-v2",[[.775,1]],ie]])for(const[N,le]of fe){const me=s[pe].clone();me.repeat.set(1,le-N),me.offset.set(0,1-le),me.needsUpdate=!0;const he=new vt(new Ut(on,Dt*(le-N)),new Xt({map:me,depthTest:!1}));he.position.y=640-Dt*(N+le)/2,he.renderOrder=1,pe==="classroom-clean-top"&&(he.material.transparent=!0,he.material.onBeforeCompile=ae=>{ae.fragmentShader=ae.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
 diffuseColor.a *= smoothstep(0.84,0.85,vMapUv.y);`)}),i.add(he),Ie.push(he)}const B=document.createElement("canvas");B.width=D.video.videoWidth,B.height=D.video.videoHeight,B.getContext("2d").drawImage(D.video,0,0);const de=new pr(B);de.colorSpace=xt,de.repeat.set(1,.34),de.offset.set(0,.66),ze=new vt(new Ut(on,Dt*.34),new Xt({map:de,depthTest:!1})),ze.position.y=Dt*.33,ze.renderOrder=1,ze.visible=!1,i.add(ze);const X=s["feedback-plate"].clone();X.repeat.set(.238,.12),X.offset.set(.762,1-.505),X.needsUpdate=!0,Be=new vt(new Ut(on*.238,Dt*.12),new Xt({map:X,depthTest:!1})),Be.position.set(on*(.881-.5),Dt*(.5-.445),0),Be.renderOrder=1,Be.visible=!1,i.add(Be);const se=new vt(new Ut(on,Dt*.04),new Xt({color:"#513a27",depthTest:!1}));se.position.y=-Dt*.48,se.renderOrder=1,i.add(se),Te.push(se);const ye=s["kitchen-bg"].clone();ye.repeat.set(1,1-.716),ye.offset.set(0,0),ye.needsUpdate=!0,s.counter=ye;for(const pe of ls.filter(fe=>fe.startsWith("girl-"))){const fe=document.createElement("canvas");fe.width=s[pe].image.width,fe.height=s[pe].image.height,fe.getContext("2d").drawImage(s[pe].image,0,0),c[pe]=fe,I(pe)}ee();for(const pe of mi){const fe=document.createElement("canvas");fe.width=110,fe.height=210;const Ie=s[pe.id==="acorn"?"girl-standing":`girl-${pe.id}-standing`].image,N=Math.min(110/Ie.width,210/Ie.height);fe.getContext("2d").drawImage(Ie,(110-Ie.width*N)/2,0,Ie.width*N,Ie.height*N),o[pe.id]=fe.toDataURL()}v=dt(s.tart,1),be(v,642,779,110),L=!0,Re(),Pe()});function ee(){var B;for(const[de,X]of Object.entries(c)){const se=s[de].image,ye=se.getContext("2d"),pe=se.width,fe=se.height,Ie=de.split("-").at(-1),N=((B=$i[de])==null?void 0:B.eyes)??Ha["girl-"+Ie]??Ha["girl-standing"];if(ye.clearRect(0,0,pe,fe),ye.drawImage(X,0,0),delete l[de],f){const le=u[f],me=N[1];if(f==="moon")for(const he of N){const ae=le.width/2;ye.drawImage(le,he===N[0]?0:ae,0,ae,le.height,pe*(he[0]+(he===N[0]?-.12:.12))-.025*pe,fe*(he[1]+.075),pe*.05,pe*.05*le.height/ae)}else{const he=pe*(f==="ribbon"?.14:.105);ye.drawImage(le,pe*(me[0]+.055),fe*(me[1]-.13),he,he*le.height/le.width)}}s[de].needsUpdate=!0}}function ue(){const{width:B,height:de}=n.getBoundingClientRect();t.setSize(B,de,!1);const X=Math.max(B/on,de/Dt);n.parentElement.style.setProperty("--scene-width",`${on*X}px`),n.parentElement.style.setProperty("--scene-height",`${Dt*X}px`),n.parentElement.style.setProperty("--scene-visible-width",`${B}px`),r.left=-B/X/2,r.right=B/X/2,r.top=de/X/2,r.bottom=-de/X/2,r.updateProjectionMatrix()}new ResizeObserver(ue).observe(n),ue();function Pe(){j.tick(),W.visible=S==="garden"&&j.blend>0,S==="garden"&&(T.material.map=j.texture,W.material.map=j.previousTexture,W.material.opacity=j.blend),U.tick(),z.tick(),D.tick(),ze.visible=S==="shop"&&["summary","closing"].includes(y),Be.visible=S==="kitchen"&&y==="taste"&&z.info().time>=12.38;const B=F.matches?0:b,de=performance.now()<E?1:0,X=(performance.now()-p)/1e3,se=["wardrobe","portrait"].includes(S),ye=b-_,pe=(he,ae)=>ye>he&&ye<ae?Math.sin((ye-he)/(ae-he)*Math.PI):0,fe=ye%12,Ie=fe>7&&fe<10?Math.sin((fe-7)/3*Math.PI):0,N=se&&!F.matches?pe(.5,2.8)+Ie*.16:0,le=se&&!F.matches?pe(2,4.4)+Ie*.3:0,me=se&&!F.matches?pe(.3,4.6)*Math.sin(ye*1.6)+Math.sin(B*.85)*.15:0;!A&&X>=.18&&(A=!0,Re());for(const he of Object.values(a))if(he.visible){he.material.opacity=!F.matches&&se&&X<.45?1-Math.max(0,1-Math.abs(X-.18)/.18)*.92:1;const ae=he.userData.uniforms;ae.showcase.value.set(N,le,me),ae.time.value=B,ae.moving.value=y==="mix"&&!F.matches?1:0,ae.joy.value=de&&!F.matches?1:0;const ce=B%5.6;ae.blink.value=!F.matches&&ce>4.9&&ce<5.1?Math.sin((ce-4.9)/.2*Math.PI):0,se&&!F.matches&&(ae.blink.value=Math.max(ae.blink.value,pe(3.1,3.45)))}for(let he=0;he<34;he++){const ae=he*167.39%720-360;xe[he*3]=ae+Math.sin(B*.3+he)*14,xe[he*3+1]=(he*97+B*(y==="bake"?45:10))%1280-640,xe[he*3+2]=1}if(se&&X>=0&&X<.65&&!F.matches){for(let he=0;he<34;he++){const ae=he*2.399;xe[he*3]=Math.cos(ae)*(70+he*4+X*190),xe[he*3+1]=80+Math.sin(ae)*(140+he*9+X*120)}oe.material.size=18*(1-X/.8),oe.material.opacity=1-X/.7}else oe.material.size=10,oe.material.opacity=y==="bake"?.8:["garden","festival"].includes(S)?.65:.32;re.attributes.position.needsUpdate=!0,t.render(i,r)}function _e(B){!document.hidden&&!g&&(b+=Math.min((B-C)/1e3,.1),L&&Pe()),C=B,requestAnimationFrame(_e)}return requestAnimationFrame(_e),{ready:G,async prepareCustom(B){d[B.id]||(await Promise.all(["standing","reading"].map(async de=>{const X=new Image;X.src=B[de],await X.decode();const se="girl-custom-"+B.id+"-"+de,ye=Bc(X,se);ye.colorSpace=xt,s[se]=ye;const pe=document.createElement("canvas");pe.width=ye.image.width,pe.height=ye.image.height,pe.getContext("2d").drawImage(ye.image,0,0),c[se]=pe,I(se)})),d[B.id]=B,ee(),Re())},customPreview(B){var de;return((de=s["girl-custom-"+B+"-standing"])==null?void 0:de.image.toDataURL("image/png"))??""},setCustom(B){m=B&&d[B]?B:null,Re()},setAccessory(B){f=B,ee()},setPaused(B){g=B,U.setPaused(B),z.setPaused(B),D.setPaused(B),j.setPaused(B)},getDialoguePortrait(){if(m)return s["girl-custom-"+m+"-standing"].image.toDataURL("image/png");const B=P==="acorn"?"girl-standing":`girl-${P}-standing`;return l[B]??(l[B]=s[B].image.toDataURL("image/png"))},showcase(){_=b},setMode(B){["wardrobe","portrait"].includes(B)&&!["wardrobe","portrait"].includes(S)&&(_=b),j.leave(),z.leave(),S==="shop"&&B!=="shop"&&D.leave(),S==="classroom"&&B!=="classroom"&&U.leave(),S=B,y="idle",S==="garden"&&j.enter(),S==="classroom"&&U.enter(),S==="shop"&&D.enter(),Re()},setAction(B){y=B,S==="garden"&&j.play(B),S==="shop"&&D.play(B),S==="classroom"&&U.play(B),S==="kitchen"&&(z.info().active||z.enter(),z.play(B,B==="taste")),Re()},setOutfit(B){B!==P&&["wardrobe","portrait"].includes(S)&&!F.matches&&(_=b+.45,h=P,p=performance.now(),A=!1),P=B,Re()},setDessert(B){w=B,L&&(v.visible=S==="home"&&w)},happy(){E=performance.now()+2600},capture(){return Pe(),n.toDataURL("image/png")},getOutfitPreview(B,de=!1){if(!de)return o[B]??"";const X=B==="acorn"?"girl-standing":`girl-${B}-standing`;return l[X]??(l[X]=s[X].image.toDataURL("image/png"))},getInfo(){var B;return{renderer:"2d-illustration",mode:S,action:y,outfit:P,accessory:f,customId:m,dessert:w,wardrobeMotion:{active:["wardrobe","portrait"].includes(S)&&!F.matches&&b-_<4.6,elapsed:b-_},gatherMotion:j.info(),shopMotion:D.info(),classroomMotion:U.info(),bakingMotion:z.info(),sprite:(B=Object.values(a).find(de=>de.visible))==null?void 0:B.userData.key,assets:L?ls.length:0,drawCalls:t.info.render.calls}}}}function Bc(n,e){var m;const t=document.createElement("canvas");t.width=n.width,t.height=n.height;const i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(n,0,0);const r=i.getImageData(0,0,t.width,t.height),s=r.data,a=t.width,o=t.height;if(s[3]<20)return new pr(t);const l=new Uint8Array(a*o),c=new Int32Array(a*o);let u=0,d=0;function f(g){if(g<0||g>=a*o||l[g])return;l[g]=1;const _=g*4,p=s[_],h=s[_+1],A=s[_+2];Math.min(p,h,A)<(e==="girl-standing"?242:225)||Math.max(p,h,A)-Math.min(p,h,A)>10||(c[d++]=g)}for(let g=0;g<a;g++)f(g),f((o-1)*a+g);for(let g=0;g<o;g++)f(g*a),f(g*a+a-1);for(const[g,_]of((m=$i[e])==null?void 0:m.seeds)??[])f(Math.floor(_*o)*a+Math.floor(g*a));for(;u<d;){const g=c[u++];s[g*4+3]=0,g%a&&f(g-1),g%a<a-1&&f(g+1),f(g-a),f(g+a)}if(e==="girl-standing")for(let g=0;g<o;g++)for(let _=0;_<a;_++)(_<a*.22&&g<o*.075||_>a*.78&&g>o*.92)&&(s[(g*a+_)*4+3]=0);return i.putImageData(r,0,0),new pr(t)}function y_(n,e,t,i=()=>{}){const r=xd(e),s=document.createElement("dialog");s.className="character-profile book-panel",s.setAttribute("aria-label","松团子的角色属性");const a=()=>{var c,u;const l=Xc(e);s.innerHTML=`${_r("profile")}<div class="book-body profile-body"><section class="profile-identity"><img src="${t}" alt="松团子"><div><small>橡果小屋的主人</small><h2>松团子</h2><div class="character-level"><div class="level-heading"><span>角色等级 <b>Lv.${l.level}</b></span><button class="button" data-profile="call">♡ 打 call</button></div><progress value="${l.percent}" max="100" aria-label="角色等级进度"></progress><p class="level-progress">${l.percent} / 100</p><p id="profile-feedback" role="status"></p></div><p class="profile-tags">好奇 · 细腻 · 爱分享</p><p>来自森林的松鼠女孩，正在学习人类的生活。想把平凡的日子，烤成可以分享的甜蜜。</p></div></section><section class="level-details"><div class="level-sources"><div>作品丰富度 <strong>${l.richness}</strong></div><div>人气值 <strong>${l.popularity}</strong></div></div><details><summary>查看成长来源与作品体验</summary><p>每次发布或收录作品：丰富度 +20；合拍支线：+15；每次游玩：人气 +2；阅读作品：+2；每天打 call：+5。每累计 100 点提升一级。</p><p>预置内容：故事《橡果小屋的来信》、图像《森林合拍》、视频《清晨来到小镇》、二创《我们的第一支森林短片》。</p><div class="work-demo-actions">${[["story","发布故事"],["image","发布图像"],["video","发布视频"],["remix","收录二创"]].map(([d,f])=>`<button class="button subtle" data-publish="${d}" ${At(e).community.works.includes(d)?"disabled":""}>${f} · 体验</button>`).join("")}</div><p>Demo 使用预置作品，仅保存本机体验记录；正式版按作品发布、作者确认收录及跨用户互动统计。</p></details></section><section><h3>认识她</h3><dl><dt>身份</dt><dd>秋天精灵 · 松鼠女孩</dd><dt>日常</dt><dd>读书、魔法课、烘焙与森林采集</dd><dt>心愿</dt><dd>为秋收祭准备一份自己的甜点</dd><dt>穿搭</dt><dd>${((c=mi.find(d=>d.id===e.outfit))==null?void 0:c.name)??"日常穿搭"}</dd></dl></section><section><h3>一点点长大 <small>当前属性</small></h3><div class="profile-stats">${Object.entries(mr).map(([d,f])=>`<div><span>${f}</span><strong>${e.stats[d]}</strong><meter min="0" max="100" value="${e.stats[d]}" aria-label="${f}"></meter></div>`).join("")}</div><p class="profile-bond">好感 ${((u=e.collection)==null?void 0:u.bond)??0} · 体力 ${e.energy} · 心情 ${e.mood}</p></section><section><h3>奇遇探索 <small>已收录 ${r.count} / ${r.total}</small></h3><p class="profile-tip">${r.next?`下一段奇遇：${r.next.name}<br>${r.next.condition}`:"全部奇遇已探索，继续创造自己的故事吧。"}</p><ol>${Ft.map(d=>{var f;return`<li><b>${(f=e.collection)!=null&&f.cgs.includes(d.id)?"✓":"◇"} ${d.name}</b><span>${d.condition}</span></li>`}).join("")}</ol></section></div>`,s.querySelector(".book-close").onclick=()=>s.close()};a(),s.addEventListener("click",l=>{const c=l.target.closest("[data-profile],[data-publish]");if(!c)return;const u=c.dataset.profile==="call"?yd(e):bd(e,c.dataset.publish);i(),a(),s.querySelector("#profile-feedback").textContent=u?c.dataset.profile?"打 call 成功，人气 +5。":"预置作品已收录，丰富度 +20。":"今天已经打过 call，明天再来陪她吧。"}),n.append(s);const o=()=>Ms(s,n);o(),window.addEventListener("resize",o),s.addEventListener("close",()=>{window.removeEventListener("resize",o),s.remove()}),s.showModal()}const ko=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),we=n=>document.querySelector(n);let J=Vc(),Ss="";try{const n=localStorage.getItem(Hc);if(n){const e=JSON.parse(n);e.version===1&&e.stats&&e.inventory&&Array.isArray(e.records)?J=e:Ss="旧存档无法读取，已开始新的故事。"}}catch{Ss="浏览器存储不可用，本次进度暂不保存。"}At(J);const tn=ld(we("#game"));let Ne,Nt,ut,Yt;function rr(n,e){dd(n,e);const t=e.name,i=/课程/.test(t)?"course":/小铺/.test(t)?"shop":/烘焙/.test(t)?"baking":/采集/.test(t)?"gather":/薄荷|约定/.test(t)?"story":null;return i&&md(n,i),n}try{Ne=x_(we("#world"),(n,e)=>{const t=we("#loading p");t&&!we("#loading").dataset.failed&&(t.textContent=n===e?"正在准备上课、烘焙和小铺动画…":`正在布置小屋 · ${n} / ${e}`)}),Ne.ready.then(async()=>{var e;const n=J.collection.customOutfits.find(t=>t.id===J.collection.activeCustom);n&&(await Ne.prepareCustom(n),Ne.setCustom(n.id)),(e=we("#loading"))==null||e.remove(),tn==null||tn.start()}).catch(n=>{we("#loading").dataset.failed="true",we("#loading").innerHTML="<span>✧</span><p></p>",we("#loading p").textContent=n.message||"画面或动画载入失败，请刷新页面重试。",console.error(n)})}catch(n){throw we("#loading").innerHTML="<span>✧</span><p>画面无法启动，请使用支持 WebGL 的浏览器打开。</p>",console.error(n),n}Ne.setOutfit(J.outfit);Ne.setDessert(J.desserts.length>0);let vn=null,Pr="set",jt=structuredClone(J.collection.wear),Xn="home",fn="",k=null,fi=0,tr=J.outfit,kc,Wi=!0,Rn=null,zc=0;const nn=document.createElement("audio");nn.id="bgm";nn.src="/acorn-witch-atelier/audio/barefoot-in-the-park.mp3";nn.preload="none";nn.loop=!0;nn.volume=.3;document.body.append(nn);let Yi=!0,As=!1;function Cs(){Yi&&(As=!0,nn.play().catch(()=>Ot("音乐暂未播放，请在设置中重新开启。")))}document.addEventListener("pointerdown",()=>{!(tn!=null&&tn.active)&&!As&&Cs()});document.addEventListener("keydown",()=>{!(tn!=null&&tn.active)&&!As&&Cs()});document.addEventListener("visibilitychange",()=>{document.hidden?nn.pause():As&&Yi&&Cs()});const nl=["早晨","午后","傍晚"],zu={acorn:"◈",berry:"●",cream:"♧",herb:"❦",honey:"⬡"},Hu={baking:{name:"魔法烘焙",symbol:"♧",cost:18,note:"节奏 · 火候 · 魔法"},course:{name:"去学校上课",symbol:"✧",cost:16,note:"学习一门小小的魔法"},gather:{name:"森林采集",symbol:"❦",cost:12,note:"收集食材与灵感"},story:{name:"朋友来信",symbol:"✉",cost:8,note:"一份甜点，一段故事"},shop:{name:"烘焙小铺",symbol:"♜",cost:10,note:"出售甜点，赚取金币"},rest:{name:"窗边休息",symbol:"☕",cost:0,note:"体力 +32 · 心情 +8"}};function yt(){try{localStorage.setItem(Hc,JSON.stringify(J))}catch{Ot("存储空间不可用，当前进度仅保留在本页。")}}function On(n=600,e=.1){if(!Wi)return;Rn??(Rn=new AudioContext),Rn.resume();const t=Rn.createOscillator(),i=Rn.createGain();t.type="sine",t.frequency.setValueAtTime(n,Rn.currentTime),i.gain.setValueAtTime(.09,Rn.currentTime),i.gain.exponentialRampToValueAtTime(.001,Rn.currentTime+e),t.connect(i).connect(Rn.destination),t.start(),t.stop(Rn.currentTime+e)}function Ot(n){clearTimeout(kc),we("#toast").textContent=n,we("#toast").classList.add("show"),kc=setTimeout(()=>we("#toast").classList.remove("show"),2600)}function Rs(n,e=""){we("#speech").innerHTML=n?`${n}<small>${e}</small>`:""}function Ye(n,e,t="",i="button"){return`<button class="${i}" data-action="${e}" ${t}>${n}</button>`}function Pt(n,e,t,i="✧",r="",s=""){return`<button class="option" data-action="${t}" ${r}><span class="symbol">${i}</span><span><strong>${n}</strong><small>${e}</small></span>${s?`<span class="right">${s}</span>`:""}</button>`}function rt(n,e,t,i=!0,r=""){return`<section class="sheet ${r}" aria-label="${n}"><header><div><h2>${n}</h2><small>${e}</small></div>${i?'<button class="close" data-action="close" aria-label="关闭面板">×</button>':""}</header>${t}</section>`}function Ps(n,e,t){return`<div class="paged-items" data-size="${e}"><div class="${t}">${n.map((i,r)=>`<div class="paged-item" ${r>=e?"hidden":""}>${i}</div>`).join("")}</div>${n.length>e?`<div class="list-pages"><button data-action="list-page" data-id="-1" aria-label="上一页" disabled>‹</button><span data-page="0">1 / ${Math.ceil(n.length/e)}</span><button data-action="list-page" data-id="1" aria-label="下一页">›</button></div>`:""}</div>`}function b_(n,e){const t=n.closest(".paged-items"),i=t.querySelector("[data-page]"),r=[...t.querySelectorAll(".paged-item")],s=Number(t.dataset.size),a=Math.ceil(r.length/s),o=Math.max(0,Math.min(a-1,Number(i.dataset.page)+e));r.forEach((l,c)=>l.hidden=c<o*s||c>=(o+1)*s),i.dataset.page=o,i.textContent=`${o+1} / ${a}`,t.querySelector('[data-id="-1"]').disabled=o===0,t.querySelector('[data-id="1"]').disabled=o===a-1}function Qe(n,e){if(fn=e,we("#panel").dataset.panel=e,we("#panel").innerHTML=n,["cook-result","course-result","gather-result","story-result","shop-result","rest-result","ending"].includes(e)){const t=we("#panel [data-action=home]");if(t){const i=document.createElement("div");i.className="result-actions",t.before(i),i.append(t),i.insertAdjacentHTML("beforeend",Ye("分享录屏到抖音","share-recording","","button subtle"))}}Rs("")}function pn(n,e){if(["wardrobe","portrait"].includes(n)!==["wardrobe","portrait"].includes(Xn)||["school","classroom"].includes(n)&&n!==Xn||Xn==="classroom"&&n==="home"){const i=we("#scene-curtain");i.classList.remove("reveal"),i.offsetWidth,i.classList.add("reveal")}Xn=n,we("#game").dataset.scene=n,Ne.setMode(n);const t={garden:"adventure",school:"star",classroom:"star",kitchen:"acorn",shop:"acorn"}[n];t&&(Ne.setOutfit(t),Ne.setCustom(null),Ne.setAccessory(null)),we("#scene-label").textContent=e,we("#scene-actions").innerHTML="",we("#scene-actions").className=""}function Vt(){const n=Xc(J);we("#hud").innerHTML=`<div class="hud-identity"><button class="profile-entry" data-action="profile" aria-label="角色属性"><svg class="profile-frame" viewBox="0 0 1942 809" aria-hidden="true"><defs><filter id="profile-matte" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 -1 2 -1 0 1"/><feComponentTransfer><feFuncA type="discrete" tableValues="0 1 1 1 1"/></feComponentTransfer><feComposite in2="SourceGraphic" operator="in"/></filter></defs><image href="/acorn-witch-atelier/assets/ui/profile-hud-round-cap.png" width="1942" height="809" filter="url(#profile-matte)"/></svg><span class="profile-avatar"><img src="/acorn-witch-atelier/assets/ui/songtuanzi-avatar.png" alt="松团子头像"></span><svg class="exploration-ring" viewBox="0 0 100 100" role="progressbar" aria-label="角色等级进度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${n.percent}"><circle cx="50" cy="50" r="46" pathLength="100"/><circle cx="50" cy="50" r="46" pathLength="100" stroke-dasharray="${n.percent} 100"/></svg><span class="profile-summary"><b>松团子</b><span class="profile-level">角色等级 <strong>Lv.${n.level}</strong></span></span><small class="profile-link">角色属性 ›</small></button><div class="date"><b>秋之月 · 第 ${J.day} 日</b><small>${J.slot===3?"庆典时刻":`${nl[J.slot]} ${["07:45","13:20","17:30"][J.slot]}`}</small></div></div><div class="resources"><span><em>◈</em>${J.coins}</span><span><em>♡</em>${J.energy} <em>☀</em>${J.mood}</span></div>`,we("#desktop-journal").innerHTML=`<span class="journal-caption">小魔女的成长手记</span><h2>今天，也长大了一点。</h2>${Object.entries(mr).map(([e,t])=>`<div class="statline"><span>${t}</span><b>${J.stats[e]}</b></div><div class="stat-track"><span style="width:${Math.min(100,J.stats[e])}%"></span></div>`).join("")}<div class="goal-note">${J.ending?`✦ ${J.ending.title}<br>秋收祭评分 ${J.ending.score} / 100`:`✦ 距离秋收祭还有 ${7-J.day} 天<br>准备甜点 · 挑选穿搭 · 结识朋友`}</div>`,we("#nav").innerHTML=[["journal","手记","✧"],["bag","背包","♧"],["schedule","日程","▦"],["wardrobe","衣橱","♜"],["festival","庆典","✦"]].map(([e,t,i])=>`<button data-action="${e}" class="${e==="schedule"?"primary":""}" ${k?"disabled":""}><span>${i}</span>${t}</button>`).join("")}function yn(){var e;Yn==null||Yn.dispose(),Yn=null,qc(J,"home"),yt(),J.ending&&J.day<=7&&(J.day=8,J.slot=0,J.energy=Math.min(100,J.energy+25),yt()),k=null,fn="",we("#panel").innerHTML="",pn("home","橡果小屋 · 窗边"),Ne.setOutfit(J.outfit),Ne.setCustom(J.collection.activeCustom),Ne.setAccessory(J.collection.wear.accessory),Ne.setDessert(J.desserts.length>0),Vt(),Rs(J.ending?"我们的故事，还会有下一个季节。":J.energy<25?"先泡杯茶，歇一会儿吧。":J.day===7?"今天是秋收祭。带上我们的得意之作吧！":"今天，想把时间花在什么美好的事上？","点击「日程」开始今天的生活"),we("#scene-actions").innerHTML=Ye("◉ 幸运轮盘","wheel","","scene-button")+Ye("▣ 角色故事","stories","","scene-button")+Ye("✧ 相册","collection","","scene-button collection-entry")+Ye("▷ 重看片头","replay-intro","","scene-button")+Ye("♬ 设置","settings","","scene-button"),(e=we("#recruit-banner"))==null||e.remove(),we("#game").insertAdjacentHTML("beforeend",'<button id="recruit-banner" data-action="recruitment" aria-label="森林乐队成员招募"><img src="/acorn-witch-atelier/assets/ui/recruit-forest-band-q.png" alt="森林乐队 · 乐队成员招募中"></button>');const n=J.collection.cgs.find(t=>!J.collection.seen.includes(t));n&&(ut==null||ut.playCG(n,()=>{}))}function S_(n){const e=J.collection;return Ft.some(t=>t.activity===n&&!e.seen.includes(t.id)&&(e.cgs.includes(t.id)||(!t.stat||J.stats[t.stat]>=t.threshold)&&(!t.visits||(e.visits[n]??0)+1>=t.visits)&&(!t.bond||e.bond>=t.bond)))}function M_(){pn("home","橡果小屋 · 今日日程"),Qe(rt("今日日程","A LITTLE PLAN FOR TODAY",`<div class="schedule-grid">${nl.map((n,e)=>`<div class="time-slot ${e===J.slot?"current":""}">${n}<small>${e<J.slot?"已经度过":e===J.slot?"正在安排":"留给美好的事"}</small></div>`).join("")}</div>${J.day===7&&J.slot===3?`<p>准备已经完成。现在，带上你的甜点前往秋收祭。</p>${Ye("前往秋收祭","festival","","button wide")}`:`<div class="action-grid">${Object.entries(Hu).map(([n,e])=>Pt(`${e.name}${S_(n)?" · 新线索":""}`,e.note,"activity",e.symbol,`data-id="${n}" ${vi(J,e.cost)?"":"disabled"}`,e.cost?`−${e.cost}♡`:"+32♡")).join("")}</div><p class="mini-status">每次 1 时段 · 夜间体力 +25</p>`}`),"schedule")}function E_(n){const e=Hu[n];if(!vi(J,e.cost)){Ot("先安排休息，恢复一些体力吧。");return}n==="baking"&&Vu(),n==="course"&&L_(),n==="gather"&&N_(),n==="story"&&B_(),n==="shop"&&z_(),n==="rest"&&(rr(J,{name:"窗边休息",energy:32,mood:8}),yt(),yn(),Ne.happy(),Qe(rt("热茶和一页好书","",`<p>体力 +32 · 心情 +8</p>${Ye("休息好了，回家吧","home","","button wide")}`,!1),"rest-result"))}function Vu(){pn("kitchen","魔法烘焙坊 · 准备"),Ne.setAction("prepare"),fi=0,Gu()}function Gu(){const n=gr[fi];if(fn==="recipes"&&we("#panel .recipe-note")){we("#panel").querySelectorAll("[data-action=recipe]").forEach(t=>{const i=Number(t.dataset.id)===fi;t.classList.toggle("selected",i),t.setAttribute("aria-pressed",String(i))}),we("#panel .recipe-note").textContent=n.note;const e=we("#panel [data-action=cook]");e.disabled=!hr(J,n),e.textContent=hr(J,n)?"系好围裙，开始吧":"材料不足，先去森林看看";return}Qe(rt("今天，烤一点幸福","CHOOSE A RECIPE",`<div class="options">${gr.map((e,t)=>({r:e,i:t})).filter(({r:e})=>!e.unlock||J.collection.menus.includes(e.id)).map(({r:e,i:t})=>`<button class="option ${fi===t?"selected":""}" data-action="recipe" data-id="${t}" aria-pressed="${fi===t}"><span class="symbol">${["✦","❀","♧","❦","♡"][t]}</span><span><strong>${e.name}</strong></span><span class="right">${e.temp}°</span></button>`).join("")}</div><p class="recipe-note">${n.note}</p>${Ye(hr(J,n)?"系好围裙，开始吧":"材料不足，先去森林看看","cook",hr(J,n)?"":"disabled","button wide")}<div class="mini-status">消耗 18 体力 · 完成后消耗材料 · 一个时段</div>`),"recipes")}function T_(){const n=gr[fi];!vd(J).includes(n)||!hr(J,n)||!vi(J,18)||(Ne.setAction("ingredients"),k={type:"baking",phase:"ingredients",recipe:n,selected:[],hits:[],start:0,heat:0,temperature:n.temp-20,heatTotal:0,heatSamples:0,spell:"star"},Vt(),$u())}function $u(){const n=k.recipe;Qe(rt(n.name,"01 / 04 · INGREDIENTS",`<div class="phase-label">从篮子里挑出配方需要的材料</div><div class="recipe-mini">${Object.entries(n.need).map(([e,t])=>`<button class="ingredient ${k.selected.includes(e)?"selected":""}" data-action="ingredient" data-id="${e}" ${k.selected.includes(e)?"disabled":""}>${zu[e]} ${Vo[e]} ×${t} ${k.selected.includes(e)?"✓":""}</button>`).join("")}</div><p>材料选齐后，开始轻轻搅拌。</p>${Ye("拿起木勺","mix",k.selected.length===Object.keys(n.need).length?"":"disabled","button wide")}`,!1),"ingredients")}function w_(){k.phase="mix",k.start=performance.now(),Ne.setAction("mix"),Qe(rt("让香气，慢慢混合","02 / 04 · STIR IN RHYTHM",`<p>光标进入绿色区域时，点击搅拌。靠近中心会更好。</p><div class="timing"><div class="target"></div><div class="needle" id="mix-needle"></div></div><div class="meter-meta"><span id="mix-feedback">跟着木勺的节奏</span><span id="mix-count">0 / 5</span></div>${Ye("轻轻搅拌 · 空格","tap","","button wide tap-button")}`,!1),"mix")}function Wu(n){return(1-Math.cos((n-k.start)/1e3*Math.PI*1.15))/2}function qu(){const n=performance.now();if(!k||k.phase!=="mix"||n-zc<170)return;zc=n;const e=Math.abs(Wu(n)-.5),t=e<.055?1:e<.13?.8:e<.23?.5:.2;k.hits.push(t),On(t===1?880:t>=.8?660:380,.13),we("#mix-feedback").textContent=t===1?"PERFECT · 刚刚好！":t>=.8?"GOOD · 香气出来了":t>=.5?"不错，再靠近中心一点":"慢慢来，等绿色区域",we("#mix-count").textContent=`${k.hits.length} / 5`,t>=.8&&Ne.happy(),k.hits.length===5&&(k.phase="mixed",Ne.setAction("mixed"),Qe(rt("面糊准备好了","02 / 04 · NICELY MIXED",`<div class="stamp">${Math.round(k.hits.reduce((i,r)=>i+r,0)/5*100)}<small>搅拌表现 / 100</small></div><p>接下来交给火候。${k.recipe.name}适合 ${k.recipe.temp}°C。</p>${Ye("放进烤箱","heat","","button wide")}`,!1),"mixed"))}function A_(){k.phase="heat",Ne.setAction("bake"),k.start=performance.now(),k.lastSample=performance.now(),Qe(rt("守住，刚好的温度","03 / 04 · A LITTLE PATIENCE",`<div class="temperature"><span id="temperature">${k.temperature}</span>°C<small>理想 ${k.recipe.temp}°C</small></div><label class="details" for="heat-slider">滑动调温，让温度保持在目标 ±8°C</label><input id="heat-slider" type="range" min="140" max="220" value="${k.temperature}" step="1" aria-label="烤箱温度"><div class="progress"><span id="heat-progress"></span></div><div class="meter-meta"><span id="heat-feedback">甜点正在慢慢膨胀</span><span id="heat-time">8 秒</span></div>`,!1),"heat")}function C_(){k.phase="spell",Ne.setAction("spell"),Qe(rt("最后，添一点魔法","04 / 04 · A PINCH OF MAGIC",`<p>食谱偏爱的魔法：<b>${{star:"星光",forest:"森林",heal:"治愈"}[k.recipe.spell]}</b>。魔法也会改变这次烘焙带来的成长。</p><div class="options">${[["star","星光","魔法 +3 · 适合星光橡果塔","✦"],["forest","森林","亲和 +3 · 适合莓果云朵派","❦"],["heal","治愈","体力 +8 · 适合蜂蜜布丁","♡"]].map(([n,e,t,i])=>Pt(e,t,"spell",i,`data-id="${n}"`)).join("")}</div>`,!1),"spell")}function R_(n){if(!k||k.phase!=="spell")return;const e=k.recipe,t=k.hits.reduce((o,l)=>o+l,0)/5,i=k.heatSamples?k.heatTotal/k.heatSamples:0,r=ud(J,t,i,n,e),s={id:`${Date.now()}`,recipe:e.id,name:e.name,score:r,grade:Gc(r),spell:n},a={baking:3,...n==="star"?{magic:3}:n==="forest"?{charm:3}:{}};rr(J,{name:`烘焙 · ${e.name} ${s.grade}`,cost:18,mood:4,energy:n==="heal"?8:0,stats:a,ingredients:Object.fromEntries(Object.entries(e.need).map(([o,l])=>[o,-l])),dessert:s}),yt(),k={type:"tasting",dessert:s,mix:t,heat:i},Ne.setAction("taste"),Vt(),Qe("","tasting"),Rs("先尝一口，看看今天的味道。")}function P_(){const{dessert:n,mix:e,heat:t}=k;k={type:"result",dessert:n},On(1046,.4),Qe(rt("有你在，今天也很甜","FRESH FROM THE OVEN",`<div class="stamp">${n.grade}<small>${n.name} · 品质 ${n.score}</small></div><div class="reward-grid"><div><b>${Math.round(e*100)}</b>搅拌表现</div><div><b>${Math.round(t*100)}</b>火候表现</div><div><b>+3</b>烘焙成长</div></div><p>「唔…好好吃！」甜点已放入背包，可以留作参赛、送给朋友，或在小铺出售。</p>${Ye("把这份甜蜜带回家","home","","button wide")}`,!1),"cook-result")}function L_(){pn("school","魔女学院 · 到校"),Qe(rt("今天，想学哪一课？","LESSONS FOR A YOUNG WITCH",`<p>走进教室，完成三道练习 · 学费 12 ◈ · 体力 16 ♡</p><div class="options">${Pt("烘焙基础","辨认材料和温度 · 烘焙成长","course","♧",'data-id="baking"')}${Pt("星光魔法","记住符文顺序 · 魔法成长","course","✦",'data-id="magic"')}${Pt("色彩与设计","观察配色和标签 · 审美成长","course","❀",'data-id="style"')}</div>${J.coins<12?"<p>金币不足。可以先出售一份甜点。</p>":""}`),"courses")}const Xu={baking:[["想让塔皮酥脆，需要哪种原料？",["黄油与面粉","一整杯清水","只有莓果"],0],["星光橡果塔适合的温度是？",["140°C","180°C","220°C"],1],["面糊搅拌完成，接下来应该？",["直接装盘","再加一杯盐","放入预热的烤箱"],2]],magic:[["记住顺序：星 → 月 → 叶。中间是？",["月","叶","星"],0],["星光橡果塔偏爱哪种魔法？",["治愈","森林","星光"],2],["让魔法稳定的方法是？",["越快越好","跟随平稳的节奏","闭着眼随便念"],1]],style:[["「森林来信」的主要颜色是？",["草木绿","霓虹粉","纯黑"],0],["秋收祭的温暖配色是？",["湖蓝与银灰","橡果棕与奶油白","黑色与荧光绿"],1],["想突出金发，围裙可以搭配？",["相同的亮黄","透明色","较深的森林绿"],2]]};function D_(n){if(J.coins<12){Ot("还差一点学费，先去小铺赚些金币吧。");return}pn("classroom",`魔女学院 · ${{baking:"烘焙基础课",magic:"星光魔法课",style:"色彩与设计课"}[n]}`),k={type:"course",subject:n,q:0,correct:0},Vt(),Yu()}function Yu(){Ne.setAction("think");const n=Xu[k.subject][k.q];Qe(rt(`随堂练习 · ${k.q+1} / 3`,"LESSON",`<p class="dialog-text">${n[0]}</p><div class="options">${n[1].map((e,t)=>Pt(e,"","answer",["A","B","C"][t],`data-id="${t}"`)).join("")}</div>`,!1),"question")}function I_(n){if(!k||k.type!=="course"||k.feedback)return;const e=Xu[k.subject][k.q],t=n===e[2];k.feedback=!0,document.querySelectorAll('[data-action="answer"]').forEach(i=>i.disabled=!0),t?(k.correct++,Ne.setAction("correct"),On(780),Ot("答对了！原来是这样。")):(Ne.setAction("retry"),On(330),Ot(`再记一次：${e[1][e[2]]}`))}function U_(){const n=3+k.correct*2,e=k.subject,t=k.correct;rr(J,{name:`课程 · ${mr[e]}`,cost:16,coins:-12,stats:{[e]:n,knowledge:2},mood:t===3?3:1}),yt(),k={type:"result"},Ne.setAction("celebrate"),Vt(),Qe(rt("把新本领，收进口袋","A SMALL STEP FORWARD",`<div class="stamp">${t} / 3<small>今天的课堂练习</small></div><div class="reward-grid"><div><b>+${n}</b>${mr[e]}</div><div><b>+2</b>学识</div><div><b>−12</b>学费</div></div>${Ye("下课，回家吧","home","","button wide")}`,!1),"course-result")}let Yn=null;function N_(){pn("garden","榛果林 · 轻风小径"),k={type:"gather"},fn="gather",we("#panel").innerHTML="",we("#scene-actions").className="gather",Rs(""),Vt(),Yn=Xd({world:Ne,root:we("#scene-actions"),onFinish:F_})}function F_(){const n=J.outfit==="forest"?1:0;rr(J,{name:"榛果林采集",cost:12,mood:4,stats:{charm:1},ingredients:{acorn:4+n,berry:3+n,herb:2+n,honey:2,cream:2}}),yt(),k={type:"result"},Vt(),Qe(rt("满满一篮，带回家","GIFTS FROM THE FOREST",`<p>小路尽头的奶农还送了两瓶奶油。</p><div class="backpack">${Object.entries({acorn:4+n,berry:3+n,herb:2+n,honey:2,cream:2}).map(([e,t])=>`<div class="item-cell">${Vo[e]}<b>+${t}</b></div>`).join("")}</div>${n?"<p>「森林小洋装」穿搭带来额外采集收获。</p>":""}${Ye("带着篮子回家","home","","button wide")}`,!1),"gather-result")}function ju(){k||(["wardrobe","portrait"].includes(Xn)||(vn=J.collection.activeCustom,tr=J.outfit,jt=structuredClone(J.collection.wear),Pr="set"),pn("wardrobe","卧室 · 橡果试衣间"),_s())}function _s(){if(Ne.setCustom(vn),Pr!=="set"){Zu();return}Ne.setAccessory(jt.accessory);const n=mi.find(t=>t.id===tr),e=J.owned.includes(n.id);Ne.setOutfit(n.id),Qe(rt("衣橱","THE LITTLE WARDROBE",`${Ku()}${Ps([...mi.map(t=>`<button class="outfit-card ${tr===t.id?"selected":""}" aria-label="试穿${t.name}" data-action="outfit" data-id="${t.id}"><img src="${Ne.getOutfitPreview(t.id)}" alt="${t.name}全身搭配"><b>${t.short}</b><small>${J.owned.includes(t.id)?"已拥有":t.price+" ◈"}</small></button>`),...J.collection.customOutfits.map(t=>`<button class="outfit-card ${vn===t.id?"selected":""}" data-action="custom-outfit" data-id="${t.id}"><img src="${Ne.customPreview(t.id)||t.standing}" alt="共创穿搭"><b>${ko(t.name)}</b><small>我的设计</small></button>`)],6,"wardrobe-preview")}<div class="recipe-name">${vn?ko(J.collection.customOutfits.find(t=>t.id===vn).name):n.name}</div><div class="row">${Ye(vn||e?"就穿这套":"购买并穿上 · "+n.price+" ◈","wear",!e&&J.coins<n.price?"disabled":"","button")}${Ye("收起 · 看全身","portrait","","button subtle")}</div>`),"wardrobe")}function O_(){if(vn){J.collection.activeCustom=vn,J.collection.wear=structuredClone(jt),yt(),yn();return}if(J.collection.activeCustom=null,Pr!=="set"){if(![...jt.accessory?[jt.accessory]:[]].every(e=>J.collection.parts.includes(e)))return;J.collection.wear=structuredClone(jt),yt(),yn(),Ot("搭配已保存。");return}const n=mi.find(e=>e.id===tr);if(!J.owned.includes(n.id)){if(J.coins<n.price)return;J.coins-=n.price,J.owned.push(n.id)}J.outfit=n.id,J.collection.wear={...jt,mode:"set"},yt(),Ne.happy(),yn(),Ot("今天的你，也很可爱。")}function Ku(){return'<div class="wardrobe-tabs"><button data-action="design" class="under-construction" aria-disabled="true">✎ 设计新衣</button>'+[["set","套装"],["accessory","饰品"]].map(([n,e])=>'<button data-action="wardrobe-tab" data-id="'+n+'" aria-pressed="'+(Pr===n)+'">'+e+"</button>").join("")+"</div>"}function Zu(){Ne.setAccessory(jt.accessory),Ne.setOutfit(tr);const n=!jt.accessory||J.collection.parts.includes(jt.accessory);Qe(rt("饰品","THE LITTLE ACCESSORIES",Ku()+'<div class="wardrobe-preview"><button class="outfit-card" data-action="part" data-id="none"><b>摘下饰品</b></button>'+Go.map(e=>'<button class="outfit-card part-card '+(jt.accessory===e.id?"selected":"")+'" data-action="part" data-id="'+e.id+'" aria-label="试戴'+e.name+'"><img src="/acorn-witch-atelier/assets/rewards/part-'+e.id+'.webp" alt="'+e.name+'"><b>'+e.name+"</b><small>"+(J.collection.parts.includes(e.id)?"已拥有":"轮盘获得")+"</small></button>").join("")+'</div><div class="row">'+Ye(n?"戴好了":"轮盘获得后可保存","wear",n?"":"disabled")+Ye("收起 · 看全身","portrait","","button subtle")+"</div>"),"wardrobe")}function B_(){pn("story","窗边来信 · 朋友的约定");const n=[["薄荷的第一封信","「秋收祭快到了，我总是担心自己的配方不够好。你也会紧张吗？」"],["一份甜蜜的邀请","「昨天闻到你家烤箱的香气，我练习到很晚。下次，可以一起做甜点吗？」"],["庆典之前","「无论评委给几分，我都会站在台下，给你最响亮的掌声。」"]],[e,t]=n[Math.min(2,J.story)];Qe(rt(e,"A LETTER FROM MINT",`<div class="dialog-name">薄荷 · 魔女学院的同学</div><p class="dialog-text">${t}</p><div class="options">${Pt("我们一起练习吧","亲和 +3 · 好感 +2","story-choice","♡",'data-id="talk"')}${Pt("送给她一份亲手做的甜点",J.desserts.length?"消耗背包第一份甜点 · 好感 +5":"背包里还没有甜点","story-choice","♧",`data-id="gift" ${J.desserts.length?"":"disabled"}`)}${Pt("把整理好的笔记分享给她","学识 +3 · 好感 +2","story-choice","✧",'data-id="notes"')}</div><div class="mini-status">消耗 8 体力 · 一个时段</div>`),"story")}function k_(n){vi(J,8)&&(n==="gift"&&!J.desserts.length||(rr(J,{name:n==="gift"?"送给薄荷的甜点":"与薄荷的约定",cost:8,stats:n==="notes"?{knowledge:3}:{charm:3},friendship:n==="gift"?5:2,mood:5}),n==="gift"&&J.desserts.shift(),J.story++,yt(),k={type:"result"},Ne.happy(),Vt(),Qe(rt("有人，记住了你的温柔","FRIENDSHIP GROWS",`<p class="dialog-text">${n==="gift"?"「这是给我的吗？我会把今天，写进最喜欢的那一页日记。」":"「原来不需要独自做好所有事情。有你在，感觉安心多了。」"}</p><div class="reward-grid"><div><b>+${n==="gift"?5:2}</b>薄荷好感</div><div><b>${J.friendship}</b>当前关系</div><div><b>+5</b>心情</div></div>${J.friendship>=6?"<p>约定达成：薄荷会在庆典为你应援，关系将计入比赛评分。</p>":""}${Ye("把信好好收起来","home","","button wide")}`,!1),"story-result")))}const zo={tea:"热茶",cocoa:"热可可",honey:"蜂蜜茶"};function z_(){pn("shop","橡果烘焙坊 · 准备开店"),Qe(rt("今天，也把甜蜜分给小镇","OPEN THE LITTLE BAKERY",J.desserts.length?`<p>选甜点接待 3 组客人，按需配饮品。每轮 10 体力、1 时段。</p>${Ps(J.desserts.map((n,e)=>Pt(n.name,`${n.grade} · ${n.score} 分`,"sell","♧",`data-id="${e}"`)),3,"dessert-options")}`:`<div class="empty">展示柜空空的，先烤一份甜点吧。</div>${Ye("选择食谱","recipes","","button wide")}`),"shop")}function H_(n){const e=J.desserts[n];!e||!vi(J,10)||k||(k={type:"shop",phase:"order",index:n,dessert:e,customer:0,results:[],elapsed:0,selection:null},Vt(),Ju())}function Ju(){k.phase="order",k.elapsed=0,k.selection=null;const n=ji[k.customer];Ne.setAction(n.motion),we("#scene-label").textContent=`今日营业 · 第 ${k.customer+1} / 3 组客人`,we("#scene-actions").className="shop-sale",we("#scene-actions").innerHTML=`<div class="shop-till">◈ ${J.coins}</div>`,Qu()}function Qu(){const n=ji[k.customer];Qe(rt(n.guest,`${k.customer+1} / 3 · ${k.dessert.name}试吃套餐`,`<p>${n.request}</p><div class="shop-patience"><span id="shop-patience-fill" style="width:${100*(1-k.elapsed/vs)}%"></span></div><div class="shop-drinks">${Object.entries(zo).map(([e,t])=>Ye(t,"shop-drink",`data-id="${e}" aria-pressed="${k.selection===e}"`,"button subtle")).join("")}</div>${Ye(k.selection?"递给客人":"先选一杯饮品","shop-serve",k.selection?"":"disabled","button wide")}`,!1),"shop-order")}function ed(n=!1){if((k==null?void 0:k.type)!=="shop"||k.phase!=="order"||!k.selection&&!n)return;const e=ji[k.customer],t=!n&&k.selection===e.choice,i=t&&k.elapsed<vs*.5;k.results.push({correct:t,perfect:i,timedOut:n}),k.phase="feedback",Ne.setAction(t?"positive":"negative"),On(t?880:260,.2),Qe(rt(t?i?"PERFECT · 这份心意刚刚好":"GOOD · 客人很满意":n?"客人等了太久…":"不是这个呀…",`${k.customer+1} / 3 · ${e.guest}`,`<p>${t?`甜点搭配${zo[e.choice]}，谢谢款待！${i?"获得 5 金币小费。":""}`:`客人想要的是${zo[e.choice]}。这份订单未成交，下次留意需求。`}</p><div id="shop-next"><small>等客人回应…</small></div>`,!1),"shop-feedback"),we("#panel").dataset.feedback=t?"positive":"negative"}function V_(){(k==null?void 0:k.type)!=="shop"||k.phase!=="feedback-ready"||(++k.customer<ji.length?Ju():G_())}function G_(){const{dessert:n,index:e,results:t}=k,i=fd(n.score,t);rr(J,{name:`小铺营业 · 接待 ${i.served}/3 组`,cost:10,coins:i.coins,stats:{charm:i.charm},mood:i.mood}),J.desserts.splice(e,1),yt(),k.phase="summary",k.reward=i,Ne.setAction("summary"),Vt(),we("#scene-label").textContent="今日营业 · 翻开账本",we("#scene-actions").innerHTML="",Qe(rt("今日营业账本","",`<div class="ledger-rows"><div>甜点收入 <b>+${i.sales} ◈</b></div><div>服务小费 <b>+${i.tips} ◈</b></div><div>亲和成长 <b>+${i.charm}</b></div></div><strong>本次收入 ${i.coins} 金币</strong><div class="result-actions">${Ye("正在整理账本…","shop-close","disabled","button wide")}${Ye("分享录屏到抖音","share-recording","","button subtle")}</div>`,!1,"shop-ledger-bottom"),"shop-summary")}function $_(){(k==null?void 0:k.type)!=="shop"||k.phase!=="summary-ready"||(k.phase="closing",we("#scene-label").textContent="今日营业 · 圆满收工",Ne.setAction("closing"),we("#scene-actions").innerHTML="",Qe("","shop-closing"))}function W_(n){if((k==null?void 0:k.type)!=="shop")return;const e=Ne.getInfo().shopMotion,t=we(".shop-till");if(t&&(t.hidden=e.action==="positive"&&e.time>=7.68),k.phase==="order"){if(e.seeking)return;k.elapsed+=n,we("#shop-patience-fill").style.width=`${Math.max(0,100*(1-k.elapsed/vs))}%`,k.elapsed>=vs&&ed(!0)}else if(k.phase==="feedback"&&e.complete)k.phase="feedback-ready",we("#shop-next").innerHTML=Ye(k.customer<2?"继续接待下一位":"结束接待，看看账本","shop-next","","button wide");else if(k.phase==="summary"&&e.complete){k.phase="summary-ready";const i=we("[data-action=shop-close]");i.disabled=!1,i.textContent="看完账本，结束营业"}else k.phase==="closing"&&e.complete&&(k.phase="closed",Qe(rt("今天的甜蜜，圆满收工","BAKERY CLOSED",`<p>接待 3 组 · 成交 ${k.reward.served} 组 · 收入 ${k.reward.coins} 金币</p>${Ye("关好店门，回家吧","home","","button wide")}`,!1),"shop-result"))}function q_(){Qe(rt("背包","",`<div class="backpack">${Object.entries(J.inventory).map(([n,e])=>`<div class="item-cell">${zu[n]} ${Vo[n]}<b>${e}</b></div>`).join("")}</div><div class="section-label">甜点 · ${J.desserts.length} 份</div>${J.desserts.length?Ps(J.desserts.map(n=>`<div class="record"><b>${ko(n.name)}</b><span>${n.grade} · ${n.score} 分</span></div>`),4,"dessert-grid"):'<p class="bag-empty">暂无甜点 · 去烘焙一份吧</p>'}`),"bag")}function X_(){Qe(rt("每一点成长，都算数","YOUR GROWING STORY",`<div class="book-stats">${Object.entries(mr).map(([n,e])=>`<div>${e}<b>${J.stats[n]}</b></div>`).join("")}<div>薄荷好感<b>${J.friendship}</b></div></div><div class="book-stats"><div>松团子好感<b>${J.collection.bond}</b></div></div>${Ye("相册","collection","","button wide")}<div class="section-label">最近的生活</div>${J.records.slice(0,6).map(n=>`<div class="record"><span>第 ${n.day} 日 · ${nl[n.slot]}</span>${n.name}</div>`).join("")||"<p>第一页，留给今天。</p>"}${Ye("看看玩法手册","help","","button subtle wide")}`),"journal")}function Y_(){if(J.ending){Ls();return}const n=J.day===7;Qe(rt("秋收祭，一起闪闪发光","THE HARVEST FESTIVAL",`<p>${n?"庆典已经开始！选择一份甜点，和薄荷一起前往广场。":`还有 ${7-J.day} 天。用剩下的时间学习、烘焙，准备你喜欢的穿搭。`}</p><p class="collection-hint">参加即得「把秋天送给你」祭典 CG · 庆典后生活继续</p><div class="score-lines"><div>甜点品质<b>50 分</b></div><div>烘焙 · 魔法 · 学识<b>25 分</b></div><div>服装与审美<b>20 分</b></div><div>朋友的应援<b>5 分</b></div></div>${n?J.desserts.length?`<div class="section-label">选择参赛作品</div>${Ps(J.desserts.map((e,t)=>Pt(e.name,`${e.grade} · ${e.score} 分`,"compete","✦",`data-id="${t}"`)),3,"dessert-options")}`:`<p>还没有参赛甜点。${J.slot<3?"现在烤一份也来得及。":"这次先作为观众，为朋友们鼓掌吧。"}</p>${Ye(J.slot<3?"安排魔法烘焙":"以观众身份参加",J.slot<3?"recipes":"spectator","","button wide")}`:Ye("继续准备今天的生活","schedule","","button wide")}`),"festival")}function j_(n){if(J.ending||J.day!==7)return;const e=J.desserts[n];e&&(J.ending=hd(J,e),yt(),Ls(),Ne.happy(),On(1046,.5))}function Ls(){if(Wc(J,"festival")&&yt(),!J.collection.seen.includes("festival")){ut.playCG("festival",Ls);return}pn("festival","秋收祭 · 属于我们的舞台");const n=J.ending;n&&(Qe(rt(n.title,"A NEW CHAPTER BEGINS",`<div class="stamp">${n.grade}<small>秋收祭 · 综合评分 ${n.score} / 100</small></div><div class="score-lines"><div>甜点「${n.dessert}」<b>${n.taste} / 50</b></div><div>这一周的成长<b>${n.growth} / 25</b></div><div>今天的穿搭<b>${n.dress} / 20</b></div><div>朋友的应援<b>${n.bond} / 5</b></div></div><p>「原来那些认真度过的小日子，真的会变成闪闪发光的自己。」</p><div class="row">${Ye("保存纪念卡","share")}${Ye("回小屋看看","home","","button subtle")}</div>`,!0),"ending"),Vt())}function td(){Qe(rt("小屋里的生活手册","HOW TO SPEND A LOVELY WEEK",`<ul><li>每天 3 时段；夜间体力 +25。</li><li>上课加属性，采集得食材，休息回体力。</li><li>烘焙：选材 → 搅拌 5 次 → 控温 8 秒 → 魔法。</li><li>试穿免费；穿搭影响采集与比赛。</li><li>甜点可出售、赠送；留一份参赛。</li><li>第 7 天秋收祭：甜点、成长、穿搭与好感计分。</li></ul><p>点击或触屏操作 · 空格搅拌 · 行动结束自动保存</p>${Ye("知道了，继续生活","close","","button wide")}`,!0,"help"),"help")}function Va(){Qe(rt("设置","A QUIET LITTLE MOMENT",`<div class="options">${Pt(Yi?"暂停背景音乐":"播放背景音乐","BAREFOOT IN THE PARK","music","♫")}${Pt(Wi?"关闭音效":"开启音效","操作与成功提示","sound","♫")}${Pt("重看片头","进入松团子的世界 · 保留当前进度","replay-intro","▷")}${Pt("玩法手册","课程、烘焙与庆典","help","✧")}${Pt("重新开始这一周","清除当前进度","reset-ask","↺")}</div><label for=music-volume>背景音乐音量 <output id=music-volume-value>${Math.round(nn.volume*100)}%</output></label><input id=music-volume type=range min=0 max=100 value=${Math.round(nn.volume*100)} aria-label=背景音乐音量>`),"settings")}async function K_(){const n=J.ending;if(!n)return;const e=document.createElement("canvas");e.width=900,e.height=1200;const t=e.getContext("2d");t.fillStyle="#f4e8cb",t.fillRect(0,0,900,1200),t.strokeStyle="#b38a49",t.lineWidth=3,t.strokeRect(28,28,844,1144);const i=new Image;i.src="/acorn-witch-atelier/assets/rewards/cg-festival.webp",await i.decode(),t.save(),t.beginPath(),t.rect(55,55,790,660),t.clip();const r=790,s=i.height/i.width*790;t.drawImage(i,55,55-(s-660)*.43,r,s),t.restore(),t.fillStyle="#493927",t.textAlign="center",t.font='28px "Songti SC", serif',t.fillText("橡果魔女 · 秋收祭纪念",450,765),t.font='48px "Songti SC", serif',t.fillText(n.title,450,842),t.font="70px Georgia",t.fillStyle="#a57437",t.fillText(`${n.grade}  /  ${n.score}`,450,940),t.font='23px "Songti SC", serif',t.fillStyle="#786445",t.fillText(n.dessert,450,1002),t.font='19px "Songti SC", serif',t.fillText("扫码来到橡果小屋",350,1090),await Jc(t,690,1020,120);const a=document.createElement("a");a.download="橡果魔女-秋收祭纪念.png",a.href=e.toDataURL("image/png"),a.click(),Ot("纪念卡已生成，保存在浏览器下载中。")}function il(n,e,t){if(!(k&&!["ingredient","mix","tap","heat","spell","answer","pick","home","sound","music","shop-drink","shop-serve","shop-next","shop-close","share-recording"].includes(n)))switch(n){case"share-recording":Ot("施工中，敬请期待");break;case"recruitment":jd(we("#game"),J,yt);break;case"list-page":b_(t,Number(e));break;case"custom-outfit":vn=e,Ne.prepareCustom(J.collection.customOutfits.find(i=>i.id===e)).then(_s).catch(()=>Ot("共创衣服暂未载入，请检查绘图服务。"));break;case"design":Ot("施工中，敬请期待");break;case"collection":ut.album();break;case"wheel":ut.wheel();break;case"pets":ut.pets();break;case"wardrobe-tab":Pr=e,_s();break;case"part":e==="none"?jt.accessory=null:Go.find(r=>r.id===e)&&(jt.accessory=e),Zu();break;case"home":yn();break;case"close":yn();break;case"schedule":M_();break;case"activity":E_(e);break;case"recipe":fi=Number(e),Gu();break;case"recipes":vi(J,18)?Vu():Ot("先恢复体力，或开始新的一周。");break;case"cook":T_();break;case"ingredient":(k==null?void 0:k.phase)==="ingredients"&&!k.selected.includes(e)&&(k.selected.push(e),On(520+k.selected.length*100),$u());break;case"mix":(k==null?void 0:k.phase)==="ingredients"&&w_();break;case"tap":qu();break;case"heat":(k==null?void 0:k.phase)==="mixed"&&A_();break;case"spell":R_(e);break;case"course":D_(e);break;case"answer":I_(Number(e));break;case"portrait":Qe("","portrait"),pn("portrait","卧室 · 镜前试衣"),we("#scene-actions").innerHTML=Ye("打开衣橱","wardrobe","","scene-button")+Ye("展示动作","showcase","","scene-button");break;case"showcase":Ne.showcase();break;case"wardrobe":ju();break;case"outfit":vn=null,tr=e,_s();break;case"wear":O_();break;case"story-choice":k_(e);break;case"sell":H_(Number(e));break;case"shop-drink":(k==null?void 0:k.type)==="shop"&&k.phase==="order"&&(k.selection=e,Qu());break;case"shop-serve":ed();break;case"shop-next":V_();break;case"shop-close":$_();break;case"bag":q_();break;case"journal":Nt.openBook();break;case"stories":Nt.openStories();break;case"festival":Y_();break;case"compete":j_(Number(e));break;case"share":K_();break;case"help":td();break;case"profile":y_(we("#game"),J,Ne.getOutfitPreview("acorn",!0),()=>{yt(),Vt()});break;case"settings":Va();break;case"replay-intro":cd();break;case"music":Yi=!Yi,Yi?Cs():nn.pause(),fn==="settings"&&Va();break;case"sound":Wi=!Wi,we("#sound").textContent=Wi?"♫ 音效开":"♫ 音效关",we("#sound").setAttribute("aria-label",Wi?"关闭音效":"开启音效"),On(660),fn==="settings"&&Va();break;case"reset-ask":Qe(rt("翻开新的一页？","A FRESH START",`<p>将清除这次的金币、成长、甜点与庆典结果，从第一日重新开始。</p><div class="row">${Ye("重新开始","reset")}${Ye("继续这一周","close","","button subtle")}</div>`),"reset");break;case"reset":J=Vc(),At(J),yt(),yn(),Ot("新的一周，新的可能。");break;case"spectator":J.ending={score:0,grade:"纪念",title:"自由自在的森林生活",taste:0,growth:0,dress:0,bond:0,dessert:"与朋友分享的掌声"},yt(),Ls();break}}we("#game").addEventListener("click",n=>{const e=n.target.closest("[data-action]");e&&!e.disabled&&(On(),il(e.dataset.action,e.dataset.id,e))});we("#game").addEventListener("input",n=>{n.target.id==="music-volume"&&(nn.volume=Number(n.target.value)/100,we("#music-volume-value").textContent=`${n.target.value}%`),n.target.id==="heat-slider"&&(k==null?void 0:k.phase)==="heat"&&(k.temperature=Number(n.target.value),we("#temperature").textContent=k.temperature)});we("#sound").onclick=()=>il("sound");we("#help").onclick=()=>{k||td()};window.addEventListener("keydown",n=>{tn!=null&&tn.active||Nt!=null&&Nt.opened||ut!=null&&ut.opened||Yt!=null&&Yt.opened||n.target.matches("input,textarea")||(n.code==="Space"&&(k==null?void 0:k.phase)==="mix"?(n.preventDefault(),n.repeat||qu()):n.key==="Escape"&&!k&&yn())});let Ga=performance.now();function Ho(n){if(Nt==null||Nt.updateEntry(),ut==null||ut.updatePet(Xn==="home"&&(!fn||fn==="bag"||fn==="schedule")&&!(Nt!=null&&Nt.opened)&&!(ut!=null&&ut.opened)&&!(Yt!=null&&Yt.opened)),Nt!=null&&Nt.opened||ut!=null&&ut.opened||Yt!=null&&Yt.opened){Ga=n,requestAnimationFrame(Ho);return}!document.hidden&&(k==null?void 0:k.type)==="course"&&k.feedback&&Ne.getInfo().classroomMotion.complete&&(k.feedback=!1,k.q++,k.q<3?Yu():U_()),!document.hidden&&(k==null?void 0:k.type)==="tasting"&&Ne.getInfo().bakingMotion.complete&&P_();const e=Math.min(n-Ga,100);if(Ga=n,document.hidden||(W_(e),(k==null?void 0:k.type)==="gather"&&(Yn==null||Yn.tick(e))),!document.hidden&&(k==null?void 0:k.phase)==="mix"){const t=we("#mix-needle");t&&(t.style.left=`${Wu(n)*100}%`)}if(!document.hidden&&(k==null?void 0:k.phase)==="heat"){k.elapsed=(k.elapsed||0)+e;const t=Math.abs(k.temperature-k.recipe.temp);k.heatTotal+=Math.max(0,1-Math.max(0,t-3)/32)*e,k.heatSamples+=e,we("#heat-progress").style.width=`${Math.min(100,k.elapsed/80)}%`,we("#heat-time").textContent=`${Math.max(0,Math.ceil(8-k.elapsed/1e3))} 秒`,we("#heat-feedback").textContent=t<=8?"温度刚刚好，保持住。":k.temperature<k.recipe.temp?"还不够暖，再加一点火。":"有点烫，稍微降低温度。",k.elapsed>=8e3&&C_()}requestAnimationFrame(Ho)}Yt=Yd({game:we("#game"),getState:()=>J,save:yt,world:Ne,pause:n=>Ne.setPaused(n),onEquipped:yn});ut=Qd({game:we("#game"),getState:()=>J,save:yt,refresh:Vt,pause:n=>Ne.setPaused(n),world:Ne,onWear:ju,onRecipes:()=>il("recipes")});Nt=g_({game:we("#game"),getState:()=>J,getContext:()=>{var n;return{view:Xn,panel:fn,collectionOpen:!!(ut!=null&&ut.opened)||!!(Yt!=null&&Yt.opened),phase:k==null?void 0:k.phase,activityName:we("#scene-label").textContent,recipe:(n=k==null?void 0:k.recipe)==null?void 0:n.name}},save:yt,refresh:Vt,pause:(n,e=0)=>{Ne.setPaused(n),!n&&(k==null?void 0:k.phase)==="mix"&&(k.start+=e)},portrait:()=>Ne.getDialoguePortrait(),onAlbum:()=>ut.album(),onCG:n=>ut.playCG(n),onActivity:()=>X_()});requestAnimationFrame(Ho);yn();Ss&&Ot(Ss);window.__acorn={get state(){return structuredClone(J)},get view(){return Xn},get panel(){return fn},get round(){return k?structuredClone(k):null},renderer:()=>Ne.getInfo()};
