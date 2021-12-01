(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{107:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),c=n(13),o=n.n(c);n(96),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(66);var r=n(21),l=n(153),s=n(143),d=n(144),u=n(5),j=a.a.memo((function(t){console.log("AddItemForm");var e=Object(i.useState)(""),n=Object(r.a)(e,2),a=n[0],c=n[1],o=Object(i.useState)(null),j=Object(r.a)(o,2),O=j[0],b=j[1],f=function(){""!==a.trim()?(t.addItem(a.trim()),c("")):b("Title is required")};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(l.a,{variant:"filled",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435",id:"outlined-size-small",defaultValue:"",size:"small",value:a,onChange:function(t){c(t.currentTarget.value)},onKeyPress:function(t){null!==O&&b(null),13===t.charCode&&f()},error:!!O,helperText:O}),Object(u.jsx)(s.a,{color:"primary",onClick:f,children:Object(u.jsx)(d.a,{})})]})})),O=n(155),b=n(147),f=n(148),T=n(152),h=n(74),k=n.n(h),v=n(160),x=n(158),g=n(161),I=n(12),m=n(156),p="REMOVE-TODOLIST",C=(Object(m.a)(),Object(m.a)(),[]),S=function(t){return{type:"REMOVE-TODOLIST",id:t}},A=n(30),D={},E=n(41),y=n(146),L=n(145),w=a.a.memo((function(t){console.log("EdditAbleSpan Called");var e=Object(i.useState)(!1),n=Object(r.a)(e,2),a=n[0],c=n[1],o=Object(i.useState)(t.title),s=Object(r.a)(o,2),d=s[0],j=s[1];return a?Object(u.jsx)(l.a,{value:d,onChange:function(t){j(t.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),t.onChange(d)}}):Object(u.jsx)("span",{onDoubleClick:function(){c(!0),j(t.title)},children:t.title})})),F=n(157),N=a.a.memo((function(t){var e=Object(i.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.changeTaskTitle,t.todolistId]);return Object(u.jsxs)("div",{className:t.task.isDone?"is-done":"",children:[Object(u.jsx)(F.a,{checked:t.task.isDone,color:"primary",onChange:function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n,t.todolistId)}}),Object(u.jsx)(w,{title:t.task.title,onChange:e}),Object(u.jsx)(s.a,{onClick:function(){return t.removeTask(t.task.id,t.todolistId)},children:Object(u.jsx)(L.a,{})})]},t.task.id)})),G=a.a.memo((function(t){console.log("Todolist is called");var e=Object(i.useCallback)((function(e){t.addTask(e,t.id)}),[t.addTask,t.id]),n=Object(i.useCallback)((function(e){t.changeTodolistTitle(t.id,e)}),[t.id,t.changeTodolistTitle]),a=Object(i.useCallback)((function(){return t.changeFilter("all",t.id)}),[t.changeFilter,t.id]),c=Object(i.useCallback)((function(){return t.changeFilter("active",t.id)}),[t.changeFilter,t.id]),o=Object(i.useCallback)((function(){return t.changeFilter("completed",t.id)}),[t.changeFilter,t.id]),r=t.tasks;return"active"===t.filter&&(r=t.tasks.filter((function(t){return!1===t.isDone}))),"completed"===t.filter&&(r=t.tasks.filter((function(t){return!0===t.isDone}))),Object(u.jsxs)("div",{children:[Object(u.jsxs)("h3",{children:[Object(u.jsx)(w,{title:t.title,onChange:n}),Object(u.jsx)(s.a,{onClick:function(){t.removeTodolist(t.id)},children:Object(u.jsx)(L.a,{})})]}),Object(u.jsx)(j,{addItem:e}),Object(u.jsx)("div",{children:r.map((function(e){return Object(u.jsx)(N,{task:e,changeTaskStatus:t.changeTaskStatus,changeTaskTitle:t.changeTaskTitle,removeTask:t.removeTask,todolistId:t.id},e.id)}))}),Object(u.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(u.jsx)(y.a,{variant:"all"===t.filter?"outlined":"text",onClick:a,color:"default",children:"All"}),Object(u.jsx)(y.a,{variant:"active"===t.filter?"outlined":"text",onClick:c,color:"primary",children:"Active"}),Object(u.jsx)(y.a,{variant:"completed"===t.filter?"outlined":"text",onClick:o,color:"secondary",children:"Completed"})]})]})}));var K=function(){console.log("APP");var t=Object(E.b)(),e=Object(E.c)((function(t){return t.todolists})),n=Object(E.c)((function(t){return t.tasks}));function a(e,n){var i=function(t,e){return{type:"REMOVE-TASKS",tasksId:t,todolistId:e}}(e,n);t(i)}var c=Object(i.useCallback)((function(e,n){var i=function(t,e){return{type:"ADD-TASK",title:t,todolistId:e}}(e,n);t(i)}),[t]),o=Object(i.useCallback)((function(e,n,i){var a=function(t,e,n){return{type:"CHANGE-STATUS-TASKS",isDone:e,todolistId:n,taskId:t}}(e,n,i);t(a)}),[t]),r=Object(i.useCallback)((function(e,n,i){var a=function(t,e,n){return{type:"CHANGE-TASK-TITLE",taskId:t,title:e,todolistId:n}}(e,n,i);t(a)}),[t]),l=Object(i.useCallback)((function(e,n){t({type:"CHANGE-TODOLIST-FILTER",filter:e,id:n})}),[t]),d=Object(i.useCallback)((function(e){t(S(e)),t(S(e))}),[t]),h=Object(i.useCallback)((function(e){var n=function(t){return{type:"ADD-TODOLIST",title:t,todolistId:Object(m.a)()}}(e);t(n)}),[t]),I=Object(i.useCallback)((function(e,n){t(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",title:t,id:e}}(e,n))}),[t]);return Object(u.jsxs)("div",{children:[Object(u.jsx)(O.a,{sx:{flexGrow:1},children:Object(u.jsx)(b.a,{position:"static",children:Object(u.jsxs)(f.a,{variant:"dense",children:[Object(u.jsx)(s.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(u.jsx)(k.a,{})}),Object(u.jsx)(T.a,{variant:"h6",color:"inherit",component:"div",children:"Photos"})]})})}),Object(u.jsxs)(v.a,{fixed:!0,children:[Object(u.jsx)(x.a,{container:!0,style:{padding:"20px"},children:Object(u.jsx)(j,{addItem:h})}),Object(u.jsx)(x.a,{container:!0,spacing:3,children:e.map((function(t){var e=n[t.id];return Object(u.jsx)(x.a,{item:!0,children:Object(u.jsx)(g.a,{style:{padding:"10px"},children:Object(u.jsx)(G,{id:t.id,title:t.title,tasks:e,removeTask:a,changeFilter:l,addTask:c,changeTaskStatus:o,filter:t.filter,removeTodolist:d,changeTaskTitle:r,changeTodolistTitle:I},t.id)})})}))})]})]})},H=n(62),R=Object(H.a)({todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p:return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":return[].concat(Object(I.a)(t),[{id:e.todolistId,title:e.title,filter:"all"}]);case"CHANGE-TODOLIST-TITLE":var n=t.find((function(t){return t.id===e.id}));return n&&(n.title=e.title),Object(I.a)(t);case"CHANGE-TODOLIST-FILTER":var i=t.find((function(t){return t.id===e.id}));return i&&(i.filter=e.filter),Object(I.a)(t);default:return t}},tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASKS":var n=Object(A.a)({},t),i=t[e.todolistId],a=i.filter((function(t){return t.id!==e.tasksId}));return n[e.todolistId]=a,n;case"ADD-TASK":var c=Object(A.a)({},t),o=c[e.todolistId],r={id:Object(m.a)(),title:e.title,isDone:!1},l=[r].concat(Object(I.a)(o));return c[e.todolistId]=l,c;case"CHANGE-STATUS-TASKS":var s=t[e.todolistId],d=s.map((function(t){return t.id===e.taskId?Object(A.a)(Object(A.a)({},t),{},{isDone:e.isDone}):t}));return t[e.todolistId]=d,Object(A.a)({},t);case"CHANGE-TASK-TITLE":var u=t[e.todolistId],j=u.find((function(t){return t.id===e.taskId}));return j&&(j.title=e.title),t[e.title]=Object(I.a)(u),Object(A.a)({},t);case"ADD-TODOLIST":var O=Object(A.a)({},t);return O[e.todolistId]=[],O;case"REMOVE-TODOLIST":var b=Object(A.a)({},t);return delete b[e.id],b;default:return t}}}),V=Object(H.b)(R);window.store=V,o.a.render(Object(u.jsx)(E.a,{store:V,children:Object(u.jsx)(K,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},66:function(t,e,n){},96:function(t,e,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.df37699c.chunk.js.map