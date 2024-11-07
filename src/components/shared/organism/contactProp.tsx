import React, { ElementType } from "react";

interface PropContact {
  details: string;
  Icon: ElementType;
  size?: string;
}

export const ContactProp = ({ details, Icon, size = "24" }: PropContact) => {
  return (
    <div className="flex gap-3 items-center my-3">
      <Icon size={size} />
      <span>{details}</span>
    </div>
  );
};
