import{j as d,r as s,o as g,c as h,w as t,g as w,d as e,e as a,f as r,V as u,b as n}from"./index-e2a47460.js";const y={class:"bg-grey-lighten-3 pa-5 mt-2"},B={__name:"Dashboard",setup(v){const c=d([{title:"UTRN",align:"start",key:"utrn"},{title:"Buyer",key:"buyer"},{title:"Address",key:"address"},{title:"Return status",key:"returnStatus"},{title:"Date submitted",key:"dateSubmitted"}]),_=d([{utrn:"123456789",buyer:"John Smith",address:"1 High Street, Cardiff, CF10 1AA",returnStatus:"Submitted",dateSubmitted:"01/01/2021"}]);return(p,o)=>{const i=s("wra-divider"),m=s("wra-subheader"),b=s("wra-header"),l=s("wra-button"),f=s("wra-data-table");return g(),h(w,{class:"pt-0 pb-3"},{default:t(()=>[e(u,{"no-gutters":"",class:"pb-6"},{default:t(()=>[e(a,{lg:"2",cols:"0"}),e(a,{lg:"8",cols:"12"},{default:t(()=>[e(i,{thickness:6}),e(m,{class:"mt-8"},{default:t(()=>[r(" Land Transaction Tax ")]),_:1}),e(b,{size:"h1",class:"mb-4"},{default:t(()=>[r("Dashboard")]),_:1}),e(i,{thickness:2})]),_:1}),e(a,{lg:"2",cols:"0"})]),_:1}),e(u,{"no-gutters":""},{default:t(()=>[e(a,{lg:"2",cols:"0"}),e(a,{lg:"8"},{default:t(()=>[n("div",null,[e(l,{color:"obsidian",size:"x-large",variant:"flat",ripple:!1,id:"nextButton",type:"submit"},{default:t(()=>[r(" Operational updates ")]),_:1}),e(l,{color:"obsidian",size:"x-large",variant:"flat",class:"ml-5",ripple:!1,id:"nextButton",type:"submit",onClick:o[0]||(o[0]=k=>p.$router.push("/ltt-dashboard/manage-users"))},{default:t(()=>[r(" Manage online users ")]),_:1})]),n("div",y,[e(l,{color:"primary",size:"x-large",variant:"flat",ripple:!1,id:"nextButton",type:"submit"},{default:t(()=>[r(" File a new return ")]),_:1})]),n("div",null,[e(f,{items:_.value,headers:c.value},null,8,["items","headers"])])]),_:1}),e(a,{lg:"2",cols:"0"})]),_:1})]),_:1})}}};export{B as default};
