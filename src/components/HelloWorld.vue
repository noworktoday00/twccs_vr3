<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="container">
    <h2 class="border border-dark py-1">mb1</h2>
    <h2 class="border border-dark py-2">mb2</h2>
    <h2 class="border border-dark py-3">mb3</h2>
    <h2 class="border border-dark py-4">mb4</h2>
    <h2 class="border border-dark py-5">mb5</h2>
    <h2 class="border border-dark py-6">mb6</h2>
    <h2 class="border border-dark py-7">mb7</h2>
    <h2 class="border border-dark py-8">mb8</h2>
    <h2 class="border border-dark py-9">mb9</h2>
    <h2 class="border border-dark py-12">mb12</h2>
    <h2 class="border border-dark py-16">mb16</h2>
    <h2 class="border border-dark py-18">mb18</h2>
    <p class="text-center text-dark">Lorem ipsum dolor sit amet.</p>
  </div>
  <!-- <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div> -->
<!-- 
  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p> -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
