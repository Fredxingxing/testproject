<template>
    <div class="listBox">
        <Card v-for="item in cardList" :key="item.id" class="item">
            <p slot="title">{{item.name}}</p>
            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
    </div>
</template>

<script>
  export default {
    name: 'department-list',
    data(){
      return {
        cardList: [
          {
            id:1,
            name:"房产建筑部",
          },
          {
            id:2,
            name:"刑事辩护部",
          },
          {
            id:3,
            name:"交通事故部",
          },
          {
            id:4,
            name:"公司合同部",
          },
          {
            id:5,
            name:"借贷侵权部",
          },
          {
            id:6,
            name:"婚姻继承部",
          },
          {
            id:7,
            name:"金融保险部",
          },
          {
            id:8,
            name:"知识产权部",
          },
          {
            id:9,
            name:"医疗海事部",
          },
        ],
      }
    }
  };
</script>

<style lang="less" scoped>
.listBox{
    padding: 20px 100px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .item{
        width: 25%;
        height: 200px;
        margin:30px 50px;
    }
}
</style>