<template>
  <div class="grid h-screen place-items-center">
    <div class="w-1/2">
      <p class="text-center text-5xl font-bold text-zinc-100 mb-5">
        Cadastrar sugestão de frase
      </p>
      <p class="text-center text-3xl font-bold text-zinc-100 mb-14">
        "50% de alguma coisa é melhor do que 100% de nada."
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
            for="Nome do personagem"
          >
            Nome do personagem
          </label>

          <select
            class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="authorId"
          >
            <option disabled value="">Selecione o Autor</option>
            <option v-for="author in authors" :value="author.id">
              {{ author.name }}
            </option>
          </select>
        </div>
        <div class="mb-4">
          <label
            class="block text-zinc-100 text-lg font-bold mb-2"
            for="Frase"
          >
            Frase
          </label>
          <input
            v-model="phrase"
            class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Frase"
            type="text"
            placeholder="Frase"
          />
        </div>
        <div class="flex items-center justify-end mt-4">
          <button
            @click="sendQuoteSugestion()"
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
import axios from 'axios';
import ApiService from '../../services/ApiService';
export default {
  name: 'Register Quote',

  data() {
    return {
      apiService: new ApiService(),
      loading: false,
      authors: [],
      authorId: '',
      phrase: '',
    };
  },

  created() {
    this.getAuthors();
  },

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

    async sendQuoteSugestion() {
      this.loading = true;
      try {
        const response = await this.apiService.post('phrase', {
          text: this.phrase,
          authorId: this.authorId,
        });
        this.loading = false;
        this.$toast.success(
          'Sua sugestão foi registrada com sucesso.'
        );
        this.authorId = '';
        this.phrase = '';
      } catch (error) {
        this.loading = false;
        this.$toast.error(
          'Ocorreu um problema ao registrar sua sugestão ' + error
        );
      }
    },
  },
};
</script>
