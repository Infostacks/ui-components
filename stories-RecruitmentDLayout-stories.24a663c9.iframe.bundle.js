"use strict";(self.webpackChunk_infostacks_ui_components=self.webpackChunk_infostacks_ui_components||[]).push([[731],{"./src/stories/RecruitmentDLayout.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HomePage:()=>HomePage,ProfilePage:()=>ProfilePage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/Components/index.ts"),_Context_sampleContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Context/sampleContext.tsx"),storybook_addon_react_router_v6__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/storybook-addon-react-router-v6/dist/index.mjs"),_Utils_Constants_dashboardItemList__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Utils/Constants/dashboardItemList.ts");let __WEBPACK_DEFAULT_EXPORT__={title:"Layout/Recruitment",component:_Components__WEBPACK_IMPORTED_MODULE_0__.aC,decorators:[_Context_sampleContext__WEBPACK_IMPORTED_MODULE_1__.QR,storybook_addon_react_router_v6__WEBPACK_IMPORTED_MODULE_2__.y],argTypes:{title:{control:"text"}}};var HomePage={args:{title:"Candidate",dashboardItemList:_Utils_Constants_dashboardItemList__WEBPACK_IMPORTED_MODULE_3__.A,activeSection:"dashboard",handleSectionClick:function(section){console.log(section)},isSmallScreen:!1},parameters:{initialProps:{userAuth:{photoURL:"https://lh3.googleusercontent.com/a/ACg8ocKjSDRwb8AWDtxj9h5mlMQMIuHAbiEGFlyZSOfr4cqZ=s96-c",displayName:"Muhammad Ghufran Ali",email:"ghoofy.321@gmail.com"},signOutContext:function(){console.log("signout")},menuListItems:[{text:"Profile",href:"/profile"},{text:"My Account",href:"/account"}]},reactRouter:(0,storybook_addon_react_router_v6__WEBPACK_IMPORTED_MODULE_2__.Jg)({location:{path:"/dashboard"},routing:{path:"/dashboard"}})}},ProfilePage={args:{title:"Candidate",dashboardItemList:_Utils_Constants_dashboardItemList__WEBPACK_IMPORTED_MODULE_3__.A,activeSection:"profile",handleSectionClick:function(section){console.log(section)},isSmallScreen:!1},parameters:{initialProps:{userAuth:{photoURL:"https://lh3.googleusercontent.com/a/ACg8ocKjSDRwb8AWDtxj9h5mlMQMIuHAbiEGFlyZSOfr4cqZ=s96-c",displayName:"Muhammad Ghufran Ali",email:"ghoofy.321@gmail.com"},signOutContext:function(){console.log("signout")},menuListItems:[{text:"Profile",href:"/profile"},{text:"My Account",href:"/account"}]},reactRouter:(0,storybook_addon_react_router_v6__WEBPACK_IMPORTED_MODULE_2__.Jg)({location:{path:"/dashboard/profile"},routing:{path:"/dashboard/profile"}})}};HomePage.parameters={...HomePage.parameters,docs:{...HomePage.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: "Candidate",\n    dashboardItemList: dashboardItemList,\n    activeSection: "dashboard",\n    handleSectionClick: (section: string) => {\n      console.log(section);\n    },\n    isSmallScreen: false\n  },\n  parameters: {\n    // pass in some JSON props here, I don\'t know what you need\n    initialProps: {\n      userAuth: {\n        photoURL: "https://lh3.googleusercontent.com/a/ACg8ocKjSDRwb8AWDtxj9h5mlMQMIuHAbiEGFlyZSOfr4cqZ=s96-c",\n        displayName: "Muhammad Ghufran Ali",\n        email: "ghoofy.321@gmail.com"\n      },\n      signOutContext: () => {\n        console.log("signout");\n      },\n      menuListItems: [{\n        text: "Profile",\n        href: "/profile"\n      }, {\n        text: "My Account",\n        href: "/account"\n      }]\n    },\n    reactRouter: reactRouterParameters({\n      location: {\n        path: "/dashboard"\n      },\n      routing: {\n        path: "/dashboard"\n      }\n    })\n  }\n}',...HomePage.parameters?.docs?.source}}},ProfilePage.parameters={...ProfilePage.parameters,docs:{...ProfilePage.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: "Candidate",\n    dashboardItemList: dashboardItemList,\n    activeSection: "profile",\n    handleSectionClick: (section: string) => {\n      console.log(section);\n    },\n    isSmallScreen: false\n  },\n  parameters: {\n    // pass in some JSON props here, I don\'t know what you need\n    initialProps: {\n      userAuth: {\n        photoURL: "https://lh3.googleusercontent.com/a/ACg8ocKjSDRwb8AWDtxj9h5mlMQMIuHAbiEGFlyZSOfr4cqZ=s96-c",\n        displayName: "Muhammad Ghufran Ali",\n        email: "ghoofy.321@gmail.com"\n      },\n      signOutContext: () => {\n        console.log("signout");\n      },\n      menuListItems: [{\n        text: "Profile",\n        href: "/profile"\n      }, {\n        text: "My Account",\n        href: "/account"\n      }]\n    },\n    reactRouter: reactRouterParameters({\n      location: {\n        path: "/dashboard/profile"\n      },\n      routing: {\n        path: "/dashboard/profile"\n      }\n    })\n  }\n}',...ProfilePage.parameters?.docs?.source}}};let __namedExportsOrder=["HomePage","ProfilePage"]},"./node_modules/storybook-addon-react-router-v6/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{nZ:()=>ze,Jg:()=>$e,y:()=>Ke});var z,Y,external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),p="storybook/react-router-v6",s={CLEAR:`${p}/clear`,NAVIGATION:`${p}/navigation`,STORY_LOADED:`${p}/story-loaded`,ROUTE_MATCHES:`${p}/route-matches`,ACTION_INVOKED:`${p}/action_invoked`,ACTION_SETTLED:`${p}/action_settled`,LOADER_INVOKED:`${p}/loader_invoked`,LOADER_SETTLED:`${p}/loader_settled`},D=react.createContext([]),v=react.createContext(void 0);function H(){let[e,t]=(0,react.useState)([]),n=dist.UX;return n.Provider._context=new Proxy(n.Provider._context??{},{set:(r,o,i)=>("_currentValue"===o&&void 0!==i&&t(a=>i.matches.length>a.length?i.matches:a),Reflect.set(r,o,i))}),e}function V(e){let t={};return e.forEach((n,r)=>{if(n instanceof File){t[r]={filename:n.name,filesize:n.size,filetype:n.type};return}t[r]=n}),t}async function T(e){let t=e.clone(),n=t.headers.get("content-type")||"",r;switch(!0){case n.startsWith("text"):r=await t.text();break;case n.startsWith("application/json"):r=await t.json();break;case n.startsWith("multipart/form-data"):case n.startsWith("application/x-www-form-urlencoded"):r=V(await t.formData())}return r}var b=()=>{let e=(0,react.useRef)(0);return(0,react.useCallback)(async(t,n)=>{e.current++;let r=`${t}_${e.current}`;switch(t){case s.ACTION_INVOKED:{let{request:o,params:i,context:a}=n;return{key:r,type:t,data:{params:i,request:{url:o.url,method:o.method,body:await T(o)},context:a}}}case s.ACTION_SETTLED:return{key:r,type:t,data:n};case s.LOADER_INVOKED:{let{request:o,params:i,context:a}=n;return{key:r,type:t,data:{params:i,request:{url:o.url,method:o.method,body:await T(o)},context:a}}}case s.LOADER_SETTLED:return{key:r,type:t,data:n}}},[])};function K(){let e=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),t=b();return(0,react.useCallback)(n=>async function(r){if(void 0===n)return;e.emit(s.ACTION_INVOKED,await t(s.ACTION_INVOKED,r));let o=await n(r);return e.emit(s.ACTION_SETTLED,await t(s.ACTION_SETTLED,o)),o},[e,t])}function $(){let e=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),t=b();return(0,react.useCallback)(n=>async function(r){if(void 0===n)return;e.emit(s.LOADER_INVOKED,await t(s.LOADER_INVOKED,r));let o=await n(r);return e.emit(s.LOADER_SETTLED,await t(s.LOADER_SETTLED,o)),o},[e,t])}function B(){let e=K(),t=$(),n=(0,react.useCallback)(r=>r.map(o=>{let{action:i,loader:a,children:u,lazy:d}=o,f={...o};return d&&(f.lazy=async function(){let c=await d(),h={...c};return c.action&&(h.action=e(c.action)),c.loader&&(h.loader=t(c.loader)),h}),i&&(f.action=e(i)),a&&(f.loader=t(a)),u&&(f.children=n(u)),f}),[e,t]);return n}var w=()=>{let e=react.useContext(v);if(void 0===e)throw Error("useStory should be used inside <StoryContext>");return e};function L(e,t){if(1===e.length&&(void 0===e[0].children||0===e[0].children.length))return[{...e[0],element:t}];let n=e.findIndex(r=>r.useStoryElement);if(-1!==n){let r=Array.from(e);return r.splice(n,1,{...e[n],element:t}),r}return e.map(r=>r.children?{...r,children:L(r.children,t)}:r)}function W(e,t){if(!1===e||null===e||typeof e>"u")throw Error(t)}function M(e,t){void 0===t&&(t={});let n=e;return n.endsWith("*")&&"*"!==n&&!n.endsWith("/*")&&(Ee(!1,'Route path "'+n+'" will be treated as if it were "'+n.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+n.replace(/\*$/,"/*")+'".'),n=n.replace(/\*$/,"/*")),n.replace(/^:(\w+)(\??)/g,(r,o,i)=>{let a=t[o];return"?"===i?a??"":(null==a&&W(!1,'Missing ":'+o+'" param'),a)}).replace(/\/:(\w+)(\??)/g,(r,o,i)=>{let a=t[o];return"?"===i?null==a?"":"/"+a:(null==a&&W(!1,'Missing ":'+o+'" param'),"/"+a)}).replace(/\?/g,"").replace(/(\/?)\*/,(r,o,i,a)=>null==t["*"]?"/*"===a?"/":"":""+o+t["*"])}function Ee(e,t){if(!e){"u">typeof console&&console.warn(t);try{throw Error(t)}catch{}}}function J({navigationHistory:e,location:t,routes:n}){if(void 0!==e){let S=[],A,_=Object.values(e);for(let g=0;g<_.length;g++){let{path:O,pathParams:F,searchParams:ie,hash:se,state:le,isInitialLocation:ue}=_[g];ue&&(A=g);let U=C(n),ce=("function"==typeof O?O(U,F??{}):O)??U;S.push({pathname:M(ce??"/",F),search:new URLSearchParams(ie).toString(),hash:se,state:le})}return A??=S.length-1,{initialEntries:S,initialIndex:A}}let{path:r,pathParams:o,searchParams:i,hash:a,state:u}=t??{},d=C(n);return{initialEntries:[{pathname:M(("function"==typeof r?r(d,o??{}):r)??d,o),search:new URLSearchParams(i).toString(),hash:a,state:u}],initialIndex:0}}function C(e=[],t="/"){if(1!==e.length)return t;let n=e[0],r=Se(t,n.path);return void 0===n.children||0===n.children.length?r:C(n.children,r)}function Se(e,t=""){let n=["","/"];return"/"+[...e.split("/").filter(a=>!n.includes(a)),...t.split("/").filter(a=>!n.includes(a))].join("/")}function l(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function R(e,t){if(!1===e||null===e||typeof e>"u")throw console.warn("Test invariant failed:",t),Error(t)}function x(e){return 0==arguments.length?[]:Array.isArray(e)?e:[e]}function q(e){return void 0===e?[{path:"/"}]:"string"==typeof e?[{path:e}]:(1===(e=x(e)).length&&(e[0].path??="/"),e)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(z||(z={})),function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(Y||(Y={}));var E=()=>react.useContext(D);function Q(e){let t={};return e.forEach((n,r)=>{let o=t[r];if("string"==typeof o){t[r]=[o,n];return}if(Array.isArray(o)){t[r]=[...o,n];return}t[r]=n}),t}var X=()=>{let e=(0,dist.zy)(),t=e.pathname;return e.search.length>0&&(t+=`?${e.search}`),e.hash.length>0&&(t+=`#${e.hash}`),t},Z=()=>{let e=(0,react.useRef)(0),t=(0,dist.zy)(),n=(0,dist.g)(),[r]=(0,react_router_dom_dist.ok)(),o=(0,dist.wQ)(),i=E(),a=Q(r),u=X(),d=i.map(c=>{let h={path:c.route.path};return Object.keys(c.params).length>0&&(h.params=c.params),h}),f={url:u,path:t.pathname,routeParams:n,searchParams:a,hash:t.hash,routeState:t.state,routeMatches:d};return c=>{e.current++;let h=`${c}_${e.current}`;switch(c){case s.STORY_LOADED:return{key:h,type:c,data:f};case s.NAVIGATION:return{key:h,type:c,data:{...f,navigationType:o}};case s.ROUTE_MATCHES:return{key:h,type:c,data:{matches:d}}}}};function I(){let{renderStory:e,storyContext:t}=w(),n=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),r=(0,dist.zy)(),o=E(),i=Z(),a=(0,react.useRef)(),u=(0,react.useRef)(),d=(0,react.useRef)(),f=void 0!==a.current,c=f&&r.key!==a.current;return c&&u.current!==r.key&&(n.emit(s.NAVIGATION,i(s.NAVIGATION)),u.current=r.key),c&&o.length>0&&o!==d.current&&n.emit(s.ROUTE_MATCHES,i(s.ROUTE_MATCHES)),!f&&o.length>0&&(n.emit(s.STORY_LOADED,i(s.STORY_LOADED)),a.current=r.key,d.current=o),d.current=o,react.createElement(react.Fragment,null,e(t))}function te(){let{addonParameters:e={}}=w(),{hydrationData:t,routing:n,navigationHistory:r,location:o}=e,i=B(),a=(0,react.useMemo)(()=>{let f=L(i(q(n)),react.createElement(I,null)),{initialEntries:c,initialIndex:h}=J({navigationHistory:r,location:o,routes:f});return(0,dist.bg)(f,{initialEntries:c,initialIndex:h,hydrationData:t})},[i,t,o,r,n]);return react.createElement(react_router_dom_dist.pg,{router:a,fallbackElement:react.createElement(ke,null)})}function ke(){return react.createElement("p",null,"Performing initial data load")}I.displayName="RouterLogger";var re=({renderStory:e,storyContext:t,addonParameters:n})=>{let r=H();return react.createElement(v.Provider,{value:{renderStory:e,storyContext:t,addonParameters:n}},react.createElement(D.Provider,{value:r},react.createElement(te,null)))};function oe(e){if(react.isValidElement(e))return!0;switch(!0){case react.isValidElement(e):case"string"==typeof e:case"number"==typeof e:case"boolean"==typeof e:case null===e:case void 0===e:case e instanceof Object&&l(e,Symbol.iterator):return!0}return!1}function m(e){return oe(e)?{element:e}:e}function ae(e={}){let t=["location","navigationHistory","routing"];if(Object.keys(e??{}).some(o=>t.includes(o)))return e;let r={routing:{},location:{},hydrationData:void 0};if(l(e,"routePath")&&(r.location.path=e.routePath,r.routing.path=e.routePath),l(e,"routeParams")&&(r.location.pathParams=e.routeParams),l(e,"routeState")&&(r.location.state=e.routeState),l(e,"routeHandle")&&(r.routing.handle=e.routeHandle),l(e,"searchParams")&&(r.location.searchParams=e.searchParams),l(e,"browserPath")&&(r.location.path=e.browserPath),l(e,"loader")&&(r.routing.loader=e.loader),l(e,"action")&&(r.routing.action=e.action),l(e,"errorElement")&&(r.routing.errorElement=e.errorElement),l(e,"hydrationData")&&(r.hydrationData=e.hydrationData),l(e,"shouldRevalidate")&&(r.routing.shouldRevalidate=e.shouldRevalidate),l(e,"routeId")&&(r.routing.id=e.routeId),l(e,"outlet")){let o=m(e.outlet);o.path??="",r.routing.children=[o]}return r.routing.useStoryElement=!0,r}var Ke=(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withRouter",parameterName:"reactRouter",wrapper:(e,t,{parameters:n})=>{let r=ae(n);return react.createElement(re,{renderStory:e,storyContext:t,addonParameters:r})}});function $e(e){return e}function y(e){let t={},n=[];return 1===e.length&&(t={},n=e[0]),2===e.length&&(t="string"==typeof e[0]?{path:e[0]}:m(e[0]),n=e[1]),[t,n]}function ze(...e){let[t,n]=y(e);return R(!l(t,"element"),"The story definition cannot contain the `element` property because the story element will be used"),[{...t,useStoryElement:!0,children:n}]}},"./src/Utils/Constants/dashboardItemList.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var _Utils_Icons_figma__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Utils/Icons/figma.tsx");let __WEBPACK_DEFAULT_EXPORT__=[{label:"Dashboard",icon:_Utils_Icons_figma__WEBPACK_IMPORTED_MODULE_1__.A.sideBarDashBoardIcons,section:"dashboard",path:"/dashboard"},{label:"Profile",icon:_Utils_Icons_figma__WEBPACK_IMPORTED_MODULE_1__.A.dashBoardProfileIcons,section:"profile",path:"/dashboard/profile"}]}}]);