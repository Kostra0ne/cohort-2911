
<template>
  <!-- when clicking on a greeting card, emit the lang and display the clicked user lang -->
  <div v-if="currentUserLang">
    <p>The current user lang is {{ currentUserLang }}</p>
    <button @click="currentUserLang = null">reset lang</button>
  </div>

  <Greetings
    v-for="(user, i) in users"
    :key="i"
    @lang-selected="(lang) => (currentUserLang = lang)"
    :lang="user.lang"
    ><span>{{ user.name }}</span></Greetings
  >

  <IdCard
    lastName="Doe"
    firstName="John"
    gender="male"
    :height="178"
    :birth="new Date('1992-07-14')"
    picture="https://randomuser.me/api/portraits/men/44.jpg"
  />

  <IdCard
    lastName="Delores"
    firstName="Obrien"
    gender="female"
    :height="172"
    :birth="new Date('1988-05-11')"
    picture="https://randomuser.me/api/portraits/women/44.jpg"
  />
</template>

<script setup>
import { ref } from "vue";
import IdCard from "./components/IdCard.vue";
import Greetings from "./components/Greetings.vue";

const currentUserLang = ref(null);

const users = [
  { name: "Ludwig", lang: "de" },
  { name: "François", lang: "es" },
  { name: "Emma", lang: "fr" },
  { name: "Bob" },
];
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
