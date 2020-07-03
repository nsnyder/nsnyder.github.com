<template>
  <div class="items-baseline min-h-screen grid-cols-main header-rows">
    <div
      class="w-full h-full bg-fixed bleed la-bg"
      role="img"
      aria-label="Nathan sitting on a pier in Los Angeles"
    />
    <div
      class="absolute bottom-0 z-0 grid w-full h-64 grid-cols-4 grid-rows-4 overflow-hidden md:grid-cols-12"
    >
      <div
        class="col-start-2 col-end-13 row-start-3 row-end-5 origin-top-right transform bg-teal-700 shadow-md -rotate-12 md:row-start-2 lg:row-start-1"
      />
      <div
        class="col-start-1 col-end-13 row-start-3 row-end-5 origin-top-left transform bg-teal-600 shadow-md md:row-start-2 rotate-30 lg:row-start-1"
      />
    </div>
    <div class="z-10 grid-me">
      <h1
        class="px-8 text-3xl origin-bottom-left skew-label light sm:text-5xl md:text-6xl"
      >
        Nathan Snyder
      </h1>
    </div>

    <div class="z-10 grid-about sm:grid-content-terse">
      <div class="my-4 text-xl text-gray-200 md:text-2xl">
        Hi! I'm a software engineer at The Restaurant Store. I love tackling
        complex projects, learning new things, and building tools that help
        people get things done quickly and effectively.
      </div>
      <div>
        <a
          :href="'mailto:' + emailAddress"
          class="no-underline duration-100 border-black skew-label light hover:translate-x-1"
        >
          Contact Me
        </a>
      </div>
    </div>

    <div
      class="z-10 flex w-full py-2 space-x-2 text-left text-white grid-social"
    >
      <a
        v-for="(link, index) in socialLinks"
        :key="index"
        v-bind="link.attributes || {}"
        target="_blank"
        class="p-1 duration-100 transform hover:-translate-y-1"
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
  .la-bg {
    /* stylelint-disable-next-line */
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url("/img/nathan-los-angeles-pier.jpg");
    background-size: cover;
    background-position-y: bottom;
    background-position-x: 70%;
  }

  @screen md {
    background-position-x: center;
  }
</style>
