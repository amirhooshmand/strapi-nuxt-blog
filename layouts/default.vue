<script setup lang="ts"></script>

<template>
  <div class="flex-1">
    <BaseNavbar />
    <main class="min-h-[calc(100vh-var(--footer-height))]">
      <div class="">
        <slot />
      </div>
    </main>
    <BaseFooter />
  </div>
</template>

<style lang="scss">
:root {
  --footer-height: 57px;
}
</style>
