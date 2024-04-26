export default function migrate(settings) {
  const oldSetting = settings.get("icons");

  if (oldSetting) {
    const newIcons = [];

    oldSetting.split("|").map((link) => {
      let [iconName, url, target] = link.split(",").map((s) => s.trim());

      if (iconName && url) {
        if (["_blank", "_self", "_parent", "_top"].indexOf(target) === -1) {
          target = "_blank";
        }

        newIcons.push({
          icon_name: iconName,
          url,
          target,
        });
      }
    });

    settings.set("icons", newIcons);
  }

  return settings;
}
