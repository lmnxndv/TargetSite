interface Shoe {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
}

const shoes: Shoe[] = [
  {
    id: 1,
    name: "Jordan 4 Retro Midnight Navy",
    image:
      "https://retailed.fra1.digitaloceanspaces.com/product/jordan-4-retro-midnight-navy.webp",
    price: 59.99,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Nike Dunk Low Retro Premium",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dee5e194-32b1-4b36-be0e-9d5dc5826ae7/dunk-low-retro-premium-mens-shoes-z5KTV7.png",
    price: 79.99,
    rating: 4.2,
  },
  {
    id: 3,
    name: "Nike Flex Runner 2",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0332cdac-bc90-458c-bab7-0b5c6c89e693/flex-runner-2-little-kids-shoes-5nS0pV.png",
    price: 49.99,
    rating: 4.8,
  },
  {
    id: 4,
    name: "Nike Air Max INTRLK Lite",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/defa7821-7903-4b82-8a1e-9e8c8bdf78e4/air-max-intrlk-lite-little-kids-shoes-s9W7j2.png",
    price: 69.99,
    rating: 4.0,
  },
  {
    id: 5,
    name: "Nike Air Max INTRLK Lite",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/89abd355-d139-416d-9a86-7d5343e24041/air-max-intrlk-lite-big-kids-shoes-8k3th1.png",
    price: 54.99,
    rating: 4.6,
  },
  {
    id: 6,
    name: "Nike Air Max Correlate",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/58c7f9a9-2a0e-4940-867f-9eae4a0cb375/air-max-correlate-womens-shoes-29Vjp0.png",
    price: 59.99,
    rating: 4.3,
  },
  {
    id: 7,
    name: "LeBron XXI Dragon Pearl",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0a373c44-4bd8-42ab-98df-900c14a24e7c/lebron-xxi-dragon-pearl-basketball-shoes-lnQSsH.png",
    price: 64.99,
    rating: 4.4,
  },
  {
    id: 8,
    name: "Giannis Immortality 2",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7da61da6-57b8-4f04-9843-d146c79f2d59/giannis-immortality-2-basketball-shoes-X7xj7b.png",
    price: 74.99,
    rating: 4.1,
  },
  {
    id: 9,
    name: "Giannis Immortality 2",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/03d237aa-28fe-4f3a-99e2-67b5276d8de4/giannis-immortality-2-basketball-shoes-X7xj7b.png",
    price: 69.99,
    rating: 4.2,
  },
  {
    id: 10,
    name: "LeBron Witness 7",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/94cfdf55-0905-4557-bb24-c938be2a6e6a/lebron-witness-7-basketball-shoes-43zKtc.png",
    price: 79.99,
    rating: 4.7,
  },
  {
    id: 11,
    name: "Nike Elevate 3",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8454b438-1a9d-4788-8750-00a57baf6da0/elevate-3-basketball-shoes-BQ8xtz.png",
    price: 54.99,
    rating: 4.6,
  },
  {
    id: 12,
    name: "Nike Precision 6 FlyEase",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7d33001d-1561-4d03-bc81-30ec5cbc4ca8/precision-6-flyease-basketball-shoes-5c6wsS.png",
    price: 59.99,
    rating: 4.3,
  },
  {
    id: 13,
    name: "Nike Cosmic Unity 2",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1a7f9cad-5c96-446f-a9d5-2dfb9c34910f/cosmic-unity-2-basketball-shoes-L53XJP.png",
    price: 64.99,
    rating: 4.4,
  },
  {
    id: 14,
    name: "Cosmic Unity 3",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7ae8c65-4345-4c8c-9b25-2dd4add1ed0d/cosmic-unity-3-basketball-shoes-0zGs9z.png",
    price: 74.99,
    rating: 4.1,
  },
  {
    id: 15,
    name: "Jordan Why Not .6 x Honor The Gift®",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/413f247a-ce7e-4ff4-abdf-058102dbb422/jordan-why-not-6-x-honor-the-gift-mens-shoes-93fJNc.png",
    price: 69.99,
    rating: 4.2,
  },
  {
    id: 16,
    name: "Jordan One Take 4",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ceca25b3-cb22-4f81-be91-9cb2df213228/jordan-one-take-4-mens-shoes-nS8tqx.png",
    price: 59.99,
    rating: 4.3,
  },
  {
    id: 17,
    name: "LeBron Witness 6",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d5c67a87-e321-4777-9516-60d49d98ef07/lebron-witness-6-basketball-shoes-HXbMw7.png",
    price: 64.99,
    rating: 4.4,
  },
];

export default shoes;
