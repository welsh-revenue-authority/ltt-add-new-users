import{u as C,j as c,r,o as p,c as _,w as a,g as B,d as e,e as o,V as g,f as m,t as V,h as b,b as n}from"./index-c7640e0c.js";const N=n("h1",{class:"mt-8 mb-4"},"Sign in to file Land Transaction Tax",-1),E=n("div",{class:"mt-5"},[n("a",{target:"_blank",href:"https://google.com"}," I've forgotten my password ")],-1),L=n("div",{class:"mt-2"},[n("a",{target:"_blank",href:"https://google.com"}," I don't have an account ")],-1),I={__name:"LttLogin",setup(P){const h=C(),s=c(""),l=c(""),u=c(""),i=c("");function y(){u.value==""||u.value.includes("@")==!1?s.value="Please enter a valid email address":s.value="",i.value==""?l.value="Please enter your password":l.value="",!(s.value!=""||l.value!="")&&h.push("/ltt-dashboard")}return(S,t)=>{const v=r("wra-divider"),f=r("wra-text-input"),w=r("wra-validation-tooltip"),k=r("wra-button"),x=r("wra-card");return p(),_(B,{class:"pt-0 pb-3"},{default:a(()=>[e(g,{"no-gutters":"",class:"pb-6"},{default:a(()=>[e(o,{lg:"2",cols:"0"}),e(o,{lg:"8",cols:"12"},{default:a(()=>[e(v,{thickness:6}),N,e(v,{thickness:3})]),_:1}),e(o,{lg:"2",cols:"0"})]),_:1}),e(g,{"no-gutters":""},{default:a(()=>[e(o,{lg:"2",cols:"0"}),e(o,{lg:"8",cols:"12"},{default:a(()=>[e(x,{class:"pa-10"},{default:a(()=>[e(f,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=d=>u.value=d),class:"mb-5",label:"Email address"},null,8,["modelValue"]),s.value!=""?(p(),_(w,{key:0,class:"my-4",type:"wra-error"},{default:a(()=>[m(V(s.value),1)]),_:1})):b("",!0),e(f,{modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=d=>i.value=d),type:"password",label:"Password"},null,8,["modelValue"]),l.value!=""?(p(),_(w,{key:1,class:"my-4",type:"wra-error"},{default:a(()=>[m(V(l.value),1)]),_:1})):b("",!0),e(k,{color:"success",variant:"flat",ripple:!1,id:"nextButton",type:"submit",class:"mt-5",onClick:t[2]||(t[2]=d=>y())},{default:a(()=>[m(" Sign in ")]),_:1}),E,L]),_:1})]),_:1}),e(o,{lg:"2",cols:"0"})]),_:1})]),_:1})}}};export{I as default};
