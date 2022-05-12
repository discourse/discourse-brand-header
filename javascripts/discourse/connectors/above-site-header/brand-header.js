export default {
  setupComponent(args, component) {
    // show full bar on desktop and on mobile if specifically enabled
    component.set(
      "showWidget",
      !component.site.mobileView || settings.show_bar_on_mobile
    );
  },
};
