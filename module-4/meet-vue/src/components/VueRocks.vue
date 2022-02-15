<template>
  <h2>Vue Rocks</h2>
  <input type="number" v-model.number="count" />
  <ul>
    <li v-for="(num, i) in count" :key="i">{{ num }}</li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
const count = ref(1); // a state with a default value of 1
</script>
