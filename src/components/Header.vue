<template>
  <div class="flex flex-col items-center justify-between min-h-screen bg-fixed bg-gradient-purple-blue"
    :class="{ 'flex-before': !showWipBanner }"
  >
    <div
      v-if="showWipBanner"
      class="flex items-center justify-between w-full text-center text-gray-200 align-middle bg-gray-800 flex-before"
    >
      <div class="flex-1"></div>
      <div>
        This site is a work in progress, but the "Contact Me!" link works 😉
      </div>
      <div class="flex-1 text-right">
        <a href="#" class="inline-block p-4 mx-2 md:py-2" @click="hideWipBanner">
          &times;
        </a>
      </div>
    </div>
    <div class="w-full p-2 text-center">
      <h1 class="my-5 text-5xl font-display md:text-6xl">
        Nathan Snyder
      </h1>
      <div class="max-w-xl mx-auto my-5 mb-8">
        Hi! I'm a developer at The Restaurant Store. I love tackling complex projects,
        learning new things, and building tools that help people get things done
        quickly and effectively.
      </div>
      <a href="mailto:nathan@snydern.com"
         class="my-5 font-bold text-white transition-all duration-300 border-white btn-md hover:bg-white hover:text-blue-600"
      >
        Contact Me!
      </a>
    </div>
    <div class="flex w-full p-2 text-left text-white">
      <a v-for="(link, index) in socialLinks"
         :key="index"
         v-bind="link.attrs || {}"
         target="_blank"
         class="p-1 mx-1 duration-100 transform hover:-translate-y-1"
      >
        <SvgIcon class="w-6 h-6 text-white" v-bind="link.svgAttrs || {}" :name="link.icon" />
      </a>
    </div>
  </div>
</template>

<script>
  import SvgIcon from '~/components/partials/SvgIcon.vue';
  const wipBannerSessionName = 'wipBannerHidden';

  export default {
    name: 'Header',

    components: {
      SvgIcon
    },

    data() {
      return {
        showWipBanner: true,
        socialLinks: [
          {
            icon: 'Github',
            attrs: {
              href: 'https://github.com/nsnyder',
              title: 'My Github profile'
            },
            svgAttrs: {
              title: 'My Github profile'
            }
          },
          {
            icon: 'Twitter',
            attrs: {
              href: 'https://twitter.com/NathanFromPA',
              title: 'My Twitter timeline'
            },
            svgAttrs: {
              title: 'My Twitter timeline'
            }
          },
          {
            icon: 'LinkedIn',
            attrs: {
              href: 'https://www.linkedin.com/in/nasnyder/',
              title: 'My LinkedIn profile'
            },
            svgAttrs: {
              title: 'My LinkedIn profile'
            }
          }
        ]
      };
    },

    methods: {
      hideWipBanner() {
        this.showWipBanner = false;
        sessionStorage.setItem(wipBannerSessionName, true);
      }
    },

    mounted() {
      this.showWipBanner = !(sessionStorage.getItem(wipBannerSessionName));
    }
  }
</script>
