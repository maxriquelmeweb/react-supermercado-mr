(this.webpackJsonpsupermercado=this.webpackJsonpsupermercado||[]).push([[0],{17:function(e,c,t){},18:function(e,c,t){"use strict";t.r(c);var n=t(1),l=t.n(n),a=t(9),s=t.n(a),r=t(11),i=t(5),o=t(4),d=t(6),j=t(20),b=t(0),m=function(e){var c=e.insertarArticulo,t=Object(n.useState)({id:"",nombre:"",valor:0,cantidad:0,estado:!1}),l=Object(i.a)(t,2),a=l[0],s=l[1],r=Object(n.useState)(!1),m=Object(i.a)(r,2),u=m[0],x=m[1],h=function(e){"cantidad"===e.target.name||"valor"===e.target.name?s(Object(d.a)(Object(d.a)({},a),{},Object(o.a)({},e.target.name,parseInt(e.target.value)))):s(Object(d.a)(Object(d.a)({},a),{},Object(o.a)({},e.target.name,e.target.value)))},O=a.nombre,f=a.cantidad,v=a.valor;return Object(b.jsxs)(n.Fragment,{children:[u?Object(b.jsx)("div",{className:"alert alert-danger text-center",role:"alert",children:"Ingrese un articulo"}):null,Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==O.trim()?(f<1&&(a.cantidad=1),v<1&&(a.valor=0),a.cantidad>0&&a.valor>0&&(a.valor=a.valor*a.cantidad),x(!1),a.id=Object(j.a)(),c(a),e.target.reset(),s({id:"",nombre:"",valor:0,cantidad:0})):x(!0)},className:"col-12",children:[Object(b.jsx)("div",{className:"row justify-content-center",children:Object(b.jsx)("div",{className:"d-flex justify-content-center col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12",children:Object(b.jsx)("input",{onChange:h,name:"nombre",type:"text",className:"form-control form-control-lg text-center",placeholder:"Ingrese un articulo*"})})}),Object(b.jsxs)("div",{className:"row justify-content-center mt-2",children:[Object(b.jsx)("div",{className:"d-flex justify-content-center col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6",children:Object(b.jsx)("input",{type:"number",onChange:h,name:"cantidad",className:"form-control form-control-lg text-center",placeholder:"cantidad"})}),Object(b.jsx)("div",{className:"d-flex justify-content-center col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6",children:Object(b.jsx)("input",{type:"number",onChange:h,name:"valor",className:"form-control form-control-lg text-center",placeholder:"valor"})})]}),Object(b.jsx)("div",{className:"row justify-content-center mt-2",children:Object(b.jsx)("div",{className:"d-flex justify-content-center col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-primary btn-block btn-lg",children:"Agregar"})})})]})]})},u=t(8),x=function(e){var c=e.articulo,t=e.eliminarArticulo,l=e.actualizarArticulo;return Object(b.jsx)(n.Fragment,{children:Object(b.jsx)("div",{className:"col-xl-8 col-md-8 mt-2",children:c.estado?Object(b.jsxs)("div",{className:"row justify-content-center",children:[Object(b.jsx)("div",{className:"justify-content-center col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6",children:Object(b.jsxs)("div",{className:"card text-white bg-success mb-3",children:[Object(b.jsx)("div",{className:"card-header text-center",children:Object(b.jsxs)("h5",{children:[c.nombre," ",Object(b.jsx)(u.a,{})]})}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("h6",{children:["Cantidad: ",c.cantidad]}),Object(b.jsxs)("h6",{children:["Valor: ",c.valor]})]})]})}),Object(b.jsx)("div",{className:"d-flex justify-content-center col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3",children:Object(b.jsx)("button",{className:"btn btn-success btn-lg px-1 mb-3",onClick:function(){return l(c.id,0)},children:"Pendiente"})}),Object(b.jsx)("div",{className:"d-flex justify-content-center col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3",children:Object(b.jsx)("button",{className:"btn btn-danger btn-lg px-2 mb-3",onClick:function(){return t(c.id)},children:"Eliminar"})})]}):Object(b.jsxs)("div",{className:"row justify-content-center",children:[Object(b.jsx)("div",{className:"justify-content-center col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6",children:Object(b.jsxs)("div",{className:"card bg-warning mb-3",children:[Object(b.jsx)("div",{className:"card-header text-center",children:Object(b.jsxs)("h5",{children:[c.nombre," ",Object(b.jsx)(u.b,{})]})}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("h6",{children:["Cantidad: ",c.cantidad]}),Object(b.jsxs)("h6",{children:["Valor: ",c.valor]})]})]})}),Object(b.jsx)("div",{className:"d-flex justify-content-center col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3",children:Object(b.jsx)("button",{className:"btn btn-warning btn-lg px-4 mb-3",onClick:function(){return l(c.id,1)},children:"Listo"})}),Object(b.jsx)("div",{className:"d-flex justify-content-center col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3",children:Object(b.jsx)("button",{className:"btn btn-danger btn-lg px-2 mb-3",onClick:function(){return t(c.id)},children:"Eliminar"})})]})})})},h=t(10),O=function(e){var c,t=e.articulos,l=0,a=0,s=0,r=0,i=Object(h.a)(t);try{for(i.s();!(c=i.n()).done;){var o=c.value;o.estado?(a+=o.valor,r+=o.cantidad):(l+=o.valor,s+=o.cantidad)}}catch(d){i.e(d)}finally{i.f()}return Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)("div",{className:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6",children:Object(b.jsx)("div",{className:"card bg-warning text-center",children:Object(b.jsxs)("div",{className:"card-body py-1",children:[Object(b.jsxs)("h6",{children:["Pendientes: ",s]}),Object(b.jsxs)("h6",{children:["Valor: ",l]})]})})}),Object(b.jsx)("div",{className:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6",children:Object(b.jsx)("div",{className:"card text-white bg-success text-center",children:Object(b.jsxs)("div",{className:"card-body py-1",children:[Object(b.jsxs)("h6",{children:["Listos: ",r]}),Object(b.jsxs)("h6",{children:["Valor: ",a]})]})})})]})};var f=function(){var e=JSON.parse(localStorage.getItem("articulos"));e||(e=[]);var c=Object(n.useState)(e),t=Object(i.a)(c,2),l=t[0],a=t[1];Object(n.useEffect)((function(){e?localStorage.setItem("articulos",JSON.stringify(l)):localStorage.setItem("articulos",JSON.stringify([]))}),[l,e]);var s=function(e){a(l.filter((function(c){return c.id!==e})))},o=function(e,c){a(l.map((function(t){return t.id===e&&1===c?t.estado=!0:t.id===e&&0===c&&(t.estado=!1),t})))};return Object(b.jsx)(n.Fragment,{children:Object(b.jsxs)("div",{className:"container mt-2",children:[Object(b.jsx)("div",{className:"row justify-content-center",children:Object(b.jsx)("h1",{className:"text-light",children:"Lista de articulos"})}),Object(b.jsx)("div",{className:"row justify-content-center mt-3",children:Object(b.jsx)(m,{insertarArticulo:function(e){a([].concat(Object(r.a)(l),[e]))},articulos:l})}),Object(b.jsx)("div",{className:"row justify-content-center mt-3",children:Object(b.jsx)(O,{articulos:l})}),Object(b.jsx)("div",{className:"row justify-content-center mt-5",children:l.map((function(e){return Object(b.jsx)(x,{articulo:e,eliminarArticulo:s,actualizarArticulo:o},e.id)}))})]})})},v=(t(17),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(c){var t=c.getCLS,n=c.getFID,l=c.getFCP,a=c.getLCP,s=c.getTTFB;t(e),n(e),l(e),a(e),s(e)}))});s.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),v()}},[[18,1,2]]]);
//# sourceMappingURL=main.d3d36cac.chunk.js.map