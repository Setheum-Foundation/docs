(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{158:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var a=r(2),n=r(6),o=(r(0),r(167)),c={title:"Hash Data"},i={unversionedId:"util-crypto/examples/hash-data",id:"util-crypto/examples/hash-data",isDocsHomePage:!1,title:"Hash Data",description:"There are many different hashing algorithms exposed in the util-crypto package.",source:"@site/docs/util-crypto/examples/hash-data.md",slug:"/util-crypto/examples/hash-data",permalink:"/docs/util-crypto/examples/hash-data",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/util-crypto/examples/hash-data.md",version:"current",sidebar:"reference",previous:{title:"Verify Signature",permalink:"/docs/util-crypto/examples/verify-signature"},next:{title:"FAQ",permalink:"/docs/util-crypto/FAQ"}},p=[],l={rightToc:p};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are many different hashing algorithms exposed in the util-crypto package."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Blake2")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Keccak")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"sha512")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"for all of them see ",Object(o.b)("a",{parentName:"p",href:"https://github.com/polkadot-js/common/tree/master/packages/util-crypto/src"},"here")),Object(o.b)("p",{parentName:"li"}," Example of Blake2 hashing"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const { blake2AsHex } = require('@polkadot/util-crypto');\nconst hash = blake2AsHex(\"data goes here\")\nconsole.log(hash)\n//result: { hash: '0xce73267ed8316b4350672f32ba49af86a7ae7af1267beb868a27f3fda03c044a' }\n")))))}s.isMDXComponent=!0},167:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),b=a,f=u["".concat(c,".").concat(b)]||u[b]||m[b]||o;return r?n.a.createElement(f,i(i({ref:t},l),{},{components:r})):n.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);