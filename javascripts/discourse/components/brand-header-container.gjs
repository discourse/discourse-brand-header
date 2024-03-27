import Component from "@glimmer/component";
import { service } from "@ember/service";
import not from "truth-helpers/helpers/not";
import or from "truth-helpers/helpers/or";
import BrandHeaderContents from "./brand-header-contents";

export default class BrandHeaderContainer extends Component {
  @service site;

  <template>
    {{#if (or (not this.site.mobileView) settings.show_bar_on_mobile)}}
      <header class="b-header">
        <div class="wrap">
          <div class="contents">
            <BrandHeaderContents />
          </div>
        </div>
      </header>
    {{/if}}
  </template>
}
