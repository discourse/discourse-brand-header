import { withPluginApi } from "discourse/lib/plugin-api";
import BrandHeaderContainer from "../components/brand-header-container";

export default {
  name: "brand-header",

  initialize() {
    withPluginApi((api) => {
      api.renderInOutlet(settings.plugin_outlet, BrandHeaderContainer);
    });
  },
};
