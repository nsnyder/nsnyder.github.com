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
        <a href="#" class="inline-block p-4 mx-2 text-gray-200 no-underline md:py-2" @click="hideWipBanner">
          &times;
        </a>
      </div>
    </div>
    <header class="w-full p-2 text-center">
      <h1 class="my-5 text-5xl font-display md:text-6xl">
        Nathan Snyder
      </h1>
      <div class="max-w-xl mx-auto my-5 mb-8 md:text-xl">
        Hi! I'm a software engineer at The Restaurant Store. I love tackling complex projects,
        learning new things, and building tools that help people get things done
        quickly and effectively.
      </div>
      <a :href="'mailto:' + emailAddress"
         class="my-5 font-bold text-white transition-all duration-300 border-white btn-md hover:bg-white hover:text-blue-600"
      >
        Contact Me!
      </a>
    </header>
    <div class="flex w-full p-2 text-left text-white">
      <a v-for="(link, index) in socialLinks"
         :key="index"
         v-bind="link.attributes || {}"
         target="_blank"
         class="p-1 mx-1 duration-100 transform hover:-translate-y-1"
      >
        <SvgIcon class="w-6 h-6 text-white" v-bind="link.svgAttributes || {}" :name="link.icon" />
      </a>
    </div>
  </div>
</template>

<script>
  import SvgIcon from '~/components/partials/SvgIcon';
  import { urls, emailAddress } from '~/constants';
  import { defineComponent, onMounted, ref } from '@vue/composition-api';

  export default defineComponent({
    name: 'Header',

    components: {
      SvgIcon
    },

    setup() {
      const wipBannerSessionName = 'wipBannerHidden';
      const showWipBanner = ref(true);
      const hideWipBanner = () => {
        showWipBanner.value = false;
        sessionStorage.setItem(wipBannerSessionName, true);
      };
      const initializeWipBannerState = () => {
        showWipBanner.value = !(sessionStorage.getItem(wipBannerSessionName))
      };

      const socialLinks = [
        {
          icon: 'Github',
          attributes: {
            href: urls.githubProfile,
            title: 'My Github profile'
          },
          svgAttributes: {
            title: 'My Github profile'
          }
        },
        {
          icon: 'LinkedIn',
          attributes: {
            href: urls.linkedInProfile,
            title: 'My LinkedIn profile'
          },
          svgAttributes: {
            title: 'My LinkedIn profile'
          }
        },
        {
          icon: 'Twitter',
          attributes: {
            href: urls.twitterProfile,
            title: 'My Twitter timeline'
          },
          svgAttributes: {
            title: 'My Twitter timeline'
          }
        }
      ];

      onMounted(() => initializeWipBannerState());

      return {
        showWipBanner,
        hideWipBanner,
        emailAddress,
        socialLinks
      };
    }
  });
</script>
