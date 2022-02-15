<template>
  <!-- <h1>Send value up the tree</h1>
  <button @click="emit('foo', 'i\'m coming straight from the child component')">
    send value to parent component
  </button>
  <hr />
  <button @click="emit('user-logged-in', { name: 'toto' })">user found</button> -->

  <input type="range" @input="(e) => emit('range-changed', Number(e.target.value))">

</template>

<script setup>
const emit = defineEmits(["foo", "user-logged-in", "range-changed"]);
// defineEmits is proxied in script setup
// here i'm creating a custom event named foo
</script>