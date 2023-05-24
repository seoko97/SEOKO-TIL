import * as React from "react";
interface Props {
  children?: React.ReactNode;
}
const Test = ({ children }: Props) => {
  return (
    <div>
      <h1>Test</h1>
      {children}
    </div>
  );
};
export default Test;
