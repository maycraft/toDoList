(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(7),o=c.n(a),r=c(4),i=c(5),l=(c(12),c(0)),u=function(e){var t=e.id,c=e.text,s=e.checked,n=e.onChangeInput,a=e.removeTask,o=e.error;return Object(l.jsxs)("li",{className:"itemTask ".concat(o&&s?" item-error":""),children:[Object(l.jsxs)("div",{className:"inputBlock",children:[Object(l.jsx)("input",{type:"checkbox",className:"customCheckbox",id:t,checked:s,onChange:function(){return function(e){n(e)}(t)}}),Object(l.jsx)("label",{htmlFor:t,children:c})]}),Object(l.jsx)("span",{className:"close",onClick:function(){return a(t,s)},children:"x"})]})};var j=function(){var e=Object(s.useState)({tasks:[]}),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),o=Object(i.a)(a,2),j=o[0],d=o[1],b=Object(s.useState)(""),h=Object(i.a)(b,2),k=h[0],f=h[1];Object(s.useEffect)((function(){var e=localStorage.getItem("toDoList");e&&n({tasks:JSON.parse(e)})}),[]),Object(s.useEffect)((function(){localStorage.setItem("toDoList",JSON.stringify(c.tasks))}),[c.tasks]);var O=function(){return c.tasks.some((function(e){return e.checked}))},m=function(e){var t=Object(r.a)(c.tasks);t.forEach((function(t){t.id===e&&(t.checked=!t.checked)})),n({tasks:t})},x=function(e,t){if(t)f("\u041d\u0435\u043b\u044c\u0437\u044f \u0443\u0434\u0430\u043b\u0438\u0442\u044c");else{var s=Object(r.a)(c.tasks),a=s.find((function(t){return t.id===e})),o=s.indexOf(a);s.splice(o,1),n({tasks:s}),f("")}};return console.log(c),console.log(O()),console.log(k),Object(l.jsx)("div",{className:"wrapper",children:Object(l.jsxs)("div",{className:"main",children:[Object(l.jsx)("h1",{children:"toDoList"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={};t.id="task".concat((new Date).getTime()),t.text=j,t.checked=!1,t.error=k,n({tasks:[].concat(Object(r.a)(c.tasks),[t])}),d("")},children:[Object(l.jsx)("input",{type:"text",name:"task",value:j,onChange:function(e){d(e.target.value)},placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",className:"field"}),Object(l.jsx)("button",{type:"submit",className:"btn",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]}),Object(l.jsx)("div",{className:"error ".concat(k&&O()&&" show"),children:k}),Object(l.jsx)("ul",{className:"items",children:c.tasks.map((function(e){return Object(l.jsx)(u,{id:e.id,text:e.text,checked:e.checked,onChangeInput:m,removeTask:x,error:e.error},e.id)}))})]})})};o.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cdf28595.chunk.js.map