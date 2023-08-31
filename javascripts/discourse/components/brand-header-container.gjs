import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import BrandHeaderContents from "./brand-header-contents";
import or from "truth-helpers/helpers/or";
import not from "truth-helpers/helpers/not";

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
