(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{134:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(167)),o={title:"Installation"},s={unversionedId:"api/start/install",id:"api/start/install",isDocsHomePage:!1,title:"Installation",description:"Yes, it really is as simple as installing from npm, so we are not going to waste too much time with the bare basics, just install the API via",source:"@site/docs/api/start/install.md",slug:"/api/start/install",permalink:"/docs/api/start/install",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/start/install.md",version:"current",sidebar:"reference",previous:{title:"Overview",permalink:"/docs/api/start"},next:{title:"Basics & Metadata",permalink:"/docs/api/start/basics"}},l=[{value:"Betas",id:"betas",children:[]},{value:"Other dependencies",id:"other-dependencies",children:[]},{value:"API basics",id:"api-basics",children:[]}],c={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Yes, it really is as simple as ",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@polkadot/api"},"installing from npm"),", so we are not going to waste too much time with the bare basics, just install the API via"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"yarn add @polkadot/api")),Object(i.b)("p",null,"And it will be added and ready for use. The above will always install the latest stable release, which should allow you to connect to test networks and local nodes that are tracking versioned releases for ",Object(i.b)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot"},"Polkadot")," and ",Object(i.b)("a",{parentName:"p",href:"https://github.com/paritytech/substrate"},"Substrate"),"."),Object(i.b)("h2",{id:"betas"},"Betas"),Object(i.b)("p",null,"For users who have a slightly higher appetite for risk, or are using bleeding-edge master branches of either Polkadot/Substrate, we also publish a beta version as soon as anything is merged into the API master branch. This version really contains all the latest fixes and features and is the version we actually use inside the polkadot-js projects - eating our own dog food."),Object(i.b)("p",null,"To install a beta version, either to test or for support of a feature that is available in Substrate master (and has not yet made it to a stable api release), you can install it via the ",Object(i.b)("inlineCode",{parentName:"p"},"@beta")," tag, i.e."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"yarn add @polkadot/api@beta")),Object(i.b)("h2",{id:"other-dependencies"},"Other dependencies"),Object(i.b)("p",null,"In most cases, you don't need to do anything else apart from just installing ",Object(i.b)("inlineCode",{parentName:"p"},"@polkadot/api")," above. It has dependencies such as ",Object(i.b)("inlineCode",{parentName:"p"},"@polkadot/types")," which are installed automatically alongside. When using ",Object(i.b)("inlineCode",{parentName:"p"},"yarn")," the dependencies are installed, flattened, available for use and you will never run into issues with mismatched versions."),Object(i.b)("p",null,"This means that by simply installing ",Object(i.b)("inlineCode",{parentName:"p"},"@polkadot/api"),", you will have access to utilities (crypto and normal), types, providers and even higher-order (derived) API functions. (We will get to all of these in follow-up sections)"),Object(i.b)("p",null,"If you do however decide to explicitly install other packages (even though they are dependencies), please make sure that the versions inside the api package always match with your versions, i.e. if you installed ",Object(i.b)("inlineCode",{parentName:"p"},"@polkadot/api")," ",Object(i.b)("inlineCode",{parentName:"p"},"2.1.2-3")," and you have your own version of ",Object(i.b)("inlineCode",{parentName:"p"},"@polkadot/types"),", ensure that it is also ",Object(i.b)("inlineCode",{parentName:"p"},"2.1.2-3"),"."),Object(i.b)("h2",{id:"api-basics"},"API basics"),Object(i.b)("p",null,"So we have it installed. Before we jump into actual real-world usage, ",Object(i.b)("a",{parentName:"p",href:"/docs/api/start/basics"},"let's understand what the API gives us"),"."))}p.isMDXComponent=!0},167:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),b=n,h=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return a?r.a.createElement(h,s(s({ref:t},c),{},{components:a})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);