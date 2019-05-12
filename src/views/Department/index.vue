<template>
  <div class="department">
    <Menu theme="light" :active-name="selectIndex||activeName" @on-select="menueSelect">
      <MenuItem v-for="(item,index) in departmentList" :name="`${item.id}`">{{item.name}}</MenuItem>
    </Menu>
    <Card class="card">
      <div style="display: flex;justify-content: space-around;padding-bottom: 50px;">
        <div style="flex:1;margin: auto;display: flex;justify-content: center">
          <div style="height: 200px;width: 200px;background: #666"></div>
        </div>
        <div style="flex:1">
            <div style="font-size: 25px;padding-bottom: 50px">{{departmentDetail.name}}</div>
            <div style="font-size: 22px">{{departmentDetail.charge}}</div>
        </div>
      </div>
      <div>
        {{departmentDetail.description}}
      </div>
    </Card>
  </div>
</template>

<script>
import { APP_Data } from "@/dictonary.js";
export default {
  name: "Department",
  data() {
    return {
      departmentList: APP_Data,
    };
  },
  computed:{
    departmentDetail(){
      return this.departmentList[this.selectIndex-1]
    },
    selectIndex(){
      return this.$route.query.id || 2
    }
  },
  filter:{
    activeName(value){
      return value.toString()
    }
  },
  methods: {
    menueSelect: function(index) {
      this.$router.push({query:{id:index}})
    }
  }
};
</script>

<style scoped>
.department {
  width: 1200px;
  height: 800px;
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
}
.card {
  width: 900px;
}
</style>