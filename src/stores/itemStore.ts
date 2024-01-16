import { defineStore } from 'pinia'
import type { ListItem } from '@/Types'
import { ref } from 'vue'

export const useItemStore = defineStore('itemStore', () => {
  const idCount = ref<number>(parseInt(JSON.parse(localStorage.getItem("idCount") || "0")))
  const items = ref<ListItem[]>(JSON.parse(localStorage.getItem("items") || "[]"))

  function addItem(itemName: string) {
    items.value.push({
      id: idCount.value,
      isChecked: false,
      name: itemName
    })
    idCount.value++

    presistToLocalStorage()
  }

  function deleteItem(id: number) {
    const foundItemIndex = items.value.findIndex(i => i.id === id)
    if (foundItemIndex !== -1){
      items.value.splice(foundItemIndex, 1)
    }

    presistToLocalStorage()
  }

  function checkItem(id: number) {
    const foundItemIndex = items.value.findIndex(i => i.id === id)
    if (foundItemIndex !== -1) {
      items.value[foundItemIndex].isChecked =  !items.value[foundItemIndex].isChecked
    }

    presistToLocalStorage()
  }

  function presistToLocalStorage() {
    localStorage.setItem("items", JSON.stringify(items.value))
    localStorage.setItem("idCount", JSON.stringify(idCount.value))
  }

  return {
    items,
    addItem,
    deleteItem,
    checkItem
  }

})