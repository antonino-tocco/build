_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{GMVU:function(e,n,t){"use strict";t.r(n);var a=t("o0o1"),i=t.n(a),o=t("HaE+"),l=t("ODXe"),c=t("q1tI"),r=t("TLva"),s=t("nSCH"),d=t("hDQs"),u=t("XCzZ"),v=c.createElement,g=c.useEffect;c.useState;n.default=function(){var e,n=c.useState({}),t=Object(l.a)(n,2),a=t[0],p=t[1],m=c.useState(!1),f=Object(l.a)(m,2),h=f[0],_=f[1],b=c.useState(""),C=Object(l.a)(b,2),N=C[0],S=C[1],w=function(){var e=Object(o.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.b)();case 2:n=e.sent,p(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(e){_(!0),S(e)};return g((function(){w()}),[]),v(r.a,{headerCarousel:a.header_carousel,fixedHeader:!0,transparentHeader:!0,openImageCreditsDialog:x},(null!==(e=null===a||void 0===a?void 0:a.sections)&&void 0!==e?e:[]).map((function(e,n){return function(e,n){var t;return v(s.a,{sectionData:e,openImageCreditsDialog:x,variant:e.variant?e.variant:n%2===0?"light":"dark",asContainer:null!==(t=null===e||void 0===e?void 0:e.asContainer)&&void 0!==t&&t})}(e,n)})),v(u.a,{open:h,content:N,onClose:function(){_(!1),_(null)}}))}},XCzZ:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("q1tI"),i=t.n(a),o=t("Zq3K"),l=t("Uv/k"),c=i.a.createElement;function r(e){var n=e.open,t=e.content,a=e.onClose;return c(o.a,{open:n,maxWidth:"lg",title:"Credits",onClose:a},t?c(l.a,{content:t,style:{paddingBottom:20}}):null)}},nSCH:function(e,n,t){"use strict";var a=t("o0o1"),i=t.n(a),o=t("HaE+"),l=t("q1tI"),c=t("nOHt"),r=t("ofer"),s=t("rqmy"),d=t("YK1M"),u=t("pNLH"),v=t.n(u),g=t("d0Tl"),p=t("Uv/k"),m=t("N39q"),f=l.createElement;n.a=function(e){var n,t,a,l,u=e.sectionData,h=e.variant,_=void 0===h?"light":h,b=e.asContainer,C=void 0!==b&&b,N=e.openImageCreditsDialog,S=Object(c.useRouter)(),w=function(){var e=Object(o.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=7;break}if(!n.startsWith("http")){e.next=5;break}window.open(n),e.next=7;break;case 5:return e.next=7,S.push(n);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x={fontSize:null!==(n=null===u||void 0===u?void 0:u.fontSize)&&void 0!==n?n:m.a.SECTIONS.mainContentTextStyle.fontSize,textAlign:null!==(t=null===u||void 0===u?void 0:u.textAlign)&&void 0!==t?t:m.a.SECTIONS.mainContentTextStyle.textAlign};return f("section",{id:u.id,className:"".concat(v.a["page-section"]," ").concat(v.a[_])},f("div",{className:v.a["page-section-main-container"]},Object(s.b)(null===u||void 0===u?void 0:u.header)?f("div",{className:v.a["page-section-header"]},f(r.a,{variant:"h5",align:"center",gutterBottom:!0,className:v.a["page-section-header-label"]},u.header),f("div",{className:v.a["page-section-header-divider"]})):null,Object(s.b)(null===u||void 0===u?void 0:u.content)?f("div",{className:"row",style:{marginTop:10}},f("div",{className:"col-12"},f(p.a,{content:null!==(a=u.content)&&void 0!==a?a:"",style:x}))):null,(null!==(l=null===u||void 0===u?void 0:u.rows)&&void 0!==l?l:[]).map((function(e){var n,t,a,i,o,l,c={fontSize:null!==(n=null===e||void 0===e?void 0:e.fontSize)&&void 0!==n?n:m.a.SECTIONS.rowContentTextStyle.fontSize,textAlign:null!==(t=null===e||void 0===e?void 0:e.textAlign)&&void 0!==t?t:m.a.SECTIONS.mainContentTextStyle.textAlign},u=(null!==(a=e.columns)&&void 0!==a?a:[]).length>0?"col-".concat(Math.ceil(12/(null!==(i=e.columns)&&void 0!==i?i:[]).length)):"col-12";return f("div",{className:C?"container":null,id:null!==(o=null===e||void 0===e?void 0:e.id)&&void 0!==o?o:""},f("div",{className:"row",style:{marginTop:20}},f("div",{className:"col-12"},Object(s.b)(e.header)?f(r.a,{variant:"h6",gutterBottom:!0,className:v.a["page-section-sub-header"]},e.header):null)),f("div",{className:"row",style:{marginTop:20}},(null!==(l=e.columns)&&void 0!==l?l:[]).map((function(e){var n,t,a,i,o,l;return f("div",{className:u},Object(s.b)(e.content)?f("div",{className:"row"},f("div",{className:"col-12"},f(p.a,{content:null!==(n=null===e||void 0===e?void 0:e.content)&&void 0!==n?n:"",style:c}))):null,(null===e||void 0===e?void 0:e.image)?f("div",{className:"row"},f("div",{className:"col-12 text-center"},f("div",{style:{position:"relative",display:"inline-block"}},f("img",{src:Object(g.a)(null===e||void 0===e?void 0:e.image),style:{maxWidth:null!==(t=null===e||void 0===e||null===(a=e.image)||void 0===a?void 0:a.maxWidth)&&void 0!==t?t:null===(i=m.a.SECTIONS.rowContentImageStyle)||void 0===i?void 0:i.maxWidth,width:"100%"}}),(null===e||void 0===e||null===(o=e.image)||void 0===o?void 0:o.imageCreditsLabel)?f("div",{className:v.a["page-section-col-image-credits-label"],onClick:function(){var n;return N(null===e||void 0===e||null===(n=e.image)||void 0===n?void 0:n.imageCreditsContent)}},f("span",null,null===e||void 0===e||null===(l=e.image)||void 0===l?void 0:l.imageCreditsLabel)):null))):null)})),e.cta?f("div",{className:"col-12 text-center",style:{marginTop:40}},f(d.a,{onClick:function(){var n;return w(null===e||void 0===e||null===(n=e.cta)||void 0===n?void 0:n.url)},variant:"primary",style:{margin:"0 auto",fontSize:16},isCta:!0},e.cta.label)):null))}))))}},pNLH:function(e,n,t){e.exports={"page-section":"page-section_page-section__3rbo5",light:"page-section_light__KY3Zx","page-section-sub-header":"page-section_page-section-sub-header__2PZhA",dark:"page-section_dark__12WnX","page-section-header":"page-section_page-section-header__1aSgU","page-section-header-label":"page-section_page-section-header-label__3O2wU","page-section-main-container":"page-section_page-section-main-container__1uiC6","page-section-header-divider":"page-section_page-section-header-divider__2JDjB","page-section-col-image-credits-label":"page-section_page-section-col-image-credits-label__f7_Lx"}},swl2:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_index",function(){return t("GMVU")}])}},[["swl2",1,2,6,0,3,4,5,7,8,10]]]);