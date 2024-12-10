import Button from "./Button";
import { BsArrowRight } from "react-icons/bs";

const Sponsor = () => {
  return (
    <div className="lg:px-20 px-5 mx-auto min-h-[500px] w-full mt-[300px]">
      <div className="flex flex-wrap  lg:flex-nowrap justify-between gap-10 items-center">
        <div className="lg:basis-1/3 basis-full ">
          <p className="font-bold lg:text-3xl ml-0 text-primary-800">
            Sponsor The Next Friday
          </p>
          <h1 className="text-left font-bold text-4xl text-black">
            Why Sponsor Founders Friday?
          </h1>
        </div>
        <p className="lg:basis-1/2 basis-full text-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
          rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
          dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
          suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
          turpis. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. 
        </p>
      </div>

      <div className="flex items-start justify-between flex-1 flex-wrap lg:flex-nowrap gap-8 p-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-10 border-2 border-[--seed] rounded-3xl shadow-sm basis-full lg:basis-1/2 justify-items-center">
          <div className="border-2 border-solid border-primary-500 size-[200px] rounded-full text-center flex flex-col justify-center p-8 bg-myPurple-50">
            <h2 className="font-bold text-lg">Networking Opportunities</h2>
            <p className="text-sm text-secondary-900">
              Connect with industry leaders, founders, and potential partners.
            </p>
          </div>
          <div className="border-2 border-solid border-primary-500 size-[200px] rounded-full text-center flex flex-col justify-center bg-myPurple-20 p-8">
            <h2 className="font-bold text-lg text-base-Black">
              Community Impact
            </h2>
            <p className="text-sm text-secondary-600">
              Connect with industry leaders, founders, and potential partners.
            </p>
          </div>
          <div className="border-2 border-solid border-primary-500 size-[200px] rounded-full text-center flex flex-col justify-center bg-myPurple-20 p-8">
            <h2 className="font-bold text-lg text-base-Black">
              Brand Association
            </h2>
            <p className="text-sm text-secondary-600">
              Align your brand with innovation and entrepreneurial success.
            </p>
          </div>

          <div className="border-2 border-solid border-primary-500 size-[200px] rounded-full text-center flex flex-col justify-center p-8 bg-myPurple-50">
            <h2 className="font-bold text-lg">Visibility</h2>
            <p className="text-sm text-secondary-900">
              Gain exposure to a targeted audience of young professionals and
              entrepreneurs.
            </p>
          </div>
        </div>
        <div className="flex basis-full flex-col items-start justify-center gap-4 lg:basis-1/2">
          <div className="flex flex-col">
            <h2 className="font-bold text-black">How To Sponsor</h2>
            <i className="font-thin">Ready to Make an Impact?</i>
            <p>
              Fill out the form below or contact us at [contact email/phone
              number] to learn more about how you can sponsor the next Founders
              Friday
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            <div className="form-input flex flex-col">
              <p className="font-semibold">Name</p>
              <input
                type="text"
                className="border-2 border-solid border-[--secondary] rounded-xl w-full px-4 py-3 bg-[--baseWhite] "
              />
            </div>
            <div className="form-input">
              <p className="font-semibold">
                Company <span className="font-normal">(Optional)</span>
              </p>
              <input
                type="text"
                className="border-2 border-solid w-full border-[--secondary] rounded-xl px-4 py-3 bg-[--baseWhite] "
              />
            </div>
            <div className="form-input">
              <p className="font-semibold ">Email</p>
              <input
                type="text"
                className="border-2 border-solid border-[--secondary] rounded-xl w-full px-4 py-3 bg-[--baseWhite] "
              />
            </div>
            <div className="form-input">
              <p className="font-semibold">Phone</p>
              <input
                type="text"
                className="border-2 border-solid w-full border-[--secondary] rounded-xl px-4 py-3 bg-[--baseWhite] "
              />
            </div>
          </div>
          <Button
            type="button"
            title="Sponsor"
            icon={<BsArrowRight />}
            variant="btn-purple"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
