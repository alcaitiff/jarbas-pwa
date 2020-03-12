import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-types';
import SpeechSynthesisUtteranceConfig from "../config/SpeechSynthesisUtterance.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    [types.GREET]() {
      //Greetings validation
      //Verify time (morning,afternoon,evening)
      //Verify if already greet today if so use a more simple greet like "Hi" 
      //Verify name
      //If already know who is say it, otherwise ask it and store
      //this.dispatch(types.SAY, { lang: "en-US", value: "Greetings my friend." });
    },
    [types.SAY](internal, payload) {
      const ut = new SpeechSynthesisUtterance(payload.value);
      if (payload.lang) {
        ut.lang = payload.lang;
      }
      ut.rate = SpeechSynthesisUtteranceConfig.rate;
      ut.pitch = SpeechSynthesisUtteranceConfig.pitch;
      window.speechSynthesis.speak(ut);
    }
  },
  modules: {
  }
});
