import { KvdHero, Export } from "@/assets/images";
import { accountBenefit, advantage, heavyMachinery } from "@/utils/_variables";
import Link from "next/link";
import { Clock, Heart } from "lucide-react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import Button from "../Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const KvdContent = () => {
  return (
    <>
      <div className="flex justify-center overflow-hidden ">
        <div>
          <section className="relative">
            <div className="mt-[-8rem]">
              <Image
                src={KvdHero}
                alt=""
                className=" object-cover  max-w-[1920px] h-[650px] "
              />
            </div>
            <div className="flex justify-center">
              <div className=" absolute gap-6 top-[50%] left-[35%]">
                <h3 className="text-[4rem] font-bold text-center  text-white ">
                  Heavier than ever
                </h3>
              </div>
            </div>
          </section>
          <section className="flex bg-white justify-center mt-10 ">
            <div className="flex flex-col gap-6 w-[950px] ">
              <h3 className="text-2xl font-bold">
                AkANDI PRO + AKANDI CARS = AKANDI CARS{" "}
              </h3>
              <article className="font-medium">
                we are now heavier than ever-several and heavier vehicles,that
                is! Now you can not only find cars,light trucks and recreational
                vehicles in our garage at Akandi online,but also heavy machinery
                and vehicles.
              </article>
              <article>
                Akandi online is one of the largest marketplace for used
                cars.And now we have become even bigger than when we have joined
                forces with Akandi pro,that sold heavy machinery,trucks and
                recreational vehicles.our merge is a benefit for yo both as a
                buyer and a seller{" "}
              </article>
            </div>
          </section>
          <section className="flex bg-white justify-center mt-10">
            <div className="flex flex-col gap-4 w-[950px]">
              <h3 className="text-2xl font-bold">Heavy Machinery</h3>
              <div className="flex gap-1">
                <Swiper
                  cssMode={true}
                  navigation={true}
                  pagination={true}
                  mousewheel={true}
                  keyboard={true}
                  slidesPerView={4}
                  modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                  className="mySwiper"
                >
                  {heavyMachinery.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="p-2">
                        <div>
                          <Image src={item.img} alt="" />
                          <div className="flex absolute top-0 items-center gap-2">
                            <Clock />
                            <p>{item.day}</p>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <SlLocationPin />
                            <p>{item.map}</p>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-end">
                            <Heart />
                          </div>
                          <main className="text-md font-medium">
                            {item.name}
                          </main>
                          <p>{item.type}</p>
                          <div className="flex">
                            <p>{item.year}</p>
                            <p>
                              Export <span>{item.export}</span>
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h3>Leading bid</h3>
                            <h3>{item.bid}</h3>
                          </div>
                          {item.vatBid ? (
                            <div className="flex justify-between">
                              <h5>Bid exl VAT</h5>
                              <h5>{item.vatBid}</h5>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="flex items-center gap-3">
                <Link href="/heavymachinery">See more </Link>
                <FaAngleRight />
              </div>
            </div>
          </section>
          <section className="flex bg-white justify-center mt-10">
            <div className="flex flex-col gap-4 w-[950px]">
              <h3 className="text-2xl font-bold">Heavy Truck</h3>
              <div className="flex gap-1">
                <Swiper
                  cssMode={true}
                  navigation={true}
                  slidesPerView={4}
                  pagination={true}
                  mousewheel={true}
                  keyboard={true}
                  modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                  className="mySwiper"
                >
                  {heavyMachinery.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative">
                        <div>
                          <Image src={item.img} alt="" />
                          <div className="flex absolute top-0">
                            <Clock />
                            <p>{item.day}</p>
                          </div>
                          <div>
                            <SlLocationPin />
                            <p>{item.map}</p>
                          </div>
                        </div>
                        <div>
                          <Heart />
                          <main>{item.name}</main>
                          <p>{item.type}</p>
                          <div>
                            <p>{item.year}</p>
                            <p>
                              Export <span>{item.export}</span>
                            </p>
                          </div>
                          <div>
                            <h3>Leading bid</h3>
                            <h3>{item.bid}</h3>
                          </div>
                          {item.vatBid ? (
                            <div>
                              <h5>Bid exl VAT</h5>
                              <h5>{item.vatBid}</h5>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="flex items-center gap-1 text-blue-800">
                <Link href="/heavytruck">see more</Link>
                <FaAngleRight />
              </div>
            </div>
          </section>
          <section className="flex bg-white justify-center mt-10">
            <div className="flex flex-col gap-6 w-[950px]">
              <Button className="w-[200px]"> see all vehicles here </Button>
              <h3 className="text-2xl font-bold">Advantages</h3>
              {advantage.map((item, i) => (
                <div key={i}>
                  <div className="flex items-start gap-4">
                    <div className="h-[7px] w-[7px] bg-black rounded-full mt-3"></div>
                    <main className="text-lg font-medium w-full">
                      {item.title}-{" "}
                      <span className="text-md font-normal">{item.desc}</span>
                    </main>
                  </div>
                </div>
              ))}
              <h3 className="text-2xl font-bold">
                An account is all you need.
              </h3>
              <article className="text-md font-normal">
                If you earlier used Akandi pro to buy or sell machinery and
                vehicles, and recreational vehicles,we want to welcome you a bit
                extra to Akandi online.if you want to continue buying and
                selling this kinds of vehicles, you need to create a company
                account at Akandi online This applies to both corporate
                customers and if you have a sole proprietorship
              </article>
              <Button className="w-[250px]">Create Company Account</Button>
              <h3 className="text-lg font-bold">
                what&apos;s in for you,with an account?
              </h3>
              {accountBenefit.map((item, i) => (
                <div key={i} className="flex items-start gap-2 ">
                  <div className="h-{7px] w-[7px] bg-black rounded-full"></div>
                  <main className="text-lg font-medium">
                    {item.title} -{" "}
                    <span className="text-md font-normal"> {item.desc}</span>{" "}
                  </main>
                </div>
              ))}
              <h3 className="text-2xl font-bold">
                Reach out to more buyers when selling{" "}
              </h3>
              <p className="text-md font-normal">
                Time to sell heavy machinery and vehicles or recreational
                vehicles? Now you are able to reach out to more buyers than you
                have through Akandi online.Make an interest to sell below and we
                will give you estimated sales price
              </p>
              <Button className="w-[200px]">Get a valuation here </Button>
              <h3 className="text-2xl font-bold">Any questions?</h3>
              <p className="text-md font-normal">
                we are here for you!Reach out to our sale contact or reach out
                to our customer service center at +10-167 30 00 or email at
                customercar@akandi online.com
              </p>
              <hr />
              <article className="text-lg font-normal mb-10">
                At Akandi online you can find{" "}
                <span>
                  {" "}
                  <Link href="./cars">cars</Link>
                </span>
                ,
                <span className="text-blue-700">
                  {" "}
                  <Link href="./lighttrucks">light trucks</Link>
                </span>
                ,{" "}
                <span className="text-blue-700">
                  {" "}
                  <Link href="./lighttrucks">heavy machinery</Link>
                </span>
                ,
                <span className="text-blue-700">
                  {" "}
                  <Link href="./lighttrucks">trucks</Link>
                </span>{" "}
                and{" "}
                <span className="text-blue-700">
                  {" "}
                  <Link href="./lighttrucks">recreational vehicle</Link>
                </span>
                . Some of the vehicles type are
                <span className="text-blue-700">
                  {" "}
                  <Link href="./lighttrucks">Lawnmower</Link>
                </span>
                ,
                <span className="text-blue-700">
                  {" "}
                  <Link href="./lighttrucks">trucks</Link>
                </span>
                ,{" "}
                <span className="text-blue-700">
                  {" "}
                  <Link href="./lighttrucks">loaders</Link>
                </span>
                ,
                <span className="text-blue-700">
                  {" "}
                  <Link href="./lighttrucks">excalators</Link>
                </span>
                ,{" "}
                <span className="text-blue-700">
                  {" "}
                  <Link href="./lighttrucks">hooklift trucks</Link>
                </span>
                ,
                <span className="text-blue-700">
                  {" "}
                  <Link href="./lighttrucks">tractors unit</Link>
                </span>
                ,{" "}
                <span className="text-blue-700">
                  {" "}
                  <Link href="./lighttrucks">garbage trucks</Link>
                </span>
                ,
                <span className="text-blue-700">
                  {" "}
                  <Link href="./lighttrucks">lift dumpers</Link>
                </span>
                ,{" "}
                <span className="text-blue-700">
                  {" "}
                  <Link href="./lighttrucks">box trucks</Link>
                </span>
                ,
                <span className="text-blue-700">
                  {" "}
                  <Link href="./lighttrucks">crane trucks</Link>
                </span>
                ,{" "}
                <span className="text-blue-700">
                  {" "}
                  <Link href="./lighttrucks">tipper trucks</Link>
                </span>
                ,
                <span className="text-blue-700">
                  {" "}
                  <Link href="./lighttrucks">platform trucks</Link>
                </span>
                ,{" "}
                <span className="text-blue-700">
                  {" "}
                  <Link href="./lighttrucks">forklifts and lifts</Link>
                </span>
                ,
                <span className="text-blue-700">
                  {" "}
                  <Link href="./lighttrucks">trailers and semi trailers</Link>
                </span>
                , and others within heavy{" "}
                <span className="text-blue-700">
                  {" "}
                  <Link href="./lighttrucks">vehicles </Link>
                </span>{" "}
                and{" "}
                <span className="text-blue-700">
                  {" "}
                  <Link href="./lighttrucks">machinery</Link>
                </span>
                .
              </article>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default KvdContent;
