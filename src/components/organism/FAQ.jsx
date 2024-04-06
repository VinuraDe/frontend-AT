import { faqs } from "../../constants/FAQData";

const FAQ = () => {
  return (
    <>
      <div className="flex justify-center text-center text-[#6B3CC9] text-[27px] font-semibold">
        Frequently asked questions
      </div>
      <div className="bg-[#FAF8FF] divide-y-8 divide-white rounded-[7px] mt-7 gap-10">
        {faqs.map((faq, index) => (
          <details key={index} className="p-6 group">
            <summary className="flex items-start justify-between cursor-pointer gap-[30px]">
              <h5 className="text-[20px] sm:text-[22px] font-medium text-black group-open:text-[#6B3CC9] !outline-none">
                {faq.question}
              </h5>

              <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                >
                  <path
                    d="M8 1V15"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 8H15"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  width="16"
                  height="2"
                  viewBox="0 0 16 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                >
                  <path
                    d="M1 1H15"
                    stroke="#6B3CC9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-[#6F6C90] text-base sm:text-lg font-normal">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </>
  );
};

export default FAQ;
