(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13bb99b0"],{"2d34":function(t,e,n){},"2f15":function(t,e,n){"use strict";var a=n("2d34"),s=n.n(a);s.a},5438:function(t,e,n){},e0c8:function(t,e,n){"use strict";var a=n("5438"),s=n.n(a);s.a},f438:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"already-owned-container"},[n("finalize-modal",{ref:"finalizeModal",attrs:{"domain-name":t.domainName,finalize:t.finalize}}),n("h3",[t._v(t._s(t.domainName)+"."+t._s(t.tld)+" "+t._s(t.$t("dapps.alreadyOwned"))+".")]),n("div",{staticClass:"content-container"},[n("p",{staticClass:"label"},[t._v("\n      "+t._s(t.$t("dapps.labelHash"))+"("+t._s(t.domainName)+"."+t._s(t.tld)+"):\n    ")]),n("p",{staticClass:"content"},[t._v(t._s(t.labelHash))])]),n("div",{staticClass:"content-container"},[n("p",{staticClass:"label"},[t._v(t._s(t.$t("dapps.nameHash"))+"("+t._s(t.domainName)+"):")]),n("p",{staticClass:"content"},[t._v(t._s(t.nameHash))])]),n("div",{staticClass:"content-container"},[n("p",{staticClass:"label"},[t._v(t._s(t.$t("dapps.owner"))+":")]),n("p",{staticClass:"content"},[t._v(t._s(t.owner))])]),"0x"!=t.deedOwner?n("div",{staticClass:"content-container"},[n("p",{staticClass:"label"},[t._v(t._s(t.$t("dapps.deedOwner"))+":")]),n("p",{staticClass:"content"},[t._v(t._s(t.deedOwner))])]):t._e(),n("div",{staticClass:"content-container"},[n("p",{staticClass:"label"},[t._v(t._s(t.$t("dapps.resolverAddr"))+":")]),n("p",{staticClass:"content"},[t._v(t._s(t.resolverAddress))])]),n("div",{staticClass:"owner-options"},[t.deedOwner===t.account.address&&"0x0000000000000000000000000000000000000000"===t.owner?n("button",{staticClass:"finalize-button",on:{click:t.openFinalizeModal}},[t._v("\n      "+t._s(t.$t("dapps.finalize"))+"\n    ")]):t._e(),t.owner.toLowerCase()===t.account.address.toLowerCase()?n("button",{staticClass:"manage-button",on:{click:t.manageEns}},[t._v("\n      "+t._s(t.$t("dapps.manage"))+"\n    ")]):t._e()]),n("interface-bottom-text",{attrs:{"link-text":t.$t("interface.helpCenter"),question:t.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)},s=[],i=n("cebc"),o=n("539d"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-modal",{ref:"finalize",staticClass:"bootstrap-modal-wide nopadding finalize-modal",attrs:{title:t.$t("dapps.finalize"),"hide-footer":"",centered:""}},[n("div",{staticClass:"finalize-modal-container"},[n("h3",[t._v("\n        "+t._s(t.$t("dapps.areYouFinalizing"))+" "),n("br"),t._v("\n        "+t._s(t.domainName)+".eth "+t._s(t.$t("dapps.areYouFinalizingCont"))+"\n      ")]),n("div",{staticClass:"button-container"},[n("button",{staticClass:"cancel",on:{click:t.close}},[t._v("\n          "+t._s(t.$t("common.cancel"))+"\n        ")]),n("button",{staticClass:"confirm",on:{click:t.finalize}},[t._v("\n          "+t._s(t.$t("dapps.confirm"))+"\n        ")])]),n("p",[t._v("\n        "+t._s(t.$t("dapps.nodeProvider"))+"\n        "),n("a",{attrs:{href:t.network.url,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.network.service))])])])])],1)},c=[],r=n("2f62"),d={props:{finalize:{type:Function,default:function(){}},domainName:{type:String,default:""}},computed:Object(i["a"])({},Object(r["b"])({network:"network"})),methods:{close:function(){this.$refs.finalize.hide()}}},p=d,f=(n("2f15"),n("2877")),u=Object(f["a"])(p,l,c,!1,null,"2117ffdc",null),_=u.exports,m={components:{"interface-bottom-text":o["a"],"finalize-modal":_},props:{labelHash:{type:String,default:""},nameHash:{type:String,default:""},owner:{type:String,default:""},deedOwner:{type:String,default:""},resolverAddress:{type:String,default:""},domainName:{type:String,default:""},tld:{type:String,default:""},finalize:{type:Function,default:function(){}}},data:function(){return{}},computed:Object(i["a"])({},Object(r["b"])({account:"account"})),mounted:function(){""===this.domainName&&this.$router.push("/interface/dapps/register-domain")},methods:{openFinalizeModal:function(){this.$refs.finalizeModal.$refs.finalize.show()},manageEns:function(){this.$router.push("manage")}}},v=m,b=(n("e0c8"),Object(f["a"])(v,a,s,!1,null,"1856533c",null)),h=b.exports;n.d(e,"default",function(){return h})}}]);
//# sourceMappingURL=chunk-13bb99b0.48628432.js.map