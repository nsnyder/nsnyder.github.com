<template>
  <footer class="text-white bg-center bg-repeat fill-current">
    <div class="section-constrained sm:flex">
      <!-- TODO: Pick a great font for headings. -->
      <div class="max-w-md py-2">
        <h4 class="mb-2 text-lg font-bold">
          Follow Me
        </h4>
        <ul class="grid grid-flow-col grid-rows-5 col-gap-8">
          <li v-for="(link, index) in socialLinks" :key="index">
            <a
              v-bind="link.attributes"
              class="inline-block my-1"
              v-text="link.text"
            />
          </li>
        </ul>
      </div>
      <div class="flex-grow-0 max-w-md py-2 md:max-w-xl sm:px-8">
        <h4 class="mb-2 text-lg font-bold">
          About this site
        </h4>
        <div>
          This site was built by Nathan Snyder. Any and all logos are property
          of their respective owners, and do not indicate an endorsement of this
          by those owners. Source and license for this site is available on
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
    /* @apply text-gray-200; */
    @apply text-black;
  }

  footer {
    /* stylelint-disable declaration-colon-newline-after */
    background-image: url("/img/hex-grid-invert.min.svg"),
      linear-gradient(135deg, #4299e1, #9f7aea);
  }
</style>
