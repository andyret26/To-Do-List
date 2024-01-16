<template>
  <div class="box" 
  :style="{
    borderRadius: props.borderRadius,
    backgroundColor: props.bg,
    minWidth: props.size,
    minHeight: props.size,
    width: props.size,
    height: props.size,
    }"
  >
    <button class="box__btn" @click="handleBoxClick" :style="{borderRadius: props.borderRadius}">
      <div class="box__icon" v-if="props.isChecked"></div>

        <!-- <v-icon class="" name="fa-check" fill="#fff"/> -->
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  isChecked: {
    type: Boolean,
    required: true
  },
  borderRadius: {
    type: String,
    default: "10px"
  },
  bg: {
    type: String,
    default: "#111"
  },
  size: {
    type: String,
    default: "30px"
  }
})

const emit = defineEmits(["update:state"])

function handleBoxClick(): void {
  emit("update:state", !props.isChecked)
}

</script>

<style scoped lang="scss">
.box {
  box-sizing: border-box;
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  &__btn {
    background-color: inherit;
    border: none;
    padding: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
  }

  &__icon {
    background-color: #fff;
    width: 60%;
    height: 60%;
    border-radius: 50%;

  }
}

</style>