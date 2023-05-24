import * as React from "react";

interface Props {
  children?: React.ReactNode;
}

export const Modal = ({ children }: Props) => {
  return (
    <div>
      <h1>Modal</h1>
      {children}
    </div>
  );
};
