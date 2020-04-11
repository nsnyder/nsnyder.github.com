<template>
  <div>
    <div class="px-2 mx-auto my-12 lg:max-w-6xl">
      <!-- TODO: Pick a great font for headings. -->
      <h2 class="py-2 text-xl font-bold">Experience</h2>
      <div class="grid grid-cols-1 gap-2 md:grid-cols-3" ref="experience-grid">
        <div v-for="(entry, index) in experienceEntries"
          class="h-32 p-2 duration-1000 transform border-l-8 rounded bg-gradient-shades-of-gray"
          :key="index"
          :class="Object.assign({
            'opacity-0': (index > visibleElementsCount - 1),
            'opacity-100': !(index > visibleElementsCount - 1)
          }, entry.classes || {})"
        >
          <div class="px-2 text-lg font-bold text-gray-800">{{ entry.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Resume',

    data() {
      const createClassObjectFromArray = (array) => array.reduce((previous, entry) => 
        Object.assign(previous, { [entry]: true  }),
        {}
      );

      return {
        experienceEntries: [
          {
            classes: createClassObjectFromArray(['border-green-700']),
            title: 'The Restaurant Store',
          },
          {
            classes: createClassObjectFromArray(['border-red-700']),
            title: 'Solo Labs',
          },
          {
            classes: createClassObjectFromArray(['border-red-700']),
            title: 'Grove City College',
          }
        ],
        visibleElementsCount: 0
      };
    },

    mounted() {
      const grid = this.$refs['experience-grid'];

      // Make all the elements visible on 100ms delay.
      const handleVisibility = () => {
        this.visibleElementsCount++;
        if (this.visibleElementsCount < this.experienceEntries.length) {
          setTimeout(handleVisibility, 100);
        }
      };

      // When the grid comes into view (25% of it), make all the elements visible.
      const observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }
        handleVisibility();

        // Disconnect the observer since we've done all we need to do.
        observer.disconnect();
      }, { threshold: 0.25 });
      observer.observe(grid);
    }
  }
</script>
