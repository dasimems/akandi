import React, { forwardRef } from "react";
import Label from "./Label";
import { InputFieldProps } from "@/utils/types";

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      id,
      className,
      inputClassName,
      inputParentClassName,
      formClassName,
      type,
      placeholder,
      RightIcon,
      buttonTitle,
      LeftIcon,
      rightButtonTitle,
      leftButtonTitle,
      leftButtonClassName,
      rightButtonClassName,
      labelClassName,
      rightIconAction,
      leftIconAction,
      iconProps,
      error,
      ...props
    },
    ref
  ) => {
    const buttonClassName =
      "absolute top-1/2 -translate-y-1/2 z-10 h-full px-4";
    return (
      <div className={`${className} flex flex-col gap-2`}>
        <div className={`${formClassName} flex flex-col gap-2`}>
          {label && (
            <Label
              className={`${labelClassName}`}
              htmlFor={id || label || "input-rad"}
            >
              {label}
            </Label>
          )}

          <div
            className={`${inputParentClassName} w-full relative flex items-stretch justify-center`}
          >
            {LeftIcon && (
              <button
                onClick={() => {
                  if (leftIconAction && typeof leftIconAction === "function") {
                    leftIconAction();
                  }
                }}
                className={`${leftButtonClassName || buttonClassName} left-0`}
                title={leftButtonTitle || buttonTitle || "button"}
              >
                <LeftIcon {...iconProps} />
              </button>
            )}
            <input
              {...props}
              title={label}
              id={id || label || "input-rad"}
              ref={ref}
              type={type || "text"}
              placeholder={placeholder || label || "Input field"}
              className={`${inputClassName} peer/radio-btn border py-3 px-5 outline-none rounded-md w-full h-full`}
            />

            {RightIcon && (
              <button
                onClick={() => {
                  if (
                    rightIconAction &&
                    typeof rightIconAction === "function"
                  ) {
                    rightIconAction();
                  }
                }}
                className={`${rightButtonClassName || buttonClassName} right-0`}
                title={rightButtonTitle || buttonTitle || "button"}
              >
                <RightIcon {...iconProps} />
              </button>
            )}
          </div>
        </div>
        {error && <p className="text-red-600 text-sm">{error}</p>}
      </div>
    );
  }
);

InputField.displayName = "Input field";

export default InputField;
