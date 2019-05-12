<template>
    <div class="footerBar">
        <div></div>
        <div>
            <!--<router-link v-for="route in routerList" :to="route.path" :class="route.class" tag="div">-->
                <!--{{route.name}}-->
            <!--</router-link>-->
        </div>
        <div></div>
        <div></div>
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
    height:150px;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    box-shadow: 0px 1px 1px #aaa;
    border-top: 1px solid #d5d5d5;
}
</style>