export interface MediaBlock {
  id: number;
  name: string;
  image: string;
  percent: string;
}

export const mediaBlock: MediaBlock[] = [
  {
    id: 1,
    name: "boots for the family*",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_ba85d378-45cf-4da6-9951-338658b3f549?wid=720&qlt=80&fmt=webp",
    percent: "50%",
  },
  {
    id: 2,
    name: "women’s denim*",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_01373d98-76f3-4de8-b3b0-fc82d625aa71?wid=720&qlt=80&fmt=webp",
    percent: "20%",
  },
  {
    id: 3,
    name: "men’s denim*",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_25d592c4-b134-41ea-97c2-55d759571f0f?wid=720&qlt=80&fmt=webp",
    percent: "20%",
  },
];
