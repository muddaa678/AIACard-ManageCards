import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import CardManagerTitle from "../components/card-manager-title";
import CardContainer from "../components/card-container";

const DesktopManageCards: NextPage = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-row items-start justify-start py-[0rem] pr-[2.5rem] pl-[0rem] box-border gap-[1.75rem] leading-[normal] tracking-[normal] mq1025:pl-[1.25rem] mq1025:box-border">
      <FrameComponent />
      <section className="flex-1 flex flex-col items-start justify-start pt-[2.5rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_264px)] text-center text-[0.75rem] text-black font-montserrat mq1025:max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[3.031rem] max-w-full mq750:gap-[1.5rem]">
          <CardManagerTitle />
          <div className="flex flex-row items-start justify-start gap-[0.625rem]">
            <div className="rounded-8xs bg-goldenrod flex flex-row items-start justify-start py-[0.437rem] pr-[0.937rem] pl-[1rem] whitespace-nowrap border-[1px] border-solid border-goldenrod">
              <div className="h-[2.063rem] w-[10.813rem] relative rounded-8xs bg-goldenrod box-border hidden border-[1px] border-solid border-goldenrod" />
              <b className="relative z-[1]">My AIA Cards Physical</b>
            </div>
            <div className="w-[8.5rem] rounded-8xs box-border flex flex-row items-start justify-start p-[0.375rem] text-left text-white border-[2px] border-solid border-gray">
              <div className="h-[2.063rem] w-[8.5rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-gray" />
              <div className="relative font-light inline-block min-w-[7.5rem] z-[1]">
                + Add New AIA Card
              </div>
            </div>
          </div>
          <CardContainer />
        </div>
      </section>
    </div>
  );
};

export default DesktopManageCards;
