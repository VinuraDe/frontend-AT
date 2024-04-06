import { PrimaryButtons } from "../atoms/buttons/buttons";
import { PrimaryHeading } from "../atoms/Heading/Heading";

const HeroPrimaryContainer = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-cyan-500 xl:max-w-[660px]">
      <div className=" flex flex-col text-left md:mb-0  items-start  w-full xl:max-w-[660px] lg:max-w-[400px] md:w- px-5 py-6 sm:!p-0">
        <div className="sm:pl-10 sm:pr-[34px] sm:pt-6">
          <PrimaryHeading
            typo={
              "We crush your competitors, goals, and sales records - without the B.S."
            }
          />
        </div>
        <div className="flex justify-center sm:pb-8 pt-5 sm:justify-start sm:px-10">
          <PrimaryButtons buttonTitle="Get free consultation" />
        </div>
      </div>
    </div>
  );
};

export default HeroPrimaryContainer;
