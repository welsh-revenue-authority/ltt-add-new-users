import{_ as h,r as n,o as w,c as V,w as a,g as v,d as e,e as i,f as s,V as g,b as r}from"./index-c7640e0c.js";const y={data(){return{agentName:"",postcode:"",telephoneNumber:"",languagePreference:""}}},N=r("p",null," All the information entered here relates to the organisation. All fields are required unless stated optional. ",-1),x=r("p",null,[s(" Please note that you can only register your organisation once. If you're unsure, please "),r("a",{target:"https://google.com"},"contact us.")],-1),C={class:"d-inline-flex"},A=r("p",{class:"mb-4"},"Enter address manually",-1);function k(p,l,B,P,t,U){const c=n("wra-divider"),_=n("wra-subheader"),m=n("wra-header"),d=n("wra-text-input"),u=n("wra-button"),f=n("wra-radio-group"),b=n("wra-card");return w(),V(v,{class:"pt-0 pb-3"},{default:a(()=>[e(g,{"no-gutters":"",class:"pb-6"},{default:a(()=>[e(i,{lg:"2",cols:"0"}),e(i,{lg:"8",cols:"12"},{default:a(()=>[e(c,{thickness:6}),e(_,{class:"mt-8"},{default:a(()=>[s(" Welsh Revenue Authority ")]),_:1}),e(m,{size:"h2",class:"mb-4"},{default:a(()=>[s(" Register your agent organisation to file Land Transaction Tax online ")]),_:1}),e(c,{thickness:1})]),_:1}),e(i,{lg:"2",cols:"0"})]),_:1}),e(g,{"no-gutters":""},{default:a(()=>[e(i,{lg:"2",cols:"0"}),e(i,{ol:"",lg:"8",cols:"12"},{default:a(()=>[e(b,{class:"pa-10"},{default:a(()=>[r("div",null,[e(m,{size:"h3",class:"mb-1"},{default:a(()=>[s(" Agent details ")]),_:1}),N,x]),r("div",null,[e(d,{class:"mb-2",label:"Agent name",modelValue:t.agentName,"onUpdate:modelValue":l[0]||(l[0]=o=>t.agentName=o)},null,8,["modelValue"]),r("div",C,[e(d,{class:"mb-2",label:"Postcode",modelValue:t.postcode,"onUpdate:modelValue":l[1]||(l[1]=o=>t.postcode=o),hint:"asd"},null,8,["modelValue"]),e(u,{class:"mt-6 ml-3",color:"primary",size:"x-large",variant:"flat",ripple:!1,"append-icon":"mdi-magnify",onClick:l[2]||(l[2]=o=>p.findAddress())},{default:a(()=>[s(" Find address ")]),_:1})]),A]),e(d,{class:"mb-2",label:"Company/head office telephone number",modelValue:t.telephoneNumber,"onUpdate:modelValue":l[3]||(l[3]=o=>t.telephoneNumber=o)},null,8,["modelValue"]),e(f,{class:"mb-5",modelValue:t.languagePreference,"onUpdate:modelValue":l[4]||(l[4]=o=>t.languagePreference=o),options:[{label:"English",value:"English"},{label:"Welsh",value:"Welsh"},{label:"Bilingual",value:"Bilingual"}],label:"User type",groupName:"what",hint:"what"},null,8,["modelValue"]),e(u,{color:"obsidian",variant:"flat",ripple:!1,class:"mr-3",onClick:l[5]||(l[5]=o=>p.$router.push("/ltt/agent-details"))},{default:a(()=>[s(" Next ")]),_:1}),e(u,{color:"obsidian",variant:"flat",ripple:!1},{default:a(()=>[s(" Cancel ")]),_:1})]),_:1})]),_:1}),e(i,{lg:"2",cols:"0"})]),_:1})]),_:1})}const z=h(y,[["render",k]]);export{z as default};
