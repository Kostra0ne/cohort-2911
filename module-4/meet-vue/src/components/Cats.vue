<template>
  <h2>Cats</h2>

  <input type="text" v-model="catName" />
  <button @click="createCat">create</button>

  <ul>
    <li v-for="(cat, c) in cats" :key="c">
      <span>{{ cat }}</span>
      <button @click="deleteCat(c)">x</button>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const cats = ref([]);
const catName = ref("base cat");

const createCat = () => cats.value.push(catName.value);

const deleteCat = (index) => cats.value.splice(index, 1);
</script>
