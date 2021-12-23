(this["webpackJsonprun-zone-ts"]=this["webpackJsonprun-zone-ts"]||[]).push([[0],{212:function(n,e,t){},213:function(n,e,t){},379:function(n,e,t){"use strict";t.r(e);var c,i=t(0),r=t.n(i),o=t(58),a=t.n(o),s=(t(212),t(8)),u=(t(213),t(63)),l=t(5),j=t(1),O=Object(i.createContext)({runner:void 0,runs:[],setRunner:function(n){},setRuns:function(n){},addRun:function(n){}}),d=function(n){var e=n.children,t=Object(i.useState)([]),c=Object(l.a)(t,2),r=c[0],o=c[1],a=Object(i.useState)(),s=Object(l.a)(a,2),d=s[0],b=s[1];return Object(j.jsx)(O.Provider,{value:{runner:d,setRunner:b,runs:r,setRuns:o,addRun:function(n){o((function(e){return e.length>0?[].concat(Object(u.a)(e),[n]):[n]}))}},children:e})};!function(n){n.RUNNER="runner",n.RUNS="runs"}(c||(c={}));var b,x,f,h,p,g=function(){return{getRunner:function(){var n=localStorage.getItem(c.RUNNER);return n?JSON.parse(n):void 0},setRunner:function(n){localStorage.setItem(c.RUNNER,JSON.stringify(n))},removeRunner:function(){localStorage.removeItem(c.RUNNER)}}},v=t(9);!function(n){n.FONT_FAMILY_MAIN="Open Sans Condensed, sans-serif",n.BACKGROUND_COLOR_MAIN="#343a40",n.BACKGROUND_COLOR_SECOND="#5f9ea0",n.FONT_SIZE_NORMAL="1rem",n.FONT_SIZE_LARGER="1.25rem",n.FONT_SIZE_LARGE="1.5rem",n.BOTTOM_NAVIGATION_HEIGHT="4rem",n.MAP_HEIGHT_SIZE="60%",n.HEADER_HEIGHT="4rem"}(b||(b={}));var R,m,w,S,N,I,_,y,E,k,A,C,T,L,D,F,G,M,z,U,P,H=function(n){var e=Object(i.useState)(""),t=Object(l.a)(e,2),c=t[0],r=t[1],o=g(),a=Object(i.useContext)(O).setRunner;return Object(j.jsxs)(B,{children:[Object(j.jsx)(Z,{children:"Willkommen!"}),Object(j.jsx)(K,{type:"text",onChange:function(n){r(n.target.value)},value:c,placeholder:"Wie hei\xdft du?"}),Object(j.jsx)(V,{onClick:function(){console.log("Login "+c);var n={runnerName:c,runnerRunIds:[]};o.setRunner(n),a(n)},children:"Login"})]})},Z=v.a.h3(x||(x=Object(s.a)(["\n  font-family: ",";\n  font-size: ",";\n  text-transform: uppercase;\n  color: #343a40;\n  font-weight: bold;\n  margin: 0 0 30% 0;\n"])),b.FONT_FAMILY_MAIN,b.FONT_SIZE_LARGER),B=v.a.div(f||(f=Object(s.a)(["\n  width: 20%;\n  min-width: 300px;\n  height: 80%;\n  min-height: 500px;\n  background-color: aliceblue;\n  border-radius: 10px;\n  box-shadow: 10px 10px #282c34;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 10% auto auto auto;\n"]))),K=v.a.input(h||(h=Object(s.a)(["\n  width: 70%;\n  height: 40px;\n  border: none;\n  border-radius: 10px;\n  margin: 5px;\n  text-align: center;\n"]))),V=v.a.button(p||(p=Object(s.a)(["\n  width: 70%;\n  height: 50px;\n  background-color: #343a40;\n  color: white;\n  border-radius: 10px;\n  margin: 5px;\n"]))),W=t(182),J=t(395),Y=t(387),X=t(384),q=t(132),Q=t(183),$=function(){return{calcArea:function(n){var e=n.map((function(n){return[n.latitude,n.longitude]})),t=Object(q.polygon)([e]);return Object(q.area)(t)/1e6},track2Polygon:function(n){return n.map((function(n){return[n.latitude,n.longitude]}))},calcDistance:function(n,e){var t={latitude:n.latitude,longitude:n.longitude},c={latitude:e.latitude,longitude:e.longitude};return Object(Q.getDistance)(t,c,.5)}}},nn=function(n){var e=n.runs,t=$();return Object(j.jsx)(j.Fragment,{children:e.map((function(n,e){return Object(j.jsx)(X.a,{positions:t.track2Polygon(n.track.trackPoints)})}))})},en=t(385),tn=t(386),cn=t(27),rn=t(393),on=function(){return{observeMeasurement:new rn.a((function(n){navigator.geolocation.watchPosition((function(e){var t=new cn.LatLng(e.coords.latitude,e.coords.longitude),c=e.coords.speed?3.6*e.coords.speed:void 0,i=e.coords.altitude?e.coords.altitude:void 0;n.next({position:t,speed:c,altitude:i})}),(function(n){return console.error(n)}),{enableHighAccuracy:!0})}))}},an=function(){var n=Object(i.useState)(),e=Object(l.a)(n,2),t=e[0],c=e[1],r=Object(i.useState)(),o=Object(l.a)(r,2),a=o[0],s=o[1],u=Object(en.a)(),O=on();return Object(i.useEffect)((function(){return s(O.observeMeasurement.subscribe((function(n){var e=new cn.LatLng(n.position.lat,n.position.lng);c(e),u.setView(e)}))),function(){a&&a.unsubscribe()}}),[]),Object(j.jsx)(j.Fragment,{children:t&&Object(j.jsx)(tn.a,{position:t})})},sn=function(n){var e=n.setShowRuns;return Object(j.jsx)("div",{className:"leaflet-top leaflet-right",children:Object(j.jsx)("div",{className:"leaflet-control",children:Object(j.jsx)("button",{onClick:function(){return e((function(n){return!n}))},children:"Show Runs"})})})},un=function(n){Object(W.a)(n);var e=Object(i.useContext)(O).runs,t=Object(i.useState)(!1),c=Object(l.a)(t,2),r=c[0],o=c[1];return Object(j.jsxs)(ln,{className:"basicMap",center:[0,0],zoom:20,scrollWheelZoom:!1,children:[Object(j.jsx)(J.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"}),r&&Object(j.jsx)(nn,{runs:e}),Object(j.jsx)(an,{}),Object(j.jsx)(sn,{setShowRuns:o})]})},ln=Object(v.a)(Y.a)(R||(R=Object(s.a)(["\n  width: 100%;\n  height: 75%;\n"]))),jn=t(184),On=Object(i.createContext)({}),dn=function(n){var e=n.children,t=Object(i.useState)(),c=Object(l.a)(t,2),r=c[0],o=c[1],a=Object(i.useState)(),s=Object(l.a)(a,2),O=s[0],d=s[1],b=Object(i.useState)([]),x=Object(l.a)(b,2),f=x[0],h=x[1],p=Object(i.useState)([]),g=Object(l.a)(p,2),v=g[0],R=g[1],m=Object(i.useState)(),w=Object(l.a)(m,2),S=w[0],N=w[1],I=Object(i.useState)(!1),_=Object(l.a)(I,2),y=_[0],E=_[1],k=$(),A=on();Object(i.useEffect)((function(){y?o(A.observeMeasurement.subscribe((function(n){return T(C(n))}))):r&&r.unsubscribe()}),[y]);var C=function(n){return{latitude:n.position.lat,longitude:n.position.lng,altitude:n.altitude,speed:n.speed,time:Date.now()}},T=function(n){var e=f.length>0?k.calcDistance(f[f.length-1],n):0;console.log("Add TrackPoint: ",n),h((function(e){return[].concat(Object(u.a)(e),[n])})),R((function(n){return[].concat(Object(u.a)(n),[{distance:e}])}))};return Object(j.jsx)(On.Provider,{value:{startTime:O,isRunning:y,setIsRunning:E,run:S,startRun:function(){console.log("Start Run"),d(Date.now()),E(!0)},stopRun:function(){if(console.log("Stop Run"),0===f.length)return Promise.resolve(void 0);var n={trackPoints:f,distances:v},e={runId:Object(jn.uuid)(),track:n,startTime:O||Date.now(),endTime:Date.now()};return N(e),E(!1),Promise.resolve(e)},pauseRun:function(){console.log("Pause Run"),E(!1)},addTrackPoint:T,resetRun:function(){N(void 0),d(void 0),h([])}},children:e})},bn=function(){var n=localStorage.getItem(c.RUNS),e=n?JSON.parse(n):[];return{saveRuns:function(n){localStorage.setItem(c.RUNS,JSON.stringify(n))},getAllRuns:function(){return e},deleteRuns:function(){localStorage.removeItem(c.RUNS),localStorage.removeItem(c.RUNNER)},getRun:function(n){return e.filter((function(e){return e.runId===n})).pop()}}},xn=function(n){var e=n.show,t=n.setShow;return Object(j.jsxs)(pn,{show:e,children:[Object(j.jsx)(fn,{children:"Strecke gespeichert!"}),Object(j.jsx)(hn,{onClick:function(){return t(!1)},children:"Nice"})]})},fn=v.a.div(m||(m=Object(s.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  color: white;\n  width: 100%;\n  text-align: center;\n  padding: 2px 0 10px 0;\n"]))),hn=v.a.div(w||(w=Object(s.a)(["\n  border-radius: 5px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  width: 30vw;\n  color: black;\n  background-color: ",";\n"])),b.BACKGROUND_COLOR_SECOND),pn=v.a.div(S||(S=Object(s.a)(["\n  width: 70vw;\n  border-radius: 5px;\n  border: 1px solid black;\n  position: absolute;\n  background-color: #343a40;\n  color: white;\n  top: 50%;\n  left: calc(50% - 70vw * 0.5);\n  visibility: ",";\n  z-index: 500;\n  padding: 8px 10px;\n  font-weight: bolder;\n  font-size: ",";\n"])),(function(n){return n.show?"visible":"hidden"}),b.FONT_SIZE_NORMAL),gn=function(){var n=Object(i.useState)(!1),e=Object(l.a)(n,2),t=e[0],c=e[1],r=Object(i.useContext)(On),o=(r.addTrackPoint,r.startRun),a=r.stopRun,s=r.pauseRun,d=r.isRunning,b=Object(i.useContext)(O),x=b.addRun,f=b.runs,h=bn();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(vn,{children:[Object(j.jsx)(mn,{onClick:function(){d?s():o()},children:d?"Pause":"Start"}),Object(j.jsx)(wn,{onClick:function(){a().then((function(n){console.log("Save run"),n&&(f.length>0?h.saveRuns([].concat(Object(u.a)(f),[n])):h.saveRuns([n]),x(n),c(!0))}))},children:"End"})]}),Object(j.jsx)(xn,{show:t,setShow:c})]})},vn=v.a.div(N||(N=Object(s.a)(["\n  width: 100%;\n  height: 10%;\n  color: black;\n  display: flex;\n  text-align: center;\n  justify-content: space-between;\n"]))),Rn=v.a.button(I||(I=Object(s.a)(["\n  background-color: ",";\n  font-size: ",";\n  color: inherit;\n  border: none;\n  padding: 10px 0;\n  font-weight: bolder;\n  &:focus {\n    outline: none;\n  }\n"])),b.BACKGROUND_COLOR_SECOND,b.FONT_SIZE_NORMAL),mn=Object(v.a)(Rn)(_||(_=Object(s.a)(["\n  width: 65%;\n"]))),wn=Object(v.a)(Rn)(y||(y=Object(s.a)(["\n  width: 35%;\n"]))),Sn=function(n){var e=n.property,t=n.value;return Object(j.jsxs)(Nn,{children:[Object(j.jsx)(_n,{children:e}),Object(j.jsx)(yn,{children:t})]})},Nn=v.a.div(E||(E=Object(s.a)(["\n  width: 50%;\n  min-width: 120px;\n  background-color: ",";\n  padding: 10px;\n"])),b.BACKGROUND_COLOR_SECOND),In=v.a.div(k||(k=Object(s.a)(["\n  font-family: Open Sans Condensed, sans-serif;\n  font-weight: bolder;\n  color: black;\n"]))),_n=Object(v.a)(In)(A||(A=Object(s.a)(["\n  font-size: ",";\n"])),b.FONT_SIZE_LARGER),yn=Object(v.a)(In)(C||(C=Object(s.a)(["\n  font-size: ",";\n"])),b.FONT_SIZE_LARGER),En=function(){var n=Object(i.useContext)(On),e=n.startTime,t=n.isRunning,c=Object(i.useState)(0),r=Object(l.a)(c,2),o=r[0],a=r[1],s=Object(i.useState)(),u=Object(l.a)(s,2),O=u[0],d=u[1];return Object(i.useEffect)((function(){if(t){var n=setInterval((function(){e&&a(Date.now()-e)}),1e3);d(n)}else O&&clearInterval(O)}),[t]),Object(j.jsxs)(kn,{children:[Object(j.jsx)(Sn,{property:"Speed",value:"0 km/h"}),Object(j.jsx)(Sn,{property:"Time",value:new Date(o).toISOString().substr(11,8)})]})},kn=v.a.div(T||(T=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 15%;\n  flex-wrap: wrap;\n"]))),An=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(En,{}),Object(j.jsx)(un,{}),Object(j.jsx)(gn,{})]})},Cn=t(30),Tn=t(31),Ln=function(n){var e=n.children,t=Object(i.useState)(),c=Object(l.a)(t,2),r=c[0],o=c[1],a=Object(i.useState)(!1),s=Object(l.a)(a,2),u=s[0],O=s[1];return Object(j.jsx)(Dn,{onTouchStart:function(n){o(n.targetTouches[0].clientX)},onTouchMove:function(n){var e=n.targetTouches[0].clientX;r-e>50&&O(!0),r-e<-50&&O(!1)},isActive:u,children:u&&e})},Dn=v.a.div(L||(L=Object(s.a)(["\n  /*\n  display: ",";\n*/\n  display: flex;\n  color: white;\n  width: inherit;\n  height: 100%;\n  z-index: ",";\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 5px;\n  background-color: ",";\n  font-size: ",";\n  justify-content: center;\n  align-items: center;\n"])),(function(n){return n.isActive?"block":"none"}),(function(n){return n.isActive?50:30}),(function(n){return n.isActive?"rgba(52, 58, 64, 0.9)":"rgba(52, 58, 64, 0)"}),b.FONT_SIZE_LARGER),Fn=t(59);!function(n){n.ROOT="/",n.NEW="/new",n.RUNS="/runs",n.DETAIL="/runs/:runId"}(D||(D={}));var Gn,Mn,zn,Un,Pn,Hn,Zn,Bn,Kn,Vn,Wn,Jn,Yn,Xn,qn,Qn,$n,ne,ee,te=function(n){var e=n.run,t=n.deleteCallback,c=$();return Object(j.jsxs)(oe,{children:[Object(j.jsx)(Ln,{children:Object(j.jsx)(Cn.a,{onClick:function(){return t(e.runId)},icon:Tn.i})}),Object(j.jsxs)(se,{className:"basicMap",center:function(n){var e=n.track.trackPoints[0];return new cn.LatLng(e.latitude,e.longitude)}(e),zoom:20,dragging:!1,zoomControl:!1,children:[Object(j.jsx)(J.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"}),Object(j.jsx)(X.a,{positions:c.track2Polygon(e.track.trackPoints)})]}),Object(j.jsxs)(ae,{children:[Object(j.jsxs)(ie,{children:[Object(j.jsx)(Cn.a,{icon:Tn.c}),Object(j.jsx)(re,{children:new Date(e.startTime).toDateString()})]}),Object(j.jsxs)(ie,{children:[Object(j.jsx)(Cn.a,{icon:Tn.d}),Object(j.jsx)(re,{children:new Date(e.endTime-e.startTime).toISOString().substr(11,8)})]}),Object(j.jsxs)(ie,{children:[Object(j.jsx)(Cn.a,{icon:Tn.g}),Object(j.jsx)(re,{children:"10.2 km"})]}),Object(j.jsx)(ce,{to:D.RUNS+"/"+e.runId,children:"Details"})]})]})},ce=Object(v.a)(Fn.b)(F||(F=Object(s.a)(["\n  text-align: center;\n  max-width: 150px;\n  background-color: ",";\n  color: #282c34;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 5px 5px 10px #282c34;\n  &:active {\n    box-shadow: 0 0;\n  }\n  z-index: 40;\n"])),b.BACKGROUND_COLOR_SECOND),ie=v.a.div(G||(G=Object(s.a)(["\n  color: white;\n  font-size: ",";\n  font-family: ",";\n  display: inline-flex;\n  margin: 5px;\n"])),b.FONT_SIZE_NORMAL,b.FONT_FAMILY_MAIN),re=v.a.div(M||(M=Object(s.a)(["\n  margin-left: 10px;\n"]))),oe=v.a.div(z||(z=Object(s.a)(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  box-shadow: 5px 5px 5px #282c34;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  cursor: pointer;\n"]))),ae=v.a.div(U||(U=Object(s.a)(["\n  width: 50%;\n  padding-left: 5px;\n  display: flex;\n  flex-direction: column;\n"]))),se=Object(v.a)(Y.a)(P||(P=Object(s.a)(["\n  width: 130px;\n  height: 130px;\n  border-radius: 8px;\n  border: none;\n  margin: 5px;\n  z-index: 0;\n"]))),ue=function(n){var e=n.n,t=n.setOuterStartIndex,c=n.setOuterEndIndex,r=Object(i.useState)(3),o=Object(l.a)(r,2),a=o[0],s=(o[1],Object(i.useState)(0)),u=Object(l.a)(s,2),O=(u[0],u[1]),d=Object(i.useState)(a),b=Object(l.a)(d,2),x=(b[0],b[1]),f=Object(i.useState)(Math.ceil(e/a)),h=Object(l.a)(f,2),p=h[0],g=(h[1],Object(i.useState)(1)),v=Object(l.a)(g,2),R=v[0],m=v[1];Object(i.useEffect)((function(){var n=(R-1)*a,i=n+a>e?e:n+a;O(n),t(n),x(i),c(i)}),[a,R]);var w=function(n){m(S(R+n))},S=function(n){return n>p&&(n=p),n<1&&(n=1),n};return Object(j.jsxs)(de,{children:[Object(j.jsx)(le,{onClick:function(){return w(-1)},children:"<"}),Object(j.jsx)(Oe,{onChange:function(n){m(S(+n.currentTarget.value))},value:R}),Object(j.jsxs)(je,{children:[" / ",p]}),Object(j.jsx)(le,{onClick:function(){return w(1)},children:">"})]})},le=v.a.button(Gn||(Gn=Object(s.a)(["\n  background-color: #343a40;\n  color: white;\n  border: 1px white;\n"]))),je=v.a.div(Mn||(Mn=Object(s.a)(["\n  font-size: inherit;\n  width: 30px;\n  padding: 2px 5px;\n"]))),Oe=v.a.input(zn||(zn=Object(s.a)(["\n  width: 25px;\n  text-align: center;\n  font-size: inherit;\n"]))),de=v.a.div(Un||(Un=Object(s.a)(["\n  color: white;\n  display: flex;\n  font-size: ",";\n  float: right;\n  margin-bottom: 10px;\n"])),b.FONT_SIZE_NORMAL),be=function(){var n=Object(i.useContext)(O),e=n.runs,t=n.setRuns,c=Object(i.useState)(),r=Object(l.a)(c,2),o=r[0],a=r[1],s=Object(i.useState)(),u=Object(l.a)(s,2),d=u[0],b=u[1],x=function(n){t(e.filter((function(e){return e.runId!=n})))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(ue,{n:e.length,setOuterStartIndex:a,setOuterEndIndex:b}),e.slice(o,d).map((function(n){return Object(j.jsx)(te,{run:n,deleteCallback:x},n.runId)}))]})},xe=t(13),fe=function(){var n=Object(i.useContext)(O),e=n.setRunner,t=n.setRuns,c=n.runs,r=bn(),o=g();Object(i.useEffect)((function(){a()}),[c]);var a=function(){r.saveRuns(c)};return{initRuns:function(){t(r.getAllRuns())},initRunner:function(){e(o.getRunner())},removeRunner:function(){e(void 0),o.removeRunner()},deleteAll:function(){r.deleteRuns()}}},he=function(){var n=Object(i.useState)(!1),e=Object(l.a)(n,2),t=e[0],c=e[1],r=fe();return Object(j.jsxs)(pe,{onClick:function(){return c(!t)},children:[Object(j.jsx)(Cn.a,{icon:Tn.a}),Object(j.jsxs)(ge,{show:t,children:[Object(j.jsx)(ve,{onClick:function(){return r.deleteAll()},children:"Forget"}),Object(j.jsx)(ve,{onClick:function(){return r.removeRunner()},children:"Logout"})]})]})},pe=v.a.div(Pn||(Pn=Object(s.a)(["\n  padding-top: 5px;\n  position: relative;\n  display: inline-block;\n  color: white;\n  font-size: ",";\n"])),b.FONT_SIZE_LARGER),ge=v.a.div(Hn||(Hn=Object(s.a)(["\n  color: white;\n  background-color: ",";\n  display: ",";\n  position: absolute;\n  z-index: 500;\n  right: -200%;\n  box-shadow: 0px 0px 10px #282c34;\n  width: 100px;\n"])),b.BACKGROUND_COLOR_MAIN,(function(n){return n.show?"block":"none"})),ve=v.a.div(Zn||(Zn=Object(s.a)(["\n  text-align: center;\n  font-size: ",";\n  border: none;\n  cursor: pointer;\n  &:hover {\n    background-color: inherit;\n    color: white;\n  }\n"])),b.FONT_SIZE_LARGER),Re=function(){return Object(j.jsxs)(me,{children:[Object(j.jsx)(we,{children:"Places"}),Object(j.jsx)(he,{})]})},me=v.a.div(Bn||(Bn=Object(s.a)(["\n  width: 100%;\n  height: ",";\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 10px 40px 5px 10px;\n"])),b.HEADER_HEIGHT),we=v.a.h2(Kn||(Kn=Object(s.a)(["\n  color: #eee;\n  font-family: ",";\n  font-size: ",";\n  font-weight: bold;\n  line-height: 48px;\n  padding: 0 5px;\n  text-transform: uppercase;\n  min-width: 200px;\n"])),b.FONT_FAMILY_MAIN,b.FONT_SIZE_LARGE),Se=function(){var n=Object(i.useContext)(O).runner;return Object(j.jsx)(Ie,{children:Object(j.jsxs)(Ne,{children:["Willkommen",Object(j.jsx)("br",{}),n.runnerName]})})},Ne=v.a.h3(Vn||(Vn=Object(s.a)(["\n  font-family: ",";\n  text-align: center;\n  font-size: ",";\n  color: white;\n"])),b.FONT_FAMILY_MAIN,b.FONT_SIZE_LARGE),Ie=v.a.div(Wn||(Wn=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10% 0 0 0;\n"]))),_e=function(){return Object(j.jsxs)(Ee,{children:[Object(j.jsx)(ke,{children:Object(j.jsx)(ye,{to:D.NEW,children:Object(j.jsx)(Cn.a,{icon:Tn.f})})}),Object(j.jsx)(ke,{children:Object(j.jsx)(ye,{to:D.RUNS,children:Object(j.jsx)(Cn.a,{icon:Tn.h})})}),Object(j.jsx)(ke,{children:Object(j.jsx)(Cn.a,{icon:Tn.b})}),Object(j.jsx)(ke,{children:Object(j.jsx)(Cn.a,{icon:Tn.j})}),Object(j.jsx)(ke,{children:Object(j.jsx)(Cn.a,{icon:Tn.e})})]})},ye=Object(v.a)(Fn.b)(Jn||(Jn=Object(s.a)(["\n  color: inherit;\n  font-size: inherit;\n  &:hover {\n    color: white;\n    background-color: inherit;\n  }\n  &:focus {\n    color: white;\n  }\n"]))),Ee=v.a.div(Yn||(Yn=Object(s.a)(["\n  background-color: #282c34;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n  z-index: 1000;\n"]))),ke=v.a.button(Xn||(Xn=Object(s.a)(["\n  height: ",";\n  width: 20%;\n  display: block;\n  color: #888;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: ",";\n  border: none;\n  background-color: inherit;\n"])),b.BOTTOM_NAVIGATION_HEIGHT,b.FONT_SIZE_LARGER),Ae=t(388),Ce=t(389),Te=t(199),Le=t(200),De=t(90),Fe=t(392),Ge=t(202),Me=function(){var n=Object(xe.g)().runId,e=bn(),t=Object(i.useMemo)((function(){return e.getRun(n)}),[n]);if(!t)return Object(j.jsx)("div",{children:"No run found"});for(var c=t.startTime,r=[],o=0;o<t.track.distances.length;o++)r.push({time:new Date(t.track.trackPoints[o].time-t.startTime).toISOString().slice(11,19),distance:t.track.distances[o].distance,velocity:t.track.trackPoints[o].speed});return Object(j.jsxs)(Ue,{children:[Object(j.jsx)(ze,{children:new Date(c).toISOString().slice(0,10)}),Object(j.jsx)(Ae.a,{width:"80%",height:"30%",children:Object(j.jsxs)(Ce.a,{data:r,children:[Object(j.jsxs)("defs",{children:[Object(j.jsxs)("linearGradient",{id:"colorDistance",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(j.jsx)("stop",{offset:"5%",stopColor:b.BACKGROUND_COLOR_SECOND,stopOpacity:.8}),Object(j.jsx)("stop",{offset:"95%",stopColor:b.BACKGROUND_COLOR_SECOND,stopOpacity:0})]}),Object(j.jsxs)("linearGradient",{id:"colorVelocity",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(j.jsx)("stop",{offset:"5%",stopColor:"#ff8c00",stopOpacity:.8}),Object(j.jsx)("stop",{offset:"95%",stopColor:"#ff8c00",stopOpacity:0})]})]}),Object(j.jsx)(Te.a,{dataKey:"time",stroke:"#fff"}),Object(j.jsx)(Le.a,{from:0,yAxisId:"left",type:"number",dataKey:"distance",name:"distance",unit:"km",orientation:"left",stroke:b.BACKGROUND_COLOR_SECOND}),Object(j.jsx)(Le.a,{from:0,yAxisId:"right",type:"number",dataKey:"velocity",name:"velocity",unit:"km/h",orientation:"right",stroke:"#ff8c00"}),Object(j.jsx)(De.a,{contentStyle:{borderRadius:"10px",opacity:.5}}),Object(j.jsx)(Fe.a,{stroke:"#666 ",vertical:!1,strokeDasharray:"3 3"}),Object(j.jsx)(Ge.a,{type:"monotone",dataKey:"distance",stroke:b.BACKGROUND_COLOR_SECOND,fillOpacity:1,fill:"url(#colorDistance)",yAxisId:"left"}),Object(j.jsx)(Ge.a,{type:"monotone",dataKey:"velocity",stroke:"#ff8c00",fillOpacity:1,fill:"url(#colorVelocity)",yAxisId:"right"})]})})]})},ze=(v.a.div(qn||(qn=Object(s.a)(["\n  color: white;\n"]))),v.a.h1(Qn||(Qn=Object(s.a)(["\n  color: white;\n  font-family: ",";\n  font-size: ",";\n"])),b.FONT_FAMILY_MAIN,b.FONT_SIZE_LARGER)),Ue=v.a.div($n||($n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  height: 100%;\n  width: 100%;\n"])));var Pe=v.a.div(ne||(ne=Object(s.a)(["\n  width: 100vw;\n  height: 100vh - ",";\n"])),b.BOTTOM_NAVIGATION_HEIGHT),He=v.a.div(ee||(ee=Object(s.a)(["\n  height: calc(\n    100vh - "," - ","\n  );\n  width: 100%;\n"])),b.BOTTOM_NAVIGATION_HEIGHT,b.HEADER_HEIGHT),Ze=function(){var n=Object(i.useContext)(O).runner,e=fe();return Object(i.useEffect)((function(){e.initRuns(),e.initRunner()}),[]),n?Object(j.jsxs)(Pe,{children:[Object(j.jsx)(Re,{}),Object(j.jsx)(He,{children:Object(j.jsxs)(xe.c,{children:[Object(j.jsx)(xe.a,{path:D.ROOT,element:Object(j.jsx)(Se,{})}),Object(j.jsx)(xe.a,{path:D.NEW,element:Object(j.jsx)(An,{})}),Object(j.jsx)(xe.a,{path:D.RUNS,element:Object(j.jsx)(be,{})}),Object(j.jsx)(xe.a,{path:D.DETAIL,element:Object(j.jsx)(Me,{})})]})}),Object(j.jsx)(_e,{})]}):Object(j.jsx)(Pe,{children:Object(j.jsx)(H,{})})},Be=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,397)).then((function(e){var t=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;t(n),c(n),i(n),r(n),o(n)}))};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(d,{children:Object(j.jsx)(dn,{children:Object(j.jsx)(Fn.a,{children:Object(j.jsx)(Ze,{})})})})}),document.getElementById("root")),Be()}},[[379,1,2]]]);
//# sourceMappingURL=main.f83f5f57.chunk.js.map