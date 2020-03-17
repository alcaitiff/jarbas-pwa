<template>
  <v-app>
    <v-content>
      <span v-html="v"></span>
    </v-content>
    <jarbas-input @input="receive" />
  </v-app>
</template>

<script>
import JarbasInput from './JarbasInput';
import * as types from '../store/mutation-types';
export default {
  name: 'Jarbas',

  components: {
    JarbasInput
  },
  methods: {
    receive(v) {
      this.v += '<br>' + v;
      this.$store.dispatch(types.PROCESS, { value: v, callback: (v) => console.log(v) });
    }
  },
  data: () => ({
    v: ''
  })
};
</script>
<style>
</style>
