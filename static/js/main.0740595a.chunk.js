(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),i=n(10),a=n.n(i),r=n(9),s=n(3),l=n(2),u=n(19),d=n(7),j=n.n(d),b=n(0),p=function(e){var t=Object(o.useState)(!1),n=Object(l.a)(t,2),c=n[0],i=n[1];Object(o.useEffect)((function(){return function(){console.log("Cleaning up...")}}),[]);var a={},r={};c?a.display="none":r.display="none";var s=e.todo,u=s.completed,d=s.id,p=s.title;return Object(b.jsxs)("li",{className:j.a.item,children:[Object(b.jsxs)("div",{onDoubleClick:function(){i(!0)},style:a,children:[Object(b.jsx)("input",{type:"checkbox",className:j.a.checkbox,checked:u,onChange:function(){return e.handleChangeProps(d)}}),Object(b.jsx)("button",{onClick:function(){return e.deleteTodoProp(d)},children:"Delete"}),Object(b.jsx)("span",{style:u?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:p})]}),Object(b.jsx)("input",{type:"text",style:r,className:j.a.textInput,value:p,onChange:function(t){return e.setUpdate(t.target.value,d)},onKeyDown:function(e){"Enter"===e.key&&i(!1)}})]})},f=function(e){return Object(b.jsx)("ul",{children:e.todos.map((function(t){return Object(b.jsx)(p,{todo:t,handleChangeProps:e.handleChangeProps,deleteTodoProp:e.deleteTodoProps,setUpdate:e.setUpdate},t.id)}))})},m=function(){return Object(b.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(b.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},h=n(6),O=function(e){var t=Object(o.useState)({title:""}),n=Object(l.a)(t,2),c=n[0],i=n[1];return Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c.title.trim()?(e.addTodoProps(c.title),i({title:""})):alert("Please write item")},className:"form-container",children:[Object(b.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:c.title,name:"title",onChange:function(e){i(Object(s.a)(Object(s.a)({},c),{},Object(h.a)({},e.target.name,e.target.value)))}}),Object(b.jsx)("button",{className:"input-submit",children:"Submit"})]})},x=function(){var e=Object(o.useState)(function(){var e=localStorage.getItem("todos");return JSON.parse(e)||[]}()),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(o.useEffect)((function(){var e=JSON.stringify(n);localStorage.setItem("todos",e)}),[n]);return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"inner",children:[Object(b.jsx)(m,{}),Object(b.jsx)(O,{addTodoProps:function(e){var t={id:Object(u.a)(),title:e,completed:!1};c([].concat(Object(r.a)(n),[t]))}}),Object(b.jsx)(f,{todos:n,handleChangeProps:function(e){c((function(t){return t.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{completed:!t.completed}):t}))}))},deleteTodoProps:function(e){c(Object(r.a)(n.filter((function(t){return t.id!==e}))))},setUpdate:function(e,t){c(n.map((function(n){return n.id===t&&(n.title=e),n})))}})]})})};n(16);a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={item:"TodoItem_item__37sXw",checkbox:"TodoItem_checkbox__3ZODs",textInput:"TodoItem_textInput__1E6_y"}}},[[17,1,2]]]);
//# sourceMappingURL=main.0740595a.chunk.js.map