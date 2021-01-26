(this["webpackJsonpslack-react"]=this["webpackJsonpslack-react"]||[]).push([[0],{118:function(e,a,t){},119:function(e,a,t){},120:function(e,a,t){},121:function(e,a,t){},122:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(25),r=t.n(l),s=(t(81),t(13)),i=(t(82),t(83),t(139)),o=t(58),m=t.n(o),u=t(59),d=t.n(u),h=t(60),E=t.n(h),p=Object(n.createContext)(),f=function(e){var a=e.reducer,t=e.initialState,l=e.children;return c.a.createElement(p.Provider,{value:Object(n.useReducer)(a,t)},l)},v=function(){return Object(n.useContext)(p)},g=function(){var e=v(),a=Object(s.a)(e,1)[0].user;return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header__left"},c.a.createElement(i.a,{className:"header__avatar",src:null===a||void 0===a?void 0:a.photoURL,alt:null===a||void 0===a?void 0:a.displayName}),c.a.createElement(m.a,null)),c.a.createElement("div",{className:"header__search"},c.a.createElement(d.a,null),c.a.createElement("input",{placeholder:"Search me"})),c.a.createElement("div",{className:"header__right"},c.a.createElement(E.a,null)))},b=(t(88),t(62)),_=t.n(b),N=t(63),I=t.n(N),O=(t(89),t(5)),j=t(30),w=t.n(j),k=(w.a.initializeApp({apiKey:"AIzaSyBY07IIhllWq3nB7kcH0h0QNjry03KnaT8",authDomain:"slack-a2634.firebaseapp.com",databaseURL:"https://slack-a2634.firebaseio.com",projectId:"slack-a2634",storageBucket:"slack-a2634.appspot.com",messagingSenderId:"415771172846",appId:"1:415771172846:web:612d2949c5925e031c78ff"}).firestore(),w.a.auth()),S=new w.a.auth.GoogleAuthProvider,C=t(61),y=t.n(C).a.create({baseURL:"https://slack-mern21.herokuapp.com"}),L=function(e){var a=e.Icon,t=e.id,n=e.addChannelOption,l=e.title,r=Object(O.f)();return c.a.createElement("div",{className:"sidebarOption",onClick:n?function(){var e=prompt("Please enter the channel name");e&&y.post("/new/channel",{channelName:e})}:function(){t?r.push("/room/".concat(t)):r.push(l)}},a&&c.a.createElement(a,{className:"sidebarOption__icon"}),a?c.a.createElement("h3",null,l):c.a.createElement("h3",{className:"sidebarOption__channel"},c.a.createElement("span",{className:"sidebarOption__hash"}," # ")," ",l))},P=t(64),R=t.n(P),D=t(65),U=t.n(D),A=t(66),B=t.n(A),T=t(67),W=t.n(T),M=t(68),x=t.n(M),z=t(69),F=t.n(z),G=t(70),J=t.n(G),K=t(71),Y=t.n(K),q=t(72),H=t.n(q),Q=t(73),$=t.n(Q),V=t(37),X=t.n(V),Z=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],l=a[1],r=v(),i=Object(s.a)(r,1)[0].user,o=new X.a("ebbf063369b5064a7f31",{cluster:"us3"}),m=function(){y.get("/get/channelList").then((function(e){l(e.data)}))};return Object(n.useEffect)((function(){m(),o.subscribe("channels").bind("newChannel",(function(e){m()}))}),[]),c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement("div",{className:"sidebar__info"},c.a.createElement("h2",null,"Clecer Programmer"),c.a.createElement("h3",null,c.a.createElement(_.a,null),i.displayName)),c.a.createElement(I.a,null)),c.a.createElement(L,{Icon:R.a,title:"Threads"}),c.a.createElement(L,{Icon:U.a,title:"Mentions & reactions"}),c.a.createElement(L,{Icon:B.a,title:"Saved items"}),c.a.createElement(L,{Icon:W.a,title:"Channel browser"}),c.a.createElement(L,{Icon:x.a,title:"People & user groups"}),c.a.createElement(L,{Icon:F.a,title:"Apps"}),c.a.createElement(L,{Icon:J.a,title:"File browser"}),c.a.createElement(L,{Icon:Y.a,title:"Show less"}),c.a.createElement(L,{title:"YouTube"}),c.a.createElement("hr",null),c.a.createElement(L,{Icon:H.a,title:"Channels"}),c.a.createElement("hr",null),c.a.createElement(L,{Icon:$.a,addChannelOption:!0,title:"Add Channel"}),t.map((function(e){return c.a.createElement(L,{title:e.name,id:e.id})})))},ee=t(33),ae=(t(118),t(136)),te=t(137);t(119);var ne=function(e){var a=e.message,t=e.timestamp,n=e.user,l=e.userImage;return c.a.createElement("div",{className:"message"},c.a.createElement("img",{src:l,alt:""}),c.a.createElement("div",{className:"message__info"},c.a.createElement("h4",null,n," ",c.a.createElement("span",{className:"message__timestamp"},new Date(parseInt(t)).toUTCString())),c.a.createElement("p",null,a)))};t(120);var ce=function(e){var a=e.channelName,t=e.channelId,l=Object(n.useState)(""),r=Object(s.a)(l,2),i=r[0],o=r[1],m=v(),u=Object(s.a)(m,1)[0].user;return c.a.createElement("div",{className:"chatInput"},c.a.createElement("form",null,c.a.createElement("input",{value:i,onChange:function(e){return o(e.target.value)},placeholder:"Message #".concat(null===a||void 0===a?void 0:a.toLowerCase())}),c.a.createElement("button",{type:"sumbit",onClick:function(e){e.preventDefault(),t&&y.post("/new/message?id=".concat(t),{message:i,timestamp:Date.now(),user:u.displayName,userImage:u.photoURL}),o("")}},"SEND")))},le=new X.a("ebbf063369b5064a7f31",{cluster:"us3"}),re=function(){var e=Object(O.g)().roomId,a=Object(n.useState)(null),t=Object(s.a)(a,2),l=t[0],r=t[1],i=Object(n.useState)([]),o=Object(s.a)(i,2),m=o[0],u=o[1],d=function(){y.get("/get/conversation?id=".concat(e)).then((function(e){r(e.data[0].channelName),u(e.data[0].conversation)}))};return Object(n.useEffect)((function(){e&&(d(),le.subscribe("conversation").bind("newMessage",(function(e){d()})))}),[e]),c.a.createElement("div",{className:"chat"},c.a.createElement("div",{className:"chat__header"},c.a.createElement("div",{className:"chat__headerLeft"},c.a.createElement("h4",{className:"chat__channelName"},c.a.createElement("strong",null," #",l," "),c.a.createElement(ae.a,null))),c.a.createElement("div",{className:"chat__headerRight"},c.a.createElement("p",null,c.a.createElement(te.a,null)," Details"))),c.a.createElement("div",{className:"chat__messages"},m.map((function(e){var a=e.message,t=e.timestamp,n=e.user,l=e.userImage;return c.a.createElement(ne,{message:a,timestamp:t,user:n,userImage:l})}))),c.a.createElement(ce,{channelName:l,channelId:e}))},se=(t(121),t(138)),ie=t(43),oe="SET_USER",me=function(e,a){switch(console.log(a),a.type){case oe:return Object(ie.a)(Object(ie.a)({},e),{},{user:a.user});default:return e}},ue=function(){var e=v(),a=Object(s.a)(e,2),t=(a[0],a[1]);return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__container"},c.a.createElement("img",{src:"https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png",alt:""}),c.a.createElement("h1",null,"Sign in to Clever Programmer"),c.a.createElement("p",null,"cleverprogrammer.slack.com"),c.a.createElement(se.a,{onClick:function(){k.signInWithPopup(S).then((function(e){t({type:oe,user:e.user})})).catch((function(e){alert(e.message)}))}},"Sign in with Google")))};var de=function(){var e=v(),a=Object(s.a)(e,2),t=a[0].user;return a[1],console.log(t),c.a.createElement("div",{className:"app"},c.a.createElement(ee.a,null,t?c.a.createElement(c.a.Fragment,null,c.a.createElement(g,null),c.a.createElement("div",{className:"app__body"},c.a.createElement(Z,null),c.a.createElement(O.c,null,c.a.createElement(O.a,{path:"/room/:roomId"},c.a.createElement(re,null)),c.a.createElement(O.a,{path:"/"},c.a.createElement("h1",null,"Welcome"))))):c.a.createElement(ue,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,{initialState:{user:null},reducer:me},c.a.createElement(de,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,a,t){e.exports=t(122)},81:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){}},[[76,1,2]]]);
//# sourceMappingURL=main.c18421ac.chunk.js.map