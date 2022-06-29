<template>
  <div class="grid h-screen place-items-center">
    <div class="w-1/2">
      <p class="text-center text-5xl font-bold text-zinc-100 mb-5">
        Documentação
      </p>
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
</template>
