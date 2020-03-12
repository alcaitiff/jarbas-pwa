<template>
  <div @click="startInput" @focus="startInput" id="app">
    <jarbas />
  </div>
</template>

<script>
import Jarbas from './components/Jarbas';

export default {
  name: 'App',

  components: {
    Jarbas
  },
  methods: {
    startInput() {
      document.getElementById('jarbasInput').focus();
    }
  },
  data: () => ({
  })
};
</script>
<style>
#app {
  margin-left: 5vh;
  margin-right: 5vh;
}
</style>
