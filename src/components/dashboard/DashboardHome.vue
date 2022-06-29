<template>
  <div>
    <div class="h-screen">
      <NavbarVue />
      <div class="grid grid-rows-1 grid-flow-col gap-4">
        <p
          @click="$router.push('/register-author')"
          class="col-span-12 mt-10 text-lg text-right text-zinc-100 cursor-pointer"
        >
          + Adicionar autor
        </p>
        <p
          @click="$router.push('/register-quote')"
          class="col-span-1 mt-10 text-lg text-right text-zinc-100 cursor-pointer"
        >
          + Adicionar frase
        </p>
      </div>
      <div v-if="!loading" class="mt-5 overflow-x-auto rounded-xl">
        <table class="w-full text-sm text-left text-zinc-100">
          <thead class="text-xs text-zinc-100 uppercase bg-zinc-700">
            <tr>
              <th scope="col" class="px-6 py-3">ID</th>
              <th scope="col" class="px-6 py-3">Frase</th>
              <th scope="col" class="px-6 py-3">Personagem/Autor</th>
              <th scope="col" class="px-6 py-3">Status</th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(phrase, i) in phrases"
              :key="i"
              class="bg-zinc-100 border-b-2 border-zinc-400 text-zinc-900"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {{ phrase.id }}
              </th>
              <td class="px-6 py-4">{{ phrase.author.name }}</td>
              <td class="px-6 py-4">{{ phrase.text }}</td>
              <td v-if="!loadingStatus" class="px-6 py-4">
                {{ phrase.active ? 'Ativa' : 'Inativa' }}
              </td>
              <td class="px-6 py-4 text-right text-violet-600">
                <p
                  @click="changePhraseStatus(phrase.id)"
                  class="cursor-pointer"
                >
                  {{ phrase.active ? 'Desativar' : 'Ativar' }}
                </p>
              </td>
              <td
                v-if="loadingStatus"
                class="px-6 py-4 text-right text-violet-600"
              >
                <p>Mudando status...</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p
          class="text-center text-3xl font-bold text-zinc-100 mb-14 underline"
        >
          Carregando...
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarVue from '../common/Navbar.vue';
import ApiService from '../../services/ApiService';
export default {
  name: 'DashboardHome',

  components: {
    NavbarVue,
  },

  data() {
    return {
      apiService: new ApiService(),
      loading: false,
      loadingStatus: false,
      phrases: [],
    };
  },

  created() {
    this.getPhrases();
  },

  methods: {
    async getPhrases() {
      this.loading = true;
      try {
        const response = await this.apiService.get('phrase');
        this.phrases = response.data.content;
        console.log(this.phrases);
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.$toast.error('Ocorreu um problema. ' + error);
      }
    },

    async changePhraseStatus(phraseId) {
      this.loadingStatus = true;
      try {
        const response = await this.apiService.get(
          'phrase/change-phrase-status/' + phraseId
        );
        this.$toast.success('Status alterado com sucesso.');
        this.getPhrases();
        this.loadingStatus = false;
      } catch (error) {
        this.loadingStatus = false;
        this.$toast.error('Ocorreu um problema. ' + error);
      }
    },
  },
};
</script>
