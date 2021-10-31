(this.webpackJsonpmathix=this.webpackJsonpmathix||[]).push([[0],{29:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),i=n(17),c=n.n(i),r=n(6),s=n(18),l=n(19),u=n(24),b=n(22),d=n(2),j=(n(29),n(8)),p=n(3),x=n(12),m=n.n(x);function h(t,e,n){var a=m()(t),o=m()(e);if("+"===n)return a.plus(o).toString();if("\u2212"===n)return a.minus(o).toString();if("\xd7"===n)return a.times(o).toString();if("\xf7"===n)try{return a.div(o).toString()}catch(i){return"Can't divide by 0."}if("%"===n)return a.mod(o).toString();throw Error("Unknown operation '".concat(n,"'"))}var f=n(0),O=function(){var t=Object(a.useState)({total:"0",next:null,operation:null}),e=Object(j.a)(t,2),n=e[0],o=e[1],i=n.total,c=n.next,r=n.operation,s=function(t){o((function(){return e=n,"AC"===(a=t)?{total:"0",next:null,operation:null}:/[0-9]+/.test(a)?"0"===a&&"0"===e.next?{}:e.operation?e.next?Object(p.a)(Object(p.a)({},e),{},{next:e.next+a}):Object(p.a)(Object(p.a)({},e),{},{next:a}):e.next?{next:e.next+a,total:null}:{next:a,total:null}:"."===a?e.next?e.next.includes(".")?Object(p.a)({},e):Object(p.a)(Object(p.a)({},e),{},{next:"".concat(e.next,".")}):e.operation?{next:"0."}:e.total?e.total.includes(".")?{}:{total:"".concat(e.total,".")}:{total:"0."}:"="===a?e.next&&e.operation?{total:h(e.total,e.next,e.operation),next:null,operation:null}:{total:"0",next:null,operation:null}:"+/-"===a?e.next?Object(p.a)(Object(p.a)({},e),{},{next:(-1*parseFloat(e.next)).toString()}):e.total?Object(p.a)(Object(p.a)({},e),{},{total:(-1*parseFloat(e.total)).toString()}):{}:e.next||!e.total||e.operation?e.operation?e.total&&!e.next?Object(p.a)(Object(p.a)({},e),{},{operation:a}):{total:h(e.total,e.next,e.operation),next:null,operation:a}:e.next?{total:e.next,next:null,operation:a}:{operation:a}:Object(p.a)(Object(p.a)({},e),{},{operation:a});var e,a}))};return Object(f.jsxs)("div",{className:"row justify-content-between flex-row",children:[Object(f.jsx)("div",{className:"col text-light fs-1",children:"Let's do some math!"}),Object(f.jsxs)("div",{className:"row row-cols-4 col-8",children:[Object(f.jsxs)("div",{className:"gray-bg text-end text-white col-12 py-4 fs-4 align-self-center",children:[i,r,c]}),Object(f.jsx)("button",{className:"fs-5 py-4 border",type:"button",onClick:function(t){return s(t.target.textContent)},children:"AC"}),Object(f.jsx)("button",{className:"fs-5 py-4 border",type:"button",onClick:function(t){return s(t.target.textContent)},children:"+/-"}),Object(f.jsx)("button",{className:"fs-5 py-4 border",type:"button",onClick:function(t){return s(t.target.textContent)},children:"%"}),Object(f.jsx)("button",{className:"fs-5 py-4 border btn-warning",type:"button",onClick:function(t){return s(t.target.textContent)},children:"\xf7"}),Object(f.jsx)("button",{className:"fs-5 py-4 border",type:"button",onClick:function(t){return s(t.target.textContent)},children:"7"}),Object(f.jsx)("button",{className:"fs-5 py-4 border",type:"button",onClick:function(t){return s(t.target.textContent)},children:"8"}),Object(f.jsx)("button",{className:"fs-5 py-4 border",type:"button",onClick:function(t){return s(t.target.textContent)},children:"9"}),Object(f.jsx)("button",{className:"fs-5 py-4 border btn-warning",type:"button",onClick:function(t){return s(t.target.textContent)},children:"\xd7"}),Object(f.jsx)("button",{className:"fs-5 py-4 border",type:"button",onClick:function(t){return s(t.target.textContent)},children:"4"}),Object(f.jsx)("button",{className:"fs-5 py-4 border",type:"button",onClick:function(t){return s(t.target.textContent)},children:"5"}),Object(f.jsx)("button",{className:"fs-5 py-4 border",type:"button",onClick:function(t){return s(t.target.textContent)},children:"6"}),Object(f.jsx)("button",{className:"fs-5 py-4 border btn-warning",type:"button",onClick:function(t){return s(t.target.textContent)},children:"\u2212"}),Object(f.jsx)("button",{className:"fs-5 py-4 border",type:"button",onClick:function(t){return s(t.target.textContent)},children:"1"}),Object(f.jsx)("button",{className:"fs-5 py-4 border",type:"button",onClick:function(t){return s(t.target.textContent)},children:"2"}),Object(f.jsx)("button",{className:"fs-5 py-4 border",type:"button",onClick:function(t){return s(t.target.textContent)},children:"3"}),Object(f.jsx)("button",{className:"fs-5 py-4 border btn-warning",type:"button",onClick:function(t){return s(t.target.textContent)},children:"+"}),Object(f.jsx)("button",{className:"col-6 fs-5 py-4 border",type:"button",onClick:function(t){return s(t.target.textContent)},children:"0"}),Object(f.jsx)("button",{className:"fs-5 py-4 border",type:"button",onClick:function(t){return s(t.target.textContent)},children:"."}),Object(f.jsx)("button",{className:"fs-5 py-4 border btn-warning",type:"button",onClick:function(t){return s(t.target.textContent)},children:"="})]})]})},v=function(){var t=Object(a.useState)({}),e=Object(j.a)(t,2),n=e[0],o=e[1],i=function(){return fetch("https://random-math-quote-api.herokuapp.com/").then((function(t){return t.json()})).then((function(t){return o(t)}))};Object(a.useEffect)((function(){return i()}),[]);var c=n.quote,r=n.author;return Object(f.jsxs)("div",{className:"text-white col-9",children:[Object(f.jsx)("p",{className:"lead fs-2",children:Object.keys(n).length?"".concat(c," - ").concat(r):""}),Object(f.jsx)("button",{type:"button",className:"btn btn-warning",onClick:i,children:"Get another one"})]})},g=function(){return Object(f.jsxs)("div",{className:"text-white pt-5",children:[Object(f.jsx)("h1",{className:"display-1 mb-3",children:"Welcome to our page!"}),Object(f.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolore fuga odit officia dolores, magnam voluptates provident nam quis, doloremque ratione culpa optio maiores libero suscipit numquam est minima quos obcaecati recusandae labore itaque porro. Minima expedita facere adipisci possimus dolore quia voluptas! Reprehenderit repudiandae totam placeat, at vitae impedit laudantium obcaecati eaque iste, modi recusandae deleniti nulla cum repellendus dignissimos illum cupiditate in! Ullam illo vero perspiciatis veniam illum! Est, ex odio voluptatibus architecto enim voluptate velit quas dicta sit facere! Maiores beatae, ea vel odit possimus deleniti molestias cum. Itaque alias voluptates aperiam molestiae labore recusandae nihil iure?"}),Object(f.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolore fuga odit officia dolores, magnam voluptates provident nam quis, doloremque ratione culpa optio maiores libero suscipit numquam est minima quos obcaecati recusandae labore itaque porro. Minima expedita facere adipisci possimus dolore quia voluptas! Reprehenderit repudiandae totam placeat, at vitae impedit laudantium obcaecati eaque iste, modi recusandae deleniti nulla cum repellendus dignissimos illum cupiditate in! Ullam illo vero perspiciatis veniam illum! Est, ex odio voluptatibus architecto enim voluptate velit quas dicta sit facere! Maiores beatae, ea vel odit possimus deleniti molestias cum. Itaque alias voluptates aperiam molestiae labore recusandae nihil iure?"})]})},y=n(23),N=function(){return Object(f.jsx)("nav",{className:"navbar navbar-expand-md navbar-light bg-secondary fixed-top",children:Object(f.jsxs)("div",{className:"container-fluid",children:[Object(f.jsx)("span",{className:"navbar-brand text-white",children:"Mathix"}),Object(f.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(f.jsx)(y.a,{style:{color:"white",fontSize:"25px"}})}),Object(f.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(f.jsxs)("ul",{className:"navbar-nav ms-auto nav-bar",children:[Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(r.b,{to:"/",children:"Home"})}),Object(f.jsx)("li",{className:"v-line d-none d-md-block"}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(r.b,{to:"/calculator",children:"Calculator"})}),Object(f.jsx)("li",{className:"v-line d-none d-md-block"}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(r.b,{to:"/quote",children:"Quote"})})]})})]})})},C=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(N,{}),Object(f.jsx)("main",{className:"bg-dark bg-gradient vh-100 d-flex flex-column justify-content-center",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row justify-content-center",children:Object(f.jsxs)(d.c,{children:[Object(f.jsx)(d.a,{exact:!0,path:"/",children:Object(f.jsx)(g,{})}),Object(f.jsx)(d.a,{path:"/calculator",children:Object(f.jsx)(O,{})}),Object(f.jsx)(d.a,{path:"/quote",children:Object(f.jsx)(v,{})}),Object(f.jsx)(d.a,{path:"*",children:"Not found"})]})})})})]})}}]),n}(o.a.Component),k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),a(t),o(t),i(t),c(t)}))};n(39),n(40);c.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(r.a,{basename:"/mathix",children:Object(f.jsx)(C,{})})}),document.getElementById("root")),k()}},[[62,1,2]]]);
//# sourceMappingURL=main.6df8b3b9.chunk.js.map