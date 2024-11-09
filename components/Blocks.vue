<script setup lang="ts">
import md from "markdown-it";
import type { IBlock } from "~/types/block";
import { useStrapiMedia } from "~/composables/useStrapiMedia";

const props = defineProps({
  blocks: {
    type: Array as PropType<IBlock[]>,
    required: true,
  },
});

const mdRenderer = md();
</script>

<template>
  <div v-for="block in blocks">
    <div
      v-if="block.__component === 'shared.rich-text'"
      class="container prose mx-auto py-8 px-3 dark:text-gray-300 text-gray-800 leading-8"
    >
      <div v-html="mdRenderer.render(block.body ?? '')" />
    </div>
    <div v-else-if="block.__component === 'shared.media'" class="py-8">
      <img :src="useStrapiMedia(block.file?.url ?? '')" class="w-screen" />
    </div>
    <div v-else-if="block.__component === 'shared.quote'" class="px-3 py-6">
      <blockquote
        class="container mx-auto border-l-4 dark:border-gray-700 border-gray-500 py-2 pl-6 dark:text-gray-300 text-gray-800"
      >
        <p class="text-5xl font-medium italic">{{ block.body }}</p>
        <cite class="mt-4 block font-bold uppercase not-italic">
          {{ block.title }}
        </cite>
      </blockquote>
    </div>
    <div v-else-if="block.__component === 'shared.slider'">
      <!-- TODO: create slider component -->
    </div>
    <div v-else>{{ block }}</div>
  </div>
</template>
