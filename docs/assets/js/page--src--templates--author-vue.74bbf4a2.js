(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RQ5U:function(t,e,a){"use strict";a.r(e);a("sMBO");var o=a("+6fq"),r=a("g0NP"),n=a("q+Vw"),s={components:{Pagination:r.a,CardItem:o.a,ContentHeader:n.a},computed:{postLabel:function(){return a("dhqo")("post",this.$page.author.belongsTo.totalCount)}},metaInfo:function(){return{title:this.$page.author.name}}},i=a("KHd+"),l=null,g=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("content-header",{attrs:{image:t.$page.author.cover,staticImage:!1}},[a("div",{staticClass:"text-center text-white bg-gray-800 bg-opacity-50 lg:py-32 md:py-24 sm:py-16 py-8"},[a("div",{staticClass:"w-full"},[a("g-image",{staticClass:"md:h-32 md:w-32 h-24 w-24 rounded-full bg-white border-4 border-white mx-auto",attrs:{src:t.$page.author.image,width:"100",height:"100"}})],1),a("div",{staticClass:"w-full text-center pb-5"},[a("h2",{staticClass:"sm:text-5xl text-3xl font-extrabold"},[t._v(t._s(t.$page.author.name))]),a("p",{staticClass:"sm:text-xl font-sans"},[t._v(t._s(t.$page.author.bio))])]),a("div",{staticClass:"w-full text-center"},[t._v("\n        "+t._s(t.$page.author.belongsTo.totalCount)+" "+t._s(t.postLabel)+"\n         • \n        "),a("a",{staticClass:"text-gray-400 hover:text-white",attrs:{href:t.$page.author.facebook,target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome",{attrs:{icon:["fab","facebook"]}})],1),t._v("\n         \n        "),a("a",{staticClass:"text-gray-400 hover:text-white",attrs:{href:t.$page.author.twitter,target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome",{attrs:{icon:["fab","twitter"]}})],1),t._v("\n         \n        "),a("a",{staticClass:"text-gray-400 hover:text-white",attrs:{href:t.$page.author.linkedin,target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome",{attrs:{icon:["fab","linkedin"]}})],1)])])]),a("div",{staticClass:"container mx-auto"},[a("div",{staticClass:"flex flex-wrap my-4"},t._l(t.$page.author.belongsTo.edges,(function(t){return a("CardItem",{key:t.node.id,attrs:{record:t.node}})})),1),a("div",{staticClass:"pagination flex justify-center mb-8"},[t.$page.author.belongsTo.pageInfo.totalPages>1?a("Pagination",{attrs:{baseUrl:t.$page.author.path,currentPage:t.$page.author.belongsTo.pageInfo.currentPage,totalPages:t.$page.author.belongsTo.pageInfo.totalPages,maxVisibleButtons:5}}):t._e()],1)])],1)}),[],!1,null,null,null);"function"==typeof l&&l(g);e.default=g.exports}}]);