import React from "react";
import Section1 from "../components/Section1";
import axios from "axios";

export default function Home({ data }) {
  return (
    <div>
      <Section1 data={data} />
    </div>
  );
}
