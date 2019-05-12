<template>
  <div class="department">
    <Menu theme="light" active-name="2" @on-select="menueSelect">
      <MenuItem v-for="(item,index) in departmentList" :name="`${item.id}`">{{item.name}}</MenuItem>
    </Menu>
    <Card class="card">
      <div style="display: flex;justify-content: space-around">
        <div style="height: 200px;width: 200px;"></div>
        <div></div>
      </div>
      <div></div>
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
      selectIndex: ""
    };
  },
  methods: {
    menueSelect: function(index) {
      console.log(typeof index);
    }
  }
};
</script>

<style scoped>
.department {
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
}
.card {
  width: 900px;
}
</style>