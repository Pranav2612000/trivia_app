import React from "react";
import clsx from "clsx";

const Typography = ({ text, variant, size, container, className }) => {
  const Component = container;
  return (
    <Component className={clsx("text", `text-${variant}`, `text-${size}`, className)}>
      {text}
    </Component>
  );
};
export default Typography;
