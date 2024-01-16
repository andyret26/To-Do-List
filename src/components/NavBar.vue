<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="nav-bar">
    <RouterLink class="nav-bar__link" to="/">Home</RouterLink>
    <RouterLink class="nav-bar__link" to="/about">About</RouterLink>
    <RouterLink class="nav-bar__link" to="/todo">ToDo</RouterLink>
  </div>
</template>

<style scoped>
.nav-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 50px;
  padding: 0 10px;

  background-color: #555;
  color: white;
  box-shadow: var(--box-shadow)

}

.nav-bar__link {
  color: white;
  box-sizing: border-box;
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 5px;

  &:hover {
    background-color: #444;
  }

  &:active {
    background-color: #333;
  }
}
</style>
