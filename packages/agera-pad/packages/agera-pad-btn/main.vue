<template>
  <button class="agera-pad-button">
    {{ title }} {{ subTitle }}
  </button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'agera-pad-btn',
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
  },
})
export default class AgeraPadBtn extends Vue {
  private title?: string;

  private subTitle?: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.agera-pad-button {
  background-color: #f0f;
}
</style>
