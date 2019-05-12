<template>
    <div class="news">
        <div class="aside">
           <Menu :theme="theme2">
                <Submenu name="1">
                    <template slot="title">
                        动态1
                    </template>
                    <Menu-item name="1-1">文章管理</Menu-item>
                    <Menu-item name="1-2">评论管理</Menu-item>
                    <Menu-item name="1-3">举报管理</Menu-item>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        动态2
                    </template>
                    <Menu-item name="2-1">文章管理</Menu-item>
                    <Menu-item name="2-2">评论管理</Menu-item>
                    <Menu-item name="2-3">举报管理</Menu-item>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        动态3
                    </template>
                    <Menu-item name="3-1">文章管理</Menu-item>
                    <Menu-item name="3-2">评论管理</Menu-item>
                    <Menu-item name="3-3">举报管理</Menu-item>
                </Submenu>
            </Menu>
        </div>
        <div class="main">

        </div>
    </div>
</template>

<script>
  export default {
    name: 'News',
    data(){
      return {
        theme2: 'light'
      }
    }
  };
</script>

<style scoped lang='less'>
.news{
  width: 1200px;
  margin:20px auto;
  display: flex;
  justify-content: space-between;
  .aside{
    height: 500px;
    background-color: #fff;
  }
  .main{
    width: 900px;
    background-color: #fff;
    height: 500px;
  }
}
</style>