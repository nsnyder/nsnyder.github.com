<template>
  <div class="fixed flex-col hidden max-w-xs pl-4 my-4 mt-10 font-mono text-white align-middle lg:flex">
    <div class="px-4 py-2">You might have some questions.</div>
    <a href="#" v-for="(question, index) in headings" :key="index" class="px-4 py-1 my-1 transition-all duration-100 hover:pl-6">
      > {{ question }}
    </a>
  </div>
</template>

<script lang="ts">
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
