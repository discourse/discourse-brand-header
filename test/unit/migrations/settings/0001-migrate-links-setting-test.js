import { module, test } from "qunit";
import migrate from "../../../../migrations/settings/0001-migrate-links-setting";

module(
  "Unit | Migrations | Settings | 0001-migrate-links-setting",
  function () {
    test("migrate", function (assert) {
      const settings = new Map(
        Object.entries({
          links:
            "some, links |another, link, _blank|link2, /some/path, _invalid_target",
        })
      );

      const result = migrate(settings);

      const expectedResult = new Map(
        Object.entries({
          links: [
            {
              name: "some",
              url: "links",
              target: "_blank",
            },
            {
              name: "another",
              url: "link",
              target: "_blank",
            },
            {
              name: "link2",
              url: "/some/path",
              target: "_blank",
            },
          ],
        })
      );

      assert.deepEqual(result, expectedResult);
    });
  }
);
