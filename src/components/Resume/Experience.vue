<template>
  <div ref="grid" class="grid-cols-main">
    <!-- TODO: Pick a great font for headings. -->
    <div class="text-xl font-bold lg:text-right grid-sidebar">
      <h2 class="skew-label">
        Experience
      </h2>
    </div>
    <div
      v-for="(entry, index) in experienceEntries"
      :key="index"
      class="lg:grid-content-terse"
    >
      <div class="mb-2">
        <h3 class="text-3xl font-bold text-gray-800">
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
      const experienceEntries = ref([
        {
          subtitle: "Software Engineer 3 — 2015 to present",
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

      onMounted(() => observeGrid(grid, visibleElementsCount, entriesCount));

      return {
        experienceEntries,
        grid,
        visibleElementsCount,
      };
    },
  });
</script>
