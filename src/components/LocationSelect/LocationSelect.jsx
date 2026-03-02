import css from './LocationSelect.module.css';
import Select, { components } from 'react-select';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchLocations } from '../../redux/notices/noticesOperations';
import { selectLocations } from '../../redux/notices/noticesSelectors';

/* --- 1️⃣ Кастомні індикатори --- */
const CustomIndicators = props => {
  const { clearValue, selectProps } = props;

  return (
    <components.IndicatorsContainer {...props}>
      {selectProps.inputValue && (
        <svg
          width="13"
          height="13"
           stroke="#262626"
        fill="none"
          style={{ cursor: 'pointer', marginRight: 8 }}
          onMouseDown={e => {
            e.preventDefault();
            clearValue();
          }}
        >
          <use href={`/icons/sprite.svg#icon-x`} />
        </svg>
      )}

      <svg
        width="18"
        height="18"
        stroke="#262626"
        fill="none"
        style={{ cursor: 'pointer', marginRight: 12 }}
        onMouseDown={e => {
          e.preventDefault();
          selectProps.onMenuOpen?.();
        }}
      >
        <use href={`/icons/sprite.svg#icon-search`} />
      </svg>
    </components.IndicatorsContainer>
  );
};

const LocationSelect = ({ value, onChange }) => {
  const dispatch = useDispatch();
  const locations = useSelector(selectLocations);

  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);

  const options = useMemo(() => {
    return locations.map(loc => ({
      value: loc._id,
      label: `${loc.cityEn}, ${loc.stateEn}`,
    }));
  }, [locations]);

  const selectedOption = options.find(option => option.value === value);

  const customStyles = {
    container: base => ({
      ...base,
      width: '100%',
    }),
    control: (base, state) => ({
      ...base,
      minHeight: 48,
      minWidth: 227,
      borderRadius: 30,
      border: state.isFocused ? '1px solid #F6B83D' : '1px solid transparent',
      boxShadow: 'none',
      paddingLeft: 14,
      backgroundColor: 'var(--bg-secondary-color)',
    }),
    menu: base => ({
      ...base,
      borderRadius: 15,
      padding: 14,
      backgroundColor: 'var(--bg-secondary-color)',
      boxShadow: 'none',
      marginTop: 4,
    }),

    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? 'var(--bg-secondary-color)' : 'transparent',
      color: 'var(--text-strong)',
      borderRadius: 12,
      padding: '10px 14px',
      cursor: 'pointer',
    }),

    indicatorSeparator: () => ({
      display: 'none',
    }),
    valueContainer: base => ({
      ...base,
      padding: '14px',
    }),

    input: base => ({
      ...base,
      margin: 0,
      padding: 0,
    }),
  };

  return (
    <Select

      options={options}
      value={selectedOption || null}
      onChange={option => onChange(option?.value || null)}
      isSearchable
      placeholder="Location"
      styles={customStyles}
      components={{
        IndicatorsContainer: CustomIndicators,
      }}
      noOptionsMessage={() => 'No locations found'}
    />
  );
};

export default LocationSelect;
