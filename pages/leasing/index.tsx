import { leaseHero } from "@/assets/images";
import Button from "@/components/general/Button";
import Image from "next/image";
import React from "react";

const Leasing = () => {
  return (
    <section className="flex justify-center">
      <div>
        <div>
          <Image src={leaseHero} alt="" />
          <div>
            <h4>Lease with Releasing</h4>
            <Button>See all cars</Button>
          </div>
        </div>
        <div>
          <div>
            <h4>Lease a used car </h4>

            <h4>Why you should lease through AKandi online</h4>
            <div>
              <ul>
                <li>
                  <div>
                    <span></span>
                    <p>Lease from 12 months</p>
                  </div>
                </li>
                <li>
                  <div>
                    <span></span>
                    <p>No down payment needed</p>
                  </div>
                </li>
                <li>
                  <div>
                    <span></span>
                    <p>Car warranty included</p>
                  </div>
                </li>
                <li>
                  <div>
                    <span></span>
                    <p>Carefully selected,well equipped cars</p>
                  </div>
                </li>
                <li>
                  <div>
                    <span></span>
                    <p>You can add a service agreement</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3>Lease from 12 months </h3>
              <article>
                with Releasing you pay a fixed monthly cost for your car without
                any down payments.Choose to sign your lease fro 12-24 0r 36
                months.whatever suits your needs best
              </article>
            </div>
            <div>
              <h3>Warranty always included</h3>
              <article>
                A car warranty covering the entire leasing period is always
                included when you lease through us. The warranty gives you
                protection incase of unforeseen events such as damage to the
                car&apos;s engine,gearbox and exhaust system
              </article>
            </div>
            <div>
              <h3>Choose to add a service agreement </h3>
              <article>
                The service agreement is signed in collaboration with Mekonomen
                and is payed on a monthly basics alongside your monthly cost
              </article>
            </div>
            <div>
              <h3>You get a carefully selected car </h3>
              <article>
                we offer Releasing of carefully selected- in general,former
                company cars that have been maintained and serviced well by
                their formal owners.You don&apos;t need to worry about the rest
                value of the car-when the leasing period is over,you simply
                return the car to us.
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leasing;
