import { Ref } from "@vue/composition-api";
import useObservers from "~/mixins/useObservers";
import useStaggeredIncrements from "~/mixins/useStaggeredIncrements";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default () => {
  const { observeOnce } = useObservers();
  const { startIncrementing } = useStaggeredIncrements();
  const staggerDuration = 500;

  const showAll = (counter: Ref<number>, max: Readonly<Ref<number>>): void => {
    counter.value = max.value;
  };

  const observeGrid = (
    grid: Ref<HTMLElement | null>,
    counter: Ref<number>,
    max: Readonly<Ref<number>>
  ): void => {
    // If we couldn't find the grid, log an error and show everything.
    if (grid.value === null) {
      console.error(
        "Could not find a grid element to observe. Is your ref named correctly?"
      );
      showAll(counter, max);
      return;
    }

    const observed = observeOnce(
      grid.value,
      () => startIncrementing(counter, max, staggerDuration),
      { threshold: 0.1 }
    );

    // If we couldn't start our observer, show all entries immediately.
    if (!observed) {
      showAll(counter, max);
    }
  };

  return {
    observeGrid,
  };
};
