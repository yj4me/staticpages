import{_ as j,a as L,b as C,c as M,d as N,e as V,f as B,g as O,h as E,i as R,j as F,k as U,l as A,m as D,n as J,o as K,p as T,q as W,r as q,s as z,t as G,u as H,v as Z,w as P,x as Q,y as X,z as Y,A as ss,B as ts,C as es,D as as,E as _s,F as os,G as ns,H as is,I as ls,J as gs,K as cs,L as rs,M as ps,N as ms,O as ds}from"./9-T4bXScWy.js";import{r as b,o as a,c,a as f,b as us,p as x,d as I,e as l,f as vs,F as k,w as g,g as u,h as p,i as v,j as bs,k as js,l as fs}from"./index-50Fvuep-.js";const hs={__name:"item",props:{name:String,sortIndex:Number,author:String},setup(s){const t=s;return(_,o)=>{const n=b("van-cell");return a(),c(n,{title:`${t.sortIndex} ${t.name}`,"is-link":"",to:`detail/${t.sortIndex}`,value:t.author},null,8,["title","to","value"])}}},xs=""+new URL("empty-1RZKrME_.gif",import.meta.url).href,Is={},ys=s=>(x("data-v-4457dc5c"),s=s(),I(),s),$s={class:"empty"},ks=ys(()=>l("img",{src:xs,alt:"",class:"pic"},null,-1));function Ss(s,t){return a(),f("div",$s,[us(s.$slots,"default",{},void 0,!0),ks])}const S=j(Is,[["render",Ss],["__scopeId","data-v-4457dc5c"]]),ws=s=>(x("data-v-78a68eb1"),s=s(),I(),s),Ls=ws(()=>l("p",{class:"empty_text"},"当前还没有学会的内容哦~",-1)),Cs={__name:"list",props:{list:Object},setup(s){const t=s;return(_,o)=>t.list.length?(a(!0),f(k,{key:0},vs(t.list,n=>(a(),c(hs,{name:n.name,sortIndex:n.sortIndex,author:n.author},null,8,["name","sortIndex","author"]))),256)):(a(),c(S,{key:1},{default:g(()=>[Ls]),_:1}))}},$=j(Cs,[["__scopeId","data-v-78a68eb1"]]),w=s=>(x("data-v-75a7e3be"),s=s(),I(),s),Ms=w(()=>l("p",{class:"empty_text"},"当前还没有学会的内容，不能进行测验",-1)),Ns=w(()=>l("p",{class:"empty_text"},"看图猜诗，看看是哪首你会背诵的诗",-1)),Vs={class:"imgWrapper"},Bs=["src"],Os={class:"btnWrapper"},Es={__name:"test",props:{list:Object},setup(s){const t=s,_=u(-1),o=()=>_.value>0?new URL(Object.assign({"../assets/images/test/1.jpg":L,"../assets/images/test/10.jpg":C,"../assets/images/test/11.jpg":M,"../assets/images/test/12.jpg":N,"../assets/images/test/13.jpg":V,"../assets/images/test/14.jpg":B,"../assets/images/test/15.jpg":O,"../assets/images/test/16.jpg":E,"../assets/images/test/17.jpg":R,"../assets/images/test/18.jpg":F,"../assets/images/test/19.jpg":U,"../assets/images/test/2.jpg":A,"../assets/images/test/20.jpg":D,"../assets/images/test/21.jpg":J,"../assets/images/test/22.jpg":K,"../assets/images/test/23.jpg":T,"../assets/images/test/24.jpg":W,"../assets/images/test/25.jpg":q,"../assets/images/test/26.jpg":z,"../assets/images/test/27.jpg":G,"../assets/images/test/28.jpg":H,"../assets/images/test/29.jpg":Z,"../assets/images/test/3.jpg":P,"../assets/images/test/30.jpg":Q,"../assets/images/test/31.jpg":X,"../assets/images/test/32.jpg":Y,"../assets/images/test/33.jpg":ss,"../assets/images/test/34.jpg":ts,"../assets/images/test/35.jpg":es,"../assets/images/test/36.jpg":as,"../assets/images/test/37.jpg":_s,"../assets/images/test/39.jpg":os,"../assets/images/test/4.jpg":ns,"../assets/images/test/40.jpg":is,"../assets/images/test/41.jpg":ls,"../assets/images/test/5.jpg":gs,"../assets/images/test/6.jpg":cs,"../assets/images/test/7.jpg":rs,"../assets/images/test/8.jpg":ps,"../assets/images/test/9.jpg":ms})[`../assets/images/test/${_.value}.jpg`],import.meta.url).href:"",n=()=>{if(t.list.length>0){const r=Math.ceil(Math.random()*t.list.length)-1;console.log("randomIndex",r);const m=t.list[r].sortIndex;_.value=m}};return n(),(r,m)=>{const i=b("van-button");return s.list.length===0?(a(),c(S,{key:0},{default:g(()=>[Ms]),_:1})):(a(),f(k,{key:1},[Ns,l("div",Vs,[l("img",{src:o(),alt:"",class:"img"},null,8,Bs)]),l("div",Os,[p(i,{type:"warning",onClick:n,block:"",plain:"",icon:"replay",class:"btn"},{default:g(()=>[v("换一个")]),_:1})])],64))}}},Rs=j(Es,[["__scopeId","data-v-75a7e3be"]]),Fs={class:"page main"},Us={class:"con"},As={__name:"main",setup(s){const t=u([]),_=u([]),o=u(0),n=i=>o.value=i,r=()=>{const i=ds.map(e=>({...e,status:m(e.sortIndex)}));t.value=i.filter(e=>!e.status),_.value=i.filter(e=>e.status)},m=i=>{const e=localStorage.getItem("yw_done");return e?JSON.parse(e).findIndex(h=>h==i)>-1:!1};return bs(()=>{console.log("main onMounted"),r()}),js(()=>{console.log("main onMounted"),r()}),(i,e)=>{const d=b("van-tabbar-item"),y=b("van-tabbar");return a(),f("div",Fs,[l("div",Us,[o.value===0?(a(),c($,{key:0,list:t.value},null,8,["list"])):o.value===1?(a(),c($,{key:1,list:_.value},null,8,["list"])):o.value===2?(a(),c(Rs,{key:2,list:_.value},null,8,["list"])):fs("",!0)]),p(y,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=h=>o.value=h),onChange:n},{default:g(()=>[p(d,{icon:"todo-list-o",badge:t.value.length},{default:g(()=>[v("待学")]),_:1},8,["badge"]),p(d,{icon:"medal-o",badge:_.value.length},{default:g(()=>[v("学会")]),_:1},8,["badge"]),p(d,{icon:"aim"},{default:g(()=>[v("测验")]),_:1})]),_:1},8,["modelValue"])])}}},Ks=j(As,[["__scopeId","data-v-65866bdc"]]);export{Ks as default};