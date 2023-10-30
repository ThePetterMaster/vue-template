<template>
  <b-sidebar id="sidebar-1" title="Menu principal" shadow>
    <b-list-group>
      <b-list-group-item href="#" @click="redirecionarParaJogos">
        <b-avatar
          button
          icon="controller"
          class="align-center"
        ></b-avatar>
        Jogos
      </b-list-group-item>
      <b-list-group-item href="#" @click="redirecionarParaTeologia">
        <b-avatar
          button
          icon="book"
          class="align-center"
        ></b-avatar>
        Teologia
      </b-list-group-item>
      <b-list-group-item href="#" @click="redirecionarParaTecnologia"> 
        <b-avatar
          button
          icon="laptop"
          class="align-center"
        ></b-avatar>
        Tecnologia
      </b-list-group-item>
    </b-list-group>
  </b-sidebar>
</template>

<script>
export default {
  methods: {
    redirecionarParaTeologia() {
      if (this.$route.path !== '/resumos/teologia') {
        this.$router.push('/resumos/teologia');
        setTimeout( location.reload(), 500); 
      }
    },
    redirecionarParaJogos() {
      if (this.$route.path !== '/resumos/jogos') {
        this.$router.push('/resumos/jogos');
        setTimeout( location.reload(), 500); 
      }
    },
    redirecionarParaTecnologia() {
      if (this.$route.path !== '/resumos/tecnologia') {
        this.$router.push('/resumos/tecnologia');
        setTimeout( location.reload(), 500); 
      }
    },
  },
};
</script>

<style>
</style>