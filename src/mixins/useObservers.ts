// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default () => {
  const supportsObservers = (): boolean => {
    return (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    );
  };

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
        let eventFired = false;

        // We're not going to fire non-intersection events for observe once,
        // because they would be unlikely to ever be fired.
        if (
          !entry.isIntersecting &&
          !observeOnce &&
          typeof onNoIntersection === "function"
        ) {
          onNoIntersection();
        }

        if (entry.isIntersecting && typeof onIntersection === "function") {
          onIntersection();
          eventFired = true;
        }

        // If we're only firing this event once, and it fired, stop watching.
        if (observeOnce && eventFired) {
          observer.disconnect();
        }
      }, options);

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
  ): boolean => {
    return observe(element, true, onIntersection, undefined, options);
  };

  return {
    observe,
    observeOnce,
  };
};
