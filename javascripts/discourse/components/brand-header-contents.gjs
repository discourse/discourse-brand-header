import Component from "@glimmer/component";
import { service } from "@ember/service";
import dIcon from "discourse-common/helpers/d-icon";

export default class BrandHeaderContents extends Component {
  @service site;

  get shouldShow() {
    return !this.site.mobileView || settings.show_bar_on_mobile;
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

  get hasIcons() {
    return settings.icons && settings.icons.length > 0;
  }

  get hasLinks() {
    return settings.links && settings.links.length > 0;
  }

  <template>
    <div class="title">
      <a href={{settings.website_url}}>
        {{#if this.brandLogo.url}}
          <img
            id="brand-logo"
            class="logo-big"
            src={{this.brandLogo.url}}
            title={{this.brandLogo.title}}
          />
        {{else}}
          <h2 id="#brand-text-logo" class="text-logo">
            {{settings.brand_name}}
          </h2>
        {{/if}}
      </a>
    </div>

    {{#if this.hasLinks}}
      <nav class="links">
        <ul class="nav {{if this.shouldShow 'nav-pills'}}">
          {{#each settings.links as |tl|}}
            <li>
              <a href={{tl.url}} target={{tl.target}}>
                {{tl.text}}
              </a>
            </li>
          {{/each}}
        </ul>
      </nav>
    {{/if}}

    {{#if this.hasIcons}}
      <div class="panel">
        <ul class="icons">
          {{#each settings.icons as |il|}}
            <li>
              <a href={{il.url}} target={{il.target}}>
                {{dIcon il.icon_name}}
              </a>
            </li>
          {{/each}}
        </ul>
      </div>
    {{/if}}
  </template>
}
