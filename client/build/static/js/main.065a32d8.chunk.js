(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{42:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(25),s=n.n(r),i=(n(57),n(11)),o=(n(58),n(0));function l(){return Object(o.jsxs)("div",{className:"landing-container",children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"landing-image",src:"https://www.freepnglogos.com/uploads/pok-mon-go-logo-png-30.png",alt:""})}),Object(o.jsxs)("div",{className:"pokemon-detail",children:[Object(o.jsx)("h1",{children:"Welcome to The Pokemon API"}),Object(o.jsx)("h2",{children:"More than 3.400.535 pokemons exist around the world"}),Object(o.jsx)(i.b,{to:"/pokemons",children:Object(o.jsx)("button",{className:"goHome",children:"!Gotta catch 'em all!"})})]}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"landing-image",src:"https://www.freepnglogos.com/uploads/pok-mon-go-logo-png-30.png",alt:""})})]})}var j=n(13),d=n(38),h=n(43),p=function(){return function(){var e=Object(h.a)(Object(d.a)().mark((function e(t){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"REQUEST_GET_POKEMONS"}),fetch("http://localhost:3001/types/").then((function(e){return e.json()})).then((function(e){t({type:"GET_TYPES_POKEMONS",payload:e})})),fetch("http://localhost:3001/pokemons/").then((function(e){return e.json()})).then((function(e){t({type:"GET_POKEMONS",payload:e})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var b=n(6);n(68);function O(e){var t=e.id,n=e.attack,a=e.name,c=e.image,r=e.types;return Object(o.jsx)(i.b,{className:"link",to:"/pokemons/"+t,children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("h1",{className:"title",children:a.charAt(0).toUpperCase()+a.slice(1)}),Object(o.jsxs)("div",{className:"footerCard",children:[Object(o.jsxs)("div",{className:"attack",children:[Object(o.jsx)("h3",{children:"Attack"}),Object(o.jsx)("p",{children:n})]}),Object(o.jsxs)("div",{className:"types",children:[Object(o.jsx)("h3",{children:"Types"}),Object(o.jsx)("ul",{children:r.map((function(e,t){return Object(o.jsx)("li",{children:e},t)}))})]}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"image",src:c,alt:""})})]})]},t)})}var u=n(16),m=n(17),g=n(45),x=n(51),f=n.p+"static/media/charmander-loading.53c666b2.gif",y=function(e){Object(g.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(m.a)(n,[{key:"render",value:function(){return this.props.loading?Object(o.jsx)("div",{className:"loader-container",children:Object(o.jsx)("div",{className:"loader",children:Object(o.jsx)("img",{src:f,alt:"Loader"})})}):null}}]),n}(a.Component),I=Object(b.b)((function(e){return{loading:e.loading}}))(y);n(69);function v(){return Object(o.jsxs)("header",{className:"navbar",children:[Object(o.jsx)("div",{className:"img-container",children:Object(o.jsx)("img",{id:"pokeball",src:"data:image/png;base64,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",width:"100",height:"50",alt:""})}),Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{className:"list",children:[Object(o.jsx)("li",{className:"list-item",children:Object(o.jsx)(i.c,{exact:!0,to:"/pokemons",children:"Home"})}),Object(o.jsx)("li",{className:"list-item",children:Object(o.jsx)(i.c,{exact:!0,to:"/create",children:"Add pokemon"})})]})})]})}var C=n(3),k=n(7);n(70);function N(){var e=Object(a.useState)({namePokemon:""}),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(b.c)(),s=Object(k.f)(),i=Object(b.d)((function(e){return e.pokemonDetail}));function l(e){var t;e.preventDefault(),r((t=n.namePokemon.toLowerCase(),function(e){return fetch("http://localhost:3001/pokemons/?name="+t).then((function(e){return e.json()})).then((function(t){e({type:"GET_DETAIL_POKEMON",payload:t})}))})),i.hasOwnProperty("name")&&s.push("/pokemons/"+i.id)}return Object(o.jsxs)("div",{className:"search-tools",children:[Object(o.jsx)("h2",{children:"POKEMON SEEKER"}),Object(o.jsxs)("form",{className:"form-container",onSubmit:function(e){return l(e)},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{className:"label",htmlFor:"title",children:"Search pokemon: "}),Object(o.jsx)("input",{type:"text",id:"nombre",autoComplete:"off",value:n.namePokemon,onChange:function(e){return function(e){c(Object(C.a)(Object(C.a)({},n),{},{namePokemon:e.target.value}))}(e)}})]}),Object(o.jsx)("button",{type:"submit",children:"SEARCH"})]})]})}function A(){var e=Object(a.useState)({order:""}),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(b.c)();return Object(a.useEffect)((function(){var e;r((e=n.order,function(t){"nameAscendant"===e?t({type:"FILTER_POKEMONS_1",payload:{order:"asc",property:"name"}}):"nameDescendant"===e?t({type:"FILTER_POKEMONS_1",payload:{order:"desc",property:"name"}}):"attackAscendant"===e?t({type:"FILTER_POKEMONS_1",payload:{order:"asc",property:"attack"}}):"attackDescendant"===e&&t({type:"FILTER_POKEMONS_1",payload:{order:"desc",property:"attack"}})}))}),[n,r]),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"order",children:"Choose order:"}),Object(o.jsxs)("select",{id:"order",name:"order",value:n.order,onChange:function(e){return c(Object(C.a)(Object(C.a)({},n),{},{order:e.target.value}))},children:[Object(o.jsx)("option",{value:"nameAscendant",children:"Name - Ascendant"}),Object(o.jsx)("option",{value:"nameDescendant",children:"Name - Descendant"}),Object(o.jsx)("option",{value:"attackAscendant",children:"Attack - Ascendant"}),Object(o.jsx)("option",{value:"attackDescendant",children:"Attack - Descendant"})]})]})}function E(){var e=Object(a.useState)({filter:"all"}),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(b.d)((function(e){return e.pokemonTypes})),s=Object(b.c)();return Object(a.useEffect)((function(){var e;s((e=n.filter,function(t){t({type:"FILTER_POKEMONS_2",payload:e})}))}),[n,s]),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"order",children:"Choose type:"}),Object(o.jsxs)("select",{id:"type",name:"type",value:n.filter,onChange:function(e){return c(Object(C.a)(Object(C.a)({},n),{},{filter:e.target.value}))},children:[Object(o.jsx)("option",{value:"all",children:"All"}),r.length&&r.map((function(e){return Object(o.jsx)("option",{value:e.name,children:e.name.charAt(0).toUpperCase()+e.name.slice(1)},e.id)}))]})]})}function S(){var e=Object(a.useState)({filter:""}),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(b.c)();return Object(a.useEffect)((function(){var e;r((e=n.filter,function(t){t({type:"FILTER_POKEMONS_3",payload:e})}))}),[n,r]),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"order",children:"Choose origin:"}),Object(o.jsxs)("select",{id:"origin",name:"origin",value:n.filter,onChange:function(e){return c(Object(C.a)(Object(C.a)({},n),{},{filter:e.target.value}))},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"api",children:"API"}),Object(o.jsx)("option",{value:"bd",children:"BD"})]})]})}n(71);function P(){return Object(o.jsxs)("div",{className:"filter-tools",children:[Object(o.jsx)("div",{children:Object(o.jsx)(A,{})}),Object(o.jsx)("div",{children:Object(o.jsx)(E,{})}),Object(o.jsx)("div",{children:Object(o.jsx)(S,{})})]})}function T(e){for(var t=e.currentPage,n=e.setCurrentPage,a=e.totalCards,c=e.cardsPerPage,r=Math.ceil(a/c),s=[],i=1;i<=r;i++)s.push(i);return Object(o.jsx)("div",{className:"pagination-container",children:Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:"page-item",children:Object(o.jsx)("button",{className:"page-link",onClick:function(){return n(t-1)},disabled:1===t,children:"\xab"})}),s.map((function(e){return Object(o.jsx)("li",{className:"page-item ".concat(e===t&&"active"),onClick:function(){return n(e)},children:Object(o.jsx)("button",{className:"page-link",children:e})},e)})),Object(o.jsx)("li",{className:"page-item ".concat(t===r&&"disabled"),children:Object(o.jsx)("button",{className:"page-link",onClick:function(){return n(t+1)},disabled:t===r,children:"\xbb"})})]})})}n(72),n(42);function w(){var e=Object(b.c)(),t=Object(b.d)((function(e){return e.loading})),n=Object(b.d)((function(e){return e.pokemonsSorted})),c=Object(a.useState)(1),r=Object(j.a)(c,2),s=r[0],i=r[1],l=n.length,d=12*s,h=d-12,u=n.slice(h,d);return Object(a.useEffect)((function(){0===n.length&&e(p())}),[n,e]),Object(o.jsxs)("div",{className:"main-cointaner",children:[Object(o.jsx)(v,{}),Object(o.jsx)(N,{}),Object(o.jsx)(P,{}),Object(o.jsx)("div",{className:"cards-container",children:t?Object(o.jsx)(I,{}):u.map((function(e){return Object(o.jsx)(O,{id:e.id,name:e.name,image:e.image,attack:e.attack,types:e.types},e.id)}))}),l>12&&Object(o.jsx)(T,{currentPage:s,setCurrentPage:i,totalCards:l,cardsPerPage:12})]})}n(73);function F(){var e=Object(b.c)(),t=Object(k.g)().id,n=Object(b.d)((function(e){return e.pokemonDetail}));return Object(a.useEffect)((function(){e(function(e){return function(t){fetch("http://localhost:3001/pokemons/"+e).then((function(e){return e.json()})).then((function(e){t({type:"GET_DETAIL_POKEMON",payload:e})}))}}(t))}),[e,t]),Object(o.jsx)("div",{className:"container",children:n.hasOwnProperty("name")?Object(o.jsxs)("div",{className:"detail-pokemon",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Pokemon N\xb0 "+n.id+" "+n.name.charAt(0).toUpperCase()+n.name.slice(1)})}),Object(o.jsxs)("div",{className:"interior-detail",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Types"}),Object(o.jsx)("ul",{children:n.types.map((function(e,t){return Object(o.jsx)("li",{children:e},t)}))}),Object(o.jsx)("h3",{children:"Stats"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Health points: "+n.hp}),Object(o.jsx)("li",{children:"Attack: "+n.attack}),Object(o.jsx)("li",{children:"Defense: "+n.defense}),Object(o.jsx)("li",{children:"Speed: "+n.speed})]}),Object(o.jsx)("h3",{children:"Caracteristics"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Height: "+n.height}),Object(o.jsx)("li",{children:"Weight: "+n.weigth})]})]}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"detail-img",src:n.image,alt:""})})]})]}):Object(o.jsx)(I,{})})}var M=n(24),D=n(50);n(79);function L(){var e="",t=Object(k.f)(),n=Object(b.d)((function(e){return e.pokemonTypes})),c=Object(b.d)((function(e){return e.formErrors})),r=Object(b.c)(),s=Object(a.useState)({id:"",name:"",hp:"",attack:"",defense:"",speed:"",height:"",weight:"",type1:"",type2:""}),i=Object(j.a)(s,2),l=i[0],d=i[1],h=function(e){d(Object(C.a)(Object(C.a)({},l),{},Object(M.a)({},e.target.name,e.target.value)));var t=function(e){var t={};return e.id?Number.isInteger(parseInt(e.id))||(t.id="ID must be an integer number"):t.id="ID is required",e.name?Number.isInteger(parseInt(e.name))&&(t.name="Name cant be a number"):t.name="Name is required",Number.isInteger(parseInt(e.hp))||(t.hp="HP must be an integer number"),Number.isInteger(parseInt(e.attack))||(t.attack="Attack must be an integer number"),Number.isInteger(parseInt(e.defense))||(t.defense="Defense must be an integer number"),Number.isInteger(parseInt(e.speed))||(t.speed="Speed must be an integer number"),Number.isInteger(parseInt(e.height))||(t.height="Height must be an integer number"),Number.isInteger(parseInt(e.weight))||(t.weight="Weight must be an integer number"),e.type1||e.type2?e.type1===e.type2&&(t.type2="Types cant be equal"):t.type1="At least 1 type is required",t}(Object(C.a)(Object(C.a)({},l),{},Object(M.a)({},e.target.name,e.target.value)));t&&r(function(e){return function(t){t({type:"ADD_ERRORS",payload:e})}}(t))};return Object(a.useEffect)((function(){0===n.length&&r(p())}),[n,r]),Object(o.jsxs)("div",{className:"container1",children:[Object(o.jsx)("h1",{children:"Create new pokemon"}),Object(o.jsxs)("form",{className:"create-container",onSubmit:function(n){return function(n){n.preventDefault(),console.log(l);var a={id:parseInt(l.id),name:l.name.toLowerCase(),hp:parseInt(l.hp),attack:parseInt(l.attack),defense:parseInt(l.defense),speed:parseInt(l.speed),height:parseInt(l.height),weight:parseInt(l.weight),types:[l.type1,l.type2],image:""};D.a.post("http://localhost:3001/pokemons/",a).then((function(n){Array.isArray(n.data)?(console.log(n.data),n.data.forEach((function(e){"name must be unique"===e.message?alert("Pokemon already existe, please choose another name"):alert(e.message)}))):(e=n.data.toString(),alert(e),t.push("/pokemons"))})).catch((function(e){throw new Error(e)}))}(n)},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"ID:"}),Object(o.jsx)("input",{className:c.id&&"danger",type:"text",name:"id",onChange:h,value:l.id}),c.id&&Object(o.jsx)("p",{className:"danger",children:c.id})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Name:"}),Object(o.jsx)("input",{className:c.name&&"danger",type:"text",name:"name",onChange:h,value:l.name}),c.name&&Object(o.jsx)("p",{className:"danger",children:c.name})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"HP:"}),Object(o.jsx)("input",{className:c.hp&&"danger",type:"text",name:"hp",onChange:h,value:l.hp}),c.hp&&Object(o.jsx)("p",{className:"danger",children:c.hp})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Attack:"}),Object(o.jsx)("input",{className:c.attack&&"danger",type:"text",name:"attack",onChange:h,value:l.attack}),c.attack&&Object(o.jsx)("p",{className:"danger",children:c.attack})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Defense:"}),Object(o.jsx)("input",{className:c.defense&&"danger",type:"text",name:"defense",onChange:h,value:l.defense}),c.defense&&Object(o.jsx)("p",{className:"danger",children:c.defense})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Speed:"}),Object(o.jsx)("input",{className:c.speed&&"danger",type:"text",name:"speed",onChange:h,value:l.speed}),c.speed&&Object(o.jsx)("p",{className:"danger",children:c.speed})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Height:"}),Object(o.jsx)("input",{className:c.height&&"danger",type:"text",name:"height",onChange:h,value:l.height}),c.height&&Object(o.jsx)("p",{className:"danger",children:c.height})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Weight:"}),Object(o.jsx)("input",{className:c.weight&&"danger",type:"text",name:"weight",onChange:h,value:l.weight}),c.weight&&Object(o.jsx)("p",{className:"danger",children:c.weight})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Type:"}),Object(o.jsxs)("select",{className:c.type1&&"danger",id:"type1",name:"type1",value:l.type1,onChange:h,children:[Object(o.jsx)("option",{value:"",children:"Choose type1"}),n.length&&n.map((function(e){return Object(o.jsx)("option",{value:e.name,children:e.name.charAt(0).toUpperCase()+e.name.slice(1)},e.id)}))]}),Object(o.jsxs)("select",{className:c.type1&&"danger",id:"type2",name:"type2",value:l.type2,onChange:h,children:[Object(o.jsx)("option",{value:"",children:"Choose type2"}),n.length&&n.map((function(e){return Object(o.jsx)("option",{value:e.name,children:e.name.charAt(0).toUpperCase()+e.name.slice(1)},e.id)}))]}),c.type1&&Object(o.jsx)("p",{className:"danger",children:c.type1}),c.type2&&Object(o.jsx)("p",{className:"danger",children:c.type2})]}),Object(o.jsx)("button",{type:"submit",disabled:(c.id||c.name||c.type1||c.type2)&&!0,children:"CREATE"})]})]})}n(80);var G=function(){return Object(o.jsx)(c.a.Fragment,{children:Object(o.jsxs)(k.c,{children:[Object(o.jsx)(k.a,{exact:!0,path:"/",component:l}),Object(o.jsx)(k.a,{exact:!0,path:"/pokemons",component:w}),Object(o.jsx)(k.a,{exact:!0,path:"/pokemons/:id",component:F}),Object(o.jsx)(k.a,{exact:!0,path:"/create",component:L})]})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},R=n(35),K=n(52),H={pokemonCreated:{},pokemonTypes:[],pokemonsLoaded:[],pokemonsSorted:[],pokemonDetail:{},formErrors:{},loading:!1};function z(e,t){return e.sort((function(e,n){return e[t]>n[t]?1:n[t]>e[t]?-1:0}))}function Q(e,t){return e.sort((function(e,n){return e[t]>n[t]?-1:n[t]>e[t]?1:0}))}var V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER_POKEMONS_1":var n=[];return"asc"===t.payload.order?n=z(e.pokemonsSorted,t.payload.property):"desc"===t.payload.order&&(n=Q(e.pokemonsSorted,t.payload.property)),Object(C.a)(Object(C.a)({},e),{},{pokemonsSorted:Object(K.a)(n)});case"FILTER_POKEMONS_2":var a=[];return"all"!==t.payload?0===(a=e.pokemonsSorted.filter((function(e){return e.types.find((function(e){return e===t.payload}))}))).length&&(a=e.pokemonsSorted):a=e.pokemonsSorted,Object(C.a)(Object(C.a)({},e),{},{pokemonsSorted:a});case"FILTER_POKEMONS_3":var c=[];return"all"!==t.payload?"api"===t.payload?c=e.pokemonsLoaded.filter((function(e){return Number.isInteger(e.id)})):"bd"===t.payload&&(c=e.pokemonsLoaded.filter((function(e){return!Number.isInteger(e.id)}))):"all"!==t.payload&&""!==t.payload||(c=e.pokemonsLoaded),Object(C.a)(Object(C.a)({},e),{},{pokemonsSorted:c});case"REQUEST_GET_POKEMONS":return Object(C.a)(Object(C.a)({},e),{},{loading:!0});case"GET_POKEMONS":return Object(C.a)(Object(C.a)({},e),{},{pokemonsLoaded:t.payload,pokemonsSorted:t.payload,pokemonDetail:{},loading:!1});case"GET_TYPES_POKEMONS":return Object(C.a)(Object(C.a)({},e),{},{pokemonTypes:t.payload});case"ADD_ERRORS":return Object(C.a)(Object(C.a)({},e),{},{formErrors:t.payload});case"GET_DETAIL_POKEMON":return Object(C.a)(Object(C.a)({},e),{},{pokemonDetail:t.payload,loading:!1});default:return e}},B=n(49),W="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.b,X=Object(R.c)(V,W(Object(R.a)(B.a)));s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(b.a,{store:X,children:Object(o.jsx)(i.a,{children:Object(o.jsx)(G,{})})})}),document.getElementById("root")),U()}},[[81,1,2]]]);
//# sourceMappingURL=main.065a32d8.chunk.js.map