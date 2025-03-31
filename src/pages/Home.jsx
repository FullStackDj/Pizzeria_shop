import React from 'react';
import {Categories, SortPopup, PizzaBlock} from "../components";

function Home({items}) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={(name) => console.log(name)} items={[
          "Meat",
          "Vegetarian",
          "Grilled",
          "Spicy",
          "Closed"
        ]}/>
        <SortPopup items={['popularity', 'price', 'alphabet']}/>
      </div>
      <h2 className="content__title">All Pizzas</h2>
      <div className="content__items">
        {items.map(obj => (
          <PizzaBlock/>
        ))}
      </div>
    </div>
  )
}

export default Home;