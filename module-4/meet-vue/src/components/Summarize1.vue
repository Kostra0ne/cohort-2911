<template>
  <div>
    <h2>Summarize 1</h2>
    {{ myProp }}
    <p v-if="isItALovelyDay">WHAT A LOVELY DAY</p>
    <p v-else>SHOULD HAVE STAYED IN BED</p>
    <h2>some users</h2>
    <p class="user" v-for="(user, i) in users" :key="i"> >>> {{user}}</p>
  </div>
</template>

<script setup>
defineProps({
  myProp: String,
  isItALovelyDay: Boolean,
  users: Array,
});
</script>

<style scoped>
.user {
    color: green;
    font-weight: bold;
}
</style>