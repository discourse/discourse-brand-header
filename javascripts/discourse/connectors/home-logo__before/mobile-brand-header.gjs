import Component from "@glimmer/component";
import { service } from "@ember/service";
import { and, not } from "truth-helpers";
import DMenu from "float-kit/components/d-menu";
import BrandHeaderContents from "../../components/brand-header-contents";

export default class MobileBrandHeader extends Component {
  @service site;

  <template>
    {{#if (and (not settings.show_bar_on_mobile) this.site.mobileView)}}
      <DMenu
        @icon="bars"
        title="hamburger_brand_menu"
        id="toggle-hamburger-brand-menu"
        class="brand-header-toggle icon btn-flat"
      >
        <:content>
          <div class="brand-header-contents">
            <BrandHeaderContents />
          </div>
        </:content>
      </DMenu>
    {{/if}}
  </template>
}
