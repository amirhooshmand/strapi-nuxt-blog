<script setup lang="ts">
import type { IGlobal } from "~/types/global";
import { useStrapiMedia } from "~/composables/useStrapiMedia";

const { findOne } = useStrapi();
const globalResponse = await findOne<IGlobal>("global", {
  populate: {
    defaultSeo: {
      populate: "*",
    },
    favicon: {
      populate: "*",
    },
  },
});
const global = globalResponse.data;

useHead({
  title: global?.defaultSeo.metaTitle,
  htmlAttrs: { lang: "en" },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: useStrapiMedia(global?.favicon?.url),
    },
  ],
  meta: [
    { name: "description", content: global?.defaultSeo?.metaDescription },
    { name: "og:title", content: global?.defaultSeo?.metaTitle },
    { name: "og:description", content: global?.defaultSeo?.metaDescription },
    { name: "og:type", content: "website" },
    { name: "og:locale", content: "en_US" },
    {
      name: "og:image",
      content: useStrapiMedia(global?.defaultSeo?.shareImage.url),
    },
  ],
});
</script>

<template>
  <Html>
    <Body>
      <NuxtLayout>
        <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
