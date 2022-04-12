<template>
  <div>
    <nav class="bg-zinc-100 px-2 sm:px-4 py-2.5 rounded-full sticky top-0 z-50">
      <div class="flex flex-wrap justify-between">
        <span class="ml-10 py-2 pr-4 pl-3 text-xl font-semibold"
          >Velozes e Furiosos API</span
        >
        <div class="" id="mobile-menu">
          <ul
            class="ml-10 flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
          >
            <li>
              <p
                class="block py-2 pr-4 pl-3 text-zinc-900 hover:text-violet-600 text-lg"
                aria-current="page"
              >
                Frases
              </p>
            </li>
            <li>
              <p
                class="block py-2 pr-4 pl-3 text-zinc-900 hover:text-violet-600 text-lg"
              >
                Analytics
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="grid place-items-center h-screen">
      <p class="text-2xl text-zinc-100">Dashboard</p>
      <table class="table-auto text-zinc-100">
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
