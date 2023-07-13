"use strict";(self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[]).push([[498],{3498:function(e,s,r){r.r(s),r.d(s,{default:function(){return $}});var a=r(3396),t=r(7139),o=r(9242);const i=e=>((0,a.dD)("data-v-341933cb"),e=e(),(0,a.Cn)(),e),l={class:""},n={class:"login_bg"},d={class:"d-flex justify-content-center align-items-center h-100"},m={class:"card"},c=i((()=>(0,a._)("div",{class:"card-header"},[(0,a._)("h3",null,"Sign In"),(0,a._)("div",{class:"d-flex justify-content-end social_icon"},[(0,a._)("span",null,[(0,a._)("i",{class:"fab fa-google-plus-square"})])])],-1))),u={class:"card-body"},p={class:"input-group form-group mb-2"},f=i((()=>(0,a._)("div",{class:"input-group-prepend"},[(0,a._)("i",{class:"fas fa-user"})],-1))),g={class:"input-group form-group"},h=i((()=>(0,a._)("div",{class:"input-group-prepend"},[(0,a._)("i",{class:"fas fa-key"})],-1))),v={class:"mt-2 d-flex gap-1 align-items-center justify-content-end me-2"},b=i((()=>(0,a._)("label",{for:"remember",class:"text-white"},"Remember Me",-1))),w=i((()=>(0,a._)("div",{class:"form-group text-center mt-5"},[(0,a._)("input",{type:"submit",value:"Login",class:"btn float-right login_btn"})],-1))),_=i((()=>(0,a._)("div",{class:"card-footer"},[(0,a._)("div",{class:"d-flex justify-content-center links"},[(0,a.Uk)(" Don't have an account?"),(0,a._)("a",{style:{"text-shadow":"0 2px 5px #fff"},href:"#"},"Sign Up")])],-1)));function x(e,s,r,i,x,y){const k=(0,a.up)("Loading"),I=(0,a.up)("Header"),S=(0,a.up)("Field"),M=(0,a.up)("error-message"),C=(0,a.up)("Form"),W=(0,a.up)("Footer");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(k,{active:x.isLoading},null,8,["active"]),(0,a.Wm)(I,{"is-login":e.isLogin},null,8,["is-login"]),(0,a._)("div",n,[(0,a._)("div",d,[(0,a._)("div",m,[c,(0,a._)("div",u,[(0,a.Wm)(C,{onSubmit:y.signIn},{default:(0,a.w5)((({errors:e})=>[(0,a._)("div",p,[f,(0,a.Wm)(S,{type:"text",name:"email",class:(0,t.C_)(["form-control rounded-3",{"is-invalid":e["email"],"is-valid":!e["email"]&&x.user.username}]),placeholder:"請輸入 Email",rules:"email|required",autofocus:"",modelValue:x.user.username,"onUpdate:modelValue":s[0]||(s[0]=e=>x.user.username=e)},null,8,["class","modelValue"]),(0,a.Wm)(M,{name:"email",class:"invalid-feedback ms-5",style:{"text-shadow":"0 2px 5px #fff"}})]),(0,a._)("div",g,[h,(0,a.Wm)(S,{type:"password",name:"密碼",id:"password",class:(0,t.C_)(["form-control rounded-3",{"is-invalid":e["密碼"],"is-valid":!e["密碼"]}]),placeholder:"password",required:"",modelValue:x.user.password,"onUpdate:modelValue":s[1]||(s[1]=e=>x.user.password=e),maxlength:"20",rules:y.validatePassword},null,8,["modelValue","rules","class"]),(0,a.Wm)(M,{name:"密碼",class:"invalid-feedback ms-5",style:{"text-shadow":"0 2px 5px #fff"}})]),(0,a._)("div",v,[(0,a.wy)((0,a._)("input",{id:"remember",type:"checkbox","onUpdate:modelValue":s[2]||(s[2]=e=>x.rememberMe=e)},null,512),[[o.e8,x.rememberMe]]),b]),w])),_:1},8,["onSubmit"])]),_])])]),(0,a.Wm)(W)])}var y=r(3114),k=r(555),I=r(9806),S=r(5820),M={mixins:[I.Z],components:{Header:y.Z,Footer:k.Z},provide(){return{emitter:S.Z}},data(){return{user:{username:"",password:""},isLoading:!1,rememberMe:!1}},created(){this.checkRemember()},watch:{rememberMe(){this.rememberMe?this.$swal.fire({title:"Are you sure remember it?",text:" Please verify and correct it if necessary!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, do it!"}).then((e=>{e.isConfirmed&&(this.$swal.fire("Remember!","Your password has been saved.","success"),localStorage.setItem("username",this.user.username),localStorage.setItem("password",this.user.password),localStorage.setItem("rememberMe",!0))})):(localStorage.removeItem("username"),localStorage.removeItem("password"),localStorage.removeItem("rememberMe"))}},methods:{signIn(){const e="https://vue3-course-api.hexschool.io/admin/signin";this.$http.post(e,this.user).then((e=>{if(this.isLoading=!0,e.data.success){this.isLoading=!1;const{token:s,expired:r}=e.data;document.cookie=`hexToken=${s}; expires=${new Date(r)}`,this.$router.go(-1)}else this.$swal.fire("Incorrect"," username or password.","warning")}))},validatePassword(e){const s=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;return!!s.test(e)||"密碼需包含英文大小寫和數字，且超過十位數以上"},checkRemember(){"true"===localStorage.getItem("rememberMe")&&(this.rememberMe=!0,this.user.username=localStorage.getItem("username"),this.user.password=localStorage.getItem("password"))}}},C=r(89);const W=(0,C.Z)(M,[["render",x],["__scopeId","data-v-341933cb"]]);var $=W}}]);
//# sourceMappingURL=498.bca539f7.js.map