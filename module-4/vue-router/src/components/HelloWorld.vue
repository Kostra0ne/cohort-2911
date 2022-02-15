

<template>
  <div>what is current count in the child component : {{ currentCount }}</div>
  <input type="number" v-model="newCount" />
</template>


<script setup>
import { computed, watch, ref } from "vue";
import { useStore } from "vuex";

const newCount = ref(0);
const store = useStore();

const currentCount = computed(() => store.getters.getCount);
//  store.getters.getCount is a depts of this computed value
// everytime it changes, the Hello world component re-renders

watch(newCount, (updatedValue) => { // the provided callback will be executed anyTime newCoutn changes
  // you use store.commit to call a mutation and pass the updated value to this synchronous setter (setCount)
  store.commit("setCount", updatedValue);
});

</script>

<style scoped>
a {
  color: #42b983;
}
</style>
