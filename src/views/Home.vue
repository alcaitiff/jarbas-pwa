<template>
  <div class="home">
    <JarbasInput />
  </div>
</template>

<script>
// @ is an alias to /src
import JarbasInput from '@/components/JarbasInput';
import * as types from '../store/mutation-types';
export default {
  name: 'Home',
  components: {
    JarbasInput
  },
  mounted() {
    this.$store.dispatch(types.GREET);
  },
  methods: {
    say(v) {
      this.$store.dispatch(types.SAY, { value: v });
    }
  }
};
</script>
