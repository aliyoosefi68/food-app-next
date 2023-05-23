import MenuPage from "@/components/templates/MenuPage";
import React from "react";

const index = ({ data }) => {
  return <MenuPage data={data} />;
};

export default index;

export async function getStaticProps() {
  const response = await fetch(`${process.env.BASE_URL}/data`);
  const data = await response.json();

  return {
    props: { data },
    revalidate: 10, //second
  };
}
