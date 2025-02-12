import image26 from "../assets/image26.png";
import image25 from "../assets/image25.png";
import image27 from "../assets/image27.png";

function PeopleSaying() {
  return (
    <div className="mt-[10.84rem] md:mt-[12.15rem] mac:mt-[15.19rem] xl:mt-[17.08rem] flex flex-col w-full mx-auto">
      <div
        className="flex justify-center w-full max-h-[1.19069rem] mx-auto
                    md:max-h-[1.68038rem]"
      >
        <div className="text-[#313338] text-center font-pSans text-[1.02056rem] md:text-[clamp(1.35606rem,1.5vw,2.54263rem)] font-semibold leading-[2.02131rem] tracking-[0.01713rem]">
          What Are People Saying
        </div>
      </div>
      <div className="w-auto h-auto mt-[2.08rem] md:mt-[6.42rem] xl:mt-[4.72rem] mx-auto lg:w-[90%] ">
        <div className="flex flex-row space-x-[.4rem] md:space-x-[5rem] 3xl:space-x-48 3xl:justify-center justify-evenly md:justify-between">
          <img
            src={image26}
            alt="eurekaLogo"
            className="w-[30%] md:w-[20%] 3xl:w-[15%] h-auto object-contain"
          />
          <img
            src={image25}
            alt="thamesLogo"
            className="w-[30%] md:w-auto 3xl:w-auto h-auto object-contain"
          />
          <img
            src={image27}
            alt="tunvay"
            className="w-[30%] md:w-[20%] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default PeopleSaying;
