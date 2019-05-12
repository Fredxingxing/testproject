<template>
    <div class="listBox" >
        <Card v-for="item in departmentList" :key="item.id" class="item">
            <p slot="title" @click="toDepartment(item)">{{item.name}}</p>
            <p @click="toDepartment(item)">Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
    </div>
</template>

<script>
    import {APP_Data} from '@/dictonary.js'
  export default {
    name: 'department-list',
    data(){
      return {
        departmentList: APP_Data,
      }
    },
    methods:{
      toDepartment:function( item ) {
        this.$router.push({path:'department',query:{id:item.id}})
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