(this["webpackJsonprun-zone-ts"]=this["webpackJsonprun-zone-ts"]||[]).push([[0],{212:function(n,e,t){},213:function(n,e,t){},379:function(n,e,t){"use strict";t.r(e);var c,r=t(0),i=t.n(r),o=t(58),a=t.n(o),s=(t(212),t(8)),u=(t(213),t(63)),j=t(5),l=t(1),O=Object(r.createContext)({runner:void 0,runs:[],setRunner:function(n){},setRuns:function(n){},addRun:function(n){}}),b=function(n){var e=n.children,t=Object(r.useState)([]),c=Object(j.a)(t,2),i=c[0],o=c[1],a=Object(r.useState)(),s=Object(j.a)(a,2),b=s[0],d=s[1];return Object(l.jsx)(O.Provider,{value:{runner:b,setRunner:d,runs:i,setRuns:o,addRun:function(n){o((function(e){return e.length>0?[].concat(Object(u.a)(e),[n]):[n]}))}},children:e})};!function(n){n.RUNNER="runner",n.RUNS="runs"}(c||(c={}));var d,x,h,f,p,g=function(){return{getRunner:function(){var n=localStorage.getItem(c.RUNNER);return n?JSON.parse(n):void 0},setRunner:function(n){localStorage.setItem(c.RUNNER,JSON.stringify(n))},removeRunner:function(){localStorage.removeItem(c.RUNNER)}}},v=t(9);!function(n){n.FONT_FAMILY_MAIN="Open Sans Condensed, sans-serif",n.BACKGROUND_COLOR_MAIN="#343a40",n.BACKGROUND_COLOR_SECOND="#5f9ea0",n.FONT_SIZE_NORMAL="1rem",n.FONT_SIZE_LARGER="1.25rem",n.FONT_SIZE_LARGE="1.5rem",n.BOTTOM_NAVIGATION_HEIGHT="4rem",n.MAP_HEIGHT_SIZE="60%",n.HEADER_HEIGHT="4rem"}(d||(d={}));var R,m,w,S,N,_,I,E,A,C,T,k,y,L,D,F,G,M,z,U,P,H=function(n){var e=Object(r.useState)(""),t=Object(j.a)(e,2),c=t[0],i=t[1],o=g(),a=Object(r.useContext)(O).setRunner;return Object(l.jsxs)(B,{children:[Object(l.jsx)(Z,{children:"Willkommen!"}),Object(l.jsx)(K,{type:"text",onChange:function(n){i(n.target.value)},value:c,placeholder:"Wie hei\xdft du?"}),Object(l.jsx)(W,{onClick:function(){console.log("Login "+c);var n={runnerName:c,runnerRunIds:[]};o.setRunner(n),a(n)},children:"Login"})]})},Z=v.a.h3(x||(x=Object(s.a)(["\n  font-family: ",";\n  font-size: ",";\n  text-transform: uppercase;\n  color: #343a40;\n  font-weight: bold;\n  margin: 0 0 30% 0;\n"])),d.FONT_FAMILY_MAIN,d.FONT_SIZE_LARGER),B=v.a.div(h||(h=Object(s.a)(["\n  width: 20%;\n  min-width: 300px;\n  height: 80%;\n  min-height: 500px;\n  background-color: aliceblue;\n  border-radius: 10px;\n  box-shadow: 10px 10px #282c34;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 10% auto auto auto;\n"]))),K=v.a.input(f||(f=Object(s.a)(["\n  width: 70%;\n  height: 40px;\n  border: none;\n  border-radius: 10px;\n  margin: 5px;\n  text-align: center;\n"]))),W=v.a.button(p||(p=Object(s.a)(["\n  width: 70%;\n  height: 50px;\n  background-color: #343a40;\n  color: white;\n  border-radius: 10px;\n  margin: 5px;\n"]))),J=t(182),Y=t(395),V=t(387),X=t(384),q=t(132),Q=t(183),$=function(){return{calcArea:function(n){var e=n.map((function(n){return[n.latitude,n.longitude]})),t=Object(q.polygon)([e]);return Object(q.area)(t)/1e6},track2Polygon:function(n){return n.map((function(n){return[n.latitude,n.longitude]}))},calcDistance:function(n,e){var t={latitude:n.latitude,longitude:n.longitude},c={latitude:e.latitude,longitude:e.longitude};return Object(Q.getDistance)(t,c,.5)}}},nn=function(n){var e=n.runs,t=$();return Object(l.jsx)(l.Fragment,{children:e.map((function(n,e){return Object(l.jsx)(X.a,{positions:t.track2Polygon(n.track.trackPoints)})}))})},en=t(385),tn=t(386),cn=t(27),rn=t(393),on=function(){return{observeMeasurement:new rn.a((function(n){navigator.geolocation.watchPosition((function(e){var t=new cn.LatLng(e.coords.latitude,e.coords.longitude),c=e.coords.speed?3.6*e.coords.speed:void 0,r=e.coords.altitude?e.coords.altitude:void 0;n.next({position:t,speed:c,altitude:r})}),(function(n){return console.error(n)}),{enableHighAccuracy:!0})}))}},an=function(){var n=Object(r.useState)(),e=Object(j.a)(n,2),t=e[0],c=e[1],i=Object(r.useState)(),o=Object(j.a)(i,2),a=o[0],s=o[1],u=Object(en.a)(),O=on();return Object(r.useEffect)((function(){return s(O.observeMeasurement.subscribe((function(n){var e=new cn.LatLng(n.position.lat,n.position.lng);c(e),u.setView(e)}))),function(){a&&a.unsubscribe()}}),[]),Object(l.jsx)(l.Fragment,{children:t&&Object(l.jsx)(tn.a,{position:t})})},sn=function(n){var e=n.setShowRuns;return Object(l.jsx)("div",{className:"leaflet-top leaflet-right",children:Object(l.jsx)("div",{className:"leaflet-control",children:Object(l.jsx)("button",{onClick:function(){return e((function(n){return!n}))},children:"Show Runs"})})})},un=function(n){Object(J.a)(n);var e=Object(r.useContext)(O).runs,t=Object(r.useState)(!1),c=Object(j.a)(t,2),i=c[0],o=c[1];return Object(l.jsxs)(jn,{className:"basicMap",center:[0,0],zoom:20,scrollWheelZoom:!1,children:[Object(l.jsx)(Y.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"}),i&&Object(l.jsx)(nn,{runs:e}),Object(l.jsx)(an,{}),Object(l.jsx)(sn,{setShowRuns:o})]})},jn=Object(v.a)(V.a)(R||(R=Object(s.a)(["\n  width: 100%;\n  height: 75%;\n"]))),ln=t(184),On=Object(r.createContext)({}),bn=function(n){var e=n.children,t=Object(r.useState)(),c=Object(j.a)(t,2),i=c[0],o=c[1],a=Object(r.useState)(),s=Object(j.a)(a,2),O=s[0],b=s[1],d=Object(r.useState)([]),x=Object(j.a)(d,2),h=x[0],f=x[1],p=Object(r.useState)([]),g=Object(j.a)(p,2),v=g[0],R=g[1],m=Object(r.useState)(),w=Object(j.a)(m,2),S=w[0],N=w[1],_=Object(r.useState)(!1),I=Object(j.a)(_,2),E=I[0],A=I[1],C=$(),T=on();Object(r.useEffect)((function(){E?o(T.observeMeasurement.subscribe((function(n){return y(k(n))}))):i&&i.unsubscribe()}),[E]);var k=function(n){return{latitude:n.position.lat,longitude:n.position.lng,altitude:n.altitude,speed:n.speed,time:Date.now()}},y=function(n){var e=h.length>0?C.calcDistance(h[h.length-1],n):0;console.log("Add TrackPoint: ",n),f((function(e){return[].concat(Object(u.a)(e),[n])})),R((function(n){return[].concat(Object(u.a)(n),[{distance:e}])}))};return Object(l.jsx)(On.Provider,{value:{startTime:O,isRunning:E,setIsRunning:A,run:S,startRun:function(){console.log("Start Run"),b(Date.now()),A(!0)},stopRun:function(){if(console.log("Stop Run"),0===h.length)return Promise.resolve(void 0);var n={trackPoints:h,distances:v},e={runId:Object(ln.uuid)(),track:n,startTime:O||Date.now(),endTime:Date.now()};return N(e),A(!1),Promise.resolve(e)},pauseRun:function(){console.log("Pause Run"),A(!1)},addTrackPoint:y,resetRun:function(){N(void 0),b(void 0),f([])}},children:e})},dn=function(){var n=localStorage.getItem(c.RUNS),e=n?JSON.parse(n):[];return{saveRuns:function(n){localStorage.setItem(c.RUNS,JSON.stringify(n))},getAllRuns:function(){return e},deleteRuns:function(){localStorage.removeItem(c.RUNS),localStorage.removeItem(c.RUNNER)},getRun:function(n){return e.filter((function(e){return e.runId===n})).pop()}}},xn=function(n){var e=n.show,t=n.setShow;return Object(l.jsxs)(pn,{show:e,children:[Object(l.jsx)(hn,{children:"Strecke gespeichert!"}),Object(l.jsx)(fn,{onClick:function(){return t(!1)},children:"Nice"})]})},hn=v.a.div(m||(m=Object(s.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  color: white;\n  width: 100%;\n  text-align: center;\n  padding: 2px 0 10px 0;\n"]))),fn=v.a.div(w||(w=Object(s.a)(["\n  border-radius: 5px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  width: 30vw;\n  color: black;\n  background-color: ",";\n"])),d.BACKGROUND_COLOR_SECOND),pn=v.a.div(S||(S=Object(s.a)(["\n  width: 70vw;\n  border-radius: 5px;\n  border: 1px solid black;\n  position: absolute;\n  background-color: #343a40;\n  color: white;\n  top: 50%;\n  left: calc(50% - 70vw * 0.5);\n  visibility: ",";\n  z-index: 500;\n  padding: 8px 10px;\n  font-weight: bolder;\n  font-size: ",";\n"])),(function(n){return n.show?"visible":"hidden"}),d.FONT_SIZE_NORMAL),gn=function(){var n=Object(r.useState)(!1),e=Object(j.a)(n,2),t=e[0],c=e[1],i=Object(r.useContext)(On),o=(i.addTrackPoint,i.startRun),a=i.stopRun,s=i.pauseRun,b=i.isRunning,d=Object(r.useContext)(O),x=d.addRun,h=d.runs,f=dn();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(vn,{children:[Object(l.jsx)(mn,{onClick:function(){b?s():o()},children:b?"Pause":"Start"}),Object(l.jsx)(wn,{onClick:function(){a().then((function(n){console.log("Save run"),n&&(h.length>0?f.saveRuns([].concat(Object(u.a)(h),[n])):f.saveRuns([n]),x(n),c(!0))}))},children:"End"})]}),Object(l.jsx)(xn,{show:t,setShow:c})]})},vn=v.a.div(N||(N=Object(s.a)(["\n  width: 100%;\n  height: 10%;\n  color: black;\n  display: flex;\n  text-align: center;\n  justify-content: space-between;\n"]))),Rn=v.a.button(_||(_=Object(s.a)(["\n  background-color: ",";\n  font-size: ",";\n  color: inherit;\n  border: none;\n  padding: 10px 0;\n  font-weight: bolder;\n  &:focus {\n    outline: none;\n  }\n"])),d.BACKGROUND_COLOR_SECOND,d.FONT_SIZE_NORMAL),mn=Object(v.a)(Rn)(I||(I=Object(s.a)(["\n  width: 65%;\n"]))),wn=Object(v.a)(Rn)(E||(E=Object(s.a)(["\n  width: 35%;\n"]))),Sn=function(n){var e=n.property,t=n.value;return Object(l.jsxs)(Nn,{children:[Object(l.jsx)(In,{children:e}),Object(l.jsx)(En,{children:t})]})},Nn=v.a.div(A||(A=Object(s.a)(["\n  width: 50%;\n  min-width: 120px;\n  background-color: ",";\n  padding: 10px;\n"])),d.BACKGROUND_COLOR_SECOND),_n=v.a.div(C||(C=Object(s.a)(["\n  font-family: Open Sans Condensed, sans-serif;\n  font-weight: bolder;\n  color: black;\n"]))),In=Object(v.a)(_n)(T||(T=Object(s.a)(["\n  font-size: ",";\n"])),d.FONT_SIZE_LARGER),En=Object(v.a)(_n)(k||(k=Object(s.a)(["\n  font-size: ",";\n"])),d.FONT_SIZE_LARGER),An=function(){var n=Object(r.useContext)(On),e=n.startTime,t=n.isRunning,c=Object(r.useState)(0),i=Object(j.a)(c,2),o=i[0],a=i[1],s=Object(r.useState)(),u=Object(j.a)(s,2),O=u[0],b=u[1];return Object(r.useEffect)((function(){if(t){var n=setInterval((function(){e&&a(Date.now()-e)}),1e3);b(n)}else O&&clearInterval(O)}),[t]),Object(l.jsxs)(Cn,{children:[Object(l.jsx)(Sn,{property:"Speed",value:"0 km/h"}),Object(l.jsx)(Sn,{property:"Time",value:new Date(o).toISOString().substr(11,8)})]})},Cn=v.a.div(y||(y=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 15%;\n  flex-wrap: wrap;\n"]))),Tn=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(An,{}),Object(l.jsx)(un,{}),Object(l.jsx)(gn,{})]})},kn=t(30),yn=t(31),Ln=function(n){var e=n.children,t=Object(r.useState)(),c=Object(j.a)(t,2),i=c[0],o=c[1],a=Object(r.useState)(!1),s=Object(j.a)(a,2),u=s[0],O=s[1];return Object(l.jsx)(Dn,{onTouchStart:function(n){o(n.targetTouches[0].clientX)},onTouchMove:function(n){var e=n.targetTouches[0].clientX;i-e>50&&O(!0),i-e<-50&&O(!1)},isActive:u,children:u&&e})},Dn=v.a.div(L||(L=Object(s.a)(["\n  /*\n  display: ",";\n*/\n  display: flex;\n  color: white;\n  width: inherit;\n  height: 100%;\n  z-index: ",";\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 5px;\n  background-color: ",";\n  font-size: ",";\n  justify-content: center;\n  align-items: center;\n"])),(function(n){return n.isActive?"block":"none"}),(function(n){return n.isActive?50:30}),(function(n){return n.isActive?"rgba(52, 58, 64, 0.9)":"rgba(52, 58, 64, 0)"}),d.FONT_SIZE_LARGER),Fn=t(59);!function(n){n.ROOT="/",n.NEW="/new",n.RUNS="/runs",n.DETAIL="/runs/:runId"}(D||(D={}));var Gn,Mn,zn,Un,Pn,Hn,Zn,Bn,Kn,Wn,Jn,Yn,Vn,Xn,qn,Qn,$n,ne,ee,te=function(n){var e=n.run,t=n.deleteCallback,c=$();return Object(l.jsxs)(oe,{children:[Object(l.jsx)(Ln,{children:Object(l.jsx)(kn.a,{onClick:function(){return t(e.runId)},icon:yn.i})}),Object(l.jsxs)(se,{className:"basicMap",center:function(n){var e=n.track.trackPoints[0];return new cn.LatLng(e.latitude,e.longitude)}(e),zoom:20,dragging:!1,zoomControl:!1,children:[Object(l.jsx)(Y.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"}),Object(l.jsx)(X.a,{positions:c.track2Polygon(e.track.trackPoints)})]}),Object(l.jsxs)(ae,{children:[Object(l.jsxs)(re,{children:[Object(l.jsx)(kn.a,{icon:yn.c}),Object(l.jsx)(ie,{children:new Date(e.startTime).toDateString()})]}),Object(l.jsxs)(re,{children:[Object(l.jsx)(kn.a,{icon:yn.d}),Object(l.jsx)(ie,{children:new Date(e.endTime-e.startTime).toISOString().substr(11,8)})]}),Object(l.jsxs)(re,{children:[Object(l.jsx)(kn.a,{icon:yn.g}),Object(l.jsx)(ie,{children:"10.2 km"})]}),Object(l.jsx)(ce,{to:D.RUNS+"/"+e.runId,children:"Details"})]})]})},ce=Object(v.a)(Fn.b)(F||(F=Object(s.a)(["\n  text-align: center;\n  max-width: 150px;\n  background-color: ",";\n  color: #282c34;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 5px 5px 10px #282c34;\n  &:active {\n    box-shadow: 0 0;\n  }\n  z-index: 40;\n"])),d.BACKGROUND_COLOR_SECOND),re=v.a.div(G||(G=Object(s.a)(["\n  color: white;\n  font-size: ",";\n  font-family: ",";\n  display: inline-flex;\n  margin: 5px;\n"])),d.FONT_SIZE_NORMAL,d.FONT_FAMILY_MAIN),ie=v.a.div(M||(M=Object(s.a)(["\n  margin-left: 10px;\n"]))),oe=v.a.div(z||(z=Object(s.a)(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  box-shadow: 5px 5px 5px #282c34;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  cursor: pointer;\n"]))),ae=v.a.div(U||(U=Object(s.a)(["\n  width: 50%;\n  padding-left: 5px;\n  display: flex;\n  flex-direction: column;\n"]))),se=Object(v.a)(V.a)(P||(P=Object(s.a)(["\n  width: 130px;\n  height: 130px;\n  border-radius: 8px;\n  border: none;\n  margin: 5px;\n  z-index: 0;\n"]))),ue=function(n){var e=n.n,t=n.setOuterStartIndex,c=n.setOuterEndIndex,i=Object(r.useState)(3),o=Object(j.a)(i,2),a=o[0],s=(o[1],Object(r.useState)(0)),u=Object(j.a)(s,2),O=(u[0],u[1]),b=Object(r.useState)(a),d=Object(j.a)(b,2),x=(d[0],d[1]),h=Object(r.useState)(Math.ceil(e/a)),f=Object(j.a)(h,2),p=f[0],g=(f[1],Object(r.useState)(1)),v=Object(j.a)(g,2),R=v[0],m=v[1];Object(r.useEffect)((function(){var n=(R-1)*a,r=n+a>e?e:n+a;O(n),t(n),x(r),c(r)}),[a,R]);var w=function(n){m(S(R+n))},S=function(n){return n>p&&(n=p),n<1&&(n=1),n};return Object(l.jsxs)(be,{children:[Object(l.jsx)(je,{onClick:function(){return w(-1)},children:"<"}),Object(l.jsx)(Oe,{onChange:function(n){m(S(+n.currentTarget.value))},value:R}),Object(l.jsxs)(le,{children:[" / ",p]}),Object(l.jsx)(je,{onClick:function(){return w(1)},children:">"})]})},je=v.a.button(Gn||(Gn=Object(s.a)(["\n  background-color: #343a40;\n  color: white;\n  border: 1px white;\n"]))),le=v.a.div(Mn||(Mn=Object(s.a)(["\n  font-size: inherit;\n  width: 30px;\n  padding: 2px 5px;\n"]))),Oe=v.a.input(zn||(zn=Object(s.a)(["\n  width: 25px;\n  text-align: center;\n  font-size: inherit;\n"]))),be=v.a.div(Un||(Un=Object(s.a)(["\n  color: white;\n  display: flex;\n  font-size: ",";\n  float: right;\n  margin-bottom: 10px;\n"])),d.FONT_SIZE_NORMAL),de=function(){var n=Object(r.useContext)(O),e=n.runs,t=n.setRuns,c=Object(r.useState)(),i=Object(j.a)(c,2),o=i[0],a=i[1],s=Object(r.useState)(),u=Object(j.a)(s,2),b=u[0],d=u[1],x=function(n){t(e.filter((function(e){return e.runId!=n})))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(ue,{n:e.length,setOuterStartIndex:a,setOuterEndIndex:d}),e.slice(o,b).map((function(n){return Object(l.jsx)(te,{run:n,deleteCallback:x},n.runId)}))]})},xe=t(13),he=function(){var n=Object(r.useContext)(O),e=n.setRunner,t=n.setRuns,c=n.runs,i=dn(),o=g();Object(r.useEffect)((function(){a()}),[c]);var a=function(){i.saveRuns(c)};return{initRuns:function(){t(i.getAllRuns())},initRunner:function(){e(o.getRunner())},removeRunner:function(){e(void 0),o.removeRunner()},deleteAll:function(){i.deleteRuns()}}},fe=function(){var n=Object(r.useState)(!1),e=Object(j.a)(n,2),t=e[0],c=e[1],i=he();return Object(l.jsxs)(pe,{onClick:function(){return c(!t)},children:[Object(l.jsx)(kn.a,{icon:yn.a}),Object(l.jsxs)(ge,{show:t,children:[Object(l.jsx)(ve,{onClick:function(){return i.deleteAll()},children:"Forget"}),Object(l.jsx)(ve,{onClick:function(){return i.removeRunner()},children:"Logout"})]})]})},pe=v.a.div(Pn||(Pn=Object(s.a)(["\n  padding-top: 5px;\n  position: relative;\n  display: inline-block;\n  color: white;\n  font-size: ",";\n"])),d.FONT_SIZE_LARGER),ge=v.a.div(Hn||(Hn=Object(s.a)(["\n  color: white;\n  background-color: ",";\n  display: ",";\n  position: absolute;\n  z-index: 500;\n  right: -200%;\n  box-shadow: 0px 0px 10px #282c34;\n  width: 100px;\n"])),d.BACKGROUND_COLOR_MAIN,(function(n){return n.show?"block":"none"})),ve=v.a.div(Zn||(Zn=Object(s.a)(["\n  text-align: center;\n  font-size: ",";\n  border: none;\n  cursor: pointer;\n  &:hover {\n    background-color: inherit;\n    color: white;\n  }\n"])),d.FONT_SIZE_LARGER),Re=function(){return Object(l.jsxs)(me,{children:[Object(l.jsx)(we,{children:"Places"}),Object(l.jsx)(fe,{})]})},me=v.a.div(Bn||(Bn=Object(s.a)(["\n  width: 100%;\n  height: ",";\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 10px 40px 5px 10px;\n"])),d.HEADER_HEIGHT),we=v.a.h2(Kn||(Kn=Object(s.a)(["\n  color: #eee;\n  font-family: ",";\n  font-size: ",";\n  font-weight: bold;\n  line-height: 48px;\n  padding: 0 5px;\n  text-transform: uppercase;\n  min-width: 200px;\n"])),d.FONT_FAMILY_MAIN,d.FONT_SIZE_LARGE),Se=function(){var n=Object(r.useContext)(O).runner;return Object(l.jsx)(_e,{children:Object(l.jsxs)(Ne,{children:["Willkommen",Object(l.jsx)("br",{}),n.runnerName]})})},Ne=v.a.h3(Wn||(Wn=Object(s.a)(["\n  font-family: ",";\n  text-align: center;\n  font-size: ",";\n  color: white;\n"])),d.FONT_FAMILY_MAIN,d.FONT_SIZE_LARGE),_e=v.a.div(Jn||(Jn=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10% 0 0 0;\n"]))),Ie=function(){return Object(l.jsxs)(Ae,{children:[Object(l.jsx)(Ce,{children:Object(l.jsx)(Ee,{to:D.NEW,children:Object(l.jsx)(kn.a,{icon:yn.f})})}),Object(l.jsx)(Ce,{children:Object(l.jsx)(Ee,{to:D.RUNS,children:Object(l.jsx)(kn.a,{icon:yn.h})})}),Object(l.jsx)(Ce,{children:Object(l.jsx)(kn.a,{icon:yn.b})}),Object(l.jsx)(Ce,{children:Object(l.jsx)(kn.a,{icon:yn.j})}),Object(l.jsx)(Ce,{children:Object(l.jsx)(kn.a,{icon:yn.e})})]})},Ee=Object(v.a)(Fn.b)(Yn||(Yn=Object(s.a)(["\n  color: inherit;\n  font-size: inherit;\n  &:hover {\n    color: white;\n    background-color: inherit;\n  }\n  &:focus {\n    color: white;\n  }\n"]))),Ae=v.a.div(Vn||(Vn=Object(s.a)(["\n  background-color: #282c34;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n  z-index: 1000;\n"]))),Ce=v.a.button(Xn||(Xn=Object(s.a)(["\n  height: ",";\n  width: 20%;\n  display: block;\n  color: #888;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: ",";\n  border: none;\n  background-color: inherit;\n"])),d.BOTTOM_NAVIGATION_HEIGHT,d.FONT_SIZE_LARGER),Te=t(388),ke=t(389),ye=t(199),Le=t(200),De=t(90),Fe=t(392),Ge=t(202),Me=function(){var n=Object(xe.g)().runId,e=dn(),t=Object(r.useMemo)((function(){return e.getRun(n)}),[n]);if(!t)return Object(l.jsx)("div",{children:"No run found"});for(var c=t.startTime,i=t.track.trackPoints,o=t.track.distances,a=[],s=0;s<i.length;s++)a.push({time:i[s].time,distance:o[s].distance});console.log(a);return Object(l.jsxs)(Ue,{children:[Object(l.jsx)(ze,{children:new Date(c).toISOString().slice(0,10)}),Object(l.jsx)(Te.a,{width:"80%",height:"30%",children:Object(l.jsxs)(ke.a,{data:a,children:[Object(l.jsx)("defs",{children:Object(l.jsxs)("linearGradient",{id:"colorDistance",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(l.jsx)("stop",{offset:"5%",stopColor:d.BACKGROUND_COLOR_SECOND,stopOpacity:.8}),Object(l.jsx)("stop",{offset:"50%",stopColor:d.BACKGROUND_COLOR_SECOND,stopOpacity:.4}),Object(l.jsx)("stop",{offset:"95%",stopColor:d.BACKGROUND_COLOR_SECOND,stopOpacity:0})]})}),Object(l.jsx)(ye.a,{dataKey:"time",tickFormatter:function(n){return new Date(n-c).toISOString().slice(11,19)}}),Object(l.jsx)(Le.a,{from:0}),Object(l.jsx)(De.a,{}),Object(l.jsx)(Fe.a,{stroke:"#666 ",vertical:!1,strokeDasharray:"3 3"}),Object(l.jsx)(Ge.a,{type:"monotone",dataKey:"distance",stroke:d.BACKGROUND_COLOR_SECOND,fillOpacity:1,fill:"url(#colorDistance)"})]})})]})},ze=(v.a.div(qn||(qn=Object(s.a)(["\n  color: white;\n"]))),v.a.h1(Qn||(Qn=Object(s.a)(["\n  color: white;\n  font-family: ",";\n  font-size: ",";\n"])),d.FONT_FAMILY_MAIN,d.FONT_SIZE_LARGER)),Ue=v.a.div($n||($n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  height: 100%;\n  width: 100%;\n"])));var Pe=v.a.div(ne||(ne=Object(s.a)(["\n  width: 100vw;\n  height: 100vh - ",";\n"])),d.BOTTOM_NAVIGATION_HEIGHT),He=v.a.div(ee||(ee=Object(s.a)(["\n  height: calc(\n    100vh - "," - ","\n  );\n  width: 100%;\n"])),d.BOTTOM_NAVIGATION_HEIGHT,d.HEADER_HEIGHT),Ze=function(){var n=Object(r.useContext)(O).runner,e=he();return Object(r.useEffect)((function(){e.initRuns(),e.initRunner()}),[]),n?Object(l.jsxs)(Pe,{children:[Object(l.jsx)(Re,{}),Object(l.jsx)(He,{children:Object(l.jsxs)(xe.c,{children:[Object(l.jsx)(xe.a,{path:D.ROOT,element:Object(l.jsx)(Se,{})}),Object(l.jsx)(xe.a,{path:D.NEW,element:Object(l.jsx)(Tn,{})}),Object(l.jsx)(xe.a,{path:D.RUNS,element:Object(l.jsx)(de,{})}),Object(l.jsx)(xe.a,{path:D.DETAIL,element:Object(l.jsx)(Me,{})})]})}),Object(l.jsx)(Ie,{})]}):Object(l.jsx)(Pe,{children:Object(l.jsx)(H,{})})},Be=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,397)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),c(n),r(n),i(n),o(n)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(b,{children:Object(l.jsx)(bn,{children:Object(l.jsx)(Fn.a,{children:Object(l.jsx)(Ze,{})})})})}),document.getElementById("root")),Be()}},[[379,1,2]]]);
//# sourceMappingURL=main.26a83fba.chunk.js.map