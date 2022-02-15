<template>
  <h2>CSS class</h2>
  <div
    @click="setActiveBlock"
    class="box"
    :class="{ 'is-active': isActive, 'is-big': isActive }"
  >
    Hello, World
  </div>

  <h2>styles</h2>
  <label for="">x</label>
  <input type="range" v-model.number="pos.x" />
  <label for="">y</label>
  <input type="range" v-model.number="pos.y" />

  <div class="container">
    <div
      class="box"
      :style="{ left: pos.x + 'px', top: pos.y + 'px' }"
    >
      movable
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isActive = ref(false);

const pos = ref({ x: 0, y: 0 });

const setActiveBlock = () => (isActive.value = !isActive.value);

// setInterval(setActiveBlock, 2000);
</script>

<style scoped>
.container {
  position: relative;
  height: 200px;
}

.container .box {
  position: relative;
}

.box {
  border: 1px solid;
  padding: 10px;
  border-radius: 0.3rem;
}

.is-active {
  background: #3ec2e2;
  color: white;
  font-weight: bold;
}

.is-big {
  font-size: 40px;
}
</style>