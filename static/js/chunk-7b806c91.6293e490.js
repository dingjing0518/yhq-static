(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b806c91"],{"64ae":function(e,a,t){},bc7c:function(e,a,t){"use strict";var l=t("fdd0"),s=t.n(l);s.a},d608:function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"carManager"},[t("div",{staticClass:"crumbs"},[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",[t("i",{staticClass:"el-icon-lx-cascades"}),e._v(" 财务管理\n      ")])],1)],1),t("div",{staticClass:"container"},[t("div",{staticClass:"handle-box"},[t("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"筛选关键词"},model:{value:e.select_word,callback:function(a){e.select_word=a},expression:"select_word"}}),t("el-date-picker",{attrs:{type:"date",placeholder:"开始时间"},model:{value:e.valueAA,callback:function(a){e.valueAA=a},expression:"valueAA"}}),t("el-date-picker",{staticStyle:{margin:"0px 20px 0px 10px"},attrs:{type:"date",placeholder:"结束时间"},model:{value:e.valueBB,callback:function(a){e.valueBB=a},expression:"valueBB"}}),t("el-button",{staticClass:"sousuo",attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(a){return e.onesearch(1)}}},[e._v("查询")]),t("el-select",{staticStyle:{width:"100px","margin-right":"10px"},attrs:{placeholder:"请选择"},on:{change:e.addselect},model:{value:e.valueapp,callback:function(a){e.valueapp=a},expression:"valueapp"}},e._l(e.lister,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),t("el-button",{staticClass:"sousuo",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.refresh}},[e._v("刷新")]),t("span",{staticClass:"nesper"},[e._v("应收费用："+e._s(e.all.price)+"元 实收费用:"+e._s(e.all.realPrice)+"元 车辆总数:"+e._s(e.all.plate)+"辆")])],1),t("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"index",width:"55",align:"center",label:"序号","class-name":"table"}}),t("el-table-column",{attrs:{prop:"lpLincensePlateIdCar",label:"车牌号",align:"center","class-name":"table"}}),t("el-table-column",{attrs:{prop:"lpParkingOften",label:"停车时间",align:"center","class-name":"table"}}),t("el-table-column",{attrs:{prop:"lpParkingCost",label:"应收费用",align:"center","class-name":"table"}}),t("el-table-column",{attrs:{prop:"lpDepartureTime",label:"出场时间",align:"center",formatter:e.dateFormatterexpirationTime,"class-name":"table"}}),t("el-table-column",{attrs:{prop:"lpPaymentType",label:"出场类型",align:"center","class-name":"table"}}),t("el-table-column",{attrs:{prop:"lpParkingRealCost",label:"实收费用",align:"center","class-name":"table"}}),t("el-table-column",{attrs:{prop:"lpCarType",label:"区域",align:"center","class-name":"table"}})],1),t("div",{staticClass:"pagination"},[t("el-pagination",{attrs:{background:"","current-page":e.cur_page,"page-size":e.pagesize,total:e.totalRecords,"page-sizes":[50,100],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)])},s=[],n=(t("386d"),t("c5f6"),t("7f7f"),t("a15e"),{name:"carManager",data:function(){return{all:{price:"",plate:"",realPrice:""},valueapp:"当天",lister:[{value:1,label:"前一天"},{value:2,label:"当天"},{value:3,label:"当月"}],options:[{value:"4",label:"本年"},{value:"3",label:"本月"},{value:"2",label:"本周"},{value:"1",label:"今日"}],itemsr:"",valueAA:"",valueBB:"",value:"",tableData:[],cur_page:1,pagesize:50,totalRecords:0,numberer:0,condition:0,totalPages:0,multipleSelection:[],select_cate:"",select_word:"",del_list:[],is_search:!1,editVisible:!1,addVisible:!1,delVisible:!1,idx:-1,id:-1,datetime:"",datetimes:"",datetimers:"",datetimess:""}},created:function(){this.getData()},computed:{data:function(){var e=this;return this.tableData.filter(function(a){for(var t=!1,l=0;l<e.del_list.length;l++)if(a.name===e.del_list[l].name){t=!0;break}if(!t&&a.address.indexOf(e.select_cate)>-1&&(a.name.indexOf(e.select_word)>-1||a.address.indexOf(e.select_word)>-1))return a})}},methods:{refresh:function(){this.getData(),this.editForm="",this.select_word="",this.addForm={},this.valueapp="当天"},addselect:function(e){var a=this;console.log(e),this.$axios({url:"http://101.132.105.124:8080/carmanager-TEST/lincensePlatess/selectByPeriod",method:"post",data:{parkId:String(localStorage.getItem("parkId")),pageNum:a.cur_page,pageSize:a.pagesize,period:Number(e)}}).then(function(e){for(var t=e.data.lincensessData,l=0;l<t.length;l++)t[l].lpParkingCost&&(t[l].lpParkingCost=t[l].lpParkingCost+"元"),t[l].lpParkingOften&&(t[l].lpParkingOften=t[l].lpParkingOften+"分钟"),t[l].lpParkingRealCost&&(t[l].lpParkingRealCost=t[l].lpParkingRealCost+"元");a.tableData=e.data.lincensessData,a.all=e.data.lincenseCountList[0],a.totalRecords=e.data.lincensessTotalRecords}).catch(function(e){console.log("shibai")})},onesearch:function(e){var a=this,t=window.localStorage.getItem("parkId");1==e&&(this.cur_page=1),this.numberer=2,this.itemsr=t;var l=new Date(this.valueAA);this.datetimers=l.getFullYear()+"-"+(l.getMonth()+1)+"-"+l.getDate();var s=new Date(a.valueBB);this.datetimess=s.getFullYear()+"-"+(s.getMonth()+1)+"-"+s.getDate(),this.$axios({url:"http://101.132.105.124:8080/carmanager-TEST/lincensePlatess/selectByTime",method:"post",data:{parkId:a.itemsr,pageNum:a.cur_page,pageSize:a.pagesize,startTime:a.datetimers,endTime:a.datetimess,keyWord:a.select_word}}).then(function(e){console.log(e,"748789789");for(var t=e.data.lincensessData,l=0;l<t.length;l++)t[l].lpParkingCost&&(t[l].lpParkingCost=t[l].lpParkingCost+"元"),t[l].lpParkingOften&&(t[l].lpParkingOften=t[l].lpParkingOften+"分钟"),t[l].lpParkingRealCost&&(t[l].lpParkingRealCost=t[l].lpParkingRealCost+"元");a.tableData=e.data.lincensessData,a.all=e.data.lincenseCountList[0],a.totalRecords=e.data.lincensessTotalRecords}).catch(function(e){console.log(e)})},dateFormatterexpirationTime:function(e,a){var t=e.lpDepartureTime;if(t){t=new Date(t);var l=t.getFullYear()+"-",s=t.getMonth()+1+"-",n=t.getDate(),i=t.getHours()<10?"0"+t.getHours():t.getHours(),r=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),o=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return l+s+n+" "+i+":"+r+":"+o}return""},getnew:function(){console.log(this.value);var e=this;this.$axios({url:"http://101.132.105.124:8080/carmanager-TEST/lincensePlate/selectLincenseByCalendar",method:"post",data:{type:e.value,pageNum:e.cur_page,pageSize:e.pagesize}}).then(function(a){console.log(a.data),e.tableData=a.data.lincenseData,e.totalRecords=a.data.lincenseCountList[0].plate,e.all.price=a.data.lincenseCountList[0].price,e.all.plate=a.data.lincenseCountList[0].plate}).catch(function(e){console.log(e)})},handleSizeChange:function(e){0==this.numberer?(this.pagesize=e,this.getData(1)):1==this.numberer?(this.pagesize=e,this.search(1)):(this.pagesize=e,this.onesearch(1))},handleCurrentChange:function(e){0==this.numberer?(this.cur_page=e,this.getData()):1==this.numberer?(this.cur_page=e,this.search(2)):(this.cur_page=e,this.onesearch(2))},getData:function(e){1==e&&(this.cur_page=1),this.numberer=0;var a=new Date,t=a.getFullYear(),l=a.getMonth()+1,s=a.getDate();l<10&&(l="0"+l),s<10&&(s="0"+s);var n=t+"-"+l+"-"+s;this.valueAA=n,this.valueBB=n;var i=this;this.$axios({url:"http://101.132.105.124:8080/carmanager-TEST/lincensePlatess/selectss",method:"post",data:{pageNum:i.cur_page,pageSize:i.pagesize,parkId:localStorage.getItem("parkId")}}).then(function(e){if(e.status<=200){i.tableData=[];for(var a=e.data.lincensessData,t=0;t<a.length;t++)a[t].lpParkingCost&&(a[t].lpParkingCost=a[t].lpParkingCost+"元"),a[t].lpParkingOften&&(a[t].lpParkingOften=a[t].lpParkingOften+"分钟"),a[t].lpParkingRealCost&&(a[t].lpParkingRealCost=a[t].lpParkingRealCost+"元");i.tableData=e.data.lincensessData,i.totalRecords=e.data.lincensessTotalRecords,console.log(e,"获取所有数据"),i.all=e.data.lincenseCountList[0]}}).catch(function(e){i.$message.error("查询失败: "+e),console.log(e)})},search:function(e){this.numberer=1,1==e&&(this.cur_page=1),this.is_search=!0;var a=this;this.$axios({url:"http://101.132.105.124:8080/carmanager-TEST/lincensePlatess/searchLincense",method:"post",data:{keyWord:a.select_word,pageNum:a.cur_page,pageSize:a.pagesize,parkId:localStorage.getItem("parkId")}}).then(function(e){if(e.status<=200){for(var t=e.data.lincensessData,l=0;l<t.length;l++)t[l].lpParkingCost&&(t[l].lpParkingCost=t[l].lpParkingCost+"元"),t[l].lpParkingOften&&(t[l].lpParkingOften=t[l].lpParkingOften+"分钟"),t[l].lpParkingRealCost&&(t[l].lpParkingRealCost=t[l].lpParkingRealCost+"元");a.tableData=e.data.lincensessData,a.totalRecords=e.data.lincensessTotalRecords,console.log(e),a.all=e.data.lincenseCountList[0]}}).catch(function(e){a.$message.error("查询失败: "+e),console.log(e)})},formatter:function(e,a){return e.address},filterTag:function(e,a){return a.tag===e},handleSelectionChange:function(e){this.multipleSelection=e}}}),i=n,r=(t("d701"),t("bc7c"),t("2877")),o=Object(r["a"])(i,l,s,!1,null,"a87a4ada",null);a["default"]=o.exports},d701:function(e,a,t){"use strict";var l=t("64ae"),s=t.n(l);s.a},fdd0:function(e,a,t){}}]);