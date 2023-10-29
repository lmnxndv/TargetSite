interface FooterData {
    sections: FooterSection[];
  }
  
  interface FooterSection {
    title: string;
    links: FooterLink[];
  }
  
  interface FooterLink {
    text: string;
    url: string;
  }
  
  const footerData: FooterData = {
    sections: [
      {
        title: "About Us",
        links: [
          { text: "About Target", url: "/company-info" },
          { text: "Careers", url: "/team" },
          { text: "News & Blog", url: "/history" },
          { text: "Target Brands", url: "/mission" },
          { text: "Bullseye Shop", url: "/mission" },
          { text: "Sustainability & Governance", url: "/mission" },
          { text: "Press Center", url: "/mission" },
          { text: "Investors", url: "/mission" },
          { text: "Suppliers", url: "/mission" },
          { text: "TargetPlus", url: "/mission" },
        ],
      },
      {
        title: "Help",
        links: [
          { text: "Target Help", url: "/customer-service" },
          { text: "Returns", url: "/faqs" },
          { text: "Track Orders", url: "/contact" },
          { text: "Recalls", url: "/support" },
          { text: "Contact Us", url: "/support" },
          { text: "Feedback", url: "/support" },
          { text: "Accessibility", url: "/support" },
          { text: "Security & Fraud", url: "/support" },
        ],
      },
      {
        title: "Stores",
        links: [
          { text: "Find a Store", url: "/find-store" },
          { text: "Clinic", url: "/store-locator" },
          { text: "Pharmacy", url: "/in-store-events" },
          { text: "Optical", url: "/special-offers" },
        ],
      },
      {
        title: "Services",
        links: [
          { text: "Target Circle", url: "/service-1" },
          { text: "RedCard", url: "/service-2" },
          { text: "Target App", url: "/service-3" },
          { text: "Registry", url: "/service-4" },
          { text: "Same Day Delivery", url: "/service-4" },
          { text: "Order Pickup", url: "/service-4" },
          { text: "Drive Up", url: "/service-4" },
          { text: "Free 2-Day Shipping", url: "/service-4" },
          { text: "Shipping Delivery", url: "/service-4" },
        ],
      },
    ],
  };
  
  export default footerData;
  