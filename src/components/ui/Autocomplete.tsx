import React, { FC } from "react";
import { Autocomplete as HeroAutocomplete, AutocompleteProps } from "@heroui/react";

const Autocomplete: FC<AutocompleteProps> = ({
  isRequired,
  label,
  labelPlacement = "outside",
  size = "lg",
  errorMessage,
  ...props
}) => (
  <HeroAutocomplete
    label={
      isRequired ? (
        <>
          {label} <span className="text-danger-500">*</span>
        </>
      ) : (
        label
      )
    }
    labelPlacement={labelPlacement}
    size={size}
    isInvalid={errorMessage ? true : false}
    errorMessage={errorMessage}
    classNames={{
      // inputWrapper: "bg-transparent border",
    //   errorMessage: "mt-2 whitespace-pre-line",
    }}
    {...props}
  />
);

export default Autocomplete;
