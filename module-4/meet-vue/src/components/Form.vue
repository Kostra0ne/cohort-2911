<template>
  <h2>Simple Form</h2>
  <form @submit.prevent="handleCreate" class="form">
    <input type="text" v-model="user.name" />
    <input type="number" v-model.number="user.age" :min="1" />
    <input type="email" v-model="user.email" />
    <div>
      <label for="admin-yes">admin</label>
      <input id="admin-yes" type="radio" v-model="user.isAdmin" :value="true" />
      <label for="admin-no">user</label>
      <input id="admin-no" type="radio" v-model="user.isAdmin" :value="false" />
    </div>
    <button class="button">ok</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const user = ref({
  name: "totooooooooooooo",
  age: 1,
  email: "toto@toto.toto",
  isAdmin: false,
});

const handleCreate = (e) => {
  console.log(user); // dont' forget : user is wrapped in a ref object 
  console.log(user.value); // to access the actual user => user.value
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 768px;
  width: 100%;
  margin: auto;
  gap: 20px;
}

.form > * {
  width: 100%;
}

.button {
  max-width: 120px;
}
</style>