<template>
  <div class="fixed text-white h-screen hidden lg:flex flex-col align-middle max-w-xs pl-4 my-4 font-mono mt-10 ">
    <div class="py-2 px-4">You might have some questions.</div>
    <a href="#" v-for="(question, index) in headings" :key="index" class="py-1 px-4 my-1 hover:pl-6 transition-all duration-100">
      > {{ question }}
    </a>
  </div>
</template>

<script>
  export default {
    name: 'Navigation',
    data() {
      return {
        headings: [
          'Who are you?',
          'What do you do?',
          'How can I contact you?'
        ]
      };
    }
  }
</script>
