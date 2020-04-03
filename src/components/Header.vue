<template>
  <div class="bg-fixed bg-gradient-purple-blue flex items-center align-middle justify-between min-h-screen flex-col">
    <div class="w-full bg-gray-800 text-center text-gray-200 p-2 self-start">
      This site is a work in progress, but the "Contact Me!" link works 😉
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
      <a href="mailto:nathan@snydern.com" class="my-5 border-2 px-4 py-2 text-white font-bold border-white rounded-full inline-block">
        Contact Me!
      </a>
    </div>
    <div class="p-2 text-white text-left w-full flex">
      <a v-for="(link, index) in socialLinks"
         :key="index"
         v-bind="link.attrs || {}"
         target="_blank"
         class="p-1 mx-1"
      >
        <SvgIcon class="text-white w-6 h-6" :name="link.icon" />
      </a>
    </div>
  </div>
</template>

<script>
  import SvgIcon from './partials/SvgIcon.vue';

  export default {
    name: 'Header',

    components: {
      SvgIcon
    },

    data() {
      return {
        socialLinks: [
          {
            icon: 'Github',
            attrs: {
              href: 'https://github.com/nsnyder',
              title: 'My Github profile'
            }
          },
          {
            icon: 'Twitter',
            attrs: {
              href: 'https://twitter.com/NathanFromPA',
              title: 'My Twitter timeline'
            }
          },
          {
            icon: 'LinkedIn',
            attrs: {
              href: 'https://www.linkedin.com/in/nasnyder/',
              title: 'My LinkedIn profile'
            }
          }
        ]
      };
    }
  }
</script>
