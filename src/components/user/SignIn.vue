<template>
  <div class="grid place-items-center h-screen">
    <div class="mt-2 items-center z-10">
      <form
        class="bg-zinc-100 max-w-sm mx-auto rounded-xl shadow-xl overflow-hidden p-6 space-y-10"
      >
        <p class="text-4xl font-bold text-center text-zinc-700">
          Velozes e Furiosos API - Admin
        </p>
        <p class="text-base font-bold text-center text-zinc-700">
          A vida é simples,<br />é tomar decisões e não se arrepender.
        </p>
        <div
          class="f-outline px-2 relative border rounded-lg focus-within:border-indigo-500"
        >
          <input
            type="email"
            name="email"
            placeholder=" "
            class="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent"
          />
          <label
            for="email"
            class="absolute ml-5 top-0 text-lg text-gray-700 bg-zinc-100 mt-2 -z-1 duration-300 origin-0"
            >Email</label
          >
        </div>
        <div
          class="f-outline px-2 relative border rounded-lg focus-within:border-indigo-500"
        >
          <input
            type="password"
            name="password"
            placeholder=" "
            class="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent"
          />
          <label
            for="password"
            class="absolute ml-5 top-0 text-lg text-gray-700 bg-zinc-100 mt-2 -z-1 duration-300 origin-0"
            >Senha</label
          >
        </div>

        <div class="flex items-center justify-end mt-4">
          <button
            @click="$router.push('/dashboard')"
            class="px-6 py-2 ml-4 font-semibold cursor-pointer text-center focus:outline-none transition hover:shadow-lg shadow hover:bg-zinc-900 rounded-full text-zinc-100 bg-zinc-500"
          >
            Acelera!
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>
