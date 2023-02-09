export interface Menu {
  id: number;
  title: string;
  seq: number;
  icon: string;
}

export interface MenuList {
  menuList: Array<Menu>;
}
