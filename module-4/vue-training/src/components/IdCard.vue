<template>
  <div class="card">
    <img class="img" :src="picture" alt="a cool pic" />
    <p class="infos">
      First name : {{ firstName }} <br />
      Last name : {{ lastName }} <br />
      Gender : {{ gender }} <br />
      Height : {{ height }} <br />
      birth :
      {{
        birth.toLocaleString("en-US", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      }}
      <br />
    </p>
  </div>
</template>

<script setup>
defineProps({
  lastName: String,
  firstName: String,
  gender: String,
  height: Number,
  birth: Date,
  picture: String,
});
</script>

<style scoped>
.card {
  border: 1px solid;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  height: 128px;
}

.img {
  width: 128px;
  height: 100%;
}

.infos {
  flex: 1;
  padding: 10px;
}
</style>