<template>
  <div>
    <div class="absolute w-full bg-gray-800 text-center text-gray-200 p-2">
      This site is a work in progress. But the "Contact Me!" link works 😉
    </div>
    <div class="bg-fixed bg-gradient-purple-blue min-h-screen flex flex-col p-5 items-center align-middle justify-center">
      <div class="font-display text-5xl md:text-6xl my-5">
        Nathan Snyder
      </div>
      <div class="text-center my-5 max-w-xl">
        Hi! I'm a developer at The Restaurant Store. I love tackling complex projects,
        learning new things, and building tools that help people get things done
        quickly and effectively.
      </div>
      <a href="mailto:nathan@snydern.com" class="my-5 border-2 px-4 py-2 text-white font-bold border-white rounded-full">
        Contact Me!
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>
