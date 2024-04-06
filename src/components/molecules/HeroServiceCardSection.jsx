/* eslint-disable react/prop-types */
import { PrimaryButtons } from "../atoms/buttons/buttons";
import { SecondaryHeading } from "../atoms/Heading/Heading";
import { PrimaryPargraphs } from "../atoms/paragraphs/Pargraphs";

const HeroServiceCardSection = ({
  style,
  imgPath,
  heading,
  para,
  buttonText,
}) => {
  return (
    <div className={`${style} flex items-center justify-between xl:gap-[108px]  mb-20`}>
      <div className="lg:w-[414px] lg:h-[414px] w-[275px] h-[275px]">
        <img src={imgPath} alt={undefined} className="w-full h-full"/>
      </div>
      <div className="flex flex-col items-center px-5 sm:px-0 sm:items-start gap-5 ">
        <SecondaryHeading typo={heading} />
        <PrimaryPargraphs Pargraph={para} />
        <div>
          <PrimaryButtons buttonTitle={buttonText} />
        </div>
      </div>
    </div>
  );
};

export default HeroServiceCardSection;
