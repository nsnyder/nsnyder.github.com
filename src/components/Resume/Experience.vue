<template>
  <div class="section-constrained">
    <!-- TODO: Pick a great font for headings. -->
    <h2 class="pt-0 pb-2 text-xl font-bold">
      Experience
    </h2>
    <div
      ref="grid"
      class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="(entry, index) in experienceEntries"
        :key="index"
        class="p-2 px-4 rounded shadow-sm bg-gradient-shades-of-gray"
        :class="entry.classes || {}"
      >
        <div class="mb-2">
          <h3 class="text-lg font-bold text-gray-800">
            {{ entry.title }}
          </h3>
          <h4 class="text-sm italic text-gray-700">
            {{ entry.subtitle }}
          </h4>
        </div>
        <p
          class="duration-1000 transform"
          :class="{
            'opacity-0 -translate-x-4': index > visibleElementsCount - 1,
          }"
          v-text="entry.description"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    onMounted,
    ref,
    computed,
  } from "@vue/composition-api";
  import useStaggeredGridReveal from "~/mixins/useStaggeredGridReveal";

  export default defineComponent({
    name: "Experience",

    props: {},

    setup() {
      const createClassObjectFromArray: (
        array: Array<string>
      ) => { [key: string]: true } = array =>
        array.reduce(
          (previous, entry) =>
            Object.assign<{ [key: string]: true }, { [key: string]: true }>(
              previous,
              { [entry]: true }
            ),
          {}
        );

      const experienceEntries = ref([
        {
          classes: createClassObjectFromArray(["logo-mark trs-background"]),
          subtitle: "Software Engineer 2 — 2015 to present",
          title: "The Restaurant Store",
          description: `
              I have enjoyed both personal and professional growth during my time at The Restaurant Store.
              This position has allowed me to work hand-in-hand with software developers at all experience
              levels, giving me the chance to hone my skills and help teach others as well. I have taken
              on significant roles in overhauling our full website, our point of sale and mailing list
              systems. With a desire to make everything we do simpler, more intuitive, and more reliable
              for those who interact with our software on a daily basis, my coworkers and I have
              advanced our company's goals through our software engineering. 
            `,
        },
        {
          classes: createClassObjectFromArray(["logo-mark solo-background"]),
          subtitle: "Programming Intern — 2012 to 2015 (seasonal)",
          title: "Solo Labs",
          description: `
              I had multiple summer and winter internships with Solo Labs in college.
              At Solo Labs I was responsible for maintaining and updating company software 
              and assisting end-users as they familiarized themselves with the software used in 
              day-to-day company operations.
            `,
        },
        {
          classes: createClassObjectFromArray(["logo-mark gcc-background"]),
          subtitle: "Computer Science — 2011 to 2015",
          title: "Grove City College",
          description: `
              At Grove City College, I studied algorithms, calculus, and 3D graphics, along with
              a variety of other subjects. Between my academics, running and captaining the cross country team,
              and serving as treasurer of the swing dance club, I learned time management, accountability,
              and the value of hard work. I left college a well rounded person, ready for the responsibilities
              of post-college life. Grove City imparted to me the desire to take pride in all that I do and
              the humility to learn from others as I tackle new challenges.
            `,
        },
      ]);
      const visibleElementsCount = ref(0);
      const entriesCount = computed(() => experienceEntries.value.length);

      // Mixin.
      const grid = ref<HTMLElement>(null);
      const { observeGrid } = useStaggeredGridReveal();

      onMounted(() => {
        observeGrid(grid, visibleElementsCount, entriesCount);
      });

      return {
        experienceEntries,
        grid,
        visibleElementsCount,
      };
    },
  });
</script>

<style scoped>
  /*
    Add relative positioning so that the absolute pseudo element sticks to it.
    We also want to establish a new stacking context, so add a z-index.
  */
  .logo-mark {
    @apply relative z-0;
  }

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
    --background-image: url("/img/gcc-logo.png");
  }

  .solo-background::after {
    --background-image: url("/img/solo-logo.svg");
  }

  .trs-background::after {
    --background-image: url("/img/trs-logo.png");
  }
</style>
