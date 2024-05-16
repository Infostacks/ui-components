"use strict";(self.webpackChunk_infostacks_ui_components=self.webpackChunk_infostacks_ui_components||[]).push([[906],{"./src/stories/JobSearchDetails.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Long:()=>Long,Short:()=>Short,View:()=>View,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var _Components_JobsSearch_JobDetail__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Components/JobsSearch/JobDetail/index.ts"),_Components_JobsSearch_const__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Components/JobsSearch/const.ts"),storybook_addon_react_router_v6__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/storybook-addon-react-router-v6/dist/index.mjs"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js");let __WEBPACK_DEFAULT_EXPORT__={title:"Deatils/JobSearch Details",component:_Components_JobsSearch_JobDetail__WEBPACK_IMPORTED_MODULE_1__.A,decorators:[storybook_addon_react_router_v6__WEBPACK_IMPORTED_MODULE_3__.y],tags:["autodocs"],argTypes:{data:{control:"object"},applied:{control:"boolean"},applyUrl:{control:"string"}}};(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.A)({});var Short={args:{data:_Components_JobsSearch_const__WEBPACK_IMPORTED_MODULE_2__.A.jobs[0],applied:!1,applyUrl:"/apply/"},parameters:{reactRouter:(0,storybook_addon_react_router_v6__WEBPACK_IMPORTED_MODULE_3__.Jg)({location:{path:"/jobs"},routing:{path:"/jobs"}})}},View={args:{data:_Components_JobsSearch_const__WEBPACK_IMPORTED_MODULE_2__.A.jobs[0],applied:!0},parameters:{reactRouter:(0,storybook_addon_react_router_v6__WEBPACK_IMPORTED_MODULE_3__.Jg)({location:{path:"/jobs"},routing:{path:"/jobs"}})}},Long={args:{data:_Components_JobsSearch_const__WEBPACK_IMPORTED_MODULE_2__.A.jobs[1],applied:!1,applyUrl:"/apply/"},parameters:{reactRouter:(0,storybook_addon_react_router_v6__WEBPACK_IMPORTED_MODULE_3__.Jg)({location:{path:"/jobs"},routing:{path:"/jobs"}})}};Short.parameters={...Short.parameters,docs:{...Short.parameters?.docs,source:{originalSource:'{\n  args: {\n    data: data.jobs[0],\n    applied: false,\n    applyUrl: "/apply/"\n  },\n  parameters: {\n    reactRouter: reactRouterParameters({\n      location: {\n        path: "/jobs"\n      },\n      routing: {\n        path: "/jobs"\n      }\n    })\n  }\n}',...Short.parameters?.docs?.source}}},View.parameters={...View.parameters,docs:{...View.parameters?.docs,source:{originalSource:'{\n  args: {\n    data: data.jobs[0],\n    applied: true\n  },\n  parameters: {\n    reactRouter: reactRouterParameters({\n      location: {\n        path: "/jobs"\n      },\n      routing: {\n        path: "/jobs"\n      }\n    })\n  }\n}',...View.parameters?.docs?.source}}},Long.parameters={...Long.parameters,docs:{...Long.parameters?.docs,source:{originalSource:'{\n  args: {\n    data: data.jobs[1],\n    applied: false,\n    applyUrl: "/apply/"\n  },\n  parameters: {\n    reactRouter: reactRouterParameters({\n      location: {\n        path: "/jobs"\n      },\n      routing: {\n        path: "/jobs"\n      }\n    })\n  }\n}',...Long.parameters?.docs?.source}}};let __namedExportsOrder=["Short","View","Long"]},"./src/Components/JobsSearch/JobDetail/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>JobDetail});var react=__webpack_require__("./node_modules/react/index.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Divider=__webpack_require__("./node_modules/@mui/material/Divider/Divider.js");let JobDetail_style={container:function(jobsPage){return{position:"sticky",top:"15px",bottom:"15px",padding:"24px 24px 0px",backgroundColor:jobsPage?"secondary.extraLight":"white",borderRadius:"16px",display:"flex",flexDirection:"column",gap:"16px",height:"100%",flex:2,alignSelf:"stretch"}}};var Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js");let JobTitle_style={row:{display:"flex",width:"100%",justifyContent:"space-between",flexWrap:{xs:"wrap",sm:"nowrap"}},organizationContainer:{display:"flex",gap:"16px"},orgImage:{width:"100px",height:"100px"},organizationDetails:{display:"flex",flexDirection:"column",alignItems:"start","& .MuiTypography-root":{lineHeight:"150%"},"& .jobRow-jobTitle":{fontSize:"24px",fontWeight:700,textAlign:"start"}},orgNameRow:{display:"flex",gap:"10px",textAlign:"start"},textOrgName:{fontSize:"18px",fontWeight:600},textJobLocation:{fontSize:"16px"},orgActivitySmall:{display:{xs:"flex",lg:"none"},width:{xs:"100%",lg:"0px"},justifyContent:"start",mt:"19px"},orgActivityLarge:{display:{xs:"none",lg:"block"},width:{xs:"0%",lg:"max-content"}},orgActivityContainer:{display:"flex",alignItems:"space-between",justifyContent:"space-between",flexDirection:"column"},activityBox:{display:"flex",gap:"20px",alignItems:"center",flexWrap:"wrap",justifyContent:"flex-end","& .MuiButton-root":{padding:0,margin:0,minWidth:0},my:{xs:3,sm:0}},searchBtn:{gridColumnEnd:9,borderRadius:"72px",px:"24px !important",py:"0px !important",backgroundColor:"primary.main",color:"primary.contrastText",height:"40px",mx:"2px !important",":hover":{backgroundColor:"primary.dark"}},ai_recommend:{display:"flex",justifyContent:"flex-end",alignItems:"center",fontSize:"14px",padding:"2px","& .recommended":{display:"flex",alignItems:"center",fontWeight:700,color:"#4950FF",gap:"8px",fontSize:"inherit"}}};var figma=__webpack_require__("./src/Utils/Icons/figma.tsx"),useMediaQuery=__webpack_require__("./node_modules/@mui/system/esm/useMediaQuery/useMediaQuery.js");function _object_destructuring_empty(o){if(null==o)throw TypeError("Cannot destructure "+o);return o}function JobOptions(param){return _object_destructuring_empty(param),react.createElement(react.Fragment,null,react.createElement(Button.A,{onClick:function(){}},figma.A.shareIcon()),react.createElement(Button.A,null,figma.A.bookmarkIcon()),react.createElement(Button.A,null,figma.A.moreHorizontalIcon()))}try{Options.displayName="Options",Options.__docgenInfo={description:"",displayName:"Options",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/JobsSearch/JobDetail/Options/index.tsx#Options"]={docgenInfo:Options.__docgenInfo,name:"Options",path:"src/Components/JobsSearch/JobDetail/Options/index.tsx#Options"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("./node_modules/react-router/dist/index.js");function JobTitle(param){var data=param.data,applyUrl=param.applyUrl,applied=param.applied,isXS=(0,useMediaQuery.A)(function(theme){return theme.breakpoints.down("sm")}),navigate=(0,dist.Zp)();return react.createElement(Box.A,{sx:JobTitle_style.row},react.createElement(Box.A,{sx:JobTitle_style.organizationContainer},!isXS&&react.createElement("img",{src:data.image,style:JobTitle_style.orgImage}),react.createElement(Box.A,{sx:JobTitle_style.organizationDetails},react.createElement(Box.A,{sx:JobTitle_style.orgNameRow},react.createElement(Typography.A,{sx:JobTitle_style.textOrgName},data.name),react.createElement(Typography.A,null,data.followers," Followers")),react.createElement(Typography.A,{className:"jobRow-jobTitle"},data.jobDetails.title),react.createElement(Typography.A,{sx:JobTitle_style.textJobLocation},data.jobDetails.location),!applied&&react.createElement(Box.A,{sx:JobTitle_style.orgActivitySmall},react.createElement(Button.A,{sx:JobTitle_style.searchBtn},"Follow"),react.createElement(Button.A,{sx:JobTitle_style.searchBtn,onClick:function(){navigate("".concat(applyUrl).concat(data.jobDetails._id))}},"Apply")))),react.createElement(Box.A,{sx:JobTitle_style.orgActivityContainer},!applied&&react.createElement(Box.A,{sx:JobTitle_style.activityBox},!isXS&&react.createElement(react.Fragment,null,react.createElement(JobOptions,null)),react.createElement(Box.A,{sx:JobTitle_style.orgActivityLarge},react.createElement(Button.A,{sx:JobTitle_style.searchBtn},"Follow"),react.createElement(Button.A,{sx:JobTitle_style.searchBtn,onClick:function(){navigate("".concat(applyUrl).concat(data.jobDetails._id))}},"Apply"))),react.createElement(Box.A,{sx:JobTitle_style.ai_recommend},data.jobDetails.is_recommended_by_ai?react.createElement(Typography.A,{className:"recommended"}," ",figma.A.AI()," Recommended for you by AI"):react.createElement(Typography.A,null))))}try{JobTitle.displayName="JobTitle",JobTitle.__docgenInfo={description:"",displayName:"JobTitle",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any"}},applyUrl:{defaultValue:null,description:"",name:"applyUrl",required:!0,type:{name:"any"}},applied:{defaultValue:null,description:"",name:"applied",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/JobsSearch/JobDetail/JobTitle/index.tsx#JobTitle"]={docgenInfo:JobTitle.__docgenInfo,name:"JobTitle",path:"src/Components/JobsSearch/JobDetail/JobTitle/index.tsx#JobTitle"})}catch(__react_docgen_typescript_loader_error){}let JobDescription_style={container:{overflow:"auto",scrollbarWidth:"8px","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-thumb":{borderRadius:"8px",backgroundColor:"secondary.extraDark",height:"278px"}},jobDetailText:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",mb:"16px",button:{backgroundColor:"secondary.extraDark",margin:"0px 10px",padding:"0px",minWidth:"auto"}},jobDetail:{fontSize:"20px",fontWeight:"700",lineHeight:"140%",textAlign:"start"},jobInfoContainer:{display:"flex",gap:"24px",mb:"16px",flexWrap:"wrap"},jobInfoRow:{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"start",gap:"8px"},jobInfoTitle:{fontWeight:700},jobInfoStats:{display:"flex",gap:"8px","& .MuiTypography-root":{backgroundColor:"secondary.extraDark",padding:"4px 8px"}},jobDetailsContainer:{display:"flex",gap:"24px",flexDirection:"column",maxWidth:"95%"},jobDetailsCRow:{display:"flex",gap:"8px",flexDirection:"column",textAlign:"justify",pb:2}};var RichTextReadOnly=__webpack_require__("./node_modules/mui-tiptap/dist/esm/RichTextReadOnly.js"),starter_kit_dist=__webpack_require__("./node_modules/@tiptap/starter-kit/dist/index.js");function JobDescription(param){var data=param.data,isXS=(0,useMediaQuery.A)(function(theme){var _theme_breakpoints;return null==theme?void 0:null===(_theme_breakpoints=theme.breakpoints)||void 0===_theme_breakpoints?void 0:_theme_breakpoints.down("sm")});return react.createElement(Box.A,{sx:JobDescription_style.container,id:"job-detail-expandable-container"},react.createElement(Box.A,{sx:JobDescription_style.jobDetailText},react.createElement(Typography.A,{sx:JobDescription_style.jobDetail},"Job Details"),react.createElement("span",null,isXS&&react.createElement(JobOptions,null))),react.createElement(Box.A,{sx:JobDescription_style.jobInfoContainer},react.createElement(Box.A,{sx:JobDescription_style.jobInfoRow},react.createElement(Typography.A,{sx:JobDescription_style.jobInfoTitle},"Job Type: "),react.createElement(Box.A,{sx:JobDescription_style.jobInfoStats},data.jobDetails.jobType&&data.jobDetails.jobType.map(function(type){return react.createElement(Typography.A,{key:type},type)}))),react.createElement(Box.A,{sx:JobDescription_style.jobInfoRow},react.createElement(Typography.A,{sx:JobDescription_style.jobInfoTitle},"Experience: "),react.createElement(Box.A,{sx:JobDescription_style.jobInfoStats},react.createElement(Typography.A,null,data.jobDetails.experience))),data.jobDetails.closeDate&&react.createElement(Box.A,{sx:JobDescription_style.jobInfoRow},react.createElement(Typography.A,{sx:JobDescription_style.jobInfoTitle},"Close Date: "),react.createElement(Box.A,{sx:JobDescription_style.jobInfoStats},react.createElement(Typography.A,null,new Date(data.jobDetails.closeDate).toDateString()))),react.createElement(Box.A,{sx:JobDescription_style.jobInfoRow},react.createElement(Typography.A,{sx:JobDescription_style.jobInfoTitle},"Salary: "),react.createElement(Box.A,{sx:JobDescription_style.jobInfoStats},react.createElement(Typography.A,null,data.jobDetails.salary.currency.text," ",data.jobDetails.salary.min," - ",data.jobDetails.salary.max," ",data.jobDetails.salary.period)))),react.createElement(Box.A,{sx:JobDescription_style.jobDetailsContainer},react.createElement(Box.A,{sx:JobDescription_style.jobDetailsCRow},react.createElement(RichTextReadOnly.A,{content:data.jobDetails.description,extensions:[starter_kit_dist.A],injectCSS:!0}))))}try{JobDescription.displayName="JobDescription",JobDescription.__docgenInfo={description:"",displayName:"JobDescription",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/JobsSearch/JobDetail/JobDescription/index.tsx#JobDescription"]={docgenInfo:JobDescription.__docgenInfo,name:"JobDescription",path:"src/Components/JobsSearch/JobDetail/JobDescription/index.tsx#JobDescription"})}catch(__react_docgen_typescript_loader_error){}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function JobDetail(param){var data=param.data,applied=param.applied,applyUrl=param.applyUrl,location=(0,dist.zy)(),handleScroll=function(){var container=document.getElementById("job-detail-expandable-container");if(container){var coord=container.getBoundingClientRect().y,available=window.innerHeight-coord-20;container.style.maxHeight=available+"px"}};return react.useEffect(function(){return handleScroll(),window.addEventListener("scroll",handleScroll),function(){window.removeEventListener("scroll",handleScroll)}},[]),react.createElement(Box.A,{sx:_object_spread({},JobDetail_style.container("viewjob"!==location.pathname.split("/")[1])),id:"job-detail-container"},react.createElement(JobTitle,{data:data,applied:applied,applyUrl:applyUrl}),react.createElement(Divider.A,{sx:{borderColor:"black"}}),react.createElement(JobDescription,{data:data}))}try{jobDetails.displayName="jobDetails",jobDetails.__docgenInfo={description:"",displayName:"jobDetails",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/JobsSearch/JobDetail/jobDetails.tsx#jobDetails"]={docgenInfo:jobDetails.__docgenInfo,name:"jobDetails",path:"src/Components/JobsSearch/JobDetail/jobDetails.tsx#jobDetails"})}catch(__react_docgen_typescript_loader_error){}},"./src/Components/JobsSearch/const.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__={total:6,jobs:[{_id:"65fc7f59f6c8a424657e06f3",name:"Muhammad Usama Afzal",email:"usamaafzal2439@gmail.com",image:"https://lh3.googleusercontent.com/a/ACg8ocJNTVduSJtj8SmJSCEJVPEqPF3abBcrRRjCTrQ1D3aGVLc=s96-c",followers:0,jobDetails:{_id:"660acf6f925cbf479d46f452",organizationID:"65fc7f59f6c8a424657e06f3",title:"Back End Developer",description:"<p><strong>Job Description:</strong></p><p>We are seeking a highly skilled Full Stack Developer to join our dynamic team. As a Full Stack Developer, you will be responsible for developing and maintaining both front-end and back-end applications. You will collaborate with cross-functional teams to define, design, and ship new features, ensuring the best possible performance, responsiveness, and user experience of our products. The ideal candidate is passionate about technology, thrives in a fast-paced environment, and is eager to learn and grow.</p>",jobType:["Part Time"],location:"Bahawalpur",skills:["Node js","Javascript","java","express","github"],education:"MCs",experience:"2 year",datePosted:"2024-04-01T18:49:13.202Z",salary:{currency:{text:"PKR",sign:"Rs"},min:1500,max:2500,period:"Per Hour"},schedule:"2024-04-01T00:00:00.000Z",closeDate:"2024-05-08T00:00:00.000Z",isRecommendedByAI:!1,views:"1",applicants:0,__v:0}},{_id:"65fc7f59f6c8a424657e06f3",name:"Muhammad Usama Afzal",email:"usamaafzal2439@gmail.com",image:"https://lh3.googleusercontent.com/a/ACg8ocJNTVduSJtj8SmJSCEJVPEqPF3abBcrRRjCTrQ1D3aGVLc=s96-c",followers:0,jobDetails:{_id:"66099e87925cbf479d46f321",organizationID:"65fc7f59f6c8a424657e06f3",title:"Full Stack Developer",description:"<p><strong>Responsibilities:</strong></p><ol><li><p>Develop front-end components using modern JavaScript frameworks such as React.js, Angular, or Vue.js.</p></li><li><p>Design and implement scalable, reliable, and maintainable back-end solutions using languages like Node.js, Python, or Java.</p></li><li><p>Collaborate with UI/UX designers to create intuitive, user-friendly interfaces.</p></li><li><p>Optimize applications for maximum speed and scalability.</p></li><li><p>Implement security and data protection measures.</p></li><li><p>Participate in code reviews and provide constructive feedback to team members.</p></li><li><p>Troubleshoot and debug issues across the stack.</p></li><li><p>Stay updated on emerging technologies and industry trends.</p></li><li><p>Work closely with product managers and stakeholders to understand project requirements and deliver high-quality solutions.</p></li><li><p>Contribute to the continuous improvement of development processes and methodologies.</p></li></ol><p><strong>Requirements:</strong></p><ol><li><p>Bachelor's degree in Computer Science, Engineering, or related field; or equivalent work experience.</p></li><li><p>Proven experience as a Full Stack Developer or similar role.</p></li><li><p>Proficiency in front-end development languages such as HTML5, CSS3, and JavaScript.</p></li><li><p>Experience with modern JavaScript frameworks/libraries such as React.js, Angular, or Vue.js.</p></li><li><p>Strong understanding of back-end development technologies such as Node.js, Python, or Java.</p></li><li><p>Experience with database systems such as MySQL, MongoDB, or PostgreSQL.</p></li><li><p>Familiarity with RESTful APIs and microservices architecture.</p></li><li><p>Knowledge of version control systems such as Git.</p></li><li><p>Excellent problem-solving and analytical skills.</p></li><li><p>Ability to work effectively both independently and as part of a team.</p></li><li><p>Excellent communication and collaboration skills.</p></li></ol><p><strong>Preferred Qualifications:</strong></p><ol><li><p>Experience with cloud platforms such as AWS, Azure, or Google Cloud Platform.</p></li><li><p>Familiarity with DevOps practices and tools.</p></li><li><p>Experience with containerization technologies such as Docker and Kubernetes.</p></li><li><p>Knowledge of Agile development methodologies.</p></li><li><p>Contributions to open-source projects or a strong GitHub profile.</p></li></ol><p><strong>Benefits:</strong></p><ol><li><p>Competitive salary and performance-based bonuses.</p></li><li><p>Comprehensive health, dental, and vision insurance plans.</p></li><li><p>Flexible work hours and remote work options.</p></li><li><p>Generous paid time off and company holidays.</p></li><li><p>Professional development opportunities and tuition reimbursement.</p></li><li><p>Vibrant and inclusive company culture with team-building activities and events.</p></li><li><p>Cutting-edge technology and tools to support your work.</p></li><li><p>Opportunities for career advancement and growth within the company.</p></li></ol>",jobType:["Full Time"],location:"lahore",skills:["HTML5","CSS3","JavaScript","Responsive Design","Front-end Frameworks","Browser Developer Tools","Node.js","RESTful APIs","Git"],education:"Bscs",experience:"3 year",datePosted:"2024-03-31T17:38:18.663Z",salary:{currency:{text:"PKR",sign:"Rs"},min:1e3,max:4e4,period:"Per Hour"},schedule:"2024-03-31T00:00:00.000Z",closeDate:"2024-04-12T00:00:00.000Z",isRecommendedByAI:!1,views:"1",applicants:0,__v:0}},{_id:"65fc4b9a2dedb84c611bc683",name:"Ghufran Ali",email:"ghoofy.321@gmail.com",image:"https://lh3.googleusercontent.com/a/ACg8ocKjSDRwb8AWDtxj9h5mlMQMIuHAbiEGFlyZSOfr4cqZ=s96-c",followers:0,jobDetails:{_id:"66070dac8421868ef0643dc7",organizationID:"65fc4b9a2dedb84c611bc683",title:"Senior UI/UX Developer ",description:"<p><strong>Description</strong></p><p></p><p>Required experience <strong>10+ </strong>years.</p>",jobType:["Full Time"],location:"Lahore",skills:["Figma","Ui/Ux","Designer","Creative"],education:"Bachelors",experience:"5+ year",datePosted:"2024-03-29T18:52:19.523Z",salary:{currency:{text:"USD",sign:"$"},min:70,max:90,period:"Per Hour"},schedule:"2024-03-29T00:00:00.000Z",closeDate:"2024-05-03T00:00:00.000Z",isRecommendedByAI:!1,views:"1",applicants:0,__v:0}},{_id:"65fc4b9a2dedb84c611bc683",name:"Ghufran Ali",email:"ghoofy.321@gmail.com",image:"https://lh3.googleusercontent.com/a/ACg8ocKjSDRwb8AWDtxj9h5mlMQMIuHAbiEGFlyZSOfr4cqZ=s96-c",followers:0,jobDetails:{_id:"6606d5d587424f7a9a62cea3",organizationID:"65fc4b9a2dedb84c611bc683",title:"Frontend Developer",description:"<p>Hi Junior :)</p><p></p><p>Is it working??</p><ol><li><p>1231231</p></li><li><p>1231</p></li><li><p>412</p></li></ol>",jobType:["Internship"],location:"Lahore",skills:["React"],education:"Bachelors in Computer Science",experience:"1 year",datePosted:"2024-03-29T18:48:53.367Z",salary:{currency:{text:"PKR",sign:"Rs"},min:1e3,max:1200,period:"Per day"},schedule:"2024-03-29T00:00:00.000Z",closeDate:"2024-04-10T00:00:00.000Z",isRecommendedByAI:!1,views:"1",applicants:0,__v:0}},{_id:"65fc4b9a2dedb84c611bc683",name:"Ghufran Ali",email:"ghoofy.321@gmail.com",image:"https://lh3.googleusercontent.com/a/ACg8ocKjSDRwb8AWDtxj9h5mlMQMIuHAbiEGFlyZSOfr4cqZ=s96-c",followers:0,jobDetails:{_id:"660582ee4dbc94a38b9f7daa",organizationID:"65fc4b9a2dedb84c611bc683",title:"Backend Developer",description:"<p><strong>Job Description:</strong><br>At Quantum Innovations Ltd., we believe in the power of happiness to drive innovation and success. As a cutting-edge technology company, we are on a mission to revolutionize the world while maintaining a positive and joyful work environment. We are seeking a dynamic and enthusiastic Chief Happiness Officer to join our team and spread smiles throughout the organization.<br></p><p><strong>Responsibilities:</strong></p><ul><li><p>Develop and implement happiness strategies to boost employee morale and satisfaction.</p></li><li><p>Organize fun and engaging team-building activities, from office mini-golf tournaments to virtual dance-offs.</p></li><li><p>Manage the company's puppy therapy program to ensure a stress-free workplace.</p></li><li><p>Curate a playlist of uplifting music to be played in common areas.</p></li><li><p>Spearhead the creation of a company-wide \"Joke of the Day\" initiative.</p></li><li><p>Collaborate with the snack committee to ensure a diverse range of happiness-inducing snacks in the break room.</p><p></p></li></ul><p><strong>Requirements:</strong></p><ul><li><p>A contagious smile and a positive attitude.</p></li><li><p>Proven experience in spreading joy and fostering a positive work culture.</p></li><li><p>Excellent dance moves are a plus but not mandatory.</p></li><li><p>Ability to handle a high volume of dad jokes.</p></li><li><p>Proficiency in organizing surprise birthday celebrations.</p></li></ul><p></p><p><strong>Perks:</strong></p><ul><li><p>Unlimited access to the company's laughter yoga sessions.</p></li><li><p>Casual Fridays extended to the entire workweek.</p></li><li><p>Complimentary snacks and a chocolate fountain in the break room.</p></li><li><p>Flexibility to bring your pet to work (fish, hamsters, and miniature horses welcome).</p><p></p></li></ul><p><strong>How to Apply:</strong></p><ul><li><p>To apply for this position, submit your resume along with a 30-second video explaining why you're the perfect fit for the role. Bonus points for creativity and a demonstration of your happiest dance move. Applications without a dance move will still be considered, but, let's be honest, who doesn't want to see your happy dance?</p></li></ul>",jobType:["Internship","Contact","Part Time"],location:"Lahore",skills:["React"],education:"BSCS",experience:"5+ year",datePosted:"2024-03-28T19:53:59.594Z",salary:{currency:{text:"USD",sign:"$"},min:70,max:90,period:"Per Hour"},schedule:"2024-03-29T00:00:00.000Z",closeDate:"2024-04-19T00:00:00.000Z",isRecommendedByAI:!1,views:"1",applicants:0,__v:0}},{_id:"65fc4b9a2dedb84c611bc683",name:"Ghufran Ali",email:"ghoofy.321@gmail.com",image:"https://lh3.googleusercontent.com/a/ACg8ocKjSDRwb8AWDtxj9h5mlMQMIuHAbiEGFlyZSOfr4cqZ=s96-c",followers:0,jobDetails:{_id:"660469a5a298823098f96b7d",organizationID:"65fc4b9a2dedb84c611bc683",title:"Developer",description:"<p><strong>Job Description:</strong></p><p></p><p>At Quantum Innovations Ltd., we believe in the power of happiness to drive innovation and success. As a cutting-edge technology company, we are on a mission to revolutionize the world while maintaining a positive and joyful work environment. We are seeking a dynamic and enthusiastic Chief Happiness Officer to join our team and spread smiles throughout the organization.</p><p></p><p><strong>Responsibilities:</strong></p><p></p><ul><li><p>Develop and implement happiness strategies to boost employee morale and satisfaction.</p></li><li><p>Organize fun and engaging team-building activities, from office mini-golf tournaments to virtual dance-offs.</p></li><li><p>Manage the company's puppy therapy program to ensure a stress-free workplace.</p></li><li><p>Curate a playlist of uplifting music to be played in common areas.</p></li><li><p>Spearhead the creation of a company-wide \"Joke of the Day\" initiative.</p></li><li><p>Collaborate with the snack committee to ensure a diverse range of happiness-inducing snacks in the break room.</p></li></ul><p></p><p><strong>Requirements:</strong></p><p> </p><ul><li><p>A contagious smile and a positive attitude.</p></li><li><p>Proven experience in spreading joy and fostering a positive work culture.</p></li><li><p>Excellent dance moves are a plus but not mandatory.</p></li><li><p>Ability to handle a high volume of dad jokes.</p></li><li><p>Proficiency in organizing surprise birthday celebration.</p></li></ul><p></p><p><strong>Perks: </strong></p><p></p><ul><li><p>Unlimited access to the company's laughter yoga sessions.</p></li><li><p>Casual Fridays extended to the entire workweek.</p></li><li><p>Complimentary snacks and a chocolate fountain in the break room.</p></li><li><p>Flexibility to bring your pet to work (fish, hamsters, and miniature horses welcome).</p></li></ul><p></p><p><strong>How to Apply:</strong></p><p></p><ul><li><p>To apply for this position, submit your resume along with a 30-second video explaining why you're the perfect fit for the role. Bonus points for creativity and a demonstration of your happiest dance move. Applications without a dance move will still be considered, but, let's be honest, who doesn't want to see your happy dance?</p></li></ul>",jobType:["Full Time","Contact"],location:"Lahore",skills:["React","Express","Nodejs","Mongodb","Firebase"],education:"Bachelors in Computer Science",experience:"5+ year",datePosted:"2024-03-27T18:51:22.668Z",salary:{currency:{text:"PKR",sign:"Rs"},min:15e4,max:2e5,period:"Per Month"},schedule:"2024-03-27T00:00:00.000Z",closeDate:"2024-05-30T00:00:00.000Z",isRecommendedByAI:!1,views:"1",applicants:0,__v:0}}]}}}]);