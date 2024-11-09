<script setup lang="ts">
import { useStrapiMedia } from "~/composables/useStrapiMedia";

defineProps({
  article: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <nuxt-link
    :key="article.id"
    :to="{ name: 'articles-slug', params: { slug: article.slug } }"
    class="overflow-hidden rounded-xl bg-white dark:bg-neutral-900 shadow-sm transition-shadow hover:shadow-md"
  >
    <div
      :style="{ backgroundImage: `url(${useStrapiMedia(article.cover.url)})` }"
      class="w-full h-60 bg-cover bg-center"
    />
    <div class="px-4 py-4">
      <BaseBadge
        v-if="article.category"
        :label="article.category.name"
        class="capitalize"
      />
      <div class="mt-3">
        <h2
          id="title"
          class="text-xl font-bold text-gray-800 dark:text-gray-300"
        >
          {{ article.title }}
        </h2>
        <p
          class="line-clamp-2 mt-2 text-gray-300 dark:text-gray-400 min-h-[42px]"
        >
          {{ article.description }}
        </p>
      </div>
      <div class="flex mt-5">
        <img
          :src="useStrapiMedia(article.author.avatar.url)"
          class="w-12 h-12 bg-cover bg-top rounded-full"
          :alt="article.title"
        />
        <span class="px-2 self-center text-gray-800 dark:text-gray-300">{{
          article.author.name
        }}</span>
      </div>
    </div>
  </nuxt-link>
</template>
