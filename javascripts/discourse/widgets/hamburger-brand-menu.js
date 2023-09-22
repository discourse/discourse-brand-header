import { createWidget } from "discourse/widgets/widget";
import { later } from "@ember/runloop";

createWidget("hamburger-brand-menu", {
  tagName: "div.hamburger-panel",

  html() {
    return this.attach("menu-panel", {
      contents: () => this.attach("brand-header-widgetized"),
    });
  },

  clickOutside() {
    const panel = document.querySelector(".menu-panel");
    panel.classList.add("animate");
    panel.style.left = `${-window.innerWidth}px`;

    const headerCloak = document.querySelector(".header-cloak");
    headerCloak.classList.add("animate");
    headerCloak.style.opacity = 0;
    later(() => this.sendWidgetAction("toggleBrandMenu"), 200);
  },
});
