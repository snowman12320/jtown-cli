"use strict";(self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[]).push([[513],{7513:function(t,e,r){r.r(e),r.d(e,{default:function(){return E}});var l=r(3396),s=r(9242),a=r(7139),n=r(4682),d=r(8346),i=r(135);const o=(0,l.uE)('<div class="row content container mx-auto mt-3"><section class="mx-auto"><div class="d-flex justify-content-center my-5"><img height="130" src="'+n+'" alt=""><img class="" height="130" src="'+d+'" alt=""><img class="" height="130" src="'+i+'" alt=""></div><p class="text-center">訂單已完成！</p><p class="text-center"> 付款完成後，會盡快為您安排出貨！</p></section></div>',1),u={class:"my-5 row justify-content-center"},c={class:"table align-middle"},_=(0,l._)("thead",null,[(0,l._)("th",null,"品名"),(0,l._)("th",null,"數量"),(0,l._)("th",null,"單價")],-1),h={class:"text-end"},p=(0,l._)("td",{colspan:"2",class:"text-end"},"總計",-1),g={class:"text-end"},w={class:"table"},m=(0,l._)("th",{width:"100"},"訂單時間",-1),f=(0,l._)("th",{width:"100"},"Email",-1),y=(0,l._)("th",null,"姓名",-1),v=(0,l._)("th",null,"收件人電話",-1),b=(0,l._)("th",null,"收件人地址",-1),x=(0,l._)("th",null,"付款狀態",-1),k={key:0},z={key:1,class:"text-success"},D={key:0},$=(0,l._)("th",null,"付款時間",-1),O={key:0,class:"text-end"},I=(0,l._)("button",{class:"btn btn-danger"},"確認付款去",-1),L=[I];function j(t,e,r,n,d,i){const I=(0,l.up)("Loading");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(I,{active:d.isLoading},null,8,["active"]),o,(0,l._)("div",u,[(0,l._)("form",{class:"col-md-6",onSubmit:e[0]||(e[0]=(0,s.iM)(((...t)=>i.payOrder&&i.payOrder(...t)),["prevent"]))},[(0,l._)("table",c,[_,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(d.order.products,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id},[(0,l._)("td",null,(0,a.zw)(e.product.title),1),(0,l._)("td",null,(0,a.zw)(e.qty)+"/"+(0,a.zw)(e.product.unit),1),(0,l._)("td",h,"$ "+(0,a.zw)(t.$filters.currency(Math.round(e.final_total))),1)])))),128))]),(0,l._)("tfoot",null,[(0,l._)("tr",null,[p,(0,l._)("td",g,"$ "+(0,a.zw)(t.$filters.currency(Math.round(d.order.total))),1)])])]),(0,l._)("table",w,[(0,l._)("tbody",null,[(0,l._)("tr",null,[m,(0,l._)("td",null,(0,a.zw)(d.create_at),1)]),(0,l._)("tr",null,[f,(0,l._)("td",null,(0,a.zw)(d.order.user.email),1)]),(0,l._)("tr",null,[y,(0,l._)("td",null,(0,a.zw)(d.order.user.name),1)]),(0,l._)("tr",null,[v,(0,l._)("td",null,(0,a.zw)(d.order.user.tel),1)]),(0,l._)("tr",null,[b,(0,l._)("td",null,(0,a.zw)(d.order.user.address),1)]),(0,l._)("tr",null,[x,(0,l._)("td",null,[d.order.is_paid?((0,l.wg)(),(0,l.iD)("span",z,"付款完成")):((0,l.wg)(),(0,l.iD)("span",k,"尚未付款"))])]),d.order.is_paid?((0,l.wg)(),(0,l.iD)("tr",D,[$,(0,l._)("td",null,(0,a.zw)(d.paid_date),1)])):(0,l.kq)("",!0)])]),!1===d.order.is_paid?((0,l.wg)(),(0,l.iD)("div",O,L)):(0,l.kq)("",!0)],32)])],64)}var q=r(9806),M={mixins:[q.Z],inject:["emitter"],data(){return{order:{user:{}},orderId:"",isLoading:!1,paid_date:"",create_at:""}},methods:{getOrder(){const t=`https://vue3-course-api.hexschool.io/api/william-api/order/${this.orderId}`;this.$http.get(t).then((t=>{t.data.success&&(this.order=t.data.order,this.create_at=new Date(1e3*this.order.create_at).toLocaleString(),this.paid_date=new Date(1e3*this.order.paid_date).toLocaleString())}))},payOrder(){const t=`https://vue3-course-api.hexschool.io/api/william-api/pay/${this.orderId}`;this.$http.post(t).then((t=>{t.data.success&&this.getOrder()}))}},created(){this.orderId=this.$route.params.orderId,this.getOrder()}},S=r(89);const C=(0,S.Z)(M,[["render",j]]);var E=C},8346:function(t,e,r){t.exports=r.p+"img/1506074059.98f9580a.svg"},4682:function(t,e,r){t.exports=r.p+"img/1588928235basketball-fire-logo-silhouette-freesvg.org.88fc0b3e.svg"}}]);
//# sourceMappingURL=513.4b1c34ea.js.map