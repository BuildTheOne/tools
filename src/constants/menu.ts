import { route as Route } from "@/constants/route";

type MenuProps = {
  id: string;
  label: string;
  url: string;
  children?: MenuProps[];
  isActive?: boolean;
};

const randomizerMenu: MenuProps[] = [
  {
    id: "randomizer",
    url: Route["randomizer"].url,
    label: Route["randomizer"].label,
    isActive: true,
  },
];

const randomGeneratorMenu: MenuProps[] = [
  {
    id: "random-generator",
    url: Route["random-generator"].url,
    label: Route["random-generator"].label,
    children: [
      {
        id: "random-password-generator",
        url: Route["random-password-generator"].url,
        label: Route["random-password-generator"].label,
        isActive: true,
      },
    ],
  },
];

const tiktokMenu: MenuProps[] = [
  {
    id: "tiktok",
    url: Route["tiktok"].url,
    label: Route["tiktok"].label,
    children: [
      {
        id: "timestamp",
        url: Route["tiktok.timestamp"].url,
        label: Route["tiktok.timestamp"].label,
        isActive: true,
      },
    ],
  },
];

const menu = [...randomizerMenu, ...randomGeneratorMenu, ...tiktokMenu].filter(
  (m) => {
    if (m.children) {
      if (m.children.every((sm) => !sm.isActive)) return false;
      return m.children.filter((sm) => sm.isActive);
    }
    return m.isActive;
  },
);

export { menu };
