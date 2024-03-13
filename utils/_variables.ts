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
import { HeavyTruck,Export, NeedCar,CarWorth, Electric, test, HatchBack, VanIcon, TruckIcon, TractorIcon, CamperIcon, Excalator, van, saleMaking1,saleMaking2, saleMaking3, saleMaking4 } from "@/assets/images";
import { title } from "process";
import { text } from "stream/consumers";
import Button from "@/components/general/Button";
import { link } from "fs";

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
    [name: string ]: RouteType;
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
    },
 
  },
  WorthKnowing=[
  {
     img:HeavyTruck,
     title:"Heavy Vehicles at Akandi online",
     desc:"heavy machinery & vehicles",
     link:"kvdPro"

  },
  { 
    img:NeedCar,
    title:"Find the car for your needs",
    desc:"try our car guide today",
    link: "carguide"

  },
  {
    img:Export,
    title:"Good-To-Know:Export",
    desc:"how to export through us",
    link:"export"
  },
  {
   img:CarWorth,
   title:"What is your car worth",
   desc:"get a valuation here",
   link:"sell"
  },
  ],
  option=[
    {
      text:"Akandi certified",
      link:"certified"
    },
    {
     text:"Car loan through Akandi",
     link:"carloan"
    },
    {
        text:"We pick up the car you're selling",
        link:"we-pick-up"
    }
  ],
  sections=[
    {
     icon:HatchBack,
      name:"car"

    },
    {
     icon: VanIcon,
    name:"Light truck"
  },
  {
     icon:TruckIcon,
      name:"Heavy truck"
    },
    {
      icon:TractorIcon,
      name:"Machines"
    },
    {
     icon:CamperIcon,
     name:"Recreational vehicle"
    }
  ],

  lanblog=[
     {
      img:test,
      title:"How do we test this cars",
      desc:"All cars have been tested by professional technicians.we access the machine and take the car  for a text drive ",
      button:"Read more about the test"
     },
     {
      img:Electric,
      title:"See all electric cars on auction",
      desc:"Looking for  an electric car,plug in hybrid? Look further!We have wide range of electriv driven cars",
      button:"See all cars"
     }

   ],
   Lancontent=[
    {
      title:"Car auctions-buy  your next car at Akandi.com",
      info:"Akandi.com is Nigeria's biggest marketplace for used cars,Every year we sell more  than  26000 cars, in hunderds of model and from more than 60 car brands.with us, you can find the car that suit your Needs!",
      link:"/auction",

    },
    {
      title:"Sell a company car through Akande Online",
      info:"Do you have a company car you want to sell?We offer our services to private individuals as well as companies.Contact us to know more!",
      link:"/auction",
    }

  ],
  heavyMachinery=[
    {
      img:Excalator,
      day:"monday",
      map:"lagos",
      name:"Wacker Neuson EZ28",
      type:"minigravare",
      year:"2013/300h/",
      export:"yes",
      bid:"102500SEK",
    },
    {
      img:Excalator,
      day:"monday",
      map:"lagos",
      name:"volvo BM LM622",
      type:"minigravare",
      export:"yes",
      bid:"102500SEK",
      vatBid:"40 400SEK"

    },
    {
      img:Excalator,
      day:"monday",
      map:"lagos",
      name:"volvo BM LM622",
      type:"minigravare",
      export:"yes",
      bid:"102500SEK",
      vatBid:"40 400SEK"

    },
    {
      img:Excalator,
      day:"monday",
      map:"lagos",
      name:"volvo BM LM622",
      type:"minigravare",
      export:"yes",
      bid:"102500SEK",
      vatBid:"40 400SEK"

    },
    {
      img:Excalator,
      day:"monday",
      map:"lagos",
      name:"volvo BM LM622",
      type:"minigravare",
      export:"yes",
      bid:"102500SEK",
      vatBid:"40 400SEK"

    },

  ],
  Truck=[
  {
    img:van,
    day:"monday",
    map:"abuja ",
    name:"mercedes 903",
    type:"minigravare",
    year:"2013/210 063km/",
    export:"yes",
    bid:"55 500 SEK",
  
  },
  {
    img:van,
    day:"tuesday",
    map:"lagos",
    name:"volks wagon  crafter",
    type:"Buss(19 sits + chaffeur +3 rullstols....",
    year:"2013/210 063km/",
    export:"yes",
    bid:"89 300 SEK",
    vatBid:"71 440 SEK"
  },
  {
    img:van,
    day:"tuesday",
    map:"lagos",
    name:"volks wagon  crafter",
    type:"Buss(19 sits + chaffeur +3 rullstols....",
    year:"2013/210 063km/",
    export:"yes",
    bid:"89 300 SEK",
    vatBid:"71 440 SEK"
  }, 
  {
    img:van,
    day:"tuesday",
    map:"lagos",
    name:"volks wagon  crafter",
    type:"Buss(19 sits + chaffeur +3 rullstols....",
    year:"2013/210 063km/",
    export:"yes",
    bid:"89 300 SEK",
    vatBid:"71 440 SEK"
  },
  {
    img:van,
    day:"tuesday",
    map:"lagos",
    name:"volks wagon  crafter",
    type:"Buss(19 sits + chaffeur +3 rullstols....",
    year:"2013/210 063km/",
    export:"yes",
    bid:"89 300 SEK",
    vatBid:"71 440 SEK"
   },
  {
    img:van,
    day:"tuesday",
    map:"lagos",
    name:"volks wagon  crafter",
    type:"Buss(19 sits + chaffeur +3 rullstols....",
    year:"2013/210 063km/",
    export:"yes",
    bid:"89 300 SEK",
    vatBid:"71 440 SEK"
  },
  {
    img:van,
    day:"tuesday",
    map:"lagos",
    name:"volks wagon  crafter",
    type:"Buss(19 sits + chaffeur +3 rullstols....",
    year:"2013/210 063km/",
    export:"yes",
    bid:"89 300 SEK",
    vatBid:"71 440 SEK"
  },
  ],
  advantage=[
  {
    title:"Buy and sell a wide range  of vehicles at one place",
    desc:"Have you managed different type of vehicles at different places?Stop searching,now you can stay on one website whether you're buying or selling."
  },
  {
    title:"A bigger selection",
    desc:"One would rather choose a candy store that offers 100 varieties,instead of just 10.Now you can browse through passenger cars,light truck,,heavy machinery,trucks,and recreational vehicles-or just choose the category that suits you best,of course"   
  },
  {
    title:"more potential nuyers when selling",
    desc:"Yep,with the merger,we now have more potential buyers at Akandi online,which is positive for you when you're selling  "
  },
  {
    title:"Access to broad vehicle expertise ",
    desc:"Now we gather all oue vehicle expert under one roof!This makes us pros in everything from passenger cars and mini excavators to substancial load carriers and fire excavators.what would you like to ask us? "
  }
  ],
  accountBenefit=[
    {
      title:"All in one place.",
      desc:`Everything connected to when you are searching,buying and selling a vehicle,we did collect it for you at "my pages".from here you can follow along during your whole buying or selling process.`
    },
     { 
       title:"Your favourite and saved searches",
        desc:"You can easily mark your favourite vehicles by clicking on the heart icon when you find one you like.not having  the luck  to find your favourite right avay?No worries,create a saved search from your filters and we will get back to you when we find something that suits you "
     }
    
  ],
  consumersTerms =[
   {
    article:`Has something gone wrong when you placed a bid,we will help you adjust this before
             the countdown begins.You need to contact us,at the latest,6 hours before the countdown begins in order
             for us to be able to adjust your bid `
   },
   {
    article:`When the auction is closed,you as the winning bidder need to book a time and collecting
             the car within three working days. `
   },
   {
    article:`When you nuy a car through Akandi online, you pay a mediation fee in addition to the agreed
            price of the car.The mediation fee is for each car is indicated in the car's presentation/advertisement on Akandi online `
   },
   {
    article:`A customer can pay for their car purchase with bank transfer or Swish.Akandi online does not accept
            the following means of payment:debit card,credit card,bank card,cash payment,bank draft 
            cheque,company card or foreign bank card read more about payment `
   },
   {
    article:`in the event of dishonest bidding,the account holder is blocked from placing bids and buying cars on Akandi online.`
   }

  ],
  companiesTerms=[
    {
      article:`Cars and light trucks undergo our independent and comprehensive Akandi online test,while
              heavy vehicles,machinery and recreational vehicles undergo simpler visuaal documentation. `
    },
    {
      article:`Vehicles and machines that are sold at the seller's location may be used until the sale is
               completed and collected by the buyer.`
    },
    {
      article:`When you buy a vehicle or machine through Akandi online,you pay,in addition to the agreed price
               for the vehicle,a mediaation fee`
    },
    {
      article:`Payment of the agreed price and mediation fee must be recieved br Akandi online withinn 24 hours after
               the end of bidding or agreement on sale at a fixed price `
    },
    {
      article:`if the payment is not completed,youo will be charged the mediation fee and any overhead costs`
    },
    {
      article:`As a company,you need to make an appointment to collect the vehicle no later than 24 hours after
                the end of the auction or agreement to buy for a fixed price.if collection takes place without a 
                pre-booked time Akandi online will charge you an administration  fee`
    },
    {
      article:`Akandi online represents the seller and handles all commmunication with the buyer.the buyer does not
                have the right to contact the seller directly`
    },
    {
      article:`Some vehicles may be limited to being sold only to selected countries or VAT-registered companies`
    },
    {
      article:`if the vehicle or machine is not collected within three(3) working days (cars and light trucks) or 
               five(5) working days (heavy vehicles,machinery,and recreationa vehicles for export customers) from 
               the day of purchase,a storage fee per vehicle or machine and day will be charged,unless other
               agreement between Akandi online and the customer.  `
    },
    {
      article:`it is always the buyer who check the vehicle or machines corresponds to what he or she has the right to expect with,
               regards to the vehicle description.This applies regardlesss of vehicle or machine type.Always refer to pictures or any 
               video for condition assesment.There may be other remarks in condition and function
               description than what is written at Akandi online.`
    },
    {
      article:`As a buyer,you  are responsible for complying with all applicable international economic
              sanctions laws, regulations,trade embargoes or similar restriction.`
    }
  ],
  salesMaking=[
  {
    img:saleMaking1,
    title:" 1 contact us ",
    desc1:"send a notice of interest",
    desc2:"We work out the details together",
    desc3:"Hand in the car or let us pick it up "
  },
 {
    img:saleMaking2,
    title:" 2 we make it ready for sale",
    desc1:"our technician test",
    desc2:"the car get valued",
    desc3:"we wash and photograph"
  },
 {
    img:saleMaking3,
    title:" 3 We show it and sell ",
    desc1:"we market the car on several site",
    desc2:"the car is sold through bidding or at a fixed price",
    desc3:"you consider the highest bid"
  },
 {
    img:saleMaking4,
    title:"4 we take care of everything",
    desc1:"we do all the paperwork",
    desc2:"We deliver the car to the buyer",
    desc3:"We take responsibility for any complains"
  },

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
   otherServiceRoutes = allRoutes.filter((link) => link.showIn.includes(otherServicesLink)),
   ourServiceRoutes = allRoutes.filter((link) =>
    link.showIn.includes(ourServicesLink)
  ),
   aboutRoutes = allRoutes.filter((link) => link.showIn.includes(aboutLink)),
    policiesRoutes = allRoutes.filter((link) =>
    link.showIn.includes(policiesLink)
  ),
  navRoutes = allRoutes.filter((link) => link.showIn.includes(nav));
