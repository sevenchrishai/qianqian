(function(t){function e(e){for(var a,i,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-5472d8b8":"5101d6df"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var u=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}r[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/qianqian/dist/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Home",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"header"},[n("h2",[t._v("闪耀暖暖联盟智能统分")]),t._m(0),n("p",{staticClass:"by"},[n("a",{staticClass:"aToken",attrs:{target:"_blank",href:"javascript:void(0)"},on:{click:t.getAccessToken}},[t._v("点击获取access_token")]),n("el-input",{staticClass:"token",attrs:{type:"hidden",placeholder:"粘贴获取的access_token"},model:{value:t.token,callback:function(e){t.token=e},expression:"token"}})],1)]),n("div",{staticClass:"picUploadList"},[n("el-upload",{staticClass:"upload-demo",attrs:{action:"",accept:".jpg,.jpeg,.png,.JPG,.JPEG,.bmp",multiple:!0,"auto-upload":!1,"on-change":t.getFile,"on-remove":t.getFile,"file-list":t.fileList}},[n("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-upload"}},[t._v("点击上传图片")]),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png/bmp文件，且不超过500kb")])],1)],1),n("el-button",{staticClass:"run",attrs:{type:"primary",icon:"el-icon-caret-right"},nativeOn:{click:function(e){return t.run(e)}}},[t._v("Run")]),n("div",{staticClass:"table"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.tableData,stripe:"","default-sort":{prop:"score",order:"descending"}}},[n("el-table-column",{attrs:{prop:"name",label:"Name"}}),n("el-table-column",{attrs:{prop:"collect",label:"收集度"}}),n("el-table-column",{attrs:{prop:"score",label:"Score",sortable:""}})],1)],1),n("el-button",{staticClass:"exportEX",attrs:{type:"primary",loading:t.downloadLoading,icon:"el-icon-document"},nativeOn:{click:function(e){return t.exportEX(e)}}},[t._v("导出Excel")])],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"by",attrs:{align:"center"}},[n("span",{staticClass:"dash"}),n("span",{staticClass:"writer"},[t._v("\n                by\n                "),n("a",{attrs:{href:"javascript:void(0)"}},[t._v("芊芊")]),t._v("|\n                "),n("a",{attrs:{target:"_blank",href:"https://weibo.com/u/3126062800"}},[t._v("其实然也其实未然")]),t._v("|\n                "),n("a",{attrs:{target:"_blank",href:"https://github.com/sevenchrishai/qianqian"}},[t._v(" sevenchrishai")]),t._v("|\n            ")]),n("span",{staticClass:"dash"})])}],c=(n("a481"),n("28a5"),n("ac6a"),n("96cf"),n("3b8d")),u=n("2427"),l=n.n(u),p={testUrl:"/",access_token:"/oauth/2.0/token?grant_type=client_credentials&client_id=t7X9W7nhlOEA7w5Uv6fD1xYn&client_secret=bzqfEGcXT0jQGZC9nlrD9HLeXc6jXMxF&",ecognizerUrl:"/rest/2.0/solution/v1/iocr/recognise/finance?access_token="},d=p,f="https://aip.baidubce.com",h=f,m=l.a.create({baseURL:h,timeout:3e4});m.interceptors.request.use((function(t){return t.headers={requestTime:(new Date).getTime(),"Content-Type":"application/x-www-form-urlencoded; charset=utf-8"},t}),(function(t){return Promise.reject(t)})),m.interceptors.response.use((function(t){return t["Content-Type"]="application/json;charset=UTF-8",t}),(function(t){return Promise.reject(t)}));var g=function(t,e){var n=new Error(e.message);return n.code=t,n},v=function(t){var e=t.status,n=t.data;if(200===e)return n;throw g(e)},b=function(){return{getData:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=v,t.next=3,m.post(d.ecognizerUrl+e,n);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),getAccessToken:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=v,t.next=3,m.get(d.access_token);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}},_={name:"home",data:function(){return{tokenUrl:"https://aip.baidubce.com"+d.access_token,token:"",templateSign:"aba01721b7261633127622aa8c7c57cd",fileList:[],imageBase64List:[],listLoading:!1,downloadLoading:!1,tableData:[],reqFlag:!0,reqCount:0,filename:"DataTable",autoWidth:!0}},created:function(){},mounted:function(){},computed:{},methods:{getAccessToken:function(){var t=this;b().getAccessToken().then((function(e){t.token=e.access_token}))},requestData:function(){var t=this;if(this.reqFlag&&this.reqCount>0){var e=[],n=[],a=new FormData;a.append("templateSign",this.templateSign),a.append("image",this.imageBase64List[this.reqCount-1]),this.listLoading=!0,b().getData(this.token,a).then((function(a){t.listLoading=!1,console.log("加载成功！"),a.data.ret.forEach((function(t){if(t["location"]){var n={};if(n.id=t["word_name"]?t["word_name"].split("#")[1]:"",t["word_name"].indexOf("Name")<0)t["word"]=t["word"].replace("分",""),n.score=t["word"];else{var a=t["word"]?t["word"].split("收集度"):[];n.name=a[0],n.collect=a[1]}e.push(n)}})),e.forEach((function(t,a){if(a<e.length-1&&e[a+1].id==t.id){var r=Object.assign(t,e[a+1]);n.push(r)}})),n.forEach((function(e){t.tableData.push(e)})),t.reqCount--,t.requestData()})).catch((function(){t.reqFlag=!1,t.listLoading=!1}))}},run:function(){console.log("运行！"),this.imageBase64List.length>0&&(this.tableData=[],this.reqCount=this.imageBase64List.length,this.requestData())},exportEX:function(){var t=this;console.log("导出！");var e=this.tableData;e.length>0&&(this.downloadLoading=!0,n.e("chunk-5472d8b8").then(n.bind(null,"4bf8d")).then((function(n){var a=["Name","收集度","Score"],r=["name","collect","score"],o=t.formatJson(r,e);n.export_json_to_excel({titleName:"DataTable",header:a,data:o,filename:t.filename,autoWidth:t.autoWidth}),t.downloadLoading=!1})))},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return e[t]}))}))},getFile:function(t,e){var n=this;this.fileList=e,this.imageBase64List=[];var a=[];this.fileList.forEach((function(t){n.getBase64(t.raw).then((function(t){t=t.replace(/^data:image\/\w+;base64,/,""),a.push(t)}))})),this.imageBase64List=a},getBase64:function(t){return new Promise((function(e,n){var a=new FileReader,r="";a.readAsDataURL(t),a.onload=function(){r=a.result},a.onerror=function(t){n(t)},a.onloadend=function(){e(r)}}))}}},w=_,k=(n("dbc2"),n("2877")),y=Object(k["a"])(w,i,s,!1,null,null,null),j=y.exports,L={name:"app",components:{Home:j}},x=L,C=(n("034f"),Object(k["a"])(x,r,o,!1,null,null,null)),O=C.exports,q=n("7893"),E=n.n(q);n("c69f");a["default"].use(E.a,{size:"small",zIndex:3e3}),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(O)}}).$mount("#app")},"64a9":function(t,e,n){},c69f:function(t,e,n){},d792:function(t,e,n){},dbc2:function(t,e,n){"use strict";var a=n("d792"),r=n.n(a);r.a}});
//# sourceMappingURL=app.09a36f8c.js.map