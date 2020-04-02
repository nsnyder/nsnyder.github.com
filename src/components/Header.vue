<template>
  <div class="bg-fixed bg-gradient-purple-blue flex items-center align-middle justify-between min-h-screen flex-col">
    <div class="w-full bg-gray-800 text-center text-gray-200 p-2 self-start">
      This site is a work in progress, but the "Contact Me!" link works 😉
    </div>
    <div class="w-full text-center p-2">
      <div class="font-display text-5xl md:text-6xl my-5">
        Nathan Snyder
      </div>
      <div class="my-5 mb-8 max-w-xl mx-auto">
        Hi! I'm a developer at The Restaurant Store. I love tackling complex projects,
        learning new things, and building tools that help people get things done
        quickly and effectively.
      </div>
      <a href="mailto:nathan@snydern.com" class="my-5 border-2 px-4 py-2 text-white font-bold border-white rounded-full inline-block">
        Contact Me!
      </a>
    </div>
    <div class="p-4 text-white text-left w-full ">
      <a v-for="(link, index) in socialLinks"
         :key="index"
         v-bind="link.attrs || {}"
         class="px-1 py-2 mx-2"
      >
        <span class="border-b-4 border-white">{{ link.title }}</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',

    data() {
      return {
        socialLinks: [
          {
            title: 'Github',
            attrs: {
              href: 'https://github.com/nsnyder',
              title: 'My Github profile'
            }
          },
          {
            title: 'Twitter',
            attrs: {
              href: 'https://twitter.com/NathanFromPA',
              title: 'My Twitter timeline'
            }
          },
          {
            title: 'LinkedIn',
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
