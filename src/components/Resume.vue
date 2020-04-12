<template>
  <div>
    <div class="px-2 mx-auto my-12 lg:max-w-6xl">
      <!-- TODO: Pick a great font for headings. -->
      <h2 class="py-2 text-xl font-bold">Experience</h2>
      <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3" ref="experience-grid">
        <div v-for="(entry, index) in experienceEntries"
          class="p-2 px-4 duration-500 transform rounded shadow-sm bg-gradient-shades-of-gray"
          :key="index"
          :class="Object.assign({
            'opacity-0 -translate-x-4': (index > visibleElementsCount - 1)
          }, entry.classes || {})"
        >
          <div class="mb-2">
            <h3 class="text-lg font-bold text-gray-800">{{ entry.title }}</h3>
            <h4 class="text-sm italic text-gray-700">{{ entry.subtitle }}</h4>
          </div>
          <p v-html="entry.description"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import observerMixin from '~/mixins/observer';

  export default {
    name: 'Resume',

    mixins: [observerMixin],

    data() {
      const createClassObjectFromArray = (array) => array.reduce((previous, entry) => 
        Object.assign(previous, { [entry]: true  }),
        {}
      );

      return {
        experienceEntries: [
          {
            classes: createClassObjectFromArray(['logo-mark trs-background']),
            subtitle: 'Software Engineer 2 — 2015 to present',
            title: 'The Restaurant Store',
            description: `
              I have enjoyed both personal and professional growth during my time at The Restaurant Store.
              This position has allowed me to work hand-in-hand with software developers at all experience
              levels, giving me the chance to hone my skills and help teach others as well. I have taken
              on significant roles in overhauling our full website, our point of sale and mailing list.
              systems. With a desire to make anything we do simpler, more intuitive, and more reliable
              for those who interact with our software on a daily basis, my coworkers and I have
              advanced our company's goals through our software engineering. 
            `
          },
          {
            classes: createClassObjectFromArray(['logo-mark solo-background']),
            subtitle: 'Programming Intern — 2012 to 2015 (seasonal)',
            title: 'Solo Labs',
            description: `
              Working at Solo Labs between college semesters, I was responsible for a variety
              of tasks. I had the opportunity to exhibit my self-motivation while both
              maintaining and updating company software, as well as the experience of
              helping end users to be better familiarized with the software that Solo
              Labs used in their day-to-day business. My programming work also afforded
              me a chance to teach myself about technologies that I was unfamiliar with.
            `
          },
          {
            classes: createClassObjectFromArray(['logo-mark gcc-background']),
            subtitle: 'Computer Science — 2011 to 2015',
            title: 'Grove City College',
            description: `
              At Grove City College, I studied algorithms, calculus, and 3D graphics, among
              a variety of other subjects. Between my academics, running cross country, swing
              dancing, and my friend group, I learned time management, accountability, and
              the value of hard work. I left college a well rounded person, ready for
              the responsibilities of post-college life. Grove City imparted me with the
              desire to take pride in all that I do, as well as the humility to learn
              from others as I tackle new challenges.
            `
          }
        ],
        visibleElementsCount: 0
      };
    },

    methods: {
      handleVisibility() {
        this.visibleElementsCount++;
          if (this.visibleElementsCount < this.experienceEntries.length) {
            setTimeout(this.handleVisibility, 200);
          }
      }
    },

    mounted() {
      const observed = this.observeOnce(
        this.$refs['experience-grid'],
        this.handleVisibility,
        { threshold: 0.25 }
      );

      // If we couldn't start our observer, show all entries immediately.
      if (!observed) {
        this.visibleElementsCount = this.experienceEntries.length;
      }
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
    --background-image: url('/img/trs-logo.png');
  }
</style>
