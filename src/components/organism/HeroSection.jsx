import { HeroSectionData } from "../../constants/HeroSectionData";
import FAQ from "./FAQ";
import HeroPrimaryContainer from "../molecules/HeroPrimaryContainer";
import HeroServiceCardSection from "../molecules/HeroServiceCardSection";

const HeroSection = () => {
  return (
    <>
      <div>
        <div className="mx-auto bg-cover hero-bg xl:h-screen h-[218.75px] md:h-[448px] lg:h-[600px]" />
        <div className="xl:absolute bottom-10 left-20 ">
          <HeroPrimaryContainer />
        </div>
      </div>
      <div className="xl:px-[188px] lg:px-[152px] md:px-10">
        {HeroSectionData.map((items) => {
          return (
            <div key={items.id}>
              <HeroServiceCardSection
                buttonText={items.buttonText}
                heading={items.heading}
                imgPath={items.imagePath}
                para={items.para}
                style={items.style}
              />
            </div>
          );
        })}
      </div>
      <div className="px-5 lg:px-[152px] md:px-[42px] mt-[60px] mb-[80px]">
        <FAQ />
      </div>
    </>
  );
};

export default HeroSection;
