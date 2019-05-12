<template>
    <div class="footerBar">
        <div class="item">
            <div class="title">福建熹龙律师事务所</div>
            <p style="padding:0 30px;text-align: left">  所执业律师均具有学士以上学位，多名律师还拥有博士和硕士学位，受过系统专业的法学教育，
                其中五年以上的执业经历者十几名，是一个有战斗力和凝聚力的律师团队</p>
        </div>
        <div  class="item">
            <div class="title">导航</div>
            <router-link v-for="route in routerList" :to="route.path" :class="route.class" tag="div" style="cursor: pointer">
                {{route.name}}
            </router-link>
        </div>
        <div  class="item">
            <div class="title">联系我们</div>
            <div>福州市鼓楼区华林路100号茶叶大楼四层</div>
            <div>0591-88568866</div>
            <div>闽ICP备12009534号</div>
        </div>
        <div class="item">
            <div class="title">营业时间</div>
            <div>星期一 — 星期四 9:00 -21:00</div>
            <div>星期五 8:00 - 21:00</div>
            <div>星期六 9:30 - 15:00 </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'footer-bar',
    data(){
      return{
        routerList:[
          {
            name:'首页',
            path:'/',
            class:'routeItem',
          },
          {
            name:'部门',
            path:'/department',
            class:'routeItem',
          },
          {
            name:'动态（新闻）',
            path:'/news',
            class:'routeItem',
          },
          {
            name:'合作伙伴',
            path:'/partner',
            class:'routeItem',
          },
          {
            name:'关于',
            path:'/about',
            class:'routeItem',
          },
        ]
      }
    }
  };
</script>

<style lang="less" scoped>
.footerBar{
    width: 100%;
    height:180px;
    z-index: 999;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    box-shadow: 0px 1px 1px #aaa;
    border-top: 1px solid #d5d5d5;
    .item{
        flex:1;
        height: 100%;
        padding-top: 10px;
        display: flex;
        flex-direction: column;
        font-size: 14px;
        .title{
            padding: 10px;
            font-size: 18px;
            color: #000;
    }
    }
}
</style>