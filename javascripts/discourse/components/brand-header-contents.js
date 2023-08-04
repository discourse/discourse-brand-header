import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class BrandHeaderContents extends Component {
  @service site;

  splitLinks(links) {
    return links
      ? links.split("|").map((l) => {
          const values = l.split(",");
          return {
            rawLabel: values[0].trim(),
            href: values[1].trim(),
            target: (values[2] || "").trim(),
          };
        })
      : [];
  }

  get shouldShow() {
    return !this.site.mobileView || settings.show_bar_on_mobile;
  }

  get iconLinks() {
    return this.splitLinks(settings.icons);
  }

  get textLinks() {
    return this.splitLinks(settings.links);
  }

  get brandLogo() {
    const mobileView = this.site.mobileView;
    const mobileLogoUrl = settings.mobile_logo_url || "";
    const showMobileLogo = mobileView && mobileLogoUrl.length > 0;
    const logoUrl = settings.logo_url || "";
    const title = settings.brand_name;

    return {
      url: showMobileLogo ? mobileLogoUrl : logoUrl,
      title,
    };
  }
}
