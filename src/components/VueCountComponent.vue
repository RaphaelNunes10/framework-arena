<script setup>
import { ref, watch } from 'vue';

console.log("Component initialized!");

console.log("Component updated!"); // Vue component updates only once

//---

const count = ref(0);

function incrementCount() {
  count.value++;
  console.log(`Count is: ${count.value}`)
};

watch(() => count.value * 2, (doubleCount) => {
  console.log(`Double of count is: ${doubleCount}`)
});
</script>

<template>
  <h1>Vue Count</h1>
  <h2>Count is: {{count}}</h2>
  <button @click="incrementCount">Count</button>
  <p>
    <a href="/react-count">To React count -></a>
  </p>
</template>