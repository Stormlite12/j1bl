import Navbar from "../components/Navbar.jsx";
// import LetsTalkFloater from "../assets/LetsTalkFloater.svg";
import home1 from "../assets/home1.jpg";
import image from "../assets/image.png";
import rectangleMobile from "../assets/rectangleMobile.png";
import rectangle from "../assets/rectangle.png";
import DropDown from "../functions/DropDown.jsx";
import { AnimatedLogo } from "../functions/AnimatedLogo.jsx";
import ContactForm from "../pages/ContactForm.jsx";
import Features from "../components/Features.jsx";
import PeopleSaying from "../components/PeopleSaying.jsx";
import InfiniteCarousel from "../components/InfiniteCarousel.jsx";
import FounderBio from "../components/FounderBio.jsx";
import FeaturesPC from "../components/FeaturesPC.jsx";

import BlogSpot from "../components/BlogSpot.jsx";
import Footer from "../components/Footer.jsx";
import FloaterOverlay from "../components/FloaterOverlay.jsx";




function Home() { 
 

  return (
    <div className="w-full h-auto bg-[#ecf0f1] z-[-1] no-scrollbar">
      <div
        className="w-full h-[7.4rem]  flex justify-center items-center md:justify-between
                      mac:h-[7.69rem] lg:h-[6.15rem] xl:h-[8.65rem]"
      >
        <Navbar />
      </div>


      <section className="flex w-full justify-center mt-[1.36rem] md:mt-[5.56rem] mac:mt-[6.94rem] xl:mt-[7.81rem]">
        <div
          className="   w-[20.03675rem] h-[7.17894rem] text-center 
                        sm:w-[22.3125rem] sm:h-[7.99431rem]
                        md:w-[45rem] md:h-[13.11113rem]
                        mac:w-[56.25rem]  mac:h-[16.38888rem]
                        lap:w-[60.02931rem]  lap:h-[17.49rem]
                        xl:w-[63.28125rem] xl:h-[18.4375rem]
                        2xl:w-[67.5rem] 2xl:h-[19.66669rem]
                        3xl:w-[84.375rem] 3xl:h-[24.58331rem]"
        >
          <span
            className="text-[#303338] text-[0.96431rem] font-semibold leading-[164%] tracking-[0.00963rem] font-pSans 
                      sm:text-[1.07388rem] sm:tracking-[0.01075rem]
                      md:text-[2.03706rem] md:font-medium md:leading-[118%] md:tracking-[0.02038rem] 
                      mac:text-[2.54631rem] mac:tracking-[0.02544rem]
                      lap:text-[2.71738rem] lap:tracking-[0.02719rem]
                      xl:text-[2.86456rem] xl:tracking-[0.02863rem]
                      2xl:text-[3.05556rem] 2xl:tracking-[0.03056rem] 
                      3xl:text-[3.81944rem] 3xl:tracking-[0.03819rem]"
                >
            We are Bright Layers, a dynamic social media agency since 2019,
            dedicated to elevating brands through creative content and strategic
            digital marketing
          </span>
          <span
            className="text-[#303338] md:text-[2.4375rem] text-[0.97463rem] font-semibold md:font-medium font-pSans md:leading-[3.00463rem] leading-[1.59831rem] md:tracking-[0.02544rem] tracking-[0.00975rem]
          xl:text-[2.86456rem] xl:leading-[3.38019rem] xl:tracking-[0.02863rem]"
          >
            {" "}
          </span>
          <span
            className="text-[#303338] md:text-[2.4375rem] text-[0.97463rem] font-semibold md:font-medium font-pSans md:leading-[3.00463rem] leading-[1.59831rem] md:tracking-[0.02544rem] tracking-[0.00975rem]
          xl:text-[2.86456rem] xl:leading-[3.38019rem] xl:tracking-[0.02863rem]"
          >
            ツ
          </span>
        </div>
      </section>

      <div id="about" ></div>

      <div className="w-full flex flex-col justify-center items-center">

      <div className="w-full mt-[5.43rem] md:mt-[6.15rem] mac:mt-[7.69rem] xl:mt-[8.65rem] md:mb-[4.63rem] mac:mb-[5.79rem] xl:mb-[6.51rem]
       flex justify-end">
        <img src={home1} alt="" className="w-full h-auto max-w-[90%]
        lg:max-w-[48rem] mac:max-w-[60rem] lap:max-w-[64.03rem] xl:max-w-[67.5rem] 2xl:max-w-[72rem] 3xl:max-w-[90rem] 
         "/>
      </div>
      

      <div>
        
      </div>
      <div className="w-[11.197rem] h-[1.01794rem] mt-[5.49rem] lg:mt-0  text-center text-[0.83719rem] leading-[0.00856rem] tracking-[0.00856rem]
                      sm:text-[0.95456rem]
                      md:w-[40.13888rem] md:h-[1.89813rem] md:text-left md:text-[1.15744rem] md:leading-[1.36575rem] md:tracking-[0.01156rem]
                      lg:w-[31.46294rem] lg:h-[1.9rem] lg:text-[clamp(0.92594rem,1.5vw,1.73613rem)]
                      mac:w-[39.45369rem] mac:tracking-[0.01156rem]
                     lap:w-[42.1813rem] lap:tracking-[0.01238rem]
                      xl:w-[45.15625rem] xl:h-[2.13544rem] xl:leading-[1.53644rem] xl:tracking-[0.013rem]
                      2xl:w-[47.94444rem]
                      3xl:w-[59.93056rem]
                    text-[#da5428] font-semibold font-pSans capitalize "
      >What Do We Do?</div>



      <div className="font-title text-center md:text-left mt-[0.91rem] text-[#545454] md:mt-[0.3rem] leading-[1.30238] 
             w-[85%] h-[6.18rem] text-[0.69644rem] font-medium lg:leading-[1.30238] tracking-[0.00694rem]
             sm:w-[85%] sm:text-[0.77556rem] sm:leading-[1.2rem] sm:tracking-[0.00775rem]
             lg:w-[31.46294rem] lg:h-[13.4815rem] lg:text-[clamp(0.92594rem,1.45vw,1.73613rem)] lg:tracking-[0.00825rem]
             mac:w-[39.45369rem] mac:h-[16.85188rem] mac:tracking-[0.01156rem]
             lap:w-[42.1813rem] lap:h-[17.98406rem] lap:tracking-[0.01238rem]
             xl:w-[45.15625rem] xl:h-[18.95831rem]  xl:tracking-[0.013rem] 
             2xl:w-[47.94444rem] 2xl:h-[20.22225rem]  2xl:tracking-[0.01388rem]
             3xl:w-[59.93056rem] 3xl:h-[25.27775rem] 3xl:tracking-[0.01738rem]"
            >
              In the last 5 years, the country has seen trendsetting marketing campaigns —
              but what&apos;s missing is &quot;the beyonds&quot; of a campaign. Does it end after
              a post, a hoarding, an ad? So we just want likes & comments? Maybe an app
              download? No. That can&apos;t be all.
              <br />
              <br />
              There&apos;s more to your brand than this — and we want to bring that to the
              front too. Beyond just campaigns. Just like our name, we are here to brighten
              up your social media presence with a layered approach that works exclusively
              for you.
            </div>

      </div>
      <div className="max-w-[80rem] mx-auto hidden mac:-translate-y-20 md:block">
</div>

      <div
        className="w-full mt-[10.61rem] md:mt-[7.69rem] lg:mt-[9.48rem] mac:mt-[11.85rem] xl:mt-[8.65rem]
       flex justify-start"
      >
        <img
          src={image}
          alt=""
          className="w-full h-auto max-w-[90%] lg:max-w-[48rem] mac:max-w-[60rem] lap:max-w-[64.03rem] xl:max-w-[67.5rem] 2xl:max-w-[72rem] 3xl:max-w-[90rem]  "
        />
      </div>

      <div className="w-full flex flex-col justify-center items-center md:mt-[9.48rem] mac:mt-[11.85rem] xl:mt-[13.33rem] mt-[5.06rem]">
        <div
          className="w-[11.197rem] h-[1.01794rem] text-center text-[0.85719rem] md:text-left leading-[0.00856rem] tracking-[0.00856rem]
                      sm:text-[0.95456rem] 
                      lg:w-[31.46294rem] lg:h-[1.9rem] lg:text-[clamp(0.92594rem,1.5vw,1.73613rem)]
                      mac:w-[39.45369rem] mac:tracking-[0.01156rem]
                     lap:w-[42.1813rem] lap:tracking-[0.01238rem]
                      xl:w-[45.15625rem] xl:h-[2.13544rem] xl:leading-[1.53644rem] xl:tracking-[0.013rem]
                      2xl:w-[47.94444rem]
                      3xl:w-[59.93056rem]
                    text-[#da5428] font-semibold font-pSans capitalize"
        >
          How Do We Do It?
        </div>

        <div
          className="font-title text-center md:text-left mt-[0.91rem] w-[85%] h-[5.49rem] text-[0.7rem] font-medium leading-[130%] tracking-[0.007rem] 
          sm:w-[85%] sm:text-[0.9rem] sm:leading-[1.2rem] sm:tracking-[0.009rem] lg:leading-[1.30238]
         lg:w-[31.46294rem] lg:h-[13.4815rem] lg:text-[clamp(0.92594rem,1.45vw,1.73613rem)] lg:tracking-[0.00825rem]
             mac:w-[39.45369rem] mac:h-[16.85188rem] mac:tracking-[0.01156rem]
             lap:w-[42.1813rem] lap:h-[17.98406rem] lap:tracking-[0.01238rem]
             xl:w-[45.15625rem] xl:h-[18.95831rem]  xl:tracking-[0.013rem] 
             2xl:w-[47.94444rem] 2xl:h-[20.22225rem]  2xl:tracking-[0.01388rem]
             3xl:w-[59.93056rem] 3xl:h-[25.27775rem] 3xl:tracking-[0.01738rem] xl:mt-[0.57rem] text-[#545454]"
        >
          Our approach is different - a boutique-style agency that prioritizes
          understanding our clients as intimately as our own business. This
          approach has not only made us experts in our field but has allowed us
          to build genuine partnerships.
        </div>
      </div>

      <div className="max-w-[80rem] mx-auto hidden mac:-translate-y-20 md:block">
 
</div>

      <div className="lg:hidden w-full h-auto flex mt-[6rem]" >
        <img
          src={rectangleMobile}
          alt="Mobile View"
          className="object-cover w-full h-full"
        />
      </div >

    
      <div id="service"></div>

      <div className="mx-auto max-w-[90%] justify-around space-x-4 h-auto flex flex-row md:items-center mt-[4.77rem] lg:mt-[11.41rem] mac:mt-[14.26rem]  "  >
       
        <div className=" " >
        <div className="w-[70%] mx-auto lg:mx-0 h-[3.98444rem] text-center text-[#303338] text-[1.23225rem] font-pSans font-semibold leading-[1.69631rem] tracking-[0.01438rem] 
            sm:text-[1.4rem]
            lg:text-left
            lg:w-[22.37038rem] lg:h-[5.07406rem] lg:text-[1.83069rem] lg:tracking-[0.01831rem] 
            mac:w-[25.46294rem] mac:h-[6.34263rem] mac:text-[2.28831rem] mac:tracking-[0.02288rem] 
            lap:w-[27.17375rem] lap:h-[6.76875rem] lap:text-[2.44206rem] lap:tracking-[0.02444rem] 
            xl:w-[28.64581rem] xl:h-[7.13544rem] xl:text-[2.57438rem]  xl:tracking-[0.02575rem]
            2xl:w-[30.55556rem] 2xl:h-[7.61113rem] 2xl:text-[2.746rem]  2xl:tracking-[0.02744rem]
            "
            >Service We Provide For Your Brand
          <span className="text-[#303338] md:text-[2.28831rem] md:leading-[2.70025rem] md:tracking-[0.02288rem] font-pSans font-semibold  ">
            {" "}
          </span>
          <span className="text-[#303338] xl:text-[2.57438rem] xl:leading-[3.03775rem] xl:tracking-[0.02575rem] font-pSans font-semibold ">
            ツ
          </span>
          <AnimatedLogo />  
        </div>

        <div className="">
        <DropDown />
        </div>
     
        </div>



        <div className="hidden lg:flex ">
          <img src={rectangle} alt="image" className="w-auto" />
        </div>
      </div>

      <div>
        <ContactForm className="lg:mt-[13.59rem] mac:mt-[16.99rem] xl:mt-[19rem]" />
      </div>

      <div className="w-full flex justify-center mt-[3.08rem]">
        <div
          className="text-center text-[#545454] font-medium font-title
                    max-w-[19.98319rem] leading-[0.94181rem] tracking-[0.00694rem] text-[0.69644rem]
                    sm:max-w-[85%] sm:text-[0.77556rem] sm:leading-[130.238%] sm:tracking-[0.00775rem]
                    lg:leading-[130.28%]
                    md:h-[14.49075rem]   mac:h-[14.49075rem] lap:h-[15.46431rem] xl:h-[16.30206rem] 2xl:h-[17.38888rem] 3xl:h-[21.73613rem]
                    lg:w-[42.18519rem]
                    
                    mac:w-[52.7315rem]
                    lap:w-[56.27438rem]  xl:w-[59.32294rem]  2xl:w-[63.27775rem]  3xl:w-[79.09725rem] 
                    lg:tracking-[clamp(0.00925rem,1.5vw,0.01738rem)] 
                    lg:text-[clamp(0.92594rem,1.5vw,1.73613rem)]
                    "
        >
          Our ideal customer personas are small to medium-sized business owners,
          marketing managers, and ad moguls looking to make their brand be seen.
          They value the power of strategy with creativity, and believe in
          results, rather than buzz. <br />
          <br />
          If you&apos;re that persona looking to navigate the digital marketing
          scene and give your brand the visibility it deserves, you&apos;re the
          one for us. Hope we&apos;re the one for you too.
        </div>
      </div>

      <div className="md:hidden">
        <Features />
      </div>
      <div>
        <FeaturesPC className="md:mt-[2rem]" />
      </div>

      <PeopleSaying />
      <InfiniteCarousel />

      <div
        className="text-[#303338] md:mt-[9.81rem] mac:mt-[12.27rem] xl:mt-[13.8rem] text-center font-pSans w-full h-[1.3125rem] text-[1.125rem] font-semibold leading-[1.3275rem] tracking-[0.01125rem]
            md:text-[clamp(1.35606rem,1.5vw,2.54263rem)] md:leading-[2.25019rem] md:font-semibold md:tracking-[0.01906rem]"
      >
        Meet Our Founder
      </div>

      <div className="w-full mt-[3.63rem] md:mt-[5.5rem] mac:mt-[6.56rem] xl:mt-[7.38rem]" >
        <div className="">
        <FounderBio />
        </div>


        <div id="blog"></div>
        <div className="md:mt-[10.26rem] mac:mt-[12.5rem] xl:mt-[14.06rem] mx-auto max-w-[90%] lg:max-w-[90%] mac:max-w-[88%] lap:max-w-[85%] 3xl:max-w-[78%] " >
          <BlogSpot />
        </div>
      </div>


      <div className="lg:hidden">
        <FloaterOverlay />
      </div>
        
      {/* <div className='md:hidden fixed bottom-6 right-6 bg-[#2C3E50] w-[2rem] h-[2rem] rounded-full flex items-center justify-center'>
      <img src={LetsTalkFloater} className="w-[1rem] h-[1.5rem] " alt="" />
      </div> */}

      <div className="className=lg:mt-[15.3rem] mac:mt-[19.12rem] xl:mt-[21.51rem] ">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
