import uuid from "react-uuid";
export interface Products {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  quant: number;
  favorite: boolean;
  thumbnail?: string[];
}

export const shoes: Products[] = [
  {
    id: uuid(),
    name: "Nike Air Force 1 '07 Premium",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/40efd960-77d4-4c12-acef-0e78caa2a16c/air-force-1-07-premium-mens-shoes-FLRvC9.png",
    price: 59.99,
    rating: 4,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/40efd960-77d4-4c12-acef-0e78caa2a16c/air-force-1-07-premium-mens-shoes-FLRvC9.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1dfb2f5f-91db-45c9-b0e1-98dcc308527c/air-force-1-07-premium-mens-shoes-FLRvC9.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c0374687-b9d6-458d-9c53-7b6e5d3597af/air-force-1-07-premium-mens-shoes-FLRvC9.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2786076b-f0bd-4975-bdd5-5baa482a72d3/air-force-1-07-premium-mens-shoes-FLRvC9.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e195db8-5879-4389-a08a-3238a85d3bcf/air-force-1-07-premium-mens-shoes-FLRvC9.png",
    ],
  },
  {
    id: uuid(),
    name: "Nike Dunk Low Retro Premium",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dee5e194-32b1-4b36-be0e-9d5dc5826ae7/dunk-low-retro-premium-mens-shoes-z5KTV7.png",
    price: 79.99,
    rating: 4,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dee5e194-32b1-4b36-be0e-9d5dc5826ae7/dunk-low-retro-premium-mens-shoes-z5KTV7.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/706a20e6-a361-4e97-a1f6-35661e2be1b9/dunk-low-retro-premium-mens-shoes-z5KTV7.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/274ce198-09b3-4839-a6fa-f7f35873175e/dunk-low-retro-premium-mens-shoes-z5KTV7.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5f1ab907-7b48-4e37-968f-7f203918fc7b/dunk-low-retro-premium-mens-shoes-z5KTV7.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c0d47fb3-ea27-47b6-b8e5-e005aa624d48/dunk-low-retro-premium-mens-shoes-z5KTV7.png",
    ],
  },
  {
    id: uuid(),
    name: "Nike Flex Runner 2",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0332cdac-bc90-458c-bab7-0b5c6c89e693/flex-runner-2-little-kids-shoes-5nS0pV.png",
    price: 49.99,
    rating: 5,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0332cdac-bc90-458c-bab7-0b5c6c89e693/flex-runner-2-little-kids-shoes-5nS0pV.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/72ee72e4-af1a-4b8c-b2b0-ed2a467dec3e/flex-runner-2-little-kids-shoes-5nS0pV.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/49c03c10-d2bb-4530-a565-2f9cb816a4d1/flex-runner-2-little-kids-shoes-5nS0pV.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/732a6b1f-f288-4399-bb11-de2eca6c049d/flex-runner-2-little-kids-shoes-5nS0pV.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/28b955b8-ed83-4a35-ab1f-f8bbb8d96554/flex-runner-2-little-kids-shoes-5nS0pV.png",
    ],
  },
  {
    id: uuid(),
    name: "Nike Air Max INTRLK Lite",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/defa7821-7903-4b82-8a1e-9e8c8bdf78e4/air-max-intrlk-lite-little-kids-shoes-s9W7j2.png",
    price: 69.99,
    rating: 4,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/defa7821-7903-4b82-8a1e-9e8c8bdf78e4/air-max-intrlk-lite-little-kids-shoes-s9W7j2.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f801d939-8268-4d5e-b4ed-11d6058b11b0/air-max-intrlk-lite-big-kids-shoes-8k3th1.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f19b72ef-f558-4503-95db-d26038da90c5/air-max-intrlk-lite-big-kids-shoes-8k3th1.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/136fdc14-6259-4b46-9368-971cd5fab114/air-max-intrlk-lite-big-kids-shoes-8k3th1.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/df154d53-ca1d-487a-8009-2abd03ca081d/air-max-intrlk-lite-big-kids-shoes-8k3th1.png",
    ],
  },
  {
    id: uuid(),
    name: "Nike Air Max INTRLK Lite",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/89abd355-d139-416d-9a86-7d5343e24041/air-max-intrlk-lite-big-kids-shoes-8k3th1.png",
    price: 54.99,
    rating: 5,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/89abd355-d139-416d-9a86-7d5343e24041/air-max-intrlk-lite-big-kids-shoes-8k3th1.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/15f63fc7-c15b-4a36-b94f-21998a9d2d4f/air-max-intrlk-lite-big-kids-shoes-8k3th1.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1d59147c-8fd3-46a8-b69f-c5eea5e847b7/air-max-intrlk-lite-big-kids-shoes-8k3th1.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d0ce9630-9175-4558-91b3-f27bbba7838d/air-max-intrlk-lite-big-kids-shoes-8k3th1.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a0c7ee8d-a81f-44aa-a552-beda5255ef42/air-max-intrlk-lite-big-kids-shoes-8k3th1.png",
    ],
  },
  {
    id: uuid(),
    name: "Nike Air Max Correlate",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/58c7f9a9-2a0e-4940-867f-9eae4a0cb375/air-max-correlate-womens-shoes-29Vjp0.png",
    price: 59.99,
    rating: 4,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/58c7f9a9-2a0e-4940-867f-9eae4a0cb375/air-max-correlate-womens-shoes-29Vjp0.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/84913d71-be8d-4f23-b11c-af0965899b6f/air-max-correlate-womens-shoes-29Vjp0.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/beb44231-0b53-4232-8b1a-e2524392f7e4/air-max-correlate-womens-shoes-29Vjp0.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/84797a8e-ffc0-4f14-b49b-886d331944e4/air-max-correlate-womens-shoes-29Vjp0.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/60868eaf-6ea0-49ba-a4b9-70a836c41880/air-max-correlate-womens-shoes-29Vjp0.png",
    ],
  },
  {
    id: uuid(),
    name: "LeBron XXI Dragon Pearl",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0a373c44-4bd8-42ab-98df-900c14a24e7c/lebron-xxi-dragon-pearl-basketball-shoes-lnQSsH.png",
    price: 64.99,
    rating: 4,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0a373c44-4bd8-42ab-98df-900c14a24e7c/lebron-xxi-dragon-pearl-basketball-shoes-lnQSsH.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/850795ef-bf37-4f55-a45a-411bb4874c9c/lebron-xxi-dragon-pearl-basketball-shoes-lnQSsH.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/502fa04a-af62-4114-87c0-5794b9a44bb3/lebron-xxi-dragon-pearl-basketball-shoes-lnQSsH.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2965340c-42cb-4cfb-be75-efcad00fe815/lebron-xxi-dragon-pearl-basketball-shoes-lnQSsH.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c49bc4d7-1d14-4118-a819-a76c29bfcec1/lebron-xxi-dragon-pearl-basketball-shoes-lnQSsH.png",
    ],
  },
  {
    id: uuid(),
    name: "Giannis Immortality 2",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/03d237aa-28fe-4f3a-99e2-67b5276d8de4/giannis-immortality-2-basketball-shoes-X7xj7b.png",
    price: 69.99,
    rating: 4,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/03d237aa-28fe-4f3a-99e2-67b5276d8de4/giannis-immortality-2-basketball-shoes-X7xj7b.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/51fe6c61-78e9-49e9-8e4b-aa6a334e9dd9/giannis-immortality-2-big-kids-basketball-shoes-f6LpRV.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d30630a7-54b5-4b92-8ec6-f1d3058bd7e8/giannis-immortality-2-big-kids-basketball-shoes-f6LpRV.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cbd6701f-37bd-4452-93f1-37a991f95e95/giannis-immortality-2-big-kids-basketball-shoes-f6LpRV.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/14847c41-4ba6-4c84-85aa-84711968b287/giannis-immortality-2-big-kids-basketball-shoes-f6LpRV.png",
    ],
  },
  {
    id: uuid(),
    name: "Nike Elevate 3",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8454b438-1a9d-4788-8750-00a57baf6da0/elevate-3-basketball-shoes-BQ8xtz.png",
    price: 54.99,
    rating: 5,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8454b438-1a9d-4788-8750-00a57baf6da0/elevate-3-basketball-shoes-BQ8xtz.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4b43fa45-083b-4b15-bd26-cfeac595f8dd/elevate-3-basketball-shoes-BQ8xtz.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/90d6583b-b7d0-46d9-b080-5142bcb03f04/elevate-3-basketball-shoes-BQ8xtz.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82d6ed71-753f-4480-9564-e9c8d549dc8f/elevate-3-basketball-shoes-BQ8xtz.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/13798597-a110-4b0c-8a80-e098f370e2e9/elevate-3-basketball-shoes-BQ8xtz.png",
    ],
  },
  {
    id: uuid(),
    name: "Nike Precision 6 FlyEase",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7d33001d-1561-4d03-bc81-30ec5cbc4ca8/precision-6-flyease-basketball-shoes-5c6wsS.png",
    price: 59.99,
    rating: 4,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7d33001d-1561-4d03-bc81-30ec5cbc4ca8/precision-6-flyease-basketball-shoes-5c6wsS.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4b26f21c-43a9-4b3d-8fb2-a0bee64ce4d1/precision-6-flyease-basketball-shoes-5c6wsS.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e09ea30-cd3c-47b8-9cdc-12abbfbd7997/precision-6-flyease-basketball-shoes-5c6wsS.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eb6c7dca-791b-4442-8724-88d7adad6c33/precision-6-flyease-basketball-shoes-5c6wsS.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/03bfd54e-8552-47e8-8167-664f8ba8df2f/precision-6-flyease-basketball-shoes-5c6wsS.png",
    ],
  },
  {
    id: uuid(),
    name: "Nike Cosmic Unity 2",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1a7f9cad-5c96-446f-a9d5-2dfb9c34910f/cosmic-unity-2-basketball-shoes-L53XJP.png",
    price: 64.99,
    rating: 4,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1a7f9cad-5c96-446f-a9d5-2dfb9c34910f/cosmic-unity-2-basketball-shoes-L53XJP.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c0642094-8cfc-4850-ab9a-55b7e2f6f755/cosmic-unity-2-basketball-shoes-L53XJP.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d8924d02-168d-4cb7-8944-21b1cb0d0c22/cosmic-unity-2-basketball-shoes-L53XJP.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/26672ee4-ee88-4ed0-a0c4-0b4bc91fc3d1/cosmic-unity-2-basketball-shoes-L53XJP.png",
    ],
  },
  {
    id: uuid(),
    name: "Cosmic Unity 3",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dd4e14ec-b8fc-4f4c-bf93-db2dede28d0e/cosmic-unity-3-aja-wilson-womens-basketball-shoes-C0NgDW.png",
    price: 74.99,
    rating: 4,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dd4e14ec-b8fc-4f4c-bf93-db2dede28d0e/cosmic-unity-3-aja-wilson-womens-basketball-shoes-C0NgDW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5b8bee50-2a19-4341-abcb-a54b70cb511b/cosmic-unity-3-aja-wilson-womens-basketball-shoes-C0NgDW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/02f43842-5538-4524-a731-5c614ff0f829/cosmic-unity-3-aja-wilson-womens-basketball-shoes-C0NgDW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d104fa24-6242-43f3-818c-b909a34b3eb0/cosmic-unity-3-aja-wilson-womens-basketball-shoes-C0NgDW.png",
    ],
  },
  {
    id: uuid(),
    name: "Jordan Why Not .6 x Honor The Gift®",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/413f247a-ce7e-4ff4-abdf-058102dbb422/jordan-why-not-6-x-honor-the-gift-mens-shoes-93fJNc.png",
    price: 69.99,
    rating: 4,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/413f247a-ce7e-4ff4-abdf-058102dbb422/jordan-why-not-6-x-honor-the-gift-mens-shoes-93fJNc.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c0c879d7-f88b-4d54-9a3d-259da01b63fe/jordan-why-not-6-x-honor-the-gift-mens-shoes-93fJNc.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/33a8e5e4-aef8-4fa6-b908-d22a7be9cc02/jordan-why-not-6-x-honor-the-gift-mens-shoes-93fJNc.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/980d02d1-8b66-4d5b-a21d-c33e2cc4cbcd/jordan-why-not-6-x-honor-the-gift-mens-shoes-93fJNc.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ab126e51-2f7a-414b-9554-666b8aced907/jordan-why-not-6-x-honor-the-gift-mens-shoes-93fJNc.png",
    ],
  },
  {
    id: uuid(),
    name: "Jordan One Take 4",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ceca25b3-cb22-4f81-be91-9cb2df213228/jordan-one-take-4-mens-shoes-nS8tqx.png",
    price: 59.99,
    rating: 4,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ceca25b3-cb22-4f81-be91-9cb2df213228/jordan-one-take-4-mens-shoes-nS8tqx.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d6840baa-625c-48f2-8889-348ed2ea7e0c/jordan-one-take-4-mens-shoes-nS8tqx.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8890fd42-0986-4c64-912b-1ff2bc6153ff/jordan-one-take-4-mens-shoes-nS8tqx.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/93ec04e2-2b18-48a0-ba03-f945100c3511/jordan-one-take-4-mens-shoes-nS8tqx.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3d85d3f3-90ce-4919-bbcf-aba853b050e3/jordan-one-take-4-mens-shoes-nS8tqx.png",
    ],
  },
];

export const womenClothes: Products[] = [
  {
    id: uuid(),
    name: "Black Leopard Print Crinkle Belted Midaxi Shirt Dress",
    image:
      "https://media2.newlookassets.com/i/newlook/883096719.jpg?strip=true&qlt=50&fmt=webp&w=526",
    price: 49.99,
    rating: 4.5,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://media2.newlookassets.com/i/newlook/883096719.jpg?strip=true&qlt=50&fmt=webp&w=526",
      "https://media2.newlookassets.com/i/newlook/883096719M1/womens/clothing/dresses/black-leopard-print-crinkle-belted-midaxi-shirt-dress.jpg?strip=true&qlt=50&w=720",
      "https://media3.newlookassets.com/i/newlook/883096719M2/womens/clothing/dresses/black-leopard-print-crinkle-belted-midaxi-shirt-dress.jpg?strip=true&qlt=50&w=720",
      "https://media2.newlookassets.com/i/newlook/883096719M3/womens/clothing/dresses/black-leopard-print-crinkle-belted-midaxi-shirt-dress.jpg?strip=true&qlt=50&w=720",
    ],
  },
  {
    id: uuid(),
    name: "Brown Snake Print Jersey V Neck Belted Mini Shirt Dress",
    image:
      "https://media3.newlookassets.com/i/newlook/883093829/womens/clothing/dresses/brown-snake-print-jersey-v-neck-belted-mini-shirt-dress.jpg?strip=true&qlt=50&w=720",
    price: 39.99,
    rating: 4.2,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://media3.newlookassets.com/i/newlook/883093829/womens/clothing/dresses/brown-snake-print-jersey-v-neck-belted-mini-shirt-dress.jpg?strip=true&qlt=50&w=720",
      "https://media3.newlookassets.com/i/newlook/883093829M1/womens/clothing/dresses/brown-snake-print-jersey-v-neck-belted-mini-shirt-dress.jpg?strip=true&qlt=50&w=720",
      "https://media2.newlookassets.com/i/newlook/883093829M2/womens/clothing/dresses/brown-snake-print-jersey-v-neck-belted-mini-shirt-dress.jpg?strip=true&qlt=50&w=720",
      "https://media3.newlookassets.com/i/newlook/883093829M3/womens/clothing/dresses/brown-snake-print-jersey-v-neck-belted-mini-shirt-dress.jpg?strip=true&qlt=50&w=720",
    ],
  },
  {
    id: uuid(),
    name: "Grey Ribbed Knit Split Hem Bodycon Midaxi Dress",
    image:
      "https://media2.newlookassets.com/i/newlook/877900004/womens/clothing/knitwear/grey-ribbed-knit-split-hem-bodycon-midaxi-dress.jpg?strip=true&qlt=50&w=720",
    price: 29.99,
    rating: 4.8,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://media2.newlookassets.com/i/newlook/877900004/womens/clothing/knitwear/grey-ribbed-knit-split-hem-bodycon-midaxi-dress.jpg?strip=true&qlt=50&w=720",
      "https://media3.newlookassets.com/i/newlook/877900004M1/womens/clothing/knitwear/grey-ribbed-knit-split-hem-bodycon-midaxi-dress.jpg?strip=true&qlt=50&w=720",
      "https://media2.newlookassets.com/i/newlook/877900004M2/womens/clothing/knitwear/grey-ribbed-knit-split-hem-bodycon-midaxi-dress.jpg?strip=true&qlt=50&w=720",
      "https://media3.newlookassets.com/i/newlook/877900004M3/womens/clothing/knitwear/grey-ribbed-knit-split-hem-bodycon-midaxi-dress.jpg?strip=true&qlt=50&w=720",
    ],
  },
  {
    id: uuid(),
    name: "Black Ribbed Knit Split Hem Bodycon Midaxi Dress",
    image:
      "https://media2.newlookassets.com/i/newlook/877900001/womens/clothing/knitwear/black-ribbed-knit-split-hem-bodycon-midaxi-dress.jpg?strip=true&qlt=50&w=720",
    price: 59.99,
    rating: 4.0,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://media2.newlookassets.com/i/newlook/877900001/womens/clothing/knitwear/black-ribbed-knit-split-hem-bodycon-midaxi-dress.jpg?strip=true&qlt=50&w=720",
      "https://media3.newlookassets.com/i/newlook/877900001M1/womens/clothing/knitwear/black-ribbed-knit-split-hem-bodycon-midaxi-dress.jpg?strip=true&qlt=50&w=720",
      "https://media2.newlookassets.com/i/newlook/877900001M2/womens/clothing/knitwear/black-ribbed-knit-split-hem-bodycon-midaxi-dress.jpg?strip=true&qlt=50&w=720",
      "https://media3.newlookassets.com/i/newlook/877900001M3/womens/clothing/knitwear/black-ribbed-knit-split-hem-bodycon-midaxi-dress.jpg?strip=true&qlt=50&w=720",
    ],
  },
  {
    id: uuid(),
    name: "Green Abstract Print Satin Mini Dress",
    image:
      "https://media3.newlookassets.com/i/newlook/880304239/womens/clothing/dresses/green-abstract-print-satin-mini-dress.jpg?strip=true&qlt=50&w=720",
    price: 69.99,
    rating: 4.6,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://media3.newlookassets.com/i/newlook/880304239/womens/clothing/dresses/green-abstract-print-satin-mini-dress.jpg?strip=true&qlt=50&w=720",
      "https://media2.newlookassets.com/i/newlook/880304239M1/womens/clothing/dresses/green-abstract-print-satin-mini-dress.jpg?strip=true&qlt=50&w=720",
      "https://media3.newlookassets.com/i/newlook/880304239M2/womens/clothing/dresses/green-abstract-print-satin-mini-dress.jpg?strip=true&qlt=50&w=720",
      "https://media2.newlookassets.com/i/newlook/880304239M3/womens/clothing/dresses/green-abstract-print-satin-mini-dress.jpg?strip=true&qlt=50&w=720",
    ],
  },
  {
    id: uuid(),
    name: "Dark Brown Ribbed Notch Neck Midaxi Dress",
    image:
      "https://media2.newlookassets.com/i/newlook/881155327/womens/clothing/dresses/dark-brown-ribbed-notch-neck-midaxi-dress.jpg?strip=true&qlt=50&w=720",
    price: 34.99,
    rating: 4.3,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://media2.newlookassets.com/i/newlook/881155327/womens/clothing/dresses/dark-brown-ribbed-notch-neck-midaxi-dress.jpg?strip=true&qlt=50&w=720",
      "https://media3.newlookassets.com/i/newlook/881155327M1/womens/clothing/dresses/dark-brown-ribbed-notch-neck-midaxi-dress.jpg?strip=true&qlt=50&w=720",
      "https://media2.newlookassets.com/i/newlook/881155327M2/womens/clothing/dresses/dark-brown-ribbed-notch-neck-midaxi-dress.jpg?strip=true&qlt=50&w=720",
      "https://media3.newlookassets.com/i/newlook/881155327M3/womens/clothing/dresses/dark-brown-ribbed-notch-neck-midaxi-dress.jpg?strip=true&qlt=50&w=720",
    ],
  },
  {
    id: uuid(),
    name: "White Burnout Stripe Satin Longline Shirt",
    image:
      "https://media2.newlookassets.com/i/newlook/873094610/womens/clothing/white-burnout-stripe-satin-longline-shirt.jpg?strip=true&qlt=50&w=720",
    price: 19.99,
    rating: 4.4,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://media2.newlookassets.com/i/newlook/873094610/womens/clothing/white-burnout-stripe-satin-longline-shirt.jpg?strip=true&qlt=50&w=720",
      "https://media3.newlookassets.com/i/newlook/873094610M3/womens/clothing/white-burnout-stripe-satin-longline-shirt.jpg?strip=true&qlt=50&w=720",
      "https://media2.newlookassets.com/i/newlook/873094610M2/womens/clothing/white-burnout-stripe-satin-longline-shirt.jpg?strip=true&qlt=50&w=720",
      "https://media3.newlookassets.com/i/newlook/873094610M1/womens/clothing/white-burnout-stripe-satin-longline-shirt.jpg?strip=true&qlt=50&w=720",
    ],
  },
  {
    id: uuid(),
    name: "Black Wrap Front Skort",
    image:
      "https://media2.newlookassets.com/i/newlook/873391701/womens/clothing/skirts/black-wrap-front-skort.jpg?strip=true&qlt=50&w=720",
    price: 44.99,
    rating: 4.1,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://media2.newlookassets.com/i/newlook/873391701/womens/clothing/skirts/black-wrap-front-skort.jpg?strip=true&qlt=50&w=720",
      "https://media3.newlookassets.com/i/newlook/873391701M3/womens/clothing/skirts/black-wrap-front-skort.jpg?strip=true&qlt=50&w=720",
      "https://media2.newlookassets.com/i/newlook/873391701M2/womens/clothing/skirts/black-wrap-front-skort.jpg?strip=true&qlt=50&w=720",
      "https://media3.newlookassets.com/i/newlook/873391701M1/womens/clothing/skirts/black-wrap-front-skort.jpg?strip=true&qlt=50&w=720",
    ],
  },
  {
    id: uuid(),
    name: "Black Velvet Sequin Midaxi Skirt",
    image:
      "https://media3.newlookassets.com/i/newlook/874647401/womens/clothing/skirts/black-velvet-sequin-midaxi-skirt.jpg?strip=true&qlt=50&w=720",
    price: 79.99,
    rating: 4.2,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://media3.newlookassets.com/i/newlook/874647401/womens/clothing/skirts/black-velvet-sequin-midaxi-skirt.jpg?strip=true&qlt=50&w=720",
      "https://media2.newlookassets.com/i/newlook/874647401M3/womens/clothing/skirts/black-velvet-sequin-midaxi-skirt.jpg?strip=true&qlt=50&w=720",
      "https://media3.newlookassets.com/i/newlook/874647401M2/womens/clothing/skirts/black-velvet-sequin-midaxi-skirt.jpg?strip=true&qlt=50&w=720",
      "https://media2.newlookassets.com/i/newlook/874647401M1/womens/clothing/skirts/black-velvet-sequin-midaxi-skirt.jpg?strip=true&qlt=50&w=720",
    ],
  },
  {
    id: uuid(),
    name: "Black Long Sleeve Blazer",
    image:
      "https://media2.newlookassets.com/i/newlook/873428801/womens/clothing/black-long-sleeve-blazer.jpg?strip=true&qlt=50&w=720",
    price: 54.99,
    rating: 4.7,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://media2.newlookassets.com/i/newlook/873428801/womens/clothing/black-long-sleeve-blazer.jpg?strip=true&qlt=50&w=720",
      "https://media3.newlookassets.com/i/newlook/873428801M3/womens/clothing/black-long-sleeve-blazer.jpg?strip=true&qlt=50&w=720",
      "https://media2.newlookassets.com/i/newlook/873428801M2/womens/clothing/black-long-sleeve-blazer.jpg?strip=true&qlt=50&w=720",
      "https://media3.newlookassets.com/i/newlook/873428801M1/womens/clothing/black-long-sleeve-blazer.jpg?strip=true&qlt=50&w=720",
    ],
  },
];

export const menClothes: Products[] = [
  {
    id: uuid(),
    name: "Retro Crest T-shirt in Eggshell",
    image:
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/401/3846/100/2/104967730/104967730_1_720x928.webp",
    price: 49.99,
    rating: 4.5,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/401/3846/100/2/104967730/104967730_1_720x928.webp",
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/401/3846/100/2/104967730/104967730_2_1_720x928.jpeg",
    ],
  },
  {
    id: uuid(),
    name: "Worker Shirt in Patch Green",
    image:
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/406/3392/113/8/117926980/117926980_1_720x928.webp",
    price: 39.99,
    rating: 4.2,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/406/3392/113/8/117926980/117926980_1_720x928.webp",
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/406/3392/113/8/117926980/117926980_2_720x928.webp",
    ],
  },
  {
    id: uuid(),
    name: "Textured Stripe T-Shirt in Pottery Blue",
    image:
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/406/3828/100/3/111928240/111928240_1_720x928.webp",
    price: 29.99,
    rating: 4.8,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/406/3828/100/3/111928240/111928240_1_720x928.webp",
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/406/3828/100/3/111928240/111928240_2_720x928.webp",
    ],
  },
  {
    id: uuid(),
    name: "Textured Stripe T-Shirt in Terracotta/Navy",
    image:
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/406/3828/100/3/111926080/111926080_1_720x928.webp",
    price: 59.99,
    rating: 4.0,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/406/3828/100/3/111926080/111926080_1_720x928.webp",
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/406/3828/100/3/111926080/111926080_4_720x928.webp",
    ],
  },
  {
    id: uuid(),
    name: "Otto Organic Cotton Polo in Red",
    image:
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/70/705/3856/100/1/126196240/126196240_1_720x928.webp",
    price: 69.99,
    rating: 4.6,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/70/705/3856/100/1/126196240/126196240_1_720x928.webp",
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/70/705/3856/100/1/126196240/126196240_3_720x928.webp",
    ],
  },
  {
    id: uuid(),
    name: "Chenille Crew Neck Sweatshirt in Eggshell",
    image:
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/406/3651/200/9/105577120/105577120_1_720x928.webp",
    price: 34.99,
    rating: 4.3,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/406/3651/200/9/105577120/105577120_1_720x928.webp",
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/406/3651/200/9/105577120/105577120_4_720x928.webp",
    ],
  },
  {
    id: uuid(),
    name: "We Dream in Colours Oversize Tee in Dusk Rose",
    image:
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/77/772/7864/1/1/139043740/139043740_1_720x928.webp",
    price: 19.99,
    rating: 4.4,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/77/772/7864/1/1/139043740/139043740_1_720x928.webp",
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/77/772/7864/1/1/139043740/139043740_2_720x928.webp",
    ],
  },
  {
    id: uuid(),
    name: "Stacked Outline Logo Crew Neck Sweatshirt in Bright White",
    image:
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/406/3651/200/9/105578020/105578020_1_720x928.webp",
    price: 44.99,
    rating: 4.1,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/406/3651/200/9/105578020/105578020_1_720x928.webp",
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/406/3651/200/9/105578020/105578020_4_720x928.webp",
    ],
  },
  {
    id: uuid(),
    name: "Brushstroke Tee in Black",
    image:
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/406/3651/200/7/105577390/105577390_1_720x928.webp",
    price: 79.99,
    rating: 4.2,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/406/3651/200/7/105577390/105577390_1_720x928.webp",
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/406/3651/200/7/105577390/105577390_3_720x928.webp",
    ],
  },
  {
    id: uuid(),
    name: "Oversize Puffer Peace Tee in Black",
    image:
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/77/772/7864/1/1/136793320/136793320_1_720x928.webp",
    price: 54.99,
    rating: 4.7,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/77/772/7864/1/1/136793320/136793320_1_720x928.webp",
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/77/772/7864/1/1/136793320/136793320_3_720x928.webp",
    ],
  },
];

export const carousel: Products[] = [
  {
    id: uuid(),
    name: "Blogilates Loop Bands - 4pk",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_872b133a-a583-4822-8160-98871145e5c5?wid=1200&hei=1200&qlt=80&fmt=webp",
    price: 49.99,
    rating: 4.5,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://target.scene7.com/is/image/Target/GUEST_872b133a-a583-4822-8160-98871145e5c5?wid=1200&hei=1200&qlt=80&fmt=webp",
    ],
  },
  {
    id: uuid(),
    name: "Stanley 40oz Stainless Steel H2.0 FlowState Quencher Tumbler",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_06521735-c369-4118-84d3-2a73d54409d2?wid=1200&hei=1200&qlt=80&fmt=webp",
    price: 39.99,
    rating: 4.2,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://target.scene7.com/is/image/Target/GUEST_06521735-c369-4118-84d3-2a73d54409d2?wid=1200&hei=1200&qlt=80&fmt=webp",
    ],
  },
  {
    id: uuid(),
    name: "Fenty Snackz by Fenty Beauty by Rihanna Mini Killawatt Freestyle Highlighter - .981oz - Ulta Beauty",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_6cf43629-8ce1-4a76-b169-b71949c1f4bf?wid=1200&hei=1200&qlt=80&fmt=webp",
    price: 29.99,
    rating: 4.8,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://target.scene7.com/is/image/Target/GUEST_6cf43629-8ce1-4a76-b169-b71949c1f4bf?wid=1200&hei=1200&qlt=80&fmt=webp",
    ],
  },
  {
    id: uuid(),
    name: "Dyson Corrale Hair Straightener - Ulta Beauty",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_9a8bf48d-cd69-4d19-8020-481a56357795?wid=1200&hei=1200&qlt=80&fmt=webp",
    price: 59.99,
    rating: 4.0,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://target.scene7.com/is/image/Target/GUEST_9a8bf48d-cd69-4d19-8020-481a56357795?wid=1200&hei=1200&qlt=80&fmt=webp",
    ],
  },
  {
    id: uuid(),
    name: "OSEA Face and Body Bestsellers Kit - 2.39oz/2pc - Ulta Beauty",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_e4c09d02-909a-421a-9212-1489812d6670?wid=1200&hei=1200&qlt=80&fmt=webp",
    price: 69.99,
    rating: 4.6,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://target.scene7.com/is/image/Target/GUEST_e4c09d02-909a-421a-9212-1489812d6670?wid=1200&hei=1200&qlt=80&fmt=webp",
    ],
  },
  {
    id: uuid(),
    name: "Stanley 2pk 10oz Stainless Steel Everyday Go Tumblers",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_32b55207-6dec-4496-a0ca-5b21246180be?wid=1200&hei=1200&qlt=80&fmt=webp",
    price: 34.99,
    rating: 4.3,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://target.scene7.com/is/image/Target/GUEST_32b55207-6dec-4496-a0ca-5b21246180be?wid=1200&hei=1200&qlt=80&fmt=webp",
    ],
  },
  {
    id: uuid(),
    name: "OSEA Undaria Algae Body Butter - 6.7oz - Ulta Beauty",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_55fef087-9dd6-4f81-85e4-44491e55fcd0?wid=1200&hei=1200&qlt=80&fmt=webp",
    price: 19.99,
    rating: 4.4,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://target.scene7.com/is/image/Target/GUEST_55fef087-9dd6-4f81-85e4-44491e55fcd0?wid=1200&hei=1200&qlt=80&fmt=webp",
    ],
  },
  {
    id: uuid(),
    name: "Owala 24oz Stainless Steel Straw Tumbler - Lime Light",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_3eca8969-7824-4f84-92b7-dc34c53214f8?wid=1200&hei=1200&qlt=80&fmt=webp",
    price: 44.99,
    rating: 4.1,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://target.scene7.com/is/image/Target/GUEST_3eca8969-7824-4f84-92b7-dc34c53214f8?wid=1200&hei=1200&qlt=80&fmt=webp",
    ],
  },
  {
    id: uuid(),
    name: "Beekman 1802 Best Sellers Skincare Set - 1.66 fl oz - Ulta Beauty",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_0bf16c75-1482-4a75-a1c4-67cc399071d4?wid=1200&hei=1200&qlt=80&fmt=webp",
    price: 79.99,
    rating: 4.2,
    quant: 0,
    favorite: false,
    thumbnail: [
      "https://target.scene7.com/is/image/Target/GUEST_0bf16c75-1482-4a75-a1c4-67cc399071d4?wid=1200&hei=1200&qlt=80&fmt=webp",
    ],
  },
];

export const allProductsArray = [
  ...shoes,
  ...womenClothes,
  ...menClothes,
  ...carousel,
];
