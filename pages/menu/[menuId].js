import DetailePage from "@/components/templates/DetailePage";
import { useRouter } from "next/router";
import React from "react";

const details = ({ data }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h2>Loading page....</h2>;
  }
  return (
    <div>
      <DetailePage {...data} />
    </div>
  );
};

export default details;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const json = await res.json();
  const data = json.slice(0, 10);

  const paths = data.map((food) => ({
    params: { menuId: food.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`${process.env.BASE_URL}/data/${params.menuId}`);
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
    revalidate: 10,
  };
}
