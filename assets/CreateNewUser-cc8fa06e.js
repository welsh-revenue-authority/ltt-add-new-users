import{l as U}from"./ltt-store-39a306f4.js";import{u as x,j as _,r as i,o as n,c as m,w as o,V as A,g as v,b as l,e as d,d as b,f as u,t as c,i as f}from"./index-5f322199.js";const B=v("h1",{class:"mt-8"},"Create a new user",-1),$=v("div",{class:"mb-4"}," Once a new user is created, they will be sent an email with a link inviting them to finish creating their account. ",-1),R={style:{width:"300px"}},S=v("div",{class:"mt-3"},"User type",-1),W=v("div",{class:"mt-3"},"Invite email sent in:",-1),I={__name:"CreateNewUser",setup(j){const h=U(),E=x(),a=_({firstName:"",lastName:"",email:"",confirmEmail:"",type:"",status:""}),e=_({firstName:"",lastName:"",email:"",confirmEmail:"",type:"",status:"Active"}),N=_("English");function C(){let r=0;e.value.firstName.length==0?(r++,a.value.firstName="Enter a first name"):a.value.firstName="",e.value.lastName.length==0?(r++,a.value.lastName="Enter a last name"):a.value.lastName="",e.value.email.length==0||e.value.email.includes("@")==!1?(r++,a.value.email="Enter a valid email address"):a.value.email="",e.value.email!=e.value.confirmEmail?(r++,a.value.confirmEmail="Email addresses do not match"):a.value.confirmEmail="",e.value.type.length==0?(r++,a.value.type="Choose user type"):a.value.type="",e.value.type.length==0?(r++,a.value.type="Choose user type"):a.value.type="",!(r>0)&&(h.users.push({name:e.value.firstName+" "+e.value.lastName,email:e.value.email,type:e.value.type,status:e.value.status}),E.push({name:"user-details",params:{name:e.value.firstName+" "+e.value.lastName,email:e.value.email,type:e.value.type,status:e.value.status}}))}return(r,t)=>{const V=i("wra-divider"),y=i("wra-text-input"),p=i("wra-validation-tooltip"),w=i("wra-radio-group"),g=i("wra-button"),k=i("wra-card");return n(),m(A,{class:"pt-0 pb-3"},{default:o(()=>[v("div",null,[l(b,{"no-gutters":"",class:"pb-6"},{default:o(()=>[l(d,{lg:"2",cols:"0"}),l(d,{lg:"8",cols:"12"},{default:o(()=>[l(V,{thickness:6}),B,$,l(V,{thickness:3})]),_:1}),l(d,{lg:"2",cols:"0"})]),_:1}),l(b,{"no-gutters":""},{default:o(()=>[l(d,{lg:"2",cols:"0"}),l(d,{lg:"8",cols:"12"},{default:o(()=>[l(k,{class:"pa-10"},{default:o(()=>[v("div",R,[l(y,{class:"mb-2",label:"First name",modelValue:e.value.firstName,"onUpdate:modelValue":t[0]||(t[0]=s=>e.value.firstName=s)},null,8,["modelValue"]),a.value.firstName!=""?(n(),m(p,{key:0,class:"my-4",type:"wra-error"},{default:o(()=>[u(c(a.value.firstName),1)]),_:1})):f("",!0),l(y,{class:"mb-2",label:"Last name",modelValue:e.value.lastName,"onUpdate:modelValue":t[1]||(t[1]=s=>e.value.lastName=s)},null,8,["modelValue"]),a.value.lastName!=""?(n(),m(p,{key:1,class:"my-4",type:"wra-error"},{default:o(()=>[u(c(a.value.lastName),1)]),_:1})):f("",!0),l(y,{class:"mb-2",label:"Email address",modelValue:e.value.email,"onUpdate:modelValue":t[2]||(t[2]=s=>e.value.email=s)},null,8,["modelValue"]),a.value.email!=""?(n(),m(p,{key:2,class:"my-4",type:"wra-error"},{default:o(()=>[u(c(a.value.email),1)]),_:1})):f("",!0),l(y,{class:"mb-2",label:"Confirm email address",modelValue:e.value.confirmEmail,"onUpdate:modelValue":t[3]||(t[3]=s=>e.value.confirmEmail=s)},null,8,["modelValue"]),a.value.confirmEmail!=""?(n(),m(p,{key:3,class:"my-4",type:"wra-error"},{default:o(()=>[u(c(a.value.confirmEmail),1)]),_:1})):f("",!0),S,l(w,{class:"mb-5",modelValue:e.value.type,"onUpdate:modelValue":t[4]||(t[4]=s=>e.value.type=s),options:[{label:"Administrator",value:"Administrator"},{label:"User",value:"User"}]},null,8,["modelValue"]),a.value.type!=""?(n(),m(p,{key:4,class:"my-4",type:"wra-error"},{default:o(()=>[u(c(a.value.type),1)]),_:1})):f("",!0),W,l(w,{class:"mb-5",modelValue:N.value,"onUpdate:modelValue":t[5]||(t[5]=s=>N.value=s),options:[{label:"English",value:"English"},{label:"Welsh",value:"Welsh"}]},null,8,["modelValue"]),l(g,{color:"obsidian",variant:"flat",ripple:!1,class:"mr-3",onClick:t[6]||(t[6]=s=>C())},{default:o(()=>[u(" Create ")]),_:1}),l(g,{color:"obsidian",variant:"flat",ripple:!1,onClick:t[7]||(t[7]=s=>r.$router.push("/ltt-dashboard/manage-users"))},{default:o(()=>[u(" Cancel ")]),_:1})])]),_:1})]),_:1}),l(d,{lg:"2",cols:"0"})]),_:1})])]),_:1})}}};export{I as default};
