<template>
  <div>
    <div class="px-2 mx-auto my-12 lg:max-w-6xl">
      <!-- TODO: Pick a great font for headings. -->
      <h2 class="py-2 text-xl font-bold">Experience</h2>
      <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3" ref="experience-grid">
        <div v-for="(entry, index) in experienceEntries"
          class="h-32 p-2 duration-500 transform rounded bg-gradient-shades-of-gray"
          :key="index"
          :class="Object.assign({
            'opacity-0 -translate-x-4': (index > visibleElementsCount - 1)
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
      // eslint-disable-next-line no-unused-vars
      const createClassObjectFromArray = (array) => array.reduce((previous, entry) => 
        Object.assign(previous, { [entry]: true  }),
        {}
      );

      return {
        experienceEntries: [
          {
            classes: createClassObjectFromArray(['logo-mark trs-background']),
            title: 'The Restaurant Store',
          },
          {
            classes: createClassObjectFromArray(['logo-mark solo-background']),
            title: 'Solo Labs',
          },
          {
            classes: createClassObjectFromArray(['logo-mark gcc-background']),
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
          setTimeout(handleVisibility, 200);
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

<style scoped>
  .logo-mark::after {
    content: "";
    background-size: auto 5em;
    opacity: 0.1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    background-position: center;
    background-repeat: no-repeat;
    background-image: var(--background-image);
  }
  .gcc-background::after {
    --background-image: url('/img/gcc-logo.png');
  }
  .solo-background::after {
    --background-image: url('/img/solo-logo.svg');
  }
  .trs-background::after {
    --background-image: url('/img/trs-logo-large-cropped.png');
  }
</style>
