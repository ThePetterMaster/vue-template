<template>
  <b-sidebar id="sidebar-1" title="Menu principal" shadow>
    <b-list-group>
      <b-list-group-item>
        <b-avatar
          button
          @click="onClick"
          icon="controller"
          class="align-center"
        ></b-avatar>
        Jogos
      </b-list-group-item>
      <b-list-group-item>
        <b-avatar
          button
          @click="onClick"
          icon="book"
          class="align-center"
        ></b-avatar>
        Teologia
      </b-list-group-item>
      <b-list-group-item>
        <b-avatar
          button
          @click="onClick"
          icon="laptop"
          class="align-center"
        ></b-avatar>
        Tecnologia
      </b-list-group-item>
      <b-list-group-item>
        <b-avatar
          button
          @click="onClick"
          icon="github"
          class="align-center"
        ></b-avatar>
        Respositórios no github
      </b-list-group-item>
    </b-list-group>
  </b-sidebar>
</template>

<script>
export default {};
</script>

<style>
</style>