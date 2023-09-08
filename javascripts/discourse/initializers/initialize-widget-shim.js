import { registerWidgetShim } from "discourse/widgets/render-glimmer";
import { hbs } from "ember-cli-htmlbars";

export default {
  name: "brand-header-widgetized",

  initialize() {
    registerWidgetShim(
      "brand-header-widgetized",
      "div.brand-header-widgetized",
      hbs`<BrandHeaderContents />`
    );
  },
};
