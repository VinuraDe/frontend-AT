/* eslint-disable react/prop-types */
const PrimaryHeading = ({ typo }) => {
  return (
    <h1 className="sm:text-5xl text-3xl font-bold text-white h-full capitalize xl:min-w-[576px] min-w-[335px] sm:min-h-[192px]">
      {typo}
    </h1>
  );
};

const SecondaryHeading = ({ typo }) => {
  return <div className="poppins text-[#6B3CC9] font-semibold text-[27px] leading-[33px] text-center sm:text-left">{typo}</div>;
};

export { PrimaryHeading, SecondaryHeading };
