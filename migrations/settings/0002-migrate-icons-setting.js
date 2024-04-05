export default function migrate(settings) {
  const oldSetting = settings.get("icons");

  if (oldSetting) {
    const newSetting = oldSetting.split("|").map((link) => {
      let [iconName, url, target] = link.split(",").map((s) => s.trim());

      if (["_blank", "_self", "_parent", "_top"].indexOf(target) === -1) {
        target = "_blank";
      }

      const newLink = {
        icon_name: iconName,
        url,
        target
      }

      Object.keys(newLink).forEach((key) => {
        if (newLink[key] === undefined) {
          delete newLink[key];
        }
      });

      return newLink;
    })

    settings.set("icons", newSetting);
  }

  return settings;
}
