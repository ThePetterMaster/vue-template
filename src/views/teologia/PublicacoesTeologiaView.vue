<template>
  <b-card>
    <h1 class="text-center texto-cor-especial fonte-titulo">
      Publicações sobre teologia
    </h1>

    <b-card
      @mouseover="increaseCardSize"
      @mouseleave="resetCardSize"
      class="mt-2 custom-card pe-auto"
      ref="card"
    >
      <p class="text-muted">Jul 15</p>
      <h1>Capítulo 1 CFWM</h1>
      <b-row>
        <b-col cols="8">
          <p>
            A Confissão de Westminster foi produzida pela Assembleia de
            Westminster, convocada pelo Parlamento inglês em 1643, durante a
            Guerra Civil Inglesa. A Assembleia de Westminster (1643-1649)
            constituiu o ponto culminante da elaboração confessional reformada.
            Os documentos teológicos que dela resultaram, a Confissão de Fé e os
            Catecismos Maior e Breve, tornaram-se os padrões doutrinários mais
            aceitos pelos reformados ao redor do mundo. A famosa assembléia foi
            uma das principais contribuições dos puritanos, os calvinistas
            ingleses. Há quase um século eles vinham lutando sem sucesso por uma
            reforma profunda na Igreja da Inglaterra (Anglicana). Na década de
            1640, os puritanos ganharam o controle do Parlamento inglês e
            entraram em guerra contra o rei Carlos I, que queria manter o
            sistema episcopal.
          </p></b-col
        >
        <b-col cols="4"
          ><b-img
          :src="require('@/assets/cfwm.jpg')"
            fluid
            alt="Fluid image"
          ></b-img
        ></b-col>
      </b-row>

      <b-badge variant="secondary">Teologia reformada</b-badge>
    </b-card>

    <b-card
      @mouseover="increaseCard2Size"
      @mouseleave="resetCard2Size"
      class="mt-2 custom-card pe-auto"
      ref="card2"
    >
      <p class="text-muted">Ago 15</p>
      <h1>Capítulo 2 CFWM</h1>
      <b-row>
        <b-col cols="8">
          <p>
            A Confissão de Westminster foi produzida pela Assembleia de
            Westminster, convocada pelo Parlamento inglês em 1643, durante a
            Guerra Civil Inglesa. A Assembleia de Westminster (1643-1649)
            constituiu o ponto culminante da elaboração confessional reformada.
            Os documentos teológicos que dela resultaram, a Confissão de Fé e os
            Catecismos Maior e Breve, tornaram-se os padrões doutrinários mais
            aceitos pelos reformados ao redor do mundo. A famosa assembléia foi
            uma das principais contribuições dos puritanos, os calvinistas
            ingleses. Há quase um século eles vinham lutando sem sucesso por uma
            reforma profunda na Igreja da Inglaterra (Anglicana). Na década de
            1640, os puritanos ganharam o controle do Parlamento inglês e
            entraram em guerra contra o rei Carlos I, que queria manter o
            sistema episcopal.
          </p></b-col
        >
        <b-col cols="4"
          ><b-img
          :src="require('@/assets/cfwm.jpg')"
            fluid
            alt="Fluid image"
          ></b-img
        ></b-col>
      </b-row>
      <b-badge variant="secondary">Teologia reformada</b-badge></b-card
    >
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
      this.$refs.card2.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.2)";
    },
    resetCard2Size() {
      this.$refs.card2.style.transform = "scale(1)";
      this.$refs.card2.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
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