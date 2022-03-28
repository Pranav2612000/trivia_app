import React from "react";
import clsx from "clsx";

const getClassFromVariantName = (variant) => `btn-${variant}`;

const Button = ({ text, variant, onClick }) => {
  return (
    <button
      className={clsx("btn", "btn-primary", getClassFromVariantName(variant))}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
