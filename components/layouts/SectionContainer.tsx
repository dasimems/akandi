import { PageContainerProps } from "@/utils/types";
import { forwardRef, useEffect, ReactNode, PropsWithChildren } from "react";

const SectionContainer = forwardRef<HTMLDivElement, PageContainerProps>(
  ({ children, className, innerContent, ...prop }, ref) => {
    return (
      <div className={`w-full flex items-center justify-center`}>
        <div
          ref={ref}
          className={`px-[10%] min-[1921px]:px-[120px] w-full ${
            !innerContent ? "max-w-[1920px]" : ""
          } ${className ? className : ""}`}
          {...prop}
        >
          {children}
        </div>
      </div>
    );
  }
);

SectionContainer.displayName = "PPage Container";

export default SectionContainer;
