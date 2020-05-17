<template>
  <b-navbar toggleable type="light" variant="transparent" fixed="top">
    <b-navbar-toggle target="navbar-toggle-collapse" class="ml-auto" />

    <b-collapse id="navbar-toggle-collapse" is-nav right>
      <b-navbar-nav class="ml-auto text-right">
        <nuxt-link to="/">Classic</nuxt-link>
        <nuxt-link to="/next-generation">Next-Generation</nuxt-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
export default {
  name: "burgermenuComponent",
  components: {
    BootstrapVue,
    IconsPlugin
  }
};
</script>