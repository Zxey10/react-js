import React, { useState, useEffect, useCallback } from "react";
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import useHttp from "../../hooks/use-http";

export default function AvailableMeals() {
  const [meals, setMeals] = useState([]);

  const applyData = useCallback((data) => {

    let newData = []

    for(let key in data){
      newData.push({
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
        id: data[key].id
      })
    }

    setMeals(newData)
  },[]);

  const {
    isLoading,
    error: reqHasError,
    sendRequest: sendPostRequest,
  } = useHttp(applyData);

  useEffect(() => {
    const reqConfig = {
      url: "https://react-test-242e7-default-rtdb.firebaseio.com/meals.json",
    };
    sendPostRequest(reqConfig);
  }, [sendPostRequest]);

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        price={meal.price}
        description={meal.description}
      />
    );
  });

  if (isLoading) {
    return (
      <section className={styles.meals}>
        <Card>
          <p>Loading ...</p>
        </Card>
      </section>
    );
  } else if (reqHasError) {
    return (
      <section className={styles.meals}>
      <Card>
        <p>Error {reqHasError}</p>
      </Card>
    </section>
    )
  } else {
    return (
      <section className={styles.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    );
  }
}
