(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(7),r=c.n(a),i=c(4),o=c(5),l=(c(12),c(0)),u=function(e){var t=e.id,c=e.text,s=e.checked,n=e.onChangeInput,a=e.removeTask,r=e.error;return Object(l.jsxs)("li",{className:"itemTask ".concat(r&&s?" item-error":""),children:[Object(l.jsxs)("div",{className:"inputBlock",children:[Object(l.jsx)("input",{type:"checkbox",className:"customCheckbox",id:t,checked:s,onChange:function(){return function(e){n(e)}(t)}}),Object(l.jsx)("label",{htmlFor:t,children:c})]}),Object(l.jsx)("span",{className:"close",onClick:function(){return a(t,s)},children:"x"})]})};var j=function(){var e=Object(s.useState)({tasks:[]}),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),r=Object(o.a)(a,2),j=r[0],d=r[1],b=Object(s.useState)(""),h=Object(o.a)(b,2),k=h[0],O=h[1];Object(s.useEffect)((function(){var e=localStorage.getItem("toDoList");e&&n({tasks:JSON.parse(e)})}),[]),Object(s.useEffect)((function(){localStorage.setItem("toDoList",JSON.stringify(c.tasks))}),[c.tasks]);var f=function(e){var t=Object(i.a)(c.tasks);t.forEach((function(t){t.id===e&&(t.checked=!t.checked)})),n({tasks:t})},m=function(e,t){if(t)O("\u041d\u0435\u043b\u044c\u0437\u044f \u0443\u0434\u0430\u043b\u0438\u0442\u044c");else{var s=Object(i.a)(c.tasks),a=s.find((function(t){return t.id===e})),r=s.indexOf(a);s.splice(r,1),n({tasks:s}),O("")}};return Object(l.jsx)("div",{className:"wrapper",children:Object(l.jsxs)("div",{className:"main",children:[Object(l.jsx)("h1",{children:"toDoList"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={};t.id="task".concat((new Date).getTime()),t.text=j,t.checked=!1,t.error=k,n({tasks:[].concat(Object(i.a)(c.tasks),[t])}),d("")},children:[Object(l.jsx)("input",{type:"text",name:"task",value:j,onChange:function(e){d(e.target.value)},placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",className:"field"}),Object(l.jsx)("button",{type:"submit",className:"btn",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]}),Object(l.jsx)("div",{className:"error ".concat(k&&c.tasks.some((function(e){return e.checked}))&&" show"),children:k}),Object(l.jsx)("ul",{className:"items",children:c.tasks.map((function(e){return Object(l.jsx)(u,{id:e.id,text:e.text,checked:e.checked,onChangeInput:f,removeTask:m,error:e.error},e.id)}))})]})})};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.42df944a.chunk.js.map