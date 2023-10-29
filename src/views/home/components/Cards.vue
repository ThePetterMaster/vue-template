<template>
  <div class="container mt-2">
    <div class="row">
      <div v-for="card in cardsUltimasPublicacoes" class="col-sm">
        <b-card :title="card.titulo" :img-src="card.foto" img-alt="Image" img-top tag="article" style="max-width: 20rem"
          class="mb-2 mr-5 w-100">
          <b-card-text>
            {{ card.resumo }}
          </b-card-text>

          <b-button @click="acessarPublicacao(card)" href="#" variant="primary">Acessar publicação</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardsUltimasPublicacoes: []
    }

  },
  methods: {
    acessarPublicacao(card) {
      this.$router.push(`/publicacao/${card.categoria}/${card.id}`);
    }
  },

  mounted() {
    import("../../../api/blog/cards/response.json")
      .then((jsonData) => {
        this.cardsUltimasPublicacoes = jsonData.default;
      })
      .catch((error) => {
        Toast.fire("Publicação indisponível no momento", "", "error");
      });

  },
};
</script>

<style>
.card-img-top {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
</style>