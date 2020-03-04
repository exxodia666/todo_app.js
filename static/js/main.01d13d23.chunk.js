(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{31:function(e,t,a){e.exports=a(48)},36:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"addTodo",(function(){return f})),a.d(n,"deleteTodo",(function(){return v})),a.d(n,"reverseTodo",(function(){return h}));var r=a(0),o=a.n(r),c=a(13),l=a.n(c),i=(a(36),a(15)),s=a(25),u=a(26),p=a(29),m=a(27),d=a(30),E=function(e){var t,a;return!0===e.data.completed?(t={textDecoration:"line-through"},a="checked"):(t={},a=""),o.a.createElement("li",{className:"list-group-item d-flex justify-content-between note text-break shadow-sm p-4 mb-5 bg-white rounded "},o.a.createElement("div",{className:"row"},o.a.createElement("input",{type:"checkbox",className:"ml-5 mr-3",checked:a,onClick:function(){e.actions.reverseTodo({completed:e.data.completed,id:e.id})}}),o.a.createElement("h3",{className:"d-inline p-2 bg-primar",style:t},e.data.text)),o.a.createElement("button",{type:"button",class:"close mr-4","aria-label":"Close",onClick:function(){e.actions.deleteTodo(e.id)}},o.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={filter:"ALL"},a.mapItems=function(){switch(a.state.filter){case"ALL":return a.props.store.map((function(e){return o.a.createElement(E,{id:a.props.store.indexOf(e),actions:a.props.actions,data:e})}));case"COMPLETED":return a.props.store.filter((function(e){return!0===e.completed})).map((function(e){return o.a.createElement(E,{id:a.props.store.indexOf(e),actions:a.props.actions,data:e})}));case"ACTIVE":return a.props.store.filter((function(e){return!1===e.completed})).map((function(e){return o.a.createElement(E,{id:a.props.store.indexOf(e),actions:a.props.actions,data:e})}));default:return a.props.store.map((function(e){return o.a.createElement(E,{id:a.props.store.indexOf(e),actions:a.props.actions,data:e})}))}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.actions.addTodo;document.addEventListener("keydown",(function(a){"Enter"===a.code&&e.input.value&&(t(e.input.value),e.input.value="",a.preventDefault())}));return o.a.createElement("div",{className:"container mt-3 mb-3"},o.a.createElement("div",{className:"btn-group btn-group-toggle mt-3 mb-3","data-toggle":"buttons"},o.a.createElement("button",{type:"button",class:"btn btn-outline-secondary",onClick:function(){return e.setState({filter:"ALL"})}},"All"),o.a.createElement("button",{type:"button",class:"btn btn-outline-secondary",onClick:function(){return e.setState({filter:"COMPLETED"})}},"Completed"),o.a.createElement("button",{type:"button",class:"btn btn-outline-secondary",onClick:function(){return e.setState({filter:"ACTIVE"})}},"Active")),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"input-group mb-3 input-group-lg"},o.a.createElement("input",{placeholder:"Type your task",type:"text",ref:function(t){return e.input=t},className:"form-control",id:"inputGroup-sizing-lg","aria-label":"Recipient's username","aria-describedby":"button-addon2"}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{className:"btn btn-outline-success",type:"button",id:"button-addon2",onClick:function(){e.input.value&&(t(e.input.value),e.input.value="")}},"ADD")))),o.a.createElement("ul",{className:"list-group "},this.mapItems()))}}]),t}(r.Component),f=function(e){return{type:"ADD_TODO",data:e}},v=function(e){return{type:"DELETE_TODO",data:e}},h=function(e){return{type:"REVERSE_COMPLETE_TODO",data:e}},g=a(9),O=Object(i.b)((function(e){return{store:e}}),(function(e){return{actions:Object(g.bindActionCreators)(n,e)}}))(b),y=a(10);var w=function(){try{var e=localStorage.getItem("state");return null===e?[]:JSON.parse(e)}catch(t){return}}(),T=Object(g.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(y.a)(e),[{id:++e.length,text:t.data,completed:!1}]);case"DELETE_TODO":var a=e;return a.splice(t.data,1),Object(y.a)(a);case"COMPLETE_TODO":return{};case"REVERSE_COMPLETE_TODO":var n=t.data.id,r=t.data.completed;if(!1===r){var o=e;return o[n].completed=!0,Object(y.a)(o)}if(!0===r){var c=e;return c[n].completed=!1,Object(y.a)(c)}return Object(y.a)(e);default:return e}}),w);T.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){}}(T.getState())}));a(46);var k=a(12),D=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},o.a.createElement(k.b,{className:"nav-item nav-link active navbar-brand",to:"/"},"Tips Application",o.a.createElement("span",{className:"sr-only"},"(current)")),o.a.createElement(k.b,{className:"nav-item nav-link",to:"/about"},"About"))},x=a(7),N=function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h1",{class:"display-2 m-2"},"About"),o.a.createElement("ul",{class:"list-group list-group-flush"},o.a.createElement("li",{class:"display-6 m-2 list-group-item"},o.a.createElement("span",null,"GitHub: "),o.a.createElement("a",{href:"https://github.com/exxodia666"},"https://github.com/exxodia666")),o.a.createElement("li",{class:"display-6 m-2 list-group-item"},"Icons made by",o.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},o.a.createElement("span",null," Freepik ")),o.a.createElement("span",null," from "),o.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com"))))},C=function(){return o.a.createElement("div",null,o.a.createElement(i.a,{store:T},o.a.createElement(k.a,null,o.a.createElement(D,null),o.a.createElement(x.c,null,o.a.createElement(x.a,{exact:!0,path:"/"},o.a.createElement(O,null)),o.a.createElement(x.a,{path:"/about"},o.a.createElement(N,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.01d13d23.chunk.js.map