<template>
  <div>
    <div class="grid place-items-center h-screen">
      <div class="grid grid-cols-2 gap-4 bg-zinc-600 rounded-xl">
        <div>
          <img
            class="rounded-l-xl"
            src="https://sm.ign.com/t/ign_br/screenshot/default/blob_5c4h.1280.jpg"
            alt="toretto"
          />
        </div>
        <div class="text-center flex items-center justify-center">
          <div>
            <p class="text-2xl font-bold text-zinc-100">
              50% de alguma coisa é melhor do que 100% de nada.
            </p>
            <p class="pt-5 text-xl font-medium text-zinc-100">
              Você ainda está em nosso domínio, porém a página que requisitou
              não existe.
            </p>
            <p
              @click="$router.push('/')"
              class="pt-5 cursor-pointer underline text-base font-medium text-zinc-100"
            >
              voltar
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
