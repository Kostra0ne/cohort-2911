<template>
  <h2>AJAX Simple</h2>

  <div v-if="isLoading">...loading</div>
  <div v-else>{{ joke }}</div>
  <div v-if="error">{{ error }}</div>

  <button :disabled="isLoading" @click="doFetch">another one ?</button>
</template>

<script setup>
import { ref } from "vue";

const joke = ref(null);
const isLoading = ref(true);
const error = ref(null);

const doFetch = async () => {
  try {
    isLoading.value = true;
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const json = await res.json();
    joke.value = json.value;
  } catch (err) {
    error.value = err;
  }
  isLoading.value = false;
};

doFetch();
</script>

<style lang="scss" scoped>
</style>