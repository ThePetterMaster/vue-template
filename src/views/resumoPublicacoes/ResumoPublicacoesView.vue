<template>
    <div>
        <h1 class="text-center texto-cor-especial fonte-titulo mt-5">
            Publicações sobre {{categoriaPublicacao}}
        </h1>
        <b-card v-for="resumo in resumos" @click="redirecionarParaPublicacao(resumo)" class="mt-5 ml-5 mr-5 custom-card pe-auto"
            ref="card">
            <p class="text-muted">{{ resumo.data }}</p>
            <b-row>
                <b-col cols="8">
                    <h1>{{ resumo.titulo }}</h1>
                    <p>
                        {{ resumo.resumo }}
                    </p>
                </b-col>

                <b-col cols="4"><b-img style="width: 400px" fluid  :src="resumo.foto"></b-img></b-col>
            </b-row>
            <b-badge variant="secondary">{{ resumo.tag }}</b-badge>
        </b-card>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            resumos: [],
            numero: 1,
            publicacaoNaoEncontrada: false
        }
    },
    methods: {
        redirecionarParaPublicacao(resumo) {
            this.$router.push(`/publicacao/${this.categoriaPublicacao}/${resumo.id}`);
        },
    },
    computed: {
        idPublicacao() {
            return this.$route.params.id;
        },
        categoriaPublicacao() {
            return this.$route.params.categoria;
        }
    },

    mounted() {
        import(`../../api/blog/resumo/${this.categoriaPublicacao}/response.json`)
            .then((jsonData) => {
                this.resumos = jsonData.default;
            })
            .catch((error) => {
                Toast.fire("Publicação indisponível no momento", "", "error");
                this.publicacaoNaoEncontrada = true
            });

    },
};
</script>
  
<style>
.custom-card {
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid #ccc;
    padding: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: inline-block;
}

.custom-card:hover {
    transform: scale(1.01);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}
</style>