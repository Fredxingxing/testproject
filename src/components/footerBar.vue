<template>
    <div class="footerBar">
        我是也页脚
    </div>
</template>

<script>
  export default {
    name: 'footer-bar'
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