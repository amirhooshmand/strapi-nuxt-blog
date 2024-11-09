<script setup lang="ts">
import type { IArticle } from "~/types/article";
import { useStrapiMedia } from "~/composables/useStrapiMedia";

const { find } = useStrapi();
const route = useRoute();
const articleResponse = await find<IArticle>("articles", {
  filters: { slug: route.params.slug },
  populate: {
    cover: {
      populate: "*",
    },
    author: {
      populate: "*",
    },
    category: {
      populate: "*",
    },
    blocks: {
      populate: "*",
    },
  },
});
const article = articleResponse.data[0];

useHead({
  title: article?.title,
  meta: [
    { name: "description", content: article?.description },
    { name: "og:title", content: article?.title },
    { name: "og:description", content: article?.description },
    { name: "og:image", content: useStrapiMedia(article?.cover?.url) },
  ],
});
</script>

<template>
  <PageContainer>
    <div class="container mx-auto">
      <nuxt-link
        to="/"
        class="flex items-center transition-all gap-1 hover:gap-2 w-[fit-content]"
      >
        <Icon name="heroicons-outline:arrow-left" class="text-xl" />
        Back
      </nuxt-link>
    </div>

    <img
      v-if="article.cover"
      class="w-screen mt-5"
      :src="useStrapiMedia(article.cover.url)"
    />

    <div class="px-4 py-4 container mx-auto flex">
      <div>
        <h1 class="text-6xl font-bold">
          {{ article.title }}
        </h1>
        <p
          v-if="article.description"
          class="mt-4 text-2xl text-gray-700 dark:text-gray-400"
        >
          {{ article.description }}
        </p>
      </div>

      <div class="flex ml-auto">
        <div class="container mx-auto">
          <span class="px-2 self-center text-gray-800 dark:text-gray-300">{{
            article.author.name
          }}</span>
          <div
            v-if="article.publishedAt"
            class="px-2 self-center text-gray-700 dark:text-gray-400 text-right"
          >
            {{ new Date(article.publishedAt).toLocaleDateString() }}
          </div>
        </div>
        <img
          class="w-12 h-12 bg-cover bg-top rounded-full"
          :src="useStrapiMedia(article.author.avatar.url)"
          :alt="article.title"
        />
      </div>
    </div>
    <main class="mt-8">
      <Blocks v-if="article.blocks" :blocks="article.blocks" />
    </main>
  </PageContainer>
</template>
