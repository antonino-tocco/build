_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"30+C":function(t,e,a){"use strict";var n=a("wx14"),r=a("Ff2n"),c=a("q1tI"),o=(a("17x9"),a("iuhU")),i=a("kKAo"),s=a("H2TA"),u=c.forwardRef((function(t,e){var a=t.classes,s=t.className,u=t.raised,l=void 0!==u&&u,f=Object(r.a)(t,["classes","className","raised"]);return c.createElement(i.a,Object(n.a)({className:Object(o.a)(a.root,s),elevation:l?8:1,ref:e},f))}));e.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(u)},K1Fl:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/data",function(){return a("uoB9")}])},RQJL:function(t,e,a){t.exports={"page-container":"page_page-container__3LRmt"}},kzYg:function(t,e,a){"use strict";a.d(e,"g",(function(){return d})),a.d(e,"h",(function(){return p})),a.d(e,"e",(function(){return m})),a.d(e,"f",(function(){return v})),a.d(e,"a",(function(){return h})),a.d(e,"c",(function(){return b})),a.d(e,"b",(function(){return y})),a.d(e,"d",(function(){return x}));var n=a("o0o1"),r=a.n(n),c=a("HaE+"),o=a("vDqi"),i=a.n(o),s=null!=="https://facility-hub.cineca.it"?"https://facility-hub.cineca.it":"http://localhost:5000",u={filters:function(t){return"/filters/".concat(t)},types:function(t){return"/types/".concat(t)},datasets:function(){return"/search/dataset"},models:function(){return"/search/model"}},l={datasets:function(){return"/download/dataset"},models:function(){return"/download/model"}},f=function(t){try{return t&&200===t.status?t.data:null}catch(e){throw e}},d=function(){var t=Object(c.a)(r.a.mark((function t(e){var a,n,c,o,l,d,p,m,v,h;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.data_type,n=void 0===a?null:a,c=e.query,o=e.filters,l=e.page,d=void 0===l?0:l,p=e.hitsPerPage,m=void 0===p?20:p,v="".concat(s).concat(u.datasets(),"/").concat(d,"/").concat(m),t.prev=2,t.next=5,i.a.post(v,{data_type:n,query:c,filters:o});case 5:return h=t.sent,t.abrupt("return",f(h));case 9:t.prev=9,t.t0=t.catch(2),console.error("@@@@error retrieving datasets"),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(r.a.mark((function t(e){var a,n,c,o,l,d,p,m;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.query,n=e.filters,c=e.page,o=void 0===c?0:c,l=e.hitsPerPage,d=void 0===l?20:l,p="".concat(s).concat(u.models(),"/").concat(o,"/").concat(d),t.prev=2,t.next=5,i.a.post(p,{query:a,filters:n});case 5:return m=t.sent,t.abrupt("return",f(m));case 9:t.prev=9,t.t0=t.catch(2),console.error("@@@@error retrieving datasets"),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(c.a)(r.a.mark((function t(e){var a,n,c,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.indexName,n=e.type,c="".concat(s).concat(u.filters(a)),n&&(c="".concat(c,"/").concat(n)),t.prev=3,t.next=6,i.a.get(c);case 6:return o=t.sent,t.abrupt("return",f(o));case 10:t.prev=10,t.t0=t.catch(3),console.error("@@@@error retrieving data filters"),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(c.a)(r.a.mark((function t(e){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(s).concat(u.types(e)),t.prev=1,t.next=4,i.a.get(a);case 4:return n=t.sent,t.abrupt("return",f(n));case 8:t.prev=8,t.t0=t.catch(1),console.error("@@@@@error retrieving data types"),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),h=function(t){var e="".concat(s).concat(l.datasets(),"/all");return t&&t.trim().length>0&&(e+="?data_type=".concat(t)),e},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e="".concat(s).concat(l.datasets(),"?ids=").concat(t.join(","));return e},y=function(){return"".concat(s).concat(l.datasets(),"/all")},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e="".concat(s).concat(l.datasets(),"?ids=").concat(t.join(","));return e}},"oa/T":function(t,e,a){"use strict";var n=a("wx14"),r=a("Ff2n"),c=a("q1tI"),o=(a("17x9"),a("iuhU")),i=a("H2TA"),s=c.forwardRef((function(t,e){var a=t.classes,i=t.className,s=t.component,u=void 0===s?"div":s,l=Object(r.a)(t,["classes","className","component"]);return c.createElement(u,Object(n.a)({className:Object(o.a)(a.root,i),ref:e},l))}));e.a=Object(i.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},"rh/9":function(t,e,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("R/WZ"),o=a("wx14"),i=a("Ff2n"),s=(a("17x9"),a("iuhU")),u=a("H2TA"),l=a("NqtD"),f=n.forwardRef((function(t,e){var a=t.classes,r=t.className,c=t.color,u=void 0===c?"primary":c,f=t.disableShrink,d=void 0!==f&&f,p=t.size,m=void 0===p?40:p,v=t.style,h=t.thickness,b=void 0===h?3.6:h,y=t.value,x=void 0===y?0:y,w=t.variant,g=void 0===w?"indeterminate":w,k=Object(i.a)(t,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),N={},j={},O={};if("determinate"===g||"static"===g){var _=2*Math.PI*((44-b)/2);N.strokeDasharray=_.toFixed(3),O["aria-valuenow"]=Math.round(x),N.strokeDashoffset="".concat(((100-x)/100*_).toFixed(3),"px"),j.transform="rotate(-90deg)"}return n.createElement("div",Object(o.a)({className:Object(s.a)(a.root,r,"inherit"!==u&&a["color".concat(Object(l.a)(u))],{determinate:a.determinate,indeterminate:a.indeterminate,static:a.static}[g]),style:Object(o.a)({width:m,height:m},j,v),ref:e,role:"progressbar"},O,k),n.createElement("svg",{className:a.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},n.createElement("circle",{className:Object(s.a)(a.circle,d&&a.circleDisableShrink,{determinate:a.circleDeterminate,indeterminate:a.circleIndeterminate,static:a.circleStatic}[g]),style:N,cx:44,cy:44,r:(44-b)/2,fill:"none",strokeWidth:b})))})),d=Object(u.a)((function(t){return{root:{display:"inline-block"},static:{transition:t.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:t.transitions.create("transform")},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:t.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:t.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(f),p=r.a.createElement,m=Object(c.a)((function(t){return{container:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.2)",zIndex:10},spinnerContainer:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},spinner:{color:"#333"}}}));e.a=function(){var t=m();return p("div",{className:t.container},p("div",{className:t.spinnerContainer},p(d,{className:t.spinner})))}},uoB9:function(t,e,a){"use strict";a.r(e);var n=a("o0o1"),r=a.n(n),c=a("HaE+"),o=a("ODXe"),i=a("q1tI"),s=a("nOHt"),u=a("kzYg"),l=a("TLva"),f=a("RQJL"),d=a.n(f),p=a("ofer"),m=a("rh/9"),v=a("hDQs"),h=a("R/WZ"),b=a("30+C"),y=a("oa/T"),x=a("/RtB"),w=a("vAif"),g=i.createElement,k=Object(h.a)((function(t){return{root:{borderRadius:5,boxShadow:"0px 0px 15px rgba(0, 0, 0, 0.15)",cursor:"pointer"},content:{display:"flex",flexDirection:"column",padding:"0 !important",justifyContent:"center"},mainContent:{flexGrow:1},title:{color:"#fff",fontFamily:"Titillium Web, sans-serif",fontSize:"24px",textTransform:"uppercase"}}})),N=function(t){var e=t.type,a=t.action,n=k(),o=function(){var t=Object(c.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a&&a(e);case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return g(b.a,{onClick:function(){return o()},className:"".concat(n.root," ").concat(w["datatype-cta-button"]," ").concat(w["button-primary"])},g(y.a,{className:n.content},g("div",{className:"".concat(n.mainContent)},g("div",{className:"".concat(w["children-container"]," ").concat(w["cta-container"])},g(p.a,{variant:"subtitle1",className:n.title},e)),g("div",{className:"".concat(w["arrow-container"])},g(x.a,{htmlColor:"#fff",fontSize:"large"})))))},j=i.createElement;e.default=function(){var t=Object(s.useRouter)(),e=i.useState(!0),a=Object(o.a)(e,2),n=a[0],f=a[1],h=i.useState({}),b=Object(o.a)(h,2),y=b[0],x=b[1],w=i.useState([]),g=Object(o.a)(w,2),k=g[0],O=g[1];Object(i.useEffect)((function(){_()}),[]);var _=function(){var t=Object(c.a)(r.a.mark((function t(){var e,a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(v.e)("data");case 2:return e=t.sent,t.next=5,Object(u.f)("dataset");case 5:a=t.sent,n=a.values,x(e),O(n),f(!1);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=function(){var e=Object(c.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.push("/data/".concat(a));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return j(l.a,{variant:null===y||void 0===y?void 0:y.variant},j("div",{className:"container ".concat(d.a["page-container"])},j("div",{className:"row"},j("div",{className:"col-12"},j(p.a,{variant:"h4"},y.title))),j("div",{className:"row"},j("div",{className:"col-12"},y.content)),j("section",{style:{marginTop:20}},(null!==k&&void 0!==k?k:[]).map((function(t){return j("div",{className:"row",style:{marginTop:20}},j("div",{className:"col-12"},j(N,{type:t,action:function(t){return C(t)}})))}))),n?j(m.a,null):null))}},vAif:function(t,e,a){t.exports={"datatype-cta-button":"dataTypeCtaButton_datatype-cta-button__1h7h_","button-primary":"dataTypeCtaButton_button-primary__2X4kq","arrow-container":"dataTypeCtaButton_arrow-container__h8prV","children-container":"dataTypeCtaButton_children-container__3Qxdq","cta-container":"dataTypeCtaButton_cta-container__2bUXN"}}},[["K1Fl",1,2,4,0,3,5]]]);