(this["webpackJsonprun-zone-ts"]=this["webpackJsonprun-zone-ts"]||[]).push([[0],{43:function(n,e,t){},44:function(n,e,t){},53:function(n,e,t){"use strict";t.r(e);var c,r=t(0),i=t.n(r),o=t(22),a=t.n(o),s=(t(43),t(3)),u=(t(44),t(17)),j=t(2),l=t(12),b=t(1),d=Object(r.createContext)({runnerPosition:void 0,runnerSpeed:null,runner:void 0,runs:[],setRunner:function(n){},setRuns:function(n){},addRun:function(n){},setRunnerPosition:function(n){}}),O=function(n){var e=n.children,t=Object(r.useState)([]),c=Object(j.a)(t,2),i=c[0],o=c[1],a=Object(r.useState)(),s=Object(j.a)(a,2),O=s[0],x=s[1],h=Object(r.useState)(null),f=Object(j.a)(h,2),p=f[0],g=f[1],v=Object(r.useState)(),R=Object(j.a)(v,2),m=R[0],S=R[1],w={enableHighAccuracy:!0},N=function(n){console.warn("ERROR(".concat(n.code,"): ").concat(n.message))},k=function(n){x(new l.LatLng(n.coords.latitude,n.coords.longitude)),n.coords.speed&&g((3.6*n.coords.speed).toFixed(1))};return Object(r.useEffect)((function(){navigator.geolocation.watchPosition(k,N,w)}),[]),Object(b.jsx)(d.Provider,{value:{runner:m,setRunner:S,runs:i,setRuns:o,runnerPosition:O,setRunnerPosition:x,addRun:function(n){o((function(e){return e.length>0?[].concat(Object(u.a)(e),[n]):[n]}))},runnerSpeed:p},children:e})};!function(n){n.RUNNER="runner",n.RUNS="runs"}(c||(c={}));var x,h,f,p,g,v=function(){return{getRunner:function(){var n=localStorage.getItem(c.RUNNER);return n?JSON.parse(n):void 0},setRunner:function(n){localStorage.setItem(c.RUNNER,JSON.stringify(n))},removeRunner:function(){localStorage.removeItem(c.RUNNER)}}},R=t(4);!function(n){n.FONT_FAMILY_MAIN="Open Sans Condensed, sans-serif",n.BACKGROUND_COLOR_MAIN="#343a40",n.BACKGROUND_COLOR_SECOND="#5f9ea0",n.FONT_SIZE_NORMAL="16px",n.FONT_SIZE_LARGER="20px",n.FONT_SIZE_LARGE="24px"}(x||(x={}));var m,S,w,N,k,E,_,C,T,I,y,A,F,L,z,P,M,D,Z=function(n){var e=Object(r.useState)(""),t=Object(j.a)(e,2),c=t[0],i=t[1],o=v(),a=Object(r.useContext)(d).setRunner;return Object(b.jsxs)(U,{children:[Object(b.jsx)(G,{children:"Willkommen!"}),Object(b.jsx)(W,{type:"text",onChange:function(n){i(n.target.value)},value:c,placeholder:"Wie hei\xdft du?"}),Object(b.jsx)(B,{onClick:function(){console.log("Login "+c);var n={runnerName:c,runnerRunIds:[]};o.setRunner(n),a(n)},children:"Login"})]})},G=R.a.h3(h||(h=Object(s.a)(["\n  font-family: ",";\n  font-size: ",";\n  text-transform: uppercase;\n  color: #343a40;\n  font-weight: bold;\n  margin: 0 0 30% 0;\n"])),x.FONT_FAMILY_MAIN,x.FONT_SIZE_LARGER),U=R.a.div(f||(f=Object(s.a)(["\n  width: 20%;\n  min-width: 300px;\n  height: 80%;\n  min-height: 500px;\n  background-color: aliceblue;\n  border-radius: 10px;\n  box-shadow: 10px 10px #282c34;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 10% auto auto auto;\n"]))),W=R.a.input(p||(p=Object(s.a)(["\n  width: 70%;\n  height: 40px;\n  border: none;\n  border-radius: 10px;\n  margin: 5px;\n  text-align: center;\n"]))),B=R.a.button(g||(g=Object(s.a)(["\n  width: 70%;\n  height: 50px;\n  background-color: #343a40;\n  color: white;\n  border-radius: 10px;\n  margin: 5px;\n"]))),J=t(36),X=t(60),K=t(58),Y=t(55),H=t(31),V=function(){return{track2Polygon:function(n){return n.map((function(n){return[n.latitude,n.longitude]}))},calcArea:function(n){var e=n.map((function(n){return[n.latitude,n.longitude]})),t=Object(H.polygon)([e]);return Object(H.area)(t)/1e6}}},q=function(n){var e=n.runs,t=V();return Object(b.jsx)(b.Fragment,{children:e.map((function(n,e){return Object(b.jsx)(Y.a,{positions:t.track2Polygon(n.track.trackPoints)})}))})},Q=t(56),$=t(57),nn=function(){var n=Object(r.useContext)(d).runnerPosition,e=Object(Q.a)();return Object(r.useEffect)((function(){n&&e.setView(n)}),[n]),Object(b.jsx)(b.Fragment,{children:n&&Object(b.jsx)($.a,{position:n})})},en=function(n){var e=n.setShowRuns;return Object(b.jsx)("div",{className:"leaflet-top leaflet-right",children:Object(b.jsx)("div",{className:"leaflet-control",children:Object(b.jsx)("button",{onClick:function(){return e((function(n){return!n}))},children:"Show Runs"})})})},tn=function(n){Object(J.a)(n);var e=Object(r.useContext)(d).runs,t=Object(r.useState)(!1),c=Object(j.a)(t,2),i=c[0],o=c[1];return Object(b.jsxs)(cn,{className:"basicMap",center:[0,0],zoom:20,scrollWheelZoom:!1,children:[Object(b.jsx)(X.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"}),i&&Object(b.jsx)(q,{runs:e}),Object(b.jsx)(nn,{}),Object(b.jsx)(en,{setShowRuns:o})]})},cn=Object(R.a)(K.a)(m||(m=Object(s.a)(["\n  width: 100%;\n  height: 400px;\n  border-radius: 8px;\n"]))),rn=function(n){return Object(b.jsx)(tn,{})},on=Object(r.createContext)({}),an=function(n){var e=n.children,t=Object(r.useState)(),c=Object(j.a)(t,2),i=c[0],o=c[1],a=Object(r.useState)([]),s=Object(j.a)(a,2),l=s[0],d=s[1],O=Object(r.useState)(),x=Object(j.a)(O,2),h=x[0],f=x[1],p=Object(r.useState)(!1),g=Object(j.a)(p,2),v=g[0],R=g[1];return Object(b.jsx)(on.Provider,{value:{startTime:i,isRunning:v,setIsRunning:R,run:h,startRun:function(){console.log("Start Run"),o(Date.now()),R(!0)},stopRun:function(){console.log("Stop Run"),f({track:{trackPoints:l},startTime:i||Date.now(),endTime:Date.now()}),R(!1)},addTrackPoint:function(n){console.log("Add TrackPoint: ",n),d((function(e){return[].concat(Object(u.a)(e),[n])}))},resetRun:function(){f(void 0),o(void 0),d([])}},children:e})},sn=function(){var n=localStorage.getItem(c.RUNS),e=n?JSON.parse(n):void 0;return{saveRuns:function(n){localStorage.setItem(c.RUNS,JSON.stringify(n))},getAllRuns:function(){return e}}},un=t(59),jn=t(61),ln=function(){var n=Object(r.useContext)(d).runnerPosition,e=Object(r.useContext)(on),t=e.addTrackPoint,c=e.startRun,i=e.stopRun,o=e.run,a=e.resetRun,s=e.isRunning,j=Object(r.useContext)(d),l=j.addRun,O=j.runs,x=sn();Object(r.useEffect)((function(){s&&h()}),[n]);var h=function(){n&&t({latitude:n.lat,longitude:n.lng,time:Date.now()})};return Object(b.jsxs)(un.a,{size:"lg",children:[Object(b.jsx)(jn.a,{onClick:function(){c()},disabled:s,variant:"dark",children:"Start"}),Object(b.jsx)(jn.a,{onClick:function(){i()},disabled:!s,variant:"dark",children:"Stop"}),Object(b.jsx)(jn.a,{onClick:function(){console.log("Save run"),O.length>0?x.saveRuns([].concat(Object(u.a)(O),[o])):x.saveRuns([o]),l(o)},disabled:s,variant:"dark",children:"Save"}),Object(b.jsx)(jn.a,{onClick:function(){console.log("Reset run"),a()},disabled:s,variant:"dark",children:"Reset"})]})},bn=function(n){var e=n.property,t=n.value;return Object(b.jsxs)(dn,{children:[Object(b.jsx)(xn,{children:e}),Object(b.jsx)(hn,{children:t})]})},dn=R.a.div(S||(S=Object(s.a)(["\n  width: 20%;\n  min-width: 120px;\n  background-color: #555;\n  border-radius: 10px;\n  padding: 10px;\n  margin: 10px 5px 10px 5px;\n"]))),On=R.a.div(w||(w=Object(s.a)(["\n  font-family: Open Sans Condensed, sans-serif;\n  font-weight: bold;\n  text-transform: uppercase;\n  color: #eee;\n"]))),xn=Object(R.a)(On)(N||(N=Object(s.a)(["\n  font-size: ",";\n"])),x.FONT_SIZE_LARGER),hn=Object(R.a)(On)(k||(k=Object(s.a)(["\n  font-size: ",";\n"])),x.FONT_SIZE_LARGER),fn=function(){var n=Object(r.useContext)(d).runnerSpeed,e=Object(r.useContext)(on),t=e.startTime,c=e.isRunning,i=Object(r.useState)(0),o=Object(j.a)(i,2),a=o[0],s=o[1],u=Object(r.useState)(),l=Object(j.a)(u,2),O=l[0],x=l[1];return Object(r.useEffect)((function(){if(c){var n=setInterval((function(){t&&s(Date.now()-t)}),1e3);x(n)}else O&&clearInterval(O)}),[c]),Object(b.jsxs)(pn,{children:[Object(b.jsx)(bn,{property:"Speed",value:n?n+" [km/h]":"--"}),Object(b.jsx)(bn,{property:"Time",value:new Date(a).toISOString().substr(11,8)})]})},pn=R.a.div(E||(E=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 50%;\n  padding: 5px;\n  flex-wrap: wrap;\n"]))),gn=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(rn,{}),Object(b.jsx)(ln,{}),Object(b.jsx)(fn,{})]})},vn=t(10),Rn=t(11),mn=function(n){var e=n.run,t=Object(r.useState)(),c=Object(j.a)(t,2),i=c[0],o=c[1],a=Object(r.useState)(0),s=Object(j.a)(a,2),u=(s[0],s[1],Object(r.useState)(!1)),d=Object(j.a)(u,2),O=d[0],x=d[1],h=V();return Object(b.jsxs)(kn,{onTouchStart:function(n){console.log("start ",n.targetTouches[0].clientX),o(n.targetTouches[0].clientX),n.preventDefault()},onTouchMove:function(n){console.log("move",i-n.targetTouches[0].clientX);var e=n.targetTouches[0].clientX;i-e>50&&x(!0)},onTouchEnd:function(n){n.preventDefault(),console.log("end ",n.changedTouches[0].clientX)},children:[Object(b.jsxs)(En,{isActive:O,children:[" ",Object(b.jsx)(vn.a,{icon:Rn.i})]}),Object(b.jsxs)(Cn,{className:"basicMap",center:function(n){var e=n.track.trackPoints[0];return new l.LatLng(e.latitude,e.longitude)}(e),zoom:20,dragging:!1,zoomControl:!1,children:[Object(b.jsx)(X.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"}),Object(b.jsx)(Y.a,{positions:h.track2Polygon(e.track.trackPoints)})]}),Object(b.jsxs)(_n,{children:[Object(b.jsxs)(wn,{children:[Object(b.jsx)(vn.a,{icon:Rn.c}),Object(b.jsx)(Nn,{children:new Date(e.startTime).toDateString()})]}),Object(b.jsxs)(wn,{children:[Object(b.jsx)(vn.a,{icon:Rn.d}),Object(b.jsx)(Nn,{children:new Date(e.endTime-e.startTime).toISOString().substr(11,8)})]}),Object(b.jsxs)(wn,{children:[Object(b.jsx)(vn.a,{icon:Rn.g}),Object(b.jsx)(Nn,{children:"10.2 km"})]}),Object(b.jsx)(Sn,{children:"Details"})]})]})},Sn=R.a.button(_||(_=Object(s.a)(["\n  max-width: 150px;\n  background-color: ",";\n  color: #282c34;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 5px 5px 10px #282c34;\n  &:active {\n    box-shadow: 0 0;\n  }\n"])),x.BACKGROUND_COLOR_SECOND),wn=R.a.div(C||(C=Object(s.a)(["\n  color: white;\n  font-size: ",";\n  font-family: ",";\n  display: inline-flex;\n  margin: 5px;\n"])),x.FONT_SIZE_NORMAL,x.FONT_FAMILY_MAIN),Nn=R.a.div(T||(T=Object(s.a)(["\n  margin-left: 10px;\n"]))),kn=R.a.div(I||(I=Object(s.a)(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  box-shadow: 5px 5px 5px #282c34;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  cursor: pointer;\n"]))),En=R.a.div(y||(y=Object(s.a)(["\n  color: white;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 5px;\n  visibility: ",";\n  background-color: rgba(52, 58, 64, 0.9);\n  font-size: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),(function(n){return n.isActive?"visible":"hidden"}),x.FONT_SIZE_LARGER),_n=R.a.div(A||(A=Object(s.a)(["\n  width: 50%;\n  padding-left: 5px;\n  display: flex;\n  flex-direction: column;\n"]))),Cn=Object(R.a)(K.a)(F||(F=Object(s.a)(["\n  width: 130px;\n  height: 130px;\n  border-radius: 8px;\n  border: none;\n  margin: 5px;\n  z-index: 0;\n"]))),Tn=function(n){var e=n.n,t=n.setOuterStartIndex,c=n.setOuterEndIndex,i=Object(r.useState)(3),o=Object(j.a)(i,2),a=o[0],s=(o[1],Object(r.useState)(0)),u=Object(j.a)(s,2),l=(u[0],u[1]),d=Object(r.useState)(a),O=Object(j.a)(d,2),x=(O[0],O[1]),h=Object(r.useState)(Math.ceil(e/a)),f=Object(j.a)(h,2),p=f[0],g=(f[1],Object(r.useState)(1)),v=Object(j.a)(g,2),R=v[0],m=v[1];Object(r.useEffect)((function(){var n=(R-1)*a,r=n+a>e?e:n+a;l(n),t(n),x(r),c(r)}),[a,R]);var S=function(n){m(w(R+n))},w=function(n){return n>p&&(n=p),n<1&&(n=1),n};return Object(b.jsxs)(Fn,{children:[Object(b.jsx)(In,{onClick:function(){return S(-1)},children:"<"}),Object(b.jsx)(An,{onChange:function(n){m(w(+n.currentTarget.value))},value:R}),Object(b.jsxs)(yn,{children:[" / ",p]}),Object(b.jsx)(In,{onClick:function(){return S(1)},children:">"})]})},In=R.a.button(L||(L=Object(s.a)(["\n  background-color: #343a40;\n  color: white;\n  border: 1px white;\n"]))),yn=R.a.div(z||(z=Object(s.a)(["\n  font-size: inherit;\n  width: 30px;\n  padding: 2px 5px;\n"]))),An=R.a.input(P||(P=Object(s.a)(["\n  width: 25px;\n  text-align: center;\n  font-size: inherit;\n"]))),Fn=R.a.div(M||(M=Object(s.a)(["\n  color: white;\n  display: flex;\n  font-size: ",";\n  float: right;\n"])),x.FONT_SIZE_NORMAL),Ln=function(){var n=Object(r.useContext)(d).runs,e=Object(r.useState)(),t=Object(j.a)(e,2),c=t[0],i=t[1],o=Object(r.useState)(),a=Object(j.a)(o,2),s=a[0],u=a[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Tn,{n:n.length,setOuterStartIndex:i,setOuterEndIndex:u}),n.slice(c,s).map((function(n){return Object(b.jsx)(mn,{run:n})}))]})};!function(n){n.ROOT="/",n.NEW="new",n.RUNS="runs"}(D||(D={}));var zn,Pn,Mn,Dn,Zn,Gn,Un,Wn,Bn,Jn,Xn,Kn=t(5),Yn=function(){var n=Object(r.useContext)(d),e=n.setRunner,t=n.setRuns,c=sn(),i=v();return{initRuns:function(){t(c.getAllRuns())},initRunner:function(){e(i.getRunner())},removeRunner:function(){e(void 0),i.removeRunner()}}},Hn=function(){var n=Object(r.useState)(!1),e=Object(j.a)(n,2),t=e[0],c=e[1],i=Yn();return Object(b.jsxs)(Vn,{onClick:function(){return c(!t)},children:[Object(b.jsx)(vn.a,{icon:Rn.a}),Object(b.jsx)(qn,{show:t,children:Object(b.jsx)(Qn,{onClick:function(){return i.removeRunner()},children:"Logout"})})]})},Vn=R.a.div(zn||(zn=Object(s.a)(["\n  position: relative;\n  display: inline-block;\n  color: white;\n  font-size: ",";\n"])),x.FONT_SIZE_LARGER),qn=R.a.div(Pn||(Pn=Object(s.a)(["\n  color: white;\n  background-color: ",";\n  display: ",";\n  position: absolute;\n  z-index: 1;\n  right: -200%;\n  box-shadow: 0px 0px 10px #282c34;\n  width: 100px;\n"])),x.BACKGROUND_COLOR_MAIN,(function(n){return n.show?"block":"none"})),Qn=R.a.div(Mn||(Mn=Object(s.a)(["\n  text-align: center;\n  font-size: ",";\n  border: none;\n  cursor: pointer;\n  &:hover {\n    background-color: aliceblue;\n    color: #282c34;\n  }\n"])),x.FONT_SIZE_LARGER),$n=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(ne,{children:"Run Zone"}),Object(b.jsx)(Hn,{})]})},ne=R.a.h2(Dn||(Dn=Object(s.a)(["\n  color: #eee;\n  font-family: Open Sans Condensed, sans-serif;\n  font-size: ",";\n  font-weight: bold;\n  line-height: 48px;\n  padding: 0 5px;\n  text-align: center;\n  text-transform: uppercase;\n  min-width: 200px;\n"])),x.FONT_SIZE_LARGER),ee=function(){var n=Object(r.useContext)(d).runner;return Object(b.jsx)(ce,{children:Object(b.jsxs)(te,{children:["Willkommen",Object(b.jsx)("br",{}),n.runnerName]})})},te=R.a.h3(Zn||(Zn=Object(s.a)(["\n  font-family: ",";\n  text-align: center;\n  font-size: ",";\n  color: white;\n"])),x.FONT_FAMILY_MAIN,x.FONT_SIZE_LARGE),ce=R.a.div(Gn||(Gn=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10% 0 0 0;\n"]))),re=t(18),ie=function(){return Object(b.jsxs)(ae,{children:[Object(b.jsx)(se,{children:Object(b.jsx)(oe,{to:D.NEW,children:Object(b.jsx)(vn.a,{icon:Rn.f})})}),Object(b.jsx)(se,{children:Object(b.jsx)(oe,{to:D.RUNS,children:Object(b.jsx)(vn.a,{icon:Rn.h})})}),Object(b.jsx)(se,{children:Object(b.jsx)(vn.a,{icon:Rn.b})}),Object(b.jsx)(se,{children:Object(b.jsx)(vn.a,{icon:Rn.j})}),Object(b.jsx)(se,{children:Object(b.jsx)(vn.a,{icon:Rn.e})})]})},oe=Object(R.a)(re.b)(Un||(Un=Object(s.a)(["\n  color: inherit;\n  font-size: inherit;\n  &:hover {\n    color: inherit;\n    background-color: inherit;\n  }\n"]))),ae=R.a.div(Wn||(Wn=Object(s.a)(["\n  background-color: #282c34;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n  z-index: 1000;\n"]))),se=R.a.button(Bn||(Bn=Object(s.a)(["\n  height: 60px;\n  width: 20%;\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: ",";\n  border: 1px solid black;\n  background-color: inherit;\n"])),x.FONT_SIZE_LARGER);var ue=R.a.div(Jn||(Jn=Object(s.a)(["\n  width: 80%;\n  height: 100%;\n  margin: auto;\n"]))),je=R.a.div(Xn||(Xn=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 1% 0 1% 0;\n  flex-wrap: wrap;\n  margin: 20px 0 20px 0;\n"]))),le=function(){var n=Object(r.useContext)(d).runner,e=Yn();return Object(r.useEffect)((function(){e.initRuns(),e.initRunner()}),[]),n?Object(b.jsxs)(ue,{children:[Object(b.jsx)(je,{children:Object(b.jsx)($n,{})}),Object(b.jsxs)(Kn.c,{children:[Object(b.jsx)(Kn.a,{path:D.ROOT,element:Object(b.jsx)(ee,{})}),Object(b.jsx)(Kn.a,{path:D.NEW,element:Object(b.jsx)(gn,{})}),Object(b.jsx)(Kn.a,{path:D.RUNS,element:Object(b.jsx)(Ln,{})})]}),Object(b.jsx)(ie,{})]}):Object(b.jsx)(ue,{children:Object(b.jsx)(Z,{})})},be=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,62)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),c(n),r(n),i(n),o(n)}))};a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(O,{children:Object(b.jsx)(an,{children:Object(b.jsx)(re.a,{children:Object(b.jsx)(le,{})})})})}),document.getElementById("root")),be()}},[[53,1,2]]]);
//# sourceMappingURL=main.9d2b7f8a.chunk.js.map