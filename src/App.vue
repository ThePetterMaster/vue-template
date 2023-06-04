<template>
  <div id="app">
    <div>
      <NavBar/>
      <b-sidebar id="sidebar-1" title="Sidebar" shadow>
        <div class="px-3 py-2">
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <b-img
            src="https://picsum.photos/500/500/?image=54"
            fluid
            thumbnail
          ></b-img>
        </div>
      </b-sidebar>
    </div>
    <router-view />
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: { NavBar },
}
</script>
<style lang="scss">
</style>
