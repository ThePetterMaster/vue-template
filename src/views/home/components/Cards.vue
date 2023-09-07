<template>
  <div class="container mt-2">
    <div class="row">
      <div class="col-sm">
        <b-card
          title="Capítulo 1 CFWM"
          
          :img-src="require('@/assets/cfwm.jpg')"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2 mr-5 w-100"
        >
          <b-card-text>
            A Confissão de Westminster foi produzida pela Assembleia de
            Westminster...
          </b-card-text>

          <b-button @click="acessarPublicacao" href="#" variant="primary">Acessar publicação</b-button>
        </b-card>
      </div>
      <div class="col-sm">
        <b-card
          title="Capítulo 1 CFWM"
          :img-src="require('@/assets/cfwm.jpg')"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2 mr-5 w-100"
        >
          <b-card-text>
            A Confissão de Westminster foi produzida pela Assembleia de
            Westminster...
          </b-card-text>

          <b-button @click="acessarPublicacao" href="#" variant="primary">Acessar publicação</b-button>
        </b-card>
      </div>
      <div class="col-sm">
        <b-card
          title="Primeiras impressões de starfield"
          :img-src="require('@/assets/starfield.jpg')"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2 mr-5 w-100"
        >
        
          <b-card-text>
            Starfield é o primeiro novo universo em mais de 25 anos da Bethesda...
          </b-card-text>

          <b-button @click="acessarPublicacao" href="#" variant="primary">Acessar publicação</b-button>
        </b-card>
      </div>
      <div class="col-sm">
        <b-card
          title="Capítulo 1 do livro clean code"
          :img-src="require('@/assets/cleancode.jpg')"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2 mr-5 w-100"
        >
          <b-card-text>
            A técnica Clean Code surgiu em 2008...
          </b-card-text>

          <b-button href="#" @click="acessarPublicacao" variant="primary">Acessar publicação</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    acessarPublicacao() {
    Toast.fire("Publicação indisponível no momento", "", "error");
  },
  }
};
</script>

<style>
.card-img-top {
    width: 100%;
    height: 10vw;
    object-fit: cover;
}
</style>