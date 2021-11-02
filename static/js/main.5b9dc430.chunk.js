(this["webpackJsonprun-zone-ts"]=this["webpackJsonprun-zone-ts"]||[]).push([[0],{23:function(n,t,e){},24:function(n,t,e){},28:function(n,t,e){"use strict";e.r(t);var r=e(0),u=e.n(r),c=e(12),o=e.n(c),a=(e(23),e(24),e(7)),i=e.n(a),s=e(14),j=function(n,t){return{getRuns:function(e){return Object(s.a)(i.a.mark((function r(){var u,c;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return u=[],r.next=3,n.getTracks(e);case 3:return c=r.sent,r.next=6,Promise.all(c.map(function(){var n=Object(s.a)(i.a.mark((function n(e){var r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.getRun(e);case 2:(r=n.sent)&&u.push(r);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()));case 6:return r.abrupt("return",u);case 7:case"end":return r.stop()}}),r)})))()},getRunner:function(t){return Object(s.a)(i.a.mark((function e(){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getRunner(t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))()}}},b=e(2),l=e(32),f=e(33),O=e(9),d=e(1),g=Object(r.createContext)({runnerPosition:void 0,runner:{runnerName:"",runnerRunIds:[]},runs:[],setRunner:function(n){},setRuns:function(n){},addRun:function(n){},setRunnerPosition:function(n){}}),v=function(n){var t=n.children,e=Object(r.useState)(),u=Object(b.a)(e,2),c=u[0],o=u[1],a=Object(r.useState)({runnerName:"",runnerRunIds:[]}),i=Object(b.a)(a,2),s=i[0],j=i[1],l=Object(r.useState)([]),f=Object(b.a)(l,2),v=f[0],x=f[1];return Object(d.jsx)(g.Provider,{value:{runner:s,setRunner:j,runs:v,setRuns:x,runnerPosition:c,setRunnerPosition:o,addRun:function(n){x((function(t){return[].concat(Object(O.a)(t),[n])}))}},children:t})},x=e(29),h=e(16),p=function(){return{track2Polygon:function(n){return n.map((function(n){return[n.latitude,n.longitude]}))},calcArea:function(n){var t=n.map((function(n){return[n.latitude,n.longitude]})),e=Object(h.polygon)([t]);return Object(h.area)(e)/1e6}}},m=function(n){var t=n.runs,e=p();return Object(d.jsx)(d.Fragment,{children:t.map((function(n,t){return Object(d.jsx)(x.a,{positions:e.track2Polygon(n.track.trackPoints)})}))})},R=e(30),k=e(31),C=e(4),P=function(){var n=Object(r.useContext)(g),t=n.runnerPosition,e=n.setRunnerPosition,u=Object(R.a)();return Object(r.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(n){e(new C.LatLng(n.coords.latitude,n.coords.longitude))}))}),[]),Object(r.useEffect)((function(){t&&u.setView(t)}),[t]),Object(d.jsx)(d.Fragment,{children:t&&Object(d.jsx)(k.a,{position:t})})},S=function(n){var t=n.runnersRunController,e=Object(r.useContext)(g),u=e.runner,c=e.runs,o=e.setRuns,a=Object(r.useState)(!1),i=Object(b.a)(a,2),s=i[0],j=i[1];return Object(r.useEffect)((function(){t.getRunsOfRunner(u.runnerName).then((function(n){o(n)}))}),[u]),Object(d.jsxs)("div",{style:{width:"100%",height:"50%"},children:[Object(d.jsxs)(l.a,{className:"basicMap",center:[0,0],zoom:13,scrollWheelZoom:!1,children:[Object(d.jsx)(f.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"}),s&&Object(d.jsx)(m,{runs:c}),Object(d.jsx)(P,{})]}),Object(d.jsx)("button",{onClick:function(){return j(!s)},children:"Show Runs"})]})},w=[{runnerName:"Tim",runnerRunIds:[]},{runnerName:"Leonie",runnerRunIds:[3]}],N=function(){return{getTracks:function(n){var t=[];for(var e in w)w[e].runnerName===n&&(t=w[e].runnerRunIds);return Promise.resolve(t)},getRunner:function(n){return Promise.resolve(w.find((function(t){return t.runnerName===n})))}}},I=function(){var n=localStorage.getItem("runs"),t=n?JSON.parse(n):void 0;return{getRun:function(n){var e=void 0;for(var r in t)t[r].runId===n&&(e=t[r]);return Promise.resolve(e)},saveRuns:function(n){localStorage.setItem("runs",JSON.stringify(n))}}},y=function(n){var t=N(),e=I(),u=function(n){return{getRunsOfRunner:Object(r.useCallback)((function(t){return n.getRuns(t)}),[n])}}(j(t,e));return Object(d.jsx)(S,{runnersRunController:u})},F=function(n){var t=Object(r.useState)(0),e=Object(b.a)(t,2),u=e[0],c=e[1],o=Object(r.useContext)(g).runs,a=p();return Object(r.useEffect)((function(){c(o.map((function(n){return a.calcArea(n.track.trackPoints)})).reduce((function(n,t){return n+t}),0))}),[o]),Object(d.jsxs)("div",{children:["Area: ",u.toFixed(2)," [km^2]"]})},T=function(n){var t=Object(r.useState)(""),e=Object(b.a)(t,2),u=e[0],c=e[1],o=N(),a=I(),i=j(o,a),s=Object(r.useContext)(g).setRunner;return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",onChange:function(n){c(n.target.value)},value:u,placeholder:"Enter your Name:"}),Object(d.jsx)("button",{onClick:function(){console.log("Login "+u),i.getRunner(u).then((function(n){n&&s(n)}))},children:"Login"})]})},L=function(n){var t=Object(r.useContext)(g).runner;return Object(d.jsxs)("div",{children:["Hello ",t.runnerName]})},E=Object(r.createContext)({}),D=function(n){var t=n.children,e=Object(r.useState)(),u=Object(b.a)(e,2),c=u[0],o=u[1],a=Object(r.useState)([]),i=Object(b.a)(a,2),s=i[0],j=i[1],l=Object(r.useState)(),f=Object(b.a)(l,2),g=f[0],v=f[1];return Object(d.jsx)(E.Provider,{value:{run:g,startRun:function(){console.log("Start Run"),o(Date.now())},stopRun:function(){console.log("Stop Run"),v({track:{trackPoints:s},startTime:c||Date.now(),endTime:Date.now()})},addTrackPoint:function(n){console.log("Add TrackPoint: ",n),j((function(t){return[].concat(Object(O.a)(t),[n])}))}},children:t})},z=function(){var n=Object(r.useContext)(E),t=n.addTrackPoint,e=n.startRun,u=n.stopRun,c=n.run,o=Object(r.useContext)(g),a=o.addRun,i=o.runs,s=Object(r.useState)(),j=Object(b.a)(s,2),l=j[0],f=j[1],v=I();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{onClick:function(){e();var n=setInterval((function(){navigator.geolocation.getCurrentPosition((function(n){t({latitude:n.coords.latitude,longitude:n.coords.longitude,time:Date.now()})}))}),2e3);f(n)},children:"Start"}),Object(d.jsx)("button",{onClick:function(){u(),clearInterval(l)},children:"Stop"}),Object(d.jsx)("button",{onClick:function(){v.saveRuns([].concat(Object(O.a)(i),[c])),a(c)},children:"Save"})]})};var A=function(){var n=Object(r.useContext)(g).runner;return Object(d.jsx)(d.Fragment,{children:""===(null===n||void 0===n?void 0:n.runnerName)?Object(d.jsx)(T,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(L,{}),Object(d.jsx)(y,{}),Object(d.jsx)(F,{}),Object(d.jsx)(z,{})]})})},J=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,34)).then((function(t){var e=t.getCLS,r=t.getFID,u=t.getFCP,c=t.getLCP,o=t.getTTFB;e(n),r(n),u(n),c(n),o(n)}))};o.a.render(Object(d.jsx)(u.a.StrictMode,{children:Object(d.jsx)(v,{children:Object(d.jsx)(D,{children:Object(d.jsx)(A,{})})})}),document.getElementById("root")),J()}},[[28,1,2]]]);
//# sourceMappingURL=main.5b9dc430.chunk.js.map