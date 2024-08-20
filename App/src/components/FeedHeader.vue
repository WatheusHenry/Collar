<template>
  <section class="container">
    <span>
      <img class="logo" src="../theme/assets/LogoEscrita.svg" alt="">
    </span>
    <span>
      <img src="../theme/assets/icons/BellIcon.svg" alt="">
    </span>
  </section>

</template>

<script setup lang="ts">
defineProps({
  name: String,
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem;
}

.logo {
  width: 6rem;
}
</style>
