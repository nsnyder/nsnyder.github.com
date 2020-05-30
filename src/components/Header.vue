<template>
  <div
    class="items-baseline min-h-screen bg-fixed grid-cols-main header-rows bg-gradient-blue-purple"
  >
    <h1 class="text-5xl font-display sm:text-6xl grid-me">
      Nathan Snyder
    </h1>

    <div class="grid-about grid-content-terse">
      <div class="my-4 text-xl">
        Hi! I'm a software engineer at The Restaurant Store. I love tackling
        complex projects, learning new things, and building tools that help
        people get things done quickly and effectively.
      </div>
      <div>
        <a
          :href="'mailto:' + emailAddress"
          class="no-underline duration-100 border-black skew-label short hover:translate-x-1"
        >
          Contact Me
        </a>
      </div>
    </div>

    <div class="flex w-full py-2 text-left text-white grid-social">
      <a
        v-for="(link, index) in socialLinks"
        :key="index"
        v-bind="link.attributes || {}"
        target="_blank"
        class="p-1 mx-1 duration-100 transform hover:-translate-y-1"
      >
        <SvgIcon
          class="w-6 h-6 text-white"
          v-bind="link.svgAttributes || {}"
          :name="link.icon"
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
  import SvgIcon from "~/components/partials/SvgIcon.vue";
  import { emailAddress, urls } from "~/constants";
  import { defineComponent } from "@vue/composition-api";

  export default defineComponent({
    name: "Header",

    components: {
      SvgIcon,
    },

    props: {},

    setup() {
      const socialLinks = [
        {
          icon: "Github",
          attributes: {
            href: urls.githubProfile,
            title: "My Github profile",
          },
          svgAttributes: {
            title: "My Github profile",
          },
        },
        {
          icon: "LinkedIn",
          attributes: {
            href: urls.linkedInProfile,
            title: "My LinkedIn profile",
          },
          svgAttributes: {
            title: "My LinkedIn profile",
          },
        },
        {
          icon: "Twitter",
          attributes: {
            href: urls.twitterProfile,
            title: "My Twitter timeline",
          },
          svgAttributes: {
            title: "My Twitter timeline",
          },
        },
      ];

      return {
        emailAddress,
        socialLinks,
      };
    },
  });
</script>

<style scoped>
  .grid-social > *:first-child {
    @apply ml-0;
  }
</style>
