import{d as s,m as n,b as o,n as c}from"./index-eadd045c.js";const r=s("user",{state:()=>({author:"Leedom"}),getters:{name:a=>a.author.toLocaleLowerCase()+"92",github(){return`https://github.com/${this.name}`},homepage(){return`${this.github}/vue-h5-template`}},actions:{changeName(){alert(`Hello! I'm ${this.author}.`)}}}),_=""+new URL("logo-f1731ab9.png",import.meta.url).href;const i={name:"CenterComponent",components:{},mixins:[],props:{},data(){return{}},computed:{...n(r,["author","github","homepage"])},watch:{},created(){},mounted(){},methods:{...o(r,["changeName"])}};var m=function(){var e=this,t=e._self._c;return t("div",{staticClass:"center"},[t("div",{staticClass:"flex flex-col justify-center items-center min-h-screen"},[t("img",{staticClass:"w-20",attrs:{src:_,alt:""}}),t("h2",{staticClass:"p-4 text-gray-800"},[e._v("VUE H5 开发模版")]),t("p",{staticClass:"text-center text-gray-500"},[e._v(" 项目地址："),t("a",{attrs:{href:e.homepage,target:"_blank",rel:"noopener noreferrer"}},[e._v(e._s(e.homepage))])]),t("p",{staticClass:"text-gray-500 p-4"},[t("span",{on:{click:e.changeName}},[e._v("项目作者")]),e._v("： "),t("a",{attrs:{href:e.github,target:"_blank",rel:"noopener noreferrer"}},[e._v(e._s(e.author))])])])])},l=[],h=c(i,m,l,!1,null,"fa848c97",null,null);const u=h.exports;export{u as default};