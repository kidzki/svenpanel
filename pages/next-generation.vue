<template>
  <div class="fluid-container py-4">
    <div class="row">
      <div class="col-12">
        <div class="soundboard">
          <h1 class="mb-4">SvenPanel 3.0</h1>
          <div class="row">
            <player v-for="(sound, index) in sounds"
            :key="index"
            :soundfile="sound.file"
            :soundname="sound.name"/>
          </div>
        </div>
      </div>
    </div>
    <p class="made">This PWA is made with ❤ and hosted on <a href="https://github.com/kidzki/theshrine_v3">Github</a></p>
  </div>
</template>

<script>
// @ is an alias to /src
import Player from '~/components/player.vue';
import soundmap from '~/static/json/next-generation.json';

export default {
  name: 'home',
  components: {
    Player,
  },
  computed: {
    sounds() {
      return soundmap.map(item => item);
    },
  },
};
</script>
