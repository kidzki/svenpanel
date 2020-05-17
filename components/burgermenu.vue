<template>
  <nav class="menu" role="navigation">
    <div class="menu__brand">SvenPanel 3.0</div>
    <ul>
      <li><nuxt-link to="/" prefetch>Classic</nuxt-link></li>
      <li><nuxt-link to="/next-generation" prefetch>Next-Generation</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  beforeCreate() {
    console.log(this.$route.path === '/next-generation');
  }
}
</script>