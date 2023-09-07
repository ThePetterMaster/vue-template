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
    <!-- <b-carousel-slide
      caption="First Slide"
      img-src="https://picsum.photos/1024/300/?image=10"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Second Slide"
      img-src="https://picsum.photos/1024/300/?image=12"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Third Slide"
      img-src="https://picsum.photos/1024/300/?image=22"
    ></b-carousel-slide> -->
    <b-carousel-slide
    caption="Jogos">
      
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="300"
            :src="require(`@/assets/jogos.jpeg`)"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide
      caption="Teologia">
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="300"
            :src="require(`@/assets/teologia.jpg`)"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide
      caption="Tecnologia">
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="300"
            :src="require(`@/assets/tecnologia.jpeg`)"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {};
</script>

<style>
</style>