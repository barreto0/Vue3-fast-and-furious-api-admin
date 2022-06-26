<template>
  <div class="grid place-items-center h-screen">
    <div class="mt-2 items-center z-10">
      <div
        class="bg-zinc-100 max-w-sm mx-auto rounded-xl shadow-xl overflow-hidden p-6 space-y-10"
      >
        <p class="text-4xl font-bold text-center text-zinc-700">
          Velozes e Furiosos API - Admin
        </p>
        <p class="text-base font-bold text-center text-zinc-700">
          A vida é simples,<br />é tomar decisões e não se arrepender.
        </p>
        <div>
          <label
            for="email"
            class="block text-gray-700 text-lg font-bold mb-2"
            >Email</label
          >
          <input
            type="email"
            name="email"
            v-model="email"
            placeholder=" "
            class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label
            for="password"
            class="block text-gray-700 text-lg font-bold mb-2"
            >Senha</label
          >
          <input
            type="password"
            name="password"
            v-model="password"
            placeholder=" "
            class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div class="flex items-center justify-end mt-4">
          <button
            v-if="!loading"
            @click="login()"
            class="px-6 py-2 ml-4 font-semibold cursor-pointer text-center focus:outline-none transition hover:shadow-lg shadow hover:bg-zinc-900 rounded-full text-zinc-100 bg-zinc-500"
          >
            Acelera!
          </button>
          <p
            v-else
            class="block text-gray-700 text-lg font-bold mb-2"
          >
            Carregando...
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuth } from '../../../stores/AuthStore';
import ApiService from '../../../services/ApiService';
import axios from 'axios';

export default {
  name: 'SignIn',
  setup() {
    const authStore = useAuth();
    return {
      // you can return the whole store instance to use it in the template
      authStore,
    };
  },

  data() {
    return {
      apiService: new ApiService(),
      loading: false,
      email: '',
      password: '',
    };
  },

  created() {},

  methods: {
    async login() {
      this.loading = true;
      try {
        const response = await this.apiService.post('user/login', {
          email: this.email,
          password: this.password,
        });
        this.loading = false;
        localStorage.setItem('token', response.data.content.token);
        localStorage.setItem(
          'nickname',
          response.data.content.user.nickname
        );
        this.$toast.success(response.data.message);
        this.$router.push('/dashboard');
      } catch (error) {
        this.loading = false;
        this.$toast.error('Email ou senha incorretos');
      }
    },
  },
};
</script>
