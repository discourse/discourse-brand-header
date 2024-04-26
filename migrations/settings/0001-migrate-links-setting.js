export default function migrate(settings) {
  const oldSetting = settings.get("links");

  if (oldSetting) {
    const newLinks = [];

    oldSetting.split("|").forEach((link) => {
      let [text, url, target] = link.split(",").map((s) => s.trim());

      if (text && url) {
        if (["_blank", "_self", "_parent", "_top"].indexOf(target) === -1) {
          target = "_blank";
        }

        newLinks.push({
          text,
          url,
          target,
        });
      }
    });

    settings.set("links", newLinks);
  }

  return settings;
}
