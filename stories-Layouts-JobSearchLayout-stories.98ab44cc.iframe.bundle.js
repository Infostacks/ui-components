"use strict";(self.webpackChunk_infostacks_ui_components=self.webpackChunk_infostacks_ui_components||[]).push([[628],{"./src/stories/Layouts/JobSearchLayout.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,primary:()=>primary}),__webpack_require__("./node_modules/react/index.js");var _Components_Layouts_JobsSearch_const__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Components/Layouts/JobsSearch/const.ts"),storybook_addon_react_router_v6__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/storybook-addon-react-router-v6/dist/index.mjs"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js");let __WEBPACK_DEFAULT_EXPORT__={title:"Layout/JobsSearch",component:__webpack_require__("./src/Components/index.ts").Bj,decorators:[storybook_addon_react_router_v6__WEBPACK_IMPORTED_MODULE_2__.y],tags:["autodocs"],argTypes:{data:{control:"object"},handlePageChange:{},total:{control:"number"},applyUrl:{control:"string"}}};(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.A)({});var primary={args:{data:_Components_Layouts_JobsSearch_const__WEBPACK_IMPORTED_MODULE_1__.A.jobs,total:_Components_Layouts_JobsSearch_const__WEBPACK_IMPORTED_MODULE_1__.A.total,applyUrl:"/apply/"},parameters:{reactRouter:(0,storybook_addon_react_router_v6__WEBPACK_IMPORTED_MODULE_2__.Jg)({location:{path:"/jobs"},routing:{path:"/jobs"}})}};primary.parameters={...primary.parameters,docs:{...primary.parameters?.docs,source:{originalSource:'{\n  // decorators: [\n  //     (Story) => (\n  //         <ThemeProvider theme={theme}>\n  //             <MUIThemeProvider theme={theme}>\n  //                 <Story />\n  //             </MUIThemeProvider>\n  //         </ThemeProvider>\n  //     )\n  // ],\n  args: {\n    data: data.jobs,\n    total: data.total,\n    applyUrl: \'/apply/\'\n  },\n  parameters: {\n    reactRouter: reactRouterParameters({\n      location: {\n        path: "/jobs"\n      },\n      routing: {\n        path: "/jobs"\n      }\n    })\n  }\n}',...primary.parameters?.docs?.source}}};let __namedExportsOrder=["primary"]},"./node_modules/storybook-addon-react-router-v6/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{nZ:()=>ze,Jg:()=>$e,y:()=>Ke});var z,Y,external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),p="storybook/react-router-v6",s={CLEAR:`${p}/clear`,NAVIGATION:`${p}/navigation`,STORY_LOADED:`${p}/story-loaded`,ROUTE_MATCHES:`${p}/route-matches`,ACTION_INVOKED:`${p}/action_invoked`,ACTION_SETTLED:`${p}/action_settled`,LOADER_INVOKED:`${p}/loader_invoked`,LOADER_SETTLED:`${p}/loader_settled`},D=react.createContext([]),v=react.createContext(void 0);function H(){let[e,t]=(0,react.useState)([]),n=dist.UX;return n.Provider._context=new Proxy(n.Provider._context??{},{set:(r,o,i)=>("_currentValue"===o&&void 0!==i&&t(a=>i.matches.length>a.length?i.matches:a),Reflect.set(r,o,i))}),e}function V(e){let t={};return e.forEach((n,r)=>{if(n instanceof File){t[r]={filename:n.name,filesize:n.size,filetype:n.type};return}t[r]=n}),t}async function T(e){let t=e.clone(),n=t.headers.get("content-type")||"",r;switch(!0){case n.startsWith("text"):r=await t.text();break;case n.startsWith("application/json"):r=await t.json();break;case n.startsWith("multipart/form-data"):case n.startsWith("application/x-www-form-urlencoded"):r=V(await t.formData())}return r}var b=()=>{let e=(0,react.useRef)(0);return(0,react.useCallback)(async(t,n)=>{e.current++;let r=`${t}_${e.current}`;switch(t){case s.ACTION_INVOKED:{let{request:o,params:i,context:a}=n;return{key:r,type:t,data:{params:i,request:{url:o.url,method:o.method,body:await T(o)},context:a}}}case s.ACTION_SETTLED:return{key:r,type:t,data:n};case s.LOADER_INVOKED:{let{request:o,params:i,context:a}=n;return{key:r,type:t,data:{params:i,request:{url:o.url,method:o.method,body:await T(o)},context:a}}}case s.LOADER_SETTLED:return{key:r,type:t,data:n}}},[])};function K(){let e=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),t=b();return(0,react.useCallback)(n=>async function(r){if(void 0===n)return;e.emit(s.ACTION_INVOKED,await t(s.ACTION_INVOKED,r));let o=await n(r);return e.emit(s.ACTION_SETTLED,await t(s.ACTION_SETTLED,o)),o},[e,t])}function $(){let e=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),t=b();return(0,react.useCallback)(n=>async function(r){if(void 0===n)return;e.emit(s.LOADER_INVOKED,await t(s.LOADER_INVOKED,r));let o=await n(r);return e.emit(s.LOADER_SETTLED,await t(s.LOADER_SETTLED,o)),o},[e,t])}function B(){let e=K(),t=$(),n=(0,react.useCallback)(r=>r.map(o=>{let{action:i,loader:a,children:u,lazy:d}=o,f={...o};return d&&(f.lazy=async function(){let c=await d(),h={...c};return c.action&&(h.action=e(c.action)),c.loader&&(h.loader=t(c.loader)),h}),i&&(f.action=e(i)),a&&(f.loader=t(a)),u&&(f.children=n(u)),f}),[e,t]);return n}var w=()=>{let e=react.useContext(v);if(void 0===e)throw Error("useStory should be used inside <StoryContext>");return e};function L(e,t){if(1===e.length&&(void 0===e[0].children||0===e[0].children.length))return[{...e[0],element:t}];let n=e.findIndex(r=>r.useStoryElement);if(-1!==n){let r=Array.from(e);return r.splice(n,1,{...e[n],element:t}),r}return e.map(r=>r.children?{...r,children:L(r.children,t)}:r)}function W(e,t){if(!1===e||null===e||typeof e>"u")throw Error(t)}function M(e,t){void 0===t&&(t={});let n=e;return n.endsWith("*")&&"*"!==n&&!n.endsWith("/*")&&(Ee(!1,'Route path "'+n+'" will be treated as if it were "'+n.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+n.replace(/\*$/,"/*")+'".'),n=n.replace(/\*$/,"/*")),n.replace(/^:(\w+)(\??)/g,(r,o,i)=>{let a=t[o];return"?"===i?a??"":(null==a&&W(!1,'Missing ":'+o+'" param'),a)}).replace(/\/:(\w+)(\??)/g,(r,o,i)=>{let a=t[o];return"?"===i?null==a?"":"/"+a:(null==a&&W(!1,'Missing ":'+o+'" param'),"/"+a)}).replace(/\?/g,"").replace(/(\/?)\*/,(r,o,i,a)=>null==t["*"]?"/*"===a?"/":"":""+o+t["*"])}function Ee(e,t){if(!e){"u">typeof console&&console.warn(t);try{throw Error(t)}catch{}}}function J({navigationHistory:e,location:t,routes:n}){if(void 0!==e){let S=[],A,_=Object.values(e);for(let g=0;g<_.length;g++){let{path:O,pathParams:F,searchParams:ie,hash:se,state:le,isInitialLocation:ue}=_[g];ue&&(A=g);let U=C(n),ce=("function"==typeof O?O(U,F??{}):O)??U;S.push({pathname:M(ce??"/",F),search:new URLSearchParams(ie).toString(),hash:se,state:le})}return A??=S.length-1,{initialEntries:S,initialIndex:A}}let{path:r,pathParams:o,searchParams:i,hash:a,state:u}=t??{},d=C(n);return{initialEntries:[{pathname:M(("function"==typeof r?r(d,o??{}):r)??d,o),search:new URLSearchParams(i).toString(),hash:a,state:u}],initialIndex:0}}function C(e=[],t="/"){if(1!==e.length)return t;let n=e[0],r=Se(t,n.path);return void 0===n.children||0===n.children.length?r:C(n.children,r)}function Se(e,t=""){let n=["","/"];return"/"+[...e.split("/").filter(a=>!n.includes(a)),...t.split("/").filter(a=>!n.includes(a))].join("/")}function l(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function R(e,t){if(!1===e||null===e||typeof e>"u")throw console.warn("Test invariant failed:",t),Error(t)}function x(e){return 0==arguments.length?[]:Array.isArray(e)?e:[e]}function q(e){return void 0===e?[{path:"/"}]:"string"==typeof e?[{path:e}]:(1===(e=x(e)).length&&(e[0].path??="/"),e)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(z||(z={})),function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(Y||(Y={}));var E=()=>react.useContext(D);function Q(e){let t={};return e.forEach((n,r)=>{let o=t[r];if("string"==typeof o){t[r]=[o,n];return}if(Array.isArray(o)){t[r]=[...o,n];return}t[r]=n}),t}var X=()=>{let e=(0,dist.zy)(),t=e.pathname;return e.search.length>0&&(t+=`?${e.search}`),e.hash.length>0&&(t+=`#${e.hash}`),t},Z=()=>{let e=(0,react.useRef)(0),t=(0,dist.zy)(),n=(0,dist.g)(),[r]=(0,react_router_dom_dist.ok)(),o=(0,dist.wQ)(),i=E(),a=Q(r),u=X(),d=i.map(c=>{let h={path:c.route.path};return Object.keys(c.params).length>0&&(h.params=c.params),h}),f={url:u,path:t.pathname,routeParams:n,searchParams:a,hash:t.hash,routeState:t.state,routeMatches:d};return c=>{e.current++;let h=`${c}_${e.current}`;switch(c){case s.STORY_LOADED:return{key:h,type:c,data:f};case s.NAVIGATION:return{key:h,type:c,data:{...f,navigationType:o}};case s.ROUTE_MATCHES:return{key:h,type:c,data:{matches:d}}}}};function I(){let{renderStory:e,storyContext:t}=w(),n=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),r=(0,dist.zy)(),o=E(),i=Z(),a=(0,react.useRef)(),u=(0,react.useRef)(),d=(0,react.useRef)(),f=void 0!==a.current,c=f&&r.key!==a.current;return c&&u.current!==r.key&&(n.emit(s.NAVIGATION,i(s.NAVIGATION)),u.current=r.key),c&&o.length>0&&o!==d.current&&n.emit(s.ROUTE_MATCHES,i(s.ROUTE_MATCHES)),!f&&o.length>0&&(n.emit(s.STORY_LOADED,i(s.STORY_LOADED)),a.current=r.key,d.current=o),d.current=o,react.createElement(react.Fragment,null,e(t))}function te(){let{addonParameters:e={}}=w(),{hydrationData:t,routing:n,navigationHistory:r,location:o}=e,i=B(),a=(0,react.useMemo)(()=>{let f=L(i(q(n)),react.createElement(I,null)),{initialEntries:c,initialIndex:h}=J({navigationHistory:r,location:o,routes:f});return(0,dist.bg)(f,{initialEntries:c,initialIndex:h,hydrationData:t})},[i,t,o,r,n]);return react.createElement(react_router_dom_dist.pg,{router:a,fallbackElement:react.createElement(ke,null)})}function ke(){return react.createElement("p",null,"Performing initial data load")}I.displayName="RouterLogger";var re=({renderStory:e,storyContext:t,addonParameters:n})=>{let r=H();return react.createElement(v.Provider,{value:{renderStory:e,storyContext:t,addonParameters:n}},react.createElement(D.Provider,{value:r},react.createElement(te,null)))};function oe(e){if(react.isValidElement(e))return!0;switch(!0){case react.isValidElement(e):case"string"==typeof e:case"number"==typeof e:case"boolean"==typeof e:case null===e:case void 0===e:case e instanceof Object&&l(e,Symbol.iterator):return!0}return!1}function m(e){return oe(e)?{element:e}:e}function ae(e={}){let t=["location","navigationHistory","routing"];if(Object.keys(e??{}).some(o=>t.includes(o)))return e;let r={routing:{},location:{},hydrationData:void 0};if(l(e,"routePath")&&(r.location.path=e.routePath,r.routing.path=e.routePath),l(e,"routeParams")&&(r.location.pathParams=e.routeParams),l(e,"routeState")&&(r.location.state=e.routeState),l(e,"routeHandle")&&(r.routing.handle=e.routeHandle),l(e,"searchParams")&&(r.location.searchParams=e.searchParams),l(e,"browserPath")&&(r.location.path=e.browserPath),l(e,"loader")&&(r.routing.loader=e.loader),l(e,"action")&&(r.routing.action=e.action),l(e,"errorElement")&&(r.routing.errorElement=e.errorElement),l(e,"hydrationData")&&(r.hydrationData=e.hydrationData),l(e,"shouldRevalidate")&&(r.routing.shouldRevalidate=e.shouldRevalidate),l(e,"routeId")&&(r.routing.id=e.routeId),l(e,"outlet")){let o=m(e.outlet);o.path??="",r.routing.children=[o]}return r.routing.useStoryElement=!0,r}var Ke=(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withRouter",parameterName:"reactRouter",wrapper:(e,t,{parameters:n})=>{let r=ae(n);return react.createElement(re,{renderStory:e,storyContext:t,addonParameters:r})}});function $e(e){return e}function y(e){let t={},n=[];return 1===e.length&&(t={},n=e[0]),2===e.length&&(t="string"==typeof e[0]?{path:e[0]}:m(e[0]),n=e[1]),[t,n]}function ze(...e){let[t,n]=y(e);return R(!l(t,"element"),"The story definition cannot contain the `element` property because the story element will be used"),[{...t,useStoryElement:!0,children:n}]}},"./src/Components/Layouts/JobsSearch/const.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__={total:6,jobs:[{_id:"65fc7f59f6c8a424657e06f3",name:"Muhammad Usama Afzal",email:"usamaafzal2439@gmail.com",image:"https://lh3.googleusercontent.com/a/ACg8ocJNTVduSJtj8SmJSCEJVPEqPF3abBcrRRjCTrQ1D3aGVLc=s96-c",followers:0,jobDetails:{_id:"660acf6f925cbf479d46f452",organizationID:"65fc7f59f6c8a424657e06f3",title:"Back End Developer",description:"<p><strong>Job Description:</strong></p><p>We are seeking a highly skilled Full Stack Developer to join our dynamic team. As a Full Stack Developer, you will be responsible for developing and maintaining both front-end and back-end applications. You will collaborate with cross-functional teams to define, design, and ship new features, ensuring the best possible performance, responsiveness, and user experience of our products. The ideal candidate is passionate about technology, thrives in a fast-paced environment, and is eager to learn and grow.</p>",jobType:["Part Time"],location:"Bahawalpur",skills:["Node js","Javascript","java","express","github"],education:"MCs",experience:"2 year",datePosted:"2024-04-01T18:49:13.202Z",salary:{currency:{text:"PKR",sign:"Rs"},min:1500,max:2500,period:"Per Hour"},schedule:"2024-04-01T00:00:00.000Z",closeDate:"2024-05-08T00:00:00.000Z",isRecommendedByAI:!1,views:"1",applicants:0,__v:0}},{_id:"65fc7f59f6c8a424657e06f3",name:"Muhammad Usama Afzal",email:"usamaafzal2439@gmail.com",image:"https://lh3.googleusercontent.com/a/ACg8ocJNTVduSJtj8SmJSCEJVPEqPF3abBcrRRjCTrQ1D3aGVLc=s96-c",followers:0,jobDetails:{_id:"66099e87925cbf479d46f321",organizationID:"65fc7f59f6c8a424657e06f3",title:"Full Stack Developer",description:"<p><strong>Responsibilities:</strong></p><ol><li><p>Develop front-end components using modern JavaScript frameworks such as React.js, Angular, or Vue.js.</p></li><li><p>Design and implement scalable, reliable, and maintainable back-end solutions using languages like Node.js, Python, or Java.</p></li><li><p>Collaborate with UI/UX designers to create intuitive, user-friendly interfaces.</p></li><li><p>Optimize applications for maximum speed and scalability.</p></li><li><p>Implement security and data protection measures.</p></li><li><p>Participate in code reviews and provide constructive feedback to team members.</p></li><li><p>Troubleshoot and debug issues across the stack.</p></li><li><p>Stay updated on emerging technologies and industry trends.</p></li><li><p>Work closely with product managers and stakeholders to understand project requirements and deliver high-quality solutions.</p></li><li><p>Contribute to the continuous improvement of development processes and methodologies.</p></li></ol><p><strong>Requirements:</strong></p><ol><li><p>Bachelor's degree in Computer Science, Engineering, or related field; or equivalent work experience.</p></li><li><p>Proven experience as a Full Stack Developer or similar role.</p></li><li><p>Proficiency in front-end development languages such as HTML5, CSS3, and JavaScript.</p></li><li><p>Experience with modern JavaScript frameworks/libraries such as React.js, Angular, or Vue.js.</p></li><li><p>Strong understanding of back-end development technologies such as Node.js, Python, or Java.</p></li><li><p>Experience with database systems such as MySQL, MongoDB, or PostgreSQL.</p></li><li><p>Familiarity with RESTful APIs and microservices architecture.</p></li><li><p>Knowledge of version control systems such as Git.</p></li><li><p>Excellent problem-solving and analytical skills.</p></li><li><p>Ability to work effectively both independently and as part of a team.</p></li><li><p>Excellent communication and collaboration skills.</p></li></ol><p><strong>Preferred Qualifications:</strong></p><ol><li><p>Experience with cloud platforms such as AWS, Azure, or Google Cloud Platform.</p></li><li><p>Familiarity with DevOps practices and tools.</p></li><li><p>Experience with containerization technologies such as Docker and Kubernetes.</p></li><li><p>Knowledge of Agile development methodologies.</p></li><li><p>Contributions to open-source projects or a strong GitHub profile.</p></li></ol><p><strong>Benefits:</strong></p><ol><li><p>Competitive salary and performance-based bonuses.</p></li><li><p>Comprehensive health, dental, and vision insurance plans.</p></li><li><p>Flexible work hours and remote work options.</p></li><li><p>Generous paid time off and company holidays.</p></li><li><p>Professional development opportunities and tuition reimbursement.</p></li><li><p>Vibrant and inclusive company culture with team-building activities and events.</p></li><li><p>Cutting-edge technology and tools to support your work.</p></li><li><p>Opportunities for career advancement and growth within the company.</p></li></ol>",jobType:["Full Time"],location:"lahore",skills:["HTML5","CSS3","JavaScript","Responsive Design","Front-end Frameworks","Browser Developer Tools","Node.js","RESTful APIs","Git"],education:"Bscs",experience:"3 year",datePosted:"2024-03-31T17:38:18.663Z",salary:{currency:{text:"PKR",sign:"Rs"},min:1e3,max:4e4,period:"Per Hour"},schedule:"2024-03-31T00:00:00.000Z",closeDate:"2024-04-12T00:00:00.000Z",isRecommendedByAI:!1,views:"1",applicants:0,__v:0}},{_id:"65fc4b9a2dedb84c611bc683",name:"Ghufran Ali",email:"ghoofy.321@gmail.com",image:"https://lh3.googleusercontent.com/a/ACg8ocKjSDRwb8AWDtxj9h5mlMQMIuHAbiEGFlyZSOfr4cqZ=s96-c",followers:0,jobDetails:{_id:"66070dac8421868ef0643dc7",organizationID:"65fc4b9a2dedb84c611bc683",title:"Senior UI/UX Developer ",description:"<p><strong>Description</strong></p><p></p><p>Required experience <strong>10+ </strong>years.</p>",jobType:["Full Time"],location:"Lahore",skills:["Figma","Ui/Ux","Designer","Creative"],education:"Bachelors",experience:"5+ year",datePosted:"2024-03-29T18:52:19.523Z",salary:{currency:{text:"USD",sign:"$"},min:70,max:90,period:"Per Hour"},schedule:"2024-03-29T00:00:00.000Z",closeDate:"2024-05-03T00:00:00.000Z",isRecommendedByAI:!1,views:"1",applicants:0,__v:0}},{_id:"65fc4b9a2dedb84c611bc683",name:"Ghufran Ali",email:"ghoofy.321@gmail.com",image:"https://lh3.googleusercontent.com/a/ACg8ocKjSDRwb8AWDtxj9h5mlMQMIuHAbiEGFlyZSOfr4cqZ=s96-c",followers:0,jobDetails:{_id:"6606d5d587424f7a9a62cea3",organizationID:"65fc4b9a2dedb84c611bc683",title:"Frontend Developer",description:"<p>Hi Junior :)</p><p></p><p>Is it working??</p><ol><li><p>1231231</p></li><li><p>1231</p></li><li><p>412</p></li></ol>",jobType:["Internship"],location:"Lahore",skills:["React"],education:"Bachelors in Computer Science",experience:"1 year",datePosted:"2024-03-29T18:48:53.367Z",salary:{currency:{text:"PKR",sign:"Rs"},min:1e3,max:1200,period:"Per day"},schedule:"2024-03-29T00:00:00.000Z",closeDate:"2024-04-10T00:00:00.000Z",isRecommendedByAI:!1,views:"1",applicants:0,__v:0}},{_id:"65fc4b9a2dedb84c611bc683",name:"Ghufran Ali",email:"ghoofy.321@gmail.com",image:"https://lh3.googleusercontent.com/a/ACg8ocKjSDRwb8AWDtxj9h5mlMQMIuHAbiEGFlyZSOfr4cqZ=s96-c",followers:0,jobDetails:{_id:"660582ee4dbc94a38b9f7daa",organizationID:"65fc4b9a2dedb84c611bc683",title:"Backend Developer",description:"<p><strong>Job Description:</strong><br>At Quantum Innovations Ltd., we believe in the power of happiness to drive innovation and success. As a cutting-edge technology company, we are on a mission to revolutionize the world while maintaining a positive and joyful work environment. We are seeking a dynamic and enthusiastic Chief Happiness Officer to join our team and spread smiles throughout the organization.<br></p><p><strong>Responsibilities:</strong></p><ul><li><p>Develop and implement happiness strategies to boost employee morale and satisfaction.</p></li><li><p>Organize fun and engaging team-building activities, from office mini-golf tournaments to virtual dance-offs.</p></li><li><p>Manage the company's puppy therapy program to ensure a stress-free workplace.</p></li><li><p>Curate a playlist of uplifting music to be played in common areas.</p></li><li><p>Spearhead the creation of a company-wide \"Joke of the Day\" initiative.</p></li><li><p>Collaborate with the snack committee to ensure a diverse range of happiness-inducing snacks in the break room.</p><p></p></li></ul><p><strong>Requirements:</strong></p><ul><li><p>A contagious smile and a positive attitude.</p></li><li><p>Proven experience in spreading joy and fostering a positive work culture.</p></li><li><p>Excellent dance moves are a plus but not mandatory.</p></li><li><p>Ability to handle a high volume of dad jokes.</p></li><li><p>Proficiency in organizing surprise birthday celebrations.</p></li></ul><p></p><p><strong>Perks:</strong></p><ul><li><p>Unlimited access to the company's laughter yoga sessions.</p></li><li><p>Casual Fridays extended to the entire workweek.</p></li><li><p>Complimentary snacks and a chocolate fountain in the break room.</p></li><li><p>Flexibility to bring your pet to work (fish, hamsters, and miniature horses welcome).</p><p></p></li></ul><p><strong>How to Apply:</strong></p><ul><li><p>To apply for this position, submit your resume along with a 30-second video explaining why you're the perfect fit for the role. Bonus points for creativity and a demonstration of your happiest dance move. Applications without a dance move will still be considered, but, let's be honest, who doesn't want to see your happy dance?</p></li></ul>",jobType:["Internship","Contact","Part Time"],location:"Lahore",skills:["React"],education:"BSCS",experience:"5+ year",datePosted:"2024-03-28T19:53:59.594Z",salary:{currency:{text:"USD",sign:"$"},min:70,max:90,period:"Per Hour"},schedule:"2024-03-29T00:00:00.000Z",closeDate:"2024-04-19T00:00:00.000Z",isRecommendedByAI:!1,views:"1",applicants:0,__v:0}},{_id:"65fc4b9a2dedb84c611bc683",name:"Ghufran Ali",email:"ghoofy.321@gmail.com",image:"https://lh3.googleusercontent.com/a/ACg8ocKjSDRwb8AWDtxj9h5mlMQMIuHAbiEGFlyZSOfr4cqZ=s96-c",followers:0,jobDetails:{_id:"660469a5a298823098f96b7d",organizationID:"65fc4b9a2dedb84c611bc683",title:"Developer",description:"<p><strong>Job Description:</strong></p><p></p><p>At Quantum Innovations Ltd., we believe in the power of happiness to drive innovation and success. As a cutting-edge technology company, we are on a mission to revolutionize the world while maintaining a positive and joyful work environment. We are seeking a dynamic and enthusiastic Chief Happiness Officer to join our team and spread smiles throughout the organization.</p><p></p><p><strong>Responsibilities:</strong></p><p></p><ul><li><p>Develop and implement happiness strategies to boost employee morale and satisfaction.</p></li><li><p>Organize fun and engaging team-building activities, from office mini-golf tournaments to virtual dance-offs.</p></li><li><p>Manage the company's puppy therapy program to ensure a stress-free workplace.</p></li><li><p>Curate a playlist of uplifting music to be played in common areas.</p></li><li><p>Spearhead the creation of a company-wide \"Joke of the Day\" initiative.</p></li><li><p>Collaborate with the snack committee to ensure a diverse range of happiness-inducing snacks in the break room.</p></li></ul><p></p><p><strong>Requirements:</strong></p><p> </p><ul><li><p>A contagious smile and a positive attitude.</p></li><li><p>Proven experience in spreading joy and fostering a positive work culture.</p></li><li><p>Excellent dance moves are a plus but not mandatory.</p></li><li><p>Ability to handle a high volume of dad jokes.</p></li><li><p>Proficiency in organizing surprise birthday celebration.</p></li></ul><p></p><p><strong>Perks: </strong></p><p></p><ul><li><p>Unlimited access to the company's laughter yoga sessions.</p></li><li><p>Casual Fridays extended to the entire workweek.</p></li><li><p>Complimentary snacks and a chocolate fountain in the break room.</p></li><li><p>Flexibility to bring your pet to work (fish, hamsters, and miniature horses welcome).</p></li></ul><p></p><p><strong>How to Apply:</strong></p><p></p><ul><li><p>To apply for this position, submit your resume along with a 30-second video explaining why you're the perfect fit for the role. Bonus points for creativity and a demonstration of your happiest dance move. Applications without a dance move will still be considered, but, let's be honest, who doesn't want to see your happy dance?</p></li></ul>",jobType:["Full Time","Contact"],location:"Lahore",skills:["React","Express","Nodejs","Mongodb","Firebase"],education:"Bachelors in Computer Science",experience:"5+ year",datePosted:"2024-03-27T18:51:22.668Z",salary:{currency:{text:"PKR",sign:"Rs"},min:15e4,max:2e5,period:"Per Month"},schedule:"2024-03-27T00:00:00.000Z",closeDate:"2024-05-30T00:00:00.000Z",isRecommendedByAI:!1,views:"1",applicants:0,__v:0}}]}}}]);