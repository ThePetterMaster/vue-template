<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav class="p-2">
      <b-button v-b-toggle.sidebar-1><i class="bi bi-list"></i></b-button>
      <b-nav-item href="/">Home</b-nav-item>
      <b-nav-item href="/about">Quem sou</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-dropdown
        id="dropdown-right"
        right
        text="Right align"
        class="m-2"
        no-caret
      >
        <template #button-content>
          <i class="bi bi-person-fill"></i>
        </template>
        <b-dropdown-item href="#">Meu perfil</b-dropdown-item>
        <b-dropdown-item href="#">Sair</b-dropdown-item>
      </b-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style>
</style>