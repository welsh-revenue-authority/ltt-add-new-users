import{j as c,u as h,r as l,o as w,c as f,w as a,g as k,b as d,d as e,e as t,V as v,f as i,t as x,h as y}from"./index-e2a47460.js";const N=d("h1",{class:"mt-8"},"Create a password",-1),P=d("div",{class:"mb-4"},null,-1),B={style:{width:"500px"}},D={__name:"ChoosePassword",setup(R){const r=c(""),u=c(""),o=c(""),V=h();function b(){r.value.length==0?o.value="Enter a password":u.value==r.value?(o.value="",V.push("/ltt-dashboard")):o.value="Passwords do not match"}return(U,s)=>{const p=l("wra-divider"),_=l("wra-text-input"),g=l("wra-validation-tooltip"),m=l("wra-button"),C=l("wra-card");return w(),f(k,{class:"pt-0 pb-3"},{default:a(()=>[d("div",null,[e(v,{"no-gutters":"",class:"pb-6"},{default:a(()=>[e(t,{lg:"2",cols:"0"}),e(t,{lg:"8",cols:"12"},{default:a(()=>[e(p,{thickness:6}),N,P,e(p,{thickness:3})]),_:1}),e(t,{lg:"2",cols:"0"})]),_:1}),e(v,{"no-gutters":""},{default:a(()=>[e(t,{lg:"2",cols:"0"}),e(t,{lg:"8",cols:"12"},{default:a(()=>[e(C,{class:"pa-10"},{default:a(()=>[d("div",B,[e(_,{type:"password",modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=n=>r.value=n),class:"mb-2",label:"New password"},null,8,["modelValue"]),o.value!=""?(w(),f(g,{key:0,class:"my-4",type:"wra-error"},{default:a(()=>[i(x(o.value),1)]),_:1})):y("",!0),e(_,{type:"password",modelValue:u.value,"onUpdate:modelValue":s[1]||(s[1]=n=>u.value=n),class:"mb-2",label:"Confirm new password"},null,8,["modelValue"]),e(m,{color:"success",class:"mt-3 mr-2",variant:"flat",ripple:!1,onClick:s[2]||(s[2]=n=>b())},{default:a(()=>[i(" Continue ")]),_:1}),e(m,{class:"mt-3",color:"obsidian",variant:"flat",ripple:!1},{default:a(()=>[i(" Cancel ")]),_:1})])]),_:1})]),_:1}),e(t,{lg:"2",cols:"0"})]),_:1})])]),_:1})}}};export{D as default};
