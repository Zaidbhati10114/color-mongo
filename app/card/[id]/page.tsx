import { getCardById } from "@/app/actions/card";
import React from "react";

const page = ({ params: { id } }: SearchParamProps) => {
  return <div>{id}</div>;
};

export default page;
