import React from "react";
import Section1 from "../components/Section1";
import axios from "axios";
import WhyUs from "./WhyUs";
import Cryptocurrencies from "./Cryptocurrencies";
import Contacts from "./Contacts";

export default function Home({ data }) {
  return (
    <div>
      <Section1 data={data} />
      <WhyUs />
      <Contacts />
    </div>
  );
}
