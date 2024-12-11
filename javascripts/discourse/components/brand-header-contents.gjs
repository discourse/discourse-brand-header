import Component from "@glimmer/component";
import { service } from "@ember/service";
import LightDarkImg from "discourse/components/light-dark-img";
import dIcon from "discourse-common/helpers/d-icon";

export default class BrandHeaderContents extends Component {
  @service site;

  get shouldShow() {
    return !this.isMobileView || settings.show_bar_on_mobile;
  }

  get mobileLogoUrl() {
    return this.site.mobileView ? settings.mobile_logo_url : null;
  }

  get lightLogo() {
    return { url: settings.logo_url || "" };
  }

  get darkLogo() {
    return { url: settings.logo_dark_url || "" };
  }

  <template>
    <div class="title">
      <a href={{settings.website_url}}>
        {{#if this.mobileLogoUrl}}
          <img
            id="brand-logo"
            class="logo-big"
            src={{this.mobileLogoUrl}}
            title={{settings.brand_name}}
          />
        {{else if this.lightLogo.url}}
          <LightDarkImg
            id="brand-logo"
            class="logo-big"
            @lightImg={{this.lightLogo}}
            @darkImg={{this.darkLogo}}
            title={{settings.brand_name}}
          />
        {{else}}
          <h2 id="brand-text-logo" class="text-logo">
            {{settings.brand_name}}
          </h2>
        {{/if}}
      </a>
    </div>

    {{#if settings.links}}
      <nav class="links">
        <ul class="nav {{if this.shouldShow 'nav-pills'}}">
          {{#each settings.links as |link|}}
            <li>
              <a href={{link.url}} target={{link.target}}>
                {{link.text}}
              </a>
            </li>
          {{/each}}
        </ul>
      </nav>
    {{/if}}

    {{#if settings.icons}}
      <div class="panel">
        <ul class="icons">
          {{#each settings.icons as |iconLink|}}
            <li>
              <a href={{iconLink.url}} target={{iconLink.target}}>
                {{dIcon iconLink.icon_name}}
              </a>
            </li>
          {{/each}}
        </ul>
      </div>
    {{/if}}
  </template>
}
