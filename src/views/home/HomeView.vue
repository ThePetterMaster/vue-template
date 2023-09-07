<template>
  <div>
    <Carrousel />
    <SectionVue />
    <Cards />
  </div>
</template>

<script>
import Carrousel from "./components/Carrousel.vue";
import Footer from "@/components/Footer.vue";
import Cards from "./components/Cards.vue";
import SectionVue from "./components/Section.vue";
export default {
  components: { Carrousel, Footer, Cards, SectionVue },
  data() {
    return {};
  },
  methods: {},
  created() {
    Toast.fire("Bem vindo", "", "success");
  },
};
</script>
