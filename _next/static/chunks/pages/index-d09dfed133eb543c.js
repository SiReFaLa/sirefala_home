(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1093)}])},1093:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return N}});var i=t(5893),n=t(7294),a=t(7650),r={"whats-new":[{date:"2023/03/09",message:"ボーマス51に参加申し込みしました。 "},{date:"2023/03/14",message:"HPを更新しました"}],album:[{title:"16"}]},c=t(1664),l=t.n(c),d=t(9583),o=t(7735),h=t(1136);let m=(0,h.e)({serviceDomain:"sirefala",apiKey:"eh6V2I57WxTL4g2ipOKY36oT6aTH377pWqrs"}),x=async(e,s)=>{let t=await m.getList({endpoint:e,queries:s});return t};function j(){return(0,i.jsx)("h1",{children:"Now Loading..."})}let u=[{id:"youtubeID",url:"https://www.youtube.com/channel/",icon:(0,i.jsx)(d.V2E,{})},{id:"niconicoID",url:"https://www.nicovideo.jp/user/",icon:(0,i.jsx)(o._5N,{})},{id:"bilibiliID",url:"https://space.bilibili.com/",icon:(0,i.jsx)(o.YWn,{})},{id:"twitterID",url:"https://twitter.com/",icon:(0,i.jsx)(d.fWC,{})},{id:"instagramID",url:"https://www.instagram.com/",icon:(0,i.jsx)(d.Zf_,{})},{id:"tiktokID",url:"https://www.tiktok.com/@",icon:(0,i.jsx)(d.nTm,{})}];function f(){let[e,s]=(0,n.useState)(void 0);return((0,n.useEffect)(()=>{let e=async()=>{let{contents:e}=await x("member");s(e)};e()},[]),e)?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{children:e.map(e=>(0,i.jsxs)("div",{className:"ContentSubItem",children:[(0,i.jsxs)("h3",{children:[" ",e.name," "]},"".concat(e.name,"h3")),(0,i.jsx)("div",{className:"IconImage",children:e.iconImage?(0,i.jsx)("img",{alt:"",src:e.iconImage.url,style:{width:"15vw",height:"auto"}}):""}),(0,i.jsx)("a",{className:"AbstractArea",children:e.comment}),(0,i.jsx)("div",{className:"flex flex-row",children:u.filter(s=>e[s.id]).map(s=>(0,i.jsx)(l(),{className:"m-2",href:s.url+e[s.id],target:"_blank",rel:"noreferrer",children:s.icon},s.id))})]},e.name))})}):(0,i.jsx)(j,{})}function w(){let[e,s]=(0,n.useState)(void 0);return((0,n.useEffect)(()=>{let e=async()=>{let{contents:e}=await x("page",{limit:3,filters:"kinds[contains]アルバム"});s(e)};e()},[]),e)?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{children:e.map(e=>(0,i.jsxs)("div",{className:"ContentSubItem",children:[(0,i.jsxs)("h3",{children:[" ",e.title," "]},"".concat(e.title,"h3")),(0,i.jsx)("div",{className:"IconImage",children:e.thumbnail?(0,i.jsx)("img",{alt:"",src:e.thumbnail.url,style:{width:"15vw",height:"auto"}}):""}),(0,i.jsx)("a",{className:"AbstractArea",children:e.abstruct})]},e.title))})}):(0,i.jsx)(j,{})}var p=t(9008),g=t.n(p);let b=e=>{let{siteName:s,thumbnailUrl:t,description:n}=e;return s=void 0===s?"しれふぁら！":s,t=void 0===t?"https://images.microcms-assets.io/assets/2fc5d1610bcb4663a5290dce8f4e76db/b96c4c2e372b4a489548fd9f1fbcba08/713_20230315025156.jpg":t,n=void 0===n?"しれふぁら！のホームページ":n,(0,i.jsxs)(g(),{children:[(0,i.jsx)("title",{children:s}),(0,i.jsx)("link",{rel:"icon",href:t}),(0,i.jsx)("meta",{name:"description",content:n})]})},v=e=>{let{children:s,rootMargin:t="100px",animation:n,startClass:r="",endClass:c="",triggerOnce:l=!1,className:d,style:o}=e,{ref:h,inView:m}=(0,a.YD)({rootMargin:t,triggerOnce:l});return(0,i.jsx)("div",{ref:h,className:d,style:o,children:(0,i.jsx)("div",{className:m?n:r,children:s})})};var N=function(){return(0,i.jsxs)("div",{className:"App",children:[(0,i.jsx)(b,{}),(0,i.jsx)("header",{className:"App-header",children:(0,i.jsx)("h1",{className:"Title-anim",children:"しれふぁら！！"})}),(0,i.jsx)(v,{animation:"fadeIn",rootMargin:"50px",children:(0,i.jsxs)("div",{className:"ContentItem",children:[(0,i.jsx)("h2",{children:"わっつにゅー"}),r["whats-new"].map(e=>(0,i.jsxs)("div",{children:[e.date," ",e.message,(0,i.jsx)("br",{})]},e.date))]})}),(0,i.jsx)(v,{animation:"fadeIn",rootMargin:"50px",children:(0,i.jsxs)("div",{className:"ContentItem",children:[(0,i.jsx)("h2",{children:"アルバム"}),(0,i.jsx)(w,{})]})}),(0,i.jsx)(v,{animation:"fadeIn",rootMargin:"50px",children:(0,i.jsxs)("div",{className:"ContentItem",children:[(0,i.jsx)("h2",{children:"メンバー"}),(0,i.jsx)(f,{})]})}),(0,i.jsxs)("footer",{className:"App-footer",children:[(0,i.jsxs)(l(),{href:"https://twitter.com/SiReFaLa",children:[" ",(0,i.jsx)(d.fWC,{})," "]}),(0,i.jsxs)(l(),{href:"https://www.youtube.com/channel/UCsDgu7lwSxNdM1rDqcJjYlA",children:[" ",(0,i.jsx)(d.V2E,{})," "]}),(0,i.jsx)("small",{children:"\xa9しれふぁら！"})]})]})}},4654:function(){}},function(e){e.O(0,[415,445,919,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);