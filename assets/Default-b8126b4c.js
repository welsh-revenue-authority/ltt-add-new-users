import{C as F,V}from"./CookieAlert-c4483f4d.js";import{_ as B,a as N,r,o as d,c as g,w as t,b as o,V as m,d as f,e as l,f as i,t as c,g as a,n as w,T as b,h as W,i as P}from"./index-4450cff1.js";const D={name:"App",data:()=>({isValidBrowser:!1,cookieBanner:!0,cookieAlert:!1,flipperLang:null,appText:{cookieControl:{},toolbar:{},feedbackControl:{},breadcrumbs:[],wraLogo:{},wgLogo:{},helpGuidance:{},footer:{}}}),watch:{$route(e,s){this.cookieAlert=!1}},methods:{goToCookies:function(){this.$router.push("cookies")},getText:function(){if(document.cookie.split("; ").find(s=>s.startsWith("langControl"))){var e=document.cookie.split("; ").find(s=>s.startsWith("langControl"));this.$lang=e.split("=").pop()}N.get("/ltt-add-new-users/text/"+this.$lang+"/app.json?v=2").then(s=>{this.appText=s.data.appText})},languageFlipper:function(){this.$lang=="english"?(this.$lang="cymraeg",document.getElementsByTagName("html")[0].setAttribute("lang","cy"),this.flipperLang="en"):(this.$lang="english",document.getElementsByTagName("html")[0].setAttribute("lang","en"),this.flipperLang="cy"),this.$cookieAccept.websiteUse=="true"&&this.$gtag.event("site_settings",{set_language:this.$lang});var e=new Date;e.setFullYear(e.getFullYear()+1),document.cookie="langControl="+this.$lang+"; expires="+e.toUTCString()+";",this.getText()},cookieExist:function(){return this.$route.name=="cookies"?!0:!!document.cookie.split("; ").find(e=>e.startsWith("TmsCookieControl"))},hideAlert:function(){this.cookieAlert=!1},readControlCookie:function(){if(document.cookie.split("; ").find(p=>p.startsWith("TmsCookieControl"))){var e=document.cookie.split("; ").find(p=>p.startsWith("TmsCookieControl")),s=e.split("=").pop(),n=s.split(":");this.$cookieAccept.websiteUse=n[1],this.$cookieAccept.performance=n[3].substring(0,n[3].length-1),this.$cookieAccept.websiteUse=="true"?window["ga-disable-G-JVNWFHGQYF"]="false":window["ga-disable-G-JVNWFHGQYF"]="true"}else window["ga-disable-G-JVNWFHGQYF"]="true"}},mounted(){var e=window.navigator.userAgent;function s(){var n=e.indexOf("MSIE "),p=e.indexOf("Trident/");return n>0||p>0}s()?this.isValidBrowser=!1:(this.isValidBrowser=!0,this.getText(),this.readControlCookie()),this.$lang=="cymraeg"?this.flipperLang="en":this.$lang=="english"&&(this.flipperLang="cy")},components:{CookieAlert:F}},E=a("div",{role:"region","aria-label":"Cookies on the Welsh Revenue Authority site"},null,-1),G=a("a",{href:"#maincontent",class:"skip"},"Skip to main content",-1),H={class:"mr-4 ml-0 mb-0 footer-link-wrap"},U=["href","aria-label"],Y={class:"mr-4 ml-0 mb-0 footer-link-wrap"},I={class:"mr-4 ml-0 mb-0 footer-link-wrap"},S=["href","aria-label"],J={class:"mr-4 ml-0 mb-0 footer-link-wrap"},Q=["href","aria-label"],R={class:"mr-4 ml-0 mb-0 footer-link-wrap"},z=["href","aria-label"],M={class:"mt-5"},O={class:"mr-4 ml-0 mb-0 footer-link-wrap"},j={class:"mr-4 ml-0 mb-0 footer-link-wrap"},q={class:"mr-4 ml-0 mb-0 footer-link-wrap"},K={style:{margin:"90px 0px 0px 0px"}},X=a("p",{class:"pb-4"},[i(" Nid yw Internet Explorer yn cael ei gefnogi mwyach, cyfeiriwch at ein "),a("a",{href:"https://llyw.cymru/defnyddio-porwyr-ar-gyfer-gwasanaethau-ar-lein-awdurdod-cyllid-cymru","aria-label":"Canllawiau defnyddio porwyr ar gyfer gwasanaethau ar-lein Awdurdod Cyllid Cymru"}," canllawiau "),i(" i weld rhestr o'n porwyr a gefnogir. ")],-1),Z=a("p",null,[i(" Internet Explorer is no longer supported, please refer to our "),a("a",{href:"https://gov.wales/using-browsers-welsh-revenue-authority-online-services","aria-label":"Using browsers for Welsh Revenue Authority online services guidance"}," guidance "),i(" to see a list of our supported browsers. ")],-1);function ee(e,s,n,p,oe,k){const _=r("wra-wg-service-logo"),T=r("wra-button"),v=r("wra-app-bar"),u=r("router-view"),x=r("wra-service-logo"),C=r("wra-divider"),h=r("router-link"),L=r("wra-footer"),y=r("wra-app"),$=r("wra-validation-tooltip");return e.isValidBrowser?(d(),g(y,{key:0},{default:t(()=>[E,G,o(v,{flat:"",class:"hidden-print app-bar",height:"74",color:"#323232"},{default:t(()=>[o(m,null,{default:t(()=>[o(f,{"no-gutters":""},{default:t(()=>[o(l,{lg:"2",cols:"0",style:{"text-align":"left"}}),o(l,{lg:"4",cols:"6"},{default:t(()=>[o(_,{label:e.appText.toolbar.logoLinkText,alt:e.appText.toolbar.logoAltText,"service-logo":e.appText.toolbar.logoFilePath,href:e.appText.toolbar.logoHref},null,8,["label","alt","service-logo","href"])]),_:1}),o(l,{lg:"4",cols:"6",style:{"text-align":"right"}},{default:t(()=>[o(T,{size:"small",variant:"flat",height:"34",color:"#FFFFFF",ripple:!1,class:"language-flipper-button",onClick:k.languageFlipper,lang:e.flipperLang},{default:t(()=>[i(c(e.appText.langButton),1)]),_:1},8,["onClick","lang"])]),_:1}),o(l,{lg:"2",cols:"0"})]),_:1})]),_:1})]),_:1}),o(u,{name:"feedback",text:e.appText.feedbackControl},null,8,["text"]),a("nav",null,[o(u,{name:"breadcrumbs",crumbs:e.appText.breadcrumbs},null,8,["crumbs"])]),o(V,{id:"maincontent",tabindex:"-1",class:"pa-0"},{default:t(()=>[o(m,{class:w(["hidden-print",{"px-5":e.$vuetify.display.smAndDown}])},{default:t(()=>[o(f,{"no-gutters":""},{default:t(()=>[o(l,{lg:"2",cols:"0"}),o(l,{lg:"8",cols:"12",class:"mt-8"},{default:t(()=>[o(b,{name:"translate",mode:"out-in"},{default:t(()=>[(d(),g(x,{label:e.appText.wraLogo.logoLinkText,alt:e.appText.wraLogo.logoAltText,"service-logo":e.appText.wraLogo.logoFilePath,class:w({"wra-logo-xs-only":e.$vuetify.display.xs,"wra-logo-sm-and-up":e.$vuetify.display.smAndUp}),key:e.appText.wraLogo.logoLinkText,href:e.appText.wraLogo.logoHref},null,8,["label","alt","service-logo","class","href"]))]),_:1})]),_:1}),o(l,{lg:"2",cols:"0"})]),_:1})]),_:1},8,["class"]),o(u,null,{default:t(({Component:A})=>[o(b,{name:"translate",mode:"out-in"},{default:t(()=>[(d(),g(W(A),{lang:this.$lang,class:"mb-16"},null,8,["lang"]))]),_:2},1024)]),_:1})]),_:1}),o(L,{class:"hidden-print"},{default:t(()=>[o(m,{class:w(["py-0",{"px-0":e.$vuetify.display.smAndDown}])},{default:t(()=>[o(f,{"no-gutters":""},{default:t(()=>[o(l,{lg:"2",cols:"0"}),o(l,{lg:"8",cols:"12"},{default:t(()=>[e.appText.footer.primaryLink?(d(),g(u,{key:0,name:"primaryLink",text:e.appText.footer.primaryLink},null,8,["text"])):P("",!0)]),_:1}),o(l,{lg:"2",cols:"0"})]),_:1}),o(f,{"no-gutters":""},{default:t(()=>[o(l,{lg:"2",cols:"0"}),o(l,{lg:"8",cols:"12",class:"my-6"},{default:t(()=>[o(C,{role:"presentation",thickness:4})]),_:1}),o(l,{lg:"2",cols:"0"})]),_:1}),o(f,{"no-gutters":""},{default:t(()=>[o(l,{lg:"2",cols:"0"}),o(l,{lg:"8",cols:"12"},{default:t(()=>[a("span",H,[a("a",{class:"secondary-link",href:e.appText.footer.accessibilityLink,"aria-label":e.appText.footer.accessibilityText},c(e.appText.footer.accessibilityText),9,U)]),a("span",Y,[o(h,{to:"/cookies",class:"secondary-link","aria-label":e.appText.footer.cookiesText},{default:t(()=>[i(c(e.appText.footer.cookiesText),1)]),_:1},8,["aria-label"])]),a("span",I,[a("a",{class:"secondary-link",href:e.appText.footer.copyrightLink,"aria-label":e.appText.footer.copyrightText},c(e.appText.footer.copyrightText),9,S)]),a("span",J,[a("a",{class:"secondary-link",href:e.appText.footer.privacyLink,"aria-label":e.appText.footer.privacyText},c(e.appText.footer.privacyText),9,Q)]),a("span",R,[a("a",{class:"secondary-link",href:e.appText.footer.termsLink,"aria-label":e.appText.footer.termsText},c(e.appText.footer.termsText),9,z)]),a("div",M,[a("span",O,[o(h,{to:"/ltt/login",class:"secondary-link","aria-label":"Prototype 1"},{default:t(()=>[i(" Prototype 1 ")]),_:1})]),a("span",j,[o(h,{to:"/ltt/register",class:"secondary-link","aria-label":"Prototype 2"},{default:t(()=>[i(" Prototype 2 ")]),_:1})]),a("span",q,[o(h,{to:"/ltt",class:"secondary-link","aria-label":"Prototype 3"},{default:t(()=>[i(" Prototype 3 ")]),_:1})])]),a("div",K,[o(_,{label:e.appText.wgLogo.logoLinkText,alt:e.appText.wgLogo.logoAltText,"service-logo":e.appText.wgLogo.logoFilePath,href:e.appText.wgLogo.logoHref},null,8,["label","alt","service-logo","href"])])]),_:1}),o(l,{lg:"2",cols:"0"})]),_:1})]),_:1},8,["class"])]),_:1})]),_:1})):(d(),g(y,{key:1},{default:t(()=>[o($,{type:"wra-error",role:"alert",class:"is-valid-browser"},{default:t(()=>[X,Z]),_:1})]),_:1}))}const le=B(D,[["render",ee]]);export{le as default};