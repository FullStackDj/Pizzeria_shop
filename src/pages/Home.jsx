import React from 'react';
import {SortPopup, PizzaBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";

const Categories = React.memo(function Categories({activeCategory, items, onClickCategory}) {
  return (
    <div className="categories">
      <ul>
        {items && items.map((item, index) => (
          <li
            key={`${item}_${index}`}
            className={activeCategory === index ? 'active' : ''}
            onClick={() => onClickCategory(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);
  const {category, sortBy} = useSelector(({filters}) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  const onSelectCategory = (index) => {
    dispatch(setCategory(index));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickSortType={sortBy}
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={["Meat", "Vegetarian", "Grilled", "Spicy", "Closed"]}
        />
        <SortPopup
          activeSortType={sortBy}
          items={[
            {name: 'popularity', type: 'popular'},
            {name: 'price', type: 'price'},
            {name: 'alphabet', type: 'alphabet'}
          ]}
        />
      </div>
      <h2 className="content__title">All Pizzas</h2>
      <div className="content__items">
        {items && items.map(obj => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Home;
