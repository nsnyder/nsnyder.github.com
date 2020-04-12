export default {
  methods: {
    _supportsObservers() {
      return "IntersectionObserver" in window &&
        "IntersectionObserverEntry" in window &&
        "intersectionRatio" in window.IntersectionObserverEntry.prototype;
    },
    observeOnce(element, onIntersection, options) {
      return this.observe(element, onIntersection, null, options, true);
    },
    observe(element, onIntersection, onNoIntersection, options, observeOnce) {
      // Let the caller know if the browser supports observers.
      if (!this._supportsObservers()) {
        return false;
      }

      // When the grid comes into view (25% of it), make all the elements visible.
      const observer = new IntersectionObserver(([entry]) => {
        let eventFired = false;

        // We're not going to fire non-intersection events for observe once,
        // because they would be unlikely to ever be fired.
        if (!entry.isIntersecting && !observeOnce && (typeof onNoIntersection === 'function')) {
          onNoIntersection();
        }

        if (entry.isIntersecting && (typeof onIntersection === 'function')) {
          onIntersection();
          eventFired = true;
        }

        // Disconnect the observer since we've done all we need to do.
        if (observeOnce && eventFired) {
          observer.disconnect();
        }
      }, options);

      observer.observe(element);

      return true;
    }
  }
};
