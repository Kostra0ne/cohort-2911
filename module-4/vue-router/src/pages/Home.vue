<template>
  <div>
    <h1>Home</h1>
    <p>
      what is the current count ?
      {{ currentCount }}
    </p>
    <hr />
    <HelloWorld />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import HelloWorld from "./../components/HelloWorld.vue";

const store = useStore();
const currentCount = computed(() => store.getters.getCount);
//  store.getters.getCount is a depts of this computed value
// everytime it changes, the Hello world component re-renders
</script>
