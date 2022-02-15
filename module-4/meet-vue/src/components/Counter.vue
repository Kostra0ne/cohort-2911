<template>
  <h2>Counter</h2>
  <p>
    <span>count : </span>
    <b>{{ count }}</b>
  </p>
  <button @click="count++">increment</button>
  <button @click="count--">decrement</button>
  <!-- 
    <button @click="handle('+')">increment</button>
    <button @click="handle('-')">decrement</button>
  -->
</template>

<script setup>
import { ref } from "vue";
const count = ref(0); // this is vue way to create a state

const handle = (mode) => {
  mode === "+" ? count.value++ : count.value--;
};

/*
import {useState} from "react";

export default function Foo() {
  const [count, setCount] = useState(0);
  return <div>
    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={() => setCount(count - 1)}>-</button>

  </div>
}
*/
</script>