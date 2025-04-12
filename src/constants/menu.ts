type MenuProps = {
  id: string;
  label: string;
  url: string;
  children?: MenuProps[];
  isActive?: boolean;
};

const mainMenu: MenuProps[] = [];

const menu = [...mainMenu].filter((m) => {
  if (m.children) {
    if (m.children.every((sm) => !sm.isActive)) return false;
    return m.children.filter((sm) => sm.isActive);
  }
  return m.isActive;
});

export { menu };
