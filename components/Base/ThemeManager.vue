<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<template>
  <ClientOnly>
    <button aria-label="Theme" @click="isDark = !isDark">
      <Icon
        v-if="colorMode.value === 'dark'"
        name="ph:moon-stars-bold"
        class="text-xl"
      />
      <Icon v-else name="ph:sun-bold" class="text-xl" />
    </button>
  </ClientOnly>
</template>
