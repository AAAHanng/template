<template class="icon-demo">
  <SvgIcon class="svg" :name="icon" :width="'20px'" :height="'20px'" />
  <span>{{ title }}</span>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.icon-demo {
  display: flex;
  align-items: center;
}
.svg {
  display: flex;
  padding-right: 20px;
}
</style>
