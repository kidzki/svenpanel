<template>
  <nav class="menu" role="navigation">
    <div class="menu__brand">SvenPanel 3.0</div>
    <ul>
      <li v-if="this.$route.path !== '/'"><nuxt-link to="/" prefetch>Classic</nuxt-link></li>
      <li v-if="this.$route.path !== '/next-generation'"><nuxt-link to="/next-generation" prefetch>Next-Generation</nuxt-link></li>
    </ul>
  </nav>
</template>