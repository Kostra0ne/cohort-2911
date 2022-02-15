<template>
  <h2>Events</h2>
  <div>
    <p v-on:click="handle">click</p>
    <!-- same as below -->
    <div @click="handle">click too</div>
    <input type="color" @input="handle" />
    <p @mouseenter="handle">mouse enter</p>

    <MyButton />
    <MyButton text="a customizable button" />
  </div>
  <!-- 
    CREATE A MyButton COMPONENT 
    ACCEPTING A text prop (String)
     and login on the console something when clicked
  -->
</template>

<script setup>

import MyButton from "./MyButton.vue";

const handle = (evt) => {
  console.log(evt);
  // console.log(evt.type, evt);
};
</script>