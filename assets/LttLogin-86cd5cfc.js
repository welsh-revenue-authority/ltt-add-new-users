import{u as C,j as c,r as n,o as _,c as p,w as a,g as B,d as e,e as o,V as w,f as m,t as V,h as b,b as r}from"./index-51b7839e.js";const N=r("h1",{class:"mt-8 mb-4"},"Sign in to file Land Transaction Tax",-1),E=r("div",{class:"mt-5"},[r("a",{target:"_blank",href:"https://google.com"}," I've forgotten my password ")],-1),L=r("div",{class:"mt-2"},[r("a",{target:"_blank",href:"https://google.com"}," I don't have an account ")],-1),I={__name:"LttLogin",setup(P){const h=C(),l=c(""),s=c(""),u=c(""),i=c("");function k(){u.value==""||u.value.includes("@")==!1?l.value="Please enter a valid email address":l.value="",i.value==""?s.value="Please enter your password":s.value="",!(l.value!=""||s.value!="")&&h.push("/ltt-dashboard")}return(S,t)=>{const v=n("wra-divider"),f=n("wra-text-input"),g=n("wra-validation-tooltip"),y=n("wra-button"),x=n("wra-card");return _(),p(B,{class:"pt-0 pb-3"},{default:a(()=>[e(w,{"no-gutters":"",class:"pb-6"},{default:a(()=>[e(o,{lg:"2",cols:"0"}),e(o,{lg:"8",cols:"12"},{default:a(()=>[e(v,{thickness:6}),N,e(v,{thickness:3})]),_:1}),e(o,{lg:"2",cols:"0"})]),_:1}),e(w,{"no-gutters":""},{default:a(()=>[e(o,{lg:"2",cols:"0"}),e(o,{lg:"8",cols:"12"},{default:a(()=>[e(x,{class:"pa-10"},{default:a(()=>[e(f,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=d=>u.value=d),class:"mb-5",label:"Email address"},null,8,["modelValue"]),l.value!=""?(_(),p(g,{key:0,class:"my-4",type:"wra-error"},{default:a(()=>[m(V(l.value),1)]),_:1})):b("",!0),e(f,{modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=d=>i.value=d),label:"Password"},null,8,["modelValue"]),s.value!=""?(_(),p(g,{key:1,class:"my-4",type:"wra-error"},{default:a(()=>[m(V(s.value),1)]),_:1})):b("",!0),e(y,{color:"success",variant:"flat",ripple:!1,id:"nextButton",type:"submit",class:"mt-5",onClick:t[2]||(t[2]=d=>k())},{default:a(()=>[m(" Sign in ")]),_:1}),E,L]),_:1})]),_:1}),e(o,{lg:"2",cols:"0"})]),_:1})]),_:1})}}};export{I as default};
