import { module, test } from "qunit";
import migrate from "../../../../migrations/settings/0002-migrate-icons-setting";

module(
  "Brand Header | Unit | Migrations | Settings | 0002-migrate-icons-setting",
  function () {
    test("migrate when old setting is a blank string", function (assert) {
      const settings = new Map(Object.entries({ icons: "" }));
      const result = migrate(settings);

      const expectedResult = new Map(
        Object.entries({
          icons: [],
        })
      );

      assert.deepEqual(
        Object.fromEntries(result.entries()),
        Object.fromEntries(expectedResult.entries())
      );
    });

    test("migrate when old setting value is of an invalid format", function (assert) {
      const settings = new Map(
        Object.entries({
          icons: "some||another",
        })
      );

      const result = migrate(settings);

      const expectedResult = new Map(
        Object.entries({
          icons: [],
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
          icons:
            "some-icon, http://some.url.com|another-icon, /some/path, _blank|icon-2, /some/path, _invalid_target",
        })
      );

      const result = migrate(settings);

      const expectedResult = new Map(
        Object.entries({
          icons: [
            {
              icon_name: "some-icon",
              url: "http://some.url.com",
              target: "_blank",
            },
            {
              icon_name: "another-icon",
              url: "/some/path",
              target: "_blank",
            },
            {
              icon_name: "icon-2",
              url: "/some/path",
              target: "_blank",
            },
          ],
        })
      );

      assert.deepEqual(
        Object.fromEntries(result.entries()),
        Object.fromEntries(expectedResult.entries())
      );
    });
  }
);
