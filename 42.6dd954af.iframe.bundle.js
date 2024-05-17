"use strict";(self.webpackChunk_infostacks_ui_components=self.webpackChunk_infostacks_ui_components||[]).push([[42],{"./node_modules/@mui/system/esm/useMediaQuery/useMediaQuery.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useMediaQuery});var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/useEnhancedEffect/useEnhancedEffect.js"),_useThemeProps__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/system/esm/useThemeProps/getThemeProps.js"),_useThemeWithoutDefault__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/system/esm/useThemeWithoutDefault.js");function useMediaQueryOld(query,defaultMatches,matchMedia,ssrMatchMedia,noSsr){let[match,setMatch]=react__WEBPACK_IMPORTED_MODULE_0__.useState(()=>noSsr&&matchMedia?matchMedia(query).matches:ssrMatchMedia?ssrMatchMedia(query).matches:defaultMatches);return(0,_mui_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_1__.A)(()=>{let active=!0;if(!matchMedia)return;let queryList=matchMedia(query),updateMatch=()=>{active&&setMatch(queryList.matches)};return updateMatch(),queryList.addListener(updateMatch),()=>{active=!1,queryList.removeListener(updateMatch)}},[query,matchMedia]),match}let maybeReactUseSyncExternalStore=(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).useSyncExternalStore;function useMediaQueryNew(query,defaultMatches,matchMedia,ssrMatchMedia,noSsr){let getDefaultSnapshot=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>defaultMatches,[defaultMatches]),getServerSnapshot=react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>{if(noSsr&&matchMedia)return()=>matchMedia(query).matches;if(null!==ssrMatchMedia){let{matches}=ssrMatchMedia(query);return()=>matches}return getDefaultSnapshot},[getDefaultSnapshot,query,ssrMatchMedia,noSsr,matchMedia]),[getSnapshot,subscribe]=react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>{if(null===matchMedia)return[getDefaultSnapshot,()=>()=>{}];let mediaQueryList=matchMedia(query);return[()=>mediaQueryList.matches,notify=>(mediaQueryList.addListener(notify),()=>{mediaQueryList.removeListener(notify)})]},[getDefaultSnapshot,matchMedia,query]);return maybeReactUseSyncExternalStore(subscribe,getSnapshot,getServerSnapshot)}function useMediaQuery(queryInput,options={}){let theme=(0,_useThemeWithoutDefault__WEBPACK_IMPORTED_MODULE_2__.A)(),supportMatchMedia="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches=!1,matchMedia=supportMatchMedia?window.matchMedia:null,ssrMatchMedia=null,noSsr=!1}=(0,_useThemeProps__WEBPACK_IMPORTED_MODULE_3__.A)({name:"MuiUseMediaQuery",props:options,theme}),query="function"==typeof queryInput?queryInput(theme):queryInput;return(void 0!==maybeReactUseSyncExternalStore?useMediaQueryNew:useMediaQueryOld)(query=query.replace(/^@media( ?)/m,""),defaultMatches,matchMedia,ssrMatchMedia,noSsr)}},"./node_modules/@tiptap/starter-kit/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>StarterKit});var dist=__webpack_require__("./node_modules/@tiptap/core/dist/index.js"),extension_blockquote_dist=__webpack_require__("./node_modules/@tiptap/extension-blockquote/dist/index.js"),extension_bold_dist=__webpack_require__("./node_modules/@tiptap/extension-bold/dist/index.js"),extension_bullet_list_dist=__webpack_require__("./node_modules/@tiptap/extension-bullet-list/dist/index.js"),extension_code_dist=__webpack_require__("./node_modules/@tiptap/extension-code/dist/index.js"),extension_code_block_dist=__webpack_require__("./node_modules/@tiptap/extension-code-block/dist/index.js"),extension_document_dist=__webpack_require__("./node_modules/@tiptap/extension-document/dist/index.js"),extension_dropcursor_dist=__webpack_require__("./node_modules/@tiptap/extension-dropcursor/dist/index.js"),extension_gapcursor_dist=__webpack_require__("./node_modules/@tiptap/extension-gapcursor/dist/index.js"),extension_hard_break_dist=__webpack_require__("./node_modules/@tiptap/extension-hard-break/dist/index.js"),extension_heading_dist=__webpack_require__("./node_modules/@tiptap/extension-heading/dist/index.js"),extension_history_dist=__webpack_require__("./node_modules/@tiptap/extension-history/dist/index.js"),prosemirror_state_dist=__webpack_require__("./node_modules/prosemirror-state/dist/index.js");let HorizontalRule=dist.bP.create({name:"horizontalRule",addOptions:()=>({HTMLAttributes:{}}),group:"block",parseHTML:()=>[{tag:"hr"}],renderHTML({HTMLAttributes}){return["hr",(0,dist.KV)(this.options.HTMLAttributes,HTMLAttributes)]},addCommands(){return{setHorizontalRule:()=>({chain,state})=>{let{$to:$originTo}=state.selection,currentChain=chain();return 0===$originTo.parentOffset?currentChain.insertContentAt(Math.max($originTo.pos-2,0),{type:this.name}):currentChain.insertContent({type:this.name}),currentChain.command(({tr,dispatch})=>{var _a;if(dispatch){let{$to}=tr.selection,posAfter=$to.end();if($to.nodeAfter)$to.nodeAfter.isTextblock?tr.setSelection(prosemirror_state_dist.U3.create(tr.doc,$to.pos+1)):$to.nodeAfter.isBlock?tr.setSelection(prosemirror_state_dist.nh.create(tr.doc,$to.pos)):tr.setSelection(prosemirror_state_dist.U3.create(tr.doc,$to.pos));else{let node=null===(_a=$to.parent.type.contentMatch.defaultType)||void 0===_a?void 0:_a.create();node&&(tr.insert(posAfter,node),tr.setSelection(prosemirror_state_dist.U3.create(tr.doc,posAfter+1)))}tr.scrollIntoView()}return!0}).run()}}},addInputRules(){return[(0,dist.jT)({find:/^(?:---|—-|___\s|\*\*\*\s)$/,type:this.type})]}});var extension_italic_dist=__webpack_require__("./node_modules/@tiptap/extension-italic/dist/index.js"),extension_list_item_dist=__webpack_require__("./node_modules/@tiptap/extension-list-item/dist/index.js"),extension_ordered_list_dist=__webpack_require__("./node_modules/@tiptap/extension-ordered-list/dist/index.js"),extension_paragraph_dist=__webpack_require__("./node_modules/@tiptap/extension-paragraph/dist/index.js"),extension_strike_dist=__webpack_require__("./node_modules/@tiptap/extension-strike/dist/index.js"),extension_text_dist=__webpack_require__("./node_modules/@tiptap/extension-text/dist/index.js");let StarterKit=dist.YY.create({name:"starterKit",addExtensions(){var _a,_b,_c,_d,_e,_f,_g,_h,_j,_k,_l,_m,_o,_p,_q,_r,_s,_t;let extensions=[];return!1!==this.options.blockquote&&extensions.push(extension_blockquote_dist.Cv.configure(null===(_a=this.options)||void 0===_a?void 0:_a.blockquote)),!1!==this.options.bold&&extensions.push(extension_bold_dist.yN.configure(null===(_b=this.options)||void 0===_b?void 0:_b.bold)),!1!==this.options.bulletList&&extensions.push(extension_bullet_list_dist.Rg.configure(null===(_c=this.options)||void 0===_c?void 0:_c.bulletList)),!1!==this.options.code&&extensions.push(extension_code_dist.Cy.configure(null===(_d=this.options)||void 0===_d?void 0:_d.code)),!1!==this.options.codeBlock&&extensions.push(extension_code_block_dist.NG.configure(null===(_e=this.options)||void 0===_e?void 0:_e.codeBlock)),!1!==this.options.document&&extensions.push(extension_document_dist.y.configure(null===(_f=this.options)||void 0===_f?void 0:_f.document)),!1!==this.options.dropcursor&&extensions.push(extension_dropcursor_dist.Q.configure(null===(_g=this.options)||void 0===_g?void 0:_g.dropcursor)),!1!==this.options.gapcursor&&extensions.push(extension_gapcursor_dist.v.configure(null===(_h=this.options)||void 0===_h?void 0:_h.gapcursor)),!1!==this.options.hardBreak&&extensions.push(extension_hard_break_dist.B.configure(null===(_j=this.options)||void 0===_j?void 0:_j.hardBreak)),!1!==this.options.heading&&extensions.push(extension_heading_dist.D.configure(null===(_k=this.options)||void 0===_k?void 0:_k.heading)),!1!==this.options.history&&extensions.push(extension_history_dist.B.configure(null===(_l=this.options)||void 0===_l?void 0:_l.history)),!1!==this.options.horizontalRule&&extensions.push(HorizontalRule.configure(null===(_m=this.options)||void 0===_m?void 0:_m.horizontalRule)),!1!==this.options.italic&&extensions.push(extension_italic_dist.J2.configure(null===(_o=this.options)||void 0===_o?void 0:_o.italic)),!1!==this.options.listItem&&extensions.push(extension_list_item_dist.c.configure(null===(_p=this.options)||void 0===_p?void 0:_p.listItem)),!1!==this.options.orderedList&&extensions.push(extension_ordered_list_dist._J.configure(null===(_q=this.options)||void 0===_q?void 0:_q.orderedList)),!1!==this.options.paragraph&&extensions.push(extension_paragraph_dist.f.configure(null===(_r=this.options)||void 0===_r?void 0:_r.paragraph)),!1!==this.options.strike&&extensions.push(extension_strike_dist.n.configure(null===(_s=this.options)||void 0===_s?void 0:_s.strike)),!1!==this.options.text&&extensions.push(extension_text_dist.E.configure(null===(_t=this.options)||void 0===_t?void 0:_t.text)),extensions}})},"./node_modules/mui-tiptap/dist/esm/RichTextReadOnly.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>RichTextReadOnly});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_tiptap_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@tiptap/react/dist/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_RichTextContent__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/mui-tiptap/dist/esm/RichTextContent.js"),_RichTextEditorProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/mui-tiptap/dist/esm/RichTextEditorProvider.js");function RichTextReadOnlyInternal(props){let editor=(0,_tiptap_react__WEBPACK_IMPORTED_MODULE_2__.hG)({...props,editable:!1}),previousContent=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(props.content);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{editor&&!editor.isDestroyed&&void 0!==props.content&&props.content!==previousContent.current&&queueMicrotask(()=>{void 0!==props.content&&editor.commands.setContent(props.content)})},[props.content,editor]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{previousContent.current=props.content},[props.content]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RichTextEditorProvider__WEBPACK_IMPORTED_MODULE_3__.A,{editor:editor,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RichTextContent__WEBPACK_IMPORTED_MODULE_4__.A,{})})}function RichTextReadOnly(props){return props.content?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RichTextReadOnlyInternal,{...props}):null}},"./node_modules/storybook-addon-react-router-v6/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{nZ:()=>ze,Jg:()=>$e,y:()=>Ke});var z,Y,external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),p="storybook/react-router-v6",s={CLEAR:`${p}/clear`,NAVIGATION:`${p}/navigation`,STORY_LOADED:`${p}/story-loaded`,ROUTE_MATCHES:`${p}/route-matches`,ACTION_INVOKED:`${p}/action_invoked`,ACTION_SETTLED:`${p}/action_settled`,LOADER_INVOKED:`${p}/loader_invoked`,LOADER_SETTLED:`${p}/loader_settled`},D=react.createContext([]),v=react.createContext(void 0);function H(){let[e,t]=(0,react.useState)([]),n=dist.UX;return n.Provider._context=new Proxy(n.Provider._context??{},{set:(r,o,i)=>("_currentValue"===o&&void 0!==i&&t(a=>i.matches.length>a.length?i.matches:a),Reflect.set(r,o,i))}),e}function V(e){let t={};return e.forEach((n,r)=>{if(n instanceof File){t[r]={filename:n.name,filesize:n.size,filetype:n.type};return}t[r]=n}),t}async function T(e){let t=e.clone(),n=t.headers.get("content-type")||"",r;switch(!0){case n.startsWith("text"):r=await t.text();break;case n.startsWith("application/json"):r=await t.json();break;case n.startsWith("multipart/form-data"):case n.startsWith("application/x-www-form-urlencoded"):r=V(await t.formData())}return r}var b=()=>{let e=(0,react.useRef)(0);return(0,react.useCallback)(async(t,n)=>{e.current++;let r=`${t}_${e.current}`;switch(t){case s.ACTION_INVOKED:{let{request:o,params:i,context:a}=n;return{key:r,type:t,data:{params:i,request:{url:o.url,method:o.method,body:await T(o)},context:a}}}case s.ACTION_SETTLED:return{key:r,type:t,data:n};case s.LOADER_INVOKED:{let{request:o,params:i,context:a}=n;return{key:r,type:t,data:{params:i,request:{url:o.url,method:o.method,body:await T(o)},context:a}}}case s.LOADER_SETTLED:return{key:r,type:t,data:n}}},[])};function K(){let e=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),t=b();return(0,react.useCallback)(n=>async function(r){if(void 0===n)return;e.emit(s.ACTION_INVOKED,await t(s.ACTION_INVOKED,r));let o=await n(r);return e.emit(s.ACTION_SETTLED,await t(s.ACTION_SETTLED,o)),o},[e,t])}function $(){let e=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),t=b();return(0,react.useCallback)(n=>async function(r){if(void 0===n)return;e.emit(s.LOADER_INVOKED,await t(s.LOADER_INVOKED,r));let o=await n(r);return e.emit(s.LOADER_SETTLED,await t(s.LOADER_SETTLED,o)),o},[e,t])}function B(){let e=K(),t=$(),n=(0,react.useCallback)(r=>r.map(o=>{let{action:i,loader:a,children:u,lazy:d}=o,f={...o};return d&&(f.lazy=async function(){let c=await d(),h={...c};return c.action&&(h.action=e(c.action)),c.loader&&(h.loader=t(c.loader)),h}),i&&(f.action=e(i)),a&&(f.loader=t(a)),u&&(f.children=n(u)),f}),[e,t]);return n}var w=()=>{let e=react.useContext(v);if(void 0===e)throw Error("useStory should be used inside <StoryContext>");return e};function L(e,t){if(1===e.length&&(void 0===e[0].children||0===e[0].children.length))return[{...e[0],element:t}];let n=e.findIndex(r=>r.useStoryElement);if(-1!==n){let r=Array.from(e);return r.splice(n,1,{...e[n],element:t}),r}return e.map(r=>r.children?{...r,children:L(r.children,t)}:r)}function W(e,t){if(!1===e||null===e||typeof e>"u")throw Error(t)}function M(e,t){void 0===t&&(t={});let n=e;return n.endsWith("*")&&"*"!==n&&!n.endsWith("/*")&&(Ee(!1,'Route path "'+n+'" will be treated as if it were "'+n.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+n.replace(/\*$/,"/*")+'".'),n=n.replace(/\*$/,"/*")),n.replace(/^:(\w+)(\??)/g,(r,o,i)=>{let a=t[o];return"?"===i?a??"":(null==a&&W(!1,'Missing ":'+o+'" param'),a)}).replace(/\/:(\w+)(\??)/g,(r,o,i)=>{let a=t[o];return"?"===i?null==a?"":"/"+a:(null==a&&W(!1,'Missing ":'+o+'" param'),"/"+a)}).replace(/\?/g,"").replace(/(\/?)\*/,(r,o,i,a)=>null==t["*"]?"/*"===a?"/":"":""+o+t["*"])}function Ee(e,t){if(!e){"u">typeof console&&console.warn(t);try{throw Error(t)}catch{}}}function J({navigationHistory:e,location:t,routes:n}){if(void 0!==e){let S=[],A,_=Object.values(e);for(let g=0;g<_.length;g++){let{path:O,pathParams:F,searchParams:ie,hash:se,state:le,isInitialLocation:ue}=_[g];ue&&(A=g);let U=C(n),ce=("function"==typeof O?O(U,F??{}):O)??U;S.push({pathname:M(ce??"/",F),search:new URLSearchParams(ie).toString(),hash:se,state:le})}return A??=S.length-1,{initialEntries:S,initialIndex:A}}let{path:r,pathParams:o,searchParams:i,hash:a,state:u}=t??{},d=C(n);return{initialEntries:[{pathname:M(("function"==typeof r?r(d,o??{}):r)??d,o),search:new URLSearchParams(i).toString(),hash:a,state:u}],initialIndex:0}}function C(e=[],t="/"){if(1!==e.length)return t;let n=e[0],r=Se(t,n.path);return void 0===n.children||0===n.children.length?r:C(n.children,r)}function Se(e,t=""){let n=["","/"];return"/"+[...e.split("/").filter(a=>!n.includes(a)),...t.split("/").filter(a=>!n.includes(a))].join("/")}function l(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function R(e,t){if(!1===e||null===e||typeof e>"u")throw console.warn("Test invariant failed:",t),Error(t)}function x(e){return 0==arguments.length?[]:Array.isArray(e)?e:[e]}function q(e){return void 0===e?[{path:"/"}]:"string"==typeof e?[{path:e}]:(1===(e=x(e)).length&&(e[0].path??="/"),e)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(z||(z={})),function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(Y||(Y={}));var E=()=>react.useContext(D);function Q(e){let t={};return e.forEach((n,r)=>{let o=t[r];if("string"==typeof o){t[r]=[o,n];return}if(Array.isArray(o)){t[r]=[...o,n];return}t[r]=n}),t}var X=()=>{let e=(0,dist.zy)(),t=e.pathname;return e.search.length>0&&(t+=`?${e.search}`),e.hash.length>0&&(t+=`#${e.hash}`),t},Z=()=>{let e=(0,react.useRef)(0),t=(0,dist.zy)(),n=(0,dist.g)(),[r]=(0,react_router_dom_dist.ok)(),o=(0,dist.wQ)(),i=E(),a=Q(r),u=X(),d=i.map(c=>{let h={path:c.route.path};return Object.keys(c.params).length>0&&(h.params=c.params),h}),f={url:u,path:t.pathname,routeParams:n,searchParams:a,hash:t.hash,routeState:t.state,routeMatches:d};return c=>{e.current++;let h=`${c}_${e.current}`;switch(c){case s.STORY_LOADED:return{key:h,type:c,data:f};case s.NAVIGATION:return{key:h,type:c,data:{...f,navigationType:o}};case s.ROUTE_MATCHES:return{key:h,type:c,data:{matches:d}}}}};function I(){let{renderStory:e,storyContext:t}=w(),n=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),r=(0,dist.zy)(),o=E(),i=Z(),a=(0,react.useRef)(),u=(0,react.useRef)(),d=(0,react.useRef)(),f=void 0!==a.current,c=f&&r.key!==a.current;return c&&u.current!==r.key&&(n.emit(s.NAVIGATION,i(s.NAVIGATION)),u.current=r.key),c&&o.length>0&&o!==d.current&&n.emit(s.ROUTE_MATCHES,i(s.ROUTE_MATCHES)),!f&&o.length>0&&(n.emit(s.STORY_LOADED,i(s.STORY_LOADED)),a.current=r.key,d.current=o),d.current=o,react.createElement(react.Fragment,null,e(t))}function te(){let{addonParameters:e={}}=w(),{hydrationData:t,routing:n,navigationHistory:r,location:o}=e,i=B(),a=(0,react.useMemo)(()=>{let f=L(i(q(n)),react.createElement(I,null)),{initialEntries:c,initialIndex:h}=J({navigationHistory:r,location:o,routes:f});return(0,dist.bg)(f,{initialEntries:c,initialIndex:h,hydrationData:t})},[i,t,o,r,n]);return react.createElement(react_router_dom_dist.pg,{router:a,fallbackElement:react.createElement(ke,null)})}function ke(){return react.createElement("p",null,"Performing initial data load")}I.displayName="RouterLogger";var re=({renderStory:e,storyContext:t,addonParameters:n})=>{let r=H();return react.createElement(v.Provider,{value:{renderStory:e,storyContext:t,addonParameters:n}},react.createElement(D.Provider,{value:r},react.createElement(te,null)))};function oe(e){if(react.isValidElement(e))return!0;switch(!0){case react.isValidElement(e):case"string"==typeof e:case"number"==typeof e:case"boolean"==typeof e:case null===e:case void 0===e:case e instanceof Object&&l(e,Symbol.iterator):return!0}return!1}function m(e){return oe(e)?{element:e}:e}function ae(e={}){let t=["location","navigationHistory","routing"];if(Object.keys(e??{}).some(o=>t.includes(o)))return e;let r={routing:{},location:{},hydrationData:void 0};if(l(e,"routePath")&&(r.location.path=e.routePath,r.routing.path=e.routePath),l(e,"routeParams")&&(r.location.pathParams=e.routeParams),l(e,"routeState")&&(r.location.state=e.routeState),l(e,"routeHandle")&&(r.routing.handle=e.routeHandle),l(e,"searchParams")&&(r.location.searchParams=e.searchParams),l(e,"browserPath")&&(r.location.path=e.browserPath),l(e,"loader")&&(r.routing.loader=e.loader),l(e,"action")&&(r.routing.action=e.action),l(e,"errorElement")&&(r.routing.errorElement=e.errorElement),l(e,"hydrationData")&&(r.hydrationData=e.hydrationData),l(e,"shouldRevalidate")&&(r.routing.shouldRevalidate=e.shouldRevalidate),l(e,"routeId")&&(r.routing.id=e.routeId),l(e,"outlet")){let o=m(e.outlet);o.path??="",r.routing.children=[o]}return r.routing.useStoryElement=!0,r}var Ke=(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withRouter",parameterName:"reactRouter",wrapper:(e,t,{parameters:n})=>{let r=ae(n);return react.createElement(re,{renderStory:e,storyContext:t,addonParameters:r})}});function $e(e){return e}function y(e){let t={},n=[];return 1===e.length&&(t={},n=e[0]),2===e.length&&(t="string"==typeof e[0]?{path:e[0]}:m(e[0]),n=e[1]),[t,n]}function ze(...e){let[t,n]=y(e);return R(!l(t,"element"),"The story definition cannot contain the `element` property because the story element will be used"),[{...t,useStoryElement:!0,children:n}]}}}]);