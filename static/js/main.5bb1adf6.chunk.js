(this.webpackJsonpsolve=this.webpackJsonpsolve||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);a(95);var n=a(0),s=a.n(n),c=a(11),r=a.n(c),i=(a(100),a(101),a(67)),o=a(68),l=a(84),d=a(82),m=a(69),j=a.n(m),u=a(2),g=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"signup",value:function(e){var t={token:e.accessToken,Name:e.name,Image:e.picture.data.url,groups:e.groups.data,ProviderId:"Facebook"};localStorage.setItem("userData",JSON.stringify(t)),this.props.history.push("/Dashboard")}},{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{style:{paddingTop:"20px"},className:"col-sm-12",children:[Object(u.jsx)("div",{className:"col-sm-4"}),Object(u.jsx)("div",{className:"col-sm-4",children:Object(u.jsx)(j.a,{buttonStyle:{padding:"6px"},appId:"194888908816770",autoLoad:!1,version:"12.0",fields:"name,picture,groups",scope:"public_profile,groups_show_list",callback:function(t){console.log(t),e.signup(t)}})}),Object(u.jsx)("div",{className:"col-sm-4"})]})})})}}]),a}(n.Component),p=(a(83),a(41)),f=a(70),b=a(140),h=a(143),x=a(145),O=a(110),v=a(152),y=a(155),_=a(149),w=a(150),k=a(156),S=a(157),C=a(153),N=a(151),I=a(147),F=a(146),T=a(75),M=a(80),E=a.n(M),B=a(79),D=a.n(B),J=a(77),L=a.n(J),P=a(78),R=a.n(P);var z=function(){var e=Object(n.useState)((function(){return JSON.parse(localStorage.getItem("userData"))})),t=Object(p.a)(e,2),a=t[0],c=(t[1],s.a.useState({data:[],hasMore:!0,nextPage:"first",first:!0})),r=Object(p.a)(c,2),i=r[0],o=r[1],l=s.a.useState(""),d=Object(p.a)(l,2),m=d[0],j=d[1],g=s.a.useState((function(){return localStorage.getItem("selectedGroup")?JSON.parse(localStorage.getItem("selectedGroup")):"999999999999"})),M=Object(p.a)(g,2),B=M[0],J=M[1],P=Object(n.useRef)(0),z=s.a.useState(null),W=Object(p.a)(z,2),A=W[0],G=W[1],U=function(){G(null)},H=Boolean(A),V=H?"simple-popover":void 0;Object(n.useEffect)((function(){P.current++,console.log("in useEffect ".concat(P.current)),i.first&&window.FB.api("/"+B,"GET",{fields:"feed.limit(30){from,id,message,updated_time,permalink_url,comments.limit(10).filter(stream){created_time,from,message,id,like_count,comment_count,permalink_url},reactions,full_picture}"},(function(e){q(e.feed)}))}));var Y=Object(b.a)((function(e){return{root:{flexGrow:1,overflow:"hidden",background:"linear-gradient(45deg, #fafafa 30%, #e3f2fd 90%)"},paper:{maxWidth:500,margin:"".concat(e.spacing(1),"px auto"),padding:e.spacing(1)},textField:{marginLeft:e.spacing(1)},typography:{padding:e.spacing(2)},form:{padding:e.spacing(0,3)},cftd:{backgroundColor:"#FF4500",height:"20px",width:"35px",color:"#FFFFFF"},iconButton:{padding:10},outerColumn:{borderRight:"1px solid grey",borderBottom:"1px solid grey",borderLeft:"1px solid grey"},centerColumn:{marginLeft:e.spacing(1)},formControl:{margin:e.spacing(1),minWidth:200},selectEmpty:{marginTop:e.spacing(2)}}})),q=function(e){if(console.log(e),e)if(e.data){if(0===e.data.length){var t=Object.assign({},i);return t.hasMore=!1,void o(t)}var a=JSON.parse('{"grp" : [{"id":2222449363,"CFTD":"CFTD","COTM":"COTM"},{"id":115073638555897,"CFTD":"CFTD"}]}').grp.find((function(e){return e.id===B})),n=a&&a.CFTD||"____",s=a&&a.COTM||"____",c=new RegExp(n,"i"),r=new RegExp(s,"i"),l=new RegExp(m,"i"),d=0,j=Object.assign({},i);e.data.forEach((function(e,t,a){var n=c.test(e.message),s={fromName:e.from?e.from.name:"Unknown",fromId:e.from?e.from.id:"9999999999999999",id:e.id,message:e.message,updated_time:e.updated_time,comments:e.comments?e.comments.data.length:0,reactions:e.reactions?e.reactions.data.length:0,link:e.permalink_url,full_picture:e.full_picture?e.full_picture:"",cftd:n,cotm:r.test(e.message)||!!e.comments&&e.comments.data.some((function(e){return r.test(e.message)})),feed:!0,solve:localStorage.getItem(e.id)?JSON.parse(localStorage.getItem(e.id)):{ans:"",anno:"",solved:!1}};if(""===m)console.log("Selected ".concat(d++)),j.data.push(s),n&&s.comments>0&&e.comments.data.forEach((function(e,t,a){var n={fromName:e.from?e.from.name:"Unknown",fromId:e.from?e.from.id:"9999999999999999",id:e.id,message:e.message,updated_time:e.created_time,comments:e.comment_count,reactions:e.like_count,link:e.permalink_url,cftd:!0,cotm:r.test(e.message),feed:!1,solve:localStorage.getItem(e.id)?JSON.parse(localStorage.getItem(e.id)):{ans:"",anno:"",solved:!1}};console.log("Selected ".concat(d++)),j.data.push(n)}));else{var i=l.test(s.message),o=c.test(e.message);if(i)console.log("Selected ".concat(d++)),j.data.push(s);else if(s.comments>0){var u=!1;e.comments.data.forEach((function(e,t,a){var n=l.test(e.message);if(console.log("dtc.mess "+e.message),n){var c={fromName:e.from?e.from.name:"Unknown",fromId:e.from?e.from.id:"9999999999999999",id:e.id,message:e.message,updated_time:e.created_time,comments:e.comment_count,reactions:e.like_count,link:e.permalink_url,cftd:o,cotm:r.test(e.message),feed:!1,solve:localStorage.getItem(e.id)?JSON.parse(localStorage.getItem(e.id)):{ans:"",anno:"",solved:!1}};console.log("Selected ".concat(d++)),u||(j.data.push(s),u=!1),j.data.push(c)}}))}}})),j.first=!1,j.hasMore=0!==e.data.length,j.nextPage=e.paging?e.paging.next.substr(33):"",o(j)}else document.getElementById("mess").innerHTML+=e.error.message+"<br></br>";else document.getElementById("mess").innerHTML+="Select group where this app is installed<br></br>"},K=function(){console.log("in fetchMoreData"),i.hasMore&&window.FB.api(i.nextPage,q)},Q=function(e,t,a){if(!i.data[e].solve.solved){var n=Object.assign({},i);n.data[e].solve[t]=a;var s=JSON.stringify(n.data[e].solve);localStorage.setItem(n.data[e].id,s),o(n)}},X=function(e){o({data:[],hasMore:!0,nextPage:"first",first:!0})},Z=Y();return Object(u.jsxs)("div",{className:Z.root,children:[Object(u.jsxs)(h.a,{className:Z.paper,children:[Object(u.jsxs)(x.a,{container:!0,wrap:"nowrap",spacing:1,children:[Object(u.jsx)(x.a,{item:!0,children:Object(u.jsx)("img",{width:"64",height:"64",alt:"pic",src:"./logo3.125.png"})}),Object(u.jsx)(x.a,{item:!0,xs:!0,children:Object(u.jsxs)(O.a,{align:"left",variant:"subtitle2",children:["Welcome ",a.Name]})}),Object(u.jsxs)(F.a,{className:Z.formControl,children:[Object(u.jsx)(T.a,{className:Z.selectEmpty,value:B,onChange:function(e){J(e.target.value),localStorage.setItem("selectedGroup",e.target.value),X(e)},inputProps:{"aria-label":"group"},children:a.groups.map((function(e,t){return Object(u.jsx)("option",{value:e.id,children:e.name.substring(0,30)},e.id)}))}),Object(u.jsx)(I.a,{children:"Select Group"})]})]}),Object(u.jsxs)(x.a,{item:!0,container:!0,children:[Object(u.jsxs)(x.a,{item:!0,children:[Object(u.jsx)(v.a,{label:"Search group",id:"outlined-size-small",variant:"outlined",size:"small",value:m,onChange:function(e){j(e.target.value)}}),Object(u.jsx)(y.a,{title:"Search",children:Object(u.jsx)(_.a,{onClick:X,children:Object(u.jsx)(L.a,{style:{color:"CornflowerBlue"}})})})]}),Object(u.jsx)(x.a,{item:!0,xs:3})]}),Object(u.jsx)(x.a,{item:!0,children:Object(u.jsx)(w.a,{href:"./pp.html",target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)(O.a,{variant:"caption",display:"block",children:"privacy policy"})})})]}),Object(u.jsx)("div",{children:Object(u.jsx)(f.a,{dataLength:i.data.length,next:K,hasMore:i.hasMore,loader:Object(u.jsx)("h4",{children:"Loading..."}),endMessage:Object(u.jsx)("p",{style:{textAlign:"center"},children:Object(u.jsx)("b",{children:"You have reached the end"})}),children:i.data.map((function(e,t){return Object(u.jsxs)(h.a,{className:Z.paper,children:[Object(u.jsxs)(x.a,{container:!0,wrap:"nowrap",spacing:2,children:[Object(u.jsx)(x.a,{item:!0,children:Object(u.jsx)(k.a,{children:e.fromName.split(" ").map((function(e,t,a){return 0===t||t+1===a.length?e[0]:null})).join("")})}),Object(u.jsxs)(x.a,{item:!0,xs:12,children:[Object(u.jsx)(O.a,{align:"left",children:e.fromName}),Object(u.jsx)(O.a,{align:"left",children:Object(u.jsx)(w.a,{href:e.link,target:"_blank",rel:"noopener noreferrer",variant:"body2",children:e.updated_time})})]}),Object(u.jsxs)(x.a,{item:!0,container:!0,direction:"column",alignItems:"flex-end",children:[e.cftd&&e.feed&&Object(u.jsx)(S.a,{size:"small",label:"CFTD",style:{background:"CornflowerBlue",color:"White"}}),e.cotm&&e.feed&&Object(u.jsx)(S.a,{size:"small",label:"COTM",style:{background:"CornflowerBlue",color:"White"}}),!e.feed&&Object(u.jsx)(y.a,{title:"Comment",children:Object(u.jsx)(R.a,{color:"primary"})})]})]}),Object(u.jsx)(x.a,{container:!0,wrap:"nowrap",spacing:2,children:Object(u.jsx)(x.a,{item:!0,xs:!0,children:Object(u.jsx)(O.a,{align:"left",children:e.message})})}),e.full_picture&&Object(u.jsx)(x.a,{item:!0,children:Object(u.jsx)("img",{width:"400",height:"300",alt:"pic",src:e.full_picture})}),Object(u.jsxs)(x.a,{container:!0,wrap:"nowrap",spacing:2,children:[Object(u.jsx)(x.a,{item:!0,xs:!0,children:Object(u.jsxs)(O.a,{align:"left",variant:"body2",children:["likes ",e.reactions]})}),Object(u.jsx)(x.a,{item:!0,xs:!0,children:Object(u.jsxs)(O.a,{align:"right",variant:"body2",children:["Comments ",e.comments]})})]}),Object(u.jsxs)(x.a,{container:!0,spacing:1,style:{borderTop:"1px solid grey"},children:[Object(u.jsx)(x.a,{container:!0,direction:"column",item:!0,xs:1,children:Object(u.jsx)(x.a,{item:!0,xs:!0,style:{display:"flex",alignItems:"center"},children:Object(u.jsx)(k.a,{className:Z.img,src:a.Image})})}),Object(u.jsx)(x.a,{container:!0,direction:"column",item:!0,xs:9,alignItems:"flex-start",children:Object(u.jsx)(x.a,{item:!0,children:Object(u.jsxs)("form",{className:Z.form,noValidate:!0,autoComplete:"off",children:[Object(u.jsx)(v.a,{fullWidth:!0,style:{disableUnderline:!0,background:"linear-gradient(45deg, #eeeeee 30%, #e0e0e0 90%)",borderRadius:"30px 30px 30px 30px",padding:"0 30px"},InputProps:{disableUnderline:!0},className:Z.textField,label:"Answer",multiline:!0,maxRows:4,value:i.data[t].solve.ans,onChange:function(e){return Q(t,"ans",e.target.value)}}),Object(u.jsx)(v.a,{className:Z.textField,label:"Anno",multiline:!0,maxRows:4,variant:"outlined",fullWidth:!0,style:{marginTop:"4px"},value:i.data[t].solve.anno,onChange:function(e){return Q(t,"anno",e.target.value)}})]})})}),Object(u.jsx)(x.a,{container:!0,direction:"column",item:!0,xs:1,style:{display:"flex",alignItems:"center",justifycontent:"center"},children:Object(u.jsxs)(x.a,{item:!0,children:[e.solve.solved?Object(u.jsx)(_.a,{children:Object(u.jsx)(D.a,{style:{color:"CornflowerBlue"}})}):Object(u.jsx)(_.a,{onClick:function(e){return a=t,n=e,void(i.data[a].solve.ans&&G(n.currentTarget));var a,n},children:Object(u.jsx)(E.a,{style:{color:"CornflowerBlue"}})}),Object(u.jsx)(C.a,{id:V,open:H,anchorEl:A,onClose:U,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(u.jsxs)(O.a,{className:Z.typography,children:["Facebook API doesn't allow posting comments.",Object(u.jsx)("br",{}),"The comment is saved in browser's local storage for reference"]})})]})})]})]},e.id)}))})}),Object(u.jsx)("div",{id:"mess"}),i.hasMore&&Object(u.jsx)("div",{children:Object(u.jsx)(N.a,{variant:"outlined",size:"medium",color:"primary",onClick:K,children:"More"})})]})},W=a(81),A=a(12);var G=function(){return Object(u.jsx)(s.a.Fragment,{children:Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(W.a,{basename:"/solve",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(A.c,{children:[Object(u.jsx)(A.a,{exact:!0,path:"/",component:g}),Object(u.jsx)(A.a,{path:"/Dashboard",component:z})]})})})})})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,158)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(G,{})}),document.getElementById("root")),U()}},[[109,1,2]]]);
//# sourceMappingURL=main.5bb1adf6.chunk.js.map