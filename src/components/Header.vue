<template>
  <div class="bg-fixed bg-gradient-purple-blue flex items-center justify-between min-h-screen flex-col"
    :class="{ 'flex-before': !showWipBanner }"
  >
    <div
      v-if="showWipBanner"
      class="w-full bg-gray-800 text-center text-gray-200 flex items-center justify-between align-middle flex-before"
    >
      <div class="flex-1"></div>
      <div>
        This site is a work in progress, but the "Contact Me!" link works 😉
      </div>
      <div class="flex-1 text-right">
        <a href="#" class="inline-block p-4 md:py-2 mx-2" @click="hideWipBanner">
          &times;
        </a>
      </div>
    </div>
    <div class="w-full text-center p-2">
      <h1 class="font-display text-5xl md:text-6xl my-5">
        Nathan Snyder
      </h1>
      <div class="my-5 mb-8 max-w-xl mx-auto">
        Hi! I'm a developer at The Restaurant Store. I love tackling complex projects,
        learning new things, and building tools that help people get things done
        quickly and effectively.
      </div>
      <a href="mailto:nathan@snydern.com"
         class="btn-md my-5 text-white font-bold border-white hover:bg-white hover:text-purple-500 transition-all duration-300"
      >
        Contact Me!
      </a>
    </div>
    <div class="p-2 text-white text-left w-full flex">
      <a v-for="(link, index) in socialLinks"
         :key="index"
         v-bind="link.attrs || {}"
         target="_blank"
         class="p-1 mx-1 hover:-translate-y-1 transform duration-100"
      >
        <SvgIcon class="text-white w-6 h-6" v-bind="link.svgAttrs || {}" :name="link.icon" />
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
