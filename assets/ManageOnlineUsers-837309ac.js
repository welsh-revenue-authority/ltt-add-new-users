import{l as g}from"./ltt-store-f34dfead.js";import{_ as h,j as v,r as o,o as k,c as y,w as a,g as C,d as e,e as s,f as l,V as _,b as c,z as x,t as V,A as $,B}from"./index-c7640e0c.js";const S=r=>($("data-v-dac1ccb0"),r=r(),B(),r),z=S(()=>c("h4",{class:"mb-4"},"Your organisation registration number: 17318982",-1)),I=["onClick"],U={__name:"ManageOnlineUsers",setup(r){const p=g(),m=v([{title:"Full name",align:"start",key:"name"},{title:"Email address",key:"email"},{title:"User type",key:"type"},{title:"Account status",key:"status"}]);return(d,n)=>{const i=o("wra-divider"),b=o("wra-subheader"),f=o("wra-header"),u=o("wra-button"),w=o("wra-data-table");return k(),y(C,{class:"pt-0 pb-3"},{default:a(()=>[e(_,{"no-gutters":"",class:"pb-6"},{default:a(()=>[e(s,{lg:"2",cols:"0"}),e(s,{lg:"8",cols:"12"},{default:a(()=>[e(i,{thickness:6}),e(b,{class:"mt-8"},{default:a(()=>[l(" Land Transaction Tax ")]),_:1}),e(f,{size:"h1"},{default:a(()=>[l("Your online users")]),_:1}),z,e(i,{thickness:2})]),_:1}),e(s,{lg:"2",cols:"0"})]),_:1}),e(_,{"no-gutters":""},{default:a(()=>[e(s,{lg:"2",cols:"0"}),e(s,{lg:"8"},{default:a(()=>[c("div",null,[e(u,{color:"obsidian",class:"mb-3 mr-2",size:"x-large",variant:"flat",ripple:!1,id:"nextButton",type:"submit",onClick:n[0]||(n[0]=t=>d.$router.push("/ltt-dashboard/create-user"))},{default:a(()=>[l(" Create new user ")]),_:1}),e(u,{color:"obsidian",class:"mb-3",size:"x-large",variant:"flat",ripple:!1,onClick:n[1]||(n[1]=t=>d.$router.push("/ltt-dashboard"))},{default:a(()=>[l(" Return to dashboard ")]),_:1})]),c("div",null,[e(w,{items:x(p).users,headers:m.value},{"item.name":a(({item:t})=>[c("div",{class:"link",onClick:A=>d.$router.push({name:"user-details",params:{name:t.raw.name,email:t.raw.email,type:t.raw.type,status:t.raw.status,newAccount:"false"}})},V(t.raw.name),9,I)]),_:1},8,["items","headers"])])]),_:1}),e(s,{lg:"2",cols:"0"})]),_:1})]),_:1})}}},O=h(U,[["__scopeId","data-v-dac1ccb0"]]);export{O as default};
