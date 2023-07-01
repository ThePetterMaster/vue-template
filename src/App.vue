<template>
  <div id="app">
    <div>
      <NavBar />
      <SideBar />
    </div>
    <router-view />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";
export default {
  components: { NavBar, SideBar },
};
</script>
<style lang="scss">
</style>
