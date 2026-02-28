import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ByGenderField.module.css';

import { fetchCategories } from '../../redux/notices/noticesOperations';
import { setCategory } from '../../redux/notices/noticesSlice';

import {
  selectCategories,
  selectSelectedCategory,
} from '../../redux/notices/noticesSelectors';
import { useState } from 'react';

const ByGenderField = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const selectedCategory = useSelector(selectSelectedCategory);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);


  const handleSelect = value => {
    dispatch(setCategory(value));
    setIsOpen(false);
  };

  return (
    <div className={css.wrapper}>
      <div
        className={css.control}
        tabIndex={0}
        onClick={() => setIsOpen(prev => !prev)}
      >
        {selectedCategory || 'Category'}
        <svg className={css.selectIcon}>
          <use
            href={`/icons/sprite.svg#${
              isOpen ? 'icon-selectUp' : 'icon-selectDown'
            }`}
          />
        </svg>
      </div>

      {isOpen && (
        <ul className={css.menu}>
          <li onClick={() => handleSelect('')}>Show all</li>
          {categories.map(cat => (
            <li key={cat} onClick={() => handleSelect(cat)}>
              {cat}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ByGenderField;
