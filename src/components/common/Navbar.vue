<template>
  <nav class="bg-zinc-100 px-2 sm:px-4 py-2.5 rounded-full sticky top-0 z-50">
    <div class="flex flex-wrap justify-between">
      <span class="ml-10 py-2 pr-4 pl-3 text-xl font-semibold cursor-pointer"
        >Velozes e Furiosos API</span
      >
      <div class="" id="mobile-menu">
        <ul
          class="ml-10 flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
        >
          <li>
            <p
              class="block py-2 pr-4 pl-3 text-zinc-900 hover:text-violet-600 text-lg cursor-pointer"
              @click="$router.push('/dashboard')"
            >
              Frases
            </p>
          </li>
          <li>
            <p
              class="block py-2 pr-4 pl-3 text-zinc-900 hover:text-violet-600 text-lg cursor-pointer"
              @click="$router.push('/analytics')"
            >
              Analytics
            </p>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
