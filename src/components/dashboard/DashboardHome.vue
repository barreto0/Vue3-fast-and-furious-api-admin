<template>
  <div>
    <div class="h-screen">
      <NavbarVue />
      <div class="mt-10 text-zinc-100 text-center text-lg font-bold">
        <p>Ativas<span class="ml-14">Pendentes</span></p>
      </div>
      <div class="mt-5 overflow-x-auto rounded-xl">
        <table class="w-full text-sm text-left text-zinc-100">
          <thead class="text-xs text-zinc-100 uppercase bg-zinc-700">
            <tr>
              <th scope="col" class="px-6 py-3">ID</th>
              <th scope="col" class="px-6 py-3">Cadastrado por</th>
              <th scope="col" class="px-6 py-3">Personagem/Autor</th>
              <th scope="col" class="px-6 py-3">Status</th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="i in 10"
              :key="i"
              class="bg-zinc-100 border-b-2 border-zinc-400 text-zinc-900"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">Sliver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4 text-right text-violet-600">
                <p class="cursor-pointer">Editar</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarVue from "../common/Navbar.vue";
export default {
  name: "DashboardHome",
  components: {
    NavbarVue,
  },
};
</script>
