/* eslint-disable react/prop-types */
const PrimaryButtons = ({ buttonTitle = "Button Title" }) => {
  return (
    <div>
      <button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none w-fit rounded uppercase">
        {buttonTitle}
      </button>
    </div>
  );
};

export { PrimaryButtons };
