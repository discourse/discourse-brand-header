import { withPluginApi } from "discourse/lib/plugin-api";
import { registerWidgetShim } from "discourse/widgets/render-glimmer";
import { hbs } from "ember-cli-htmlbars";
import BrandHeaderContainer from "../components/brand-header-container";

export default {
  name: "brand-header",

  initialize() {
    registerWidgetShim(
      "brand-header-contents",
      "div.brand-header-contents",
      hbs`<BrandHeaderContents />`
    );

    withPluginApi("1.14.0", (api) => {
      api.renderInOutlet(settings.plugin_outlet, BrandHeaderContainer);
    });
  },
};
