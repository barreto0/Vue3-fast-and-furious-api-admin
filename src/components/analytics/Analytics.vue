<template>
  <div>
    <div class="h-screen">
      <NavbarVue />
      <div>
        <h1 class="text-zinc-100">Analytics</h1>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarVue from "../common/Navbar.vue";
export default {
  name: "Analytics",
  components: {
    NavbarVue,
  },
};
</script>
