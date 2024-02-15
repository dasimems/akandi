import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { convertObjectToArray } from "./functions";
import {
  IconProps,
  RouteType,
  SocialMedia,
  SocialMediaList,
  WhatWeDoCardProps
} from "./types";
import { CardTick1, Profile2User, ReceiptSearch } from "iconsax-react";

export const siteName = "Akandi Online",
  siteShortName = "Akandi",
  siteUrl = "https://akandionline.com",
  SEODescription = `Auction your vehicles online`,
  navHeights = {
    general: 80,
    home: 120
  },
  nav = "nav",
  companyLink = "companyLink",
  developerLink = "developerLink",
  supportLink = "supportLink",
  resourceLink = "resourceLink",
  contactLink = "contactLink",
  generalClassName = "md:min-h-[calc(100vh-6rem)]",
  legalLink = "legalLink",
  legalFooterLink = "legalFooterLink",
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
    AirtimeData: {
      path: "",
      label: "Airtime & Data",
      showIn: [companyLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    VTUServices: {
      path: "",
      label: "VTU Services",
      showIn: [companyLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    GasResale: {
      path: "",
      label: "Gas Resale",
      showIn: [companyLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    MoneyTransfer: {
      path: "",
      label: "Money Transfer",
      showIn: [companyLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    BillPayment: {
      path: "",
      label: "Bill Payment",
      showIn: [companyLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    ApiDocumentation: {
      path: "",
      label: "Api Documentation",
      showIn: [developerLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    More360Status: {
      path: "",
      label: "More 360 Status",
      showIn: [developerLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    Feedback: {
      path: "/contact",
      label: "Give us feedback",
      showIn: [supportLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    HelpCenter: {
      path: "",
      label: "Help Center",
      showIn: [supportLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    LiveChat: {
      path: "",
      label: "Live chat",
      showIn: [supportLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    Career: {
      path: "",
      label: "Career",
      showIn: [resourceLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    Blog: {
      path: "",
      label: "Blog",
      showIn: [resourceLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    FAQ: {
      path: "/faq",
      label: "FAQ",
      showIn: [resourceLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    HelloContact: {
      path: "mailto:hello@mymoreapp.com",
      label: "hello@mymoreapp.com",
      showIn: [contactLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    SupportContact: {
      path: "mailto:support@mymoreapp.com",
      label: "support@mymoreapp.com",
      showIn: [contactLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    Reseller: {
      path: "/solutions/reseller",
      label: "Reseller",
      showIn: [],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    GasVendor: {
      path: "/solutions/vendors",
      label: "Gas Vendor",
      showIn: [],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    PrivacyPolicy: {
      path: "/privacy-policy",
      label: "Privacy Policy",
      showIn: [legalLink, legalFooterLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    TermsOfUse: {
      path: "/terms",
      label: "Terms of use",
      showIn: [legalLink, legalFooterLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    CookiePolicy: {
      path: "/cookie-policy",
      label: "Cookie Policy",
      showIn: [legalLink, legalFooterLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    RiskManagement: {
      path: "/risk-management",
      label: "Risk Management",
      showIn: [legalLink],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    Login: {
      path: "/auth/login",
      label: "Login",
      showIn: [],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    OTPVerification: {
      path: "/auth/otp-verification",
      label: "OTP Verification",
      showIn: [],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    Requirements: {
      path: "/auth/requirements",
      label: "Requirements",
      showIn: [],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    ApplicationForm: {
      path: "/auth/application",
      label: "Requirements",
      showIn: [],
      activeIn: [],
      Icon: undefined,
      type: "link"
    },
    Completed: {
      path: "/auth/application/completed",
      label: "Completed application",
      showIn: [],
      activeIn: [],
      Icon: undefined,
      type: "link"
    }
  },
  whyChooseUs = [
    {
      title: "Choose what you would like to do with More",
      Icon: ReceiptSearch,
      description:
        "More allows you to create resellers account & also provides an opportunity to sell cooking gas. We have amazing features that will keep unfolding as you journey with us."
    },
    {
      title: "Create an account & get verified in seconds.",
      Icon: Profile2User,
      description:
        "Tell us more about your business. Provide your company name, address, and contact information. This helps us tailor our services to better meet your needs."
    },
    {
      title: "Set up your merchant dashboard and explore!",
      Icon: CardTick1,
      description:
        "Join the ranks of successful merchants who have chosen More as their trusted partner. Sign up today and experience the difference."
    }
  ],
  teams = [
    {
      name: "Dominic Praise",
      position: "Product Designer",
      image: ""
    },
    {
      name: "Dominic Praise",
      position: "Product Designer",
      image: ""
    },
    {
      name: "Dominic Praise",
      position: "Product Designer",
      image: ""
    },
    {
      name: "Dominic Praise",
      position: "Product Designer",
      image: ""
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
  companyRoutes = allRoutes.filter((link) => link.showIn.includes(companyLink)),
  developerRoutes = allRoutes.filter((link) =>
    link.showIn.includes(developerLink)
  ),
  supportRoutes = allRoutes.filter((link) => link.showIn.includes(supportLink)),
  resourceRoutes = allRoutes.filter((link) =>
    link.showIn.includes(resourceLink)
  ),
  contactRoutes = allRoutes.filter((link) => link.showIn.includes(contactLink)),
  legalFooterRoutes = allRoutes.filter((link) =>
    link.showIn.includes(legalFooterLink)
  ),
  legalRoutes = allRoutes.filter((link) => link.showIn.includes(legalLink)),
  navRoutes = allRoutes.filter((link) => link.showIn.includes(nav));
