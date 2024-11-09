<script setup lang="ts">
import type { ICategory, IArticle } from "~/types/article";

const { find } = useStrapi();
const route = useRoute();

const categoriesResponse = await find<ICategory>("categories", {
  filters: { slug: route.params.slug },
  populate: "*",
});
const category = categoriesResponse.data[0];

const articlesResponse = await find<IArticle>("articles", {
  filters: { category: { slug: category.slug } },
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
const articles = articlesResponse.data;

useHead({
  title: `${category?.name}`,
  meta: [
    { name: "description", content: category?.description },
    { name: "og:title", content: category?.name },
    { name: "og:description", content: category?.description },
  ],
});
</script>

<template>
  <PageContainer class="pt-28 container mx-auto">
    <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ArticleCard
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </div>
  </PageContainer>
</template>
