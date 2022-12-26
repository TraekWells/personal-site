import{_ as A}from"./nuxt-picture.10ed634f.js";import P from"./ContentDoc.9e21b858.js";import T from"./ProjectCard.c94a4ba5.js";import{z as k,k as V,W as y,O as B,o as n,b as a,f as t,$ as d,u as o,c as h,Z as p,e as D,X as m,Y as f,a1 as I}from"./entry.3d41bf26.js";import{u as w}from"./asyncData.b14b91af.js";import{u as L}from"./composables.56ced145.js";import{q as j}from"./query.100df598.js";import{g as N}from"./getMetaData.a7dddaf0.js";import"./ContentRenderer.debb769c.js";import"./ContentRendererMarkdown.7b241552.js";import"./_commonjsHelpers.fed2a411.js";import"./ContentQuery.08645731.js";import"./utils.9e3ab596.js";const O={class:"post"},q={class:"header"},H={class:"container container--narrow"},S={class:"lead"},E={class:"section"},Z={class:"container container--narrow"},z={class:"content"},F={class:"content__image"},R={class:"content__text"},U={class:"content__sidebar"},W=t("h4",null,"Technology Used",-1),X={class:"technology"},Y=I('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="technology__icon-wrapper" fill="currentColor" stroke="none"><g fill="none"><path d="M0 0h24v24H0Z"></path><g stroke-linecap="round" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linejoin="round"><path d="M4.48 11.98h14.99"></path><path d="M13.483 5.988L19.513 12l-6.04 6.01"></path></g></g></svg>',1),G=t("h4",null,"Project Links",-1),J=["href"],K={key:0},Q=["href"],tt=t("h4",null,"Table of Contents",-1),et=["href"],ot={class:"section"},nt={class:"container container--narrow"},st=t("h2",null,"More Projects",-1),rt={class:"projects"},wt={__name:"[slug]",async setup(at){let r,u;const g=k([]),v=k([]),{path:c}=V(),{data:e}=([r,u]=y(()=>w(`content-${c}`,()=>j("/projects").where({_path:c}).findOne())),r=await r,u(),r),{data:C}=([r,u]=y(()=>w(`more-content-${c}`,()=>j("/projects").where({_path:{$ne:c}}).find())),r=await r,u(),r),x=()=>{Array.from(document.querySelectorAll(".content h2")).forEach(_=>{const l={};l.text=_.textContent,l.link=_.id,g.value.push(l)})},$=()=>{const i=e.value.technology.split(",").map(_=>_.trim());v.value.push(...i)};return B(()=>{x(),$()}),L({meta:()=>{const i={type:"article",url:`https://traekwells.com${c}`,title:e.value.title,description:e.value.summary,image:e.value.previewImage};return N(i,{property:"article:published_time",content:e.value.createdAt},{property:"article:modified_time",content:e.value.updatedAt})},title:e.value.title,link:[{hid:"canonical",rel:"canonical",href:`https://traekwells.com${c}`}]}),(i,_)=>{const l=A,b=P,M=T;return n(),a("main",O,[t("header",q,[t("div",H,[t("h1",null,d(o(e).title),1),t("p",S,d(o(e).summary),1)])]),t("article",E,[o(e).featuredImage?(n(),h(l,{key:0,class:"featured-image",src:o(e).featuredImage,alt:o(e).title},null,8,["src","alt"])):p("",!0),t("div",Z,[t("div",z,[t("div",F,[o(e).featuredImage?p("",!0):(n(),h(l,{key:0,src:o(e).previewImage,alt:o(e).title},null,8,["src","alt"]))]),t("div",R,[D(b)]),t("div",U,[W,t("ul",X,[(n(!0),a(m,null,f(v.value,s=>(n(),a("li",{key:s,class:"technology__item"},[Y,t("span",null,d(s),1)]))),128))]),G,t("ul",null,[t("li",null,[t("a",{href:o(e).linkToProject,target:"_blank",rel:"noreferrer noopener"},"View Live Project",8,J)]),o(e).linkToCode?(n(),a("li",K,[t("a",{href:o(e).linkToCode,target:"_blank",rel:"noreferrer noopener"},"View Code",8,Q)])):p("",!0)]),tt,t("ul",null,[(n(!0),a(m,null,f(g.value,s=>(n(),a("li",{key:s.id},[t("a",{href:`#${s.link}`},d(s.text),9,et)]))),128))])])])])]),t("article",ot,[t("div",nt,[st,t("div",rt,[(n(!0),a(m,null,f(o(C),s=>(n(),h(M,{key:s.path,project:s},null,8,["project"]))),128))])])])])}}};export{wt as default};
