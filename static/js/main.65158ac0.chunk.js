(this["webpackJsonproom-finder"]=this["webpackJsonproom-finder"]||[]).push([[0],{57:function(t,e,o){t.exports=o(65)},65:function(t,e,o){"use strict";o.r(e);var a=o(0),i=o.n(a),n=o(10),r=o.n(n),l=o(103),c=o(119),m=o(114),u=o(66),p=o(107),s=o(117),d=Object(l.a)((function(){return{wrapper:{marginBottom:10},input:{visibility:"hidden",display:"none","&:checked + label":{border:"1px solid #96004b33",backgroundColor:"#f7dbe3",color:"#96004b"}},label:{boxSizing:"border-box",cursor:"pointer",width:"100%",display:"block",textAlign:"center",padding:"16px 20px",borderRadius:"5px",backgroundColor:"#edf1f7",border:"1px solid transparent",fontFamily:"Roboto"}}}));var b=function(t){var e=t.children,o=t.id,a=t.onChange,n=t.value,r=d();return i.a.createElement("div",{className:r.wrapper},i.a.createElement("input",{value:n,name:"radio",onChange:a,id:o,type:"radio",className:r.input}),i.a.createElement("label",{htmlFor:o,className:r.label},e))},g=o(36),h=o(46),x=o(13),f=o(118),O={rooms:[],filters:{search:null,floorId:null,buildingIds:[]},buildings:[{id:Object(f.a)(),name:"Building A",floors:[{id:Object(f.a)(),name:"Floor 1",rooms:[{id:Object(f.a)(),number:23,text:"Text output 11",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"A23"},{id:Object(f.a)(),number:12,text:"Text output 12",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"A12"},{id:Object(f.a)(),number:13,text:"Text output 13",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"A13"}]},{id:Object(f.a)(),name:"Floor 2",rooms:[{id:Object(f.a)(),number:21,text:"Text output 21",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"A21"},{id:Object(f.a)(),number:22,text:"Text output 22",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"A22"},{id:Object(f.a)(),number:23,text:"Text output 23",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"A23"}]},{id:Object(f.a)(),name:"Floor 3",rooms:[{id:Object(f.a)(),number:31,text:"Text output 31",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"A31"},{id:Object(f.a)(),number:32,text:"Text output 32",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"A32"},{id:Object(f.a)(),number:33,text:"Text output 33",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"A33"}]}]},{id:Object(f.a)(),name:"Building B",floors:[{id:Object(f.a)(),name:"Floor 1",rooms:[{id:Object(f.a)(),number:110,text:"B Text output 11",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"A110"},{id:Object(f.a)(),number:120,text:"B Text output 12",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"A120"},{id:Object(f.a)(),number:130,text:"B Text output 13",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"A130"}]},{id:Object(f.a)(),name:"Floor 2",rooms:[{id:Object(f.a)(),number:210,text:"B Text output 21",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"A210"},{id:Object(f.a)(),number:220,text:"B Text output 22",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"A220"},{id:Object(f.a)(),number:230,text:"B Text output 23",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"A230"}]},{id:Object(f.a)(),name:"Floor 3",rooms:[{id:Object(f.a)(),number:310,text:"B Text output 31",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"A310"},{id:Object(f.a)(),number:320,text:"B Text output 32",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"A320"},{id:Object(f.a)(),number:330,text:"B Text output 33",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"A330"}]}]},{id:Object(f.a)(),name:"Building C",floors:[{id:Object(f.a)(),name:"Floor 1",rooms:[{id:Object(f.a)(),number:23,text:"Text output 11",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"C23"},{id:Object(f.a)(),number:12,text:"Text output 12",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"C12"},{id:Object(f.a)(),number:13,text:"Text output 13",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"C13"}]},{id:Object(f.a)(),name:"Floor 2",rooms:[{id:Object(f.a)(),number:21,text:"Text output 21",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"C21"},{id:Object(f.a)(),number:22,text:"Text output 22",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"C22"},{id:Object(f.a)(),number:23,text:"Text output 23",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"C23"}]},{id:Object(f.a)(),name:"Floor 3",rooms:[{id:Object(f.a)(),number:31,text:"Text output 31",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"C31"},{id:Object(f.a)(),number:32,text:"Text output 32",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"C32"},{id:Object(f.a)(),number:33,text:"Text output 33",link:"https://google.com",image:"http://picsum.photos/600/400",filterText:"C33"}]}]}]},j=Object(a.createContext)();function T(t,e){switch(e.type){case"SET_SEARCH":return Object(x.a)({},t,{filters:Object(x.a)({},t.filters,{search:e.payload,floor:null})});case"SET_FLOOR_ID":return Object(x.a)({},t,{filters:Object(x.a)({},t.filters,{floorId:e.payload})});case"SET_BUILDING_ID":return Object(x.a)({},t,{filters:Object(x.a)({},t.filters,{buildingIds:[].concat(Object(h.a)(t.filters.buildingIds),[e.payload])})});case"REMOVE_BUILDING_ID":return Object(x.a)({},t,{filters:Object(x.a)({},t.filters,{buildingIds:t.filters.buildingIds.filter((function(t){return t!==e.payload}))})});default:return t}}var E=function(t){var e=t.children,o=Object(a.useReducer)(T,O),n=Object(g.a)(o,2),r=n[0],l=n[1];return i.a.createElement(j.Provider,{value:{state:r,dispatch:l}},e)};var v=function(){var t=Object(a.useContext)(j),e=t.state,o=e.buildings,n=e.filters,r=t.dispatch;function l(t){var e=t.target,o=e.checked,a=e.value;r(o?{type:"SET_BUILDING_ID",payload:a}:{type:"REMOVE_BUILDING_ID",payload:a})}return i.a.createElement("div",null,i.a.createElement(u.a,{variant:"h4",component:"h2"},"Select building and floor"),o.map((function(t){return i.a.createElement("div",{key:t.id},i.a.createElement(p.a,{control:i.a.createElement(s.a,{checked:n.buildingIds.includes(t.id),value:t.id,onChange:l,name:"building",color:"primary"}),label:t.name}),t.floors.map((function(e){return i.a.createElement(b,{value:e.id,onChange:function(e){return function(t,e){var o=t.target.value;r({type:"SET_FLOOR_ID",payload:o}),r({type:"SET_BUILDING_ID",payload:e})}(e,t.id)},id:e.id,key:e.id},e.name)})))})))},k=o(116),y=o(108),I=Object(l.a)((function(){return{wrapper:{display:"flex",marginBottom:40},input:{marginRight:20}}}));var C=function(){var t=I(),e=Object(a.useContext)(j).dispatch,o=Object(a.useState)(""),n=Object(g.a)(o,2),r=n[0],l=n[1];return i.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e({type:"SET_SEARCH",payload:r})},className:t.wrapper},i.a.createElement(k.a,{className:t.input,value:r,onChange:function(t){l(t.target.value)},variant:"outlined",placeholder:"Enter room number",type:"text"}),i.a.createElement(y.a,{type:"submit",variant:"contained",color:"primary"},"Go"))},B=o(109),A=o(110),N=o(113),w=o(112),_=o(111),D=o(120),S=Object(l.a)({media:{height:200},chip:{marginRight:16,marginBottom:8},link:{textDecoration:"none"}});var F=function(t){var e=t.room,o=S();return i.a.createElement(B.a,null,i.a.createElement(A.a,null,i.a.createElement(_.a,{className:o.media,image:e.image,title:"Contemplative Reptile"}),i.a.createElement(w.a,null,i.a.createElement(u.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.text," - ",e.number),i.a.createElement(D.a,{color:"primary",className:o.chip,label:e.buildingName}),i.a.createElement(D.a,{color:"secondary",className:o.chip,label:e.floorName}))),i.a.createElement(N.a,null,i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:o.link,href:e.link},i.a.createElement(y.a,{size:"small",variant:"outlined",color:"primary"},"Go"))))};var R=Object(l.a)((function(){return Object(c.a)({root:{flexGrow:1},image:{width:"100%",height:"auto"}})}));var G=function(){var t=Object(a.useContext)(j).state,e=R(),o=function(t,e){var o=e.search,a=e.floorId,i=e.buildingIds;return t.map((function(t){return t.floors.map((function(e){return e.rooms.map((function(o){return Object(x.a)({},o,{floorId:e.id,buildingId:t.id,floorName:e.name,buildingName:t.name})}))}))})).flat().flat().filter((function(t){var e=null===o||t.filterText.toLowerCase().includes(o.toLowerCase()),n=!a||a===t.floorId,r=!i.length||i.includes(t.buildingId);return e&&n&&r}))}(t.buildings,t.filters);return i.a.createElement("div",{className:e.root},i.a.createElement(m.a,{container:!0,spacing:2},o.map((function(t){return i.a.createElement(m.a,{key:t.id,item:!0,xs:12,md:4},i.a.createElement(F,{room:t}))}))))};var L=function(){return i.a.createElement("div",null,i.a.createElement(C,null),i.a.createElement(G,null))},U=o(115),M=Object(l.a)((function(){return Object(c.a)({root:{flexGrow:1}})}));var W=function(){var t=M();return i.a.createElement(U.a,{maxWidth:"xl"},i.a.createElement("div",{className:t.root},i.a.createElement(m.a,{container:!0,spacing:4},i.a.createElement(m.a,{item:!0,xs:12,md:3},i.a.createElement(v,null)),i.a.createElement(m.a,{item:!0,xs:12,md:9},i.a.createElement(L,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(E,null,i.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.65158ac0.chunk.js.map