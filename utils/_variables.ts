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
  test,
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
  WorthKnowing = [
    {
      img: HeavyTruck,
      title: "Heavy Vehicles at Akandi online",
      desc: "heavy machinery & vehicles",
      link: "kvdPro"
    },
    {
      img: NeedCar,
      title: "Find the car for your needs",
      desc: "try our car guide today",
      link: "carguide"
    },
    {
      img: Export,
      title: "Good-To-Know:Export",
      desc: "how to export through us",
      link: "export"
    },
    {
      img: CarWorth,
      title: "What is your car worth",
      desc: "get a valuation here",
      link: "sell"
    }
  ],
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
  navRoutes = allRoutes.filter((link) => link.showIn.includes(nav));
