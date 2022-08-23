import rightArrow from "../../assets/right-arrow.svg";

export const SideNav = () => {
  return (
    <div className="px-10">
      <div className="flex mb-8">
        <span className="tracking-wider  text-gray-500 hover:text-gray-900 text-xs underline decoration-2 underline-offset-4  ">
          GALLERY
        </span>

        <img src={rightArrow} className="px-2 " alt="->" />

        <span className=" text-gray-500 hover:text-gray-900 text-xs tracking-wider ">
          DESIGN TEMPLATES
        </span>
      </div>

      <div className="text-4xl tracking-wide text-gray-900  mb-8 font-light	">
        Design templates
      </div>

      <div className="text-gray-700 tracking-wide pr-5 leading-6">
        Make Your process to prioritize, manage, and approve design work fell as
        smooth as the creative flow itself.
      </div>
    </div>
  );
};
