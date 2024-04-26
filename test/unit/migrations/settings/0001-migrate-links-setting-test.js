import { module, test } from "qunit";
import migrate from "../../../../migrations/settings/0001-migrate-links-setting";

module(
  "Unit | Migrations | Settings | 0001-migrate-links-setting",
  function () {
    test("migrate when old setting is of an invalid format", function (assert) {
      const settings = new Map(
        Object.entries({
          links: "some||another",
        })
      );

      const result = migrate(settings);

      const expectedResult = new Map(
        Object.entries({
          links: [],
        })
      );

      assert.deepEqual(
        Object.fromEntries(result.entries()),
        Object.fromEntries(expectedResult.entries())
      );
    });

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
              text: "some",
              url: "links",
              target: "_blank",
            },
            {
              text: "another",
              url: "link",
              target: "_blank",
            },
            {
              text: "link2",
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
