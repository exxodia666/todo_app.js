(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{19:function(e,t,n){e.exports=n.p+"static/media/delete.dd9abd83.svg"},20:function(e,t,n){e.exports=n(37)},26:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"addTodo",(function(){return v})),n.d(a,"deleteTodo",(function(){return E})),n.d(a,"reverseTodo",(function(){return h}));var r=n(0),o=n.n(r),c=n(5),i=n.n(c),u=(n(26),n(6)),l=n(7),d=n(10),s=n(8),p=n(11),f=n(9),O=(n(36),n(19)),m=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;document.addEventListener("keydown",(function(t){"Enter"===t.code&&e.input.value&&(n(e.input.value),e.input.value="",t.preventDefault())}));var t=this.props.store,n=this.props.actions.addTodo,a=this.props.actions.reverseTodo,r=this.props.actions.deleteTodo,c=t.map((function(e){if(!0===e.completed)var n={textDecoration:"line-through"};return o.a.createElement("li",{className:"todo"},o.a.createElement("img",{className:"delete",src:O.deleteButton,onClick:function(){r(t.indexOf(e))}}),o.a.createElement("div",{style:n,onClick:function(){a({completed:e.completed,id:t.indexOf(e)})}},e.text))}));return o.a.createElement("div",{className:"App"},o.a.createElement("input",{placeholder:" Type your task",type:"text",ref:function(t){return e.input=t}}),o.a.createElement("ul",null,c),o.a.createElement("a",{className:"add",onClick:function(){e.input.value&&(n(e.input.value),e.input.value="")}},"Add"))}}]),t}(r.Component),v=function(e){return{type:"ADD_TODO",data:e}},E=function(e){return{type:"DELETE_TODO",data:e}},h=function(e){return{type:"REVERSE_COMPLETE_TODO",data:e}},b=n(3),T=Object(f.b)((function(e){return{store:e}}),(function(e){return console.log("Container"),console.log(a),{actions:Object(b.bindActionCreators)(a,e)}}))(m),j=n(4);var y=function(){try{var e=localStorage.getItem("state");return null===e?[]:JSON.parse(e)}catch(t){return}}(),g=Object(b.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(j.a)(e),[{id:++e.length,text:t.data,completed:!1}]);case"DELETE_TODO":var n=e;return n.splice(t.data,1),Object(j.a)(n);case"COMPLETE_TODO":return{};case"REVERSE_COMPLETE_TODO":var a=t.data.id,r=t.data.completed;if(!1===r){var o=e;return o[a].completed=!0,Object(j.a)(o)}if(!0===r){var c=e;return c[a].completed=!1,Object(j.a)(c)}return Object(j.a)(e);default:return e}}),y);g.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){}}(g.getState())}));var D=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f.a,{store:g},o.a.createElement(T,null)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.f628bdf9.chunk.js.map