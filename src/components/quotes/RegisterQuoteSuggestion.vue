<template>
  <div class="grid h-screen place-items-center">
    <div class="w-1/2">
      <p class="text-center text-5xl font-bold text-zinc-100 mb-5">
        Cadastrar sugestão de frase
      </p>
      <p class="text-center text-3xl font-bold text-zinc-100 mb-14">
        "50% de alguma coisa é melhor do que 100% de nada."
      </p>
      <div class="mb-10">
        <label
          class="block text-zinc-100 text-lg font-bold mb-2"
          for="Nome do personagem"
        >
          Nome do personagem
        </label>
        <input
          class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Nome do personagem"
          type="text"
          placeholder="Nome do personagem"
        />
      </div>
      <div class="mb-4">
        <label class="block text-zinc-100 text-lg font-bold mb-2" for="Frase">
          Frase
        </label>
        <input
          class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Frase"
          type="text"
          placeholder="Frase"
        />
      </div>
      <div class="flex items-center justify-end mt-4">
        <button
          @click="$router.push('/dashboard')"
          class="px-6 py-2 ml-4 font-semibold cursor-pointer text-center focus:outline-none transition hover:shadow-lg shadow hover:bg-zinc-900 rounded-full text-zinc-100 bg-zinc-500"
        >
          Acelera!
        </button>
      </div>
    </div>
  </div>
</template>
