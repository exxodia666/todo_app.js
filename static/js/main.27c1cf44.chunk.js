(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{19:function(e,t,n){e.exports=n(36)},25:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"addTodo",(function(){return v})),n.d(a,"deleteTodo",(function(){return m})),n.d(a,"reverseTodo",(function(){return E}));var r=n(0),o=n.n(r),c=n(5),i=n.n(c),u=(n(25),n(6)),l=n(7),s=n(10),d=n(8),p=n(11),O=n(9),f=(n(35),function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;document.addEventListener("keydown",(function(t){"Enter"===t.code&&e.input.value&&(n(e.input.value),e.input.value="",t.preventDefault())}));var t=this.props.store,n=this.props.actions.addTodo,a=this.props.actions.reverseTodo,r=this.props.actions.deleteTodo,c=t.map((function(e){if(!0===e.completed)var n={textDecoration:"line-through"};return o.a.createElement("li",{className:"todo"},o.a.createElement("a",{className:"delete",onClick:function(){r(t.indexOf(e))}}," Delete"),o.a.createElement("div",{style:n,onClick:function(){a({completed:e.completed,id:t.indexOf(e)})}},e.text))}));return o.a.createElement("div",{className:"App"},o.a.createElement("input",{placeholder:" Type your task",type:"text",ref:function(t){return e.input=t}}),o.a.createElement("a",{className:"add",onClick:function(){e.input.value&&(n(e.input.value),e.input.value="")}},"Add"),o.a.createElement("ul",null,c))}}]),t}(r.Component)),v=function(e){return{type:"ADD_TODO",data:e}},m=function(e){return{type:"DELETE_TODO",data:e}},E=function(e){return{type:"REVERSE_COMPLETE_TODO",data:e}},h=n(3),b=Object(O.b)((function(e){return{store:e}}),(function(e){return console.log("Container"),console.log(a),{actions:Object(h.bindActionCreators)(a,e)}}))(f),T=n(4);var j=function(){try{var e=localStorage.getItem("state");return null===e?[]:JSON.parse(e)}catch(t){return}}(),y=Object(h.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(T.a)(e),[{id:++e.length,text:t.data,completed:!1}]);case"DELETE_TODO":var n=e;return n.splice(t.data,1),Object(T.a)(n);case"COMPLETE_TODO":return{};case"REVERSE_COMPLETE_TODO":var a=t.data.id,r=t.data.completed;if(!1===r){var o=e;return o[a].completed=!0,Object(T.a)(o)}if(!0===r){var c=e;return c[a].completed=!1,Object(T.a)(c)}return Object(T.a)(e);default:return e}}),j);y.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){}}(y.getState())}));var D=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(O.a,{store:y},o.a.createElement(b,null)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.27c1cf44.chunk.js.map