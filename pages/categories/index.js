import Categories from "@/components/templates/Categories";
import React from "react";

const index = ({ data }) => {
  console.log(data);
  return <Categories data={data} />;
};

export default index;

export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;

  const res = await fetch(`${process.env.BASE_URL}data`);
  const data = await res.json();

  const filterData = data.filter((item) => {
    const defficultyResult = item.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty === difficulty
    );

    const timeResult = item.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const [timeDetail] = cookingTime.split(" ");

      if (time === "less" && timeDetail && +timeDetail <= 30) {
        return detail;
      } else if (time === "more" && +timeDetail > 30) {
        return detail;
      }
    });

    if (time && difficulty && timeResult.length && defficultyResult.length) {
      return item;
    } else if (!time && difficulty && defficultyResult.length) {
      return item;
    } else if (time && !difficulty && timeResult.length) {
      return item;
    }
  });

  return {
    props: { data: filterData },
  };
}
