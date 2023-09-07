<template>
    <b-card>
      <h1 class="text-center texto-cor-especial fonte-titulo">
        Publicações sobre tecnologia
      </h1>
      <b-card
        @mouseover="increaseCardSize"
        @mouseleave="resetCardSize"
        class="mt-2 custom-card pe-auto"
        ref="card"
      >
        <p class="text-muted">Jul 15</p>
        <h1>Capítulo 1 do livro clean code</h1>
        <b-row>
          <b-col cols="8">
            <p>
                A técnica Clean Code surgiu em 2008, quando Robert Cecil Martins lançou o livro Clean Code: A Handbook of Agile Software Craftsmanship, que é referência no assunto. O autor, aliás, está entre as 17 pessoas que assinaram o Manifesto Ágil, que é a base para diversas metodologias ágeis, como o SCRUM e FDD — Feature-Driven Development.
            </p></b-col
          >
          <b-col cols="4"
            ><b-img
            :src="require('@/assets/cleancode.jpg')"
              fluid
              alt="Fluid image"
            ></b-img
          ></b-col>
        </b-row>
  
        <b-badge variant="secondary">Padrões de codificação</b-badge>
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
    },
  };
  </script>
  
  <style>
  .custom-card {
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  </style>