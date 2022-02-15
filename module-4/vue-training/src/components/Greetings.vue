<template>
  <div class="greeting" @click="emit('lang-selected', lang)">
    <span>{{ msg }}</span
    >&nbsp;<slot></slot>
    <!-- slot will be replaced with the content written in the parent component -->
  </div>
</template>
<script setup>
// https://vuejs.org/guide/components/slots.html#slots
const emit = defineEmits(["lang-selected"]);

const props = defineProps({
  lang: {
    type: String,
    default: "en",
  },
});

const msgs = {
  en: "Hello",
  es: "Hola",
  fr: "Bonjour",
  de: "Hallo",
};

const msg = msgs[props.lang];
</script>

<style scoped>
.greeting {
  border: solid;
  margin-bottom: 10px;
  padding: 10px;
}
</style>