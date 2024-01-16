<template>
      <li class="item" :class="{'item--checked': item.isChecked}">
        <CheckBox 
          :isChecked="item.isChecked" 
          @update:state="checkItem(item.id)"
          bg="#333"
          />
        <p class="item__text"> {{ item.name }}</p>
        <button class="item__btn-delete" @click="() => deleteItem(item.id)">
          <v-icon scale="1" class="item__icon-delete" name="io-trash"/>
        </button>
      </li>
</template>

<script setup lang="ts">
import type { ListItem } from '@/Types';
import CheckBox from "@/components/CheckBox.vue"
import {useItemStore} from "@/stores/itemStore"
const {deleteItem, checkItem} = useItemStore()

defineProps<{
  item: ListItem,
}>()

</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  max-width: 200px;

  &__text {
    text-align: center;
  }

  &__btn-delete {
    border-radius: 5px;
    padding: 3px;
    border: none;
    &:hover {
      background-color: #ff6c6c;
      cursor: pointer;
    }
    &:active {
      background-color: #ff7e7e;
    }
  }


}

.item--checked {
  .item__text {
    text-decoration: line-through;
  }
}
</style>