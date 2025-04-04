import React from 'react';
import PropTypes from "prop-types";

const Categories = React.memo(function Categories({activeCategoryIndex, items, onClickCategory}) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategoryIndex === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}
        >
          All
        </li>
        {items && items.map((name, index) => (
          <li
            className={activeCategoryIndex === index ? 'active' : ''}
            onClick={() => onClickCategory(index)}
            key={`${name}_${index}`}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  activeCategory: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
};

export default Categories;
