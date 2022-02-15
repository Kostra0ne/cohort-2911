<template>
  <div>
    <h2 class="title">Expressions</h2>
    <p>You can compute values in vue templates</p>
    <p>{{ user.name }}</p>
    <!-- interpolation -->
    <p>{{ 1 + 1 }}</p>
    <p>{{ x }}</p>
    <p>{{ getThingsOut(10) }}</p>
    <p>{{ getThingsOut(true) }}</p>
  </div>
</template>

<script setup>
const x = "hello, i'm x";
const user = { name: "toto" };
const getThingsOut = (val) => typeof val;
</script>

<!--
<script>
export default {
  setup() {
    const x = "hello, i'm XXX";
    const user = { name: "toto" };
    const getThingsOut = (val) => typeof val;
    return {
      x,
      user,
      getThingsOut
    };
  },
};
</script>
-->