import SearchField from '../SearchField/SearchField';
import CategoryField from '../CategoryField/CategoryField';
import ByGenderField from '../ByGenderField/ByGenderField';
import ByTypeField from '../ByTypeField/ByTypeField';
import LocationSelect from '../LocationSelect/LocationSelect';

import SortbyNotices from '../SortbyNotices/SortbyNotices';
import css from './NoticesFilters.module.css';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';

import {
  setSortBy,
  setLocation,
  setPage,
} from '../../redux/notices/noticesSlice';

/* const NoticesFilters = ({ setPage, setKeyword }) => { */
const NoticesFilters = ({ setKeyword }) => {
  const dispatch = useDispatch();

  const sortBy = useSelector(state => state.noticesList.sortBy);

  return (
    <>
      <div className={css.filtersWrapper}>
        <div className={css.filters}>
          <div className={css.searchFieldWrapper}>
            <SearchField
              onSubmit={q => {
                dispatch(setPage(1));
                dispatch(setKeyword(q));
              }}
              onClear={() => {
                dispatch(setPage(1));
                dispatch(setKeyword(''));
              }}
              variant="noticesFilter"
            />
          </div>

          <div className={css.categoryFieldWrapper}>
            <CategoryField />
          </div>
          <div className={css.genderFieldWrapper}>
            <ByGenderField />
          </div>
          <div className={css.typeFieldWrapper}>
            <ByTypeField />
          </div>
          <div className={css.locationFieldWrapper}>
            <LocationSelect
              onChange={locationId => {
                dispatch(setLocation(locationId));
              }}
            />
          </div>
        </div>
        <div className={css.SortbyNoticesdWrapper}>
          <SortbyNotices
            value={sortBy}
            onChange={value => {
              dispatch(setSortBy(value));
              dispatch(setPage(1));
            }}
          />
        </div>
      </div>
    </>
  );
};

export default NoticesFilters;
