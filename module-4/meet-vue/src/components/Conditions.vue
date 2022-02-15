<template>
  <h2>Conditions</h2>
  <p v-if="true">I'm true(thy), hence i'm here !</p>
  <p v-if="false">You won't see me</p>
  <p v-if="100 < 1">nope</p>

  <p v-else-if="aBooleanValue">YEAH !!!</p>
  
  <p v-else>yes !</p>
</template>

<script setup>
const aBooleanValue = 100 < 1000;
</script>
