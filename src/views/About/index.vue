<template>
    <div class="about">
        <h1 style="padding-top:100px;">联系我们</h1>
        <div class="methods">
            <div>电话：0591-88568866，传真：0591-87832711，邮编：350025</div>
            <div>地址：福州市鼓楼区湖东路11号信息科技大楼3层（背靠省建设厅）</div>
            <div>邮箱：liuguotian688@163.com。微信：lgt688。</div>
            <div>新浪微博：在新浪微博中搜索“熹龙律师事务所”并加关注</div>
            <div>战略联盟所：福建凌龙律师事务所 地址：莆田市荔城区艾力艾国际中心</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'About'
  };
</script>

<style scoped>
.about{
    height: 800px;
}
.methods{
    margin-top: 100px;
    padding: 0 30%;
    height:200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: left;
    font-size: 18px;
}
</style>