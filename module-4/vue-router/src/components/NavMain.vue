<template>
  <nav>
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/contact">contact</router-link>
  </nav>
</template>

<script setup>
</script>

<style scoped>
a {
  font-weight: bold;
  margin-right: 10px;
}

.is-active {
  color: dodgerblue;
}
</style>