interface HeaderData {
  sections: HeaderSection[];
}

interface HeaderSection {
  title: string;
  links: HeaderLink[];
}

interface HeaderLink {
  text: string;
  url: string;
}

const headerData: HeaderData = {
  sections: [
    {
      title: "Categories",
      links: [
        { text: "Halloween", url: "/company-info" },
        { text: "Christmas", url: "/team" },
        { text: "Grocery", url: "/history" },
        { text: "Clothing, Shoes & Accessories", url: "/mission" },
        { text: "Baby", url: "/mission" },
        { text: "Home", url: "/mission" },
        { text: "Furniture", url: "/mission" },
        { text: "Kithen & Dining", url: "/mission" },
        { text: "Outdoor Living & Garden", url: "/mission" },
        { text: "Toys", url: "/mission" },
      ],
    },
    {
      title: "Deals",
      links: [
        { text: "Top Deals", url: "/customer-service" },
        { text: "Target Circle Offers", url: "/faqs" },
        { text: "Weekly Ad", url: "/contact" },
        { text: "Clearance", url: "/support" },
      ],
    },
    {
      title: "What's new",
      links: [
        { text: "Target New Arrivals", url: "/find-store" },
        { text: "Target Finds", url: "/store-locator" },
        { text: "#TargetStyle", url: "/in-store-events" },
      ],
    },
    {
      title: "Pickup & Delivery",
      links: [
        { text: "Shop Order Pickup", url: "/service-1" },
        { text: "Shop Same Day Delivery", url: "/service-2" },
      ],
    },
  ],
};

export default headerData;
