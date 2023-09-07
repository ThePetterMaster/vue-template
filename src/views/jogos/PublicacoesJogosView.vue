<template>
  <b-card>
    <h1 class="text-center texto-cor-especial fonte-titulo">
      Publicações sobre jogos
    </h1>
    <b-card
      @click="acessarPublicacao"
      @mouseover="increaseCardSize"
      @mouseleave="resetCardSize"
      class="mt-2 custom-card pe-auto"
      ref="card"
    >
      <p class="text-muted">Jul 15</p>
      <h1>Primeiras impressões de starfield</h1>
      <b-row>
        <b-col cols="8">
          <p>
            Starfield é o primeiro novo universo em mais de 25 anos da Bethesda Game Studios, os criadores premiados de The Elder Scrolls V: Skyrim e Fallout 4. Crie qualquer personagem que quiser e explorar com liberdade inigualável ao embarcar em uma jornada épica para responder ao maior mistério da humanidade.
          </p></b-col
        >
        <b-col cols="4"
          ><b-img
          :src="require('@/assets/starfield.jpg')"
            fluid
            alt="Fluid image"
            style="width: 200px;"
          ></b-img
        ></b-col>
      </b-row>

      <b-badge variant="secondary">RPG</b-badge>
    </b-card>
  </b-card>
</template>

<script>
export default {
  methods: {
    increaseCardSize() {
      this.$refs.card.style.transform = "scale(1.008)";
      this.$refs.card.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.2)";
    },
    resetCardSize() {
      this.$refs.card.style.transform = "scale(1)";
      this.$refs.card.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    },
    increaseCard2Size() {
      this.$refs.card2.style.transform = "scale(1.008)";
      this.$refs.card.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.2)";
    },
    resetCard2Size() {
      this.$refs.card2.style.transform = "scale(1)";
      this.$refs.card2.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    },
    acessarPublicacao() {
    Toast.fire("Publicação indisponível no momento", "", "error");
  },
  },
  
};
</script>

<style>
.custom-card {
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}
</style>