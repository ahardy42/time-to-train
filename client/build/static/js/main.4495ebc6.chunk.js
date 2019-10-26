(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),i=a.n(o),l=(a(94),a(28)),c=a(25),s=a(33),m=a(34),u=a(37),h=a(62),p=a(41),f=Object(n.createContext)({choices:{},setChoices:function(){}}),d=a(133),g=a(143),E=a(77),y=a(160),v=a(135),b=a(137),C=a(138),w=a(139),j=a(140),x=a(141),T=a(142),O=Object(d.a)({GridList:{justifyContent:"space-between"},Tile:{display:"flex",alignContent:"center",justifyContent:"center"},TileCard:{},Typography:{display:"flex",justifyContent:"center",alignItems:"center",padding:"0 5px"}}),k=function(e){switch(e){case"drive":return r.a.createElement(v.a,{fontSize:"large",htmlColor:"green"});case"bike":return r.a.createElement(b.a,{fontSize:"large",htmlColor:"green"});case"walk":case"hike":return r.a.createElement(C.a,{fontSize:"large",htmlColor:"green"});case"run":return r.a.createElement(w.a,{fontSize:"large",htmlColor:"green"});default:return null}},N=function(e){var t=e.choices,a=t.mode,n=t.timeLimit,o=t.travelType,i=O();return r.a.createElement(j.a,{cellHeight:"auto",className:i.GridList,cols:3,style:{marginBottom:"5px"}},r.a.createElement(x.a,{cols:1,className:i.Tile},r.a.createElement(T.a,{elevation:2,className:i.TileCard},r.a.createElement(E.a,{variant:"h6",className:i.Typography},"Travel Method: ",k(o)))),r.a.createElement(x.a,{cols:1,className:i.Tile},r.a.createElement(T.a,{elevation:2,className:i.TileCard},r.a.createElement(E.a,{variant:"h6",className:i.Typography},"Time Limit: ",n," minutes"))),r.a.createElement(x.a,{cols:1,className:i.Tile},r.a.createElement(T.a,{elevation:2,className:i.TileCard},r.a.createElement(E.a,{variant:"h6",className:i.Typography},"Trail Type: ",k(a)))))},L=Object(d.a)({root:{display:"flex",flexDirection:"row",flexGrow:1,height:"10vh"},appBar:{display:"flex",flexDirection:"column",flexGrow:1},Typography:{margin:"auto"}}),P=function(e){var t=e.history,a=(e.choices,L());return r.a.createElement("div",{className:a.root},r.a.createElement(g.a,{position:"static",className:a.appBar},r.a.createElement(E.a,{className:a.Typography,variant:"h6"},function(e){return"/"===e.location.pathname?"Welcome to Time for Training!":"Get after it!"}(t)),r.a.createElement(y.a,{mdDown:!0},r.a.createElement(f.Consumer,null,(function(e){return function(e){return"mode"in e?r.a.createElement(N,{choices:e}):null}(e.choices)})))))},S=a(31),D=a.n(S),F=a(48),I=a(10),B=a.n(I),G=a(145),W=a(76),H=a(148),M=a(149),z=a(144),A=a(165),J=a(166),R=a(167),Y=a(161),_=a(146),V=a(147),Z=a(73),$=a(17),q=(a(99),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"createLeafletElement",value:function(e){var t=e.leaflet.map,a=e.options;return B.a.control.locate(a).addTo(t)}}]),t}(Z.a)),K=Object($.b)(q),Q=z.a.Overlay,U=z.a.BaseLayer,X=Object(d.a)({root:{height:"80vh"},Paper:{width:"80%",height:"80%"},Fab:{position:"absolute",left:"10%",bottom:"15%",zIndex:1e3,marginLeft:"-32px"}}),ee=function(e){var t=e.trailsInfo,a=e.setChoices,o=(Object(n.useContext)(f).choices,X());return r.a.createElement(G.a,{container:!0,justify:"center",alignContent:"center",className:o.root},r.a.createElement(W.a,{elevation:2,className:o.Paper},r.a.createElement(J.a,{id:"myMap",center:[0,0],zoom:3,bounds:t.bounds?t.bounds:null},r.a.createElement(z.a,{position:"topleft"},r.a.createElement(U,{checked:!0,name:"openstreetmap"},r.a.createElement(R.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})),r.a.createElement(Q,{name:"distance polygon",checked:!0},r.a.createElement(Y.a,{positions:t.polygon||[]})),r.a.createElement(Q,{name:"trails",checked:!0},r.a.createElement(_.a,null,t.trails.map((function(e,t){return r.a.createElement(V.a,{key:t,position:[e.latitude,e.longitude]},function(e){var t=e.name,a=e.imgSmall,n=e.url,o=e.summary;return r.a.createElement(A.a,{options:{autoPan:!0}},r.a.createElement("div",{className:"popup-content"},r.a.createElement("h3",null,t),r.a.createElement("p",null,o),r.a.createElement("br",null),r.a.createElement("img",{src:a,alt:"trail image"}),r.a.createElement("br",null),r.a.createElement("a",{href:n,target:"_blank"},"here's some more info...")))}(e))}))))),r.a.createElement(K,{options:{position:"topleft",follow:!1,setView:!1,keepCurrentZoomLevel:!0}})),r.a.createElement(H.a,{color:"primary",className:o.Fab,onClick:function(e){a({})}},r.a.createElement(M.a,null))))},te={getLocation:function(){return new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t)}))},getTrails:function(){var e=Object(F.a)(D.a.mark((function e(t,a,n,r){var o,i;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/trails/".concat(t,"?lat=").concat(a.lat,"&lng=").concat(a.lng,"&mode=").concat(n,"&time=").concat(r));case 2:return o=e.sent,e.next=5,o.json();case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),getPosition:function(e){return{lat:e.latitude,lng:e.longitude}},getTimeLimit:function(e){return 60*e}},ae=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=Object(F.a)(D.a.mark((function e(){var t,n,r,o,i,l,c,s,m,u;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.getLocation();case 2:return t=e.sent,n=t.coords,r=te.getPosition(n),o=a.props.choices,i=o.mode,l=o.travelType,c=o.timeLimit,s=te.getTimeLimit(c),e.next=9,te.getTrails(i,r,l,s);case 9:m=e.sent,u=B.a.polygon(m.polygon).getBounds(),m.bounds=u,a.setState({trailsInfo:m});case 13:case"end":return e.stop()}}),e)}))),a.state={trailsInfo:{trails:[],polygon:[]}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(ee,{setChoices:this.props.setChoices,trailsInfo:this.state.trailsInfo})}}]),t}(r.a.Component),ne=a(150),re=Object(d.a)({root:{display:"flex",flexDirection:"row",flexGrow:1,height:"10vh"},appBarFooter:{position:"fixed",bottom:0,display:"flex",flexDirection:"row",flexGrow:1},Typography:{margin:"auto"}}),oe=function(e){var t=re();return r.a.createElement("div",{className:t.root},r.a.createElement(g.a,{position:"relative",className:t.appBarFooter},r.a.createElement(E.a,{className:t.Typography,variant:"h6"},"Andy Hardy | ",r.a.createElement(ne.a,{color:"inherit",href:"https://www.ahardy42.com",target:"_blank"},"Portfolio"))))},ie=function(e){var t=e.history;return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{history:t}),r.a.createElement(f.Consumer,null,(function(e){var a=e.choices,n=e.setChoices;return"mode"in a?r.a.createElement(ae,{setChoices:n,choices:a,history:t}):t.push("/")})),r.a.createElement(oe,null))},le=a(13),ce=a(151),se=a(152),me=a(105),ue=a(162),he=a(153),pe=a(159),fe=a(154),de=a(158),ge=a(164),Ee=a(157),ye=Object(d.a)({root:{textAlign:"center",display:"flex",flexDirection:"column",alignContent:"center"},Paper:{width:"80%",padding:"1em",margin:"1em"},text:{margin:"1em 0"},info:{width:"80%",textAlign:"justify",lineHeight:2},TextField:{width:"100%"},formControl:{width:"100%"},button:{width:"200px",maxWidth:"200px",margin:"1em",padding:"1em"}}),ve=function(e){var t=e.mode,a=e.travelType,n=e.timeLimit,o=e.handleChange,i=e.handleSubmit,l=e.isDisabled,c=ye();return r.a.createElement(ce.a,{maxWidth:"lg",className:c.root},r.a.createElement(E.a,{variant:"h3",className:c.text},"What Trails are within your reach today?!"),r.a.createElement(G.a,{container:!0,alignContent:"center",justify:"center"},r.a.createElement(W.a,{elevation:2,className:c.Paper},r.a.createElement(E.a,{variant:"p",className:c.info},"This app uses your location, and some information you provide below (what type of trails you're looking for, and how much time you have to get to the trailhead), to display a map of places you can go within that time limit, and, where there are some cool trails nearby.  When you click the button below you will be taken to a map page to help you navigate to the trails."))),r.a.createElement(G.a,{container:!0,alignContent:"center",justify:"center"},r.a.createElement(W.a,{elevation:2,className:c.Paper},r.a.createElement(se.a,{component:"fieldset",className:c.formControl},r.a.createElement(me.a,{component:"legend"},"What Type of Trail are you Looking For?"),r.a.createElement(ue.a,{className:c.radioGroup,"aria-label":"activities",name:"mode",value:t,onChange:o},r.a.createElement(he.a,{value:"bike",control:r.a.createElement(pe.a,null),label:"Mountain Bike"}),r.a.createElement(he.a,{value:"run",control:r.a.createElement(pe.a,null),label:"Trail Run"}),r.a.createElement(he.a,{value:"hike",control:r.a.createElement(pe.a,null),label:"Hike"}))))),r.a.createElement(G.a,{container:!0,justify:"center"},r.a.createElement(W.a,{elevation:2,className:c.Paper},r.a.createElement(se.a,{component:"fieldset",className:c.formControl},r.a.createElement(fe.a,{htmlFor:"select"},"How Are You Getting There?"),r.a.createElement(de.a,{value:a,onChange:o,inputProps:{id:"travel-select",name:"travelType"}},r.a.createElement("option",{value:""},"Select"),r.a.createElement("option",{value:"drive"},"Drive"),r.a.createElement("option",{value:"bike"},"Bike"),r.a.createElement("option",{value:"walk"},"Walk"))))),r.a.createElement(G.a,{container:!0,justify:"center"},r.a.createElement(W.a,{elevation:2,className:c.Paper},r.a.createElement(ge.a,{id:"number",label:"How much travel time do you have (minutes)?",name:"timeLimit",value:n>0?n:"",error:!(n>0),onChange:o,type:"number",className:c.TextField,InputLabelProps:{shrink:!0},margin:"normal"}))),r.a.createElement(G.a,{container:!0,justify:"center"},r.a.createElement(Ee.a,{variant:"contained",className:c.button,disabled:l,onClick:i},l?"Please Fill Out All Form Fields":"Let's Find Some Trails Near You!")))},be=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState((function(e){var t,a=e.mode,o=e.travelType,i=e.timeLimit;return t={},Object(le.a)(t,n,r),Object(le.a)(t,"isDisabled",function(e,t,a){return""===e||""===t||""===parseInt(a)}(a,o,i)),t}))},a.handleSubmit=function(){var e=Object(F.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a.props.setChoices(a.state),n=a.props.history,console.log(n),n.push("/map");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.render=function(){return r.a.createElement(ve,{mode:a.state.mode,travelType:a.state.travelType,timeLimit:a.state.timeLimit,errorMessage:a.state.errorMessage,handleChange:a.handleChange,handleSubmit:a.handleSubmit,isDisabled:a.state.isDisabled})},a.state={mode:"",travelType:"",timeLimit:0,errorMessage:"",isDisabled:!0},a}return Object(u.a)(t,e),t}(r.a.Component),Ce=function(e){var t=e.history;return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{history:t}),r.a.createElement(f.Consumer,null,(function(e){var a=e.setChoices;return r.a.createElement(be,{setChoices:a,history:t})})),r.a.createElement(oe,null))},we=Object(d.a)({root:{display:"flex",height:"80vh",justifyContent:"center",alignItems:"center"},Paper:{marginTop:"2em",width:"100%",height:"100%",color:"red",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}),je=r.a.forwardRef((function(e,t){return r.a.createElement(h.b,Object.assign({ref:t},e))})),xe=function(e){var t=e.history,a=we();return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{history:t}),r.a.createElement(ce.a,{className:a.root},r.a.createElement(W.a,{className:a.Paper},r.a.createElement(E.a,{variant:"h3"},"Sorry, you have wandered off the path!"),r.a.createElement(ne.a,{to:"/",component:je},"Head Home"))),r.a.createElement(oe,null))},Te=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).setChoices=function(e){a.setState({choices:e})},a.setLocation=function(e){a.setState({location:e})},a.state={location:{},setLocation:a.setLocation,choices:{},setChoices:a.setChoices},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(f.Provider,{value:{choices:this.state.choices,setChoices:this.state.setChoices}},r.a.createElement(h.a,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:Ce}),r.a.createElement(p.a,{exact:!0,path:"/map",component:ie}),r.a.createElement(p.a,{path:"*",component:xe}))))}}]),t}(r.a.Component),Oe=(a(102),a(103),function(){return r.a.createElement(Te,null)});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},89:function(e,t,a){e.exports=a(104)},94:function(e,t,a){}},[[89,1,2]]]);
//# sourceMappingURL=main.4495ebc6.chunk.js.map