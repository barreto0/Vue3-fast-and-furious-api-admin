<template>
  <div class="grid place-items-center h-screen">
    <div>
      <div class="text-center mb-10">
        <p class="text-5xl font-bold text-zinc-100">Velozes e Furiosos - API</p>
      </div>
      <div class="text-center mb-10">
        <p class="text-3xl font-bold text-zinc-100">
          "Velocidade é isso, sentir-se livre. Quando corremos pensamos na
          vida,<br />
          ficamos em silêncio, ouvindo apenas o barulho do motor."
        </p>
        <p class="pt-5 text-xl font-medium text-zinc-100">
          Escolha o que deseja fazer clicando nas opções abaixo.
        </p>
      </div>
      <div class="grid grid-cols-2 gap-40 grid-flow-col">
        <div
          @click="$router.push('/signin')"
          class="grid place-items-center cursor-pointer bg-zinc-100 rounded-xl shadow-xl p-4 space-y-10"
        >
          <img
            class="rounded-xl"
            src="https://rollingstone.uol.com.br/media/_versions/vin_diesel_em_velozes_e_furiosos_foto_reproducao_widelg.jpg"
            alt="toretto"
          />
          <p class="font-medium text-xl text-center">Área restrita</p>
        </div>
        <div
          @click="$router.push('/register-quote')"
          class="cursor-pointer bg-zinc-100 rounded-xl shadow-xl p-4 space-y-10"
        >
          <img
            class="rounded-xl mx-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5HYJZ4XRcD6wodyoidm4xaq_kc6k-godltw&usqp=CAU"
            alt="conhece assento ejetavel"
          />
          <p class="font-medium text-xl text-center">
            Cadastrar sugestão de frase
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
img {
  height: 300px;
  width: 500px;
}
</style>
