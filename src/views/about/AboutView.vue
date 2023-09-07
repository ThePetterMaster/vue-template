<template>
  <div>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      controls
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="300"
            :src="require(`@/assets/about.jpg`)"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
    <div class="mb-2">
      <b-row align-h="center">
        <b-avatar :src="require(`@/assets/eu.jpg`)" size="10rem"></b-avatar>
      </b-row>
      <b-row align-h="center mt-3">
        <p class="text-muted">Pedro Alves de Amorim Neto</p>
      </b-row>

      <b-row align-h="center">
        <p class="text-muted">Bacharel em ciência da computação pela UFMA</p>
      </b-row>

      <b-row align-h="center">
        <p class="text-muted">São Luís do Maranhão</p>
      </b-row>

      <b-row align-h="center">
        <p class="text-muted">Desenvolvedor Web full stack</p>
      </b-row>
    </div>
  </div>
</template>

<script>
</script>
<style>
</style>