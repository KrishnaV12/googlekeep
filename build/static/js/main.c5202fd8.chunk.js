(this.webpackJsonptodoredux=this.webpackJsonptodoredux||[]).push([[0],{31:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),i=c(16),n=c.n(i),j=c(10),d=c(13),r=(c(31),c(32),c(34),c(35),c(1)),l=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)(""),n=Object(j.a)(i,2),l=(n[0],n[1],Object(d.c)((function(e){return e.todoReducers.list}))),b=Object(d.b)();return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"main_div",children:Object(r.jsxs)("div",{className:"child_div",children:[Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("input",{type:"checkbox",id:"openSidebarMenu"}),Object(r.jsxs)("label",{for:"openSidebarMenu",class:"sidebarIconToggle",children:[Object(r.jsx)("div",{class:"spinner top"}),Object(r.jsx)("div",{class:"spinner middle"}),Object(r.jsx)("div",{class:"spinner bottom"})]}),Object(r.jsx)("div",{id:"sidebarMenu",children:Object(r.jsxs)("ul",{class:"menu",children:[Object(r.jsx)("li",{children:Object(r.jsxs)("a",{href:"#",children:[Object(r.jsx)("i",{class:"fas fa-lightbulb"}),"  Notes"]})}),Object(r.jsx)("li",{children:Object(r.jsxs)("a",{href:"#",children:[Object(r.jsx)("i",{class:"fas fa-bell"}),"   Reminder"]})}),Object(r.jsx)("li",{children:Object(r.jsxs)("a",{href:"#",children:[Object(r.jsx)("i",{class:"fas fa-pen"}),"   Edit Label"]})}),Object(r.jsx)("li",{children:Object(r.jsxs)("a",{href:"#",children:[Object(r.jsx)("i",{class:"fas fa-archive"}),"   Archive"]})}),Object(r.jsx)("li",{children:Object(r.jsxs)("a",{href:"#",children:[Object(r.jsx)("i",{class:"fas fa-trash-alt"}),"   Trash"]})})]})}),Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABbUlEQVR4Ae3aAUQEQRQG4OUmwiEAQIQQIAQIAQGCgICQkJAACUAAQkEQAAJEu11cSSldOlWR4hBJp90ozdt53QSgs/e09v70fh4YzPuWmbeYQIMergTGRmapVRc2NJxHva4Hc4UBPsOeWb9pnhWvBcUhRF9eACgMIW5QAJAjAAFyBCBAjgAEyBGAADkCECBHQADkCACAHAEAkJcCFPDnAFEvp1cz7B432SV1du8P7J63mepTfg0bQIdD7OIat4sH0cEgJsA3z5RwVtzbNdtKHx7Avexxp0kbq1gAOhpmUZxlu1vGAaS3CywNHY8AAe6WxYD0choIcDMvBtD5BA6ATkbFZ4D2B8BuobjWef9PW4BzwN9EznJmbJNttR90Ep+NfzfYNh+NrNtHf+YUQKdjfi78WH4NDyAYan5NAXoGFKAABShAAf8NkHQRUP01gMLSRrcAFJYm83hqULaRWaSwdF9g8027Y1Zae5tAA54vA5QFBsesCogAAAAASUVORK5CYII=",style:{height:"40px",width:"40px"},alt:""}),Object(r.jsx)("span",{style:{textAlign:"left"},children:"Keep"}),Object(r.jsxs)("div",{className:"search_parent",children:[Object(r.jsx)("i",{class:"fas fa-search"}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"text",className:"search_child",placeholder:"Search"})})]})]}),Object(r.jsxs)("div",{className:"border",children:[Object(r.jsxs)("div",{className:"add_item",children:[Object(r.jsx)("input",{type:"text",className:"input",placeholder:"Take a Note....",value:c,onChange:function(e){return a(e.target.value)}}),Object(r.jsx)("i",{className:"fa fa-plus add-btn",onClick:function(){return b((e=c,{type:"ADD_TODO",payload:{id:(new Date).getTime().toString(),data:e}}),a(" "));var e}})]}),Object(r.jsx)("div",{className:"box-height",children:l.map((function(e){return Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h2",{children:e.data}),Object(r.jsxs)("div",{className:"showItem",children:[Object(r.jsx)("h2",{children:e.data2}),Object(r.jsx)("div",{className:"todo-btn"}),Object(r.jsx)("i",{className:"far fa-trash-alt add-btn",title:"delete item",onClick:function(){return b({type:"DETELE_TODO",id:e.id})}})]},e.id2)]},e.id)}))}),Object(r.jsx)("div",{className:"button",children:Object(r.jsx)("button",{className:"btn effect04","data-sm-link-text":"remove",onClick:function(){return b({type:"REMOVE_TODO"})},children:Object(r.jsx)("span",{children:"REMOVE"})})})]})]})})})},b=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(l,{})})},O=c(17),h=c(4),A=c(6),o={list:[]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":var c=t.payload,s=c.id,a=c.data;return Object(A.a)(Object(A.a)({},e),{},{list:[].concat(Object(h.a)(e.list),[{id:s,data:a}])});case"ADD_TODO2":var i=t.payload,n=i.id2,j=i.data2;return Object(A.a)(Object(A.a)({},e),{},{list:[].concat(Object(h.a)(e.list),[{id:n,data2:j}])});case"DETELE_TODO":var d=e.list.filter((function(e){return e.id!=t.id}));return Object(A.a)(Object(A.a)({},e),{},{list:d});case"REMOVE_TODO":return Object(A.a)(Object(A.a)({},e),{},{list:[]});default:return e}},u=Object(O.a)({todoReducers:x}),f=Object(O.b)(u,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());n.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(d.a,{store:f,children:Object(r.jsx)(b,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.c5202fd8.chunk.js.map