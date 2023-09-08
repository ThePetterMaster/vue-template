<template>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    controls
    img-width="1024"
    img-height="480"
  >
  <b-carousel-slide text="Desenvolvo tutoriais e comentários de alguma tecnologia de meu interesse." caption="Tecnologia">
      <template #img>
        <img
          class="d-block img-fluid w-100"
          width="1024"
          height="300"
          :src="require(`@/assets/tecnologia.jpeg`)"
          alt="image slot"
        />
      </template>
    </b-carousel-slide>

    <b-carousel-slide text="Comento livros, profissões de fé, capítulos biblicos etc." caption="Teologia">
      <template #img>
        <img
          class="d-block img-fluid w-100"
          width="1024"
          height="300"
          :src="require(`@/assets/teologia.jpg`)"
          alt="image slot"
        />
      </template>
    </b-carousel-slide>
    <b-carousel-slide  text="Dou minha opinião sobre jogos, partidas, builds etc." caption="Jogos">
      <template #img>
        <img
          class="d-block img-fluid w-100"
          width="1024"
          height="300"
          :src="require(`@/assets/jogos.jpeg`)"
          alt="image slot"
        />
      </template>
    </b-carousel-slide>

  </b-carousel>
</template>

<script>
export default {};
</script>

<style>
</style>