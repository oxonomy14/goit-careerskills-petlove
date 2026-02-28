import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ByGenderField.module.css';

import { fetchByGender } from '../../redux/notices/noticesOperations';
import { setGender } from '../../redux/notices/noticesSlice';

import {
  selectGender,
  selectSelectedGender,
} from '../../redux/notices/noticesSelectors';
import { useState } from 'react';

const ByGenderField = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const gender = useSelector(selectGender);
  const selectedGender = useSelector(selectSelectedGender);

  useEffect(() => {
    dispatch(fetchByGender());
  }, [dispatch]);


  const handleSelect = value => {
    dispatch(setGender(value));
    setIsOpen(false);
  };

  return (
    <div className={css.wrapper}>
      <div
        className={css.control}
        tabIndex={0}
        onClick={() => setIsOpen(prev => !prev)}
      >
        {selectedGender || 'By gender'}
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
          {gender.map(cat => (
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
