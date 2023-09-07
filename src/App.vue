<template>
  <div id="app">
    <div>
      <NavBar />
      <SideBar />
      
    </div>
    <router-view  class="d-flex flex-column min-vh-100"/>
    <Footer />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { NavBar, SideBar,Footer },
};
</script>
<style lang="scss">
</style>
