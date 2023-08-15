import { acceptance } from "discourse/tests/helpers/qunit-helpers";
import { test } from "qunit";
import { visit } from "@ember/test-helpers";

acceptance("Brand Header - Mobile", function (needs) {
  needs.mobileView();

  test("Brand header is visible on mobile when the setting is enabled", async function (assert) {
    settings.show_bar_on_mobile = true;
    await visit("/");
    assert.dom(".b-header").exists("the brand header appears");
  });

  test("Brand header is not visible on mobile when the setting is disabled", async function (assert) {
    settings.show_bar_on_mobile = false;
    await visit("/");
    assert.dom(".b-header").doesNotExist("the brand header does not appear");
  });
});
