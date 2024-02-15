import React from "react";
import SectionContainer from "./SectionContainer";
import { generalClassName } from "@/utils/_variables";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SectionContainer
      className={`flex items-center justify-center py-20 ${generalClassName}`}
    >
      {children}
    </SectionContainer>
  );
};

export default AuthLayout;
