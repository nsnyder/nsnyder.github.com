import { Ref } from "@vue/composition-api";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default () => {
  const incrementVisibility = (
    firstRun: boolean,
    counter: Ref<number>,
    max: Readonly<Ref<number>>,
    duration: number
  ): void => {
    // On the first run, skip this so that there's a slight delay before
    // the element begins appearing.
    if (!firstRun) {
      counter.value++;
    }
    if (counter.value < max.value) {
      setTimeout(() => {
        incrementVisibility(false, counter, max, duration);
      }, duration);
    }
  };
  const startHandlingVisibility = (
    counter: Ref<number>,
    max: Readonly<Ref<number>>,
    duration: number
  ): void => {
    incrementVisibility(true, counter, max, duration);
  };

  return {
    startHandlingVisibility,
  };
};
