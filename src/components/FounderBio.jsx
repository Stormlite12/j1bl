import { useState, useEffect, useRef } from "react";
import founderImg from "../assets/founderImg.png";

function FounderBio() {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Reveal the text when the target div is visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the div is in view
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row w-full  justify-center lg:-space-x-8 mac:space-x-1 lap:space-x-2 xl:space-x-4 3xl:space-x-6">
      <div className="lg:flex flex-row">
        <div className="relative w-full h-auto" ref={targetRef}>
          <img
            className="object-cover lg:hidden mx-auto"
            src={founderImg}
            alt=""
          />
          <img
            className="object-cover h-auto hidden mx-auto lg:flex lg:max-w-[16.85188rem] mac:max-w-[21.06481rem] lap:w-[22.48013rem]  xl:max-w-[23.69794rem] 2xl:w-[25.27781rem] 3xl:w-[31.59725rem]"
            src={founderImg}
            alt=""
          />
        </div>
        <div className="mt-[3rem] lg:-mt-4 lg:p-8 w-[90%] mx-auto relative ">
          <div
            className=" w-[11.4375rem] h-[1.625rem] text-[#565656] font-pSans text-[1.4626rem] font-semibold leading-[99%] tracking-[-0.0146rem]
                          lg:text-left
                          lg:h-auto lg:text-[clamp(1.77775rem,2vw,3.33331rem)] lg:tracking-[-0.01775rem]
                          "
          >
            Pooja Bhadoriya
          </div>
          <div
            className="mt-[0.56rem] flex w-[10.5625rem] h-[1.1875rem] flex-col justify-center text-[#727272] font-title 
          text-[0.64288rem] font-normal leading-[normal] lg:w-auto 
           lg:h-auto lg:text-[clamp(0.66669rem,1vw,1.25rem)] lg:mt-2 "
          >
            Founder & Creative Director
          </div>
          <p
            className="absolute bottom-0 hidden lg:block lg:mt-0 mt-[2.4375rem] w-[13.5rem] h-[2.6875rem] text-[#546660] 
            font-archivo text-[0.8347rem] font-normal leading-[130.238%] tracking-[0.0084rem]
            lg:leading-[130.238%] lg:h-auto lg:tracking-[clamp(0.009013rem,1vw,0.014rem)]
            lg:text-[clamp(0.41775rem,1.5vw,2rem)]
            lg:w-[9.88888rem] mac:w-[12.36113rem] lap:w-[13.19163rem] xl:w-[13.90625rem] 2xl:w-[14.83331rem] 3xl:w-[18.54169rem]
          
          "
          >
            &quot;Oh also, she&apos;s really excited to meet you, fellow
            business-owner.&quot;
          </p>
        </div>
      </div>

      <div
        className={`mt-[2.13rem] w-[90%] lg:w-auto lg:mt-0 transition-opacity duration-2000 ease-in-out mx-auto lg:mx-0 ${
          isVisible ? "opacity-100" : "md:opacity-0"
        }`}
      >
        <p
          className={`w-auto h-[10.28625rem] text-[#727171] font-title text-[0.69644rem] font-normal leading-[147%] tracking-[0.00694rem]
                
                lg:text-[clamp(0.88888rem,1.5vw,1.66669rem)] lg:tracking-[0.00888rem] lg:leading-[137%] 
                lg:w-[26.66669rem] lg:h-[17.03706rem] 
                mac:w-[33.33338rem] mac:h-[21.29631rem] mac:tracking-[0.01113rem] 
                lap:w-[35.57294rem]
                xl:w-[37.5rem] xl:h-[23.95831rem] xl:tracking-[0.0125rem]
                3xl:w-[50.00006rem] 2xl:w-[40rem]`}
        >
          Full time overthinker and part time Founder, Pooja launched The Bright
          Layers in 2019 as a tribute to her experience of working in social
          media - be it as a designer, writer, creative director, or just as a
          consultant to her uncle who really wanted his mithai business to go
          viral on Instagram. <br /> <br />
          As a business owner herself, she understands the passion that fuels a
          brand. Her goal is to bring that passion to the forefront, and to make
          businesses feel more human.
        </p>

        <p className="lg:hidden mt-[2.4375rem] w-[13.5rem] h-[2.6875rem] text-[#546660] font-archivo text-[0.8347rem]   font-normal leading-[130.238%] tracking-[0.134px] float-right">
          &quot;Oh also, she&apos;s really excited to meet you, fellow
          business-owner.&quot;
        </p>
      </div>
    </div>
  );
}

export default FounderBio;
