import { useEffect, useState } from "react";
import styles from "./Categories.module.css";
import { useRouter } from "next/router";
import Card from "../modules/cards/Card";

const Categories = ({ data }) => {
  const router = useRouter();
  console.log(router);

  const [query, setQuery] = useState({ difficulty: "", time: "" });
  useEffect(() => {
    const { difficulty, time } = router.query;
    if (query.difficulty !== difficulty || query.time !== time) {
      setQuery({ difficulty, time });
    }
  }, []);

  const changeHandler = (event) => {
    setQuery({ ...query, [event.target.name]: event.target.value });
  };

  const searchHandler = () => {
    router.push({
      pathname: "/categories",
      query,
    });
  };

  return (
    <div className={styles.container}>
      <h2>Categories</h2>
      <div className={styles.subContainer}>
        <div className={styles.select}>
          <select
            value={query.difficulty}
            name="difficulty"
            onChange={changeHandler}
          >
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select value={query.time} onChange={changeHandler} name="time">
            <option value="">Coocking Time</option>
            <option value="more">More than 30 min</option>
            <option value="less">Less than 30 min</option>
          </select>
          <button onClick={searchHandler}>Search</button>
        </div>
        <div className={styles.cards}>
          {!data.length ? (
            <img src="/images/search.png" alt="category" />
          ) : null}
          {data.map((food) => (
            <Card data={food} key={food.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
