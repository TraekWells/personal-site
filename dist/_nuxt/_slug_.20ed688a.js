import w from"./ContentDoc.9e21b858.js";import g from"./Book.e42c1738.js";import{k as $,z as x,W as h,O as A,o as r,b as i,f as t,a0 as B,$ as l,u as _,e as C,X as p,Y as f,c as D}from"./entry.3d41bf26.js";import{u as k}from"./asyncData.b14b91af.js";import{u as M}from"./composables.56ced145.js";import{q as v}from"./query.100df598.js";import{g as N}from"./getMetaData.a7dddaf0.js";import"./ContentRenderer.debb769c.js";import"./ContentRendererMarkdown.7b241552.js";import"./_commonjsHelpers.fed2a411.js";import"./ContentQuery.08645731.js";import"./utils.9e3ab596.js";import"./nuxt-picture.10ed634f.js";const O={class:"post"},q={class:"header"},V={class:"container container--narrow"},E={class:"book__author"},S={class:"lead"},T={class:"section"},W={class:"container container--narrow"},j={class:"content"},z={class:"content__text"},F={class:"content__sidebar"},H=t("p",null,"Table of Contents",-1),I=["href"],L={class:"section section--secondary"},R={class:"container container--narrow"},X=t("h2",null,"Notes from other books",-1),Y={class:"books"},it={__name:"[slug]",async setup(G){let o,c;const{path:s}=$(),m=x([]),{data:e}=([o,c]=h(()=>k(`content-${s}`,()=>v("/bookshelf").where({_path:s}).findOne())),o=await o,c(),o),{data:y}=([o,c]=h(()=>k(`more-content-${s}`,()=>v("/bookshelf").where({_path:{$ne:s}}).limit(2).find())),o=await o,c(),o);return A(()=>{Array.from(document.querySelectorAll(".content h2")).forEach(u=>{const a={};a.text=u.textContent,a.link=u.id,m.value.push(a)})}),M({meta:()=>{const d={type:"article",url:`https://traekwells.com${s}`,title:e.value.title,description:e.value.summary,image:e.value.previewImage};return N(d,{property:"article:published_time",content:e.value.createdAt},{property:"article:modified_time",content:e.value.updatedAt})},title:e.value.title,link:[{hid:"canonical",rel:"canonical",href:`https://traekwells.com${s}`}]}),(d,u)=>{const a=w,b=g;return r(),i("main",O,[t("header",q,[t("div",V,[t("h1",null,[B(l(_(e).title)+" ",1),t("span",E,"Written by "+l(_(e).author),1)]),t("p",S,l(_(e).thoughts),1)])]),t("article",T,[t("div",W,[t("div",j,[t("div",z,[C(a)]),t("div",F,[H,t("ul",null,[(r(!0),i(p,null,f(m.value,n=>(r(),i("li",{key:n.id},[t("a",{href:`#${n.link}`},l(n.text),9,I)]))),128))])])])])]),t("article",L,[t("div",R,[X,t("div",Y,[(r(!0),i(p,null,f(_(y),n=>(r(),D(b,{key:n.path,book:n},null,8,["book"]))),128))])])])])}}};export{it as default};