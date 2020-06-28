<template>
  <footer class="py-8 bg-gray-700 grid-cols-main">
    <div class="grid grid-cols-main">
      <div class="grid-content-start grid-content md:col-len-1 lg:col-len-1">
        <h4 class="mb-2 text-lg font-bold">
          Follow Me
        </h4>
        <ul
          class="grid grid-flow-row grid-cols-3 col-gap-8 sm:grid-cols-4 md:grid-flow-col md:grid-cols-1 md:grid-rows-5"
        >
          <li v-for="(link, index) in socialLinks" :key="index">
            <a
              v-bind="link.attributes"
              class="inline-block my-1"
              v-text="link.text"
            />
          </li>
        </ul>
      </div>
      <div
        class="col-len-6 grid-content-start md:col-start-auto md:col-len-4 lg:col-len-3"
      >
        <h4 class="mb-2 text-lg font-bold">
          About this site
        </h4>
        <div>
          This site was built by Nathan Snyder. Source and license for this site
          is available on
          <a :href="urls.githubSource" target="_blank">Github</a>. Find a bug?
          <a :href="'mailto:' + emailAddress">Let me know.</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
  import { defineComponent } from "@vue/composition-api";
  import { emailAddress, urls } from "~/constants";

  export default defineComponent({
    name: "Footer",

    props: {},

    setup() {
      const socialLinks = [
        {
          text: "Github",
          attributes: {
            href: urls.githubProfile,
          },
        },
        {
          text: "LinkedIn",
          attributes: {
            href: urls.linkedInProfile,
          },
        },
        {
          text: "Twitter",
          attributes: {
            href: urls.twitterProfile,
          },
        },
        {
          text: "Blog",
          attributes: {
            href: urls.blogUrl,
          },
        },
        {
          text: "Instagram",
          attributes: {
            href: urls.instagramProfile,
          },
        },
      ];

      return {
        emailAddress,
        socialLinks,
        urls,
      };
    },
  });
</script>

<style scoped>
  /* Set the default footer text color */
  * {
    @apply text-gray-200;
  }
</style>
