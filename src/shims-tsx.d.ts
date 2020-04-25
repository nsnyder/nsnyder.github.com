// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vue, { VNode } from "vue";

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    type Element = VNode;
    // tslint:disable no-empty-interface
    type ElementClass = Vue;
    interface IntrinsicElements {
      // This was changed to "unknown" from "any" to solve a "no-explicit-any" rule.
      // I think this will work, but if not change it back and disable that for this line.
      [elem: string]: unknown;
    }
  }
}
