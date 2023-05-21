import MenuPage from "@/components/templates/MenuPage";
import React from "react";

const index = ({ data }) => {
  return <MenuPage data={data} />;
};

export default index;

export async function getStaticProps() {
  const response = await fetch("http://localhost:3001/data");
  const data = await response.json();

  return {
    props: { data },
    revalidate: 10, //second
  };
}
