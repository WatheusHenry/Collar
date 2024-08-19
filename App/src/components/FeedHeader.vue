<template>
  <div class="container">
    <span>
      <img src="../../public/assets/LogoEscrita.svg" alt="">
    </span>
    <span>
      <img src="../theme/assets/icons/BellIcon.svg" alt="">
    </span>
  </div>

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
  padding: 2rem;
}
</style>
