import React from "react";
import clsx from "clsx";

const getClassFromVariantName = (variant) => `btn-${variant}`;

const Button = ({ text, variant }) => {
  return (
    <button className={clsx("btn", "btn-primary", getClassFromVariantName(variant))}>{text}</button>
  );
};
export default Button;
