(this["webpackJsonprun-zone-ts"]=this["webpackJsonprun-zone-ts"]||[]).push([[0],{279:function(n,e,t){},280:function(n,e,t){},425:function(n,e,t){"use strict";t.r(e);var c,r=t(0),i=t.n(r),o=t(57),a=t.n(o),s=(t(279),t(6)),u=(t(280),t(62)),l=t(4),d=t(1),j=Object(r.createContext)({runner:void 0,runs:[],setRunner:function(n){},setRuns:function(n){},addRun:function(n){}}),O=function(n){var e=n.children,t=Object(r.useState)([]),c=Object(l.a)(t,2),i=c[0],o=c[1],a=Object(r.useState)(),s=Object(l.a)(a,2),O=s[0],b=s[1];return Object(d.jsx)(j.Provider,{value:{runner:O,setRunner:b,runs:i,setRuns:o,addRun:function(n){o((function(e){return e.length>0?[].concat(Object(u.a)(e),[n]):[n]}))}},children:e})};!function(n){n.RUNNER="runner",n.RUNS="runs"}(c||(c={}));var b,x,f,h,p,g=function(){return{getRunner:function(){var n=localStorage.getItem(c.RUNNER);return n?JSON.parse(n):void 0},setRunner:function(n){localStorage.setItem(c.RUNNER,JSON.stringify(n))},removeRunner:function(){localStorage.removeItem(c.RUNNER)}}},v=t(7);!function(n){n.FONT_FAMILY_MAIN="Open Sans Condensed, sans-serif",n.BACKGROUND_COLOR_MAIN="#343a40",n.BACKGROUND_COLOR_SECOND="#5f9ea0",n.BACKGROUND_COLOR_THIRD="#ff8c00",n.FONT_SIZE_SMALL="0.75rem",n.FONT_SIZE_NORMAL="1rem",n.FONT_SIZE_LARGER="1.25rem",n.FONT_SIZE_LARGE="1.5rem",n.BOTTOM_NAVIGATION_HEIGHT="4rem",n.MAP_HEIGHT_SIZE="60%",n.HEADER_HEIGHT="4rem"}(b||(b={}));var m,R,S,N,w,_,I,E,k,y,A,T,C,L,D,F,M,G,z,U,P,H=function(n){var e=Object(r.useState)(""),t=Object(l.a)(e,2),c=t[0],i=t[1],o=g(),a=Object(r.useContext)(j).setRunner;return Object(d.jsxs)(K,{children:[Object(d.jsx)(Z,{children:"Willkommen!"}),Object(d.jsx)(B,{type:"text",onChange:function(n){i(n.target.value)},value:c,placeholder:"Wie hei\xdft du?"}),Object(d.jsx)(J,{onClick:function(){console.log("Login "+c);var n={runnerName:c,runnerRunIds:[]};o.setRunner(n),a(n)},children:"Login"})]})},Z=v.a.h3(x||(x=Object(s.a)(["\n  font-family: ",";\n  font-size: ",";\n  text-transform: uppercase;\n  color: #343a40;\n  font-weight: bold;\n  margin: 0 0 30% 0;\n"])),b.FONT_FAMILY_MAIN,b.FONT_SIZE_LARGER),K=v.a.div(f||(f=Object(s.a)(["\n  width: 20%;\n  min-width: 300px;\n  height: 80%;\n  min-height: 500px;\n  background-color: aliceblue;\n  border-radius: 10px;\n  box-shadow: 10px 10px #282c34;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 10% auto auto auto;\n"]))),B=v.a.input(h||(h=Object(s.a)(["\n  width: 70%;\n  height: 40px;\n  border: none;\n  border-radius: 10px;\n  margin: 5px;\n  text-align: center;\n"]))),J=v.a.button(p||(p=Object(s.a)(["\n  width: 70%;\n  height: 50px;\n  background-color: #343a40;\n  color: white;\n  border-radius: 10px;\n  margin: 5px;\n"]))),W=t(179),Y=t(441),V=t(433),X=t(430),q=t(23),Q=t(132),$=function(){return{calcArea:function(n){var e=n.map((function(n){return[n.latitude,n.longitude]})),t=Object(Q.polygon)([e]);return Object(Q.area)(t)/1e6},track2Polygon:function(n){return n.map((function(n){return[n.latitude,n.longitude]}))},calcDistance:function(n,e){var t=new q.LatLng(n.latitude,n.longitude),c=new q.LatLng(e.latitude,e.longitude);return t.distanceTo(c)}}},nn=function(n){var e=n.runs,t=$();return Object(d.jsx)(d.Fragment,{children:e.map((function(n,e){return Object(d.jsx)(X.a,{positions:t.track2Polygon(n.track.trackPoints)})}))})},en=t(431),tn=t(432),cn=t(439),rn=function(){return{observeMeasurement:new cn.a((function(n){navigator.geolocation.watchPosition((function(e){var t=new q.LatLng(e.coords.latitude,e.coords.longitude),c=e.coords.speed?3.6*e.coords.speed:void 0,r=e.coords.altitude?e.coords.altitude:void 0;n.next({position:t,speed:c,altitude:r})}),(function(n){return console.error(n)}),{enableHighAccuracy:!0})}))}},on=function(){var n=Object(r.useState)(),e=Object(l.a)(n,2),t=e[0],c=e[1],i=Object(r.useState)(),o=Object(l.a)(i,2),a=o[0],s=o[1],u=Object(en.a)(),j=rn();return Object(r.useEffect)((function(){return s(j.observeMeasurement.subscribe((function(n){var e=new q.LatLng(n.position.lat,n.position.lng);c(e),u.setView(e)}))),function(){a&&a.unsubscribe()}}),[]),Object(d.jsx)(d.Fragment,{children:t&&Object(d.jsx)(tn.a,{position:t})})},an=function(n){var e=n.setShowRuns;return Object(d.jsx)("div",{className:"leaflet-top leaflet-right",children:Object(d.jsx)("div",{className:"leaflet-control",children:Object(d.jsx)("button",{onClick:function(){return e((function(n){return!n}))},children:"Show Runs"})})})},sn=function(n){Object(W.a)(n);var e=Object(r.useContext)(j).runs,t=Object(r.useState)(!1),c=Object(l.a)(t,2),i=c[0],o=c[1];return Object(d.jsxs)(un,{className:"basicMap",center:[0,0],zoom:20,scrollWheelZoom:!1,children:[Object(d.jsx)(Y.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"}),i&&Object(d.jsx)(nn,{runs:e}),Object(d.jsx)(on,{}),Object(d.jsx)(an,{setShowRuns:o})]})},un=Object(v.a)(V.a)(m||(m=Object(s.a)(["\n  width: 100%;\n  height: 75%;\n"]))),ln=t(180),dn=Object(r.createContext)({}),jn=function(n){var e=n.children,t=Object(r.useState)(),c=Object(l.a)(t,2),i=c[0],o=c[1],a=Object(r.useState)(),s=Object(l.a)(a,2),j=s[0],O=s[1],b=Object(r.useState)([]),x=Object(l.a)(b,2),f=x[0],h=x[1],p=Object(r.useState)([]),g=Object(l.a)(p,2),v=g[0],m=g[1],R=Object(r.useState)(),S=Object(l.a)(R,2),N=S[0],w=S[1],_=Object(r.useState)(!1),I=Object(l.a)(_,2),E=I[0],k=I[1],y=$(),A=rn();Object(r.useEffect)((function(){E?o(A.observeMeasurement.subscribe((function(n){return C(T(n))}))):i&&i.unsubscribe()}),[E]),Object(r.useEffect)((function(){var n=f.length>1?y.calcDistance(f[f.length-2],f[f.length-1]):0;m((function(e){return[].concat(Object(u.a)(e),[{distance:n}])}))}),[f]);var T=function(n){return{latitude:n.position.lat,longitude:n.position.lng,altitude:n.altitude,speed:n.speed,time:Date.now()}},C=function(n){console.log("Add TrackPoint: ",n),h((function(e){return[].concat(Object(u.a)(e),[n])}))};return Object(d.jsx)(dn.Provider,{value:{startTime:j,isRunning:E,setIsRunning:k,run:N,startRun:function(){console.log("Start Run"),!j&&O(Date.now()),k(!0)},stopRun:function(){if(console.log("Stop Run"),0===f.length)return Promise.resolve(void 0);var n={trackPoints:f,distances:v},e={runId:Object(ln.uuid)(),track:n,startTime:j||Date.now(),endTime:Date.now()};return w(e),k(!1),h([]),O(void 0),m([]),Promise.resolve(e)},pauseRun:function(){console.log("Pause Run"),k(!1)},addTrackPoint:C,resetRun:function(){w(void 0),O(void 0),h([])}},children:e})},On=function(){var n=localStorage.getItem(c.RUNS),e=n?JSON.parse(n):[];return{saveRuns:function(n){localStorage.setItem(c.RUNS,JSON.stringify(n))},getAllRuns:function(){return e},deleteRuns:function(){localStorage.removeItem(c.RUNS),localStorage.removeItem(c.RUNNER)},getRun:function(n){return e.filter((function(e){return e.runId===n})).pop()}}},bn=function(n){var e=n.show,t=n.setShow;return Object(d.jsxs)(hn,{show:e,children:[Object(d.jsx)(xn,{children:"Strecke gespeichert!"}),Object(d.jsx)(fn,{onClick:function(){return t(!1)},children:"Nice"})]})},xn=v.a.div(R||(R=Object(s.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  color: white;\n  width: 100%;\n  text-align: center;\n  padding: 2px 0 10px 0;\n"]))),fn=v.a.div(S||(S=Object(s.a)(["\n  border-radius: 5px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  width: 30vw;\n  color: black;\n  background-color: ",";\n"])),b.BACKGROUND_COLOR_SECOND),hn=v.a.div(N||(N=Object(s.a)(["\n  width: 70vw;\n  border-radius: 5px;\n  border: 1px solid black;\n  position: absolute;\n  background-color: #343a40;\n  color: white;\n  top: 50%;\n  left: calc(50% - 70vw * 0.5);\n  visibility: ",";\n  z-index: 500;\n  padding: 8px 10px;\n  font-weight: bolder;\n  font-size: ",";\n"])),(function(n){return n.show?"visible":"hidden"}),b.FONT_SIZE_NORMAL),pn=function(){var n=Object(r.useState)(!1),e=Object(l.a)(n,2),t=e[0],c=e[1],i=Object(r.useContext)(dn),o=(i.addTrackPoint,i.startRun),a=i.stopRun,s=i.pauseRun,O=i.isRunning,b=Object(r.useContext)(j),x=b.addRun,f=b.runs,h=On();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(gn,{children:[Object(d.jsx)(mn,{onClick:function(){O?s():o()},children:O?"Pause":"Start"}),Object(d.jsx)(Rn,{onClick:function(){a().then((function(n){console.log("Save run"),n&&(f.length>0?h.saveRuns([].concat(Object(u.a)(f),[n])):h.saveRuns([n]),x(n),c(!0))}))},children:"End"})]}),Object(d.jsx)(bn,{show:t,setShow:c})]})},gn=v.a.div(w||(w=Object(s.a)(["\n  width: 100%;\n  height: 10%;\n  color: black;\n  display: flex;\n  text-align: center;\n  justify-content: space-between;\n"]))),vn=v.a.button(_||(_=Object(s.a)(["\n  background-color: ",";\n  font-size: ",";\n  color: inherit;\n  border: none;\n  padding: 10px 0;\n  font-weight: bolder;\n  &:focus {\n    outline: none;\n  }\n"])),b.BACKGROUND_COLOR_SECOND,b.FONT_SIZE_NORMAL),mn=Object(v.a)(vn)(I||(I=Object(s.a)(["\n  width: 65%;\n"]))),Rn=Object(v.a)(vn)(E||(E=Object(s.a)(["\n  width: 35%;\n"]))),Sn=function(n){var e=n.property,t=n.value;return Object(d.jsxs)(Nn,{children:[Object(d.jsx)(_n,{children:e}),Object(d.jsx)(In,{children:t})]})},Nn=v.a.div(k||(k=Object(s.a)(["\n  width: 50%;\n  min-width: 120px;\n  background-color: ",";\n  padding: 10px;\n"])),b.BACKGROUND_COLOR_SECOND),wn=v.a.div(y||(y=Object(s.a)(["\n  font-family: Open Sans Condensed, sans-serif;\n  font-weight: bolder;\n  color: black;\n"]))),_n=Object(v.a)(wn)(A||(A=Object(s.a)(["\n  font-size: ",";\n"])),b.FONT_SIZE_LARGER),In=Object(v.a)(wn)(T||(T=Object(s.a)(["\n  font-size: ",";\n"])),b.FONT_SIZE_LARGER),En=function(){var n=Object(r.useContext)(dn),e=n.startTime,t=n.isRunning,c=Object(r.useState)(0),i=Object(l.a)(c,2),o=i[0],a=i[1],s=Object(r.useState)(0),u=Object(l.a)(s,2),j=u[0],O=u[1],b=Object(r.useState)(),x=Object(l.a)(b,2),f=x[0],h=x[1],p=Object(r.useState)(),g=Object(l.a)(p,2),v=g[0],m=g[1],R=rn();return Object(r.useEffect)((function(){if(t){m(R.observeMeasurement.subscribe((function(n){return n.speed&&O(n.speed)})));var n=setInterval((function(){e&&a(Date.now()-e)}),1e3);h(n)}else v&&v.unsubscribe(),f&&clearInterval(f),a(0)}),[t]),Object(d.jsxs)(kn,{children:[Object(d.jsx)(Sn,{property:"Speed",value:j.toFixed(1)+" km/h"}),Object(d.jsx)(Sn,{property:"Time",value:new Date(o).toISOString().substr(11,8)})]})},kn=v.a.div(C||(C=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 15%;\n  flex-wrap: wrap;\n"]))),yn=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(En,{}),Object(d.jsx)(sn,{}),Object(d.jsx)(pn,{})]})},An=t(30),Tn=t(31),Cn=function(n){var e=n.children,t=Object(r.useState)(),c=Object(l.a)(t,2),i=c[0],o=c[1],a=Object(r.useState)(!1),s=Object(l.a)(a,2),u=s[0],j=s[1];return Object(d.jsx)(Ln,{onTouchStart:function(n){o(n.targetTouches[0].clientX)},onTouchMove:function(n){var e=n.targetTouches[0].clientX;i-e>50&&j(!0),i-e<-50&&j(!1)},isActive:u,children:u&&e})},Ln=v.a.div(L||(L=Object(s.a)(["\n  /*\n  display: ",";\n*/\n  display: flex;\n  color: white;\n  width: inherit;\n  height: 100%;\n  z-index: ",";\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 5px;\n  background-color: ",";\n  font-size: ",";\n  justify-content: center;\n  align-items: center;\n"])),(function(n){return n.isActive?"block":"none"}),(function(n){return n.isActive?50:30}),(function(n){return n.isActive?"rgba(52, 58, 64, 0.9)":"rgba(52, 58, 64, 0)"}),b.FONT_SIZE_LARGER),Dn=t(58);!function(n){n.ROOT="/",n.NEW="/new",n.RUNS="/runs",n.DETAIL="/runs/:runId"}(D||(D={}));var Fn,Mn,Gn,zn,Un,Pn,Hn,Zn,Kn,Bn,Jn,Wn,Yn,Vn,Xn=function(n){var e=n.run,t=n.deleteCallback,c=$();return Object(d.jsxs)(ne,{children:[Object(d.jsx)(Cn,{children:Object(d.jsx)(An.a,{onClick:function(){return t(e.runId)},icon:Tn.i})}),Object(d.jsxs)(te,{className:"basicMap",center:function(n){var e=n.track.trackPoints[0];return new q.LatLng(e.latitude,e.longitude)}(e),zoom:20,dragging:!1,zoomControl:!1,children:[Object(d.jsx)(Y.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"}),Object(d.jsx)(X.a,{positions:c.track2Polygon(e.track.trackPoints)})]}),Object(d.jsxs)(ee,{children:[Object(d.jsxs)(Qn,{children:[Object(d.jsx)(An.a,{icon:Tn.b}),Object(d.jsx)($n,{children:new Date(e.startTime).toDateString()})]}),Object(d.jsxs)(Qn,{children:[Object(d.jsx)(An.a,{icon:Tn.c}),Object(d.jsx)($n,{children:new Date(e.endTime-e.startTime).toISOString().substr(11,8)})]}),Object(d.jsxs)(Qn,{children:[Object(d.jsx)(An.a,{icon:Tn.g}),Object(d.jsx)($n,{children:e.track.distances.map((function(n){return n.distance})).reduce((function(n,e){return n+e})).toFixed(1)+" km"})]}),Object(d.jsx)(qn,{to:D.RUNS+"/"+e.runId,children:"Details"})]})]})},qn=Object(v.a)(Dn.b)(F||(F=Object(s.a)(["\n  text-align: center;\n  max-width: 150px;\n  background-color: ",";\n  color: #282c34;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 5px 5px 10px #282c34;\n  &:active {\n    box-shadow: 0 0;\n  }\n  z-index: 40;\n"])),b.BACKGROUND_COLOR_SECOND),Qn=v.a.div(M||(M=Object(s.a)(["\n  color: white;\n  font-size: ",";\n  font-family: ",";\n  display: inline-flex;\n  margin: 5px;\n"])),b.FONT_SIZE_NORMAL,b.FONT_FAMILY_MAIN),$n=v.a.div(G||(G=Object(s.a)(["\n  margin-left: 10px;\n"]))),ne=v.a.div(z||(z=Object(s.a)(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  box-shadow: 5px 5px 5px #282c34;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  cursor: pointer;\n"]))),ee=v.a.div(U||(U=Object(s.a)(["\n  width: 50%;\n  padding-left: 5px;\n  display: flex;\n  flex-direction: column;\n"]))),te=Object(v.a)(V.a)(P||(P=Object(s.a)(["\n  width: 130px;\n  height: 130px;\n  border-radius: 8px;\n  border: none;\n  margin: 5px;\n  z-index: 0;\n"]))),ce=function(n){var e=n.n,t=n.setOuterStartIndex,c=n.setOuterEndIndex,i=Object(r.useState)(3),o=Object(l.a)(i,2),a=o[0],s=(o[1],Object(r.useState)(0)),u=Object(l.a)(s,2),j=(u[0],u[1]),O=Object(r.useState)(a),b=Object(l.a)(O,2),x=(b[0],b[1]),f=Object(r.useState)(Math.ceil(e/a)),h=Object(l.a)(f,2),p=h[0],g=(h[1],Object(r.useState)(1)),v=Object(l.a)(g,2),m=v[0],R=v[1];Object(r.useEffect)((function(){var n=(m-1)*a,r=n+a>e?e:n+a;j(n),t(n),x(r),c(r)}),[a,m]);var S=function(n){R(N(m+n))},N=function(n){return n>p&&(n=p),n<1&&(n=1),n};return Object(d.jsxs)(ae,{children:[Object(d.jsx)(re,{onClick:function(){return S(-1)},children:"<"}),Object(d.jsx)(oe,{onChange:function(n){R(N(+n.currentTarget.value))},value:m}),Object(d.jsxs)(ie,{children:[" / ",p]}),Object(d.jsx)(re,{onClick:function(){return S(1)},children:">"})]})},re=v.a.button(Fn||(Fn=Object(s.a)(["\n  background-color: #343a40;\n  color: white;\n  border: 1px white;\n"]))),ie=v.a.div(Mn||(Mn=Object(s.a)(["\n  font-size: inherit;\n  width: 30px;\n  padding: 2px 5px;\n"]))),oe=v.a.input(Gn||(Gn=Object(s.a)(["\n  width: 25px;\n  text-align: center;\n  font-size: inherit;\n"]))),ae=v.a.div(zn||(zn=Object(s.a)(["\n  color: white;\n  display: flex;\n  font-size: ",";\n  float: right;\n  margin-bottom: 10px;\n"])),b.FONT_SIZE_NORMAL),se=function(){var n=Object(r.useContext)(j),e=n.runs,t=n.setRuns,c=Object(r.useState)(),i=Object(l.a)(c,2),o=i[0],a=i[1],s=Object(r.useState)(),u=Object(l.a)(s,2),O=u[0],b=u[1],x=function(n){t(e.filter((function(e){return e.runId!=n})))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(ce,{n:e.length,setOuterStartIndex:a,setOuterEndIndex:b}),e.slice(o,O).map((function(n){return Object(d.jsx)(Xn,{run:n,deleteCallback:x},n.runId)}))]})},ue=t(13),le=function(){var n=Object(r.useContext)(j),e=n.setRunner,t=n.setRuns,c=n.runs,i=On(),o=g();Object(r.useEffect)((function(){a()}),[c]);var a=function(){i.saveRuns(c)};return{initRuns:function(){t(i.getAllRuns())},initRunner:function(){e(o.getRunner())},removeRunner:function(){e(void 0),o.removeRunner()},deleteAll:function(){i.deleteRuns()}}},de=function(){var n=Object(r.useState)(!1),e=Object(l.a)(n,2),t=e[0],c=e[1],i=le();return Object(d.jsxs)(je,{onClick:function(){return c(!t)},children:[Object(d.jsx)(An.a,{icon:Tn.a}),Object(d.jsxs)(Oe,{show:t,children:[Object(d.jsx)(be,{onClick:function(){return i.deleteAll()},children:"Forget"}),Object(d.jsx)(be,{onClick:function(){return i.removeRunner()},children:"Logout"})]})]})},je=v.a.div(Un||(Un=Object(s.a)(["\n  padding-top: 5px;\n  position: relative;\n  display: inline-block;\n  color: white;\n  font-size: ",";\n"])),b.FONT_SIZE_LARGER),Oe=v.a.div(Pn||(Pn=Object(s.a)(["\n  color: white;\n  background-color: ",";\n  display: ",";\n  position: absolute;\n  z-index: 500;\n  right: -200%;\n  box-shadow: 0px 0px 10px #282c34;\n  width: 100px;\n"])),b.BACKGROUND_COLOR_MAIN,(function(n){return n.show?"block":"none"})),be=v.a.div(Hn||(Hn=Object(s.a)(["\n  text-align: center;\n  font-size: ",";\n  border: none;\n  cursor: pointer;\n  &:hover {\n    background-color: inherit;\n    color: white;\n  }\n"])),b.FONT_SIZE_LARGER),xe=function(){return Object(d.jsxs)(fe,{children:[Object(d.jsx)(he,{children:"Places"}),Object(d.jsx)(de,{})]})},fe=v.a.div(Zn||(Zn=Object(s.a)(["\n  width: 100%;\n  height: ",";\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 10px 40px 5px 10px;\n"])),b.HEADER_HEIGHT),he=v.a.h2(Kn||(Kn=Object(s.a)(["\n  color: #eee;\n  font-family: ",";\n  font-size: ",";\n  font-weight: bold;\n  line-height: 48px;\n  padding: 0 5px;\n  text-transform: uppercase;\n  min-width: 200px;\n"])),b.FONT_FAMILY_MAIN,b.FONT_SIZE_LARGE),pe=function(){var n=Object(r.useContext)(j).runner;return Object(d.jsx)(ve,{children:Object(d.jsxs)(ge,{children:["Willkommen",Object(d.jsx)("br",{}),n.runnerName]})})},ge=v.a.h3(Bn||(Bn=Object(s.a)(["\n  font-family: ",";\n  text-align: center;\n  font-size: ",";\n  color: white;\n"])),b.FONT_FAMILY_MAIN,b.FONT_SIZE_LARGE),ve=v.a.div(Jn||(Jn=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10% 0 0 0;\n"]))),me=function(){return Object(d.jsxs)(Se,{children:[Object(d.jsx)(Ne,{children:Object(d.jsx)(Re,{to:D.ROOT,children:Object(d.jsx)(An.a,{icon:Tn.e})})}),Object(d.jsx)(Ne,{children:Object(d.jsx)(Re,{to:D.NEW,children:Object(d.jsx)(An.a,{icon:Tn.f})})}),Object(d.jsx)(Ne,{children:Object(d.jsx)(Re,{to:D.RUNS,children:Object(d.jsx)(An.a,{icon:Tn.h})})}),Object(d.jsx)(Ne,{children:Object(d.jsx)(An.a,{icon:Tn.j})}),Object(d.jsx)(Ne,{children:Object(d.jsx)(An.a,{icon:Tn.d})})]})},Re=Object(v.a)(Dn.b)(Wn||(Wn=Object(s.a)(["\n  color: inherit;\n  font-size: inherit;\n  &:hover {\n    color: white;\n    background-color: inherit;\n  }\n  &:focus {\n    color: white;\n  }\n"]))),Se=v.a.div(Yn||(Yn=Object(s.a)(["\n  background-color: #282c34;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n  z-index: 1000;\n"]))),Ne=v.a.button(Vn||(Vn=Object(s.a)(["\n  height: ",";\n  width: 20%;\n  display: block;\n  color: #888;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: ",";\n  border: none;\n  background-color: inherit;\n"])),b.BOTTOM_NAVIGATION_HEIGHT,b.FONT_SIZE_LARGER),we=t(434),_e=t(435),Ie=t(197),Ee=t(90),ke=t(438),ye=t(198),Ae=t(201),Te=t(181),Ce=function n(e,t,c){Object(Te.a)(this,n),this.dataKey=e,this.name=t,this.displayName=c};Ce.DISTANCE=new Ce("distance","distance [km]","Distance"),Ce.SPEED=new Ce("speed","speed [km/h]","Speed"),Ce.ALTITUDE=new Ce("altitude","altitude [m]","Altitude");var Le,De,Fe,Me,Ge,ze,Ue,Pe,He,Ze=function(n){var e=n.color,t=n.id;return Object(d.jsxs)("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(d.jsx)("stop",{offset:"5%",stopColor:e,stopOpacity:.8}),Object(d.jsx)("stop",{offset:"95%",stopColor:e,stopOpacity:0})]})},Ke=function(n){var e=n.dataOptions,t=n.setData,c=n.title,i=n.backgroundColor,o=Object(r.useState)(!1),a=Object(l.a)(o,2),s=a[0],u=a[1],j=function(n){var c=function(n){var t=e.filter((function(e){return e.displayName===n}))[0];if(!t)throw new Error("No suitable Option found");return t}(n.target.textContent);t(c),u(!s)};return Object(d.jsxs)(Be,{onClick:function(){return u(!s)},children:[Object(d.jsx)(Je,{backgroundColor:i,children:c}),s&&Object(d.jsx)(We,{children:e.map((function(n,e){return Object(d.jsx)(Ye,{onClick:j,children:n.displayName},e)}))})]})},Be=v.a.div(Le||(Le=Object(s.a)([""]))),Je=v.a.div(De||(De=Object(s.a)(["\n  color: black;\n  font-size: ",";\n  background-color: ",";\n  padding: 5px;\n  border-radius: 5px;\n  cursor: pointer;\n"])),b.FONT_SIZE_NORMAL,(function(n){return n.backgroundColor})),We=v.a.ul(Fe||(Fe=Object(s.a)(["\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n"]))),Ye=v.a.li(Me||(Me=Object(s.a)(["\n  cursor: pointer;\n  background-color: black;\n  color: white;\n  padding: 5px;\n  border-radius: 5px;\n"]))),Ve=t(199),Xe=function(n){for(var e=n.run,t=($(),[Ce.DISTANCE,Ce.SPEED,Ce.ALTITUDE]),c=Object(r.useState)(t[0]),i=Object(l.a)(c,2),o=i[0],a=i[1],s=Object(r.useState)(t[1]),u=Object(l.a)(s,2),j=u[0],O=u[1],x=Object(Ve.a)(e.track.distances.map((function(n){return n.distance}))),f=[],h=0;h<x.length;h++){var p,g;f.push({time:new Date(e.track.trackPoints[h].time-e.startTime).toISOString().slice(12,19),distance:x[h],speed:parseInt(null===(p=e.track.trackPoints[h].speed)||void 0===p?void 0:p.toFixed(1)),altitude:parseInt(null===(g=e.track.trackPoints[h].altitude)||void 0===g?void 0:g.toFixed(1))})}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(we.a,{width:"100%",height:"30%",minHeight:"200px",children:Object(d.jsxs)(_e.a,{data:f,children:[Object(d.jsxs)("defs",{children:[Object(d.jsx)(Ze,{id:"colorDistance",color:b.BACKGROUND_COLOR_SECOND}),Object(d.jsx)(Ze,{id:"colorSpeed",color:b.BACKGROUND_COLOR_THIRD})]}),Object(d.jsx)(Ie.a,{dataKey:"time",stroke:"#fff",interval:"preserveStartEnd",tick:{fontSize:b.FONT_SIZE_NORMAL},dy:10,angle:-20,style:{fontSize:b.FONT_SIZE_SMALL}}),Object(d.jsx)(Ee.a,{contentStyle:{borderRadius:"10px",opacity:.5,maxHeight:"fit-content"}}),Object(d.jsx)(ke.a,{stroke:"#666",vertical:!1,strokeDasharray:"3 3"}),Object(d.jsx)(ye.a,{yAxisId:"left",type:"number",dataKey:o.dataKey,name:o.name,orientation:"left",stroke:b.BACKGROUND_COLOR_SECOND,dx:-5,style:{fontSize:b.FONT_SIZE_SMALL}}),Object(d.jsx)(Ae.a,{type:"monotone",dataKey:o.dataKey,name:o.name,stroke:b.BACKGROUND_COLOR_SECOND,fillOpacity:1,fill:"url(#colorDistance)",yAxisId:"left"}),Object(d.jsx)(ye.a,{yAxisId:"right",type:"number",dataKey:j.dataKey,name:j.name,orientation:"right",stroke:"#ff8c00",dx:5,style:{fontSize:b.FONT_SIZE_SMALL}}),Object(d.jsx)(Ae.a,{type:"monotone",dataKey:j.dataKey,name:j.name,stroke:"#ff8c00",fillOpacity:1,fill:"url(#colorSpeed)",yAxisId:"right"})]})}),Object(d.jsxs)(qe,{children:[Object(d.jsx)(Ke,{dataOptions:t,setData:a,title:o.name,backgroundColor:b.BACKGROUND_COLOR_SECOND}),Object(d.jsx)(Ke,{dataOptions:t,setData:O,title:j.name,backgroundColor:b.BACKGROUND_COLOR_THIRD})]}),Object(d.jsx)("div",{style:{color:"white"},children:JSON.stringify(e.track.distances.map((function(n){return n.distance})))}),Object(d.jsx)("div",{style:{color:"white"},children:JSON.stringify(e.track.trackPoints.map((function(n){return[n.latitude,n.longitude]})))})]})},qe=v.a.div(Ge||(Ge=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  padding-top: 20px;\n"]))),Qe=function(){var n=Object(ue.g)().runId,e=On(),t=Object(r.useMemo)((function(){return e.getRun(n)}),[n]);return t?Object(d.jsxs)(nt,{children:[Object(d.jsx)($e,{children:new Date(t.startTime).toLocaleString()}),Object(d.jsx)(Xe,{run:t})]}):Object(d.jsx)("div",{children:"No run found"})},$e=v.a.h1(ze||(ze=Object(s.a)(["\n  color: white;\n  font-weight: bold;\n  font-family: ",";\n  font-size: ",";\n"])),b.FONT_FAMILY_MAIN,b.FONT_SIZE_LARGER),nt=v.a.div(Ue||(Ue=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  height: 100%;\n  width: 100%;\n"])));var et=v.a.div(Pe||(Pe=Object(s.a)(["\n  width: 100vw;\n  height: 100vh - ",";\n"])),b.BOTTOM_NAVIGATION_HEIGHT),tt=v.a.div(He||(He=Object(s.a)(["\n  height: calc(\n    100vh - "," - ","\n  );\n  width: 100%;\n"])),b.BOTTOM_NAVIGATION_HEIGHT,b.HEADER_HEIGHT),ct=function(){var n=Object(r.useContext)(j).runner,e=le();return Object(r.useEffect)((function(){e.initRuns(),e.initRunner()}),[]),n?Object(d.jsxs)(et,{children:[Object(d.jsx)(xe,{}),Object(d.jsx)(tt,{children:Object(d.jsxs)(ue.c,{children:[Object(d.jsx)(ue.a,{path:D.ROOT,element:Object(d.jsx)(pe,{})}),Object(d.jsx)(ue.a,{path:D.NEW,element:Object(d.jsx)(yn,{})}),Object(d.jsx)(ue.a,{path:D.RUNS,element:Object(d.jsx)(se,{})}),Object(d.jsx)(ue.a,{path:D.DETAIL,element:Object(d.jsx)(Qe,{})})]})}),Object(d.jsx)(me,{})]}):Object(d.jsx)(et,{children:Object(d.jsx)(H,{})})},rt=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,444)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),c(n),r(n),i(n),o(n)}))};a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(O,{children:Object(d.jsx)(jn,{children:Object(d.jsx)(Dn.a,{children:Object(d.jsx)(ct,{})})})})}),document.getElementById("root")),rt()}},[[425,1,2]]]);
//# sourceMappingURL=main.2e2a1ca6.chunk.js.map