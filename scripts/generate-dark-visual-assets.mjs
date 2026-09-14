import { readFile, writeFile } from "node:fs/promises";

const assets = [
  {
    source: "public/assets/images/optn-home-stack-story-v4-final-desktop.svg",
    target: "public/assets/images/optn-home-stack-story-v4-final-desktop-dark.svg",
    colors: [
      ["#F5F4EF", "#0B1714"],
      ["#FBFAF6", "#15372E"],
      ["#073D35", "#0B382F"],
      ["#102D26", "#EDF8EF"],
      ["#284A41", "#C9DDD1"],
      ["#567269", "#B4CEC0"],
      ["#6C817A", "#93AA9F"],
      ["#D8E0DC", "#29453A"],
      ["#CBF6E4", "#12372A"],
      ["#16A579", "#55D982"],
      ["#174C3E", "#BCECCC"],
      ["#FFF0C7", "#493D1A"],
      ["#B48400", "#E3BD59"],
      ["#755500", "#F2D989"],
      ["#FFFFFF", "#EDF8EF"],
    ],
  },
  {
    source: "public/assets/images/optn-home-stack-story-v4-final-mobile.svg",
    target: "public/assets/images/optn-home-stack-story-v4-final-mobile-dark.svg",
    colors: [
      ["#F5F4EF", "#0B1714"],
      ["#FBFAF6", "#15372E"],
      ["#073D35", "#0B382F"],
      ["#102D26", "#EDF8EF"],
      ["#284A41", "#C9DDD1"],
      ["#567269", "#B4CEC0"],
      ["#6C817A", "#93AA9F"],
      ["#755500", "#F2D989"],
      ["#FFF", "#EDF8EF"],
    ],
  },
  {
    source: "public/assets/images/optn-infrastructure-service-map-v4-desktop.svg",
    target: "public/assets/images/optn-infrastructure-service-map-v4-desktop-dark.svg",
    colors: [
      ["#F5F4EF", "#0B1714"],
      ["#FBFAF6", "#15372E"],
      ["#073D35", "#0B382F"],
      ["#102D26", "#EDF8EF"],
      ["#50665F", "#B4CEC0"],
      ["#567269", "#B4CEC0"],
      ["#FFF", "#EDF8EF"],
    ],
  },
  {
    source: "public/assets/images/optn-infrastructure-service-map-v4-mobile.svg",
    target: "public/assets/images/optn-infrastructure-service-map-v4-mobile-dark.svg",
    colors: [
      ["#F5F4EF", "#0B1714"],
      ["#073D35", "#0B382F"],
      ["#102D26", "#EDF8EF"],
      ["#50665F", "#B4CEC0"],
      ["#52736A", "#B4CEC0"],
      ["#FFF", "#EDF8EF"],
    ],
  },
];

for (const { source, target, colors } of assets) {
  let svg = await readFile(source, "utf8");

  for (const [light, dark] of colors.sort(([a], [b]) => b.length - a.length)) {
    if (!svg.includes(light)) {
      throw new Error(`Expected color ${light} was not found in ${source}`);
    }
    svg = svg.replaceAll(light, dark);
  }

  await writeFile(target, svg);
  console.log(`Wrote ${target}`);
}
