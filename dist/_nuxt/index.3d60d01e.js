import i from"./Book.e42c1738.js";import{W as m,o,b as n,f as e,X as h,Y as d,u as _,c as u}from"./entry.3d41bf26.js";import{u as p}from"./asyncData.b14b91af.js";import{u as f}from"./composables.56ced145.js";import{q as k}from"./query.100df598.js";import{g as b}from"./getMetaData.a7dddaf0.js";import"./nuxt-picture.10ed634f.js";import"./utils.9e3ab596.js";const g=e("header",{class:"header"},[e("div",{class:"container container--narrow"},[e("div",{class:"header__content"},[e("h1",null,"Bookshelf"),e("p",{class:"lead mb-4"}," Here's a collection of the books I've either read or listened to and my thoughts about them. ")])])],-1),y={class:"section"},B={class:"container container--narrow"},v={class:"books"},L={__name:"index",async setup(w){let t,a;const{data:r}=([t,a]=m(()=>p("books",()=>k("/bookshelf").find())),t=await t,a(),t);return f({meta:()=>b({type:"page",url:"https://traekwells.com/bookshelf",title:"Bookshelf",description:"Heres a collection of the books I've either read or listened to and my thoughts about them."}),title:"Bookshelf",link:[{hid:"canonical",rel:"canonical",href:"https://traekwells.com/bookshelf"}]}),(c,D)=>{const l=i;return o(),n("main",null,[g,e("section",y,[e("div",B,[e("div",v,[(o(!0),n(h,null,d(_(r),s=>(o(),u(l,{key:s._path,book:s},null,8,["book"]))),128))])])])])}}};export{L as default};
