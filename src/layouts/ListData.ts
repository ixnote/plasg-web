export const defaultList = {
  default: true,
  titel: "Library: Find Information",
  paragraph:
    "Navigate through a wealth of information about Plateau State with ease. Access downloadable documents, online services, media resources, policies, laws, state records and insights into the diverse people that make up our vibrant community—all in one convenient location.",
};

export const governmentData = [
  {
    _id: 0o1,
    title: " Overview",
    path: "/government",
  },
  // {
  //   _id: 0o2,
  //   title: " Overview",
  //   path: "#",
  // },
  {
    _id: 0o2,
    title: " Legislative",
    path: "/legislative",
  },
  {
    _id: 0o3,
    title: "MDAs",
    path: "/mdas",
  },
  {
    _id: 0o4,
    title: "Projects",
    path: "#",
  },
];

export const libraryData = [
  {
    _id: 0o1,
    title: "Governance",
    subTitle: "Governance",
    path: "/government",
    paragraph:
      "Explore investment opportunities on the Plateau State. Whether you're looking to invest in infrastructure, agriculture, tourism, or other sectors, find valuable information and guidance to make informed decisions and drive positive change in our community.",
    forwardArrow: false,
  },
  {
    _id: 0o2,
    title: "Business",
    subTitle: "Doing Business",
    path: "/business",
    paragraph:
      "Explore our collection of business-related information and reports. Stay informed with market insights, economic data, and regulatory updates about Plateau State. Discover how the government is supporting businesses and stay updated on the latest opportunities and developments.",
    forwardArrow: true,

    subMenu: [
      {
        _id: "A",
        title: "Investments",
        subTitle: "Invest in Plateau",
        path: "#",
        paragraph:
          "Access the Plateau State One-Stop Investment Centre (PS-OSIC) website and discover how we streamline the investment process to support and encourage your business ventures in Plateau State.",
      },
      {
        _id: "B",
        title: "Incentives",
        subTitle: "Business Incentives",
        path: "#",
        paragraph:
          "Explore the business incentives offered by the Plateau State Government to encourage ease of business. Discover how we make starting and growing your business in Plateau State easier and more rewarding.",
      },
      {
        _id: "C",
        title: "Economic Policies",
        subTitle: "Economic Policies",
        path: "#",
        paragraph:
          "Explore our approach to driving economic growth, fostering innovation, and creating opportunities for all. Read our policies designed to promote sustainable development, attract investment, and enhance the prosperity of our citizens and communities.",
      },
      {
        _id: "D",
        title: "Reports",
        subTitle: "Business Reports",
        path: "#",
        paragraph:
          "Stay up-to-date with the latest data, statistics, and research, empowering you to navigate the local business environment with confidence. From industry analyses to market trends, find the information you need to make informed decisions and drive your business forward.",
      },
      {
        _id: "E",
        title: "Others",
        subTitle: "Explore More",
        path: "#",
        paragraph:
          "Stay informed and engaged with the latest updates and resources tailored to meet the diverse needs and interests of our community. From articles, guidelines, community initiatives to cultural events, explore the breadth of offerings available in business enthusiast in Plateau State",
      },
    ],
  },
  {
    _id: 0o3,
    title: "Health",
    subTitle: "Your Health",
    path: "#",
    paragraph:
      "Explore our health-related information and reports. Access valuable insights on healthcare initiatives in Plateau State. Find public health updates, annual reports, and resources to stay informed about efforts to improve community health.",
    forwardArrow: false,
  },
  {
    _id: 0o4,
    title: "Welfare",
    subTitle: "Your Welfare",
    path: "#",
    paragraph:
      "Discover welfare-related information and reports. Access updates on topics like: education and housing and on on social programs and community support in Plateau State, and stay informed about initiatives to improve residents' well-being",
    forwardArrow: false,
  },
  {
    _id: 0o5,
    title: "Tourism",
    subTitle: "Our People, Our Heritage",
    path: "#",
    paragraph:
      "Discover the essence of Plateau's rich heritage and vibrant culture. Delve into the history, traditions, and unique stories that define the diverse communities of Plateau State.",
    forwardArrow: false,
  },
];
