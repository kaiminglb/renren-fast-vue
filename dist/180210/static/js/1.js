webpackJsonp([1,7],{"5zde":function(e,t,a){a("zQR9"),a("qyJz"),e.exports=a("FeBl").Array.from},"6olT":function(e,t,a){"use strict";var n=a("dXij"),r=a.n(n),o=a("c/Tr"),l=a.n(o),i=a("7+uW");function s(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=[];return l()(e).forEach(function(e){void 0===e._expanded&&i.default.set(e,"_expanded",t);var o=1;if(null!=n&&(o=n+1),i.default.set(e,"_level",o),a&&i.default.set(e,"parent",a),r.push(e),e.children&&e.children.length>0){var l=s(e.children,t,e,o);r=r.concat(l)}}),r}var d={name:"treeTable",props:{data:{type:[Array,Object],required:!0},columns:{type:Array,default:function(){return[]}},evalFunc:Function,evalArgs:Array,expandAll:{type:Boolean,default:!1}},computed:{formatData:function(){var e=void 0;e=Array.isArray(this.data)?this.data:[this.data];var t=this.evalFunc||s,a=this.evalArgs?r()([e],this.evalArgs):[e,this.expandAll];return t.apply(null,a)}},methods:{showRow:function(e){var t=!e.row.parent||e.row.parent._expanded&&e.row.parent._show;return e.row._show=t,t?"":"display:none;"},toggleExpanded:function(e){var t=this.formatData[e];t._expanded=!t._expanded},iconShow:function(e,t){return 0===e&&t.children&&t.children.length>0}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-table",e._b({attrs:{data:e.formatData,"row-style":e.showRow}},"el-table",e.$attrs,!1),[0===e.columns.length?a("el-table-column",{attrs:{width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._l(t.row._level,function(e){return a("span",{key:e,staticClass:"ms-tree-space"})}),e._v(" "),e.iconShow(0,t.row)?a("span",{staticClass:"tree-ctrl",on:{click:function(a){e.toggleExpanded(t.$index)}}},[t.row._expanded?a("i",{staticClass:"el-icon-arrow-down"}):a("i",{staticClass:"el-icon-arrow-right"})]):e._e(),e._v("\n      "+e._s(t.$index)+"\n    ")]}}])}):e._l(e.columns,function(t,n){return a("el-table-column",{key:t.value,attrs:{label:t.text,width:t.width,"header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(r){return[e._l(r.row._level,function(t){return 0===n?a("span",{key:t,staticClass:"ms-tree-space"}):e._e()}),e._v(" "),e.iconShow(n,r.row)?a("span",{staticClass:"tree-ctrl",on:{click:function(t){e.toggleExpanded(r.$index)}}},[r.row._expanded?a("i",{staticClass:"el-icon-arrow-down"}):a("i",{staticClass:"el-icon-arrow-right"})]):e._e(),e._v("\n      "+e._s(r.row[t.value])+"\n    ")]}}])})}),e._v(" "),e._t("default")],2)},staticRenderFns:[]};var c=a("VU/8")(d,u,!1,function(e){a("p2pY")},"data-v-237a28c5",null);t.a=c.exports},"E/TR":function(e,t){e.exports=function(){return Function.call.apply(Array.prototype.concat,arguments)}},NJR2:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,'\n.ms-tree-space[data-v-237a28c5] {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1;\n  width: 18px;\n  height: 14px;\n}\n.ms-tree-space[data-v-237a28c5]::before {\n    content: "";\n}\n.processContainer[data-v-237a28c5] {\n  width: 100%;\n  height: 100%;\n}\ntable td[data-v-237a28c5] {\n  line-height: 26px;\n}\n.tree-ctrl[data-v-237a28c5] {\n  position: relative;\n  cursor: pointer;\n  margin-left: -18px;\n}\n',""])},"P5+K":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("gyMJ"),r=a("0xDb"),o={data:function(){var e=this;return{visible:!1,dataForm:{id:0,type:1,name:"",parentId:0,parentName:"",url:"",perms:"",orderNum:0,icon:""},dataRule:{name:[{required:!0,message:"菜单名称不能为空",trigger:"blur"}],parentName:[{required:!0,message:"上级菜单不能为空",trigger:"change"}],url:[{validator:function(t,a,n){1!==e.dataForm.type||/\S/.test(a)?n():n(new Error("菜单URL不能为空"))},trigger:"blur"}]},menuList:[],menuListTreeProps:{label:"name",children:"children"}}},methods:{init:function(e){var t=this;this.dataForm.id=e||0,n.a.menu.select().then(function(e){var a=e.data;t.menuList=Object(r.c)(a.menuList,"menuId")}).then(function(){t.visible=!0,t.$nextTick(function(){t.$refs.dataForm.resetFields()})}).then(function(){t.dataForm.id?n.a.menu.info(t.dataForm.id).then(function(e){var a=e.data;t.dataForm.id=a.menu.menuId,t.dataForm.type=a.menu.type,t.dataForm.name=a.menu.name,t.dataForm.parentId=a.menu.parentId,t.dataForm.url=a.menu.url,t.dataForm.perms=a.menu.perms,t.dataForm.orderNum=a.menu.orderNum,t.dataForm.icon=a.menu.icon,t.menuListTreeSetCurrentNode()}):t.menuListTreeSetCurrentNode()})},menuListTreeCurrentChangeHandle:function(e,t){this.dataForm.parentId=e.menuId,this.dataForm.parentName=e.name},menuListTreeSetCurrentNode:function(){this.$refs.menuListTree.setCurrentKey(this.dataForm.parentId),this.dataForm.parentName=(this.$refs.menuListTree.getCurrentNode()||{}).name},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){if(t){var a={menuId:e.dataForm.id||void 0,type:e.dataForm.type,name:e.dataForm.name,parentId:e.dataForm.parentId,url:e.dataForm.url,perms:e.dataForm.perms,orderNum:e.dataForm.orderNum,icon:e.dataForm.icon};(e.dataForm.id?n.a.menu.update(a):n.a.menu.add(a)).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})}})}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-radio-group",{model:{value:e.dataForm.type,callback:function(t){e.$set(e.dataForm,"type",t)},expression:"dataForm.type"}},[a("el-radio",{attrs:{label:0}},[e._v("目录")]),e._v(" "),a("el-radio",{attrs:{label:1}},[e._v("菜单")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("按钮")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"菜单名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"菜单名称或按钮名称"},model:{value:e.dataForm.name,callback:function(t){e.$set(e.dataForm,"name",t)},expression:"dataForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"上级菜单",prop:"parentName"}},[a("el-popover",{ref:"menuListPopover",attrs:{placement:"bottom-end",trigger:"click"}},[a("el-tree",{ref:"menuListTree",attrs:{data:e.menuList,props:e.menuListTreeProps,"node-key":"menuId","default-expand-all":!0,"highlight-current":!0,"expand-on-click-node":!1},on:{"current-change":e.menuListTreeCurrentChangeHandle}})],1),e._v(" "),a("el-input",{directives:[{name:"popover",rawName:"v-popover:menuListPopover",arg:"menuListPopover"}],staticClass:"menu-list__input",attrs:{readonly:!0,placeholder:"点击选择上级菜单"},model:{value:e.dataForm.parentName,callback:function(t){e.$set(e.dataForm,"parentName",t)},expression:"dataForm.parentName"}})],1),e._v(" "),1===e.dataForm.type?a("el-form-item",{attrs:{label:"菜单URL",prop:"url"}},[a("el-input",{attrs:{placeholder:"菜单URL"},model:{value:e.dataForm.url,callback:function(t){e.$set(e.dataForm,"url",t)},expression:"dataForm.url"}})],1):e._e(),e._v(" "),0!==e.dataForm.type?a("el-form-item",{attrs:{label:"授权标识",prop:"perms"}},[a("el-input",{attrs:{placeholder:"多个用逗号分隔, 如: user:list,user:create"},model:{value:e.dataForm.perms,callback:function(t){e.$set(e.dataForm,"perms",t)},expression:"dataForm.perms"}})],1):e._e(),e._v(" "),2!==e.dataForm.type?a("el-form-item",{attrs:{label:"排序号",prop:"orderNum"}},[a("el-input-number",{attrs:{"controls-position":"right",min:0,label:"排序号"},model:{value:e.dataForm.orderNum,callback:function(t){e.$set(e.dataForm,"orderNum",t)},expression:"dataForm.orderNum"}})],1):e._e(),e._v(" "),2!==e.dataForm.type?a("el-form-item",{attrs:{label:"菜单图标",prop:"icon"}},[a("el-row",[a("el-col",{attrs:{span:22}},[a("el-input",{attrs:{placeholder:"菜单图标"},model:{value:e.dataForm.icon,callback:function(t){e.$set(e.dataForm,"icon",t)},expression:"dataForm.icon"}})],1),e._v(" "),a("el-col",{staticClass:"icon-tips",attrs:{span:2}},[a("el-tooltip",{attrs:{placement:"top",effect:"light"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("span",[e._v("获取图标: ")]),a("br"),e._v("\n              1. 暂时兼容旧版引入使用 "),a("a",{attrs:{href:"//fontawesome.io/icons/",target:"_blank"}},[e._v("fontawesome")]),a("br"),e._v("\n              2. 之后统一全站修改使用 "),a("a",{attrs:{href:"//github.com/daxiongYang/renren-fast-vue/blob/master/src/iconfont/index.js",target:"_blank"}},[e._v("iconfont")])]),e._v(" "),a("i",{staticClass:"el-icon-warning"})])],1)],1)],1):e._e()],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]};var i=a("VU/8")(o,l,!1,function(e){a("dXH5")},null,null);t.default=i.exports},amtY:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.mod-menu .menu-list__input > .el-input__inner {\n  cursor: pointer;\n}\n.mod-menu .icon-tips {\n  font-size: 18px;\n  text-align: center;\n  color: #e6a23c;\n  cursor: pointer;\n}\n",""])},"c/Tr":function(e,t,a){e.exports={default:a("5zde"),__esModule:!0}},dXH5:function(e,t,a){var n=a("amtY");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("96661f0a",n,!0)},dXij:function(e,t,a){e.exports={default:a("E/TR"),__esModule:!0}},fBQ2:function(e,t,a){"use strict";var n=a("evD5"),r=a("X8DO");e.exports=function(e,t,a){t in e?n.f(e,t,r(0,a)):e[t]=a}},p2pY:function(e,t,a){var n=a("NJR2");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("c0ab360c",n,!0)},qyJz:function(e,t,a){"use strict";var n=a("+ZMJ"),r=a("kM2E"),o=a("sB3e"),l=a("msXi"),i=a("Mhyx"),s=a("QRG4"),d=a("fBQ2"),u=a("3fs2");r(r.S+r.F*!a("dY0y")(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,r,c,m=o(e),p="function"==typeof this?this:Array,f=arguments.length,v=f>1?arguments[1]:void 0,h=void 0!==v,_=0,g=u(m);if(h&&(v=n(v,f>2?arguments[2]:void 0,2)),null==g||p==Array&&i(g))for(a=new p(t=s(m.length));t>_;_++)d(a,_,h?v(m[_],_):m[_]);else for(c=g.call(m),a=new p;!(r=c.next()).done;_++)d(a,_,h?l(c,v,[r.value,_],!0):r.value);return a.length=_,a}})},sS1m:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("6olT"),r=a("P5+K"),o=a("gyMJ"),l=a("0xDb"),i={data:function(){return{dataForm:{},treeTableColumns:[{text:"ID",value:"menuId",width:"120"}],dataList:[],dataListLoading:!1,addOrUpdateVisible:!1}},components:{TreeTable:n.a,AddOrUpdate:r.default},activated:function(){this.getDataList()},methods:{getDataList:function(){var e=this;this.dataListLoading=!0,o.a.menu.list().then(function(t){var a=t.data;e.dataList=Object(l.c)(a,"menuId"),e.dataListLoading=!1})},addOrUpdateHandle:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},deleteHandle:function(e){var t=this;this.$confirm("确定对[id="+e+"]进行[删除]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){o.a.menu.del(e).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(a.msg)})})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-menu"},[a("el-form",{attrs:{inline:!0,model:e.dataForm}},[a("el-form-item",[e.isAuth("sys:user:save")?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addOrUpdateHandle()}}},[e._v("新增")]):e._e()],1)],1),e._v(" "),a("tree-table",{staticStyle:{width:"100%"},attrs:{columns:e.treeTableColumns,data:e.dataList,border:""}},[a("el-table-column",{attrs:{prop:"name","header-align":"center",align:"center",label:"菜单名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"parentName","header-align":"center",align:"center",label:"上级菜单"}}),e._v(" "),a("el-table-column",{attrs:{prop:"icon","header-align":"center",align:"center",label:"图标"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("i",{class:["fa-lg",e.row.icon]})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"type","header-align":"center",align:"center",label:"类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.type?a("el-tag",{attrs:{size:"small"}},[e._v("目录")]):1===t.row.type?a("el-tag",{attrs:{size:"small",type:"success"}},[e._v("菜单")]):2===t.row.type?a("el-tag",{attrs:{size:"small",type:"info"}},[e._v("按钮")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"orderNum","header-align":"center",align:"center",label:"排序号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"url","header-align":"center",align:"center",width:"150","show-overflow-tooltip":!0,label:"菜单URL"}}),e._v(" "),a("el-table-column",{attrs:{prop:"perms","header-align":"center",align:"center",width:"150","show-overflow-tooltip":!0,label:"授权标识"}}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",width:"200",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.isAuth("sys:user:update")?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.addOrUpdateHandle(t.row.menuId)}}},[e._v("修改")]):e._e(),e._v(" "),e.isAuth("sys:user:delete")?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.deleteHandle(t.row.menuId)}}},[e._v("删除")]):e._e()]}}])})],1),e._v(" "),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e()],1)},staticRenderFns:[]},d=a("VU/8")(i,s,!1,null,null,null);t.default=d.exports}});