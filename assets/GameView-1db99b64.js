import{d as D,P as Q,u as P,s as k,c,o,a as _,b as p,n as S,Z as A,_ as E,e as ee,t as T,f as I,F as M,r as z,g as se,h as Z,S as G,i as R,p as L,j,C as N,k as B,O as te,T as ne,l as U,m as q,q as oe,v as Y,w as ae,B as le}from"./index-7f8fa24a.js";const ce=["id"],re=D({__name:"PlaceComp",props:{place:{type:Q,default:null},hidden:{type:Boolean,default:!1},corner:{type:Boolean,default:!1}},setup(s){const e=s,n=P(),{altar:m,getSelectedOfferings:f,getHeldOffering:u}=k(n),v=c(()=>e.place?e.place.getID():""),b=c(()=>{var t;return(t=m.value)==null?void 0:t.getOpenPlaces().includes(e.place)}),y=c(()=>f.value.length&&b.value),d=c(()=>{var t;return((t=e.place)==null?void 0:t.zone)!==A.Altar});function h(){if(e.place.type==="omen"||e.place.zone!==A.Altar)return;const t=u.value;t&&n.pushOfferingAtPlace(e.place,t.direction)}function w(t){e.place.type==="omen"||e.place.zone!==A.Altar||(n.resetOfferings(),t.preventDefault())}function x(t){t.dataTransfer&&(t.dataTransfer.dropEffect="link"),t.preventDefault()}function C(t){e.place.type==="omen"||e.place.zone!==A.Altar||(n.dropOffering(e.place),t.preventDefault())}return(t,a)=>{var l;return o(),_("div",{id:v.value,class:S(["place",[(l=e.place)==null?void 0:l.type,s.hidden?"invisible":"",s.corner?"corner":"",y.value?"enabled":"",d.value?"spread":""]])},[p("div",{class:"spacing",onDragenter:h,onDragleave:w,onDragover:x,onDrop:C},null,32)],10,ce)}}});const H=E(re,[["__scopeId","data-v-9b7cef24"]]),ie=s=>(L("data-v-c88a4b1b"),s=s(),j(),s),_e=ie(()=>p("br",null,null,-1)),fe={key:0},ge={key:1},ue={class:"digits"},pe=D({__name:"PlayerComp",props:{player:{type:ee,default:null}},setup(s){const e=s,n=P(),{getTurnPhaseString:m,getCurrentPlayerTurn:f}=k(n),u=c(()=>e.player?e.player.getRows():[]),v=c(()=>n.getPlayerFortunes(e.player.id)),b=N.fortuneMajor,y=c(()=>v.value.find(h=>h.length===b)),d=c(()=>e.player.turn&&f.value);return(h,w)=>s.player?(o(),_("div",{key:0,class:S(["player flex-column-center",d.value?"turn":""])},[p("h2",null,T(I(G).player)+" "+T(s.player.id),1),_e,s.player.turn?(o(),_("h3",fe,T(I(m)),1)):(o(),_("p",ge,T(I(G).waiting),1)),(o(!0),_(M,null,z(u.value,(x,C)=>(o(),_("div",{key:C,class:"flex-row-center"},[(o(!0),_(M,null,z(x,(t,a)=>(o(),R(H,{key:a,place:t,hidden:C===0},null,8,["place","hidden"]))),128))]))),128)),p("h3",null,[se(T(I(G).fortunes.toUpperCase())+": ",1),p("span",ue,T(v.value.length)+T(y.value?"*":""),1)])],2)):Z("",!0)}});const K=E(pe,[["__scopeId","data-v-c88a4b1b"]]),de={class:"limbo flex-column-center"},me={class:"flex-row-center"},ve=D({__name:"LimboComp",setup(s){const e=P(),{limbo:n}=k(e),m=c(()=>{var f;return(f=n.value)==null?void 0:f.getRow()});return(f,u)=>(o(),_("div",de,[p("div",me,[(o(!0),_(M,null,z(m.value,(v,b)=>(o(),R(H,{key:b,place:v,hidden:""},null,8,["place"]))),128))])]))}}),be={class:"flex-row-center"},ye={class:"flex-column-center"},he={class:"altar flex-column-center shadow"},$e=D({__name:"AltarComp",setup(s){const e=P(),{altar:n}=k(e),m=c(()=>{var f;return(f=n.value)==null?void 0:f.getRows()});return(f,u)=>(o(),_("div",be,[p("div",ye,[p("div",he,[(o(!0),_(M,null,z(m.value,(v,b)=>(o(),_("div",{key:b,class:"flex-row-center"},[(o(!0),_(M,null,z(v,(y,d)=>(o(),R(H,{key:d,place:y,corner:(b===0||b===I(N).altarSize-1)&&(d===0||d===I(N).altarSize-1),hidden:""},null,8,["place","corner"]))),128))]))),128))])])]))}});const Oe=E($e,[["__scopeId","data-v-9f2ee722"]]),xe=s=>(L("data-v-cb5325e4"),s=s(),j(),s),Ie={class:"kitty flex-column-center shadow"},Ce=xe(()=>p("div",{class:"spacing"},null,-1)),we=D({__name:"KittyComp",setup(s){const e=P(),{kitty:n}=k(e);return(m,f)=>{var u;return o(),_("div",Ie,[Ce,B(H,{place:(u=I(n))==null?void 0:u.place,hidden:""},null,8,["place"])])}}});const De=E(we,[["__scopeId","data-v-cb5325e4"]]),Pe="/assets/11-fabe0405.png",ke="/assets/12-3cf8e2ab.png",Be="/assets/13-8257758d.png",Ee="/assets/14-57ec94eb.png",Te="/assets/21-0ee2c953.png",Ae="/assets/22-886470d6.png",Se="/assets/23-03cfa18c.png",Me="/assets/24-cc251532.png",ze="/assets/31-def237dc.png",Re="/assets/32-9efe663d.png",Fe="/assets/33-8f8ea4f7.png",Ve="/assets/34-7c1afc5b.png",Le="/assets/41-0b26d785.png",je="/assets/42-a824f74a.png",He="/assets/43-465307d6.png",Ge="/assets/44-7ac05cfb.png",Ne=["id"],Ue=["id"],Xe=D({__name:"OmenComp",props:{omen:{type:te,default:null}},setup(s){const e=s,n=P(),{getAltarActiveOmens:m,turn:f}=k(n),u=c(()=>e.omen?e.omen.getID():""),v=c(()=>n.playerForID(e.omen.player)),b=c(()=>n.getPlayerFortunes(e.omen.player)),y=c(()=>m.value.includes(e.omen)),d=c(()=>y.value&&f.value===ne.Collect),h=c(()=>{var t;return v.value&&!((t=v.value)!=null&&t.turn)}),w=c(()=>b.value.find(t=>t.includes(e.omen)));U(()=>{q(()=>{x()})});function x(){const t=document.getElementById(`style-${e.omen.getID()}`);if(!t)return;const a=`${e.omen.celestial}${e.omen.sacrifice}`,l=new URL(Object.assign({"../assets/images/omens/11.png":Pe,"../assets/images/omens/12.png":ke,"../assets/images/omens/13.png":Be,"../assets/images/omens/14.png":Ee,"../assets/images/omens/21.png":Te,"../assets/images/omens/22.png":Ae,"../assets/images/omens/23.png":Se,"../assets/images/omens/24.png":Me,"../assets/images/omens/31.png":ze,"../assets/images/omens/32.png":Re,"../assets/images/omens/33.png":Fe,"../assets/images/omens/34.png":Ve,"../assets/images/omens/41.png":Le,"../assets/images/omens/42.png":je,"../assets/images/omens/43.png":He,"../assets/images/omens/44.png":Ge})[`../assets/images/omens/${a}.png`],self.location).href;t.style.backgroundImage=`url(${l})`}function C(){d.value&&n.selectOmen(e.omen)}return(t,a)=>(o(),_("div",{id:u.value,class:S(["container shadow flex-column-center",[w.value?"fortune":"",d.value?"events":""]])},[p("div",{class:S(["omen",y.value?"active":"",d.value?"enabled":"",h.value?"disabled":""]),onClick:C},[p("div",{id:`style-${u.value}`,class:"icon"},null,8,Ue)],2)],10,Ne))}});const Ye=E(Xe,[["__scopeId","data-v-3284dc00"]]),Ke="/assets/11-461f6737.png",Ze="/assets/12-9ab4812f.png",qe="/assets/13-5e2b2069.png",We="/assets/14-b76ea213.png",Je="/assets/21-c2aa472a.png",Qe="/assets/22-8d6ff469.png",es="/assets/23-e994e76f.png",ss="/assets/24-8dd44e66.png",ts="/assets/31-740a3fab.png",ns="/assets/32-25b8eb1c.png",os="/assets/33-df12b272.png",as="/assets/34-f4a1c50b.png",ls="/assets/41-967a0aaf.png",cs="/assets/42-6d441022.png",rs="/assets/43-11b99e1a.png",is="/assets/44-a29e51e7.png",_s="/assets/flame-e9cdbf27.gif",fs=s=>(L("data-v-42f56bb5"),s=s(),j(),s),gs=["id"],us=["id"],ps={key:0,class:"flame"},ds=fs(()=>p("img",{src:_s,alt:"burning"},null,-1)),ms=[ds],vs=D({__name:"OfferingComp",props:{offering:{type:oe,default:null},tilted:{type:Boolean,defaut:!1}},setup(s){const e=s,n=P(),{getAltarOfferingPlaces:m,getAltarPortentOfferings:f,getEnabledOfferings:u,getDisabledOfferings:v,getBurnableOfferings:b}=k(n),y=c(()=>e.offering?e.offering.getID():""),d=c(()=>f.value.includes(e.offering)),h=c(()=>u.value.includes(e.offering)),w=c(()=>v.value.includes(e.offering)),x=c(()=>b.value.includes(e.offering)),C=c(()=>d.value&&!x.value);U(()=>{q(()=>{t()})});function t(){const i=document.getElementById(`style-${e.offering.getID()}`);if(!i)return;const $=`${e.offering.celestial}${e.offering.sacrifice}`,F=new URL(Object.assign({"../assets/images/offerings/front/11.png":Ke,"../assets/images/offerings/front/12.png":Ze,"../assets/images/offerings/front/13.png":qe,"../assets/images/offerings/front/14.png":We,"../assets/images/offerings/front/21.png":Je,"../assets/images/offerings/front/22.png":Qe,"../assets/images/offerings/front/23.png":es,"../assets/images/offerings/front/24.png":ss,"../assets/images/offerings/front/31.png":ts,"../assets/images/offerings/front/32.png":ns,"../assets/images/offerings/front/33.png":os,"../assets/images/offerings/front/34.png":as,"../assets/images/offerings/front/41.png":ls,"../assets/images/offerings/front/42.png":cs,"../assets/images/offerings/front/43.png":rs,"../assets/images/offerings/front/44.png":is})[`../assets/images/offerings/front/${$}.png`],self.location).href;i.style.backgroundImage=`url(${F})`}function a(){w.value||h.value&&n.selectOffering(e.offering)}let l=new Y,r="";function g(){if(e.offering.zone!==A.Player)return;const i=document.getElementById(`${e.offering.getID()}`);i&&(l.setX(i.offsetLeft),l.setY(i.offsetTop),r=i.style.transform,e.offering.setHolding(!0))}function O(){const i=e.offering||null;if(!i||i.zone!==A.Player)return;const $=document.getElementById(`${i.getID()}`);if(!$)return;const F=new Y($.center().x,$.center().y);$.style.top=`${l.y}px`,$.style.left=`${l.x}px`,$.style.transform=r,n.resetOfferings();const V=m.value.find(J=>{var X;return(X=document.getElementById(`${J.getID()}`))==null?void 0:X.containsPoint(F.x,F.y)});V&&n.pushOfferingAtPlace(V,i.direction),V&&n.dropOffering(V),i.setHolding(!1)}return(i,$)=>(o(),_("div",{id:y.value,class:S(["container shadow flex-column-center",h.value?"events":""])},[p("div",{class:S(["offering",[C.value?"active":"",h.value?"enabled":"",w.value?"disabled":"",x.value?"burner":"",s.offering.burning?"burning":""]]),onClick:a,onTouchstart:g,onMousedown:g,onTouchend:O,onMouseup:O},[p("div",{id:`style-${y.value}`,class:"icon"},null,8,us),s.offering.burning?(o(),_("div",ps,ms)):Z("",!0)],34)],10,gs))}});const bs=E(vs,[["__scopeId","data-v-42f56bb5"]]),ys=D({__name:"TilesComp",setup(s){const e=P(),{omens:n,offerings:m,getAltarOfferingPlaces:f,getHeldOffering:u}=k(e);function v(a){const l=a.touches[0];l&&y(l.clientX,l.clientY)}function b(a){y(a.clientX,a.clientY)}function y(a,l){const r=u.value||null;if(!r||r.zone!==A.Player||!r.holding)return;const g=document.getElementById(`${r.getID()}`);if(!g)return;const O=l-g.offsetHeight/2,i=a-g.offsetWidth/2;g.style.transition="all 0s ease 0s",g.style.transform="rotate(0) translate(0, 0)",g.style.top=`${O}px`,g.style.left=`${i}px`;const $=r.direction;C(a,l),r.direction!==$&&e.resetOfferings(),t()}let d=0,h=0,w=5,x=0;function C(a,l){if(x++,x>w)x=0;else return;const r=u.value||null;if(r){if(d&&h){const g=a-d,O=l-h;Math.abs(g)>Math.abs(O)?r.setDirection(g>0?2:4):r.setDirection(O>0?3:1)}d=a,h=l}}function t(){const a=u.value||null;if(!a)return;const l=document.getElementById(`${a.getID()}`);if(!l)return;const r=l.getBoundingClientRect(),g=f.value.filter(O=>{var $;const i=(($=document.getElementById(O.getID()))==null?void 0:$.getBoundingClientRect())||new DOMRect;return!(r.right<i.left||r.left>i.right||r.bottom<i.top||r.top>i.bottom)});f.value.filter(O=>g.includes(O)).forEach(O=>e.pushOfferingAtPlace(O,a.direction))}return(a,l)=>(o(),_("div",{class:"tiles",onTouchmove:v,onMousemove:b},[(o(!0),_(M,null,z(I(n),(r,g)=>(o(),R(Ye,{key:g,omen:r},null,8,["omen"]))),128)),(o(!0),_(M,null,z(I(m),(r,g)=>(o(),R(bs,{key:g,offering:r},null,8,["offering"]))),128))],32))}});const hs=E(ys,[["__scopeId","data-v-9bd9d9ed"]]),W=s=>(L("data-v-3dfd360e"),s=s(),j(),s),$s={class:"flex-row-spaced window-height"},Os=W(()=>p("div",null,null,-1)),xs={class:"flex-column-spaced"},Is=W(()=>p("div",null,null,-1)),Cs=D({__name:"GameView",setup(s){const e=P(),{players:n,getCurrentPlayerTurn:m}=k(e);return U(()=>{e.gameStart()}),ae(()=>{e.gameEnd()}),(f,u)=>(o(),_("main",{class:S(I(m)?"":"waiting")},[B(le,{bg:"game.jpeg"}),p("div",$s,[Os,B(K,{player:I(n)[0]},null,8,["player"]),p("div",xs,[B(ve),B(Oe),B(De)]),B(K,{player:I(n)[1]},null,8,["player"]),Is]),B(hs)],2))}});const Ps=E(Cs,[["__scopeId","data-v-3dfd360e"]]);export{Ps as default};
