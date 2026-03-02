import css from './Viewed.module.css';
import NoticesItem from '../NoticesItem/NoticesItem';
import NoticesList from '../NoticesList/NoticesList';
import { useSelector } from 'react-redux';
import {selectViewedIds} from "../../redux/viewedSelector";
import {selectNotices} from "../../redux/notices/noticesSelectors";
import { useDispatch } from 'react-redux';
import { clearViewed } from '../../redux/viewedSlice';
import { clearViewedStorage } from '../../utils/viewedStorage';


const Viewed = () => {

    const dispatch = useDispatch();

const handleClear = () => {
  clearViewedStorage();
  dispatch(clearViewed());
};

const viewedIds = useSelector(selectViewedIds);
const notices = useSelector(selectNotices);

const viewedNotices = notices?.filter(n =>
  viewedIds.includes(n._id)
) || [];


    return (<>
      {viewedNotices.length > 0 && (
      <>
<button className={css.clearBtn} onClick={handleClear}>Clear all</button>
      <NoticesList variant = 'viewed'>
                      {viewedNotices.map(item => (
        <NoticesItem key={item._id} notice={item} variant="viewed"/>
      ))}
                </NoticesList> 
                </>
      )}
    </>);
};

export default Viewed;