import{l as b}from"./ltt-store-715a3179.js";import{_ as h,j as v,r as o,o as k,c as y,w as a,g as C,d as e,e as s,f as l,V as _,b as i,z as x,t as V,A as $,B}from"./index-fff2574a.js";const S=r=>($("data-v-a211f499"),r=r(),B(),r),z=S(()=>i("h4",{class:"mb-4"},"Your organisation registration number: 17318982",-1)),I=["onClick"],U={__name:"ManageOnlineUsers",setup(r){const p=b(),m=v([{title:"Full name",align:"start",key:"name"},{title:"Email address",key:"email"},{title:"User type",key:"type"},{title:"Account status",key:"status"}]);return(d,n)=>{const c=o("wra-divider"),f=o("wra-subheader"),w=o("wra-header"),u=o("wra-button"),g=o("wra-data-table");return k(),y(C,{class:"pt-0 pb-3"},{default:a(()=>[e(_,{"no-gutters":"",class:"pb-6"},{default:a(()=>[e(s,{lg:"2",cols:"0"}),e(s,{lg:"8",cols:"12"},{default:a(()=>[e(c,{thickness:6}),e(f,{class:"mt-8"},{default:a(()=>[l(" Land Transaction Tax ")]),_:1}),e(w,{size:"h1"},{default:a(()=>[l("Your online users")]),_:1}),z,e(c,{thickness:2})]),_:1}),e(s,{lg:"2",cols:"0"})]),_:1}),e(_,{"no-gutters":""},{default:a(()=>[e(s,{lg:"2",cols:"0"}),e(s,{lg:"8"},{default:a(()=>[i("div",null,[e(u,{color:"obsidian",class:"mb-3 mr-2",size:"x-large",variant:"flat",ripple:!1,id:"nextButton",type:"submit",onClick:n[0]||(n[0]=t=>d.$router.push("/ltt-dashboard/create-user"))},{default:a(()=>[l(" Create new user ")]),_:1}),e(u,{color:"obsidian",class:"mb-3",size:"x-large",variant:"flat",ripple:!1,onClick:n[1]||(n[1]=t=>d.$router.push("/ltt-dashboard"))},{default:a(()=>[l(" Return ")]),_:1})]),i("div",null,[e(g,{items:x(p).users,headers:m.value},{"item.name":a(({item:t})=>[i("div",{class:"link",onClick:A=>d.$router.push({name:"user-details",params:{name:t.raw.name,email:t.raw.email,type:t.raw.type,status:t.raw.status,newAccount:"false"}})},V(t.raw.name),9,I)]),_:1},8,["items","headers"])])]),_:1}),e(s,{lg:"2",cols:"0"})]),_:1})]),_:1})}}},O=h(U,[["__scopeId","data-v-a211f499"]]);export{O as default};