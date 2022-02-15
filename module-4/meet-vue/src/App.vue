<template>
  <h1 class="title">welcome @ vue</h1>
  <DynamicStyles />
  <!-- <HelloWorld
    msg="Hello Vue 3 + Vite"
    year="2022"
    v-bind:year-number="2022"
    :is-last-day="true"
    v-bind:calculcus="1 + 1"
    :user="Anna"
  />
  <hr />
  <Expressions />
  <hr />
  <Conditions />
  <hr />
  <ScopedStyles />
  <hr />
  <Looper />
  <hr />
  <Summarize1
    myProp="a simple string"
    :isItALovelyDay="null"
    :users="['anne', 'joss', 'minyoung', 'henri pierre']"
  />
  <hr />
  <Events />
  <hr />
  <Counter />
  <hr /> -->
  <!-- <SendValueUp @foo="handleEmit" @user-logged-in="handleUser" /> -->

  <!-- <SendValueUp @range-changed="handleEmit" />
  <hr />
  <ViewModel /> -->
  <!-- <hr />
  <VueRocks />
  <hr />
  <SelectOptions />
  <hr />
  <Form />
  <hr />
  <Cats />
  <hr />
  <AjaxSimple /> -->
</template>

<script setup>
// https://www.youtube.com/watch?v=OrxmtDw4pVI&t=211s

// Vue doc is nice
// https://vuejs.org/

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd

// vue fundamentals
// https://www.youtube.com/watch?v=A5cVyjrKx_Q
// https://www.youtube.com/watch?v=nyJSd6V2DRI&list=PL55RiY5tL51p-YU-Uw90qQH419BM4Iz07

// routing basics
// https://www.youtube.com/watch?v=-uCUCmrNgeo

import HelloWorld from "./components/HelloWorld.vue";
import Expressions from "./components/Expressions.vue";
import Conditions from "./components/Conditions.vue";
import ScopedStyles from "./components/ScopedStyles.vue";
import Looper from "./components/Looper.vue";
import Events from "./components/Events.vue";
import Counter from "./components/Counter.vue";
import SendValueUp from "./components/SendValueUp.vue";
import ViewModel from "./components/ViewModel.vue";
import VueRocks from "./components/VueRocks.vue";
import Form from "./components/Form.vue";
import Cats from "./components/Cats.vue";
import AjaxSimple from "./components/AjaxSimple.vue";
import Summarize1 from "./components/Summarize1.vue";
import SelectOptions from "./components/SelectOptions.vue";
import DynamicStyles from "./components/DynamicStyles.vue";

const Anna = { isIronhacker: true, name: "AB" };

const handleEmit = (payload) => {
  console.log(`got emited value : ${payload}`);
};

const handleUser = (foundUser) => {
  console.log(`the user is :`, foundUser);
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.title {
  color: firebrick;
}
</style>

