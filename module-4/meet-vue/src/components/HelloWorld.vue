<template>
  <p>{{ msg }} ({{ typeof msg }})</p>
  <p>{{ year }} ({{ typeof year }})</p>
  <p>{{ yearNumber }} ({{ typeof yearNumber }})</p>
  <p>{{ calculcus }} ({{ typeof calculcus }})</p>
  <p>{{ user }} ({{ typeof user }})</p>
  <p>{{ isLastDay }} ({{ typeof isLastDay }})</p>
</template>

<script setup>
// defineProps is proxied in script setup (no need to import it)
defineProps({
  msg: String,
  year: String,
  yearNumber: Number,
  calculcus: Number,
  user: Object,
  isLastDay: Boolean,
});
</script>