<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex w-[fit-content] rounded-full dark:bg-gray-700 bg-gray-200 px-2.5 py-1"
  >
    <span v-text="label" />
  </div>
</template>
