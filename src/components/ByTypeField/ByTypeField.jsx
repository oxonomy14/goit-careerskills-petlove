import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ByTypeField.module.css';

import { fetchByType } from '../../redux/notices/noticesOperations';
import { setSpecies } from '../../redux/notices/noticesSlice';

import {
  selectSpecies,
  selectSelectedSpecies,
} from '../../redux/notices/noticesSelectors';
import { useState } from 'react';

const ByTypeField = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const species = useSelector(selectSpecies);
  const selectedSpecies= useSelector(selectSelectedSpecies);

  useEffect(() => {
    dispatch(fetchByType());
  }, [dispatch]);


  const handleSelect = value => {
    dispatch(setSpecies(value));
    setIsOpen(false);
  };

  return (
    <div className={css.wrapper}>
      <div
        className={css.control}
        tabIndex={0}
        onClick={() => setIsOpen(prev => !prev)}
      >
        {selectedSpecies || 'By type'}
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
          {species.map(cat => (
            <li key={cat} onClick={() => handleSelect(cat)}>
              {cat}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ByTypeField;
