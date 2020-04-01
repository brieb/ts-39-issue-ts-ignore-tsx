import React from "react";

type Props = {
  prop: string;
};

function MyOtherComponent({ prop }: Props) {
  return <div>{prop}</div>;
}

export default MyOtherComponent;
