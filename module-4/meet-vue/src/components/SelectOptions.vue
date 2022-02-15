<template>
  <h2>Select / Options</h2>
  <form @submit.prevent="options.push(newFruit)">
      <input type="text" placeholder="new fruit" v-model="newFruit">
      <button>add</button>
  </form>
  <select v-model="selected">
    <option v-for="(opt, i) in options" :key="i" :value="opt">{{ opt }}</option>
  </select>
  <p>The selected option is {{ selected }}</p>
  <p>
    Is the selected fruit starting with p and has a length greater than 5? :
    <b> {{ questionResponse }}</b>
  </p>
  <p>sum of letters : {{ sumOfLetters }}</p>
</template>

<script setup>
import { computed, ref } from "vue";
const options = ref(["orange", "pear", "peach", "papadapada", "banana"]);
const selected = ref(options.value[1]);
const newFruit = ref("");

const questionResponse = computed(() => {
  // the ideas behind computed are
  // - put the logic away from the template
  // - re-render whenever a dependencie value is changing
  // (in this case, the dependency is selected)
  return selected.value.startsWith("p") && selected.value.length > 5;
});

const sumOfLetters = computed(() => options.value.reduce((a, v) => a + v.length, 0));
</script>
