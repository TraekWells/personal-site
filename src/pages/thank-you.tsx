import { NextSeo } from "next-seo";
import React from "react";

const ThankYou = () => {
  return (
    <>
      <NextSeo
        title="Thank you!"
        description="Finish this"
        openGraph={{
          url: "https://www.traekwells.com/thank-you",
        }}
        canonical="https://www.traekwells.com/thank-you"
      />
      <h1>Thank you!</h1>
    </>
  );
};

export default ThankYou;
