<template>
  <button class="button" @click="handle">
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "ok",
  },
});

const handle = () => alert("hey");
</script>

<style scoped>
.button {
  height: 32px;
  max-width: 220px;
  width: 100%;
  cursor: pointer;
  background: none;
  border: 1px solid;
  border-radius: 0.3rem;
}
.button:hover {
  background: black;
  color: whitesmoke;
}
</style>