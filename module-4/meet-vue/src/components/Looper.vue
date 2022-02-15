<template>
  <h2>LoopaLoop</h2>
  <ul>
    <li v-for="(number, i) in 10" :key="i">{{ number }}</li>
  </ul>

  <ol>
    <li v-for="(user, u) in users" :key="u">{{ user }}</li>
  </ol>

  <div v-for="(product, p) in products" :key="p">
    {{ product.name }} - <b>{{ product.price }} &euro;</b>
  </div>

  <p>
    <span v-for="(value, key, index) in userDetails" :key="index">
      <b> {{ key }}</b> : {{ value }} &nbsp;
    </span>
  </p>
</template>

<script setup>
const users = ["jill", "will", "kill", "bill"];

const products = [
  { name: "laptop", price: 1200 },
  { name: "sneakers", price: 120 },
  { name: "flower", price: 2 },
];

const userDetails = {
  name: "Gui",
  age: 41,
  location: "Sanvensa",
};
</script>