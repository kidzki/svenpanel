<template>
  <div class="fluid-container py-4">
    <input class="menu__switch" id="menu-switch" type="checkbox" />
    <burgermenu />
    <div class="page__wrap">  
      <label for="menu-switch" id="menu-toggle" class="menu__toggle">
        <span class="menu__toggle--icon"></span>
      </label>
      <div class="row">
        <div class="soundboard">
          <div class="soundboard__header">
            <h1>SvenPanel 3.0</h1>
            <h3>Classic</h3>
          </div>
          <div class="row">
            <player
              v-for="(sound, index) in sounds"
              :key="index"
              :soundfile="sound.file"
              :soundname="sound.name"
            />
          </div>
        </div>
      </div>
      <p class="made">
        This PWA is made with ❤ and hosted on
        <a href="https://github.com/kidzki/svenpanel">Github</a>
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Burgermenu from "~/components/burgermenu.vue";
import Player from "~/components/player.vue";
import soundmap from "~/static/json/sounds.json";

export default {
  name: "home",
  components: {
    Burgermenu,
    Player
  },
  computed: {
    sounds() {
      return soundmap.map(item => item);
    }
  }
};
</script>
