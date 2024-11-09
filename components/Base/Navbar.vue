<script setup lang="ts">
import type { ICategory } from "~/types/article";
import type { IGlobal } from "~/types/global";

const { find, findOne } = useStrapi();
const globalResponse = await findOne<IGlobal>("global", {
  populate: "*",
});
const global = globalResponse.data;

const categoriesResponse = await find<ICategory>("categories", {
  populate: "*",
});
const categories = categoriesResponse.data;

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  handleScroll();
});

const trigger = ref(false);

const handleScroll = () => {
  trigger.value = window?.scrollY > 50;
};
</script>

<template>
  <nav class="fixed top-4 mx-auto inset-x-0 z-50 w-[95%] lg:w-full">
    <div class="hidden lg:block w-full">
      <div
        class="flex relative justify-between px-4 py-3 rounded-md transition-[width] duration-300 mx-auto backdrop-blur"
        :class="{ 'w-[80%]': trigger, 'w-full': !trigger }"
      >
        <div
          v-if="trigger"
          class="absolute inset-0 h-full w-full bg-white dark:bg-neutral-900 pointer-events-none opacity-40 rounded-lg"
        ></div>

        <div class="flex flex-row gap-2 items-center z-10">
          <nuxt-link
            class="font-normal flex space-x-2 items-center text-lg mr-4 relative z-20"
            to="/"
            :class="{
              'text-gray-7800 dark:text-gray-300': trigger,
              'text-gray-800 dark:text-gray-300': !trigger,
            }"
            ><span class="font-bold text-xl">{{
              global.siteName
            }}</span></nuxt-link
          >
          <div class="flex items-center gap-1.5">
            <NuxtLink
              v-for="category in categories"
              class="flex items-center justify-center capitalize leading-[110%] px-4 py-2 rounded-md hover:shadow-[0px_1px_0px_0px_var(--neutral-600)_inset] transition duration-200"
              :class="{
                'hover:text-gray-200/80 text-gray-800 dark:text-gray-300':
                  trigger,
                'text-gray-800 dark:text-gray-300': !trigger,
              }"
              :to="{
                name: 'categories-slug',
                params: { slug: category.slug },
              }"
            >
              {{ category.name }}
            </NuxtLink>
          </div>
        </div>
        <div class="flex space-x-2 items-center">
          <div class="flex gap-2 p-1 rounded-md">
            <a
              href="https://github.com/amirhooshmand/strapi-nuxt-blog"
              target="_blank"
              :class="{
                'hover:text-gray-200/80 text-gray-800 dark:text-gray-300':
                  trigger,
                'text-gray-800 dark:text-gray-300': !trigger,
              }"
            >
              <Icon name="ph:github-logo-bold" class="text-xl" />
            </a>
            <div
              :class="{
                'hover:text-gray-200/80 text-gray-800 dark:text-gray-300':
                  trigger,
                'text-gray-800 dark:text-gray-300': !trigger,
              }"
            >
              <BaseThemeManager />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex h-full w-full items-center lg:hidden">
      <div
        class="flex justify-between bg-transparent items-center w-full rounded-md px-2.5 py-1.5 transition duration-200"
      >
        <nuxt-link
          class="font-normal flex space-x-2 items-center text-sm mr-4 text-gray-800 dark:text-gray-300 relative z-20"
          to="/"
          ><span class="font-bold text-xl">{{
            global.siteName
          }}</span></nuxt-link
        ><svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          class="text-gray-800 dark:text-gray-300 h-6 w-6"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"
          ></path>
        </svg>
      </div>

      <!-- TODO: complete mobile menu -->
    </div>
  </nav>
</template>
