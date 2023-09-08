import { createWidget } from "discourse/widgets/widget";

createWidget("brand-header-icon", {
  tagName: "ul.icons.brand-header-toggle",
  buildAttributes() {
    return { role: "navigation" };
  },

  html(attrs) {
    const hamburger = this.attach("header-dropdown", {
      title: "hamburger_brand_menu",
      icon: "bars",
      iconId: "toggle-hamburger-brand-menu",
      active: attrs.brandMenuVisible,
      action: "toggleBrandMenu",
    });
    const icons = [hamburger];
    return icons;
  },
});
