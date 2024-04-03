import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { convertObjectToArray } from "./functions";
import {
  IconProps,
  RouteType,
  SocialMedia,
  SocialMediaList,
  WhatWeDoCardProps
} from "./types";
import { CardTick1, Icon, Profile2User, ReceiptSearch } from "iconsax-react";
import {
  HeavyTruck,
  Export,
  NeedCar,
  CarWorth,
  Electric,
  Test,
  HatchBack,
  VanIcon,
  TruckIcon,
  TractorIcon,
  CamperIcon,
  Excalator,
  van,
  saleMaking1,
  saleMaking2,
  saleMaking3,
  saleMaking4
} from "@/assets/images";

export const siteName = "Akandi Online",
  siteShortName = "Akandi",
  siteUrl = "https://akandionline.com",
  SEODescription = `Auction your vehicles online`,
  navHeights = {
    general: 80,
    home: 120
  },
  nav = "nav",
  otherServicesLink = "otherserviceLink",
  ourServicesLink = "ourservicesLink",
  aboutLink = "aboutLink",
  policiesLink = "policiesLink",
  generalClassName = "md:min-h-[calc(100vh-6rem)]",
  Routes: {
    [name: string]: RouteType;
  } = {
    Home: {
      path: "/",
      label: "Home",
      showIn: [],
      activeIn: ["/"],
      Icon: undefined,
      type: "link"
    },
    About: {
      path: "/about",
      label: "About",
      showIn: [nav],
      activeIn: ["/about"],
      Icon: undefined,
      type: "link"
    },
    Contact: {
      path: "/contact",
      label: "Contact",
      showIn: [nav],
      activeIn: ["/contact"],
      Icon: undefined,
      type: "link"
    },
    BuyCar: {
      path: "/buy-used-cars",
      label: "Buy car",
      showIn: [otherServicesLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    SellCar: {
      path: "/sell-used-cars",
      label: "Sell car",
      showIn: [otherServicesLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    HowTest: {
      path: "",
      label: "How we test ",
      showIn: [otherServicesLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    FAQ: {
      path: "",
      label: "FAQ",
      showIn: [otherServicesLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    Export: {
      path: "/export",
      label: "Export",
      showIn: [ourServicesLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    CarLoan: {
      path: "/carloan",
      label: "Car loans and car warranty",
      showIn: [ourServicesLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    CarInsurance: {
      path: "/car-insurance",
      label: "Car insurance",
      showIn: [ourServicesLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    Transport: {
      path: "/transport",
      label: "Transport the car ",
      showIn: [ourServicesLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    PickUp: {
      path: "/we-pick-up",
      label: "We pick up the car you're selling",
      showIn: [ourServicesLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    LiveChat: {
      path: "/leasing",
      label: "Leasing at Akandi online",
      showIn: [ourServicesLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    ContactUs: {
      path: "",
      label: "Contact us",
      showIn: [aboutLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    whereToFind: {
      path: "",
      label: "where to find Akandi online cars",
      showIn: [aboutLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    NewsRoom: {
      path: "",
      label: "Our newsroom",
      showIn: [aboutLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    TermsAndCondition: {
      path: "/terms-and-conditions",
      label: "Our terms and condition",
      showIn: [policiesLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    Policy: {
      path: "",
      label: "policy",
      showIn: [policiesLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    AboutUs: {
      path: "/about-akandi online",
      label: "About us",
      showIn: [policiesLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    Newsletter: {
      path: "",
      label: "Newsletter",
      showIn: [policiesLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },

    work: {
      path: "",
      label: "Work with us",
      showIn: [policiesLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    cookie: {
      path: "",
      label: "cookies settings",
      showIn: [policiesLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    }
  },
  WorthKnowing = {
    HeavyVehicles: {
      img: HeavyTruck,
      title: "Heavy Vehicles at Akandi",
      desc: "heavy machinery & vehicles",
      link: "kvdPro"
    },
    FindCars: {
      img: NeedCar,
      title: "Find the car for your needs",
      desc: "try our car guide today",
      link: "carguide"
    },
    ExportCars: {
      img: Export,
      title: "Good-To-Know:Export",
      desc: "how to export through us",
      link: "export"
    },
    VehicleWorth: {
      img: CarWorth,
      title: "What is your car worth",
      desc: "get a valuation here",
      link: "sell"
    }
  },
  Selections = {
    Cars: {
      label: "Car",
      value: "used-cars",
      image: HatchBack
    },
    LightTruck: {
      label: "LightTruck",
      value: "light-truck",
      image: VanIcon
    },
    HeavyTruck: {
      label: "HeavyTruck",
      value: "heavy-truck",
      image: TruckIcon
    },
    Machines: {
      label: "Machines",
      value: "machines",
      image: TractorIcon
    },
    RecreationalVehicles: {
      label: "Recreational Vehicles",
      value: "recreational-vehicles",
      image: CamperIcon
    }
  },
  AboutContent = {
    Test: {
      image: Test,
      description:
        "All cars have been tested by professional technicians. We assess the machinery and take the car for a test drive.",
      link: "cars",
      title: "How we test the cars",
      linkText: "Read more about the test"
    },
    AuctionedCars: {
      image: Electric,
      description:
        "Looking for an electric car, plug-in hybrid or an electric hybrid? Look no further! We have wide range of electric driven cars.",
      link: "cars",
      title: "See all electric cars on auction",
      linkText: "See all cars"
    }
  },
  CarBrands = {
    AlfaRomeo: {
      name: "Alfa Romeo",
      value: "alfa-romeo"
    },
    AstonMartin: {
      value: "Aston Martin",
      label: "aston-martin"
    },
    Audi: {
      value: "Audi",
      label: "audi"
    },
    Bentley: {
      value: "Bentley",
      label: "bentley"
    },
    BMW: {
      value: "BMW",
      label: "bmw"
    },
    Cadillac: {
      value: "Cadillac",
      label: "cadillac"
    },
    Chevrolet: {
      value: "Chevrolet",
      label: "chevrolet"
    },
    Chrysler: {
      value: "Chrysler",
      label: "chrysler"
    },
    Citroen: {
      value: "Citroen",
      label: "citroen"
    },
    Dacia: {
      value: "Dacia",
      label: "dacia"
    },
    Dodge: {
      value: "Dodge",
      label: "dodge"
    },
    Ferrari: {
      value: "",
      label: ""
    },
    Fiat: {
      value: "",
      label: ""
    },
    Ford: {
      value: "",
      label: ""
    },
    Honda: {
      value: "",
      label: ""
    },
    Hyundai: {
      value: "",
      label: ""
    },
    Iveco: {
      value: "",
      label: ""
    },
    Jaguar: {
      value: "",
      label: ""
    },
    Jeep: {
      value: "",
      label: ""
    },
    KIA: {
      value: "",
      label: ""
    },
    LandRover: {
      value: "",
      label: ""
    },
    Lexus: {
      value: "",
      label: ""
    },
    LynkCo: {
      value: "",
      label: ""
    },
    Maserati: {
      value: "",
      label: ""
    },
    Mazda: {
      value: "",
      label: ""
    },
    Mercedes: {
      value: "",
      label: ""
    },
    MINI: {
      value: "",
      label: ""
    },
    Mitsubishi: {
      value: "",
      label: ""
    },
    Nissan: {
      value: "",
      label: ""
    },
    Opel: {
      value: "",
      label: ""
    },
    Peugeot: {
      value: "",
      label: ""
    },
    Polestar: {
      value: "",
      label: ""
    },
    Porsche: {
      value: "",
      label: ""
    },
    Renault: {
      value: "",
      label: ""
    },
    RollsRoyce: {
      value: "",
      label: ""
    },
    Saab: {
      value: "",
      label: ""
    },
    SEAT: {
      value: "",
      label: ""
    },
    Skoda: {
      value: "",
      label: ""
    },
    Subaru: {
      value: "",
      label: ""
    },
    Suzuki: {
      value: "",
      label: ""
    },
    Tesla: {
      value: "",
      label: ""
    },
    Toyota: {
      value: "",
      label: ""
    },
    Volkswagen: {
      value: "",
      label: ""
    },
    Volvo: {
      value: "",
      label: ""
    }
  },
  WhyUsLinks = {
    Certified: {
      label: "Akandi Certified",
      value: "certified"
    },
    CarLoan: {
      label: "Car loan through Akandi",
      value: "car-loan"
    },
    PickUp: {
      label: "We pick up the car you are selling",
      value: "pick-up"
    }
  },
  Socials: { [name: string]: SocialMedia } = {
    Twitter: {
      Icon: FaTwitter,
      label: "Twitter",
      link: "https://twitter.com/"
    },
    Instagram: {
      Icon: FaInstagram,
      label: "Instagram",
      link: "https://www.instagram.com/"
    },
    Facebook: {
      Icon: FaFacebook,
      label: "Facebook",
      link: "https://facebook.com/"
    },
    LinkedIn: {
      Icon: FaLinkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/"
    }
  },
  allRoutes: RouteType[] = convertObjectToArray(Routes),
  allSocials: SocialMediaList = convertObjectToArray(Socials),
  otherServiceRoutes = allRoutes.filter((link) =>
    link.showIn.includes(otherServicesLink)
  ),
  ourServiceRoutes = allRoutes.filter((link) =>
    link.showIn.includes(ourServicesLink)
  ),
  aboutRoutes = allRoutes.filter((link) => link.showIn.includes(aboutLink)),
  policiesRoutes = allRoutes.filter((link) =>
    link.showIn.includes(policiesLink)
  ),
  allAboutContent = convertObjectToArray(AboutContent),
  allWhyUsLink = convertObjectToArray(WhyUsLinks),
  allWorthKnowing = convertObjectToArray(WorthKnowing),
  allSelections = convertObjectToArray(Selections),
  navRoutes = allRoutes.filter((link) => link.showIn.includes(nav));
