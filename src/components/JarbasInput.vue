<template>
  <div>
    <v-bottom-navigation>
      <v-text-field
        autofocus
        id="jarbasInput"
        v-model="msg"
        @change="send"
        class="jarbasInput"
        single-line
      ></v-text-field>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  data() {
    return {
      "msg": null
    };
  },
  methods: {
    send() {
      const v = this.msg;
      this.msg = null;
      this.$emit('input', v);
    }
  }

};
</script>

<style>
.jarbasInput {
  margin-left: 3vw;
  margin-right: 3vw;
}
</style>