<template>
  <div id="app">
    <HeaderBar />
    <router-view style="padding-top: 100px;" />
    <FooterBar />
  </div>
</template>

<script>
  import HeaderBar from './components/headerBar'
  import FooterBar from './components/footerBar'
export default {
  name: 'app',
  components: {
    HeaderBar,
    FooterBar
    // homeSwiper
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #EEEEEE;
}
*{list-style: none}
html{

}
</style>
