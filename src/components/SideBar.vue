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
      <!-- <b-list-group-item>
        <b-avatar
          button
          @click="onClick"
          icon="github"
          class="align-center"
        ></b-avatar>
        Respositórios no github
      </b-list-group-item> -->
    </b-list-group>
  </b-sidebar>
</template>

<script>
export default {
  methods: {
    redirecionarParaTeologia() {
      if (this.$route.path !== '/teologia') {
        this.$router.push('/teologia');
      }
    },
    redirecionarParaJogos() {
      if (this.$route.path !== '/jogos') {
        this.$router.push('/jogos');
      }
    },
    redirecionarParaTecnologia() {
      if (this.$route.path !== '/tecnologia') {
        this.$router.push('/tecnologia');
      }
    },
  },
};
</script>

<style>
</style>