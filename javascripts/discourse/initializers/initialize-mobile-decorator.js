import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "mobile-brand-header",

  initialize() {
    withPluginApi("0.1", (api) => {
      const mobileView = api.container.lookup("site:main").mobileView;

      if (!settings.show_bar_on_mobile && mobileView) {
        api.decorateWidget("home-logo:before", (helper) => {
          return [helper.widget.attach("brand-header-container")];
        });
      }
    });
  },
};
