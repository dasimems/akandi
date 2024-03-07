import Image from "next/image"
import { heroImg } from "@/assets/images"
import Button from "../Button"
import { WorthKnowing, option,lanblog,sections, Lancontent} from "@/utils/_variables"
import Link from "next/link"
import InputField from "../form/InputField"



const Hero = () => {
  return (
    <>
        <div className="flex justify-center overflow-hidden">
            <div className="flex flex-col gap-4">
                <section className="relative">
                    <div className="relative mt-[-3rem]  overflow-hidden">
                         <Image src={heroImg}  width={1920} alt="" className="h-[600px]" />
                    </div>
                    <div className="flex flex-col gap-6  text-white text-center">
                        <div className="text-center flex  flex-col absolute  top-[40%] left-[38%] items-center">
                            <h1 className="text-[4rem] font-bold">Large selection</h1>
                            <p  className="text-[1.7rem] font-bold ">Car, Truck, Heavy machinery or carvan? </p>
                            <div className="mt-8">
                                <Button type="primary" className="font-bold text-lg p-2">Hundreds of vehicles</Button>
                            </div>
                         </div>
                    </div>
                
                </section> 

                <section>
                    {sections.map((section, index) => {
                        return (
                        <div key={index}>
                            {/* <div>{section.icon}</div> */}
                            <p>{section.name}</p>
                        </div>
                        );
                    })}
               </section>
               <section className="bg-neutraldark-background flex justify-center items-center">
                  <div className="py-12">
                        <h3 className="text-center text-neutralblack text-lg font-bold">Worth Knowing</h3>
                        <div className="flex gap-4 py-6">
                            {WorthKnowing.map((item,index)=>
                            <Link key={index} href={item.link}>
                                <div key={index} className="bg-white">
                                   <div className="w-[270px] h-[150px] object-cover rounded-t-lg overflow-hidden">
                                     <Image src={item.img} alt={item.title} />
                                   </div>
                                    <div className="p-4">
                                        <h4 className="text-md font-medium text-neutraldark">{item.title}</h4>
                                        <p className="text-sm font-normal uppercase">{item.desc}</p>
                                    </div>
                                </div>
                            </Link>)}
                        </div>
                  </div>

               </section>
               <section className="flex justify-center">
                    <h3>api needed</h3>
               </section>

               <section className="px-12 py-8 bg-neutraldark-background flex flex-col gap-8">
                  <div className="bg-white p-6 px-8 flex flex-col gap-4">
                        <h3 className="my-4  text-2xl font-medium">We make it easier to buy and sell used vehicles</h3>
                        <article className="text-md font-normal italic ">more than 26000 vehicles and machines are sold annually 
                            through our marketplace AKandi online. we strive to make 
                            the vehicle transactions as simple as possible-regardless 
                            if you are selling or buying through us. 
                        </article>
                        <p className="mt-4 italic text-lg font-normal">welcome to Akandi </p>
                        <div className="flex justify-between items-center gap-4">
                            {option.map((option,index)=>
                            <Link key={index} href={option.link}>
                            <div className="flex justify-center border-2 border-neutraldark-background px-8 py-4 w-[400px] rounded-lg" key={index}>
                                <p>  {option.text}</p>
                            </div>
                            </Link>)}
                        </div>
                       <p className="text-center my-6">Akandi cars have the highest credit rating </p>
                  </div>

                    <div className="bg-white flex justify-center items-center px-6 py-10 gap-6">
                       <div className="flex flex-col gap-2 text-center">
                        <h3 className="text-2xl font-medium">Give us a call!!! </h3>
                          <p className="text-lg">We're happy to help with your purchase </p>
                       </div>

                       <div className="flex flex-col gap-4 text-center ">
                            <main  className="flex items-center gap-4  justify-center text-blue-900 border-[0.2rem] border-blue-900 py-4 px-8">
                                <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>PhoneIcon</title><path d="M22 16.92v3a1.998 1.998 0 0 1-2.18 2 19.791 19.791 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16.001 16.001 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.908.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                <p  className="text-2xl font-semibold">+4610-16730 00</p>
                            </main> 
                            <main  className="flex items-center gap-4 justify-center text-blue-900 border-[0.2rem] border-blue-900 py-4 px-8">
                                <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>MailIcon</title><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="m22 6-10 7L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                <p className="text-2xl font-semibold">customercare@avandi.com</p>
                            </main> 
                       </div>
                   </div>

                    <div className="flex justify-between gap-6 mt-6">
                     {lanblog.map((b,i)=> 
                       <div key={i}>
                            <div className="overflow-hidden h-[40vh]">
                               <Image src={b.img}  width={900} alt=""/> 
                            </div>
                            <div className="bg-white p-4 flex flex-col gap-2">
                              <h3 className="text-2xl font-medium">{b.title}</h3>
                              <p className="text-lg">{b.desc}</p>
                             <Button className="bg-green-300 my-4">{b.button}</Button>
                            </div>                       
                       </div>
                       )
                      }
                    </div>

                    <div className="flex flex-col gap-10">
                        {Lancontent.map((item,i)=>
                          <div key={i} className="bg-white p-6 flex flex-col gap-6">
                               <div className="flex flex-col gap-2">
                               <h3 className="text-2xl font-medium">{item.title}</h3>
                               <p className="text-md">{item.info}</p>
                               </div>
                              <button className="text-blue-900 font-semibold ">show more</button>
                          </div>)}
                    </div>
                    <div>
                        <h3>api needed</h3>
                    </div>

                    <div  className="flex justify-center ">

                        <div className="flex flex-col justify-start gap-4">
                            <h4 className="text-2xl font-medium">Be first to get the latest news from <br/> AKandi Online </h4>

                            <p className="text-sm font-normal">You can cancel your subscription whenever you want </p>
                                <InputField type="email"  placeholder="Email"></InputField>
                                <div>

                                    <p>I am interested in newsletters about...</p>

                                        <div className="flex gap-2 items-center">
                                            <input type="checkbox" name="personalcar" id="personalcar" />
                                                <label htmlFor="personalcar"> Personal car </label>
                                        </div>
                                    
                                        <div className="flex gap-2 items-center">
                                            <input type="checkbox" name="personalcar" id="heavyvehicles" />
                                            <label htmlFor="heavyvehicles">Heavy Vehicles  and Machines </label>
                                        </div>
                                </div>

                            <Button className="font-bold">Subscribe</Button>
                        </div>
                    </div>
                    <div>
                     Api needded
                    </div>
               </section>

            </div>
       </div>
  
    </>

)}

export default Hero
