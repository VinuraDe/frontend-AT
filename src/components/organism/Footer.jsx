import Logo from "../../assets/images/Logo.png";


function Footer() {
  return (
    <div className=" bg-[#6B3CC9] pt-10 sm:px-[60px] px-5 text-white">
      <div>
        <div className="flex flex-col lg:flex-row w-full gap-[112px] md:gap-[60px] justify-between">
          <div className="flex flex-col max-w-[438px] gap-5">
            <div className="h-[36.11px] w-[238.89px]">
              <img src={Logo} alt="logo" className="w-full h-full" />
            </div>
            <div className="font-normal text-base">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-[40px] sm:gap-[96px]">
            <div className="flex flex-col gap-3">
              <div className="font-semibold text-[21px]">Our Technologies</div>
              <div className="font-medium text-sm flex flex-col gap-3">
                <div>ReactJS</div>
                <div>Gatsby</div>
                <div>NextJS</div>
                <div>NodeJS</div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="font-semibold text-[21px]">Our Services</div>
              <div className="font-medium text-sm flex flex-col gap-3">
                <div>Social media Marketing</div>
                <div>Web & Mobile App Development</div>
                <div>Data & Analytics</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center pt-10 pb-5">
          <div className="h-px bg-white lg:px-[285px]"/>
          <div className="flex flex-row items-center lg:gap-4 gap-2 text-sm font-medium justify-center">
            <span>Privacy Policy</span>
            <span>|</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
