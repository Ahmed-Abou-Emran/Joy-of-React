import React from "react";
import ScreenSaver from "../../../../components/ScreenSaver";

export default function page({ params }) {
  console.log(params);
  return <ScreenSaver color={params.color} />;
}
