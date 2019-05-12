<template>
    <div class="department">
        <Menu theme="light" active-name="2" @on-select="menueSelect">
            <MenuItem v-for="(item,index) in departmentList" :name="`${item.id}`">
                {{item.name}}
            </MenuItem>
        </Menu>
        <Card class="card">
          <div style="display: flex;justify-content: space-around">
              <div style="height: 200px;width: 200px;"></div>
              <div></div>
          </div>
          <div>

          </div>
        </Card>
    </div>
</template>

<script>
  import {APP_Data} from '@/dictonary.js'
  export default {
    name: 'Department',
    data(){
      return{
        departmentList: APP_Data,
        selectIndex:'',
      }
    },
    methods:{
      menueSelect:function( index ) {
        console.log(typeof index)
      }
    }
  };
</script>

<style scoped>
.department{
    height: 800px;
    display: flex;
    padding:0 50px;
    margin-bottom: 100px;
    margin-top: 20px;
}
.card{
    margin-left: 150px;
    width: 1100px;
}
</style>