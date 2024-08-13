<template>
  <main>
    <header>
      <Navbar class="nav" />
    </header>

    <RouterView />
  </main>
</template>

<script></script>

<style scoped>
main {
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

header {
  z-index: 10;
  margin-bottom: 3rem;
}

.nav {
  position: sticky;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
