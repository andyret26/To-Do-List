<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div>
    <NavBar />
    <RouterView />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit&family=Play:wght@400;700&display=swap');

:root {
  --box-shadow: 2px 2px 2px 2px #222;
  font-size: 16px;
  background-color: #333333;
  color: #eae9e9;
  font-family: 'Kanit', sans-serif;
  font-family: 'Play', sans-serif;
}
</style>
