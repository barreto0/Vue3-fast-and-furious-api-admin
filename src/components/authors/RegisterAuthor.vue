<template>
  <div class="grid h-screen place-items-center">
    <div class="w-1/2">
      <p class="text-center text-5xl font-bold text-zinc-100 mb-5">
        Cadastrar autor
      </p>
      <p class="text-center text-3xl font-bold text-zinc-100 mb-14">
        "MONICAAAAA!!"
      </p>
      <div v-if="loading">
        <p
          class="text-center text-3xl font-bold text-zinc-100 mb-14 underline"
        >
          Carregando...
        </p>
      </div>
      <div v-else>
        <div class="mb-10">
          <label
            class="block text-zinc-100 text-lg font-bold mb-2"
            for="Nome"
          >
            Nome do personagem
          </label>

          <input
            v-model="name"
            class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Nome"
            type="text"
            placeholder="Nome"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-zinc-100 text-lg font-bold mb-2"
            for="Filme"
          >
            Filme
          </label>
          <input
            v-model="movie"
            class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Filme"
            type="text"
            placeholder="Filme"
          />
        </div>
        <div class="flex items-center justify-end mt-4">
          <button
            @click="registerAuthor()"
            class="px-6 py-2 ml-4 font-semibold cursor-pointer text-center focus:outline-none transition hover:shadow-lg shadow hover:bg-zinc-900 rounded-full text-zinc-100 bg-zinc-500"
          >
            Acelera!
          </button>
        </div>
      </div>
      <div>
        <p
          @click="$router.push('/')"
          class="text-center text-1xl font-bold text-zinc-100 mb-14 underline mt-16 cursor-pointer"
        >
          Voltar
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import ApiService from '../../services/ApiService';
export default {
  name: 'Register Author',

  data() {
    return {
      apiService: new ApiService(),
      loading: false,
      authors: [],
      name: '',
      movie: '',
    };
  },

  created() {},

  methods: {
    async getAuthors() {
      this.loading = true;
      try {
        const response = await this.apiService.get('author');
        this.authors = response.data.content;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.$toast.error('Ocorreu um problema. ' + error);
      }
    },

    resetVariables() {
      this.name = '';
      this.movie = '';
    },

    async registerAuthor() {
      if (this.name !== '' && this.movie !== '') {
        this.loading = true;
        try {
          const response = await this.apiService.post('author', {
            name: this.name,
            movie: this.movie,
          });
          this.loading = false;
          this.$toast.success('O autor foi registrado com sucesso.');
          this.resetVariables();
        } catch (error) {
          this.loading = false;
          if (error.response.status === 401) {
            this.$toast.error('Seu token expirou, logue novamente.');
          }
          if (error.response.status !== 401) {
            this.$toast.error(
              'Ocorreu um problema ao registrar o autor ' + error
            );
          }
        }
      }
    },
  },
};
</script>
