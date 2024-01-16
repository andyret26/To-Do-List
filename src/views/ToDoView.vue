<template>
  <div class="todo">
    <h1 class="todo__header">To-Do</h1>
    <input class="todo__input-text" v-model="inputText" @keyup.enter="onEnterUp" placeholder="Add item"/>
    <ol class="todo__list">
      <TodoItem 
        v-for="item in items" 
        :key="item.id" 
        :item="item" 
      />
    </ol>
    <CheckBox :is-checked="toggleAllState" @update:state="handleToggleAllState($event)" :bg="'inherit'"/>
  </div>
</template>

<script setup lang="ts">
import TodoItem from '@/components/TodoItem.vue'
import CheckBox from '@/components/CheckBox.vue'
import { computed, ref } from 'vue'
import { useItemStore } from "@/stores/itemStore"
const {items, addItem} = useItemStore()

const inputText = ref<string>('')

const toggleAllState = computed<boolean>(() => {
  for (const item of items) {
    if (item.isChecked === false) {
      return false
    }
  }

  return true
})


const onEnterUp = () => {
  addItem(inputText.value)
}

const handleToggleAllState = (newState: boolean) => {
   items.forEach((_, index) => items[index].isChecked = newState)
}

</script>

<style lang="scss" scoped>
.todo {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__input-text {
    border-radius: 10px;
    padding: 3px;
    padding-left: 10px;
    border: none;
    box-shadow: var(--box-shadow)
  }

  &__list {
    padding: 0;
  }
}

</style>
