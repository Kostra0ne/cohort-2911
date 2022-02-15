<template>
  <div>
    <h1>cats are nice</h1>
    ho many cats in database ? {{ cats.length }}
    <p v-if="!cats.length">..loading</p>
    <ul v-else>
      <li v-for="(cat, i) in cats">
        <span>{{ cat.name }}</span>
        <button @click="fetchACat(cat._id)">details</button>
      </li>
    </ul>
    <hr />
    <div v-if="currentCat">
      {{ currentCat.name }} {{ currentCat.age }} {{ currentCat.description }}
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

// calling an vuex async action is done through store.dispatch
store.dispatch("fetchCats");

const cats = computed(() => store.getters.cats);
const currentCat = computed(() => store.getters.cat);

const fetchACat = (id) => {
  store.dispatch("fetchOneCat", id);
};
</script>

<style scoped>
</style>