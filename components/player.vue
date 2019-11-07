<template>
  <div class="col-xs-12 col-sm-6 col-md-3 col-lg-2 mb-3 soundboard__item">
    <label class="soundboard__label mb-2">
      {{ soundname }}
    </label>
    <button class="soundboard__knob" @click.prevent="playSound(soundfile)"></button>
  </div>
</template>

<script>
import audioHandler from '~/mixins/audioHandler.mixin.vue';

export default {
  name: 'playerComponent',
  mixins: [audioHandler],
  props: {
    soundfile: { type: String, required: true },
    soundname: { type: String, required: true },
  },
};
</script>
