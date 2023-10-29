<template>
  <div>
    <div v-if="publicacaoNaoEncontrada">
      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h3>Oops! Página não encontrada</h3>
            <h1><span>4</span><span>0</span><span>4</span></h1>
          </div>
          <h2>Pedimos desculpas, mas a página que requisitou não foi encontrada</h2>
        </div>
      </div>
    </div>
    <div v-else>
      <p>{{ $route.params.numero }}</p>
      <b-row class="mb-3" align-h="center">
        <h1>{{ json.titulo }}</h1>
      </b-row>

      <b-row class="mb-3" align-h="center">
        <img width="50%" :src="json.foto" />
      </b-row>

      <b-col cols="12" class="d-flex justify-content-center">
        <b-col cols="7" col-sm>
          <b-row align-h="center">
            <p v-for="paragrafo in json.paragrafos">
              {{ paragrafo }}
            </p>
          </b-row>
        </b-col>
      </b-col>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      json: {},
      numero: 1,
      publicacaoNaoEncontrada: false
    }
  },
  computed:{
    idPublicacao(){
      return this.$route.params.id;
    },
    categoriaPublicacao(){
      return this.$route.params.categoria;
    }
  },

  mounted() {
    import(`../../api/blog/publicacao/${this.categoriaPublicacao}/${this.idPublicacao}/response.json`)
      .then((jsonData) => {
        this.json = jsonData.default;
      })
      .catch((error) => {
        Toast.fire("Publicação indisponível no momento", "", "error");
        this.publicacaoNaoEncontrada = true
      });

  },
};
</script>

<style scoped>
img {
  border-radius: 50%;
}

#notfound {
  position: relative;
  height: 100vh;
}

#notfound .notfound {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.notfound {
  max-width: 520px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
}

.notfound .notfound-404 {
  position: relative;
  height: 240px;
}

.notfound .notfound-404 h3 {
  font-family: 'Cabin', sans-serif;
  position: relative;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: #262626;
  margin: 0px;
  letter-spacing: 3px;
  padding-left: 6px;
}

.notfound .notfound-404 h1 {
  font-family: 'Montserrat', sans-serif;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 252px;
  font-weight: 900;
  margin: 0px;
  margin-left: 0px;
  color: #262626;
  text-transform: uppercase;
  letter-spacing: -40px;
  margin-left: -20px;
}

.notfound .notfound-404 h1>span {
  text-shadow: -8px 0px 0px #fff;
}</style>