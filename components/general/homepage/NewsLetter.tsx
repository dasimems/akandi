import SectionContainer from "@/components/layouts/SectionContainer";
import React from "react";
import InputField from "../form/InputField";
import CheckBox from "../form/CheckBox";
import Button from "../Button";

const NewsLetter = () => {
  return (
    <SectionContainer className="flex items-center justify-center py-20 bg-slate-200">
      <div className="flex flex-col gap-6 w-full max-w-[30rem]">
        <h1 className="font-medium text-xl sm:text-2xl md:text-3xl">
          Be first to get the latest news from Akandi
        </h1>
        <p className="text-sm">
          You can cancel your subscription whenever you want.
        </p>
        <InputField
          type="email"
          placeholder="Email"
          inputClassName="bg-white border border-slate-400"
        />
        <p>I am interested in newsletters about...</p>
        <div className="flex flex-col gap-1">
          <CheckBox label="Personal car" />
          <CheckBox label="Heavy vehicles and machines" />
        </div>
        <Button type="primary" disabled>
          Subscribe
        </Button>
      </div>
    </SectionContainer>
  );
};

export default NewsLetter;
