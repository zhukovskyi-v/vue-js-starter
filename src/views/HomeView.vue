<template>
  <main>
    <div>
      <button @click="increaseC" class="btn">plus</button>
      <span class="counter">{{ counter }}</span>
      <button @click="deacreaseC" class="btn">minus</button>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0)
const increaseC = () => {
  counter.value++
}
const deacreaseC = () => {
  counter.value--
}
</script>
