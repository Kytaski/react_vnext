class MenuItem {
  title!: string;
  route!: string;
  icon!: string;
  childrens!: Array<MenuItem>;

  constructor(
    route: string,
    title: string,
    icon: string,
    childrens: Array<MenuItem>
  ) {
    this.route = route;
    this.title = title;
    this.icon = icon;
    this.childrens = childrens;
  }

  hasChildren() {
    return this.childrens && this.childrens.length > 0;
  }
}

export { MenuItem };
