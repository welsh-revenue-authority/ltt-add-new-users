import{j as u,u as h,r as l,o as w,c as f,w as a,g as k,b as p,d as e,e as o,V as v,f as c,t as x,h as y}from"./index-246b1c25.js";const N=p("h1",{class:"mt-8"},"Create a password",-1),P=p("div",{class:"mb-4"},null,-1),j={__name:"ChoosePassword",setup(B){const r=u(""),d=u(""),t=u(""),V=h();function b(){r.value.length==0?t.value="Enter a password":d.value==r.value?(t.value="",V.push("/ltt-dashboard")):t.value="Passwords do not match"}return(R,s)=>{const i=l("wra-divider"),_=l("wra-text-input"),m=l("wra-button"),g=l("wra-validation-tooltip"),C=l("wra-card");return w(),f(k,{class:"pt-0 pb-3"},{default:a(()=>[p("div",null,[e(v,{"no-gutters":"",class:"pb-6"},{default:a(()=>[e(o,{lg:"2",cols:"0"}),e(o,{lg:"8",cols:"12"},{default:a(()=>[e(i,{thickness:6}),N,P,e(i,{thickness:3})]),_:1}),e(o,{lg:"2",cols:"0"})]),_:1}),e(v,{"no-gutters":""},{default:a(()=>[e(o,{lg:"2",cols:"0"}),e(o,{lg:"8",cols:"12"},{default:a(()=>[e(C,{class:"pa-10"},{default:a(()=>[e(_,{type:"password",modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=n=>r.value=n),class:"mb-2",label:"New password"},null,8,["modelValue"]),e(_,{type:"password",modelValue:d.value,"onUpdate:modelValue":s[1]||(s[1]=n=>d.value=n),class:"mb-2",label:"Confirm new password"},null,8,["modelValue"]),e(m,{color:"success",class:"mt-3 mr-2",variant:"flat",ripple:!1,onClick:s[2]||(s[2]=n=>b())},{default:a(()=>[c(" Continue ")]),_:1}),e(m,{class:"mt-3",color:"obsidian",variant:"flat",ripple:!1},{default:a(()=>[c(" Cancel ")]),_:1}),t.value!=""?(w(),f(g,{key:0,class:"mt-5",type:"wra-error"},{default:a(()=>[c(x(t.value),1)]),_:1})):y("",!0)]),_:1})]),_:1}),e(o,{lg:"2",cols:"0"})]),_:1})])]),_:1})}}};export{j as default};
