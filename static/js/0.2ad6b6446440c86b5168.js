webpackJsonp([0],[,,,,,,,,,,,,,,,function(t,n,e){function o(t){e(28)}var s=e(4)(e(19),e(34),o,null,null);t.exports=s.exports},function(t,n,e){"use strict";function o(t,n){return t+(1===t?" "+n:" "+n+"s")}function s(t){return/^item\?id=\d+/i.test(t)}n.a=o,n.b=s},,,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(30),s=e.n(o);n.default={name:"home",components:{PostsList:s.a},data:function(){return{posts:[],type:this.$route.name,page:this.$route.params.page?parseInt(this.$route.params.page,10):1,hasMore:!0}},computed:{start:function(){return 30*(this.page-1)+1}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;fetch("https://node-hnapi.herokuapp.com/"+this.type+"?page="+this.page).then(function(t){if(t.ok)return t.json();throw new Error("Network response was not ok")}).then(function(n){t.posts=n,t.hasMore=30===n.length}).catch(function(t){return console.error(t)})}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(16);n.default={name:"posts-list",props:{posts:{type:Array,default:function(){return[]}},start:{type:Number,default:function(){return 1}}},methods:{pluralize:o.a,isShortUrl:o.b}}},function(t,n,e){n=t.exports=e(12)(!0),n.push([t.i,".list-item{padding:15px 10px}.post-title{font-size:16px;color:#333}.comment-link{color:inherit}.comment-link:hover{color:#4dba87}","",{version:3,sources:["/home/anubhav/mygithub/hnpwa-vue/src/components/PostsList.vue"],names:[],mappings:"AACA,WACE,iBAAmB,CACpB,AACD,YACE,eAAgB,AAChB,UAAY,CACb,AACD,cACE,aAAe,CAChB,AACD,oBACE,aAAe,CAChB",file:"PostsList.vue",sourcesContent:["\n.list-item {\n  padding: 15px 10px;\n}\n.post-title {\n  font-size: 16px;\n  color: #333;\n}\n.comment-link {\n  color: inherit;\n}\n.comment-link:hover {\n  color: #4dba87;\n}\n"],sourceRoot:""}])},,,function(t,n,e){n=t.exports=e(12)(!0),n.push([t.i,".main{margin-top:100px;background:#fff;margin-bottom:12px;overflow:hidden}.pagination{position:fixed;top:49px;left:0;right:0;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.18);text-align:center;z-index:5}.pagination-link{padding:8px 12px;display:inline-block;font-size:16px}.disabled{color:#ccc}.no-overflow{overflow:hidden}","",{version:3,sources:["/home/anubhav/mygithub/hnpwa-vue/src/components/Home.vue"],names:[],mappings:"AACA,MACE,iBAAkB,AAClB,gBAAiB,AACjB,mBAAoB,AACpB,eAAiB,CAClB,AACD,YACE,eAAgB,AAChB,SAAU,AACV,OAAQ,AACR,QAAS,AACT,gBAAiB,AACjB,qCAA0C,AAC1C,kBAAmB,AACnB,SAAW,CACZ,AACD,iBACE,iBAAkB,AAClB,qBAAsB,AACtB,cAAgB,CACjB,AACD,UACE,UAAY,CACb,AACD,aACE,eAAiB,CAClB",file:"Home.vue",sourcesContent:["\n.main {\n  margin-top: 100px;\n  background: #fff;\n  margin-bottom: 12px;\n  overflow: hidden;\n}\n.pagination {\n  position: fixed;\n  top: 49px;\n  left: 0;\n  right: 0;\n  background: #fff;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);\n  text-align: center;\n  z-index: 5;\n}\n.pagination-link {\n  padding: 8px 12px;\n  display: inline-block;\n  font-size: 16px;\n}\n.disabled {\n  color: #ccc;\n}\n.no-overflow {\n  overflow: hidden;\n}\n"],sourceRoot:""}])},function(t,n,e){var o=e(21);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(13)("0153ba42",o,!0)},,,function(t,n,e){var o=e(24);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(13)("822733f2",o,!0)},,function(t,n,e){function o(t){e(25)}var s=e(4)(e(20),e(31),o,null,null);t.exports=s.exports},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ol",{attrs:{start:t.start}},t._l(t.posts,function(n){return e("li",{staticClass:"list-item"},[t.isShortUrl(n.url)?e("router-link",{staticClass:"post-title",attrs:{to:{name:"commentsList",params:{id:n.id}}}},[t._v("\n      "+t._s(n.title)+"\n    ")]):e("a",{staticClass:"post-title",attrs:{href:n.url,target:"_blank",rel:"noopener"}},[t._v("\n      "+t._s(n.title)+"\n    ")]),t._v(" "),n.domain?e("span",{staticClass:"txt-grey"},[t._v("\n      ("+t._s(n.domain)+")\n    ")]):t._e(),t._v(" "),e("div",{staticClass:"txt-grey"},[null!==n.points?e("span",[t._v("\n        "+t._s(t.pluralize(n.points,"point"))+"\n      ")]):t._e(),t._v(" "),n.user?e("span",[t._v("by "),e("b",[t._v(t._s(n.user))])]):t._e(),t._v(" "),e("span",[t._v(t._s(n.time_ago)+" |")]),t._v(" "),e("router-link",{staticClass:"comment-link",attrs:{to:{name:"commentsList",params:{id:n.id}}}},[t._v("\n        "+t._s(t.pluralize(n.comments_count,"comment"))+"\n      ")])],1)],1)}))},staticRenderFns:[]}},,,function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main"},[e("div",{staticClass:"pagination"},[t.page>1?e("router-link",{staticClass:"pagination-link",attrs:{to:"/"+t.type+"/"+(t.page-1)}},[t._v("\n      < Prev\n    ")]):e("a",{staticClass:"pagination-link disabled"},[t._v("< Prev")]),t._v(" "),t.hasMore?e("router-link",{staticClass:"pagination-link",attrs:{to:"/"+t.type+"/"+(t.page+1)}},[t._v("\n      Next >\n    ")]):e("a",{staticClass:"pagination-link disabled"},[t._v("Next >")])],1),t._v(" "),t.posts.length?t._e():e("div",{staticClass:"loader"}),t._v(" "),e("posts-list",{attrs:{posts:t.posts,start:t.start}})],1)},staticRenderFns:[]}}]);
//# sourceMappingURL=0.2ad6b6446440c86b5168.js.map