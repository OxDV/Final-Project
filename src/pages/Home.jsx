import { React, useEffect } from "react";
import Section1 from "../components/Section1";
import axios from "axios";
import WhyUs from "./WhyUs";
import Cryptocurrencies from "./Cryptocurrencies";
import Contacts from "./Contacts";

export default function Home({
  data,
  amountCryptocurrencies,
  setAmountCryptocurrencies,
}) {
  useEffect(() => {
    setAmountCryptocurrencies(10);
  }, [amountCryptocurrencies]);

  return (
    <div>
      <Section1 data={data} />
      <WhyUs />
      <Cryptocurrencies
        data={data}
        amountCryptocurrencies={amountCryptocurrencies}
        setAmountCryptocurrencies={setAmountCryptocurrencies}
      />
      <Contacts />
    </div>
  );
}
