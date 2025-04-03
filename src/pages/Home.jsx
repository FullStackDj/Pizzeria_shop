import React from 'react';
import {Categories, SortPopup, PizzaBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filters";

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);

  const onSelectCategory = index => {
    dispatch(setCategory(index));
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={[
          "Meat",
          "Vegetarian",
          "Grilled",
          "Spicy",
          "Closed"
        ]}/>
        <SortPopup items={[
          {name: 'popularity', type: 'popular'},
          {name: 'price', type: 'price'},
          {name: 'alphabet', type: 'alphabet'}
        ]}/>
      </div>
      <h2 className="content__title">All Pizzas</h2>
      <div className="content__items">
        {items && items.map(obj => (
          <PizzaBlock key={obj.id} {...obj}/>
        ))}
      </div>
    </div>
  )
}

export default Home;