import { createWidget } from "discourse/widgets/widget";

createWidget("brand-header-container", {
  buildKey: () => `brand-header-container`,

  defaultState() {
    let states = {
      brandMenuVisible: false,
    };

    return states;
  },

  toggleBrandMenu() {
    this.state.brandMenuVisible = !this.state.brandMenuVisible;

    if (!this.state.brandMenuVisible) {
      const headerCloak = document.querySelector(".header-cloak");
      headerCloak.classList.remove("animate");
      headerCloak.removeAttribute("style");
    }
  },

  html(attrs, state) {
    const panelContents = [];

    panelContents.push(
      this.attach("brand-header-icon", {
        brandMenuVisible: state.brandMenuVisible,
      })
    );

    if (state.brandMenuVisible) {
      panelContents.push(this.attach("hamburger-brand-menu"));
    }

    return panelContents;
  },
});
