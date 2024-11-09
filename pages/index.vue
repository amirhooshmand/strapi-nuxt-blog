<script setup lang="ts">
import type { IArticle } from "~/types/article";

const { find } = useStrapi();

const articlesResponse = await find<IArticle>("articles", {
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
</script>

<template>
  <PageContainer>
    <div v-if="articles.length" class="container mx-auto grid grid-cols-1">
      <ArticleCard :article="articles[0]" />
      <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ArticleCard
          v-for="article in articles.splice(1)"
          :key="article.id"
          :article="article"
        />
      </div>
    </div>
  </PageContainer>
</template>
