// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default () => {
  const supportsObservers = (): boolean =>
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype;

  const observe = (
    element: Element,
    observeOnce: boolean,
    onIntersection?: () => void,
    onNoIntersection?: () => void,
    options?: IntersectionObserverInit
  ): boolean => {
    try {
      // Let the caller know if the browser supports observers.
      if (!supportsObservers()) {
        return false;
      }

      // Create the observer with the given options.
      const observer = new IntersectionObserver(([entry]) => {
        let intersected = false;

        // Non-intersection events won't disconnect the observer.
        if (!entry.isIntersecting && typeof onNoIntersection === "function") {
          onNoIntersection();
        }

        if (entry.isIntersecting && typeof onIntersection === "function") {
          onIntersection();
          intersected = true;
        }

        // If we're only firing this event once, and it intersected, stop watching.
        if (observeOnce && intersected) {
          observer.disconnect();
        }
      }, options);

      // Connect the observer.
      observer.observe(element);

      return true;
    } catch (exception) {
      // If something went wrong, show it in the console and return false.
      console.error(exception);
      return false;
    }
  };

  const observeOnce = (
    element: Element,
    onIntersection: () => void,
    options?: IntersectionObserverInit
  ): boolean => observe(element, true, onIntersection, undefined, options);

  return {
    observe,
    observeOnce,
  };
};
