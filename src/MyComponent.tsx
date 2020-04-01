import React from "react";
import MyOtherComponent from "./MyOtherComponent";

type Props = {};

function MyComponent({}: Props) {
  return (
    <div>
      {/*
      // @ts-ignore */}
      <MyOtherComponent prop={123} />
    </div>
  );
}

export default MyComponent;
