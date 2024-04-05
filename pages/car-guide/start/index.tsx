import SectionContainer from "@/components/layouts/SectionContainer";
import { allCarGuideQuestions } from "@/utils/_variables";
import { ArrowLeftIcon, ArrowRightIcon, Star, X } from "lucide-react";
import React, { useCallback, useState } from "react";

const CarGuideStart = () => {
  const [activeNumber, setActiveNumber] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<{
    [name: string]: string;
  }>({});

  const next = useCallback(
    (key?: string, value?: string) => {
      if (key && value) {
        setSelectedOptions((prevState) => ({
          ...prevState,
          [key]: value
        }));
      }

      if (activeNumber < allCarGuideQuestions.length - 1) {
        setActiveNumber((prevState) => prevState + 1);
      } else {
      }
    },
    [activeNumber]
  );
  return (
    <SectionContainer className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center gap-10 py-20">
      <h1 className="text-xl sm:text-2xl md:text-3xl text-center font-medium">
        Find the car for your needs
      </h1>

      <div className="flex gap-7 bg-white shadow-2xl p-8 w-full flex-col  max-w-[60rem] relative">
        <div className="flex justify-between items-center gap-10 flex-wrap">
          {activeNumber > 0 ? (
            <button
              className="inline-flex items-center gap-3"
              onClick={() => {
                setActiveNumber((prevState) => prevState - 1);
              }}
            >
              <span>
                <ArrowLeftIcon />
              </span>
              <span>Previous</span>
            </button>
          ) : (
            <span></span>
          )}
          {selectedOptions[allCarGuideQuestions[activeNumber].value] && (
            <button
              onClick={() => {
                next();
              }}
              className={`inline-flex items-center gap-3 ${
                activeNumber < allCarGuideQuestions.length - 1
                  ? ""
                  : "bg-primary text-white py-2 px-5 rounded-md"
              }`}
            >
              <span>
                {activeNumber < allCarGuideQuestions.length - 1
                  ? "Next"
                  : "Get results"}
              </span>
              {activeNumber < allCarGuideQuestions.length - 1 && (
                <span>
                  <ArrowRightIcon />
                </span>
              )}
            </button>
          )}
        </div>
        <div className="flex gap-20  items-center flex-col md:flex-row relative">
          <div className="flex-1 flex items-center md:items-stretch flex-col md:flex-row gap-10">
            <div className="w-[2rem] h-[2rem] shrink-0 rounded-full border items-center justify-center flex border-slate-300 text-slate-500">
              {activeNumber + 1}
            </div>

            <div className="flex flex-col w-full gap-6 pt-1">
              <h1 className="font-medium">
                {allCarGuideQuestions[activeNumber].title}
              </h1>
              <p className="uppercase">
                {allCarGuideQuestions[activeNumber].subTitle}
              </p>
              <p className="font-medium md:text-lg">
                {allCarGuideQuestions[activeNumber].description}
              </p>
              <div className="flex items-start justify-between mt-6 text-center">
                <button
                  onClick={() => {
                    next(
                      allCarGuideQuestions[activeNumber].value,
                      "not at all"
                    );
                  }}
                  className={`inline-flex flex-col gap-3 items-center`}
                >
                  <span
                    className={`inline-flex w-[2.5rem] h-[2.5rem] shrink-0 rounded-full border items-center justify-center border-slate-300  ${
                      selectedOptions[
                        allCarGuideQuestions[activeNumber].value
                      ] === "not at all"
                        ? "bg-black text-white"
                        : "text-slate-500"
                    }`}
                  >
                    <X />
                  </span>

                  <span>Not at all</span>
                </button>
                <button
                  onClick={() => {
                    next(
                      allCarGuideQuestions[activeNumber].value,
                      "a little not sure"
                    );
                  }}
                  className="inline-flex flex-col gap-3 opacity-50 items-center"
                >
                  <span
                    className={`inline-flex w-[2.5rem] h-[2.5rem] shrink-0 rounded-full border items-center justify-center border-primary ${
                      selectedOptions[
                        allCarGuideQuestions[activeNumber].value
                      ] === "a little not sure"
                        ? "bg-primary text-white"
                        : "text-primary"
                    }`}
                  >
                    <Star />
                  </span>

                  <span>A little</span>
                  <span className="text-black">Not sure</span>
                </button>
                <button
                  onClick={() => {
                    next(allCarGuideQuestions[activeNumber].value, "very");
                  }}
                  className="inline-flex flex-col gap-3 text-primary items-center"
                >
                  <span
                    className={`inline-flex w-[2.5rem] h-[2.5rem] shrink-0 rounded-full border items-center justify-center border-primary    ${
                      selectedOptions[
                        allCarGuideQuestions[activeNumber].value
                      ] === "very"
                        ? "bg-primary text-white"
                        : "text-primary"
                    }`}
                  >
                    <Star />
                  </span>

                  <span>Very</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-[15rem] h-[15rem] bg-slate-200 rounded-full overflow-hidden relative md:mr-20"></div>
        </div>

        <div className="absolute w-full h-1 overflow-hidden left-0 bottom-0">
          <div
            className="bg-primary h-full"
            style={{
              width: `${
                ((activeNumber + 1) / allCarGuideQuestions.length) * 100
              }%`
            }}
          ></div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default CarGuideStart;
