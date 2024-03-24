import { pickUPHero } from "@/assets/images";
import Image from "next/image";
import React from "react";
import Sell from "../sell/index";

const pickUP = () => {
  return (
    <section className="flex justify-center">
      <div>
        <div className="relative">
          <div>
            <Image src={pickUPHero} alt="" width={1920} />
          </div>
          <main className="absolute top-[50%] left-[25%]">
            <h4 className="text-4xl font-bold text-white text-center">
              Where & when can we pick up yourr car ?
            </h4>
          </main>
        </div>

        <div className="flex justify-center">
          <section className="w-[500px] flex flex-col gap-6 my-10">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">
                We pick up the car you want to sell
              </h3>
              <p className="text-md italic font-semibold">
                Are you thinking about selling your car,but don&apos;t have the
                time or energy to drop off your car at one of our facilities?No
                problem.lets us come to you!
              </p>
              <article>
                Do you have a car to sell,but no time or energy to do so?
                that&apos;s why we are here -to make your car deal easier,better
                and smoother.We take care of the entire selling process and can
                also come and pick up the car you want to Sell, That way,you can
                spend your time on something else entirely nice huh?
              </article>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">
                Where can we come and pick up your car?
              </h3>
              <p>
                We have the possibility to come and pick up the car you want to
                sell, anywhere in sweden.Give us a call,and we&apos;ll give you
                the price estimation.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">
                Selling through Akandi online
              </h3>
              <article>
                When you sell your car with us,you get a whole team working on
                your deal we test and wash the car,value it,take pictures and
                advertise it.show it to potential buyers,handle the change of
                ownership,all administration and the money transaction.we wwork
                intensively so that you dont have to lift a finger. Unless you
                want to,you don&apos;t even have to take the car to us,we can
                come and get it when it suits you
              </article>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">
                Available for both companies and private individuals
              </h3>
              <article>
                if you are selling a company car,we offer to collect the car you
                want to sell where it is parked,no matter where in Sweden that
                is.if you are selling a private car.we offer the same transport
                solution,but currently only within certain regions.
              </article>
              <article>
                if you want to find out more,or see if we can collect your car
                to sell it, contact us at +46(0)10-167 30 20
              </article>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default pickUP;
