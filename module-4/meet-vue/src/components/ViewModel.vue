<template>
  <div>
    <h2>ViewModel</h2>
    <p>2 way binding is awesome !</p>
    <input type="text" v-model="simpleViewModel" />
    <input type="color" v-model="myColor" />
    <p>{{ simpleViewModel }}</p>
    <p>
      the input value is the state's value AND the state's value is the input's
      value
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const simpleViewModel = ref("hellooooooooo"); // create a state with a default value of "hello"
const myColor = ref("#DADADA");
</script>
